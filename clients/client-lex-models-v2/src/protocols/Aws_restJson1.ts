// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  CreateTestSetDiscrepancyReportCommandInput,
  CreateTestSetDiscrepancyReportCommandOutput,
} from "../commands/CreateTestSetDiscrepancyReportCommand";
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
import { DeleteTestSetCommandInput, DeleteTestSetCommandOutput } from "../commands/DeleteTestSetCommand";
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
  DescribeTestExecutionCommandInput,
  DescribeTestExecutionCommandOutput,
} from "../commands/DescribeTestExecutionCommand";
import { DescribeTestSetCommandInput, DescribeTestSetCommandOutput } from "../commands/DescribeTestSetCommand";
import {
  DescribeTestSetDiscrepancyReportCommandInput,
  DescribeTestSetDiscrepancyReportCommandOutput,
} from "../commands/DescribeTestSetDiscrepancyReportCommand";
import {
  DescribeTestSetGenerationCommandInput,
  DescribeTestSetGenerationCommandOutput,
} from "../commands/DescribeTestSetGenerationCommand";
import {
  GetTestExecutionArtifactsUrlCommandInput,
  GetTestExecutionArtifactsUrlCommandOutput,
} from "../commands/GetTestExecutionArtifactsUrlCommand";
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
import { ListIntentMetricsCommandInput, ListIntentMetricsCommandOutput } from "../commands/ListIntentMetricsCommand";
import { ListIntentPathsCommandInput, ListIntentPathsCommandOutput } from "../commands/ListIntentPathsCommand";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "../commands/ListIntentsCommand";
import {
  ListIntentStageMetricsCommandInput,
  ListIntentStageMetricsCommandOutput,
} from "../commands/ListIntentStageMetricsCommand";
import {
  ListRecommendedIntentsCommandInput,
  ListRecommendedIntentsCommandOutput,
} from "../commands/ListRecommendedIntentsCommand";
import {
  ListSessionAnalyticsDataCommandInput,
  ListSessionAnalyticsDataCommandOutput,
} from "../commands/ListSessionAnalyticsDataCommand";
import { ListSessionMetricsCommandInput, ListSessionMetricsCommandOutput } from "../commands/ListSessionMetricsCommand";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "../commands/ListSlotsCommand";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "../commands/ListSlotTypesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ListTestExecutionResultItemsCommandInput,
  ListTestExecutionResultItemsCommandOutput,
} from "../commands/ListTestExecutionResultItemsCommand";
import { ListTestExecutionsCommandInput, ListTestExecutionsCommandOutput } from "../commands/ListTestExecutionsCommand";
import { ListTestSetRecordsCommandInput, ListTestSetRecordsCommandOutput } from "../commands/ListTestSetRecordsCommand";
import { ListTestSetsCommandInput, ListTestSetsCommandOutput } from "../commands/ListTestSetsCommand";
import {
  ListUtteranceAnalyticsDataCommandInput,
  ListUtteranceAnalyticsDataCommandOutput,
} from "../commands/ListUtteranceAnalyticsDataCommand";
import {
  ListUtteranceMetricsCommandInput,
  ListUtteranceMetricsCommandOutput,
} from "../commands/ListUtteranceMetricsCommand";
import {
  SearchAssociatedTranscriptsCommandInput,
  SearchAssociatedTranscriptsCommandOutput,
} from "../commands/SearchAssociatedTranscriptsCommand";
import {
  StartBotRecommendationCommandInput,
  StartBotRecommendationCommandOutput,
} from "../commands/StartBotRecommendationCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { StartTestExecutionCommandInput, StartTestExecutionCommandOutput } from "../commands/StartTestExecutionCommand";
import {
  StartTestSetGenerationCommandInput,
  StartTestSetGenerationCommandOutput,
} from "../commands/StartTestSetGenerationCommand";
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
import { UpdateTestSetCommandInput, UpdateTestSetCommandOutput } from "../commands/UpdateTestSetCommand";
import { LexModelsV2ServiceException as __BaseException } from "../models/LexModelsV2ServiceException";
import {
  AdvancedRecognitionSetting,
  AggregatedUtterancesFilter,
  AggregatedUtterancesSortBy,
  AggregatedUtterancesSummary,
  AllowedInputTypes,
  AnalyticsBinBySpecification,
  AnalyticsIntentFilter,
  AnalyticsIntentGroupBySpecification,
  AnalyticsIntentMetric,
  AnalyticsIntentMetricResult,
  AnalyticsIntentResult,
  AnalyticsIntentStageFilter,
  AnalyticsIntentStageGroupBySpecification,
  AnalyticsIntentStageMetric,
  AnalyticsIntentStageMetricResult,
  AnalyticsIntentStageResult,
  AnalyticsPathFilter,
  AnalyticsSessionFilter,
  AnalyticsSessionGroupBySpecification,
  AnalyticsSessionMetric,
  AnalyticsSessionMetricResult,
  AnalyticsSessionResult,
  AnalyticsUtteranceAttribute,
  AnalyticsUtteranceFilter,
  AnalyticsUtteranceGroupBySpecification,
  AnalyticsUtteranceMetric,
  AnalyticsUtteranceMetricResult,
  AnalyticsUtteranceResult,
  AssociatedTranscriptFilter,
  AudioAndDTMFInputSpecification,
  AudioLogDestination,
  AudioLogSetting,
  AudioSpecification,
  BotAliasHistoryEvent,
  BotAliasLocaleSettings,
  BotAliasSummary,
  BotAliasTestExecutionTarget,
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
  BotRecommendationSummary,
  BotSortBy,
  BotSummary,
  BotVersionLocaleDetails,
  BotVersionSortBy,
  BotVersionSummary,
  BuiltInIntentSortBy,
  BuiltInSlotTypeSortBy,
  Button,
  CloudWatchLogGroupLogDestination,
  CodeHookSpecification,
  CompositeSlotTypeSetting,
  Condition,
  ConflictException,
  ConversationLevelTestResultsFilterBy,
  ConversationLogsDataSource,
  ConversationLogsDataSourceFilterBy,
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
  ExportResourceSpecification,
  ExternalSourceSetting,
  FulfillmentStartResponseSpecification,
  FulfillmentUpdateResponseSpecification,
  FulfillmentUpdatesSpecification,
  GrammarSlotTypeSetting,
  GrammarSlotTypeSource,
  ImageResponseCard,
  ImportResourceSpecification,
  InputContext,
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
  SlotPriority,
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
  TestSetDiscrepancyReportBotAliasTarget,
  TestSetDiscrepancyReportResourceTarget,
  TestSetExportSpecification,
  TestSetImportInputLocation,
  TestSetImportResourceSpecification,
  TestSetStorageLocation,
  TextInputSpecification,
  TextLogDestination,
  TextLogSetting,
  ThrottlingException,
  TranscriptFilter,
  TranscriptSourceSetting,
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
  ExportFilter,
  ExportSortBy,
  ExportSummary,
  FulfillmentCodeHookSettings,
  ImportFilter,
  ImportSortBy,
  ImportSummary,
  InitialResponseSetting,
  InputSessionStateSpecification,
  IntentClosingSetting,
  IntentConfirmationSetting,
  IntentFilter,
  IntentOverride,
  IntentSortBy,
  IntentSummary,
  PostDialogCodeHookInvocationSpecification,
  PostFulfillmentStatusSpecification,
  RelativeAggregationDuration,
  RuntimeHintDetails,
  RuntimeHints,
  SessionDataSortBy,
  SessionSpecification,
  SlotCaptureSetting,
  SlotFilter,
  SlotSortBy,
  SlotSummary,
  SlotTypeFilter,
  SlotTypeSortBy,
  SlotTypeSummary,
  SlotValueElicitationSetting,
  SlotValueOverride,
  TestExecutionResultFilterBy,
  TestExecutionResultItems,
  TestExecutionSortBy,
  TestExecutionSummary,
  TestExecutionTarget,
  TestSetGenerationDataSource,
  TestSetSortBy,
  TestSetSummary,
  TestSetTurnRecord,
  TestSetTurnResult,
  TurnSpecification,
  UserTurnInputSpecification,
  UserTurnIntentOutput,
  UserTurnOutputSpecification,
  UserTurnResult,
  UserTurnSlotOutput,
  UserTurnSpecification,
  UtteranceAggregationDuration,
  UtteranceDataSortBy,
  UtteranceLevelTestResultItem,
  UtteranceLevelTestResults,
  UtteranceSpecification,
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
  body = JSON.stringify(
    take(input, {
      customVocabularyItemList: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      customVocabularyItemList: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      customVocabularyItemList: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botMembers: (_) => _json(_),
      botName: [],
      botTags: (_) => _json(_),
      botType: [],
      dataPrivacy: (_) => _json(_),
      description: [],
      idleSessionTTLInSeconds: [],
      roleArn: [],
      testBotAliasTags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botAliasLocaleSettings: (_) => _json(_),
      botAliasName: [],
      botVersion: [],
      conversationLogSettings: (_) => _json(_),
      description: [],
      sentimentAnalysisSettings: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      localeId: [],
      nluIntentConfidenceThreshold: (_) => __serializeFloat(_),
      voiceSettings: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botVersionLocaleSpecification: (_) => _json(_),
      description: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      fileFormat: [],
      filePassword: [],
      resourceSpecification: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      dialogCodeHook: (_) => _json(_),
      fulfillmentCodeHook: (_) => se_FulfillmentCodeHookSettings(_, context),
      initialResponseSetting: (_) => se_InitialResponseSetting(_, context),
      inputContexts: (_) => _json(_),
      intentClosingSetting: (_) => se_IntentClosingSetting(_, context),
      intentConfirmationSetting: (_) => se_IntentConfirmationSetting(_, context),
      intentName: [],
      kendraConfiguration: (_) => _json(_),
      outputContexts: (_) => _json(_),
      parentIntentSignature: [],
      sampleUtterances: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      policy: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      action: (_) => _json(_),
      condition: (_) => _json(_),
      effect: [],
      principal: (_) => _json(_),
      statementId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      multipleValuesSetting: (_) => _json(_),
      obfuscationSetting: (_) => _json(_),
      slotName: [],
      slotTypeId: [],
      subSlotSetting: (_) => se_SubSlotSetting(_, context),
      valueElicitationSetting: (_) => se_SlotValueElicitationSetting(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      compositeSlotTypeSetting: (_) => _json(_),
      description: [],
      externalSourceSetting: (_) => _json(_),
      parentSlotTypeSignature: [],
      slotTypeName: [],
      slotTypeValues: (_) => _json(_),
      valueSelectionSetting: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateTestSetDiscrepancyReportCommand
 */
export const se_CreateTestSetDiscrepancyReportCommand = async (
  input: CreateTestSetDiscrepancyReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets/{testSetId}/testsetdiscrepancy";
  resolvedPath = __resolvedPath(resolvedPath, input, "testSetId", () => input.testSetId!, "{testSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      target: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1DeleteTestSetCommand
 */
export const se_DeleteTestSetCommand = async (
  input: DeleteTestSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets/{testSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "testSetId", () => input.testSetId!, "{testSetId}", false);
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
 * serializeAws_restJson1DescribeTestExecutionCommand
 */
export const se_DescribeTestExecutionCommand = async (
  input: DescribeTestExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testexecutions/{testExecutionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "testExecutionId",
    () => input.testExecutionId!,
    "{testExecutionId}",
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
 * serializeAws_restJson1DescribeTestSetCommand
 */
export const se_DescribeTestSetCommand = async (
  input: DescribeTestSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets/{testSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "testSetId", () => input.testSetId!, "{testSetId}", false);
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
 * serializeAws_restJson1DescribeTestSetDiscrepancyReportCommand
 */
export const se_DescribeTestSetDiscrepancyReportCommand = async (
  input: DescribeTestSetDiscrepancyReportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/testsetdiscrepancy/{testSetDiscrepancyReportId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "testSetDiscrepancyReportId",
    () => input.testSetDiscrepancyReportId!,
    "{testSetDiscrepancyReportId}",
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
 * serializeAws_restJson1DescribeTestSetGenerationCommand
 */
export const se_DescribeTestSetGenerationCommand = async (
  input: DescribeTestSetGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsetgenerations/{testSetGenerationId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "testSetGenerationId",
    () => input.testSetGenerationId!,
    "{testSetGenerationId}",
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
 * serializeAws_restJson1GetTestExecutionArtifactsUrlCommand
 */
export const se_GetTestExecutionArtifactsUrlCommand = async (
  input: GetTestExecutionArtifactsUrlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/testexecutions/{testExecutionId}/artifacturl";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "testExecutionId",
    () => input.testExecutionId!,
    "{testExecutionId}",
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
  body = JSON.stringify(
    take(input, {
      aggregationDuration: (_) => _json(_),
      botAliasId: [],
      botVersion: [],
      filters: (_) => _json(_),
      localeId: [],
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botId: [],
      botVersion: [],
      filters: (_) => _json(_),
      localeId: [],
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botId: [],
      botVersion: [],
      filters: (_) => _json(_),
      localeId: [],
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListIntentMetricsCommand
 */
export const se_ListIntentMetricsCommand = async (
  input: ListIntentMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/analytics/intentmetrics";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      binBy: (_) => _json(_),
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      groupBy: (_) => _json(_),
      maxResults: [],
      metrics: (_) => _json(_),
      nextToken: [],
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
 * serializeAws_restJson1ListIntentPathsCommand
 */
export const se_ListIntentPathsCommand = async (
  input: ListIntentPathsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/analytics/intentpaths";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      intentPath: [],
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListIntentStageMetricsCommand
 */
export const se_ListIntentStageMetricsCommand = async (
  input: ListIntentStageMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/analytics/intentstagemetrics";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      binBy: (_) => _json(_),
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      groupBy: (_) => _json(_),
      maxResults: [],
      metrics: (_) => _json(_),
      nextToken: [],
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
 * serializeAws_restJson1ListSessionAnalyticsDataCommand
 */
export const se_ListSessionAnalyticsDataCommand = async (
  input: ListSessionAnalyticsDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/analytics/sessions";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
 * serializeAws_restJson1ListSessionMetricsCommand
 */
export const se_ListSessionMetricsCommand = async (
  input: ListSessionMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/analytics/sessionmetrics";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      binBy: (_) => _json(_),
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      groupBy: (_) => _json(_),
      maxResults: [],
      metrics: (_) => _json(_),
      nextToken: [],
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListTestExecutionResultItemsCommand
 */
export const se_ListTestExecutionResultItemsCommand = async (
  input: ListTestExecutionResultItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testexecutions/{testExecutionId}/results";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "testExecutionId",
    () => input.testExecutionId!,
    "{testExecutionId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      resultFilterBy: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListTestExecutionsCommand
 */
export const se_ListTestExecutionsCommand = async (
  input: ListTestExecutionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testexecutions";
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListTestSetRecordsCommand
 */
export const se_ListTestSetRecordsCommand = async (
  input: ListTestSetRecordsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets/{testSetId}/records";
  resolvedPath = __resolvedPath(resolvedPath, input, "testSetId", () => input.testSetId!, "{testSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
    })
  );
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
 * serializeAws_restJson1ListTestSetsCommand
 */
export const se_ListTestSetsCommand = async (
  input: ListTestSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets";
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListUtteranceAnalyticsDataCommand
 */
export const se_ListUtteranceAnalyticsDataCommand = async (
  input: ListUtteranceAnalyticsDataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/analytics/utterances";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      maxResults: [],
      nextToken: [],
      sortBy: (_) => _json(_),
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
 * serializeAws_restJson1ListUtteranceMetricsCommand
 */
export const se_ListUtteranceMetricsCommand = async (
  input: ListUtteranceMetricsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/analytics/utterancemetrics";
  resolvedPath = __resolvedPath(resolvedPath, input, "botId", () => input.botId!, "{botId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      attributes: (_) => _json(_),
      binBy: (_) => _json(_),
      endDateTime: (_) => Math.round(_.getTime() / 1000),
      filters: (_) => _json(_),
      groupBy: (_) => _json(_),
      maxResults: [],
      metrics: (_) => _json(_),
      nextToken: [],
      startDateTime: (_) => Math.round(_.getTime() / 1000),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      nextIndex: [],
      searchOrder: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      encryptionSetting: (_) => _json(_),
      transcriptSourceSetting: (_) => se_TranscriptSourceSetting(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filePassword: [],
      importId: [],
      mergeStrategy: [],
      resourceSpecification: (_) => se_ImportResourceSpecification(_, context),
    })
  );
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
 * serializeAws_restJson1StartTestExecutionCommand
 */
export const se_StartTestExecutionCommand = async (
  input: StartTestExecutionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets/{testSetId}/testexecutions";
  resolvedPath = __resolvedPath(resolvedPath, input, "testSetId", () => input.testSetId!, "{testSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      apiMode: [],
      target: (_) => _json(_),
      testExecutionModality: [],
    })
  );
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
 * serializeAws_restJson1StartTestSetGenerationCommand
 */
export const se_StartTestSetGenerationCommand = async (
  input: StartTestSetGenerationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsetgenerations";
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      generationDataSource: (_) => se_TestSetGenerationDataSource(_, context),
      roleArn: [],
      storageLocation: (_) => _json(_),
      testSetName: [],
      testSetTags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botMembers: (_) => _json(_),
      botName: [],
      botType: [],
      dataPrivacy: (_) => _json(_),
      description: [],
      idleSessionTTLInSeconds: [],
      roleArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      botAliasLocaleSettings: (_) => _json(_),
      botAliasName: [],
      botVersion: [],
      conversationLogSettings: (_) => _json(_),
      description: [],
      sentimentAnalysisSettings: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      nluIntentConfidenceThreshold: (_) => __serializeFloat(_),
      voiceSettings: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      encryptionSetting: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      filePassword: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      dialogCodeHook: (_) => _json(_),
      fulfillmentCodeHook: (_) => se_FulfillmentCodeHookSettings(_, context),
      initialResponseSetting: (_) => se_InitialResponseSetting(_, context),
      inputContexts: (_) => _json(_),
      intentClosingSetting: (_) => se_IntentClosingSetting(_, context),
      intentConfirmationSetting: (_) => se_IntentConfirmationSetting(_, context),
      intentName: [],
      kendraConfiguration: (_) => _json(_),
      outputContexts: (_) => _json(_),
      parentIntentSignature: [],
      sampleUtterances: (_) => _json(_),
      slotPriorities: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      policy: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      description: [],
      multipleValuesSetting: (_) => _json(_),
      obfuscationSetting: (_) => _json(_),
      slotName: [],
      slotTypeId: [],
      subSlotSetting: (_) => se_SubSlotSetting(_, context),
      valueElicitationSetting: (_) => se_SlotValueElicitationSetting(_, context),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      compositeSlotTypeSetting: (_) => _json(_),
      description: [],
      externalSourceSetting: (_) => _json(_),
      parentSlotTypeSignature: [],
      slotTypeName: [],
      slotTypeValues: (_) => _json(_),
      valueSelectionSetting: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1UpdateTestSetCommand
 */
export const se_UpdateTestSetCommand = async (
  input: UpdateTestSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/testsets/{testSetId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "testSetId", () => input.testSetId!, "{testSetId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      testSetName: [],
    })
  );
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    errors: _json,
    localeId: __expectString,
    resources: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    errors: _json,
    localeId: __expectString,
    resources: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    errors: _json,
    localeId: __expectString,
    resources: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botLocaleStatus: __expectString,
    botVersion: __expectString,
    lastBuildSubmittedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botMembers: _json,
    botName: __expectString,
    botStatus: __expectString,
    botTags: _json,
    botType: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataPrivacy: _json,
    description: __expectString,
    idleSessionTTLInSeconds: __expectInt32,
    roleArn: __expectString,
    testBotAliasTags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botAliasId: __expectString,
    botAliasLocaleSettings: _json,
    botAliasName: __expectString,
    botAliasStatus: __expectString,
    botId: __expectString,
    botVersion: __expectString,
    conversationLogSettings: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    sentimentAnalysisSettings: _json,
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botLocaleStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    localeId: __expectString,
    localeName: __expectString,
    nluIntentConfidenceThreshold: __limitedParseDouble,
    voiceSettings: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botStatus: __expectString,
    botVersion: __expectString,
    botVersionLocaleSpecification: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exportId: __expectString,
    exportStatus: __expectString,
    fileFormat: __expectString,
    resourceSpecification: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    dialogCodeHook: _json,
    fulfillmentCodeHook: (_) => de_FulfillmentCodeHookSettings(_, context),
    initialResponseSetting: (_) => de_InitialResponseSetting(_, context),
    inputContexts: _json,
    intentClosingSetting: (_) => de_IntentClosingSetting(_, context),
    intentConfirmationSetting: (_) => de_IntentConfirmationSetting(_, context),
    intentId: __expectString,
    intentName: __expectString,
    kendraConfiguration: _json,
    localeId: __expectString,
    outputContexts: _json,
    parentIntentSignature: __expectString,
    sampleUtterances: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resourceArn: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resourceArn: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    intentId: __expectString,
    localeId: __expectString,
    multipleValuesSetting: _json,
    obfuscationSetting: _json,
    slotId: __expectString,
    slotName: __expectString,
    slotTypeId: __expectString,
    subSlotSetting: (_) => de_SubSlotSetting(_, context),
    valueElicitationSetting: (_) => de_SlotValueElicitationSetting(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    compositeSlotTypeSetting: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    externalSourceSetting: _json,
    localeId: __expectString,
    parentSlotTypeSignature: __expectString,
    slotTypeId: __expectString,
    slotTypeName: __expectString,
    slotTypeValues: _json,
    valueSelectionSetting: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateTestSetDiscrepancyReportCommand
 */
export const de_CreateTestSetDiscrepancyReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestSetDiscrepancyReportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_CreateTestSetDiscrepancyReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    target: _json,
    testSetDiscrepancyReportId: __expectString,
    testSetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTestSetDiscrepancyReportCommandError
 */
const de_CreateTestSetDiscrepancyReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTestSetDiscrepancyReportCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    importId: __expectString,
    uploadUrl: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botStatus: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botAliasId: __expectString,
    botAliasStatus: __expectString,
    botId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botLocaleStatus: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botStatus: __expectString,
    botVersion: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    customVocabularyStatus: __expectString,
    localeId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    exportId: __expectString,
    exportStatus: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    importId: __expectString,
    importStatus: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resourceArn: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resourceArn: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteTestSetCommand
 */
export const de_DeleteTestSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteTestSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteTestSetCommandError
 */
const de_DeleteTestSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTestSetCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botMembers: _json,
    botName: __expectString,
    botStatus: __expectString,
    botType: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataPrivacy: _json,
    description: __expectString,
    failureReasons: _json,
    idleSessionTTLInSeconds: __expectInt32,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botAliasHistoryEvents: (_) => de_BotAliasHistoryEventsList(_, context),
    botAliasId: __expectString,
    botAliasLocaleSettings: _json,
    botAliasName: __expectString,
    botAliasStatus: __expectString,
    botId: __expectString,
    botVersion: __expectString,
    conversationLogSettings: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    parentBotNetworks: _json,
    sentimentAnalysisSettings: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botLocaleHistoryEvents: (_) => de_BotLocaleHistoryEventsList(_, context),
    botLocaleStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    failureReasons: _json,
    intentsCount: __expectInt32,
    lastBuildSubmittedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    localeName: __expectString,
    nluIntentConfidenceThreshold: __limitedParseDouble,
    recommendedActions: _json,
    slotTypesCount: __expectInt32,
    voiceSettings: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botRecommendationId: __expectString,
    botRecommendationResults: _json,
    botRecommendationStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionSetting: _json,
    failureReasons: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    transcriptSourceSetting: (_) => de_TranscriptSourceSetting(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botMembers: _json,
    botName: __expectString,
    botStatus: __expectString,
    botType: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataPrivacy: _json,
    description: __expectString,
    failureReasons: _json,
    idleSessionTTLInSeconds: __expectInt32,
    parentBotNetworks: _json,
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    customVocabularyStatus: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    downloadUrl: __expectString,
    exportId: __expectString,
    exportStatus: __expectString,
    failureReasons: _json,
    fileFormat: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceSpecification: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReasons: _json,
    importId: __expectString,
    importStatus: __expectString,
    importedResourceId: __expectString,
    importedResourceName: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    mergeStrategy: __expectString,
    resourceSpecification: (_) => de_ImportResourceSpecification(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    dialogCodeHook: _json,
    fulfillmentCodeHook: (_) => de_FulfillmentCodeHookSettings(_, context),
    initialResponseSetting: (_) => de_InitialResponseSetting(_, context),
    inputContexts: _json,
    intentClosingSetting: (_) => de_IntentClosingSetting(_, context),
    intentConfirmationSetting: (_) => de_IntentConfirmationSetting(_, context),
    intentId: __expectString,
    intentName: __expectString,
    kendraConfiguration: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    outputContexts: _json,
    parentIntentSignature: __expectString,
    sampleUtterances: _json,
    slotPriorities: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    policy: __expectString,
    resourceArn: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    intentId: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    multipleValuesSetting: _json,
    obfuscationSetting: _json,
    slotId: __expectString,
    slotName: __expectString,
    slotTypeId: __expectString,
    subSlotSetting: (_) => de_SubSlotSetting(_, context),
    valueElicitationSetting: (_) => de_SlotValueElicitationSetting(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    compositeSlotTypeSetting: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    externalSourceSetting: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    parentSlotTypeSignature: __expectString,
    slotTypeId: __expectString,
    slotTypeName: __expectString,
    slotTypeValues: _json,
    valueSelectionSetting: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeTestExecutionCommand
 */
export const de_DescribeTestExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestExecutionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTestExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiMode: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReasons: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    target: _json,
    testExecutionId: __expectString,
    testExecutionModality: __expectString,
    testExecutionStatus: __expectString,
    testSetId: __expectString,
    testSetName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTestExecutionCommandError
 */
const de_DescribeTestExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestExecutionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeTestSetCommand
 */
export const de_DescribeTestSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTestSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modality: __expectString,
    numTurns: __expectInt32,
    roleArn: __expectString,
    status: __expectString,
    storageLocation: _json,
    testSetId: __expectString,
    testSetName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTestSetCommandError
 */
const de_DescribeTestSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestSetCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeTestSetDiscrepancyReportCommand
 */
export const de_DescribeTestSetDiscrepancyReportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestSetDiscrepancyReportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTestSetDiscrepancyReportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    failureReasons: _json,
    lastUpdatedDataTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    target: _json,
    testSetDiscrepancyRawOutputUrl: __expectString,
    testSetDiscrepancyReportId: __expectString,
    testSetDiscrepancyReportStatus: __expectString,
    testSetDiscrepancyTopErrors: _json,
    testSetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTestSetDiscrepancyReportCommandError
 */
const de_DescribeTestSetDiscrepancyReportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestSetDiscrepancyReportCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeTestSetGenerationCommand
 */
export const de_DescribeTestSetGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestSetGenerationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTestSetGenerationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    failureReasons: _json,
    generationDataSource: (_) => de_TestSetGenerationDataSource(_, context),
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    storageLocation: _json,
    testSetGenerationId: __expectString,
    testSetGenerationStatus: __expectString,
    testSetId: __expectString,
    testSetName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTestSetGenerationCommandError
 */
const de_DescribeTestSetGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTestSetGenerationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTestExecutionArtifactsUrlCommand
 */
export const de_GetTestExecutionArtifactsUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestExecutionArtifactsUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTestExecutionArtifactsUrlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    downloadArtifactsUrl: __expectString,
    testExecutionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTestExecutionArtifactsUrlCommandError
 */
const de_GetTestExecutionArtifactsUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTestExecutionArtifactsUrlCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    aggregatedUtterancesSummaries: (_) => de_AggregatedUtterancesSummaryList(_, context),
    aggregationDuration: _json,
    aggregationLastRefreshedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    aggregationWindowEndTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    aggregationWindowStartTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    botAliasId: __expectString,
    botId: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botAliasSummaries: (_) => de_BotAliasSummaryList(_, context),
    botId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botLocaleSummaries: (_) => de_BotLocaleSummaryList(_, context),
    botVersion: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botRecommendationSummaries: (_) => de_BotRecommendationSummaryList(_, context),
    botVersion: __expectString,
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botSummaries: (_) => de_BotSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersionSummaries: (_) => de_BotVersionSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    builtInIntentSummaries: _json,
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    builtInSlotTypeSummaries: _json,
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    customVocabularyItems: _json,
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    exportSummaries: (_) => de_ExportSummaryList(_, context),
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    importSummaries: (_) => de_ImportSummaryList(_, context),
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListIntentMetricsCommand
 */
export const de_ListIntentMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIntentMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botId: __expectString,
    nextToken: __expectString,
    results: (_) => de_AnalyticsIntentResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIntentMetricsCommandError
 */
const de_ListIntentMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentMetricsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListIntentPathsCommand
 */
export const de_ListIntentPathsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentPathsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIntentPathsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nodeSummaries: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIntentPathsCommandError
 */
const de_ListIntentPathsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentPathsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    intentSummaries: (_) => de_IntentSummaryList(_, context),
    localeId: __expectString,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListIntentStageMetricsCommand
 */
export const de_ListIntentStageMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentStageMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIntentStageMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botId: __expectString,
    nextToken: __expectString,
    results: (_) => de_AnalyticsIntentStageResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListIntentStageMetricsCommandError
 */
const de_ListIntentStageMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentStageMetricsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botRecommendationId: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
    nextToken: __expectString,
    summaryList: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSessionAnalyticsDataCommand
 */
export const de_ListSessionAnalyticsDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionAnalyticsDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSessionAnalyticsDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botId: __expectString,
    nextToken: __expectString,
    sessions: (_) => de_SessionSpecifications(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionAnalyticsDataCommandError
 */
const de_ListSessionAnalyticsDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionAnalyticsDataCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListSessionMetricsCommand
 */
export const de_ListSessionMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListSessionMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botId: __expectString,
    nextToken: __expectString,
    results: (_) => de_AnalyticsSessionResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSessionMetricsCommandError
 */
const de_ListSessionMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSessionMetricsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    intentId: __expectString,
    localeId: __expectString,
    nextToken: __expectString,
    slotSummaries: (_) => de_SlotSummaryList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
    nextToken: __expectString,
    slotTypeSummaries: (_) => de_SlotTypeSummaryList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTestExecutionResultItemsCommand
 */
export const de_ListTestExecutionResultItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestExecutionResultItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTestExecutionResultItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testExecutionResults: (_) => de_TestExecutionResultItems(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestExecutionResultItemsCommandError
 */
const de_ListTestExecutionResultItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestExecutionResultItemsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTestExecutionsCommand
 */
export const de_ListTestExecutionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestExecutionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTestExecutionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testExecutions: (_) => de_TestExecutionSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestExecutionsCommandError
 */
const de_ListTestExecutionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestExecutionsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTestSetRecordsCommand
 */
export const de_ListTestSetRecordsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestSetRecordsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTestSetRecordsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testSetRecords: (_) => de_TestSetTurnRecordList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestSetRecordsCommandError
 */
const de_ListTestSetRecordsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestSetRecordsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTestSetsCommand
 */
export const de_ListTestSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTestSetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    testSets: (_) => de_TestSetSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTestSetsCommandError
 */
const de_ListTestSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTestSetsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListUtteranceAnalyticsDataCommand
 */
export const de_ListUtteranceAnalyticsDataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUtteranceAnalyticsDataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUtteranceAnalyticsDataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botId: __expectString,
    nextToken: __expectString,
    utterances: (_) => de_UtteranceSpecifications(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUtteranceAnalyticsDataCommandError
 */
const de_ListUtteranceAnalyticsDataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUtteranceAnalyticsDataCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListUtteranceMetricsCommand
 */
export const de_ListUtteranceMetricsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUtteranceMetricsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUtteranceMetricsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    botId: __expectString,
    nextToken: __expectString,
    results: (_) => de_AnalyticsUtteranceResults(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListUtteranceMetricsCommandError
 */
const de_ListUtteranceMetricsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUtteranceMetricsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    associatedTranscripts: _json,
    botId: __expectString,
    botRecommendationId: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
    nextIndex: __expectInt32,
    totalResults: __expectInt32,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botRecommendationId: __expectString,
    botRecommendationStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionSetting: _json,
    localeId: __expectString,
    transcriptSourceSetting: (_) => de_TranscriptSourceSetting(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    importId: __expectString,
    importStatus: __expectString,
    mergeStrategy: __expectString,
    resourceSpecification: (_) => de_ImportResourceSpecification(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartTestExecutionCommand
 */
export const de_StartTestExecutionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestExecutionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartTestExecutionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    apiMode: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    target: _json,
    testExecutionId: __expectString,
    testExecutionModality: __expectString,
    testSetId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTestExecutionCommandError
 */
const de_StartTestExecutionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestExecutionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartTestSetGenerationCommand
 */
export const de_StartTestSetGenerationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestSetGenerationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_StartTestSetGenerationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    generationDataSource: (_) => de_TestSetGenerationDataSource(_, context),
    roleArn: __expectString,
    storageLocation: _json,
    testSetGenerationId: __expectString,
    testSetGenerationStatus: __expectString,
    testSetName: __expectString,
    testSetTags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartTestSetGenerationCommandError
 */
const de_StartTestSetGenerationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTestSetGenerationCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botRecommendationId: __expectString,
    botRecommendationStatus: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botMembers: _json,
    botName: __expectString,
    botStatus: __expectString,
    botType: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dataPrivacy: _json,
    description: __expectString,
    idleSessionTTLInSeconds: __expectInt32,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botAliasId: __expectString,
    botAliasLocaleSettings: _json,
    botAliasName: __expectString,
    botAliasStatus: __expectString,
    botId: __expectString,
    botVersion: __expectString,
    conversationLogSettings: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    sentimentAnalysisSettings: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botLocaleStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    failureReasons: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    localeName: __expectString,
    nluIntentConfidenceThreshold: __limitedParseDouble,
    recommendedActions: _json,
    voiceSettings: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botRecommendationId: __expectString,
    botRecommendationStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionSetting: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    transcriptSourceSetting: (_) => de_TranscriptSourceSetting(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exportId: __expectString,
    exportStatus: __expectString,
    fileFormat: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceSpecification: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    dialogCodeHook: _json,
    fulfillmentCodeHook: (_) => de_FulfillmentCodeHookSettings(_, context),
    initialResponseSetting: (_) => de_InitialResponseSetting(_, context),
    inputContexts: _json,
    intentClosingSetting: (_) => de_IntentClosingSetting(_, context),
    intentConfirmationSetting: (_) => de_IntentConfirmationSetting(_, context),
    intentId: __expectString,
    intentName: __expectString,
    kendraConfiguration: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    outputContexts: _json,
    parentIntentSignature: __expectString,
    sampleUtterances: _json,
    slotPriorities: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    resourceArn: __expectString,
    revisionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    intentId: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    multipleValuesSetting: _json,
    obfuscationSetting: _json,
    slotId: __expectString,
    slotName: __expectString,
    slotTypeId: __expectString,
    subSlotSetting: (_) => de_SubSlotSetting(_, context),
    valueElicitationSetting: (_) => de_SlotValueElicitationSetting(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    botId: __expectString,
    botVersion: __expectString,
    compositeSlotTypeSetting: _json,
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    externalSourceSetting: _json,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    parentSlotTypeSignature: __expectString,
    slotTypeId: __expectString,
    slotTypeName: __expectString,
    slotTypeValues: _json,
    valueSelectionSetting: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateTestSetCommand
 */
export const de_UpdateTestSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTestSetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    creationDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedDateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modality: __expectString,
    numTurns: __expectInt32,
    roleArn: __expectString,
    status: __expectString,
    storageLocation: _json,
    testSetId: __expectString,
    testSetName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTestSetCommandError
 */
const de_UpdateTestSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTestSetCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AdvancedRecognitionSetting omitted.

// se_AggregatedUtterancesFilter omitted.

// se_AggregatedUtterancesFilters omitted.

// se_AggregatedUtterancesSortBy omitted.

// se_AllowedInputTypes omitted.

// se_AnalyticsBinByList omitted.

// se_AnalyticsBinBySpecification omitted.

// se_AnalyticsFilterValues omitted.

// se_AnalyticsIntentFilter omitted.

// se_AnalyticsIntentFilters omitted.

// se_AnalyticsIntentGroupByList omitted.

// se_AnalyticsIntentGroupBySpecification omitted.

// se_AnalyticsIntentMetric omitted.

// se_AnalyticsIntentMetrics omitted.

// se_AnalyticsIntentStageFilter omitted.

// se_AnalyticsIntentStageFilters omitted.

// se_AnalyticsIntentStageGroupByList omitted.

// se_AnalyticsIntentStageGroupBySpecification omitted.

// se_AnalyticsIntentStageMetric omitted.

// se_AnalyticsIntentStageMetrics omitted.

// se_AnalyticsPathFilter omitted.

// se_AnalyticsPathFilters omitted.

// se_AnalyticsSessionFilter omitted.

// se_AnalyticsSessionFilters omitted.

// se_AnalyticsSessionGroupByList omitted.

// se_AnalyticsSessionGroupBySpecification omitted.

// se_AnalyticsSessionMetric omitted.

// se_AnalyticsSessionMetrics omitted.

// se_AnalyticsUtteranceAttribute omitted.

// se_AnalyticsUtteranceAttributes omitted.

// se_AnalyticsUtteranceFilter omitted.

// se_AnalyticsUtteranceFilters omitted.

// se_AnalyticsUtteranceGroupByList omitted.

// se_AnalyticsUtteranceGroupBySpecification omitted.

// se_AnalyticsUtteranceMetric omitted.

// se_AnalyticsUtteranceMetrics omitted.

// se_AssociatedTranscriptFilter omitted.

// se_AssociatedTranscriptFilters omitted.

// se_AudioAndDTMFInputSpecification omitted.

// se_AudioLogDestination omitted.

// se_AudioLogSetting omitted.

// se_AudioLogSettingsList omitted.

// se_AudioSpecification omitted.

// se_BotAliasLocaleSettings omitted.

// se_BotAliasLocaleSettingsMap omitted.

// se_BotAliasTestExecutionTarget omitted.

// se_BotExportSpecification omitted.

// se_BotFilter omitted.

// se_BotFilters omitted.

// se_BotImportSpecification omitted.

// se_BotLocaleExportSpecification omitted.

// se_BotLocaleFilter omitted.

// se_BotLocaleFilters omitted.

/**
 * serializeAws_restJson1BotLocaleImportSpecification
 */
const se_BotLocaleImportSpecification = (input: BotLocaleImportSpecification, context: __SerdeContext): any => {
  return take(input, {
    botId: [],
    botVersion: [],
    localeId: [],
    nluIntentConfidenceThreshold: __serializeFloat,
    voiceSettings: _json,
  });
};

// se_BotLocaleSortBy omitted.

// se_BotMember omitted.

// se_BotMembers omitted.

// se_BotSortBy omitted.

// se_BotVersionLocaleDetails omitted.

// se_BotVersionLocaleSpecification omitted.

// se_BotVersionSortBy omitted.

// se_BuiltInIntentSortBy omitted.

// se_BuiltInSlotTypeSortBy omitted.

// se_Button omitted.

// se_ButtonsList omitted.

// se_CloudWatchLogGroupLogDestination omitted.

// se_CodeHookSpecification omitted.

// se_CompositeSlotTypeSetting omitted.

// se_Condition omitted.

/**
 * serializeAws_restJson1ConditionalBranch
 */
const se_ConditionalBranch = (input: ConditionalBranch, context: __SerdeContext): any => {
  return take(input, {
    condition: _json,
    name: [],
    nextStep: (_) => se_DialogState(_, context),
    response: _json,
  });
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
  return take(input, {
    active: [],
    conditionalBranches: (_) => se_ConditionalBranches(_, context),
    defaultBranch: (_) => se_DefaultConditionalBranch(_, context),
  });
};

// se_ConditionKeyValueMap omitted.

// se_ConditionMap omitted.

// se_ConversationLevelTestResultsFilterBy omitted.

/**
 * serializeAws_restJson1ConversationLogsDataSource
 */
const se_ConversationLogsDataSource = (input: ConversationLogsDataSource, context: __SerdeContext): any => {
  return take(input, {
    botAliasId: [],
    botId: [],
    filter: (_) => se_ConversationLogsDataSourceFilterBy(_, context),
    localeId: [],
  });
};

/**
 * serializeAws_restJson1ConversationLogsDataSourceFilterBy
 */
const se_ConversationLogsDataSourceFilterBy = (
  input: ConversationLogsDataSourceFilterBy,
  context: __SerdeContext
): any => {
  return take(input, {
    endTime: (_) => Math.round(_.getTime() / 1000),
    inputMode: [],
    startTime: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_ConversationLogSettings omitted.

// se_CreateCustomVocabularyItemsList omitted.

// se_CustomPayload omitted.

// se_CustomVocabularyEntryId omitted.

// se_CustomVocabularyExportSpecification omitted.

// se_CustomVocabularyImportSpecification omitted.

// se_CustomVocabularyItem omitted.

// se_DataPrivacy omitted.

/**
 * serializeAws_restJson1DateRangeFilter
 */
const se_DateRangeFilter = (input: DateRangeFilter, context: __SerdeContext): any => {
  return take(input, {
    endDateTime: (_) => Math.round(_.getTime() / 1000),
    startDateTime: (_) => Math.round(_.getTime() / 1000),
  });
};

/**
 * serializeAws_restJson1DefaultConditionalBranch
 */
const se_DefaultConditionalBranch = (input: DefaultConditionalBranch, context: __SerdeContext): any => {
  return take(input, {
    nextStep: (_) => se_DialogState(_, context),
    response: _json,
  });
};

// se_DeleteCustomVocabularyItemsList omitted.

// se_DialogAction omitted.

/**
 * serializeAws_restJson1DialogCodeHookInvocationSetting
 */
const se_DialogCodeHookInvocationSetting = (input: DialogCodeHookInvocationSetting, context: __SerdeContext): any => {
  return take(input, {
    active: [],
    enableCodeHookInvocation: [],
    invocationLabel: [],
    postCodeHookSpecification: (_) => se_PostDialogCodeHookInvocationSpecification(_, context),
  });
};

// se_DialogCodeHookSettings omitted.

/**
 * serializeAws_restJson1DialogState
 */
const se_DialogState = (input: DialogState, context: __SerdeContext): any => {
  return take(input, {
    dialogAction: _json,
    intent: (_) => se_IntentOverride(_, context),
    sessionAttributes: _json,
  });
};

// se_DTMFSpecification omitted.

// se_ElicitationCodeHookInvocationSetting omitted.

// se_EncryptionSetting omitted.

// se_ExportFilter omitted.

// se_ExportFilters omitted.

// se_ExportResourceSpecification omitted.

// se_ExportSortBy omitted.

// se_ExternalSourceSetting omitted.

// se_FilterValues omitted.

/**
 * serializeAws_restJson1FulfillmentCodeHookSettings
 */
const se_FulfillmentCodeHookSettings = (input: FulfillmentCodeHookSettings, context: __SerdeContext): any => {
  return take(input, {
    active: [],
    enabled: [],
    fulfillmentUpdatesSpecification: _json,
    postFulfillmentStatusSpecification: (_) => se_PostFulfillmentStatusSpecification(_, context),
  });
};

// se_FulfillmentStartResponseSpecification omitted.

// se_FulfillmentUpdateResponseSpecification omitted.

// se_FulfillmentUpdatesSpecification omitted.

// se_GrammarSlotTypeSetting omitted.

// se_GrammarSlotTypeSource omitted.

// se_ImageResponseCard omitted.

// se_ImportFilter omitted.

// se_ImportFilters omitted.

/**
 * serializeAws_restJson1ImportResourceSpecification
 */
const se_ImportResourceSpecification = (input: ImportResourceSpecification, context: __SerdeContext): any => {
  return take(input, {
    botImportSpecification: _json,
    botLocaleImportSpecification: (_) => se_BotLocaleImportSpecification(_, context),
    customVocabularyImportSpecification: _json,
    testSetImportResourceSpecification: _json,
  });
};

// se_ImportSortBy omitted.

/**
 * serializeAws_restJson1InitialResponseSetting
 */
const se_InitialResponseSetting = (input: InitialResponseSetting, context: __SerdeContext): any => {
  return take(input, {
    codeHook: (_) => se_DialogCodeHookInvocationSetting(_, context),
    conditional: (_) => se_ConditionalSpecification(_, context),
    initialResponse: _json,
    nextStep: (_) => se_DialogState(_, context),
  });
};

// se_InputContext omitted.

// se_InputContextsList omitted.

/**
 * serializeAws_restJson1IntentClosingSetting
 */
const se_IntentClosingSetting = (input: IntentClosingSetting, context: __SerdeContext): any => {
  return take(input, {
    active: [],
    closingResponse: _json,
    conditional: (_) => se_ConditionalSpecification(_, context),
    nextStep: (_) => se_DialogState(_, context),
  });
};

/**
 * serializeAws_restJson1IntentConfirmationSetting
 */
const se_IntentConfirmationSetting = (input: IntentConfirmationSetting, context: __SerdeContext): any => {
  return take(input, {
    active: [],
    codeHook: (_) => se_DialogCodeHookInvocationSetting(_, context),
    confirmationConditional: (_) => se_ConditionalSpecification(_, context),
    confirmationNextStep: (_) => se_DialogState(_, context),
    confirmationResponse: _json,
    declinationConditional: (_) => se_ConditionalSpecification(_, context),
    declinationNextStep: (_) => se_DialogState(_, context),
    declinationResponse: _json,
    elicitationCodeHook: _json,
    failureConditional: (_) => se_ConditionalSpecification(_, context),
    failureNextStep: (_) => se_DialogState(_, context),
    failureResponse: _json,
    promptSpecification: _json,
  });
};

// se_IntentFilter omitted.

// se_IntentFilters omitted.

/**
 * serializeAws_restJson1IntentOverride
 */
const se_IntentOverride = (input: IntentOverride, context: __SerdeContext): any => {
  return take(input, {
    name: [],
    slots: (_) => se_SlotValueOverrideMap(_, context),
  });
};

// se_IntentSortBy omitted.

// se_KendraConfiguration omitted.

// se_LambdaCodeHook omitted.

/**
 * serializeAws_restJson1LexTranscriptFilter
 */
const se_LexTranscriptFilter = (input: LexTranscriptFilter, context: __SerdeContext): any => {
  return take(input, {
    dateRangeFilter: (_) => se_DateRangeFilter(_, context),
  });
};

// se_Message omitted.

// se_MessageGroup omitted.

// se_MessageGroupsList omitted.

// se_MessageVariationsList omitted.

// se_MultipleValuesSetting omitted.

// se_NewCustomVocabularyItem omitted.

// se_ObfuscationSetting omitted.

// se_ObjectPrefixes omitted.

// se_OperationList omitted.

// se_OutputContext omitted.

// se_OutputContextsList omitted.

// se_PathFormat omitted.

// se_PlainTextMessage omitted.

/**
 * serializeAws_restJson1PostDialogCodeHookInvocationSpecification
 */
const se_PostDialogCodeHookInvocationSpecification = (
  input: PostDialogCodeHookInvocationSpecification,
  context: __SerdeContext
): any => {
  return take(input, {
    failureConditional: (_) => se_ConditionalSpecification(_, context),
    failureNextStep: (_) => se_DialogState(_, context),
    failureResponse: _json,
    successConditional: (_) => se_ConditionalSpecification(_, context),
    successNextStep: (_) => se_DialogState(_, context),
    successResponse: _json,
    timeoutConditional: (_) => se_ConditionalSpecification(_, context),
    timeoutNextStep: (_) => se_DialogState(_, context),
    timeoutResponse: _json,
  });
};

/**
 * serializeAws_restJson1PostFulfillmentStatusSpecification
 */
const se_PostFulfillmentStatusSpecification = (
  input: PostFulfillmentStatusSpecification,
  context: __SerdeContext
): any => {
  return take(input, {
    failureConditional: (_) => se_ConditionalSpecification(_, context),
    failureNextStep: (_) => se_DialogState(_, context),
    failureResponse: _json,
    successConditional: (_) => se_ConditionalSpecification(_, context),
    successNextStep: (_) => se_DialogState(_, context),
    successResponse: _json,
    timeoutConditional: (_) => se_ConditionalSpecification(_, context),
    timeoutNextStep: (_) => se_DialogState(_, context),
    timeoutResponse: _json,
  });
};

// se_Principal omitted.

// se_PrincipalList omitted.

// se_PromptAttemptSpecification omitted.

// se_PromptAttemptsSpecificationMap omitted.

// se_PromptSpecification omitted.

// se_RelativeAggregationDuration omitted.

// se_ResponseSpecification omitted.

// se_S3BucketLogDestination omitted.

/**
 * serializeAws_restJson1S3BucketTranscriptSource
 */
const se_S3BucketTranscriptSource = (input: S3BucketTranscriptSource, context: __SerdeContext): any => {
  return take(input, {
    kmsKeyArn: [],
    pathFormat: _json,
    s3BucketName: [],
    transcriptFilter: (_) => se_TranscriptFilter(_, context),
    transcriptFormat: [],
  });
};

// se_SampleUtterance omitted.

// se_SampleUtterancesList omitted.

// se_SampleValue omitted.

// se_SentimentAnalysisSettings omitted.

// se_SessionDataSortBy omitted.

/**
 * serializeAws_restJson1SlotCaptureSetting
 */
const se_SlotCaptureSetting = (input: SlotCaptureSetting, context: __SerdeContext): any => {
  return take(input, {
    captureConditional: (_) => se_ConditionalSpecification(_, context),
    captureNextStep: (_) => se_DialogState(_, context),
    captureResponse: _json,
    codeHook: (_) => se_DialogCodeHookInvocationSetting(_, context),
    elicitationCodeHook: _json,
    failureConditional: (_) => se_ConditionalSpecification(_, context),
    failureNextStep: (_) => se_DialogState(_, context),
    failureResponse: _json,
  });
};

// se_SlotDefaultValue omitted.

// se_SlotDefaultValueList omitted.

// se_SlotDefaultValueSpecification omitted.

// se_SlotFilter omitted.

// se_SlotFilters omitted.

// se_SlotPrioritiesList omitted.

// se_SlotPriority omitted.

// se_SlotSortBy omitted.

// se_SlotTypeFilter omitted.

// se_SlotTypeFilters omitted.

// se_SlotTypeSortBy omitted.

// se_SlotTypeValue omitted.

// se_SlotTypeValues omitted.

// se_SlotValue omitted.

/**
 * serializeAws_restJson1SlotValueElicitationSetting
 */
const se_SlotValueElicitationSetting = (input: SlotValueElicitationSetting, context: __SerdeContext): any => {
  return take(input, {
    defaultValueSpecification: _json,
    promptSpecification: _json,
    sampleUtterances: _json,
    slotCaptureSetting: (_) => se_SlotCaptureSetting(_, context),
    slotConstraint: [],
    waitAndContinueSpecification: _json,
  });
};

/**
 * serializeAws_restJson1SlotValueOverride
 */
const se_SlotValueOverride = (input: SlotValueOverride, context: __SerdeContext): any => {
  return take(input, {
    shape: [],
    value: _json,
    values: (_) => se_SlotValues(_, context),
  });
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

// se_SlotValueRegexFilter omitted.

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

// se_SlotValueSelectionSetting omitted.

/**
 * serializeAws_restJson1Specifications
 */
const se_Specifications = (input: Specifications, context: __SerdeContext): any => {
  return take(input, {
    slotTypeId: [],
    valueElicitationSetting: _json,
  });
};

// se_SSMLMessage omitted.

// se_StillWaitingResponseSpecification omitted.

// se_StringMap omitted.

/**
 * serializeAws_restJson1SubSlotSetting
 */
const se_SubSlotSetting = (input: SubSlotSetting, context: __SerdeContext): any => {
  return take(input, {
    expression: [],
    slotSpecifications: (_) => se_SubSlotSpecificationMap(_, context),
  });
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

// se_SubSlotTypeComposition omitted.

// se_SubSlotTypeList omitted.

// se_SubSlotValueElicitationSetting omitted.

// se_SynonymList omitted.

// se_TagMap omitted.

// se_TestExecutionResultFilterBy omitted.

// se_TestExecutionSortBy omitted.

// se_TestExecutionTarget omitted.

// se_TestSetDiscrepancyReportBotAliasTarget omitted.

// se_TestSetDiscrepancyReportResourceTarget omitted.

// se_TestSetExportSpecification omitted.

/**
 * serializeAws_restJson1TestSetGenerationDataSource
 */
const se_TestSetGenerationDataSource = (input: TestSetGenerationDataSource, context: __SerdeContext): any => {
  return take(input, {
    conversationLogsDataSource: (_) => se_ConversationLogsDataSource(_, context),
  });
};

// se_TestSetImportInputLocation omitted.

// se_TestSetImportResourceSpecification omitted.

// se_TestSetSortBy omitted.

// se_TestSetStorageLocation omitted.

// se_TextInputSpecification omitted.

// se_TextLogDestination omitted.

// se_TextLogSetting omitted.

// se_TextLogSettingsList omitted.

/**
 * serializeAws_restJson1TranscriptFilter
 */
const se_TranscriptFilter = (input: TranscriptFilter, context: __SerdeContext): any => {
  return take(input, {
    lexTranscriptFilter: (_) => se_LexTranscriptFilter(_, context),
  });
};

/**
 * serializeAws_restJson1TranscriptSourceSetting
 */
const se_TranscriptSourceSetting = (input: TranscriptSourceSetting, context: __SerdeContext): any => {
  return take(input, {
    s3BucketTranscriptSource: (_) => se_S3BucketTranscriptSource(_, context),
  });
};

// se_UpdateCustomVocabularyItemsList omitted.

// se_UtteranceAggregationDuration omitted.

// se_UtteranceDataSortBy omitted.

// se_VoiceSettings omitted.

// se_WaitAndContinueSpecification omitted.

// de_ActiveContext omitted.

// de_ActiveContextList omitted.

// de_AdvancedRecognitionSetting omitted.

// de_AgentTurnResult omitted.

// de_AgentTurnSpecification omitted.

/**
 * deserializeAws_restJson1AggregatedUtterancesSummary
 */
const de_AggregatedUtterancesSummary = (output: any, context: __SerdeContext): AggregatedUtterancesSummary => {
  return take(output, {
    containsDataFromDeletedResources: __expectBoolean,
    hitCount: __expectInt32,
    missedCount: __expectInt32,
    utterance: __expectString,
    utteranceFirstRecordedInAggregationDuration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    utteranceLastRecordedInAggregationDuration: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1AggregatedUtterancesSummaryList
 */
const de_AggregatedUtterancesSummaryList = (output: any, context: __SerdeContext): AggregatedUtterancesSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AggregatedUtterancesSummary(entry, context);
    });
  return retVal;
};

// de_AllowedInputTypes omitted.

// de_AnalyticsBinKey omitted.

// de_AnalyticsBinKeys omitted.

// de_AnalyticsIntentGroupByKey omitted.

// de_AnalyticsIntentGroupByKeys omitted.

/**
 * deserializeAws_restJson1AnalyticsIntentMetricResult
 */
const de_AnalyticsIntentMetricResult = (output: any, context: __SerdeContext): AnalyticsIntentMetricResult => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsIntentMetricResults
 */
const de_AnalyticsIntentMetricResults = (output: any, context: __SerdeContext): AnalyticsIntentMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsIntentMetricResult(entry, context);
    });
  return retVal;
};

// de_AnalyticsIntentNodeSummaries omitted.

// de_AnalyticsIntentNodeSummary omitted.

/**
 * deserializeAws_restJson1AnalyticsIntentResult
 */
const de_AnalyticsIntentResult = (output: any, context: __SerdeContext): AnalyticsIntentResult => {
  return take(output, {
    binKeys: _json,
    groupByKeys: _json,
    metricsResults: (_: any) => de_AnalyticsIntentMetricResults(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsIntentResults
 */
const de_AnalyticsIntentResults = (output: any, context: __SerdeContext): AnalyticsIntentResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsIntentResult(entry, context);
    });
  return retVal;
};

// de_AnalyticsIntentStageGroupByKey omitted.

// de_AnalyticsIntentStageGroupByKeys omitted.

/**
 * deserializeAws_restJson1AnalyticsIntentStageMetricResult
 */
const de_AnalyticsIntentStageMetricResult = (
  output: any,
  context: __SerdeContext
): AnalyticsIntentStageMetricResult => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsIntentStageMetricResults
 */
const de_AnalyticsIntentStageMetricResults = (
  output: any,
  context: __SerdeContext
): AnalyticsIntentStageMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsIntentStageMetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalyticsIntentStageResult
 */
const de_AnalyticsIntentStageResult = (output: any, context: __SerdeContext): AnalyticsIntentStageResult => {
  return take(output, {
    binKeys: _json,
    groupByKeys: _json,
    metricsResults: (_: any) => de_AnalyticsIntentStageMetricResults(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsIntentStageResults
 */
const de_AnalyticsIntentStageResults = (output: any, context: __SerdeContext): AnalyticsIntentStageResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsIntentStageResult(entry, context);
    });
  return retVal;
};

// de_AnalyticsSessionGroupByKey omitted.

// de_AnalyticsSessionGroupByKeys omitted.

/**
 * deserializeAws_restJson1AnalyticsSessionMetricResult
 */
const de_AnalyticsSessionMetricResult = (output: any, context: __SerdeContext): AnalyticsSessionMetricResult => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsSessionMetricResults
 */
const de_AnalyticsSessionMetricResults = (output: any, context: __SerdeContext): AnalyticsSessionMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsSessionMetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalyticsSessionResult
 */
const de_AnalyticsSessionResult = (output: any, context: __SerdeContext): AnalyticsSessionResult => {
  return take(output, {
    binKeys: _json,
    groupByKeys: _json,
    metricsResults: (_: any) => de_AnalyticsSessionMetricResults(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsSessionResults
 */
const de_AnalyticsSessionResults = (output: any, context: __SerdeContext): AnalyticsSessionResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsSessionResult(entry, context);
    });
  return retVal;
};

// de_AnalyticsUtteranceAttributeResult omitted.

// de_AnalyticsUtteranceAttributeResults omitted.

// de_AnalyticsUtteranceGroupByKey omitted.

// de_AnalyticsUtteranceGroupByKeys omitted.

/**
 * deserializeAws_restJson1AnalyticsUtteranceMetricResult
 */
const de_AnalyticsUtteranceMetricResult = (output: any, context: __SerdeContext): AnalyticsUtteranceMetricResult => {
  return take(output, {
    name: __expectString,
    statistic: __expectString,
    value: __limitedParseDouble,
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsUtteranceMetricResults
 */
const de_AnalyticsUtteranceMetricResults = (output: any, context: __SerdeContext): AnalyticsUtteranceMetricResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsUtteranceMetricResult(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AnalyticsUtteranceResult
 */
const de_AnalyticsUtteranceResult = (output: any, context: __SerdeContext): AnalyticsUtteranceResult => {
  return take(output, {
    attributeResults: _json,
    binKeys: _json,
    groupByKeys: _json,
    metricsResults: (_: any) => de_AnalyticsUtteranceMetricResults(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1AnalyticsUtteranceResults
 */
const de_AnalyticsUtteranceResults = (output: any, context: __SerdeContext): AnalyticsUtteranceResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AnalyticsUtteranceResult(entry, context);
    });
  return retVal;
};

// de_AssociatedTranscript omitted.

// de_AssociatedTranscriptList omitted.

// de_AudioAndDTMFInputSpecification omitted.

// de_AudioLogDestination omitted.

// de_AudioLogSetting omitted.

// de_AudioLogSettingsList omitted.

// de_AudioSpecification omitted.

/**
 * deserializeAws_restJson1BotAliasHistoryEvent
 */
const de_BotAliasHistoryEvent = (output: any, context: __SerdeContext): BotAliasHistoryEvent => {
  return take(output, {
    botVersion: __expectString,
    endDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1BotAliasHistoryEventsList
 */
const de_BotAliasHistoryEventsList = (output: any, context: __SerdeContext): BotAliasHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotAliasHistoryEvent(entry, context);
    });
  return retVal;
};

// de_BotAliasLocaleSettings omitted.

// de_BotAliasLocaleSettingsMap omitted.

/**
 * deserializeAws_restJson1BotAliasSummary
 */
const de_BotAliasSummary = (output: any, context: __SerdeContext): BotAliasSummary => {
  return take(output, {
    botAliasId: __expectString,
    botAliasName: __expectString,
    botAliasStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1BotAliasSummaryList
 */
const de_BotAliasSummaryList = (output: any, context: __SerdeContext): BotAliasSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotAliasSummary(entry, context);
    });
  return retVal;
};

// de_BotAliasTestExecutionTarget omitted.

// de_BotExportSpecification omitted.

// de_BotImportSpecification omitted.

// de_BotLocaleExportSpecification omitted.

/**
 * deserializeAws_restJson1BotLocaleHistoryEvent
 */
const de_BotLocaleHistoryEvent = (output: any, context: __SerdeContext): BotLocaleHistoryEvent => {
  return take(output, {
    event: __expectString,
    eventDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1BotLocaleHistoryEventsList
 */
const de_BotLocaleHistoryEventsList = (output: any, context: __SerdeContext): BotLocaleHistoryEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotLocaleHistoryEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotLocaleImportSpecification
 */
const de_BotLocaleImportSpecification = (output: any, context: __SerdeContext): BotLocaleImportSpecification => {
  return take(output, {
    botId: __expectString,
    botVersion: __expectString,
    localeId: __expectString,
    nluIntentConfidenceThreshold: __limitedParseDouble,
    voiceSettings: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1BotLocaleSummary
 */
const de_BotLocaleSummary = (output: any, context: __SerdeContext): BotLocaleSummary => {
  return take(output, {
    botLocaleStatus: __expectString,
    description: __expectString,
    lastBuildSubmittedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    localeId: __expectString,
    localeName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BotLocaleSummaryList
 */
const de_BotLocaleSummaryList = (output: any, context: __SerdeContext): BotLocaleSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotLocaleSummary(entry, context);
    });
  return retVal;
};

// de_BotMember omitted.

// de_BotMembers omitted.

// de_BotRecommendationResults omitted.

// de_BotRecommendationResultStatistics omitted.

/**
 * deserializeAws_restJson1BotRecommendationSummary
 */
const de_BotRecommendationSummary = (output: any, context: __SerdeContext): BotRecommendationSummary => {
  return take(output, {
    botRecommendationId: __expectString,
    botRecommendationStatus: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1BotRecommendationSummaryList
 */
const de_BotRecommendationSummaryList = (output: any, context: __SerdeContext): BotRecommendationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotRecommendationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BotSummary
 */
const de_BotSummary = (output: any, context: __SerdeContext): BotSummary => {
  return take(output, {
    botId: __expectString,
    botName: __expectString,
    botStatus: __expectString,
    botType: __expectString,
    description: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    latestBotVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BotSummaryList
 */
const de_BotSummaryList = (output: any, context: __SerdeContext): BotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotSummary(entry, context);
    });
  return retVal;
};

// de_BotVersionLocaleDetails omitted.

// de_BotVersionLocaleSpecification omitted.

/**
 * deserializeAws_restJson1BotVersionSummary
 */
const de_BotVersionSummary = (output: any, context: __SerdeContext): BotVersionSummary => {
  return take(output, {
    botName: __expectString,
    botStatus: __expectString,
    botVersion: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BotVersionSummaryList
 */
const de_BotVersionSummaryList = (output: any, context: __SerdeContext): BotVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BotVersionSummary(entry, context);
    });
  return retVal;
};

// de_BuiltInIntentSummary omitted.

// de_BuiltInIntentSummaryList omitted.

// de_BuiltInSlotTypeSummary omitted.

// de_BuiltInSlotTypeSummaryList omitted.

// de_Button omitted.

// de_ButtonsList omitted.

// de_CloudWatchLogGroupLogDestination omitted.

// de_CodeHookSpecification omitted.

// de_CompositeSlotTypeSetting omitted.

// de_Condition omitted.

/**
 * deserializeAws_restJson1ConditionalBranch
 */
const de_ConditionalBranch = (output: any, context: __SerdeContext): ConditionalBranch => {
  return take(output, {
    condition: _json,
    name: __expectString,
    nextStep: (_: any) => de_DialogState(_, context),
    response: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConditionalBranches
 */
const de_ConditionalBranches = (output: any, context: __SerdeContext): ConditionalBranch[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConditionalBranch(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConditionalSpecification
 */
const de_ConditionalSpecification = (output: any, context: __SerdeContext): ConditionalSpecification => {
  return take(output, {
    active: __expectBoolean,
    conditionalBranches: (_: any) => de_ConditionalBranches(_, context),
    defaultBranch: (_: any) => de_DefaultConditionalBranch(_, context),
  }) as any;
};

// de_ConversationLevelIntentClassificationResultItem omitted.

// de_ConversationLevelIntentClassificationResults omitted.

// de_ConversationLevelResultDetail omitted.

// de_ConversationLevelSlotResolutionResultItem omitted.

// de_ConversationLevelSlotResolutionResults omitted.

// de_ConversationLevelTestResultItem omitted.

// de_ConversationLevelTestResultItemList omitted.

// de_ConversationLevelTestResults omitted.

/**
 * deserializeAws_restJson1ConversationLogsDataSource
 */
const de_ConversationLogsDataSource = (output: any, context: __SerdeContext): ConversationLogsDataSource => {
  return take(output, {
    botAliasId: __expectString,
    botId: __expectString,
    filter: (_: any) => de_ConversationLogsDataSourceFilterBy(_, context),
    localeId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ConversationLogsDataSourceFilterBy
 */
const de_ConversationLogsDataSourceFilterBy = (
  output: any,
  context: __SerdeContext
): ConversationLogsDataSourceFilterBy => {
  return take(output, {
    endTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    inputMode: __expectString,
    startTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ConversationLogSettings omitted.

// de_CustomPayload omitted.

// de_CustomVocabularyExportSpecification omitted.

// de_CustomVocabularyImportSpecification omitted.

// de_CustomVocabularyItem omitted.

// de_CustomVocabularyItems omitted.

// de_DataPrivacy omitted.

/**
 * deserializeAws_restJson1DateRangeFilter
 */
const de_DateRangeFilter = (output: any, context: __SerdeContext): DateRangeFilter => {
  return take(output, {
    endDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    startDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_restJson1DefaultConditionalBranch
 */
const de_DefaultConditionalBranch = (output: any, context: __SerdeContext): DefaultConditionalBranch => {
  return take(output, {
    nextStep: (_: any) => de_DialogState(_, context),
    response: _json,
  }) as any;
};

// de_DialogAction omitted.

/**
 * deserializeAws_restJson1DialogCodeHookInvocationSetting
 */
const de_DialogCodeHookInvocationSetting = (output: any, context: __SerdeContext): DialogCodeHookInvocationSetting => {
  return take(output, {
    active: __expectBoolean,
    enableCodeHookInvocation: __expectBoolean,
    invocationLabel: __expectString,
    postCodeHookSpecification: (_: any) => de_PostDialogCodeHookInvocationSpecification(_, context),
  }) as any;
};

// de_DialogCodeHookSettings omitted.

/**
 * deserializeAws_restJson1DialogState
 */
const de_DialogState = (output: any, context: __SerdeContext): DialogState => {
  return take(output, {
    dialogAction: _json,
    intent: (_: any) => de_IntentOverride(_, context),
    sessionAttributes: _json,
  }) as any;
};

// de_DTMFSpecification omitted.

// de_ElicitationCodeHookInvocationSetting omitted.

// de_EncryptionSetting omitted.

// de_ExecutionErrorDetails omitted.

// de_ExportResourceSpecification omitted.

/**
 * deserializeAws_restJson1ExportSummary
 */
const de_ExportSummary = (output: any, context: __SerdeContext): ExportSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    exportId: __expectString,
    exportStatus: __expectString,
    fileFormat: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resourceSpecification: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ExportSummaryList
 */
const de_ExportSummaryList = (output: any, context: __SerdeContext): ExportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ExportSummary(entry, context);
    });
  return retVal;
};

// de_ExternalSourceSetting omitted.

// de_FailedCustomVocabularyItem omitted.

// de_FailedCustomVocabularyItems omitted.

// de_FailureReasons omitted.

/**
 * deserializeAws_restJson1FulfillmentCodeHookSettings
 */
const de_FulfillmentCodeHookSettings = (output: any, context: __SerdeContext): FulfillmentCodeHookSettings => {
  return take(output, {
    active: __expectBoolean,
    enabled: __expectBoolean,
    fulfillmentUpdatesSpecification: _json,
    postFulfillmentStatusSpecification: (_: any) => de_PostFulfillmentStatusSpecification(_, context),
  }) as any;
};

// de_FulfillmentStartResponseSpecification omitted.

// de_FulfillmentUpdateResponseSpecification omitted.

// de_FulfillmentUpdatesSpecification omitted.

// de_GrammarSlotTypeSetting omitted.

// de_GrammarSlotTypeSource omitted.

// de_ImageResponseCard omitted.

/**
 * deserializeAws_restJson1ImportResourceSpecification
 */
const de_ImportResourceSpecification = (output: any, context: __SerdeContext): ImportResourceSpecification => {
  return take(output, {
    botImportSpecification: _json,
    botLocaleImportSpecification: (_: any) => de_BotLocaleImportSpecification(_, context),
    customVocabularyImportSpecification: _json,
    testSetImportResourceSpecification: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportSummary
 */
const de_ImportSummary = (output: any, context: __SerdeContext): ImportSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    importId: __expectString,
    importStatus: __expectString,
    importedResourceId: __expectString,
    importedResourceName: __expectString,
    importedResourceType: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    mergeStrategy: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ImportSummaryList
 */
const de_ImportSummaryList = (output: any, context: __SerdeContext): ImportSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ImportSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1InitialResponseSetting
 */
const de_InitialResponseSetting = (output: any, context: __SerdeContext): InitialResponseSetting => {
  return take(output, {
    codeHook: (_: any) => de_DialogCodeHookInvocationSetting(_, context),
    conditional: (_: any) => de_ConditionalSpecification(_, context),
    initialResponse: _json,
    nextStep: (_: any) => de_DialogState(_, context),
  }) as any;
};

// de_InputContext omitted.

// de_InputContextsList omitted.

/**
 * deserializeAws_restJson1InputSessionStateSpecification
 */
const de_InputSessionStateSpecification = (output: any, context: __SerdeContext): InputSessionStateSpecification => {
  return take(output, {
    activeContexts: _json,
    runtimeHints: (_: any) => de_RuntimeHints(_, context),
    sessionAttributes: _json,
  }) as any;
};

// de_IntentClassificationTestResultItem omitted.

// de_IntentClassificationTestResultItemCounts omitted.

// de_IntentClassificationTestResultItemList omitted.

// de_IntentClassificationTestResults omitted.

/**
 * deserializeAws_restJson1IntentClosingSetting
 */
const de_IntentClosingSetting = (output: any, context: __SerdeContext): IntentClosingSetting => {
  return take(output, {
    active: __expectBoolean,
    closingResponse: _json,
    conditional: (_: any) => de_ConditionalSpecification(_, context),
    nextStep: (_: any) => de_DialogState(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1IntentConfirmationSetting
 */
const de_IntentConfirmationSetting = (output: any, context: __SerdeContext): IntentConfirmationSetting => {
  return take(output, {
    active: __expectBoolean,
    codeHook: (_: any) => de_DialogCodeHookInvocationSetting(_, context),
    confirmationConditional: (_: any) => de_ConditionalSpecification(_, context),
    confirmationNextStep: (_: any) => de_DialogState(_, context),
    confirmationResponse: _json,
    declinationConditional: (_: any) => de_ConditionalSpecification(_, context),
    declinationNextStep: (_: any) => de_DialogState(_, context),
    declinationResponse: _json,
    elicitationCodeHook: _json,
    failureConditional: (_: any) => de_ConditionalSpecification(_, context),
    failureNextStep: (_: any) => de_DialogState(_, context),
    failureResponse: _json,
    promptSpecification: _json,
  }) as any;
};

// de_IntentLevelSlotResolutionTestResultItem omitted.

// de_IntentLevelSlotResolutionTestResultItemList omitted.

// de_IntentLevelSlotResolutionTestResults omitted.

/**
 * deserializeAws_restJson1IntentOverride
 */
const de_IntentOverride = (output: any, context: __SerdeContext): IntentOverride => {
  return take(output, {
    name: __expectString,
    slots: (_: any) => de_SlotValueOverrideMap(_, context),
  }) as any;
};

// de_IntentStatistics omitted.

/**
 * deserializeAws_restJson1IntentSummary
 */
const de_IntentSummary = (output: any, context: __SerdeContext): IntentSummary => {
  return take(output, {
    description: __expectString,
    inputContexts: _json,
    intentId: __expectString,
    intentName: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    outputContexts: _json,
    parentIntentSignature: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IntentSummaryList
 */
const de_IntentSummaryList = (output: any, context: __SerdeContext): IntentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IntentSummary(entry, context);
    });
  return retVal;
};

// de_InvokedIntentSample omitted.

// de_InvokedIntentSamples omitted.

// de_KendraConfiguration omitted.

// de_LambdaCodeHook omitted.

/**
 * deserializeAws_restJson1LexTranscriptFilter
 */
const de_LexTranscriptFilter = (output: any, context: __SerdeContext): LexTranscriptFilter => {
  return take(output, {
    dateRangeFilter: (_: any) => de_DateRangeFilter(_, context),
  }) as any;
};

// de_Message omitted.

// de_MessageGroup omitted.

// de_MessageGroupsList omitted.

// de_MessageVariationsList omitted.

// de_MultipleValuesSetting omitted.

// de_ObfuscationSetting omitted.

// de_ObjectPrefixes omitted.

// de_OutputContext omitted.

// de_OutputContextsList omitted.

// de_OverallTestResultItem omitted.

// de_OverallTestResultItemList omitted.

// de_OverallTestResults omitted.

// de_ParentBotNetwork omitted.

// de_ParentBotNetworks omitted.

// de_PathFormat omitted.

// de_PlainTextMessage omitted.

/**
 * deserializeAws_restJson1PostDialogCodeHookInvocationSpecification
 */
const de_PostDialogCodeHookInvocationSpecification = (
  output: any,
  context: __SerdeContext
): PostDialogCodeHookInvocationSpecification => {
  return take(output, {
    failureConditional: (_: any) => de_ConditionalSpecification(_, context),
    failureNextStep: (_: any) => de_DialogState(_, context),
    failureResponse: _json,
    successConditional: (_: any) => de_ConditionalSpecification(_, context),
    successNextStep: (_: any) => de_DialogState(_, context),
    successResponse: _json,
    timeoutConditional: (_: any) => de_ConditionalSpecification(_, context),
    timeoutNextStep: (_: any) => de_DialogState(_, context),
    timeoutResponse: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PostFulfillmentStatusSpecification
 */
const de_PostFulfillmentStatusSpecification = (
  output: any,
  context: __SerdeContext
): PostFulfillmentStatusSpecification => {
  return take(output, {
    failureConditional: (_: any) => de_ConditionalSpecification(_, context),
    failureNextStep: (_: any) => de_DialogState(_, context),
    failureResponse: _json,
    successConditional: (_: any) => de_ConditionalSpecification(_, context),
    successNextStep: (_: any) => de_DialogState(_, context),
    successResponse: _json,
    timeoutConditional: (_: any) => de_ConditionalSpecification(_, context),
    timeoutNextStep: (_: any) => de_DialogState(_, context),
    timeoutResponse: _json,
  }) as any;
};

// de_PromptAttemptSpecification omitted.

// de_PromptAttemptsSpecificationMap omitted.

// de_PromptSpecification omitted.

// de_RecommendedActions omitted.

// de_RecommendedIntentSummary omitted.

// de_RecommendedIntentSummaryList omitted.

// de_RelativeAggregationDuration omitted.

// de_ResponseSpecification omitted.

/**
 * deserializeAws_restJson1RuntimeHintDetails
 */
const de_RuntimeHintDetails = (output: any, context: __SerdeContext): RuntimeHintDetails => {
  return take(output, {
    runtimeHintValues: _json,
    subSlotHints: (_: any) => de_SlotHintsSlotMap(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1RuntimeHints
 */
const de_RuntimeHints = (output: any, context: __SerdeContext): RuntimeHints => {
  return take(output, {
    slotHints: (_: any) => de_SlotHintsIntentMap(_, context),
  }) as any;
};

// de_RuntimeHintValue omitted.

// de_RuntimeHintValuesList omitted.

// de_S3BucketLogDestination omitted.

/**
 * deserializeAws_restJson1S3BucketTranscriptSource
 */
const de_S3BucketTranscriptSource = (output: any, context: __SerdeContext): S3BucketTranscriptSource => {
  return take(output, {
    kmsKeyArn: __expectString,
    pathFormat: _json,
    s3BucketName: __expectString,
    transcriptFilter: (_: any) => de_TranscriptFilter(_, context),
    transcriptFormat: __expectString,
  }) as any;
};

// de_SampleUtterance omitted.

// de_SampleUtterancesList omitted.

// de_SampleValue omitted.

// de_SentimentAnalysisSettings omitted.

/**
 * deserializeAws_restJson1SessionSpecification
 */
const de_SessionSpecification = (output: any, context: __SerdeContext): SessionSpecification => {
  return take(output, {
    botAliasId: __expectString,
    botVersion: __expectString,
    channel: __expectString,
    conversationDurationSeconds: __expectLong,
    conversationEndState: __expectString,
    conversationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    conversationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    invokedIntentSamples: _json,
    localeId: __expectString,
    mode: __expectString,
    numberOfTurns: __expectLong,
    originatingRequestId: __expectString,
    sessionId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SessionSpecifications
 */
const de_SessionSpecifications = (output: any, context: __SerdeContext): SessionSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SessionSpecification(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SlotCaptureSetting
 */
const de_SlotCaptureSetting = (output: any, context: __SerdeContext): SlotCaptureSetting => {
  return take(output, {
    captureConditional: (_: any) => de_ConditionalSpecification(_, context),
    captureNextStep: (_: any) => de_DialogState(_, context),
    captureResponse: _json,
    codeHook: (_: any) => de_DialogCodeHookInvocationSetting(_, context),
    elicitationCodeHook: _json,
    failureConditional: (_: any) => de_ConditionalSpecification(_, context),
    failureNextStep: (_: any) => de_DialogState(_, context),
    failureResponse: _json,
  }) as any;
};

// de_SlotDefaultValue omitted.

// de_SlotDefaultValueList omitted.

// de_SlotDefaultValueSpecification omitted.

/**
 * deserializeAws_restJson1SlotHintsIntentMap
 */
const de_SlotHintsIntentMap = (
  output: any,
  context: __SerdeContext
): Record<string, Record<string, RuntimeHintDetails>> => {
  return Object.entries(output).reduce(
    (acc: Record<string, Record<string, RuntimeHintDetails>>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key as string] = de_SlotHintsSlotMap(value, context);
      return acc;
    },
    {} as Record<string, Record<string, RuntimeHintDetails>>
  );
};

/**
 * deserializeAws_restJson1SlotHintsSlotMap
 */
const de_SlotHintsSlotMap = (output: any, context: __SerdeContext): Record<string, RuntimeHintDetails> => {
  return Object.entries(output).reduce((acc: Record<string, RuntimeHintDetails>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_RuntimeHintDetails(value, context);
    return acc;
  }, {} as Record<string, RuntimeHintDetails>);
};

// de_SlotPrioritiesList omitted.

// de_SlotPriority omitted.

// de_SlotResolutionTestResultItem omitted.

// de_SlotResolutionTestResultItemCounts omitted.

// de_SlotResolutionTestResultItems omitted.

/**
 * deserializeAws_restJson1SlotSummary
 */
const de_SlotSummary = (output: any, context: __SerdeContext): SlotSummary => {
  return take(output, {
    description: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    slotConstraint: __expectString,
    slotId: __expectString,
    slotName: __expectString,
    slotTypeId: __expectString,
    valueElicitationPromptSpecification: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SlotSummaryList
 */
const de_SlotSummaryList = (output: any, context: __SerdeContext): SlotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SlotSummary(entry, context);
    });
  return retVal;
};

// de_SlotTypeStatistics omitted.

/**
 * deserializeAws_restJson1SlotTypeSummary
 */
const de_SlotTypeSummary = (output: any, context: __SerdeContext): SlotTypeSummary => {
  return take(output, {
    description: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    parentSlotTypeSignature: __expectString,
    slotTypeCategory: __expectString,
    slotTypeId: __expectString,
    slotTypeName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1SlotTypeSummaryList
 */
const de_SlotTypeSummaryList = (output: any, context: __SerdeContext): SlotTypeSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SlotTypeSummary(entry, context);
    });
  return retVal;
};

// de_SlotTypeValue omitted.

// de_SlotTypeValues omitted.

// de_SlotValue omitted.

/**
 * deserializeAws_restJson1SlotValueElicitationSetting
 */
const de_SlotValueElicitationSetting = (output: any, context: __SerdeContext): SlotValueElicitationSetting => {
  return take(output, {
    defaultValueSpecification: _json,
    promptSpecification: _json,
    sampleUtterances: _json,
    slotCaptureSetting: (_: any) => de_SlotCaptureSetting(_, context),
    slotConstraint: __expectString,
    waitAndContinueSpecification: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SlotValueOverride
 */
const de_SlotValueOverride = (output: any, context: __SerdeContext): SlotValueOverride => {
  return take(output, {
    shape: __expectString,
    value: _json,
    values: (_: any) => de_SlotValues(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SlotValueOverrideMap
 */
const de_SlotValueOverrideMap = (output: any, context: __SerdeContext): Record<string, SlotValueOverride> => {
  return Object.entries(output).reduce((acc: Record<string, SlotValueOverride>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_SlotValueOverride(value, context);
    return acc;
  }, {} as Record<string, SlotValueOverride>);
};

// de_SlotValueRegexFilter omitted.

/**
 * deserializeAws_restJson1SlotValues
 */
const de_SlotValues = (output: any, context: __SerdeContext): SlotValueOverride[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SlotValueOverride(entry, context);
    });
  return retVal;
};

// de_SlotValueSelectionSetting omitted.

/**
 * deserializeAws_restJson1Specifications
 */
const de_Specifications = (output: any, context: __SerdeContext): Specifications => {
  return take(output, {
    slotTypeId: __expectString,
    valueElicitationSetting: _json,
  }) as any;
};

// de_SSMLMessage omitted.

// de_StillWaitingResponseSpecification omitted.

// de_StringMap omitted.

/**
 * deserializeAws_restJson1SubSlotSetting
 */
const de_SubSlotSetting = (output: any, context: __SerdeContext): SubSlotSetting => {
  return take(output, {
    expression: __expectString,
    slotSpecifications: (_: any) => de_SubSlotSpecificationMap(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1SubSlotSpecificationMap
 */
const de_SubSlotSpecificationMap = (output: any, context: __SerdeContext): Record<string, Specifications> => {
  return Object.entries(output).reduce((acc: Record<string, Specifications>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_Specifications(value, context);
    return acc;
  }, {} as Record<string, Specifications>);
};

// de_SubSlotTypeComposition omitted.

// de_SubSlotTypeList omitted.

// de_SubSlotValueElicitationSetting omitted.

// de_SynonymList omitted.

// de_TagMap omitted.

/**
 * deserializeAws_restJson1TestExecutionResultItems
 */
const de_TestExecutionResultItems = (output: any, context: __SerdeContext): TestExecutionResultItems => {
  return take(output, {
    conversationLevelTestResults: _json,
    intentClassificationTestResults: _json,
    intentLevelSlotResolutionTestResults: _json,
    overallTestResults: _json,
    utteranceLevelTestResults: (_: any) => de_UtteranceLevelTestResults(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TestExecutionSummary
 */
const de_TestExecutionSummary = (output: any, context: __SerdeContext): TestExecutionSummary => {
  return take(output, {
    apiMode: __expectString,
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    target: _json,
    testExecutionId: __expectString,
    testExecutionModality: __expectString,
    testExecutionStatus: __expectString,
    testSetId: __expectString,
    testSetName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TestExecutionSummaryList
 */
const de_TestExecutionSummaryList = (output: any, context: __SerdeContext): TestExecutionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestExecutionSummary(entry, context);
    });
  return retVal;
};

// de_TestExecutionTarget omitted.

// de_TestResultMatchStatusCountMap omitted.

// de_TestSetDiscrepancyErrors omitted.

// de_TestSetDiscrepancyReportBotAliasTarget omitted.

// de_TestSetDiscrepancyReportResourceTarget omitted.

// de_TestSetExportSpecification omitted.

/**
 * deserializeAws_restJson1TestSetGenerationDataSource
 */
const de_TestSetGenerationDataSource = (output: any, context: __SerdeContext): TestSetGenerationDataSource => {
  return take(output, {
    conversationLogsDataSource: (_: any) => de_ConversationLogsDataSource(_, context),
  }) as any;
};

// de_TestSetImportInputLocation omitted.

// de_TestSetImportResourceSpecification omitted.

// de_TestSetIntentDiscrepancyItem omitted.

// de_TestSetIntentDiscrepancyList omitted.

// de_TestSetSlotDiscrepancyItem omitted.

// de_TestSetSlotDiscrepancyList omitted.

// de_TestSetStorageLocation omitted.

/**
 * deserializeAws_restJson1TestSetSummary
 */
const de_TestSetSummary = (output: any, context: __SerdeContext): TestSetSummary => {
  return take(output, {
    creationDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastUpdatedDateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    modality: __expectString,
    numTurns: __expectInt32,
    roleArn: __expectString,
    status: __expectString,
    storageLocation: _json,
    testSetId: __expectString,
    testSetName: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TestSetSummaryList
 */
const de_TestSetSummaryList = (output: any, context: __SerdeContext): TestSetSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestSetSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestSetTurnRecord
 */
const de_TestSetTurnRecord = (output: any, context: __SerdeContext): TestSetTurnRecord => {
  return take(output, {
    conversationId: __expectString,
    recordNumber: __expectLong,
    turnNumber: __expectInt32,
    turnSpecification: (_: any) => de_TurnSpecification(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TestSetTurnRecordList
 */
const de_TestSetTurnRecordList = (output: any, context: __SerdeContext): TestSetTurnRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TestSetTurnRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TestSetTurnResult
 */
const de_TestSetTurnResult = (output: any, context: __SerdeContext): TestSetTurnResult => {
  return take(output, {
    agent: _json,
    user: (_: any) => de_UserTurnResult(_, context),
  }) as any;
};

// de_TextInputSpecification omitted.

// de_TextLogDestination omitted.

// de_TextLogSetting omitted.

// de_TextLogSettingsList omitted.

/**
 * deserializeAws_restJson1TranscriptFilter
 */
const de_TranscriptFilter = (output: any, context: __SerdeContext): TranscriptFilter => {
  return take(output, {
    lexTranscriptFilter: (_: any) => de_LexTranscriptFilter(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TranscriptSourceSetting
 */
const de_TranscriptSourceSetting = (output: any, context: __SerdeContext): TranscriptSourceSetting => {
  return take(output, {
    s3BucketTranscriptSource: (_: any) => de_S3BucketTranscriptSource(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1TurnSpecification
 */
const de_TurnSpecification = (output: any, context: __SerdeContext): TurnSpecification => {
  return take(output, {
    agentTurn: _json,
    userTurn: (_: any) => de_UserTurnSpecification(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UserTurnInputSpecification
 */
const de_UserTurnInputSpecification = (output: any, context: __SerdeContext): UserTurnInputSpecification => {
  return take(output, {
    requestAttributes: _json,
    sessionState: (_: any) => de_InputSessionStateSpecification(_, context),
    utteranceInput: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1UserTurnIntentOutput
 */
const de_UserTurnIntentOutput = (output: any, context: __SerdeContext): UserTurnIntentOutput => {
  return take(output, {
    name: __expectString,
    slots: (_: any) => de_UserTurnSlotOutputMap(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UserTurnOutputSpecification
 */
const de_UserTurnOutputSpecification = (output: any, context: __SerdeContext): UserTurnOutputSpecification => {
  return take(output, {
    activeContexts: _json,
    intent: (_: any) => de_UserTurnIntentOutput(_, context),
    transcript: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UserTurnResult
 */
const de_UserTurnResult = (output: any, context: __SerdeContext): UserTurnResult => {
  return take(output, {
    actualOutput: (_: any) => de_UserTurnOutputSpecification(_, context),
    conversationLevelResult: _json,
    endToEndResult: __expectString,
    errorDetails: _json,
    expectedOutput: (_: any) => de_UserTurnOutputSpecification(_, context),
    input: (_: any) => de_UserTurnInputSpecification(_, context),
    intentMatchResult: __expectString,
    slotMatchResult: __expectString,
    speechTranscriptionResult: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1UserTurnSlotOutput
 */
const de_UserTurnSlotOutput = (output: any, context: __SerdeContext): UserTurnSlotOutput => {
  return take(output, {
    subSlots: (_: any) => de_UserTurnSlotOutputMap(_, context),
    value: __expectString,
    values: (_: any) => de_UserTurnSlotOutputList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UserTurnSlotOutputList
 */
const de_UserTurnSlotOutputList = (output: any, context: __SerdeContext): UserTurnSlotOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UserTurnSlotOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UserTurnSlotOutputMap
 */
const de_UserTurnSlotOutputMap = (output: any, context: __SerdeContext): Record<string, UserTurnSlotOutput> => {
  return Object.entries(output).reduce((acc: Record<string, UserTurnSlotOutput>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key as string] = de_UserTurnSlotOutput(value, context);
    return acc;
  }, {} as Record<string, UserTurnSlotOutput>);
};

/**
 * deserializeAws_restJson1UserTurnSpecification
 */
const de_UserTurnSpecification = (output: any, context: __SerdeContext): UserTurnSpecification => {
  return take(output, {
    expected: (_: any) => de_UserTurnOutputSpecification(_, context),
    input: (_: any) => de_UserTurnInputSpecification(_, context),
  }) as any;
};

// de_UtteranceAggregationDuration omitted.

// de_UtteranceAudioInputSpecification omitted.

// de_UtteranceBotResponse omitted.

// de_UtteranceBotResponses omitted.

// de_UtteranceInputSpecification omitted.

/**
 * deserializeAws_restJson1UtteranceLevelTestResultItem
 */
const de_UtteranceLevelTestResultItem = (output: any, context: __SerdeContext): UtteranceLevelTestResultItem => {
  return take(output, {
    conversationId: __expectString,
    recordNumber: __expectLong,
    turnResult: (_: any) => de_TestSetTurnResult(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UtteranceLevelTestResultItemList
 */
const de_UtteranceLevelTestResultItemList = (output: any, context: __SerdeContext): UtteranceLevelTestResultItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UtteranceLevelTestResultItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1UtteranceLevelTestResults
 */
const de_UtteranceLevelTestResults = (output: any, context: __SerdeContext): UtteranceLevelTestResults => {
  return take(output, {
    items: (_: any) => de_UtteranceLevelTestResultItemList(_, context),
  }) as any;
};

/**
 * deserializeAws_restJson1UtteranceSpecification
 */
const de_UtteranceSpecification = (output: any, context: __SerdeContext): UtteranceSpecification => {
  return take(output, {
    associatedIntentName: __expectString,
    associatedSlotName: __expectString,
    audioVoiceDurationMillis: __expectLong,
    botAliasId: __expectString,
    botResponseAudioVoiceId: __expectString,
    botResponses: _json,
    botVersion: __expectString,
    channel: __expectString,
    conversationEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    conversationStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    dialogActionType: __expectString,
    inputType: __expectString,
    intentState: __expectString,
    localeId: __expectString,
    mode: __expectString,
    outputType: __expectString,
    sessionId: __expectString,
    slotsFilledInSession: __expectString,
    utterance: __expectString,
    utteranceRequestId: __expectString,
    utteranceTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    utteranceUnderstood: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1UtteranceSpecifications
 */
const de_UtteranceSpecifications = (output: any, context: __SerdeContext): UtteranceSpecification[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_UtteranceSpecification(entry, context);
    });
  return retVal;
};

// de_VoiceSettings omitted.

// de_WaitAndContinueSpecification omitted.

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
