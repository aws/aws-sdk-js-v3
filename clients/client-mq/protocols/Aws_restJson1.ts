import { CreateBrokerCommandInput, CreateBrokerCommandOutput } from "../commands/CreateBrokerCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "../commands/CreateConfigurationCommand";
import { CreateTagsCommandInput, CreateTagsCommandOutput } from "../commands/CreateTagsCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "../commands/CreateUserCommand";
import { DeleteBrokerCommandInput, DeleteBrokerCommandOutput } from "../commands/DeleteBrokerCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "../commands/DeleteTagsCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "../commands/DeleteUserCommand";
import { DescribeBrokerCommandInput, DescribeBrokerCommandOutput } from "../commands/DescribeBrokerCommand";
import {
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput,
} from "../commands/DescribeBrokerEngineTypesCommand";
import {
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput,
} from "../commands/DescribeBrokerInstanceOptionsCommand";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "../commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "../commands/DescribeConfigurationRevisionCommand";
import { DescribeUserCommandInput, DescribeUserCommandOutput } from "../commands/DescribeUserCommand";
import { ListBrokersCommandInput, ListBrokersCommandOutput } from "../commands/ListBrokersCommand";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "../commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "../commands/ListConfigurationsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import { ListUsersCommandInput, ListUsersCommandOutput } from "../commands/ListUsersCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "../commands/RebootBrokerCommand";
import { UpdateBrokerCommandInput, UpdateBrokerCommandOutput } from "../commands/UpdateBrokerCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "../commands/UpdateConfigurationCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "../commands/UpdateUserCommand";
import {
  AvailabilityZone,
  BadRequestException,
  BrokerEngineType,
  BrokerInstance,
  BrokerInstanceOption,
  BrokerSummary,
  Configuration,
  ConfigurationId,
  ConfigurationRevision,
  Configurations,
  ConflictException,
  DeploymentMode,
  EncryptionOptions,
  EngineVersion,
  ForbiddenException,
  InternalServerErrorException,
  LdapServerMetadataInput,
  LdapServerMetadataOutput,
  Logs,
  LogsSummary,
  NotFoundException,
  PendingLogs,
  SanitizationWarning,
  UnauthorizedException,
  User,
  UserPendingChanges,
  UserSummary,
  WeeklyStartTime,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1CreateBrokerCommand = async (
  input: CreateBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers";
  let body: any;
  body = JSON.stringify({
    ...(input.AuthenticationStrategy !== undefined &&
      input.AuthenticationStrategy !== null && { authenticationStrategy: input.AuthenticationStrategy }),
    ...(input.AutoMinorVersionUpgrade !== undefined &&
      input.AutoMinorVersionUpgrade !== null && { autoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.BrokerName !== undefined && input.BrokerName !== null && { brokerName: input.BrokerName }),
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        configuration: serializeAws_restJson1ConfigurationId(input.Configuration, context),
      }),
    creatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.DeploymentMode !== undefined &&
      input.DeploymentMode !== null && { deploymentMode: input.DeploymentMode }),
    ...(input.EncryptionOptions !== undefined &&
      input.EncryptionOptions !== null && {
        encryptionOptions: serializeAws_restJson1EncryptionOptions(input.EncryptionOptions, context),
      }),
    ...(input.EngineType !== undefined && input.EngineType !== null && { engineType: input.EngineType }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { engineVersion: input.EngineVersion }),
    ...(input.HostInstanceType !== undefined &&
      input.HostInstanceType !== null && { hostInstanceType: input.HostInstanceType }),
    ...(input.LdapServerMetadata !== undefined &&
      input.LdapServerMetadata !== null && {
        ldapServerMetadata: serializeAws_restJson1LdapServerMetadataInput(input.LdapServerMetadata, context),
      }),
    ...(input.Logs !== undefined && input.Logs !== null && { logs: serializeAws_restJson1Logs(input.Logs, context) }),
    ...(input.MaintenanceWindowStartTime !== undefined &&
      input.MaintenanceWindowStartTime !== null && {
        maintenanceWindowStartTime: serializeAws_restJson1WeeklyStartTime(input.MaintenanceWindowStartTime, context),
      }),
    ...(input.PubliclyAccessible !== undefined &&
      input.PubliclyAccessible !== null && { publiclyAccessible: input.PubliclyAccessible }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        securityGroups: serializeAws_restJson1__listOf__string(input.SecurityGroups, context),
      }),
    ...(input.StorageType !== undefined && input.StorageType !== null && { storageType: input.StorageType }),
    ...(input.SubnetIds !== undefined &&
      input.SubnetIds !== null && { subnetIds: serializeAws_restJson1__listOf__string(input.SubnetIds, context) }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
    ...(input.Users !== undefined &&
      input.Users !== null && { users: serializeAws_restJson1__listOfUser(input.Users, context) }),
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

export const serializeAws_restJson1CreateConfigurationCommand = async (
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
  let body: any;
  body = JSON.stringify({
    ...(input.AuthenticationStrategy !== undefined &&
      input.AuthenticationStrategy !== null && { authenticationStrategy: input.AuthenticationStrategy }),
    ...(input.EngineType !== undefined && input.EngineType !== null && { engineType: input.EngineType }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { engineVersion: input.EngineVersion }),
    ...(input.Name !== undefined && input.Name !== null && { name: input.Name }),
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateTagsCommand = async (
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
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
    ...(input.Tags !== undefined &&
      input.Tags !== null && { tags: serializeAws_restJson1__mapOf__string(input.Tags, context) }),
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

export const serializeAws_restJson1CreateUserCommand = async (
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace("{Username}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConsoleAccess !== undefined && input.ConsoleAccess !== null && { consoleAccess: input.ConsoleAccess }),
    ...(input.Groups !== undefined &&
      input.Groups !== null && { groups: serializeAws_restJson1__listOf__string(input.Groups, context) }),
    ...(input.Password !== undefined && input.Password !== null && { password: input.Password }),
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

export const serializeAws_restJson1DeleteBrokerCommand = async (
  input: DeleteBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
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

export const serializeAws_restJson1DeleteTagsCommand = async (
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
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

export const serializeAws_restJson1DeleteUserCommand = async (
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace("{Username}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
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

export const serializeAws_restJson1DescribeBrokerCommand = async (
  input: DescribeBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
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

export const serializeAws_restJson1DescribeBrokerEngineTypesCommand = async (
  input: DescribeBrokerEngineTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/broker-engine-types";
  const query: any = {
    ...(input.EngineType !== undefined && { engineType: input.EngineType }),
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

export const serializeAws_restJson1DescribeBrokerInstanceOptionsCommand = async (
  input: DescribeBrokerInstanceOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/broker-instance-options";
  const query: any = {
    ...(input.EngineType !== undefined && { engineType: input.EngineType }),
    ...(input.HostInstanceType !== undefined && { hostInstanceType: input.HostInstanceType }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.StorageType !== undefined && { storageType: input.StorageType }),
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

export const serializeAws_restJson1DescribeConfigurationCommand = async (
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{ConfigurationId}";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
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

export const serializeAws_restJson1DescribeConfigurationRevisionCommand = async (
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
  }
  if (input.ConfigurationRevision !== undefined) {
    const labelValue: string = input.ConfigurationRevision;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationRevision.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationRevision}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationRevision.");
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

export const serializeAws_restJson1DescribeUserCommand = async (
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace("{Username}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
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

export const serializeAws_restJson1ListBrokersCommand = async (
  input: ListBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers";
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

export const serializeAws_restJson1ListConfigurationRevisionsCommand = async (
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/configurations/{ConfigurationId}/revisions";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
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

export const serializeAws_restJson1ListConfigurationsCommand = async (
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations";
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

export const serializeAws_restJson1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags/{ResourceArn}";
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

export const serializeAws_restJson1ListUsersCommand = async (
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
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

export const serializeAws_restJson1RebootBrokerCommand = async (
  input: RebootBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/reboot";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
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

export const serializeAws_restJson1UpdateBrokerCommand = async (
  input: UpdateBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.AuthenticationStrategy !== undefined &&
      input.AuthenticationStrategy !== null && { authenticationStrategy: input.AuthenticationStrategy }),
    ...(input.AutoMinorVersionUpgrade !== undefined &&
      input.AutoMinorVersionUpgrade !== null && { autoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.Configuration !== undefined &&
      input.Configuration !== null && {
        configuration: serializeAws_restJson1ConfigurationId(input.Configuration, context),
      }),
    ...(input.EngineVersion !== undefined && input.EngineVersion !== null && { engineVersion: input.EngineVersion }),
    ...(input.HostInstanceType !== undefined &&
      input.HostInstanceType !== null && { hostInstanceType: input.HostInstanceType }),
    ...(input.LdapServerMetadata !== undefined &&
      input.LdapServerMetadata !== null && {
        ldapServerMetadata: serializeAws_restJson1LdapServerMetadataInput(input.LdapServerMetadata, context),
      }),
    ...(input.Logs !== undefined && input.Logs !== null && { logs: serializeAws_restJson1Logs(input.Logs, context) }),
    ...(input.MaintenanceWindowStartTime !== undefined &&
      input.MaintenanceWindowStartTime !== null && {
        maintenanceWindowStartTime: serializeAws_restJson1WeeklyStartTime(input.MaintenanceWindowStartTime, context),
      }),
    ...(input.SecurityGroups !== undefined &&
      input.SecurityGroups !== null && {
        securityGroups: serializeAws_restJson1__listOf__string(input.SecurityGroups, context),
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

export const serializeAws_restJson1UpdateConfigurationCommand = async (
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/configurations/{ConfigurationId}";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ConfigurationId.");
    }
    resolvedPath = resolvedPath.replace("{ConfigurationId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Data !== undefined && input.Data !== null && { data: input.Data }),
    ...(input.Description !== undefined && input.Description !== null && { description: input.Description }),
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

export const serializeAws_restJson1UpdateUserCommand = async (
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace("{BrokerId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace("{Username}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.ConsoleAccess !== undefined && input.ConsoleAccess !== null && { consoleAccess: input.ConsoleAccess }),
    ...(input.Groups !== undefined &&
      input.Groups !== null && { groups: serializeAws_restJson1__listOf__string(input.Groups, context) }),
    ...(input.Password !== undefined && input.Password !== null && { password: input.Password }),
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

export const deserializeAws_restJson1CreateBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBrokerCommandError(output, context);
  }
  const contents: CreateBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerArn: undefined,
    BrokerId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerArn !== undefined && data.brokerArn !== null) {
    contents.BrokerArn = __expectString(data.brokerArn);
  }
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.mq#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1UnauthorizedExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateConfigurationCommandError(output, context);
  }
  const contents: CreateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AuthenticationStrategy: undefined,
    Created: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTime(data.created));
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1CreateTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1CreateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateUserCommandError(output, context);
  }
  const contents: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DeleteBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBrokerCommandError(output, context);
  }
  const contents: DeleteBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerId: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DeleteTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DeleteUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteUserCommandError(output, context);
  }
  const contents: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DescribeBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBrokerCommandError(output, context);
  }
  const contents: DescribeBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthenticationStrategy: undefined,
    AutoMinorVersionUpgrade: undefined,
    BrokerArn: undefined,
    BrokerId: undefined,
    BrokerInstances: undefined,
    BrokerName: undefined,
    BrokerState: undefined,
    Configurations: undefined,
    Created: undefined,
    DeploymentMode: undefined,
    EncryptionOptions: undefined,
    EngineType: undefined,
    EngineVersion: undefined,
    HostInstanceType: undefined,
    LdapServerMetadata: undefined,
    Logs: undefined,
    MaintenanceWindowStartTime: undefined,
    PendingAuthenticationStrategy: undefined,
    PendingEngineVersion: undefined,
    PendingHostInstanceType: undefined,
    PendingLdapServerMetadata: undefined,
    PendingSecurityGroups: undefined,
    PubliclyAccessible: undefined,
    SecurityGroups: undefined,
    StorageType: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    Users: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.autoMinorVersionUpgrade !== undefined && data.autoMinorVersionUpgrade !== null) {
    contents.AutoMinorVersionUpgrade = __expectBoolean(data.autoMinorVersionUpgrade);
  }
  if (data.brokerArn !== undefined && data.brokerArn !== null) {
    contents.BrokerArn = __expectString(data.brokerArn);
  }
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.brokerInstances !== undefined && data.brokerInstances !== null) {
    contents.BrokerInstances = deserializeAws_restJson1__listOfBrokerInstance(data.brokerInstances, context);
  }
  if (data.brokerName !== undefined && data.brokerName !== null) {
    contents.BrokerName = __expectString(data.brokerName);
  }
  if (data.brokerState !== undefined && data.brokerState !== null) {
    contents.BrokerState = __expectString(data.brokerState);
  }
  if (data.configurations !== undefined && data.configurations !== null) {
    contents.Configurations = deserializeAws_restJson1Configurations(data.configurations, context);
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTime(data.created));
  }
  if (data.deploymentMode !== undefined && data.deploymentMode !== null) {
    contents.DeploymentMode = __expectString(data.deploymentMode);
  }
  if (data.encryptionOptions !== undefined && data.encryptionOptions !== null) {
    contents.EncryptionOptions = deserializeAws_restJson1EncryptionOptions(data.encryptionOptions, context);
  }
  if (data.engineType !== undefined && data.engineType !== null) {
    contents.EngineType = __expectString(data.engineType);
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.EngineVersion = __expectString(data.engineVersion);
  }
  if (data.hostInstanceType !== undefined && data.hostInstanceType !== null) {
    contents.HostInstanceType = __expectString(data.hostInstanceType);
  }
  if (data.ldapServerMetadata !== undefined && data.ldapServerMetadata !== null) {
    contents.LdapServerMetadata = deserializeAws_restJson1LdapServerMetadataOutput(data.ldapServerMetadata, context);
  }
  if (data.logs !== undefined && data.logs !== null) {
    contents.Logs = deserializeAws_restJson1LogsSummary(data.logs, context);
  }
  if (data.maintenanceWindowStartTime !== undefined && data.maintenanceWindowStartTime !== null) {
    contents.MaintenanceWindowStartTime = deserializeAws_restJson1WeeklyStartTime(
      data.maintenanceWindowStartTime,
      context
    );
  }
  if (data.pendingAuthenticationStrategy !== undefined && data.pendingAuthenticationStrategy !== null) {
    contents.PendingAuthenticationStrategy = __expectString(data.pendingAuthenticationStrategy);
  }
  if (data.pendingEngineVersion !== undefined && data.pendingEngineVersion !== null) {
    contents.PendingEngineVersion = __expectString(data.pendingEngineVersion);
  }
  if (data.pendingHostInstanceType !== undefined && data.pendingHostInstanceType !== null) {
    contents.PendingHostInstanceType = __expectString(data.pendingHostInstanceType);
  }
  if (data.pendingLdapServerMetadata !== undefined && data.pendingLdapServerMetadata !== null) {
    contents.PendingLdapServerMetadata = deserializeAws_restJson1LdapServerMetadataOutput(
      data.pendingLdapServerMetadata,
      context
    );
  }
  if (data.pendingSecurityGroups !== undefined && data.pendingSecurityGroups !== null) {
    contents.PendingSecurityGroups = deserializeAws_restJson1__listOf__string(data.pendingSecurityGroups, context);
  }
  if (data.publiclyAccessible !== undefined && data.publiclyAccessible !== null) {
    contents.PubliclyAccessible = __expectBoolean(data.publiclyAccessible);
  }
  if (data.securityGroups !== undefined && data.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1__listOf__string(data.securityGroups, context);
  }
  if (data.storageType !== undefined && data.storageType !== null) {
    contents.StorageType = __expectString(data.storageType);
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1__listOf__string(data.subnetIds, context);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  if (data.users !== undefined && data.users !== null) {
    contents.Users = deserializeAws_restJson1__listOfUserSummary(data.users, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DescribeBrokerEngineTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerEngineTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBrokerEngineTypesCommandError(output, context);
  }
  const contents: DescribeBrokerEngineTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerEngineTypes: undefined,
    MaxResults: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerEngineTypes !== undefined && data.brokerEngineTypes !== null) {
    contents.BrokerEngineTypes = deserializeAws_restJson1__listOfBrokerEngineType(data.brokerEngineTypes, context);
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBrokerEngineTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerEngineTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeBrokerInstanceOptionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerInstanceOptionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBrokerInstanceOptionsCommandError(output, context);
  }
  const contents: DescribeBrokerInstanceOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerInstanceOptions: undefined,
    MaxResults: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerInstanceOptions !== undefined && data.brokerInstanceOptions !== null) {
    contents.BrokerInstanceOptions = deserializeAws_restJson1__listOfBrokerInstanceOption(
      data.brokerInstanceOptions,
      context
    );
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBrokerInstanceOptionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerInstanceOptionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1DescribeConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConfigurationCommandError(output, context);
  }
  const contents: DescribeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    AuthenticationStrategy: undefined,
    Created: undefined,
    Description: undefined,
    EngineType: undefined,
    EngineVersion: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined,
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTime(data.created));
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  if (data.engineType !== undefined && data.engineType !== null) {
    contents.EngineType = __expectString(data.engineType);
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.EngineVersion = __expectString(data.engineVersion);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DescribeConfigurationRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeConfigurationRevisionCommandError(output, context);
  }
  const contents: DescribeConfigurationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConfigurationId: undefined,
    Created: undefined,
    Data: undefined,
    Description: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationId !== undefined && data.configurationId !== null) {
    contents.ConfigurationId = __expectString(data.configurationId);
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTime(data.created));
  }
  if (data.data !== undefined && data.data !== null) {
    contents.Data = __expectString(data.data);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = __expectString(data.description);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeConfigurationRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1DescribeUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUserCommandError(output, context);
  }
  const contents: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerId: undefined,
    ConsoleAccess: undefined,
    Groups: undefined,
    Pending: undefined,
    Username: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.consoleAccess !== undefined && data.consoleAccess !== null) {
    contents.ConsoleAccess = __expectBoolean(data.consoleAccess);
  }
  if (data.groups !== undefined && data.groups !== null) {
    contents.Groups = deserializeAws_restJson1__listOf__string(data.groups, context);
  }
  if (data.pending !== undefined && data.pending !== null) {
    contents.Pending = deserializeAws_restJson1UserPendingChanges(data.pending, context);
  }
  if (data.username !== undefined && data.username !== null) {
    contents.Username = __expectString(data.username);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1ListBrokersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrokersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBrokersCommandError(output, context);
  }
  const contents: ListBrokersCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerSummaries: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerSummaries !== undefined && data.brokerSummaries !== null) {
    contents.BrokerSummaries = deserializeAws_restJson1__listOfBrokerSummary(data.brokerSummaries, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBrokersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrokersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListConfigurationRevisionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationRevisionsCommandError(output, context);
  }
  const contents: ListConfigurationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ConfigurationId: undefined,
    MaxResults: undefined,
    NextToken: undefined,
    Revisions: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurationId !== undefined && data.configurationId !== null) {
    contents.ConfigurationId = __expectString(data.configurationId);
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.revisions !== undefined && data.revisions !== null) {
    contents.Revisions = deserializeAws_restJson1__listOfConfigurationRevision(data.revisions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationRevisionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1ListConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListConfigurationsCommandError(output, context);
  }
  const contents: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Configurations: undefined,
    MaxResults: undefined,
    NextToken: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.configurations !== undefined && data.configurations !== null) {
    contents.Configurations = deserializeAws_restJson1__listOfConfiguration(data.configurations, context);
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1__mapOf__string(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1ListUsersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUsersCommandError(output, context);
  }
  const contents: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    BrokerId: undefined,
    MaxResults: undefined,
    NextToken: undefined,
    Users: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = __expectInt32(data.maxResults);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = __expectString(data.nextToken);
  }
  if (data.users !== undefined && data.users !== null) {
    contents.Users = deserializeAws_restJson1__listOfUserSummary(data.users, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListUsersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1RebootBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RebootBrokerCommandError(output, context);
  }
  const contents: RebootBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RebootBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1UpdateBrokerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBrokerCommandError(output, context);
  }
  const contents: UpdateBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    AuthenticationStrategy: undefined,
    AutoMinorVersionUpgrade: undefined,
    BrokerId: undefined,
    Configuration: undefined,
    EngineVersion: undefined,
    HostInstanceType: undefined,
    LdapServerMetadata: undefined,
    Logs: undefined,
    MaintenanceWindowStartTime: undefined,
    SecurityGroups: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.authenticationStrategy !== undefined && data.authenticationStrategy !== null) {
    contents.AuthenticationStrategy = __expectString(data.authenticationStrategy);
  }
  if (data.autoMinorVersionUpgrade !== undefined && data.autoMinorVersionUpgrade !== null) {
    contents.AutoMinorVersionUpgrade = __expectBoolean(data.autoMinorVersionUpgrade);
  }
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = __expectString(data.brokerId);
  }
  if (data.configuration !== undefined && data.configuration !== null) {
    contents.Configuration = deserializeAws_restJson1ConfigurationId(data.configuration, context);
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.EngineVersion = __expectString(data.engineVersion);
  }
  if (data.hostInstanceType !== undefined && data.hostInstanceType !== null) {
    contents.HostInstanceType = __expectString(data.hostInstanceType);
  }
  if (data.ldapServerMetadata !== undefined && data.ldapServerMetadata !== null) {
    contents.LdapServerMetadata = deserializeAws_restJson1LdapServerMetadataOutput(data.ldapServerMetadata, context);
  }
  if (data.logs !== undefined && data.logs !== null) {
    contents.Logs = deserializeAws_restJson1Logs(data.logs, context);
  }
  if (data.maintenanceWindowStartTime !== undefined && data.maintenanceWindowStartTime !== null) {
    contents.MaintenanceWindowStartTime = deserializeAws_restJson1WeeklyStartTime(
      data.maintenanceWindowStartTime,
      context
    );
  }
  if (data.securityGroups !== undefined && data.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1__listOf__string(data.securityGroups, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBrokerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1UpdateConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConfigurationCommandError(output, context);
  }
  const contents: UpdateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Created: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined,
    Warnings: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = __expectString(data.arn);
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = __expectNonNull(__parseRfc3339DateTime(data.created));
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = __expectString(data.id);
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1ConfigurationRevision(data.latestRevision, context);
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = __expectString(data.name);
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1__listOfSanitizationWarning(data.warnings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export const deserializeAws_restJson1UpdateUserCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateUserCommandError(output, context);
  }
  const contents: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateUserCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1ForbiddenExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1InternalServerErrorExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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
    ErrorAttribute: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
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
    ErrorAttribute: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorAttribute: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorAttribute: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
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
    ErrorAttribute: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = __expectString(data.message);
  }
  return contents;
};

const deserializeAws_restJson1UnauthorizedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ErrorAttribute: undefined,
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = __expectString(data.errorAttribute);
  }
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

const serializeAws_restJson1__listOfUser = (input: User[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1User(entry, context);
    });
};

const serializeAws_restJson1__mapOf__string = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1ConfigurationId = (input: ConfigurationId, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { id: input.Id }),
    ...(input.Revision !== undefined && input.Revision !== null && { revision: input.Revision }),
  };
};

const serializeAws_restJson1EncryptionOptions = (input: EncryptionOptions, context: __SerdeContext): any => {
  return {
    ...(input.KmsKeyId !== undefined && input.KmsKeyId !== null && { kmsKeyId: input.KmsKeyId }),
    ...(input.UseAwsOwnedKey !== undefined &&
      input.UseAwsOwnedKey !== null && { useAwsOwnedKey: input.UseAwsOwnedKey }),
  };
};

const serializeAws_restJson1LdapServerMetadataInput = (
  input: LdapServerMetadataInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hosts !== undefined &&
      input.Hosts !== null && { hosts: serializeAws_restJson1__listOf__string(input.Hosts, context) }),
    ...(input.RoleBase !== undefined && input.RoleBase !== null && { roleBase: input.RoleBase }),
    ...(input.RoleName !== undefined && input.RoleName !== null && { roleName: input.RoleName }),
    ...(input.RoleSearchMatching !== undefined &&
      input.RoleSearchMatching !== null && { roleSearchMatching: input.RoleSearchMatching }),
    ...(input.RoleSearchSubtree !== undefined &&
      input.RoleSearchSubtree !== null && { roleSearchSubtree: input.RoleSearchSubtree }),
    ...(input.ServiceAccountPassword !== undefined &&
      input.ServiceAccountPassword !== null && { serviceAccountPassword: input.ServiceAccountPassword }),
    ...(input.ServiceAccountUsername !== undefined &&
      input.ServiceAccountUsername !== null && { serviceAccountUsername: input.ServiceAccountUsername }),
    ...(input.UserBase !== undefined && input.UserBase !== null && { userBase: input.UserBase }),
    ...(input.UserRoleName !== undefined && input.UserRoleName !== null && { userRoleName: input.UserRoleName }),
    ...(input.UserSearchMatching !== undefined &&
      input.UserSearchMatching !== null && { userSearchMatching: input.UserSearchMatching }),
    ...(input.UserSearchSubtree !== undefined &&
      input.UserSearchSubtree !== null && { userSearchSubtree: input.UserSearchSubtree }),
  };
};

const serializeAws_restJson1Logs = (input: Logs, context: __SerdeContext): any => {
  return {
    ...(input.Audit !== undefined && input.Audit !== null && { audit: input.Audit }),
    ...(input.General !== undefined && input.General !== null && { general: input.General }),
  };
};

const serializeAws_restJson1User = (input: User, context: __SerdeContext): any => {
  return {
    ...(input.ConsoleAccess !== undefined && input.ConsoleAccess !== null && { consoleAccess: input.ConsoleAccess }),
    ...(input.Groups !== undefined &&
      input.Groups !== null && { groups: serializeAws_restJson1__listOf__string(input.Groups, context) }),
    ...(input.Password !== undefined && input.Password !== null && { password: input.Password }),
    ...(input.Username !== undefined && input.Username !== null && { username: input.Username }),
  };
};

const serializeAws_restJson1WeeklyStartTime = (input: WeeklyStartTime, context: __SerdeContext): any => {
  return {
    ...(input.DayOfWeek !== undefined && input.DayOfWeek !== null && { dayOfWeek: input.DayOfWeek }),
    ...(input.TimeOfDay !== undefined && input.TimeOfDay !== null && { timeOfDay: input.TimeOfDay }),
    ...(input.TimeZone !== undefined && input.TimeZone !== null && { timeZone: input.TimeZone }),
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

const deserializeAws_restJson1__listOfAvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailabilityZone(entry, context);
    });
};

const deserializeAws_restJson1__listOfBrokerEngineType = (output: any, context: __SerdeContext): BrokerEngineType[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BrokerEngineType(entry, context);
    });
};

const deserializeAws_restJson1__listOfBrokerInstance = (output: any, context: __SerdeContext): BrokerInstance[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BrokerInstance(entry, context);
    });
};

const deserializeAws_restJson1__listOfBrokerInstanceOption = (
  output: any,
  context: __SerdeContext
): BrokerInstanceOption[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BrokerInstanceOption(entry, context);
    });
};

const deserializeAws_restJson1__listOfBrokerSummary = (output: any, context: __SerdeContext): BrokerSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BrokerSummary(entry, context);
    });
};

const deserializeAws_restJson1__listOfConfiguration = (output: any, context: __SerdeContext): Configuration[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Configuration(entry, context);
    });
};

const deserializeAws_restJson1__listOfConfigurationId = (output: any, context: __SerdeContext): ConfigurationId[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigurationId(entry, context);
    });
};

const deserializeAws_restJson1__listOfConfigurationRevision = (
  output: any,
  context: __SerdeContext
): ConfigurationRevision[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConfigurationRevision(entry, context);
    });
};

const deserializeAws_restJson1__listOfDeploymentMode = (
  output: any,
  context: __SerdeContext
): (DeploymentMode | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1__listOfEngineVersion = (output: any, context: __SerdeContext): EngineVersion[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EngineVersion(entry, context);
    });
};

const deserializeAws_restJson1__listOfSanitizationWarning = (
  output: any,
  context: __SerdeContext
): SanitizationWarning[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SanitizationWarning(entry, context);
    });
};

const deserializeAws_restJson1__listOfUserSummary = (output: any, context: __SerdeContext): UserSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UserSummary(entry, context);
    });
};

const deserializeAws_restJson1__mapOf__string = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1BrokerEngineType = (output: any, context: __SerdeContext): BrokerEngineType => {
  return {
    EngineType: __expectString(output.engineType),
    EngineVersions:
      output.engineVersions !== undefined && output.engineVersions !== null
        ? deserializeAws_restJson1__listOfEngineVersion(output.engineVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BrokerInstance = (output: any, context: __SerdeContext): BrokerInstance => {
  return {
    ConsoleURL: __expectString(output.consoleURL),
    Endpoints:
      output.endpoints !== undefined && output.endpoints !== null
        ? deserializeAws_restJson1__listOf__string(output.endpoints, context)
        : undefined,
    IpAddress: __expectString(output.ipAddress),
  } as any;
};

const deserializeAws_restJson1BrokerInstanceOption = (output: any, context: __SerdeContext): BrokerInstanceOption => {
  return {
    AvailabilityZones:
      output.availabilityZones !== undefined && output.availabilityZones !== null
        ? deserializeAws_restJson1__listOfAvailabilityZone(output.availabilityZones, context)
        : undefined,
    EngineType: __expectString(output.engineType),
    HostInstanceType: __expectString(output.hostInstanceType),
    StorageType: __expectString(output.storageType),
    SupportedDeploymentModes:
      output.supportedDeploymentModes !== undefined && output.supportedDeploymentModes !== null
        ? deserializeAws_restJson1__listOfDeploymentMode(output.supportedDeploymentModes, context)
        : undefined,
    SupportedEngineVersions:
      output.supportedEngineVersions !== undefined && output.supportedEngineVersions !== null
        ? deserializeAws_restJson1__listOf__string(output.supportedEngineVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BrokerSummary = (output: any, context: __SerdeContext): BrokerSummary => {
  return {
    BrokerArn: __expectString(output.brokerArn),
    BrokerId: __expectString(output.brokerId),
    BrokerName: __expectString(output.brokerName),
    BrokerState: __expectString(output.brokerState),
    Created:
      output.created !== undefined && output.created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.created))
        : undefined,
    DeploymentMode: __expectString(output.deploymentMode),
    EngineType: __expectString(output.engineType),
    HostInstanceType: __expectString(output.hostInstanceType),
  } as any;
};

const deserializeAws_restJson1Configuration = (output: any, context: __SerdeContext): Configuration => {
  return {
    Arn: __expectString(output.arn),
    AuthenticationStrategy: __expectString(output.authenticationStrategy),
    Created:
      output.created !== undefined && output.created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.created))
        : undefined,
    Description: __expectString(output.description),
    EngineType: __expectString(output.engineType),
    EngineVersion: __expectString(output.engineVersion),
    Id: __expectString(output.id),
    LatestRevision:
      output.latestRevision !== undefined && output.latestRevision !== null
        ? deserializeAws_restJson1ConfigurationRevision(output.latestRevision, context)
        : undefined,
    Name: __expectString(output.name),
    Tags:
      output.tags !== undefined && output.tags !== null
        ? deserializeAws_restJson1__mapOf__string(output.tags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConfigurationId = (output: any, context: __SerdeContext): ConfigurationId => {
  return {
    Id: __expectString(output.id),
    Revision: __expectInt32(output.revision),
  } as any;
};

const deserializeAws_restJson1ConfigurationRevision = (output: any, context: __SerdeContext): ConfigurationRevision => {
  return {
    Created:
      output.created !== undefined && output.created !== null
        ? __expectNonNull(__parseRfc3339DateTime(output.created))
        : undefined,
    Description: __expectString(output.description),
    Revision: __expectInt32(output.revision),
  } as any;
};

const deserializeAws_restJson1Configurations = (output: any, context: __SerdeContext): Configurations => {
  return {
    Current:
      output.current !== undefined && output.current !== null
        ? deserializeAws_restJson1ConfigurationId(output.current, context)
        : undefined,
    History:
      output.history !== undefined && output.history !== null
        ? deserializeAws_restJson1__listOfConfigurationId(output.history, context)
        : undefined,
    Pending:
      output.pending !== undefined && output.pending !== null
        ? deserializeAws_restJson1ConfigurationId(output.pending, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1EncryptionOptions = (output: any, context: __SerdeContext): EncryptionOptions => {
  return {
    KmsKeyId: __expectString(output.kmsKeyId),
    UseAwsOwnedKey: __expectBoolean(output.useAwsOwnedKey),
  } as any;
};

const deserializeAws_restJson1EngineVersion = (output: any, context: __SerdeContext): EngineVersion => {
  return {
    Name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1LdapServerMetadataOutput = (
  output: any,
  context: __SerdeContext
): LdapServerMetadataOutput => {
  return {
    Hosts:
      output.hosts !== undefined && output.hosts !== null
        ? deserializeAws_restJson1__listOf__string(output.hosts, context)
        : undefined,
    RoleBase: __expectString(output.roleBase),
    RoleName: __expectString(output.roleName),
    RoleSearchMatching: __expectString(output.roleSearchMatching),
    RoleSearchSubtree: __expectBoolean(output.roleSearchSubtree),
    ServiceAccountUsername: __expectString(output.serviceAccountUsername),
    UserBase: __expectString(output.userBase),
    UserRoleName: __expectString(output.userRoleName),
    UserSearchMatching: __expectString(output.userSearchMatching),
    UserSearchSubtree: __expectBoolean(output.userSearchSubtree),
  } as any;
};

const deserializeAws_restJson1Logs = (output: any, context: __SerdeContext): Logs => {
  return {
    Audit: __expectBoolean(output.audit),
    General: __expectBoolean(output.general),
  } as any;
};

const deserializeAws_restJson1LogsSummary = (output: any, context: __SerdeContext): LogsSummary => {
  return {
    Audit: __expectBoolean(output.audit),
    AuditLogGroup: __expectString(output.auditLogGroup),
    General: __expectBoolean(output.general),
    GeneralLogGroup: __expectString(output.generalLogGroup),
    Pending:
      output.pending !== undefined && output.pending !== null
        ? deserializeAws_restJson1PendingLogs(output.pending, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PendingLogs = (output: any, context: __SerdeContext): PendingLogs => {
  return {
    Audit: __expectBoolean(output.audit),
    General: __expectBoolean(output.general),
  } as any;
};

const deserializeAws_restJson1SanitizationWarning = (output: any, context: __SerdeContext): SanitizationWarning => {
  return {
    AttributeName: __expectString(output.attributeName),
    ElementName: __expectString(output.elementName),
    Reason: __expectString(output.reason),
  } as any;
};

const deserializeAws_restJson1UserPendingChanges = (output: any, context: __SerdeContext): UserPendingChanges => {
  return {
    ConsoleAccess: __expectBoolean(output.consoleAccess),
    Groups:
      output.groups !== undefined && output.groups !== null
        ? deserializeAws_restJson1__listOf__string(output.groups, context)
        : undefined,
    PendingChange: __expectString(output.pendingChange),
  } as any;
};

const deserializeAws_restJson1UserSummary = (output: any, context: __SerdeContext): UserSummary => {
  return {
    PendingChange: __expectString(output.pendingChange),
    Username: __expectString(output.username),
  } as any;
};

const deserializeAws_restJson1WeeklyStartTime = (output: any, context: __SerdeContext): WeeklyStartTime => {
  return {
    DayOfWeek: __expectString(output.dayOfWeek),
    TimeOfDay: __expectString(output.timeOfDay),
    TimeZone: __expectString(output.timeZone),
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
