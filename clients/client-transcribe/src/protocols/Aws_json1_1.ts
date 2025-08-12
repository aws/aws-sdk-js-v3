// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
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
  DeleteMedicalScribeJobCommandInput,
  DeleteMedicalScribeJobCommandOutput,
} from "../commands/DeleteMedicalScribeJobCommand";
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
  GetMedicalScribeJobCommandInput,
  GetMedicalScribeJobCommandOutput,
} from "../commands/GetMedicalScribeJobCommand";
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
  ListMedicalScribeJobsCommandInput,
  ListMedicalScribeJobsCommandOutput,
} from "../commands/ListMedicalScribeJobsCommand";
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
  StartMedicalScribeJobCommandInput,
  StartMedicalScribeJobCommandOutput,
} from "../commands/StartMedicalScribeJobCommand";
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
  ClinicalNoteGenerationSettings,
  ConflictException,
  ContentRedaction,
  CreateCallAnalyticsCategoryRequest,
  CreateCallAnalyticsCategoryResponse,
  CreateLanguageModelRequest,
  CreateMedicalVocabularyRequest,
  CreateMedicalVocabularyResponse,
  CreateVocabularyFilterRequest,
  CreateVocabularyFilterResponse,
  CreateVocabularyRequest,
  CreateVocabularyResponse,
  DeleteCallAnalyticsCategoryRequest,
  DeleteCallAnalyticsJobRequest,
  DeleteLanguageModelRequest,
  DeleteMedicalScribeJobRequest,
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
  GetMedicalScribeJobRequest,
  GetMedicalScribeJobResponse,
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
  ListMedicalScribeJobsRequest,
  ListMedicalScribeJobsResponse,
  ListMedicalTranscriptionJobsRequest,
  ListMedicalTranscriptionJobsResponse,
  ListMedicalVocabulariesRequest,
  ListMedicalVocabulariesResponse,
  ListTagsForResourceRequest,
  ListTranscriptionJobsRequest,
  ListTranscriptionJobsResponse,
  ListVocabulariesRequest,
  ListVocabulariesResponse,
  ListVocabularyFiltersRequest,
  ListVocabularyFiltersResponse,
  Media,
  MedicalScribeChannelDefinition,
  MedicalScribeContext,
  MedicalScribeJob,
  MedicalScribeJobSummary,
  MedicalScribePatientContext,
  MedicalScribeSettings,
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
  StartMedicalScribeJobRequest,
  StartMedicalScribeJobResponse,
  StartMedicalTranscriptionJobRequest,
  StartMedicalTranscriptionJobResponse,
  StartTranscriptionJobRequest,
  StartTranscriptionJobResponse,
  SubtitleFormat,
  Subtitles,
  Summarization,
  Tag,
  TagResourceRequest,
  ToxicityCategory,
  ToxicityDetectionSettings,
  TranscriptFilter,
  TranscriptionJob,
  TranscriptionJobSummary,
  UntagResourceRequest,
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
  const headers: __HeaderBag = sharedHeaders("CreateCallAnalyticsCategory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateLanguageModelCommand
 */
export const se_CreateLanguageModelCommand = async (
  input: CreateLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateLanguageModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateMedicalVocabularyCommand
 */
export const se_CreateMedicalVocabularyCommand = async (
  input: CreateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateMedicalVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVocabularyCommand
 */
export const se_CreateVocabularyCommand = async (
  input: CreateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVocabularyFilterCommand
 */
export const se_CreateVocabularyFilterCommand = async (
  input: CreateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVocabularyFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCallAnalyticsCategoryCommand
 */
export const se_DeleteCallAnalyticsCategoryCommand = async (
  input: DeleteCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCallAnalyticsCategory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteCallAnalyticsJobCommand
 */
export const se_DeleteCallAnalyticsJobCommand = async (
  input: DeleteCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteCallAnalyticsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteLanguageModelCommand
 */
export const se_DeleteLanguageModelCommand = async (
  input: DeleteLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteLanguageModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMedicalScribeJobCommand
 */
export const se_DeleteMedicalScribeJobCommand = async (
  input: DeleteMedicalScribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMedicalScribeJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMedicalTranscriptionJobCommand
 */
export const se_DeleteMedicalTranscriptionJobCommand = async (
  input: DeleteMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMedicalTranscriptionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteMedicalVocabularyCommand
 */
export const se_DeleteMedicalVocabularyCommand = async (
  input: DeleteMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteMedicalVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteTranscriptionJobCommand
 */
export const se_DeleteTranscriptionJobCommand = async (
  input: DeleteTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTranscriptionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVocabularyCommand
 */
export const se_DeleteVocabularyCommand = async (
  input: DeleteVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVocabularyFilterCommand
 */
export const se_DeleteVocabularyFilterCommand = async (
  input: DeleteVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVocabularyFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeLanguageModelCommand
 */
export const se_DescribeLanguageModelCommand = async (
  input: DescribeLanguageModelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeLanguageModel");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCallAnalyticsCategoryCommand
 */
export const se_GetCallAnalyticsCategoryCommand = async (
  input: GetCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCallAnalyticsCategory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetCallAnalyticsJobCommand
 */
export const se_GetCallAnalyticsJobCommand = async (
  input: GetCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetCallAnalyticsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMedicalScribeJobCommand
 */
export const se_GetMedicalScribeJobCommand = async (
  input: GetMedicalScribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMedicalScribeJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMedicalTranscriptionJobCommand
 */
export const se_GetMedicalTranscriptionJobCommand = async (
  input: GetMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMedicalTranscriptionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetMedicalVocabularyCommand
 */
export const se_GetMedicalVocabularyCommand = async (
  input: GetMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetMedicalVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetTranscriptionJobCommand
 */
export const se_GetTranscriptionJobCommand = async (
  input: GetTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTranscriptionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVocabularyCommand
 */
export const se_GetVocabularyCommand = async (
  input: GetVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetVocabularyFilterCommand
 */
export const se_GetVocabularyFilterCommand = async (
  input: GetVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetVocabularyFilter");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCallAnalyticsCategoriesCommand
 */
export const se_ListCallAnalyticsCategoriesCommand = async (
  input: ListCallAnalyticsCategoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCallAnalyticsCategories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListCallAnalyticsJobsCommand
 */
export const se_ListCallAnalyticsJobsCommand = async (
  input: ListCallAnalyticsJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListCallAnalyticsJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListLanguageModelsCommand
 */
export const se_ListLanguageModelsCommand = async (
  input: ListLanguageModelsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListLanguageModels");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMedicalScribeJobsCommand
 */
export const se_ListMedicalScribeJobsCommand = async (
  input: ListMedicalScribeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMedicalScribeJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMedicalTranscriptionJobsCommand
 */
export const se_ListMedicalTranscriptionJobsCommand = async (
  input: ListMedicalTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMedicalTranscriptionJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListMedicalVocabulariesCommand
 */
export const se_ListMedicalVocabulariesCommand = async (
  input: ListMedicalVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListMedicalVocabularies");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1ListTranscriptionJobsCommand
 */
export const se_ListTranscriptionJobsCommand = async (
  input: ListTranscriptionJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTranscriptionJobs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVocabulariesCommand
 */
export const se_ListVocabulariesCommand = async (
  input: ListVocabulariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVocabularies");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListVocabularyFiltersCommand
 */
export const se_ListVocabularyFiltersCommand = async (
  input: ListVocabularyFiltersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVocabularyFilters");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartCallAnalyticsJobCommand
 */
export const se_StartCallAnalyticsJobCommand = async (
  input: StartCallAnalyticsJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartCallAnalyticsJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMedicalScribeJobCommand
 */
export const se_StartMedicalScribeJobCommand = async (
  input: StartMedicalScribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMedicalScribeJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartMedicalTranscriptionJobCommand
 */
export const se_StartMedicalTranscriptionJobCommand = async (
  input: StartMedicalTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartMedicalTranscriptionJob");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1StartTranscriptionJobCommand
 */
export const se_StartTranscriptionJobCommand = async (
  input: StartTranscriptionJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartTranscriptionJob");
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
 * serializeAws_json1_1UpdateCallAnalyticsCategoryCommand
 */
export const se_UpdateCallAnalyticsCategoryCommand = async (
  input: UpdateCallAnalyticsCategoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateCallAnalyticsCategory");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateMedicalVocabularyCommand
 */
export const se_UpdateMedicalVocabularyCommand = async (
  input: UpdateMedicalVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateMedicalVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVocabularyCommand
 */
export const se_UpdateVocabularyCommand = async (
  input: UpdateVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVocabulary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVocabularyFilterCommand
 */
export const se_UpdateVocabularyFilterCommand = async (
  input: UpdateVocabularyFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVocabularyFilter");
  let body: any;
  body = JSON.stringify(_json(input));
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
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateCallAnalyticsCategoryResponse(data, context);
  const response: CreateCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateLanguageModelCommand
 */
export const de_CreateLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateMedicalVocabularyCommand
 */
export const de_CreateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateMedicalVocabularyResponse(data, context);
  const response: CreateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVocabularyCommand
 */
export const de_CreateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVocabularyResponse(data, context);
  const response: CreateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVocabularyFilterCommand
 */
export const de_CreateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVocabularyFilterResponse(data, context);
  const response: CreateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCallAnalyticsCategoryCommand
 */
export const de_DeleteCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteCallAnalyticsJobCommand
 */
export const de_DeleteCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteLanguageModelCommand
 */
export const de_DeleteLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMedicalScribeJobCommand
 */
export const de_DeleteMedicalScribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalScribeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalScribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMedicalTranscriptionJobCommand
 */
export const de_DeleteMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteMedicalVocabularyCommand
 */
export const de_DeleteMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteTranscriptionJobCommand
 */
export const de_DeleteTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVocabularyCommand
 */
export const de_DeleteVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVocabularyFilterCommand
 */
export const de_DeleteVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: DeleteVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeLanguageModelCommand
 */
export const de_DescribeLanguageModelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeLanguageModelCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeLanguageModelResponse(data, context);
  const response: DescribeLanguageModelCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCallAnalyticsCategoryCommand
 */
export const de_GetCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCallAnalyticsCategoryResponse(data, context);
  const response: GetCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetCallAnalyticsJobCommand
 */
export const de_GetCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetCallAnalyticsJobResponse(data, context);
  const response: GetCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMedicalScribeJobCommand
 */
export const de_GetMedicalScribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalScribeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMedicalScribeJobResponse(data, context);
  const response: GetMedicalScribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMedicalTranscriptionJobCommand
 */
export const de_GetMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMedicalTranscriptionJobResponse(data, context);
  const response: GetMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetMedicalVocabularyCommand
 */
export const de_GetMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetMedicalVocabularyResponse(data, context);
  const response: GetMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetTranscriptionJobCommand
 */
export const de_GetTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTranscriptionJobResponse(data, context);
  const response: GetTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetVocabularyCommand
 */
export const de_GetVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVocabularyResponse(data, context);
  const response: GetVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1GetVocabularyFilterCommand
 */
export const de_GetVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetVocabularyFilterResponse(data, context);
  const response: GetVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCallAnalyticsCategoriesCommand
 */
export const de_ListCallAnalyticsCategoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsCategoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCallAnalyticsCategoriesResponse(data, context);
  const response: ListCallAnalyticsCategoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListCallAnalyticsJobsCommand
 */
export const de_ListCallAnalyticsJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCallAnalyticsJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListCallAnalyticsJobsResponse(data, context);
  const response: ListCallAnalyticsJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListLanguageModelsCommand
 */
export const de_ListLanguageModelsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLanguageModelsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListLanguageModelsResponse(data, context);
  const response: ListLanguageModelsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMedicalScribeJobsCommand
 */
export const de_ListMedicalScribeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalScribeJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMedicalScribeJobsResponse(data, context);
  const response: ListMedicalScribeJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMedicalTranscriptionJobsCommand
 */
export const de_ListMedicalTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMedicalTranscriptionJobsResponse(data, context);
  const response: ListMedicalTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListMedicalVocabulariesCommand
 */
export const de_ListMedicalVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMedicalVocabulariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListMedicalVocabulariesResponse(data, context);
  const response: ListMedicalVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1ListTranscriptionJobsCommand
 */
export const de_ListTranscriptionJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTranscriptionJobsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTranscriptionJobsResponse(data, context);
  const response: ListTranscriptionJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListVocabulariesCommand
 */
export const de_ListVocabulariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabulariesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVocabulariesResponse(data, context);
  const response: ListVocabulariesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListVocabularyFiltersCommand
 */
export const de_ListVocabularyFiltersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVocabularyFiltersCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVocabularyFiltersResponse(data, context);
  const response: ListVocabularyFiltersCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartCallAnalyticsJobCommand
 */
export const de_StartCallAnalyticsJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCallAnalyticsJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartCallAnalyticsJobResponse(data, context);
  const response: StartCallAnalyticsJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMedicalScribeJobCommand
 */
export const de_StartMedicalScribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalScribeJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMedicalScribeJobResponse(data, context);
  const response: StartMedicalScribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartMedicalTranscriptionJobCommand
 */
export const de_StartMedicalTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartMedicalTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartMedicalTranscriptionJobResponse(data, context);
  const response: StartMedicalTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1StartTranscriptionJobCommand
 */
export const de_StartTranscriptionJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTranscriptionJobCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_StartTranscriptionJobResponse(data, context);
  const response: StartTranscriptionJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_json1_1UpdateCallAnalyticsCategoryCommand
 */
export const de_UpdateCallAnalyticsCategoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCallAnalyticsCategoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateCallAnalyticsCategoryResponse(data, context);
  const response: UpdateCallAnalyticsCategoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateMedicalVocabularyCommand
 */
export const de_UpdateMedicalVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMedicalVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateMedicalVocabularyResponse(data, context);
  const response: UpdateMedicalVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVocabularyCommand
 */
export const de_UpdateVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVocabularyResponse(data, context);
  const response: UpdateVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVocabularyFilterCommand
 */
export const de_UpdateVocabularyFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVocabularyFilterCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVocabularyFilterResponse(data, context);
  const response: UpdateVocabularyFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserialize_Aws_json1_1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

/**
 * deserializeAws_json1_1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AbsoluteTimeRange omitted.

// se_CallAnalyticsJobSettings omitted.

// se_ChannelDefinition omitted.

// se_ChannelDefinitions omitted.

// se_ClinicalNoteGenerationSettings omitted.

// se_ContentRedaction omitted.

// se_CreateCallAnalyticsCategoryRequest omitted.

// se_CreateLanguageModelRequest omitted.

// se_CreateMedicalVocabularyRequest omitted.

// se_CreateVocabularyFilterRequest omitted.

// se_CreateVocabularyRequest omitted.

// se_DeleteCallAnalyticsCategoryRequest omitted.

// se_DeleteCallAnalyticsJobRequest omitted.

// se_DeleteLanguageModelRequest omitted.

// se_DeleteMedicalScribeJobRequest omitted.

// se_DeleteMedicalTranscriptionJobRequest omitted.

// se_DeleteMedicalVocabularyRequest omitted.

// se_DeleteTranscriptionJobRequest omitted.

// se_DeleteVocabularyFilterRequest omitted.

// se_DeleteVocabularyRequest omitted.

// se_DescribeLanguageModelRequest omitted.

// se_GetCallAnalyticsCategoryRequest omitted.

// se_GetCallAnalyticsJobRequest omitted.

// se_GetMedicalScribeJobRequest omitted.

// se_GetMedicalTranscriptionJobRequest omitted.

// se_GetMedicalVocabularyRequest omitted.

// se_GetTranscriptionJobRequest omitted.

// se_GetVocabularyFilterRequest omitted.

// se_GetVocabularyRequest omitted.

// se_InputDataConfig omitted.

// se_InterruptionFilter omitted.

// se_JobExecutionSettings omitted.

// se_KMSEncryptionContextMap omitted.

// se_LanguageIdSettings omitted.

// se_LanguageIdSettingsMap omitted.

// se_LanguageOptions omitted.

// se_ListCallAnalyticsCategoriesRequest omitted.

// se_ListCallAnalyticsJobsRequest omitted.

// se_ListLanguageModelsRequest omitted.

// se_ListMedicalScribeJobsRequest omitted.

// se_ListMedicalTranscriptionJobsRequest omitted.

// se_ListMedicalVocabulariesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListTranscriptionJobsRequest omitted.

// se_ListVocabulariesRequest omitted.

// se_ListVocabularyFiltersRequest omitted.

// se_Media omitted.

// se_MedicalScribeChannelDefinition omitted.

// se_MedicalScribeChannelDefinitions omitted.

// se_MedicalScribeContext omitted.

// se_MedicalScribePatientContext omitted.

// se_MedicalScribeSettings omitted.

// se_MedicalTranscriptionSetting omitted.

// se_ModelSettings omitted.

// se_NonTalkTimeFilter omitted.

// se_Phrases omitted.

// se_PiiEntityTypes omitted.

// se_RelativeTimeRange omitted.

// se_Rule omitted.

// se_RuleList omitted.

// se_SentimentFilter omitted.

// se_SentimentValueList omitted.

// se_Settings omitted.

// se_StartCallAnalyticsJobRequest omitted.

// se_StartMedicalScribeJobRequest omitted.

// se_StartMedicalTranscriptionJobRequest omitted.

// se_StartTranscriptionJobRequest omitted.

// se_StringTargetList omitted.

// se_SubtitleFormats omitted.

// se_Subtitles omitted.

// se_Summarization omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_ToxicityCategories omitted.

// se_ToxicityDetection omitted.

// se_ToxicityDetectionSettings omitted.

// se_TranscriptFilter omitted.

// se_UntagResourceRequest omitted.

// se_UpdateCallAnalyticsCategoryRequest omitted.

// se_UpdateMedicalVocabularyRequest omitted.

// se_UpdateVocabularyFilterRequest omitted.

// se_UpdateVocabularyRequest omitted.

// se_Words omitted.

// de_AbsoluteTimeRange omitted.

// de_BadRequestException omitted.

/**
 * deserializeAws_json1_1CallAnalyticsJob
 */
const de_CallAnalyticsJob = (output: any, context: __SerdeContext): CallAnalyticsJob => {
  return take(output, {
    CallAnalyticsJobDetails: _json,
    CallAnalyticsJobName: __expectString,
    CallAnalyticsJobStatus: __expectString,
    ChannelDefinitions: _json,
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataAccessRoleArn: __expectString,
    FailureReason: __expectString,
    IdentifiedLanguageScore: __limitedParseFloat32,
    LanguageCode: __expectString,
    Media: _json,
    MediaFormat: __expectString,
    MediaSampleRateHertz: __expectInt32,
    Settings: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
    Transcript: _json,
  }) as any;
};

// de_CallAnalyticsJobDetails omitted.

// de_CallAnalyticsJobSettings omitted.

/**
 * deserializeAws_json1_1CallAnalyticsJobSummaries
 */
const de_CallAnalyticsJobSummaries = (output: any, context: __SerdeContext): CallAnalyticsJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CallAnalyticsJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1CallAnalyticsJobSummary
 */
const de_CallAnalyticsJobSummary = (output: any, context: __SerdeContext): CallAnalyticsJobSummary => {
  return take(output, {
    CallAnalyticsJobDetails: _json,
    CallAnalyticsJobName: __expectString,
    CallAnalyticsJobStatus: __expectString,
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LanguageCode: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_CallAnalyticsSkippedFeature omitted.

// de_CallAnalyticsSkippedFeatureList omitted.

/**
 * deserializeAws_json1_1CategoryProperties
 */
const de_CategoryProperties = (output: any, context: __SerdeContext): CategoryProperties => {
  return take(output, {
    CategoryName: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InputType: __expectString,
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Rules: _json,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1CategoryPropertiesList
 */
const de_CategoryPropertiesList = (output: any, context: __SerdeContext): CategoryProperties[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CategoryProperties(entry, context);
    });
  return retVal;
};

// de_ChannelDefinition omitted.

// de_ChannelDefinitions omitted.

// de_ClinicalNoteGenerationSettings omitted.

// de_ConflictException omitted.

// de_ContentRedaction omitted.

/**
 * deserializeAws_json1_1CreateCallAnalyticsCategoryResponse
 */
const de_CreateCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): CreateCallAnalyticsCategoryResponse => {
  return take(output, {
    CategoryProperties: (_: any) => de_CategoryProperties(_, context),
  }) as any;
};

// de_CreateLanguageModelResponse omitted.

/**
 * deserializeAws_json1_1CreateMedicalVocabularyResponse
 */
const de_CreateMedicalVocabularyResponse = (output: any, context: __SerdeContext): CreateMedicalVocabularyResponse => {
  return take(output, {
    FailureReason: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateVocabularyFilterResponse
 */
const de_CreateVocabularyFilterResponse = (output: any, context: __SerdeContext): CreateVocabularyFilterResponse => {
  return take(output, {
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyFilterName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1CreateVocabularyResponse
 */
const de_CreateVocabularyResponse = (output: any, context: __SerdeContext): CreateVocabularyResponse => {
  return take(output, {
    FailureReason: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
  }) as any;
};

// de_DeleteCallAnalyticsCategoryResponse omitted.

// de_DeleteCallAnalyticsJobResponse omitted.

/**
 * deserializeAws_json1_1DescribeLanguageModelResponse
 */
const de_DescribeLanguageModelResponse = (output: any, context: __SerdeContext): DescribeLanguageModelResponse => {
  return take(output, {
    LanguageModel: (_: any) => de_LanguageModel(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetCallAnalyticsCategoryResponse
 */
const de_GetCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): GetCallAnalyticsCategoryResponse => {
  return take(output, {
    CategoryProperties: (_: any) => de_CategoryProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetCallAnalyticsJobResponse
 */
const de_GetCallAnalyticsJobResponse = (output: any, context: __SerdeContext): GetCallAnalyticsJobResponse => {
  return take(output, {
    CallAnalyticsJob: (_: any) => de_CallAnalyticsJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetMedicalScribeJobResponse
 */
const de_GetMedicalScribeJobResponse = (output: any, context: __SerdeContext): GetMedicalScribeJobResponse => {
  return take(output, {
    MedicalScribeJob: (_: any) => de_MedicalScribeJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetMedicalTranscriptionJobResponse
 */
const de_GetMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): GetMedicalTranscriptionJobResponse => {
  return take(output, {
    MedicalTranscriptionJob: (_: any) => de_MedicalTranscriptionJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetMedicalVocabularyResponse
 */
const de_GetMedicalVocabularyResponse = (output: any, context: __SerdeContext): GetMedicalVocabularyResponse => {
  return take(output, {
    DownloadUri: __expectString,
    FailureReason: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetTranscriptionJobResponse
 */
const de_GetTranscriptionJobResponse = (output: any, context: __SerdeContext): GetTranscriptionJobResponse => {
  return take(output, {
    TranscriptionJob: (_: any) => de_TranscriptionJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetVocabularyFilterResponse
 */
const de_GetVocabularyFilterResponse = (output: any, context: __SerdeContext): GetVocabularyFilterResponse => {
  return take(output, {
    DownloadUri: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyFilterName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1GetVocabularyResponse
 */
const de_GetVocabularyResponse = (output: any, context: __SerdeContext): GetVocabularyResponse => {
  return take(output, {
    DownloadUri: __expectString,
    FailureReason: __expectString,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
  }) as any;
};

// de_InputDataConfig omitted.

// de_InternalFailureException omitted.

// de_InterruptionFilter omitted.

// de_JobExecutionSettings omitted.

/**
 * deserializeAws_json1_1LanguageCodeItem
 */
const de_LanguageCodeItem = (output: any, context: __SerdeContext): LanguageCodeItem => {
  return take(output, {
    DurationInSeconds: __limitedParseFloat32,
    LanguageCode: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1LanguageCodeList
 */
const de_LanguageCodeList = (output: any, context: __SerdeContext): LanguageCodeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LanguageCodeItem(entry, context);
    });
  return retVal;
};

// de_LanguageIdSettings omitted.

// de_LanguageIdSettingsMap omitted.

/**
 * deserializeAws_json1_1LanguageModel
 */
const de_LanguageModel = (output: any, context: __SerdeContext): LanguageModel => {
  return take(output, {
    BaseModelName: __expectString,
    CreateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    InputDataConfig: _json,
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ModelName: __expectString,
    ModelStatus: __expectString,
    UpgradeAvailability: __expectBoolean,
  }) as any;
};

// de_LanguageOptions omitted.

// de_LimitExceededException omitted.

/**
 * deserializeAws_json1_1ListCallAnalyticsCategoriesResponse
 */
const de_ListCallAnalyticsCategoriesResponse = (
  output: any,
  context: __SerdeContext
): ListCallAnalyticsCategoriesResponse => {
  return take(output, {
    Categories: (_: any) => de_CategoryPropertiesList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListCallAnalyticsJobsResponse
 */
const de_ListCallAnalyticsJobsResponse = (output: any, context: __SerdeContext): ListCallAnalyticsJobsResponse => {
  return take(output, {
    CallAnalyticsJobSummaries: (_: any) => de_CallAnalyticsJobSummaries(_, context),
    NextToken: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListLanguageModelsResponse
 */
const de_ListLanguageModelsResponse = (output: any, context: __SerdeContext): ListLanguageModelsResponse => {
  return take(output, {
    Models: (_: any) => de_Models(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMedicalScribeJobsResponse
 */
const de_ListMedicalScribeJobsResponse = (output: any, context: __SerdeContext): ListMedicalScribeJobsResponse => {
  return take(output, {
    MedicalScribeJobSummaries: (_: any) => de_MedicalScribeJobSummaries(_, context),
    NextToken: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMedicalTranscriptionJobsResponse
 */
const de_ListMedicalTranscriptionJobsResponse = (
  output: any,
  context: __SerdeContext
): ListMedicalTranscriptionJobsResponse => {
  return take(output, {
    MedicalTranscriptionJobSummaries: (_: any) => de_MedicalTranscriptionJobSummaries(_, context),
    NextToken: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1ListMedicalVocabulariesResponse
 */
const de_ListMedicalVocabulariesResponse = (output: any, context: __SerdeContext): ListMedicalVocabulariesResponse => {
  return take(output, {
    NextToken: __expectString,
    Status: __expectString,
    Vocabularies: (_: any) => de_Vocabularies(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1ListTranscriptionJobsResponse
 */
const de_ListTranscriptionJobsResponse = (output: any, context: __SerdeContext): ListTranscriptionJobsResponse => {
  return take(output, {
    NextToken: __expectString,
    Status: __expectString,
    TranscriptionJobSummaries: (_: any) => de_TranscriptionJobSummaries(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListVocabulariesResponse
 */
const de_ListVocabulariesResponse = (output: any, context: __SerdeContext): ListVocabulariesResponse => {
  return take(output, {
    NextToken: __expectString,
    Status: __expectString,
    Vocabularies: (_: any) => de_Vocabularies(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1ListVocabularyFiltersResponse
 */
const de_ListVocabularyFiltersResponse = (output: any, context: __SerdeContext): ListVocabularyFiltersResponse => {
  return take(output, {
    NextToken: __expectString,
    VocabularyFilters: (_: any) => de_VocabularyFilters(_, context),
  }) as any;
};

// de_Media omitted.

// de_MedicalScribeChannelDefinition omitted.

// de_MedicalScribeChannelDefinitions omitted.

/**
 * deserializeAws_json1_1MedicalScribeJob
 */
const de_MedicalScribeJob = (output: any, context: __SerdeContext): MedicalScribeJob => {
  return take(output, {
    ChannelDefinitions: _json,
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataAccessRoleArn: __expectString,
    FailureReason: __expectString,
    LanguageCode: __expectString,
    Media: _json,
    MedicalScribeContextProvided: __expectBoolean,
    MedicalScribeJobName: __expectString,
    MedicalScribeJobStatus: __expectString,
    MedicalScribeOutput: _json,
    Settings: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_json1_1MedicalScribeJobSummaries
 */
const de_MedicalScribeJobSummaries = (output: any, context: __SerdeContext): MedicalScribeJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_MedicalScribeJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MedicalScribeJobSummary
 */
const de_MedicalScribeJobSummary = (output: any, context: __SerdeContext): MedicalScribeJobSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LanguageCode: __expectString,
    MedicalScribeJobName: __expectString,
    MedicalScribeJobStatus: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_MedicalScribeOutput omitted.

// de_MedicalScribeSettings omitted.

// de_MedicalTranscript omitted.

/**
 * deserializeAws_json1_1MedicalTranscriptionJob
 */
const de_MedicalTranscriptionJob = (output: any, context: __SerdeContext): MedicalTranscriptionJob => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContentIdentificationType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LanguageCode: __expectString,
    Media: _json,
    MediaFormat: __expectString,
    MediaSampleRateHertz: __expectInt32,
    MedicalTranscriptionJobName: __expectString,
    Settings: _json,
    Specialty: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Tags: _json,
    Transcript: _json,
    TranscriptionJobStatus: __expectString,
    Type: __expectString,
  }) as any;
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
      return de_MedicalTranscriptionJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1MedicalTranscriptionJobSummary
 */
const de_MedicalTranscriptionJobSummary = (output: any, context: __SerdeContext): MedicalTranscriptionJobSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContentIdentificationType: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    LanguageCode: __expectString,
    MedicalTranscriptionJobName: __expectString,
    OutputLocationType: __expectString,
    Specialty: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TranscriptionJobStatus: __expectString,
    Type: __expectString,
  }) as any;
};

// de_MedicalTranscriptionSetting omitted.

/**
 * deserializeAws_json1_1Models
 */
const de_Models = (output: any, context: __SerdeContext): LanguageModel[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LanguageModel(entry, context);
    });
  return retVal;
};

// de_ModelSettings omitted.

// de_NonTalkTimeFilter omitted.

// de_NotFoundException omitted.

// de_PiiEntityTypes omitted.

// de_RelativeTimeRange omitted.

// de_Rule omitted.

// de_RuleList omitted.

// de_SentimentFilter omitted.

// de_SentimentValueList omitted.

// de_Settings omitted.

/**
 * deserializeAws_json1_1StartCallAnalyticsJobResponse
 */
const de_StartCallAnalyticsJobResponse = (output: any, context: __SerdeContext): StartCallAnalyticsJobResponse => {
  return take(output, {
    CallAnalyticsJob: (_: any) => de_CallAnalyticsJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartMedicalScribeJobResponse
 */
const de_StartMedicalScribeJobResponse = (output: any, context: __SerdeContext): StartMedicalScribeJobResponse => {
  return take(output, {
    MedicalScribeJob: (_: any) => de_MedicalScribeJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartMedicalTranscriptionJobResponse
 */
const de_StartMedicalTranscriptionJobResponse = (
  output: any,
  context: __SerdeContext
): StartMedicalTranscriptionJobResponse => {
  return take(output, {
    MedicalTranscriptionJob: (_: any) => de_MedicalTranscriptionJob(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1StartTranscriptionJobResponse
 */
const de_StartTranscriptionJobResponse = (output: any, context: __SerdeContext): StartTranscriptionJobResponse => {
  return take(output, {
    TranscriptionJob: (_: any) => de_TranscriptionJob(_, context),
  }) as any;
};

// de_StringTargetList omitted.

// de_SubtitleFileUris omitted.

// de_SubtitleFormats omitted.

// de_SubtitlesOutput omitted.

// de_Summarization omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_ToxicityCategories omitted.

// de_ToxicityDetection omitted.

// de_ToxicityDetectionSettings omitted.

// de_Transcript omitted.

// de_TranscriptFilter omitted.

/**
 * deserializeAws_json1_1TranscriptionJob
 */
const de_TranscriptionJob = (output: any, context: __SerdeContext): TranscriptionJob => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContentRedaction: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    IdentifiedLanguageScore: __limitedParseFloat32,
    IdentifyLanguage: __expectBoolean,
    IdentifyMultipleLanguages: __expectBoolean,
    JobExecutionSettings: _json,
    LanguageCode: __expectString,
    LanguageCodes: (_: any) => de_LanguageCodeList(_, context),
    LanguageIdSettings: _json,
    LanguageOptions: _json,
    Media: _json,
    MediaFormat: __expectString,
    MediaSampleRateHertz: __expectInt32,
    ModelSettings: _json,
    Settings: _json,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Subtitles: _json,
    Tags: _json,
    ToxicityDetection: _json,
    Transcript: _json,
    TranscriptionJobName: __expectString,
    TranscriptionJobStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1TranscriptionJobSummaries
 */
const de_TranscriptionJobSummaries = (output: any, context: __SerdeContext): TranscriptionJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TranscriptionJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TranscriptionJobSummary
 */
const de_TranscriptionJobSummary = (output: any, context: __SerdeContext): TranscriptionJobSummary => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ContentRedaction: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureReason: __expectString,
    IdentifiedLanguageScore: __limitedParseFloat32,
    IdentifyLanguage: __expectBoolean,
    IdentifyMultipleLanguages: __expectBoolean,
    LanguageCode: __expectString,
    LanguageCodes: (_: any) => de_LanguageCodeList(_, context),
    ModelSettings: _json,
    OutputLocationType: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ToxicityDetection: _json,
    TranscriptionJobName: __expectString,
    TranscriptionJobStatus: __expectString,
  }) as any;
};

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateCallAnalyticsCategoryResponse
 */
const de_UpdateCallAnalyticsCategoryResponse = (
  output: any,
  context: __SerdeContext
): UpdateCallAnalyticsCategoryResponse => {
  return take(output, {
    CategoryProperties: (_: any) => de_CategoryProperties(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateMedicalVocabularyResponse
 */
const de_UpdateMedicalVocabularyResponse = (output: any, context: __SerdeContext): UpdateMedicalVocabularyResponse => {
  return take(output, {
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateVocabularyFilterResponse
 */
const de_UpdateVocabularyFilterResponse = (output: any, context: __SerdeContext): UpdateVocabularyFilterResponse => {
  return take(output, {
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyFilterName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateVocabularyResponse
 */
const de_UpdateVocabularyResponse = (output: any, context: __SerdeContext): UpdateVocabularyResponse => {
  return take(output, {
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Vocabularies
 */
const de_Vocabularies = (output: any, context: __SerdeContext): VocabularyInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VocabularyInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VocabularyFilterInfo
 */
const de_VocabularyFilterInfo = (output: any, context: __SerdeContext): VocabularyFilterInfo => {
  return take(output, {
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyFilterName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1VocabularyFilters
 */
const de_VocabularyFilters = (output: any, context: __SerdeContext): VocabularyFilterInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VocabularyFilterInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1VocabularyInfo
 */
const de_VocabularyInfo = (output: any, context: __SerdeContext): VocabularyInfo => {
  return take(output, {
    LanguageCode: __expectString,
    LastModifiedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VocabularyName: __expectString,
    VocabularyState: __expectString,
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
    "x-amz-target": `Transcribe.${operation}`,
  };
}
