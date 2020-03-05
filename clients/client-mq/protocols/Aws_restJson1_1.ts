import {
  CreateBrokerCommandInput,
  CreateBrokerCommandOutput
} from "../commands/CreateBrokerCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput
} from "../commands/CreateConfigurationCommand";
import {
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "../commands/CreateTagsCommand";
import {
  CreateUserCommandInput,
  CreateUserCommandOutput
} from "../commands/CreateUserCommand";
import {
  DeleteBrokerCommandInput,
  DeleteBrokerCommandOutput
} from "../commands/DeleteBrokerCommand";
import {
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "../commands/DeleteTagsCommand";
import {
  DeleteUserCommandInput,
  DeleteUserCommandOutput
} from "../commands/DeleteUserCommand";
import {
  DescribeBrokerCommandInput,
  DescribeBrokerCommandOutput
} from "../commands/DescribeBrokerCommand";
import {
  DescribeBrokerEngineTypesCommandInput,
  DescribeBrokerEngineTypesCommandOutput
} from "../commands/DescribeBrokerEngineTypesCommand";
import {
  DescribeBrokerInstanceOptionsCommandInput,
  DescribeBrokerInstanceOptionsCommandOutput
} from "../commands/DescribeBrokerInstanceOptionsCommand";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput
} from "../commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput
} from "../commands/DescribeConfigurationRevisionCommand";
import {
  DescribeUserCommandInput,
  DescribeUserCommandOutput
} from "../commands/DescribeUserCommand";
import {
  ListBrokersCommandInput,
  ListBrokersCommandOutput
} from "../commands/ListBrokersCommand";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput
} from "../commands/ListConfigurationRevisionsCommand";
import {
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput
} from "../commands/ListConfigurationsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  ListUsersCommandInput,
  ListUsersCommandOutput
} from "../commands/ListUsersCommand";
import {
  RebootBrokerCommandInput,
  RebootBrokerCommandOutput
} from "../commands/RebootBrokerCommand";
import {
  UpdateBrokerCommandInput,
  UpdateBrokerCommandOutput
} from "../commands/UpdateBrokerCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput
} from "../commands/UpdateConfigurationCommand";
import {
  UpdateUserCommandInput,
  UpdateUserCommandOutput
} from "../commands/UpdateUserCommand";
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
  Logs,
  LogsSummary,
  NotFoundException,
  PendingLogs,
  SanitizationWarning,
  UnauthorizedException,
  User,
  UserPendingChanges,
  UserSummary,
  WeeklyStartTime
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

export async function serializeAws_restJson1_1CreateBrokerCommand(
  input: CreateBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/brokers";
  let body: any;
  const bodyParams: any = {};
  if (input.AutoMinorVersionUpgrade !== undefined) {
    bodyParams["autoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.BrokerName !== undefined) {
    bodyParams["brokerName"] = input.BrokerName;
  }
  if (input.Configuration !== undefined) {
    bodyParams["configuration"] = serializeAws_restJson1_1ConfigurationId(
      input.Configuration,
      context
    );
  }
  if (input.CreatorRequestId === undefined) {
    input.CreatorRequestId = generateIdempotencyToken();
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["creatorRequestId"] = input.CreatorRequestId;
  }
  if (input.DeploymentMode !== undefined) {
    bodyParams["deploymentMode"] = input.DeploymentMode;
  }
  if (input.EncryptionOptions !== undefined) {
    bodyParams["encryptionOptions"] = serializeAws_restJson1_1EncryptionOptions(
      input.EncryptionOptions,
      context
    );
  }
  if (input.EngineType !== undefined) {
    bodyParams["engineType"] = input.EngineType;
  }
  if (input.EngineVersion !== undefined) {
    bodyParams["engineVersion"] = input.EngineVersion;
  }
  if (input.HostInstanceType !== undefined) {
    bodyParams["hostInstanceType"] = input.HostInstanceType;
  }
  if (input.Logs !== undefined) {
    bodyParams["logs"] = serializeAws_restJson1_1Logs(input.Logs, context);
  }
  if (input.MaintenanceWindowStartTime !== undefined) {
    bodyParams[
      "maintenanceWindowStartTime"
    ] = serializeAws_restJson1_1WeeklyStartTime(
      input.MaintenanceWindowStartTime,
      context
    );
  }
  if (input.PubliclyAccessible !== undefined) {
    bodyParams["publiclyAccessible"] = input.PubliclyAccessible;
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["securityGroups"] = serializeAws_restJson1_1__listOf__string(
      input.SecurityGroups,
      context
    );
  }
  if (input.StorageType !== undefined) {
    bodyParams["storageType"] = input.StorageType;
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["subnetIds"] = serializeAws_restJson1_1__listOf__string(
      input.SubnetIds,
      context
    );
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
  }
  if (input.Users !== undefined) {
    bodyParams["users"] = serializeAws_restJson1_1__listOfUser(
      input.Users,
      context
    );
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

export async function serializeAws_restJson1_1CreateConfigurationCommand(
  input: CreateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/configurations";
  let body: any;
  const bodyParams: any = {};
  if (input.EngineType !== undefined) {
    bodyParams["engineType"] = input.EngineType;
  }
  if (input.EngineVersion !== undefined) {
    bodyParams["engineVersion"] = input.EngineVersion;
  }
  if (input.Name !== undefined) {
    bodyParams["name"] = input.Name;
  }
  if (input.Tags !== undefined) {
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
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

export async function serializeAws_restJson1_1CreateTagsCommand(
  input: CreateTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/tags/{ResourceArn}";
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
    bodyParams["tags"] = serializeAws_restJson1_1__mapOf__string(
      input.Tags,
      context
    );
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

export async function serializeAws_restJson1_1CreateUserCommand(
  input: CreateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace(
      "{Username}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ConsoleAccess !== undefined) {
    bodyParams["consoleAccess"] = input.ConsoleAccess;
  }
  if (input.Groups !== undefined) {
    bodyParams["groups"] = serializeAws_restJson1_1__listOf__string(
      input.Groups,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["password"] = input.Password;
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

export async function serializeAws_restJson1_1DeleteBrokerCommand(
  input: DeleteBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers/{BrokerId}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteTagsCommand(
  input: DeleteTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/tags/{ResourceArn}";
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
    query["tagKeys"] = input.TagKeys;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1DeleteUserCommand(
  input: DeleteUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace(
      "{Username}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeBrokerCommand(
  input: DescribeBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers/{BrokerId}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeBrokerEngineTypesCommand(
  input: DescribeBrokerEngineTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/broker-engine-types";
  const query: any = {};
  if (input.EngineType !== undefined) {
    query["engineType"] = input.EngineType;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1DescribeBrokerInstanceOptionsCommand(
  input: DescribeBrokerInstanceOptionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/broker-instance-options";
  const query: any = {};
  if (input.EngineType !== undefined) {
    query["engineType"] = input.EngineType;
  }
  if (input.HostInstanceType !== undefined) {
    query["hostInstanceType"] = input.HostInstanceType;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
  }
  if (input.StorageType !== undefined) {
    query["storageType"] = input.StorageType;
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

export async function serializeAws_restJson1_1DescribeConfigurationCommand(
  input: DescribeConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations/{ConfigurationId}";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeConfigurationRevisionCommand(
  input: DescribeConfigurationRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/v1/configurations/{ConfigurationId}/revisions/{ConfigurationRevision}";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
  }
  if (input.ConfigurationRevision !== undefined) {
    const labelValue: string = input.ConfigurationRevision;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationRevision."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationRevision}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: ConfigurationRevision."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeUserCommand(
  input: DescribeUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace(
      "{Username}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListBrokersCommand(
  input: ListBrokersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListConfigurationRevisionsCommand(
  input: ListConfigurationRevisionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations/{ConfigurationId}/revisions";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListConfigurationsCommand(
  input: ListConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/configurations";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/tags/{ResourceArn}";
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListUsersCommand(
  input: ListUsersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers/{BrokerId}/users";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1RebootBrokerCommand(
  input: RebootBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/v1/brokers/{BrokerId}/reboot";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1UpdateBrokerCommand(
  input: UpdateBrokerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/brokers/{BrokerId}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.AutoMinorVersionUpgrade !== undefined) {
    bodyParams["autoMinorVersionUpgrade"] = input.AutoMinorVersionUpgrade;
  }
  if (input.Configuration !== undefined) {
    bodyParams["configuration"] = serializeAws_restJson1_1ConfigurationId(
      input.Configuration,
      context
    );
  }
  if (input.EngineVersion !== undefined) {
    bodyParams["engineVersion"] = input.EngineVersion;
  }
  if (input.HostInstanceType !== undefined) {
    bodyParams["hostInstanceType"] = input.HostInstanceType;
  }
  if (input.Logs !== undefined) {
    bodyParams["logs"] = serializeAws_restJson1_1Logs(input.Logs, context);
  }
  if (input.SecurityGroups !== undefined) {
    bodyParams["securityGroups"] = serializeAws_restJson1_1__listOf__string(
      input.SecurityGroups,
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

export async function serializeAws_restJson1_1UpdateConfigurationCommand(
  input: UpdateConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/configurations/{ConfigurationId}";
  if (input.ConfigurationId !== undefined) {
    const labelValue: string = input.ConfigurationId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ConfigurationId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ConfigurationId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ConfigurationId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Data !== undefined) {
    bodyParams["data"] = input.Data;
  }
  if (input.Description !== undefined) {
    bodyParams["description"] = input.Description;
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

export async function serializeAws_restJson1_1UpdateUserCommand(
  input: UpdateUserCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/v1/brokers/{BrokerId}/users/{Username}";
  if (input.BrokerId !== undefined) {
    const labelValue: string = input.BrokerId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BrokerId.");
    }
    resolvedPath = resolvedPath.replace(
      "{BrokerId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BrokerId.");
  }
  if (input.Username !== undefined) {
    const labelValue: string = input.Username;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Username.");
    }
    resolvedPath = resolvedPath.replace(
      "{Username}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Username.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ConsoleAccess !== undefined) {
    bodyParams["consoleAccess"] = input.ConsoleAccess;
  }
  if (input.Groups !== undefined) {
    bodyParams["groups"] = serializeAws_restJson1_1__listOf__string(
      input.Groups,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["password"] = input.Password;
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

export async function deserializeAws_restJson1_1CreateBrokerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrokerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBrokerCommandError(output, context);
  }
  const contents: CreateBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBrokerResponse",
    BrokerArn: undefined,
    BrokerId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.brokerArn !== undefined && data.brokerArn !== null) {
    contents.BrokerArn = data.brokerArn;
  }
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = data.brokerId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateBrokerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBrokerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnauthorizedException":
    case "com.amazonaws.mq#UnauthorizedException":
      response = {
        ...(await deserializeAws_restJson1_1UnauthorizedExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateConfigurationCommandError(
      output,
      context
    );
  }
  const contents: CreateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateConfigurationResponse",
    Arn: undefined,
    Created: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = new Date(data.created);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export async function deserializeAws_restJson1_1CreateTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateTagsCommandError(output, context);
  }
  const contents: CreateTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1CreateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateUserCommandError(output, context);
  }
  const contents: CreateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateUserResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DeleteBrokerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrokerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBrokerCommandError(output, context);
  }
  const contents: DeleteBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBrokerResponse",
    BrokerId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = data.brokerId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBrokerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBrokerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DeleteTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteTagsCommandError(output, context);
  }
  const contents: DeleteTagsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DeleteUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteUserCommandError(output, context);
  }
  const contents: DeleteUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteUserResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DescribeBrokerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeBrokerCommandError(
      output,
      context
    );
  }
  const contents: DescribeBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBrokerResponse",
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
    Logs: undefined,
    MaintenanceWindowStartTime: undefined,
    PendingEngineVersion: undefined,
    PendingHostInstanceType: undefined,
    PendingSecurityGroups: undefined,
    PubliclyAccessible: undefined,
    SecurityGroups: undefined,
    StorageType: undefined,
    SubnetIds: undefined,
    Tags: undefined,
    Users: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.autoMinorVersionUpgrade !== undefined &&
    data.autoMinorVersionUpgrade !== null
  ) {
    contents.AutoMinorVersionUpgrade = data.autoMinorVersionUpgrade;
  }
  if (data.brokerArn !== undefined && data.brokerArn !== null) {
    contents.BrokerArn = data.brokerArn;
  }
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = data.brokerId;
  }
  if (data.brokerInstances !== undefined && data.brokerInstances !== null) {
    contents.BrokerInstances = deserializeAws_restJson1_1__listOfBrokerInstance(
      data.brokerInstances,
      context
    );
  }
  if (data.brokerName !== undefined && data.brokerName !== null) {
    contents.BrokerName = data.brokerName;
  }
  if (data.brokerState !== undefined && data.brokerState !== null) {
    contents.BrokerState = data.brokerState;
  }
  if (data.configurations !== undefined && data.configurations !== null) {
    contents.Configurations = deserializeAws_restJson1_1Configurations(
      data.configurations,
      context
    );
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = new Date(data.created);
  }
  if (data.deploymentMode !== undefined && data.deploymentMode !== null) {
    contents.DeploymentMode = data.deploymentMode;
  }
  if (data.encryptionOptions !== undefined && data.encryptionOptions !== null) {
    contents.EncryptionOptions = deserializeAws_restJson1_1EncryptionOptions(
      data.encryptionOptions,
      context
    );
  }
  if (data.engineType !== undefined && data.engineType !== null) {
    contents.EngineType = data.engineType;
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.EngineVersion = data.engineVersion;
  }
  if (data.hostInstanceType !== undefined && data.hostInstanceType !== null) {
    contents.HostInstanceType = data.hostInstanceType;
  }
  if (data.logs !== undefined && data.logs !== null) {
    contents.Logs = deserializeAws_restJson1_1LogsSummary(data.logs, context);
  }
  if (
    data.maintenanceWindowStartTime !== undefined &&
    data.maintenanceWindowStartTime !== null
  ) {
    contents.MaintenanceWindowStartTime = deserializeAws_restJson1_1WeeklyStartTime(
      data.maintenanceWindowStartTime,
      context
    );
  }
  if (
    data.pendingEngineVersion !== undefined &&
    data.pendingEngineVersion !== null
  ) {
    contents.PendingEngineVersion = data.pendingEngineVersion;
  }
  if (
    data.pendingHostInstanceType !== undefined &&
    data.pendingHostInstanceType !== null
  ) {
    contents.PendingHostInstanceType = data.pendingHostInstanceType;
  }
  if (
    data.pendingSecurityGroups !== undefined &&
    data.pendingSecurityGroups !== null
  ) {
    contents.PendingSecurityGroups = deserializeAws_restJson1_1__listOf__string(
      data.pendingSecurityGroups,
      context
    );
  }
  if (
    data.publiclyAccessible !== undefined &&
    data.publiclyAccessible !== null
  ) {
    contents.PubliclyAccessible = data.publiclyAccessible;
  }
  if (data.securityGroups !== undefined && data.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1_1__listOf__string(
      data.securityGroups,
      context
    );
  }
  if (data.storageType !== undefined && data.storageType !== null) {
    contents.StorageType = data.storageType;
  }
  if (data.subnetIds !== undefined && data.subnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1_1__listOf__string(
      data.subnetIds,
      context
    );
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  if (data.users !== undefined && data.users !== null) {
    contents.Users = deserializeAws_restJson1_1__listOfUserSummary(
      data.users,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeBrokerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DescribeBrokerEngineTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerEngineTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeBrokerEngineTypesCommandError(
      output,
      context
    );
  }
  const contents: DescribeBrokerEngineTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBrokerEngineTypesResponse",
    BrokerEngineTypes: undefined,
    MaxResults: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.brokerEngineTypes !== undefined && data.brokerEngineTypes !== null) {
    contents.BrokerEngineTypes = deserializeAws_restJson1_1__listOfBrokerEngineType(
      data.brokerEngineTypes,
      context
    );
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = data.maxResults;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeBrokerEngineTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerEngineTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeBrokerInstanceOptionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerInstanceOptionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeBrokerInstanceOptionsCommandError(
      output,
      context
    );
  }
  const contents: DescribeBrokerInstanceOptionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBrokerInstanceOptionsResponse",
    BrokerInstanceOptions: undefined,
    MaxResults: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.brokerInstanceOptions !== undefined &&
    data.brokerInstanceOptions !== null
  ) {
    contents.BrokerInstanceOptions = deserializeAws_restJson1_1__listOfBrokerInstanceOption(
      data.brokerInstanceOptions,
      context
    );
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = data.maxResults;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeBrokerInstanceOptionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBrokerInstanceOptionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export async function deserializeAws_restJson1_1DescribeConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeConfigurationCommandError(
      output,
      context
    );
  }
  const contents: DescribeConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationResponse",
    Arn: undefined,
    Created: undefined,
    Description: undefined,
    EngineType: undefined,
    EngineVersion: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = new Date(data.created);
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  if (data.engineType !== undefined && data.engineType !== null) {
    contents.EngineType = data.engineType;
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.EngineVersion = data.engineVersion;
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DescribeConfigurationRevisionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeConfigurationRevisionCommandError(
      output,
      context
    );
  }
  const contents: DescribeConfigurationRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeConfigurationRevisionResponse",
    ConfigurationId: undefined,
    Created: undefined,
    Data: undefined,
    Description: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurationId !== undefined && data.configurationId !== null) {
    contents.ConfigurationId = data.configurationId;
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = new Date(data.created);
  }
  if (data.data !== undefined && data.data !== null) {
    contents.Data = data.data;
  }
  if (data.description !== undefined && data.description !== null) {
    contents.Description = data.description;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeConfigurationRevisionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeConfigurationRevisionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1DescribeUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeUserCommandError(output, context);
  }
  const contents: DescribeUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeUserResponse",
    BrokerId: undefined,
    ConsoleAccess: undefined,
    Groups: undefined,
    Pending: undefined,
    Username: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = data.brokerId;
  }
  if (data.consoleAccess !== undefined && data.consoleAccess !== null) {
    contents.ConsoleAccess = data.consoleAccess;
  }
  if (data.groups !== undefined && data.groups !== null) {
    contents.Groups = deserializeAws_restJson1_1__listOf__string(
      data.groups,
      context
    );
  }
  if (data.pending !== undefined && data.pending !== null) {
    contents.Pending = deserializeAws_restJson1_1UserPendingChanges(
      data.pending,
      context
    );
  }
  if (data.username !== undefined && data.username !== null) {
    contents.Username = data.username;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1ListBrokersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrokersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBrokersCommandError(output, context);
  }
  const contents: ListBrokersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBrokersResponse",
    BrokerSummaries: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.brokerSummaries !== undefined && data.brokerSummaries !== null) {
    contents.BrokerSummaries = deserializeAws_restJson1_1__listOfBrokerSummary(
      data.brokerSummaries,
      context
    );
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBrokersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBrokersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export async function deserializeAws_restJson1_1ListConfigurationRevisionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationRevisionsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationRevisionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationRevisionsResponse",
    ConfigurationId: undefined,
    MaxResults: undefined,
    NextToken: undefined,
    Revisions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurationId !== undefined && data.configurationId !== null) {
    contents.ConfigurationId = data.configurationId;
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = data.maxResults;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.revisions !== undefined && data.revisions !== null) {
    contents.Revisions = deserializeAws_restJson1_1__listOfConfigurationRevision(
      data.revisions,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationRevisionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationRevisionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1ListConfigurationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListConfigurationsCommandError(
      output,
      context
    );
  }
  const contents: ListConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListConfigurationsResponse",
    Configurations: undefined,
    MaxResults: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.configurations !== undefined && data.configurations !== null) {
    contents.Configurations = deserializeAws_restJson1_1__listOfConfiguration(
      data.configurations,
      context
    );
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = data.maxResults;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListConfigurationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConfigurationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
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

export async function deserializeAws_restJson1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.tags !== undefined && data.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      data.tags,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1ListUsersCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListUsersCommandError(output, context);
  }
  const contents: ListUsersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListUsersResponse",
    BrokerId: undefined,
    MaxResults: undefined,
    NextToken: undefined,
    Users: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = data.brokerId;
  }
  if (data.maxResults !== undefined && data.maxResults !== null) {
    contents.MaxResults = data.maxResults;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.NextToken = data.nextToken;
  }
  if (data.users !== undefined && data.users !== null) {
    contents.Users = deserializeAws_restJson1_1__listOfUserSummary(
      data.users,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListUsersCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUsersCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1RebootBrokerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RebootBrokerCommandError(output, context);
  }
  const contents: RebootBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "RebootBrokerResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RebootBrokerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RebootBrokerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1UpdateBrokerCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateBrokerCommandError(output, context);
  }
  const contents: UpdateBrokerCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBrokerResponse",
    AutoMinorVersionUpgrade: undefined,
    BrokerId: undefined,
    Configuration: undefined,
    EngineVersion: undefined,
    HostInstanceType: undefined,
    Logs: undefined,
    SecurityGroups: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.autoMinorVersionUpgrade !== undefined &&
    data.autoMinorVersionUpgrade !== null
  ) {
    contents.AutoMinorVersionUpgrade = data.autoMinorVersionUpgrade;
  }
  if (data.brokerId !== undefined && data.brokerId !== null) {
    contents.BrokerId = data.brokerId;
  }
  if (data.configuration !== undefined && data.configuration !== null) {
    contents.Configuration = deserializeAws_restJson1_1ConfigurationId(
      data.configuration,
      context
    );
  }
  if (data.engineVersion !== undefined && data.engineVersion !== null) {
    contents.EngineVersion = data.engineVersion;
  }
  if (data.hostInstanceType !== undefined && data.hostInstanceType !== null) {
    contents.HostInstanceType = data.hostInstanceType;
  }
  if (data.logs !== undefined && data.logs !== null) {
    contents.Logs = deserializeAws_restJson1_1Logs(data.logs, context);
  }
  if (data.securityGroups !== undefined && data.securityGroups !== null) {
    contents.SecurityGroups = deserializeAws_restJson1_1__listOf__string(
      data.securityGroups,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateBrokerCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBrokerCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1UpdateConfigurationCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateConfigurationResponse",
    Arn: undefined,
    Created: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined,
    Warnings: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.arn !== undefined && data.arn !== null) {
    contents.Arn = data.arn;
  }
  if (data.created !== undefined && data.created !== null) {
    contents.Created = new Date(data.created);
  }
  if (data.id !== undefined && data.id !== null) {
    contents.Id = data.id;
  }
  if (data.latestRevision !== undefined && data.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      data.latestRevision,
      context
    );
  }
  if (data.name !== undefined && data.name !== null) {
    contents.Name = data.name;
  }
  if (data.warnings !== undefined && data.warnings !== null) {
    contents.Warnings = deserializeAws_restJson1_1__listOfSanitizationWarning(
      data.warnings,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateConfigurationCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConfigurationCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

export async function deserializeAws_restJson1_1UpdateUserCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateUserCommandError(output, context);
  }
  const contents: UpdateUserCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateUserResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateUserCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateUserCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.mq#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.mq#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.mq#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.mq#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.mq#NotFoundException":
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

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorAttribute: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = data.errorAttribute;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    ErrorAttribute: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = data.errorAttribute;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorAttribute: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = data.errorAttribute;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    ErrorAttribute: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = data.errorAttribute;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
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
    ErrorAttribute: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = data.errorAttribute;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnauthorizedExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<UnauthorizedException> => {
  const contents: UnauthorizedException = {
    name: "UnauthorizedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    ErrorAttribute: undefined,
    Message: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.errorAttribute !== undefined && data.errorAttribute !== null) {
    contents.ErrorAttribute = data.errorAttribute;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.Message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1ConfigurationId = (
  input: ConfigurationId,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Id !== undefined) {
    bodyParams["id"] = input.Id;
  }
  if (input.Revision !== undefined) {
    bodyParams["revision"] = input.Revision;
  }
  return bodyParams;
};

const serializeAws_restJson1_1EncryptionOptions = (
  input: EncryptionOptions,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.KmsKeyId !== undefined) {
    bodyParams["kmsKeyId"] = input.KmsKeyId;
  }
  if (input.UseAwsOwnedKey !== undefined) {
    bodyParams["useAwsOwnedKey"] = input.UseAwsOwnedKey;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Logs = (
  input: Logs,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Audit !== undefined) {
    bodyParams["audit"] = input.Audit;
  }
  if (input.General !== undefined) {
    bodyParams["general"] = input.General;
  }
  return bodyParams;
};

const serializeAws_restJson1_1User = (
  input: User,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConsoleAccess !== undefined) {
    bodyParams["consoleAccess"] = input.ConsoleAccess;
  }
  if (input.Groups !== undefined) {
    bodyParams["groups"] = serializeAws_restJson1_1__listOf__string(
      input.Groups,
      context
    );
  }
  if (input.Password !== undefined) {
    bodyParams["password"] = input.Password;
  }
  if (input.Username !== undefined) {
    bodyParams["username"] = input.Username;
  }
  return bodyParams;
};

const serializeAws_restJson1_1WeeklyStartTime = (
  input: WeeklyStartTime,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DayOfWeek !== undefined) {
    bodyParams["dayOfWeek"] = input.DayOfWeek;
  }
  if (input.TimeOfDay !== undefined) {
    bodyParams["timeOfDay"] = input.TimeOfDay;
  }
  if (input.TimeZone !== undefined) {
    bodyParams["timeZone"] = input.TimeZone;
  }
  return bodyParams;
};

const serializeAws_restJson1_1__listOfUser = (
  input: Array<User>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1User(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1__listOf__string = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1__mapOf__string = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AvailabilityZone = (
  output: any,
  context: __SerdeContext
): AvailabilityZone => {
  let contents: any = {
    __type: "AvailabilityZone",
    Name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerEngineType = (
  output: any,
  context: __SerdeContext
): BrokerEngineType => {
  let contents: any = {
    __type: "BrokerEngineType",
    EngineType: undefined,
    EngineVersions: undefined
  };
  if (output.engineType !== undefined && output.engineType !== null) {
    contents.EngineType = output.engineType;
  }
  if (output.engineVersions !== undefined && output.engineVersions !== null) {
    contents.EngineVersions = deserializeAws_restJson1_1__listOfEngineVersion(
      output.engineVersions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerInstance = (
  output: any,
  context: __SerdeContext
): BrokerInstance => {
  let contents: any = {
    __type: "BrokerInstance",
    ConsoleURL: undefined,
    Endpoints: undefined,
    IpAddress: undefined
  };
  if (output.consoleURL !== undefined && output.consoleURL !== null) {
    contents.ConsoleURL = output.consoleURL;
  }
  if (output.endpoints !== undefined && output.endpoints !== null) {
    contents.Endpoints = deserializeAws_restJson1_1__listOf__string(
      output.endpoints,
      context
    );
  }
  if (output.ipAddress !== undefined && output.ipAddress !== null) {
    contents.IpAddress = output.ipAddress;
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerInstanceOption = (
  output: any,
  context: __SerdeContext
): BrokerInstanceOption => {
  let contents: any = {
    __type: "BrokerInstanceOption",
    AvailabilityZones: undefined,
    EngineType: undefined,
    HostInstanceType: undefined,
    StorageType: undefined,
    SupportedDeploymentModes: undefined,
    SupportedEngineVersions: undefined
  };
  if (
    output.availabilityZones !== undefined &&
    output.availabilityZones !== null
  ) {
    contents.AvailabilityZones = deserializeAws_restJson1_1__listOfAvailabilityZone(
      output.availabilityZones,
      context
    );
  }
  if (output.engineType !== undefined && output.engineType !== null) {
    contents.EngineType = output.engineType;
  }
  if (
    output.hostInstanceType !== undefined &&
    output.hostInstanceType !== null
  ) {
    contents.HostInstanceType = output.hostInstanceType;
  }
  if (output.storageType !== undefined && output.storageType !== null) {
    contents.StorageType = output.storageType;
  }
  if (
    output.supportedDeploymentModes !== undefined &&
    output.supportedDeploymentModes !== null
  ) {
    contents.SupportedDeploymentModes = deserializeAws_restJson1_1__listOfDeploymentMode(
      output.supportedDeploymentModes,
      context
    );
  }
  if (
    output.supportedEngineVersions !== undefined &&
    output.supportedEngineVersions !== null
  ) {
    contents.SupportedEngineVersions = deserializeAws_restJson1_1__listOf__string(
      output.supportedEngineVersions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BrokerSummary = (
  output: any,
  context: __SerdeContext
): BrokerSummary => {
  let contents: any = {
    __type: "BrokerSummary",
    BrokerArn: undefined,
    BrokerId: undefined,
    BrokerName: undefined,
    BrokerState: undefined,
    Created: undefined,
    DeploymentMode: undefined,
    HostInstanceType: undefined
  };
  if (output.brokerArn !== undefined && output.brokerArn !== null) {
    contents.BrokerArn = output.brokerArn;
  }
  if (output.brokerId !== undefined && output.brokerId !== null) {
    contents.BrokerId = output.brokerId;
  }
  if (output.brokerName !== undefined && output.brokerName !== null) {
    contents.BrokerName = output.brokerName;
  }
  if (output.brokerState !== undefined && output.brokerState !== null) {
    contents.BrokerState = output.brokerState;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.Created = new Date(output.created);
  }
  if (output.deploymentMode !== undefined && output.deploymentMode !== null) {
    contents.DeploymentMode = output.deploymentMode;
  }
  if (
    output.hostInstanceType !== undefined &&
    output.hostInstanceType !== null
  ) {
    contents.HostInstanceType = output.hostInstanceType;
  }
  return contents;
};

const deserializeAws_restJson1_1Configuration = (
  output: any,
  context: __SerdeContext
): Configuration => {
  let contents: any = {
    __type: "Configuration",
    Arn: undefined,
    Created: undefined,
    Description: undefined,
    EngineType: undefined,
    EngineVersion: undefined,
    Id: undefined,
    LatestRevision: undefined,
    Name: undefined,
    Tags: undefined
  };
  if (output.arn !== undefined && output.arn !== null) {
    contents.Arn = output.arn;
  }
  if (output.created !== undefined && output.created !== null) {
    contents.Created = new Date(output.created);
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.engineType !== undefined && output.engineType !== null) {
    contents.EngineType = output.engineType;
  }
  if (output.engineVersion !== undefined && output.engineVersion !== null) {
    contents.EngineVersion = output.engineVersion;
  }
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.latestRevision !== undefined && output.latestRevision !== null) {
    contents.LatestRevision = deserializeAws_restJson1_1ConfigurationRevision(
      output.latestRevision,
      context
    );
  }
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  if (output.tags !== undefined && output.tags !== null) {
    contents.Tags = deserializeAws_restJson1_1__mapOf__string(
      output.tags,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationId = (
  output: any,
  context: __SerdeContext
): ConfigurationId => {
  let contents: any = {
    __type: "ConfigurationId",
    Id: undefined,
    Revision: undefined
  };
  if (output.id !== undefined && output.id !== null) {
    contents.Id = output.id;
  }
  if (output.revision !== undefined && output.revision !== null) {
    contents.Revision = output.revision;
  }
  return contents;
};

const deserializeAws_restJson1_1ConfigurationRevision = (
  output: any,
  context: __SerdeContext
): ConfigurationRevision => {
  let contents: any = {
    __type: "ConfigurationRevision",
    Created: undefined,
    Description: undefined,
    Revision: undefined
  };
  if (output.created !== undefined && output.created !== null) {
    contents.Created = new Date(output.created);
  }
  if (output.description !== undefined && output.description !== null) {
    contents.Description = output.description;
  }
  if (output.revision !== undefined && output.revision !== null) {
    contents.Revision = output.revision;
  }
  return contents;
};

const deserializeAws_restJson1_1Configurations = (
  output: any,
  context: __SerdeContext
): Configurations => {
  let contents: any = {
    __type: "Configurations",
    Current: undefined,
    History: undefined,
    Pending: undefined
  };
  if (output.current !== undefined && output.current !== null) {
    contents.Current = deserializeAws_restJson1_1ConfigurationId(
      output.current,
      context
    );
  }
  if (output.history !== undefined && output.history !== null) {
    contents.History = deserializeAws_restJson1_1__listOfConfigurationId(
      output.history,
      context
    );
  }
  if (output.pending !== undefined && output.pending !== null) {
    contents.Pending = deserializeAws_restJson1_1ConfigurationId(
      output.pending,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EncryptionOptions = (
  output: any,
  context: __SerdeContext
): EncryptionOptions => {
  let contents: any = {
    __type: "EncryptionOptions",
    KmsKeyId: undefined,
    UseAwsOwnedKey: undefined
  };
  if (output.kmsKeyId !== undefined && output.kmsKeyId !== null) {
    contents.KmsKeyId = output.kmsKeyId;
  }
  if (output.useAwsOwnedKey !== undefined && output.useAwsOwnedKey !== null) {
    contents.UseAwsOwnedKey = output.useAwsOwnedKey;
  }
  return contents;
};

const deserializeAws_restJson1_1EngineVersion = (
  output: any,
  context: __SerdeContext
): EngineVersion => {
  let contents: any = {
    __type: "EngineVersion",
    Name: undefined
  };
  if (output.name !== undefined && output.name !== null) {
    contents.Name = output.name;
  }
  return contents;
};

const deserializeAws_restJson1_1Logs = (
  output: any,
  context: __SerdeContext
): Logs => {
  let contents: any = {
    __type: "Logs",
    Audit: undefined,
    General: undefined
  };
  if (output.audit !== undefined && output.audit !== null) {
    contents.Audit = output.audit;
  }
  if (output.general !== undefined && output.general !== null) {
    contents.General = output.general;
  }
  return contents;
};

const deserializeAws_restJson1_1LogsSummary = (
  output: any,
  context: __SerdeContext
): LogsSummary => {
  let contents: any = {
    __type: "LogsSummary",
    Audit: undefined,
    AuditLogGroup: undefined,
    General: undefined,
    GeneralLogGroup: undefined,
    Pending: undefined
  };
  if (output.audit !== undefined && output.audit !== null) {
    contents.Audit = output.audit;
  }
  if (output.auditLogGroup !== undefined && output.auditLogGroup !== null) {
    contents.AuditLogGroup = output.auditLogGroup;
  }
  if (output.general !== undefined && output.general !== null) {
    contents.General = output.general;
  }
  if (output.generalLogGroup !== undefined && output.generalLogGroup !== null) {
    contents.GeneralLogGroup = output.generalLogGroup;
  }
  if (output.pending !== undefined && output.pending !== null) {
    contents.Pending = deserializeAws_restJson1_1PendingLogs(
      output.pending,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1PendingLogs = (
  output: any,
  context: __SerdeContext
): PendingLogs => {
  let contents: any = {
    __type: "PendingLogs",
    Audit: undefined,
    General: undefined
  };
  if (output.audit !== undefined && output.audit !== null) {
    contents.Audit = output.audit;
  }
  if (output.general !== undefined && output.general !== null) {
    contents.General = output.general;
  }
  return contents;
};

const deserializeAws_restJson1_1SanitizationWarning = (
  output: any,
  context: __SerdeContext
): SanitizationWarning => {
  let contents: any = {
    __type: "SanitizationWarning",
    AttributeName: undefined,
    ElementName: undefined,
    Reason: undefined
  };
  if (output.attributeName !== undefined && output.attributeName !== null) {
    contents.AttributeName = output.attributeName;
  }
  if (output.elementName !== undefined && output.elementName !== null) {
    contents.ElementName = output.elementName;
  }
  if (output.reason !== undefined && output.reason !== null) {
    contents.Reason = output.reason;
  }
  return contents;
};

const deserializeAws_restJson1_1UserPendingChanges = (
  output: any,
  context: __SerdeContext
): UserPendingChanges => {
  let contents: any = {
    __type: "UserPendingChanges",
    ConsoleAccess: undefined,
    Groups: undefined,
    PendingChange: undefined
  };
  if (output.consoleAccess !== undefined && output.consoleAccess !== null) {
    contents.ConsoleAccess = output.consoleAccess;
  }
  if (output.groups !== undefined && output.groups !== null) {
    contents.Groups = deserializeAws_restJson1_1__listOf__string(
      output.groups,
      context
    );
  }
  if (output.pendingChange !== undefined && output.pendingChange !== null) {
    contents.PendingChange = output.pendingChange;
  }
  return contents;
};

const deserializeAws_restJson1_1UserSummary = (
  output: any,
  context: __SerdeContext
): UserSummary => {
  let contents: any = {
    __type: "UserSummary",
    PendingChange: undefined,
    Username: undefined
  };
  if (output.pendingChange !== undefined && output.pendingChange !== null) {
    contents.PendingChange = output.pendingChange;
  }
  if (output.username !== undefined && output.username !== null) {
    contents.Username = output.username;
  }
  return contents;
};

const deserializeAws_restJson1_1WeeklyStartTime = (
  output: any,
  context: __SerdeContext
): WeeklyStartTime => {
  let contents: any = {
    __type: "WeeklyStartTime",
    DayOfWeek: undefined,
    TimeOfDay: undefined,
    TimeZone: undefined
  };
  if (output.dayOfWeek !== undefined && output.dayOfWeek !== null) {
    contents.DayOfWeek = output.dayOfWeek;
  }
  if (output.timeOfDay !== undefined && output.timeOfDay !== null) {
    contents.TimeOfDay = output.timeOfDay;
  }
  if (output.timeZone !== undefined && output.timeZone !== null) {
    contents.TimeZone = output.timeZone;
  }
  return contents;
};

const deserializeAws_restJson1_1__listOfAvailabilityZone = (
  output: any,
  context: __SerdeContext
): Array<AvailabilityZone> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AvailabilityZone(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfBrokerEngineType = (
  output: any,
  context: __SerdeContext
): Array<BrokerEngineType> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BrokerEngineType(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfBrokerInstance = (
  output: any,
  context: __SerdeContext
): Array<BrokerInstance> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BrokerInstance(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfBrokerInstanceOption = (
  output: any,
  context: __SerdeContext
): Array<BrokerInstanceOption> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BrokerInstanceOption(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfBrokerSummary = (
  output: any,
  context: __SerdeContext
): Array<BrokerSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BrokerSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfConfiguration = (
  output: any,
  context: __SerdeContext
): Array<Configuration> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Configuration(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfConfigurationId = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationId> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ConfigurationId(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfConfigurationRevision = (
  output: any,
  context: __SerdeContext
): Array<ConfigurationRevision> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ConfigurationRevision(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfDeploymentMode = (
  output: any,
  context: __SerdeContext
): Array<DeploymentMode | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__listOfEngineVersion = (
  output: any,
  context: __SerdeContext
): Array<EngineVersion> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EngineVersion(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfSanitizationWarning = (
  output: any,
  context: __SerdeContext
): Array<SanitizationWarning> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1SanitizationWarning(entry, context)
  );
};

const deserializeAws_restJson1_1__listOfUserSummary = (
  output: any,
  context: __SerdeContext
): Array<UserSummary> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UserSummary(entry, context)
  );
};

const deserializeAws_restJson1_1__listOf__string = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1__mapOf__string = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
