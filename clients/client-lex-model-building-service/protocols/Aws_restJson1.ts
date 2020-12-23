import { CreateBotVersionCommandInput, CreateBotVersionCommandOutput } from "../commands/CreateBotVersionCommand";
import {
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput,
} from "../commands/CreateIntentVersionCommand";
import {
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput,
} from "../commands/CreateSlotTypeVersionCommand";
import { DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput } from "../commands/DeleteBotAliasCommand";
import {
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput,
} from "../commands/DeleteBotChannelAssociationCommand";
import { DeleteBotCommandInput, DeleteBotCommandOutput } from "../commands/DeleteBotCommand";
import { DeleteBotVersionCommandInput, DeleteBotVersionCommandOutput } from "../commands/DeleteBotVersionCommand";
import { DeleteIntentCommandInput, DeleteIntentCommandOutput } from "../commands/DeleteIntentCommand";
import {
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput,
} from "../commands/DeleteIntentVersionCommand";
import { DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput } from "../commands/DeleteSlotTypeCommand";
import {
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput,
} from "../commands/DeleteSlotTypeVersionCommand";
import { DeleteUtterancesCommandInput, DeleteUtterancesCommandOutput } from "../commands/DeleteUtterancesCommand";
import { GetBotAliasCommandInput, GetBotAliasCommandOutput } from "../commands/GetBotAliasCommand";
import { GetBotAliasesCommandInput, GetBotAliasesCommandOutput } from "../commands/GetBotAliasesCommand";
import {
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput,
} from "../commands/GetBotChannelAssociationCommand";
import {
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput,
} from "../commands/GetBotChannelAssociationsCommand";
import { GetBotCommandInput, GetBotCommandOutput } from "../commands/GetBotCommand";
import { GetBotVersionsCommandInput, GetBotVersionsCommandOutput } from "../commands/GetBotVersionsCommand";
import { GetBotsCommandInput, GetBotsCommandOutput } from "../commands/GetBotsCommand";
import { GetBuiltinIntentCommandInput, GetBuiltinIntentCommandOutput } from "../commands/GetBuiltinIntentCommand";
import { GetBuiltinIntentsCommandInput, GetBuiltinIntentsCommandOutput } from "../commands/GetBuiltinIntentsCommand";
import {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput,
} from "../commands/GetBuiltinSlotTypesCommand";
import { GetExportCommandInput, GetExportCommandOutput } from "../commands/GetExportCommand";
import { GetImportCommandInput, GetImportCommandOutput } from "../commands/GetImportCommand";
import { GetIntentCommandInput, GetIntentCommandOutput } from "../commands/GetIntentCommand";
import { GetIntentVersionsCommandInput, GetIntentVersionsCommandOutput } from "../commands/GetIntentVersionsCommand";
import { GetIntentsCommandInput, GetIntentsCommandOutput } from "../commands/GetIntentsCommand";
import { GetSlotTypeCommandInput, GetSlotTypeCommandOutput } from "../commands/GetSlotTypeCommand";
import {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput,
} from "../commands/GetSlotTypeVersionsCommand";
import { GetSlotTypesCommandInput, GetSlotTypesCommandOutput } from "../commands/GetSlotTypesCommand";
import { GetUtterancesViewCommandInput, GetUtterancesViewCommandOutput } from "../commands/GetUtterancesViewCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PutBotAliasCommandInput, PutBotAliasCommandOutput } from "../commands/PutBotAliasCommand";
import { PutBotCommandInput, PutBotCommandOutput } from "../commands/PutBotCommand";
import { PutIntentCommandInput, PutIntentCommandOutput } from "../commands/PutIntentCommand";
import { PutSlotTypeCommandInput, PutSlotTypeCommandOutput } from "../commands/PutSlotTypeCommand";
import { StartImportCommandInput, StartImportCommandOutput } from "../commands/StartImportCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  BadRequestException,
  BotAliasMetadata,
  BotChannelAssociation,
  BotMetadata,
  BuiltinIntentMetadata,
  BuiltinIntentSlot,
  BuiltinSlotTypeMetadata,
  CodeHook,
  ConflictException,
  ConversationLogsRequest,
  ConversationLogsResponse,
  EnumerationValue,
  FollowUpPrompt,
  FulfillmentActivity,
  InputContext,
  Intent,
  IntentMetadata,
  InternalFailureException,
  KendraConfiguration,
  LimitExceededException,
  Locale,
  LogSettingsRequest,
  LogSettingsResponse,
  Message,
  NotFoundException,
  OutputContext,
  PreconditionFailedException,
  Prompt,
  ResourceInUseException,
  ResourceReference,
  Slot,
  SlotDefaultValue,
  SlotDefaultValueSpec,
  SlotTypeConfiguration,
  SlotTypeMetadata,
  SlotTypeRegexConfiguration,
  Statement,
  Tag,
  UtteranceData,
  UtteranceList,
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

export const serializeAws_restJson1CreateBotVersionCommand = async (
  input: CreateBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
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

export const serializeAws_restJson1CreateIntentVersionCommand = async (
  input: CreateIntentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/intents/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
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

export const serializeAws_restJson1CreateSlotTypeVersionCommand = async (
  input: CreateSlotTypeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/slottypes/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
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

export const serializeAws_restJson1DeleteBotCommand = async (
  input: DeleteBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
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

export const serializeAws_restJson1DeleteBotAliasCommand = async (
  input: DeleteBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/aliases/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
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

export const serializeAws_restJson1DeleteBotChannelAssociationCommand = async (
  input: DeleteBotChannelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
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
  let resolvedPath = "/bots/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: version.");
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

export const serializeAws_restJson1DeleteIntentCommand = async (
  input: DeleteIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/intents/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
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

export const serializeAws_restJson1DeleteIntentVersionCommand = async (
  input: DeleteIntentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/intents/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: version.");
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
  let resolvedPath = "/slottypes/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
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

export const serializeAws_restJson1DeleteSlotTypeVersionCommand = async (
  input: DeleteSlotTypeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/slottypes/{name}/version/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: version.");
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

export const serializeAws_restJson1DeleteUtterancesCommand = async (
  input: DeleteUtterancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/utterances/{userId}";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace("{userId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
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

export const serializeAws_restJson1GetBotCommand = async (
  input: GetBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{name}/versions/{versionOrAlias}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.versionOrAlias !== undefined) {
    const labelValue: string = input.versionOrAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: versionOrAlias.");
    }
    resolvedPath = resolvedPath.replace("{versionOrAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: versionOrAlias.");
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

export const serializeAws_restJson1GetBotAliasCommand = async (
  input: GetBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/aliases/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
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

export const serializeAws_restJson1GetBotAliasesCommand = async (
  input: GetBotAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/aliases";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nameContains !== undefined && { nameContains: input.nameContains }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBotChannelAssociationCommand = async (
  input: GetBotChannelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
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

export const serializeAws_restJson1GetBotChannelAssociationsCommand = async (
  input: GetBotChannelAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace("{botAlias}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nameContains !== undefined && { nameContains: input.nameContains }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBotsCommand = async (
  input: GetBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nameContains !== undefined && { nameContains: input.nameContains }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBotVersionsCommand = async (
  input: GetBotVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBuiltinIntentCommand = async (
  input: GetBuiltinIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/builtins/intents/{signature}";
  if (input.signature !== undefined) {
    const labelValue: string = input.signature;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: signature.");
    }
    resolvedPath = resolvedPath.replace("{signature}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: signature.");
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

export const serializeAws_restJson1GetBuiltinIntentsCommand = async (
  input: GetBuiltinIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/builtins/intents";
  const query: any = {
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.signatureContains !== undefined && { signatureContains: input.signatureContains }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetBuiltinSlotTypesCommand = async (
  input: GetBuiltinSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/builtins/slottypes";
  const query: any = {
    ...(input.locale !== undefined && { locale: input.locale }),
    ...(input.signatureContains !== undefined && { signatureContains: input.signatureContains }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetExportCommand = async (
  input: GetExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/exports";
  const query: any = {
    ...(input.name !== undefined && { name: input.name }),
    ...(input.version !== undefined && { version: input.version }),
    ...(input.resourceType !== undefined && { resourceType: input.resourceType }),
    ...(input.exportType !== undefined && { exportType: input.exportType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetImportCommand = async (
  input: GetImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/imports/{importId}";
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

export const serializeAws_restJson1GetIntentCommand = async (
  input: GetIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/intents/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: version.");
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

export const serializeAws_restJson1GetIntentsCommand = async (
  input: GetIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/intents";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nameContains !== undefined && { nameContains: input.nameContains }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetIntentVersionsCommand = async (
  input: GetIntentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/intents/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSlotTypeCommand = async (
  input: GetSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/slottypes/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace("{version}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: version.");
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

export const serializeAws_restJson1GetSlotTypesCommand = async (
  input: GetSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/slottypes";
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
    ...(input.nameContains !== undefined && { nameContains: input.nameContains }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetSlotTypeVersionsCommand = async (
  input: GetSlotTypeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/slottypes/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.maxResults !== undefined && { maxResults: input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1GetUtterancesViewCommand = async (
  input: GetUtterancesViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/bots/{botName}/utterances";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  const query: any = {
    view: "aggregation",
    ...(input.botVersions !== undefined && { bot_versions: (input.botVersions || []).map((_entry) => _entry) }),
    ...(input.statusType !== undefined && { status_type: input.statusType }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  let resolvedPath = "/tags/{resourceArn}";
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

export const serializeAws_restJson1PutBotCommand = async (
  input: PutBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{name}/versions/$LATEST";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.abortStatement !== undefined &&
      input.abortStatement !== null && {
        abortStatement: serializeAws_restJson1Statement(input.abortStatement, context),
      }),
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
    ...(input.childDirected !== undefined && input.childDirected !== null && { childDirected: input.childDirected }),
    ...(input.clarificationPrompt !== undefined &&
      input.clarificationPrompt !== null && {
        clarificationPrompt: serializeAws_restJson1Prompt(input.clarificationPrompt, context),
      }),
    ...(input.createVersion !== undefined && input.createVersion !== null && { createVersion: input.createVersion }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.detectSentiment !== undefined &&
      input.detectSentiment !== null && { detectSentiment: input.detectSentiment }),
    ...(input.enableModelImprovements !== undefined &&
      input.enableModelImprovements !== null && { enableModelImprovements: input.enableModelImprovements }),
    ...(input.idleSessionTTLInSeconds !== undefined &&
      input.idleSessionTTLInSeconds !== null && { idleSessionTTLInSeconds: input.idleSessionTTLInSeconds }),
    ...(input.intents !== undefined &&
      input.intents !== null && { intents: serializeAws_restJson1IntentList(input.intents, context) }),
    ...(input.locale !== undefined && input.locale !== null && { locale: input.locale }),
    ...(input.nluIntentConfidenceThreshold !== undefined &&
      input.nluIntentConfidenceThreshold !== null && {
        nluIntentConfidenceThreshold: input.nluIntentConfidenceThreshold,
      }),
    ...(input.processBehavior !== undefined &&
      input.processBehavior !== null && { processBehavior: input.processBehavior }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
    ...(input.voiceId !== undefined && input.voiceId !== null && { voiceId: input.voiceId }),
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

export const serializeAws_restJson1PutBotAliasCommand = async (
  input: PutBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/bots/{botName}/aliases/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace("{botName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.botVersion !== undefined && input.botVersion !== null && { botVersion: input.botVersion }),
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
    ...(input.conversationLogs !== undefined &&
      input.conversationLogs !== null && {
        conversationLogs: serializeAws_restJson1ConversationLogsRequest(input.conversationLogs, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1PutIntentCommand = async (
  input: PutIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/intents/{name}/versions/$LATEST";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
    ...(input.conclusionStatement !== undefined &&
      input.conclusionStatement !== null && {
        conclusionStatement: serializeAws_restJson1Statement(input.conclusionStatement, context),
      }),
    ...(input.confirmationPrompt !== undefined &&
      input.confirmationPrompt !== null && {
        confirmationPrompt: serializeAws_restJson1Prompt(input.confirmationPrompt, context),
      }),
    ...(input.createVersion !== undefined && input.createVersion !== null && { createVersion: input.createVersion }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.dialogCodeHook !== undefined &&
      input.dialogCodeHook !== null && {
        dialogCodeHook: serializeAws_restJson1CodeHook(input.dialogCodeHook, context),
      }),
    ...(input.followUpPrompt !== undefined &&
      input.followUpPrompt !== null && {
        followUpPrompt: serializeAws_restJson1FollowUpPrompt(input.followUpPrompt, context),
      }),
    ...(input.fulfillmentActivity !== undefined &&
      input.fulfillmentActivity !== null && {
        fulfillmentActivity: serializeAws_restJson1FulfillmentActivity(input.fulfillmentActivity, context),
      }),
    ...(input.inputContexts !== undefined &&
      input.inputContexts !== null && {
        inputContexts: serializeAws_restJson1InputContextList(input.inputContexts, context),
      }),
    ...(input.kendraConfiguration !== undefined &&
      input.kendraConfiguration !== null && {
        kendraConfiguration: serializeAws_restJson1KendraConfiguration(input.kendraConfiguration, context),
      }),
    ...(input.outputContexts !== undefined &&
      input.outputContexts !== null && {
        outputContexts: serializeAws_restJson1OutputContextList(input.outputContexts, context),
      }),
    ...(input.parentIntentSignature !== undefined &&
      input.parentIntentSignature !== null && { parentIntentSignature: input.parentIntentSignature }),
    ...(input.rejectionStatement !== undefined &&
      input.rejectionStatement !== null && {
        rejectionStatement: serializeAws_restJson1Statement(input.rejectionStatement, context),
      }),
    ...(input.sampleUtterances !== undefined &&
      input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1IntentUtteranceList(input.sampleUtterances, context),
      }),
    ...(input.slots !== undefined &&
      input.slots !== null && { slots: serializeAws_restJson1SlotList(input.slots, context) }),
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

export const serializeAws_restJson1PutSlotTypeCommand = async (
  input: PutSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/slottypes/{name}/versions/$LATEST";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace("{name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.checksum !== undefined && input.checksum !== null && { checksum: input.checksum }),
    ...(input.createVersion !== undefined && input.createVersion !== null && { createVersion: input.createVersion }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.enumerationValues !== undefined &&
      input.enumerationValues !== null && {
        enumerationValues: serializeAws_restJson1EnumerationValues(input.enumerationValues, context),
      }),
    ...(input.parentSlotTypeSignature !== undefined &&
      input.parentSlotTypeSignature !== null && { parentSlotTypeSignature: input.parentSlotTypeSignature }),
    ...(input.slotTypeConfigurations !== undefined &&
      input.slotTypeConfigurations !== null && {
        slotTypeConfigurations: serializeAws_restJson1SlotTypeConfigurations(input.slotTypeConfigurations, context),
      }),
    ...(input.valueSelectionStrategy !== undefined &&
      input.valueSelectionStrategy !== null && { valueSelectionStrategy: input.valueSelectionStrategy }),
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

export const serializeAws_restJson1StartImportCommand = async (
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/imports";
  let body: any;
  body = JSON.stringify({
    ...(input.mergeStrategy !== undefined && input.mergeStrategy !== null && { mergeStrategy: input.mergeStrategy }),
    ...(input.payload !== undefined && input.payload !== null && { payload: context.base64Encoder(input.payload) }),
    ...(input.resourceType !== undefined && input.resourceType !== null && { resourceType: input.resourceType }),
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = "/tags/{resourceArn}";
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
    ...(input.tags !== undefined &&
      input.tags !== null && { tags: serializeAws_restJson1TagList(input.tags, context) }),
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
  let resolvedPath = "/tags/{resourceArn}";
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

export const deserializeAws_restJson1CreateBotVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBotVersionCommandError(output, context);
  }
  const contents: CreateBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    abortStatement: undefined,
    checksum: undefined,
    childDirected: undefined,
    clarificationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    detectSentiment: undefined,
    enableModelImprovements: undefined,
    failureReason: undefined,
    idleSessionTTLInSeconds: undefined,
    intents: undefined,
    lastUpdatedDate: undefined,
    locale: undefined,
    name: undefined,
    status: undefined,
    version: undefined,
    voiceId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.abortStatement !== undefined && data.abortStatement !== null) {
    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.childDirected !== undefined && data.childDirected !== null) {
    contents.childDirected = data.childDirected;
  }
  if (data.clarificationPrompt !== undefined && data.clarificationPrompt !== null) {
    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.detectSentiment !== undefined && data.detectSentiment !== null) {
    contents.detectSentiment = data.detectSentiment;
  }
  if (data.enableModelImprovements !== undefined && data.enableModelImprovements !== null) {
    contents.enableModelImprovements = data.enableModelImprovements;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.locale !== undefined && data.locale !== null) {
    contents.locale = data.locale;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.voiceId !== undefined && data.voiceId !== null) {
    contents.voiceId = data.voiceId;
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateIntentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateIntentVersionCommandError(output, context);
  }
  const contents: CreateIntentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
    conclusionStatement: undefined,
    confirmationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    followUpPrompt: undefined,
    fulfillmentActivity: undefined,
    inputContexts: undefined,
    kendraConfiguration: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    outputContexts: undefined,
    parentIntentSignature: undefined,
    rejectionStatement: undefined,
    sampleUtterances: undefined,
    slots: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.conclusionStatement !== undefined && data.conclusionStatement !== null) {
    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
  }
  if (data.confirmationPrompt !== undefined && data.confirmationPrompt !== null) {
    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
  }
  if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
  }
  if (data.fulfillmentActivity !== undefined && data.fulfillmentActivity !== null) {
    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
  }
  if (data.inputContexts !== undefined && data.inputContexts !== null) {
    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = data.parentIntentSignature;
  }
  if (data.rejectionStatement !== undefined && data.rejectionStatement !== null) {
    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateIntentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateSlotTypeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSlotTypeVersionCommandError(output, context);
  }
  const contents: CreateSlotTypeVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
    createdDate: undefined,
    description: undefined,
    enumerationValues: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeConfigurations: undefined,
    valueSelectionStrategy: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.enumerationValues !== undefined && data.enumerationValues !== null) {
    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
  }
  if (data.slotTypeConfigurations !== undefined && data.slotTypeConfigurations !== null) {
    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(
      data.slotTypeConfigurations,
      context
    );
  }
  if (data.valueSelectionStrategy !== undefined && data.valueSelectionStrategy !== null) {
    contents.valueSelectionStrategy = data.valueSelectionStrategy;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSlotTypeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotCommandError(output, context);
  }
  const contents: DeleteBotCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotAliasCommandError(output, context);
  }
  const contents: DeleteBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteBotChannelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotChannelAssociationCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotChannelAssociationCommandError(output, context);
  }
  const contents: DeleteBotChannelAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBotChannelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotChannelAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBotVersionCommandError(output, context);
  }
  const contents: DeleteBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteIntentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteIntentVersionCommandError(output, context);
  }
  const contents: DeleteIntentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteIntentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DeleteSlotTypeVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteSlotTypeVersionCommandError(output, context);
  }
  const contents: DeleteSlotTypeVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteSlotTypeVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lexmodelbuildingservice#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotCommandError(output, context);
  }
  const contents: GetBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    abortStatement: undefined,
    checksum: undefined,
    childDirected: undefined,
    clarificationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    detectSentiment: undefined,
    enableModelImprovements: undefined,
    failureReason: undefined,
    idleSessionTTLInSeconds: undefined,
    intents: undefined,
    lastUpdatedDate: undefined,
    locale: undefined,
    name: undefined,
    nluIntentConfidenceThreshold: undefined,
    status: undefined,
    version: undefined,
    voiceId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.abortStatement !== undefined && data.abortStatement !== null) {
    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.childDirected !== undefined && data.childDirected !== null) {
    contents.childDirected = data.childDirected;
  }
  if (data.clarificationPrompt !== undefined && data.clarificationPrompt !== null) {
    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.detectSentiment !== undefined && data.detectSentiment !== null) {
    contents.detectSentiment = data.detectSentiment;
  }
  if (data.enableModelImprovements !== undefined && data.enableModelImprovements !== null) {
    contents.enableModelImprovements = data.enableModelImprovements;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.locale !== undefined && data.locale !== null) {
    contents.locale = data.locale;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.voiceId !== undefined && data.voiceId !== null) {
    contents.voiceId = data.voiceId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotAliasCommandError(output, context);
  }
  const contents: GetBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    botName: undefined,
    botVersion: undefined,
    checksum: undefined,
    conversationLogs: undefined,
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.conversationLogs !== undefined && data.conversationLogs !== null) {
    contents.conversationLogs = deserializeAws_restJson1ConversationLogsResponse(data.conversationLogs, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotAliasesCommandError(output, context);
  }
  const contents: GetBotAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    BotAliases: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BotAliases !== undefined && data.BotAliases !== null) {
    contents.BotAliases = deserializeAws_restJson1BotAliasMetadataList(data.BotAliases, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotChannelAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotChannelAssociationCommandError(output, context);
  }
  const contents: GetBotChannelAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    botAlias: undefined,
    botConfiguration: undefined,
    botName: undefined,
    createdDate: undefined,
    description: undefined,
    failureReason: undefined,
    name: undefined,
    status: undefined,
    type: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botAlias !== undefined && data.botAlias !== null) {
    contents.botAlias = data.botAlias;
  }
  if (data.botConfiguration !== undefined && data.botConfiguration !== null) {
    contents.botConfiguration = deserializeAws_restJson1ChannelConfigurationMap(data.botConfiguration, context);
  }
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotChannelAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotChannelAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotChannelAssociationsCommandError(output, context);
  }
  const contents: GetBotChannelAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    botChannelAssociations: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botChannelAssociations !== undefined && data.botChannelAssociations !== null) {
    contents.botChannelAssociations = deserializeAws_restJson1BotChannelAssociationList(
      data.botChannelAssociations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotChannelAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotsCommandError(output, context);
  }
  const contents: GetBotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    bots: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.bots !== undefined && data.bots !== null) {
    contents.bots = deserializeAws_restJson1BotMetadataList(data.bots, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBotVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBotVersionsCommandError(output, context);
  }
  const contents: GetBotVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    bots: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.bots !== undefined && data.bots !== null) {
    contents.bots = deserializeAws_restJson1BotMetadataList(data.bots, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBotVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBuiltinIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBuiltinIntentCommandError(output, context);
  }
  const contents: GetBuiltinIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    signature: undefined,
    slots: undefined,
    supportedLocales: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.signature !== undefined && data.signature !== null) {
    contents.signature = data.signature;
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1BuiltinIntentSlotList(data.slots, context);
  }
  if (data.supportedLocales !== undefined && data.supportedLocales !== null) {
    contents.supportedLocales = deserializeAws_restJson1LocaleList(data.supportedLocales, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBuiltinIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBuiltinIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBuiltinIntentsCommandError(output, context);
  }
  const contents: GetBuiltinIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    intents: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1BuiltinIntentMetadataList(data.intents, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBuiltinIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetBuiltinSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBuiltinSlotTypesCommandError(output, context);
  }
  const contents: GetBuiltinSlotTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    slotTypes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.slotTypes !== undefined && data.slotTypes !== null) {
    contents.slotTypes = deserializeAws_restJson1BuiltinSlotTypeMetadataList(data.slotTypes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBuiltinSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetExportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExportCommandError(output, context);
  }
  const contents: GetExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    exportStatus: undefined,
    exportType: undefined,
    failureReason: undefined,
    name: undefined,
    resourceType: undefined,
    url: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.exportStatus !== undefined && data.exportStatus !== null) {
    contents.exportStatus = data.exportStatus;
  }
  if (data.exportType !== undefined && data.exportType !== null) {
    contents.exportType = data.exportType;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  if (data.url !== undefined && data.url !== null) {
    contents.url = data.url;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetImportCommandError(output, context);
  }
  const contents: GetImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    failureReason: undefined,
    importId: undefined,
    importStatus: undefined,
    mergeStrategy: undefined,
    name: undefined,
    resourceType: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = deserializeAws_restJson1StringList(data.failureReason, context);
  }
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = data.importId;
  }
  if (data.importStatus !== undefined && data.importStatus !== null) {
    contents.importStatus = data.importStatus;
  }
  if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
    contents.mergeStrategy = data.mergeStrategy;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntentCommandError(output, context);
  }
  const contents: GetIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
    conclusionStatement: undefined,
    confirmationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    followUpPrompt: undefined,
    fulfillmentActivity: undefined,
    inputContexts: undefined,
    kendraConfiguration: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    outputContexts: undefined,
    parentIntentSignature: undefined,
    rejectionStatement: undefined,
    sampleUtterances: undefined,
    slots: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.conclusionStatement !== undefined && data.conclusionStatement !== null) {
    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
  }
  if (data.confirmationPrompt !== undefined && data.confirmationPrompt !== null) {
    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
  }
  if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
  }
  if (data.fulfillmentActivity !== undefined && data.fulfillmentActivity !== null) {
    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
  }
  if (data.inputContexts !== undefined && data.inputContexts !== null) {
    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = data.parentIntentSignature;
  }
  if (data.rejectionStatement !== undefined && data.rejectionStatement !== null) {
    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetIntentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntentsCommandError(output, context);
  }
  const contents: GetIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    intents: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1IntentMetadataList(data.intents, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetIntentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetIntentVersionsCommandError(output, context);
  }
  const contents: GetIntentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    intents: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1IntentMetadataList(data.intents, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetIntentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSlotTypeCommandError(output, context);
  }
  const contents: GetSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
    createdDate: undefined,
    description: undefined,
    enumerationValues: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeConfigurations: undefined,
    valueSelectionStrategy: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.enumerationValues !== undefined && data.enumerationValues !== null) {
    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
  }
  if (data.slotTypeConfigurations !== undefined && data.slotTypeConfigurations !== null) {
    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(
      data.slotTypeConfigurations,
      context
    );
  }
  if (data.valueSelectionStrategy !== undefined && data.valueSelectionStrategy !== null) {
    contents.valueSelectionStrategy = data.valueSelectionStrategy;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetSlotTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSlotTypesCommandError(output, context);
  }
  const contents: GetSlotTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    slotTypes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.slotTypes !== undefined && data.slotTypes !== null) {
    contents.slotTypes = deserializeAws_restJson1SlotTypeMetadataList(data.slotTypes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSlotTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetSlotTypeVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSlotTypeVersionsCommandError(output, context);
  }
  const contents: GetSlotTypeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    nextToken: undefined,
    slotTypes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.slotTypes !== undefined && data.slotTypes !== null) {
    contents.slotTypes = deserializeAws_restJson1SlotTypeMetadataList(data.slotTypes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSlotTypeVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1GetUtterancesViewCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUtterancesViewCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetUtterancesViewCommandError(output, context);
  }
  const contents: GetUtterancesViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    botName: undefined,
    utterances: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.utterances !== undefined && data.utterances !== null) {
    contents.utterances = deserializeAws_restJson1ListsOfUtterances(data.utterances, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetUtterancesViewCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUtterancesViewCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutBotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBotCommandError(output, context);
  }
  const contents: PutBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    abortStatement: undefined,
    checksum: undefined,
    childDirected: undefined,
    clarificationPrompt: undefined,
    createVersion: undefined,
    createdDate: undefined,
    description: undefined,
    detectSentiment: undefined,
    enableModelImprovements: undefined,
    failureReason: undefined,
    idleSessionTTLInSeconds: undefined,
    intents: undefined,
    lastUpdatedDate: undefined,
    locale: undefined,
    name: undefined,
    nluIntentConfidenceThreshold: undefined,
    status: undefined,
    tags: undefined,
    version: undefined,
    voiceId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.abortStatement !== undefined && data.abortStatement !== null) {
    contents.abortStatement = deserializeAws_restJson1Statement(data.abortStatement, context);
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.childDirected !== undefined && data.childDirected !== null) {
    contents.childDirected = data.childDirected;
  }
  if (data.clarificationPrompt !== undefined && data.clarificationPrompt !== null) {
    contents.clarificationPrompt = deserializeAws_restJson1Prompt(data.clarificationPrompt, context);
  }
  if (data.createVersion !== undefined && data.createVersion !== null) {
    contents.createVersion = data.createVersion;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.detectSentiment !== undefined && data.detectSentiment !== null) {
    contents.detectSentiment = data.detectSentiment;
  }
  if (data.enableModelImprovements !== undefined && data.enableModelImprovements !== null) {
    contents.enableModelImprovements = data.enableModelImprovements;
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (data.idleSessionTTLInSeconds !== undefined && data.idleSessionTTLInSeconds !== null) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1IntentList(data.intents, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.locale !== undefined && data.locale !== null) {
    contents.locale = data.locale;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.nluIntentConfidenceThreshold !== undefined && data.nluIntentConfidenceThreshold !== null) {
    contents.nluIntentConfidenceThreshold = data.nluIntentConfidenceThreshold;
  }
  if (data.status !== undefined && data.status !== null) {
    contents.status = data.status;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.voiceId !== undefined && data.voiceId !== null) {
    contents.voiceId = data.voiceId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutBotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutBotAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBotAliasCommandError(output, context);
  }
  const contents: PutBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    botName: undefined,
    botVersion: undefined,
    checksum: undefined,
    conversationLogs: undefined,
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.botVersion !== undefined && data.botVersion !== null) {
    contents.botVersion = data.botVersion;
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.conversationLogs !== undefined && data.conversationLogs !== null) {
    contents.conversationLogs = deserializeAws_restJson1ConversationLogsResponse(data.conversationLogs, context);
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutBotAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutIntentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutIntentCommandError(output, context);
  }
  const contents: PutIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
    conclusionStatement: undefined,
    confirmationPrompt: undefined,
    createVersion: undefined,
    createdDate: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    followUpPrompt: undefined,
    fulfillmentActivity: undefined,
    inputContexts: undefined,
    kendraConfiguration: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    outputContexts: undefined,
    parentIntentSignature: undefined,
    rejectionStatement: undefined,
    sampleUtterances: undefined,
    slots: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.conclusionStatement !== undefined && data.conclusionStatement !== null) {
    contents.conclusionStatement = deserializeAws_restJson1Statement(data.conclusionStatement, context);
  }
  if (data.confirmationPrompt !== undefined && data.confirmationPrompt !== null) {
    contents.confirmationPrompt = deserializeAws_restJson1Prompt(data.confirmationPrompt, context);
  }
  if (data.createVersion !== undefined && data.createVersion !== null) {
    contents.createVersion = data.createVersion;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1CodeHook(data.dialogCodeHook, context);
  }
  if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
    contents.followUpPrompt = deserializeAws_restJson1FollowUpPrompt(data.followUpPrompt, context);
  }
  if (data.fulfillmentActivity !== undefined && data.fulfillmentActivity !== null) {
    contents.fulfillmentActivity = deserializeAws_restJson1FulfillmentActivity(data.fulfillmentActivity, context);
  }
  if (data.inputContexts !== undefined && data.inputContexts !== null) {
    contents.inputContexts = deserializeAws_restJson1InputContextList(data.inputContexts, context);
  }
  if (data.kendraConfiguration !== undefined && data.kendraConfiguration !== null) {
    contents.kendraConfiguration = deserializeAws_restJson1KendraConfiguration(data.kendraConfiguration, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.outputContexts !== undefined && data.outputContexts !== null) {
    contents.outputContexts = deserializeAws_restJson1OutputContextList(data.outputContexts, context);
  }
  if (data.parentIntentSignature !== undefined && data.parentIntentSignature !== null) {
    contents.parentIntentSignature = data.parentIntentSignature;
  }
  if (data.rejectionStatement !== undefined && data.rejectionStatement !== null) {
    contents.rejectionStatement = deserializeAws_restJson1Statement(data.rejectionStatement, context);
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1IntentUtteranceList(data.sampleUtterances, context);
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1SlotList(data.slots, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutIntentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1PutSlotTypeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSlotTypeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutSlotTypeCommandError(output, context);
  }
  const contents: PutSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
    createVersion: undefined,
    createdDate: undefined,
    description: undefined,
    enumerationValues: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    parentSlotTypeSignature: undefined,
    slotTypeConfigurations: undefined,
    valueSelectionStrategy: undefined,
    version: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.createVersion !== undefined && data.createVersion !== null) {
    contents.createVersion = data.createVersion;
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.enumerationValues !== undefined && data.enumerationValues !== null) {
    contents.enumerationValues = deserializeAws_restJson1EnumerationValues(data.enumerationValues, context);
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(Math.round(data.lastUpdatedDate * 1000));
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.parentSlotTypeSignature !== undefined && data.parentSlotTypeSignature !== null) {
    contents.parentSlotTypeSignature = data.parentSlotTypeSignature;
  }
  if (data.slotTypeConfigurations !== undefined && data.slotTypeConfigurations !== null) {
    contents.slotTypeConfigurations = deserializeAws_restJson1SlotTypeConfigurations(
      data.slotTypeConfigurations,
      context
    );
  }
  if (data.valueSelectionStrategy !== undefined && data.valueSelectionStrategy !== null) {
    contents.valueSelectionStrategy = data.valueSelectionStrategy;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutSlotTypeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSlotTypeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lexmodelbuildingservice#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1StartImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartImportCommandError(output, context);
  }
  const contents: StartImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    createdDate: undefined,
    importId: undefined,
    importStatus: undefined,
    mergeStrategy: undefined,
    name: undefined,
    resourceType: undefined,
    tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.importId !== undefined && data.importId !== null) {
    contents.importId = data.importId;
  }
  if (data.importStatus !== undefined && data.importStatus !== null) {
    contents.importStatus = data.importStatus;
  }
  if (data.mergeStrategy !== undefined && data.mergeStrategy !== null) {
    contents.mergeStrategy = data.mergeStrategy;
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1TagList(data.tags, context);
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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
  if (output.statusCode !== 204 && output.statusCode >= 300) {
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
    case "BadRequestException":
    case "com.amazonaws.lexmodelbuildingservice#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lexmodelbuildingservice#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.lexmodelbuildingservice#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1InternalFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lexmodelbuildingservice#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lexmodelbuildingservice#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
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

const deserializeAws_restJson1InternalFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
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

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    exampleReference: undefined,
    referenceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.exampleReference !== undefined && data.exampleReference !== null) {
    contents.exampleReference = deserializeAws_restJson1ResourceReference(data.exampleReference, context);
  }
  if (data.referenceType !== undefined && data.referenceType !== null) {
    contents.referenceType = data.referenceType;
  }
  return contents;
};

const serializeAws_restJson1CodeHook = (input: CodeHook, context: __SerdeContext): any => {
  return {
    ...(input.messageVersion !== undefined &&
      input.messageVersion !== null && { messageVersion: input.messageVersion }),
    ...(input.uri !== undefined && input.uri !== null && { uri: input.uri }),
  };
};

const serializeAws_restJson1ConversationLogsRequest = (
  input: ConversationLogsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.iamRoleArn !== undefined && input.iamRoleArn !== null && { iamRoleArn: input.iamRoleArn }),
    ...(input.logSettings !== undefined &&
      input.logSettings !== null && {
        logSettings: serializeAws_restJson1LogSettingsRequestList(input.logSettings, context),
      }),
  };
};

const serializeAws_restJson1EnumerationValue = (input: EnumerationValue, context: __SerdeContext): any => {
  return {
    ...(input.synonyms !== undefined &&
      input.synonyms !== null && { synonyms: serializeAws_restJson1SynonymList(input.synonyms, context) }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1EnumerationValues = (input: EnumerationValue[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1EnumerationValue(entry, context);
    });
};

const serializeAws_restJson1FollowUpPrompt = (input: FollowUpPrompt, context: __SerdeContext): any => {
  return {
    ...(input.prompt !== undefined &&
      input.prompt !== null && { prompt: serializeAws_restJson1Prompt(input.prompt, context) }),
    ...(input.rejectionStatement !== undefined &&
      input.rejectionStatement !== null && {
        rejectionStatement: serializeAws_restJson1Statement(input.rejectionStatement, context),
      }),
  };
};

const serializeAws_restJson1FulfillmentActivity = (input: FulfillmentActivity, context: __SerdeContext): any => {
  return {
    ...(input.codeHook !== undefined &&
      input.codeHook !== null && { codeHook: serializeAws_restJson1CodeHook(input.codeHook, context) }),
    ...(input.type !== undefined && input.type !== null && { type: input.type }),
  };
};

const serializeAws_restJson1InputContext = (input: InputContext, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
  };
};

const serializeAws_restJson1InputContextList = (input: InputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1InputContext(entry, context);
    });
};

const serializeAws_restJson1Intent = (input: Intent, context: __SerdeContext): any => {
  return {
    ...(input.intentName !== undefined && input.intentName !== null && { intentName: input.intentName }),
    ...(input.intentVersion !== undefined && input.intentVersion !== null && { intentVersion: input.intentVersion }),
  };
};

const serializeAws_restJson1IntentList = (input: Intent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Intent(entry, context);
    });
};

const serializeAws_restJson1IntentUtteranceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1KendraConfiguration = (input: KendraConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.kendraIndex !== undefined && input.kendraIndex !== null && { kendraIndex: input.kendraIndex }),
    ...(input.queryFilterString !== undefined &&
      input.queryFilterString !== null && { queryFilterString: input.queryFilterString }),
    ...(input.role !== undefined && input.role !== null && { role: input.role }),
  };
};

const serializeAws_restJson1LogSettingsRequest = (input: LogSettingsRequest, context: __SerdeContext): any => {
  return {
    ...(input.destination !== undefined && input.destination !== null && { destination: input.destination }),
    ...(input.kmsKeyArn !== undefined && input.kmsKeyArn !== null && { kmsKeyArn: input.kmsKeyArn }),
    ...(input.logType !== undefined && input.logType !== null && { logType: input.logType }),
    ...(input.resourceArn !== undefined && input.resourceArn !== null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_restJson1LogSettingsRequestList = (input: LogSettingsRequest[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LogSettingsRequest(entry, context);
    });
};

const serializeAws_restJson1Message = (input: Message, context: __SerdeContext): any => {
  return {
    ...(input.content !== undefined && input.content !== null && { content: input.content }),
    ...(input.contentType !== undefined && input.contentType !== null && { contentType: input.contentType }),
    ...(input.groupNumber !== undefined && input.groupNumber !== null && { groupNumber: input.groupNumber }),
  };
};

const serializeAws_restJson1MessageList = (input: Message[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Message(entry, context);
    });
};

const serializeAws_restJson1OutputContext = (input: OutputContext, context: __SerdeContext): any => {
  return {
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.timeToLiveInSeconds !== undefined &&
      input.timeToLiveInSeconds !== null && { timeToLiveInSeconds: input.timeToLiveInSeconds }),
    ...(input.turnsToLive !== undefined && input.turnsToLive !== null && { turnsToLive: input.turnsToLive }),
  };
};

const serializeAws_restJson1OutputContextList = (input: OutputContext[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1OutputContext(entry, context);
    });
};

const serializeAws_restJson1Prompt = (input: Prompt, context: __SerdeContext): any => {
  return {
    ...(input.maxAttempts !== undefined && input.maxAttempts !== null && { maxAttempts: input.maxAttempts }),
    ...(input.messages !== undefined &&
      input.messages !== null && { messages: serializeAws_restJson1MessageList(input.messages, context) }),
    ...(input.responseCard !== undefined && input.responseCard !== null && { responseCard: input.responseCard }),
  };
};

const serializeAws_restJson1Slot = (input: Slot, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueSpec !== undefined &&
      input.defaultValueSpec !== null && {
        defaultValueSpec: serializeAws_restJson1SlotDefaultValueSpec(input.defaultValueSpec, context),
      }),
    ...(input.description !== undefined && input.description !== null && { description: input.description }),
    ...(input.name !== undefined && input.name !== null && { name: input.name }),
    ...(input.obfuscationSetting !== undefined &&
      input.obfuscationSetting !== null && { obfuscationSetting: input.obfuscationSetting }),
    ...(input.priority !== undefined && input.priority !== null && { priority: input.priority }),
    ...(input.responseCard !== undefined && input.responseCard !== null && { responseCard: input.responseCard }),
    ...(input.sampleUtterances !== undefined &&
      input.sampleUtterances !== null && {
        sampleUtterances: serializeAws_restJson1SlotUtteranceList(input.sampleUtterances, context),
      }),
    ...(input.slotConstraint !== undefined &&
      input.slotConstraint !== null && { slotConstraint: input.slotConstraint }),
    ...(input.slotType !== undefined && input.slotType !== null && { slotType: input.slotType }),
    ...(input.slotTypeVersion !== undefined &&
      input.slotTypeVersion !== null && { slotTypeVersion: input.slotTypeVersion }),
    ...(input.valueElicitationPrompt !== undefined &&
      input.valueElicitationPrompt !== null && {
        valueElicitationPrompt: serializeAws_restJson1Prompt(input.valueElicitationPrompt, context),
      }),
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

const serializeAws_restJson1SlotDefaultValueSpec = (input: SlotDefaultValueSpec, context: __SerdeContext): any => {
  return {
    ...(input.defaultValueList !== undefined &&
      input.defaultValueList !== null && {
        defaultValueList: serializeAws_restJson1SlotDefaultValueList(input.defaultValueList, context),
      }),
  };
};

const serializeAws_restJson1SlotList = (input: Slot[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Slot(entry, context);
    });
};

const serializeAws_restJson1SlotTypeConfiguration = (input: SlotTypeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.regexConfiguration !== undefined &&
      input.regexConfiguration !== null && {
        regexConfiguration: serializeAws_restJson1SlotTypeRegexConfiguration(input.regexConfiguration, context),
      }),
  };
};

const serializeAws_restJson1SlotTypeConfigurations = (input: SlotTypeConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SlotTypeConfiguration(entry, context);
    });
};

const serializeAws_restJson1SlotTypeRegexConfiguration = (
  input: SlotTypeRegexConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.pattern !== undefined && input.pattern !== null && { pattern: input.pattern }),
  };
};

const serializeAws_restJson1SlotUtteranceList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Statement = (input: Statement, context: __SerdeContext): any => {
  return {
    ...(input.messages !== undefined &&
      input.messages !== null && { messages: serializeAws_restJson1MessageList(input.messages, context) }),
    ...(input.responseCard !== undefined && input.responseCard !== null && { responseCard: input.responseCard }),
  };
};

const serializeAws_restJson1SynonymList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key !== undefined && input.key !== null && { key: input.key }),
    ...(input.value !== undefined && input.value !== null && { value: input.value }),
  };
};

const serializeAws_restJson1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1BotAliasMetadata = (output: any, context: __SerdeContext): BotAliasMetadata => {
  return {
    botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
    botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    checksum: output.checksum !== undefined && output.checksum !== null ? output.checksum : undefined,
    conversationLogs:
      output.conversationLogs !== undefined && output.conversationLogs !== null
        ? deserializeAws_restJson1ConversationLogsResponse(output.conversationLogs, context)
        : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1BotAliasMetadataList = (output: any, context: __SerdeContext): BotAliasMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotAliasMetadata(entry, context);
    });
};

const deserializeAws_restJson1BotChannelAssociation = (output: any, context: __SerdeContext): BotChannelAssociation => {
  return {
    botAlias: output.botAlias !== undefined && output.botAlias !== null ? output.botAlias : undefined,
    botConfiguration:
      output.botConfiguration !== undefined && output.botConfiguration !== null
        ? deserializeAws_restJson1ChannelConfigurationMap(output.botConfiguration, context)
        : undefined,
    botName: output.botName !== undefined && output.botName !== null ? output.botName : undefined,
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    failureReason:
      output.failureReason !== undefined && output.failureReason !== null ? output.failureReason : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_restJson1BotChannelAssociationList = (
  output: any,
  context: __SerdeContext
): BotChannelAssociation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotChannelAssociation(entry, context);
    });
};

const deserializeAws_restJson1BotMetadata = (output: any, context: __SerdeContext): BotMetadata => {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1BotMetadataList = (output: any, context: __SerdeContext): BotMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BotMetadata(entry, context);
    });
};

const deserializeAws_restJson1BuiltinIntentMetadata = (output: any, context: __SerdeContext): BuiltinIntentMetadata => {
  return {
    signature: output.signature !== undefined && output.signature !== null ? output.signature : undefined,
    supportedLocales:
      output.supportedLocales !== undefined && output.supportedLocales !== null
        ? deserializeAws_restJson1LocaleList(output.supportedLocales, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltinIntentMetadataList = (
  output: any,
  context: __SerdeContext
): BuiltinIntentMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltinIntentMetadata(entry, context);
    });
};

const deserializeAws_restJson1BuiltinIntentSlot = (output: any, context: __SerdeContext): BuiltinIntentSlot => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltinIntentSlotList = (output: any, context: __SerdeContext): BuiltinIntentSlot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltinIntentSlot(entry, context);
    });
};

const deserializeAws_restJson1BuiltinSlotTypeMetadata = (
  output: any,
  context: __SerdeContext
): BuiltinSlotTypeMetadata => {
  return {
    signature: output.signature !== undefined && output.signature !== null ? output.signature : undefined,
    supportedLocales:
      output.supportedLocales !== undefined && output.supportedLocales !== null
        ? deserializeAws_restJson1LocaleList(output.supportedLocales, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BuiltinSlotTypeMetadataList = (
  output: any,
  context: __SerdeContext
): BuiltinSlotTypeMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BuiltinSlotTypeMetadata(entry, context);
    });
};

const deserializeAws_restJson1ChannelConfigurationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
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

const deserializeAws_restJson1CodeHook = (output: any, context: __SerdeContext): CodeHook => {
  return {
    messageVersion:
      output.messageVersion !== undefined && output.messageVersion !== null ? output.messageVersion : undefined,
    uri: output.uri !== undefined && output.uri !== null ? output.uri : undefined,
  } as any;
};

const deserializeAws_restJson1ConversationLogsResponse = (
  output: any,
  context: __SerdeContext
): ConversationLogsResponse => {
  return {
    iamRoleArn: output.iamRoleArn !== undefined && output.iamRoleArn !== null ? output.iamRoleArn : undefined,
    logSettings:
      output.logSettings !== undefined && output.logSettings !== null
        ? deserializeAws_restJson1LogSettingsResponseList(output.logSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EnumerationValue = (output: any, context: __SerdeContext): EnumerationValue => {
  return {
    synonyms:
      output.synonyms !== undefined && output.synonyms !== null
        ? deserializeAws_restJson1SynonymList(output.synonyms, context)
        : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1EnumerationValues = (output: any, context: __SerdeContext): EnumerationValue[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EnumerationValue(entry, context);
    });
};

const deserializeAws_restJson1FollowUpPrompt = (output: any, context: __SerdeContext): FollowUpPrompt => {
  return {
    prompt:
      output.prompt !== undefined && output.prompt !== null
        ? deserializeAws_restJson1Prompt(output.prompt, context)
        : undefined,
    rejectionStatement:
      output.rejectionStatement !== undefined && output.rejectionStatement !== null
        ? deserializeAws_restJson1Statement(output.rejectionStatement, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1FulfillmentActivity = (output: any, context: __SerdeContext): FulfillmentActivity => {
  return {
    codeHook:
      output.codeHook !== undefined && output.codeHook !== null
        ? deserializeAws_restJson1CodeHook(output.codeHook, context)
        : undefined,
    type: output.type !== undefined && output.type !== null ? output.type : undefined,
  } as any;
};

const deserializeAws_restJson1InputContext = (output: any, context: __SerdeContext): InputContext => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1InputContextList = (output: any, context: __SerdeContext): InputContext[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InputContext(entry, context);
    });
};

const deserializeAws_restJson1Intent = (output: any, context: __SerdeContext): Intent => {
  return {
    intentName: output.intentName !== undefined && output.intentName !== null ? output.intentName : undefined,
    intentVersion:
      output.intentVersion !== undefined && output.intentVersion !== null ? output.intentVersion : undefined,
  } as any;
};

const deserializeAws_restJson1IntentList = (output: any, context: __SerdeContext): Intent[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Intent(entry, context);
    });
};

const deserializeAws_restJson1IntentMetadata = (output: any, context: __SerdeContext): IntentMetadata => {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1IntentMetadataList = (output: any, context: __SerdeContext): IntentMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IntentMetadata(entry, context);
    });
};

const deserializeAws_restJson1IntentUtteranceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1KendraConfiguration = (output: any, context: __SerdeContext): KendraConfiguration => {
  return {
    kendraIndex: output.kendraIndex !== undefined && output.kendraIndex !== null ? output.kendraIndex : undefined,
    queryFilterString:
      output.queryFilterString !== undefined && output.queryFilterString !== null
        ? output.queryFilterString
        : undefined,
    role: output.role !== undefined && output.role !== null ? output.role : undefined,
  } as any;
};

const deserializeAws_restJson1ListOfUtterance = (output: any, context: __SerdeContext): UtteranceData[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UtteranceData(entry, context);
    });
};

const deserializeAws_restJson1ListsOfUtterances = (output: any, context: __SerdeContext): UtteranceList[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UtteranceList(entry, context);
    });
};

const deserializeAws_restJson1LocaleList = (output: any, context: __SerdeContext): (Locale | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1LogSettingsResponse = (output: any, context: __SerdeContext): LogSettingsResponse => {
  return {
    destination: output.destination !== undefined && output.destination !== null ? output.destination : undefined,
    kmsKeyArn: output.kmsKeyArn !== undefined && output.kmsKeyArn !== null ? output.kmsKeyArn : undefined,
    logType: output.logType !== undefined && output.logType !== null ? output.logType : undefined,
    resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    resourcePrefix:
      output.resourcePrefix !== undefined && output.resourcePrefix !== null ? output.resourcePrefix : undefined,
  } as any;
};

const deserializeAws_restJson1LogSettingsResponseList = (
  output: any,
  context: __SerdeContext
): LogSettingsResponse[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogSettingsResponse(entry, context);
    });
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    content: output.content !== undefined && output.content !== null ? output.content : undefined,
    contentType: output.contentType !== undefined && output.contentType !== null ? output.contentType : undefined,
    groupNumber: output.groupNumber !== undefined && output.groupNumber !== null ? output.groupNumber : undefined,
  } as any;
};

const deserializeAws_restJson1MessageList = (output: any, context: __SerdeContext): Message[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Message(entry, context);
    });
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

const deserializeAws_restJson1OutputContextList = (output: any, context: __SerdeContext): OutputContext[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OutputContext(entry, context);
    });
};

const deserializeAws_restJson1Prompt = (output: any, context: __SerdeContext): Prompt => {
  return {
    maxAttempts: output.maxAttempts !== undefined && output.maxAttempts !== null ? output.maxAttempts : undefined,
    messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_restJson1MessageList(output.messages, context)
        : undefined,
    responseCard: output.responseCard !== undefined && output.responseCard !== null ? output.responseCard : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceReference = (output: any, context: __SerdeContext): ResourceReference => {
  return {
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1Slot = (output: any, context: __SerdeContext): Slot => {
  return {
    defaultValueSpec:
      output.defaultValueSpec !== undefined && output.defaultValueSpec !== null
        ? deserializeAws_restJson1SlotDefaultValueSpec(output.defaultValueSpec, context)
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    obfuscationSetting:
      output.obfuscationSetting !== undefined && output.obfuscationSetting !== null
        ? output.obfuscationSetting
        : undefined,
    priority: output.priority !== undefined && output.priority !== null ? output.priority : undefined,
    responseCard: output.responseCard !== undefined && output.responseCard !== null ? output.responseCard : undefined,
    sampleUtterances:
      output.sampleUtterances !== undefined && output.sampleUtterances !== null
        ? deserializeAws_restJson1SlotUtteranceList(output.sampleUtterances, context)
        : undefined,
    slotConstraint:
      output.slotConstraint !== undefined && output.slotConstraint !== null ? output.slotConstraint : undefined,
    slotType: output.slotType !== undefined && output.slotType !== null ? output.slotType : undefined,
    slotTypeVersion:
      output.slotTypeVersion !== undefined && output.slotTypeVersion !== null ? output.slotTypeVersion : undefined,
    valueElicitationPrompt:
      output.valueElicitationPrompt !== undefined && output.valueElicitationPrompt !== null
        ? deserializeAws_restJson1Prompt(output.valueElicitationPrompt, context)
        : undefined,
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

const deserializeAws_restJson1SlotDefaultValueSpec = (output: any, context: __SerdeContext): SlotDefaultValueSpec => {
  return {
    defaultValueList:
      output.defaultValueList !== undefined && output.defaultValueList !== null
        ? deserializeAws_restJson1SlotDefaultValueList(output.defaultValueList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotList = (output: any, context: __SerdeContext): Slot[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Slot(entry, context);
    });
};

const deserializeAws_restJson1SlotTypeConfiguration = (output: any, context: __SerdeContext): SlotTypeConfiguration => {
  return {
    regexConfiguration:
      output.regexConfiguration !== undefined && output.regexConfiguration !== null
        ? deserializeAws_restJson1SlotTypeRegexConfiguration(output.regexConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SlotTypeConfigurations = (
  output: any,
  context: __SerdeContext
): SlotTypeConfiguration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeConfiguration(entry, context);
    });
};

const deserializeAws_restJson1SlotTypeMetadata = (output: any, context: __SerdeContext): SlotTypeMetadata => {
  return {
    createdDate:
      output.createdDate !== undefined && output.createdDate !== null
        ? new Date(Math.round(output.createdDate * 1000))
        : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    lastUpdatedDate:
      output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null
        ? new Date(Math.round(output.lastUpdatedDate * 1000))
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1SlotTypeMetadataList = (output: any, context: __SerdeContext): SlotTypeMetadata[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SlotTypeMetadata(entry, context);
    });
};

const deserializeAws_restJson1SlotTypeRegexConfiguration = (
  output: any,
  context: __SerdeContext
): SlotTypeRegexConfiguration => {
  return {
    pattern: output.pattern !== undefined && output.pattern !== null ? output.pattern : undefined,
  } as any;
};

const deserializeAws_restJson1SlotUtteranceList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Statement = (output: any, context: __SerdeContext): Statement => {
  return {
    messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_restJson1MessageList(output.messages, context)
        : undefined,
    responseCard: output.responseCard !== undefined && output.responseCard !== null ? output.responseCard : undefined,
  } as any;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1SynonymList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: output.key !== undefined && output.key !== null ? output.key : undefined,
    value: output.value !== undefined && output.value !== null ? output.value : undefined,
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
};

const deserializeAws_restJson1UtteranceData = (output: any, context: __SerdeContext): UtteranceData => {
  return {
    count: output.count !== undefined && output.count !== null ? output.count : undefined,
    distinctUsers:
      output.distinctUsers !== undefined && output.distinctUsers !== null ? output.distinctUsers : undefined,
    firstUtteredDate:
      output.firstUtteredDate !== undefined && output.firstUtteredDate !== null
        ? new Date(Math.round(output.firstUtteredDate * 1000))
        : undefined,
    lastUtteredDate:
      output.lastUtteredDate !== undefined && output.lastUtteredDate !== null
        ? new Date(Math.round(output.lastUtteredDate * 1000))
        : undefined,
    utteranceString:
      output.utteranceString !== undefined && output.utteranceString !== null ? output.utteranceString : undefined,
  } as any;
};

const deserializeAws_restJson1UtteranceList = (output: any, context: __SerdeContext): UtteranceList => {
  return {
    botVersion: output.botVersion !== undefined && output.botVersion !== null ? output.botVersion : undefined,
    utterances:
      output.utterances !== undefined && output.utterances !== null
        ? deserializeAws_restJson1ListOfUtterance(output.utterances, context)
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
