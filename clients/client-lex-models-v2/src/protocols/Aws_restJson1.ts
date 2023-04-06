// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  BatchCreateCustomVocabularyItemCommandInput,
  BatchCreateCustomVocabularyItemCommandOutput,
} from "../commands/BatchCreateCustomVocabularyItemCommand";
import {
  BatchDeleteCustomVocabularyItemCommandInput,
  BatchDeleteCustomVocabularyItemCommandOutput,
} from "../commands/BatchDeleteCustomVocabularyItemCommand";
import {
  BatchUpdateCustomVocabularyItemCommandInput,
  BatchUpdateCustomVocabularyItemCommandOutput,
} from "../commands/BatchUpdateCustomVocabularyItemCommand";
import { BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput } from "../commands/BuildBotLocaleCommand";
import { CreateBotAliasCommandInput, CreateBotAliasCommandOutput } from "../commands/CreateBotAliasCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "../commands/CreateBotCommand";
import { CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput } from "../commands/CreateBotLocaleCommand";
import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "../commands/CreateBotVersionCommand";
import { CreateExportCommandInput, CreateExportCommandOutput } from "../commands/CreateExportCommand";
import { CreateIntentCommandInput, CreateIntentCommandOutput } from "../commands/CreateIntentCommand";
import {
  CreateResourcePolicyCommandInput,
  CreateResourcePolicyCommandOutput,
} from "../commands/CreateResourcePolicyCommand";
import {
  CreateResourcePolicyStatementCommandInput,
  CreateResourcePolicyStatementCommandOutput,
} from "../commands/CreateResourcePolicyStatementCommand";
import { CreateSlotCommandInput, CreateSlotCommandOutput } from "../commands/CreateSlotCommand";
import { CreateSlotTypeCommandInput, CreateSlotTypeCommandOutput } from "../commands/CreateSlotTypeCommand";
import { CreateUploadUrlCommandInput, CreateUploadUrlCommandOutput } from "../commands/CreateUploadUrlCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "../commands/DeleteBotAliasCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "../commands/DeleteBotCommand";
import { DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput } from "../commands/DeleteBotLocaleCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "../commands/DeleteBotVersionCommand";
import {
  DeleteCustomVocabularyCommandInput,
  DeleteCustomVocabularyCommandOutput,
} from "../commands/DeleteCustomVocabularyCommand";
import { DeleteExportCommandInput, DeleteExportCommandOutput } from "../commands/DeleteExportCommand";
import { DeleteImportCommandInput, DeleteImportCommandOutput } from "../commands/DeleteImportCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "../commands/DeleteIntentCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "../commands/DeleteResourcePolicyCommand";
import {
  DeleteResourcePolicyStatementCommandInput,
  DeleteResourcePolicyStatementCommandOutput,
} from "../commands/DeleteResourcePolicyStatementCommand";
import { DeleteSlotCommandInput, DeleteSlotCommandOutput } from "../commands/DeleteSlotCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "../commands/DeleteSlotTypeCommand";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "../commands/DeleteUtterancesCommand";
import { DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput } from "../commands/DescribeBotAliasCommand";
import { DescribeBotCommandInput, DescribeBotCommandOutput } from "../commands/DescribeBotCommand";
import { DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput } from "../commands/DescribeBotLocaleCommand";
import {
  DescribeBotRecommendationCommandInput,
  DescribeBotRecommendationCommandOutput,
} from "../commands/DescribeBotRecommendationCommand";
import { DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput } from "../commands/DescribeBotVersionCommand";
import {
  DescribeCustomVocabularyMetadataCommandInput,
  DescribeCustomVocabularyMetadataCommandOutput,
} from "../commands/DescribeCustomVocabularyMetadataCommand";
import { DescribeExportCommandInput, DescribeExportCommandOutput } from "../commands/DescribeExportCommand";
import { DescribeImportCommandInput, DescribeImportCommandOutput } from "../commands/DescribeImportCommand";
import { DescribeIntentCommandInput, DescribeIntentCommandOutput } from "../commands/DescribeIntentCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "../commands/DescribeResourcePolicyCommand";
import { DescribeSlotCommandInput, DescribeSlotCommandOutput } from "../commands/DescribeSlotCommand";
import { DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput } from "../commands/DescribeSlotTypeCommand";
import {
  ListAggregatedUtterancesCommandInput,
  ListAggregatedUtterancesCommandOutput,
} from "../commands/ListAggregatedUtterancesCommand";
import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "../commands/ListBotAliasesCommand";
import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "../commands/ListBotLocalesCommand";
import {
  ListBotRecommendationsCommandInput,
  ListBotRecommendationsCommandOutput,
} from "../commands/ListBotRecommendationsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ListBotVersionsCommandInput, ListBotVersionsCommandOutput } from "../commands/ListBotVersionsCommand";
import { ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput } from "../commands/ListBuiltInIntentsCommand";
import {
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "../commands/ListBuiltInSlotTypesCommand";
import {
  ListCustomVocabularyItemsCommandInput,
  ListCustomVocabularyItemsCommandOutput,
} from "../commands/ListCustomVocabularyItemsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "../commands/ListIntentsCommand";
import {
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "../commands/ListRecommendedIntentsCommand";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "../commands/ListSlotsCommand";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "../commands/ListSlotTypesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
} from "../commands/SearchAssociatedTranscriptsCommand";
import {
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
} from "../commands/StartBotRecommendationCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import {
  StopBotRecommendationCommandInput,
  StopBotRecommendationCommandOutput,
} from "../commands/StopBotRecommendationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput } from "../commands/UpdateBotAliasCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "../commands/UpdateBotCommand";
import { UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput } from "../commands/UpdateBotLocaleCommand";
import {
  UpdateBotRecommendationCommandInput,
  UpdateBotRecommendationCommandOutput,
} from "../commands/UpdateBotRecommendationCommand";
import { UpdateExportCommandInput, UpdateExportCommandOutput } from "../commands/UpdateExportCommand";
import { UpdateIntentCommandInput, UpdateIntentCommandOutput } from "../commands/UpdateIntentCommand";
import {
  UpdateResourcePolicyCommandInput,
  UpdateResourcePolicyCommandOutput,
} from "../commands/UpdateResourcePolicyCommand";
import { UpdateSlotCommandInput, UpdateSlotCommandOutput } from "../commands/UpdateSlotCommand";
import { UpdateSlotTypeCommandInput, UpdateSlotTypeCommandOutput } from "../commands/UpdateSlotTypeCommand";
import { LexModelsV2ServiceException as __BaseException } from "../models/LexModelsV2ServiceException";
import {
  AdvancedRecognitionSetting,
  AggregatedUtterancesFilter,
  AggregatedUtterancesSortBy,
  AggregatedUtterancesSummary,
  AllowedInputTypes,
  AssociatedTranscript,
  AssociatedTranscriptFilter,
  AudioAndDTMFInputSpecification,
  AudioLogDestination,
  AudioLogSetting,
  AudioSpecification,
  BotAliasHistoryEvent,
  BotAliasLocaleSettings,
  BotAliasSummary,
  BotExportSpecification,
  BotFilter,
  BotImportSpecification,
  BotLocaleExportSpecification,
  BotLocaleFilter,
  BotLocaleHistoryEvent,
  BotLocaleImportSpecification,
  BotLocaleSortBy,
  BotLocaleSummary,
  BotMember,
  BotRecommendationResults,
  BotRecommendationResultStatistics,
  BotRecommendationSummary,
  BotSortBy,
  BotSummary,
  BotVersionLocaleDetails,
  BotVersionSortBy,
  BotVersionSummary,
  BuiltInIntentSortBy,
  BuiltInIntentSummary,
  BuiltInSlotTypeSortBy,
  BuiltInSlotTypeSummary,
  Button,
  CloudWatchLogGroupLogDestination,
  CodeHookSpecification,
  CompositeSlotTypeSetting,
  Condition,
  ConflictException,
  ConversationLogSettings,
  CustomPayload,
  CustomVocabularyEntryId,
  CustomVocabularyExportSpecification,
  CustomVocabularyImportSpecification,
  CustomVocabularyItem,
  DataPrivacy,
  DateRangeFilter,
  DialogAction,
  DialogCodeHookSettings,
  DTMFSpecification,
  ElicitationCodeHookInvocationSetting,
  EncryptionSetting,
  ExportFilter,
  ExportResourceSpecification,
  ExportSortBy,
  ExportSummary,
  ExternalSourceSetting,
  FailedCustomVocabularyItem,
  FulfillmentStartResponseSpecification,
  FulfillmentUpdateResponseSpecification,
  FulfillmentUpdatesSpecification,
  GrammarSlotTypeSetting,
  GrammarSlotTypeSource,
  ImageResponseCard,
  ImportFilter,
  ImportResourceSpecification,
  ImportSortBy,
  ImportSummary,
  InputContext,
  IntentFilter,
  IntentSortBy,
  IntentStatistics,
  IntentSummary,
  InternalServerException,
  KendraConfiguration,
  LambdaCodeHook,
  LexTranscriptFilter,
  Message,
  MessageGroup,
  MultipleValuesSetting,
  NewCustomVocabularyItem,
  ObfuscationSetting,
  OutputContext,
  ParentBotNetwork,
  PathFormat,
  PlainTextMessage,
  PreconditionFailedException,
  Principal,
  PromptAttempt,
  PromptAttemptSpecification,
  PromptSpecification,
  RecommendedIntentSummary,
  RelativeAggregationDuration,
  ResourceNotFoundException,
  ResponseSpecification,
  S3BucketLogDestination,
  S3BucketTranscriptSource,
  SampleUtterance,
  SampleValue,
  SentimentAnalysisSettings,
  ServiceQuotaExceededException,
  SlotDefaultValue,
  SlotDefaultValueSpecification,
  SlotFilter,
  SlotPriority,
  SlotSortBy,
  SlotSummary,
  SlotTypeFilter,
  SlotTypeSortBy,
  SlotTypeStatistics,
  SlotTypeSummary,
  SlotTypeValue,
  SlotValue,
  SlotValueRegexFilter,
  SlotValueSelectionSetting,
  Specifications,
  SSMLMessage,
  StillWaitingResponseSpecification,
  SubSlotSetting,
  SubSlotTypeComposition,
  SubSlotValueElicitationSetting,
  TextInputSpecification,
  TextLogDestination,
  TextLogSetting,
  ThrottlingException,
  TranscriptFilter,
  TranscriptSourceSetting,
  UtteranceAggregationDuration,
  ValidationException,
  VoiceSettings,
  WaitAndContinueSpecification,
} from "../models/models_0";
import {
  ConditionalBranch,
  ConditionalSpecification,
  DefaultConditionalBranch,
  DialogCodeHookInvocationSetting,
  DialogState,
  FulfillmentCodeHookSettings,
  InitialResponseSetting,
  IntentClosingSetting,
  IntentConfirmationSetting,
  IntentOverride,
  PostDialogCodeHookInvocationSpecification,
  PostFulfillmentStatusSpecification,
  SlotCaptureSetting,
  SlotValueElicitationSetting,
  SlotValueOverride,
} from "../models/models_1";

/**
 * serializeAws_restJson1BatchCreateCustomVocabularyItemCommand
 */
export const se_BatchCreateCustomVocabularyItemCommand = async (
  input: BatchCreateCustomVocabularyItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchcreate";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.customVocabularyItemList != null && {
      customVocabularyItemList: se_CreateCustomVocabularyItemsList(input.customVocabularyItemList, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDeleteCustomVocabularyItemCommand
 */
export const se_BatchDeleteCustomVocabularyItemCommand = async (
  input: BatchDeleteCustomVocabularyItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchdelete";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.customVocabularyItemList != null && {
      customVocabularyItemList: se_DeleteCustomVocabularyItemsList(input.customVocabularyItemList, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchUpdateCustomVocabularyItemCommand
 */
export const se_BatchUpdateCustomVocabularyItemCommand = async (
  input: BatchUpdateCustomVocabularyItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/batchupdate";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.customVocabularyItemList != null && {
      customVocabularyItemList: se_UpdateCustomVocabularyItemsList(input.customVocabularyItemList, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BuildBotLocaleCommand
 */
export const se_BuildBotLocaleCommand = async (
  input: BuildBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBotCommand
 */
export const se_CreateBotCommand = async (
  input: CreateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots";
  let body: any;
  body = JSON.stringify({
    ...(input.botMembers != null && { botMembers: se_BotMembers(input.botMembers, context) }),
    ...(input.botName != null && { botName: input.botName }),
    ...(input.botTags != null && { botTags: se_TagMap(input.botTags, context) }),
    ...(input.botType != null && { botType: input.botType }),
    ...(input.dataPrivacy != null && { dataPrivacy: se_DataPrivacy(input.dataPrivacy, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.idleSessionTTLInSeconds != null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags != null && { testBotAliasTags: se_TagMap(input.testBotAliasTags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBotAliasCommand
 */
export const se_CreateBotAliasCommand = async (
  input: CreateBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botaliases";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.botAliasLocaleSettings != null && {
      botAliasLocaleSettings: se_BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
    }),
    ...(input.botAliasName != null && { botAliasName: input.botAliasName }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings != null && {
      conversationLogSettings: se_ConversationLogSettings(input.conversationLogSettings, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.sentimentAnalysisSettings != null && {
      sentimentAnalysisSettings: se_SentimentAnalysisSettings(input.sentimentAnalysisSettings, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBotLocaleCommand
 */
export const se_CreateBotLocaleCommand = async (
  input: CreateBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.nluIntentConfidenceThreshold != null && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != null && { voiceSettings: se_VoiceSettings(input.voiceSettings, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBotVersionCommand
 */
export const se_CreateBotVersionCommand = async (
  input: CreateBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botversions";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.botVersionLocaleSpecification != null && {
      botVersionLocaleSpecification: se_BotVersionLocaleSpecification(input.botVersionLocaleSpecification, context),
    }),
    ...(input.description != null && { description: input.description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateExportCommand
 */
export const se_CreateExportCommand = async (
  input: CreateExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/exports";
  let body: any;
  body = JSON.stringify({
    ...(input.fileFormat != null && { fileFormat: input.fileFormat }),
    ...(input.filePassword != null && { filePassword: input.filePassword }),
    ...(input.resourceSpecification != null && {
      resourceSpecification: se_ExportResourceSpecification(input.resourceSpecification, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateIntentCommand
 */
export const se_CreateIntentCommand = async (
  input: CreateIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.dialogCodeHook != null && { dialogCodeHook: se_DialogCodeHookSettings(input.dialogCodeHook, context) }),
    ...(input.fulfillmentCodeHook != null && {
      fulfillmentCodeHook: se_FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
    }),
    ...(input.initialResponseSetting != null && {
      initialResponseSetting: se_InitialResponseSetting(input.initialResponseSetting, context),
    }),
    ...(input.inputContexts != null && { inputContexts: se_InputContextsList(input.inputContexts, context) }),
    ...(input.intentClosingSetting != null && {
      intentClosingSetting: se_IntentClosingSetting(input.intentClosingSetting, context),
    }),
    ...(input.intentConfirmationSetting != null && {
      intentConfirmationSetting: se_IntentConfirmationSetting(input.intentConfirmationSetting, context),
    }),
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.kendraConfiguration != null && {
      kendraConfiguration: se_KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != null && { outputContexts: se_OutputContextsList(input.outputContexts, context) }),
    ...(input.parentIntentSignature != null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: se_SampleUtterancesList(input.sampleUtterances, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateResourcePolicyCommand
 */
export const se_CreateResourcePolicyCommand = async (
  input: CreateResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.policy != null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateResourcePolicyStatementCommand
 */
export const se_CreateResourcePolicyStatementCommand = async (
  input: CreateResourcePolicyStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/{resourceArn}/statements";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    expectedRevisionId: [, input.expectedRevisionId!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.action != null && { action: se_OperationList(input.action, context) }),
    ...(input.condition != null && { condition: se_ConditionMap(input.condition, context) }),
    ...(input.effect != null && { effect: input.effect }),
    ...(input.principal != null && { principal: se_PrincipalList(input.principal, context) }),
    ...(input.statementId != null && { statementId: input.statementId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSlotCommand
 */
export const se_CreateSlotCommand = async (
  input: CreateSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.multipleValuesSetting != null && {
      multipleValuesSetting: se_MultipleValuesSetting(input.multipleValuesSetting, context),
    }),
    ...(input.obfuscationSetting != null && {
      obfuscationSetting: se_ObfuscationSetting(input.obfuscationSetting, context),
    }),
    ...(input.slotName != null && { slotName: input.slotName }),
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
    ...(input.subSlotSetting != null && { subSlotSetting: se_SubSlotSetting(input.subSlotSetting, context) }),
    ...(input.valueElicitationSetting != null && {
      valueElicitationSetting: se_SlotValueElicitationSetting(input.valueElicitationSetting, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateSlotTypeCommand
 */
export const se_CreateSlotTypeCommand = async (
  input: CreateSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.compositeSlotTypeSetting != null && {
      compositeSlotTypeSetting: se_CompositeSlotTypeSetting(input.compositeSlotTypeSetting, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.externalSourceSetting != null && {
      externalSourceSetting: se_ExternalSourceSetting(input.externalSourceSetting, context),
    }),
    ...(input.parentSlotTypeSignature != null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName != null && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues != null && { slotTypeValues: se_SlotTypeValues(input.slotTypeValues, context) }),
    ...(input.valueSelectionSetting != null && {
      valueSelectionSetting: se_SlotValueSelectionSetting(input.valueSelectionSetting, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateUploadUrlCommand
 */
export const se_CreateUploadUrlCommand = async (
  input: CreateUploadUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/createuploadurl";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBotCommand
 */
export const se_DeleteBotCommand = async (
  input: DeleteBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  const query: any = map({
    skipResourceInUseCheck: [
      () => input.skipResourceInUseCheck !== void 0,
      () => input.skipResourceInUseCheck!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBotAliasCommand
 */
export const se_DeleteBotAliasCommand = async (
  input: DeleteBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botaliases/{botAliasId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  const query: any = map({
    skipResourceInUseCheck: [
      () => input.skipResourceInUseCheck !== void 0,
      () => input.skipResourceInUseCheck!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBotLocaleCommand
 */
export const se_DeleteBotLocaleCommand = async (
  input: DeleteBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteBotVersionCommand
 */
export const se_DeleteBotVersionCommand = async (
  input: DeleteBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botversions/{botVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  const query: any = map({
    skipResourceInUseCheck: [
      () => input.skipResourceInUseCheck !== void 0,
      () => input.skipResourceInUseCheck!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteCustomVocabularyCommand
 */
export const se_DeleteCustomVocabularyCommand = async (
  input: DeleteCustomVocabularyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteExportCommand
 */
export const se_DeleteExportCommand = async (
  input: DeleteExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/exports/{exportId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "exportId", () => input.exportId!, "{exportId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteImportCommand
 */
export const se_DeleteImportCommand = async (
  input: DeleteImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/imports/{importId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "importId", () => input.importId!, "{importId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteIntentCommand
 */
export const se_DeleteIntentCommand = async (
  input: DeleteIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    expectedRevisionId: [, input.expectedRevisionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteResourcePolicyStatementCommand
 */
export const se_DeleteResourcePolicyStatementCommand = async (
  input: DeleteResourcePolicyStatementCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/policy/{resourceArn}/statements/{statementId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "statementId", () => input.statementId!, "{statementId}", false);
  const query: any = map({
    expectedRevisionId: [, input.expectedRevisionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSlotCommand
 */
export const se_DeleteSlotCommand = async (
  input: DeleteSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "slotId", () => input.slotId!, "{slotId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteSlotTypeCommand
 */
export const se_DeleteSlotTypeCommand = async (
  input: DeleteSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "slotTypeId", () => input.slotTypeId!, "{slotTypeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  const query: any = map({
    skipResourceInUseCheck: [
      () => input.skipResourceInUseCheck !== void 0,
      () => input.skipResourceInUseCheck!.toString(),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteUtterancesCommand
 */
export const se_DeleteUtterancesCommand = async (
  input: DeleteUtterancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/utterances";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  const query: any = map({
    localeId: [, input.localeId!],
    sessionId: [, input.sessionId!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeBotCommand
 */
export const se_DescribeBotCommand = async (
  input: DescribeBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeBotAliasCommand
 */
export const se_DescribeBotAliasCommand = async (
  input: DescribeBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botaliases/{botAliasId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeBotLocaleCommand
 */
export const se_DescribeBotLocaleCommand = async (
  input: DescribeBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeBotRecommendationCommand
 */
export const se_DescribeBotRecommendationCommand = async (
  input: DescribeBotRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "botRecommendationId",
    () => input.botRecommendationId!,
    "{botRecommendationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeBotVersionCommand
 */
export const se_DescribeBotVersionCommand = async (
  input: DescribeBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botversions/{botVersion}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeCustomVocabularyMetadataCommand
 */
export const se_DescribeCustomVocabularyMetadataCommand = async (
  input: DescribeCustomVocabularyMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeExportCommand
 */
export const se_DescribeExportCommand = async (
  input: DescribeExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/exports/{exportId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "exportId", () => input.exportId!, "{exportId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeImportCommand
 */
export const se_DescribeImportCommand = async (
  input: DescribeImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/imports/{importId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "importId", () => input.importId!, "{importId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeIntentCommand
 */
export const se_DescribeIntentCommand = async (
  input: DescribeIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeResourcePolicyCommand
 */
export const se_DescribeResourcePolicyCommand = async (
  input: DescribeResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSlotCommand
 */
export const se_DescribeSlotCommand = async (
  input: DescribeSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "slotId", () => input.slotId!, "{slotId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeSlotTypeCommand
 */
export const se_DescribeSlotTypeCommand = async (
  input: DescribeSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "slotTypeId", () => input.slotTypeId!, "{slotTypeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListAggregatedUtterancesCommand
 */
export const se_ListAggregatedUtterancesCommand = async (
  input: ListAggregatedUtterancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/aggregatedutterances";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.aggregationDuration != null && {
      aggregationDuration: se_UtteranceAggregationDuration(input.aggregationDuration, context),
    }),
    ...(input.botAliasId != null && { botAliasId: input.botAliasId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.filters != null && { filters: se_AggregatedUtterancesFilters(input.filters, context) }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_AggregatedUtterancesSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBotAliasesCommand
 */
export const se_ListBotAliasesCommand = async (
  input: ListBotAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botaliases";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBotLocalesCommand
 */
export const se_ListBotLocalesCommand = async (
  input: ListBotLocalesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_BotLocaleFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_BotLocaleSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBotRecommendationsCommand
 */
export const se_ListBotRecommendationsCommand = async (
  input: ListBotRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBotsCommand
 */
export const se_ListBotsCommand = async (
  input: ListBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_BotFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_BotSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBotVersionsCommand
 */
export const se_ListBotVersionsCommand = async (
  input: ListBotVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botversions";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_BotVersionSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBuiltInIntentsCommand
 */
export const se_ListBuiltInIntentsCommand = async (
  input: ListBuiltInIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/builtins/locales/{localeId}/intents";
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_BuiltInIntentSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListBuiltInSlotTypesCommand
 */
export const se_ListBuiltInSlotTypesCommand = async (
  input: ListBuiltInSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/builtins/locales/{localeId}/slottypes";
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_BuiltInSlotTypeSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListCustomVocabularyItemsCommand
 */
export const se_ListCustomVocabularyItemsCommand = async (
  input: ListCustomVocabularyItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/customvocabulary/DEFAULT/list";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListExportsCommand
 */
export const se_ListExportsCommand = async (
  input: ListExportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/exports";
  let body: any;
  body = JSON.stringify({
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.filters != null && { filters: se_ExportFilters(input.filters, context) }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_ExportSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListImportsCommand
 */
export const se_ListImportsCommand = async (
  input: ListImportsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/imports";
  let body: any;
  body = JSON.stringify({
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.filters != null && { filters: se_ImportFilters(input.filters, context) }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_ImportSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListIntentsCommand
 */
export const se_ListIntentsCommand = async (
  input: ListIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_IntentFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_IntentSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListRecommendedIntentsCommand
 */
export const se_ListRecommendedIntentsCommand = async (
  input: ListRecommendedIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/intents";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "botRecommendationId",
    () => input.botRecommendationId!,
    "{botRecommendationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListSlotsCommand
 */
export const se_ListSlotsCommand = async (
  input: ListSlotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SlotFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_SlotSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListSlotTypesCommand
 */
export const se_ListSlotTypesCommand = async (
  input: ListSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_SlotTypeFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: se_SlotTypeSortBy(input.sortBy, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceARN}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchAssociatedTranscriptsCommand
 */
export const se_SearchAssociatedTranscriptsCommand = async (
  input: SearchAssociatedTranscriptsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/associatedtranscripts";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "botRecommendationId",
    () => input.botRecommendationId!,
    "{botRecommendationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: se_AssociatedTranscriptFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextIndex != null && { nextIndex: input.nextIndex }),
    ...(input.searchOrder != null && { searchOrder: input.searchOrder }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartBotRecommendationCommand
 */
export const se_StartBotRecommendationCommand = async (
  input: StartBotRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionSetting != null && {
      encryptionSetting: se_EncryptionSetting(input.encryptionSetting, context),
    }),
    ...(input.transcriptSourceSetting != null && {
      transcriptSourceSetting: se_TranscriptSourceSetting(input.transcriptSourceSetting, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartImportCommand
 */
export const se_StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/imports";
  let body: any;
  body = JSON.stringify({
    ...(input.filePassword != null && { filePassword: input.filePassword }),
    ...(input.importId != null && { importId: input.importId }),
    ...(input.mergeStrategy != null && { mergeStrategy: input.mergeStrategy }),
    ...(input.resourceSpecification != null && {
      resourceSpecification: se_ImportResourceSpecification(input.resourceSpecification, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StopBotRecommendationCommand
 */
export const se_StopBotRecommendationCommand = async (
  input: StopBotRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}/stopbotrecommendation";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "botRecommendationId",
    () => input.botRecommendationId!,
    "{botRecommendationId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceARN}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceARN}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceARN", () => input.resourceARN!, "{resourceARN}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBotCommand
 */
export const se_UpdateBotCommand = async (
  input: UpdateBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.botMembers != null && { botMembers: se_BotMembers(input.botMembers, context) }),
    ...(input.botName != null && { botName: input.botName }),
    ...(input.botType != null && { botType: input.botType }),
    ...(input.dataPrivacy != null && { dataPrivacy: se_DataPrivacy(input.dataPrivacy, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.idleSessionTTLInSeconds != null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBotAliasCommand
 */
export const se_UpdateBotAliasCommand = async (
  input: UpdateBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botaliases/{botAliasId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botAliasId", () => input.botAliasId!, "{botAliasId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.botAliasLocaleSettings != null && {
      botAliasLocaleSettings: se_BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
    }),
    ...(input.botAliasName != null && { botAliasName: input.botAliasName }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings != null && {
      conversationLogSettings: se_ConversationLogSettings(input.conversationLogSettings, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.sentimentAnalysisSettings != null && {
      sentimentAnalysisSettings: se_SentimentAnalysisSettings(input.sentimentAnalysisSettings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBotLocaleCommand
 */
export const se_UpdateBotLocaleCommand = async (
  input: UpdateBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.nluIntentConfidenceThreshold != null && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != null && { voiceSettings: se_VoiceSettings(input.voiceSettings, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateBotRecommendationCommand
 */
export const se_UpdateBotRecommendationCommand = async (
  input: UpdateBotRecommendationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/botrecommendations/{botRecommendationId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "botRecommendationId",
    () => input.botRecommendationId!,
    "{botRecommendationId}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionSetting != null && {
      encryptionSetting: se_EncryptionSetting(input.encryptionSetting, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateExportCommand
 */
export const se_UpdateExportCommand = async (
  input: UpdateExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/exports/{exportId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "exportId", () => input.exportId!, "{exportId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.filePassword != null && { filePassword: input.filePassword }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateIntentCommand
 */
export const se_UpdateIntentCommand = async (
  input: UpdateIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.dialogCodeHook != null && { dialogCodeHook: se_DialogCodeHookSettings(input.dialogCodeHook, context) }),
    ...(input.fulfillmentCodeHook != null && {
      fulfillmentCodeHook: se_FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
    }),
    ...(input.initialResponseSetting != null && {
      initialResponseSetting: se_InitialResponseSetting(input.initialResponseSetting, context),
    }),
    ...(input.inputContexts != null && { inputContexts: se_InputContextsList(input.inputContexts, context) }),
    ...(input.intentClosingSetting != null && {
      intentClosingSetting: se_IntentClosingSetting(input.intentClosingSetting, context),
    }),
    ...(input.intentConfirmationSetting != null && {
      intentConfirmationSetting: se_IntentConfirmationSetting(input.intentConfirmationSetting, context),
    }),
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.kendraConfiguration != null && {
      kendraConfiguration: se_KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != null && { outputContexts: se_OutputContextsList(input.outputContexts, context) }),
    ...(input.parentIntentSignature != null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: se_SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.slotPriorities != null && { slotPriorities: se_SlotPrioritiesList(input.slotPriorities, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResourcePolicyCommand
 */
export const se_UpdateResourcePolicyCommand = async (
  input: UpdateResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/policy/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    expectedRevisionId: [, input.expectedRevisionId!],
  });
  let body: any;
  body = JSON.stringify({
    ...(input.policy != null && { policy: input.policy }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSlotCommand
 */
export const se_UpdateSlotCommand = async (
  input: UpdateSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "slotId", () => input.slotId!, "{slotId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "intentId", () => input.intentId!, "{intentId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.description != null && { description: input.description }),
    ...(input.multipleValuesSetting != null && {
      multipleValuesSetting: se_MultipleValuesSetting(input.multipleValuesSetting, context),
    }),
    ...(input.obfuscationSetting != null && {
      obfuscationSetting: se_ObfuscationSetting(input.obfuscationSetting, context),
    }),
    ...(input.slotName != null && { slotName: input.slotName }),
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
    ...(input.subSlotSetting != null && { subSlotSetting: se_SubSlotSetting(input.subSlotSetting, context) }),
    ...(input.valueElicitationSetting != null && {
      valueElicitationSetting: se_SlotValueElicitationSetting(input.valueElicitationSetting, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateSlotTypeCommand
 */
export const se_UpdateSlotTypeCommand = async (
  input: UpdateSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "slotTypeId", () => input.slotTypeId!, "{slotTypeId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "botVersion", () => input.botVersion!, "{botVersion}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "localeId", () => input.localeId!, "{localeId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.compositeSlotTypeSetting != null && {
      compositeSlotTypeSetting: se_CompositeSlotTypeSetting(input.compositeSlotTypeSetting, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.externalSourceSetting != null && {
      externalSourceSetting: se_ExternalSourceSetting(input.externalSourceSetting, context),
    }),
    ...(input.parentSlotTypeSignature != null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName != null && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues != null && { slotTypeValues: se_SlotTypeValues(input.slotTypeValues, context) }),
    ...(input.valueSelectionSetting != null && {
      valueSelectionSetting: se_SlotValueSelectionSetting(input.valueSelectionSetting, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1BatchCreateCustomVocabularyItemCommand
 */
export const de_BatchCreateCustomVocabularyItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateCustomVocabularyItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchCreateCustomVocabularyItemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.errors != null) {
    contents.errors = de_FailedCustomVocabularyItems(data.errors, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.resources != null) {
    contents.resources = de_CustomVocabularyItems(data.resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchCreateCustomVocabularyItemCommandError
 */
const de_BatchCreateCustomVocabularyItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateCustomVocabularyItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommand
 */
export const de_BatchDeleteCustomVocabularyItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteCustomVocabularyItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDeleteCustomVocabularyItemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.errors != null) {
    contents.errors = de_FailedCustomVocabularyItems(data.errors, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.resources != null) {
    contents.resources = de_CustomVocabularyItems(data.resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommandError
 */
const de_BatchDeleteCustomVocabularyItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteCustomVocabularyItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1BatchUpdateCustomVocabularyItemCommand
 */
export const de_BatchUpdateCustomVocabularyItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateCustomVocabularyItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchUpdateCustomVocabularyItemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.errors != null) {
    contents.errors = de_FailedCustomVocabularyItems(data.errors, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.resources != null) {
    contents.resources = de_CustomVocabularyItems(data.resources, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchUpdateCustomVocabularyItemCommandError
 */
const de_BatchUpdateCustomVocabularyItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateCustomVocabularyItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1BuildBotLocaleCommand
 */
export const de_BuildBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_BuildBotLocaleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus != null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.lastBuildSubmittedDateTime != null) {
    contents.lastBuildSubmittedDateTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.lastBuildSubmittedDateTime))
    );
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BuildBotLocaleCommandError
 */
const de_BuildBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateBotCommand
 */
export const de_CreateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botMembers != null) {
    contents.botMembers = de_BotMembers(data.botMembers, context);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botTags != null) {
    contents.botTags = de_TagMap(data.botTags, context);
  }
  if (data.botType != null) {
    contents.botType = __expectString(data.botType);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = de_DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.testBotAliasTags != null) {
    contents.testBotAliasTags = de_TagMap(data.testBotAliasTags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBotCommandError
 */
const de_CreateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateBotAliasCommand
 */
export const de_CreateBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings != null) {
    contents.botAliasLocaleSettings = de_BotAliasLocaleSettingsMap(data.botAliasLocaleSettings, context);
  }
  if (data.botAliasName != null) {
    contents.botAliasName = __expectString(data.botAliasName);
  }
  if (data.botAliasStatus != null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.conversationLogSettings != null) {
    contents.conversationLogSettings = de_ConversationLogSettings(data.conversationLogSettings, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.sentimentAnalysisSettings != null) {
    contents.sentimentAnalysisSettings = de_SentimentAnalysisSettings(data.sentimentAnalysisSettings, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBotAliasCommandError
 */
const de_CreateBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateBotLocaleCommand
 */
export const de_CreateBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateBotLocaleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus != null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.localeName != null) {
    contents.localeName = __expectString(data.localeName);
  }
  if (data.nluIntentConfidenceThreshold != null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.voiceSettings != null) {
    contents.voiceSettings = de_VoiceSettings(data.voiceSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBotLocaleCommandError
 */
const de_CreateBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateBotVersionCommand
 */
export const de_CreateBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateBotVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.botVersionLocaleSpecification != null) {
    contents.botVersionLocaleSpecification = de_BotVersionLocaleSpecification(
      data.botVersionLocaleSpecification,
      context
    );
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateBotVersionCommandError
 */
const de_CreateBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateExportCommand
 */
export const de_CreateExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.exportId != null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus != null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.fileFormat != null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.resourceSpecification != null) {
    contents.resourceSpecification = de_ExportResourceSpecification(data.resourceSpecification, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateExportCommandError
 */
const de_CreateExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateIntentCommand
 */
export const de_CreateIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook != null) {
    contents.dialogCodeHook = de_DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook != null) {
    contents.fulfillmentCodeHook = de_FulfillmentCodeHookSettings(data.fulfillmentCodeHook, context);
  }
  if (data.initialResponseSetting != null) {
    contents.initialResponseSetting = de_InitialResponseSetting(data.initialResponseSetting, context);
  }
  if (data.inputContexts != null) {
    contents.inputContexts = de_InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting != null) {
    contents.intentClosingSetting = de_IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting != null) {
    contents.intentConfirmationSetting = de_IntentConfirmationSetting(data.intentConfirmationSetting, context);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = de_KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = de_OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = de_SampleUtterancesList(data.sampleUtterances, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateIntentCommandError
 */
const de_CreateIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateResourcePolicyCommand
 */
export const de_CreateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourcePolicyCommandError
 */
const de_CreateResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateResourcePolicyStatementCommand
 */
export const de_CreateResourcePolicyStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateResourcePolicyStatementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateResourcePolicyStatementCommandError
 */
const de_CreateResourcePolicyStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateSlotCommand
 */
export const de_CreateSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSlotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.multipleValuesSetting != null) {
    contents.multipleValuesSetting = de_MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting != null) {
    contents.obfuscationSetting = de_ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId != null) {
    contents.slotId = __expectString(data.slotId);
  }
  if (data.slotName != null) {
    contents.slotName = __expectString(data.slotName);
  }
  if (data.slotTypeId != null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.subSlotSetting != null) {
    contents.subSlotSetting = de_SubSlotSetting(data.subSlotSetting, context);
  }
  if (data.valueElicitationSetting != null) {
    contents.valueElicitationSetting = de_SlotValueElicitationSetting(data.valueElicitationSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSlotCommandError
 */
const de_CreateSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateSlotTypeCommand
 */
export const de_CreateSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.compositeSlotTypeSetting != null) {
    contents.compositeSlotTypeSetting = de_CompositeSlotTypeSetting(data.compositeSlotTypeSetting, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting != null) {
    contents.externalSourceSetting = de_ExternalSourceSetting(data.externalSourceSetting, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.parentSlotTypeSignature != null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeId != null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.slotTypeName != null) {
    contents.slotTypeName = __expectString(data.slotTypeName);
  }
  if (data.slotTypeValues != null) {
    contents.slotTypeValues = de_SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting != null) {
    contents.valueSelectionSetting = de_SlotValueSelectionSetting(data.valueSelectionSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateSlotTypeCommandError
 */
const de_CreateSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1CreateUploadUrlCommand
 */
export const de_CreateUploadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateUploadUrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importId != null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.uploadUrl != null) {
    contents.uploadUrl = __expectString(data.uploadUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateUploadUrlCommandError
 */
const de_CreateUploadUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteBotCommand
 */
export const de_DeleteBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBotCommandError
 */
const de_DeleteBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteBotAliasCommand
 */
export const de_DeleteBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasStatus != null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBotAliasCommandError
 */
const de_DeleteBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteBotLocaleCommand
 */
export const de_DeleteBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteBotLocaleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus != null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBotLocaleCommandError
 */
const de_DeleteBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteBotVersionCommand
 */
export const de_DeleteBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteBotVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBotVersionCommandError
 */
const de_DeleteBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteCustomVocabularyCommand
 */
export const de_DeleteCustomVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVocabularyCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteCustomVocabularyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.customVocabularyStatus != null) {
    contents.customVocabularyStatus = __expectString(data.customVocabularyStatus);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCustomVocabularyCommandError
 */
const de_DeleteCustomVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteExportCommand
 */
export const de_DeleteExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.exportId != null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus != null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteExportCommandError
 */
const de_DeleteExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteImportCommand
 */
export const de_DeleteImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_DeleteImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importId != null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus != null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteImportCommandError
 */
const de_DeleteImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteIntentCommand
 */
export const de_DeleteIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteIntentCommandError
 */
const de_DeleteIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommandError
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
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
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
 * deserializeAws_restJson1DeleteResourcePolicyStatementCommand
 */
export const de_DeleteResourcePolicyStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyStatementCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteResourcePolicyStatementCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyStatementCommandError
 */
const de_DeleteResourcePolicyStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
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
 * deserializeAws_restJson1DeleteSlotCommand
 */
export const de_DeleteSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteSlotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlotCommandError
 */
const de_DeleteSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteSlotTypeCommand
 */
export const de_DeleteSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSlotTypeCommandError
 */
const de_DeleteSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DeleteUtterancesCommand
 */
export const de_DeleteUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteUtterancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteUtterancesCommandError
 */
const de_DeleteUtterancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeBotCommand
 */
export const de_DescribeBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botMembers != null) {
    contents.botMembers = de_BotMembers(data.botMembers, context);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botType != null) {
    contents.botType = __expectString(data.botType);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = de_DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBotCommandError
 */
const de_DescribeBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeBotAliasCommand
 */
export const de_DescribeBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasHistoryEvents != null) {
    contents.botAliasHistoryEvents = de_BotAliasHistoryEventsList(data.botAliasHistoryEvents, context);
  }
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings != null) {
    contents.botAliasLocaleSettings = de_BotAliasLocaleSettingsMap(data.botAliasLocaleSettings, context);
  }
  if (data.botAliasName != null) {
    contents.botAliasName = __expectString(data.botAliasName);
  }
  if (data.botAliasStatus != null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.conversationLogSettings != null) {
    contents.conversationLogSettings = de_ConversationLogSettings(data.conversationLogSettings, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.parentBotNetworks != null) {
    contents.parentBotNetworks = de_ParentBotNetworks(data.parentBotNetworks, context);
  }
  if (data.sentimentAnalysisSettings != null) {
    contents.sentimentAnalysisSettings = de_SentimentAnalysisSettings(data.sentimentAnalysisSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBotAliasCommandError
 */
const de_DescribeBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeBotLocaleCommand
 */
export const de_DescribeBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotLocaleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBotLocaleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleHistoryEvents != null) {
    contents.botLocaleHistoryEvents = de_BotLocaleHistoryEventsList(data.botLocaleHistoryEvents, context);
  }
  if (data.botLocaleStatus != null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.intentsCount != null) {
    contents.intentsCount = __expectInt32(data.intentsCount);
  }
  if (data.lastBuildSubmittedDateTime != null) {
    contents.lastBuildSubmittedDateTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.lastBuildSubmittedDateTime))
    );
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.localeName != null) {
    contents.localeName = __expectString(data.localeName);
  }
  if (data.nluIntentConfidenceThreshold != null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.recommendedActions != null) {
    contents.recommendedActions = de_RecommendedActions(data.recommendedActions, context);
  }
  if (data.slotTypesCount != null) {
    contents.slotTypesCount = __expectInt32(data.slotTypesCount);
  }
  if (data.voiceSettings != null) {
    contents.voiceSettings = de_VoiceSettings(data.voiceSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBotLocaleCommandError
 */
const de_DescribeBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeBotRecommendationCommand
 */
export const de_DescribeBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotRecommendationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBotRecommendationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId != null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationResults != null) {
    contents.botRecommendationResults = de_BotRecommendationResults(data.botRecommendationResults, context);
  }
  if (data.botRecommendationStatus != null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.encryptionSetting != null) {
    contents.encryptionSetting = de_EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting != null) {
    contents.transcriptSourceSetting = de_TranscriptSourceSetting(data.transcriptSourceSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBotRecommendationCommandError
 */
const de_DescribeBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeBotVersionCommand
 */
export const de_DescribeBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBotVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botMembers != null) {
    contents.botMembers = de_BotMembers(data.botMembers, context);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botType != null) {
    contents.botType = __expectString(data.botType);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = de_DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.parentBotNetworks != null) {
    contents.parentBotNetworks = de_ParentBotNetworks(data.parentBotNetworks, context);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBotVersionCommandError
 */
const de_DescribeBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeCustomVocabularyMetadataCommand
 */
export const de_DescribeCustomVocabularyMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomVocabularyMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeCustomVocabularyMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.customVocabularyStatus != null) {
    contents.customVocabularyStatus = __expectString(data.customVocabularyStatus);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCustomVocabularyMetadataCommandError
 */
const de_DescribeCustomVocabularyMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomVocabularyMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeExportCommand
 */
export const de_DescribeExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.downloadUrl != null) {
    contents.downloadUrl = __expectString(data.downloadUrl);
  }
  if (data.exportId != null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus != null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.fileFormat != null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.resourceSpecification != null) {
    contents.resourceSpecification = de_ExportResourceSpecification(data.resourceSpecification, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeExportCommandError
 */
const de_DescribeExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeImportCommand
 */
export const de_DescribeImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.importId != null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus != null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  if (data.importedResourceId != null) {
    contents.importedResourceId = __expectString(data.importedResourceId);
  }
  if (data.importedResourceName != null) {
    contents.importedResourceName = __expectString(data.importedResourceName);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.mergeStrategy != null) {
    contents.mergeStrategy = __expectString(data.mergeStrategy);
  }
  if (data.resourceSpecification != null) {
    contents.resourceSpecification = de_ImportResourceSpecification(data.resourceSpecification, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeImportCommandError
 */
const de_DescribeImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeIntentCommand
 */
export const de_DescribeIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook != null) {
    contents.dialogCodeHook = de_DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook != null) {
    contents.fulfillmentCodeHook = de_FulfillmentCodeHookSettings(data.fulfillmentCodeHook, context);
  }
  if (data.initialResponseSetting != null) {
    contents.initialResponseSetting = de_InitialResponseSetting(data.initialResponseSetting, context);
  }
  if (data.inputContexts != null) {
    contents.inputContexts = de_InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting != null) {
    contents.intentClosingSetting = de_IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting != null) {
    contents.intentConfirmationSetting = de_IntentConfirmationSetting(data.intentConfirmationSetting, context);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = de_KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = de_OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = de_SampleUtterancesList(data.sampleUtterances, context);
  }
  if (data.slotPriorities != null) {
    contents.slotPriorities = de_SlotPrioritiesList(data.slotPriorities, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIntentCommandError
 */
const de_DescribeIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeResourcePolicyCommand
 */
export const de_DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy != null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResourcePolicyCommandError
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
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
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
 * deserializeAws_restJson1DescribeSlotCommand
 */
export const de_DescribeSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSlotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.multipleValuesSetting != null) {
    contents.multipleValuesSetting = de_MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting != null) {
    contents.obfuscationSetting = de_ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId != null) {
    contents.slotId = __expectString(data.slotId);
  }
  if (data.slotName != null) {
    contents.slotName = __expectString(data.slotName);
  }
  if (data.slotTypeId != null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.subSlotSetting != null) {
    contents.subSlotSetting = de_SubSlotSetting(data.subSlotSetting, context);
  }
  if (data.valueElicitationSetting != null) {
    contents.valueElicitationSetting = de_SlotValueElicitationSetting(data.valueElicitationSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSlotCommandError
 */
const de_DescribeSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1DescribeSlotTypeCommand
 */
export const de_DescribeSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.compositeSlotTypeSetting != null) {
    contents.compositeSlotTypeSetting = de_CompositeSlotTypeSetting(data.compositeSlotTypeSetting, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting != null) {
    contents.externalSourceSetting = de_ExternalSourceSetting(data.externalSourceSetting, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.parentSlotTypeSignature != null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeId != null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.slotTypeName != null) {
    contents.slotTypeName = __expectString(data.slotTypeName);
  }
  if (data.slotTypeValues != null) {
    contents.slotTypeValues = de_SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting != null) {
    contents.valueSelectionSetting = de_SlotValueSelectionSetting(data.valueSelectionSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeSlotTypeCommandError
 */
const de_DescribeSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListAggregatedUtterancesCommand
 */
export const de_ListAggregatedUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregatedUtterancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAggregatedUtterancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.aggregatedUtterancesSummaries != null) {
    contents.aggregatedUtterancesSummaries = de_AggregatedUtterancesSummaryList(
      data.aggregatedUtterancesSummaries,
      context
    );
  }
  if (data.aggregationDuration != null) {
    contents.aggregationDuration = de_UtteranceAggregationDuration(data.aggregationDuration, context);
  }
  if (data.aggregationLastRefreshedDateTime != null) {
    contents.aggregationLastRefreshedDateTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.aggregationLastRefreshedDateTime))
    );
  }
  if (data.aggregationWindowEndTime != null) {
    contents.aggregationWindowEndTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.aggregationWindowEndTime))
    );
  }
  if (data.aggregationWindowStartTime != null) {
    contents.aggregationWindowStartTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.aggregationWindowStartTime))
    );
  }
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAggregatedUtterancesCommandError
 */
const de_ListAggregatedUtterancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregatedUtterancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBotAliasesCommand
 */
export const de_ListBotAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBotAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasSummaries != null) {
    contents.botAliasSummaries = de_BotAliasSummaryList(data.botAliasSummaries, context);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBotAliasesCommandError
 */
const de_ListBotAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBotLocalesCommand
 */
export const de_ListBotLocalesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotLocalesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBotLocalesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleSummaries != null) {
    contents.botLocaleSummaries = de_BotLocaleSummaryList(data.botLocaleSummaries, context);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBotLocalesCommandError
 */
const de_ListBotLocalesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotLocalesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBotRecommendationsCommand
 */
export const de_ListBotRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBotRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationSummaries != null) {
    contents.botRecommendationSummaries = de_BotRecommendationSummaryList(data.botRecommendationSummaries, context);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBotRecommendationsCommandError
 */
const de_ListBotRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBotsCommand
 */
export const de_ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botSummaries != null) {
    contents.botSummaries = de_BotSummaryList(data.botSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBotsCommandError
 */
const de_ListBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBotVersionsCommand
 */
export const de_ListBotVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBotVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersionSummaries != null) {
    contents.botVersionSummaries = de_BotVersionSummaryList(data.botVersionSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBotVersionsCommandError
 */
const de_ListBotVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBuiltInIntentsCommand
 */
export const de_ListBuiltInIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBuiltInIntentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.builtInIntentSummaries != null) {
    contents.builtInIntentSummaries = de_BuiltInIntentSummaryList(data.builtInIntentSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBuiltInIntentsCommandError
 */
const de_ListBuiltInIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListBuiltInSlotTypesCommand
 */
export const de_ListBuiltInSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBuiltInSlotTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.builtInSlotTypeSummaries != null) {
    contents.builtInSlotTypeSummaries = de_BuiltInSlotTypeSummaryList(data.builtInSlotTypeSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListBuiltInSlotTypesCommandError
 */
const de_ListBuiltInSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListCustomVocabularyItemsCommand
 */
export const de_ListCustomVocabularyItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVocabularyItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCustomVocabularyItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.customVocabularyItems != null) {
    contents.customVocabularyItems = de_CustomVocabularyItems(data.customVocabularyItems, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCustomVocabularyItemsCommandError
 */
const de_ListCustomVocabularyItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVocabularyItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListExportsCommand
 */
export const de_ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListExportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.exportSummaries != null) {
    contents.exportSummaries = de_ExportSummaryList(data.exportSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListExportsCommandError
 */
const de_ListExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListImportsCommand
 */
export const de_ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListImportsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.importSummaries != null) {
    contents.importSummaries = de_ImportSummaryList(data.importSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListImportsCommandError
 */
const de_ListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListIntentsCommand
 */
export const de_ListIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIntentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.intentSummaries != null) {
    contents.intentSummaries = de_IntentSummaryList(data.intentSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIntentsCommandError
 */
const de_ListIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListRecommendedIntentsCommand
 */
export const de_ListRecommendedIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendedIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecommendedIntentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId != null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.summaryList != null) {
    contents.summaryList = de_RecommendedIntentSummaryList(data.summaryList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListRecommendedIntentsCommandError
 */
const de_ListRecommendedIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendedIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListSlotsCommand
 */
export const de_ListSlotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSlotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotSummaries != null) {
    contents.slotSummaries = de_SlotSummaryList(data.slotSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSlotsCommandError
 */
const de_ListSlotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListSlotTypesCommand
 */
export const de_ListSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSlotTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotTypeSummaries != null) {
    contents.slotTypeSummaries = de_SlotTypeSummaryList(data.slotTypeSummaries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListSlotTypesCommandError
 */
const de_ListSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1SearchAssociatedTranscriptsCommand
 */
export const de_SearchAssociatedTranscriptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAssociatedTranscriptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchAssociatedTranscriptsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedTranscripts != null) {
    contents.associatedTranscripts = de_AssociatedTranscriptList(data.associatedTranscripts, context);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId != null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextIndex != null) {
    contents.nextIndex = __expectInt32(data.nextIndex);
  }
  if (data.totalResults != null) {
    contents.totalResults = __expectInt32(data.totalResults);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchAssociatedTranscriptsCommandError
 */
const de_SearchAssociatedTranscriptsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAssociatedTranscriptsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1StartBotRecommendationCommand
 */
export const de_StartBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartBotRecommendationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId != null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationStatus != null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.encryptionSetting != null) {
    contents.encryptionSetting = de_EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting != null) {
    contents.transcriptSourceSetting = de_TranscriptSourceSetting(data.transcriptSourceSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartBotRecommendationCommandError
 */
const de_StartBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1StartImportCommand
 */
export const de_StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.importId != null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus != null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  if (data.mergeStrategy != null) {
    contents.mergeStrategy = __expectString(data.mergeStrategy);
  }
  if (data.resourceSpecification != null) {
    contents.resourceSpecification = de_ImportResourceSpecification(data.resourceSpecification, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartImportCommandError
 */
const de_StartImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1StopBotRecommendationCommand
 */
export const de_StopBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StopBotRecommendationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId != null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationStatus != null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StopBotRecommendationCommandError
 */
const de_StopBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateBotCommand
 */
export const de_UpdateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botMembers != null) {
    contents.botMembers = de_BotMembers(data.botMembers, context);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botType != null) {
    contents.botType = __expectString(data.botType);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = de_DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBotCommandError
 */
const de_UpdateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateBotAliasCommand
 */
export const de_UpdateBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings != null) {
    contents.botAliasLocaleSettings = de_BotAliasLocaleSettingsMap(data.botAliasLocaleSettings, context);
  }
  if (data.botAliasName != null) {
    contents.botAliasName = __expectString(data.botAliasName);
  }
  if (data.botAliasStatus != null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.conversationLogSettings != null) {
    contents.conversationLogSettings = de_ConversationLogSettings(data.conversationLogSettings, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.sentimentAnalysisSettings != null) {
    contents.sentimentAnalysisSettings = de_SentimentAnalysisSettings(data.sentimentAnalysisSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBotAliasCommandError
 */
const de_UpdateBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateBotLocaleCommand
 */
export const de_UpdateBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBotLocaleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus != null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = de_FailureReasons(data.failureReasons, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.localeName != null) {
    contents.localeName = __expectString(data.localeName);
  }
  if (data.nluIntentConfidenceThreshold != null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.recommendedActions != null) {
    contents.recommendedActions = de_RecommendedActions(data.recommendedActions, context);
  }
  if (data.voiceSettings != null) {
    contents.voiceSettings = de_VoiceSettings(data.voiceSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBotLocaleCommandError
 */
const de_UpdateBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateBotRecommendationCommand
 */
export const de_UpdateBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateBotRecommendationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId != null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationStatus != null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.encryptionSetting != null) {
    contents.encryptionSetting = de_EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting != null) {
    contents.transcriptSourceSetting = de_TranscriptSourceSetting(data.transcriptSourceSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBotRecommendationCommandError
 */
const de_UpdateBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateExportCommand
 */
export const de_UpdateExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateExportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.exportId != null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus != null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.fileFormat != null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.resourceSpecification != null) {
    contents.resourceSpecification = de_ExportResourceSpecification(data.resourceSpecification, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateExportCommandError
 */
const de_UpdateExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateIntentCommand
 */
export const de_UpdateIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook != null) {
    contents.dialogCodeHook = de_DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook != null) {
    contents.fulfillmentCodeHook = de_FulfillmentCodeHookSettings(data.fulfillmentCodeHook, context);
  }
  if (data.initialResponseSetting != null) {
    contents.initialResponseSetting = de_InitialResponseSetting(data.initialResponseSetting, context);
  }
  if (data.inputContexts != null) {
    contents.inputContexts = de_InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting != null) {
    contents.intentClosingSetting = de_IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting != null) {
    contents.intentConfirmationSetting = de_IntentConfirmationSetting(data.intentConfirmationSetting, context);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = de_KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = de_OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = de_SampleUtterancesList(data.sampleUtterances, context);
  }
  if (data.slotPriorities != null) {
    contents.slotPriorities = de_SlotPrioritiesList(data.slotPriorities, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateIntentCommandError
 */
const de_UpdateIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateResourcePolicyCommand
 */
export const de_UpdateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourcePolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn != null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourcePolicyCommandError
 */
const de_UpdateResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateSlotCommand
 */
export const de_UpdateSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateSlotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.multipleValuesSetting != null) {
    contents.multipleValuesSetting = de_MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting != null) {
    contents.obfuscationSetting = de_ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId != null) {
    contents.slotId = __expectString(data.slotId);
  }
  if (data.slotName != null) {
    contents.slotName = __expectString(data.slotName);
  }
  if (data.slotTypeId != null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.subSlotSetting != null) {
    contents.subSlotSetting = de_SubSlotSetting(data.subSlotSetting, context);
  }
  if (data.valueElicitationSetting != null) {
    contents.valueElicitationSetting = de_SlotValueElicitationSetting(data.valueElicitationSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSlotCommandError
 */
const de_UpdateSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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
 * deserializeAws_restJson1UpdateSlotTypeCommand
 */
export const de_UpdateSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotTypeCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_UpdateSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.compositeSlotTypeSetting != null) {
    contents.compositeSlotTypeSetting = de_CompositeSlotTypeSetting(data.compositeSlotTypeSetting, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting != null) {
    contents.externalSourceSetting = de_ExternalSourceSetting(data.externalSourceSetting, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.parentSlotTypeSignature != null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeId != null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.slotTypeName != null) {
    contents.slotTypeName = __expectString(data.slotTypeName);
  }
  if (data.slotTypeValues != null) {
    contents.slotTypeValues = de_SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting != null) {
    contents.valueSelectionSetting = de_SlotValueSelectionSetting(data.valueSelectionSetting, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSlotTypeCommandError
 */
const de_UpdateSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await de_PreconditionFailedExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
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

const map = __map;
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PreconditionFailedExceptionRes
 */
const de_PreconditionFailedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new PreconditionFailedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdvancedRecognitionSetting
 */
const se_AdvancedRecognitionSetting = (input: AdvancedRecognitionSetting, context: __SerdeContext): any => {
  return {
    ...(input.audioRecognitionStrategy != null && { audioRecognitionStrategy: input.audioRecognitionStrategy }),
  };
};

/**
 * serializeAws_restJson1AggregatedUtterancesFilter
 */
const se_AggregatedUtterancesFilter = (input: AggregatedUtterancesFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1AggregatedUtterancesFilters
 */
const se_AggregatedUtterancesFilters = (input: AggregatedUtterancesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AggregatedUtterancesFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1AggregatedUtterancesSortBy
 */
const se_AggregatedUtterancesSortBy = (input: AggregatedUtterancesSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1AllowedInputTypes
 */
const se_AllowedInputTypes = (input: AllowedInputTypes, context: __SerdeContext): any => {
  return {
    ...(input.allowAudioInput != null && { allowAudioInput: input.allowAudioInput }),
    ...(input.allowDTMFInput != null && { allowDTMFInput: input.allowDTMFInput }),
  };
};

/**
 * serializeAws_restJson1AssociatedTranscriptFilter
 */
const se_AssociatedTranscriptFilter = (input: AssociatedTranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1AssociatedTranscriptFilters
 */
const se_AssociatedTranscriptFilters = (input: AssociatedTranscriptFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssociatedTranscriptFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1AudioAndDTMFInputSpecification
 */
const se_AudioAndDTMFInputSpecification = (input: AudioAndDTMFInputSpecification, context: __SerdeContext): any => {
  return {
    ...(input.audioSpecification != null && {
      audioSpecification: se_AudioSpecification(input.audioSpecification, context),
    }),
    ...(input.dtmfSpecification != null && {
      dtmfSpecification: se_DTMFSpecification(input.dtmfSpecification, context),
    }),
    ...(input.startTimeoutMs != null && { startTimeoutMs: input.startTimeoutMs }),
  };
};

/**
 * serializeAws_restJson1AudioLogDestination
 */
const se_AudioLogDestination = (input: AudioLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: se_S3BucketLogDestination(input.s3Bucket, context) }),
  };
};

/**
 * serializeAws_restJson1AudioLogSetting
 */
const se_AudioLogSetting = (input: AudioLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: se_AudioLogDestination(input.destination, context) }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1AudioLogSettingsList
 */
const se_AudioLogSettingsList = (input: AudioLogSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AudioLogSetting(entry, context);
    });
};

/**
 * serializeAws_restJson1AudioSpecification
 */
const se_AudioSpecification = (input: AudioSpecification, context: __SerdeContext): any => {
  return {
    ...(input.endTimeoutMs != null && { endTimeoutMs: input.endTimeoutMs }),
    ...(input.maxLengthMs != null && { maxLengthMs: input.maxLengthMs }),
  };
};

/**
 * serializeAws_restJson1BotAliasLocaleSettings
 */
const se_BotAliasLocaleSettings = (input: BotAliasLocaleSettings, context: __SerdeContext): any => {
  return {
    ...(input.codeHookSpecification != null && {
      codeHookSpecification: se_CodeHookSpecification(input.codeHookSpecification, context),
    }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1BotAliasLocaleSettingsMap
 */
const se_BotAliasLocaleSettingsMap = (input: Record<string, BotAliasLocaleSettings>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_BotAliasLocaleSettings(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BotExportSpecification
 */
const se_BotExportSpecification = (input: BotExportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
  };
};

/**
 * serializeAws_restJson1BotFilter
 */
const se_BotFilter = (input: BotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1BotFilters
 */
const se_BotFilters = (input: BotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BotFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1BotImportSpecification
 */
const se_BotImportSpecification = (input: BotImportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botName != null && { botName: input.botName }),
    ...(input.botTags != null && { botTags: se_TagMap(input.botTags, context) }),
    ...(input.dataPrivacy != null && { dataPrivacy: se_DataPrivacy(input.dataPrivacy, context) }),
    ...(input.idleSessionTTLInSeconds != null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags != null && { testBotAliasTags: se_TagMap(input.testBotAliasTags, context) }),
  };
};

/**
 * serializeAws_restJson1BotLocaleExportSpecification
 */
const se_BotLocaleExportSpecification = (input: BotLocaleExportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
  };
};

/**
 * serializeAws_restJson1BotLocaleFilter
 */
const se_BotLocaleFilter = (input: BotLocaleFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1BotLocaleFilters
 */
const se_BotLocaleFilters = (input: BotLocaleFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BotLocaleFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1BotLocaleImportSpecification
 */
const se_BotLocaleImportSpecification = (input: BotLocaleImportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.nluIntentConfidenceThreshold != null && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != null && { voiceSettings: se_VoiceSettings(input.voiceSettings, context) }),
  };
};

/**
 * serializeAws_restJson1BotLocaleSortBy
 */
const se_BotLocaleSortBy = (input: BotLocaleSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1BotMember
 */
const se_BotMember = (input: BotMember, context: __SerdeContext): any => {
  return {
    ...(input.botMemberAliasId != null && { botMemberAliasId: input.botMemberAliasId }),
    ...(input.botMemberAliasName != null && { botMemberAliasName: input.botMemberAliasName }),
    ...(input.botMemberId != null && { botMemberId: input.botMemberId }),
    ...(input.botMemberName != null && { botMemberName: input.botMemberName }),
    ...(input.botMemberVersion != null && { botMemberVersion: input.botMemberVersion }),
  };
};

/**
 * serializeAws_restJson1BotMembers
 */
const se_BotMembers = (input: BotMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BotMember(entry, context);
    });
};

/**
 * serializeAws_restJson1BotSortBy
 */
const se_BotSortBy = (input: BotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1BotVersionLocaleDetails
 */
const se_BotVersionLocaleDetails = (input: BotVersionLocaleDetails, context: __SerdeContext): any => {
  return {
    ...(input.sourceBotVersion != null && { sourceBotVersion: input.sourceBotVersion }),
  };
};

/**
 * serializeAws_restJson1BotVersionLocaleSpecification
 */
const se_BotVersionLocaleSpecification = (
  input: Record<string, BotVersionLocaleDetails>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_BotVersionLocaleDetails(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BotVersionSortBy
 */
const se_BotVersionSortBy = (input: BotVersionSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1BuiltInIntentSortBy
 */
const se_BuiltInIntentSortBy = (input: BuiltInIntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1BuiltInSlotTypeSortBy
 */
const se_BuiltInSlotTypeSortBy = (input: BuiltInSlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1Button
 */
const se_Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text != null && { text: input.text }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1ButtonsList
 */
const se_ButtonsList = (input: Button[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Button(entry, context);
    });
};

/**
 * serializeAws_restJson1CloudWatchLogGroupLogDestination
 */
const se_CloudWatchLogGroupLogDestination = (input: CloudWatchLogGroupLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatchLogGroupArn != null && { cloudWatchLogGroupArn: input.cloudWatchLogGroupArn }),
    ...(input.logPrefix != null && { logPrefix: input.logPrefix }),
  };
};

/**
 * serializeAws_restJson1CodeHookSpecification
 */
const se_CodeHookSpecification = (input: CodeHookSpecification, context: __SerdeContext): any => {
  return {
    ...(input.lambdaCodeHook != null && { lambdaCodeHook: se_LambdaCodeHook(input.lambdaCodeHook, context) }),
  };
};

/**
 * serializeAws_restJson1CompositeSlotTypeSetting
 */
const se_CompositeSlotTypeSetting = (input: CompositeSlotTypeSetting, context: __SerdeContext): any => {
  return {
    ...(input.subSlots != null && { subSlots: se_SubSlotTypeList(input.subSlots, context) }),
  };
};

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.expressionString != null && { expressionString: input.expressionString }),
  };
};

/**
 * serializeAws_restJson1ConditionalBranch
 */
const se_ConditionalBranch = (input: ConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: se_Condition(input.condition, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextStep != null && { nextStep: se_DialogState(input.nextStep, context) }),
    ...(input.response != null && { response: se_ResponseSpecification(input.response, context) }),
  };
};

/**
 * serializeAws_restJson1ConditionalBranches
 */
const se_ConditionalBranches = (input: ConditionalBranch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConditionalBranch(entry, context);
    });
};

/**
 * serializeAws_restJson1ConditionalSpecification
 */
const se_ConditionalSpecification = (input: ConditionalSpecification, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.conditionalBranches != null && {
      conditionalBranches: se_ConditionalBranches(input.conditionalBranches, context),
    }),
    ...(input.defaultBranch != null && { defaultBranch: se_DefaultConditionalBranch(input.defaultBranch, context) }),
  };
};

/**
 * serializeAws_restJson1ConditionKeyValueMap
 */
const se_ConditionKeyValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ConditionMap
 */
const se_ConditionMap = (input: Record<string, Record<string, string>>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ConditionKeyValueMap(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ConversationLogSettings
 */
const se_ConversationLogSettings = (input: ConversationLogSettings, context: __SerdeContext): any => {
  return {
    ...(input.audioLogSettings != null && {
      audioLogSettings: se_AudioLogSettingsList(input.audioLogSettings, context),
    }),
    ...(input.textLogSettings != null && { textLogSettings: se_TextLogSettingsList(input.textLogSettings, context) }),
  };
};

/**
 * serializeAws_restJson1CreateCustomVocabularyItemsList
 */
const se_CreateCustomVocabularyItemsList = (input: NewCustomVocabularyItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NewCustomVocabularyItem(entry, context);
    });
};

/**
 * serializeAws_restJson1CustomPayload
 */
const se_CustomPayload = (input: CustomPayload, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1CustomVocabularyEntryId
 */
const se_CustomVocabularyEntryId = (input: CustomVocabularyEntryId, context: __SerdeContext): any => {
  return {
    ...(input.itemId != null && { itemId: input.itemId }),
  };
};

/**
 * serializeAws_restJson1CustomVocabularyExportSpecification
 */
const se_CustomVocabularyExportSpecification = (
  input: CustomVocabularyExportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
  };
};

/**
 * serializeAws_restJson1CustomVocabularyImportSpecification
 */
const se_CustomVocabularyImportSpecification = (
  input: CustomVocabularyImportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
  };
};

/**
 * serializeAws_restJson1CustomVocabularyItem
 */
const se_CustomVocabularyItem = (input: CustomVocabularyItem, context: __SerdeContext): any => {
  return {
    ...(input.displayAs != null && { displayAs: input.displayAs }),
    ...(input.itemId != null && { itemId: input.itemId }),
    ...(input.phrase != null && { phrase: input.phrase }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_restJson1DataPrivacy
 */
const se_DataPrivacy = (input: DataPrivacy, context: __SerdeContext): any => {
  return {
    ...(input.childDirected != null && { childDirected: input.childDirected }),
  };
};

/**
 * serializeAws_restJson1DateRangeFilter
 */
const se_DateRangeFilter = (input: DateRangeFilter, context: __SerdeContext): any => {
  return {
    ...(input.endDateTime != null && { endDateTime: Math.round(input.endDateTime.getTime() / 1000) }),
    ...(input.startDateTime != null && { startDateTime: Math.round(input.startDateTime.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1DefaultConditionalBranch
 */
const se_DefaultConditionalBranch = (input: DefaultConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.nextStep != null && { nextStep: se_DialogState(input.nextStep, context) }),
    ...(input.response != null && { response: se_ResponseSpecification(input.response, context) }),
  };
};

/**
 * serializeAws_restJson1DeleteCustomVocabularyItemsList
 */
const se_DeleteCustomVocabularyItemsList = (input: CustomVocabularyEntryId[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomVocabularyEntryId(entry, context);
    });
};

/**
 * serializeAws_restJson1DialogAction
 */
const se_DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return {
    ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
    ...(input.suppressNextMessage != null && { suppressNextMessage: input.suppressNextMessage }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1DialogCodeHookInvocationSetting
 */
const se_DialogCodeHookInvocationSetting = (input: DialogCodeHookInvocationSetting, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.enableCodeHookInvocation != null && { enableCodeHookInvocation: input.enableCodeHookInvocation }),
    ...(input.invocationLabel != null && { invocationLabel: input.invocationLabel }),
    ...(input.postCodeHookSpecification != null && {
      postCodeHookSpecification: se_PostDialogCodeHookInvocationSpecification(input.postCodeHookSpecification, context),
    }),
  };
};

/**
 * serializeAws_restJson1DialogCodeHookSettings
 */
const se_DialogCodeHookSettings = (input: DialogCodeHookSettings, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1DialogState
 */
const se_DialogState = (input: DialogState, context: __SerdeContext): any => {
  return {
    ...(input.dialogAction != null && { dialogAction: se_DialogAction(input.dialogAction, context) }),
    ...(input.intent != null && { intent: se_IntentOverride(input.intent, context) }),
    ...(input.sessionAttributes != null && { sessionAttributes: se_StringMap(input.sessionAttributes, context) }),
  };
};

/**
 * serializeAws_restJson1DTMFSpecification
 */
const se_DTMFSpecification = (input: DTMFSpecification, context: __SerdeContext): any => {
  return {
    ...(input.deletionCharacter != null && { deletionCharacter: input.deletionCharacter }),
    ...(input.endCharacter != null && { endCharacter: input.endCharacter }),
    ...(input.endTimeoutMs != null && { endTimeoutMs: input.endTimeoutMs }),
    ...(input.maxLength != null && { maxLength: input.maxLength }),
  };
};

/**
 * serializeAws_restJson1ElicitationCodeHookInvocationSetting
 */
const se_ElicitationCodeHookInvocationSetting = (
  input: ElicitationCodeHookInvocationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.enableCodeHookInvocation != null && { enableCodeHookInvocation: input.enableCodeHookInvocation }),
    ...(input.invocationLabel != null && { invocationLabel: input.invocationLabel }),
  };
};

/**
 * serializeAws_restJson1EncryptionSetting
 */
const se_EncryptionSetting = (input: EncryptionSetting, context: __SerdeContext): any => {
  return {
    ...(input.associatedTranscriptsPassword != null && {
      associatedTranscriptsPassword: input.associatedTranscriptsPassword,
    }),
    ...(input.botLocaleExportPassword != null && { botLocaleExportPassword: input.botLocaleExportPassword }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

/**
 * serializeAws_restJson1ExportFilter
 */
const se_ExportFilter = (input: ExportFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ExportFilters
 */
const se_ExportFilters = (input: ExportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ExportFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ExportResourceSpecification
 */
const se_ExportResourceSpecification = (input: ExportResourceSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botExportSpecification != null && {
      botExportSpecification: se_BotExportSpecification(input.botExportSpecification, context),
    }),
    ...(input.botLocaleExportSpecification != null && {
      botLocaleExportSpecification: se_BotLocaleExportSpecification(input.botLocaleExportSpecification, context),
    }),
    ...(input.customVocabularyExportSpecification != null && {
      customVocabularyExportSpecification: se_CustomVocabularyExportSpecification(
        input.customVocabularyExportSpecification,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1ExportSortBy
 */
const se_ExportSortBy = (input: ExportSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1ExternalSourceSetting
 */
const se_ExternalSourceSetting = (input: ExternalSourceSetting, context: __SerdeContext): any => {
  return {
    ...(input.grammarSlotTypeSetting != null && {
      grammarSlotTypeSetting: se_GrammarSlotTypeSetting(input.grammarSlotTypeSetting, context),
    }),
  };
};

/**
 * serializeAws_restJson1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FulfillmentCodeHookSettings
 */
const se_FulfillmentCodeHookSettings = (input: FulfillmentCodeHookSettings, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.fulfillmentUpdatesSpecification != null && {
      fulfillmentUpdatesSpecification: se_FulfillmentUpdatesSpecification(
        input.fulfillmentUpdatesSpecification,
        context
      ),
    }),
    ...(input.postFulfillmentStatusSpecification != null && {
      postFulfillmentStatusSpecification: se_PostFulfillmentStatusSpecification(
        input.postFulfillmentStatusSpecification,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1FulfillmentStartResponseSpecification
 */
const se_FulfillmentStartResponseSpecification = (
  input: FulfillmentStartResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.delayInSeconds != null && { delayInSeconds: input.delayInSeconds }),
    ...(input.messageGroups != null && { messageGroups: se_MessageGroupsList(input.messageGroups, context) }),
  };
};

/**
 * serializeAws_restJson1FulfillmentUpdateResponseSpecification
 */
const se_FulfillmentUpdateResponseSpecification = (
  input: FulfillmentUpdateResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds != null && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups != null && { messageGroups: se_MessageGroupsList(input.messageGroups, context) }),
  };
};

/**
 * serializeAws_restJson1FulfillmentUpdatesSpecification
 */
const se_FulfillmentUpdatesSpecification = (input: FulfillmentUpdatesSpecification, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.startResponse != null && {
      startResponse: se_FulfillmentStartResponseSpecification(input.startResponse, context),
    }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
    ...(input.updateResponse != null && {
      updateResponse: se_FulfillmentUpdateResponseSpecification(input.updateResponse, context),
    }),
  };
};

/**
 * serializeAws_restJson1GrammarSlotTypeSetting
 */
const se_GrammarSlotTypeSetting = (input: GrammarSlotTypeSetting, context: __SerdeContext): any => {
  return {
    ...(input.source != null && { source: se_GrammarSlotTypeSource(input.source, context) }),
  };
};

/**
 * serializeAws_restJson1GrammarSlotTypeSource
 */
const se_GrammarSlotTypeSource = (input: GrammarSlotTypeSource, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.s3ObjectKey != null && { s3ObjectKey: input.s3ObjectKey }),
  };
};

/**
 * serializeAws_restJson1ImageResponseCard
 */
const se_ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons != null && { buttons: se_ButtonsList(input.buttons, context) }),
    ...(input.imageUrl != null && { imageUrl: input.imageUrl }),
    ...(input.subtitle != null && { subtitle: input.subtitle }),
    ...(input.title != null && { title: input.title }),
  };
};

/**
 * serializeAws_restJson1ImportFilter
 */
const se_ImportFilter = (input: ImportFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1ImportFilters
 */
const se_ImportFilters = (input: ImportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ImportFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1ImportResourceSpecification
 */
const se_ImportResourceSpecification = (input: ImportResourceSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botImportSpecification != null && {
      botImportSpecification: se_BotImportSpecification(input.botImportSpecification, context),
    }),
    ...(input.botLocaleImportSpecification != null && {
      botLocaleImportSpecification: se_BotLocaleImportSpecification(input.botLocaleImportSpecification, context),
    }),
    ...(input.customVocabularyImportSpecification != null && {
      customVocabularyImportSpecification: se_CustomVocabularyImportSpecification(
        input.customVocabularyImportSpecification,
        context
      ),
    }),
  };
};

/**
 * serializeAws_restJson1ImportSortBy
 */
const se_ImportSortBy = (input: ImportSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1InitialResponseSetting
 */
const se_InitialResponseSetting = (input: InitialResponseSetting, context: __SerdeContext): any => {
  return {
    ...(input.codeHook != null && { codeHook: se_DialogCodeHookInvocationSetting(input.codeHook, context) }),
    ...(input.conditional != null && { conditional: se_ConditionalSpecification(input.conditional, context) }),
    ...(input.initialResponse != null && { initialResponse: se_ResponseSpecification(input.initialResponse, context) }),
    ...(input.nextStep != null && { nextStep: se_DialogState(input.nextStep, context) }),
  };
};

/**
 * serializeAws_restJson1InputContext
 */
const se_InputContext = (input: InputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1InputContextsList
 */
const se_InputContextsList = (input: InputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_InputContext(entry, context);
    });
};

/**
 * serializeAws_restJson1IntentClosingSetting
 */
const se_IntentClosingSetting = (input: IntentClosingSetting, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.closingResponse != null && { closingResponse: se_ResponseSpecification(input.closingResponse, context) }),
    ...(input.conditional != null && { conditional: se_ConditionalSpecification(input.conditional, context) }),
    ...(input.nextStep != null && { nextStep: se_DialogState(input.nextStep, context) }),
  };
};

/**
 * serializeAws_restJson1IntentConfirmationSetting
 */
const se_IntentConfirmationSetting = (input: IntentConfirmationSetting, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.codeHook != null && { codeHook: se_DialogCodeHookInvocationSetting(input.codeHook, context) }),
    ...(input.confirmationConditional != null && {
      confirmationConditional: se_ConditionalSpecification(input.confirmationConditional, context),
    }),
    ...(input.confirmationNextStep != null && {
      confirmationNextStep: se_DialogState(input.confirmationNextStep, context),
    }),
    ...(input.confirmationResponse != null && {
      confirmationResponse: se_ResponseSpecification(input.confirmationResponse, context),
    }),
    ...(input.declinationConditional != null && {
      declinationConditional: se_ConditionalSpecification(input.declinationConditional, context),
    }),
    ...(input.declinationNextStep != null && {
      declinationNextStep: se_DialogState(input.declinationNextStep, context),
    }),
    ...(input.declinationResponse != null && {
      declinationResponse: se_ResponseSpecification(input.declinationResponse, context),
    }),
    ...(input.elicitationCodeHook != null && {
      elicitationCodeHook: se_ElicitationCodeHookInvocationSetting(input.elicitationCodeHook, context),
    }),
    ...(input.failureConditional != null && {
      failureConditional: se_ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && { failureNextStep: se_DialogState(input.failureNextStep, context) }),
    ...(input.failureResponse != null && { failureResponse: se_ResponseSpecification(input.failureResponse, context) }),
    ...(input.promptSpecification != null && {
      promptSpecification: se_PromptSpecification(input.promptSpecification, context),
    }),
  };
};

/**
 * serializeAws_restJson1IntentFilter
 */
const se_IntentFilter = (input: IntentFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1IntentFilters
 */
const se_IntentFilters = (input: IntentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IntentFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1IntentOverride
 */
const se_IntentOverride = (input: IntentOverride, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.slots != null && { slots: se_SlotValueOverrideMap(input.slots, context) }),
  };
};

/**
 * serializeAws_restJson1IntentSortBy
 */
const se_IntentSortBy = (input: IntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1KendraConfiguration
 */
const se_KendraConfiguration = (input: KendraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kendraIndex != null && { kendraIndex: input.kendraIndex }),
    ...(input.queryFilterString != null && { queryFilterString: input.queryFilterString }),
    ...(input.queryFilterStringEnabled != null && { queryFilterStringEnabled: input.queryFilterStringEnabled }),
  };
};

/**
 * serializeAws_restJson1LambdaCodeHook
 */
const se_LambdaCodeHook = (input: LambdaCodeHook, context: __SerdeContext): any => {
  return {
    ...(input.codeHookInterfaceVersion != null && { codeHookInterfaceVersion: input.codeHookInterfaceVersion }),
    ...(input.lambdaARN != null && { lambdaARN: input.lambdaARN }),
  };
};

/**
 * serializeAws_restJson1LexTranscriptFilter
 */
const se_LexTranscriptFilter = (input: LexTranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.dateRangeFilter != null && { dateRangeFilter: se_DateRangeFilter(input.dateRangeFilter, context) }),
  };
};

/**
 * serializeAws_restJson1Message
 */
const se_Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.customPayload != null && { customPayload: se_CustomPayload(input.customPayload, context) }),
    ...(input.imageResponseCard != null && {
      imageResponseCard: se_ImageResponseCard(input.imageResponseCard, context),
    }),
    ...(input.plainTextMessage != null && { plainTextMessage: se_PlainTextMessage(input.plainTextMessage, context) }),
    ...(input.ssmlMessage != null && { ssmlMessage: se_SSMLMessage(input.ssmlMessage, context) }),
  };
};

/**
 * serializeAws_restJson1MessageGroup
 */
const se_MessageGroup = (input: MessageGroup, context: __SerdeContext): any => {
  return {
    ...(input.message != null && { message: se_Message(input.message, context) }),
    ...(input.variations != null && { variations: se_MessageVariationsList(input.variations, context) }),
  };
};

/**
 * serializeAws_restJson1MessageGroupsList
 */
const se_MessageGroupsList = (input: MessageGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_MessageGroup(entry, context);
    });
};

/**
 * serializeAws_restJson1MessageVariationsList
 */
const se_MessageVariationsList = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Message(entry, context);
    });
};

/**
 * serializeAws_restJson1MultipleValuesSetting
 */
const se_MultipleValuesSetting = (input: MultipleValuesSetting, context: __SerdeContext): any => {
  return {
    ...(input.allowMultipleValues != null && { allowMultipleValues: input.allowMultipleValues }),
  };
};

/**
 * serializeAws_restJson1NewCustomVocabularyItem
 */
const se_NewCustomVocabularyItem = (input: NewCustomVocabularyItem, context: __SerdeContext): any => {
  return {
    ...(input.displayAs != null && { displayAs: input.displayAs }),
    ...(input.phrase != null && { phrase: input.phrase }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

/**
 * serializeAws_restJson1ObfuscationSetting
 */
const se_ObfuscationSetting = (input: ObfuscationSetting, context: __SerdeContext): any => {
  return {
    ...(input.obfuscationSettingType != null && { obfuscationSettingType: input.obfuscationSettingType }),
  };
};

/**
 * serializeAws_restJson1ObjectPrefixes
 */
const se_ObjectPrefixes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OperationList
 */
const se_OperationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OutputContext
 */
const se_OutputContext = (input: OutputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive != null && { turnsToLive: input.turnsToLive }),
  };
};

/**
 * serializeAws_restJson1OutputContextsList
 */
const se_OutputContextsList = (input: OutputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OutputContext(entry, context);
    });
};

/**
 * serializeAws_restJson1PathFormat
 */
const se_PathFormat = (input: PathFormat, context: __SerdeContext): any => {
  return {
    ...(input.objectPrefixes != null && { objectPrefixes: se_ObjectPrefixes(input.objectPrefixes, context) }),
  };
};

/**
 * serializeAws_restJson1PlainTextMessage
 */
const se_PlainTextMessage = (input: PlainTextMessage, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1PostDialogCodeHookInvocationSpecification
 */
const se_PostDialogCodeHookInvocationSpecification = (
  input: PostDialogCodeHookInvocationSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureConditional != null && {
      failureConditional: se_ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && { failureNextStep: se_DialogState(input.failureNextStep, context) }),
    ...(input.failureResponse != null && { failureResponse: se_ResponseSpecification(input.failureResponse, context) }),
    ...(input.successConditional != null && {
      successConditional: se_ConditionalSpecification(input.successConditional, context),
    }),
    ...(input.successNextStep != null && { successNextStep: se_DialogState(input.successNextStep, context) }),
    ...(input.successResponse != null && { successResponse: se_ResponseSpecification(input.successResponse, context) }),
    ...(input.timeoutConditional != null && {
      timeoutConditional: se_ConditionalSpecification(input.timeoutConditional, context),
    }),
    ...(input.timeoutNextStep != null && { timeoutNextStep: se_DialogState(input.timeoutNextStep, context) }),
    ...(input.timeoutResponse != null && { timeoutResponse: se_ResponseSpecification(input.timeoutResponse, context) }),
  };
};

/**
 * serializeAws_restJson1PostFulfillmentStatusSpecification
 */
const se_PostFulfillmentStatusSpecification = (
  input: PostFulfillmentStatusSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureConditional != null && {
      failureConditional: se_ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && { failureNextStep: se_DialogState(input.failureNextStep, context) }),
    ...(input.failureResponse != null && { failureResponse: se_ResponseSpecification(input.failureResponse, context) }),
    ...(input.successConditional != null && {
      successConditional: se_ConditionalSpecification(input.successConditional, context),
    }),
    ...(input.successNextStep != null && { successNextStep: se_DialogState(input.successNextStep, context) }),
    ...(input.successResponse != null && { successResponse: se_ResponseSpecification(input.successResponse, context) }),
    ...(input.timeoutConditional != null && {
      timeoutConditional: se_ConditionalSpecification(input.timeoutConditional, context),
    }),
    ...(input.timeoutNextStep != null && { timeoutNextStep: se_DialogState(input.timeoutNextStep, context) }),
    ...(input.timeoutResponse != null && { timeoutResponse: se_ResponseSpecification(input.timeoutResponse, context) }),
  };
};

/**
 * serializeAws_restJson1Principal
 */
const se_Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.service != null && { service: input.service }),
  };
};

/**
 * serializeAws_restJson1PrincipalList
 */
const se_PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Principal(entry, context);
    });
};

/**
 * serializeAws_restJson1PromptAttemptSpecification
 */
const se_PromptAttemptSpecification = (input: PromptAttemptSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.allowedInputTypes != null && {
      allowedInputTypes: se_AllowedInputTypes(input.allowedInputTypes, context),
    }),
    ...(input.audioAndDTMFInputSpecification != null && {
      audioAndDTMFInputSpecification: se_AudioAndDTMFInputSpecification(input.audioAndDTMFInputSpecification, context),
    }),
    ...(input.textInputSpecification != null && {
      textInputSpecification: se_TextInputSpecification(input.textInputSpecification, context),
    }),
  };
};

/**
 * serializeAws_restJson1PromptAttemptsSpecificationMap
 */
const se_PromptAttemptsSpecificationMap = (
  input: Record<string, PromptAttemptSpecification>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [PromptAttempt | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_PromptAttemptSpecification(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PromptSpecification
 */
const se_PromptSpecification = (input: PromptSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.maxRetries != null && { maxRetries: input.maxRetries }),
    ...(input.messageGroups != null && { messageGroups: se_MessageGroupsList(input.messageGroups, context) }),
    ...(input.messageSelectionStrategy != null && { messageSelectionStrategy: input.messageSelectionStrategy }),
    ...(input.promptAttemptsSpecification != null && {
      promptAttemptsSpecification: se_PromptAttemptsSpecificationMap(input.promptAttemptsSpecification, context),
    }),
  };
};

/**
 * serializeAws_restJson1RelativeAggregationDuration
 */
const se_RelativeAggregationDuration = (input: RelativeAggregationDuration, context: __SerdeContext): any => {
  return {
    ...(input.timeDimension != null && { timeDimension: input.timeDimension }),
    ...(input.timeValue != null && { timeValue: input.timeValue }),
  };
};

/**
 * serializeAws_restJson1ResponseSpecification
 */
const se_ResponseSpecification = (input: ResponseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.messageGroups != null && { messageGroups: se_MessageGroupsList(input.messageGroups, context) }),
  };
};

/**
 * serializeAws_restJson1S3BucketLogDestination
 */
const se_S3BucketLogDestination = (input: S3BucketLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.logPrefix != null && { logPrefix: input.logPrefix }),
    ...(input.s3BucketArn != null && { s3BucketArn: input.s3BucketArn }),
  };
};

/**
 * serializeAws_restJson1S3BucketTranscriptSource
 */
const se_S3BucketTranscriptSource = (input: S3BucketTranscriptSource, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.pathFormat != null && { pathFormat: se_PathFormat(input.pathFormat, context) }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.transcriptFilter != null && { transcriptFilter: se_TranscriptFilter(input.transcriptFilter, context) }),
    ...(input.transcriptFormat != null && { transcriptFormat: input.transcriptFormat }),
  };
};

/**
 * serializeAws_restJson1SampleUtterance
 */
const se_SampleUtterance = (input: SampleUtterance, context: __SerdeContext): any => {
  return {
    ...(input.utterance != null && { utterance: input.utterance }),
  };
};

/**
 * serializeAws_restJson1SampleUtterancesList
 */
const se_SampleUtterancesList = (input: SampleUtterance[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SampleUtterance(entry, context);
    });
};

/**
 * serializeAws_restJson1SampleValue
 */
const se_SampleValue = (input: SampleValue, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1SentimentAnalysisSettings
 */
const se_SentimentAnalysisSettings = (input: SentimentAnalysisSettings, context: __SerdeContext): any => {
  return {
    ...(input.detectSentiment != null && { detectSentiment: input.detectSentiment }),
  };
};

/**
 * serializeAws_restJson1SlotCaptureSetting
 */
const se_SlotCaptureSetting = (input: SlotCaptureSetting, context: __SerdeContext): any => {
  return {
    ...(input.captureConditional != null && {
      captureConditional: se_ConditionalSpecification(input.captureConditional, context),
    }),
    ...(input.captureNextStep != null && { captureNextStep: se_DialogState(input.captureNextStep, context) }),
    ...(input.captureResponse != null && { captureResponse: se_ResponseSpecification(input.captureResponse, context) }),
    ...(input.codeHook != null && { codeHook: se_DialogCodeHookInvocationSetting(input.codeHook, context) }),
    ...(input.elicitationCodeHook != null && {
      elicitationCodeHook: se_ElicitationCodeHookInvocationSetting(input.elicitationCodeHook, context),
    }),
    ...(input.failureConditional != null && {
      failureConditional: se_ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && { failureNextStep: se_DialogState(input.failureNextStep, context) }),
    ...(input.failureResponse != null && { failureResponse: se_ResponseSpecification(input.failureResponse, context) }),
  };
};

/**
 * serializeAws_restJson1SlotDefaultValue
 */
const se_SlotDefaultValue = (input: SlotDefaultValue, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
  };
};

/**
 * serializeAws_restJson1SlotDefaultValueList
 */
const se_SlotDefaultValueList = (input: SlotDefaultValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SlotDefaultValue(entry, context);
    });
};

/**
 * serializeAws_restJson1SlotDefaultValueSpecification
 */
const se_SlotDefaultValueSpecification = (input: SlotDefaultValueSpecification, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueList != null && {
      defaultValueList: se_SlotDefaultValueList(input.defaultValueList, context),
    }),
  };
};

/**
 * serializeAws_restJson1SlotFilter
 */
const se_SlotFilter = (input: SlotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SlotFilters
 */
const se_SlotFilters = (input: SlotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SlotFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SlotPrioritiesList
 */
const se_SlotPrioritiesList = (input: SlotPriority[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SlotPriority(entry, context);
    });
};

/**
 * serializeAws_restJson1SlotPriority
 */
const se_SlotPriority = (input: SlotPriority, context: __SerdeContext): any => {
  return {
    ...(input.priority != null && { priority: input.priority }),
    ...(input.slotId != null && { slotId: input.slotId }),
  };
};

/**
 * serializeAws_restJson1SlotSortBy
 */
const se_SlotSortBy = (input: SlotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1SlotTypeFilter
 */
const se_SlotTypeFilter = (input: SlotTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: se_FilterValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SlotTypeFilters
 */
const se_SlotTypeFilters = (input: SlotTypeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SlotTypeFilter(entry, context);
    });
};

/**
 * serializeAws_restJson1SlotTypeSortBy
 */
const se_SlotTypeSortBy = (input: SlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

/**
 * serializeAws_restJson1SlotTypeValue
 */
const se_SlotTypeValue = (input: SlotTypeValue, context: __SerdeContext): any => {
  return {
    ...(input.sampleValue != null && { sampleValue: se_SampleValue(input.sampleValue, context) }),
    ...(input.synonyms != null && { synonyms: se_SynonymList(input.synonyms, context) }),
  };
};

/**
 * serializeAws_restJson1SlotTypeValues
 */
const se_SlotTypeValues = (input: SlotTypeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SlotTypeValue(entry, context);
    });
};

/**
 * serializeAws_restJson1SlotValue
 */
const se_SlotValue = (input: SlotValue, context: __SerdeContext): any => {
  return {
    ...(input.interpretedValue != null && { interpretedValue: input.interpretedValue }),
  };
};

/**
 * serializeAws_restJson1SlotValueElicitationSetting
 */
const se_SlotValueElicitationSetting = (input: SlotValueElicitationSetting, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueSpecification != null && {
      defaultValueSpecification: se_SlotDefaultValueSpecification(input.defaultValueSpecification, context),
    }),
    ...(input.promptSpecification != null && {
      promptSpecification: se_PromptSpecification(input.promptSpecification, context),
    }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: se_SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.slotCaptureSetting != null && {
      slotCaptureSetting: se_SlotCaptureSetting(input.slotCaptureSetting, context),
    }),
    ...(input.slotConstraint != null && { slotConstraint: input.slotConstraint }),
    ...(input.waitAndContinueSpecification != null && {
      waitAndContinueSpecification: se_WaitAndContinueSpecification(input.waitAndContinueSpecification, context),
    }),
  };
};

/**
 * serializeAws_restJson1SlotValueOverride
 */
const se_SlotValueOverride = (input: SlotValueOverride, context: __SerdeContext): any => {
  return {
    ...(input.shape != null && { shape: input.shape }),
    ...(input.value != null && { value: se_SlotValue(input.value, context) }),
    ...(input.values != null && { values: se_SlotValues(input.values, context) }),
  };
};

/**
 * serializeAws_restJson1SlotValueOverrideMap
 */
const se_SlotValueOverrideMap = (input: Record<string, SlotValueOverride>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_SlotValueOverride(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SlotValueRegexFilter
 */
const se_SlotValueRegexFilter = (input: SlotValueRegexFilter, context: __SerdeContext): any => {
  return {
    ...(input.pattern != null && { pattern: input.pattern }),
  };
};

/**
 * serializeAws_restJson1SlotValues
 */
const se_SlotValues = (input: SlotValueOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SlotValueOverride(entry, context);
    });
};

/**
 * serializeAws_restJson1SlotValueSelectionSetting
 */
const se_SlotValueSelectionSetting = (input: SlotValueSelectionSetting, context: __SerdeContext): any => {
  return {
    ...(input.advancedRecognitionSetting != null && {
      advancedRecognitionSetting: se_AdvancedRecognitionSetting(input.advancedRecognitionSetting, context),
    }),
    ...(input.regexFilter != null && { regexFilter: se_SlotValueRegexFilter(input.regexFilter, context) }),
    ...(input.resolutionStrategy != null && { resolutionStrategy: input.resolutionStrategy }),
  };
};

/**
 * serializeAws_restJson1Specifications
 */
const se_Specifications = (input: Specifications, context: __SerdeContext): any => {
  return {
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
    ...(input.valueElicitationSetting != null && {
      valueElicitationSetting: se_SubSlotValueElicitationSetting(input.valueElicitationSetting, context),
    }),
  };
};

/**
 * serializeAws_restJson1SSMLMessage
 */
const se_SSMLMessage = (input: SSMLMessage, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1StillWaitingResponseSpecification
 */
const se_StillWaitingResponseSpecification = (
  input: StillWaitingResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds != null && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups != null && { messageGroups: se_MessageGroupsList(input.messageGroups, context) }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

/**
 * serializeAws_restJson1StringMap
 */
const se_StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SubSlotSetting
 */
const se_SubSlotSetting = (input: SubSlotSetting, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.slotSpecifications != null && {
      slotSpecifications: se_SubSlotSpecificationMap(input.slotSpecifications, context),
    }),
  };
};

/**
 * serializeAws_restJson1SubSlotSpecificationMap
 */
const se_SubSlotSpecificationMap = (input: Record<string, Specifications>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_Specifications(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SubSlotTypeComposition
 */
const se_SubSlotTypeComposition = (input: SubSlotTypeComposition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
  };
};

/**
 * serializeAws_restJson1SubSlotTypeList
 */
const se_SubSlotTypeList = (input: SubSlotTypeComposition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SubSlotTypeComposition(entry, context);
    });
};

/**
 * serializeAws_restJson1SubSlotValueElicitationSetting
 */
const se_SubSlotValueElicitationSetting = (input: SubSlotValueElicitationSetting, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueSpecification != null && {
      defaultValueSpecification: se_SlotDefaultValueSpecification(input.defaultValueSpecification, context),
    }),
    ...(input.promptSpecification != null && {
      promptSpecification: se_PromptSpecification(input.promptSpecification, context),
    }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: se_SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.waitAndContinueSpecification != null && {
      waitAndContinueSpecification: se_WaitAndContinueSpecification(input.waitAndContinueSpecification, context),
    }),
  };
};

/**
 * serializeAws_restJson1SynonymList
 */
const se_SynonymList = (input: SampleValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SampleValue(entry, context);
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1TextInputSpecification
 */
const se_TextInputSpecification = (input: TextInputSpecification, context: __SerdeContext): any => {
  return {
    ...(input.startTimeoutMs != null && { startTimeoutMs: input.startTimeoutMs }),
  };
};

/**
 * serializeAws_restJson1TextLogDestination
 */
const se_TextLogDestination = (input: TextLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatch != null && { cloudWatch: se_CloudWatchLogGroupLogDestination(input.cloudWatch, context) }),
  };
};

/**
 * serializeAws_restJson1TextLogSetting
 */
const se_TextLogSetting = (input: TextLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && { destination: se_TextLogDestination(input.destination, context) }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

/**
 * serializeAws_restJson1TextLogSettingsList
 */
const se_TextLogSettingsList = (input: TextLogSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_TextLogSetting(entry, context);
    });
};

/**
 * serializeAws_restJson1TranscriptFilter
 */
const se_TranscriptFilter = (input: TranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.lexTranscriptFilter != null && {
      lexTranscriptFilter: se_LexTranscriptFilter(input.lexTranscriptFilter, context),
    }),
  };
};

/**
 * serializeAws_restJson1TranscriptSourceSetting
 */
const se_TranscriptSourceSetting = (input: TranscriptSourceSetting, context: __SerdeContext): any => {
  return {
    ...(input.s3BucketTranscriptSource != null && {
      s3BucketTranscriptSource: se_S3BucketTranscriptSource(input.s3BucketTranscriptSource, context),
    }),
  };
};

/**
 * serializeAws_restJson1UpdateCustomVocabularyItemsList
 */
const se_UpdateCustomVocabularyItemsList = (input: CustomVocabularyItem[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CustomVocabularyItem(entry, context);
    });
};

/**
 * serializeAws_restJson1UtteranceAggregationDuration
 */
const se_UtteranceAggregationDuration = (input: UtteranceAggregationDuration, context: __SerdeContext): any => {
  return {
    ...(input.relativeAggregationDuration != null && {
      relativeAggregationDuration: se_RelativeAggregationDuration(input.relativeAggregationDuration, context),
    }),
  };
};

/**
 * serializeAws_restJson1VoiceSettings
 */
const se_VoiceSettings = (input: VoiceSettings, context: __SerdeContext): any => {
  return {
    ...(input.engine != null && { engine: input.engine }),
    ...(input.voiceId != null && { voiceId: input.voiceId }),
  };
};

/**
 * serializeAws_restJson1WaitAndContinueSpecification
 */
const se_WaitAndContinueSpecification = (input: WaitAndContinueSpecification, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.continueResponse != null && {
      continueResponse: se_ResponseSpecification(input.continueResponse, context),
    }),
    ...(input.stillWaitingResponse != null && {
      stillWaitingResponse: se_StillWaitingResponseSpecification(input.stillWaitingResponse, context),
    }),
    ...(input.waitingResponse != null && { waitingResponse: se_ResponseSpecification(input.waitingResponse, context) }),
  };
};

/**
 * deserializeAws_restJson1AdvancedRecognitionSetting
 */
const de_AdvancedRecognitionSetting = (output: any, context: __SerdeContext): AdvancedRecognitionSetting => {
  return {
    audioRecognitionStrategy: __expectString(output.audioRecognitionStrategy),
  } as any;
};

/**
 * deserializeAws_restJson1AggregatedUtterancesSummary
 */
const de_AggregatedUtterancesSummary = (output: any, context: __SerdeContext): AggregatedUtterancesSummary => {
  return {
    containsDataFromDeletedResources: __expectBoolean(output.containsDataFromDeletedResources),
    hitCount: __expectInt32(output.hitCount),
    missedCount: __expectInt32(output.missedCount),
    utterance: __expectString(output.utterance),
    utteranceFirstRecordedInAggregationDuration:
      output.utteranceFirstRecordedInAggregationDuration != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.utteranceFirstRecordedInAggregationDuration)))
        : undefined,
    utteranceLastRecordedInAggregationDuration:
      output.utteranceLastRecordedInAggregationDuration != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.utteranceLastRecordedInAggregationDuration)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AggregatedUtterancesSummaryList
 */
const de_AggregatedUtterancesSummaryList = (output: any, context: __SerdeContext): AggregatedUtterancesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AggregatedUtterancesSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AllowedInputTypes
 */
const de_AllowedInputTypes = (output: any, context: __SerdeContext): AllowedInputTypes => {
  return {
    allowAudioInput: __expectBoolean(output.allowAudioInput),
    allowDTMFInput: __expectBoolean(output.allowDTMFInput),
  } as any;
};

/**
 * deserializeAws_restJson1AssociatedTranscript
 */
const de_AssociatedTranscript = (output: any, context: __SerdeContext): AssociatedTranscript => {
  return {
    transcript: __expectString(output.transcript),
  } as any;
};

/**
 * deserializeAws_restJson1AssociatedTranscriptList
 */
const de_AssociatedTranscriptList = (output: any, context: __SerdeContext): AssociatedTranscript[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociatedTranscript(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudioAndDTMFInputSpecification
 */
const de_AudioAndDTMFInputSpecification = (output: any, context: __SerdeContext): AudioAndDTMFInputSpecification => {
  return {
    audioSpecification:
      output.audioSpecification != null ? de_AudioSpecification(output.audioSpecification, context) : undefined,
    dtmfSpecification:
      output.dtmfSpecification != null ? de_DTMFSpecification(output.dtmfSpecification, context) : undefined,
    startTimeoutMs: __expectInt32(output.startTimeoutMs),
  } as any;
};

/**
 * deserializeAws_restJson1AudioLogDestination
 */
const de_AudioLogDestination = (output: any, context: __SerdeContext): AudioLogDestination => {
  return {
    s3Bucket: output.s3Bucket != null ? de_S3BucketLogDestination(output.s3Bucket, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AudioLogSetting
 */
const de_AudioLogSetting = (output: any, context: __SerdeContext): AudioLogSetting => {
  return {
    destination: output.destination != null ? de_AudioLogDestination(output.destination, context) : undefined,
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1AudioLogSettingsList
 */
const de_AudioLogSettingsList = (output: any, context: __SerdeContext): AudioLogSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AudioLogSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AudioSpecification
 */
const de_AudioSpecification = (output: any, context: __SerdeContext): AudioSpecification => {
  return {
    endTimeoutMs: __expectInt32(output.endTimeoutMs),
    maxLengthMs: __expectInt32(output.maxLengthMs),
  } as any;
};

/**
 * deserializeAws_restJson1BotAliasHistoryEvent
 */
const de_BotAliasHistoryEvent = (output: any, context: __SerdeContext): BotAliasHistoryEvent => {
  return {
    botVersion: __expectString(output.botVersion),
    endDate:
      output.endDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endDate))) : undefined,
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotAliasHistoryEventsList
 */
const de_BotAliasHistoryEventsList = (output: any, context: __SerdeContext): BotAliasHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotAliasHistoryEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotAliasLocaleSettings
 */
const de_BotAliasLocaleSettings = (output: any, context: __SerdeContext): BotAliasLocaleSettings => {
  return {
    codeHookSpecification:
      output.codeHookSpecification != null
        ? de_CodeHookSpecification(output.codeHookSpecification, context)
        : undefined,
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1BotAliasLocaleSettingsMap
 */
const de_BotAliasLocaleSettingsMap = (output: any, context: __SerdeContext): Record<string, BotAliasLocaleSettings> => {
  return Object.entries(output).reduce((acc: Record<string, BotAliasLocaleSettings>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_BotAliasLocaleSettings(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BotAliasSummary
 */
const de_BotAliasSummary = (output: any, context: __SerdeContext): BotAliasSummary => {
  return {
    botAliasId: __expectString(output.botAliasId),
    botAliasName: __expectString(output.botAliasName),
    botAliasStatus: __expectString(output.botAliasStatus),
    botVersion: __expectString(output.botVersion),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotAliasSummaryList
 */
const de_BotAliasSummaryList = (output: any, context: __SerdeContext): BotAliasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotAliasSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotExportSpecification
 */
const de_BotExportSpecification = (output: any, context: __SerdeContext): BotExportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
  } as any;
};

/**
 * deserializeAws_restJson1BotImportSpecification
 */
const de_BotImportSpecification = (output: any, context: __SerdeContext): BotImportSpecification => {
  return {
    botName: __expectString(output.botName),
    botTags: output.botTags != null ? de_TagMap(output.botTags, context) : undefined,
    dataPrivacy: output.dataPrivacy != null ? de_DataPrivacy(output.dataPrivacy, context) : undefined,
    idleSessionTTLInSeconds: __expectInt32(output.idleSessionTTLInSeconds),
    roleArn: __expectString(output.roleArn),
    testBotAliasTags: output.testBotAliasTags != null ? de_TagMap(output.testBotAliasTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotLocaleExportSpecification
 */
const de_BotLocaleExportSpecification = (output: any, context: __SerdeContext): BotLocaleExportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
  } as any;
};

/**
 * deserializeAws_restJson1BotLocaleHistoryEvent
 */
const de_BotLocaleHistoryEvent = (output: any, context: __SerdeContext): BotLocaleHistoryEvent => {
  return {
    event: __expectString(output.event),
    eventDate:
      output.eventDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotLocaleHistoryEventsList
 */
const de_BotLocaleHistoryEventsList = (output: any, context: __SerdeContext): BotLocaleHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotLocaleHistoryEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotLocaleImportSpecification
 */
const de_BotLocaleImportSpecification = (output: any, context: __SerdeContext): BotLocaleImportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
    nluIntentConfidenceThreshold: __limitedParseDouble(output.nluIntentConfidenceThreshold),
    voiceSettings: output.voiceSettings != null ? de_VoiceSettings(output.voiceSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotLocaleSummary
 */
const de_BotLocaleSummary = (output: any, context: __SerdeContext): BotLocaleSummary => {
  return {
    botLocaleStatus: __expectString(output.botLocaleStatus),
    description: __expectString(output.description),
    lastBuildSubmittedDateTime:
      output.lastBuildSubmittedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastBuildSubmittedDateTime)))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    localeId: __expectString(output.localeId),
    localeName: __expectString(output.localeName),
  } as any;
};

/**
 * deserializeAws_restJson1BotLocaleSummaryList
 */
const de_BotLocaleSummaryList = (output: any, context: __SerdeContext): BotLocaleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotLocaleSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotMember
 */
const de_BotMember = (output: any, context: __SerdeContext): BotMember => {
  return {
    botMemberAliasId: __expectString(output.botMemberAliasId),
    botMemberAliasName: __expectString(output.botMemberAliasName),
    botMemberId: __expectString(output.botMemberId),
    botMemberName: __expectString(output.botMemberName),
    botMemberVersion: __expectString(output.botMemberVersion),
  } as any;
};

/**
 * deserializeAws_restJson1BotMembers
 */
const de_BotMembers = (output: any, context: __SerdeContext): BotMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotRecommendationResults
 */
const de_BotRecommendationResults = (output: any, context: __SerdeContext): BotRecommendationResults => {
  return {
    associatedTranscriptsUrl: __expectString(output.associatedTranscriptsUrl),
    botLocaleExportUrl: __expectString(output.botLocaleExportUrl),
    statistics:
      output.statistics != null ? de_BotRecommendationResultStatistics(output.statistics, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotRecommendationResultStatistics
 */
const de_BotRecommendationResultStatistics = (
  output: any,
  context: __SerdeContext
): BotRecommendationResultStatistics => {
  return {
    intents: output.intents != null ? de_IntentStatistics(output.intents, context) : undefined,
    slotTypes: output.slotTypes != null ? de_SlotTypeStatistics(output.slotTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotRecommendationSummary
 */
const de_BotRecommendationSummary = (output: any, context: __SerdeContext): BotRecommendationSummary => {
  return {
    botRecommendationId: __expectString(output.botRecommendationId),
    botRecommendationStatus: __expectString(output.botRecommendationStatus),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BotRecommendationSummaryList
 */
const de_BotRecommendationSummaryList = (output: any, context: __SerdeContext): BotRecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotRecommendationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotSummary
 */
const de_BotSummary = (output: any, context: __SerdeContext): BotSummary => {
  return {
    botId: __expectString(output.botId),
    botName: __expectString(output.botName),
    botStatus: __expectString(output.botStatus),
    botType: __expectString(output.botType),
    description: __expectString(output.description),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    latestBotVersion: __expectString(output.latestBotVersion),
  } as any;
};

/**
 * deserializeAws_restJson1BotSummaryList
 */
const de_BotSummaryList = (output: any, context: __SerdeContext): BotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotVersionLocaleDetails
 */
const de_BotVersionLocaleDetails = (output: any, context: __SerdeContext): BotVersionLocaleDetails => {
  return {
    sourceBotVersion: __expectString(output.sourceBotVersion),
  } as any;
};

/**
 * deserializeAws_restJson1BotVersionLocaleSpecification
 */
const de_BotVersionLocaleSpecification = (
  output: any,
  context: __SerdeContext
): Record<string, BotVersionLocaleDetails> => {
  return Object.entries(output).reduce((acc: Record<string, BotVersionLocaleDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_BotVersionLocaleDetails(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BotVersionSummary
 */
const de_BotVersionSummary = (output: any, context: __SerdeContext): BotVersionSummary => {
  return {
    botName: __expectString(output.botName),
    botStatus: __expectString(output.botStatus),
    botVersion: __expectString(output.botVersion),
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
  } as any;
};

/**
 * deserializeAws_restJson1BotVersionSummaryList
 */
const de_BotVersionSummaryList = (output: any, context: __SerdeContext): BotVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BotVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BuiltInIntentSummary
 */
const de_BuiltInIntentSummary = (output: any, context: __SerdeContext): BuiltInIntentSummary => {
  return {
    description: __expectString(output.description),
    intentSignature: __expectString(output.intentSignature),
  } as any;
};

/**
 * deserializeAws_restJson1BuiltInIntentSummaryList
 */
const de_BuiltInIntentSummaryList = (output: any, context: __SerdeContext): BuiltInIntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuiltInIntentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BuiltInSlotTypeSummary
 */
const de_BuiltInSlotTypeSummary = (output: any, context: __SerdeContext): BuiltInSlotTypeSummary => {
  return {
    description: __expectString(output.description),
    slotTypeSignature: __expectString(output.slotTypeSignature),
  } as any;
};

/**
 * deserializeAws_restJson1BuiltInSlotTypeSummaryList
 */
const de_BuiltInSlotTypeSummaryList = (output: any, context: __SerdeContext): BuiltInSlotTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BuiltInSlotTypeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Button
 */
const de_Button = (output: any, context: __SerdeContext): Button => {
  return {
    text: __expectString(output.text),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1ButtonsList
 */
const de_ButtonsList = (output: any, context: __SerdeContext): Button[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Button(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CloudWatchLogGroupLogDestination
 */
const de_CloudWatchLogGroupLogDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogGroupLogDestination => {
  return {
    cloudWatchLogGroupArn: __expectString(output.cloudWatchLogGroupArn),
    logPrefix: __expectString(output.logPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1CodeHookSpecification
 */
const de_CodeHookSpecification = (output: any, context: __SerdeContext): CodeHookSpecification => {
  return {
    lambdaCodeHook: output.lambdaCodeHook != null ? de_LambdaCodeHook(output.lambdaCodeHook, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CompositeSlotTypeSetting
 */
const de_CompositeSlotTypeSetting = (output: any, context: __SerdeContext): CompositeSlotTypeSetting => {
  return {
    subSlots: output.subSlots != null ? de_SubSlotTypeList(output.subSlots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    expressionString: __expectString(output.expressionString),
  } as any;
};

/**
 * deserializeAws_restJson1ConditionalBranch
 */
const de_ConditionalBranch = (output: any, context: __SerdeContext): ConditionalBranch => {
  return {
    condition: output.condition != null ? de_Condition(output.condition, context) : undefined,
    name: __expectString(output.name),
    nextStep: output.nextStep != null ? de_DialogState(output.nextStep, context) : undefined,
    response: output.response != null ? de_ResponseSpecification(output.response, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConditionalBranches
 */
const de_ConditionalBranches = (output: any, context: __SerdeContext): ConditionalBranch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConditionalBranch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConditionalSpecification
 */
const de_ConditionalSpecification = (output: any, context: __SerdeContext): ConditionalSpecification => {
  return {
    active: __expectBoolean(output.active),
    conditionalBranches:
      output.conditionalBranches != null ? de_ConditionalBranches(output.conditionalBranches, context) : undefined,
    defaultBranch:
      output.defaultBranch != null ? de_DefaultConditionalBranch(output.defaultBranch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConversationLogSettings
 */
const de_ConversationLogSettings = (output: any, context: __SerdeContext): ConversationLogSettings => {
  return {
    audioLogSettings:
      output.audioLogSettings != null ? de_AudioLogSettingsList(output.audioLogSettings, context) : undefined,
    textLogSettings:
      output.textLogSettings != null ? de_TextLogSettingsList(output.textLogSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CustomPayload
 */
const de_CustomPayload = (output: any, context: __SerdeContext): CustomPayload => {
  return {
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1CustomVocabularyExportSpecification
 */
const de_CustomVocabularyExportSpecification = (
  output: any,
  context: __SerdeContext
): CustomVocabularyExportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
  } as any;
};

/**
 * deserializeAws_restJson1CustomVocabularyImportSpecification
 */
const de_CustomVocabularyImportSpecification = (
  output: any,
  context: __SerdeContext
): CustomVocabularyImportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
  } as any;
};

/**
 * deserializeAws_restJson1CustomVocabularyItem
 */
const de_CustomVocabularyItem = (output: any, context: __SerdeContext): CustomVocabularyItem => {
  return {
    displayAs: __expectString(output.displayAs),
    itemId: __expectString(output.itemId),
    phrase: __expectString(output.phrase),
    weight: __expectInt32(output.weight),
  } as any;
};

/**
 * deserializeAws_restJson1CustomVocabularyItems
 */
const de_CustomVocabularyItems = (output: any, context: __SerdeContext): CustomVocabularyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomVocabularyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataPrivacy
 */
const de_DataPrivacy = (output: any, context: __SerdeContext): DataPrivacy => {
  return {
    childDirected: __expectBoolean(output.childDirected),
  } as any;
};

/**
 * deserializeAws_restJson1DateRangeFilter
 */
const de_DateRangeFilter = (output: any, context: __SerdeContext): DateRangeFilter => {
  return {
    endDateTime:
      output.endDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endDateTime)))
        : undefined,
    startDateTime:
      output.startDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDateTime)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DefaultConditionalBranch
 */
const de_DefaultConditionalBranch = (output: any, context: __SerdeContext): DefaultConditionalBranch => {
  return {
    nextStep: output.nextStep != null ? de_DialogState(output.nextStep, context) : undefined,
    response: output.response != null ? de_ResponseSpecification(output.response, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DialogAction
 */
const de_DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return {
    slotToElicit: __expectString(output.slotToElicit),
    suppressNextMessage: __expectBoolean(output.suppressNextMessage),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1DialogCodeHookInvocationSetting
 */
const de_DialogCodeHookInvocationSetting = (output: any, context: __SerdeContext): DialogCodeHookInvocationSetting => {
  return {
    active: __expectBoolean(output.active),
    enableCodeHookInvocation: __expectBoolean(output.enableCodeHookInvocation),
    invocationLabel: __expectString(output.invocationLabel),
    postCodeHookSpecification:
      output.postCodeHookSpecification != null
        ? de_PostDialogCodeHookInvocationSpecification(output.postCodeHookSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DialogCodeHookSettings
 */
const de_DialogCodeHookSettings = (output: any, context: __SerdeContext): DialogCodeHookSettings => {
  return {
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1DialogState
 */
const de_DialogState = (output: any, context: __SerdeContext): DialogState => {
  return {
    dialogAction: output.dialogAction != null ? de_DialogAction(output.dialogAction, context) : undefined,
    intent: output.intent != null ? de_IntentOverride(output.intent, context) : undefined,
    sessionAttributes: output.sessionAttributes != null ? de_StringMap(output.sessionAttributes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DTMFSpecification
 */
const de_DTMFSpecification = (output: any, context: __SerdeContext): DTMFSpecification => {
  return {
    deletionCharacter: __expectString(output.deletionCharacter),
    endCharacter: __expectString(output.endCharacter),
    endTimeoutMs: __expectInt32(output.endTimeoutMs),
    maxLength: __expectInt32(output.maxLength),
  } as any;
};

/**
 * deserializeAws_restJson1ElicitationCodeHookInvocationSetting
 */
const de_ElicitationCodeHookInvocationSetting = (
  output: any,
  context: __SerdeContext
): ElicitationCodeHookInvocationSetting => {
  return {
    enableCodeHookInvocation: __expectBoolean(output.enableCodeHookInvocation),
    invocationLabel: __expectString(output.invocationLabel),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionSetting
 */
const de_EncryptionSetting = (output: any, context: __SerdeContext): EncryptionSetting => {
  return {
    associatedTranscriptsPassword: __expectString(output.associatedTranscriptsPassword),
    botLocaleExportPassword: __expectString(output.botLocaleExportPassword),
    kmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

/**
 * deserializeAws_restJson1ExportResourceSpecification
 */
const de_ExportResourceSpecification = (output: any, context: __SerdeContext): ExportResourceSpecification => {
  return {
    botExportSpecification:
      output.botExportSpecification != null
        ? de_BotExportSpecification(output.botExportSpecification, context)
        : undefined,
    botLocaleExportSpecification:
      output.botLocaleExportSpecification != null
        ? de_BotLocaleExportSpecification(output.botLocaleExportSpecification, context)
        : undefined,
    customVocabularyExportSpecification:
      output.customVocabularyExportSpecification != null
        ? de_CustomVocabularyExportSpecification(output.customVocabularyExportSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExportSummary
 */
const de_ExportSummary = (output: any, context: __SerdeContext): ExportSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    exportId: __expectString(output.exportId),
    exportStatus: __expectString(output.exportStatus),
    fileFormat: __expectString(output.fileFormat),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    resourceSpecification:
      output.resourceSpecification != null
        ? de_ExportResourceSpecification(output.resourceSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ExportSummaryList
 */
const de_ExportSummaryList = (output: any, context: __SerdeContext): ExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ExportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ExternalSourceSetting
 */
const de_ExternalSourceSetting = (output: any, context: __SerdeContext): ExternalSourceSetting => {
  return {
    grammarSlotTypeSetting:
      output.grammarSlotTypeSetting != null
        ? de_GrammarSlotTypeSetting(output.grammarSlotTypeSetting, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FailedCustomVocabularyItem
 */
const de_FailedCustomVocabularyItem = (output: any, context: __SerdeContext): FailedCustomVocabularyItem => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    itemId: __expectString(output.itemId),
  } as any;
};

/**
 * deserializeAws_restJson1FailedCustomVocabularyItems
 */
const de_FailedCustomVocabularyItems = (output: any, context: __SerdeContext): FailedCustomVocabularyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FailedCustomVocabularyItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FailureReasons
 */
const de_FailureReasons = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1FulfillmentCodeHookSettings
 */
const de_FulfillmentCodeHookSettings = (output: any, context: __SerdeContext): FulfillmentCodeHookSettings => {
  return {
    active: __expectBoolean(output.active),
    enabled: __expectBoolean(output.enabled),
    fulfillmentUpdatesSpecification:
      output.fulfillmentUpdatesSpecification != null
        ? de_FulfillmentUpdatesSpecification(output.fulfillmentUpdatesSpecification, context)
        : undefined,
    postFulfillmentStatusSpecification:
      output.postFulfillmentStatusSpecification != null
        ? de_PostFulfillmentStatusSpecification(output.postFulfillmentStatusSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FulfillmentStartResponseSpecification
 */
const de_FulfillmentStartResponseSpecification = (
  output: any,
  context: __SerdeContext
): FulfillmentStartResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    delayInSeconds: __expectInt32(output.delayInSeconds),
    messageGroups: output.messageGroups != null ? de_MessageGroupsList(output.messageGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FulfillmentUpdateResponseSpecification
 */
const de_FulfillmentUpdateResponseSpecification = (
  output: any,
  context: __SerdeContext
): FulfillmentUpdateResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    frequencyInSeconds: __expectInt32(output.frequencyInSeconds),
    messageGroups: output.messageGroups != null ? de_MessageGroupsList(output.messageGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FulfillmentUpdatesSpecification
 */
const de_FulfillmentUpdatesSpecification = (output: any, context: __SerdeContext): FulfillmentUpdatesSpecification => {
  return {
    active: __expectBoolean(output.active),
    startResponse:
      output.startResponse != null
        ? de_FulfillmentStartResponseSpecification(output.startResponse, context)
        : undefined,
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
    updateResponse:
      output.updateResponse != null
        ? de_FulfillmentUpdateResponseSpecification(output.updateResponse, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrammarSlotTypeSetting
 */
const de_GrammarSlotTypeSetting = (output: any, context: __SerdeContext): GrammarSlotTypeSetting => {
  return {
    source: output.source != null ? de_GrammarSlotTypeSource(output.source, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1GrammarSlotTypeSource
 */
const de_GrammarSlotTypeSource = (output: any, context: __SerdeContext): GrammarSlotTypeSource => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    s3BucketName: __expectString(output.s3BucketName),
    s3ObjectKey: __expectString(output.s3ObjectKey),
  } as any;
};

/**
 * deserializeAws_restJson1ImageResponseCard
 */
const de_ImageResponseCard = (output: any, context: __SerdeContext): ImageResponseCard => {
  return {
    buttons: output.buttons != null ? de_ButtonsList(output.buttons, context) : undefined,
    imageUrl: __expectString(output.imageUrl),
    subtitle: __expectString(output.subtitle),
    title: __expectString(output.title),
  } as any;
};

/**
 * deserializeAws_restJson1ImportResourceSpecification
 */
const de_ImportResourceSpecification = (output: any, context: __SerdeContext): ImportResourceSpecification => {
  return {
    botImportSpecification:
      output.botImportSpecification != null
        ? de_BotImportSpecification(output.botImportSpecification, context)
        : undefined,
    botLocaleImportSpecification:
      output.botLocaleImportSpecification != null
        ? de_BotLocaleImportSpecification(output.botLocaleImportSpecification, context)
        : undefined,
    customVocabularyImportSpecification:
      output.customVocabularyImportSpecification != null
        ? de_CustomVocabularyImportSpecification(output.customVocabularyImportSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ImportSummary
 */
const de_ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
  return {
    creationDateTime:
      output.creationDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    importId: __expectString(output.importId),
    importStatus: __expectString(output.importStatus),
    importedResourceId: __expectString(output.importedResourceId),
    importedResourceName: __expectString(output.importedResourceName),
    importedResourceType: __expectString(output.importedResourceType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    mergeStrategy: __expectString(output.mergeStrategy),
  } as any;
};

/**
 * deserializeAws_restJson1ImportSummaryList
 */
const de_ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ImportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InitialResponseSetting
 */
const de_InitialResponseSetting = (output: any, context: __SerdeContext): InitialResponseSetting => {
  return {
    codeHook: output.codeHook != null ? de_DialogCodeHookInvocationSetting(output.codeHook, context) : undefined,
    conditional: output.conditional != null ? de_ConditionalSpecification(output.conditional, context) : undefined,
    initialResponse:
      output.initialResponse != null ? de_ResponseSpecification(output.initialResponse, context) : undefined,
    nextStep: output.nextStep != null ? de_DialogState(output.nextStep, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InputContext
 */
const de_InputContext = (output: any, context: __SerdeContext): InputContext => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1InputContextsList
 */
const de_InputContextsList = (output: any, context: __SerdeContext): InputContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InputContext(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IntentClosingSetting
 */
const de_IntentClosingSetting = (output: any, context: __SerdeContext): IntentClosingSetting => {
  return {
    active: __expectBoolean(output.active),
    closingResponse:
      output.closingResponse != null ? de_ResponseSpecification(output.closingResponse, context) : undefined,
    conditional: output.conditional != null ? de_ConditionalSpecification(output.conditional, context) : undefined,
    nextStep: output.nextStep != null ? de_DialogState(output.nextStep, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IntentConfirmationSetting
 */
const de_IntentConfirmationSetting = (output: any, context: __SerdeContext): IntentConfirmationSetting => {
  return {
    active: __expectBoolean(output.active),
    codeHook: output.codeHook != null ? de_DialogCodeHookInvocationSetting(output.codeHook, context) : undefined,
    confirmationConditional:
      output.confirmationConditional != null
        ? de_ConditionalSpecification(output.confirmationConditional, context)
        : undefined,
    confirmationNextStep:
      output.confirmationNextStep != null ? de_DialogState(output.confirmationNextStep, context) : undefined,
    confirmationResponse:
      output.confirmationResponse != null ? de_ResponseSpecification(output.confirmationResponse, context) : undefined,
    declinationConditional:
      output.declinationConditional != null
        ? de_ConditionalSpecification(output.declinationConditional, context)
        : undefined,
    declinationNextStep:
      output.declinationNextStep != null ? de_DialogState(output.declinationNextStep, context) : undefined,
    declinationResponse:
      output.declinationResponse != null ? de_ResponseSpecification(output.declinationResponse, context) : undefined,
    elicitationCodeHook:
      output.elicitationCodeHook != null
        ? de_ElicitationCodeHookInvocationSetting(output.elicitationCodeHook, context)
        : undefined,
    failureConditional:
      output.failureConditional != null ? de_ConditionalSpecification(output.failureConditional, context) : undefined,
    failureNextStep: output.failureNextStep != null ? de_DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null ? de_ResponseSpecification(output.failureResponse, context) : undefined,
    promptSpecification:
      output.promptSpecification != null ? de_PromptSpecification(output.promptSpecification, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IntentOverride
 */
const de_IntentOverride = (output: any, context: __SerdeContext): IntentOverride => {
  return {
    name: __expectString(output.name),
    slots: output.slots != null ? de_SlotValueOverrideMap(output.slots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IntentStatistics
 */
const de_IntentStatistics = (output: any, context: __SerdeContext): IntentStatistics => {
  return {
    discoveredIntentCount: __expectInt32(output.discoveredIntentCount),
  } as any;
};

/**
 * deserializeAws_restJson1IntentSummary
 */
const de_IntentSummary = (output: any, context: __SerdeContext): IntentSummary => {
  return {
    description: __expectString(output.description),
    inputContexts: output.inputContexts != null ? de_InputContextsList(output.inputContexts, context) : undefined,
    intentId: __expectString(output.intentId),
    intentName: __expectString(output.intentName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    outputContexts: output.outputContexts != null ? de_OutputContextsList(output.outputContexts, context) : undefined,
    parentIntentSignature: __expectString(output.parentIntentSignature),
  } as any;
};

/**
 * deserializeAws_restJson1IntentSummaryList
 */
const de_IntentSummaryList = (output: any, context: __SerdeContext): IntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IntentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KendraConfiguration
 */
const de_KendraConfiguration = (output: any, context: __SerdeContext): KendraConfiguration => {
  return {
    kendraIndex: __expectString(output.kendraIndex),
    queryFilterString: __expectString(output.queryFilterString),
    queryFilterStringEnabled: __expectBoolean(output.queryFilterStringEnabled),
  } as any;
};

/**
 * deserializeAws_restJson1LambdaCodeHook
 */
const de_LambdaCodeHook = (output: any, context: __SerdeContext): LambdaCodeHook => {
  return {
    codeHookInterfaceVersion: __expectString(output.codeHookInterfaceVersion),
    lambdaARN: __expectString(output.lambdaARN),
  } as any;
};

/**
 * deserializeAws_restJson1LexTranscriptFilter
 */
const de_LexTranscriptFilter = (output: any, context: __SerdeContext): LexTranscriptFilter => {
  return {
    dateRangeFilter: output.dateRangeFilter != null ? de_DateRangeFilter(output.dateRangeFilter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Message
 */
const de_Message = (output: any, context: __SerdeContext): Message => {
  return {
    customPayload: output.customPayload != null ? de_CustomPayload(output.customPayload, context) : undefined,
    imageResponseCard:
      output.imageResponseCard != null ? de_ImageResponseCard(output.imageResponseCard, context) : undefined,
    plainTextMessage:
      output.plainTextMessage != null ? de_PlainTextMessage(output.plainTextMessage, context) : undefined,
    ssmlMessage: output.ssmlMessage != null ? de_SSMLMessage(output.ssmlMessage, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MessageGroup
 */
const de_MessageGroup = (output: any, context: __SerdeContext): MessageGroup => {
  return {
    message: output.message != null ? de_Message(output.message, context) : undefined,
    variations: output.variations != null ? de_MessageVariationsList(output.variations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1MessageGroupsList
 */
const de_MessageGroupsList = (output: any, context: __SerdeContext): MessageGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_MessageGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MessageVariationsList
 */
const de_MessageVariationsList = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Message(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1MultipleValuesSetting
 */
const de_MultipleValuesSetting = (output: any, context: __SerdeContext): MultipleValuesSetting => {
  return {
    allowMultipleValues: __expectBoolean(output.allowMultipleValues),
  } as any;
};

/**
 * deserializeAws_restJson1ObfuscationSetting
 */
const de_ObfuscationSetting = (output: any, context: __SerdeContext): ObfuscationSetting => {
  return {
    obfuscationSettingType: __expectString(output.obfuscationSettingType),
  } as any;
};

/**
 * deserializeAws_restJson1ObjectPrefixes
 */
const de_ObjectPrefixes = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1OutputContext
 */
const de_OutputContext = (output: any, context: __SerdeContext): OutputContext => {
  return {
    name: __expectString(output.name),
    timeToLiveInSeconds: __expectInt32(output.timeToLiveInSeconds),
    turnsToLive: __expectInt32(output.turnsToLive),
  } as any;
};

/**
 * deserializeAws_restJson1OutputContextsList
 */
const de_OutputContextsList = (output: any, context: __SerdeContext): OutputContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OutputContext(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ParentBotNetwork
 */
const de_ParentBotNetwork = (output: any, context: __SerdeContext): ParentBotNetwork => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
  } as any;
};

/**
 * deserializeAws_restJson1ParentBotNetworks
 */
const de_ParentBotNetworks = (output: any, context: __SerdeContext): ParentBotNetwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ParentBotNetwork(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PathFormat
 */
const de_PathFormat = (output: any, context: __SerdeContext): PathFormat => {
  return {
    objectPrefixes: output.objectPrefixes != null ? de_ObjectPrefixes(output.objectPrefixes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PlainTextMessage
 */
const de_PlainTextMessage = (output: any, context: __SerdeContext): PlainTextMessage => {
  return {
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1PostDialogCodeHookInvocationSpecification
 */
const de_PostDialogCodeHookInvocationSpecification = (
  output: any,
  context: __SerdeContext
): PostDialogCodeHookInvocationSpecification => {
  return {
    failureConditional:
      output.failureConditional != null ? de_ConditionalSpecification(output.failureConditional, context) : undefined,
    failureNextStep: output.failureNextStep != null ? de_DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null ? de_ResponseSpecification(output.failureResponse, context) : undefined,
    successConditional:
      output.successConditional != null ? de_ConditionalSpecification(output.successConditional, context) : undefined,
    successNextStep: output.successNextStep != null ? de_DialogState(output.successNextStep, context) : undefined,
    successResponse:
      output.successResponse != null ? de_ResponseSpecification(output.successResponse, context) : undefined,
    timeoutConditional:
      output.timeoutConditional != null ? de_ConditionalSpecification(output.timeoutConditional, context) : undefined,
    timeoutNextStep: output.timeoutNextStep != null ? de_DialogState(output.timeoutNextStep, context) : undefined,
    timeoutResponse:
      output.timeoutResponse != null ? de_ResponseSpecification(output.timeoutResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PostFulfillmentStatusSpecification
 */
const de_PostFulfillmentStatusSpecification = (
  output: any,
  context: __SerdeContext
): PostFulfillmentStatusSpecification => {
  return {
    failureConditional:
      output.failureConditional != null ? de_ConditionalSpecification(output.failureConditional, context) : undefined,
    failureNextStep: output.failureNextStep != null ? de_DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null ? de_ResponseSpecification(output.failureResponse, context) : undefined,
    successConditional:
      output.successConditional != null ? de_ConditionalSpecification(output.successConditional, context) : undefined,
    successNextStep: output.successNextStep != null ? de_DialogState(output.successNextStep, context) : undefined,
    successResponse:
      output.successResponse != null ? de_ResponseSpecification(output.successResponse, context) : undefined,
    timeoutConditional:
      output.timeoutConditional != null ? de_ConditionalSpecification(output.timeoutConditional, context) : undefined,
    timeoutNextStep: output.timeoutNextStep != null ? de_DialogState(output.timeoutNextStep, context) : undefined,
    timeoutResponse:
      output.timeoutResponse != null ? de_ResponseSpecification(output.timeoutResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PromptAttemptSpecification
 */
const de_PromptAttemptSpecification = (output: any, context: __SerdeContext): PromptAttemptSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    allowedInputTypes:
      output.allowedInputTypes != null ? de_AllowedInputTypes(output.allowedInputTypes, context) : undefined,
    audioAndDTMFInputSpecification:
      output.audioAndDTMFInputSpecification != null
        ? de_AudioAndDTMFInputSpecification(output.audioAndDTMFInputSpecification, context)
        : undefined,
    textInputSpecification:
      output.textInputSpecification != null
        ? de_TextInputSpecification(output.textInputSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PromptAttemptsSpecificationMap
 */
const de_PromptAttemptsSpecificationMap = (
  output: any,
  context: __SerdeContext
): Record<string, PromptAttemptSpecification> => {
  return Object.entries(output).reduce(
    (acc: Record<string, PromptAttemptSpecification>, [key, value]: [PromptAttempt | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_PromptAttemptSpecification(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1PromptSpecification
 */
const de_PromptSpecification = (output: any, context: __SerdeContext): PromptSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    maxRetries: __expectInt32(output.maxRetries),
    messageGroups: output.messageGroups != null ? de_MessageGroupsList(output.messageGroups, context) : undefined,
    messageSelectionStrategy: __expectString(output.messageSelectionStrategy),
    promptAttemptsSpecification:
      output.promptAttemptsSpecification != null
        ? de_PromptAttemptsSpecificationMap(output.promptAttemptsSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecommendedActions
 */
const de_RecommendedActions = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RecommendedIntentSummary
 */
const de_RecommendedIntentSummary = (output: any, context: __SerdeContext): RecommendedIntentSummary => {
  return {
    intentId: __expectString(output.intentId),
    intentName: __expectString(output.intentName),
    sampleUtterancesCount: __expectInt32(output.sampleUtterancesCount),
  } as any;
};

/**
 * deserializeAws_restJson1RecommendedIntentSummaryList
 */
const de_RecommendedIntentSummaryList = (output: any, context: __SerdeContext): RecommendedIntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecommendedIntentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RelativeAggregationDuration
 */
const de_RelativeAggregationDuration = (output: any, context: __SerdeContext): RelativeAggregationDuration => {
  return {
    timeDimension: __expectString(output.timeDimension),
    timeValue: __expectInt32(output.timeValue),
  } as any;
};

/**
 * deserializeAws_restJson1ResponseSpecification
 */
const de_ResponseSpecification = (output: any, context: __SerdeContext): ResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    messageGroups: output.messageGroups != null ? de_MessageGroupsList(output.messageGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketLogDestination
 */
const de_S3BucketLogDestination = (output: any, context: __SerdeContext): S3BucketLogDestination => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    logPrefix: __expectString(output.logPrefix),
    s3BucketArn: __expectString(output.s3BucketArn),
  } as any;
};

/**
 * deserializeAws_restJson1S3BucketTranscriptSource
 */
const de_S3BucketTranscriptSource = (output: any, context: __SerdeContext): S3BucketTranscriptSource => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    pathFormat: output.pathFormat != null ? de_PathFormat(output.pathFormat, context) : undefined,
    s3BucketName: __expectString(output.s3BucketName),
    transcriptFilter:
      output.transcriptFilter != null ? de_TranscriptFilter(output.transcriptFilter, context) : undefined,
    transcriptFormat: __expectString(output.transcriptFormat),
  } as any;
};

/**
 * deserializeAws_restJson1SampleUtterance
 */
const de_SampleUtterance = (output: any, context: __SerdeContext): SampleUtterance => {
  return {
    utterance: __expectString(output.utterance),
  } as any;
};

/**
 * deserializeAws_restJson1SampleUtterancesList
 */
const de_SampleUtterancesList = (output: any, context: __SerdeContext): SampleUtterance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SampleUtterance(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SampleValue
 */
const de_SampleValue = (output: any, context: __SerdeContext): SampleValue => {
  return {
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1SentimentAnalysisSettings
 */
const de_SentimentAnalysisSettings = (output: any, context: __SerdeContext): SentimentAnalysisSettings => {
  return {
    detectSentiment: __expectBoolean(output.detectSentiment),
  } as any;
};

/**
 * deserializeAws_restJson1SlotCaptureSetting
 */
const de_SlotCaptureSetting = (output: any, context: __SerdeContext): SlotCaptureSetting => {
  return {
    captureConditional:
      output.captureConditional != null ? de_ConditionalSpecification(output.captureConditional, context) : undefined,
    captureNextStep: output.captureNextStep != null ? de_DialogState(output.captureNextStep, context) : undefined,
    captureResponse:
      output.captureResponse != null ? de_ResponseSpecification(output.captureResponse, context) : undefined,
    codeHook: output.codeHook != null ? de_DialogCodeHookInvocationSetting(output.codeHook, context) : undefined,
    elicitationCodeHook:
      output.elicitationCodeHook != null
        ? de_ElicitationCodeHookInvocationSetting(output.elicitationCodeHook, context)
        : undefined,
    failureConditional:
      output.failureConditional != null ? de_ConditionalSpecification(output.failureConditional, context) : undefined,
    failureNextStep: output.failureNextStep != null ? de_DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null ? de_ResponseSpecification(output.failureResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlotDefaultValue
 */
const de_SlotDefaultValue = (output: any, context: __SerdeContext): SlotDefaultValue => {
  return {
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

/**
 * deserializeAws_restJson1SlotDefaultValueList
 */
const de_SlotDefaultValueList = (output: any, context: __SerdeContext): SlotDefaultValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlotDefaultValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotDefaultValueSpecification
 */
const de_SlotDefaultValueSpecification = (output: any, context: __SerdeContext): SlotDefaultValueSpecification => {
  return {
    defaultValueList:
      output.defaultValueList != null ? de_SlotDefaultValueList(output.defaultValueList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlotPrioritiesList
 */
const de_SlotPrioritiesList = (output: any, context: __SerdeContext): SlotPriority[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlotPriority(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotPriority
 */
const de_SlotPriority = (output: any, context: __SerdeContext): SlotPriority => {
  return {
    priority: __expectInt32(output.priority),
    slotId: __expectString(output.slotId),
  } as any;
};

/**
 * deserializeAws_restJson1SlotSummary
 */
const de_SlotSummary = (output: any, context: __SerdeContext): SlotSummary => {
  return {
    description: __expectString(output.description),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    slotConstraint: __expectString(output.slotConstraint),
    slotId: __expectString(output.slotId),
    slotName: __expectString(output.slotName),
    slotTypeId: __expectString(output.slotTypeId),
    valueElicitationPromptSpecification:
      output.valueElicitationPromptSpecification != null
        ? de_PromptSpecification(output.valueElicitationPromptSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlotSummaryList
 */
const de_SlotSummaryList = (output: any, context: __SerdeContext): SlotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlotSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotTypeStatistics
 */
const de_SlotTypeStatistics = (output: any, context: __SerdeContext): SlotTypeStatistics => {
  return {
    discoveredSlotTypeCount: __expectInt32(output.discoveredSlotTypeCount),
  } as any;
};

/**
 * deserializeAws_restJson1SlotTypeSummary
 */
const de_SlotTypeSummary = (output: any, context: __SerdeContext): SlotTypeSummary => {
  return {
    description: __expectString(output.description),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    parentSlotTypeSignature: __expectString(output.parentSlotTypeSignature),
    slotTypeCategory: __expectString(output.slotTypeCategory),
    slotTypeId: __expectString(output.slotTypeId),
    slotTypeName: __expectString(output.slotTypeName),
  } as any;
};

/**
 * deserializeAws_restJson1SlotTypeSummaryList
 */
const de_SlotTypeSummaryList = (output: any, context: __SerdeContext): SlotTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlotTypeSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotTypeValue
 */
const de_SlotTypeValue = (output: any, context: __SerdeContext): SlotTypeValue => {
  return {
    sampleValue: output.sampleValue != null ? de_SampleValue(output.sampleValue, context) : undefined,
    synonyms: output.synonyms != null ? de_SynonymList(output.synonyms, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlotTypeValues
 */
const de_SlotTypeValues = (output: any, context: __SerdeContext): SlotTypeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlotTypeValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotValue
 */
const de_SlotValue = (output: any, context: __SerdeContext): SlotValue => {
  return {
    interpretedValue: __expectString(output.interpretedValue),
  } as any;
};

/**
 * deserializeAws_restJson1SlotValueElicitationSetting
 */
const de_SlotValueElicitationSetting = (output: any, context: __SerdeContext): SlotValueElicitationSetting => {
  return {
    defaultValueSpecification:
      output.defaultValueSpecification != null
        ? de_SlotDefaultValueSpecification(output.defaultValueSpecification, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != null ? de_PromptSpecification(output.promptSpecification, context) : undefined,
    sampleUtterances:
      output.sampleUtterances != null ? de_SampleUtterancesList(output.sampleUtterances, context) : undefined,
    slotCaptureSetting:
      output.slotCaptureSetting != null ? de_SlotCaptureSetting(output.slotCaptureSetting, context) : undefined,
    slotConstraint: __expectString(output.slotConstraint),
    waitAndContinueSpecification:
      output.waitAndContinueSpecification != null
        ? de_WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlotValueOverride
 */
const de_SlotValueOverride = (output: any, context: __SerdeContext): SlotValueOverride => {
  return {
    shape: __expectString(output.shape),
    value: output.value != null ? de_SlotValue(output.value, context) : undefined,
    values: output.values != null ? de_SlotValues(output.values, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SlotValueOverrideMap
 */
const de_SlotValueOverrideMap = (output: any, context: __SerdeContext): Record<string, SlotValueOverride> => {
  return Object.entries(output).reduce((acc: Record<string, SlotValueOverride>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_SlotValueOverride(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SlotValueRegexFilter
 */
const de_SlotValueRegexFilter = (output: any, context: __SerdeContext): SlotValueRegexFilter => {
  return {
    pattern: __expectString(output.pattern),
  } as any;
};

/**
 * deserializeAws_restJson1SlotValues
 */
const de_SlotValues = (output: any, context: __SerdeContext): SlotValueOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SlotValueOverride(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotValueSelectionSetting
 */
const de_SlotValueSelectionSetting = (output: any, context: __SerdeContext): SlotValueSelectionSetting => {
  return {
    advancedRecognitionSetting:
      output.advancedRecognitionSetting != null
        ? de_AdvancedRecognitionSetting(output.advancedRecognitionSetting, context)
        : undefined,
    regexFilter: output.regexFilter != null ? de_SlotValueRegexFilter(output.regexFilter, context) : undefined,
    resolutionStrategy: __expectString(output.resolutionStrategy),
  } as any;
};

/**
 * deserializeAws_restJson1Specifications
 */
const de_Specifications = (output: any, context: __SerdeContext): Specifications => {
  return {
    slotTypeId: __expectString(output.slotTypeId),
    valueElicitationSetting:
      output.valueElicitationSetting != null
        ? de_SubSlotValueElicitationSetting(output.valueElicitationSetting, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SSMLMessage
 */
const de_SSMLMessage = (output: any, context: __SerdeContext): SSMLMessage => {
  return {
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1StillWaitingResponseSpecification
 */
const de_StillWaitingResponseSpecification = (
  output: any,
  context: __SerdeContext
): StillWaitingResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    frequencyInSeconds: __expectInt32(output.frequencyInSeconds),
    messageGroups: output.messageGroups != null ? de_MessageGroupsList(output.messageGroups, context) : undefined,
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SubSlotSetting
 */
const de_SubSlotSetting = (output: any, context: __SerdeContext): SubSlotSetting => {
  return {
    expression: __expectString(output.expression),
    slotSpecifications:
      output.slotSpecifications != null ? de_SubSlotSpecificationMap(output.slotSpecifications, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SubSlotSpecificationMap
 */
const de_SubSlotSpecificationMap = (output: any, context: __SerdeContext): Record<string, Specifications> => {
  return Object.entries(output).reduce((acc: Record<string, Specifications>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = de_Specifications(value, context);
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SubSlotTypeComposition
 */
const de_SubSlotTypeComposition = (output: any, context: __SerdeContext): SubSlotTypeComposition => {
  return {
    name: __expectString(output.name),
    slotTypeId: __expectString(output.slotTypeId),
  } as any;
};

/**
 * deserializeAws_restJson1SubSlotTypeList
 */
const de_SubSlotTypeList = (output: any, context: __SerdeContext): SubSlotTypeComposition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SubSlotTypeComposition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SubSlotValueElicitationSetting
 */
const de_SubSlotValueElicitationSetting = (output: any, context: __SerdeContext): SubSlotValueElicitationSetting => {
  return {
    defaultValueSpecification:
      output.defaultValueSpecification != null
        ? de_SlotDefaultValueSpecification(output.defaultValueSpecification, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != null ? de_PromptSpecification(output.promptSpecification, context) : undefined,
    sampleUtterances:
      output.sampleUtterances != null ? de_SampleUtterancesList(output.sampleUtterances, context) : undefined,
    waitAndContinueSpecification:
      output.waitAndContinueSpecification != null
        ? de_WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SynonymList
 */
const de_SynonymList = (output: any, context: __SerdeContext): SampleValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SampleValue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1TextInputSpecification
 */
const de_TextInputSpecification = (output: any, context: __SerdeContext): TextInputSpecification => {
  return {
    startTimeoutMs: __expectInt32(output.startTimeoutMs),
  } as any;
};

/**
 * deserializeAws_restJson1TextLogDestination
 */
const de_TextLogDestination = (output: any, context: __SerdeContext): TextLogDestination => {
  return {
    cloudWatch: output.cloudWatch != null ? de_CloudWatchLogGroupLogDestination(output.cloudWatch, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TextLogSetting
 */
const de_TextLogSetting = (output: any, context: __SerdeContext): TextLogSetting => {
  return {
    destination: output.destination != null ? de_TextLogDestination(output.destination, context) : undefined,
    enabled: __expectBoolean(output.enabled),
  } as any;
};

/**
 * deserializeAws_restJson1TextLogSettingsList
 */
const de_TextLogSettingsList = (output: any, context: __SerdeContext): TextLogSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TextLogSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TranscriptFilter
 */
const de_TranscriptFilter = (output: any, context: __SerdeContext): TranscriptFilter => {
  return {
    lexTranscriptFilter:
      output.lexTranscriptFilter != null ? de_LexTranscriptFilter(output.lexTranscriptFilter, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TranscriptSourceSetting
 */
const de_TranscriptSourceSetting = (output: any, context: __SerdeContext): TranscriptSourceSetting => {
  return {
    s3BucketTranscriptSource:
      output.s3BucketTranscriptSource != null
        ? de_S3BucketTranscriptSource(output.s3BucketTranscriptSource, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1UtteranceAggregationDuration
 */
const de_UtteranceAggregationDuration = (output: any, context: __SerdeContext): UtteranceAggregationDuration => {
  return {
    relativeAggregationDuration:
      output.relativeAggregationDuration != null
        ? de_RelativeAggregationDuration(output.relativeAggregationDuration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1VoiceSettings
 */
const de_VoiceSettings = (output: any, context: __SerdeContext): VoiceSettings => {
  return {
    engine: __expectString(output.engine),
    voiceId: __expectString(output.voiceId),
  } as any;
};

/**
 * deserializeAws_restJson1WaitAndContinueSpecification
 */
const de_WaitAndContinueSpecification = (output: any, context: __SerdeContext): WaitAndContinueSpecification => {
  return {
    active: __expectBoolean(output.active),
    continueResponse:
      output.continueResponse != null ? de_ResponseSpecification(output.continueResponse, context) : undefined,
    stillWaitingResponse:
      output.stillWaitingResponse != null
        ? de_StillWaitingResponseSpecification(output.stillWaitingResponse, context)
        : undefined,
    waitingResponse:
      output.waitingResponse != null ? de_ResponseSpecification(output.waitingResponse, context) : undefined,
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
