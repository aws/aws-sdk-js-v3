import { CreateCellCommandInput, CreateCellCommandOutput } from "../commands/CreateCellCommand";
import {
  CreateCrossAccountAuthorizationCommandInput,
  CreateCrossAccountAuthorizationCommandOutput,
} from "../commands/CreateCrossAccountAuthorizationCommand";
import {
  CreateReadinessCheckCommandInput,
  CreateReadinessCheckCommandOutput,
} from "../commands/CreateReadinessCheckCommand";
import {
  CreateRecoveryGroupCommandInput,
  CreateRecoveryGroupCommandOutput,
} from "../commands/CreateRecoveryGroupCommand";
import { CreateResourceSetCommandInput, CreateResourceSetCommandOutput } from "../commands/CreateResourceSetCommand";
import { DeleteCellCommandInput, DeleteCellCommandOutput } from "../commands/DeleteCellCommand";
import {
  DeleteCrossAccountAuthorizationCommandInput,
  DeleteCrossAccountAuthorizationCommandOutput,
} from "../commands/DeleteCrossAccountAuthorizationCommand";
import {
  DeleteReadinessCheckCommandInput,
  DeleteReadinessCheckCommandOutput,
} from "../commands/DeleteReadinessCheckCommand";
import {
  DeleteRecoveryGroupCommandInput,
  DeleteRecoveryGroupCommandOutput,
} from "../commands/DeleteRecoveryGroupCommand";
import { DeleteResourceSetCommandInput, DeleteResourceSetCommandOutput } from "../commands/DeleteResourceSetCommand";
import {
  GetArchitectureRecommendationsCommandInput,
  GetArchitectureRecommendationsCommandOutput,
} from "../commands/GetArchitectureRecommendationsCommand";
import { GetCellCommandInput, GetCellCommandOutput } from "../commands/GetCellCommand";
import {
  GetCellReadinessSummaryCommandInput,
  GetCellReadinessSummaryCommandOutput,
} from "../commands/GetCellReadinessSummaryCommand";
import { GetReadinessCheckCommandInput, GetReadinessCheckCommandOutput } from "../commands/GetReadinessCheckCommand";
import {
  GetReadinessCheckResourceStatusCommandInput,
  GetReadinessCheckResourceStatusCommandOutput,
} from "../commands/GetReadinessCheckResourceStatusCommand";
import {
  GetReadinessCheckStatusCommandInput,
  GetReadinessCheckStatusCommandOutput,
} from "../commands/GetReadinessCheckStatusCommand";
import { GetRecoveryGroupCommandInput, GetRecoveryGroupCommandOutput } from "../commands/GetRecoveryGroupCommand";
import {
  GetRecoveryGroupReadinessSummaryCommandInput,
  GetRecoveryGroupReadinessSummaryCommandOutput,
} from "../commands/GetRecoveryGroupReadinessSummaryCommand";
import { GetResourceSetCommandInput, GetResourceSetCommandOutput } from "../commands/GetResourceSetCommand";
import { ListCellsCommandInput, ListCellsCommandOutput } from "../commands/ListCellsCommand";
import {
  ListCrossAccountAuthorizationsCommandInput,
  ListCrossAccountAuthorizationsCommandOutput,
} from "../commands/ListCrossAccountAuthorizationsCommand";
import {
  ListReadinessChecksCommandInput,
  ListReadinessChecksCommandOutput,
} from "../commands/ListReadinessChecksCommand";
import { ListRecoveryGroupsCommandInput, ListRecoveryGroupsCommandOutput } from "../commands/ListRecoveryGroupsCommand";
import { ListResourceSetsCommandInput, ListResourceSetsCommandOutput } from "../commands/ListResourceSetsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "../commands/ListRulesCommand";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "../commands/ListTagsForResourcesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateCellCommandInput, UpdateCellCommandOutput } from "../commands/UpdateCellCommand";
import {
  UpdateReadinessCheckCommandInput,
  UpdateReadinessCheckCommandOutput,
} from "../commands/UpdateReadinessCheckCommand";
import {
  UpdateRecoveryGroupCommandInput,
  UpdateRecoveryGroupCommandOutput,
} from "../commands/UpdateRecoveryGroupCommand";
import { UpdateResourceSetCommandInput, UpdateResourceSetCommandOutput } from "../commands/UpdateResourceSetCommand";
import {
  AccessDeniedException,
  CellOutput,
  ConflictException,
  DNSTargetResource,
  InternalServerException,
  ListRulesOutput,
  Message,
  NLBResource,
  R53ResourceRecord,
  ReadinessCheckOutput,
  ReadinessCheckSummary,
  Recommendation,
  RecoveryGroupOutput,
  Resource,
  ResourceNotFoundException,
  ResourceResult,
  ResourceSetOutput,
  RuleResult,
  TargetResource,
  ThrottlingException,
  ValidationException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1CreateCellCommand = async (
  input: CreateCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells";
  let body: any;
  body = JSON.stringify({
    ...(input.CellName !== undefined && input.CellName !== null && { cellName: input.CellName }),
    ...(input.Cells !== undefined &&
      input.Cells !== null && { cells: serializeAws_restJson1__listOf__string(input.Cells, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateCrossAccountAuthorizationCommand = async (
  input: CreateCrossAccountAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crossaccountauthorizations";
  let body: any;
  body = JSON.stringify({
    ...(input.CrossAccountAuthorization !== undefined &&
      input.CrossAccountAuthorization !== null && { crossAccountAuthorization: input.CrossAccountAuthorization }),
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

export const serializeAws_restJson1CreateReadinessCheckCommand = async (
  input: CreateReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks";
  let body: any;
  body = JSON.stringify({
    ...(input.ReadinessCheckName !== undefined &&
      input.ReadinessCheckName !== null && { readinessCheckName: input.ReadinessCheckName }),
    ...(input.ResourceSetName !== undefined &&
      input.ResourceSetName !== null && { resourceSetName: input.ResourceSetName }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateRecoveryGroupCommand = async (
  input: CreateRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups";
  let body: any;
  body = JSON.stringify({
    ...(input.Cells !== undefined &&
      input.Cells !== null && { cells: serializeAws_restJson1__listOf__string(input.Cells, context) }),
    ...(input.RecoveryGroupName !== undefined &&
      input.RecoveryGroupName !== null && { recoveryGroupName: input.RecoveryGroupName }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateResourceSetCommand = async (
  input: CreateResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceSetName !== undefined &&
      input.ResourceSetName !== null && { resourceSetName: input.ResourceSetName }),
    ...(input.ResourceSetType !== undefined &&
      input.ResourceSetType !== null && { resourceSetType: input.ResourceSetType }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { resources: serializeAws_restJson1__listOfResource(input.Resources, context) }),
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteCellCommand = async (
  input: DeleteCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells/{CellName}";
  if (input.CellName !== undefined) {
    const labelValue: string = input.CellName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CellName.");
    }
    resolvedPath = resolvedPath.replace("{CellName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CellName.");
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

export const serializeAws_restJson1DeleteCrossAccountAuthorizationCommand = async (
  input: DeleteCrossAccountAuthorizationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/crossaccountauthorizations/{CrossAccountAuthorization}";
  if (input.CrossAccountAuthorization !== undefined) {
    const labelValue: string = input.CrossAccountAuthorization;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CrossAccountAuthorization.");
    }
    resolvedPath = resolvedPath.replace("{CrossAccountAuthorization}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CrossAccountAuthorization.");
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

export const serializeAws_restJson1DeleteReadinessCheckCommand = async (
  input: DeleteReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks/{ReadinessCheckName}";
  if (input.ReadinessCheckName !== undefined) {
    const labelValue: string = input.ReadinessCheckName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReadinessCheckName.");
    }
    resolvedPath = resolvedPath.replace("{ReadinessCheckName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReadinessCheckName.");
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

export const serializeAws_restJson1DeleteRecoveryGroupCommand = async (
  input: DeleteRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups/{RecoveryGroupName}";
  if (input.RecoveryGroupName !== undefined) {
    const labelValue: string = input.RecoveryGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryGroupName.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryGroupName.");
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

export const serializeAws_restJson1DeleteResourceSetCommand = async (
  input: DeleteResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets/{ResourceSetName}";
  if (input.ResourceSetName !== undefined) {
    const labelValue: string = input.ResourceSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceSetName.");
    }
    resolvedPath = resolvedPath.replace("{ResourceSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceSetName.");
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

export const serializeAws_restJson1GetArchitectureRecommendationsCommand = async (
  input: GetArchitectureRecommendationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/recoverygroups/{RecoveryGroupName}/architectureRecommendations";
  if (input.RecoveryGroupName !== undefined) {
    const labelValue: string = input.RecoveryGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryGroupName.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryGroupName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetCellCommand = async (
  input: GetCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells/{CellName}";
  if (input.CellName !== undefined) {
    const labelValue: string = input.CellName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CellName.");
    }
    resolvedPath = resolvedPath.replace("{CellName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CellName.");
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

export const serializeAws_restJson1GetCellReadinessSummaryCommand = async (
  input: GetCellReadinessSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cellreadiness/{CellName}";
  if (input.CellName !== undefined) {
    const labelValue: string = input.CellName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CellName.");
    }
    resolvedPath = resolvedPath.replace("{CellName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CellName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetReadinessCheckCommand = async (
  input: GetReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks/{ReadinessCheckName}";
  if (input.ReadinessCheckName !== undefined) {
    const labelValue: string = input.ReadinessCheckName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReadinessCheckName.");
    }
    resolvedPath = resolvedPath.replace("{ReadinessCheckName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReadinessCheckName.");
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

export const serializeAws_restJson1GetReadinessCheckResourceStatusCommand = async (
  input: GetReadinessCheckResourceStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/readinesschecks/{ReadinessCheckName}/resource/{ResourceIdentifier}/status";
  if (input.ReadinessCheckName !== undefined) {
    const labelValue: string = input.ReadinessCheckName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReadinessCheckName.");
    }
    resolvedPath = resolvedPath.replace("{ReadinessCheckName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReadinessCheckName.");
  }
  if (input.ResourceIdentifier !== undefined) {
    const labelValue: string = input.ResourceIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{ResourceIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceIdentifier.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetReadinessCheckStatusCommand = async (
  input: GetReadinessCheckStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/readinesschecks/{ReadinessCheckName}/status";
  if (input.ReadinessCheckName !== undefined) {
    const labelValue: string = input.ReadinessCheckName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReadinessCheckName.");
    }
    resolvedPath = resolvedPath.replace("{ReadinessCheckName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReadinessCheckName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetRecoveryGroupCommand = async (
  input: GetRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups/{RecoveryGroupName}";
  if (input.RecoveryGroupName !== undefined) {
    const labelValue: string = input.RecoveryGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryGroupName.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryGroupName.");
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

export const serializeAws_restJson1GetRecoveryGroupReadinessSummaryCommand = async (
  input: GetRecoveryGroupReadinessSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/recoverygroupreadiness/{RecoveryGroupName}";
  if (input.RecoveryGroupName !== undefined) {
    const labelValue: string = input.RecoveryGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryGroupName.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryGroupName.");
  }
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1GetResourceSetCommand = async (
  input: GetResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets/{ResourceSetName}";
  if (input.ResourceSetName !== undefined) {
    const labelValue: string = input.ResourceSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceSetName.");
    }
    resolvedPath = resolvedPath.replace("{ResourceSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceSetName.");
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

export const serializeAws_restJson1ListCellsCommand = async (
  input: ListCellsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListCrossAccountAuthorizationsCommand = async (
  input: ListCrossAccountAuthorizationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/crossaccountauthorizations";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListReadinessChecksCommand = async (
  input: ListReadinessChecksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListRecoveryGroupsCommand = async (
  input: ListRecoveryGroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListResourceSetsCommand = async (
  input: ListResourceSetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
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

export const serializeAws_restJson1ListRulesCommand = async (
  input: ListRulesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/rules";
  const query: any = {
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.ResourceType !== undefined && { resourceType: input.ResourceType }),
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

export const serializeAws_restJson1ListTagsForResourcesCommand = async (
  input: ListTagsForResourcesCommandInput,
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
    ...(input.Tags !== undefined && input.Tags !== null && { tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
    ...(input.TagKeys !== undefined && { tagKeys: (input.TagKeys || []).map((_entry) => _entry as any) }),
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

export const serializeAws_restJson1UpdateCellCommand = async (
  input: UpdateCellCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cells/{CellName}";
  if (input.CellName !== undefined) {
    const labelValue: string = input.CellName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CellName.");
    }
    resolvedPath = resolvedPath.replace("{CellName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CellName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Cells !== undefined &&
      input.Cells !== null && { cells: serializeAws_restJson1__listOf__string(input.Cells, context) }),
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

export const serializeAws_restJson1UpdateReadinessCheckCommand = async (
  input: UpdateReadinessCheckCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/readinesschecks/{ReadinessCheckName}";
  if (input.ReadinessCheckName !== undefined) {
    const labelValue: string = input.ReadinessCheckName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ReadinessCheckName.");
    }
    resolvedPath = resolvedPath.replace("{ReadinessCheckName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ReadinessCheckName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceSetName !== undefined &&
      input.ResourceSetName !== null && { resourceSetName: input.ResourceSetName }),
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

export const serializeAws_restJson1UpdateRecoveryGroupCommand = async (
  input: UpdateRecoveryGroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/recoverygroups/{RecoveryGroupName}";
  if (input.RecoveryGroupName !== undefined) {
    const labelValue: string = input.RecoveryGroupName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryGroupName.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryGroupName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryGroupName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Cells !== undefined &&
      input.Cells !== null && { cells: serializeAws_restJson1__listOf__string(input.Cells, context) }),
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

export const serializeAws_restJson1UpdateResourceSetCommand = async (
  input: UpdateResourceSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resourcesets/{ResourceSetName}";
  if (input.ResourceSetName !== undefined) {
    const labelValue: string = input.ResourceSetName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceSetName.");
    }
    resolvedPath = resolvedPath.replace("{ResourceSetName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceSetName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceSetType !== undefined &&
      input.ResourceSetType !== null && { resourceSetType: input.ResourceSetType }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { resources: serializeAws_restJson1__listOfResource(input.Resources, context) }),
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

export const deserializeAws_restJson1CreateCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCellCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCellCommandError(output, context);
  }
  const contents: CreateCellCommandOutput = {
    $metadata: deserializeMetadata(output),
    CellArn: undefined,
    CellName: undefined,
    Cells: undefined,
    ParentReadinessScopes: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cellArn !== undefined && data.cellArn !== null) {
    contents.CellArn = __expectString(data.cellArn);
  }
  if (data.cellName !== undefined && data.cellName !== null) {
    contents.CellName = __expectString(data.cellName);
  }
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOf__string(data.cells, context);
  }
  if (data.parentReadinessScopes !== undefined && data.parentReadinessScopes !== null) {
    contents.ParentReadinessScopes = deserializeAws_restJson1__listOf__string(data.parentReadinessScopes, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1CreateCrossAccountAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrossAccountAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateCrossAccountAuthorizationCommandError(output, context);
  }
  const contents: CreateCrossAccountAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossAccountAuthorization: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.crossAccountAuthorization !== undefined && data.crossAccountAuthorization !== null) {
    contents.CrossAccountAuthorization = __expectString(data.crossAccountAuthorization);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateCrossAccountAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCrossAccountAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1CreateReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReadinessCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateReadinessCheckCommandError(output, context);
  }
  const contents: CreateReadinessCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReadinessCheckArn: undefined,
    ReadinessCheckName: undefined,
    ResourceSet: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.readinessCheckArn !== undefined && data.readinessCheckArn !== null) {
    contents.ReadinessCheckArn = __expectString(data.readinessCheckArn);
  }
  if (data.readinessCheckName !== undefined && data.readinessCheckName !== null) {
    contents.ReadinessCheckName = __expectString(data.readinessCheckName);
  }
  if (data.resourceSet !== undefined && data.resourceSet !== null) {
    contents.ResourceSet = __expectString(data.resourceSet);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1CreateRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateRecoveryGroupCommandError(output, context);
  }
  const contents: CreateRecoveryGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Cells: undefined,
    RecoveryGroupArn: undefined,
    RecoveryGroupName: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOf__string(data.cells, context);
  }
  if (data.recoveryGroupArn !== undefined && data.recoveryGroupArn !== null) {
    contents.RecoveryGroupArn = __expectString(data.recoveryGroupArn);
  }
  if (data.recoveryGroupName !== undefined && data.recoveryGroupName !== null) {
    contents.RecoveryGroupName = __expectString(data.recoveryGroupName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1CreateResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateResourceSetCommandError(output, context);
  }
  const contents: CreateResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceSetArn: undefined,
    ResourceSetName: undefined,
    ResourceSetType: undefined,
    Resources: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resourceSetArn !== undefined && data.resourceSetArn !== null) {
    contents.ResourceSetArn = __expectString(data.resourceSetArn);
  }
  if (data.resourceSetName !== undefined && data.resourceSetName !== null) {
    contents.ResourceSetName = __expectString(data.resourceSetName);
  }
  if (data.resourceSetType !== undefined && data.resourceSetType !== null) {
    contents.ResourceSetType = __expectString(data.resourceSetType);
  }
  if (data.resources !== undefined && data.resources !== null) {
    contents.Resources = deserializeAws_restJson1__listOfResource(data.resources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.route53recoveryreadiness#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1DeleteCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCellCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCellCommandError(output, context);
  }
  const contents: DeleteCellCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1DeleteCrossAccountAuthorizationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrossAccountAuthorizationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCrossAccountAuthorizationCommandError(output, context);
  }
  const contents: DeleteCrossAccountAuthorizationCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteCrossAccountAuthorizationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCrossAccountAuthorizationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1DeleteReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReadinessCheckCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReadinessCheckCommandError(output, context);
  }
  const contents: DeleteReadinessCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1DeleteRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecoveryGroupCommandError(output, context);
  }
  const contents: DeleteRecoveryGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1DeleteResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSetCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteResourceSetCommandError(output, context);
  }
  const contents: DeleteResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetArchitectureRecommendationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchitectureRecommendationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetArchitectureRecommendationsCommandError(output, context);
  }
  const contents: GetArchitectureRecommendationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LastAuditTimestamp: undefined,
    NextToken: undefined,
    Recommendations: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.lastAuditTimestamp !== undefined && data.lastAuditTimestamp !== null) {
    contents.LastAuditTimestamp = new Date(data.lastAuditTimestamp);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.recommendations !== undefined && data.recommendations !== null) {
    contents.Recommendations = deserializeAws_restJson1__listOfRecommendation(data.recommendations, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetArchitectureRecommendationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetArchitectureRecommendationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCellCommandError(output, context);
  }
  const contents: GetCellCommandOutput = {
    $metadata: deserializeMetadata(output),
    CellArn: undefined,
    CellName: undefined,
    Cells: undefined,
    ParentReadinessScopes: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cellArn !== undefined && data.cellArn !== null) {
    contents.CellArn = __expectString(data.cellArn);
  }
  if (data.cellName !== undefined && data.cellName !== null) {
    contents.CellName = __expectString(data.cellName);
  }
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOf__string(data.cells, context);
  }
  if (data.parentReadinessScopes !== undefined && data.parentReadinessScopes !== null) {
    contents.ParentReadinessScopes = deserializeAws_restJson1__listOf__string(data.parentReadinessScopes, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetCellReadinessSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellReadinessSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCellReadinessSummaryCommandError(output, context);
  }
  const contents: GetCellReadinessSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Readiness: undefined,
    ReadinessChecks: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.readiness !== undefined && data.readiness !== null) {
    contents.Readiness = __expectString(data.readiness);
  }
  if (data.readinessChecks !== undefined && data.readinessChecks !== null) {
    contents.ReadinessChecks = deserializeAws_restJson1__listOfReadinessCheckSummary(data.readinessChecks, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCellReadinessSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCellReadinessSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReadinessCheckCommandError(output, context);
  }
  const contents: GetReadinessCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReadinessCheckArn: undefined,
    ReadinessCheckName: undefined,
    ResourceSet: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.readinessCheckArn !== undefined && data.readinessCheckArn !== null) {
    contents.ReadinessCheckArn = __expectString(data.readinessCheckArn);
  }
  if (data.readinessCheckName !== undefined && data.readinessCheckName !== null) {
    contents.ReadinessCheckName = __expectString(data.readinessCheckName);
  }
  if (data.resourceSet !== undefined && data.resourceSet !== null) {
    contents.ResourceSet = __expectString(data.resourceSet);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetReadinessCheckResourceStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReadinessCheckResourceStatusCommandError(output, context);
  }
  const contents: GetReadinessCheckResourceStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Readiness: undefined,
    Rules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.readiness !== undefined && data.readiness !== null) {
    contents.Readiness = __expectString(data.readiness);
  }
  if (data.rules !== undefined && data.rules !== null) {
    contents.Rules = deserializeAws_restJson1__listOfRuleResult(data.rules, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetReadinessCheckResourceStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckResourceStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetReadinessCheckStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetReadinessCheckStatusCommandError(output, context);
  }
  const contents: GetReadinessCheckStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    Messages: undefined,
    NextToken: undefined,
    Readiness: undefined,
    Resources: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.messages !== undefined && data.messages !== null) {
    contents.Messages = deserializeAws_restJson1__listOfMessage(data.messages, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.readiness !== undefined && data.readiness !== null) {
    contents.Readiness = __expectString(data.readiness);
  }
  if (data.resources !== undefined && data.resources !== null) {
    contents.Resources = deserializeAws_restJson1__listOfResourceResult(data.resources, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetReadinessCheckStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetReadinessCheckStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecoveryGroupCommandError(output, context);
  }
  const contents: GetRecoveryGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Cells: undefined,
    RecoveryGroupArn: undefined,
    RecoveryGroupName: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOf__string(data.cells, context);
  }
  if (data.recoveryGroupArn !== undefined && data.recoveryGroupArn !== null) {
    contents.RecoveryGroupArn = __expectString(data.recoveryGroupArn);
  }
  if (data.recoveryGroupName !== undefined && data.recoveryGroupName !== null) {
    contents.RecoveryGroupName = __expectString(data.recoveryGroupName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetRecoveryGroupReadinessSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupReadinessSummaryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecoveryGroupReadinessSummaryCommandError(output, context);
  }
  const contents: GetRecoveryGroupReadinessSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Readiness: undefined,
    ReadinessChecks: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.readiness !== undefined && data.readiness !== null) {
    contents.Readiness = __expectString(data.readiness);
  }
  if (data.readinessChecks !== undefined && data.readinessChecks !== null) {
    contents.ReadinessChecks = deserializeAws_restJson1__listOfReadinessCheckSummary(data.readinessChecks, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecoveryGroupReadinessSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryGroupReadinessSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1GetResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceSetCommandError(output, context);
  }
  const contents: GetResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceSetArn: undefined,
    ResourceSetName: undefined,
    ResourceSetType: undefined,
    Resources: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resourceSetArn !== undefined && data.resourceSetArn !== null) {
    contents.ResourceSetArn = __expectString(data.resourceSetArn);
  }
  if (data.resourceSetName !== undefined && data.resourceSetName !== null) {
    contents.ResourceSetName = __expectString(data.resourceSetName);
  }
  if (data.resourceSetType !== undefined && data.resourceSetType !== null) {
    contents.ResourceSetType = __expectString(data.resourceSetType);
  }
  if (data.resources !== undefined && data.resources !== null) {
    contents.Resources = deserializeAws_restJson1__listOfResource(data.resources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListCellsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCellsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCellsCommandError(output, context);
  }
  const contents: ListCellsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Cells: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOfCellOutput(data.cells, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCellsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCellsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListCrossAccountAuthorizationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrossAccountAuthorizationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCrossAccountAuthorizationsCommandError(output, context);
  }
  const contents: ListCrossAccountAuthorizationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CrossAccountAuthorizations: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.crossAccountAuthorizations !== undefined && data.crossAccountAuthorizations !== null) {
    contents.CrossAccountAuthorizations = deserializeAws_restJson1__listOfCrossAccountAuthorization(
      data.crossAccountAuthorizations,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCrossAccountAuthorizationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCrossAccountAuthorizationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListReadinessChecksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadinessChecksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReadinessChecksCommandError(output, context);
  }
  const contents: ListReadinessChecksCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ReadinessChecks: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.readinessChecks !== undefined && data.readinessChecks !== null) {
    contents.ReadinessChecks = deserializeAws_restJson1__listOfReadinessCheckOutput(data.readinessChecks, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListReadinessChecksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReadinessChecksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListRecoveryGroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryGroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryGroupsCommandError(output, context);
  }
  const contents: ListRecoveryGroupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecoveryGroups: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.recoveryGroups !== undefined && data.recoveryGroups !== null) {
    contents.RecoveryGroups = deserializeAws_restJson1__listOfRecoveryGroupOutput(data.recoveryGroups, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecoveryGroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryGroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListResourceSetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourceSetsCommandError(output, context);
  }
  const contents: ListResourceSetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ResourceSets: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.resourceSets !== undefined && data.resourceSets !== null) {
    contents.ResourceSets = deserializeAws_restJson1__listOfResourceSetOutput(data.resourceSets, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListResourceSetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourceSetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListRulesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRulesCommandError(output, context);
  }
  const contents: ListRulesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Rules: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.rules !== undefined && data.rules !== null) {
    contents.Rules = deserializeAws_restJson1__listOfListRulesOutput(data.rules, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRulesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRulesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1ListTagsForResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourcesCommandError(output, context);
  }
  const contents: ListTagsForResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1UpdateCellCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCellCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateCellCommandError(output, context);
  }
  const contents: UpdateCellCommandOutput = {
    $metadata: deserializeMetadata(output),
    CellArn: undefined,
    CellName: undefined,
    Cells: undefined,
    ParentReadinessScopes: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cellArn !== undefined && data.cellArn !== null) {
    contents.CellArn = __expectString(data.cellArn);
  }
  if (data.cellName !== undefined && data.cellName !== null) {
    contents.CellName = __expectString(data.cellName);
  }
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOf__string(data.cells, context);
  }
  if (data.parentReadinessScopes !== undefined && data.parentReadinessScopes !== null) {
    contents.ParentReadinessScopes = deserializeAws_restJson1__listOf__string(data.parentReadinessScopes, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateCellCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCellCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1UpdateReadinessCheckCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReadinessCheckCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReadinessCheckCommandError(output, context);
  }
  const contents: UpdateReadinessCheckCommandOutput = {
    $metadata: deserializeMetadata(output),
    ReadinessCheckArn: undefined,
    ReadinessCheckName: undefined,
    ResourceSet: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.readinessCheckArn !== undefined && data.readinessCheckArn !== null) {
    contents.ReadinessCheckArn = __expectString(data.readinessCheckArn);
  }
  if (data.readinessCheckName !== undefined && data.readinessCheckName !== null) {
    contents.ReadinessCheckName = __expectString(data.readinessCheckName);
  }
  if (data.resourceSet !== undefined && data.resourceSet !== null) {
    contents.ResourceSet = __expectString(data.resourceSet);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateReadinessCheckCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReadinessCheckCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1UpdateRecoveryGroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryGroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecoveryGroupCommandError(output, context);
  }
  const contents: UpdateRecoveryGroupCommandOutput = {
    $metadata: deserializeMetadata(output),
    Cells: undefined,
    RecoveryGroupArn: undefined,
    RecoveryGroupName: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.cells !== undefined && data.cells !== null) {
    contents.Cells = deserializeAws_restJson1__listOf__string(data.cells, context);
  }
  if (data.recoveryGroupArn !== undefined && data.recoveryGroupArn !== null) {
    contents.RecoveryGroupArn = __expectString(data.recoveryGroupArn);
  }
  if (data.recoveryGroupName !== undefined && data.recoveryGroupName !== null) {
    contents.RecoveryGroupName = __expectString(data.recoveryGroupName);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecoveryGroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryGroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

export const deserializeAws_restJson1UpdateResourceSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceSetCommandError(output, context);
  }
  const contents: UpdateResourceSetCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceSetArn: undefined,
    ResourceSetName: undefined,
    ResourceSetType: undefined,
    Resources: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.resourceSetArn !== undefined && data.resourceSetArn !== null) {
    contents.ResourceSetArn = __expectString(data.resourceSetArn);
  }
  if (data.resourceSetName !== undefined && data.resourceSetName !== null) {
    contents.ResourceSetName = __expectString(data.resourceSetName);
  }
  if (data.resourceSetType !== undefined && data.resourceSetType !== null) {
    contents.ResourceSetType = __expectString(data.resourceSetType);
  }
  if (data.resources !== undefined && data.resources !== null) {
    contents.Resources = deserializeAws_restJson1__listOfResource(data.resources, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateResourceSetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceSetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.route53recoveryreadiness#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.route53recoveryreadiness#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.route53recoveryreadiness#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.route53recoveryreadiness#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.route53recoveryreadiness#ValidationException":
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const serializeAws_restJson1__listOf__string = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1__listOfResource = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Resource(entry, context);
    });
};

const serializeAws_restJson1DNSTargetResource = (input: DNSTargetResource, context: __SerdeContext): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { domainName: input.DomainName }),
    ...(input.HostedZoneArn !== undefined && input.HostedZoneArn !== null && { hostedZoneArn: input.HostedZoneArn }),
    ...(input.RecordSetId !== undefined && input.RecordSetId !== null && { recordSetId: input.RecordSetId }),
    ...(input.RecordType !== undefined && input.RecordType !== null && { recordType: input.RecordType }),
    ...(input.TargetResource !== undefined &&
      input.TargetResource !== null && {
        targetResource: serializeAws_restJson1TargetResource(input.TargetResource, context),
      }),
  };
};

const serializeAws_restJson1NLBResource = (input: NLBResource, context: __SerdeContext): any => {
  return {
    ...(input.Arn !== undefined && input.Arn !== null && { arn: input.Arn }),
  };
};

const serializeAws_restJson1R53ResourceRecord = (input: R53ResourceRecord, context: __SerdeContext): any => {
  return {
    ...(input.DomainName !== undefined && input.DomainName !== null && { domainName: input.DomainName }),
    ...(input.RecordSetId !== undefined && input.RecordSetId !== null && { recordSetId: input.RecordSetId }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.ComponentId !== undefined && input.ComponentId !== null && { componentId: input.ComponentId }),
    ...(input.DnsTargetResource !== undefined &&
      input.DnsTargetResource !== null && {
        dnsTargetResource: serializeAws_restJson1DNSTargetResource(input.DnsTargetResource, context),
      }),
    ...(input.ReadinessScopes !== undefined &&
      input.ReadinessScopes !== null && {
        readinessScopes: serializeAws_restJson1__listOf__string(input.ReadinessScopes, context),
      }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { resourceArn: input.ResourceArn }),
  };
};

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1TargetResource = (input: TargetResource, context: __SerdeContext): any => {
  return {
    ...(input.NLBResource !== undefined &&
      input.NLBResource !== null && { nLBResource: serializeAws_restJson1NLBResource(input.NLBResource, context) }),
    ...(input.R53Resource !== undefined &&
      input.R53Resource !== null && {
        r53Resource: serializeAws_restJson1R53ResourceRecord(input.R53Resource, context),
      }),
  };
};

const deserializeAws_restJson1__listOf__string = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfCellOutput = (output: any, context: __SerdeContext): CellOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CellOutput(entry, context);
    });
};

const deserializeAws_restJson1__listOfCrossAccountAuthorization = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfListRulesOutput = (output: any, context: __SerdeContext): ListRulesOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ListRulesOutput(entry, context);
    });
};

const deserializeAws_restJson1__listOfMessage = (output: any, context: __SerdeContext): Message[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Message(entry, context);
    });
};

const deserializeAws_restJson1__listOfReadinessCheckOutput = (
  output: any,
  context: __SerdeContext
): ReadinessCheckOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReadinessCheckOutput(entry, context);
    });
};

const deserializeAws_restJson1__listOfReadinessCheckSummary = (
  output: any,
  context: __SerdeContext
): ReadinessCheckSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReadinessCheckSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecommendation = (output: any, context: __SerdeContext): Recommendation[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Recommendation(entry, context);
    });
};

const deserializeAws_restJson1__listOfRecoveryGroupOutput = (
  output: any,
  context: __SerdeContext
): RecoveryGroupOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryGroupOutput(entry, context);
    });
};

const deserializeAws_restJson1__listOfResource = (output: any, context: __SerdeContext): Resource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
};

const deserializeAws_restJson1__listOfResourceResult = (output: any, context: __SerdeContext): ResourceResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceResult(entry, context);
    });
};

const deserializeAws_restJson1__listOfResourceSetOutput = (
  output: any,
  context: __SerdeContext
): ResourceSetOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceSetOutput(entry, context);
    });
};

const deserializeAws_restJson1__listOfRuleResult = (output: any, context: __SerdeContext): RuleResult[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleResult(entry, context);
    });
};

const deserializeAws_restJson1CellOutput = (output: any, context: __SerdeContext): CellOutput => {
  return {
    CellArn: __expectString(output.cellArn),
    CellName: __expectString(output.cellName),
    Cells:
      output.cells !== undefined && output.cells !== null
        ? deserializeAws_restJson1__listOf__string(output.cells, context)
        : undefined,
    ParentReadinessScopes:
      output.parentReadinessScopes !== undefined && output.parentReadinessScopes !== null
        ? deserializeAws_restJson1__listOf__string(output.parentReadinessScopes, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DNSTargetResource = (output: any, context: __SerdeContext): DNSTargetResource => {
  return {
    DomainName: __expectString(output.domainName),
    HostedZoneArn: __expectString(output.hostedZoneArn),
    RecordSetId: __expectString(output.recordSetId),
    RecordType: __expectString(output.recordType),
    TargetResource:
      output.targetResource !== undefined && output.targetResource !== null
        ? deserializeAws_restJson1TargetResource(output.targetResource, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ListRulesOutput = (output: any, context: __SerdeContext): ListRulesOutput => {
  return {
    ResourceType: __expectString(output.resourceType),
    RuleDescription: __expectString(output.ruleDescription),
    RuleId: __expectString(output.ruleId),
  } as any;
};

const deserializeAws_restJson1Message = (output: any, context: __SerdeContext): Message => {
  return {
    MessageText: __expectString(output.messageText),
  } as any;
};

const deserializeAws_restJson1NLBResource = (output: any, context: __SerdeContext): NLBResource => {
  return {
    Arn: __expectString(output.arn),
  } as any;
};

const deserializeAws_restJson1R53ResourceRecord = (output: any, context: __SerdeContext): R53ResourceRecord => {
  return {
    DomainName: __expectString(output.domainName),
    RecordSetId: __expectString(output.recordSetId),
  } as any;
};

const deserializeAws_restJson1ReadinessCheckOutput = (output: any, context: __SerdeContext): ReadinessCheckOutput => {
  return {
    ReadinessCheckArn: __expectString(output.readinessCheckArn),
    ReadinessCheckName: __expectString(output.readinessCheckName),
    ResourceSet: __expectString(output.resourceSet),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ReadinessCheckSummary = (output: any, context: __SerdeContext): ReadinessCheckSummary => {
  return {
    Readiness: __expectString(output.readiness),
    ReadinessCheckName: __expectString(output.readinessCheckName),
  } as any;
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    RecommendationText: __expectString(output.recommendationText),
  } as any;
};

const deserializeAws_restJson1RecoveryGroupOutput = (output: any, context: __SerdeContext): RecoveryGroupOutput => {
  return {
    Cells:
      output.cells !== undefined && output.cells !== null
        ? deserializeAws_restJson1__listOf__string(output.cells, context)
        : undefined,
    RecoveryGroupArn: __expectString(output.recoveryGroupArn),
    RecoveryGroupName: __expectString(output.recoveryGroupName),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    ComponentId: __expectString(output.componentId),
    DnsTargetResource:
      output.dnsTargetResource !== undefined && output.dnsTargetResource !== null
        ? deserializeAws_restJson1DNSTargetResource(output.dnsTargetResource, context)
        : undefined,
    ReadinessScopes:
      output.readinessScopes !== undefined && output.readinessScopes !== null
        ? deserializeAws_restJson1__listOf__string(output.readinessScopes, context)
        : undefined,
    ResourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_restJson1ResourceResult = (output: any, context: __SerdeContext): ResourceResult => {
  return {
    ComponentId: __expectString(output.componentId),
    LastCheckedTimestamp:
      output.lastCheckedTimestamp !== undefined && output.lastCheckedTimestamp !== null
        ? new Date(output.lastCheckedTimestamp)
        : undefined,
    Readiness: __expectString(output.readiness),
    ResourceArn: __expectString(output.resourceArn),
  } as any;
};

const deserializeAws_restJson1ResourceSetOutput = (output: any, context: __SerdeContext): ResourceSetOutput => {
  return {
    ResourceSetArn: __expectString(output.resourceSetArn),
    ResourceSetName: __expectString(output.resourceSetName),
    ResourceSetType: __expectString(output.resourceSetType),
    Resources:
      output.resources !== undefined && output.resources !== null
        ? deserializeAws_restJson1__listOfResource(output.resources, context)
        : undefined,
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1Tags(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleResult = (output: any, context: __SerdeContext): RuleResult => {
  return {
    LastCheckedTimestamp:
      output.lastCheckedTimestamp !== undefined && output.lastCheckedTimestamp !== null
        ? new Date(output.lastCheckedTimestamp)
        : undefined,
    Messages:
      output.messages !== undefined && output.messages !== null
        ? deserializeAws_restJson1__listOfMessage(output.messages, context)
        : undefined,
    Readiness: __expectString(output.readiness),
    RuleId: __expectString(output.ruleId),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1TargetResource = (output: any, context: __SerdeContext): TargetResource => {
  return {
    NLBResource:
      output.nLBResource !== undefined && output.nLBResource !== null
        ? deserializeAws_restJson1NLBResource(output.nLBResource, context)
        : undefined,
    R53Resource:
      output.r53Resource !== undefined && output.r53Resource !== null
        ? deserializeAws_restJson1R53ResourceRecord(output.r53Resource, context)
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
