import {
  CreateBotVersionCommandInput,
  CreateBotVersionCommandOutput
} from "../commands/CreateBotVersionCommand";
import {
  CreateIntentVersionCommandInput,
  CreateIntentVersionCommandOutput
} from "../commands/CreateIntentVersionCommand";
import {
  CreateSlotTypeVersionCommandInput,
  CreateSlotTypeVersionCommandOutput
} from "../commands/CreateSlotTypeVersionCommand";
import {
  DeleteBotAliasCommandInput,
  DeleteBotAliasCommandOutput
} from "../commands/DeleteBotAliasCommand";
import {
  DeleteBotChannelAssociationCommandInput,
  DeleteBotChannelAssociationCommandOutput
} from "../commands/DeleteBotChannelAssociationCommand";
import {
  DeleteBotCommandInput,
  DeleteBotCommandOutput
} from "../commands/DeleteBotCommand";
import {
  DeleteBotVersionCommandInput,
  DeleteBotVersionCommandOutput
} from "../commands/DeleteBotVersionCommand";
import {
  DeleteIntentCommandInput,
  DeleteIntentCommandOutput
} from "../commands/DeleteIntentCommand";
import {
  DeleteIntentVersionCommandInput,
  DeleteIntentVersionCommandOutput
} from "../commands/DeleteIntentVersionCommand";
import {
  DeleteSlotTypeCommandInput,
  DeleteSlotTypeCommandOutput
} from "../commands/DeleteSlotTypeCommand";
import {
  DeleteSlotTypeVersionCommandInput,
  DeleteSlotTypeVersionCommandOutput
} from "../commands/DeleteSlotTypeVersionCommand";
import {
  DeleteUtterancesCommandInput,
  DeleteUtterancesCommandOutput
} from "../commands/DeleteUtterancesCommand";
import {
  GetBotAliasCommandInput,
  GetBotAliasCommandOutput
} from "../commands/GetBotAliasCommand";
import {
  GetBotAliasesCommandInput,
  GetBotAliasesCommandOutput
} from "../commands/GetBotAliasesCommand";
import {
  GetBotChannelAssociationCommandInput,
  GetBotChannelAssociationCommandOutput
} from "../commands/GetBotChannelAssociationCommand";
import {
  GetBotChannelAssociationsCommandInput,
  GetBotChannelAssociationsCommandOutput
} from "../commands/GetBotChannelAssociationsCommand";
import {
  GetBotCommandInput,
  GetBotCommandOutput
} from "../commands/GetBotCommand";
import {
  GetBotVersionsCommandInput,
  GetBotVersionsCommandOutput
} from "../commands/GetBotVersionsCommand";
import {
  GetBotsCommandInput,
  GetBotsCommandOutput
} from "../commands/GetBotsCommand";
import {
  GetBuiltinIntentCommandInput,
  GetBuiltinIntentCommandOutput
} from "../commands/GetBuiltinIntentCommand";
import {
  GetBuiltinIntentsCommandInput,
  GetBuiltinIntentsCommandOutput
} from "../commands/GetBuiltinIntentsCommand";
import {
  GetBuiltinSlotTypesCommandInput,
  GetBuiltinSlotTypesCommandOutput
} from "../commands/GetBuiltinSlotTypesCommand";
import {
  GetExportCommandInput,
  GetExportCommandOutput
} from "../commands/GetExportCommand";
import {
  GetImportCommandInput,
  GetImportCommandOutput
} from "../commands/GetImportCommand";
import {
  GetIntentCommandInput,
  GetIntentCommandOutput
} from "../commands/GetIntentCommand";
import {
  GetIntentVersionsCommandInput,
  GetIntentVersionsCommandOutput
} from "../commands/GetIntentVersionsCommand";
import {
  GetIntentsCommandInput,
  GetIntentsCommandOutput
} from "../commands/GetIntentsCommand";
import {
  GetSlotTypeCommandInput,
  GetSlotTypeCommandOutput
} from "../commands/GetSlotTypeCommand";
import {
  GetSlotTypeVersionsCommandInput,
  GetSlotTypeVersionsCommandOutput
} from "../commands/GetSlotTypeVersionsCommand";
import {
  GetSlotTypesCommandInput,
  GetSlotTypesCommandOutput
} from "../commands/GetSlotTypesCommand";
import {
  GetUtterancesViewCommandInput,
  GetUtterancesViewCommandOutput
} from "../commands/GetUtterancesViewCommand";
import {
  PutBotAliasCommandInput,
  PutBotAliasCommandOutput
} from "../commands/PutBotAliasCommand";
import {
  PutBotCommandInput,
  PutBotCommandOutput
} from "../commands/PutBotCommand";
import {
  PutIntentCommandInput,
  PutIntentCommandOutput
} from "../commands/PutIntentCommand";
import {
  PutSlotTypeCommandInput,
  PutSlotTypeCommandOutput
} from "../commands/PutSlotTypeCommand";
import {
  StartImportCommandInput,
  StartImportCommandOutput
} from "../commands/StartImportCommand";
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
  Intent,
  IntentMetadata,
  InternalFailureException,
  LimitExceededException,
  Locale,
  LogSettingsRequest,
  LogSettingsResponse,
  Message,
  NotFoundException,
  PreconditionFailedException,
  Prompt,
  ResourceInUseException,
  ResourceReference,
  Slot,
  SlotTypeMetadata,
  Statement,
  UtteranceData,
  UtteranceList
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export async function serializeAws_restJson1_1CreateBotVersionCommand(
  input: CreateBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/bots/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateIntentVersionCommand(
  input: CreateIntentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/intents/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1CreateSlotTypeVersionCommand(
  input: CreateSlotTypeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/slottypes/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1DeleteBotCommand(
  input: DeleteBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBotAliasCommand(
  input: DeleteBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/aliases/{name}";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBotChannelAssociationCommand(
  input: DeleteBotChannelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels/{name}";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBotVersionCommand(
  input: DeleteBotVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace(
      "{version}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: version.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteIntentCommand(
  input: DeleteIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/intents/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteIntentVersionCommand(
  input: DeleteIntentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/intents/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace(
      "{version}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: version.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteSlotTypeCommand(
  input: DeleteSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/slottypes/{name}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteSlotTypeVersionCommand(
  input: DeleteSlotTypeVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/slottypes/{name}/version/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace(
      "{version}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: version.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteUtterancesCommand(
  input: DeleteUtterancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/utterances/{userId}";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.userId !== undefined) {
    const labelValue: string = input.userId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: userId.");
    }
    resolvedPath = resolvedPath.replace(
      "{userId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: userId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBotCommand(
  input: GetBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{name}/versions/{versionOrAlias}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.versionOrAlias !== undefined) {
    const labelValue: string = input.versionOrAlias;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: versionOrAlias."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{versionOrAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: versionOrAlias.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBotAliasCommand(
  input: GetBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/aliases/{name}";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBotAliasesCommand(
  input: GetBotAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/aliases";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nameContains !== undefined) {
    query["nameContains"] = input.nameContains;
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetBotChannelAssociationCommand(
  input: GetBotChannelAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels/{name}";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBotChannelAssociationsCommand(
  input: GetBotChannelAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/aliases/{botAlias}/channels";
  if (input.botAlias !== undefined) {
    const labelValue: string = input.botAlias;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botAlias.");
    }
    resolvedPath = resolvedPath.replace(
      "{botAlias}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botAlias.");
  }
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nameContains !== undefined) {
    query["nameContains"] = input.nameContains;
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetBotVersionsCommand(
  input: GetBotVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetBotsCommand(
  input: GetBotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nameContains !== undefined) {
    query["nameContains"] = input.nameContains;
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetBuiltinIntentCommand(
  input: GetBuiltinIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/builtins/intents/{signature}";
  if (input.signature !== undefined) {
    const labelValue: string = input.signature;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: signature.");
    }
    resolvedPath = resolvedPath.replace(
      "{signature}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: signature.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBuiltinIntentsCommand(
  input: GetBuiltinIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/builtins/intents";
  const query: any = {};
  if (input.locale !== undefined) {
    query["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.signatureContains !== undefined) {
    query["signatureContains"] = input.signatureContains;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetBuiltinSlotTypesCommand(
  input: GetBuiltinSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/builtins/slottypes";
  const query: any = {};
  if (input.locale !== undefined) {
    query["locale"] = input.locale;
  }
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  if (input.signatureContains !== undefined) {
    query["signatureContains"] = input.signatureContains;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetExportCommand(
  input: GetExportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/exports";
  const query: any = {};
  if (input.exportType !== undefined) {
    query["exportType"] = input.exportType;
  }
  if (input.name !== undefined) {
    query["name"] = input.name;
  }
  if (input.resourceType !== undefined) {
    query["resourceType"] = input.resourceType;
  }
  if (input.version !== undefined) {
    query["version"] = input.version;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetImportCommand(
  input: GetImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/imports/{importId}";
  if (input.importId !== undefined) {
    const labelValue: string = input.importId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: importId.");
    }
    resolvedPath = resolvedPath.replace(
      "{importId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: importId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetIntentCommand(
  input: GetIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/intents/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace(
      "{version}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: version.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetIntentVersionsCommand(
  input: GetIntentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/intents/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetIntentsCommand(
  input: GetIntentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/intents";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nameContains !== undefined) {
    query["nameContains"] = input.nameContains;
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetSlotTypeCommand(
  input: GetSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/slottypes/{name}/versions/{version}";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  if (input.version !== undefined) {
    const labelValue: string = input.version;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: version.");
    }
    resolvedPath = resolvedPath.replace(
      "{version}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: version.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSlotTypeVersionsCommand(
  input: GetSlotTypeVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/slottypes/{name}/versions";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetSlotTypesCommand(
  input: GetSlotTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/slottypes";
  const query: any = {};
  if (input.maxResults !== undefined) {
    query["maxResults"] = input.maxResults.toString();
  }
  if (input.nameContains !== undefined) {
    query["nameContains"] = input.nameContains;
  }
  if (input.nextToken !== undefined) {
    query["nextToken"] = input.nextToken;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1GetUtterancesViewCommand(
  input: GetUtterancesViewCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/bots/{botName}/utterances";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  const query: any = {
    view: "aggregation"
  };
  if (input.botVersions !== undefined) {
    query["bot_versions"] = input.botVersions;
  }
  if (input.statusType !== undefined) {
    query["status_type"] = input.statusType;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1PutBotCommand(
  input: PutBotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/bots/{name}/versions/$LATEST";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.abortStatement !== undefined) {
    bodyParams["abortStatement"] = serializeAws_restJson1_1Statement(
      input.abortStatement,
      context
    );
  }
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  if (input.childDirected !== undefined) {
    bodyParams["childDirected"] = input.childDirected;
  }
  if (input.clarificationPrompt !== undefined) {
    bodyParams["clarificationPrompt"] = serializeAws_restJson1_1Prompt(
      input.clarificationPrompt,
      context
    );
  }
  if (input.createVersion !== undefined) {
    bodyParams["createVersion"] = input.createVersion;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.detectSentiment !== undefined) {
    bodyParams["detectSentiment"] = input.detectSentiment;
  }
  if (input.idleSessionTTLInSeconds !== undefined) {
    bodyParams["idleSessionTTLInSeconds"] = input.idleSessionTTLInSeconds;
  }
  if (input.intents !== undefined) {
    bodyParams["intents"] = serializeAws_restJson1_1IntentList(
      input.intents,
      context
    );
  }
  if (input.locale !== undefined) {
    bodyParams["locale"] = input.locale;
  }
  if (input.processBehavior !== undefined) {
    bodyParams["processBehavior"] = input.processBehavior;
  }
  if (input.voiceId !== undefined) {
    bodyParams["voiceId"] = input.voiceId;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutBotAliasCommand(
  input: PutBotAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/bots/{botName}/aliases/{name}";
  if (input.botName !== undefined) {
    const labelValue: string = input.botName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: botName.");
    }
    resolvedPath = resolvedPath.replace(
      "{botName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: botName.");
  }
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.botVersion !== undefined) {
    bodyParams["botVersion"] = input.botVersion;
  }
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  if (input.conversationLogs !== undefined) {
    bodyParams[
      "conversationLogs"
    ] = serializeAws_restJson1_1ConversationLogsRequest(
      input.conversationLogs,
      context
    );
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutIntentCommand(
  input: PutIntentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/intents/{name}/versions/$LATEST";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  if (input.conclusionStatement !== undefined) {
    bodyParams["conclusionStatement"] = serializeAws_restJson1_1Statement(
      input.conclusionStatement,
      context
    );
  }
  if (input.confirmationPrompt !== undefined) {
    bodyParams["confirmationPrompt"] = serializeAws_restJson1_1Prompt(
      input.confirmationPrompt,
      context
    );
  }
  if (input.createVersion !== undefined) {
    bodyParams["createVersion"] = input.createVersion;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.dialogCodeHook !== undefined) {
    bodyParams["dialogCodeHook"] = serializeAws_restJson1_1CodeHook(
      input.dialogCodeHook,
      context
    );
  }
  if (input.followUpPrompt !== undefined) {
    bodyParams["followUpPrompt"] = serializeAws_restJson1_1FollowUpPrompt(
      input.followUpPrompt,
      context
    );
  }
  if (input.fulfillmentActivity !== undefined) {
    bodyParams[
      "fulfillmentActivity"
    ] = serializeAws_restJson1_1FulfillmentActivity(
      input.fulfillmentActivity,
      context
    );
  }
  if (input.parentIntentSignature !== undefined) {
    bodyParams["parentIntentSignature"] = input.parentIntentSignature;
  }
  if (input.rejectionStatement !== undefined) {
    bodyParams["rejectionStatement"] = serializeAws_restJson1_1Statement(
      input.rejectionStatement,
      context
    );
  }
  if (input.sampleUtterances !== undefined) {
    bodyParams[
      "sampleUtterances"
    ] = serializeAws_restJson1_1IntentUtteranceList(
      input.sampleUtterances,
      context
    );
  }
  if (input.slots !== undefined) {
    bodyParams["slots"] = serializeAws_restJson1_1SlotList(
      input.slots,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1PutSlotTypeCommand(
  input: PutSlotTypeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/slottypes/{name}/versions/$LATEST";
  if (input.name !== undefined) {
    const labelValue: string = input.name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: name.");
    }
    resolvedPath = resolvedPath.replace(
      "{name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.checksum !== undefined) {
    bodyParams["checksum"] = input.checksum;
  }
  if (input.createVersion !== undefined) {
    bodyParams["createVersion"] = input.createVersion;
  }
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.enumerationValues !== undefined) {
    bodyParams["enumerationValues"] = serializeAws_restJson1_1EnumerationValues(
      input.enumerationValues,
      context
    );
  }
  if (input.valueSelectionStrategy !== undefined) {
    bodyParams["valueSelectionStrategy"] = input.valueSelectionStrategy;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1StartImportCommand(
  input: StartImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/imports";
  let body: any;
  const bodyParams: any = {};
  if (input.mergeStrategy !== undefined) {
    bodyParams["mergeStrategy"] = input.mergeStrategy;
  }
  if (input.payload !== undefined) {
    bodyParams["payload"] = context.base64Encoder(input.payload);
  }
  if (input.resourceType !== undefined) {
    bodyParams["resourceType"] = input.resourceType;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateBotVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBotVersionCommandError(
      output,
      context
    );
  }
  const contents: CreateBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBotVersionResponse",
    abortStatement: undefined,
    checksum: undefined,
    childDirected: undefined,
    clarificationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    detectSentiment: undefined,
    failureReason: undefined,
    idleSessionTTLInSeconds: undefined,
    intents: undefined,
    lastUpdatedDate: undefined,
    locale: undefined,
    name: undefined,
    status: undefined,
    version: undefined,
    voiceId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.abortStatement !== undefined && data.abortStatement !== null) {
    contents.abortStatement = deserializeAws_restJson1_1Statement(
      data.abortStatement,
      context
    );
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.childDirected !== undefined && data.childDirected !== null) {
    contents.childDirected = data.childDirected;
  }
  if (
    data.clarificationPrompt !== undefined &&
    data.clarificationPrompt !== null
  ) {
    contents.clarificationPrompt = deserializeAws_restJson1_1Prompt(
      data.clarificationPrompt,
      context
    );
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
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (
    data.idleSessionTTLInSeconds !== undefined &&
    data.idleSessionTTLInSeconds !== null
  ) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1_1IntentList(
      data.intents,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
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
}

async function deserializeAws_restJson1_1CreateBotVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBotVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateIntentVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentVersionCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateIntentVersionCommandError(
      output,
      context
    );
  }
  const contents: CreateIntentVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateIntentVersionResponse",
    checksum: undefined,
    conclusionStatement: undefined,
    confirmationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    followUpPrompt: undefined,
    fulfillmentActivity: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    parentIntentSignature: undefined,
    rejectionStatement: undefined,
    sampleUtterances: undefined,
    slots: undefined,
    version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (
    data.conclusionStatement !== undefined &&
    data.conclusionStatement !== null
  ) {
    contents.conclusionStatement = deserializeAws_restJson1_1Statement(
      data.conclusionStatement,
      context
    );
  }
  if (
    data.confirmationPrompt !== undefined &&
    data.confirmationPrompt !== null
  ) {
    contents.confirmationPrompt = deserializeAws_restJson1_1Prompt(
      data.confirmationPrompt,
      context
    );
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1_1CodeHook(
      data.dialogCodeHook,
      context
    );
  }
  if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
    contents.followUpPrompt = deserializeAws_restJson1_1FollowUpPrompt(
      data.followUpPrompt,
      context
    );
  }
  if (
    data.fulfillmentActivity !== undefined &&
    data.fulfillmentActivity !== null
  ) {
    contents.fulfillmentActivity = deserializeAws_restJson1_1FulfillmentActivity(
      data.fulfillmentActivity,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (
    data.parentIntentSignature !== undefined &&
    data.parentIntentSignature !== null
  ) {
    contents.parentIntentSignature = data.parentIntentSignature;
  }
  if (
    data.rejectionStatement !== undefined &&
    data.rejectionStatement !== null
  ) {
    contents.rejectionStatement = deserializeAws_restJson1_1Statement(
      data.rejectionStatement,
      context
    );
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1_1IntentUtteranceList(
      data.sampleUtterances,
      context
    );
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1_1SlotList(data.slots, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateIntentVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateIntentVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1CreateSlotTypeVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeVersionCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSlotTypeVersionCommandError(
      output,
      context
    );
  }
  const contents: CreateSlotTypeVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSlotTypeVersionResponse",
    checksum: undefined,
    createdDate: undefined,
    description: undefined,
    enumerationValues: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    valueSelectionStrategy: undefined,
    version: undefined
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
    contents.enumerationValues = deserializeAws_restJson1_1EnumerationValues(
      data.enumerationValues,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (
    data.valueSelectionStrategy !== undefined &&
    data.valueSelectionStrategy !== null
  ) {
    contents.valueSelectionStrategy = data.valueSelectionStrategy;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateSlotTypeVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSlotTypeVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteBotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBotCommandError(output, context);
  }
  const contents: DeleteBotCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteBotAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBotAliasCommandError(
      output,
      context
    );
  }
  const contents: DeleteBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBotAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotAliasCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteBotChannelAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotChannelAssociationCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBotChannelAssociationCommandError(
      output,
      context
    );
  }
  const contents: DeleteBotChannelAssociationCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBotChannelAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotChannelAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteBotVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBotVersionCommandError(
      output,
      context
    );
  }
  const contents: DeleteBotVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBotVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBotVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteIntentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteIntentCommandError(output, context);
  }
  const contents: DeleteIntentCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteIntentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteIntentVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentVersionCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteIntentVersionCommandError(
      output,
      context
    );
  }
  const contents: DeleteIntentVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteIntentVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteIntentVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteSlotTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSlotTypeCommandError(
      output,
      context
    );
  }
  const contents: DeleteSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSlotTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteSlotTypeVersionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeVersionCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSlotTypeVersionCommandError(
      output,
      context
    );
  }
  const contents: DeleteSlotTypeVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteSlotTypeVersionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSlotTypeVersionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.deepsense.modelbuilding#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1DeleteUtterancesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteUtterancesCommandError(
      output,
      context
    );
  }
  const contents: DeleteUtterancesCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteUtterancesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUtterancesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotCommandError(output, context);
  }
  const contents: GetBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotResponse",
    abortStatement: undefined,
    checksum: undefined,
    childDirected: undefined,
    clarificationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    detectSentiment: undefined,
    failureReason: undefined,
    idleSessionTTLInSeconds: undefined,
    intents: undefined,
    lastUpdatedDate: undefined,
    locale: undefined,
    name: undefined,
    status: undefined,
    version: undefined,
    voiceId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.abortStatement !== undefined && data.abortStatement !== null) {
    contents.abortStatement = deserializeAws_restJson1_1Statement(
      data.abortStatement,
      context
    );
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.childDirected !== undefined && data.childDirected !== null) {
    contents.childDirected = data.childDirected;
  }
  if (
    data.clarificationPrompt !== undefined &&
    data.clarificationPrompt !== null
  ) {
    contents.clarificationPrompt = deserializeAws_restJson1_1Prompt(
      data.clarificationPrompt,
      context
    );
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
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (
    data.idleSessionTTLInSeconds !== undefined &&
    data.idleSessionTTLInSeconds !== null
  ) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1_1IntentList(
      data.intents,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
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
}

async function deserializeAws_restJson1_1GetBotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotAliasCommandError(output, context);
  }
  const contents: GetBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotAliasResponse",
    botName: undefined,
    botVersion: undefined,
    checksum: undefined,
    conversationLogs: undefined,
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined
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
    contents.conversationLogs = deserializeAws_restJson1_1ConversationLogsResponse(
      data.conversationLogs,
      context
    );
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBotAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotAliasesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotAliasesCommandError(output, context);
  }
  const contents: GetBotAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotAliasesResponse",
    BotAliases: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BotAliases !== undefined && data.BotAliases !== null) {
    contents.BotAliases = deserializeAws_restJson1_1BotAliasMetadataList(
      data.BotAliases,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBotAliasesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotAliasesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotChannelAssociationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotChannelAssociationCommandError(
      output,
      context
    );
  }
  const contents: GetBotChannelAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotChannelAssociationResponse",
    botAlias: undefined,
    botConfiguration: undefined,
    botName: undefined,
    createdDate: undefined,
    description: undefined,
    failureReason: undefined,
    name: undefined,
    status: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.botAlias !== undefined && data.botAlias !== null) {
    contents.botAlias = data.botAlias;
  }
  if (data.botConfiguration !== undefined && data.botConfiguration !== null) {
    contents.botConfiguration = deserializeAws_restJson1_1ChannelConfigurationMap(
      data.botConfiguration,
      context
    );
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
}

async function deserializeAws_restJson1_1GetBotChannelAssociationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotChannelAssociationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotChannelAssociationsCommandError(
      output,
      context
    );
  }
  const contents: GetBotChannelAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotChannelAssociationsResponse",
    botChannelAssociations: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.botChannelAssociations !== undefined &&
    data.botChannelAssociations !== null
  ) {
    contents.botChannelAssociations = deserializeAws_restJson1_1BotChannelAssociationList(
      data.botChannelAssociations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBotChannelAssociationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotChannelAssociationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotVersionsCommandError(
      output,
      context
    );
  }
  const contents: GetBotVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotVersionsResponse",
    bots: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.bots !== undefined && data.bots !== null) {
    contents.bots = deserializeAws_restJson1_1BotMetadataList(
      data.bots,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBotVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBotsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBotsCommandError(output, context);
  }
  const contents: GetBotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBotsResponse",
    bots: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.bots !== undefined && data.bots !== null) {
    contents.bots = deserializeAws_restJson1_1BotMetadataList(
      data.bots,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBotsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBotsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBuiltinIntentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBuiltinIntentCommandError(
      output,
      context
    );
  }
  const contents: GetBuiltinIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBuiltinIntentResponse",
    signature: undefined,
    slots: undefined,
    supportedLocales: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.signature !== undefined && data.signature !== null) {
    contents.signature = data.signature;
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1_1BuiltinIntentSlotList(
      data.slots,
      context
    );
  }
  if (data.supportedLocales !== undefined && data.supportedLocales !== null) {
    contents.supportedLocales = deserializeAws_restJson1_1LocaleList(
      data.supportedLocales,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBuiltinIntentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBuiltinIntentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBuiltinIntentsCommandError(
      output,
      context
    );
  }
  const contents: GetBuiltinIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBuiltinIntentsResponse",
    intents: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1_1BuiltinIntentMetadataList(
      data.intents,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBuiltinIntentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinIntentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetBuiltinSlotTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinSlotTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBuiltinSlotTypesCommandError(
      output,
      context
    );
  }
  const contents: GetBuiltinSlotTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBuiltinSlotTypesResponse",
    nextToken: undefined,
    slotTypes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.slotTypes !== undefined && data.slotTypes !== null) {
    contents.slotTypes = deserializeAws_restJson1_1BuiltinSlotTypeMetadataList(
      data.slotTypes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBuiltinSlotTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBuiltinSlotTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetExportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetExportCommandError(output, context);
  }
  const contents: GetExportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetExportResponse",
    exportStatus: undefined,
    exportType: undefined,
    failureReason: undefined,
    name: undefined,
    resourceType: undefined,
    url: undefined,
    version: undefined
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
}

async function deserializeAws_restJson1_1GetExportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetImportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetImportCommandError(output, context);
  }
  const contents: GetImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetImportResponse",
    createdDate: undefined,
    failureReason: undefined,
    importId: undefined,
    importStatus: undefined,
    mergeStrategy: undefined,
    name: undefined,
    resourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = deserializeAws_restJson1_1StringList(
      data.failureReason,
      context
    );
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
}

async function deserializeAws_restJson1_1GetImportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetImportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetIntentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntentCommandError(output, context);
  }
  const contents: GetIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntentResponse",
    checksum: undefined,
    conclusionStatement: undefined,
    confirmationPrompt: undefined,
    createdDate: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    followUpPrompt: undefined,
    fulfillmentActivity: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    parentIntentSignature: undefined,
    rejectionStatement: undefined,
    sampleUtterances: undefined,
    slots: undefined,
    version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (
    data.conclusionStatement !== undefined &&
    data.conclusionStatement !== null
  ) {
    contents.conclusionStatement = deserializeAws_restJson1_1Statement(
      data.conclusionStatement,
      context
    );
  }
  if (
    data.confirmationPrompt !== undefined &&
    data.confirmationPrompt !== null
  ) {
    contents.confirmationPrompt = deserializeAws_restJson1_1Prompt(
      data.confirmationPrompt,
      context
    );
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.dialogCodeHook !== undefined && data.dialogCodeHook !== null) {
    contents.dialogCodeHook = deserializeAws_restJson1_1CodeHook(
      data.dialogCodeHook,
      context
    );
  }
  if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
    contents.followUpPrompt = deserializeAws_restJson1_1FollowUpPrompt(
      data.followUpPrompt,
      context
    );
  }
  if (
    data.fulfillmentActivity !== undefined &&
    data.fulfillmentActivity !== null
  ) {
    contents.fulfillmentActivity = deserializeAws_restJson1_1FulfillmentActivity(
      data.fulfillmentActivity,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (
    data.parentIntentSignature !== undefined &&
    data.parentIntentSignature !== null
  ) {
    contents.parentIntentSignature = data.parentIntentSignature;
  }
  if (
    data.rejectionStatement !== undefined &&
    data.rejectionStatement !== null
  ) {
    contents.rejectionStatement = deserializeAws_restJson1_1Statement(
      data.rejectionStatement,
      context
    );
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1_1IntentUtteranceList(
      data.sampleUtterances,
      context
    );
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1_1SlotList(data.slots, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetIntentVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntentVersionsCommandError(
      output,
      context
    );
  }
  const contents: GetIntentVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntentVersionsResponse",
    intents: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1_1IntentMetadataList(
      data.intents,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntentVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetIntentsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetIntentsCommandError(output, context);
  }
  const contents: GetIntentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetIntentsResponse",
    intents: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1_1IntentMetadataList(
      data.intents,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetIntentsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetIntentsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSlotTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSlotTypeCommandError(output, context);
  }
  const contents: GetSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSlotTypeResponse",
    checksum: undefined,
    createdDate: undefined,
    description: undefined,
    enumerationValues: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    valueSelectionStrategy: undefined,
    version: undefined
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
    contents.enumerationValues = deserializeAws_restJson1_1EnumerationValues(
      data.enumerationValues,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (
    data.valueSelectionStrategy !== undefined &&
    data.valueSelectionStrategy !== null
  ) {
    contents.valueSelectionStrategy = data.valueSelectionStrategy;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSlotTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSlotTypeVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSlotTypeVersionsCommandError(
      output,
      context
    );
  }
  const contents: GetSlotTypeVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSlotTypeVersionsResponse",
    nextToken: undefined,
    slotTypes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.slotTypes !== undefined && data.slotTypes !== null) {
    contents.slotTypes = deserializeAws_restJson1_1SlotTypeMetadataList(
      data.slotTypes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSlotTypeVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypeVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetSlotTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSlotTypesCommandError(output, context);
  }
  const contents: GetSlotTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSlotTypesResponse",
    nextToken: undefined,
    slotTypes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.slotTypes !== undefined && data.slotTypes !== null) {
    contents.slotTypes = deserializeAws_restJson1_1SlotTypeMetadataList(
      data.slotTypes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSlotTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSlotTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.commonapi.exceptions#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1GetUtterancesViewCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUtterancesViewCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetUtterancesViewCommandError(
      output,
      context
    );
  }
  const contents: GetUtterancesViewCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetUtterancesViewResponse",
    botName: undefined,
    utterances: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.botName !== undefined && data.botName !== null) {
    contents.botName = data.botName;
  }
  if (data.utterances !== undefined && data.utterances !== null) {
    contents.utterances = deserializeAws_restJson1_1ListsOfUtterances(
      data.utterances,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetUtterancesViewCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetUtterancesViewCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutBotCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutBotCommandError(output, context);
  }
  const contents: PutBotCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutBotResponse",
    abortStatement: undefined,
    checksum: undefined,
    childDirected: undefined,
    clarificationPrompt: undefined,
    createVersion: undefined,
    createdDate: undefined,
    description: undefined,
    detectSentiment: undefined,
    failureReason: undefined,
    idleSessionTTLInSeconds: undefined,
    intents: undefined,
    lastUpdatedDate: undefined,
    locale: undefined,
    name: undefined,
    status: undefined,
    version: undefined,
    voiceId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.abortStatement !== undefined && data.abortStatement !== null) {
    contents.abortStatement = deserializeAws_restJson1_1Statement(
      data.abortStatement,
      context
    );
  }
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (data.childDirected !== undefined && data.childDirected !== null) {
    contents.childDirected = data.childDirected;
  }
  if (
    data.clarificationPrompt !== undefined &&
    data.clarificationPrompt !== null
  ) {
    contents.clarificationPrompt = deserializeAws_restJson1_1Prompt(
      data.clarificationPrompt,
      context
    );
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
  if (data.failureReason !== undefined && data.failureReason !== null) {
    contents.failureReason = data.failureReason;
  }
  if (
    data.idleSessionTTLInSeconds !== undefined &&
    data.idleSessionTTLInSeconds !== null
  ) {
    contents.idleSessionTTLInSeconds = data.idleSessionTTLInSeconds;
  }
  if (data.intents !== undefined && data.intents !== null) {
    contents.intents = deserializeAws_restJson1_1IntentList(
      data.intents,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
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
}

async function deserializeAws_restJson1_1PutBotCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutBotAliasCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotAliasCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutBotAliasCommandError(output, context);
  }
  const contents: PutBotAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutBotAliasResponse",
    botName: undefined,
    botVersion: undefined,
    checksum: undefined,
    conversationLogs: undefined,
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined
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
    contents.conversationLogs = deserializeAws_restJson1_1ConversationLogsResponse(
      data.conversationLogs,
      context
    );
  }
  if (data.createdDate !== undefined && data.createdDate !== null) {
    contents.createdDate = new Date(Math.round(data.createdDate * 1000));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.description = data.description;
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutBotAliasCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBotAliasCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutIntentCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntentCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutIntentCommandError(output, context);
  }
  const contents: PutIntentCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutIntentResponse",
    checksum: undefined,
    conclusionStatement: undefined,
    confirmationPrompt: undefined,
    createVersion: undefined,
    createdDate: undefined,
    description: undefined,
    dialogCodeHook: undefined,
    followUpPrompt: undefined,
    fulfillmentActivity: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    parentIntentSignature: undefined,
    rejectionStatement: undefined,
    sampleUtterances: undefined,
    slots: undefined,
    version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.checksum !== undefined && data.checksum !== null) {
    contents.checksum = data.checksum;
  }
  if (
    data.conclusionStatement !== undefined &&
    data.conclusionStatement !== null
  ) {
    contents.conclusionStatement = deserializeAws_restJson1_1Statement(
      data.conclusionStatement,
      context
    );
  }
  if (
    data.confirmationPrompt !== undefined &&
    data.confirmationPrompt !== null
  ) {
    contents.confirmationPrompt = deserializeAws_restJson1_1Prompt(
      data.confirmationPrompt,
      context
    );
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
    contents.dialogCodeHook = deserializeAws_restJson1_1CodeHook(
      data.dialogCodeHook,
      context
    );
  }
  if (data.followUpPrompt !== undefined && data.followUpPrompt !== null) {
    contents.followUpPrompt = deserializeAws_restJson1_1FollowUpPrompt(
      data.followUpPrompt,
      context
    );
  }
  if (
    data.fulfillmentActivity !== undefined &&
    data.fulfillmentActivity !== null
  ) {
    contents.fulfillmentActivity = deserializeAws_restJson1_1FulfillmentActivity(
      data.fulfillmentActivity,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (
    data.parentIntentSignature !== undefined &&
    data.parentIntentSignature !== null
  ) {
    contents.parentIntentSignature = data.parentIntentSignature;
  }
  if (
    data.rejectionStatement !== undefined &&
    data.rejectionStatement !== null
  ) {
    contents.rejectionStatement = deserializeAws_restJson1_1Statement(
      data.rejectionStatement,
      context
    );
  }
  if (data.sampleUtterances !== undefined && data.sampleUtterances !== null) {
    contents.sampleUtterances = deserializeAws_restJson1_1IntentUtteranceList(
      data.sampleUtterances,
      context
    );
  }
  if (data.slots !== undefined && data.slots !== null) {
    contents.slots = deserializeAws_restJson1_1SlotList(data.slots, context);
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutIntentCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutIntentCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1PutSlotTypeCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSlotTypeCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutSlotTypeCommandError(output, context);
  }
  const contents: PutSlotTypeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutSlotTypeResponse",
    checksum: undefined,
    createVersion: undefined,
    createdDate: undefined,
    description: undefined,
    enumerationValues: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    valueSelectionStrategy: undefined,
    version: undefined
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
    contents.enumerationValues = deserializeAws_restJson1_1EnumerationValues(
      data.enumerationValues,
      context
    );
  }
  if (data.lastUpdatedDate !== undefined && data.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(data.lastUpdatedDate * 1000)
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.name = data.name;
  }
  if (
    data.valueSelectionStrategy !== undefined &&
    data.valueSelectionStrategy !== null
  ) {
    contents.valueSelectionStrategy = data.valueSelectionStrategy;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutSlotTypeCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutSlotTypeCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.commonapi.exceptions#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.commonapi.exceptions#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

export async function deserializeAws_restJson1_1StartImportCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartImportCommandError(output, context);
  }
  const contents: StartImportCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartImportResponse",
    createdDate: undefined,
    importId: undefined,
    importStatus: undefined,
    mergeStrategy: undefined,
    name: undefined,
    resourceType: undefined
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
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartImportCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartImportCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.commonapi.exceptions#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalFailureException":
    case "com.amazonaws.commonapi.exceptions#InternalFailureException":
      response = {
        ...(await deserializeAws_restJson1_1InternalFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.commonapi.exceptions#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
}

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalFailureException> => {
  const contents: InternalFailureException = {
    name: "InternalFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (output.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = output.headers["retry-after"];
  }
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1PreconditionFailedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: PreconditionFailedException = {
    name: "PreconditionFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    exampleReference: undefined,
    referenceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.exampleReference !== undefined && data.exampleReference !== null) {
    contents.exampleReference = deserializeAws_restJson1_1ResourceReference(
      data.exampleReference,
      context
    );
  }
  if (data.referenceType !== undefined && data.referenceType !== null) {
    contents.referenceType = data.referenceType;
  }
  return contents;
};

const serializeAws_restJson1_1CodeHook = (
  input: CodeHook,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.messageVersion !== undefined) {
    bodyParams["messageVersion"] = input.messageVersion;
  }
  if (input.uri !== undefined) {
    bodyParams["uri"] = input.uri;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ConversationLogsRequest = (
  input: ConversationLogsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.iamRoleArn !== undefined) {
    bodyParams["iamRoleArn"] = input.iamRoleArn;
  }
  if (input.logSettings !== undefined) {
    bodyParams["logSettings"] = serializeAws_restJson1_1LogSettingsRequestList(
      input.logSettings,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EnumerationValue = (
  input: EnumerationValue,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.synonyms !== undefined) {
    bodyParams["synonyms"] = serializeAws_restJson1_1SynonymList(
      input.synonyms,
      context
    );
  }
  if (input.value !== undefined) {
    bodyParams["value"] = input.value;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EnumerationValues = (
  input: Array<EnumerationValue>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1EnumerationValue(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1FollowUpPrompt = (
  input: FollowUpPrompt,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.prompt !== undefined) {
    bodyParams["prompt"] = serializeAws_restJson1_1Prompt(
      input.prompt,
      context
    );
  }
  if (input.rejectionStatement !== undefined) {
    bodyParams["rejectionStatement"] = serializeAws_restJson1_1Statement(
      input.rejectionStatement,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1FulfillmentActivity = (
  input: FulfillmentActivity,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.codeHook !== undefined) {
    bodyParams["codeHook"] = serializeAws_restJson1_1CodeHook(
      input.codeHook,
      context
    );
  }
  if (input.type !== undefined) {
    bodyParams["type"] = input.type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Intent = (
  input: Intent,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.intentName !== undefined) {
    bodyParams["intentName"] = input.intentName;
  }
  if (input.intentVersion !== undefined) {
    bodyParams["intentVersion"] = input.intentVersion;
  }
  return bodyParams;
};

const serializeAws_restJson1_1IntentList = (
  input: Array<Intent>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Intent(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1IntentUtteranceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1LogSettingsRequest = (
  input: LogSettingsRequest,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.destination !== undefined) {
    bodyParams["destination"] = input.destination;
  }
  if (input.kmsKeyArn !== undefined) {
    bodyParams["kmsKeyArn"] = input.kmsKeyArn;
  }
  if (input.logType !== undefined) {
    bodyParams["logType"] = input.logType;
  }
  if (input.resourceArn !== undefined) {
    bodyParams["resourceArn"] = input.resourceArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1LogSettingsRequestList = (
  input: Array<LogSettingsRequest>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1LogSettingsRequest(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Message = (
  input: Message,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.content !== undefined) {
    bodyParams["content"] = input.content;
  }
  if (input.contentType !== undefined) {
    bodyParams["contentType"] = input.contentType;
  }
  if (input.groupNumber !== undefined) {
    bodyParams["groupNumber"] = input.groupNumber;
  }
  return bodyParams;
};

const serializeAws_restJson1_1MessageList = (
  input: Array<Message>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Message(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Prompt = (
  input: Prompt,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.maxAttempts !== undefined) {
    bodyParams["maxAttempts"] = input.maxAttempts;
  }
  if (input.messages !== undefined) {
    bodyParams["messages"] = serializeAws_restJson1_1MessageList(
      input.messages,
      context
    );
  }
  if (input.responseCard !== undefined) {
    bodyParams["responseCard"] = input.responseCard;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Slot = (
  input: Slot,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.description !== undefined) {
    bodyParams["description"] = input.description;
  }
  if (input.name !== undefined) {
    bodyParams["name"] = input.name;
  }
  if (input.obfuscationSetting !== undefined) {
    bodyParams["obfuscationSetting"] = input.obfuscationSetting;
  }
  if (input.priority !== undefined) {
    bodyParams["priority"] = input.priority;
  }
  if (input.responseCard !== undefined) {
    bodyParams["responseCard"] = input.responseCard;
  }
  if (input.sampleUtterances !== undefined) {
    bodyParams["sampleUtterances"] = serializeAws_restJson1_1SlotUtteranceList(
      input.sampleUtterances,
      context
    );
  }
  if (input.slotConstraint !== undefined) {
    bodyParams["slotConstraint"] = input.slotConstraint;
  }
  if (input.slotType !== undefined) {
    bodyParams["slotType"] = input.slotType;
  }
  if (input.slotTypeVersion !== undefined) {
    bodyParams["slotTypeVersion"] = input.slotTypeVersion;
  }
  if (input.valueElicitationPrompt !== undefined) {
    bodyParams["valueElicitationPrompt"] = serializeAws_restJson1_1Prompt(
      input.valueElicitationPrompt,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SlotList = (
  input: Array<Slot>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Slot(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1SlotUtteranceList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Statement = (
  input: Statement,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.messages !== undefined) {
    bodyParams["messages"] = serializeAws_restJson1_1MessageList(
      input.messages,
      context
    );
  }
  if (input.responseCard !== undefined) {
    bodyParams["responseCard"] = input.responseCard;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SynonymList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1BotAliasMetadata = (
  output: any,
  context: __SerdeContext
): BotAliasMetadata => {
  let contents: any = {
    __type: "BotAliasMetadata",
    botName: undefined,
    botVersion: undefined,
    checksum: undefined,
    conversationLogs: undefined,
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined
  };
  if (output.botName !== undefined && output.botName !== null) {
    contents.botName = output.botName;
  }
  if (output.botVersion !== undefined && output.botVersion !== null) {
    contents.botVersion = output.botVersion;
  }
  if (output.checksum !== undefined && output.checksum !== null) {
    contents.checksum = output.checksum;
  }
  if (
    output.conversationLogs !== undefined &&
    output.conversationLogs !== null
  ) {
    contents.conversationLogs = deserializeAws_restJson1_1ConversationLogsResponse(
      output.conversationLogs,
      context
    );
  }
  if (output.createdDate !== undefined && output.createdDate !== null) {
    contents.createdDate = new Date(Math.round(output.createdDate * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(output.lastUpdatedDate * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1BotAliasMetadataList = (
  output: any,
  context: __SerdeContext
): Array<BotAliasMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BotAliasMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1BotChannelAssociation = (
  output: any,
  context: __SerdeContext
): BotChannelAssociation => {
  let contents: any = {
    __type: "BotChannelAssociation",
    botAlias: undefined,
    botConfiguration: undefined,
    botName: undefined,
    createdDate: undefined,
    description: undefined,
    failureReason: undefined,
    name: undefined,
    status: undefined,
    type: undefined
  };
  if (output.botAlias !== undefined && output.botAlias !== null) {
    contents.botAlias = output.botAlias;
  }
  if (
    output.botConfiguration !== undefined &&
    output.botConfiguration !== null
  ) {
    contents.botConfiguration = deserializeAws_restJson1_1ChannelConfigurationMap(
      output.botConfiguration,
      context
    );
  }
  if (output.botName !== undefined && output.botName !== null) {
    contents.botName = output.botName;
  }
  if (output.createdDate !== undefined && output.createdDate !== null) {
    contents.createdDate = new Date(Math.round(output.createdDate * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.failureReason !== undefined && output.failureReason !== null) {
    contents.failureReason = output.failureReason;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1BotChannelAssociationList = (
  output: any,
  context: __SerdeContext
): Array<BotChannelAssociation> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BotChannelAssociation(entry, context)
  );
};

const deserializeAws_restJson1_1BotMetadata = (
  output: any,
  context: __SerdeContext
): BotMetadata => {
  let contents: any = {
    __type: "BotMetadata",
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    status: undefined,
    version: undefined
  };
  if (output.createdDate !== undefined && output.createdDate !== null) {
    contents.createdDate = new Date(Math.round(output.createdDate * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(output.lastUpdatedDate * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.status !== undefined && output.status !== null) {
    contents.status = output.status;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1BotMetadataList = (
  output: any,
  context: __SerdeContext
): Array<BotMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BotMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1BuiltinIntentMetadata = (
  output: any,
  context: __SerdeContext
): BuiltinIntentMetadata => {
  let contents: any = {
    __type: "BuiltinIntentMetadata",
    signature: undefined,
    supportedLocales: undefined
  };
  if (output.signature !== undefined && output.signature !== null) {
    contents.signature = output.signature;
  }
  if (
    output.supportedLocales !== undefined &&
    output.supportedLocales !== null
  ) {
    contents.supportedLocales = deserializeAws_restJson1_1LocaleList(
      output.supportedLocales,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BuiltinIntentMetadataList = (
  output: any,
  context: __SerdeContext
): Array<BuiltinIntentMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BuiltinIntentMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1BuiltinIntentSlot = (
  output: any,
  context: __SerdeContext
): BuiltinIntentSlot => {
  let contents: any = {
    __type: "BuiltinIntentSlot",
    name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1BuiltinIntentSlotList = (
  output: any,
  context: __SerdeContext
): Array<BuiltinIntentSlot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BuiltinIntentSlot(entry, context)
  );
};

const deserializeAws_restJson1_1BuiltinSlotTypeMetadata = (
  output: any,
  context: __SerdeContext
): BuiltinSlotTypeMetadata => {
  let contents: any = {
    __type: "BuiltinSlotTypeMetadata",
    signature: undefined,
    supportedLocales: undefined
  };
  if (output.signature !== undefined && output.signature !== null) {
    contents.signature = output.signature;
  }
  if (
    output.supportedLocales !== undefined &&
    output.supportedLocales !== null
  ) {
    contents.supportedLocales = deserializeAws_restJson1_1LocaleList(
      output.supportedLocales,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BuiltinSlotTypeMetadataList = (
  output: any,
  context: __SerdeContext
): Array<BuiltinSlotTypeMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BuiltinSlotTypeMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1ChannelConfigurationMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1CodeHook = (
  output: any,
  context: __SerdeContext
): CodeHook => {
  let contents: any = {
    __type: "CodeHook",
    messageVersion: undefined,
    uri: undefined
  };
  if (output.messageVersion !== undefined && output.messageVersion !== null) {
    contents.messageVersion = output.messageVersion;
  }
  if (output.uri !== undefined && output.uri !== null) {
    contents.uri = output.uri;
  }
  return contents;
};

const deserializeAws_restJson1_1ConversationLogsResponse = (
  output: any,
  context: __SerdeContext
): ConversationLogsResponse => {
  let contents: any = {
    __type: "ConversationLogsResponse",
    iamRoleArn: undefined,
    logSettings: undefined
  };
  if (output.iamRoleArn !== undefined && output.iamRoleArn !== null) {
    contents.iamRoleArn = output.iamRoleArn;
  }
  if (output.logSettings !== undefined && output.logSettings !== null) {
    contents.logSettings = deserializeAws_restJson1_1LogSettingsResponseList(
      output.logSettings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EnumerationValue = (
  output: any,
  context: __SerdeContext
): EnumerationValue => {
  let contents: any = {
    __type: "EnumerationValue",
    synonyms: undefined,
    value: undefined
  };
  if (output.synonyms !== undefined && output.synonyms !== null) {
    contents.synonyms = deserializeAws_restJson1_1SynonymList(
      output.synonyms,
      context
    );
  }
  if (output.value !== undefined && output.value !== null) {
    contents.value = output.value;
  }
  return contents;
};

const deserializeAws_restJson1_1EnumerationValues = (
  output: any,
  context: __SerdeContext
): Array<EnumerationValue> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EnumerationValue(entry, context)
  );
};

const deserializeAws_restJson1_1FollowUpPrompt = (
  output: any,
  context: __SerdeContext
): FollowUpPrompt => {
  let contents: any = {
    __type: "FollowUpPrompt",
    prompt: undefined,
    rejectionStatement: undefined
  };
  if (output.prompt !== undefined && output.prompt !== null) {
    contents.prompt = deserializeAws_restJson1_1Prompt(output.prompt, context);
  }
  if (
    output.rejectionStatement !== undefined &&
    output.rejectionStatement !== null
  ) {
    contents.rejectionStatement = deserializeAws_restJson1_1Statement(
      output.rejectionStatement,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FulfillmentActivity = (
  output: any,
  context: __SerdeContext
): FulfillmentActivity => {
  let contents: any = {
    __type: "FulfillmentActivity",
    codeHook: undefined,
    type: undefined
  };
  if (output.codeHook !== undefined && output.codeHook !== null) {
    contents.codeHook = deserializeAws_restJson1_1CodeHook(
      output.codeHook,
      context
    );
  }
  if (output.type !== undefined && output.type !== null) {
    contents.type = output.type;
  }
  return contents;
};

const deserializeAws_restJson1_1Intent = (
  output: any,
  context: __SerdeContext
): Intent => {
  let contents: any = {
    __type: "Intent",
    intentName: undefined,
    intentVersion: undefined
  };
  if (output.intentName !== undefined && output.intentName !== null) {
    contents.intentName = output.intentName;
  }
  if (output.intentVersion !== undefined && output.intentVersion !== null) {
    contents.intentVersion = output.intentVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1IntentList = (
  output: any,
  context: __SerdeContext
): Array<Intent> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Intent(entry, context)
  );
};

const deserializeAws_restJson1_1IntentMetadata = (
  output: any,
  context: __SerdeContext
): IntentMetadata => {
  let contents: any = {
    __type: "IntentMetadata",
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    version: undefined
  };
  if (output.createdDate !== undefined && output.createdDate !== null) {
    contents.createdDate = new Date(Math.round(output.createdDate * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(output.lastUpdatedDate * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1IntentMetadataList = (
  output: any,
  context: __SerdeContext
): Array<IntentMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1IntentMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1IntentUtteranceList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ListOfUtterance = (
  output: any,
  context: __SerdeContext
): Array<UtteranceData> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UtteranceData(entry, context)
  );
};

const deserializeAws_restJson1_1ListsOfUtterances = (
  output: any,
  context: __SerdeContext
): Array<UtteranceList> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UtteranceList(entry, context)
  );
};

const deserializeAws_restJson1_1LocaleList = (
  output: any,
  context: __SerdeContext
): Array<Locale | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1LogSettingsResponse = (
  output: any,
  context: __SerdeContext
): LogSettingsResponse => {
  let contents: any = {
    __type: "LogSettingsResponse",
    destination: undefined,
    kmsKeyArn: undefined,
    logType: undefined,
    resourceArn: undefined,
    resourcePrefix: undefined
  };
  if (output.destination !== undefined && output.destination !== null) {
    contents.destination = output.destination;
  }
  if (output.kmsKeyArn !== undefined && output.kmsKeyArn !== null) {
    contents.kmsKeyArn = output.kmsKeyArn;
  }
  if (output.logType !== undefined && output.logType !== null) {
    contents.logType = output.logType;
  }
  if (output.resourceArn !== undefined && output.resourceArn !== null) {
    contents.resourceArn = output.resourceArn;
  }
  if (output.resourcePrefix !== undefined && output.resourcePrefix !== null) {
    contents.resourcePrefix = output.resourcePrefix;
  }
  return contents;
};

const deserializeAws_restJson1_1LogSettingsResponseList = (
  output: any,
  context: __SerdeContext
): Array<LogSettingsResponse> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LogSettingsResponse(entry, context)
  );
};

const deserializeAws_restJson1_1Message = (
  output: any,
  context: __SerdeContext
): Message => {
  let contents: any = {
    __type: "Message",
    content: undefined,
    contentType: undefined,
    groupNumber: undefined
  };
  if (output.content !== undefined && output.content !== null) {
    contents.content = output.content;
  }
  if (output.contentType !== undefined && output.contentType !== null) {
    contents.contentType = output.contentType;
  }
  if (output.groupNumber !== undefined && output.groupNumber !== null) {
    contents.groupNumber = output.groupNumber;
  }
  return contents;
};

const deserializeAws_restJson1_1MessageList = (
  output: any,
  context: __SerdeContext
): Array<Message> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Message(entry, context)
  );
};

const deserializeAws_restJson1_1Prompt = (
  output: any,
  context: __SerdeContext
): Prompt => {
  let contents: any = {
    __type: "Prompt",
    maxAttempts: undefined,
    messages: undefined,
    responseCard: undefined
  };
  if (output.maxAttempts !== undefined && output.maxAttempts !== null) {
    contents.maxAttempts = output.maxAttempts;
  }
  if (output.messages !== undefined && output.messages !== null) {
    contents.messages = deserializeAws_restJson1_1MessageList(
      output.messages,
      context
    );
  }
  if (output.responseCard !== undefined && output.responseCard !== null) {
    contents.responseCard = output.responseCard;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceReference = (
  output: any,
  context: __SerdeContext
): ResourceReference => {
  let contents: any = {
    __type: "ResourceReference",
    name: undefined,
    version: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1Slot = (
  output: any,
  context: __SerdeContext
): Slot => {
  let contents: any = {
    __type: "Slot",
    description: undefined,
    name: undefined,
    obfuscationSetting: undefined,
    priority: undefined,
    responseCard: undefined,
    sampleUtterances: undefined,
    slotConstraint: undefined,
    slotType: undefined,
    slotTypeVersion: undefined,
    valueElicitationPrompt: undefined
  };
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (
    output.obfuscationSetting !== undefined &&
    output.obfuscationSetting !== null
  ) {
    contents.obfuscationSetting = output.obfuscationSetting;
  }
  if (output.priority !== undefined && output.priority !== null) {
    contents.priority = output.priority;
  }
  if (output.responseCard !== undefined && output.responseCard !== null) {
    contents.responseCard = output.responseCard;
  }
  if (
    output.sampleUtterances !== undefined &&
    output.sampleUtterances !== null
  ) {
    contents.sampleUtterances = deserializeAws_restJson1_1SlotUtteranceList(
      output.sampleUtterances,
      context
    );
  }
  if (output.slotConstraint !== undefined && output.slotConstraint !== null) {
    contents.slotConstraint = output.slotConstraint;
  }
  if (output.slotType !== undefined && output.slotType !== null) {
    contents.slotType = output.slotType;
  }
  if (output.slotTypeVersion !== undefined && output.slotTypeVersion !== null) {
    contents.slotTypeVersion = output.slotTypeVersion;
  }
  if (
    output.valueElicitationPrompt !== undefined &&
    output.valueElicitationPrompt !== null
  ) {
    contents.valueElicitationPrompt = deserializeAws_restJson1_1Prompt(
      output.valueElicitationPrompt,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SlotList = (
  output: any,
  context: __SerdeContext
): Array<Slot> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Slot(entry, context)
  );
};

const deserializeAws_restJson1_1SlotTypeMetadata = (
  output: any,
  context: __SerdeContext
): SlotTypeMetadata => {
  let contents: any = {
    __type: "SlotTypeMetadata",
    createdDate: undefined,
    description: undefined,
    lastUpdatedDate: undefined,
    name: undefined,
    version: undefined
  };
  if (output.createdDate !== undefined && output.createdDate !== null) {
    contents.createdDate = new Date(Math.round(output.createdDate * 1000));
  }
  if (output.description !== undefined && output.description !== null) {
    contents.description = output.description;
  }
  if (output.lastUpdatedDate !== undefined && output.lastUpdatedDate !== null) {
    contents.lastUpdatedDate = new Date(
      Math.round(output.lastUpdatedDate * 1000)
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.name = output.name;
  }
  if (output.version !== undefined && output.version !== null) {
    contents.version = output.version;
  }
  return contents;
};

const deserializeAws_restJson1_1SlotTypeMetadataList = (
  output: any,
  context: __SerdeContext
): Array<SlotTypeMetadata> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SlotTypeMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1SlotUtteranceList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Statement = (
  output: any,
  context: __SerdeContext
): Statement => {
  let contents: any = {
    __type: "Statement",
    messages: undefined,
    responseCard: undefined
  };
  if (output.messages !== undefined && output.messages !== null) {
    contents.messages = deserializeAws_restJson1_1MessageList(
      output.messages,
      context
    );
  }
  if (output.responseCard !== undefined && output.responseCard !== null) {
    contents.responseCard = output.responseCard;
  }
  return contents;
};

const deserializeAws_restJson1_1StringList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SynonymList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1UtteranceData = (
  output: any,
  context: __SerdeContext
): UtteranceData => {
  let contents: any = {
    __type: "UtteranceData",
    count: undefined,
    distinctUsers: undefined,
    firstUtteredDate: undefined,
    lastUtteredDate: undefined,
    utteranceString: undefined
  };
  if (output.count !== undefined && output.count !== null) {
    contents.count = output.count;
  }
  if (output.distinctUsers !== undefined && output.distinctUsers !== null) {
    contents.distinctUsers = output.distinctUsers;
  }
  if (
    output.firstUtteredDate !== undefined &&
    output.firstUtteredDate !== null
  ) {
    contents.firstUtteredDate = new Date(
      Math.round(output.firstUtteredDate * 1000)
    );
  }
  if (output.lastUtteredDate !== undefined && output.lastUtteredDate !== null) {
    contents.lastUtteredDate = new Date(
      Math.round(output.lastUtteredDate * 1000)
    );
  }
  if (output.utteranceString !== undefined && output.utteranceString !== null) {
    contents.utteranceString = output.utteranceString;
  }
  return contents;
};

const deserializeAws_restJson1_1UtteranceList = (
  output: any,
  context: __SerdeContext
): UtteranceList => {
  let contents: any = {
    __type: "UtteranceList",
    botVersion: undefined,
    utterances: undefined
  };
  if (output.botVersion !== undefined && output.botVersion !== null) {
    contents.botVersion = output.botVersion;
  }
  if (output.utterances !== undefined && output.utterances !== null) {
    contents.utterances = deserializeAws_restJson1_1ListOfUtterance(
      output.utterances,
      context
    );
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
