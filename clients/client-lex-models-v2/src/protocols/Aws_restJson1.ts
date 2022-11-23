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

export const serializeAws_restJson1BatchCreateCustomVocabularyItemCommand = async (
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
      customVocabularyItemList: serializeAws_restJson1CreateCustomVocabularyItemsList(
        input.customVocabularyItemList,
        context
      ),
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

export const serializeAws_restJson1BatchDeleteCustomVocabularyItemCommand = async (
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
      customVocabularyItemList: serializeAws_restJson1DeleteCustomVocabularyItemsList(
        input.customVocabularyItemList,
        context
      ),
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

export const serializeAws_restJson1BatchUpdateCustomVocabularyItemCommand = async (
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
      customVocabularyItemList: serializeAws_restJson1UpdateCustomVocabularyItemsList(
        input.customVocabularyItemList,
        context
      ),
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

export const serializeAws_restJson1BuildBotLocaleCommand = async (
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

export const serializeAws_restJson1CreateBotCommand = async (
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
    ...(input.botName != null && { botName: input.botName }),
    ...(input.botTags != null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
    ...(input.dataPrivacy != null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
    ...(input.description != null && { description: input.description }),
    ...(input.idleSessionTTLInSeconds != null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags != null && {
      testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
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

export const serializeAws_restJson1CreateBotAliasCommand = async (
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
      botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
    }),
    ...(input.botAliasName != null && { botAliasName: input.botAliasName }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings != null && {
      conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.sentimentAnalysisSettings != null && {
      sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(
        input.sentimentAnalysisSettings,
        context
      ),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateBotLocaleCommand = async (
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
    ...(input.voiceSettings != null && {
      voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
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

export const serializeAws_restJson1CreateBotVersionCommand = async (
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
      botVersionLocaleSpecification: serializeAws_restJson1BotVersionLocaleSpecification(
        input.botVersionLocaleSpecification,
        context
      ),
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

export const serializeAws_restJson1CreateExportCommand = async (
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
      resourceSpecification: serializeAws_restJson1ExportResourceSpecification(input.resourceSpecification, context),
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

export const serializeAws_restJson1CreateIntentCommand = async (
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
    ...(input.dialogCodeHook != null && {
      dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
    }),
    ...(input.fulfillmentCodeHook != null && {
      fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
    }),
    ...(input.initialResponseSetting != null && {
      initialResponseSetting: serializeAws_restJson1InitialResponseSetting(input.initialResponseSetting, context),
    }),
    ...(input.inputContexts != null && {
      inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
    }),
    ...(input.intentClosingSetting != null && {
      intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
    }),
    ...(input.intentConfirmationSetting != null && {
      intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(
        input.intentConfirmationSetting,
        context
      ),
    }),
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.kendraConfiguration != null && {
      kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != null && {
      outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
    }),
    ...(input.parentIntentSignature != null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
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

export const serializeAws_restJson1CreateResourcePolicyCommand = async (
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

export const serializeAws_restJson1CreateResourcePolicyStatementCommand = async (
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
    ...(input.action != null && { action: serializeAws_restJson1OperationList(input.action, context) }),
    ...(input.condition != null && { condition: serializeAws_restJson1ConditionMap(input.condition, context) }),
    ...(input.effect != null && { effect: input.effect }),
    ...(input.principal != null && { principal: serializeAws_restJson1PrincipalList(input.principal, context) }),
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

export const serializeAws_restJson1CreateSlotCommand = async (
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
      multipleValuesSetting: serializeAws_restJson1MultipleValuesSetting(input.multipleValuesSetting, context),
    }),
    ...(input.obfuscationSetting != null && {
      obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
    }),
    ...(input.slotName != null && { slotName: input.slotName }),
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
    ...(input.subSlotSetting != null && {
      subSlotSetting: serializeAws_restJson1SubSlotSetting(input.subSlotSetting, context),
    }),
    ...(input.valueElicitationSetting != null && {
      valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(
        input.valueElicitationSetting,
        context
      ),
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

export const serializeAws_restJson1CreateSlotTypeCommand = async (
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
      compositeSlotTypeSetting: serializeAws_restJson1CompositeSlotTypeSetting(input.compositeSlotTypeSetting, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.externalSourceSetting != null && {
      externalSourceSetting: serializeAws_restJson1ExternalSourceSetting(input.externalSourceSetting, context),
    }),
    ...(input.parentSlotTypeSignature != null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName != null && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues != null && {
      slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
    }),
    ...(input.valueSelectionSetting != null && {
      valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
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

export const serializeAws_restJson1CreateUploadUrlCommand = async (
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

export const serializeAws_restJson1DeleteBotCommand = async (
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

export const serializeAws_restJson1DeleteBotAliasCommand = async (
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

export const serializeAws_restJson1DeleteBotLocaleCommand = async (
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

export const serializeAws_restJson1DeleteBotVersionCommand = async (
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

export const serializeAws_restJson1DeleteCustomVocabularyCommand = async (
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

export const serializeAws_restJson1DeleteExportCommand = async (
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

export const serializeAws_restJson1DeleteImportCommand = async (
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

export const serializeAws_restJson1DeleteIntentCommand = async (
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

export const serializeAws_restJson1DeleteResourcePolicyCommand = async (
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

export const serializeAws_restJson1DeleteResourcePolicyStatementCommand = async (
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

export const serializeAws_restJson1DeleteSlotCommand = async (
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

export const serializeAws_restJson1DeleteSlotTypeCommand = async (
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

export const serializeAws_restJson1DeleteUtterancesCommand = async (
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

export const serializeAws_restJson1DescribeBotCommand = async (
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

export const serializeAws_restJson1DescribeBotAliasCommand = async (
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

export const serializeAws_restJson1DescribeBotLocaleCommand = async (
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

export const serializeAws_restJson1DescribeBotRecommendationCommand = async (
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

export const serializeAws_restJson1DescribeBotVersionCommand = async (
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

export const serializeAws_restJson1DescribeCustomVocabularyMetadataCommand = async (
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

export const serializeAws_restJson1DescribeExportCommand = async (
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

export const serializeAws_restJson1DescribeImportCommand = async (
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

export const serializeAws_restJson1DescribeIntentCommand = async (
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

export const serializeAws_restJson1DescribeResourcePolicyCommand = async (
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

export const serializeAws_restJson1DescribeSlotCommand = async (
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

export const serializeAws_restJson1DescribeSlotTypeCommand = async (
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

export const serializeAws_restJson1ListAggregatedUtterancesCommand = async (
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
      aggregationDuration: serializeAws_restJson1UtteranceAggregationDuration(input.aggregationDuration, context),
    }),
    ...(input.botAliasId != null && { botAliasId: input.botAliasId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.filters != null && {
      filters: serializeAws_restJson1AggregatedUtterancesFilters(input.filters, context),
    }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1AggregatedUtterancesSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListBotAliasesCommand = async (
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

export const serializeAws_restJson1ListBotLocalesCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1BotLocaleFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1BotLocaleSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListBotRecommendationsCommand = async (
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

export const serializeAws_restJson1ListBotsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1BotFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1BotSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListBotVersionsCommand = async (
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
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1BotVersionSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListBuiltInIntentsCommand = async (
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
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1BuiltInIntentSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListBuiltInSlotTypesCommand = async (
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
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1BuiltInSlotTypeSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListCustomVocabularyItemsCommand = async (
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

export const serializeAws_restJson1ListExportsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1ExportFilters(input.filters, context) }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1ExportSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListImportsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1ImportFilters(input.filters, context) }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1ImportSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListIntentsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1IntentFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1IntentSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListRecommendedIntentsCommand = async (
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

export const serializeAws_restJson1ListSlotsCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1SlotFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1SlotSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListSlotTypesCommand = async (
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
    ...(input.filters != null && { filters: serializeAws_restJson1SlotTypeFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.sortBy != null && { sortBy: serializeAws_restJson1SlotTypeSortBy(input.sortBy, context) }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1SearchAssociatedTranscriptsCommand = async (
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
    ...(input.filters != null && {
      filters: serializeAws_restJson1AssociatedTranscriptFilters(input.filters, context),
    }),
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

export const serializeAws_restJson1StartBotRecommendationCommand = async (
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
      encryptionSetting: serializeAws_restJson1EncryptionSetting(input.encryptionSetting, context),
    }),
    ...(input.transcriptSourceSetting != null && {
      transcriptSourceSetting: serializeAws_restJson1TranscriptSourceSetting(input.transcriptSourceSetting, context),
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

export const serializeAws_restJson1StartImportCommand = async (
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
      resourceSpecification: serializeAws_restJson1ImportResourceSpecification(input.resourceSpecification, context),
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

export const serializeAws_restJson1StopBotRecommendationCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateBotCommand = async (
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
    ...(input.botName != null && { botName: input.botName }),
    ...(input.dataPrivacy != null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
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

export const serializeAws_restJson1UpdateBotAliasCommand = async (
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
      botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
    }),
    ...(input.botAliasName != null && { botAliasName: input.botAliasName }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings != null && {
      conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.sentimentAnalysisSettings != null && {
      sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(
        input.sentimentAnalysisSettings,
        context
      ),
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

export const serializeAws_restJson1UpdateBotLocaleCommand = async (
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
    ...(input.voiceSettings != null && {
      voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
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

export const serializeAws_restJson1UpdateBotRecommendationCommand = async (
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
      encryptionSetting: serializeAws_restJson1EncryptionSetting(input.encryptionSetting, context),
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

export const serializeAws_restJson1UpdateExportCommand = async (
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

export const serializeAws_restJson1UpdateIntentCommand = async (
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
    ...(input.dialogCodeHook != null && {
      dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
    }),
    ...(input.fulfillmentCodeHook != null && {
      fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
    }),
    ...(input.initialResponseSetting != null && {
      initialResponseSetting: serializeAws_restJson1InitialResponseSetting(input.initialResponseSetting, context),
    }),
    ...(input.inputContexts != null && {
      inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
    }),
    ...(input.intentClosingSetting != null && {
      intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
    }),
    ...(input.intentConfirmationSetting != null && {
      intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(
        input.intentConfirmationSetting,
        context
      ),
    }),
    ...(input.intentName != null && { intentName: input.intentName }),
    ...(input.kendraConfiguration != null && {
      kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != null && {
      outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
    }),
    ...(input.parentIntentSignature != null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.slotPriorities != null && {
      slotPriorities: serializeAws_restJson1SlotPrioritiesList(input.slotPriorities, context),
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

export const serializeAws_restJson1UpdateResourcePolicyCommand = async (
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

export const serializeAws_restJson1UpdateSlotCommand = async (
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
      multipleValuesSetting: serializeAws_restJson1MultipleValuesSetting(input.multipleValuesSetting, context),
    }),
    ...(input.obfuscationSetting != null && {
      obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
    }),
    ...(input.slotName != null && { slotName: input.slotName }),
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
    ...(input.subSlotSetting != null && {
      subSlotSetting: serializeAws_restJson1SubSlotSetting(input.subSlotSetting, context),
    }),
    ...(input.valueElicitationSetting != null && {
      valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(
        input.valueElicitationSetting,
        context
      ),
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

export const serializeAws_restJson1UpdateSlotTypeCommand = async (
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
      compositeSlotTypeSetting: serializeAws_restJson1CompositeSlotTypeSetting(input.compositeSlotTypeSetting, context),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.externalSourceSetting != null && {
      externalSourceSetting: serializeAws_restJson1ExternalSourceSetting(input.externalSourceSetting, context),
    }),
    ...(input.parentSlotTypeSignature != null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName != null && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues != null && {
      slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
    }),
    ...(input.valueSelectionSetting != null && {
      valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
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

export const deserializeAws_restJson1BatchCreateCustomVocabularyItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchCreateCustomVocabularyItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchCreateCustomVocabularyItemCommandError(output, context);
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
    contents.errors = deserializeAws_restJson1FailedCustomVocabularyItems(data.errors, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.resources != null) {
    contents.resources = deserializeAws_restJson1CustomVocabularyItems(data.resources, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchCreateCustomVocabularyItemCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDeleteCustomVocabularyItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommandError(output, context);
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
    contents.errors = deserializeAws_restJson1FailedCustomVocabularyItems(data.errors, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.resources != null) {
    contents.resources = deserializeAws_restJson1CustomVocabularyItems(data.resources, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchDeleteCustomVocabularyItemCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUpdateCustomVocabularyItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateCustomVocabularyItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateCustomVocabularyItemCommandError(output, context);
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
    contents.errors = deserializeAws_restJson1FailedCustomVocabularyItems(data.errors, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.resources != null) {
    contents.resources = deserializeAws_restJson1CustomVocabularyItems(data.resources, context);
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdateCustomVocabularyItemCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BuildBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BuildBotLocaleCommandError(output, context);
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

const deserializeAws_restJson1BuildBotLocaleCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botTags != null) {
    contents.botTags = deserializeAws_restJson1TagMap(data.botTags, context);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
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
    contents.testBotAliasTags = deserializeAws_restJson1TagMap(data.testBotAliasTags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateBotCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings != null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
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
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.sentimentAnalysisSettings != null) {
    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(
      data.sentimentAnalysisSettings,
      context
    );
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateBotAliasCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotLocaleCommandError(output, context);
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
    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateBotLocaleCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotVersionCommandError(output, context);
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
    contents.botVersionLocaleSpecification = deserializeAws_restJson1BotVersionLocaleSpecification(
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

const deserializeAws_restJson1CreateBotVersionCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExportCommandError(output, context);
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
    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateExportCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntentCommandError(output, context);
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
    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook != null) {
    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(
      data.fulfillmentCodeHook,
      context
    );
  }
  if (data.initialResponseSetting != null) {
    contents.initialResponseSetting = deserializeAws_restJson1InitialResponseSetting(
      data.initialResponseSetting,
      context
    );
  }
  if (data.inputContexts != null) {
    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting != null) {
    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting != null) {
    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(
      data.intentConfirmationSetting,
      context
    );
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateIntentCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourcePolicyCommandError(output, context);
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

const deserializeAws_restJson1CreateResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateResourcePolicyStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourcePolicyStatementCommandError(output, context);
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

const deserializeAws_restJson1CreateResourcePolicyStatementCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSlotCommandError(output, context);
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
    contents.multipleValuesSetting = deserializeAws_restJson1MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting != null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
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
    contents.subSlotSetting = deserializeAws_restJson1SubSlotSetting(data.subSlotSetting, context);
  }
  if (data.valueElicitationSetting != null) {
    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(
      data.valueElicitationSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateSlotCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSlotTypeCommandError(output, context);
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
    contents.compositeSlotTypeSetting = deserializeAws_restJson1CompositeSlotTypeSetting(
      data.compositeSlotTypeSetting,
      context
    );
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting != null) {
    contents.externalSourceSetting = deserializeAws_restJson1ExternalSourceSetting(data.externalSourceSetting, context);
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
    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting != null) {
    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(
      data.valueSelectionSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1CreateSlotTypeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateUploadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUploadUrlCommandError(output, context);
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

const deserializeAws_restJson1CreateUploadUrlCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotCommandError(output, context);
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

const deserializeAws_restJson1DeleteBotCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotAliasCommandError(output, context);
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

const deserializeAws_restJson1DeleteBotAliasCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotLocaleCommandError(output, context);
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

const deserializeAws_restJson1DeleteBotLocaleCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotVersionCommandError(output, context);
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

const deserializeAws_restJson1DeleteBotVersionCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteCustomVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVocabularyCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomVocabularyCommandError(output, context);
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

const deserializeAws_restJson1DeleteCustomVocabularyCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExportCommandError(output, context);
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

const deserializeAws_restJson1DeleteExportCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteImportCommandError(output, context);
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

const deserializeAws_restJson1DeleteImportCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteIntentCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
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

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteResourcePolicyStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyStatementCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyStatementCommandError(output, context);
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

const deserializeAws_restJson1DeleteResourcePolicyStatementCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSlotCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotTypeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteSlotTypeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUtterancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteUtterancesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
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

const deserializeAws_restJson1DescribeBotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasHistoryEvents != null) {
    contents.botAliasHistoryEvents = deserializeAws_restJson1BotAliasHistoryEventsList(
      data.botAliasHistoryEvents,
      context
    );
  }
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings != null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
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
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
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
    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(
      data.sentimentAnalysisSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeBotAliasCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotLocaleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotLocaleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleHistoryEvents != null) {
    contents.botLocaleHistoryEvents = deserializeAws_restJson1BotLocaleHistoryEventsList(
      data.botLocaleHistoryEvents,
      context
    );
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
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
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
    contents.recommendedActions = deserializeAws_restJson1RecommendedActions(data.recommendedActions, context);
  }
  if (data.slotTypesCount != null) {
    contents.slotTypesCount = __expectInt32(data.slotTypesCount);
  }
  if (data.voiceSettings != null) {
    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeBotLocaleCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotRecommendationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotRecommendationCommandError(output, context);
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
    contents.botRecommendationResults = deserializeAws_restJson1BotRecommendationResults(
      data.botRecommendationResults,
      context
    );
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
    contents.encryptionSetting = deserializeAws_restJson1EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting != null) {
    contents.transcriptSourceSetting = deserializeAws_restJson1TranscriptSourceSetting(
      data.transcriptSourceSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeBotRecommendationCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons != null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.idleSessionTTLInSeconds != null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.roleArn != null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return contents;
};

const deserializeAws_restJson1DescribeBotVersionCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeCustomVocabularyMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomVocabularyMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCustomVocabularyMetadataCommandError(output, context);
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

const deserializeAws_restJson1DescribeCustomVocabularyMetadataCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeExportCommandError(output, context);
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
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.fileFormat != null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.resourceSpecification != null) {
    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeExportCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.failureReasons != null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
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
    contents.resourceSpecification = deserializeAws_restJson1ImportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeImportCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIntentCommandError(output, context);
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
    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook != null) {
    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(
      data.fulfillmentCodeHook,
      context
    );
  }
  if (data.initialResponseSetting != null) {
    contents.initialResponseSetting = deserializeAws_restJson1InitialResponseSetting(
      data.initialResponseSetting,
      context
    );
  }
  if (data.inputContexts != null) {
    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting != null) {
    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting != null) {
    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(
      data.intentConfirmationSetting,
      context
    );
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
  }
  if (data.slotPriorities != null) {
    contents.slotPriorities = deserializeAws_restJson1SlotPrioritiesList(data.slotPriorities, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeIntentCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResourcePolicyCommandError(output, context);
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

const deserializeAws_restJson1DescribeResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSlotCommandError(output, context);
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
    contents.multipleValuesSetting = deserializeAws_restJson1MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting != null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
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
    contents.subSlotSetting = deserializeAws_restJson1SubSlotSetting(data.subSlotSetting, context);
  }
  if (data.valueElicitationSetting != null) {
    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(
      data.valueElicitationSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeSlotCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSlotTypeCommandError(output, context);
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
    contents.compositeSlotTypeSetting = deserializeAws_restJson1CompositeSlotTypeSetting(
      data.compositeSlotTypeSetting,
      context
    );
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting != null) {
    contents.externalSourceSetting = deserializeAws_restJson1ExternalSourceSetting(data.externalSourceSetting, context);
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
    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting != null) {
    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(
      data.valueSelectionSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeSlotTypeCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAggregatedUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregatedUtterancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAggregatedUtterancesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.aggregatedUtterancesSummaries != null) {
    contents.aggregatedUtterancesSummaries = deserializeAws_restJson1AggregatedUtterancesSummaryList(
      data.aggregatedUtterancesSummaries,
      context
    );
  }
  if (data.aggregationDuration != null) {
    contents.aggregationDuration = deserializeAws_restJson1UtteranceAggregationDuration(
      data.aggregationDuration,
      context
    );
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

const deserializeAws_restJson1ListAggregatedUtterancesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotAliasesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasSummaries != null) {
    contents.botAliasSummaries = deserializeAws_restJson1BotAliasSummaryList(data.botAliasSummaries, context);
  }
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBotAliasesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotLocalesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotLocalesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotLocalesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleSummaries != null) {
    contents.botLocaleSummaries = deserializeAws_restJson1BotLocaleSummaryList(data.botLocaleSummaries, context);
  }
  if (data.botVersion != null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBotLocalesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotRecommendationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationSummaries != null) {
    contents.botRecommendationSummaries = deserializeAws_restJson1BotRecommendationSummaryList(
      data.botRecommendationSummaries,
      context
    );
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

const deserializeAws_restJson1ListBotRecommendationsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botSummaries != null) {
    contents.botSummaries = deserializeAws_restJson1BotSummaryList(data.botSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBotsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBotVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersionSummaries != null) {
    contents.botVersionSummaries = deserializeAws_restJson1BotVersionSummaryList(data.botVersionSummaries, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBotVersionsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBuiltInIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBuiltInIntentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.builtInIntentSummaries != null) {
    contents.builtInIntentSummaries = deserializeAws_restJson1BuiltInIntentSummaryList(
      data.builtInIntentSummaries,
      context
    );
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBuiltInIntentsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListBuiltInSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBuiltInSlotTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.builtInSlotTypeSummaries != null) {
    contents.builtInSlotTypeSummaries = deserializeAws_restJson1BuiltInSlotTypeSummaryList(
      data.builtInSlotTypeSummaries,
      context
    );
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBuiltInSlotTypesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListCustomVocabularyItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCustomVocabularyItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCustomVocabularyItemsCommandError(output, context);
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
    contents.customVocabularyItems = deserializeAws_restJson1CustomVocabularyItems(data.customVocabularyItems, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCustomVocabularyItemsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExportsCommandError(output, context);
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
    contents.exportSummaries = deserializeAws_restJson1ExportSummaryList(data.exportSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListExportsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImportsCommandError(output, context);
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
    contents.importSummaries = deserializeAws_restJson1ImportSummaryList(data.importSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListImportsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIntentsCommandError(output, context);
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
    contents.intentSummaries = deserializeAws_restJson1IntentSummaryList(data.intentSummaries, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIntentsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListRecommendedIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendedIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendedIntentsCommandError(output, context);
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
    contents.summaryList = deserializeAws_restJson1RecommendedIntentSummaryList(data.summaryList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecommendedIntentsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSlotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSlotsCommandError(output, context);
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
    contents.slotSummaries = deserializeAws_restJson1SlotSummaryList(data.slotSummaries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSlotsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSlotTypesCommandError(output, context);
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
    contents.slotTypeSummaries = deserializeAws_restJson1SlotTypeSummaryList(data.slotTypeSummaries, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSlotTypesCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1SearchAssociatedTranscriptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAssociatedTranscriptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchAssociatedTranscriptsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedTranscripts != null) {
    contents.associatedTranscripts = deserializeAws_restJson1AssociatedTranscriptList(
      data.associatedTranscripts,
      context
    );
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

const deserializeAws_restJson1SearchAssociatedTranscriptsCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBotRecommendationCommandError(output, context);
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
    contents.encryptionSetting = deserializeAws_restJson1EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting != null) {
    contents.transcriptSourceSetting = deserializeAws_restJson1TranscriptSourceSetting(
      data.transcriptSourceSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1StartBotRecommendationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImportCommandError(output, context);
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
    contents.resourceSpecification = deserializeAws_restJson1ImportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1StartImportCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1StopBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopBotRecommendationCommandError(output, context);
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

const deserializeAws_restJson1StopBotRecommendationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId != null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName != null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus != null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy != null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
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

const deserializeAws_restJson1UpdateBotCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotAliasCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId != null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings != null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
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
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
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
    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(
      data.sentimentAnalysisSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateBotAliasCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotLocaleCommandError(output, context);
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
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
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
    contents.recommendedActions = deserializeAws_restJson1RecommendedActions(data.recommendedActions, context);
  }
  if (data.voiceSettings != null) {
    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateBotLocaleCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotRecommendationCommandError(output, context);
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
    contents.encryptionSetting = deserializeAws_restJson1EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting != null) {
    contents.transcriptSourceSetting = deserializeAws_restJson1TranscriptSourceSetting(
      data.transcriptSourceSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateBotRecommendationCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExportCommandError(output, context);
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
    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateExportCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntentCommandError(output, context);
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
    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook != null) {
    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(
      data.fulfillmentCodeHook,
      context
    );
  }
  if (data.initialResponseSetting != null) {
    contents.initialResponseSetting = deserializeAws_restJson1InitialResponseSetting(
      data.initialResponseSetting,
      context
    );
  }
  if (data.inputContexts != null) {
    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting != null) {
    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting != null) {
    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(
      data.intentConfirmationSetting,
      context
    );
  }
  if (data.intentId != null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName != null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration != null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime != null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId != null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts != null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature != null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances != null) {
    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
  }
  if (data.slotPriorities != null) {
    contents.slotPriorities = deserializeAws_restJson1SlotPrioritiesList(data.slotPriorities, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateIntentCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourcePolicyCommandError(output, context);
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

const deserializeAws_restJson1UpdateResourcePolicyCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSlotCommandError(output, context);
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
    contents.multipleValuesSetting = deserializeAws_restJson1MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting != null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
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
    contents.subSlotSetting = deserializeAws_restJson1SubSlotSetting(data.subSlotSetting, context);
  }
  if (data.valueElicitationSetting != null) {
    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(
      data.valueElicitationSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateSlotCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotTypeCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSlotTypeCommandError(output, context);
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
    contents.compositeSlotTypeSetting = deserializeAws_restJson1CompositeSlotTypeSetting(
      data.compositeSlotTypeSetting,
      context
    );
  }
  if (data.creationDateTime != null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting != null) {
    contents.externalSourceSetting = deserializeAws_restJson1ExternalSourceSetting(data.externalSourceSetting, context);
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
    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting != null) {
    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(
      data.valueSelectionSetting,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1UpdateSlotTypeCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      throw await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
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
const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
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

const serializeAws_restJson1AdvancedRecognitionSetting = (
  input: AdvancedRecognitionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.audioRecognitionStrategy != null && { audioRecognitionStrategy: input.audioRecognitionStrategy }),
  };
};

const serializeAws_restJson1AggregatedUtterancesFilter = (
  input: AggregatedUtterancesFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1AggregatedUtterancesFilters = (
  input: AggregatedUtterancesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AggregatedUtterancesFilter(entry, context);
    });
};

const serializeAws_restJson1AggregatedUtterancesSortBy = (
  input: AggregatedUtterancesSortBy,
  context: __SerdeContext
): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1AllowedInputTypes = (input: AllowedInputTypes, context: __SerdeContext): any => {
  return {
    ...(input.allowAudioInput != null && { allowAudioInput: input.allowAudioInput }),
    ...(input.allowDTMFInput != null && { allowDTMFInput: input.allowDTMFInput }),
  };
};

const serializeAws_restJson1AssociatedTranscriptFilter = (
  input: AssociatedTranscriptFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1AssociatedTranscriptFilters = (
  input: AssociatedTranscriptFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AssociatedTranscriptFilter(entry, context);
    });
};

const serializeAws_restJson1AudioAndDTMFInputSpecification = (
  input: AudioAndDTMFInputSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.audioSpecification != null && {
      audioSpecification: serializeAws_restJson1AudioSpecification(input.audioSpecification, context),
    }),
    ...(input.dtmfSpecification != null && {
      dtmfSpecification: serializeAws_restJson1DTMFSpecification(input.dtmfSpecification, context),
    }),
    ...(input.startTimeoutMs != null && { startTimeoutMs: input.startTimeoutMs }),
  };
};

const serializeAws_restJson1AudioLogDestination = (input: AudioLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != null && { s3Bucket: serializeAws_restJson1S3BucketLogDestination(input.s3Bucket, context) }),
  };
};

const serializeAws_restJson1AudioLogSetting = (input: AudioLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && {
      destination: serializeAws_restJson1AudioLogDestination(input.destination, context),
    }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1AudioLogSettingsList = (input: AudioLogSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AudioLogSetting(entry, context);
    });
};

const serializeAws_restJson1AudioSpecification = (input: AudioSpecification, context: __SerdeContext): any => {
  return {
    ...(input.endTimeoutMs != null && { endTimeoutMs: input.endTimeoutMs }),
    ...(input.maxLengthMs != null && { maxLengthMs: input.maxLengthMs }),
  };
};

const serializeAws_restJson1BotAliasLocaleSettings = (input: BotAliasLocaleSettings, context: __SerdeContext): any => {
  return {
    ...(input.codeHookSpecification != null && {
      codeHookSpecification: serializeAws_restJson1CodeHookSpecification(input.codeHookSpecification, context),
    }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1BotAliasLocaleSettingsMap = (
  input: Record<string, BotAliasLocaleSettings>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1BotAliasLocaleSettings(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1BotExportSpecification = (input: BotExportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
  };
};

const serializeAws_restJson1BotFilter = (input: BotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1BotFilters = (input: BotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BotFilter(entry, context);
    });
};

const serializeAws_restJson1BotImportSpecification = (input: BotImportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botName != null && { botName: input.botName }),
    ...(input.botTags != null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
    ...(input.dataPrivacy != null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
    ...(input.idleSessionTTLInSeconds != null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags != null && {
      testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
    }),
  };
};

const serializeAws_restJson1BotLocaleExportSpecification = (
  input: BotLocaleExportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
  };
};

const serializeAws_restJson1BotLocaleFilter = (input: BotLocaleFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1BotLocaleFilters = (input: BotLocaleFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BotLocaleFilter(entry, context);
    });
};

const serializeAws_restJson1BotLocaleImportSpecification = (
  input: BotLocaleImportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
    ...(input.nluIntentConfidenceThreshold != null && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != null && {
      voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
    }),
  };
};

const serializeAws_restJson1BotLocaleSortBy = (input: BotLocaleSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1BotSortBy = (input: BotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1BotVersionLocaleDetails = (
  input: BotVersionLocaleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourceBotVersion != null && { sourceBotVersion: input.sourceBotVersion }),
  };
};

const serializeAws_restJson1BotVersionLocaleSpecification = (
  input: Record<string, BotVersionLocaleDetails>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1BotVersionLocaleDetails(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1BotVersionSortBy = (input: BotVersionSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1BuiltInIntentSortBy = (input: BuiltInIntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1BuiltInSlotTypeSortBy = (input: BuiltInSlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text != null && { text: input.text }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1ButtonsList = (input: Button[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Button(entry, context);
    });
};

const serializeAws_restJson1CloudWatchLogGroupLogDestination = (
  input: CloudWatchLogGroupLogDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogGroupArn != null && { cloudWatchLogGroupArn: input.cloudWatchLogGroupArn }),
    ...(input.logPrefix != null && { logPrefix: input.logPrefix }),
  };
};

const serializeAws_restJson1CodeHookSpecification = (input: CodeHookSpecification, context: __SerdeContext): any => {
  return {
    ...(input.lambdaCodeHook != null && {
      lambdaCodeHook: serializeAws_restJson1LambdaCodeHook(input.lambdaCodeHook, context),
    }),
  };
};

const serializeAws_restJson1CompositeSlotTypeSetting = (
  input: CompositeSlotTypeSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.subSlots != null && { subSlots: serializeAws_restJson1SubSlotTypeList(input.subSlots, context) }),
  };
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.expressionString != null && { expressionString: input.expressionString }),
  };
};

const serializeAws_restJson1ConditionalBranch = (input: ConditionalBranch, context: __SerdeContext): any => {
  return {
    ...(input.condition != null && { condition: serializeAws_restJson1Condition(input.condition, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.nextStep != null && { nextStep: serializeAws_restJson1DialogState(input.nextStep, context) }),
    ...(input.response != null && { response: serializeAws_restJson1ResponseSpecification(input.response, context) }),
  };
};

const serializeAws_restJson1ConditionalBranches = (input: ConditionalBranch[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConditionalBranch(entry, context);
    });
};

const serializeAws_restJson1ConditionalSpecification = (
  input: ConditionalSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.conditionalBranches != null && {
      conditionalBranches: serializeAws_restJson1ConditionalBranches(input.conditionalBranches, context),
    }),
    ...(input.defaultBranch != null && {
      defaultBranch: serializeAws_restJson1DefaultConditionalBranch(input.defaultBranch, context),
    }),
  };
};

const serializeAws_restJson1ConditionKeyValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ConditionMap = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ConditionKeyValueMap(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ConversationLogSettings = (
  input: ConversationLogSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.audioLogSettings != null && {
      audioLogSettings: serializeAws_restJson1AudioLogSettingsList(input.audioLogSettings, context),
    }),
    ...(input.textLogSettings != null && {
      textLogSettings: serializeAws_restJson1TextLogSettingsList(input.textLogSettings, context),
    }),
  };
};

const serializeAws_restJson1CreateCustomVocabularyItemsList = (
  input: NewCustomVocabularyItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NewCustomVocabularyItem(entry, context);
    });
};

const serializeAws_restJson1CustomPayload = (input: CustomPayload, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1CustomVocabularyEntryId = (
  input: CustomVocabularyEntryId,
  context: __SerdeContext
): any => {
  return {
    ...(input.itemId != null && { itemId: input.itemId }),
  };
};

const serializeAws_restJson1CustomVocabularyExportSpecification = (
  input: CustomVocabularyExportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
  };
};

const serializeAws_restJson1CustomVocabularyImportSpecification = (
  input: CustomVocabularyImportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != null && { botId: input.botId }),
    ...(input.botVersion != null && { botVersion: input.botVersion }),
    ...(input.localeId != null && { localeId: input.localeId }),
  };
};

const serializeAws_restJson1CustomVocabularyItem = (input: CustomVocabularyItem, context: __SerdeContext): any => {
  return {
    ...(input.displayAs != null && { displayAs: input.displayAs }),
    ...(input.itemId != null && { itemId: input.itemId }),
    ...(input.phrase != null && { phrase: input.phrase }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

const serializeAws_restJson1DataPrivacy = (input: DataPrivacy, context: __SerdeContext): any => {
  return {
    ...(input.childDirected != null && { childDirected: input.childDirected }),
  };
};

const serializeAws_restJson1DateRangeFilter = (input: DateRangeFilter, context: __SerdeContext): any => {
  return {
    ...(input.endDateTime != null && { endDateTime: Math.round(input.endDateTime.getTime() / 1000) }),
    ...(input.startDateTime != null && { startDateTime: Math.round(input.startDateTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1DefaultConditionalBranch = (
  input: DefaultConditionalBranch,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextStep != null && { nextStep: serializeAws_restJson1DialogState(input.nextStep, context) }),
    ...(input.response != null && { response: serializeAws_restJson1ResponseSpecification(input.response, context) }),
  };
};

const serializeAws_restJson1DeleteCustomVocabularyItemsList = (
  input: CustomVocabularyEntryId[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CustomVocabularyEntryId(entry, context);
    });
};

const serializeAws_restJson1DialogAction = (input: DialogAction, context: __SerdeContext): any => {
  return {
    ...(input.slotToElicit != null && { slotToElicit: input.slotToElicit }),
    ...(input.suppressNextMessage != null && { suppressNextMessage: input.suppressNextMessage }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1DialogCodeHookInvocationSetting = (
  input: DialogCodeHookInvocationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.enableCodeHookInvocation != null && { enableCodeHookInvocation: input.enableCodeHookInvocation }),
    ...(input.invocationLabel != null && { invocationLabel: input.invocationLabel }),
    ...(input.postCodeHookSpecification != null && {
      postCodeHookSpecification: serializeAws_restJson1PostDialogCodeHookInvocationSpecification(
        input.postCodeHookSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1DialogCodeHookSettings = (input: DialogCodeHookSettings, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1DialogState = (input: DialogState, context: __SerdeContext): any => {
  return {
    ...(input.dialogAction != null && {
      dialogAction: serializeAws_restJson1DialogAction(input.dialogAction, context),
    }),
    ...(input.intent != null && { intent: serializeAws_restJson1IntentOverride(input.intent, context) }),
    ...(input.sessionAttributes != null && {
      sessionAttributes: serializeAws_restJson1StringMap(input.sessionAttributes, context),
    }),
  };
};

const serializeAws_restJson1DTMFSpecification = (input: DTMFSpecification, context: __SerdeContext): any => {
  return {
    ...(input.deletionCharacter != null && { deletionCharacter: input.deletionCharacter }),
    ...(input.endCharacter != null && { endCharacter: input.endCharacter }),
    ...(input.endTimeoutMs != null && { endTimeoutMs: input.endTimeoutMs }),
    ...(input.maxLength != null && { maxLength: input.maxLength }),
  };
};

const serializeAws_restJson1ElicitationCodeHookInvocationSetting = (
  input: ElicitationCodeHookInvocationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.enableCodeHookInvocation != null && { enableCodeHookInvocation: input.enableCodeHookInvocation }),
    ...(input.invocationLabel != null && { invocationLabel: input.invocationLabel }),
  };
};

const serializeAws_restJson1EncryptionSetting = (input: EncryptionSetting, context: __SerdeContext): any => {
  return {
    ...(input.associatedTranscriptsPassword != null && {
      associatedTranscriptsPassword: input.associatedTranscriptsPassword,
    }),
    ...(input.botLocaleExportPassword != null && { botLocaleExportPassword: input.botLocaleExportPassword }),
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
  };
};

const serializeAws_restJson1ExportFilter = (input: ExportFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1ExportFilters = (input: ExportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ExportFilter(entry, context);
    });
};

const serializeAws_restJson1ExportResourceSpecification = (
  input: ExportResourceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botExportSpecification != null && {
      botExportSpecification: serializeAws_restJson1BotExportSpecification(input.botExportSpecification, context),
    }),
    ...(input.botLocaleExportSpecification != null && {
      botLocaleExportSpecification: serializeAws_restJson1BotLocaleExportSpecification(
        input.botLocaleExportSpecification,
        context
      ),
    }),
    ...(input.customVocabularyExportSpecification != null && {
      customVocabularyExportSpecification: serializeAws_restJson1CustomVocabularyExportSpecification(
        input.customVocabularyExportSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ExportSortBy = (input: ExportSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1ExternalSourceSetting = (input: ExternalSourceSetting, context: __SerdeContext): any => {
  return {
    ...(input.grammarSlotTypeSetting != null && {
      grammarSlotTypeSetting: serializeAws_restJson1GrammarSlotTypeSetting(input.grammarSlotTypeSetting, context),
    }),
  };
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FulfillmentCodeHookSettings = (
  input: FulfillmentCodeHookSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.fulfillmentUpdatesSpecification != null && {
      fulfillmentUpdatesSpecification: serializeAws_restJson1FulfillmentUpdatesSpecification(
        input.fulfillmentUpdatesSpecification,
        context
      ),
    }),
    ...(input.postFulfillmentStatusSpecification != null && {
      postFulfillmentStatusSpecification: serializeAws_restJson1PostFulfillmentStatusSpecification(
        input.postFulfillmentStatusSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1FulfillmentStartResponseSpecification = (
  input: FulfillmentStartResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.delayInSeconds != null && { delayInSeconds: input.delayInSeconds }),
    ...(input.messageGroups != null && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
  };
};

const serializeAws_restJson1FulfillmentUpdateResponseSpecification = (
  input: FulfillmentUpdateResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds != null && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups != null && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
  };
};

const serializeAws_restJson1FulfillmentUpdatesSpecification = (
  input: FulfillmentUpdatesSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.startResponse != null && {
      startResponse: serializeAws_restJson1FulfillmentStartResponseSpecification(input.startResponse, context),
    }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
    ...(input.updateResponse != null && {
      updateResponse: serializeAws_restJson1FulfillmentUpdateResponseSpecification(input.updateResponse, context),
    }),
  };
};

const serializeAws_restJson1GrammarSlotTypeSetting = (input: GrammarSlotTypeSetting, context: __SerdeContext): any => {
  return {
    ...(input.source != null && { source: serializeAws_restJson1GrammarSlotTypeSource(input.source, context) }),
  };
};

const serializeAws_restJson1GrammarSlotTypeSource = (input: GrammarSlotTypeSource, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.s3ObjectKey != null && { s3ObjectKey: input.s3ObjectKey }),
  };
};

const serializeAws_restJson1ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons != null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
    ...(input.imageUrl != null && { imageUrl: input.imageUrl }),
    ...(input.subtitle != null && { subtitle: input.subtitle }),
    ...(input.title != null && { title: input.title }),
  };
};

const serializeAws_restJson1ImportFilter = (input: ImportFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1ImportFilters = (input: ImportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ImportFilter(entry, context);
    });
};

const serializeAws_restJson1ImportResourceSpecification = (
  input: ImportResourceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botImportSpecification != null && {
      botImportSpecification: serializeAws_restJson1BotImportSpecification(input.botImportSpecification, context),
    }),
    ...(input.botLocaleImportSpecification != null && {
      botLocaleImportSpecification: serializeAws_restJson1BotLocaleImportSpecification(
        input.botLocaleImportSpecification,
        context
      ),
    }),
    ...(input.customVocabularyImportSpecification != null && {
      customVocabularyImportSpecification: serializeAws_restJson1CustomVocabularyImportSpecification(
        input.customVocabularyImportSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ImportSortBy = (input: ImportSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1InitialResponseSetting = (input: InitialResponseSetting, context: __SerdeContext): any => {
  return {
    ...(input.codeHook != null && {
      codeHook: serializeAws_restJson1DialogCodeHookInvocationSetting(input.codeHook, context),
    }),
    ...(input.conditional != null && {
      conditional: serializeAws_restJson1ConditionalSpecification(input.conditional, context),
    }),
    ...(input.initialResponse != null && {
      initialResponse: serializeAws_restJson1ResponseSpecification(input.initialResponse, context),
    }),
    ...(input.nextStep != null && { nextStep: serializeAws_restJson1DialogState(input.nextStep, context) }),
  };
};

const serializeAws_restJson1InputContext = (input: InputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1InputContextsList = (input: InputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1InputContext(entry, context);
    });
};

const serializeAws_restJson1IntentClosingSetting = (input: IntentClosingSetting, context: __SerdeContext): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.closingResponse != null && {
      closingResponse: serializeAws_restJson1ResponseSpecification(input.closingResponse, context),
    }),
    ...(input.conditional != null && {
      conditional: serializeAws_restJson1ConditionalSpecification(input.conditional, context),
    }),
    ...(input.nextStep != null && { nextStep: serializeAws_restJson1DialogState(input.nextStep, context) }),
  };
};

const serializeAws_restJson1IntentConfirmationSetting = (
  input: IntentConfirmationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.codeHook != null && {
      codeHook: serializeAws_restJson1DialogCodeHookInvocationSetting(input.codeHook, context),
    }),
    ...(input.confirmationConditional != null && {
      confirmationConditional: serializeAws_restJson1ConditionalSpecification(input.confirmationConditional, context),
    }),
    ...(input.confirmationNextStep != null && {
      confirmationNextStep: serializeAws_restJson1DialogState(input.confirmationNextStep, context),
    }),
    ...(input.confirmationResponse != null && {
      confirmationResponse: serializeAws_restJson1ResponseSpecification(input.confirmationResponse, context),
    }),
    ...(input.declinationConditional != null && {
      declinationConditional: serializeAws_restJson1ConditionalSpecification(input.declinationConditional, context),
    }),
    ...(input.declinationNextStep != null && {
      declinationNextStep: serializeAws_restJson1DialogState(input.declinationNextStep, context),
    }),
    ...(input.declinationResponse != null && {
      declinationResponse: serializeAws_restJson1ResponseSpecification(input.declinationResponse, context),
    }),
    ...(input.elicitationCodeHook != null && {
      elicitationCodeHook: serializeAws_restJson1ElicitationCodeHookInvocationSetting(
        input.elicitationCodeHook,
        context
      ),
    }),
    ...(input.failureConditional != null && {
      failureConditional: serializeAws_restJson1ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && {
      failureNextStep: serializeAws_restJson1DialogState(input.failureNextStep, context),
    }),
    ...(input.failureResponse != null && {
      failureResponse: serializeAws_restJson1ResponseSpecification(input.failureResponse, context),
    }),
    ...(input.promptSpecification != null && {
      promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    }),
  };
};

const serializeAws_restJson1IntentFilter = (input: IntentFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1IntentFilters = (input: IntentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1IntentFilter(entry, context);
    });
};

const serializeAws_restJson1IntentOverride = (input: IntentOverride, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.slots != null && { slots: serializeAws_restJson1SlotValueOverrideMap(input.slots, context) }),
  };
};

const serializeAws_restJson1IntentSortBy = (input: IntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1KendraConfiguration = (input: KendraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kendraIndex != null && { kendraIndex: input.kendraIndex }),
    ...(input.queryFilterString != null && { queryFilterString: input.queryFilterString }),
    ...(input.queryFilterStringEnabled != null && { queryFilterStringEnabled: input.queryFilterStringEnabled }),
  };
};

const serializeAws_restJson1LambdaCodeHook = (input: LambdaCodeHook, context: __SerdeContext): any => {
  return {
    ...(input.codeHookInterfaceVersion != null && { codeHookInterfaceVersion: input.codeHookInterfaceVersion }),
    ...(input.lambdaARN != null && { lambdaARN: input.lambdaARN }),
  };
};

const serializeAws_restJson1LexTranscriptFilter = (input: LexTranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.dateRangeFilter != null && {
      dateRangeFilter: serializeAws_restJson1DateRangeFilter(input.dateRangeFilter, context),
    }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.customPayload != null && {
      customPayload: serializeAws_restJson1CustomPayload(input.customPayload, context),
    }),
    ...(input.imageResponseCard != null && {
      imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
    }),
    ...(input.plainTextMessage != null && {
      plainTextMessage: serializeAws_restJson1PlainTextMessage(input.plainTextMessage, context),
    }),
    ...(input.ssmlMessage != null && { ssmlMessage: serializeAws_restJson1SSMLMessage(input.ssmlMessage, context) }),
  };
};

const serializeAws_restJson1MessageGroup = (input: MessageGroup, context: __SerdeContext): any => {
  return {
    ...(input.message != null && { message: serializeAws_restJson1Message(input.message, context) }),
    ...(input.variations != null && {
      variations: serializeAws_restJson1MessageVariationsList(input.variations, context),
    }),
  };
};

const serializeAws_restJson1MessageGroupsList = (input: MessageGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MessageGroup(entry, context);
    });
};

const serializeAws_restJson1MessageVariationsList = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1MultipleValuesSetting = (input: MultipleValuesSetting, context: __SerdeContext): any => {
  return {
    ...(input.allowMultipleValues != null && { allowMultipleValues: input.allowMultipleValues }),
  };
};

const serializeAws_restJson1NewCustomVocabularyItem = (
  input: NewCustomVocabularyItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.displayAs != null && { displayAs: input.displayAs }),
    ...(input.phrase != null && { phrase: input.phrase }),
    ...(input.weight != null && { weight: input.weight }),
  };
};

const serializeAws_restJson1ObfuscationSetting = (input: ObfuscationSetting, context: __SerdeContext): any => {
  return {
    ...(input.obfuscationSettingType != null && { obfuscationSettingType: input.obfuscationSettingType }),
  };
};

const serializeAws_restJson1ObjectPrefixes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OperationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OutputContext = (input: OutputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.timeToLiveInSeconds != null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive != null && { turnsToLive: input.turnsToLive }),
  };
};

const serializeAws_restJson1OutputContextsList = (input: OutputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1OutputContext(entry, context);
    });
};

const serializeAws_restJson1PathFormat = (input: PathFormat, context: __SerdeContext): any => {
  return {
    ...(input.objectPrefixes != null && {
      objectPrefixes: serializeAws_restJson1ObjectPrefixes(input.objectPrefixes, context),
    }),
  };
};

const serializeAws_restJson1PlainTextMessage = (input: PlainTextMessage, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1PostDialogCodeHookInvocationSpecification = (
  input: PostDialogCodeHookInvocationSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureConditional != null && {
      failureConditional: serializeAws_restJson1ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && {
      failureNextStep: serializeAws_restJson1DialogState(input.failureNextStep, context),
    }),
    ...(input.failureResponse != null && {
      failureResponse: serializeAws_restJson1ResponseSpecification(input.failureResponse, context),
    }),
    ...(input.successConditional != null && {
      successConditional: serializeAws_restJson1ConditionalSpecification(input.successConditional, context),
    }),
    ...(input.successNextStep != null && {
      successNextStep: serializeAws_restJson1DialogState(input.successNextStep, context),
    }),
    ...(input.successResponse != null && {
      successResponse: serializeAws_restJson1ResponseSpecification(input.successResponse, context),
    }),
    ...(input.timeoutConditional != null && {
      timeoutConditional: serializeAws_restJson1ConditionalSpecification(input.timeoutConditional, context),
    }),
    ...(input.timeoutNextStep != null && {
      timeoutNextStep: serializeAws_restJson1DialogState(input.timeoutNextStep, context),
    }),
    ...(input.timeoutResponse != null && {
      timeoutResponse: serializeAws_restJson1ResponseSpecification(input.timeoutResponse, context),
    }),
  };
};

const serializeAws_restJson1PostFulfillmentStatusSpecification = (
  input: PostFulfillmentStatusSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureConditional != null && {
      failureConditional: serializeAws_restJson1ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && {
      failureNextStep: serializeAws_restJson1DialogState(input.failureNextStep, context),
    }),
    ...(input.failureResponse != null && {
      failureResponse: serializeAws_restJson1ResponseSpecification(input.failureResponse, context),
    }),
    ...(input.successConditional != null && {
      successConditional: serializeAws_restJson1ConditionalSpecification(input.successConditional, context),
    }),
    ...(input.successNextStep != null && {
      successNextStep: serializeAws_restJson1DialogState(input.successNextStep, context),
    }),
    ...(input.successResponse != null && {
      successResponse: serializeAws_restJson1ResponseSpecification(input.successResponse, context),
    }),
    ...(input.timeoutConditional != null && {
      timeoutConditional: serializeAws_restJson1ConditionalSpecification(input.timeoutConditional, context),
    }),
    ...(input.timeoutNextStep != null && {
      timeoutNextStep: serializeAws_restJson1DialogState(input.timeoutNextStep, context),
    }),
    ...(input.timeoutResponse != null && {
      timeoutResponse: serializeAws_restJson1ResponseSpecification(input.timeoutResponse, context),
    }),
  };
};

const serializeAws_restJson1Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.arn != null && { arn: input.arn }),
    ...(input.service != null && { service: input.service }),
  };
};

const serializeAws_restJson1PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Principal(entry, context);
    });
};

const serializeAws_restJson1PromptAttemptSpecification = (
  input: PromptAttemptSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.allowedInputTypes != null && {
      allowedInputTypes: serializeAws_restJson1AllowedInputTypes(input.allowedInputTypes, context),
    }),
    ...(input.audioAndDTMFInputSpecification != null && {
      audioAndDTMFInputSpecification: serializeAws_restJson1AudioAndDTMFInputSpecification(
        input.audioAndDTMFInputSpecification,
        context
      ),
    }),
    ...(input.textInputSpecification != null && {
      textInputSpecification: serializeAws_restJson1TextInputSpecification(input.textInputSpecification, context),
    }),
  };
};

const serializeAws_restJson1PromptAttemptsSpecificationMap = (
  input: Record<string, PromptAttemptSpecification>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [PromptAttempt | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1PromptAttemptSpecification(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1PromptSpecification = (input: PromptSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.maxRetries != null && { maxRetries: input.maxRetries }),
    ...(input.messageGroups != null && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
    ...(input.messageSelectionStrategy != null && { messageSelectionStrategy: input.messageSelectionStrategy }),
    ...(input.promptAttemptsSpecification != null && {
      promptAttemptsSpecification: serializeAws_restJson1PromptAttemptsSpecificationMap(
        input.promptAttemptsSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1RelativeAggregationDuration = (
  input: RelativeAggregationDuration,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeDimension != null && { timeDimension: input.timeDimension }),
    ...(input.timeValue != null && { timeValue: input.timeValue }),
  };
};

const serializeAws_restJson1ResponseSpecification = (input: ResponseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.messageGroups != null && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
  };
};

const serializeAws_restJson1S3BucketLogDestination = (input: S3BucketLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.logPrefix != null && { logPrefix: input.logPrefix }),
    ...(input.s3BucketArn != null && { s3BucketArn: input.s3BucketArn }),
  };
};

const serializeAws_restJson1S3BucketTranscriptSource = (
  input: S3BucketTranscriptSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyArn != null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.pathFormat != null && { pathFormat: serializeAws_restJson1PathFormat(input.pathFormat, context) }),
    ...(input.s3BucketName != null && { s3BucketName: input.s3BucketName }),
    ...(input.transcriptFilter != null && {
      transcriptFilter: serializeAws_restJson1TranscriptFilter(input.transcriptFilter, context),
    }),
    ...(input.transcriptFormat != null && { transcriptFormat: input.transcriptFormat }),
  };
};

const serializeAws_restJson1SampleUtterance = (input: SampleUtterance, context: __SerdeContext): any => {
  return {
    ...(input.utterance != null && { utterance: input.utterance }),
  };
};

const serializeAws_restJson1SampleUtterancesList = (input: SampleUtterance[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SampleUtterance(entry, context);
    });
};

const serializeAws_restJson1SampleValue = (input: SampleValue, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1SentimentAnalysisSettings = (
  input: SentimentAnalysisSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectSentiment != null && { detectSentiment: input.detectSentiment }),
  };
};

const serializeAws_restJson1SlotCaptureSetting = (input: SlotCaptureSetting, context: __SerdeContext): any => {
  return {
    ...(input.captureConditional != null && {
      captureConditional: serializeAws_restJson1ConditionalSpecification(input.captureConditional, context),
    }),
    ...(input.captureNextStep != null && {
      captureNextStep: serializeAws_restJson1DialogState(input.captureNextStep, context),
    }),
    ...(input.captureResponse != null && {
      captureResponse: serializeAws_restJson1ResponseSpecification(input.captureResponse, context),
    }),
    ...(input.codeHook != null && {
      codeHook: serializeAws_restJson1DialogCodeHookInvocationSetting(input.codeHook, context),
    }),
    ...(input.elicitationCodeHook != null && {
      elicitationCodeHook: serializeAws_restJson1ElicitationCodeHookInvocationSetting(
        input.elicitationCodeHook,
        context
      ),
    }),
    ...(input.failureConditional != null && {
      failureConditional: serializeAws_restJson1ConditionalSpecification(input.failureConditional, context),
    }),
    ...(input.failureNextStep != null && {
      failureNextStep: serializeAws_restJson1DialogState(input.failureNextStep, context),
    }),
    ...(input.failureResponse != null && {
      failureResponse: serializeAws_restJson1ResponseSpecification(input.failureResponse, context),
    }),
  };
};

const serializeAws_restJson1SlotDefaultValue = (input: SlotDefaultValue, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != null && { defaultValue: input.defaultValue }),
  };
};

const serializeAws_restJson1SlotDefaultValueList = (input: SlotDefaultValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotDefaultValue(entry, context);
    });
};

const serializeAws_restJson1SlotDefaultValueSpecification = (
  input: SlotDefaultValueSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValueList != null && {
      defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
    }),
  };
};

const serializeAws_restJson1SlotFilter = (input: SlotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1SlotFilters = (input: SlotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotFilter(entry, context);
    });
};

const serializeAws_restJson1SlotPrioritiesList = (input: SlotPriority[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotPriority(entry, context);
    });
};

const serializeAws_restJson1SlotPriority = (input: SlotPriority, context: __SerdeContext): any => {
  return {
    ...(input.priority != null && { priority: input.priority }),
    ...(input.slotId != null && { slotId: input.slotId }),
  };
};

const serializeAws_restJson1SlotSortBy = (input: SlotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1SlotTypeFilter = (input: SlotTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.operator != null && { operator: input.operator }),
    ...(input.values != null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1SlotTypeFilters = (input: SlotTypeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotTypeFilter(entry, context);
    });
};

const serializeAws_restJson1SlotTypeSortBy = (input: SlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != null && { attribute: input.attribute }),
    ...(input.order != null && { order: input.order }),
  };
};

const serializeAws_restJson1SlotTypeValue = (input: SlotTypeValue, context: __SerdeContext): any => {
  return {
    ...(input.sampleValue != null && { sampleValue: serializeAws_restJson1SampleValue(input.sampleValue, context) }),
    ...(input.synonyms != null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }),
  };
};

const serializeAws_restJson1SlotTypeValues = (input: SlotTypeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotTypeValue(entry, context);
    });
};

const serializeAws_restJson1SlotValue = (input: SlotValue, context: __SerdeContext): any => {
  return {
    ...(input.interpretedValue != null && { interpretedValue: input.interpretedValue }),
  };
};

const serializeAws_restJson1SlotValueElicitationSetting = (
  input: SlotValueElicitationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValueSpecification != null && {
      defaultValueSpecification: serializeAws_restJson1SlotDefaultValueSpecification(
        input.defaultValueSpecification,
        context
      ),
    }),
    ...(input.promptSpecification != null && {
      promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.slotCaptureSetting != null && {
      slotCaptureSetting: serializeAws_restJson1SlotCaptureSetting(input.slotCaptureSetting, context),
    }),
    ...(input.slotConstraint != null && { slotConstraint: input.slotConstraint }),
    ...(input.waitAndContinueSpecification != null && {
      waitAndContinueSpecification: serializeAws_restJson1WaitAndContinueSpecification(
        input.waitAndContinueSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1SlotValueOverride = (input: SlotValueOverride, context: __SerdeContext): any => {
  return {
    ...(input.shape != null && { shape: input.shape }),
    ...(input.value != null && { value: serializeAws_restJson1SlotValue(input.value, context) }),
    ...(input.values != null && { values: serializeAws_restJson1SlotValues(input.values, context) }),
  };
};

const serializeAws_restJson1SlotValueOverrideMap = (
  input: Record<string, SlotValueOverride>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1SlotValueOverride(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SlotValueRegexFilter = (input: SlotValueRegexFilter, context: __SerdeContext): any => {
  return {
    ...(input.pattern != null && { pattern: input.pattern }),
  };
};

const serializeAws_restJson1SlotValues = (input: SlotValueOverride[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SlotValueOverride(entry, context);
    });
};

const serializeAws_restJson1SlotValueSelectionSetting = (
  input: SlotValueSelectionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.advancedRecognitionSetting != null && {
      advancedRecognitionSetting: serializeAws_restJson1AdvancedRecognitionSetting(
        input.advancedRecognitionSetting,
        context
      ),
    }),
    ...(input.regexFilter != null && {
      regexFilter: serializeAws_restJson1SlotValueRegexFilter(input.regexFilter, context),
    }),
    ...(input.resolutionStrategy != null && { resolutionStrategy: input.resolutionStrategy }),
  };
};

const serializeAws_restJson1Specifications = (input: Specifications, context: __SerdeContext): any => {
  return {
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
    ...(input.valueElicitationSetting != null && {
      valueElicitationSetting: serializeAws_restJson1SubSlotValueElicitationSetting(
        input.valueElicitationSetting,
        context
      ),
    }),
  };
};

const serializeAws_restJson1SSMLMessage = (input: SSMLMessage, context: __SerdeContext): any => {
  return {
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1StillWaitingResponseSpecification = (
  input: StillWaitingResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != null && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds != null && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups != null && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1StringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SubSlotSetting = (input: SubSlotSetting, context: __SerdeContext): any => {
  return {
    ...(input.expression != null && { expression: input.expression }),
    ...(input.slotSpecifications != null && {
      slotSpecifications: serializeAws_restJson1SubSlotSpecificationMap(input.slotSpecifications, context),
    }),
  };
};

const serializeAws_restJson1SubSlotSpecificationMap = (
  input: Record<string, Specifications>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1Specifications(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1SubSlotTypeComposition = (input: SubSlotTypeComposition, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.slotTypeId != null && { slotTypeId: input.slotTypeId }),
  };
};

const serializeAws_restJson1SubSlotTypeList = (input: SubSlotTypeComposition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SubSlotTypeComposition(entry, context);
    });
};

const serializeAws_restJson1SubSlotValueElicitationSetting = (
  input: SubSlotValueElicitationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValueSpecification != null && {
      defaultValueSpecification: serializeAws_restJson1SlotDefaultValueSpecification(
        input.defaultValueSpecification,
        context
      ),
    }),
    ...(input.promptSpecification != null && {
      promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    }),
    ...(input.sampleUtterances != null && {
      sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.waitAndContinueSpecification != null && {
      waitAndContinueSpecification: serializeAws_restJson1WaitAndContinueSpecification(
        input.waitAndContinueSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1SynonymList = (input: SampleValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SampleValue(entry, context);
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TextInputSpecification = (input: TextInputSpecification, context: __SerdeContext): any => {
  return {
    ...(input.startTimeoutMs != null && { startTimeoutMs: input.startTimeoutMs }),
  };
};

const serializeAws_restJson1TextLogDestination = (input: TextLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatch != null && {
      cloudWatch: serializeAws_restJson1CloudWatchLogGroupLogDestination(input.cloudWatch, context),
    }),
  };
};

const serializeAws_restJson1TextLogSetting = (input: TextLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination != null && {
      destination: serializeAws_restJson1TextLogDestination(input.destination, context),
    }),
    ...(input.enabled != null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1TextLogSettingsList = (input: TextLogSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1TextLogSetting(entry, context);
    });
};

const serializeAws_restJson1TranscriptFilter = (input: TranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.lexTranscriptFilter != null && {
      lexTranscriptFilter: serializeAws_restJson1LexTranscriptFilter(input.lexTranscriptFilter, context),
    }),
  };
};

const serializeAws_restJson1TranscriptSourceSetting = (
  input: TranscriptSourceSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3BucketTranscriptSource != null && {
      s3BucketTranscriptSource: serializeAws_restJson1S3BucketTranscriptSource(input.s3BucketTranscriptSource, context),
    }),
  };
};

const serializeAws_restJson1UpdateCustomVocabularyItemsList = (
  input: CustomVocabularyItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CustomVocabularyItem(entry, context);
    });
};

const serializeAws_restJson1UtteranceAggregationDuration = (
  input: UtteranceAggregationDuration,
  context: __SerdeContext
): any => {
  return {
    ...(input.relativeAggregationDuration != null && {
      relativeAggregationDuration: serializeAws_restJson1RelativeAggregationDuration(
        input.relativeAggregationDuration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1VoiceSettings = (input: VoiceSettings, context: __SerdeContext): any => {
  return {
    ...(input.engine != null && { engine: input.engine }),
    ...(input.voiceId != null && { voiceId: input.voiceId }),
  };
};

const serializeAws_restJson1WaitAndContinueSpecification = (
  input: WaitAndContinueSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != null && { active: input.active }),
    ...(input.continueResponse != null && {
      continueResponse: serializeAws_restJson1ResponseSpecification(input.continueResponse, context),
    }),
    ...(input.stillWaitingResponse != null && {
      stillWaitingResponse: serializeAws_restJson1StillWaitingResponseSpecification(
        input.stillWaitingResponse,
        context
      ),
    }),
    ...(input.waitingResponse != null && {
      waitingResponse: serializeAws_restJson1ResponseSpecification(input.waitingResponse, context),
    }),
  };
};

const deserializeAws_restJson1AdvancedRecognitionSetting = (
  output: any,
  context: __SerdeContext
): AdvancedRecognitionSetting => {
  return {
    audioRecognitionStrategy: __expectString(output.audioRecognitionStrategy),
  } as any;
};

const deserializeAws_restJson1AggregatedUtterancesSummary = (
  output: any,
  context: __SerdeContext
): AggregatedUtterancesSummary => {
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

const deserializeAws_restJson1AggregatedUtterancesSummaryList = (
  output: any,
  context: __SerdeContext
): AggregatedUtterancesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AggregatedUtterancesSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AllowedInputTypes = (output: any, context: __SerdeContext): AllowedInputTypes => {
  return {
    allowAudioInput: __expectBoolean(output.allowAudioInput),
    allowDTMFInput: __expectBoolean(output.allowDTMFInput),
  } as any;
};

const deserializeAws_restJson1AssociatedTranscript = (output: any, context: __SerdeContext): AssociatedTranscript => {
  return {
    transcript: __expectString(output.transcript),
  } as any;
};

const deserializeAws_restJson1AssociatedTranscriptList = (
  output: any,
  context: __SerdeContext
): AssociatedTranscript[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssociatedTranscript(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AudioAndDTMFInputSpecification = (
  output: any,
  context: __SerdeContext
): AudioAndDTMFInputSpecification => {
  return {
    audioSpecification:
      output.audioSpecification != null
        ? deserializeAws_restJson1AudioSpecification(output.audioSpecification, context)
        : undefined,
    dtmfSpecification:
      output.dtmfSpecification != null
        ? deserializeAws_restJson1DTMFSpecification(output.dtmfSpecification, context)
        : undefined,
    startTimeoutMs: __expectInt32(output.startTimeoutMs),
  } as any;
};

const deserializeAws_restJson1AudioLogDestination = (output: any, context: __SerdeContext): AudioLogDestination => {
  return {
    s3Bucket:
      output.s3Bucket != null ? deserializeAws_restJson1S3BucketLogDestination(output.s3Bucket, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AudioLogSetting = (output: any, context: __SerdeContext): AudioLogSetting => {
  return {
    destination:
      output.destination != null ? deserializeAws_restJson1AudioLogDestination(output.destination, context) : undefined,
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1AudioLogSettingsList = (output: any, context: __SerdeContext): AudioLogSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AudioLogSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AudioSpecification = (output: any, context: __SerdeContext): AudioSpecification => {
  return {
    endTimeoutMs: __expectInt32(output.endTimeoutMs),
    maxLengthMs: __expectInt32(output.maxLengthMs),
  } as any;
};

const deserializeAws_restJson1BotAliasHistoryEvent = (output: any, context: __SerdeContext): BotAliasHistoryEvent => {
  return {
    botVersion: __expectString(output.botVersion),
    endDate:
      output.endDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endDate))) : undefined,
    startDate:
      output.startDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate))) : undefined,
  } as any;
};

const deserializeAws_restJson1BotAliasHistoryEventsList = (
  output: any,
  context: __SerdeContext
): BotAliasHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotAliasHistoryEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotAliasLocaleSettings = (
  output: any,
  context: __SerdeContext
): BotAliasLocaleSettings => {
  return {
    codeHookSpecification:
      output.codeHookSpecification != null
        ? deserializeAws_restJson1CodeHookSpecification(output.codeHookSpecification, context)
        : undefined,
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1BotAliasLocaleSettingsMap = (
  output: any,
  context: __SerdeContext
): Record<string, BotAliasLocaleSettings> => {
  return Object.entries(output).reduce((acc: Record<string, BotAliasLocaleSettings>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1BotAliasLocaleSettings(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1BotAliasSummary = (output: any, context: __SerdeContext): BotAliasSummary => {
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

const deserializeAws_restJson1BotAliasSummaryList = (output: any, context: __SerdeContext): BotAliasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotAliasSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotExportSpecification = (
  output: any,
  context: __SerdeContext
): BotExportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
  } as any;
};

const deserializeAws_restJson1BotImportSpecification = (
  output: any,
  context: __SerdeContext
): BotImportSpecification => {
  return {
    botName: __expectString(output.botName),
    botTags: output.botTags != null ? deserializeAws_restJson1TagMap(output.botTags, context) : undefined,
    dataPrivacy:
      output.dataPrivacy != null ? deserializeAws_restJson1DataPrivacy(output.dataPrivacy, context) : undefined,
    idleSessionTTLInSeconds: __expectInt32(output.idleSessionTTLInSeconds),
    roleArn: __expectString(output.roleArn),
    testBotAliasTags:
      output.testBotAliasTags != null ? deserializeAws_restJson1TagMap(output.testBotAliasTags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BotLocaleExportSpecification = (
  output: any,
  context: __SerdeContext
): BotLocaleExportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
  } as any;
};

const deserializeAws_restJson1BotLocaleHistoryEvent = (output: any, context: __SerdeContext): BotLocaleHistoryEvent => {
  return {
    event: __expectString(output.event),
    eventDate:
      output.eventDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventDate))) : undefined,
  } as any;
};

const deserializeAws_restJson1BotLocaleHistoryEventsList = (
  output: any,
  context: __SerdeContext
): BotLocaleHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotLocaleHistoryEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotLocaleImportSpecification = (
  output: any,
  context: __SerdeContext
): BotLocaleImportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
    nluIntentConfidenceThreshold: __limitedParseDouble(output.nluIntentConfidenceThreshold),
    voiceSettings:
      output.voiceSettings != null ? deserializeAws_restJson1VoiceSettings(output.voiceSettings, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BotLocaleSummary = (output: any, context: __SerdeContext): BotLocaleSummary => {
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

const deserializeAws_restJson1BotLocaleSummaryList = (output: any, context: __SerdeContext): BotLocaleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotLocaleSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotRecommendationResults = (
  output: any,
  context: __SerdeContext
): BotRecommendationResults => {
  return {
    associatedTranscriptsUrl: __expectString(output.associatedTranscriptsUrl),
    botLocaleExportUrl: __expectString(output.botLocaleExportUrl),
    statistics:
      output.statistics != null
        ? deserializeAws_restJson1BotRecommendationResultStatistics(output.statistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BotRecommendationResultStatistics = (
  output: any,
  context: __SerdeContext
): BotRecommendationResultStatistics => {
  return {
    intents: output.intents != null ? deserializeAws_restJson1IntentStatistics(output.intents, context) : undefined,
    slotTypes:
      output.slotTypes != null ? deserializeAws_restJson1SlotTypeStatistics(output.slotTypes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BotRecommendationSummary = (
  output: any,
  context: __SerdeContext
): BotRecommendationSummary => {
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

const deserializeAws_restJson1BotRecommendationSummaryList = (
  output: any,
  context: __SerdeContext
): BotRecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotRecommendationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotSummary = (output: any, context: __SerdeContext): BotSummary => {
  return {
    botId: __expectString(output.botId),
    botName: __expectString(output.botName),
    botStatus: __expectString(output.botStatus),
    description: __expectString(output.description),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    latestBotVersion: __expectString(output.latestBotVersion),
  } as any;
};

const deserializeAws_restJson1BotSummaryList = (output: any, context: __SerdeContext): BotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BotVersionLocaleDetails = (
  output: any,
  context: __SerdeContext
): BotVersionLocaleDetails => {
  return {
    sourceBotVersion: __expectString(output.sourceBotVersion),
  } as any;
};

const deserializeAws_restJson1BotVersionLocaleSpecification = (
  output: any,
  context: __SerdeContext
): Record<string, BotVersionLocaleDetails> => {
  return Object.entries(output).reduce((acc: Record<string, BotVersionLocaleDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1BotVersionLocaleDetails(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1BotVersionSummary = (output: any, context: __SerdeContext): BotVersionSummary => {
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

const deserializeAws_restJson1BotVersionSummaryList = (output: any, context: __SerdeContext): BotVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BuiltInIntentSummary = (output: any, context: __SerdeContext): BuiltInIntentSummary => {
  return {
    description: __expectString(output.description),
    intentSignature: __expectString(output.intentSignature),
  } as any;
};

const deserializeAws_restJson1BuiltInIntentSummaryList = (
  output: any,
  context: __SerdeContext
): BuiltInIntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltInIntentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BuiltInSlotTypeSummary = (
  output: any,
  context: __SerdeContext
): BuiltInSlotTypeSummary => {
  return {
    description: __expectString(output.description),
    slotTypeSignature: __expectString(output.slotTypeSignature),
  } as any;
};

const deserializeAws_restJson1BuiltInSlotTypeSummaryList = (
  output: any,
  context: __SerdeContext
): BuiltInSlotTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltInSlotTypeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Button = (output: any, context: __SerdeContext): Button => {
  return {
    text: __expectString(output.text),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1ButtonsList = (output: any, context: __SerdeContext): Button[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Button(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CloudWatchLogGroupLogDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogGroupLogDestination => {
  return {
    cloudWatchLogGroupArn: __expectString(output.cloudWatchLogGroupArn),
    logPrefix: __expectString(output.logPrefix),
  } as any;
};

const deserializeAws_restJson1CodeHookSpecification = (output: any, context: __SerdeContext): CodeHookSpecification => {
  return {
    lambdaCodeHook:
      output.lambdaCodeHook != null
        ? deserializeAws_restJson1LambdaCodeHook(output.lambdaCodeHook, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CompositeSlotTypeSetting = (
  output: any,
  context: __SerdeContext
): CompositeSlotTypeSetting => {
  return {
    subSlots: output.subSlots != null ? deserializeAws_restJson1SubSlotTypeList(output.subSlots, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    expressionString: __expectString(output.expressionString),
  } as any;
};

const deserializeAws_restJson1ConditionalBranch = (output: any, context: __SerdeContext): ConditionalBranch => {
  return {
    condition: output.condition != null ? deserializeAws_restJson1Condition(output.condition, context) : undefined,
    name: __expectString(output.name),
    nextStep: output.nextStep != null ? deserializeAws_restJson1DialogState(output.nextStep, context) : undefined,
    response:
      output.response != null ? deserializeAws_restJson1ResponseSpecification(output.response, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ConditionalBranches = (output: any, context: __SerdeContext): ConditionalBranch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConditionalBranch(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ConditionalSpecification = (
  output: any,
  context: __SerdeContext
): ConditionalSpecification => {
  return {
    active: __expectBoolean(output.active),
    conditionalBranches:
      output.conditionalBranches != null
        ? deserializeAws_restJson1ConditionalBranches(output.conditionalBranches, context)
        : undefined,
    defaultBranch:
      output.defaultBranch != null
        ? deserializeAws_restJson1DefaultConditionalBranch(output.defaultBranch, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConversationLogSettings = (
  output: any,
  context: __SerdeContext
): ConversationLogSettings => {
  return {
    audioLogSettings:
      output.audioLogSettings != null
        ? deserializeAws_restJson1AudioLogSettingsList(output.audioLogSettings, context)
        : undefined,
    textLogSettings:
      output.textLogSettings != null
        ? deserializeAws_restJson1TextLogSettingsList(output.textLogSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomPayload = (output: any, context: __SerdeContext): CustomPayload => {
  return {
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1CustomVocabularyExportSpecification = (
  output: any,
  context: __SerdeContext
): CustomVocabularyExportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
  } as any;
};

const deserializeAws_restJson1CustomVocabularyImportSpecification = (
  output: any,
  context: __SerdeContext
): CustomVocabularyImportSpecification => {
  return {
    botId: __expectString(output.botId),
    botVersion: __expectString(output.botVersion),
    localeId: __expectString(output.localeId),
  } as any;
};

const deserializeAws_restJson1CustomVocabularyItem = (output: any, context: __SerdeContext): CustomVocabularyItem => {
  return {
    displayAs: __expectString(output.displayAs),
    itemId: __expectString(output.itemId),
    phrase: __expectString(output.phrase),
    weight: __expectInt32(output.weight),
  } as any;
};

const deserializeAws_restJson1CustomVocabularyItems = (
  output: any,
  context: __SerdeContext
): CustomVocabularyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomVocabularyItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataPrivacy = (output: any, context: __SerdeContext): DataPrivacy => {
  return {
    childDirected: __expectBoolean(output.childDirected),
  } as any;
};

const deserializeAws_restJson1DateRangeFilter = (output: any, context: __SerdeContext): DateRangeFilter => {
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

const deserializeAws_restJson1DefaultConditionalBranch = (
  output: any,
  context: __SerdeContext
): DefaultConditionalBranch => {
  return {
    nextStep: output.nextStep != null ? deserializeAws_restJson1DialogState(output.nextStep, context) : undefined,
    response:
      output.response != null ? deserializeAws_restJson1ResponseSpecification(output.response, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DialogAction = (output: any, context: __SerdeContext): DialogAction => {
  return {
    slotToElicit: __expectString(output.slotToElicit),
    suppressNextMessage: __expectBoolean(output.suppressNextMessage),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1DialogCodeHookInvocationSetting = (
  output: any,
  context: __SerdeContext
): DialogCodeHookInvocationSetting => {
  return {
    active: __expectBoolean(output.active),
    enableCodeHookInvocation: __expectBoolean(output.enableCodeHookInvocation),
    invocationLabel: __expectString(output.invocationLabel),
    postCodeHookSpecification:
      output.postCodeHookSpecification != null
        ? deserializeAws_restJson1PostDialogCodeHookInvocationSpecification(output.postCodeHookSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DialogCodeHookSettings = (
  output: any,
  context: __SerdeContext
): DialogCodeHookSettings => {
  return {
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1DialogState = (output: any, context: __SerdeContext): DialogState => {
  return {
    dialogAction:
      output.dialogAction != null ? deserializeAws_restJson1DialogAction(output.dialogAction, context) : undefined,
    intent: output.intent != null ? deserializeAws_restJson1IntentOverride(output.intent, context) : undefined,
    sessionAttributes:
      output.sessionAttributes != null
        ? deserializeAws_restJson1StringMap(output.sessionAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DTMFSpecification = (output: any, context: __SerdeContext): DTMFSpecification => {
  return {
    deletionCharacter: __expectString(output.deletionCharacter),
    endCharacter: __expectString(output.endCharacter),
    endTimeoutMs: __expectInt32(output.endTimeoutMs),
    maxLength: __expectInt32(output.maxLength),
  } as any;
};

const deserializeAws_restJson1ElicitationCodeHookInvocationSetting = (
  output: any,
  context: __SerdeContext
): ElicitationCodeHookInvocationSetting => {
  return {
    enableCodeHookInvocation: __expectBoolean(output.enableCodeHookInvocation),
    invocationLabel: __expectString(output.invocationLabel),
  } as any;
};

const deserializeAws_restJson1EncryptionSetting = (output: any, context: __SerdeContext): EncryptionSetting => {
  return {
    associatedTranscriptsPassword: __expectString(output.associatedTranscriptsPassword),
    botLocaleExportPassword: __expectString(output.botLocaleExportPassword),
    kmsKeyArn: __expectString(output.kmsKeyArn),
  } as any;
};

const deserializeAws_restJson1ExportResourceSpecification = (
  output: any,
  context: __SerdeContext
): ExportResourceSpecification => {
  return {
    botExportSpecification:
      output.botExportSpecification != null
        ? deserializeAws_restJson1BotExportSpecification(output.botExportSpecification, context)
        : undefined,
    botLocaleExportSpecification:
      output.botLocaleExportSpecification != null
        ? deserializeAws_restJson1BotLocaleExportSpecification(output.botLocaleExportSpecification, context)
        : undefined,
    customVocabularyExportSpecification:
      output.customVocabularyExportSpecification != null
        ? deserializeAws_restJson1CustomVocabularyExportSpecification(
            output.customVocabularyExportSpecification,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportSummary = (output: any, context: __SerdeContext): ExportSummary => {
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
        ? deserializeAws_restJson1ExportResourceSpecification(output.resourceSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ExportSummaryList = (output: any, context: __SerdeContext): ExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExportSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExternalSourceSetting = (output: any, context: __SerdeContext): ExternalSourceSetting => {
  return {
    grammarSlotTypeSetting:
      output.grammarSlotTypeSetting != null
        ? deserializeAws_restJson1GrammarSlotTypeSetting(output.grammarSlotTypeSetting, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FailedCustomVocabularyItem = (
  output: any,
  context: __SerdeContext
): FailedCustomVocabularyItem => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    itemId: __expectString(output.itemId),
  } as any;
};

const deserializeAws_restJson1FailedCustomVocabularyItems = (
  output: any,
  context: __SerdeContext
): FailedCustomVocabularyItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FailedCustomVocabularyItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FailureReasons = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1FulfillmentCodeHookSettings = (
  output: any,
  context: __SerdeContext
): FulfillmentCodeHookSettings => {
  return {
    active: __expectBoolean(output.active),
    enabled: __expectBoolean(output.enabled),
    fulfillmentUpdatesSpecification:
      output.fulfillmentUpdatesSpecification != null
        ? deserializeAws_restJson1FulfillmentUpdatesSpecification(output.fulfillmentUpdatesSpecification, context)
        : undefined,
    postFulfillmentStatusSpecification:
      output.postFulfillmentStatusSpecification != null
        ? deserializeAws_restJson1PostFulfillmentStatusSpecification(output.postFulfillmentStatusSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FulfillmentStartResponseSpecification = (
  output: any,
  context: __SerdeContext
): FulfillmentStartResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    delayInSeconds: __expectInt32(output.delayInSeconds),
    messageGroups:
      output.messageGroups != null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FulfillmentUpdateResponseSpecification = (
  output: any,
  context: __SerdeContext
): FulfillmentUpdateResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    frequencyInSeconds: __expectInt32(output.frequencyInSeconds),
    messageGroups:
      output.messageGroups != null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FulfillmentUpdatesSpecification = (
  output: any,
  context: __SerdeContext
): FulfillmentUpdatesSpecification => {
  return {
    active: __expectBoolean(output.active),
    startResponse:
      output.startResponse != null
        ? deserializeAws_restJson1FulfillmentStartResponseSpecification(output.startResponse, context)
        : undefined,
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
    updateResponse:
      output.updateResponse != null
        ? deserializeAws_restJson1FulfillmentUpdateResponseSpecification(output.updateResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrammarSlotTypeSetting = (
  output: any,
  context: __SerdeContext
): GrammarSlotTypeSetting => {
  return {
    source: output.source != null ? deserializeAws_restJson1GrammarSlotTypeSource(output.source, context) : undefined,
  } as any;
};

const deserializeAws_restJson1GrammarSlotTypeSource = (output: any, context: __SerdeContext): GrammarSlotTypeSource => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    s3BucketName: __expectString(output.s3BucketName),
    s3ObjectKey: __expectString(output.s3ObjectKey),
  } as any;
};

const deserializeAws_restJson1ImageResponseCard = (output: any, context: __SerdeContext): ImageResponseCard => {
  return {
    buttons: output.buttons != null ? deserializeAws_restJson1ButtonsList(output.buttons, context) : undefined,
    imageUrl: __expectString(output.imageUrl),
    subtitle: __expectString(output.subtitle),
    title: __expectString(output.title),
  } as any;
};

const deserializeAws_restJson1ImportResourceSpecification = (
  output: any,
  context: __SerdeContext
): ImportResourceSpecification => {
  return {
    botImportSpecification:
      output.botImportSpecification != null
        ? deserializeAws_restJson1BotImportSpecification(output.botImportSpecification, context)
        : undefined,
    botLocaleImportSpecification:
      output.botLocaleImportSpecification != null
        ? deserializeAws_restJson1BotLocaleImportSpecification(output.botLocaleImportSpecification, context)
        : undefined,
    customVocabularyImportSpecification:
      output.customVocabularyImportSpecification != null
        ? deserializeAws_restJson1CustomVocabularyImportSpecification(
            output.customVocabularyImportSpecification,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
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

const deserializeAws_restJson1ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InitialResponseSetting = (
  output: any,
  context: __SerdeContext
): InitialResponseSetting => {
  return {
    codeHook:
      output.codeHook != null
        ? deserializeAws_restJson1DialogCodeHookInvocationSetting(output.codeHook, context)
        : undefined,
    conditional:
      output.conditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.conditional, context)
        : undefined,
    initialResponse:
      output.initialResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.initialResponse, context)
        : undefined,
    nextStep: output.nextStep != null ? deserializeAws_restJson1DialogState(output.nextStep, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InputContext = (output: any, context: __SerdeContext): InputContext => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1InputContextsList = (output: any, context: __SerdeContext): InputContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputContext(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IntentClosingSetting = (output: any, context: __SerdeContext): IntentClosingSetting => {
  return {
    active: __expectBoolean(output.active),
    closingResponse:
      output.closingResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.closingResponse, context)
        : undefined,
    conditional:
      output.conditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.conditional, context)
        : undefined,
    nextStep: output.nextStep != null ? deserializeAws_restJson1DialogState(output.nextStep, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IntentConfirmationSetting = (
  output: any,
  context: __SerdeContext
): IntentConfirmationSetting => {
  return {
    active: __expectBoolean(output.active),
    codeHook:
      output.codeHook != null
        ? deserializeAws_restJson1DialogCodeHookInvocationSetting(output.codeHook, context)
        : undefined,
    confirmationConditional:
      output.confirmationConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.confirmationConditional, context)
        : undefined,
    confirmationNextStep:
      output.confirmationNextStep != null
        ? deserializeAws_restJson1DialogState(output.confirmationNextStep, context)
        : undefined,
    confirmationResponse:
      output.confirmationResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.confirmationResponse, context)
        : undefined,
    declinationConditional:
      output.declinationConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.declinationConditional, context)
        : undefined,
    declinationNextStep:
      output.declinationNextStep != null
        ? deserializeAws_restJson1DialogState(output.declinationNextStep, context)
        : undefined,
    declinationResponse:
      output.declinationResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.declinationResponse, context)
        : undefined,
    elicitationCodeHook:
      output.elicitationCodeHook != null
        ? deserializeAws_restJson1ElicitationCodeHookInvocationSetting(output.elicitationCodeHook, context)
        : undefined,
    failureConditional:
      output.failureConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.failureConditional, context)
        : undefined,
    failureNextStep:
      output.failureNextStep != null ? deserializeAws_restJson1DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.failureResponse, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != null
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IntentOverride = (output: any, context: __SerdeContext): IntentOverride => {
  return {
    name: __expectString(output.name),
    slots: output.slots != null ? deserializeAws_restJson1SlotValueOverrideMap(output.slots, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IntentStatistics = (output: any, context: __SerdeContext): IntentStatistics => {
  return {
    discoveredIntentCount: __expectInt32(output.discoveredIntentCount),
  } as any;
};

const deserializeAws_restJson1IntentSummary = (output: any, context: __SerdeContext): IntentSummary => {
  return {
    description: __expectString(output.description),
    inputContexts:
      output.inputContexts != null
        ? deserializeAws_restJson1InputContextsList(output.inputContexts, context)
        : undefined,
    intentId: __expectString(output.intentId),
    intentName: __expectString(output.intentName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    outputContexts:
      output.outputContexts != null
        ? deserializeAws_restJson1OutputContextsList(output.outputContexts, context)
        : undefined,
    parentIntentSignature: __expectString(output.parentIntentSignature),
  } as any;
};

const deserializeAws_restJson1IntentSummaryList = (output: any, context: __SerdeContext): IntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KendraConfiguration = (output: any, context: __SerdeContext): KendraConfiguration => {
  return {
    kendraIndex: __expectString(output.kendraIndex),
    queryFilterString: __expectString(output.queryFilterString),
    queryFilterStringEnabled: __expectBoolean(output.queryFilterStringEnabled),
  } as any;
};

const deserializeAws_restJson1LambdaCodeHook = (output: any, context: __SerdeContext): LambdaCodeHook => {
  return {
    codeHookInterfaceVersion: __expectString(output.codeHookInterfaceVersion),
    lambdaARN: __expectString(output.lambdaARN),
  } as any;
};

const deserializeAws_restJson1LexTranscriptFilter = (output: any, context: __SerdeContext): LexTranscriptFilter => {
  return {
    dateRangeFilter:
      output.dateRangeFilter != null
        ? deserializeAws_restJson1DateRangeFilter(output.dateRangeFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    customPayload:
      output.customPayload != null ? deserializeAws_restJson1CustomPayload(output.customPayload, context) : undefined,
    imageResponseCard:
      output.imageResponseCard != null
        ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
        : undefined,
    plainTextMessage:
      output.plainTextMessage != null
        ? deserializeAws_restJson1PlainTextMessage(output.plainTextMessage, context)
        : undefined,
    ssmlMessage:
      output.ssmlMessage != null ? deserializeAws_restJson1SSMLMessage(output.ssmlMessage, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MessageGroup = (output: any, context: __SerdeContext): MessageGroup => {
  return {
    message: output.message != null ? deserializeAws_restJson1Message(output.message, context) : undefined,
    variations:
      output.variations != null ? deserializeAws_restJson1MessageVariationsList(output.variations, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MessageGroupsList = (output: any, context: __SerdeContext): MessageGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MessageGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MessageVariationsList = (output: any, context: __SerdeContext): Message[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Message(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MultipleValuesSetting = (output: any, context: __SerdeContext): MultipleValuesSetting => {
  return {
    allowMultipleValues: __expectBoolean(output.allowMultipleValues),
  } as any;
};

const deserializeAws_restJson1ObfuscationSetting = (output: any, context: __SerdeContext): ObfuscationSetting => {
  return {
    obfuscationSettingType: __expectString(output.obfuscationSettingType),
  } as any;
};

const deserializeAws_restJson1ObjectPrefixes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1OutputContext = (output: any, context: __SerdeContext): OutputContext => {
  return {
    name: __expectString(output.name),
    timeToLiveInSeconds: __expectInt32(output.timeToLiveInSeconds),
    turnsToLive: __expectInt32(output.turnsToLive),
  } as any;
};

const deserializeAws_restJson1OutputContextsList = (output: any, context: __SerdeContext): OutputContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputContext(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PathFormat = (output: any, context: __SerdeContext): PathFormat => {
  return {
    objectPrefixes:
      output.objectPrefixes != null
        ? deserializeAws_restJson1ObjectPrefixes(output.objectPrefixes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PlainTextMessage = (output: any, context: __SerdeContext): PlainTextMessage => {
  return {
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1PostDialogCodeHookInvocationSpecification = (
  output: any,
  context: __SerdeContext
): PostDialogCodeHookInvocationSpecification => {
  return {
    failureConditional:
      output.failureConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.failureConditional, context)
        : undefined,
    failureNextStep:
      output.failureNextStep != null ? deserializeAws_restJson1DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.failureResponse, context)
        : undefined,
    successConditional:
      output.successConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.successConditional, context)
        : undefined,
    successNextStep:
      output.successNextStep != null ? deserializeAws_restJson1DialogState(output.successNextStep, context) : undefined,
    successResponse:
      output.successResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.successResponse, context)
        : undefined,
    timeoutConditional:
      output.timeoutConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.timeoutConditional, context)
        : undefined,
    timeoutNextStep:
      output.timeoutNextStep != null ? deserializeAws_restJson1DialogState(output.timeoutNextStep, context) : undefined,
    timeoutResponse:
      output.timeoutResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.timeoutResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PostFulfillmentStatusSpecification = (
  output: any,
  context: __SerdeContext
): PostFulfillmentStatusSpecification => {
  return {
    failureConditional:
      output.failureConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.failureConditional, context)
        : undefined,
    failureNextStep:
      output.failureNextStep != null ? deserializeAws_restJson1DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.failureResponse, context)
        : undefined,
    successConditional:
      output.successConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.successConditional, context)
        : undefined,
    successNextStep:
      output.successNextStep != null ? deserializeAws_restJson1DialogState(output.successNextStep, context) : undefined,
    successResponse:
      output.successResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.successResponse, context)
        : undefined,
    timeoutConditional:
      output.timeoutConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.timeoutConditional, context)
        : undefined,
    timeoutNextStep:
      output.timeoutNextStep != null ? deserializeAws_restJson1DialogState(output.timeoutNextStep, context) : undefined,
    timeoutResponse:
      output.timeoutResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.timeoutResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PromptAttemptSpecification = (
  output: any,
  context: __SerdeContext
): PromptAttemptSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    allowedInputTypes:
      output.allowedInputTypes != null
        ? deserializeAws_restJson1AllowedInputTypes(output.allowedInputTypes, context)
        : undefined,
    audioAndDTMFInputSpecification:
      output.audioAndDTMFInputSpecification != null
        ? deserializeAws_restJson1AudioAndDTMFInputSpecification(output.audioAndDTMFInputSpecification, context)
        : undefined,
    textInputSpecification:
      output.textInputSpecification != null
        ? deserializeAws_restJson1TextInputSpecification(output.textInputSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PromptAttemptsSpecificationMap = (
  output: any,
  context: __SerdeContext
): Record<string, PromptAttemptSpecification> => {
  return Object.entries(output).reduce(
    (acc: Record<string, PromptAttemptSpecification>, [key, value]: [PromptAttempt | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1PromptAttemptSpecification(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1PromptSpecification = (output: any, context: __SerdeContext): PromptSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    maxRetries: __expectInt32(output.maxRetries),
    messageGroups:
      output.messageGroups != null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
    messageSelectionStrategy: __expectString(output.messageSelectionStrategy),
    promptAttemptsSpecification:
      output.promptAttemptsSpecification != null
        ? deserializeAws_restJson1PromptAttemptsSpecificationMap(output.promptAttemptsSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RecommendedActions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RecommendedIntentSummary = (
  output: any,
  context: __SerdeContext
): RecommendedIntentSummary => {
  return {
    intentId: __expectString(output.intentId),
    intentName: __expectString(output.intentName),
    sampleUtterancesCount: __expectInt32(output.sampleUtterancesCount),
  } as any;
};

const deserializeAws_restJson1RecommendedIntentSummaryList = (
  output: any,
  context: __SerdeContext
): RecommendedIntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecommendedIntentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RelativeAggregationDuration = (
  output: any,
  context: __SerdeContext
): RelativeAggregationDuration => {
  return {
    timeDimension: __expectString(output.timeDimension),
    timeValue: __expectInt32(output.timeValue),
  } as any;
};

const deserializeAws_restJson1ResponseSpecification = (output: any, context: __SerdeContext): ResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    messageGroups:
      output.messageGroups != null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketLogDestination = (
  output: any,
  context: __SerdeContext
): S3BucketLogDestination => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    logPrefix: __expectString(output.logPrefix),
    s3BucketArn: __expectString(output.s3BucketArn),
  } as any;
};

const deserializeAws_restJson1S3BucketTranscriptSource = (
  output: any,
  context: __SerdeContext
): S3BucketTranscriptSource => {
  return {
    kmsKeyArn: __expectString(output.kmsKeyArn),
    pathFormat: output.pathFormat != null ? deserializeAws_restJson1PathFormat(output.pathFormat, context) : undefined,
    s3BucketName: __expectString(output.s3BucketName),
    transcriptFilter:
      output.transcriptFilter != null
        ? deserializeAws_restJson1TranscriptFilter(output.transcriptFilter, context)
        : undefined,
    transcriptFormat: __expectString(output.transcriptFormat),
  } as any;
};

const deserializeAws_restJson1SampleUtterance = (output: any, context: __SerdeContext): SampleUtterance => {
  return {
    utterance: __expectString(output.utterance),
  } as any;
};

const deserializeAws_restJson1SampleUtterancesList = (output: any, context: __SerdeContext): SampleUtterance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SampleUtterance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SampleValue = (output: any, context: __SerdeContext): SampleValue => {
  return {
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1SentimentAnalysisSettings = (
  output: any,
  context: __SerdeContext
): SentimentAnalysisSettings => {
  return {
    detectSentiment: __expectBoolean(output.detectSentiment),
  } as any;
};

const deserializeAws_restJson1SlotCaptureSetting = (output: any, context: __SerdeContext): SlotCaptureSetting => {
  return {
    captureConditional:
      output.captureConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.captureConditional, context)
        : undefined,
    captureNextStep:
      output.captureNextStep != null ? deserializeAws_restJson1DialogState(output.captureNextStep, context) : undefined,
    captureResponse:
      output.captureResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.captureResponse, context)
        : undefined,
    codeHook:
      output.codeHook != null
        ? deserializeAws_restJson1DialogCodeHookInvocationSetting(output.codeHook, context)
        : undefined,
    elicitationCodeHook:
      output.elicitationCodeHook != null
        ? deserializeAws_restJson1ElicitationCodeHookInvocationSetting(output.elicitationCodeHook, context)
        : undefined,
    failureConditional:
      output.failureConditional != null
        ? deserializeAws_restJson1ConditionalSpecification(output.failureConditional, context)
        : undefined,
    failureNextStep:
      output.failureNextStep != null ? deserializeAws_restJson1DialogState(output.failureNextStep, context) : undefined,
    failureResponse:
      output.failureResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.failureResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotDefaultValue = (output: any, context: __SerdeContext): SlotDefaultValue => {
  return {
    defaultValue: __expectString(output.defaultValue),
  } as any;
};

const deserializeAws_restJson1SlotDefaultValueList = (output: any, context: __SerdeContext): SlotDefaultValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotDefaultValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotDefaultValueSpecification = (
  output: any,
  context: __SerdeContext
): SlotDefaultValueSpecification => {
  return {
    defaultValueList:
      output.defaultValueList != null
        ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotPrioritiesList = (output: any, context: __SerdeContext): SlotPriority[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotPriority(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotPriority = (output: any, context: __SerdeContext): SlotPriority => {
  return {
    priority: __expectInt32(output.priority),
    slotId: __expectString(output.slotId),
  } as any;
};

const deserializeAws_restJson1SlotSummary = (output: any, context: __SerdeContext): SlotSummary => {
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
        ? deserializeAws_restJson1PromptSpecification(output.valueElicitationPromptSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotSummaryList = (output: any, context: __SerdeContext): SlotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotTypeStatistics = (output: any, context: __SerdeContext): SlotTypeStatistics => {
  return {
    discoveredSlotTypeCount: __expectInt32(output.discoveredSlotTypeCount),
  } as any;
};

const deserializeAws_restJson1SlotTypeSummary = (output: any, context: __SerdeContext): SlotTypeSummary => {
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

const deserializeAws_restJson1SlotTypeSummaryList = (output: any, context: __SerdeContext): SlotTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotTypeValue = (output: any, context: __SerdeContext): SlotTypeValue => {
  return {
    sampleValue:
      output.sampleValue != null ? deserializeAws_restJson1SampleValue(output.sampleValue, context) : undefined,
    synonyms: output.synonyms != null ? deserializeAws_restJson1SynonymList(output.synonyms, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SlotTypeValues = (output: any, context: __SerdeContext): SlotTypeValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotValue = (output: any, context: __SerdeContext): SlotValue => {
  return {
    interpretedValue: __expectString(output.interpretedValue),
  } as any;
};

const deserializeAws_restJson1SlotValueElicitationSetting = (
  output: any,
  context: __SerdeContext
): SlotValueElicitationSetting => {
  return {
    defaultValueSpecification:
      output.defaultValueSpecification != null
        ? deserializeAws_restJson1SlotDefaultValueSpecification(output.defaultValueSpecification, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != null
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
    sampleUtterances:
      output.sampleUtterances != null
        ? deserializeAws_restJson1SampleUtterancesList(output.sampleUtterances, context)
        : undefined,
    slotCaptureSetting:
      output.slotCaptureSetting != null
        ? deserializeAws_restJson1SlotCaptureSetting(output.slotCaptureSetting, context)
        : undefined,
    slotConstraint: __expectString(output.slotConstraint),
    waitAndContinueSpecification:
      output.waitAndContinueSpecification != null
        ? deserializeAws_restJson1WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotValueOverride = (output: any, context: __SerdeContext): SlotValueOverride => {
  return {
    shape: __expectString(output.shape),
    value: output.value != null ? deserializeAws_restJson1SlotValue(output.value, context) : undefined,
    values: output.values != null ? deserializeAws_restJson1SlotValues(output.values, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SlotValueOverrideMap = (
  output: any,
  context: __SerdeContext
): Record<string, SlotValueOverride> => {
  return Object.entries(output).reduce((acc: Record<string, SlotValueOverride>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1SlotValueOverride(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1SlotValueRegexFilter = (output: any, context: __SerdeContext): SlotValueRegexFilter => {
  return {
    pattern: __expectString(output.pattern),
  } as any;
};

const deserializeAws_restJson1SlotValues = (output: any, context: __SerdeContext): SlotValueOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotValueOverride(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SlotValueSelectionSetting = (
  output: any,
  context: __SerdeContext
): SlotValueSelectionSetting => {
  return {
    advancedRecognitionSetting:
      output.advancedRecognitionSetting != null
        ? deserializeAws_restJson1AdvancedRecognitionSetting(output.advancedRecognitionSetting, context)
        : undefined,
    regexFilter:
      output.regexFilter != null
        ? deserializeAws_restJson1SlotValueRegexFilter(output.regexFilter, context)
        : undefined,
    resolutionStrategy: __expectString(output.resolutionStrategy),
  } as any;
};

const deserializeAws_restJson1Specifications = (output: any, context: __SerdeContext): Specifications => {
  return {
    slotTypeId: __expectString(output.slotTypeId),
    valueElicitationSetting:
      output.valueElicitationSetting != null
        ? deserializeAws_restJson1SubSlotValueElicitationSetting(output.valueElicitationSetting, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SSMLMessage = (output: any, context: __SerdeContext): SSMLMessage => {
  return {
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1StillWaitingResponseSpecification = (
  output: any,
  context: __SerdeContext
): StillWaitingResponseSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    frequencyInSeconds: __expectInt32(output.frequencyInSeconds),
    messageGroups:
      output.messageGroups != null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
  } as any;
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SubSlotSetting = (output: any, context: __SerdeContext): SubSlotSetting => {
  return {
    expression: __expectString(output.expression),
    slotSpecifications:
      output.slotSpecifications != null
        ? deserializeAws_restJson1SubSlotSpecificationMap(output.slotSpecifications, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SubSlotSpecificationMap = (
  output: any,
  context: __SerdeContext
): Record<string, Specifications> => {
  return Object.entries(output).reduce((acc: Record<string, Specifications>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = deserializeAws_restJson1Specifications(value, context);
    return acc;
  }, {});
};

const deserializeAws_restJson1SubSlotTypeComposition = (
  output: any,
  context: __SerdeContext
): SubSlotTypeComposition => {
  return {
    name: __expectString(output.name),
    slotTypeId: __expectString(output.slotTypeId),
  } as any;
};

const deserializeAws_restJson1SubSlotTypeList = (output: any, context: __SerdeContext): SubSlotTypeComposition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SubSlotTypeComposition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SubSlotValueElicitationSetting = (
  output: any,
  context: __SerdeContext
): SubSlotValueElicitationSetting => {
  return {
    defaultValueSpecification:
      output.defaultValueSpecification != null
        ? deserializeAws_restJson1SlotDefaultValueSpecification(output.defaultValueSpecification, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != null
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
    sampleUtterances:
      output.sampleUtterances != null
        ? deserializeAws_restJson1SampleUtterancesList(output.sampleUtterances, context)
        : undefined,
    waitAndContinueSpecification:
      output.waitAndContinueSpecification != null
        ? deserializeAws_restJson1WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SynonymList = (output: any, context: __SerdeContext): SampleValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SampleValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1TextInputSpecification = (
  output: any,
  context: __SerdeContext
): TextInputSpecification => {
  return {
    startTimeoutMs: __expectInt32(output.startTimeoutMs),
  } as any;
};

const deserializeAws_restJson1TextLogDestination = (output: any, context: __SerdeContext): TextLogDestination => {
  return {
    cloudWatch:
      output.cloudWatch != null
        ? deserializeAws_restJson1CloudWatchLogGroupLogDestination(output.cloudWatch, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TextLogSetting = (output: any, context: __SerdeContext): TextLogSetting => {
  return {
    destination:
      output.destination != null ? deserializeAws_restJson1TextLogDestination(output.destination, context) : undefined,
    enabled: __expectBoolean(output.enabled),
  } as any;
};

const deserializeAws_restJson1TextLogSettingsList = (output: any, context: __SerdeContext): TextLogSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TextLogSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TranscriptFilter = (output: any, context: __SerdeContext): TranscriptFilter => {
  return {
    lexTranscriptFilter:
      output.lexTranscriptFilter != null
        ? deserializeAws_restJson1LexTranscriptFilter(output.lexTranscriptFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TranscriptSourceSetting = (
  output: any,
  context: __SerdeContext
): TranscriptSourceSetting => {
  return {
    s3BucketTranscriptSource:
      output.s3BucketTranscriptSource != null
        ? deserializeAws_restJson1S3BucketTranscriptSource(output.s3BucketTranscriptSource, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1UtteranceAggregationDuration = (
  output: any,
  context: __SerdeContext
): UtteranceAggregationDuration => {
  return {
    relativeAggregationDuration:
      output.relativeAggregationDuration != null
        ? deserializeAws_restJson1RelativeAggregationDuration(output.relativeAggregationDuration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VoiceSettings = (output: any, context: __SerdeContext): VoiceSettings => {
  return {
    engine: __expectString(output.engine),
    voiceId: __expectString(output.voiceId),
  } as any;
};

const deserializeAws_restJson1WaitAndContinueSpecification = (
  output: any,
  context: __SerdeContext
): WaitAndContinueSpecification => {
  return {
    active: __expectBoolean(output.active),
    continueResponse:
      output.continueResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.continueResponse, context)
        : undefined,
    stillWaitingResponse:
      output.stillWaitingResponse != null
        ? deserializeAws_restJson1StillWaitingResponseSpecification(output.stillWaitingResponse, context)
        : undefined,
    waitingResponse:
      output.waitingResponse != null
        ? deserializeAws_restJson1ResponseSpecification(output.waitingResponse, context)
        : undefined,
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
