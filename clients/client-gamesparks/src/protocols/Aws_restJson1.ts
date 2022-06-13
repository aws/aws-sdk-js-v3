// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  DocumentType as __DocumentType,
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateGameCommandInput, CreateGameCommandOutput } from "../commands/CreateGameCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "../commands/CreateStageCommand";
import { DeleteGameCommandInput, DeleteGameCommandOutput } from "../commands/DeleteGameCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "../commands/DeleteStageCommand";
import { DisconnectPlayerCommandInput, DisconnectPlayerCommandOutput } from "../commands/DisconnectPlayerCommand";
import { ExportSnapshotCommandInput, ExportSnapshotCommandOutput } from "../commands/ExportSnapshotCommand";
import { GetExtensionCommandInput, GetExtensionCommandOutput } from "../commands/GetExtensionCommand";
import {
  GetExtensionVersionCommandInput,
  GetExtensionVersionCommandOutput,
} from "../commands/GetExtensionVersionCommand";
import { GetGameCommandInput, GetGameCommandOutput } from "../commands/GetGameCommand";
import {
  GetGameConfigurationCommandInput,
  GetGameConfigurationCommandOutput,
} from "../commands/GetGameConfigurationCommand";
import {
  GetGeneratedCodeJobCommandInput,
  GetGeneratedCodeJobCommandOutput,
} from "../commands/GetGeneratedCodeJobCommand";
import {
  GetPlayerConnectionStatusCommandInput,
  GetPlayerConnectionStatusCommandOutput,
} from "../commands/GetPlayerConnectionStatusCommand";
import { GetSnapshotCommandInput, GetSnapshotCommandOutput } from "../commands/GetSnapshotCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "../commands/GetStageCommand";
import { GetStageDeploymentCommandInput, GetStageDeploymentCommandOutput } from "../commands/GetStageDeploymentCommand";
import {
  ImportGameConfigurationCommandInput,
  ImportGameConfigurationCommandOutput,
} from "../commands/ImportGameConfigurationCommand";
import { ListExtensionsCommandInput, ListExtensionsCommandOutput } from "../commands/ListExtensionsCommand";
import {
  ListExtensionVersionsCommandInput,
  ListExtensionVersionsCommandOutput,
} from "../commands/ListExtensionVersionsCommand";
import { ListGamesCommandInput, ListGamesCommandOutput } from "../commands/ListGamesCommand";
import {
  ListGeneratedCodeJobsCommandInput,
  ListGeneratedCodeJobsCommandOutput,
} from "../commands/ListGeneratedCodeJobsCommand";
import { ListSnapshotsCommandInput, ListSnapshotsCommandOutput } from "../commands/ListSnapshotsCommand";
import {
  ListStageDeploymentsCommandInput,
  ListStageDeploymentsCommandOutput,
} from "../commands/ListStageDeploymentsCommand";
import { ListStagesCommandInput, ListStagesCommandOutput } from "../commands/ListStagesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  StartGeneratedCodeJobCommandInput,
  StartGeneratedCodeJobCommandOutput,
} from "../commands/StartGeneratedCodeJobCommand";
import {
  StartStageDeploymentCommandInput,
  StartStageDeploymentCommandOutput,
} from "../commands/StartStageDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateGameCommandInput, UpdateGameCommandOutput } from "../commands/UpdateGameCommand";
import {
  UpdateGameConfigurationCommandInput,
  UpdateGameConfigurationCommandOutput,
} from "../commands/UpdateGameConfigurationCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "../commands/UpdateSnapshotCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "../commands/UpdateStageCommand";
import { GameSparksServiceException as __BaseException } from "../models/GameSparksServiceException";
import {
  AccessDeniedException,
  ConflictException,
  Connection,
  DeploymentResult,
  ExtensionDetails,
  ExtensionVersionDetails,
  GameConfigurationDetails,
  GameDetails,
  GameSummary,
  GeneratedCodeJobDetails,
  Generator,
  ImportGameConfigurationSource,
  InternalServerException,
  ResourceNotFoundException,
  Section,
  SectionModification,
  ServiceQuotaExceededException,
  SnapshotDetails,
  SnapshotSummary,
  StageDeploymentDetails,
  StageDeploymentSummary,
  StageDetails,
  StageSummary,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";

export const serializeAws_restJson1CreateGameCommand = async (
  input: CreateGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game";
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.GameName !== undefined && input.GameName !== null && { GameName: input.GameName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
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

export const serializeAws_restJson1CreateStageCommand = async (
  input: CreateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
    ...(input.StageName !== undefined && input.StageName !== null && { StageName: input.StageName }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteGameCommand = async (
  input: DeleteGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
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

export const serializeAws_restJson1DeleteStageCommand = async (
  input: DeleteStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage/{StageName}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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

export const serializeAws_restJson1DisconnectPlayerCommand = async (
  input: DisconnectPlayerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/disconnect";
  if (input.PlayerId !== undefined) {
    const labelValue: string = input.PlayerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PlayerId.");
    }
    resolvedPath = resolvedPath.replace("{PlayerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PlayerId.");
  }
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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

export const serializeAws_restJson1ExportSnapshotCommand = async (
  input: ExportSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/export";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
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

export const serializeAws_restJson1GetExtensionCommand = async (
  input: GetExtensionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extension/{Namespace}/{Name}";
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1GetExtensionVersionCommand = async (
  input: GetExtensionVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/extension/{Namespace}/{Name}/version/{ExtensionVersion}";
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  if (input.ExtensionVersion !== undefined) {
    const labelValue: string = input.ExtensionVersion;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ExtensionVersion.");
    }
    resolvedPath = resolvedPath.replace("{ExtensionVersion}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ExtensionVersion.");
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

export const serializeAws_restJson1GetGameCommand = async (
  input: GetGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
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

export const serializeAws_restJson1GetGameConfigurationCommand = async (
  input: GetGameConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/configuration";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  const query: any = {
    ...(input.Sections !== undefined && { Sections: (input.Sections || []).map((_entry) => _entry as any) }),
  };
  let body: any;
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

export const serializeAws_restJson1GetGeneratedCodeJobCommand = async (
  input: GetGeneratedCodeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job/{JobId}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  if (input.JobId !== undefined) {
    const labelValue: string = input.JobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: JobId.");
    }
    resolvedPath = resolvedPath.replace("{JobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: JobId.");
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

export const serializeAws_restJson1GetPlayerConnectionStatusCommand = async (
  input: GetPlayerConnectionStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/runtime/game/{GameName}/stage/{StageName}/player/{PlayerId}/connection";
  if (input.PlayerId !== undefined) {
    const labelValue: string = input.PlayerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: PlayerId.");
    }
    resolvedPath = resolvedPath.replace("{PlayerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: PlayerId.");
  }
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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

export const serializeAws_restJson1GetSnapshotCommand = async (
  input: GetSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot/{SnapshotId}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {
    ...(input.Sections !== undefined && { Sections: (input.Sections || []).map((_entry) => _entry as any) }),
  };
  let body: any;
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

export const serializeAws_restJson1GetStageCommand = async (
  input: GetStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage/{StageName}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
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

export const serializeAws_restJson1GetStageDeploymentCommand = async (
  input: GetStageDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/stage/{StageName}/deployment";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  const query: any = {
    ...(input.DeploymentId !== undefined && { DeploymentId: input.DeploymentId }),
  };
  let body: any;
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

export const serializeAws_restJson1ImportGameConfigurationCommand = async (
  input: ImportGameConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/configuration";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ImportSource !== undefined &&
      input.ImportSource !== null && {
        ImportSource: serializeAws_restJson1ImportGameConfigurationSource(input.ImportSource, context),
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

export const serializeAws_restJson1ListExtensionsCommand = async (
  input: ListExtensionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extension";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
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

export const serializeAws_restJson1ListExtensionVersionsCommand = async (
  input: ListExtensionVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/extension/{Namespace}/{Name}/version";
  if (input.Namespace !== undefined) {
    const labelValue: string = input.Namespace;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Namespace.");
    }
    resolvedPath = resolvedPath.replace("{Namespace}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Namespace.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace("{Name}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
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

export const serializeAws_restJson1ListGamesCommand = async (
  input: ListGamesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game";
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
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

export const serializeAws_restJson1ListGeneratedCodeJobsCommand = async (
  input: ListGeneratedCodeJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-jobs";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
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

export const serializeAws_restJson1ListSnapshotsCommand = async (
  input: ListSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
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

export const serializeAws_restJson1ListStageDeploymentsCommand = async (
  input: ListStageDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/stage/{StageName}/deployments";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
  };
  let body: any;
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

export const serializeAws_restJson1ListStagesCommand = async (
  input: ListStagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
  };
  let body: any;
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1StartGeneratedCodeJobCommand = async (
  input: StartGeneratedCodeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/snapshot/{SnapshotId}/generated-sdk-code-job";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Generator !== undefined &&
      input.Generator !== null && { Generator: serializeAws_restJson1Generator(input.Generator, context) }),
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

export const serializeAws_restJson1StartStageDeploymentCommand = async (
  input: StartStageDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/game/{GameName}/stage/{StageName}/deployment";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ClientToken !== undefined && input.ClientToken !== null && { ClientToken: input.ClientToken }),
    ...(input.SnapshotId !== undefined && input.SnapshotId !== null && { SnapshotId: input.SnapshotId }),
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && input.tags !== null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1UpdateGameCommand = async (
  input: UpdateGameCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateGameConfigurationCommand = async (
  input: UpdateGameConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/configuration";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Modifications !== undefined &&
      input.Modifications !== null && {
        Modifications: serializeAws_restJson1SectionModificationList(input.Modifications, context),
      }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/snapshot/{SnapshotId}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.SnapshotId !== undefined) {
    const labelValue: string = input.SnapshotId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SnapshotId.");
    }
    resolvedPath = resolvedPath.replace("{SnapshotId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SnapshotId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateStageCommand = async (
  input: UpdateStageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/game/{GameName}/stage/{StageName}";
  if (input.GameName !== undefined) {
    const labelValue: string = input.GameName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: GameName.");
    }
    resolvedPath = resolvedPath.replace("{GameName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: GameName.");
  }
  if (input.StageName !== undefined) {
    const labelValue: string = input.StageName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: StageName.");
    }
    resolvedPath = resolvedPath.replace("{StageName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: StageName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Role !== undefined && input.Role !== null && { Role: input.Role }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1CreateGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateGameCommandError(output, context);
  }
  const contents: CreateGameCommandOutput = {
    $metadata: deserializeMetadata(output),
    Game: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Game !== undefined && data.Game !== null) {
    contents.Game = deserializeAws_restJson1GameDetails(data.Game, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gamesparks#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateSnapshotCommandError(output, context);
  }
  const contents: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    Snapshot: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Snapshot !== undefined && data.Snapshot !== null) {
    contents.Snapshot = deserializeAws_restJson1SnapshotDetails(data.Snapshot, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateStageCommandError(output, context);
  }
  const contents: CreateStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    Stage: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stage !== undefined && data.Stage !== null) {
    contents.Stage = deserializeAws_restJson1StageDetails(data.Stage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteGameCommandError(output, context);
  }
  const contents: DeleteGameCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteStageCommandError(output, context);
  }
  const contents: DeleteStageCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DisconnectPlayerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectPlayerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisconnectPlayerCommandError(output, context);
  }
  const contents: DisconnectPlayerCommandOutput = {
    $metadata: deserializeMetadata(output),
    DisconnectFailures: undefined,
    DisconnectSuccesses: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DisconnectFailures !== undefined && data.DisconnectFailures !== null) {
    contents.DisconnectFailures = deserializeAws_restJson1ConnectionIdList(data.DisconnectFailures, context);
  }
  if (data.DisconnectSuccesses !== undefined && data.DisconnectSuccesses !== null) {
    contents.DisconnectSuccesses = deserializeAws_restJson1ConnectionIdList(data.DisconnectSuccesses, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisconnectPlayerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisconnectPlayerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExportSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportSnapshotCommandError(output, context);
  }
  const contents: ExportSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    S3Url: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.S3Url !== undefined && data.S3Url !== null) {
    contents.S3Url = __expectString(data.S3Url);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExtensionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExtensionCommandError(output, context);
  }
  const contents: GetExtensionCommandOutput = {
    $metadata: deserializeMetadata(output),
    Extension: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Extension !== undefined && data.Extension !== null) {
    contents.Extension = deserializeAws_restJson1ExtensionDetails(data.Extension, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExtensionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetExtensionVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetExtensionVersionCommandError(output, context);
  }
  const contents: GetExtensionVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExtensionVersion: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExtensionVersion !== undefined && data.ExtensionVersion !== null) {
    contents.ExtensionVersion = deserializeAws_restJson1ExtensionVersionDetails(data.ExtensionVersion, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetExtensionVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetExtensionVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGameCommandError(output, context);
  }
  const contents: GetGameCommandOutput = {
    $metadata: deserializeMetadata(output),
    Game: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Game !== undefined && data.Game !== null) {
    contents.Game = deserializeAws_restJson1GameDetails(data.Game, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetGameConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGameConfigurationCommandError(output, context);
  }
  const contents: GetGameConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    GameConfiguration: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GameConfiguration !== undefined && data.GameConfiguration !== null) {
    contents.GameConfiguration = deserializeAws_restJson1GameConfigurationDetails(data.GameConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGameConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGameConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetGeneratedCodeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedCodeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetGeneratedCodeJobCommandError(output, context);
  }
  const contents: GetGeneratedCodeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    GeneratedCodeJob: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeneratedCodeJob !== undefined && data.GeneratedCodeJob !== null) {
    contents.GeneratedCodeJob = deserializeAws_restJson1GeneratedCodeJobDetails(data.GeneratedCodeJob, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetGeneratedCodeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetGeneratedCodeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetPlayerConnectionStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlayerConnectionStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetPlayerConnectionStatusCommandError(output, context);
  }
  const contents: GetPlayerConnectionStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    Connections: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Connections !== undefined && data.Connections !== null) {
    contents.Connections = deserializeAws_restJson1ConnectionList(data.Connections, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPlayerConnectionStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPlayerConnectionStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSnapshotCommandError(output, context);
  }
  const contents: GetSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    Snapshot: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Snapshot !== undefined && data.Snapshot !== null) {
    contents.Snapshot = deserializeAws_restJson1SnapshotDetails(data.Snapshot, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStageCommandError(output, context);
  }
  const contents: GetStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    Stage: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stage !== undefined && data.Stage !== null) {
    contents.Stage = deserializeAws_restJson1StageDetails(data.Stage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetStageDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetStageDeploymentCommandError(output, context);
  }
  const contents: GetStageDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    StageDeployment: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StageDeployment !== undefined && data.StageDeployment !== null) {
    contents.StageDeployment = deserializeAws_restJson1StageDeploymentDetails(data.StageDeployment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetStageDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetStageDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ImportGameConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportGameConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ImportGameConfigurationCommandError(output, context);
  }
  const contents: ImportGameConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    GameConfiguration: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GameConfiguration !== undefined && data.GameConfiguration !== null) {
    contents.GameConfiguration = deserializeAws_restJson1GameConfigurationDetails(data.GameConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ImportGameConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ImportGameConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gamesparks#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListExtensionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExtensionsCommandError(output, context);
  }
  const contents: ListExtensionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Extensions: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Extensions !== undefined && data.Extensions !== null) {
    contents.Extensions = deserializeAws_restJson1ExtensionDetailsList(data.Extensions, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExtensionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListExtensionVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListExtensionVersionsCommandError(output, context);
  }
  const contents: ListExtensionVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExtensionVersions: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExtensionVersions !== undefined && data.ExtensionVersions !== null) {
    contents.ExtensionVersions = deserializeAws_restJson1ExtensionVersionDetailsList(data.ExtensionVersions, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListExtensionVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListExtensionVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListGamesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGamesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGamesCommandError(output, context);
  }
  const contents: ListGamesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Games: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Games !== undefined && data.Games !== null) {
    contents.Games = deserializeAws_restJson1GameSummaryList(data.Games, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGamesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGamesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListGeneratedCodeJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeneratedCodeJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListGeneratedCodeJobsCommandError(output, context);
  }
  const contents: ListGeneratedCodeJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    GeneratedCodeJobs: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeneratedCodeJobs !== undefined && data.GeneratedCodeJobs !== null) {
    contents.GeneratedCodeJobs = deserializeAws_restJson1GeneratedCodeJobDetailsList(data.GeneratedCodeJobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListGeneratedCodeJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListGeneratedCodeJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSnapshotsCommandError(output, context);
  }
  const contents: ListSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Snapshots: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Snapshots !== undefined && data.Snapshots !== null) {
    contents.Snapshots = deserializeAws_restJson1SnapshotSummaryList(data.Snapshots, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListStageDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStageDeploymentsCommandError(output, context);
  }
  const contents: ListStageDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    StageDeployments: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StageDeployments !== undefined && data.StageDeployments !== null) {
    contents.StageDeployments = deserializeAws_restJson1StageDeploymentList(data.StageDeployments, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStageDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStageDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListStagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListStagesCommandError(output, context);
  }
  const contents: ListStagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Stages: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Stages !== undefined && data.Stages !== null) {
    contents.Stages = deserializeAws_restJson1StageSummaryList(data.Stages, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListStagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListStagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartGeneratedCodeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGeneratedCodeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartGeneratedCodeJobCommandError(output, context);
  }
  const contents: StartGeneratedCodeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    GeneratedCodeJobId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GeneratedCodeJobId !== undefined && data.GeneratedCodeJobId !== null) {
    contents.GeneratedCodeJobId = __expectString(data.GeneratedCodeJobId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartGeneratedCodeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartGeneratedCodeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartStageDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStageDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartStageDeploymentCommandError(output, context);
  }
  const contents: StartStageDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    StageDeployment: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StageDeployment !== undefined && data.StageDeployment !== null) {
    contents.StageDeployment = deserializeAws_restJson1StageDeploymentDetails(data.StageDeployment, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartStageDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartStageDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.gamesparks#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
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
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateGameCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGameCommandError(output, context);
  }
  const contents: UpdateGameCommandOutput = {
    $metadata: deserializeMetadata(output),
    Game: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Game !== undefined && data.Game !== null) {
    contents.Game = deserializeAws_restJson1GameDetails(data.Game, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGameCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateGameConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGameConfigurationCommandError(output, context);
  }
  const contents: UpdateGameConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    GameConfiguration: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GameConfiguration !== undefined && data.GameConfiguration !== null) {
    contents.GameConfiguration = deserializeAws_restJson1GameConfigurationDetails(data.GameConfiguration, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGameConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGameConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.gamesparks#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSnapshotCommandError(output, context);
  }
  const contents: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    Snapshot: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Snapshot !== undefined && data.Snapshot !== null) {
    contents.Snapshot = deserializeAws_restJson1SnapshotDetails(data.Snapshot, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateStageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStageCommandError(output, context);
  }
  const contents: UpdateStageCommandOutput = {
    $metadata: deserializeMetadata(output),
    Stage: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Stage !== undefined && data.Stage !== null) {
    contents.Stage = deserializeAws_restJson1StageDetails(data.Stage, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateStageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.gamesparks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.gamesparks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.gamesparks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.gamesparks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.gamesparks#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServerException({
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
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
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Document = (input: __DocumentType, context: __SerdeContext): any => {
  return input;
};

const serializeAws_restJson1Generator = (input: Generator, context: __SerdeContext): any => {
  return {
    ...(input.GameSdkVersion !== undefined &&
      input.GameSdkVersion !== null && { GameSdkVersion: input.GameSdkVersion }),
    ...(input.Language !== undefined && input.Language !== null && { Language: input.Language }),
    ...(input.TargetPlatform !== undefined &&
      input.TargetPlatform !== null && { TargetPlatform: input.TargetPlatform }),
  };
};

const serializeAws_restJson1ImportGameConfigurationSource = (
  input: ImportGameConfigurationSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.File !== undefined && input.File !== null && { File: context.base64Encoder(input.File) }),
  };
};

const serializeAws_restJson1SectionModification = (input: SectionModification, context: __SerdeContext): any => {
  return {
    ...(input.Operation !== undefined && input.Operation !== null && { Operation: input.Operation }),
    ...(input.Path !== undefined && input.Path !== null && { Path: input.Path }),
    ...(input.Section !== undefined && input.Section !== null && { Section: input.Section }),
    ...(input.Value !== undefined &&
      input.Value !== null && { Value: serializeAws_restJson1Document(input.Value, context) }),
  };
};

const serializeAws_restJson1SectionModificationList = (input: SectionModification[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1SectionModification(entry, context);
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

const deserializeAws_restJson1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1ConnectionIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Connection(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentResult = (output: any, context: __SerdeContext): DeploymentResult => {
  return {
    Message: __expectString(output.Message),
    ResultCode: __expectString(output.ResultCode),
  } as any;
};

const deserializeAws_restJson1Document = (output: any, context: __SerdeContext): __DocumentType => {
  return output;
};

const deserializeAws_restJson1ExtensionDetails = (output: any, context: __SerdeContext): ExtensionDetails => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Namespace: __expectString(output.Namespace),
  } as any;
};

const deserializeAws_restJson1ExtensionDetailsList = (output: any, context: __SerdeContext): ExtensionDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExtensionDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ExtensionVersionDetails = (
  output: any,
  context: __SerdeContext
): ExtensionVersionDetails => {
  return {
    Name: __expectString(output.Name),
    Namespace: __expectString(output.Namespace),
    Schema: __expectString(output.Schema),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1ExtensionVersionDetailsList = (
  output: any,
  context: __SerdeContext
): ExtensionVersionDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ExtensionVersionDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GameConfigurationDetails = (
  output: any,
  context: __SerdeContext
): GameConfigurationDetails => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
    Sections:
      output.Sections !== undefined && output.Sections !== null
        ? deserializeAws_restJson1Sections(output.Sections, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GameDetails = (output: any, context: __SerdeContext): GameDetails => {
  return {
    Arn: __expectString(output.Arn),
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    Description: __expectString(output.Description),
    EnableTerminationProtection: __expectBoolean(output.EnableTerminationProtection),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GameSummary = (output: any, context: __SerdeContext): GameSummary => {
  return {
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1GameSummaryList = (output: any, context: __SerdeContext): GameSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GameSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GeneratedCodeJobDetails = (
  output: any,
  context: __SerdeContext
): GeneratedCodeJobDetails => {
  return {
    Description: __expectString(output.Description),
    ExpirationTime:
      output.ExpirationTime !== undefined && output.ExpirationTime !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.ExpirationTime))
        : undefined,
    GeneratedCodeJobId: __expectString(output.GeneratedCodeJobId),
    S3Url: __expectString(output.S3Url),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1GeneratedCodeJobDetailsList = (
  output: any,
  context: __SerdeContext
): GeneratedCodeJobDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GeneratedCodeJobDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Section = (output: any, context: __SerdeContext): Section => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_restJson1Document(output.Attributes, context)
        : undefined,
    Name: __expectString(output.Name),
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1Sections = (output: any, context: __SerdeContext): Record<string, Section> => {
  return Object.entries(output).reduce((acc: Record<string, Section>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: deserializeAws_restJson1Section(value, context),
    };
  }, {});
};

const deserializeAws_restJson1SnapshotDetails = (output: any, context: __SerdeContext): SnapshotDetails => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
    Sections:
      output.Sections !== undefined && output.Sections !== null
        ? deserializeAws_restJson1Sections(output.Sections, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SnapshotSummary = (output: any, context: __SerdeContext): SnapshotSummary => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
  } as any;
};

const deserializeAws_restJson1SnapshotSummaryList = (output: any, context: __SerdeContext): SnapshotSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SnapshotSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StageDeploymentDetails = (
  output: any,
  context: __SerdeContext
): StageDeploymentDetails => {
  return {
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    DeploymentAction: __expectString(output.DeploymentAction),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentResult:
      output.DeploymentResult !== undefined && output.DeploymentResult !== null
        ? deserializeAws_restJson1DeploymentResult(output.DeploymentResult, context)
        : undefined,
    DeploymentState: __expectString(output.DeploymentState),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

const deserializeAws_restJson1StageDeploymentList = (
  output: any,
  context: __SerdeContext
): StageDeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StageDeploymentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StageDeploymentSummary = (
  output: any,
  context: __SerdeContext
): StageDeploymentSummary => {
  return {
    DeploymentAction: __expectString(output.DeploymentAction),
    DeploymentId: __expectString(output.DeploymentId),
    DeploymentResult:
      output.DeploymentResult !== undefined && output.DeploymentResult !== null
        ? deserializeAws_restJson1DeploymentResult(output.DeploymentResult, context)
        : undefined,
    DeploymentState: __expectString(output.DeploymentState),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

const deserializeAws_restJson1StageDetails = (output: any, context: __SerdeContext): StageDetails => {
  return {
    Arn: __expectString(output.Arn),
    Created:
      output.Created !== undefined && output.Created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.Created))
        : undefined,
    Description: __expectString(output.Description),
    GameKey: __expectString(output.GameKey),
    LastUpdated:
      output.LastUpdated !== undefined && output.LastUpdated !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.LastUpdated))
        : undefined,
    LogGroup: __expectString(output.LogGroup),
    Name: __expectString(output.Name),
    Role: __expectString(output.Role),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StageSummary = (output: any, context: __SerdeContext): StageSummary => {
  return {
    Description: __expectString(output.Description),
    GameKey: __expectString(output.GameKey),
    Name: __expectString(output.Name),
    State: __expectString(output.State),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StageSummaryList = (output: any, context: __SerdeContext): StageSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StageSummary(entry, context);
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
