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
  parseEpochTimestamp as __parseEpochTimestamp,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  AssociatedTranscript,
  AssociatedTranscriptFilter,
  AudioLogDestination,
  AudioLogSetting,
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
  ConflictException,
  ConversationLogSettings,
  CustomPayload,
  CustomVocabularyExportSpecification,
  CustomVocabularyImportSpecification,
  DataPrivacy,
  DateRangeFilter,
  DialogCodeHookSettings,
  EncryptionSetting,
  ExportFilter,
  ExportResourceSpecification,
  ExportSortBy,
  ExportSummary,
  ExternalSourceSetting,
  FulfillmentCodeHookSettings,
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
  IntentClosingSetting,
  IntentConfirmationSetting,
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
  ObfuscationSetting,
  OutputContext,
  PathFormat,
  PlainTextMessage,
  PostFulfillmentStatusSpecification,
  PreconditionFailedException,
  Principal,
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
  SlotValueElicitationSetting,
  SlotValueRegexFilter,
  SlotValueSelectionSetting,
  SSMLMessage,
  StillWaitingResponseSpecification,
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

export const serializeAws_restJson1BuildBotLocaleCommand = async (
  input: BuildBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
    ...(input.botName != undefined && { botName: input.botName }),
    ...(input.botTags != undefined && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
    ...(input.dataPrivacy != undefined && {
      dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context),
    }),
    ...(input.description != undefined && { description: input.description }),
    ...(input.idleSessionTTLInSeconds != undefined && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != undefined && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.botAliasLocaleSettings != undefined && {
      botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
    }),
    ...(input.botAliasName != undefined && { botAliasName: input.botAliasName }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings != undefined && {
      conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
    }),
    ...(input.description != undefined && { description: input.description }),
    ...(input.sentimentAnalysisSettings != undefined && {
      sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(
        input.sentimentAnalysisSettings,
        context
      ),
    }),
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
    ...(input.nluIntentConfidenceThreshold != undefined && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.botVersionLocaleSpecification != undefined && {
      botVersionLocaleSpecification: serializeAws_restJson1BotVersionLocaleSpecification(
        input.botVersionLocaleSpecification,
        context
      ),
    }),
    ...(input.description != undefined && { description: input.description }),
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
    ...(input.fileFormat != undefined && { fileFormat: input.fileFormat }),
    ...(input.filePassword != undefined && { filePassword: input.filePassword }),
    ...(input.resourceSpecification != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.dialogCodeHook != undefined && {
      dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
    }),
    ...(input.fulfillmentCodeHook != undefined && {
      fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
    }),
    ...(input.inputContexts != undefined && {
      inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
    }),
    ...(input.intentClosingSetting != undefined && {
      intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
    }),
    ...(input.intentConfirmationSetting != undefined && {
      intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(
        input.intentConfirmationSetting,
        context
      ),
    }),
    ...(input.intentName != undefined && { intentName: input.intentName }),
    ...(input.kendraConfiguration != undefined && {
      kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != undefined && {
      outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
    }),
    ...(input.parentIntentSignature != undefined && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances != undefined && {
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.policy != undefined && { policy: input.policy }),
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.action != undefined && { action: serializeAws_restJson1OperationList(input.action, context) }),
    ...(input.condition != undefined && { condition: serializeAws_restJson1ConditionMap(input.condition, context) }),
    ...(input.effect != undefined && { effect: input.effect }),
    ...(input.principal != undefined && { principal: serializeAws_restJson1PrincipalList(input.principal, context) }),
    ...(input.statementId != undefined && { statementId: input.statementId }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.multipleValuesSetting != undefined && {
      multipleValuesSetting: serializeAws_restJson1MultipleValuesSetting(input.multipleValuesSetting, context),
    }),
    ...(input.obfuscationSetting != undefined && {
      obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
    }),
    ...(input.slotName != undefined && { slotName: input.slotName }),
    ...(input.slotTypeId != undefined && { slotTypeId: input.slotTypeId }),
    ...(input.valueElicitationSetting != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.externalSourceSetting != undefined && {
      externalSourceSetting: serializeAws_restJson1ExternalSourceSetting(input.externalSourceSetting, context),
    }),
    ...(input.parentSlotTypeSignature != undefined && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName != undefined && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues != undefined && {
      slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
    }),
    ...(input.valueSelectionSetting != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  const query: any = {
    ...(input.skipResourceInUseCheck !== undefined && {
      skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
    }),
  };
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
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  const query: any = {
    ...(input.skipResourceInUseCheck !== undefined && {
      skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
    }),
  };
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  const query: any = {
    ...(input.skipResourceInUseCheck !== undefined && {
      skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
    }),
  };
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.exportId !== undefined) {
    const labelValue: string = input.exportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: exportId.");
    }
    resolvedPath = resolvedPath.replace("{exportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: exportId.");
  }
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
  if (input.importId !== undefined) {
    const labelValue: string = input.importId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: importId.");
    }
    resolvedPath = resolvedPath.replace("{importId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: importId.");
  }
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
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
  };
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  if (input.statementId !== undefined) {
    const labelValue: string = input.statementId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: statementId.");
    }
    resolvedPath = resolvedPath.replace("{statementId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: statementId.");
  }
  const query: any = {
    ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
  };
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
  if (input.slotId !== undefined) {
    const labelValue: string = input.slotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: slotId.");
    }
    resolvedPath = resolvedPath.replace("{slotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: slotId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
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
  if (input.slotTypeId !== undefined) {
    const labelValue: string = input.slotTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: slotTypeId.");
    }
    resolvedPath = resolvedPath.replace("{slotTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: slotTypeId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  const query: any = {
    ...(input.skipResourceInUseCheck !== undefined && {
      skipResourceInUseCheck: input.skipResourceInUseCheck.toString(),
    }),
  };
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  const query: any = {
    ...(input.localeId !== undefined && { localeId: input.localeId }),
    ...(input.sessionId !== undefined && { sessionId: input.sessionId }),
  };
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
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
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.botRecommendationId !== undefined) {
    const labelValue: string = input.botRecommendationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botRecommendationId.");
    }
    resolvedPath = resolvedPath.replace("{botRecommendationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botRecommendationId.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.exportId !== undefined) {
    const labelValue: string = input.exportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: exportId.");
    }
    resolvedPath = resolvedPath.replace("{exportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: exportId.");
  }
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
  if (input.importId !== undefined) {
    const labelValue: string = input.importId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: importId.");
    }
    resolvedPath = resolvedPath.replace("{importId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: importId.");
  }
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
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
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
  if (input.slotId !== undefined) {
    const labelValue: string = input.slotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: slotId.");
    }
    resolvedPath = resolvedPath.replace("{slotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: slotId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
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
  if (input.slotTypeId !== undefined) {
    const labelValue: string = input.slotTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: slotTypeId.");
    }
    resolvedPath = resolvedPath.replace("{slotTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: slotTypeId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.aggregationDuration != undefined && {
      aggregationDuration: serializeAws_restJson1UtteranceAggregationDuration(input.aggregationDuration, context),
    }),
    ...(input.botAliasId != undefined && { botAliasId: input.botAliasId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.filters != undefined && {
      filters: serializeAws_restJson1AggregatedUtterancesFilters(input.filters, context),
    }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && {
      sortBy: serializeAws_restJson1AggregatedUtterancesSortBy(input.sortBy, context),
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

export const serializeAws_restJson1ListBotAliasesCommand = async (
  input: ListBotAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/bots/{botId}/botaliases";
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != undefined && { filters: serializeAws_restJson1BotLocaleFilters(input.filters, context) }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1BotLocaleSortBy(input.sortBy, context) }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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
    ...(input.filters != undefined && { filters: serializeAws_restJson1BotFilters(input.filters, context) }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1BotSortBy(input.sortBy, context) }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1BotVersionSortBy(input.sortBy, context) }),
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
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1BuiltInIntentSortBy(input.sortBy, context) }),
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
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1BuiltInSlotTypeSortBy(input.sortBy, context) }),
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
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.filters != undefined && { filters: serializeAws_restJson1ExportFilters(input.filters, context) }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1ExportSortBy(input.sortBy, context) }),
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
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.filters != undefined && { filters: serializeAws_restJson1ImportFilters(input.filters, context) }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1ImportSortBy(input.sortBy, context) }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != undefined && { filters: serializeAws_restJson1IntentFilters(input.filters, context) }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1IntentSortBy(input.sortBy, context) }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.botRecommendationId !== undefined) {
    const labelValue: string = input.botRecommendationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botRecommendationId.");
    }
    resolvedPath = resolvedPath.replace("{botRecommendationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botRecommendationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != undefined && { filters: serializeAws_restJson1SlotFilters(input.filters, context) }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1SlotSortBy(input.sortBy, context) }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != undefined && { filters: serializeAws_restJson1SlotTypeFilters(input.filters, context) }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextToken != undefined && { nextToken: input.nextToken }),
    ...(input.sortBy != undefined && { sortBy: serializeAws_restJson1SlotTypeSortBy(input.sortBy, context) }),
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
  if (input.resourceARN !== undefined) {
    const labelValue: string = input.resourceARN;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceARN.");
    }
    resolvedPath = resolvedPath.replace("{resourceARN}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceARN.");
  }
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.botRecommendationId !== undefined) {
    const labelValue: string = input.botRecommendationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botRecommendationId.");
    }
    resolvedPath = resolvedPath.replace("{botRecommendationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botRecommendationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filters != undefined && {
      filters: serializeAws_restJson1AssociatedTranscriptFilters(input.filters, context),
    }),
    ...(input.maxResults != undefined && { maxResults: input.maxResults }),
    ...(input.nextIndex != undefined && { nextIndex: input.nextIndex }),
    ...(input.searchOrder != undefined && { searchOrder: input.searchOrder }),
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionSetting != undefined && {
      encryptionSetting: serializeAws_restJson1EncryptionSetting(input.encryptionSetting, context),
    }),
    ...(input.transcriptSourceSetting != undefined && {
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
    ...(input.filePassword != undefined && { filePassword: input.filePassword }),
    ...(input.importId != undefined && { importId: input.importId }),
    ...(input.mergeStrategy != undefined && { mergeStrategy: input.mergeStrategy }),
    ...(input.resourceSpecification != undefined && {
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceARN}";
  if (input.resourceARN !== undefined) {
    const labelValue: string = input.resourceARN;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceARN.");
    }
    resolvedPath = resolvedPath.replace("{resourceARN}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceARN.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags != undefined && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  if (input.resourceARN !== undefined) {
    const labelValue: string = input.resourceARN;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceARN.");
    }
    resolvedPath = resolvedPath.replace("{resourceARN}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceARN.");
  }
  const query: any = {
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry as any) }),
  };
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.botName != undefined && { botName: input.botName }),
    ...(input.dataPrivacy != undefined && {
      dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context),
    }),
    ...(input.description != undefined && { description: input.description }),
    ...(input.idleSessionTTLInSeconds != undefined && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != undefined && { roleArn: input.roleArn }),
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
  if (input.botAliasId !== undefined) {
    const labelValue: string = input.botAliasId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAliasId.");
    }
    resolvedPath = resolvedPath.replace("{botAliasId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAliasId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.botAliasLocaleSettings != undefined && {
      botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
    }),
    ...(input.botAliasName != undefined && { botAliasName: input.botAliasName }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings != undefined && {
      conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
    }),
    ...(input.description != undefined && { description: input.description }),
    ...(input.sentimentAnalysisSettings != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.nluIntentConfidenceThreshold != undefined && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != undefined && {
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
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.botRecommendationId !== undefined) {
    const labelValue: string = input.botRecommendationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botRecommendationId.");
    }
    resolvedPath = resolvedPath.replace("{botRecommendationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botRecommendationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionSetting != undefined && {
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
  if (input.exportId !== undefined) {
    const labelValue: string = input.exportId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: exportId.");
    }
    resolvedPath = resolvedPath.replace("{exportId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: exportId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.filePassword != undefined && { filePassword: input.filePassword }),
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
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.dialogCodeHook != undefined && {
      dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
    }),
    ...(input.fulfillmentCodeHook != undefined && {
      fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
    }),
    ...(input.inputContexts != undefined && {
      inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
    }),
    ...(input.intentClosingSetting != undefined && {
      intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
    }),
    ...(input.intentConfirmationSetting != undefined && {
      intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(
        input.intentConfirmationSetting,
        context
      ),
    }),
    ...(input.intentName != undefined && { intentName: input.intentName }),
    ...(input.kendraConfiguration != undefined && {
      kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
    }),
    ...(input.outputContexts != undefined && {
      outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
    }),
    ...(input.parentIntentSignature != undefined && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances != undefined && {
      sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.slotPriorities != undefined && {
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
  if (input.resourceArn !== undefined) {
    const labelValue: string = input.resourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: resourceArn.");
    }
    resolvedPath = resolvedPath.replace("{resourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: resourceArn.");
  }
  const query: any = {
    ...(input.expectedRevisionId !== undefined && { expectedRevisionId: input.expectedRevisionId }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.policy != undefined && { policy: input.policy }),
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
  if (input.slotId !== undefined) {
    const labelValue: string = input.slotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: slotId.");
    }
    resolvedPath = resolvedPath.replace("{slotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: slotId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  if (input.intentId !== undefined) {
    const labelValue: string = input.intentId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: intentId.");
    }
    resolvedPath = resolvedPath.replace("{intentId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: intentId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.multipleValuesSetting != undefined && {
      multipleValuesSetting: serializeAws_restJson1MultipleValuesSetting(input.multipleValuesSetting, context),
    }),
    ...(input.obfuscationSetting != undefined && {
      obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
    }),
    ...(input.slotName != undefined && { slotName: input.slotName }),
    ...(input.slotTypeId != undefined && { slotTypeId: input.slotTypeId }),
    ...(input.valueElicitationSetting != undefined && {
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
  if (input.slotTypeId !== undefined) {
    const labelValue: string = input.slotTypeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: slotTypeId.");
    }
    resolvedPath = resolvedPath.replace("{slotTypeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: slotTypeId.");
  }
  if (input.botId !== undefined) {
    const labelValue: string = input.botId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botId.");
    }
    resolvedPath = resolvedPath.replace("{botId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botId.");
  }
  if (input.botVersion !== undefined) {
    const labelValue: string = input.botVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botVersion.");
    }
    resolvedPath = resolvedPath.replace("{botVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botVersion.");
  }
  if (input.localeId !== undefined) {
    const labelValue: string = input.localeId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: localeId.");
    }
    resolvedPath = resolvedPath.replace("{localeId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: localeId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.description != undefined && { description: input.description }),
    ...(input.externalSourceSetting != undefined && {
      externalSourceSetting: serializeAws_restJson1ExternalSourceSetting(input.externalSourceSetting, context),
    }),
    ...(input.parentSlotTypeSignature != undefined && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName != undefined && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues != undefined && {
      slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
    }),
    ...(input.valueSelectionSetting != undefined && {
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

export const deserializeAws_restJson1BuildBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1BuildBotLocaleCommandError(output, context);
  }
  const contents: BuildBotLocaleCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botLocaleStatus: undefined,
    botVersion: undefined,
    lastBuildSubmittedDateTime: undefined,
    localeId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.lastBuildSubmittedDateTime !== undefined && data.lastBuildSubmittedDateTime !== null) {
    contents.lastBuildSubmittedDateTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.lastBuildSubmittedDateTime))
    );
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BuildBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BuildBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotCommandError(output, context);
  }
  const contents: CreateBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botName: undefined,
    botStatus: undefined,
    botTags: undefined,
    creationDateTime: undefined,
    dataPrivacy: undefined,
    description: undefined,
    idleSessionTTLInSeconds: undefined,
    roleArn: undefined,
    testBotAliasTags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botTags !== undefined && data.botTags !== null) {
    contents.botTags = deserializeAws_restJson1TagMap(data.botTags, context);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  if (data.testBotAliasTags !== undefined && data.testBotAliasTags !== null) {
    contents.testBotAliasTags = deserializeAws_restJson1TagMap(data.testBotAliasTags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotAliasCommandError(output, context);
  }
  const contents: CreateBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAliasId: undefined,
    botAliasLocaleSettings: undefined,
    botAliasName: undefined,
    botAliasStatus: undefined,
    botId: undefined,
    botVersion: undefined,
    conversationLogSettings: undefined,
    creationDateTime: undefined,
    description: undefined,
    sentimentAnalysisSettings: undefined,
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
  }
  if (data.botAliasName !== undefined && data.botAliasName !== null) {
    contents.botAliasName = __expectString(data.botAliasName);
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.sentimentAnalysisSettings !== undefined && data.sentimentAnalysisSettings !== null) {
    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(
      data.sentimentAnalysisSettings,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotLocaleCommandError(output, context);
  }
  const contents: CreateBotLocaleCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botLocaleStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    localeId: undefined,
    localeName: undefined,
    nluIntentConfidenceThreshold: undefined,
    voiceSettings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.localeName !== undefined && data.localeName !== null) {
    contents.localeName = __expectString(data.localeName);
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.voiceSettings !== undefined && data.voiceSettings !== null) {
    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotVersionCommandError(output, context);
  }
  const contents: CreateBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botStatus: undefined,
    botVersion: undefined,
    botVersionLocaleSpecification: undefined,
    creationDateTime: undefined,
    description: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.botVersionLocaleSpecification !== undefined && data.botVersionLocaleSpecification !== null) {
    contents.botVersionLocaleSpecification = deserializeAws_restJson1BotVersionLocaleSpecification(
      data.botVersionLocaleSpecification,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateExportCommandError(output, context);
  }
  const contents: CreateExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationDateTime: undefined,
    exportId: undefined,
    exportStatus: undefined,
    fileFormat: undefined,
    resourceSpecification: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.exportId !== undefined && data.exportId !== null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus !== undefined && data.exportStatus !== null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.fileFormat !== undefined && data.fileFormat !== null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntentCommandError(output, context);
  }
  const contents: CreateIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    fulfillmentCodeHook: undefined,
    inputContexts: undefined,
    intentClosingSetting: undefined,
    intentConfirmationSetting: undefined,
    intentId: undefined,
    intentName: undefined,
    kendraConfiguration: undefined,
    localeId: undefined,
    outputContexts: undefined,
    parentIntentSignature: undefined,
    sampleUtterances: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook !== undefined && data.fulfillmentCodeHook !== null) {
    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(
      data.fulfillmentCodeHook,
      context
    );
  }
  if (data.inputContexts !== undefined && data.inputContexts !== null) {
    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting !== undefined && data.intentClosingSetting !== null) {
    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting !== undefined && data.intentConfirmationSetting !== null) {
    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(
      data.intentConfirmationSetting,
      context
    );
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourcePolicyCommandError(output, context);
  }
  const contents: CreateResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    resourceArn: undefined,
    revisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateResourcePolicyStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyStatementCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourcePolicyStatementCommandError(output, context);
  }
  const contents: CreateResourcePolicyStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    resourceArn: undefined,
    revisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateResourcePolicyStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourcePolicyStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSlotCommandError(output, context);
  }
  const contents: CreateSlotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    intentId: undefined,
    localeId: undefined,
    multipleValuesSetting: undefined,
    obfuscationSetting: undefined,
    slotId: undefined,
    slotName: undefined,
    slotTypeId: undefined,
    valueElicitationSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.multipleValuesSetting !== undefined && data.multipleValuesSetting !== null) {
    contents.multipleValuesSetting = deserializeAws_restJson1MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId !== undefined && data.slotId !== null) {
    contents.slotId = __expectString(data.slotId);
  }
  if (data.slotName !== undefined && data.slotName !== null) {
    contents.slotName = __expectString(data.slotName);
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.valueElicitationSetting !== undefined && data.valueElicitationSetting !== null) {
    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(
      data.valueElicitationSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSlotTypeCommandError(output, context);
  }
  const contents: CreateSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    externalSourceSetting: undefined,
    localeId: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeId: undefined,
    slotTypeName: undefined,
    slotTypeValues: undefined,
    valueSelectionSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting !== undefined && data.externalSourceSetting !== null) {
    contents.externalSourceSetting = deserializeAws_restJson1ExternalSourceSetting(data.externalSourceSetting, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
    contents.slotTypeName = __expectString(data.slotTypeName);
  }
  if (data.slotTypeValues !== undefined && data.slotTypeValues !== null) {
    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting !== undefined && data.valueSelectionSetting !== null) {
    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(
      data.valueSelectionSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateUploadUrlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadUrlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUploadUrlCommandError(output, context);
  }
  const contents: CreateUploadUrlCommandOutput = {
    $metadata: deserializeMetadata(output),
    importId: undefined,
    uploadUrl: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.uploadUrl !== undefined && data.uploadUrl !== null) {
    contents.uploadUrl = __expectString(data.uploadUrl);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateUploadUrlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUploadUrlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotCommandError(output, context);
  }
  const contents: DeleteBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botStatus: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotAliasCommandError(output, context);
  }
  const contents: DeleteBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAliasId: undefined,
    botAliasStatus: undefined,
    botId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotLocaleCommandError(output, context);
  }
  const contents: DeleteBotLocaleCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botLocaleStatus: undefined,
    botVersion: undefined,
    localeId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotVersionCommandError(output, context);
  }
  const contents: DeleteBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botStatus: undefined,
    botVersion: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteCustomVocabularyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVocabularyCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCustomVocabularyCommandError(output, context);
  }
  const contents: DeleteCustomVocabularyCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    customVocabularyStatus: undefined,
    localeId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.customVocabularyStatus !== undefined && data.customVocabularyStatus !== null) {
    contents.customVocabularyStatus = __expectString(data.customVocabularyStatus);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCustomVocabularyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCustomVocabularyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteExportCommandError(output, context);
  }
  const contents: DeleteExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    exportId: undefined,
    exportStatus: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.exportId !== undefined && data.exportId !== null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus !== undefined && data.exportStatus !== null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteImportCommandError(output, context);
  }
  const contents: DeleteImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    importId: undefined,
    importStatus: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus !== undefined && data.importStatus !== null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntentCommandError(output, context);
  }
  const contents: DeleteIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyCommandError(output, context);
  }
  const contents: DeleteResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    resourceArn: undefined,
    revisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteResourcePolicyStatementCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyStatementCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourcePolicyStatementCommandError(output, context);
  }
  const contents: DeleteResourcePolicyStatementCommandOutput = {
    $metadata: deserializeMetadata(output),
    resourceArn: undefined,
    revisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteResourcePolicyStatementCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyStatementCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotCommandError(output, context);
  }
  const contents: DeleteSlotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotTypeCommandError(output, context);
  }
  const contents: DeleteSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUtterancesCommandError(output, context);
  }
  const contents: DeleteUtterancesCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUtterancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotCommandError(output, context);
  }
  const contents: DescribeBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botName: undefined,
    botStatus: undefined,
    creationDateTime: undefined,
    dataPrivacy: undefined,
    description: undefined,
    idleSessionTTLInSeconds: undefined,
    lastUpdatedDateTime: undefined,
    roleArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotAliasCommandError(output, context);
  }
  const contents: DescribeBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAliasHistoryEvents: undefined,
    botAliasId: undefined,
    botAliasLocaleSettings: undefined,
    botAliasName: undefined,
    botAliasStatus: undefined,
    botId: undefined,
    botVersion: undefined,
    conversationLogSettings: undefined,
    creationDateTime: undefined,
    description: undefined,
    lastUpdatedDateTime: undefined,
    sentimentAnalysisSettings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasHistoryEvents !== undefined && data.botAliasHistoryEvents !== null) {
    contents.botAliasHistoryEvents = deserializeAws_restJson1BotAliasHistoryEventsList(
      data.botAliasHistoryEvents,
      context
    );
  }
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
  }
  if (data.botAliasName !== undefined && data.botAliasName !== null) {
    contents.botAliasName = __expectString(data.botAliasName);
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.sentimentAnalysisSettings !== undefined && data.sentimentAnalysisSettings !== null) {
    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(
      data.sentimentAnalysisSettings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotLocaleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotLocaleCommandError(output, context);
  }
  const contents: DescribeBotLocaleCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botLocaleHistoryEvents: undefined,
    botLocaleStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    failureReasons: undefined,
    intentsCount: undefined,
    lastBuildSubmittedDateTime: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    localeName: undefined,
    nluIntentConfidenceThreshold: undefined,
    recommendedActions: undefined,
    slotTypesCount: undefined,
    voiceSettings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleHistoryEvents !== undefined && data.botLocaleHistoryEvents !== null) {
    contents.botLocaleHistoryEvents = deserializeAws_restJson1BotLocaleHistoryEventsList(
      data.botLocaleHistoryEvents,
      context
    );
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.intentsCount !== undefined && data.intentsCount !== null) {
    contents.intentsCount = __expectInt32(data.intentsCount);
  }
  if (data.lastBuildSubmittedDateTime !== undefined && data.lastBuildSubmittedDateTime !== null) {
    contents.lastBuildSubmittedDateTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.lastBuildSubmittedDateTime))
    );
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.localeName !== undefined && data.localeName !== null) {
    contents.localeName = __expectString(data.localeName);
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.recommendedActions !== undefined && data.recommendedActions !== null) {
    contents.recommendedActions = deserializeAws_restJson1RecommendedActions(data.recommendedActions, context);
  }
  if (data.slotTypesCount !== undefined && data.slotTypesCount !== null) {
    contents.slotTypesCount = __expectInt32(data.slotTypesCount);
  }
  if (data.voiceSettings !== undefined && data.voiceSettings !== null) {
    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotRecommendationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotRecommendationCommandError(output, context);
  }
  const contents: DescribeBotRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botRecommendationId: undefined,
    botRecommendationResults: undefined,
    botRecommendationStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    encryptionSetting: undefined,
    failureReasons: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    transcriptSourceSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId !== undefined && data.botRecommendationId !== null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationResults !== undefined && data.botRecommendationResults !== null) {
    contents.botRecommendationResults = deserializeAws_restJson1BotRecommendationResults(
      data.botRecommendationResults,
      context
    );
  }
  if (data.botRecommendationStatus !== undefined && data.botRecommendationStatus !== null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.encryptionSetting !== undefined && data.encryptionSetting !== null) {
    contents.encryptionSetting = deserializeAws_restJson1EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting !== undefined && data.transcriptSourceSetting !== null) {
    contents.transcriptSourceSetting = deserializeAws_restJson1TranscriptSourceSetting(
      data.transcriptSourceSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBotVersionCommandError(output, context);
  }
  const contents: DescribeBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botName: undefined,
    botStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    dataPrivacy: undefined,
    description: undefined,
    failureReasons: undefined,
    idleSessionTTLInSeconds: undefined,
    roleArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBotVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBotVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeCustomVocabularyMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomVocabularyMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCustomVocabularyMetadataCommandError(output, context);
  }
  const contents: DescribeCustomVocabularyMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    customVocabularyStatus: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.customVocabularyStatus !== undefined && data.customVocabularyStatus !== null) {
    contents.customVocabularyStatus = __expectString(data.customVocabularyStatus);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCustomVocabularyMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomVocabularyMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeExportCommandError(output, context);
  }
  const contents: DescribeExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationDateTime: undefined,
    downloadUrl: undefined,
    exportId: undefined,
    exportStatus: undefined,
    failureReasons: undefined,
    fileFormat: undefined,
    lastUpdatedDateTime: undefined,
    resourceSpecification: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.downloadUrl !== undefined && data.downloadUrl !== null) {
    contents.downloadUrl = __expectString(data.downloadUrl);
  }
  if (data.exportId !== undefined && data.exportId !== null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus !== undefined && data.exportStatus !== null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.fileFormat !== undefined && data.fileFormat !== null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeImportCommandError(output, context);
  }
  const contents: DescribeImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationDateTime: undefined,
    failureReasons: undefined,
    importId: undefined,
    importStatus: undefined,
    importedResourceId: undefined,
    importedResourceName: undefined,
    lastUpdatedDateTime: undefined,
    mergeStrategy: undefined,
    resourceSpecification: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus !== undefined && data.importStatus !== null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  if (data.importedResourceId !== undefined && data.importedResourceId !== null) {
    contents.importedResourceId = __expectString(data.importedResourceId);
  }
  if (data.importedResourceName !== undefined && data.importedResourceName !== null) {
    contents.importedResourceName = __expectString(data.importedResourceName);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
    contents.mergeStrategy = __expectString(data.mergeStrategy);
  }
  if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
    contents.resourceSpecification = deserializeAws_restJson1ImportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIntentCommandError(output, context);
  }
  const contents: DescribeIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    fulfillmentCodeHook: undefined,
    inputContexts: undefined,
    intentClosingSetting: undefined,
    intentConfirmationSetting: undefined,
    intentId: undefined,
    intentName: undefined,
    kendraConfiguration: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    outputContexts: undefined,
    parentIntentSignature: undefined,
    sampleUtterances: undefined,
    slotPriorities: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook !== undefined && data.fulfillmentCodeHook !== null) {
    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(
      data.fulfillmentCodeHook,
      context
    );
  }
  if (data.inputContexts !== undefined && data.inputContexts !== null) {
    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting !== undefined && data.intentClosingSetting !== null) {
    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting !== undefined && data.intentConfirmationSetting !== null) {
    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(
      data.intentConfirmationSetting,
      context
    );
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
  }
  if (data.slotPriorities !== undefined && data.slotPriorities !== null) {
    contents.slotPriorities = deserializeAws_restJson1SlotPrioritiesList(data.slotPriorities, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResourcePolicyCommandError(output, context);
  }
  const contents: DescribeResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    policy: undefined,
    resourceArn: undefined,
    revisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = __expectString(data.policy);
  }
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSlotCommandError(output, context);
  }
  const contents: DescribeSlotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    intentId: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    multipleValuesSetting: undefined,
    obfuscationSetting: undefined,
    slotId: undefined,
    slotName: undefined,
    slotTypeId: undefined,
    valueElicitationSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.multipleValuesSetting !== undefined && data.multipleValuesSetting !== null) {
    contents.multipleValuesSetting = deserializeAws_restJson1MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId !== undefined && data.slotId !== null) {
    contents.slotId = __expectString(data.slotId);
  }
  if (data.slotName !== undefined && data.slotName !== null) {
    contents.slotName = __expectString(data.slotName);
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.valueElicitationSetting !== undefined && data.valueElicitationSetting !== null) {
    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(
      data.valueElicitationSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeSlotTypeCommandError(output, context);
  }
  const contents: DescribeSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    externalSourceSetting: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeId: undefined,
    slotTypeName: undefined,
    slotTypeValues: undefined,
    valueSelectionSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting !== undefined && data.externalSourceSetting !== null) {
    contents.externalSourceSetting = deserializeAws_restJson1ExternalSourceSetting(data.externalSourceSetting, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
    contents.slotTypeName = __expectString(data.slotTypeName);
  }
  if (data.slotTypeValues !== undefined && data.slotTypeValues !== null) {
    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting !== undefined && data.valueSelectionSetting !== null) {
    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(
      data.valueSelectionSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListAggregatedUtterancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregatedUtterancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAggregatedUtterancesCommandError(output, context);
  }
  const contents: ListAggregatedUtterancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    aggregatedUtterancesSummaries: undefined,
    aggregationDuration: undefined,
    aggregationLastRefreshedDateTime: undefined,
    aggregationWindowEndTime: undefined,
    aggregationWindowStartTime: undefined,
    botAliasId: undefined,
    botId: undefined,
    botVersion: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.aggregatedUtterancesSummaries !== undefined && data.aggregatedUtterancesSummaries !== null) {
    contents.aggregatedUtterancesSummaries = deserializeAws_restJson1AggregatedUtterancesSummaryList(
      data.aggregatedUtterancesSummaries,
      context
    );
  }
  if (data.aggregationDuration !== undefined && data.aggregationDuration !== null) {
    contents.aggregationDuration = deserializeAws_restJson1UtteranceAggregationDuration(
      data.aggregationDuration,
      context
    );
  }
  if (data.aggregationLastRefreshedDateTime !== undefined && data.aggregationLastRefreshedDateTime !== null) {
    contents.aggregationLastRefreshedDateTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.aggregationLastRefreshedDateTime))
    );
  }
  if (data.aggregationWindowEndTime !== undefined && data.aggregationWindowEndTime !== null) {
    contents.aggregationWindowEndTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.aggregationWindowEndTime))
    );
  }
  if (data.aggregationWindowStartTime !== undefined && data.aggregationWindowStartTime !== null) {
    contents.aggregationWindowStartTime = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.aggregationWindowStartTime))
    );
  }
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAggregatedUtterancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAggregatedUtterancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBotAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotAliasesCommandError(output, context);
  }
  const contents: ListBotAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAliasSummaries: undefined,
    botId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasSummaries !== undefined && data.botAliasSummaries !== null) {
    contents.botAliasSummaries = deserializeAws_restJson1BotAliasSummaryList(data.botAliasSummaries, context);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBotAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBotLocalesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotLocalesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotLocalesCommandError(output, context);
  }
  const contents: ListBotLocalesCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botLocaleSummaries: undefined,
    botVersion: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleSummaries !== undefined && data.botLocaleSummaries !== null) {
    contents.botLocaleSummaries = deserializeAws_restJson1BotLocaleSummaryList(data.botLocaleSummaries, context);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBotLocalesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotLocalesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBotRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotRecommendationsCommandError(output, context);
  }
  const contents: ListBotRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botRecommendationSummaries: undefined,
    botVersion: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationSummaries !== undefined && data.botRecommendationSummaries !== null) {
    contents.botRecommendationSummaries = deserializeAws_restJson1BotRecommendationSummaryList(
      data.botRecommendationSummaries,
      context
    );
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBotRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotsCommandError(output, context);
  }
  const contents: ListBotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botSummaries: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botSummaries !== undefined && data.botSummaries !== null) {
    contents.botSummaries = deserializeAws_restJson1BotSummaryList(data.botSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBotVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBotVersionsCommandError(output, context);
  }
  const contents: ListBotVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersionSummaries: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersionSummaries !== undefined && data.botVersionSummaries !== null) {
    contents.botVersionSummaries = deserializeAws_restJson1BotVersionSummaryList(data.botVersionSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBotVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBotVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBuiltInIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBuiltInIntentsCommandError(output, context);
  }
  const contents: ListBuiltInIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    builtInIntentSummaries: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.builtInIntentSummaries !== undefined && data.builtInIntentSummaries !== null) {
    contents.builtInIntentSummaries = deserializeAws_restJson1BuiltInIntentSummaryList(
      data.builtInIntentSummaries,
      context
    );
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBuiltInIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListBuiltInSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBuiltInSlotTypesCommandError(output, context);
  }
  const contents: ListBuiltInSlotTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    builtInSlotTypeSummaries: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.builtInSlotTypeSummaries !== undefined && data.builtInSlotTypeSummaries !== null) {
    contents.builtInSlotTypeSummaries = deserializeAws_restJson1BuiltInSlotTypeSummaryList(
      data.builtInSlotTypeSummaries,
      context
    );
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBuiltInSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBuiltInSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListExportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExportsCommandError(output, context);
  }
  const contents: ListExportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    exportSummaries: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.exportSummaries !== undefined && data.exportSummaries !== null) {
    contents.exportSummaries = deserializeAws_restJson1ExportSummaryList(data.exportSummaries, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListImportsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListImportsCommandError(output, context);
  }
  const contents: ListImportsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    importSummaries: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.importSummaries !== undefined && data.importSummaries !== null) {
    contents.importSummaries = deserializeAws_restJson1ImportSummaryList(data.importSummaries, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListImportsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListImportsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIntentsCommandError(output, context);
  }
  const contents: ListIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    intentSummaries: undefined,
    localeId: undefined,
    nextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.intentSummaries !== undefined && data.intentSummaries !== null) {
    contents.intentSummaries = deserializeAws_restJson1IntentSummaryList(data.intentSummaries, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListRecommendedIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendedIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecommendedIntentsCommandError(output, context);
  }
  const contents: ListRecommendedIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botRecommendationId: undefined,
    botVersion: undefined,
    localeId: undefined,
    nextToken: undefined,
    summaryList: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId !== undefined && data.botRecommendationId !== null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.summaryList !== undefined && data.summaryList !== null) {
    contents.summaryList = deserializeAws_restJson1RecommendedIntentSummaryList(data.summaryList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecommendedIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecommendedIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSlotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSlotsCommandError(output, context);
  }
  const contents: ListSlotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    intentId: undefined,
    localeId: undefined,
    nextToken: undefined,
    slotSummaries: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotSummaries !== undefined && data.slotSummaries !== null) {
    contents.slotSummaries = deserializeAws_restJson1SlotSummaryList(data.slotSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSlotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSlotTypesCommandError(output, context);
  }
  const contents: ListSlotTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    localeId: undefined,
    nextToken: undefined,
    slotTypeSummaries: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.slotTypeSummaries !== undefined && data.slotTypeSummaries !== null) {
    contents.slotTypeSummaries = deserializeAws_restJson1SlotTypeSummaryList(data.slotTypeSummaries, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1SearchAssociatedTranscriptsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAssociatedTranscriptsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchAssociatedTranscriptsCommandError(output, context);
  }
  const contents: SearchAssociatedTranscriptsCommandOutput = {
    $metadata: deserializeMetadata(output),
    associatedTranscripts: undefined,
    botId: undefined,
    botRecommendationId: undefined,
    botVersion: undefined,
    localeId: undefined,
    nextIndex: undefined,
    totalResults: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedTranscripts !== undefined && data.associatedTranscripts !== null) {
    contents.associatedTranscripts = deserializeAws_restJson1AssociatedTranscriptList(
      data.associatedTranscripts,
      context
    );
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId !== undefined && data.botRecommendationId !== null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.nextIndex !== undefined && data.nextIndex !== null) {
    contents.nextIndex = __expectInt32(data.nextIndex);
  }
  if (data.totalResults !== undefined && data.totalResults !== null) {
    contents.totalResults = __expectInt32(data.totalResults);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchAssociatedTranscriptsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchAssociatedTranscriptsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBotRecommendationCommandError(output, context);
  }
  const contents: StartBotRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botRecommendationId: undefined,
    botRecommendationStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    encryptionSetting: undefined,
    localeId: undefined,
    transcriptSourceSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId !== undefined && data.botRecommendationId !== null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationStatus !== undefined && data.botRecommendationStatus !== null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.encryptionSetting !== undefined && data.encryptionSetting !== null) {
    contents.encryptionSetting = deserializeAws_restJson1EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting !== undefined && data.transcriptSourceSetting !== null) {
    contents.transcriptSourceSetting = deserializeAws_restJson1TranscriptSourceSetting(
      data.transcriptSourceSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImportCommandError(output, context);
  }
  const contents: StartImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationDateTime: undefined,
    importId: undefined,
    importStatus: undefined,
    mergeStrategy: undefined,
    resourceSpecification: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = __expectString(data.importId);
  }
  if (data.importStatus !== undefined && data.importStatus !== null) {
    contents.importStatus = __expectString(data.importStatus);
  }
  if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
    contents.mergeStrategy = __expectString(data.mergeStrategy);
  }
  if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
    contents.resourceSpecification = deserializeAws_restJson1ImportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotCommandError(output, context);
  }
  const contents: UpdateBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botName: undefined,
    botStatus: undefined,
    creationDateTime: undefined,
    dataPrivacy: undefined,
    description: undefined,
    idleSessionTTLInSeconds: undefined,
    lastUpdatedDateTime: undefined,
    roleArn: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = __expectString(data.botName);
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = __expectString(data.botStatus);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = __expectInt32(data.idleSessionTTLInSeconds);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = __expectString(data.roleArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotAliasCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotAliasCommandError(output, context);
  }
  const contents: UpdateBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAliasId: undefined,
    botAliasLocaleSettings: undefined,
    botAliasName: undefined,
    botAliasStatus: undefined,
    botId: undefined,
    botVersion: undefined,
    conversationLogSettings: undefined,
    creationDateTime: undefined,
    description: undefined,
    lastUpdatedDateTime: undefined,
    sentimentAnalysisSettings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = __expectString(data.botAliasId);
  }
  if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
  }
  if (data.botAliasName !== undefined && data.botAliasName !== null) {
    contents.botAliasName = __expectString(data.botAliasName);
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = __expectString(data.botAliasStatus);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.sentimentAnalysisSettings !== undefined && data.sentimentAnalysisSettings !== null) {
    contents.sentimentAnalysisSettings = deserializeAws_restJson1SentimentAnalysisSettings(
      data.sentimentAnalysisSettings,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateBotLocaleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotLocaleCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotLocaleCommandError(output, context);
  }
  const contents: UpdateBotLocaleCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botLocaleStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    failureReasons: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    localeName: undefined,
    nluIntentConfidenceThreshold: undefined,
    recommendedActions: undefined,
    voiceSettings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = __expectString(data.botLocaleStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.localeName !== undefined && data.localeName !== null) {
    contents.localeName = __expectString(data.localeName);
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = __limitedParseDouble(data.nluIntentConfidenceThreshold);
  }
  if (data.recommendedActions !== undefined && data.recommendedActions !== null) {
    contents.recommendedActions = deserializeAws_restJson1RecommendedActions(data.recommendedActions, context);
  }
  if (data.voiceSettings !== undefined && data.voiceSettings !== null) {
    contents.voiceSettings = deserializeAws_restJson1VoiceSettings(data.voiceSettings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBotLocaleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotLocaleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateBotRecommendationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotRecommendationCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBotRecommendationCommandError(output, context);
  }
  const contents: UpdateBotRecommendationCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botRecommendationId: undefined,
    botRecommendationStatus: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    encryptionSetting: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    transcriptSourceSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botRecommendationId !== undefined && data.botRecommendationId !== null) {
    contents.botRecommendationId = __expectString(data.botRecommendationId);
  }
  if (data.botRecommendationStatus !== undefined && data.botRecommendationStatus !== null) {
    contents.botRecommendationStatus = __expectString(data.botRecommendationStatus);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.encryptionSetting !== undefined && data.encryptionSetting !== null) {
    contents.encryptionSetting = deserializeAws_restJson1EncryptionSetting(data.encryptionSetting, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.transcriptSourceSetting !== undefined && data.transcriptSourceSetting !== null) {
    contents.transcriptSourceSetting = deserializeAws_restJson1TranscriptSourceSetting(
      data.transcriptSourceSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBotRecommendationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBotRecommendationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExportCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateExportCommandError(output, context);
  }
  const contents: UpdateExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    creationDateTime: undefined,
    exportId: undefined,
    exportStatus: undefined,
    fileFormat: undefined,
    lastUpdatedDateTime: undefined,
    resourceSpecification: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.exportId !== undefined && data.exportId !== null) {
    contents.exportId = __expectString(data.exportId);
  }
  if (data.exportStatus !== undefined && data.exportStatus !== null) {
    contents.exportStatus = __expectString(data.exportStatus);
  }
  if (data.fileFormat !== undefined && data.fileFormat !== null) {
    contents.fileFormat = __expectString(data.fileFormat);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.resourceSpecification !== undefined && data.resourceSpecification !== null) {
    contents.resourceSpecification = deserializeAws_restJson1ExportResourceSpecification(
      data.resourceSpecification,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateIntentCommandError(output, context);
  }
  const contents: UpdateIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    fulfillmentCodeHook: undefined,
    inputContexts: undefined,
    intentClosingSetting: undefined,
    intentConfirmationSetting: undefined,
    intentId: undefined,
    intentName: undefined,
    kendraConfiguration: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    outputContexts: undefined,
    parentIntentSignature: undefined,
    sampleUtterances: undefined,
    slotPriorities: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1DialogCodeHookSettings(data.dialogCodeHook, context);
  }
  if (data.fulfillmentCodeHook !== undefined && data.fulfillmentCodeHook !== null) {
    contents.fulfillmentCodeHook = deserializeAws_restJson1FulfillmentCodeHookSettings(
      data.fulfillmentCodeHook,
      context
    );
  }
  if (data.inputContexts !== undefined && data.inputContexts !== null) {
    contents.inputContexts = deserializeAws_restJson1InputContextsList(data.inputContexts, context);
  }
  if (data.intentClosingSetting !== undefined && data.intentClosingSetting !== null) {
    contents.intentClosingSetting = deserializeAws_restJson1IntentClosingSetting(data.intentClosingSetting, context);
  }
  if (data.intentConfirmationSetting !== undefined && data.intentConfirmationSetting !== null) {
    contents.intentConfirmationSetting = deserializeAws_restJson1IntentConfirmationSetting(
      data.intentConfirmationSetting,
      context
    );
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = __expectString(data.intentName);
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = __expectString(data.parentIntentSignature);
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1SampleUtterancesList(data.sampleUtterances, context);
  }
  if (data.slotPriorities !== undefined && data.slotPriorities !== null) {
    contents.slotPriorities = deserializeAws_restJson1SlotPrioritiesList(data.slotPriorities, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourcePolicyCommandError(output, context);
  }
  const contents: UpdateResourcePolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    resourceArn: undefined,
    revisionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resourceArn !== undefined && data.resourceArn !== null) {
    contents.resourceArn = __expectString(data.resourceArn);
  }
  if (data.revisionId !== undefined && data.revisionId !== null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateResourcePolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourcePolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSlotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSlotCommandError(output, context);
  }
  const contents: UpdateSlotCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    intentId: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    multipleValuesSetting: undefined,
    obfuscationSetting: undefined,
    slotId: undefined,
    slotName: undefined,
    slotTypeId: undefined,
    valueElicitationSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = __expectString(data.intentId);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.multipleValuesSetting !== undefined && data.multipleValuesSetting !== null) {
    contents.multipleValuesSetting = deserializeAws_restJson1MultipleValuesSetting(data.multipleValuesSetting, context);
  }
  if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId !== undefined && data.slotId !== null) {
    contents.slotId = __expectString(data.slotId);
  }
  if (data.slotName !== undefined && data.slotName !== null) {
    contents.slotName = __expectString(data.slotName);
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.valueElicitationSetting !== undefined && data.valueElicitationSetting !== null) {
    contents.valueElicitationSetting = deserializeAws_restJson1SlotValueElicitationSetting(
      data.valueElicitationSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSlotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotTypeCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSlotTypeCommandError(output, context);
  }
  const contents: UpdateSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    botId: undefined,
    botVersion: undefined,
    creationDateTime: undefined,
    description: undefined,
    externalSourceSetting: undefined,
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeId: undefined,
    slotTypeName: undefined,
    slotTypeValues: undefined,
    valueSelectionSetting: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = __expectString(data.botId);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = __expectString(data.botVersion);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationDateTime)));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = __expectString(data.description);
  }
  if (data.externalSourceSetting !== undefined && data.externalSourceSetting !== null) {
    contents.externalSourceSetting = deserializeAws_restJson1ExternalSourceSetting(data.externalSourceSetting, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.lastUpdatedDateTime)));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = __expectString(data.localeId);
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = __expectString(data.parentSlotTypeSignature);
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = __expectString(data.slotTypeId);
  }
  if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
    contents.slotTypeName = __expectString(data.slotTypeName);
  }
  if (data.slotTypeValues !== undefined && data.slotTypeValues !== null) {
    contents.slotTypeValues = deserializeAws_restJson1SlotTypeValues(data.slotTypeValues, context);
  }
  if (data.valueSelectionSetting !== undefined && data.valueSelectionSetting !== null) {
    contents.valueSelectionSetting = deserializeAws_restJson1SlotValueSelectionSetting(
      data.valueSelectionSetting,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
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
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
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
    ...(input.audioRecognitionStrategy != undefined && { audioRecognitionStrategy: input.audioRecognitionStrategy }),
  };
};

const serializeAws_restJson1AggregatedUtterancesFilter = (
  input: AggregatedUtterancesFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1AggregatedUtterancesFilters = (
  input: AggregatedUtterancesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AggregatedUtterancesFilter(entry, context);
    });
};

const serializeAws_restJson1AggregatedUtterancesSortBy = (
  input: AggregatedUtterancesSortBy,
  context: __SerdeContext
): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1AssociatedTranscriptFilter = (
  input: AssociatedTranscriptFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1AssociatedTranscriptFilters = (
  input: AssociatedTranscriptFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AssociatedTranscriptFilter(entry, context);
    });
};

const serializeAws_restJson1AudioLogDestination = (input: AudioLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket != undefined && {
      s3Bucket: serializeAws_restJson1S3BucketLogDestination(input.s3Bucket, context),
    }),
  };
};

const serializeAws_restJson1AudioLogSetting = (input: AudioLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination != undefined && {
      destination: serializeAws_restJson1AudioLogDestination(input.destination, context),
    }),
    ...(input.enabled != undefined && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1AudioLogSettingsList = (input: AudioLogSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AudioLogSetting(entry, context);
    });
};

const serializeAws_restJson1BotAliasLocaleSettings = (input: BotAliasLocaleSettings, context: __SerdeContext): any => {
  return {
    ...(input.codeHookSpecification != undefined && {
      codeHookSpecification: serializeAws_restJson1CodeHookSpecification(input.codeHookSpecification, context),
    }),
    ...(input.enabled != undefined && { enabled: input.enabled }),
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
    return {
      ...acc,
      [key]: serializeAws_restJson1BotAliasLocaleSettings(value, context),
    };
  }, {});
};

const serializeAws_restJson1BotExportSpecification = (input: BotExportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
  };
};

const serializeAws_restJson1BotFilter = (input: BotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1BotFilters = (input: BotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BotFilter(entry, context);
    });
};

const serializeAws_restJson1BotImportSpecification = (input: BotImportSpecification, context: __SerdeContext): any => {
  return {
    ...(input.botName != undefined && { botName: input.botName }),
    ...(input.botTags != undefined && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
    ...(input.dataPrivacy != undefined && {
      dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context),
    }),
    ...(input.idleSessionTTLInSeconds != undefined && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn != undefined && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags != undefined && {
      testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
    }),
  };
};

const serializeAws_restJson1BotLocaleExportSpecification = (
  input: BotLocaleExportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
  };
};

const serializeAws_restJson1BotLocaleFilter = (input: BotLocaleFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1BotLocaleFilters = (input: BotLocaleFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BotLocaleFilter(entry, context);
    });
};

const serializeAws_restJson1BotLocaleImportSpecification = (
  input: BotLocaleImportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
    ...(input.nluIntentConfidenceThreshold != undefined && {
      nluIntentConfidenceThreshold: __serializeFloat(input.nluIntentConfidenceThreshold),
    }),
    ...(input.voiceSettings != undefined && {
      voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
    }),
  };
};

const serializeAws_restJson1BotLocaleSortBy = (input: BotLocaleSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1BotSortBy = (input: BotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1BotVersionLocaleDetails = (
  input: BotVersionLocaleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourceBotVersion != undefined && { sourceBotVersion: input.sourceBotVersion }),
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
    return {
      ...acc,
      [key]: serializeAws_restJson1BotVersionLocaleDetails(value, context),
    };
  }, {});
};

const serializeAws_restJson1BotVersionSortBy = (input: BotVersionSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1BuiltInIntentSortBy = (input: BuiltInIntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1BuiltInSlotTypeSortBy = (input: BuiltInSlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text != undefined && { text: input.text }),
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1ButtonsList = (input: Button[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Button(entry, context);
    });
};

const serializeAws_restJson1CloudWatchLogGroupLogDestination = (
  input: CloudWatchLogGroupLogDestination,
  context: __SerdeContext
): any => {
  return {
    ...(input.cloudWatchLogGroupArn != undefined && { cloudWatchLogGroupArn: input.cloudWatchLogGroupArn }),
    ...(input.logPrefix != undefined && { logPrefix: input.logPrefix }),
  };
};

const serializeAws_restJson1CodeHookSpecification = (input: CodeHookSpecification, context: __SerdeContext): any => {
  return {
    ...(input.lambdaCodeHook != undefined && {
      lambdaCodeHook: serializeAws_restJson1LambdaCodeHook(input.lambdaCodeHook, context),
    }),
  };
};

const serializeAws_restJson1ConditionKeyValueMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
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
    return {
      ...acc,
      [key]: serializeAws_restJson1ConditionKeyValueMap(value, context),
    };
  }, {});
};

const serializeAws_restJson1ConversationLogSettings = (
  input: ConversationLogSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.audioLogSettings != undefined && {
      audioLogSettings: serializeAws_restJson1AudioLogSettingsList(input.audioLogSettings, context),
    }),
    ...(input.textLogSettings != undefined && {
      textLogSettings: serializeAws_restJson1TextLogSettingsList(input.textLogSettings, context),
    }),
  };
};

const serializeAws_restJson1CustomPayload = (input: CustomPayload, context: __SerdeContext): any => {
  return {
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1CustomVocabularyExportSpecification = (
  input: CustomVocabularyExportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
  };
};

const serializeAws_restJson1CustomVocabularyImportSpecification = (
  input: CustomVocabularyImportSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botId != undefined && { botId: input.botId }),
    ...(input.botVersion != undefined && { botVersion: input.botVersion }),
    ...(input.localeId != undefined && { localeId: input.localeId }),
  };
};

const serializeAws_restJson1DataPrivacy = (input: DataPrivacy, context: __SerdeContext): any => {
  return {
    ...(input.childDirected != undefined && { childDirected: input.childDirected }),
  };
};

const serializeAws_restJson1DateRangeFilter = (input: DateRangeFilter, context: __SerdeContext): any => {
  return {
    ...(input.endDateTime != undefined && { endDateTime: Math.round(input.endDateTime.getTime() / 1000) }),
    ...(input.startDateTime != undefined && { startDateTime: Math.round(input.startDateTime.getTime() / 1000) }),
  };
};

const serializeAws_restJson1DialogCodeHookSettings = (input: DialogCodeHookSettings, context: __SerdeContext): any => {
  return {
    ...(input.enabled != undefined && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1EncryptionSetting = (input: EncryptionSetting, context: __SerdeContext): any => {
  return {
    ...(input.associatedTranscriptsPassword != undefined && {
      associatedTranscriptsPassword: input.associatedTranscriptsPassword,
    }),
    ...(input.botLocaleExportPassword != undefined && { botLocaleExportPassword: input.botLocaleExportPassword }),
    ...(input.kmsKeyArn != undefined && { kmsKeyArn: input.kmsKeyArn }),
  };
};

const serializeAws_restJson1ExportFilter = (input: ExportFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1ExportFilters = (input: ExportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ExportFilter(entry, context);
    });
};

const serializeAws_restJson1ExportResourceSpecification = (
  input: ExportResourceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botExportSpecification != undefined && {
      botExportSpecification: serializeAws_restJson1BotExportSpecification(input.botExportSpecification, context),
    }),
    ...(input.botLocaleExportSpecification != undefined && {
      botLocaleExportSpecification: serializeAws_restJson1BotLocaleExportSpecification(
        input.botLocaleExportSpecification,
        context
      ),
    }),
    ...(input.customVocabularyExportSpecification != undefined && {
      customVocabularyExportSpecification: serializeAws_restJson1CustomVocabularyExportSpecification(
        input.customVocabularyExportSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ExportSortBy = (input: ExportSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1ExternalSourceSetting = (input: ExternalSourceSetting, context: __SerdeContext): any => {
  return {
    ...(input.grammarSlotTypeSetting != undefined && {
      grammarSlotTypeSetting: serializeAws_restJson1GrammarSlotTypeSetting(input.grammarSlotTypeSetting, context),
    }),
  };
};

const serializeAws_restJson1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1FulfillmentCodeHookSettings = (
  input: FulfillmentCodeHookSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.enabled != undefined && { enabled: input.enabled }),
    ...(input.fulfillmentUpdatesSpecification != undefined && {
      fulfillmentUpdatesSpecification: serializeAws_restJson1FulfillmentUpdatesSpecification(
        input.fulfillmentUpdatesSpecification,
        context
      ),
    }),
    ...(input.postFulfillmentStatusSpecification != undefined && {
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
    ...(input.allowInterrupt != undefined && { allowInterrupt: input.allowInterrupt }),
    ...(input.delayInSeconds != undefined && { delayInSeconds: input.delayInSeconds }),
    ...(input.messageGroups != undefined && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
  };
};

const serializeAws_restJson1FulfillmentUpdateResponseSpecification = (
  input: FulfillmentUpdateResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != undefined && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds != undefined && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups != undefined && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
  };
};

const serializeAws_restJson1FulfillmentUpdatesSpecification = (
  input: FulfillmentUpdatesSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != undefined && { active: input.active }),
    ...(input.startResponse != undefined && {
      startResponse: serializeAws_restJson1FulfillmentStartResponseSpecification(input.startResponse, context),
    }),
    ...(input.timeoutInSeconds != undefined && { timeoutInSeconds: input.timeoutInSeconds }),
    ...(input.updateResponse != undefined && {
      updateResponse: serializeAws_restJson1FulfillmentUpdateResponseSpecification(input.updateResponse, context),
    }),
  };
};

const serializeAws_restJson1GrammarSlotTypeSetting = (input: GrammarSlotTypeSetting, context: __SerdeContext): any => {
  return {
    ...(input.source != undefined && { source: serializeAws_restJson1GrammarSlotTypeSource(input.source, context) }),
  };
};

const serializeAws_restJson1GrammarSlotTypeSource = (input: GrammarSlotTypeSource, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != undefined && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.s3BucketName != undefined && { s3BucketName: input.s3BucketName }),
    ...(input.s3ObjectKey != undefined && { s3ObjectKey: input.s3ObjectKey }),
  };
};

const serializeAws_restJson1ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons != undefined && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
    ...(input.imageUrl != undefined && { imageUrl: input.imageUrl }),
    ...(input.subtitle != undefined && { subtitle: input.subtitle }),
    ...(input.title != undefined && { title: input.title }),
  };
};

const serializeAws_restJson1ImportFilter = (input: ImportFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1ImportFilters = (input: ImportFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1ImportFilter(entry, context);
    });
};

const serializeAws_restJson1ImportResourceSpecification = (
  input: ImportResourceSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.botImportSpecification != undefined && {
      botImportSpecification: serializeAws_restJson1BotImportSpecification(input.botImportSpecification, context),
    }),
    ...(input.botLocaleImportSpecification != undefined && {
      botLocaleImportSpecification: serializeAws_restJson1BotLocaleImportSpecification(
        input.botLocaleImportSpecification,
        context
      ),
    }),
    ...(input.customVocabularyImportSpecification != undefined && {
      customVocabularyImportSpecification: serializeAws_restJson1CustomVocabularyImportSpecification(
        input.customVocabularyImportSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1ImportSortBy = (input: ImportSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1InputContext = (input: InputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
  };
};

const serializeAws_restJson1InputContextsList = (input: InputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InputContext(entry, context);
    });
};

const serializeAws_restJson1IntentClosingSetting = (input: IntentClosingSetting, context: __SerdeContext): any => {
  return {
    ...(input.active != undefined && { active: input.active }),
    ...(input.closingResponse != undefined && {
      closingResponse: serializeAws_restJson1ResponseSpecification(input.closingResponse, context),
    }),
  };
};

const serializeAws_restJson1IntentConfirmationSetting = (
  input: IntentConfirmationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != undefined && { active: input.active }),
    ...(input.declinationResponse != undefined && {
      declinationResponse: serializeAws_restJson1ResponseSpecification(input.declinationResponse, context),
    }),
    ...(input.promptSpecification != undefined && {
      promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    }),
  };
};

const serializeAws_restJson1IntentFilter = (input: IntentFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1IntentFilters = (input: IntentFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1IntentFilter(entry, context);
    });
};

const serializeAws_restJson1IntentSortBy = (input: IntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1KendraConfiguration = (input: KendraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kendraIndex != undefined && { kendraIndex: input.kendraIndex }),
    ...(input.queryFilterString != undefined && { queryFilterString: input.queryFilterString }),
    ...(input.queryFilterStringEnabled != undefined && { queryFilterStringEnabled: input.queryFilterStringEnabled }),
  };
};

const serializeAws_restJson1LambdaCodeHook = (input: LambdaCodeHook, context: __SerdeContext): any => {
  return {
    ...(input.codeHookInterfaceVersion != undefined && { codeHookInterfaceVersion: input.codeHookInterfaceVersion }),
    ...(input.lambdaARN != undefined && { lambdaARN: input.lambdaARN }),
  };
};

const serializeAws_restJson1LexTranscriptFilter = (input: LexTranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.dateRangeFilter != undefined && {
      dateRangeFilter: serializeAws_restJson1DateRangeFilter(input.dateRangeFilter, context),
    }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.customPayload != undefined && {
      customPayload: serializeAws_restJson1CustomPayload(input.customPayload, context),
    }),
    ...(input.imageResponseCard != undefined && {
      imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
    }),
    ...(input.plainTextMessage != undefined && {
      plainTextMessage: serializeAws_restJson1PlainTextMessage(input.plainTextMessage, context),
    }),
    ...(input.ssmlMessage != undefined && {
      ssmlMessage: serializeAws_restJson1SSMLMessage(input.ssmlMessage, context),
    }),
  };
};

const serializeAws_restJson1MessageGroup = (input: MessageGroup, context: __SerdeContext): any => {
  return {
    ...(input.message != undefined && { message: serializeAws_restJson1Message(input.message, context) }),
    ...(input.variations != undefined && {
      variations: serializeAws_restJson1MessageVariationsList(input.variations, context),
    }),
  };
};

const serializeAws_restJson1MessageGroupsList = (input: MessageGroup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1MessageGroup(entry, context);
    });
};

const serializeAws_restJson1MessageVariationsList = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1MultipleValuesSetting = (input: MultipleValuesSetting, context: __SerdeContext): any => {
  return {
    ...(input.allowMultipleValues != undefined && { allowMultipleValues: input.allowMultipleValues }),
  };
};

const serializeAws_restJson1ObfuscationSetting = (input: ObfuscationSetting, context: __SerdeContext): any => {
  return {
    ...(input.obfuscationSettingType != undefined && { obfuscationSettingType: input.obfuscationSettingType }),
  };
};

const serializeAws_restJson1ObjectPrefixes = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OperationList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OutputContext = (input: OutputContext, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.timeToLiveInSeconds != undefined && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive != undefined && { turnsToLive: input.turnsToLive }),
  };
};

const serializeAws_restJson1OutputContextsList = (input: OutputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1OutputContext(entry, context);
    });
};

const serializeAws_restJson1PathFormat = (input: PathFormat, context: __SerdeContext): any => {
  return {
    ...(input.objectPrefixes != undefined && {
      objectPrefixes: serializeAws_restJson1ObjectPrefixes(input.objectPrefixes, context),
    }),
  };
};

const serializeAws_restJson1PlainTextMessage = (input: PlainTextMessage, context: __SerdeContext): any => {
  return {
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1PostFulfillmentStatusSpecification = (
  input: PostFulfillmentStatusSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.failureResponse != undefined && {
      failureResponse: serializeAws_restJson1ResponseSpecification(input.failureResponse, context),
    }),
    ...(input.successResponse != undefined && {
      successResponse: serializeAws_restJson1ResponseSpecification(input.successResponse, context),
    }),
    ...(input.timeoutResponse != undefined && {
      timeoutResponse: serializeAws_restJson1ResponseSpecification(input.timeoutResponse, context),
    }),
  };
};

const serializeAws_restJson1Principal = (input: Principal, context: __SerdeContext): any => {
  return {
    ...(input.arn != undefined && { arn: input.arn }),
    ...(input.service != undefined && { service: input.service }),
  };
};

const serializeAws_restJson1PrincipalList = (input: Principal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Principal(entry, context);
    });
};

const serializeAws_restJson1PromptSpecification = (input: PromptSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != undefined && { allowInterrupt: input.allowInterrupt }),
    ...(input.maxRetries != undefined && { maxRetries: input.maxRetries }),
    ...(input.messageGroups != undefined && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
    ...(input.messageSelectionStrategy != undefined && { messageSelectionStrategy: input.messageSelectionStrategy }),
  };
};

const serializeAws_restJson1RelativeAggregationDuration = (
  input: RelativeAggregationDuration,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeDimension != undefined && { timeDimension: input.timeDimension }),
    ...(input.timeValue != undefined && { timeValue: input.timeValue }),
  };
};

const serializeAws_restJson1ResponseSpecification = (input: ResponseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt != undefined && { allowInterrupt: input.allowInterrupt }),
    ...(input.messageGroups != undefined && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
  };
};

const serializeAws_restJson1S3BucketLogDestination = (input: S3BucketLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn != undefined && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.logPrefix != undefined && { logPrefix: input.logPrefix }),
    ...(input.s3BucketArn != undefined && { s3BucketArn: input.s3BucketArn }),
  };
};

const serializeAws_restJson1S3BucketTranscriptSource = (
  input: S3BucketTranscriptSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.kmsKeyArn != undefined && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.pathFormat != undefined && { pathFormat: serializeAws_restJson1PathFormat(input.pathFormat, context) }),
    ...(input.s3BucketName != undefined && { s3BucketName: input.s3BucketName }),
    ...(input.transcriptFilter != undefined && {
      transcriptFilter: serializeAws_restJson1TranscriptFilter(input.transcriptFilter, context),
    }),
    ...(input.transcriptFormat != undefined && { transcriptFormat: input.transcriptFormat }),
  };
};

const serializeAws_restJson1SampleUtterance = (input: SampleUtterance, context: __SerdeContext): any => {
  return {
    ...(input.utterance != undefined && { utterance: input.utterance }),
  };
};

const serializeAws_restJson1SampleUtterancesList = (input: SampleUtterance[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SampleUtterance(entry, context);
    });
};

const serializeAws_restJson1SampleValue = (input: SampleValue, context: __SerdeContext): any => {
  return {
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1SentimentAnalysisSettings = (
  input: SentimentAnalysisSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectSentiment != undefined && { detectSentiment: input.detectSentiment }),
  };
};

const serializeAws_restJson1SlotDefaultValue = (input: SlotDefaultValue, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue != undefined && { defaultValue: input.defaultValue }),
  };
};

const serializeAws_restJson1SlotDefaultValueList = (input: SlotDefaultValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SlotDefaultValue(entry, context);
    });
};

const serializeAws_restJson1SlotDefaultValueSpecification = (
  input: SlotDefaultValueSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValueList != undefined && {
      defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
    }),
  };
};

const serializeAws_restJson1SlotFilter = (input: SlotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1SlotFilters = (input: SlotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SlotFilter(entry, context);
    });
};

const serializeAws_restJson1SlotPrioritiesList = (input: SlotPriority[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SlotPriority(entry, context);
    });
};

const serializeAws_restJson1SlotPriority = (input: SlotPriority, context: __SerdeContext): any => {
  return {
    ...(input.priority != undefined && { priority: input.priority }),
    ...(input.slotId != undefined && { slotId: input.slotId }),
  };
};

const serializeAws_restJson1SlotSortBy = (input: SlotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1SlotTypeFilter = (input: SlotTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.name != undefined && { name: input.name }),
    ...(input.operator != undefined && { operator: input.operator }),
    ...(input.values != undefined && { values: serializeAws_restJson1FilterValues(input.values, context) }),
  };
};

const serializeAws_restJson1SlotTypeFilters = (input: SlotTypeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SlotTypeFilter(entry, context);
    });
};

const serializeAws_restJson1SlotTypeSortBy = (input: SlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute != undefined && { attribute: input.attribute }),
    ...(input.order != undefined && { order: input.order }),
  };
};

const serializeAws_restJson1SlotTypeValue = (input: SlotTypeValue, context: __SerdeContext): any => {
  return {
    ...(input.sampleValue != undefined && {
      sampleValue: serializeAws_restJson1SampleValue(input.sampleValue, context),
    }),
    ...(input.synonyms != undefined && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }),
  };
};

const serializeAws_restJson1SlotTypeValues = (input: SlotTypeValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SlotTypeValue(entry, context);
    });
};

const serializeAws_restJson1SlotValueElicitationSetting = (
  input: SlotValueElicitationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.defaultValueSpecification != undefined && {
      defaultValueSpecification: serializeAws_restJson1SlotDefaultValueSpecification(
        input.defaultValueSpecification,
        context
      ),
    }),
    ...(input.promptSpecification != undefined && {
      promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
    }),
    ...(input.sampleUtterances != undefined && {
      sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
    }),
    ...(input.slotConstraint != undefined && { slotConstraint: input.slotConstraint }),
    ...(input.waitAndContinueSpecification != undefined && {
      waitAndContinueSpecification: serializeAws_restJson1WaitAndContinueSpecification(
        input.waitAndContinueSpecification,
        context
      ),
    }),
  };
};

const serializeAws_restJson1SlotValueRegexFilter = (input: SlotValueRegexFilter, context: __SerdeContext): any => {
  return {
    ...(input.pattern != undefined && { pattern: input.pattern }),
  };
};

const serializeAws_restJson1SlotValueSelectionSetting = (
  input: SlotValueSelectionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.advancedRecognitionSetting != undefined && {
      advancedRecognitionSetting: serializeAws_restJson1AdvancedRecognitionSetting(
        input.advancedRecognitionSetting,
        context
      ),
    }),
    ...(input.regexFilter != undefined && {
      regexFilter: serializeAws_restJson1SlotValueRegexFilter(input.regexFilter, context),
    }),
    ...(input.resolutionStrategy != undefined && { resolutionStrategy: input.resolutionStrategy }),
  };
};

const serializeAws_restJson1SSMLMessage = (input: SSMLMessage, context: __SerdeContext): any => {
  return {
    ...(input.value != undefined && { value: input.value }),
  };
};

const serializeAws_restJson1StillWaitingResponseSpecification = (
  input: StillWaitingResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt != undefined && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds != undefined && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups != undefined && {
      messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
    }),
    ...(input.timeoutInSeconds != undefined && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1SynonymList = (input: SampleValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SampleValue(entry, context);
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TextLogDestination = (input: TextLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.cloudWatch != undefined && {
      cloudWatch: serializeAws_restJson1CloudWatchLogGroupLogDestination(input.cloudWatch, context),
    }),
  };
};

const serializeAws_restJson1TextLogSetting = (input: TextLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination != undefined && {
      destination: serializeAws_restJson1TextLogDestination(input.destination, context),
    }),
    ...(input.enabled != undefined && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1TextLogSettingsList = (input: TextLogSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1TextLogSetting(entry, context);
    });
};

const serializeAws_restJson1TranscriptFilter = (input: TranscriptFilter, context: __SerdeContext): any => {
  return {
    ...(input.lexTranscriptFilter != undefined && {
      lexTranscriptFilter: serializeAws_restJson1LexTranscriptFilter(input.lexTranscriptFilter, context),
    }),
  };
};

const serializeAws_restJson1TranscriptSourceSetting = (
  input: TranscriptSourceSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.s3BucketTranscriptSource != undefined && {
      s3BucketTranscriptSource: serializeAws_restJson1S3BucketTranscriptSource(input.s3BucketTranscriptSource, context),
    }),
  };
};

const serializeAws_restJson1UtteranceAggregationDuration = (
  input: UtteranceAggregationDuration,
  context: __SerdeContext
): any => {
  return {
    ...(input.relativeAggregationDuration != undefined && {
      relativeAggregationDuration: serializeAws_restJson1RelativeAggregationDuration(
        input.relativeAggregationDuration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1VoiceSettings = (input: VoiceSettings, context: __SerdeContext): any => {
  return {
    ...(input.engine != undefined && { engine: input.engine }),
    ...(input.voiceId != undefined && { voiceId: input.voiceId }),
  };
};

const serializeAws_restJson1WaitAndContinueSpecification = (
  input: WaitAndContinueSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.active != undefined && { active: input.active }),
    ...(input.continueResponse != undefined && {
      continueResponse: serializeAws_restJson1ResponseSpecification(input.continueResponse, context),
    }),
    ...(input.stillWaitingResponse != undefined && {
      stillWaitingResponse: serializeAws_restJson1StillWaitingResponseSpecification(
        input.stillWaitingResponse,
        context
      ),
    }),
    ...(input.waitingResponse != undefined && {
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
      output.utteranceFirstRecordedInAggregationDuration != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.utteranceFirstRecordedInAggregationDuration)))
        : undefined,
    utteranceLastRecordedInAggregationDuration:
      output.utteranceLastRecordedInAggregationDuration != undefined
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

const deserializeAws_restJson1AudioLogDestination = (output: any, context: __SerdeContext): AudioLogDestination => {
  return {
    s3Bucket:
      output.s3Bucket != undefined
        ? deserializeAws_restJson1S3BucketLogDestination(output.s3Bucket, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AudioLogSetting = (output: any, context: __SerdeContext): AudioLogSetting => {
  return {
    destination:
      output.destination != undefined
        ? deserializeAws_restJson1AudioLogDestination(output.destination, context)
        : undefined,
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

const deserializeAws_restJson1BotAliasHistoryEvent = (output: any, context: __SerdeContext): BotAliasHistoryEvent => {
  return {
    botVersion: __expectString(output.botVersion),
    endDate:
      output.endDate != undefined ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endDate))) : undefined,
    startDate:
      output.startDate != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDate)))
        : undefined,
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
      output.codeHookSpecification != undefined
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
    return {
      ...acc,
      [key]: deserializeAws_restJson1BotAliasLocaleSettings(value, context),
    };
  }, {});
};

const deserializeAws_restJson1BotAliasSummary = (output: any, context: __SerdeContext): BotAliasSummary => {
  return {
    botAliasId: __expectString(output.botAliasId),
    botAliasName: __expectString(output.botAliasName),
    botAliasStatus: __expectString(output.botAliasStatus),
    botVersion: __expectString(output.botVersion),
    creationDateTime:
      output.creationDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    description: __expectString(output.description),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != undefined
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
    botTags: output.botTags != undefined ? deserializeAws_restJson1TagMap(output.botTags, context) : undefined,
    dataPrivacy:
      output.dataPrivacy != undefined ? deserializeAws_restJson1DataPrivacy(output.dataPrivacy, context) : undefined,
    idleSessionTTLInSeconds: __expectInt32(output.idleSessionTTLInSeconds),
    roleArn: __expectString(output.roleArn),
    testBotAliasTags:
      output.testBotAliasTags != undefined
        ? deserializeAws_restJson1TagMap(output.testBotAliasTags, context)
        : undefined,
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
      output.eventDate != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.eventDate)))
        : undefined,
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
      output.voiceSettings != undefined
        ? deserializeAws_restJson1VoiceSettings(output.voiceSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BotLocaleSummary = (output: any, context: __SerdeContext): BotLocaleSummary => {
  return {
    botLocaleStatus: __expectString(output.botLocaleStatus),
    description: __expectString(output.description),
    lastBuildSubmittedDateTime:
      output.lastBuildSubmittedDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastBuildSubmittedDateTime)))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != undefined
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
      output.statistics != undefined
        ? deserializeAws_restJson1BotRecommendationResultStatistics(output.statistics, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BotRecommendationResultStatistics = (
  output: any,
  context: __SerdeContext
): BotRecommendationResultStatistics => {
  return {
    intents:
      output.intents != undefined ? deserializeAws_restJson1IntentStatistics(output.intents, context) : undefined,
    slotTypes:
      output.slotTypes != undefined ? deserializeAws_restJson1SlotTypeStatistics(output.slotTypes, context) : undefined,
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
      output.creationDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != undefined
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
      output.lastUpdatedDateTime != undefined
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
    return {
      ...acc,
      [key]: deserializeAws_restJson1BotVersionLocaleDetails(value, context),
    };
  }, {});
};

const deserializeAws_restJson1BotVersionSummary = (output: any, context: __SerdeContext): BotVersionSummary => {
  return {
    botName: __expectString(output.botName),
    botStatus: __expectString(output.botStatus),
    botVersion: __expectString(output.botVersion),
    creationDateTime:
      output.creationDateTime != undefined
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
      output.lambdaCodeHook != undefined
        ? deserializeAws_restJson1LambdaCodeHook(output.lambdaCodeHook, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConversationLogSettings = (
  output: any,
  context: __SerdeContext
): ConversationLogSettings => {
  return {
    audioLogSettings:
      output.audioLogSettings != undefined
        ? deserializeAws_restJson1AudioLogSettingsList(output.audioLogSettings, context)
        : undefined,
    textLogSettings:
      output.textLogSettings != undefined
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

const deserializeAws_restJson1DataPrivacy = (output: any, context: __SerdeContext): DataPrivacy => {
  return {
    childDirected: __expectBoolean(output.childDirected),
  } as any;
};

const deserializeAws_restJson1DateRangeFilter = (output: any, context: __SerdeContext): DateRangeFilter => {
  return {
    endDateTime:
      output.endDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.endDateTime)))
        : undefined,
    startDateTime:
      output.startDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startDateTime)))
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
      output.botExportSpecification != undefined
        ? deserializeAws_restJson1BotExportSpecification(output.botExportSpecification, context)
        : undefined,
    botLocaleExportSpecification:
      output.botLocaleExportSpecification != undefined
        ? deserializeAws_restJson1BotLocaleExportSpecification(output.botLocaleExportSpecification, context)
        : undefined,
    customVocabularyExportSpecification:
      output.customVocabularyExportSpecification != undefined
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
      output.creationDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    exportId: __expectString(output.exportId),
    exportStatus: __expectString(output.exportStatus),
    fileFormat: __expectString(output.fileFormat),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    resourceSpecification:
      output.resourceSpecification != undefined
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
      output.grammarSlotTypeSetting != undefined
        ? deserializeAws_restJson1GrammarSlotTypeSetting(output.grammarSlotTypeSetting, context)
        : undefined,
  } as any;
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
    enabled: __expectBoolean(output.enabled),
    fulfillmentUpdatesSpecification:
      output.fulfillmentUpdatesSpecification != undefined
        ? deserializeAws_restJson1FulfillmentUpdatesSpecification(output.fulfillmentUpdatesSpecification, context)
        : undefined,
    postFulfillmentStatusSpecification:
      output.postFulfillmentStatusSpecification != undefined
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
      output.messageGroups != undefined
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
      output.messageGroups != undefined
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
      output.startResponse != undefined
        ? deserializeAws_restJson1FulfillmentStartResponseSpecification(output.startResponse, context)
        : undefined,
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
    updateResponse:
      output.updateResponse != undefined
        ? deserializeAws_restJson1FulfillmentUpdateResponseSpecification(output.updateResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GrammarSlotTypeSetting = (
  output: any,
  context: __SerdeContext
): GrammarSlotTypeSetting => {
  return {
    source:
      output.source != undefined ? deserializeAws_restJson1GrammarSlotTypeSource(output.source, context) : undefined,
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
    buttons: output.buttons != undefined ? deserializeAws_restJson1ButtonsList(output.buttons, context) : undefined,
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
      output.botImportSpecification != undefined
        ? deserializeAws_restJson1BotImportSpecification(output.botImportSpecification, context)
        : undefined,
    botLocaleImportSpecification:
      output.botLocaleImportSpecification != undefined
        ? deserializeAws_restJson1BotLocaleImportSpecification(output.botLocaleImportSpecification, context)
        : undefined,
    customVocabularyImportSpecification:
      output.customVocabularyImportSpecification != undefined
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
      output.creationDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationDateTime)))
        : undefined,
    importId: __expectString(output.importId),
    importStatus: __expectString(output.importStatus),
    importedResourceId: __expectString(output.importedResourceId),
    importedResourceName: __expectString(output.importedResourceName),
    importedResourceType: __expectString(output.importedResourceType),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != undefined
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
      output.closingResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.closingResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IntentConfirmationSetting = (
  output: any,
  context: __SerdeContext
): IntentConfirmationSetting => {
  return {
    active: __expectBoolean(output.active),
    declinationResponse:
      output.declinationResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.declinationResponse, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != undefined
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
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
      output.inputContexts != undefined
        ? deserializeAws_restJson1InputContextsList(output.inputContexts, context)
        : undefined,
    intentId: __expectString(output.intentId),
    intentName: __expectString(output.intentName),
    lastUpdatedDateTime:
      output.lastUpdatedDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    outputContexts:
      output.outputContexts != undefined
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
      output.dateRangeFilter != undefined
        ? deserializeAws_restJson1DateRangeFilter(output.dateRangeFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    customPayload:
      output.customPayload != undefined
        ? deserializeAws_restJson1CustomPayload(output.customPayload, context)
        : undefined,
    imageResponseCard:
      output.imageResponseCard != undefined
        ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
        : undefined,
    plainTextMessage:
      output.plainTextMessage != undefined
        ? deserializeAws_restJson1PlainTextMessage(output.plainTextMessage, context)
        : undefined,
    ssmlMessage:
      output.ssmlMessage != undefined ? deserializeAws_restJson1SSMLMessage(output.ssmlMessage, context) : undefined,
  } as any;
};

const deserializeAws_restJson1MessageGroup = (output: any, context: __SerdeContext): MessageGroup => {
  return {
    message: output.message != undefined ? deserializeAws_restJson1Message(output.message, context) : undefined,
    variations:
      output.variations != undefined
        ? deserializeAws_restJson1MessageVariationsList(output.variations, context)
        : undefined,
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
      output.objectPrefixes != undefined
        ? deserializeAws_restJson1ObjectPrefixes(output.objectPrefixes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PlainTextMessage = (output: any, context: __SerdeContext): PlainTextMessage => {
  return {
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1PostFulfillmentStatusSpecification = (
  output: any,
  context: __SerdeContext
): PostFulfillmentStatusSpecification => {
  return {
    failureResponse:
      output.failureResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.failureResponse, context)
        : undefined,
    successResponse:
      output.successResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.successResponse, context)
        : undefined,
    timeoutResponse:
      output.timeoutResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.timeoutResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PromptSpecification = (output: any, context: __SerdeContext): PromptSpecification => {
  return {
    allowInterrupt: __expectBoolean(output.allowInterrupt),
    maxRetries: __expectInt32(output.maxRetries),
    messageGroups:
      output.messageGroups != undefined
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
    messageSelectionStrategy: __expectString(output.messageSelectionStrategy),
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
      output.messageGroups != undefined
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
    pathFormat:
      output.pathFormat != undefined ? deserializeAws_restJson1PathFormat(output.pathFormat, context) : undefined,
    s3BucketName: __expectString(output.s3BucketName),
    transcriptFilter:
      output.transcriptFilter != undefined
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
      output.defaultValueList != undefined
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
      output.lastUpdatedDateTime != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastUpdatedDateTime)))
        : undefined,
    slotConstraint: __expectString(output.slotConstraint),
    slotId: __expectString(output.slotId),
    slotName: __expectString(output.slotName),
    slotTypeId: __expectString(output.slotTypeId),
    valueElicitationPromptSpecification:
      output.valueElicitationPromptSpecification != undefined
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
      output.lastUpdatedDateTime != undefined
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
      output.sampleValue != undefined ? deserializeAws_restJson1SampleValue(output.sampleValue, context) : undefined,
    synonyms: output.synonyms != undefined ? deserializeAws_restJson1SynonymList(output.synonyms, context) : undefined,
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

const deserializeAws_restJson1SlotValueElicitationSetting = (
  output: any,
  context: __SerdeContext
): SlotValueElicitationSetting => {
  return {
    defaultValueSpecification:
      output.defaultValueSpecification != undefined
        ? deserializeAws_restJson1SlotDefaultValueSpecification(output.defaultValueSpecification, context)
        : undefined,
    promptSpecification:
      output.promptSpecification != undefined
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
    sampleUtterances:
      output.sampleUtterances != undefined
        ? deserializeAws_restJson1SampleUtterancesList(output.sampleUtterances, context)
        : undefined,
    slotConstraint: __expectString(output.slotConstraint),
    waitAndContinueSpecification:
      output.waitAndContinueSpecification != undefined
        ? deserializeAws_restJson1WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotValueRegexFilter = (output: any, context: __SerdeContext): SlotValueRegexFilter => {
  return {
    pattern: __expectString(output.pattern),
  } as any;
};

const deserializeAws_restJson1SlotValueSelectionSetting = (
  output: any,
  context: __SerdeContext
): SlotValueSelectionSetting => {
  return {
    advancedRecognitionSetting:
      output.advancedRecognitionSetting != undefined
        ? deserializeAws_restJson1AdvancedRecognitionSetting(output.advancedRecognitionSetting, context)
        : undefined,
    regexFilter:
      output.regexFilter != undefined
        ? deserializeAws_restJson1SlotValueRegexFilter(output.regexFilter, context)
        : undefined,
    resolutionStrategy: __expectString(output.resolutionStrategy),
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
      output.messageGroups != undefined
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
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
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1TextLogDestination = (output: any, context: __SerdeContext): TextLogDestination => {
  return {
    cloudWatch:
      output.cloudWatch != undefined
        ? deserializeAws_restJson1CloudWatchLogGroupLogDestination(output.cloudWatch, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TextLogSetting = (output: any, context: __SerdeContext): TextLogSetting => {
  return {
    destination:
      output.destination != undefined
        ? deserializeAws_restJson1TextLogDestination(output.destination, context)
        : undefined,
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
      output.lexTranscriptFilter != undefined
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
      output.s3BucketTranscriptSource != undefined
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
      output.relativeAggregationDuration != undefined
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
      output.continueResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.continueResponse, context)
        : undefined,
    stillWaitingResponse:
      output.stillWaitingResponse != undefined
        ? deserializeAws_restJson1StillWaitingResponseSpecification(output.stillWaitingResponse, context)
        : undefined,
    waitingResponse:
      output.waitingResponse != undefined
        ? deserializeAws_restJson1ResponseSpecification(output.waitingResponse, context)
        : undefined,
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
