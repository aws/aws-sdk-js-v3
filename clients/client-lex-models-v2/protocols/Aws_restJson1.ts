import { BuildBotLocaleCommandInput, BuildBotLocaleCommandOutput } from "../commands/BuildBotLocaleCommand";
import { CreateBotAliasCommandInput, CreateBotAliasCommandOutput } from "../commands/CreateBotAliasCommand";
import { CreateBotCommandInput, CreateBotCommandOutput } from "../commands/CreateBotCommand";
import { CreateBotLocaleCommandInput, CreateBotLocaleCommandOutput } from "../commands/CreateBotLocaleCommand";
import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "../commands/CreateBotVersionCommand";
import { CreateIntentCommandInput, CreateIntentCommandOutput } from "../commands/CreateIntentCommand";
import { CreateSlotCommandInput, CreateSlotCommandOutput } from "../commands/CreateSlotCommand";
import { CreateSlotTypeCommandInput, CreateSlotTypeCommandOutput } from "../commands/CreateSlotTypeCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "../commands/DeleteBotAliasCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "../commands/DeleteBotCommand";
import { DeleteBotLocaleCommandInput, DeleteBotLocaleCommandOutput } from "../commands/DeleteBotLocaleCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "../commands/DeleteBotVersionCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "../commands/DeleteIntentCommand";
import { DeleteSlotCommandInput, DeleteSlotCommandOutput } from "../commands/DeleteSlotCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "../commands/DeleteSlotTypeCommand";
import { DescribeBotAliasCommandInput, DescribeBotAliasCommandOutput } from "../commands/DescribeBotAliasCommand";
import { DescribeBotCommandInput, DescribeBotCommandOutput } from "../commands/DescribeBotCommand";
import { DescribeBotLocaleCommandInput, DescribeBotLocaleCommandOutput } from "../commands/DescribeBotLocaleCommand";
import { DescribeBotVersionCommandInput, DescribeBotVersionCommandOutput } from "../commands/DescribeBotVersionCommand";
import { DescribeIntentCommandInput, DescribeIntentCommandOutput } from "../commands/DescribeIntentCommand";
import { DescribeSlotCommandInput, DescribeSlotCommandOutput } from "../commands/DescribeSlotCommand";
import { DescribeSlotTypeCommandInput, DescribeSlotTypeCommandOutput } from "../commands/DescribeSlotTypeCommand";
import { ListBotAliasesCommandInput, ListBotAliasesCommandOutput } from "../commands/ListBotAliasesCommand";
import { ListBotLocalesCommandInput, ListBotLocalesCommandOutput } from "../commands/ListBotLocalesCommand";
import { ListBotVersionsCommandInput, ListBotVersionsCommandOutput } from "../commands/ListBotVersionsCommand";
import { ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ListBuiltInIntentsCommandInput, ListBuiltInIntentsCommandOutput } from "../commands/ListBuiltInIntentsCommand";
import {
  ListBuiltInSlotTypesCommandInput,
  ListBuiltInSlotTypesCommandOutput,
} from "../commands/ListBuiltInSlotTypesCommand";
import { ListIntentsCommandInput, ListIntentsCommandOutput } from "../commands/ListIntentsCommand";
import { ListSlotTypesCommandInput, ListSlotTypesCommandOutput } from "../commands/ListSlotTypesCommand";
import { ListSlotsCommandInput, ListSlotsCommandOutput } from "../commands/ListSlotsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBotAliasCommandInput, UpdateBotAliasCommandOutput } from "../commands/UpdateBotAliasCommand";
import { UpdateBotCommandInput, UpdateBotCommandOutput } from "../commands/UpdateBotCommand";
import { UpdateBotLocaleCommandInput, UpdateBotLocaleCommandOutput } from "../commands/UpdateBotLocaleCommand";
import { UpdateIntentCommandInput, UpdateIntentCommandOutput } from "../commands/UpdateIntentCommand";
import { UpdateSlotCommandInput, UpdateSlotCommandOutput } from "../commands/UpdateSlotCommand";
import { UpdateSlotTypeCommandInput, UpdateSlotTypeCommandOutput } from "../commands/UpdateSlotTypeCommand";
import {
  AudioLogDestination,
  AudioLogSetting,
  BotAliasHistoryEvent,
  BotAliasLocaleSettings,
  BotAliasSummary,
  BotFilter,
  BotLocaleFilter,
  BotLocaleHistoryEvent,
  BotLocaleSortBy,
  BotLocaleSummary,
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
  DataPrivacy,
  DialogCodeHookSettings,
  FulfillmentCodeHookSettings,
  ImageResponseCard,
  InputContext,
  IntentClosingSetting,
  IntentConfirmationSetting,
  IntentFilter,
  IntentSortBy,
  IntentSummary,
  InternalServerException,
  KendraConfiguration,
  LambdaCodeHook,
  Message,
  MessageGroup,
  ObfuscationSetting,
  OutputContext,
  PlainTextMessage,
  PreconditionFailedException,
  PromptSpecification,
  ResourceNotFoundException,
  ResponseSpecification,
  S3BucketLogDestination,
  SSMLMessage,
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
  SlotTypeSummary,
  SlotTypeValue,
  SlotValueElicitationSetting,
  SlotValueRegexFilter,
  SlotValueSelectionSetting,
  StillWaitingResponseSpecification,
  TextLogDestination,
  TextLogSetting,
  ThrottlingException,
  ValidationException,
  VoiceSettings,
  WaitAndContinueSpecification,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1BuildBotLocaleCommand = async (
  input: BuildBotLocaleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots";
  let body: any;
  body = JSON.stringify({
    ...(input.botName !== undefined && input.botName !== null && { botName: input.botName }),
    ...(input.botTags !== undefined &&
      input.botTags !== null && { botTags: serializeAws_restJson1TagMap(input.botTags, context) }),
    ...(input.dataPrivacy !== undefined &&
      input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.idleSessionTTLInSeconds !== undefined &&
      input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
    ...(input.testBotAliasTags !== undefined &&
      input.testBotAliasTags !== null && {
        testBotAliasTags: serializeAws_restJson1TagMap(input.testBotAliasTags, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botaliases";
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
    ...(input.botAliasLocaleSettings !== undefined &&
      input.botAliasLocaleSettings !== null && {
        botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
      }),
    ...(input.botAliasName !== undefined && input.botAliasName !== null && { botAliasName: input.botAliasName }),
    ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings !== undefined &&
      input.conversationLogSettings !== null && {
        conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.sentimentAnalysisSettings !== undefined &&
      input.sentimentAnalysisSettings !== null && {
        sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(
          input.sentimentAnalysisSettings,
          context
        ),
      }),
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.localeId !== undefined && input.localeId !== null && { localeId: input.localeId }),
    ...(input.nluIntentConfidenceThreshold !== undefined &&
      input.nluIntentConfidenceThreshold !== null && {
        nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
      }),
    ...(input.voiceSettings !== undefined &&
      input.voiceSettings !== null && {
        voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions";
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
    ...(input.botVersionLocaleSpecification !== undefined &&
      input.botVersionLocaleSpecification !== null && {
        botVersionLocaleSpecification: serializeAws_restJson1BotVersionLocaleSpecification(
          input.botVersionLocaleSpecification,
          context
        ),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dialogCodeHook !== undefined &&
      input.dialogCodeHook !== null && {
        dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
      }),
    ...(input.fulfillmentCodeHook !== undefined &&
      input.fulfillmentCodeHook !== null && {
        fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
      }),
    ...(input.inputContexts !== undefined &&
      input.inputContexts !== null && {
        inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
      }),
    ...(input.intentClosingSetting !== undefined &&
      input.intentClosingSetting !== null && {
        intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
      }),
    ...(input.intentConfirmationSetting !== undefined &&
      input.intentConfirmationSetting !== null && {
        intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(
          input.intentConfirmationSetting,
          context
        ),
      }),
    ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
    ...(input.kendraConfiguration !== undefined &&
      input.kendraConfiguration !== null && {
        kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
      }),
    ...(input.outputContexts !== undefined &&
      input.outputContexts !== null && {
        outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
      }),
    ...(input.parentIntentSignature !== undefined &&
      input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances !== undefined &&
      input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateSlotCommand = async (
  input: CreateSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.obfuscationSetting !== undefined &&
      input.obfuscationSetting !== null && {
        obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
      }),
    ...(input.slotName !== undefined && input.slotName !== null && { slotName: input.slotName }),
    ...(input.slotTypeId !== undefined && input.slotTypeId !== null && { slotTypeId: input.slotTypeId }),
    ...(input.valueElicitationSetting !== undefined &&
      input.valueElicitationSetting !== null && {
        valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(
          input.valueElicitationSetting,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.parentSlotTypeSignature !== undefined &&
      input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName !== undefined && input.slotTypeName !== null && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues !== undefined &&
      input.slotTypeValues !== null && {
        slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
      }),
    ...(input.valueSelectionSetting !== undefined &&
      input.valueSelectionSetting !== null && {
        valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteBotCommand = async (
  input: DeleteBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteIntentCommand = async (
  input: DeleteIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteSlotCommand = async (
  input: DeleteSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListBotAliasesCommand = async (
  input: ListBotAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botaliases";
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
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales";
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
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1BotLocaleFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1BotLocaleSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots";
  let body: any;
  body = JSON.stringify({
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1BotFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1BotSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions";
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
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1BotVersionSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/builtins/locales/{localeId}/intents";
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
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1BuiltInIntentSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/builtins/locales/{localeId}/slottypes";
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
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1BuiltInSlotTypeSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents";
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
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1IntentFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1IntentSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots";
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
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1SlotFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1SlotSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes";
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
    ...(input.filters !== undefined &&
      input.filters !== null && { filters: serializeAws_restJson1SlotTypeFilters(input.filters, context) }),
    ...(input.maxResults !== undefined && input.maxResults !== null && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && input.nextToken !== null && { nextToken: input.nextToken }),
    ...(input.sortBy !== undefined &&
      input.sortBy !== null && { sortBy: serializeAws_restJson1SlotTypeSortBy(input.sortBy, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tags/{resourceARN}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{resourceARN}";
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
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {};
  let resolvedPath = "/tags/{resourceARN}";
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
    ...(input.tagKeys !== undefined && { tagKeys: (input.tagKeys || []).map((_entry) => _entry) }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}";
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
    ...(input.botName !== undefined && input.botName !== null && { botName: input.botName }),
    ...(input.dataPrivacy !== undefined &&
      input.dataPrivacy !== null && { dataPrivacy: serializeAws_restJson1DataPrivacy(input.dataPrivacy, context) }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.idleSessionTTLInSeconds !== undefined &&
      input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.roleArn !== undefined && input.roleArn !== null && { roleArn: input.roleArn }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botaliases/{botAliasId}";
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
    ...(input.botAliasLocaleSettings !== undefined &&
      input.botAliasLocaleSettings !== null && {
        botAliasLocaleSettings: serializeAws_restJson1BotAliasLocaleSettingsMap(input.botAliasLocaleSettings, context),
      }),
    ...(input.botAliasName !== undefined && input.botAliasName !== null && { botAliasName: input.botAliasName }),
    ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
    ...(input.conversationLogSettings !== undefined &&
      input.conversationLogSettings !== null && {
        conversationLogSettings: serializeAws_restJson1ConversationLogSettings(input.conversationLogSettings, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.sentimentAnalysisSettings !== undefined &&
      input.sentimentAnalysisSettings !== null && {
        sentimentAnalysisSettings: serializeAws_restJson1SentimentAnalysisSettings(
          input.sentimentAnalysisSettings,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.nluIntentConfidenceThreshold !== undefined &&
      input.nluIntentConfidenceThreshold !== null && {
        nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
      }),
    ...(input.voiceSettings !== undefined &&
      input.voiceSettings !== null && {
        voiceSettings: serializeAws_restJson1VoiceSettings(input.voiceSettings, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dialogCodeHook !== undefined &&
      input.dialogCodeHook !== null && {
        dialogCodeHook: serializeAws_restJson1DialogCodeHookSettings(input.dialogCodeHook, context),
      }),
    ...(input.fulfillmentCodeHook !== undefined &&
      input.fulfillmentCodeHook !== null && {
        fulfillmentCodeHook: serializeAws_restJson1FulfillmentCodeHookSettings(input.fulfillmentCodeHook, context),
      }),
    ...(input.inputContexts !== undefined &&
      input.inputContexts !== null && {
        inputContexts: serializeAws_restJson1InputContextsList(input.inputContexts, context),
      }),
    ...(input.intentClosingSetting !== undefined &&
      input.intentClosingSetting !== null && {
        intentClosingSetting: serializeAws_restJson1IntentClosingSetting(input.intentClosingSetting, context),
      }),
    ...(input.intentConfirmationSetting !== undefined &&
      input.intentConfirmationSetting !== null && {
        intentConfirmationSetting: serializeAws_restJson1IntentConfirmationSetting(
          input.intentConfirmationSetting,
          context
        ),
      }),
    ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
    ...(input.kendraConfiguration !== undefined &&
      input.kendraConfiguration !== null && {
        kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
      }),
    ...(input.outputContexts !== undefined &&
      input.outputContexts !== null && {
        outputContexts: serializeAws_restJson1OutputContextsList(input.outputContexts, context),
      }),
    ...(input.parentIntentSignature !== undefined &&
      input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.sampleUtterances !== undefined &&
      input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
      }),
    ...(input.slotPriorities !== undefined &&
      input.slotPriorities !== null && {
        slotPriorities: serializeAws_restJson1SlotPrioritiesList(input.slotPriorities, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UpdateSlotCommand = async (
  input: UpdateSlotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/intents/{intentId}/slots/{slotId}";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.obfuscationSetting !== undefined &&
      input.obfuscationSetting !== null && {
        obfuscationSetting: serializeAws_restJson1ObfuscationSetting(input.obfuscationSetting, context),
      }),
    ...(input.slotName !== undefined && input.slotName !== null && { slotName: input.slotName }),
    ...(input.slotTypeId !== undefined && input.slotTypeId !== null && { slotTypeId: input.slotTypeId }),
    ...(input.valueElicitationSetting !== undefined &&
      input.valueElicitationSetting !== null && {
        valueElicitationSetting: serializeAws_restJson1SlotValueElicitationSetting(
          input.valueElicitationSetting,
          context
        ),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botId}/botversions/{botVersion}/botlocales/{localeId}/slottypes/{slotTypeId}";
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
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.parentSlotTypeSignature !== undefined &&
      input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeName !== undefined && input.slotTypeName !== null && { slotTypeName: input.slotTypeName }),
    ...(input.slotTypeValues !== undefined &&
      input.slotTypeValues !== null && {
        slotTypeValues: serializeAws_restJson1SlotTypeValues(input.slotTypeValues, context),
      }),
    ...(input.valueSelectionSetting !== undefined &&
      input.valueSelectionSetting !== null && {
        valueSelectionSetting: serializeAws_restJson1SlotValueSelectionSetting(input.valueSelectionSetting, context),
      }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = data.botLocaleStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.lastBuildSubmittedDateTime !== undefined && data.lastBuildSubmittedDateTime !== null) {
    contents.lastBuildSubmittedDateTime = new Date(Math.round(data.lastBuildSubmittedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
  }
  if (data.botTags !== undefined && data.botTags !== null) {
    contents.botTags = deserializeAws_restJson1TagMap(data.botTags, context);
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = data.roleArn;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = data.botAliasId;
  }
  if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
  }
  if (data.botAliasName !== undefined && data.botAliasName !== null) {
    contents.botAliasName = data.botAliasName;
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = data.botAliasStatus;
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = data.botLocaleStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.localeName !== undefined && data.localeName !== null) {
    contents.localeName = data.localeName;
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.botVersionLocaleSpecification !== undefined && data.botVersionLocaleSpecification !== null) {
    contents.botVersionLocaleSpecification = deserializeAws_restJson1BotVersionLocaleSpecification(
      data.botVersionLocaleSpecification,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
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
    contents.intentId = data.intentId;
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = data.intentName;
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = data.parentIntentSignature;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    obfuscationSetting: undefined,
    slotId: undefined,
    slotName: undefined,
    slotTypeId: undefined,
    valueElicitationSetting: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = data.intentId;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId !== undefined && data.slotId !== null) {
    contents.slotId = data.slotId;
  }
  if (data.slotName !== undefined && data.slotName !== null) {
    contents.slotName = data.slotName;
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = data.slotTypeId;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    localeId: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeId: undefined,
    slotTypeName: undefined,
    slotTypeValues: undefined,
    valueSelectionSetting: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = data.slotTypeId;
  }
  if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
    contents.slotTypeName = data.slotTypeName;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = data.botAliasId;
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = data.botAliasStatus;
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = data.botLocaleStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = data.roleArn;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botAliasHistoryEvents !== undefined && data.botAliasHistoryEvents !== null) {
    contents.botAliasHistoryEvents = deserializeAws_restJson1BotAliasHistoryEventsList(
      data.botAliasHistoryEvents,
      context
    );
  }
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = data.botAliasId;
  }
  if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
  }
  if (data.botAliasName !== undefined && data.botAliasName !== null) {
    contents.botAliasName = data.botAliasName;
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = data.botAliasStatus;
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    slotTypesCount: undefined,
    voiceSettings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botLocaleHistoryEvents !== undefined && data.botLocaleHistoryEvents !== null) {
    contents.botLocaleHistoryEvents = deserializeAws_restJson1BotLocaleHistoryEventsList(
      data.botLocaleHistoryEvents,
      context
    );
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = data.botLocaleStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.intentsCount !== undefined && data.intentsCount !== null) {
    contents.intentsCount = data.intentsCount;
  }
  if (data.lastBuildSubmittedDateTime !== undefined && data.lastBuildSubmittedDateTime !== null) {
    contents.lastBuildSubmittedDateTime = new Date(Math.round(data.lastBuildSubmittedDateTime * 1000));
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.localeName !== undefined && data.localeName !== null) {
    contents.localeName = data.localeName;
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
  }
  if (data.slotTypesCount !== undefined && data.slotTypesCount !== null) {
    contents.slotTypesCount = data.slotTypesCount;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = data.roleArn;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
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
    contents.intentId = data.intentId;
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = data.intentName;
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = data.parentIntentSignature;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    obfuscationSetting: undefined,
    slotId: undefined,
    slotName: undefined,
    slotTypeId: undefined,
    valueElicitationSetting: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = data.intentId;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId !== undefined && data.slotId !== null) {
    contents.slotId = data.slotId;
  }
  if (data.slotName !== undefined && data.slotName !== null) {
    contents.slotName = data.slotName;
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = data.slotTypeId;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeId: undefined,
    slotTypeName: undefined,
    slotTypeValues: undefined,
    valueSelectionSetting: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = data.slotTypeId;
  }
  if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
    contents.slotTypeName = data.slotTypeName;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botAliasSummaries !== undefined && data.botAliasSummaries !== null) {
    contents.botAliasSummaries = deserializeAws_restJson1BotAliasSummaryList(data.botAliasSummaries, context);
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botLocaleSummaries !== undefined && data.botLocaleSummaries !== null) {
    contents.botLocaleSummaries = deserializeAws_restJson1BotLocaleSummaryList(data.botLocaleSummaries, context);
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botSummaries !== undefined && data.botSummaries !== null) {
    contents.botSummaries = deserializeAws_restJson1BotSummaryList(data.botSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersionSummaries !== undefined && data.botVersionSummaries !== null) {
    contents.botVersionSummaries = deserializeAws_restJson1BotVersionSummaryList(data.botVersionSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.builtInIntentSummaries !== undefined && data.builtInIntentSummaries !== null) {
    contents.builtInIntentSummaries = deserializeAws_restJson1BuiltInIntentSummaryList(
      data.builtInIntentSummaries,
      context
    );
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.builtInSlotTypeSummaries !== undefined && data.builtInSlotTypeSummaries !== null) {
    contents.builtInSlotTypeSummaries = deserializeAws_restJson1BuiltInSlotTypeSummaryList(
      data.builtInSlotTypeSummaries,
      context
    );
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.intentSummaries !== undefined && data.intentSummaries !== null) {
    contents.intentSummaries = deserializeAws_restJson1IntentSummaryList(data.intentSummaries, context);
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = data.intentId;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lexmodelsv2#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.botStatus !== undefined && data.botStatus !== null) {
    contents.botStatus = data.botStatus;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.dataPrivacy !== undefined && data.dataPrivacy !== null) {
    contents.dataPrivacy = deserializeAws_restJson1DataPrivacy(data.dataPrivacy, context);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.roleArn !== undefined && data.roleArn !== null) {
    contents.roleArn = data.roleArn;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botAliasId !== undefined && data.botAliasId !== null) {
    contents.botAliasId = data.botAliasId;
  }
  if (data.botAliasLocaleSettings !== undefined && data.botAliasLocaleSettings !== null) {
    contents.botAliasLocaleSettings = deserializeAws_restJson1BotAliasLocaleSettingsMap(
      data.botAliasLocaleSettings,
      context
    );
  }
  if (data.botAliasName !== undefined && data.botAliasName !== null) {
    contents.botAliasName = data.botAliasName;
  }
  if (data.botAliasStatus !== undefined && data.botAliasStatus !== null) {
    contents.botAliasStatus = data.botAliasStatus;
  }
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.conversationLogSettings !== undefined && data.conversationLogSettings !== null) {
    contents.conversationLogSettings = deserializeAws_restJson1ConversationLogSettings(
      data.conversationLogSettings,
      context
    );
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    voiceSettings: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botLocaleStatus !== undefined && data.botLocaleStatus !== null) {
    contents.botLocaleStatus = data.botLocaleStatus;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.failureReasons !== undefined && data.failureReasons !== null) {
    contents.failureReasons = deserializeAws_restJson1FailureReasons(data.failureReasons, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.localeName !== undefined && data.localeName !== null) {
    contents.localeName = data.localeName;
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
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
    contents.intentId = data.intentId;
  }
  if (data.intentName !== undefined && data.intentName !== null) {
    contents.intentName = data.intentName;
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextsList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = data.parentIntentSignature;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    obfuscationSetting: undefined,
    slotId: undefined,
    slotName: undefined,
    slotTypeId: undefined,
    valueElicitationSetting: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.intentId !== undefined && data.intentId !== null) {
    contents.intentId = data.intentId;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.obfuscationSetting !== undefined && data.obfuscationSetting !== null) {
    contents.obfuscationSetting = deserializeAws_restJson1ObfuscationSetting(data.obfuscationSetting, context);
  }
  if (data.slotId !== undefined && data.slotId !== null) {
    contents.slotId = data.slotId;
  }
  if (data.slotName !== undefined && data.slotName !== null) {
    contents.slotName = data.slotName;
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = data.slotTypeId;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
    lastUpdatedDateTime: undefined,
    localeId: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeId: undefined,
    slotTypeName: undefined,
    slotTypeValues: undefined,
    valueSelectionSetting: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botId !== undefined && data.botId !== null) {
    contents.botId = data.botId;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.creationDateTime !== undefined && data.creationDateTime !== null) {
    contents.creationDateTime = new Date(Math.round(data.creationDateTime * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDateTime !== undefined && data.lastUpdatedDateTime !== null) {
    contents.lastUpdatedDateTime = new Date(Math.round(data.lastUpdatedDateTime * 1000));
  }
  if (data.localeId !== undefined && data.localeId !== null) {
    contents.localeId = data.localeId;
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
  }
  if (data.slotTypeId !== undefined && data.slotTypeId !== null) {
    contents.slotTypeId = data.slotTypeId;
  }
  if (data.slotTypeName !== undefined && data.slotTypeName !== null) {
    contents.slotTypeName = data.slotTypeName;
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.lexmodelsv2#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.lexmodelsv2#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelsv2#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.lexmodelsv2#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.lexmodelsv2#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.lexmodelsv2#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: PreconditionFailedException = {
    name: "PreconditionFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1AudioLogDestination = (input: AudioLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.s3Bucket !== undefined &&
      input.s3Bucket !== null && { s3Bucket: serializeAws_restJson1S3BucketLogDestination(input.s3Bucket, context) }),
  };
};

const serializeAws_restJson1AudioLogSetting = (input: AudioLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination !== undefined &&
      input.destination !== null && {
        destination: serializeAws_restJson1AudioLogDestination(input.destination, context),
      }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
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
    ...(input.codeHookSpecification !== undefined &&
      input.codeHookSpecification !== null && {
        codeHookSpecification: serializeAws_restJson1CodeHookSpecification(input.codeHookSpecification, context),
      }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1BotAliasLocaleSettingsMap = (
  input: { [key: string]: BotAliasLocaleSettings },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: { [key: string]: BotAliasLocaleSettings }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1BotAliasLocaleSettings(value, context),
    };
  }, {});
};

const serializeAws_restJson1BotFilter = (input: BotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
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

const serializeAws_restJson1BotLocaleFilter = (input: BotLocaleFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
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

const serializeAws_restJson1BotLocaleSortBy = (input: BotLocaleSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1BotSortBy = (input: BotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1BotVersionLocaleDetails = (
  input: BotVersionLocaleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.sourceBotVersion !== undefined &&
      input.sourceBotVersion !== null && { sourceBotVersion: input.sourceBotVersion }),
  };
};

const serializeAws_restJson1BotVersionLocaleSpecification = (
  input: { [key: string]: BotVersionLocaleDetails },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: BotVersionLocaleDetails }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: serializeAws_restJson1BotVersionLocaleDetails(value, context),
      };
    },
    {}
  );
};

const serializeAws_restJson1BotVersionSortBy = (input: BotVersionSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1BuiltInIntentSortBy = (input: BuiltInIntentSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1BuiltInSlotTypeSortBy = (input: BuiltInSlotTypeSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1Button = (input: Button, context: __SerdeContext): any => {
  return {
    ...(input.text !== undefined && input.text !== null && { text: input.text }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
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
    ...(input.cloudWatchLogGroupArn !== undefined &&
      input.cloudWatchLogGroupArn !== null && { cloudWatchLogGroupArn: input.cloudWatchLogGroupArn }),
    ...(input.logPrefix !== undefined && input.logPrefix !== null && { logPrefix: input.logPrefix }),
  };
};

const serializeAws_restJson1CodeHookSpecification = (input: CodeHookSpecification, context: __SerdeContext): any => {
  return {
    ...(input.lambdaCodeHook !== undefined &&
      input.lambdaCodeHook !== null && {
        lambdaCodeHook: serializeAws_restJson1LambdaCodeHook(input.lambdaCodeHook, context),
      }),
  };
};

const serializeAws_restJson1ConversationLogSettings = (
  input: ConversationLogSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.audioLogSettings !== undefined &&
      input.audioLogSettings !== null && {
        audioLogSettings: serializeAws_restJson1AudioLogSettingsList(input.audioLogSettings, context),
      }),
    ...(input.textLogSettings !== undefined &&
      input.textLogSettings !== null && {
        textLogSettings: serializeAws_restJson1TextLogSettingsList(input.textLogSettings, context),
      }),
  };
};

const serializeAws_restJson1CustomPayload = (input: CustomPayload, context: __SerdeContext): any => {
  return {
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1DataPrivacy = (input: DataPrivacy, context: __SerdeContext): any => {
  return {
    ...(input.childDirected !== undefined && input.childDirected !== null && { childDirected: input.childDirected }),
  };
};

const serializeAws_restJson1DialogCodeHookSettings = (input: DialogCodeHookSettings, context: __SerdeContext): any => {
  return {
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
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
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
  };
};

const serializeAws_restJson1ImageResponseCard = (input: ImageResponseCard, context: __SerdeContext): any => {
  return {
    ...(input.buttons !== undefined &&
      input.buttons !== null && { buttons: serializeAws_restJson1ButtonsList(input.buttons, context) }),
    ...(input.imageUrl !== undefined && input.imageUrl !== null && { imageUrl: input.imageUrl }),
    ...(input.subtitle !== undefined && input.subtitle !== null && { subtitle: input.subtitle }),
    ...(input.title !== undefined && input.title !== null && { title: input.title }),
  };
};

const serializeAws_restJson1InputContext = (input: InputContext, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
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
    ...(input.closingResponse !== undefined &&
      input.closingResponse !== null && {
        closingResponse: serializeAws_restJson1ResponseSpecification(input.closingResponse, context),
      }),
  };
};

const serializeAws_restJson1IntentConfirmationSetting = (
  input: IntentConfirmationSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.declinationResponse !== undefined &&
      input.declinationResponse !== null && {
        declinationResponse: serializeAws_restJson1ResponseSpecification(input.declinationResponse, context),
      }),
    ...(input.promptSpecification !== undefined &&
      input.promptSpecification !== null && {
        promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
      }),
  };
};

const serializeAws_restJson1IntentFilter = (input: IntentFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
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
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1KendraConfiguration = (input: KendraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kendraIndex !== undefined && input.kendraIndex !== null && { kendraIndex: input.kendraIndex }),
    ...(input.queryFilterString !== undefined &&
      input.queryFilterString !== null && { queryFilterString: input.queryFilterString }),
    ...(input.queryFilterStringEnabled !== undefined &&
      input.queryFilterStringEnabled !== null && { queryFilterStringEnabled: input.queryFilterStringEnabled }),
  };
};

const serializeAws_restJson1LambdaCodeHook = (input: LambdaCodeHook, context: __SerdeContext): any => {
  return {
    ...(input.codeHookInterfaceVersion !== undefined &&
      input.codeHookInterfaceVersion !== null && { codeHookInterfaceVersion: input.codeHookInterfaceVersion }),
    ...(input.lambdaARN !== undefined && input.lambdaARN !== null && { lambdaARN: input.lambdaARN }),
  };
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.customPayload !== undefined &&
      input.customPayload !== null && {
        customPayload: serializeAws_restJson1CustomPayload(input.customPayload, context),
      }),
    ...(input.imageResponseCard !== undefined &&
      input.imageResponseCard !== null && {
        imageResponseCard: serializeAws_restJson1ImageResponseCard(input.imageResponseCard, context),
      }),
    ...(input.plainTextMessage !== undefined &&
      input.plainTextMessage !== null && {
        plainTextMessage: serializeAws_restJson1PlainTextMessage(input.plainTextMessage, context),
      }),
    ...(input.ssmlMessage !== undefined &&
      input.ssmlMessage !== null && { ssmlMessage: serializeAws_restJson1SSMLMessage(input.ssmlMessage, context) }),
  };
};

const serializeAws_restJson1MessageGroup = (input: MessageGroup, context: __SerdeContext): any => {
  return {
    ...(input.message !== undefined &&
      input.message !== null && { message: serializeAws_restJson1Message(input.message, context) }),
    ...(input.variations !== undefined &&
      input.variations !== null && {
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

const serializeAws_restJson1ObfuscationSetting = (input: ObfuscationSetting, context: __SerdeContext): any => {
  return {
    ...(input.obfuscationSettingType !== undefined &&
      input.obfuscationSettingType !== null && { obfuscationSettingType: input.obfuscationSettingType }),
  };
};

const serializeAws_restJson1OutputContext = (input: OutputContext, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.timeToLiveInSeconds !== undefined &&
      input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }),
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

const serializeAws_restJson1PlainTextMessage = (input: PlainTextMessage, context: __SerdeContext): any => {
  return {
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1PromptSpecification = (input: PromptSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt !== undefined &&
      input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt }),
    ...(input.maxRetries !== undefined && input.maxRetries !== null && { maxRetries: input.maxRetries }),
    ...(input.messageGroups !== undefined &&
      input.messageGroups !== null && {
        messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
      }),
  };
};

const serializeAws_restJson1ResponseSpecification = (input: ResponseSpecification, context: __SerdeContext): any => {
  return {
    ...(input.allowInterrupt !== undefined &&
      input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt }),
    ...(input.messageGroups !== undefined &&
      input.messageGroups !== null && {
        messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
      }),
  };
};

const serializeAws_restJson1S3BucketLogDestination = (input: S3BucketLogDestination, context: __SerdeContext): any => {
  return {
    ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.logPrefix !== undefined && input.logPrefix !== null && { logPrefix: input.logPrefix }),
    ...(input.s3BucketArn !== undefined && input.s3BucketArn !== null && { s3BucketArn: input.s3BucketArn }),
  };
};

const serializeAws_restJson1SampleUtterance = (input: SampleUtterance, context: __SerdeContext): any => {
  return {
    ...(input.utterance !== undefined && input.utterance !== null && { utterance: input.utterance }),
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
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1SentimentAnalysisSettings = (
  input: SentimentAnalysisSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.detectSentiment !== undefined &&
      input.detectSentiment !== null && { detectSentiment: input.detectSentiment }),
  };
};

const serializeAws_restJson1SlotDefaultValue = (input: SlotDefaultValue, context: __SerdeContext): any => {
  return {
    ...(input.defaultValue !== undefined && input.defaultValue !== null && { defaultValue: input.defaultValue }),
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
    ...(input.defaultValueList !== undefined &&
      input.defaultValueList !== null && {
        defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
      }),
  };
};

const serializeAws_restJson1SlotFilter = (input: SlotFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
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
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.slotId !== undefined && input.slotId !== null && { slotId: input.slotId }),
  };
};

const serializeAws_restJson1SlotSortBy = (input: SlotSortBy, context: __SerdeContext): any => {
  return {
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1SlotTypeFilter = (input: SlotTypeFilter, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.operator !== undefined && input.operator !== null && { operator: input.operator }),
    ...(input.values !== undefined &&
      input.values !== null && { values: serializeAws_restJson1FilterValues(input.values, context) }),
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
    ...(input.attribute !== undefined && input.attribute !== null && { attribute: input.attribute }),
    ...(input.order !== undefined && input.order !== null && { order: input.order }),
  };
};

const serializeAws_restJson1SlotTypeValue = (input: SlotTypeValue, context: __SerdeContext): any => {
  return {
    ...(input.sampleValue !== undefined &&
      input.sampleValue !== null && { sampleValue: serializeAws_restJson1SampleValue(input.sampleValue, context) }),
    ...(input.synonyms !== undefined &&
      input.synonyms !== null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }),
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
    ...(input.defaultValueSpecification !== undefined &&
      input.defaultValueSpecification !== null && {
        defaultValueSpecification: serializeAws_restJson1SlotDefaultValueSpecification(
          input.defaultValueSpecification,
          context
        ),
      }),
    ...(input.promptSpecification !== undefined &&
      input.promptSpecification !== null && {
        promptSpecification: serializeAws_restJson1PromptSpecification(input.promptSpecification, context),
      }),
    ...(input.sampleUtterances !== undefined &&
      input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1SampleUtterancesList(input.sampleUtterances, context),
      }),
    ...(input.slotConstraint !== undefined &&
      input.slotConstraint !== null && { slotConstraint: input.slotConstraint }),
    ...(input.waitAndContinueSpecification !== undefined &&
      input.waitAndContinueSpecification !== null && {
        waitAndContinueSpecification: serializeAws_restJson1WaitAndContinueSpecification(
          input.waitAndContinueSpecification,
          context
        ),
      }),
  };
};

const serializeAws_restJson1SlotValueRegexFilter = (input: SlotValueRegexFilter, context: __SerdeContext): any => {
  return {
    ...(input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern }),
  };
};

const serializeAws_restJson1SlotValueSelectionSetting = (
  input: SlotValueSelectionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.regexFilter !== undefined &&
      input.regexFilter !== null && {
        regexFilter: serializeAws_restJson1SlotValueRegexFilter(input.regexFilter, context),
      }),
    ...(input.resolutionStrategy !== undefined &&
      input.resolutionStrategy !== null && { resolutionStrategy: input.resolutionStrategy }),
  };
};

const serializeAws_restJson1SSMLMessage = (input: SSMLMessage, context: __SerdeContext): any => {
  return {
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1StillWaitingResponseSpecification = (
  input: StillWaitingResponseSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.allowInterrupt !== undefined &&
      input.allowInterrupt !== null && { allowInterrupt: input.allowInterrupt }),
    ...(input.frequencyInSeconds !== undefined &&
      input.frequencyInSeconds !== null && { frequencyInSeconds: input.frequencyInSeconds }),
    ...(input.messageGroups !== undefined &&
      input.messageGroups !== null && {
        messageGroups: serializeAws_restJson1MessageGroupsList(input.messageGroups, context),
      }),
    ...(input.timeoutInSeconds !== undefined &&
      input.timeoutInSeconds !== null && { timeoutInSeconds: input.timeoutInSeconds }),
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

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
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
    ...(input.cloudWatch !== undefined &&
      input.cloudWatch !== null && {
        cloudWatch: serializeAws_restJson1CloudWatchLogGroupLogDestination(input.cloudWatch, context),
      }),
  };
};

const serializeAws_restJson1TextLogSetting = (input: TextLogSetting, context: __SerdeContext): any => {
  return {
    ...(input.destination !== undefined &&
      input.destination !== null && {
        destination: serializeAws_restJson1TextLogDestination(input.destination, context),
      }),
    ...(input.enabled !== undefined && input.enabled !== null && { enabled: input.enabled }),
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

const serializeAws_restJson1VoiceSettings = (input: VoiceSettings, context: __SerdeContext): any => {
  return {
    ...(input.voiceId !== undefined && input.voiceId !== null && { voiceId: input.voiceId }),
  };
};

const serializeAws_restJson1WaitAndContinueSpecification = (
  input: WaitAndContinueSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.continueResponse !== undefined &&
      input.continueResponse !== null && {
        continueResponse: serializeAws_restJson1ResponseSpecification(input.continueResponse, context),
      }),
    ...(input.stillWaitingResponse !== undefined &&
      input.stillWaitingResponse !== null && {
        stillWaitingResponse: serializeAws_restJson1StillWaitingResponseSpecification(
          input.stillWaitingResponse,
          context
        ),
      }),
    ...(input.waitingResponse !== undefined &&
      input.waitingResponse !== null && {
        waitingResponse: serializeAws_restJson1ResponseSpecification(input.waitingResponse, context),
      }),
  };
};

const deserializeAws_restJson1AudioLogDestination = (output: any, context: __SerdeContext): AudioLogDestination => {
  return {
    s3Bucket:
      output.s3Bucket !== undefined && output.s3Bucket !== null
        ? deserializeAws_restJson1S3BucketLogDestination(output.s3Bucket, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AudioLogSetting = (output: any, context: __SerdeContext): AudioLogSetting => {
  return {
    destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1AudioLogDestination(output.destination, context)
        : undefined,
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
  } as any;
};

const deserializeAws_restJson1AudioLogSettingsList = (output: any, context: __SerdeContext): AudioLogSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AudioLogSetting(entry, context);
    });
};

const deserializeAws_restJson1BotAliasHistoryEvent = (output: any, context: __SerdeContext): BotAliasHistoryEvent => {
  return {
    botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    endDate:
      output.endDate !== undefined && output.endDate !== null ? new Date(Math.round(output.endDate * 1000)) : undefined,
    startDate:
      output.startDate !== undefined && output.startDate !== null
        ? new Date(Math.round(output.startDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1BotAliasHistoryEventsList = (
  output: any,
  context: __SerdeContext
): BotAliasHistoryEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotAliasHistoryEvent(entry, context);
    });
};

const deserializeAws_restJson1BotAliasLocaleSettings = (
  output: any,
  context: __SerdeContext
): BotAliasLocaleSettings => {
  return {
    codeHookSpecification:
      output.codeHookSpecification !== undefined && output.codeHookSpecification !== null
        ? deserializeAws_restJson1CodeHookSpecification(output.codeHookSpecification, context)
        : undefined,
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
  } as any;
};

const deserializeAws_restJson1BotAliasLocaleSettingsMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: BotAliasLocaleSettings } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: BotAliasLocaleSettings }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1BotAliasLocaleSettings(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1BotAliasSummary = (output: any, context: __SerdeContext): BotAliasSummary => {
  return {
    botAliasId: output.botAliasId !== undefined && output.botAliasId !== null ? output.botAliasId : undefined,
    botAliasName: output.botAliasName !== undefined && output.botAliasName !== null ? output.botAliasName : undefined,
    botAliasStatus:
      output.botAliasStatus !== undefined && output.botAliasStatus !== null ? output.botAliasStatus : undefined,
    botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1BotAliasSummaryList = (output: any, context: __SerdeContext): BotAliasSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotAliasSummary(entry, context);
    });
};

const deserializeAws_restJson1BotLocaleHistoryEvent = (output: any, context: __SerdeContext): BotLocaleHistoryEvent => {
  return {
    event: output.event !== undefined && output.event !== null ? output.event : undefined,
    eventDate:
      output.eventDate !== undefined && output.eventDate !== null
        ? new Date(Math.round(output.eventDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1BotLocaleHistoryEventsList = (
  output: any,
  context: __SerdeContext
): BotLocaleHistoryEvent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotLocaleHistoryEvent(entry, context);
    });
};

const deserializeAws_restJson1BotLocaleSummary = (output: any, context: __SerdeContext): BotLocaleSummary => {
  return {
    botLocaleStatus:
      output.botLocaleStatus !== undefined && output.botLocaleStatus !== null ? output.botLocaleStatus : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastBuildSubmittedDateTime:
      output.lastBuildSubmittedDateTime !== undefined && output.lastBuildSubmittedDateTime !== null
        ? new Date(Math.round(output.lastBuildSubmittedDateTime * 1000))
        : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    localeId: output.localeId !== undefined && output.localeId !== null ? output.localeId : undefined,
    localeName: output.localeName !== undefined && output.localeName !== null ? output.localeName : undefined,
  } as any;
};

const deserializeAws_restJson1BotLocaleSummaryList = (output: any, context: __SerdeContext): BotLocaleSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotLocaleSummary(entry, context);
    });
};

const deserializeAws_restJson1BotSummary = (output: any, context: __SerdeContext): BotSummary => {
  return {
    botId: output.botId !== undefined && output.botId !== null ? output.botId : undefined,
    botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
    botStatus: output.botStatus !== undefined && output.botStatus !== null ? output.botStatus : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    latestBotVersion:
      output.latestBotVersion !== undefined && output.latestBotVersion !== null ? output.latestBotVersion : undefined,
  } as any;
};

const deserializeAws_restJson1BotSummaryList = (output: any, context: __SerdeContext): BotSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotSummary(entry, context);
    });
};

const deserializeAws_restJson1BotVersionLocaleDetails = (
  output: any,
  context: __SerdeContext
): BotVersionLocaleDetails => {
  return {
    sourceBotVersion:
      output.sourceBotVersion !== undefined && output.sourceBotVersion !== null ? output.sourceBotVersion : undefined,
  } as any;
};

const deserializeAws_restJson1BotVersionLocaleSpecification = (
  output: any,
  context: __SerdeContext
): { [key: string]: BotVersionLocaleDetails } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: BotVersionLocaleDetails }, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: deserializeAws_restJson1BotVersionLocaleDetails(value, context),
      };
    },
    {}
  );
};

const deserializeAws_restJson1BotVersionSummary = (output: any, context: __SerdeContext): BotVersionSummary => {
  return {
    botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
    botStatus: output.botStatus !== undefined && output.botStatus !== null ? output.botStatus : undefined,
    botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    creationDateTime:
      output.creationDateTime !== undefined && output.creationDateTime !== null
        ? new Date(Math.round(output.creationDateTime * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
  } as any;
};

const deserializeAws_restJson1BotVersionSummaryList = (output: any, context: __SerdeContext): BotVersionSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotVersionSummary(entry, context);
    });
};

const deserializeAws_restJson1BuiltInIntentSummary = (output: any, context: __SerdeContext): BuiltInIntentSummary => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    intentSignature:
      output.intentSignature !== undefined && output.intentSignature !== null ? output.intentSignature : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltInIntentSummaryList = (
  output: any,
  context: __SerdeContext
): BuiltInIntentSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltInIntentSummary(entry, context);
    });
};

const deserializeAws_restJson1BuiltInSlotTypeSummary = (
  output: any,
  context: __SerdeContext
): BuiltInSlotTypeSummary => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    slotTypeSignature:
      output.slotTypeSignature !== undefined && output.slotTypeSignature !== null
        ? output.slotTypeSignature
        : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltInSlotTypeSummaryList = (
  output: any,
  context: __SerdeContext
): BuiltInSlotTypeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltInSlotTypeSummary(entry, context);
    });
};

const deserializeAws_restJson1Button = (output: any, context: __SerdeContext): Button => {
  return {
    text: output.text !== undefined && output.text !== null ? output.text : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1ButtonsList = (output: any, context: __SerdeContext): Button[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Button(entry, context);
    });
};

const deserializeAws_restJson1CloudWatchLogGroupLogDestination = (
  output: any,
  context: __SerdeContext
): CloudWatchLogGroupLogDestination => {
  return {
    cloudWatchLogGroupArn:
      output.cloudWatchLogGroupArn !== undefined && output.cloudWatchLogGroupArn !== null
        ? output.cloudWatchLogGroupArn
        : undefined,
    logPrefix: output.logPrefix !== undefined && output.logPrefix !== null ? output.logPrefix : undefined,
  } as any;
};

const deserializeAws_restJson1CodeHookSpecification = (output: any, context: __SerdeContext): CodeHookSpecification => {
  return {
    lambdaCodeHook:
      output.lambdaCodeHook !== undefined && output.lambdaCodeHook !== null
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
      output.audioLogSettings !== undefined && output.audioLogSettings !== null
        ? deserializeAws_restJson1AudioLogSettingsList(output.audioLogSettings, context)
        : undefined,
    textLogSettings:
      output.textLogSettings !== undefined && output.textLogSettings !== null
        ? deserializeAws_restJson1TextLogSettingsList(output.textLogSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CustomPayload = (output: any, context: __SerdeContext): CustomPayload => {
  return {
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1DataPrivacy = (output: any, context: __SerdeContext): DataPrivacy => {
  return {
    childDirected:
      output.childDirected !== undefined && output.childDirected !== null ? output.childDirected : undefined,
  } as any;
};

const deserializeAws_restJson1DialogCodeHookSettings = (
  output: any,
  context: __SerdeContext
): DialogCodeHookSettings => {
  return {
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
  } as any;
};

const deserializeAws_restJson1FailureReasons = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1FulfillmentCodeHookSettings = (
  output: any,
  context: __SerdeContext
): FulfillmentCodeHookSettings => {
  return {
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
  } as any;
};

const deserializeAws_restJson1ImageResponseCard = (output: any, context: __SerdeContext): ImageResponseCard => {
  return {
    buttons:
      output.buttons !== undefined && output.buttons !== null
        ? deserializeAws_restJson1ButtonsList(output.buttons, context)
        : undefined,
    imageUrl: output.imageUrl !== undefined && output.imageUrl !== null ? output.imageUrl : undefined,
    subtitle: output.subtitle !== undefined && output.subtitle !== null ? output.subtitle : undefined,
    title: output.title !== undefined && output.title !== null ? output.title : undefined,
  } as any;
};

const deserializeAws_restJson1InputContext = (output: any, context: __SerdeContext): InputContext => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1InputContextsList = (output: any, context: __SerdeContext): InputContext[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputContext(entry, context);
    });
};

const deserializeAws_restJson1IntentClosingSetting = (output: any, context: __SerdeContext): IntentClosingSetting => {
  return {
    closingResponse:
      output.closingResponse !== undefined && output.closingResponse !== null
        ? deserializeAws_restJson1ResponseSpecification(output.closingResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IntentConfirmationSetting = (
  output: any,
  context: __SerdeContext
): IntentConfirmationSetting => {
  return {
    declinationResponse:
      output.declinationResponse !== undefined && output.declinationResponse !== null
        ? deserializeAws_restJson1ResponseSpecification(output.declinationResponse, context)
        : undefined,
    promptSpecification:
      output.promptSpecification !== undefined && output.promptSpecification !== null
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IntentSummary = (output: any, context: __SerdeContext): IntentSummary => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    inputContexts:
      output.inputContexts !== undefined && output.inputContexts !== null
        ? deserializeAws_restJson1InputContextsList(output.inputContexts, context)
        : undefined,
    intentId: output.intentId !== undefined && output.intentId !== null ? output.intentId : undefined,
    intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    outputContexts:
      output.outputContexts !== undefined && output.outputContexts !== null
        ? deserializeAws_restJson1OutputContextsList(output.outputContexts, context)
        : undefined,
    parentIntentSignature:
      output.parentIntentSignature !== undefined && output.parentIntentSignature !== null
        ? output.parentIntentSignature
        : undefined,
  } as any;
};

const deserializeAws_restJson1IntentSummaryList = (output: any, context: __SerdeContext): IntentSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntentSummary(entry, context);
    });
};

const deserializeAws_restJson1KendraConfiguration = (output: any, context: __SerdeContext): KendraConfiguration => {
  return {
    kendraIndex: output.kendraIndex !== undefined && output.kendraIndex !== null ? output.kendraIndex : undefined,
    queryFilterString:
      output.queryFilterString !== undefined && output.queryFilterString !== null
        ? output.queryFilterString
        : undefined,
    queryFilterStringEnabled:
      output.queryFilterStringEnabled !== undefined && output.queryFilterStringEnabled !== null
        ? output.queryFilterStringEnabled
        : undefined,
  } as any;
};

const deserializeAws_restJson1LambdaCodeHook = (output: any, context: __SerdeContext): LambdaCodeHook => {
  return {
    codeHookInterfaceVersion:
      output.codeHookInterfaceVersion !== undefined && output.codeHookInterfaceVersion !== null
        ? output.codeHookInterfaceVersion
        : undefined,
    lambdaARN: output.lambdaARN !== undefined && output.lambdaARN !== null ? output.lambdaARN : undefined,
  } as any;
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    customPayload:
      output.customPayload !== undefined && output.customPayload !== null
        ? deserializeAws_restJson1CustomPayload(output.customPayload, context)
        : undefined,
    imageResponseCard:
      output.imageResponseCard !== undefined && output.imageResponseCard !== null
        ? deserializeAws_restJson1ImageResponseCard(output.imageResponseCard, context)
        : undefined,
    plainTextMessage:
      output.plainTextMessage !== undefined && output.plainTextMessage !== null
        ? deserializeAws_restJson1PlainTextMessage(output.plainTextMessage, context)
        : undefined,
    ssmlMessage:
      output.ssmlMessage !== undefined && output.ssmlMessage !== null
        ? deserializeAws_restJson1SSMLMessage(output.ssmlMessage, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageGroup = (output: any, context: __SerdeContext): MessageGroup => {
  return {
    message:
      output.message !== undefined && output.message !== null
        ? deserializeAws_restJson1Message(output.message, context)
        : undefined,
    variations:
      output.variations !== undefined && output.variations !== null
        ? deserializeAws_restJson1MessageVariationsList(output.variations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1MessageGroupsList = (output: any, context: __SerdeContext): MessageGroup[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MessageGroup(entry, context);
    });
};

const deserializeAws_restJson1MessageVariationsList = (output: any, context: __SerdeContext): Message[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Message(entry, context);
    });
};

const deserializeAws_restJson1ObfuscationSetting = (output: any, context: __SerdeContext): ObfuscationSetting => {
  return {
    obfuscationSettingType:
      output.obfuscationSettingType !== undefined && output.obfuscationSettingType !== null
        ? output.obfuscationSettingType
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputContext = (output: any, context: __SerdeContext): OutputContext => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    timeToLiveInSeconds:
      output.timeToLiveInSeconds !== undefined && output.timeToLiveInSeconds !== null
        ? output.timeToLiveInSeconds
        : undefined,
    turnsToLive: output.turnsToLive !== undefined && output.turnsToLive !== null ? output.turnsToLive : undefined,
  } as any;
};

const deserializeAws_restJson1OutputContextsList = (output: any, context: __SerdeContext): OutputContext[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputContext(entry, context);
    });
};

const deserializeAws_restJson1PlainTextMessage = (output: any, context: __SerdeContext): PlainTextMessage => {
  return {
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1PromptSpecification = (output: any, context: __SerdeContext): PromptSpecification => {
  return {
    allowInterrupt:
      output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
    maxRetries: output.maxRetries !== undefined && output.maxRetries !== null ? output.maxRetries : undefined,
    messageGroups:
      output.messageGroups !== undefined && output.messageGroups !== null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResponseSpecification = (output: any, context: __SerdeContext): ResponseSpecification => {
  return {
    allowInterrupt:
      output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
    messageGroups:
      output.messageGroups !== undefined && output.messageGroups !== null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1S3BucketLogDestination = (
  output: any,
  context: __SerdeContext
): S3BucketLogDestination => {
  return {
    kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    logPrefix: output.logPrefix !== undefined && output.logPrefix !== null ? output.logPrefix : undefined,
    s3BucketArn: output.s3BucketArn !== undefined && output.s3BucketArn !== null ? output.s3BucketArn : undefined,
  } as any;
};

const deserializeAws_restJson1SampleUtterance = (output: any, context: __SerdeContext): SampleUtterance => {
  return {
    utterance: output.utterance !== undefined && output.utterance !== null ? output.utterance : undefined,
  } as any;
};

const deserializeAws_restJson1SampleUtterancesList = (output: any, context: __SerdeContext): SampleUtterance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SampleUtterance(entry, context);
    });
};

const deserializeAws_restJson1SampleValue = (output: any, context: __SerdeContext): SampleValue => {
  return {
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1SentimentAnalysisSettings = (
  output: any,
  context: __SerdeContext
): SentimentAnalysisSettings => {
  return {
    detectSentiment:
      output.detectSentiment !== undefined && output.detectSentiment !== null ? output.detectSentiment : undefined,
  } as any;
};

const deserializeAws_restJson1SlotDefaultValue = (output: any, context: __SerdeContext): SlotDefaultValue => {
  return {
    defaultValue: output.defaultValue !== undefined && output.defaultValue !== null ? output.defaultValue : undefined,
  } as any;
};

const deserializeAws_restJson1SlotDefaultValueList = (output: any, context: __SerdeContext): SlotDefaultValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotDefaultValue(entry, context);
    });
};

const deserializeAws_restJson1SlotDefaultValueSpecification = (
  output: any,
  context: __SerdeContext
): SlotDefaultValueSpecification => {
  return {
    defaultValueList:
      output.defaultValueList !== undefined && output.defaultValueList !== null
        ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotPrioritiesList = (output: any, context: __SerdeContext): SlotPriority[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotPriority(entry, context);
    });
};

const deserializeAws_restJson1SlotPriority = (output: any, context: __SerdeContext): SlotPriority => {
  return {
    priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    slotId: output.slotId !== undefined && output.slotId !== null ? output.slotId : undefined,
  } as any;
};

const deserializeAws_restJson1SlotSummary = (output: any, context: __SerdeContext): SlotSummary => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    slotConstraint:
      output.slotConstraint !== undefined && output.slotConstraint !== null ? output.slotConstraint : undefined,
    slotId: output.slotId !== undefined && output.slotId !== null ? output.slotId : undefined,
    slotName: output.slotName !== undefined && output.slotName !== null ? output.slotName : undefined,
    slotTypeId: output.slotTypeId !== undefined && output.slotTypeId !== null ? output.slotTypeId : undefined,
    valueElicitationPromptSpecification:
      output.valueElicitationPromptSpecification !== undefined && output.valueElicitationPromptSpecification !== null
        ? deserializeAws_restJson1PromptSpecification(output.valueElicitationPromptSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotSummaryList = (output: any, context: __SerdeContext): SlotSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotSummary(entry, context);
    });
};

const deserializeAws_restJson1SlotTypeSummary = (output: any, context: __SerdeContext): SlotTypeSummary => {
  return {
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDateTime:
      output.lastUpdatedDateTime !== undefined && output.lastUpdatedDateTime !== null
        ? new Date(Math.round(output.lastUpdatedDateTime * 1000))
        : undefined,
    parentSlotTypeSignature:
      output.parentSlotTypeSignature !== undefined && output.parentSlotTypeSignature !== null
        ? output.parentSlotTypeSignature
        : undefined,
    slotTypeId: output.slotTypeId !== undefined && output.slotTypeId !== null ? output.slotTypeId : undefined,
    slotTypeName: output.slotTypeName !== undefined && output.slotTypeName !== null ? output.slotTypeName : undefined,
  } as any;
};

const deserializeAws_restJson1SlotTypeSummaryList = (output: any, context: __SerdeContext): SlotTypeSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeSummary(entry, context);
    });
};

const deserializeAws_restJson1SlotTypeValue = (output: any, context: __SerdeContext): SlotTypeValue => {
  return {
    sampleValue:
      output.sampleValue !== undefined && output.sampleValue !== null
        ? deserializeAws_restJson1SampleValue(output.sampleValue, context)
        : undefined,
    synonyms:
      output.synonyms !== undefined && output.synonyms !== null
        ? deserializeAws_restJson1SynonymList(output.synonyms, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotTypeValues = (output: any, context: __SerdeContext): SlotTypeValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeValue(entry, context);
    });
};

const deserializeAws_restJson1SlotValueElicitationSetting = (
  output: any,
  context: __SerdeContext
): SlotValueElicitationSetting => {
  return {
    defaultValueSpecification:
      output.defaultValueSpecification !== undefined && output.defaultValueSpecification !== null
        ? deserializeAws_restJson1SlotDefaultValueSpecification(output.defaultValueSpecification, context)
        : undefined,
    promptSpecification:
      output.promptSpecification !== undefined && output.promptSpecification !== null
        ? deserializeAws_restJson1PromptSpecification(output.promptSpecification, context)
        : undefined,
    sampleUtterances:
      output.sampleUtterances !== undefined && output.sampleUtterances !== null
        ? deserializeAws_restJson1SampleUtterancesList(output.sampleUtterances, context)
        : undefined,
    slotConstraint:
      output.slotConstraint !== undefined && output.slotConstraint !== null ? output.slotConstraint : undefined,
    waitAndContinueSpecification:
      output.waitAndContinueSpecification !== undefined && output.waitAndContinueSpecification !== null
        ? deserializeAws_restJson1WaitAndContinueSpecification(output.waitAndContinueSpecification, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotValueRegexFilter = (output: any, context: __SerdeContext): SlotValueRegexFilter => {
  return {
    pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
  } as any;
};

const deserializeAws_restJson1SlotValueSelectionSetting = (
  output: any,
  context: __SerdeContext
): SlotValueSelectionSetting => {
  return {
    regexFilter:
      output.regexFilter !== undefined && output.regexFilter !== null
        ? deserializeAws_restJson1SlotValueRegexFilter(output.regexFilter, context)
        : undefined,
    resolutionStrategy:
      output.resolutionStrategy !== undefined && output.resolutionStrategy !== null
        ? output.resolutionStrategy
        : undefined,
  } as any;
};

const deserializeAws_restJson1SSMLMessage = (output: any, context: __SerdeContext): SSMLMessage => {
  return {
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1StillWaitingResponseSpecification = (
  output: any,
  context: __SerdeContext
): StillWaitingResponseSpecification => {
  return {
    allowInterrupt:
      output.allowInterrupt !== undefined && output.allowInterrupt !== null ? output.allowInterrupt : undefined,
    frequencyInSeconds:
      output.frequencyInSeconds !== undefined && output.frequencyInSeconds !== null
        ? output.frequencyInSeconds
        : undefined,
    messageGroups:
      output.messageGroups !== undefined && output.messageGroups !== null
        ? deserializeAws_restJson1MessageGroupsList(output.messageGroups, context)
        : undefined,
    timeoutInSeconds:
      output.timeoutInSeconds !== undefined && output.timeoutInSeconds !== null ? output.timeoutInSeconds : undefined,
  } as any;
};

const deserializeAws_restJson1SynonymList = (output: any, context: __SerdeContext): SampleValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SampleValue(entry, context);
    });
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const deserializeAws_restJson1TextLogDestination = (output: any, context: __SerdeContext): TextLogDestination => {
  return {
    cloudWatch:
      output.cloudWatch !== undefined && output.cloudWatch !== null
        ? deserializeAws_restJson1CloudWatchLogGroupLogDestination(output.cloudWatch, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TextLogSetting = (output: any, context: __SerdeContext): TextLogSetting => {
  return {
    destination:
      output.destination !== undefined && output.destination !== null
        ? deserializeAws_restJson1TextLogDestination(output.destination, context)
        : undefined,
    enabled: output.enabled !== undefined && output.enabled !== null ? output.enabled : undefined,
  } as any;
};

const deserializeAws_restJson1TextLogSettingsList = (output: any, context: __SerdeContext): TextLogSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TextLogSetting(entry, context);
    });
};

const deserializeAws_restJson1VoiceSettings = (output: any, context: __SerdeContext): VoiceSettings => {
  return {
    voiceId: output.voiceId !== undefined && output.voiceId !== null ? output.voiceId : undefined,
  } as any;
};

const deserializeAws_restJson1WaitAndContinueSpecification = (
  output: any,
  context: __SerdeContext
): WaitAndContinueSpecification => {
  return {
    continueResponse:
      output.continueResponse !== undefined && output.continueResponse !== null
        ? deserializeAws_restJson1ResponseSpecification(output.continueResponse, context)
        : undefined,
    stillWaitingResponse:
      output.stillWaitingResponse !== undefined && output.stillWaitingResponse !== null
        ? deserializeAws_restJson1StillWaitingResponseSpecification(output.stillWaitingResponse, context)
        : undefined,
    waitingResponse:
      output.waitingResponse !== undefined && output.waitingResponse !== null
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
