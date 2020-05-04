import {
  CreateDiscovererCommandInput,
  CreateDiscovererCommandOutput
} from "../commands/CreateDiscovererCommand";
import {
  CreateRegistryCommandInput,
  CreateRegistryCommandOutput
} from "../commands/CreateRegistryCommand";
import {
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput
} from "../commands/CreateSchemaCommand";
import {
  DeleteDiscovererCommandInput,
  DeleteDiscovererCommandOutput
} from "../commands/DeleteDiscovererCommand";
import {
  DeleteRegistryCommandInput,
  DeleteRegistryCommandOutput
} from "../commands/DeleteRegistryCommand";
import {
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput
} from "../commands/DeleteSchemaCommand";
import {
  DeleteSchemaVersionCommandInput,
  DeleteSchemaVersionCommandOutput
} from "../commands/DeleteSchemaVersionCommand";
import {
  DescribeCodeBindingCommandInput,
  DescribeCodeBindingCommandOutput
} from "../commands/DescribeCodeBindingCommand";
import {
  DescribeDiscovererCommandInput,
  DescribeDiscovererCommandOutput
} from "../commands/DescribeDiscovererCommand";
import {
  DescribeRegistryCommandInput,
  DescribeRegistryCommandOutput
} from "../commands/DescribeRegistryCommand";
import {
  DescribeSchemaCommandInput,
  DescribeSchemaCommandOutput
} from "../commands/DescribeSchemaCommand";
import {
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput
} from "../commands/GetCodeBindingSourceCommand";
import {
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput
} from "../commands/GetDiscoveredSchemaCommand";
import {
  ListDiscoverersCommandInput,
  ListDiscoverersCommandOutput
} from "../commands/ListDiscoverersCommand";
import {
  ListRegistriesCommandInput,
  ListRegistriesCommandOutput
} from "../commands/ListRegistriesCommand";
import {
  ListSchemaVersionsCommandInput,
  ListSchemaVersionsCommandOutput
} from "../commands/ListSchemaVersionsCommand";
import {
  ListSchemasCommandInput,
  ListSchemasCommandOutput
} from "../commands/ListSchemasCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  LockServiceLinkedRoleCommandInput,
  LockServiceLinkedRoleCommandOutput
} from "../commands/LockServiceLinkedRoleCommand";
import {
  PutCodeBindingCommandInput,
  PutCodeBindingCommandOutput
} from "../commands/PutCodeBindingCommand";
import {
  SearchSchemasCommandInput,
  SearchSchemasCommandOutput
} from "../commands/SearchSchemasCommand";
import {
  StartDiscovererCommandInput,
  StartDiscovererCommandOutput
} from "../commands/StartDiscovererCommand";
import {
  StopDiscovererCommandInput,
  StopDiscovererCommandOutput
} from "../commands/StopDiscovererCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UnlockServiceLinkedRoleCommandInput,
  UnlockServiceLinkedRoleCommandOutput
} from "../commands/UnlockServiceLinkedRoleCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateDiscovererCommandInput,
  UpdateDiscovererCommandOutput
} from "../commands/UpdateDiscovererCommand";
import {
  UpdateRegistryCommandInput,
  UpdateRegistryCommandOutput
} from "../commands/UpdateRegistryCommand";
import {
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput
} from "../commands/UpdateSchemaCommand";
import {
  BadRequestException,
  ConflictException,
  DiscovererSummary,
  ForbiddenException,
  GoneException,
  InternalServerErrorException,
  NotFoundException,
  RegistrySummary,
  SchemaSummary,
  SchemaVersionSummary,
  SearchSchemaSummary,
  SearchSchemaVersionSummary,
  ServiceUnavailableException,
  TooManyRequestsException,
  UnauthorizedException
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
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1CreateDiscovererCommand = async (
  input: CreateDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/discoverers";
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.SourceArn !== undefined) {
    bodyParams["SourceArn"] = input.SourceArn;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateRegistryCommand = async (
  input: CreateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/registries/name/{RegistryName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateSchemaCommand = async (
  input: CreateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteDiscovererCommand = async (
  input: DeleteDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/discoverers/id/{DiscovererId}";
  if (input.DiscovererId !== undefined) {
    const labelValue: string = input.DiscovererId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DiscovererId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DiscovererId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DiscovererId.");
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
    body
  });
};

export const serializeAws_restJson1_1DeleteRegistryCommand = async (
  input: DeleteRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/registries/name/{RegistryName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
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
    body
  });
};

export const serializeAws_restJson1_1DeleteSchemaCommand = async (
  input: DeleteSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
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
    body
  });
};

export const serializeAws_restJson1_1DeleteSchemaVersionCommand = async (
  input: DeleteSchemaVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  if (input.SchemaVersion !== undefined) {
    const labelValue: string = input.SchemaVersion;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SchemaVersion."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaVersion}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaVersion.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeCodeBindingCommand = async (
  input: DescribeCodeBindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}";
  if (input.Language !== undefined) {
    const labelValue: string = input.Language;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Language.");
    }
    resolvedPath = resolvedPath.replace(
      "{Language}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Language.");
  }
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  const query: any = {};
  if (input.SchemaVersion !== undefined) {
    query["schemaVersion"] = input.SchemaVersion;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1DescribeDiscovererCommand = async (
  input: DescribeDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/discoverers/id/{DiscovererId}";
  if (input.DiscovererId !== undefined) {
    const labelValue: string = input.DiscovererId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DiscovererId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DiscovererId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DiscovererId.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeRegistryCommand = async (
  input: DescribeRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/registries/name/{RegistryName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
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
    body
  });
};

export const serializeAws_restJson1_1DescribeSchemaCommand = async (
  input: DescribeSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  const query: any = {};
  if (input.SchemaVersion !== undefined) {
    query["schemaVersion"] = input.SchemaVersion;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1GetCodeBindingSourceCommand = async (
  input: GetCodeBindingSourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source";
  if (input.Language !== undefined) {
    const labelValue: string = input.Language;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Language.");
    }
    resolvedPath = resolvedPath.replace(
      "{Language}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Language.");
  }
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  const query: any = {};
  if (input.SchemaVersion !== undefined) {
    query["schemaVersion"] = input.SchemaVersion;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1GetDiscoveredSchemaCommand = async (
  input: GetDiscoveredSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/discover";
  let body: any;
  const bodyParams: any = {};
  if (input.Events !== undefined) {
    bodyParams[
      "Events"
    ] = serializeAws_restJson1_1__listOfGetDiscoveredSchemaVersionItemInput(
      input.Events,
      context
    );
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListDiscoverersCommand = async (
  input: ListDiscoverersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/discoverers";
  const query: any = {};
  if (input.DiscovererIdPrefix !== undefined) {
    query["discovererIdPrefix"] = input.DiscovererIdPrefix;
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.SourceArnPrefix !== undefined) {
    query["sourceArnPrefix"] = input.SourceArnPrefix;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListRegistriesCommand = async (
  input: ListRegistriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/registries";
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.RegistryNamePrefix !== undefined) {
    query["registryNamePrefix"] = input.RegistryNamePrefix;
  }
  if (input.Scope !== undefined) {
    query["scope"] = input.Scope;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListSchemaVersionsCommand = async (
  input: ListSchemaVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListSchemasCommand = async (
  input: ListSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/registries/name/{RegistryName}/schemas";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  const query: any = {};
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.SchemaNamePrefix !== undefined) {
    query["schemaNamePrefix"] = input.SchemaNamePrefix;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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
    body
  });
};

export const serializeAws_restJson1_1LockServiceLinkedRoleCommand = async (
  input: LockServiceLinkedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/slr-deletion/lock";
  let body: any;
  const bodyParams: any = {};
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  if (input.Timeout !== undefined) {
    bodyParams["Timeout"] = input.Timeout;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1PutCodeBindingCommand = async (
  input: PutCodeBindingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}";
  if (input.Language !== undefined) {
    const labelValue: string = input.Language;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Language.");
    }
    resolvedPath = resolvedPath.replace(
      "{Language}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Language.");
  }
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  const query: any = {};
  if (input.SchemaVersion !== undefined) {
    query["schemaVersion"] = input.SchemaVersion;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1SearchSchemasCommand = async (
  input: SearchSchemasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/registries/name/{RegistryName}/schemas/search";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  const query: any = {};
  if (input.Keywords !== undefined) {
    query["keywords"] = input.Keywords;
  }
  if (input.Limit !== undefined) {
    query["limit"] = input.Limit.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1StartDiscovererCommand = async (
  input: StartDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/discoverers/id/{DiscovererId}/start";
  if (input.DiscovererId !== undefined) {
    const labelValue: string = input.DiscovererId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DiscovererId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DiscovererId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DiscovererId.");
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
    body
  });
};

export const serializeAws_restJson1_1StopDiscovererCommand = async (
  input: StopDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/discoverers/id/{DiscovererId}/stop";
  if (input.DiscovererId !== undefined) {
    const labelValue: string = input.DiscovererId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DiscovererId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DiscovererId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DiscovererId.");
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
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UnlockServiceLinkedRoleCommand = async (
  input: UnlockServiceLinkedRoleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/slr-deletion/unlock";
  let body: any;
  const bodyParams: any = {};
  if (input.RoleArn !== undefined) {
    bodyParams["RoleArn"] = input.RoleArn;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.TagKeys !== undefined) {
    query["tagKeys"] = (input.TagKeys || []).map(_entry => _entry);
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
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateDiscovererCommand = async (
  input: UpdateDiscovererCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/discoverers/id/{DiscovererId}";
  if (input.DiscovererId !== undefined) {
    const labelValue: string = input.DiscovererId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: DiscovererId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{DiscovererId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: DiscovererId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateRegistryCommand = async (
  input: UpdateRegistryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/registries/name/{RegistryName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateSchemaCommand = async (
  input: UpdateSchemaCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}";
  if (input.RegistryName !== undefined) {
    const labelValue: string = input.RegistryName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RegistryName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RegistryName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RegistryName.");
  }
  if (input.SchemaName !== undefined) {
    const labelValue: string = input.SchemaName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SchemaName.");
    }
    resolvedPath = resolvedPath.replace(
      "{SchemaName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SchemaName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ClientTokenId === undefined) {
    input.ClientTokenId = generateIdempotencyToken();
  }
  if (input.ClientTokenId !== undefined) {
    bodyParams["ClientTokenId"] = input.ClientTokenId;
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = input.Content;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  body = JSON.stringify(bodyParams);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CreateDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiscovererCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateDiscovererCommandError(
      output,
      context
    );
  }
  const contents: CreateDiscovererCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDiscovererResponse",
    Description: undefined,
    DiscovererArn: undefined,
    DiscovererId: undefined,
    SourceArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.DiscovererArn !== undefined && data.DiscovererArn !== null) {
    contents.DiscovererArn = data.DiscovererArn;
  }
  if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
    contents.DiscovererId = data.DiscovererId;
  }
  if (data.SourceArn !== undefined && data.SourceArn !== null) {
    contents.SourceArn = data.SourceArn;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateDiscovererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDiscovererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.schemas#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRegistryCommandError(
      output,
      context
    );
  }
  const contents: CreateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRegistryResponse",
    Description: undefined,
    RegistryArn: undefined,
    RegistryName: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.RegistryArn !== undefined && data.RegistryArn !== null) {
    contents.RegistryArn = data.RegistryArn;
  }
  if (data.RegistryName !== undefined && data.RegistryName !== null) {
    contents.RegistryName = data.RegistryName;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.schemas#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateSchemaCommandError(output, context);
  }
  const contents: CreateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateSchemaResponse",
    Description: undefined,
    LastModified: undefined,
    SchemaArn: undefined,
    SchemaName: undefined,
    SchemaVersion: undefined,
    Tags: undefined,
    Type: undefined,
    VersionCreatedDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(data.LastModified);
  }
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  if (data.SchemaName !== undefined && data.SchemaName !== null) {
    contents.SchemaName = data.SchemaName;
  }
  if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
    contents.SchemaVersion = data.SchemaVersion;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (
    data.VersionCreatedDate !== undefined &&
    data.VersionCreatedDate !== null
  ) {
    contents.VersionCreatedDate = new Date(data.VersionCreatedDate);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiscovererCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteDiscovererCommandError(
      output,
      context
    );
  }
  const contents: DeleteDiscovererCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteDiscovererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDiscovererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRegistryCommandError(
      output,
      context
    );
  }
  const contents: DeleteRegistryCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSchemaCommandError(output, context);
  }
  const contents: DeleteSchemaCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteSchemaVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteSchemaVersionCommandError(
      output,
      context
    );
  }
  const contents: DeleteSchemaVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteSchemaVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSchemaVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeCodeBindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeBindingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeCodeBindingCommandError(
      output,
      context
    );
  }
  const contents: DescribeCodeBindingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCodeBindingResponse",
    CreationDate: undefined,
    LastModified: undefined,
    SchemaVersion: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(data.CreationDate);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(data.LastModified);
  }
  if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
    contents.SchemaVersion = data.SchemaVersion;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeCodeBindingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCodeBindingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.schemas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeDiscovererCommandError(
      output,
      context
    );
  }
  const contents: DescribeDiscovererCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDiscovererResponse",
    Description: undefined,
    DiscovererArn: undefined,
    DiscovererId: undefined,
    SourceArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.DiscovererArn !== undefined && data.DiscovererArn !== null) {
    contents.DiscovererArn = data.DiscovererArn;
  }
  if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
    contents.DiscovererId = data.DiscovererId;
  }
  if (data.SourceArn !== undefined && data.SourceArn !== null) {
    contents.SourceArn = data.SourceArn;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeDiscovererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDiscovererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRegistryCommandError(
      output,
      context
    );
  }
  const contents: DescribeRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRegistryResponse",
    Description: undefined,
    RegistryArn: undefined,
    RegistryName: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.RegistryArn !== undefined && data.RegistryArn !== null) {
    contents.RegistryArn = data.RegistryArn;
  }
  if (data.RegistryName !== undefined && data.RegistryName !== null) {
    contents.RegistryName = data.RegistryName;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeSchemaCommandError(
      output,
      context
    );
  }
  const contents: DescribeSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeSchemaResponse",
    Content: undefined,
    Description: undefined,
    LastModified: undefined,
    SchemaArn: undefined,
    SchemaName: undefined,
    SchemaVersion: undefined,
    Tags: undefined,
    Type: undefined,
    VersionCreatedDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = data.Content;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(data.LastModified);
  }
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  if (data.SchemaName !== undefined && data.SchemaName !== null) {
    contents.SchemaName = data.SchemaName;
  }
  if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
    contents.SchemaVersion = data.SchemaVersion;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (
    data.VersionCreatedDate !== undefined &&
    data.VersionCreatedDate !== null
  ) {
    contents.VersionCreatedDate = new Date(data.VersionCreatedDate);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetCodeBindingSourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeBindingSourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetCodeBindingSourceCommandError(
      output,
      context
    );
  }
  const contents: GetCodeBindingSourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetCodeBindingSourceResponse",
    Body: undefined
  };
  const data: any = await collectBody(output.body, context);
  contents.Body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetCodeBindingSourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCodeBindingSourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.schemas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetDiscoveredSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoveredSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDiscoveredSchemaCommandError(
      output,
      context
    );
  }
  const contents: GetDiscoveredSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDiscoveredSchemaResponse",
    Content: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = data.Content;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDiscoveredSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDiscoveredSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListDiscoverersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoverersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListDiscoverersCommandError(
      output,
      context
    );
  }
  const contents: ListDiscoverersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDiscoverersResponse",
    Discoverers: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Discoverers !== undefined && data.Discoverers !== null) {
    contents.Discoverers = deserializeAws_restJson1_1__listOfDiscovererSummary(
      data.Discoverers,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListDiscoverersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDiscoverersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListRegistriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRegistriesCommandError(
      output,
      context
    );
  }
  const contents: ListRegistriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRegistriesResponse",
    NextToken: undefined,
    Registries: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Registries !== undefined && data.Registries !== null) {
    contents.Registries = deserializeAws_restJson1_1__listOfRegistrySummary(
      data.Registries,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListRegistriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRegistriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListSchemaVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSchemaVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListSchemaVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSchemaVersionsResponse",
    NextToken: undefined,
    SchemaVersions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.SchemaVersions !== undefined && data.SchemaVersions !== null) {
    contents.SchemaVersions = deserializeAws_restJson1_1__listOfSchemaVersionSummary(
      data.SchemaVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListSchemaVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemaVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListSchemasCommandError(output, context);
  }
  const contents: ListSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListSchemasResponse",
    NextToken: undefined,
    Schemas: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Schemas !== undefined && data.Schemas !== null) {
    contents.Schemas = deserializeAws_restJson1_1__listOfSchemaSummary(
      data.Schemas,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1LockServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LockServiceLinkedRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1LockServiceLinkedRoleCommandError(
      output,
      context
    );
  }
  const contents: LockServiceLinkedRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "LockServiceLinkedRoleResponse",
    CanBeDeleted: undefined,
    ReasonOfFailure: undefined,
    RelatedResources: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CanBeDeleted !== undefined && data.CanBeDeleted !== null) {
    contents.CanBeDeleted = data.CanBeDeleted;
  }
  if (data.ReasonOfFailure !== undefined && data.ReasonOfFailure !== null) {
    contents.ReasonOfFailure = data.ReasonOfFailure;
  }
  if (data.RelatedResources !== undefined && data.RelatedResources !== null) {
    contents.RelatedResources = deserializeAws_restJson1_1__listOfDiscovererSummary(
      data.RelatedResources,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1LockServiceLinkedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<LockServiceLinkedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PutCodeBindingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCodeBindingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutCodeBindingCommandError(
      output,
      context
    );
  }
  const contents: PutCodeBindingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutCodeBindingResponse",
    CreationDate: undefined,
    LastModified: undefined,
    SchemaVersion: undefined,
    Status: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(data.CreationDate);
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(data.LastModified);
  }
  if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
    contents.SchemaVersion = data.SchemaVersion;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutCodeBindingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCodeBindingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "GoneException":
    case "com.amazonaws.schemas#GoneException":
      response = {
        ...(await deserializeAws_restJson1_1GoneExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.schemas#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1SearchSchemasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSchemasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SearchSchemasCommandError(output, context);
  }
  const contents: SearchSchemasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "SearchSchemasResponse",
    NextToken: undefined,
    Schemas: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Schemas !== undefined && data.Schemas !== null) {
    contents.Schemas = deserializeAws_restJson1_1__listOfSearchSchemaSummary(
      data.Schemas,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SearchSchemasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchSchemasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1StartDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartDiscovererCommandError(
      output,
      context
    );
  }
  const contents: StartDiscovererCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartDiscovererResponse",
    DiscovererId: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
    contents.DiscovererId = data.DiscovererId;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StartDiscovererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDiscovererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1StopDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopDiscovererCommandError(
      output,
      context
    );
  }
  const contents: StopDiscovererCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StopDiscovererResponse",
    DiscovererId: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
    contents.DiscovererId = data.DiscovererId;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1StopDiscovererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopDiscovererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UnlockServiceLinkedRoleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlockServiceLinkedRoleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UnlockServiceLinkedRoleCommandError(
      output,
      context
    );
  }
  const contents: UnlockServiceLinkedRoleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UnlockServiceLinkedRoleResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UnlockServiceLinkedRoleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UnlockServiceLinkedRoleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateDiscovererCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDiscovererCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateDiscovererCommandError(
      output,
      context
    );
  }
  const contents: UpdateDiscovererCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateDiscovererResponse",
    Description: undefined,
    DiscovererArn: undefined,
    DiscovererId: undefined,
    SourceArn: undefined,
    State: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.DiscovererArn !== undefined && data.DiscovererArn !== null) {
    contents.DiscovererArn = data.DiscovererArn;
  }
  if (data.DiscovererId !== undefined && data.DiscovererId !== null) {
    contents.DiscovererId = data.DiscovererId;
  }
  if (data.SourceArn !== undefined && data.SourceArn !== null) {
    contents.SourceArn = data.SourceArn;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateDiscovererCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDiscovererCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateRegistryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRegistryCommandError(
      output,
      context
    );
  }
  const contents: UpdateRegistryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRegistryResponse",
    Description: undefined,
    RegistryArn: undefined,
    RegistryName: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.RegistryArn !== undefined && data.RegistryArn !== null) {
    contents.RegistryArn = data.RegistryArn;
  }
  if (data.RegistryName !== undefined && data.RegistryName !== null) {
    contents.RegistryName = data.RegistryName;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateRegistryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegistryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.schemas#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateSchemaCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateSchemaCommandError(output, context);
  }
  const contents: UpdateSchemaCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateSchemaResponse",
    Description: undefined,
    LastModified: undefined,
    SchemaArn: undefined,
    SchemaName: undefined,
    SchemaVersion: undefined,
    Tags: undefined,
    Type: undefined,
    VersionCreatedDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(data.LastModified);
  }
  if (data.SchemaArn !== undefined && data.SchemaArn !== null) {
    contents.SchemaArn = data.SchemaArn;
  }
  if (data.SchemaName !== undefined && data.SchemaName !== null) {
    contents.SchemaName = data.SchemaName;
  }
  if (data.SchemaVersion !== undefined && data.SchemaVersion !== null) {
    contents.SchemaVersion = data.SchemaVersion;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.tags, context);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (
    data.VersionCreatedDate !== undefined &&
    data.VersionCreatedDate !== null
  ) {
    contents.VersionCreatedDate = new Date(data.VersionCreatedDate);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateSchemaCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSchemaCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.schemas#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.schemas#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.schemas#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.schemas#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.schemas#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1GoneExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GoneException> => {
  const contents: GoneException = {
    name: "GoneException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  return contents;
};

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1__listOfGetDiscoveredSchemaVersionItemInput = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const deserializeAws_restJson1_1DiscovererSummary = (
  output: any,
  context: __SerdeContext
): DiscovererSummary => {
  let contents: any = {
    __type: "DiscovererSummary",
    DiscovererArn: undefined,
    DiscovererId: undefined,
    SourceArn: undefined,
    State: undefined,
    Tags: undefined
  };
  if (output.DiscovererArn !== undefined && output.DiscovererArn !== null) {
    contents.DiscovererArn = output.DiscovererArn;
  }
  if (output.DiscovererId !== undefined && output.DiscovererId !== null) {
    contents.DiscovererId = output.DiscovererId;
  }
  if (output.SourceArn !== undefined && output.SourceArn !== null) {
    contents.SourceArn = output.SourceArn;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1RegistrySummary = (
  output: any,
  context: __SerdeContext
): RegistrySummary => {
  let contents: any = {
    __type: "RegistrySummary",
    RegistryArn: undefined,
    RegistryName: undefined,
    Tags: undefined
  };
  if (output.RegistryArn !== undefined && output.RegistryArn !== null) {
    contents.RegistryArn = output.RegistryArn;
  }
  if (output.RegistryName !== undefined && output.RegistryName !== null) {
    contents.RegistryName = output.RegistryName;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1_1SchemaSummary = (
  output: any,
  context: __SerdeContext
): SchemaSummary => {
  let contents: any = {
    __type: "SchemaSummary",
    LastModified: undefined,
    SchemaArn: undefined,
    SchemaName: undefined,
    Tags: undefined,
    VersionCount: undefined
  };
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = new Date(output.LastModified);
  }
  if (output.SchemaArn !== undefined && output.SchemaArn !== null) {
    contents.SchemaArn = output.SchemaArn;
  }
  if (output.SchemaName !== undefined && output.SchemaName !== null) {
    contents.SchemaName = output.SchemaName;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(output.tags, context);
  }
  if (output.VersionCount !== undefined && output.VersionCount !== null) {
    contents.VersionCount = output.VersionCount;
  }
  return contents;
};

const deserializeAws_restJson1_1SchemaVersionSummary = (
  output: any,
  context: __SerdeContext
): SchemaVersionSummary => {
  let contents: any = {
    __type: "SchemaVersionSummary",
    SchemaArn: undefined,
    SchemaName: undefined,
    SchemaVersion: undefined
  };
  if (output.SchemaArn !== undefined && output.SchemaArn !== null) {
    contents.SchemaArn = output.SchemaArn;
  }
  if (output.SchemaName !== undefined && output.SchemaName !== null) {
    contents.SchemaName = output.SchemaName;
  }
  if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
    contents.SchemaVersion = output.SchemaVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1SearchSchemaSummary = (
  output: any,
  context: __SerdeContext
): SearchSchemaSummary => {
  let contents: any = {
    __type: "SearchSchemaSummary",
    RegistryName: undefined,
    SchemaArn: undefined,
    SchemaName: undefined,
    SchemaVersions: undefined
  };
  if (output.RegistryName !== undefined && output.RegistryName !== null) {
    contents.RegistryName = output.RegistryName;
  }
  if (output.SchemaArn !== undefined && output.SchemaArn !== null) {
    contents.SchemaArn = output.SchemaArn;
  }
  if (output.SchemaName !== undefined && output.SchemaName !== null) {
    contents.SchemaName = output.SchemaName;
  }
  if (output.SchemaVersions !== undefined && output.SchemaVersions !== null) {
    contents.SchemaVersions = deserializeAws_restJson1_1__listOfSearchSchemaVersionSummary(
      output.SchemaVersions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SearchSchemaVersionSummary = (
  output: any,
  context: __SerdeContext
): SearchSchemaVersionSummary => {
  let contents: any = {
    __type: "SearchSchemaVersionSummary",
    CreatedDate: undefined,
    SchemaVersion: undefined
  };
  if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
    contents.CreatedDate = new Date(output.CreatedDate);
  }
  if (output.SchemaVersion !== undefined && output.SchemaVersion !== null) {
    contents.SchemaVersion = output.SchemaVersion;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1__listOfDiscovererSummary = (
  output: any,
  context: __SerdeContext
): DiscovererSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DiscovererSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfRegistrySummary = (
  output: any,
  context: __SerdeContext
): RegistrySummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RegistrySummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfSchemaSummary = (
  output: any,
  context: __SerdeContext
): SchemaSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SchemaSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfSchemaVersionSummary = (
  output: any,
  context: __SerdeContext
): SchemaVersionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SchemaVersionSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfSearchSchemaSummary = (
  output: any,
  context: __SerdeContext
): SearchSchemaSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SearchSchemaSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfSearchSchemaVersionSummary = (
  output: any,
  context: __SerdeContext
): SearchSchemaVersionSummary[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SearchSchemaVersionSummary(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
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

function isSerializableHeaderValue(value: any): boolean {
  return (
    value !== undefined &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") ||
      value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0)
  );
}

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
