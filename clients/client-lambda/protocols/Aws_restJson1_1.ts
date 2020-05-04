import {
  AddLayerVersionPermissionCommandInput,
  AddLayerVersionPermissionCommandOutput
} from "../commands/AddLayerVersionPermissionCommand";
import {
  AddPermissionCommandInput,
  AddPermissionCommandOutput
} from "../commands/AddPermissionCommand";
import {
  CreateAliasCommandInput,
  CreateAliasCommandOutput
} from "../commands/CreateAliasCommand";
import {
  CreateEventSourceMappingCommandInput,
  CreateEventSourceMappingCommandOutput
} from "../commands/CreateEventSourceMappingCommand";
import {
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput
} from "../commands/CreateFunctionCommand";
import {
  DeleteAliasCommandInput,
  DeleteAliasCommandOutput
} from "../commands/DeleteAliasCommand";
import {
  DeleteEventSourceMappingCommandInput,
  DeleteEventSourceMappingCommandOutput
} from "../commands/DeleteEventSourceMappingCommand";
import {
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput
} from "../commands/DeleteFunctionCommand";
import {
  DeleteFunctionConcurrencyCommandInput,
  DeleteFunctionConcurrencyCommandOutput
} from "../commands/DeleteFunctionConcurrencyCommand";
import {
  DeleteFunctionEventInvokeConfigCommandInput,
  DeleteFunctionEventInvokeConfigCommandOutput
} from "../commands/DeleteFunctionEventInvokeConfigCommand";
import {
  DeleteLayerVersionCommandInput,
  DeleteLayerVersionCommandOutput
} from "../commands/DeleteLayerVersionCommand";
import {
  DeleteProvisionedConcurrencyConfigCommandInput,
  DeleteProvisionedConcurrencyConfigCommandOutput
} from "../commands/DeleteProvisionedConcurrencyConfigCommand";
import {
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput
} from "../commands/GetAccountSettingsCommand";
import {
  GetAliasCommandInput,
  GetAliasCommandOutput
} from "../commands/GetAliasCommand";
import {
  GetEventSourceMappingCommandInput,
  GetEventSourceMappingCommandOutput
} from "../commands/GetEventSourceMappingCommand";
import {
  GetFunctionCommandInput,
  GetFunctionCommandOutput
} from "../commands/GetFunctionCommand";
import {
  GetFunctionConcurrencyCommandInput,
  GetFunctionConcurrencyCommandOutput
} from "../commands/GetFunctionConcurrencyCommand";
import {
  GetFunctionConfigurationCommandInput,
  GetFunctionConfigurationCommandOutput
} from "../commands/GetFunctionConfigurationCommand";
import {
  GetFunctionEventInvokeConfigCommandInput,
  GetFunctionEventInvokeConfigCommandOutput
} from "../commands/GetFunctionEventInvokeConfigCommand";
import {
  GetLayerVersionByArnCommandInput,
  GetLayerVersionByArnCommandOutput
} from "../commands/GetLayerVersionByArnCommand";
import {
  GetLayerVersionCommandInput,
  GetLayerVersionCommandOutput
} from "../commands/GetLayerVersionCommand";
import {
  GetLayerVersionPolicyCommandInput,
  GetLayerVersionPolicyCommandOutput
} from "../commands/GetLayerVersionPolicyCommand";
import {
  GetPolicyCommandInput,
  GetPolicyCommandOutput
} from "../commands/GetPolicyCommand";
import {
  GetProvisionedConcurrencyConfigCommandInput,
  GetProvisionedConcurrencyConfigCommandOutput
} from "../commands/GetProvisionedConcurrencyConfigCommand";
import {
  InvokeAsyncCommandInput,
  InvokeAsyncCommandOutput
} from "../commands/InvokeAsyncCommand";
import {
  InvokeCommandInput,
  InvokeCommandOutput
} from "../commands/InvokeCommand";
import {
  ListAliasesCommandInput,
  ListAliasesCommandOutput
} from "../commands/ListAliasesCommand";
import {
  ListEventSourceMappingsCommandInput,
  ListEventSourceMappingsCommandOutput
} from "../commands/ListEventSourceMappingsCommand";
import {
  ListFunctionEventInvokeConfigsCommandInput,
  ListFunctionEventInvokeConfigsCommandOutput
} from "../commands/ListFunctionEventInvokeConfigsCommand";
import {
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput
} from "../commands/ListFunctionsCommand";
import {
  ListLayerVersionsCommandInput,
  ListLayerVersionsCommandOutput
} from "../commands/ListLayerVersionsCommand";
import {
  ListLayersCommandInput,
  ListLayersCommandOutput
} from "../commands/ListLayersCommand";
import {
  ListProvisionedConcurrencyConfigsCommandInput,
  ListProvisionedConcurrencyConfigsCommandOutput
} from "../commands/ListProvisionedConcurrencyConfigsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  ListVersionsByFunctionCommandInput,
  ListVersionsByFunctionCommandOutput
} from "../commands/ListVersionsByFunctionCommand";
import {
  PublishLayerVersionCommandInput,
  PublishLayerVersionCommandOutput
} from "../commands/PublishLayerVersionCommand";
import {
  PublishVersionCommandInput,
  PublishVersionCommandOutput
} from "../commands/PublishVersionCommand";
import {
  PutFunctionConcurrencyCommandInput,
  PutFunctionConcurrencyCommandOutput
} from "../commands/PutFunctionConcurrencyCommand";
import {
  PutFunctionEventInvokeConfigCommandInput,
  PutFunctionEventInvokeConfigCommandOutput
} from "../commands/PutFunctionEventInvokeConfigCommand";
import {
  PutProvisionedConcurrencyConfigCommandInput,
  PutProvisionedConcurrencyConfigCommandOutput
} from "../commands/PutProvisionedConcurrencyConfigCommand";
import {
  RemoveLayerVersionPermissionCommandInput,
  RemoveLayerVersionPermissionCommandOutput
} from "../commands/RemoveLayerVersionPermissionCommand";
import {
  RemovePermissionCommandInput,
  RemovePermissionCommandOutput
} from "../commands/RemovePermissionCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateAliasCommandInput,
  UpdateAliasCommandOutput
} from "../commands/UpdateAliasCommand";
import {
  UpdateEventSourceMappingCommandInput,
  UpdateEventSourceMappingCommandOutput
} from "../commands/UpdateEventSourceMappingCommand";
import {
  UpdateFunctionCodeCommandInput,
  UpdateFunctionCodeCommandOutput
} from "../commands/UpdateFunctionCodeCommand";
import {
  UpdateFunctionConfigurationCommandInput,
  UpdateFunctionConfigurationCommandOutput
} from "../commands/UpdateFunctionConfigurationCommand";
import {
  UpdateFunctionEventInvokeConfigCommandInput,
  UpdateFunctionEventInvokeConfigCommandOutput
} from "../commands/UpdateFunctionEventInvokeConfigCommand";
import {
  AccountLimit,
  AccountUsage,
  AliasConfiguration,
  AliasRoutingConfiguration,
  CodeStorageExceededException,
  Concurrency,
  DeadLetterConfig,
  DestinationConfig,
  EC2AccessDeniedException,
  EC2ThrottledException,
  EC2UnexpectedException,
  ENILimitReachedException,
  Environment,
  EnvironmentError,
  EnvironmentResponse,
  EventSourceMappingConfiguration,
  FunctionCode,
  FunctionCodeLocation,
  FunctionConfiguration,
  FunctionEventInvokeConfig,
  InvalidParameterValueException,
  InvalidRequestContentException,
  InvalidRuntimeException,
  InvalidSecurityGroupIDException,
  InvalidSubnetIDException,
  InvalidZipFileException,
  KMSAccessDeniedException,
  KMSDisabledException,
  KMSInvalidStateException,
  KMSNotFoundException,
  Layer,
  LayerVersionContentInput,
  LayerVersionContentOutput,
  LayerVersionsListItem,
  LayersListItem,
  OnFailure,
  OnSuccess,
  PolicyLengthExceededException,
  PreconditionFailedException,
  ProvisionedConcurrencyConfigListItem,
  ProvisionedConcurrencyConfigNotFoundException,
  RequestTooLargeException,
  ResourceConflictException,
  ResourceInUseException,
  ResourceNotFoundException,
  ResourceNotReadyException,
  Runtime,
  ServiceException,
  SubnetIPAddressLimitReachedException,
  TooManyRequestsException,
  TracingConfig,
  TracingConfigResponse,
  UnsupportedMediaTypeException,
  VpcConfig,
  VpcConfigResponse
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

export const serializeAws_restJson1_1AddLayerVersionPermissionCommand = async (
  input: AddLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: VersionNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{VersionNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  const query: any = {};
  if (input.RevisionId !== undefined) {
    query["RevisionId"] = input.RevisionId;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.OrganizationId !== undefined) {
    bodyParams["OrganizationId"] = input.OrganizationId;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.StatementId !== undefined) {
    bodyParams["StatementId"] = input.StatementId;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/policy";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Action !== undefined) {
    bodyParams["Action"] = input.Action;
  }
  if (input.EventSourceToken !== undefined) {
    bodyParams["EventSourceToken"] = input.EventSourceToken;
  }
  if (input.Principal !== undefined) {
    bodyParams["Principal"] = input.Principal;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  if (input.SourceAccount !== undefined) {
    bodyParams["SourceAccount"] = input.SourceAccount;
  }
  if (input.SourceArn !== undefined) {
    bodyParams["SourceArn"] = input.SourceArn;
  }
  if (input.StatementId !== undefined) {
    bodyParams["StatementId"] = input.StatementId;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.FunctionVersion !== undefined) {
    bodyParams["FunctionVersion"] = input.FunctionVersion;
  }
  if (input.Name !== undefined) {
    bodyParams["Name"] = input.Name;
  }
  if (input.RoutingConfig !== undefined) {
    bodyParams[
      "RoutingConfig"
    ] = serializeAws_restJson1_1AliasRoutingConfiguration(
      input.RoutingConfig,
      context
    );
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

export const serializeAws_restJson1_1CreateEventSourceMappingCommand = async (
  input: CreateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/event-source-mappings";
  let body: any;
  const bodyParams: any = {};
  if (input.BatchSize !== undefined) {
    bodyParams["BatchSize"] = input.BatchSize;
  }
  if (input.BisectBatchOnFunctionError !== undefined) {
    bodyParams["BisectBatchOnFunctionError"] = input.BisectBatchOnFunctionError;
  }
  if (input.DestinationConfig !== undefined) {
    bodyParams["DestinationConfig"] = serializeAws_restJson1_1DestinationConfig(
      input.DestinationConfig,
      context
    );
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.EventSourceArn !== undefined) {
    bodyParams["EventSourceArn"] = input.EventSourceArn;
  }
  if (input.FunctionName !== undefined) {
    bodyParams["FunctionName"] = input.FunctionName;
  }
  if (input.MaximumBatchingWindowInSeconds !== undefined) {
    bodyParams["MaximumBatchingWindowInSeconds"] =
      input.MaximumBatchingWindowInSeconds;
  }
  if (input.MaximumRecordAgeInSeconds !== undefined) {
    bodyParams["MaximumRecordAgeInSeconds"] = input.MaximumRecordAgeInSeconds;
  }
  if (input.MaximumRetryAttempts !== undefined) {
    bodyParams["MaximumRetryAttempts"] = input.MaximumRetryAttempts;
  }
  if (input.ParallelizationFactor !== undefined) {
    bodyParams["ParallelizationFactor"] = input.ParallelizationFactor;
  }
  if (input.StartingPosition !== undefined) {
    bodyParams["StartingPosition"] = input.StartingPosition;
  }
  if (input.StartingPositionTimestamp !== undefined) {
    bodyParams["StartingPositionTimestamp"] = Math.round(
      input.StartingPositionTimestamp.getTime() / 1000
    );
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

export const serializeAws_restJson1_1CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions";
  let body: any;
  const bodyParams: any = {};
  if (input.Code !== undefined) {
    bodyParams["Code"] = serializeAws_restJson1_1FunctionCode(
      input.Code,
      context
    );
  }
  if (input.DeadLetterConfig !== undefined) {
    bodyParams["DeadLetterConfig"] = serializeAws_restJson1_1DeadLetterConfig(
      input.DeadLetterConfig,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Environment !== undefined) {
    bodyParams["Environment"] = serializeAws_restJson1_1Environment(
      input.Environment,
      context
    );
  }
  if (input.FunctionName !== undefined) {
    bodyParams["FunctionName"] = input.FunctionName;
  }
  if (input.Handler !== undefined) {
    bodyParams["Handler"] = input.Handler;
  }
  if (input.KMSKeyArn !== undefined) {
    bodyParams["KMSKeyArn"] = input.KMSKeyArn;
  }
  if (input.Layers !== undefined) {
    bodyParams["Layers"] = serializeAws_restJson1_1LayerList(
      input.Layers,
      context
    );
  }
  if (input.MemorySize !== undefined) {
    bodyParams["MemorySize"] = input.MemorySize;
  }
  if (input.Publish !== undefined) {
    bodyParams["Publish"] = input.Publish;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.Runtime !== undefined) {
    bodyParams["Runtime"] = input.Runtime;
  }
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  if (input.Timeout !== undefined) {
    bodyParams["Timeout"] = input.Timeout;
  }
  if (input.TracingConfig !== undefined) {
    bodyParams["TracingConfig"] = serializeAws_restJson1_1TracingConfig(
      input.TracingConfig,
      context
    );
  }
  if (input.VpcConfig !== undefined) {
    bodyParams["VpcConfig"] = serializeAws_restJson1_1VpcConfig(
      input.VpcConfig,
      context
    );
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

export const serializeAws_restJson1_1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1_1DeleteEventSourceMappingCommand = async (
  input: DeleteEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
  if (input.UUID !== undefined) {
    const labelValue: string = input.UUID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UUID.");
    }
    resolvedPath = resolvedPath.replace(
      "{UUID}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UUID.");
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

export const serializeAws_restJson1_1DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1DeleteFunctionConcurrencyCommand = async (
  input: DeleteFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2017-10-31/functions/{FunctionName}/concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
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

export const serializeAws_restJson1_1DeleteFunctionEventInvokeConfigCommand = async (
  input: DeleteFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1DeleteLayerVersionCommand = async (
  input: DeleteLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: VersionNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{VersionNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
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

export const serializeAws_restJson1_1DeleteProvisionedConcurrencyConfigCommand = async (
  input: DeleteProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2016-08-19/account-settings";
  let body: any;
  body = "{}";
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

export const serializeAws_restJson1_1GetAliasCommand = async (
  input: GetAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
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

export const serializeAws_restJson1_1GetEventSourceMappingCommand = async (
  input: GetEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
  if (input.UUID !== undefined) {
    const labelValue: string = input.UUID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UUID.");
    }
    resolvedPath = resolvedPath.replace(
      "{UUID}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UUID.");
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

export const serializeAws_restJson1_1GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1GetFunctionConcurrencyCommand = async (
  input: GetFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2019-09-30/functions/{FunctionName}/concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
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

export const serializeAws_restJson1_1GetFunctionConfigurationCommand = async (
  input: GetFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/configuration";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1GetFunctionEventInvokeConfigCommand = async (
  input: GetFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1GetLayerVersionCommand = async (
  input: GetLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: VersionNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{VersionNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
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

export const serializeAws_restJson1_1GetLayerVersionByArnCommand = async (
  input: GetLayerVersionByArnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2018-10-31/layers";
  const query: any = {
    find: "LayerVersion"
  };
  if (input.Arn !== undefined) {
    query["Arn"] = input.Arn;
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

export const serializeAws_restJson1_1GetLayerVersionPolicyCommand = async (
  input: GetLayerVersionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: VersionNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{VersionNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
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

export const serializeAws_restJson1_1GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/policy";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1GetProvisionedConcurrencyConfigCommand = async (
  input: GetProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
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

export const serializeAws_restJson1_1InvokeCommand = async (
  input: InvokeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (isSerializableHeaderValue(input.ClientContext)) {
    headers["X-Amz-Client-Context"] = input.ClientContext!;
  }
  if (isSerializableHeaderValue(input.InvocationType)) {
    headers["X-Amz-Invocation-Type"] = input.InvocationType!;
  }
  if (isSerializableHeaderValue(input.LogType)) {
    headers["X-Amz-Log-Type"] = input.LogType!;
  }
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/invocations";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
  }
  let body: any;
  if (input.Payload !== undefined) {
    body = input.Payload;
  }
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

export const serializeAws_restJson1_1InvokeAsyncCommand = async (
  input: InvokeAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  let resolvedPath = "/2014-11-13/functions/{FunctionName}/invoke-async";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  if (input.InvokeArgs !== undefined) {
    body = input.InvokeArgs;
  }
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

export const serializeAws_restJson1_1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.FunctionVersion !== undefined) {
    query["FunctionVersion"] = input.FunctionVersion;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListEventSourceMappingsCommand = async (
  input: ListEventSourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/event-source-mappings";
  const query: any = {};
  if (input.EventSourceArn !== undefined) {
    query["EventSourceArn"] = input.EventSourceArn;
  }
  if (input.FunctionName !== undefined) {
    query["FunctionName"] = input.FunctionName;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListFunctionEventInvokeConfigsCommand = async (
  input: ListFunctionEventInvokeConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2019-09-25/functions/{FunctionName}/event-invoke-config/list";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions";
  const query: any = {};
  if (input.FunctionVersion !== undefined) {
    query["FunctionVersion"] = input.FunctionVersion;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MasterRegion !== undefined) {
    query["MasterRegion"] = input.MasterRegion;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListLayerVersionsCommand = async (
  input: ListLayerVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2018-10-31/layers/{LayerName}/versions";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  const query: any = {};
  if (input.CompatibleRuntime !== undefined) {
    query["CompatibleRuntime"] = input.CompatibleRuntime;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListLayersCommand = async (
  input: ListLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2018-10-31/layers";
  const query: any = {};
  if (input.CompatibleRuntime !== undefined) {
    query["CompatibleRuntime"] = input.CompatibleRuntime;
  }
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListProvisionedConcurrencyConfigsCommand = async (
  input: ListProvisionedConcurrencyConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {
    List: "ALL"
  };
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2017-03-31/tags/{Resource}";
  if (input.Resource !== undefined) {
    const labelValue: string = input.Resource;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Resource.");
    }
    resolvedPath = resolvedPath.replace(
      "{Resource}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Resource.");
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

export const serializeAws_restJson1_1ListVersionsByFunctionCommand = async (
  input: ListVersionsByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/versions";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Marker !== undefined) {
    query["Marker"] = input.Marker;
  }
  if (input.MaxItems !== undefined) {
    query["MaxItems"] = input.MaxItems.toString();
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

export const serializeAws_restJson1_1PublishLayerVersionCommand = async (
  input: PublishLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2018-10-31/layers/{LayerName}/versions";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.CompatibleRuntimes !== undefined) {
    bodyParams[
      "CompatibleRuntimes"
    ] = serializeAws_restJson1_1CompatibleRuntimes(
      input.CompatibleRuntimes,
      context
    );
  }
  if (input.Content !== undefined) {
    bodyParams["Content"] = serializeAws_restJson1_1LayerVersionContentInput(
      input.Content,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.LicenseInfo !== undefined) {
    bodyParams["LicenseInfo"] = input.LicenseInfo;
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

export const serializeAws_restJson1_1PublishVersionCommand = async (
  input: PublishVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/versions";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.CodeSha256 !== undefined) {
    bodyParams["CodeSha256"] = input.CodeSha256;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
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

export const serializeAws_restJson1_1PutFunctionConcurrencyCommand = async (
  input: PutFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2017-10-31/functions/{FunctionName}/concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ReservedConcurrentExecutions !== undefined) {
    bodyParams["ReservedConcurrentExecutions"] =
      input.ReservedConcurrentExecutions;
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

export const serializeAws_restJson1_1PutFunctionEventInvokeConfigCommand = async (
  input: PutFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DestinationConfig !== undefined) {
    bodyParams["DestinationConfig"] = serializeAws_restJson1_1DestinationConfig(
      input.DestinationConfig,
      context
    );
  }
  if (input.MaximumEventAgeInSeconds !== undefined) {
    bodyParams["MaximumEventAgeInSeconds"] = input.MaximumEventAgeInSeconds;
  }
  if (input.MaximumRetryAttempts !== undefined) {
    bodyParams["MaximumRetryAttempts"] = input.MaximumRetryAttempts;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1PutProvisionedConcurrencyConfigCommand = async (
  input: PutProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/2019-09-30/functions/{FunctionName}/provisioned-concurrency";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.ProvisionedConcurrentExecutions !== undefined) {
    bodyParams["ProvisionedConcurrentExecutions"] =
      input.ProvisionedConcurrentExecutions;
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
    query,
    body
  });
};

export const serializeAws_restJson1_1RemoveLayerVersionPermissionCommand = async (
  input: RemoveLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2018-10-31/layers/{LayerName}/versions/{VersionNumber}/policy/{StatementId}";
  if (input.LayerName !== undefined) {
    const labelValue: string = input.LayerName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: LayerName.");
    }
    resolvedPath = resolvedPath.replace(
      "{LayerName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: LayerName.");
  }
  if (input.StatementId !== undefined) {
    const labelValue: string = input.StatementId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: StatementId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{StatementId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: StatementId.");
  }
  if (input.VersionNumber !== undefined) {
    const labelValue: string = input.VersionNumber.toString();
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: VersionNumber."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{VersionNumber}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: VersionNumber.");
  }
  const query: any = {};
  if (input.RevisionId !== undefined) {
    query["RevisionId"] = input.RevisionId;
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

export const serializeAws_restJson1_1RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/2015-03-31/functions/{FunctionName}/policy/{StatementId}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.StatementId !== undefined) {
    const labelValue: string = input.StatementId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: StatementId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{StatementId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: StatementId.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
  }
  if (input.RevisionId !== undefined) {
    query["RevisionId"] = input.RevisionId;
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

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2017-03-31/tags/{Resource}";
  if (input.Resource !== undefined) {
    const labelValue: string = input.Resource;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Resource.");
    }
    resolvedPath = resolvedPath.replace(
      "{Resource}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Resource.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
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
  let resolvedPath = "/2017-03-31/tags/{Resource}";
  if (input.Resource !== undefined) {
    const labelValue: string = input.Resource;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Resource.");
    }
    resolvedPath = resolvedPath.replace(
      "{Resource}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Resource.");
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

export const serializeAws_restJson1_1UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/aliases/{Name}";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  if (input.Name !== undefined) {
    const labelValue: string = input.Name;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: Name.");
    }
    resolvedPath = resolvedPath.replace(
      "{Name}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: Name.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.FunctionVersion !== undefined) {
    bodyParams["FunctionVersion"] = input.FunctionVersion;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  if (input.RoutingConfig !== undefined) {
    bodyParams[
      "RoutingConfig"
    ] = serializeAws_restJson1_1AliasRoutingConfiguration(
      input.RoutingConfig,
      context
    );
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

export const serializeAws_restJson1_1UpdateEventSourceMappingCommand = async (
  input: UpdateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/event-source-mappings/{UUID}";
  if (input.UUID !== undefined) {
    const labelValue: string = input.UUID;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: UUID.");
    }
    resolvedPath = resolvedPath.replace(
      "{UUID}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: UUID.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.BatchSize !== undefined) {
    bodyParams["BatchSize"] = input.BatchSize;
  }
  if (input.BisectBatchOnFunctionError !== undefined) {
    bodyParams["BisectBatchOnFunctionError"] = input.BisectBatchOnFunctionError;
  }
  if (input.DestinationConfig !== undefined) {
    bodyParams["DestinationConfig"] = serializeAws_restJson1_1DestinationConfig(
      input.DestinationConfig,
      context
    );
  }
  if (input.Enabled !== undefined) {
    bodyParams["Enabled"] = input.Enabled;
  }
  if (input.FunctionName !== undefined) {
    bodyParams["FunctionName"] = input.FunctionName;
  }
  if (input.MaximumBatchingWindowInSeconds !== undefined) {
    bodyParams["MaximumBatchingWindowInSeconds"] =
      input.MaximumBatchingWindowInSeconds;
  }
  if (input.MaximumRecordAgeInSeconds !== undefined) {
    bodyParams["MaximumRecordAgeInSeconds"] = input.MaximumRecordAgeInSeconds;
  }
  if (input.MaximumRetryAttempts !== undefined) {
    bodyParams["MaximumRetryAttempts"] = input.MaximumRetryAttempts;
  }
  if (input.ParallelizationFactor !== undefined) {
    bodyParams["ParallelizationFactor"] = input.ParallelizationFactor;
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

export const serializeAws_restJson1_1UpdateFunctionCodeCommand = async (
  input: UpdateFunctionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/code";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DryRun !== undefined) {
    bodyParams["DryRun"] = input.DryRun;
  }
  if (input.Publish !== undefined) {
    bodyParams["Publish"] = input.Publish;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    bodyParams["S3Key"] = input.S3Key;
  }
  if (input.S3ObjectVersion !== undefined) {
    bodyParams["S3ObjectVersion"] = input.S3ObjectVersion;
  }
  if (input.ZipFile !== undefined) {
    bodyParams["ZipFile"] = context.base64Encoder(input.ZipFile);
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

export const serializeAws_restJson1_1UpdateFunctionConfigurationCommand = async (
  input: UpdateFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2015-03-31/functions/{FunctionName}/configuration";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DeadLetterConfig !== undefined) {
    bodyParams["DeadLetterConfig"] = serializeAws_restJson1_1DeadLetterConfig(
      input.DeadLetterConfig,
      context
    );
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Environment !== undefined) {
    bodyParams["Environment"] = serializeAws_restJson1_1Environment(
      input.Environment,
      context
    );
  }
  if (input.Handler !== undefined) {
    bodyParams["Handler"] = input.Handler;
  }
  if (input.KMSKeyArn !== undefined) {
    bodyParams["KMSKeyArn"] = input.KMSKeyArn;
  }
  if (input.Layers !== undefined) {
    bodyParams["Layers"] = serializeAws_restJson1_1LayerList(
      input.Layers,
      context
    );
  }
  if (input.MemorySize !== undefined) {
    bodyParams["MemorySize"] = input.MemorySize;
  }
  if (input.RevisionId !== undefined) {
    bodyParams["RevisionId"] = input.RevisionId;
  }
  if (input.Role !== undefined) {
    bodyParams["Role"] = input.Role;
  }
  if (input.Runtime !== undefined) {
    bodyParams["Runtime"] = input.Runtime;
  }
  if (input.Timeout !== undefined) {
    bodyParams["Timeout"] = input.Timeout;
  }
  if (input.TracingConfig !== undefined) {
    bodyParams["TracingConfig"] = serializeAws_restJson1_1TracingConfig(
      input.TracingConfig,
      context
    );
  }
  if (input.VpcConfig !== undefined) {
    bodyParams["VpcConfig"] = serializeAws_restJson1_1VpcConfig(
      input.VpcConfig,
      context
    );
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

export const serializeAws_restJson1_1UpdateFunctionEventInvokeConfigCommand = async (
  input: UpdateFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/2019-09-25/functions/{FunctionName}/event-invoke-config";
  if (input.FunctionName !== undefined) {
    const labelValue: string = input.FunctionName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: FunctionName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{FunctionName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: FunctionName.");
  }
  const query: any = {};
  if (input.Qualifier !== undefined) {
    query["Qualifier"] = input.Qualifier;
  }
  let body: any;
  const bodyParams: any = {};
  if (input.DestinationConfig !== undefined) {
    bodyParams["DestinationConfig"] = serializeAws_restJson1_1DestinationConfig(
      input.DestinationConfig,
      context
    );
  }
  if (input.MaximumEventAgeInSeconds !== undefined) {
    bodyParams["MaximumEventAgeInSeconds"] = input.MaximumEventAgeInSeconds;
  }
  if (input.MaximumRetryAttempts !== undefined) {
    bodyParams["MaximumRetryAttempts"] = input.MaximumRetryAttempts;
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
    query,
    body
  });
};

export const deserializeAws_restJson1_1AddLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddLayerVersionPermissionCommandError(
      output,
      context
    );
  }
  const contents: AddLayerVersionPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddLayerVersionPermissionResponse",
    RevisionId: undefined,
    Statement: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.Statement !== undefined && data.Statement !== null) {
    contents.Statement = data.Statement;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AddLayerVersionPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.awsgirapi#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1_1PolicyLengthExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1AddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddPermissionCommandError(output, context);
  }
  const contents: AddPermissionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AddPermissionResponse",
    Statement: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Statement !== undefined && data.Statement !== null) {
    contents.Statement = data.Statement;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AddPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.awsgirapi#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1_1PolicyLengthExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateAliasCommandError(output, context);
  }
  const contents: CreateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AliasConfiguration",
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AliasArn !== undefined && data.AliasArn !== null) {
    contents.AliasArn = data.AliasArn;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
    contents.FunctionVersion = data.FunctionVersion;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1_1AliasRoutingConfiguration(
      data.RoutingConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateEventSourceMappingCommandError(
      output,
      context
    );
  }
  const contents: CreateEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventSourceMappingConfiguration",
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    UUID: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = data.BatchSize;
  }
  if (
    data.BisectBatchOnFunctionError !== undefined &&
    data.BisectBatchOnFunctionError !== null
  ) {
    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = data.EventSourceArn;
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.LastProcessingResult !== undefined &&
    data.LastProcessingResult !== null
  ) {
    contents.LastProcessingResult = data.LastProcessingResult;
  }
  if (
    data.MaximumBatchingWindowInSeconds !== undefined &&
    data.MaximumBatchingWindowInSeconds !== null
  ) {
    contents.MaximumBatchingWindowInSeconds =
      data.MaximumBatchingWindowInSeconds;
  }
  if (
    data.MaximumRecordAgeInSeconds !== undefined &&
    data.MaximumRecordAgeInSeconds !== null
  ) {
    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  if (
    data.ParallelizationFactor !== undefined &&
    data.ParallelizationFactor !== null
  ) {
    contents.ParallelizationFactor = data.ParallelizationFactor;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (
    data.StateTransitionReason !== undefined &&
    data.StateTransitionReason !== null
  ) {
    contents.StateTransitionReason = data.StateTransitionReason;
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = data.UUID;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateFunctionCommandError(
      output,
      context
    );
  }
  const contents: CreateFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionConfiguration",
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = data.CodeSha256;
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = data.CodeSize;
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1EnvironmentResponse(
      data.Environment,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = data.FunctionName;
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = data.Handler;
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = data.KMSKeyArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = data.LastUpdateStatus;
  }
  if (
    data.LastUpdateStatusReason !== undefined &&
    data.LastUpdateStatusReason !== null
  ) {
    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
  }
  if (
    data.LastUpdateStatusReasonCode !== undefined &&
    data.LastUpdateStatusReasonCode !== null
  ) {
    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersReferenceList(
      data.Layers,
      context
    );
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = data.MasterArn;
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = data.MemorySize;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = data.Role;
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = data.Runtime;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = data.StateReason;
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = data.StateReasonCode;
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = data.Timeout;
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.awsgirapi#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteAliasCommandError(output, context);
  }
  const contents: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteEventSourceMappingCommandError(
      output,
      context
    );
  }
  const contents: DeleteEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventSourceMappingConfiguration",
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    UUID: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = data.BatchSize;
  }
  if (
    data.BisectBatchOnFunctionError !== undefined &&
    data.BisectBatchOnFunctionError !== null
  ) {
    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = data.EventSourceArn;
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.LastProcessingResult !== undefined &&
    data.LastProcessingResult !== null
  ) {
    contents.LastProcessingResult = data.LastProcessingResult;
  }
  if (
    data.MaximumBatchingWindowInSeconds !== undefined &&
    data.MaximumBatchingWindowInSeconds !== null
  ) {
    contents.MaximumBatchingWindowInSeconds =
      data.MaximumBatchingWindowInSeconds;
  }
  if (
    data.MaximumRecordAgeInSeconds !== undefined &&
    data.MaximumRecordAgeInSeconds !== null
  ) {
    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  if (
    data.ParallelizationFactor !== undefined &&
    data.ParallelizationFactor !== null
  ) {
    contents.ParallelizationFactor = data.ParallelizationFactor;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (
    data.StateTransitionReason !== undefined &&
    data.StateTransitionReason !== null
  ) {
    contents.StateTransitionReason = data.StateTransitionReason;
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = data.UUID;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.awsgirapi#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFunctionCommandError(
      output,
      context
    );
  }
  const contents: DeleteFunctionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFunctionConcurrencyCommandError(
      output,
      context
    );
  }
  const contents: DeleteFunctionConcurrencyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteFunctionEventInvokeConfigCommandError(
      output,
      context
    );
  }
  const contents: DeleteFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteLayerVersionCommandError(
      output,
      context
    );
  }
  const contents: DeleteLayerVersionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1DeleteProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteProvisionedConcurrencyConfigCommandError(
      output,
      context
    );
  }
  const contents: DeleteProvisionedConcurrencyConfigCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAccountSettingsCommandError(
      output,
      context
    );
  }
  const contents: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAccountSettingsResponse",
    AccountLimit: undefined,
    AccountUsage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountLimit !== undefined && data.AccountLimit !== null) {
    contents.AccountLimit = deserializeAws_restJson1_1AccountLimit(
      data.AccountLimit,
      context
    );
  }
  if (data.AccountUsage !== undefined && data.AccountUsage !== null) {
    contents.AccountUsage = deserializeAws_restJson1_1AccountUsage(
      data.AccountUsage,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetAliasCommandError(output, context);
  }
  const contents: GetAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AliasConfiguration",
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AliasArn !== undefined && data.AliasArn !== null) {
    contents.AliasArn = data.AliasArn;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
    contents.FunctionVersion = data.FunctionVersion;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1_1AliasRoutingConfiguration(
      data.RoutingConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetEventSourceMappingCommandError(
      output,
      context
    );
  }
  const contents: GetEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventSourceMappingConfiguration",
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    UUID: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = data.BatchSize;
  }
  if (
    data.BisectBatchOnFunctionError !== undefined &&
    data.BisectBatchOnFunctionError !== null
  ) {
    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = data.EventSourceArn;
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.LastProcessingResult !== undefined &&
    data.LastProcessingResult !== null
  ) {
    contents.LastProcessingResult = data.LastProcessingResult;
  }
  if (
    data.MaximumBatchingWindowInSeconds !== undefined &&
    data.MaximumBatchingWindowInSeconds !== null
  ) {
    contents.MaximumBatchingWindowInSeconds =
      data.MaximumBatchingWindowInSeconds;
  }
  if (
    data.MaximumRecordAgeInSeconds !== undefined &&
    data.MaximumRecordAgeInSeconds !== null
  ) {
    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  if (
    data.ParallelizationFactor !== undefined &&
    data.ParallelizationFactor !== null
  ) {
    contents.ParallelizationFactor = data.ParallelizationFactor;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (
    data.StateTransitionReason !== undefined &&
    data.StateTransitionReason !== null
  ) {
    contents.StateTransitionReason = data.StateTransitionReason;
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = data.UUID;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFunctionCommandError(output, context);
  }
  const contents: GetFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFunctionResponse",
    Code: undefined,
    Concurrency: undefined,
    Configuration: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = deserializeAws_restJson1_1FunctionCodeLocation(
      data.Code,
      context
    );
  }
  if (data.Concurrency !== undefined && data.Concurrency !== null) {
    contents.Concurrency = deserializeAws_restJson1_1Concurrency(
      data.Concurrency,
      context
    );
  }
  if (data.Configuration !== undefined && data.Configuration !== null) {
    contents.Configuration = deserializeAws_restJson1_1FunctionConfiguration(
      data.Configuration,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFunctionConcurrencyCommandError(
      output,
      context
    );
  }
  const contents: GetFunctionConcurrencyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetFunctionConcurrencyResponse",
    ReservedConcurrentExecutions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ReservedConcurrentExecutions !== undefined &&
    data.ReservedConcurrentExecutions !== null
  ) {
    contents.ReservedConcurrentExecutions = data.ReservedConcurrentExecutions;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFunctionConfigurationCommandError(
      output,
      context
    );
  }
  const contents: GetFunctionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionConfiguration",
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = data.CodeSha256;
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = data.CodeSize;
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1EnvironmentResponse(
      data.Environment,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = data.FunctionName;
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = data.Handler;
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = data.KMSKeyArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = data.LastUpdateStatus;
  }
  if (
    data.LastUpdateStatusReason !== undefined &&
    data.LastUpdateStatusReason !== null
  ) {
    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
  }
  if (
    data.LastUpdateStatusReasonCode !== undefined &&
    data.LastUpdateStatusReasonCode !== null
  ) {
    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersReferenceList(
      data.Layers,
      context
    );
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = data.MasterArn;
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = data.MemorySize;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = data.Role;
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = data.Runtime;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = data.StateReason;
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = data.StateReasonCode;
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = data.Timeout;
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFunctionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetFunctionEventInvokeConfigCommandError(
      output,
      context
    );
  }
  const contents: GetFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionEventInvokeConfig",
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.MaximumEventAgeInSeconds !== undefined &&
    data.MaximumEventAgeInSeconds !== null
  ) {
    contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLayerVersionCommandError(
      output,
      context
    );
  }
  const contents: GetLayerVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLayerVersionResponse",
    CompatibleRuntimes: undefined,
    Content: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerArn: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CompatibleRuntimes !== undefined &&
    data.CompatibleRuntimes !== null
  ) {
    contents.CompatibleRuntimes = deserializeAws_restJson1_1CompatibleRuntimes(
      data.CompatibleRuntimes,
      context
    );
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1_1LayerVersionContentOutput(
      data.Content,
      context
    );
  }
  if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
    contents.CreatedDate = data.CreatedDate;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.LayerArn !== undefined && data.LayerArn !== null) {
    contents.LayerArn = data.LayerArn;
  }
  if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
    contents.LayerVersionArn = data.LayerVersionArn;
  }
  if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
    contents.LicenseInfo = data.LicenseInfo;
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetLayerVersionByArnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLayerVersionByArnCommandError(
      output,
      context
    );
  }
  const contents: GetLayerVersionByArnCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLayerVersionResponse",
    CompatibleRuntimes: undefined,
    Content: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerArn: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CompatibleRuntimes !== undefined &&
    data.CompatibleRuntimes !== null
  ) {
    contents.CompatibleRuntimes = deserializeAws_restJson1_1CompatibleRuntimes(
      data.CompatibleRuntimes,
      context
    );
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1_1LayerVersionContentOutput(
      data.Content,
      context
    );
  }
  if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
    contents.CreatedDate = data.CreatedDate;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.LayerArn !== undefined && data.LayerArn !== null) {
    contents.LayerArn = data.LayerArn;
  }
  if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
    contents.LayerVersionArn = data.LayerVersionArn;
  }
  if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
    contents.LicenseInfo = data.LicenseInfo;
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetLayerVersionByArnCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetLayerVersionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetLayerVersionPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetLayerVersionPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetLayerVersionPolicyResponse",
    Policy: undefined,
    RevisionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetLayerVersionPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetPolicyCommandError(output, context);
  }
  const contents: GetPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPolicyResponse",
    Policy: undefined,
    RevisionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1GetProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetProvisionedConcurrencyConfigCommandError(
      output,
      context
    );
  }
  const contents: GetProvisionedConcurrencyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetProvisionedConcurrencyConfigResponse",
    AllocatedProvisionedConcurrentExecutions: undefined,
    AvailableProvisionedConcurrentExecutions: undefined,
    LastModified: undefined,
    RequestedProvisionedConcurrentExecutions: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AllocatedProvisionedConcurrentExecutions !== undefined &&
    data.AllocatedProvisionedConcurrentExecutions !== null
  ) {
    contents.AllocatedProvisionedConcurrentExecutions =
      data.AllocatedProvisionedConcurrentExecutions;
  }
  if (
    data.AvailableProvisionedConcurrentExecutions !== undefined &&
    data.AvailableProvisionedConcurrentExecutions !== null
  ) {
    contents.AvailableProvisionedConcurrentExecutions =
      data.AvailableProvisionedConcurrentExecutions;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (
    data.RequestedProvisionedConcurrentExecutions !== undefined &&
    data.RequestedProvisionedConcurrentExecutions !== null
  ) {
    contents.RequestedProvisionedConcurrentExecutions =
      data.RequestedProvisionedConcurrentExecutions;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.StatusReason !== undefined && data.StatusReason !== null) {
    contents.StatusReason = data.StatusReason;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedConcurrencyConfigNotFoundException":
    case "com.amazonaws.awsgirapi#ProvisionedConcurrencyConfigNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ProvisionedConcurrencyConfigNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1InvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InvokeCommandError(output, context);
  }
  const contents: InvokeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InvocationResponse",
    ExecutedVersion: undefined,
    FunctionError: undefined,
    LogResult: undefined,
    Payload: undefined
  };
  if (output.headers["x-amz-executed-version"] !== undefined) {
    contents.ExecutedVersion = output.headers["x-amz-executed-version"];
  }
  if (output.headers["x-amz-function-error"] !== undefined) {
    contents.FunctionError = output.headers["x-amz-function-error"];
  }
  if (output.headers["x-amz-log-result"] !== undefined) {
    contents.LogResult = output.headers["x-amz-log-result"];
  }
  const data: any = await collectBody(output.body, context);
  contents.Payload = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InvokeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EC2AccessDeniedException":
    case "com.amazonaws.awsgirapi#EC2AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1EC2AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EC2ThrottledException":
    case "com.amazonaws.awsgirapi#EC2ThrottledException":
      response = {
        ...(await deserializeAws_restJson1_1EC2ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EC2UnexpectedException":
    case "com.amazonaws.awsgirapi#EC2UnexpectedException":
      response = {
        ...(await deserializeAws_restJson1_1EC2UnexpectedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ENILimitReachedException":
    case "com.amazonaws.awsgirapi#ENILimitReachedException":
      response = {
        ...(await deserializeAws_restJson1_1ENILimitReachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestContentException":
    case "com.amazonaws.awsgirapi#InvalidRequestContentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestContentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuntimeException":
    case "com.amazonaws.awsgirapi#InvalidRuntimeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRuntimeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityGroupIDException":
    case "com.amazonaws.awsgirapi#InvalidSecurityGroupIDException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSecurityGroupIDExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetIDException":
    case "com.amazonaws.awsgirapi#InvalidSubnetIDException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidSubnetIDExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidZipFileException":
    case "com.amazonaws.awsgirapi#InvalidZipFileException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidZipFileExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.awsgirapi#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1_1KMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.awsgirapi#KMSDisabledException":
      response = {
        ...(await deserializeAws_restJson1_1KMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.awsgirapi#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_restJson1_1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.awsgirapi#KMSNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1KMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTooLargeException":
    case "com.amazonaws.awsgirapi#RequestTooLargeException":
      response = {
        ...(await deserializeAws_restJson1_1RequestTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.awsgirapi#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetIPAddressLimitReachedException":
    case "com.amazonaws.awsgirapi#SubnetIPAddressLimitReachedException":
      response = {
        ...(await deserializeAws_restJson1_1SubnetIPAddressLimitReachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.awsgirapi#UnsupportedMediaTypeException":
      response = {
        ...(await deserializeAws_restJson1_1UnsupportedMediaTypeExceptionResponse(
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

export const deserializeAws_restJson1_1InvokeAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InvokeAsyncCommandError(output, context);
  }
  const contents: InvokeAsyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InvokeAsyncResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InvokeAsyncCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestContentException":
    case "com.amazonaws.awsgirapi#InvalidRequestContentException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestContentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuntimeException":
    case "com.amazonaws.awsgirapi#InvalidRuntimeException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRuntimeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
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

export const deserializeAws_restJson1_1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListAliasesCommandError(output, context);
  }
  const contents: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAliasesResponse",
    Aliases: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Aliases !== undefined && data.Aliases !== null) {
    contents.Aliases = deserializeAws_restJson1_1AliasList(
      data.Aliases,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListEventSourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListEventSourceMappingsCommandError(
      output,
      context
    );
  }
  const contents: ListEventSourceMappingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListEventSourceMappingsResponse",
    EventSourceMappings: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.EventSourceMappings !== undefined &&
    data.EventSourceMappings !== null
  ) {
    contents.EventSourceMappings = deserializeAws_restJson1_1EventSourceMappingsList(
      data.EventSourceMappings,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListEventSourceMappingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListFunctionEventInvokeConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFunctionEventInvokeConfigsCommandError(
      output,
      context
    );
  }
  const contents: ListFunctionEventInvokeConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFunctionEventInvokeConfigsResponse",
    FunctionEventInvokeConfigs: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.FunctionEventInvokeConfigs !== undefined &&
    data.FunctionEventInvokeConfigs !== null
  ) {
    contents.FunctionEventInvokeConfigs = deserializeAws_restJson1_1FunctionEventInvokeConfigList(
      data.FunctionEventInvokeConfigs,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListFunctionEventInvokeConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListFunctionsCommandError(output, context);
  }
  const contents: ListFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFunctionsResponse",
    Functions: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Functions !== undefined && data.Functions !== null) {
    contents.Functions = deserializeAws_restJson1_1FunctionList(
      data.Functions,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListFunctionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListLayerVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListLayerVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListLayerVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLayerVersionsResponse",
    LayerVersions: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LayerVersions !== undefined && data.LayerVersions !== null) {
    contents.LayerVersions = deserializeAws_restJson1_1LayerVersionsList(
      data.LayerVersions,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListLayerVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListLayersCommandError(output, context);
  }
  const contents: ListLayersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLayersResponse",
    Layers: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersList(
      data.Layers,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListLayersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListProvisionedConcurrencyConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProvisionedConcurrencyConfigsCommandError(
      output,
      context
    );
  }
  const contents: ListProvisionedConcurrencyConfigsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProvisionedConcurrencyConfigsResponse",
    NextMarker: undefined,
    ProvisionedConcurrencyConfigs: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  if (
    data.ProvisionedConcurrencyConfigs !== undefined &&
    data.ProvisionedConcurrencyConfigs !== null
  ) {
    contents.ProvisionedConcurrencyConfigs = deserializeAws_restJson1_1ProvisionedConcurrencyConfigList(
      data.ProvisionedConcurrencyConfigs,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListProvisionedConcurrencyConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1ListVersionsByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVersionsByFunctionCommandError(
      output,
      context
    );
  }
  const contents: ListVersionsByFunctionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVersionsByFunctionResponse",
    NextMarker: undefined,
    Versions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  if (data.Versions !== undefined && data.Versions !== null) {
    contents.Versions = deserializeAws_restJson1_1FunctionList(
      data.Versions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListVersionsByFunctionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PublishLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PublishLayerVersionCommandError(
      output,
      context
    );
  }
  const contents: PublishLayerVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PublishLayerVersionResponse",
    CompatibleRuntimes: undefined,
    Content: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerArn: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.CompatibleRuntimes !== undefined &&
    data.CompatibleRuntimes !== null
  ) {
    contents.CompatibleRuntimes = deserializeAws_restJson1_1CompatibleRuntimes(
      data.CompatibleRuntimes,
      context
    );
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1_1LayerVersionContentOutput(
      data.Content,
      context
    );
  }
  if (data.CreatedDate !== undefined && data.CreatedDate !== null) {
    contents.CreatedDate = data.CreatedDate;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.LayerArn !== undefined && data.LayerArn !== null) {
    contents.LayerArn = data.LayerArn;
  }
  if (data.LayerVersionArn !== undefined && data.LayerVersionArn !== null) {
    contents.LayerVersionArn = data.LayerVersionArn;
  }
  if (data.LicenseInfo !== undefined && data.LicenseInfo !== null) {
    contents.LicenseInfo = data.LicenseInfo;
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PublishLayerVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.awsgirapi#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PublishVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PublishVersionCommandError(
      output,
      context
    );
  }
  const contents: PublishVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionConfiguration",
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = data.CodeSha256;
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = data.CodeSize;
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1EnvironmentResponse(
      data.Environment,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = data.FunctionName;
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = data.Handler;
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = data.KMSKeyArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = data.LastUpdateStatus;
  }
  if (
    data.LastUpdateStatusReason !== undefined &&
    data.LastUpdateStatusReason !== null
  ) {
    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
  }
  if (
    data.LastUpdateStatusReasonCode !== undefined &&
    data.LastUpdateStatusReasonCode !== null
  ) {
    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersReferenceList(
      data.Layers,
      context
    );
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = data.MasterArn;
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = data.MemorySize;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = data.Role;
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = data.Runtime;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = data.StateReason;
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = data.StateReasonCode;
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = data.Timeout;
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PublishVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.awsgirapi#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutFunctionConcurrencyCommandError(
      output,
      context
    );
  }
  const contents: PutFunctionConcurrencyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "Concurrency",
    ReservedConcurrentExecutions: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ReservedConcurrentExecutions !== undefined &&
    data.ReservedConcurrentExecutions !== null
  ) {
    contents.ReservedConcurrentExecutions = data.ReservedConcurrentExecutions;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutFunctionConcurrencyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutFunctionEventInvokeConfigCommandError(
      output,
      context
    );
  }
  const contents: PutFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionEventInvokeConfig",
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.MaximumEventAgeInSeconds !== undefined &&
    data.MaximumEventAgeInSeconds !== null
  ) {
    contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1PutProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutProvisionedConcurrencyConfigCommandError(
      output,
      context
    );
  }
  const contents: PutProvisionedConcurrencyConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutProvisionedConcurrencyConfigResponse",
    AllocatedProvisionedConcurrentExecutions: undefined,
    AvailableProvisionedConcurrentExecutions: undefined,
    LastModified: undefined,
    RequestedProvisionedConcurrentExecutions: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.AllocatedProvisionedConcurrentExecutions !== undefined &&
    data.AllocatedProvisionedConcurrentExecutions !== null
  ) {
    contents.AllocatedProvisionedConcurrentExecutions =
      data.AllocatedProvisionedConcurrentExecutions;
  }
  if (
    data.AvailableProvisionedConcurrentExecutions !== undefined &&
    data.AvailableProvisionedConcurrentExecutions !== null
  ) {
    contents.AvailableProvisionedConcurrentExecutions =
      data.AvailableProvisionedConcurrentExecutions;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (
    data.RequestedProvisionedConcurrentExecutions !== undefined &&
    data.RequestedProvisionedConcurrentExecutions !== null
  ) {
    contents.RequestedProvisionedConcurrentExecutions =
      data.RequestedProvisionedConcurrentExecutions;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.StatusReason !== undefined && data.StatusReason !== null) {
    contents.StatusReason = data.StatusReason;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PutProvisionedConcurrencyConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1RemoveLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveLayerVersionPermissionCommandError(
      output,
      context
    );
  }
  const contents: RemoveLayerVersionPermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RemoveLayerVersionPermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemovePermissionCommandError(
      output,
      context
    );
  }
  const contents: RemovePermissionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RemovePermissionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateAliasCommandError(output, context);
  }
  const contents: UpdateAliasCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AliasConfiguration",
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.AliasArn !== undefined && data.AliasArn !== null) {
    contents.AliasArn = data.AliasArn;
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.FunctionVersion !== undefined && data.FunctionVersion !== null) {
    contents.FunctionVersion = data.FunctionVersion;
  }
  if (data.Name !== undefined && data.Name !== null) {
    contents.Name = data.Name;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.RoutingConfig !== undefined && data.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1_1AliasRoutingConfiguration(
      data.RoutingConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateAliasCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateEventSourceMappingCommandError(
      output,
      context
    );
  }
  const contents: UpdateEventSourceMappingCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "EventSourceMappingConfiguration",
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    UUID: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BatchSize !== undefined && data.BatchSize !== null) {
    contents.BatchSize = data.BatchSize;
  }
  if (
    data.BisectBatchOnFunctionError !== undefined &&
    data.BisectBatchOnFunctionError !== null
  ) {
    contents.BisectBatchOnFunctionError = data.BisectBatchOnFunctionError;
  }
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.EventSourceArn !== undefined && data.EventSourceArn !== null) {
    contents.EventSourceArn = data.EventSourceArn;
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.LastProcessingResult !== undefined &&
    data.LastProcessingResult !== null
  ) {
    contents.LastProcessingResult = data.LastProcessingResult;
  }
  if (
    data.MaximumBatchingWindowInSeconds !== undefined &&
    data.MaximumBatchingWindowInSeconds !== null
  ) {
    contents.MaximumBatchingWindowInSeconds =
      data.MaximumBatchingWindowInSeconds;
  }
  if (
    data.MaximumRecordAgeInSeconds !== undefined &&
    data.MaximumRecordAgeInSeconds !== null
  ) {
    contents.MaximumRecordAgeInSeconds = data.MaximumRecordAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  if (
    data.ParallelizationFactor !== undefined &&
    data.ParallelizationFactor !== null
  ) {
    contents.ParallelizationFactor = data.ParallelizationFactor;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (
    data.StateTransitionReason !== undefined &&
    data.StateTransitionReason !== null
  ) {
    contents.StateTransitionReason = data.StateTransitionReason;
  }
  if (data.UUID !== undefined && data.UUID !== null) {
    contents.UUID = data.UUID;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateEventSourceMappingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.awsgirapi#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFunctionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFunctionCodeCommandError(
      output,
      context
    );
  }
  const contents: UpdateFunctionCodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionConfiguration",
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = data.CodeSha256;
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = data.CodeSize;
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1EnvironmentResponse(
      data.Environment,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = data.FunctionName;
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = data.Handler;
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = data.KMSKeyArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = data.LastUpdateStatus;
  }
  if (
    data.LastUpdateStatusReason !== undefined &&
    data.LastUpdateStatusReason !== null
  ) {
    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
  }
  if (
    data.LastUpdateStatusReasonCode !== undefined &&
    data.LastUpdateStatusReasonCode !== null
  ) {
    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersReferenceList(
      data.Layers,
      context
    );
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = data.MasterArn;
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = data.MemorySize;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = data.Role;
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = data.Runtime;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = data.StateReason;
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = data.StateReasonCode;
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = data.Timeout;
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateFunctionCodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CodeStorageExceededException":
    case "com.amazonaws.awsgirapi#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1_1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFunctionConfigurationCommandError(
      output,
      context
    );
  }
  const contents: UpdateFunctionConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionConfiguration",
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CodeSha256 !== undefined && data.CodeSha256 !== null) {
    contents.CodeSha256 = data.CodeSha256;
  }
  if (data.CodeSize !== undefined && data.CodeSize !== null) {
    contents.CodeSize = data.CodeSize;
  }
  if (data.DeadLetterConfig !== undefined && data.DeadLetterConfig !== null) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1EnvironmentResponse(
      data.Environment,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.FunctionName !== undefined && data.FunctionName !== null) {
    contents.FunctionName = data.FunctionName;
  }
  if (data.Handler !== undefined && data.Handler !== null) {
    contents.Handler = data.Handler;
  }
  if (data.KMSKeyArn !== undefined && data.KMSKeyArn !== null) {
    contents.KMSKeyArn = data.KMSKeyArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = data.LastModified;
  }
  if (data.LastUpdateStatus !== undefined && data.LastUpdateStatus !== null) {
    contents.LastUpdateStatus = data.LastUpdateStatus;
  }
  if (
    data.LastUpdateStatusReason !== undefined &&
    data.LastUpdateStatusReason !== null
  ) {
    contents.LastUpdateStatusReason = data.LastUpdateStatusReason;
  }
  if (
    data.LastUpdateStatusReasonCode !== undefined &&
    data.LastUpdateStatusReasonCode !== null
  ) {
    contents.LastUpdateStatusReasonCode = data.LastUpdateStatusReasonCode;
  }
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersReferenceList(
      data.Layers,
      context
    );
  }
  if (data.MasterArn !== undefined && data.MasterArn !== null) {
    contents.MasterArn = data.MasterArn;
  }
  if (data.MemorySize !== undefined && data.MemorySize !== null) {
    contents.MemorySize = data.MemorySize;
  }
  if (data.RevisionId !== undefined && data.RevisionId !== null) {
    contents.RevisionId = data.RevisionId;
  }
  if (data.Role !== undefined && data.Role !== null) {
    contents.Role = data.Role;
  }
  if (data.Runtime !== undefined && data.Runtime !== null) {
    contents.Runtime = data.Runtime;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StateReason !== undefined && data.StateReason !== null) {
    contents.StateReason = data.StateReason;
  }
  if (data.StateReasonCode !== undefined && data.StateReasonCode !== null) {
    contents.StateReasonCode = data.StateReasonCode;
  }
  if (data.Timeout !== undefined && data.Timeout !== null) {
    contents.Timeout = data.Timeout;
  }
  if (data.TracingConfig !== undefined && data.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateFunctionConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.awsgirapi#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1_1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.awsgirapi#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1_1UpdateFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateFunctionEventInvokeConfigCommandError(
      output,
      context
    );
  }
  const contents: UpdateFunctionEventInvokeConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "FunctionEventInvokeConfig",
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.DestinationConfig !== undefined && data.DestinationConfig !== null) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      data.DestinationConfig,
      context
    );
  }
  if (data.FunctionArn !== undefined && data.FunctionArn !== null) {
    contents.FunctionArn = data.FunctionArn;
  }
  if (data.LastModified !== undefined && data.LastModified !== null) {
    contents.LastModified = new Date(Math.round(data.LastModified * 1000));
  }
  if (
    data.MaximumEventAgeInSeconds !== undefined &&
    data.MaximumEventAgeInSeconds !== null
  ) {
    contents.MaximumEventAgeInSeconds = data.MaximumEventAgeInSeconds;
  }
  if (
    data.MaximumRetryAttempts !== undefined &&
    data.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = data.MaximumRetryAttempts;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateFunctionEventInvokeConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.awsgirapi#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.awsgirapi#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.awsgirapi#ServiceException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.awsgirapi#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1_1CodeStorageExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CodeStorageExceededException> => {
  const contents: CodeStorageExceededException = {
    name: "CodeStorageExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1EC2AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2AccessDeniedException> => {
  const contents: EC2AccessDeniedException = {
    name: "EC2AccessDeniedException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1EC2ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2ThrottledException> => {
  const contents: EC2ThrottledException = {
    name: "EC2ThrottledException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1EC2UnexpectedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EC2UnexpectedException> => {
  const contents: EC2UnexpectedException = {
    name: "EC2UnexpectedException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    EC2ErrorCode: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.EC2ErrorCode !== undefined && data.EC2ErrorCode !== null) {
    contents.EC2ErrorCode = data.EC2ErrorCode;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ENILimitReachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ENILimitReachedException> => {
  const contents: ENILimitReachedException = {
    name: "ENILimitReachedException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestContentExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestContentException> => {
  const contents: InvalidRequestContentException = {
    name: "InvalidRequestContentException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRuntimeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRuntimeException> => {
  const contents: InvalidRuntimeException = {
    name: "InvalidRuntimeException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSecurityGroupIDExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSecurityGroupIDException> => {
  const contents: InvalidSecurityGroupIDException = {
    name: "InvalidSecurityGroupIDException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidSubnetIDExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSubnetIDException> => {
  const contents: InvalidSubnetIDException = {
    name: "InvalidSubnetIDException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidZipFileExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidZipFileException> => {
  const contents: InvalidZipFileException = {
    name: "InvalidZipFileException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1KMSAccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSAccessDeniedException> => {
  const contents: KMSAccessDeniedException = {
    name: "KMSAccessDeniedException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1KMSDisabledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSDisabledException> => {
  const contents: KMSDisabledException = {
    name: "KMSDisabledException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1KMSInvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSInvalidStateException> => {
  const contents: KMSInvalidStateException = {
    name: "KMSInvalidStateException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1KMSNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<KMSNotFoundException> => {
  const contents: KMSNotFoundException = {
    name: "KMSNotFoundException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyLengthExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyLengthExceededException> => {
  const contents: PolicyLengthExceededException = {
    name: "PolicyLengthExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1PreconditionFailedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PreconditionFailedException> => {
  const contents: PreconditionFailedException = {
    name: "PreconditionFailedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ProvisionedConcurrencyConfigNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ProvisionedConcurrencyConfigNotFoundException> => {
  const contents: ProvisionedConcurrencyConfigNotFoundException = {
    name: "ProvisionedConcurrencyConfigNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestTooLargeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTooLargeException> => {
  const contents: RequestTooLargeException = {
    name: "RequestTooLargeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: ResourceConflictException = {
    name: "ResourceConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: ResourceNotReadyException = {
    name: "ResourceNotReadyException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceException> => {
  const contents: ServiceException = {
    name: "ServiceException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1SubnetIPAddressLimitReachedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SubnetIPAddressLimitReachedException> => {
  const contents: SubnetIPAddressLimitReachedException = {
    name: "SubnetIPAddressLimitReachedException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    Type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
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
    Reason: undefined,
    Type: undefined,
    message: undefined,
    retryAfterSeconds: undefined
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parsedOutput.headers["retry-after"];
  }
  const data: any = parsedOutput.body;
  if (data.Reason !== undefined && data.Reason !== null) {
    contents.Reason = data.Reason;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1UnsupportedMediaTypeExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedMediaTypeException> => {
  const contents: UnsupportedMediaTypeException = {
    name: "UnsupportedMediaTypeException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Type: undefined,
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AdditionalVersionWeights = (
  input: { [key: string]: number },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1AliasRoutingConfiguration = (
  input: AliasRoutingConfiguration,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AdditionalVersionWeights !== undefined) {
    bodyParams[
      "AdditionalVersionWeights"
    ] = serializeAws_restJson1_1AdditionalVersionWeights(
      input.AdditionalVersionWeights,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CompatibleRuntimes = (
  input: (Runtime | string)[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1DeadLetterConfig = (
  input: DeadLetterConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.TargetArn !== undefined) {
    bodyParams["TargetArn"] = input.TargetArn;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DestinationConfig = (
  input: DestinationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.OnFailure !== undefined) {
    bodyParams["OnFailure"] = serializeAws_restJson1_1OnFailure(
      input.OnFailure,
      context
    );
  }
  if (input.OnSuccess !== undefined) {
    bodyParams["OnSuccess"] = serializeAws_restJson1_1OnSuccess(
      input.OnSuccess,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1Environment = (
  input: Environment,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Variables !== undefined) {
    bodyParams["Variables"] = serializeAws_restJson1_1EnvironmentVariables(
      input.Variables,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1EnvironmentVariables = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1FunctionCode = (
  input: FunctionCode,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    bodyParams["S3Key"] = input.S3Key;
  }
  if (input.S3ObjectVersion !== undefined) {
    bodyParams["S3ObjectVersion"] = input.S3ObjectVersion;
  }
  if (input.ZipFile !== undefined) {
    bodyParams["ZipFile"] = context.base64Encoder(input.ZipFile);
  }
  return bodyParams;
};

const serializeAws_restJson1_1LayerList = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1LayerVersionContentInput = (
  input: LayerVersionContentInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3Bucket !== undefined) {
    bodyParams["S3Bucket"] = input.S3Bucket;
  }
  if (input.S3Key !== undefined) {
    bodyParams["S3Key"] = input.S3Key;
  }
  if (input.S3ObjectVersion !== undefined) {
    bodyParams["S3ObjectVersion"] = input.S3ObjectVersion;
  }
  if (input.ZipFile !== undefined) {
    bodyParams["ZipFile"] = context.base64Encoder(input.ZipFile);
  }
  return bodyParams;
};

const serializeAws_restJson1_1OnFailure = (
  input: OnFailure,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["Destination"] = input.Destination;
  }
  return bodyParams;
};

const serializeAws_restJson1_1OnSuccess = (
  input: OnSuccess,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Destination !== undefined) {
    bodyParams["Destination"] = input.Destination;
  }
  return bodyParams;
};

const serializeAws_restJson1_1SecurityGroupIds = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1SubnetIds = (
  input: string[],
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
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

const serializeAws_restJson1_1TracingConfig = (
  input: TracingConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Mode !== undefined) {
    bodyParams["Mode"] = input.Mode;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VpcConfig = (
  input: VpcConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.SecurityGroupIds !== undefined) {
    bodyParams["SecurityGroupIds"] = serializeAws_restJson1_1SecurityGroupIds(
      input.SecurityGroupIds,
      context
    );
  }
  if (input.SubnetIds !== undefined) {
    bodyParams["SubnetIds"] = serializeAws_restJson1_1SubnetIds(
      input.SubnetIds,
      context
    );
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AccountLimit = (
  output: any,
  context: __SerdeContext
): AccountLimit => {
  let contents: any = {
    __type: "AccountLimit",
    CodeSizeUnzipped: undefined,
    CodeSizeZipped: undefined,
    ConcurrentExecutions: undefined,
    TotalCodeSize: undefined,
    UnreservedConcurrentExecutions: undefined
  };
  if (
    output.CodeSizeUnzipped !== undefined &&
    output.CodeSizeUnzipped !== null
  ) {
    contents.CodeSizeUnzipped = output.CodeSizeUnzipped;
  }
  if (output.CodeSizeZipped !== undefined && output.CodeSizeZipped !== null) {
    contents.CodeSizeZipped = output.CodeSizeZipped;
  }
  if (
    output.ConcurrentExecutions !== undefined &&
    output.ConcurrentExecutions !== null
  ) {
    contents.ConcurrentExecutions = output.ConcurrentExecutions;
  }
  if (output.TotalCodeSize !== undefined && output.TotalCodeSize !== null) {
    contents.TotalCodeSize = output.TotalCodeSize;
  }
  if (
    output.UnreservedConcurrentExecutions !== undefined &&
    output.UnreservedConcurrentExecutions !== null
  ) {
    contents.UnreservedConcurrentExecutions =
      output.UnreservedConcurrentExecutions;
  }
  return contents;
};

const deserializeAws_restJson1_1AccountUsage = (
  output: any,
  context: __SerdeContext
): AccountUsage => {
  let contents: any = {
    __type: "AccountUsage",
    FunctionCount: undefined,
    TotalCodeSize: undefined
  };
  if (output.FunctionCount !== undefined && output.FunctionCount !== null) {
    contents.FunctionCount = output.FunctionCount;
  }
  if (output.TotalCodeSize !== undefined && output.TotalCodeSize !== null) {
    contents.TotalCodeSize = output.TotalCodeSize;
  }
  return contents;
};

const deserializeAws_restJson1_1AdditionalVersionWeights = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1AliasConfiguration = (
  output: any,
  context: __SerdeContext
): AliasConfiguration => {
  let contents: any = {
    __type: "AliasConfiguration",
    AliasArn: undefined,
    Description: undefined,
    FunctionVersion: undefined,
    Name: undefined,
    RevisionId: undefined,
    RoutingConfig: undefined
  };
  if (output.AliasArn !== undefined && output.AliasArn !== null) {
    contents.AliasArn = output.AliasArn;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.FunctionVersion !== undefined && output.FunctionVersion !== null) {
    contents.FunctionVersion = output.FunctionVersion;
  }
  if (output.Name !== undefined && output.Name !== null) {
    contents.Name = output.Name;
  }
  if (output.RevisionId !== undefined && output.RevisionId !== null) {
    contents.RevisionId = output.RevisionId;
  }
  if (output.RoutingConfig !== undefined && output.RoutingConfig !== null) {
    contents.RoutingConfig = deserializeAws_restJson1_1AliasRoutingConfiguration(
      output.RoutingConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1AliasList = (
  output: any,
  context: __SerdeContext
): AliasConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AliasConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1AliasRoutingConfiguration = (
  output: any,
  context: __SerdeContext
): AliasRoutingConfiguration => {
  let contents: any = {
    __type: "AliasRoutingConfiguration",
    AdditionalVersionWeights: undefined
  };
  if (
    output.AdditionalVersionWeights !== undefined &&
    output.AdditionalVersionWeights !== null
  ) {
    contents.AdditionalVersionWeights = deserializeAws_restJson1_1AdditionalVersionWeights(
      output.AdditionalVersionWeights,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CompatibleRuntimes = (
  output: any,
  context: __SerdeContext
): (Runtime | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1Concurrency = (
  output: any,
  context: __SerdeContext
): Concurrency => {
  let contents: any = {
    __type: "Concurrency",
    ReservedConcurrentExecutions: undefined
  };
  if (
    output.ReservedConcurrentExecutions !== undefined &&
    output.ReservedConcurrentExecutions !== null
  ) {
    contents.ReservedConcurrentExecutions = output.ReservedConcurrentExecutions;
  }
  return contents;
};

const deserializeAws_restJson1_1DeadLetterConfig = (
  output: any,
  context: __SerdeContext
): DeadLetterConfig => {
  let contents: any = {
    __type: "DeadLetterConfig",
    TargetArn: undefined
  };
  if (output.TargetArn !== undefined && output.TargetArn !== null) {
    contents.TargetArn = output.TargetArn;
  }
  return contents;
};

const deserializeAws_restJson1_1DestinationConfig = (
  output: any,
  context: __SerdeContext
): DestinationConfig => {
  let contents: any = {
    __type: "DestinationConfig",
    OnFailure: undefined,
    OnSuccess: undefined
  };
  if (output.OnFailure !== undefined && output.OnFailure !== null) {
    contents.OnFailure = deserializeAws_restJson1_1OnFailure(
      output.OnFailure,
      context
    );
  }
  if (output.OnSuccess !== undefined && output.OnSuccess !== null) {
    contents.OnSuccess = deserializeAws_restJson1_1OnSuccess(
      output.OnSuccess,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EnvironmentError = (
  output: any,
  context: __SerdeContext
): EnvironmentError => {
  let contents: any = {
    __type: "EnvironmentError",
    ErrorCode: undefined,
    Message: undefined
  };
  if (output.ErrorCode !== undefined && output.ErrorCode !== null) {
    contents.ErrorCode = output.ErrorCode;
  }
  if (output.Message !== undefined && output.Message !== null) {
    contents.Message = output.Message;
  }
  return contents;
};

const deserializeAws_restJson1_1EnvironmentResponse = (
  output: any,
  context: __SerdeContext
): EnvironmentResponse => {
  let contents: any = {
    __type: "EnvironmentResponse",
    Error: undefined,
    Variables: undefined
  };
  if (output.Error !== undefined && output.Error !== null) {
    contents.Error = deserializeAws_restJson1_1EnvironmentError(
      output.Error,
      context
    );
  }
  if (output.Variables !== undefined && output.Variables !== null) {
    contents.Variables = deserializeAws_restJson1_1EnvironmentVariables(
      output.Variables,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1EventSourceMappingConfiguration = (
  output: any,
  context: __SerdeContext
): EventSourceMappingConfiguration => {
  let contents: any = {
    __type: "EventSourceMappingConfiguration",
    BatchSize: undefined,
    BisectBatchOnFunctionError: undefined,
    DestinationConfig: undefined,
    EventSourceArn: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    LastProcessingResult: undefined,
    MaximumBatchingWindowInSeconds: undefined,
    MaximumRecordAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined,
    ParallelizationFactor: undefined,
    State: undefined,
    StateTransitionReason: undefined,
    UUID: undefined
  };
  if (output.BatchSize !== undefined && output.BatchSize !== null) {
    contents.BatchSize = output.BatchSize;
  }
  if (
    output.BisectBatchOnFunctionError !== undefined &&
    output.BisectBatchOnFunctionError !== null
  ) {
    contents.BisectBatchOnFunctionError = output.BisectBatchOnFunctionError;
  }
  if (
    output.DestinationConfig !== undefined &&
    output.DestinationConfig !== null
  ) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      output.DestinationConfig,
      context
    );
  }
  if (output.EventSourceArn !== undefined && output.EventSourceArn !== null) {
    contents.EventSourceArn = output.EventSourceArn;
  }
  if (output.FunctionArn !== undefined && output.FunctionArn !== null) {
    contents.FunctionArn = output.FunctionArn;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = new Date(Math.round(output.LastModified * 1000));
  }
  if (
    output.LastProcessingResult !== undefined &&
    output.LastProcessingResult !== null
  ) {
    contents.LastProcessingResult = output.LastProcessingResult;
  }
  if (
    output.MaximumBatchingWindowInSeconds !== undefined &&
    output.MaximumBatchingWindowInSeconds !== null
  ) {
    contents.MaximumBatchingWindowInSeconds =
      output.MaximumBatchingWindowInSeconds;
  }
  if (
    output.MaximumRecordAgeInSeconds !== undefined &&
    output.MaximumRecordAgeInSeconds !== null
  ) {
    contents.MaximumRecordAgeInSeconds = output.MaximumRecordAgeInSeconds;
  }
  if (
    output.MaximumRetryAttempts !== undefined &&
    output.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = output.MaximumRetryAttempts;
  }
  if (
    output.ParallelizationFactor !== undefined &&
    output.ParallelizationFactor !== null
  ) {
    contents.ParallelizationFactor = output.ParallelizationFactor;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (
    output.StateTransitionReason !== undefined &&
    output.StateTransitionReason !== null
  ) {
    contents.StateTransitionReason = output.StateTransitionReason;
  }
  if (output.UUID !== undefined && output.UUID !== null) {
    contents.UUID = output.UUID;
  }
  return contents;
};

const deserializeAws_restJson1_1EventSourceMappingsList = (
  output: any,
  context: __SerdeContext
): EventSourceMappingConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1EventSourceMappingConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1FunctionCodeLocation = (
  output: any,
  context: __SerdeContext
): FunctionCodeLocation => {
  let contents: any = {
    __type: "FunctionCodeLocation",
    Location: undefined,
    RepositoryType: undefined
  };
  if (output.Location !== undefined && output.Location !== null) {
    contents.Location = output.Location;
  }
  if (output.RepositoryType !== undefined && output.RepositoryType !== null) {
    contents.RepositoryType = output.RepositoryType;
  }
  return contents;
};

const deserializeAws_restJson1_1FunctionConfiguration = (
  output: any,
  context: __SerdeContext
): FunctionConfiguration => {
  let contents: any = {
    __type: "FunctionConfiguration",
    CodeSha256: undefined,
    CodeSize: undefined,
    DeadLetterConfig: undefined,
    Description: undefined,
    Environment: undefined,
    FunctionArn: undefined,
    FunctionName: undefined,
    Handler: undefined,
    KMSKeyArn: undefined,
    LastModified: undefined,
    LastUpdateStatus: undefined,
    LastUpdateStatusReason: undefined,
    LastUpdateStatusReasonCode: undefined,
    Layers: undefined,
    MasterArn: undefined,
    MemorySize: undefined,
    RevisionId: undefined,
    Role: undefined,
    Runtime: undefined,
    State: undefined,
    StateReason: undefined,
    StateReasonCode: undefined,
    Timeout: undefined,
    TracingConfig: undefined,
    Version: undefined,
    VpcConfig: undefined
  };
  if (output.CodeSha256 !== undefined && output.CodeSha256 !== null) {
    contents.CodeSha256 = output.CodeSha256;
  }
  if (output.CodeSize !== undefined && output.CodeSize !== null) {
    contents.CodeSize = output.CodeSize;
  }
  if (
    output.DeadLetterConfig !== undefined &&
    output.DeadLetterConfig !== null
  ) {
    contents.DeadLetterConfig = deserializeAws_restJson1_1DeadLetterConfig(
      output.DeadLetterConfig,
      context
    );
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.Environment !== undefined && output.Environment !== null) {
    contents.Environment = deserializeAws_restJson1_1EnvironmentResponse(
      output.Environment,
      context
    );
  }
  if (output.FunctionArn !== undefined && output.FunctionArn !== null) {
    contents.FunctionArn = output.FunctionArn;
  }
  if (output.FunctionName !== undefined && output.FunctionName !== null) {
    contents.FunctionName = output.FunctionName;
  }
  if (output.Handler !== undefined && output.Handler !== null) {
    contents.Handler = output.Handler;
  }
  if (output.KMSKeyArn !== undefined && output.KMSKeyArn !== null) {
    contents.KMSKeyArn = output.KMSKeyArn;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = output.LastModified;
  }
  if (
    output.LastUpdateStatus !== undefined &&
    output.LastUpdateStatus !== null
  ) {
    contents.LastUpdateStatus = output.LastUpdateStatus;
  }
  if (
    output.LastUpdateStatusReason !== undefined &&
    output.LastUpdateStatusReason !== null
  ) {
    contents.LastUpdateStatusReason = output.LastUpdateStatusReason;
  }
  if (
    output.LastUpdateStatusReasonCode !== undefined &&
    output.LastUpdateStatusReasonCode !== null
  ) {
    contents.LastUpdateStatusReasonCode = output.LastUpdateStatusReasonCode;
  }
  if (output.Layers !== undefined && output.Layers !== null) {
    contents.Layers = deserializeAws_restJson1_1LayersReferenceList(
      output.Layers,
      context
    );
  }
  if (output.MasterArn !== undefined && output.MasterArn !== null) {
    contents.MasterArn = output.MasterArn;
  }
  if (output.MemorySize !== undefined && output.MemorySize !== null) {
    contents.MemorySize = output.MemorySize;
  }
  if (output.RevisionId !== undefined && output.RevisionId !== null) {
    contents.RevisionId = output.RevisionId;
  }
  if (output.Role !== undefined && output.Role !== null) {
    contents.Role = output.Role;
  }
  if (output.Runtime !== undefined && output.Runtime !== null) {
    contents.Runtime = output.Runtime;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.StateReason !== undefined && output.StateReason !== null) {
    contents.StateReason = output.StateReason;
  }
  if (output.StateReasonCode !== undefined && output.StateReasonCode !== null) {
    contents.StateReasonCode = output.StateReasonCode;
  }
  if (output.Timeout !== undefined && output.Timeout !== null) {
    contents.Timeout = output.Timeout;
  }
  if (output.TracingConfig !== undefined && output.TracingConfig !== null) {
    contents.TracingConfig = deserializeAws_restJson1_1TracingConfigResponse(
      output.TracingConfig,
      context
    );
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  if (output.VpcConfig !== undefined && output.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1_1VpcConfigResponse(
      output.VpcConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1FunctionEventInvokeConfig = (
  output: any,
  context: __SerdeContext
): FunctionEventInvokeConfig => {
  let contents: any = {
    __type: "FunctionEventInvokeConfig",
    DestinationConfig: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    MaximumEventAgeInSeconds: undefined,
    MaximumRetryAttempts: undefined
  };
  if (
    output.DestinationConfig !== undefined &&
    output.DestinationConfig !== null
  ) {
    contents.DestinationConfig = deserializeAws_restJson1_1DestinationConfig(
      output.DestinationConfig,
      context
    );
  }
  if (output.FunctionArn !== undefined && output.FunctionArn !== null) {
    contents.FunctionArn = output.FunctionArn;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = new Date(Math.round(output.LastModified * 1000));
  }
  if (
    output.MaximumEventAgeInSeconds !== undefined &&
    output.MaximumEventAgeInSeconds !== null
  ) {
    contents.MaximumEventAgeInSeconds = output.MaximumEventAgeInSeconds;
  }
  if (
    output.MaximumRetryAttempts !== undefined &&
    output.MaximumRetryAttempts !== null
  ) {
    contents.MaximumRetryAttempts = output.MaximumRetryAttempts;
  }
  return contents;
};

const deserializeAws_restJson1_1FunctionEventInvokeConfigList = (
  output: any,
  context: __SerdeContext
): FunctionEventInvokeConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FunctionEventInvokeConfig(entry, context)
  );
};

const deserializeAws_restJson1_1FunctionList = (
  output: any,
  context: __SerdeContext
): FunctionConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1FunctionConfiguration(entry, context)
  );
};

const deserializeAws_restJson1_1Layer = (
  output: any,
  context: __SerdeContext
): Layer => {
  let contents: any = {
    __type: "Layer",
    Arn: undefined,
    CodeSize: undefined
  };
  if (output.Arn !== undefined && output.Arn !== null) {
    contents.Arn = output.Arn;
  }
  if (output.CodeSize !== undefined && output.CodeSize !== null) {
    contents.CodeSize = output.CodeSize;
  }
  return contents;
};

const deserializeAws_restJson1_1LayerVersionContentOutput = (
  output: any,
  context: __SerdeContext
): LayerVersionContentOutput => {
  let contents: any = {
    __type: "LayerVersionContentOutput",
    CodeSha256: undefined,
    CodeSize: undefined,
    Location: undefined
  };
  if (output.CodeSha256 !== undefined && output.CodeSha256 !== null) {
    contents.CodeSha256 = output.CodeSha256;
  }
  if (output.CodeSize !== undefined && output.CodeSize !== null) {
    contents.CodeSize = output.CodeSize;
  }
  if (output.Location !== undefined && output.Location !== null) {
    contents.Location = output.Location;
  }
  return contents;
};

const deserializeAws_restJson1_1LayerVersionsList = (
  output: any,
  context: __SerdeContext
): LayerVersionsListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LayerVersionsListItem(entry, context)
  );
};

const deserializeAws_restJson1_1LayerVersionsListItem = (
  output: any,
  context: __SerdeContext
): LayerVersionsListItem => {
  let contents: any = {
    __type: "LayerVersionsListItem",
    CompatibleRuntimes: undefined,
    CreatedDate: undefined,
    Description: undefined,
    LayerVersionArn: undefined,
    LicenseInfo: undefined,
    Version: undefined
  };
  if (
    output.CompatibleRuntimes !== undefined &&
    output.CompatibleRuntimes !== null
  ) {
    contents.CompatibleRuntimes = deserializeAws_restJson1_1CompatibleRuntimes(
      output.CompatibleRuntimes,
      context
    );
  }
  if (output.CreatedDate !== undefined && output.CreatedDate !== null) {
    contents.CreatedDate = output.CreatedDate;
  }
  if (output.Description !== undefined && output.Description !== null) {
    contents.Description = output.Description;
  }
  if (output.LayerVersionArn !== undefined && output.LayerVersionArn !== null) {
    contents.LayerVersionArn = output.LayerVersionArn;
  }
  if (output.LicenseInfo !== undefined && output.LicenseInfo !== null) {
    contents.LicenseInfo = output.LicenseInfo;
  }
  if (output.Version !== undefined && output.Version !== null) {
    contents.Version = output.Version;
  }
  return contents;
};

const deserializeAws_restJson1_1LayersList = (
  output: any,
  context: __SerdeContext
): LayersListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1LayersListItem(entry, context)
  );
};

const deserializeAws_restJson1_1LayersListItem = (
  output: any,
  context: __SerdeContext
): LayersListItem => {
  let contents: any = {
    __type: "LayersListItem",
    LatestMatchingVersion: undefined,
    LayerArn: undefined,
    LayerName: undefined
  };
  if (
    output.LatestMatchingVersion !== undefined &&
    output.LatestMatchingVersion !== null
  ) {
    contents.LatestMatchingVersion = deserializeAws_restJson1_1LayerVersionsListItem(
      output.LatestMatchingVersion,
      context
    );
  }
  if (output.LayerArn !== undefined && output.LayerArn !== null) {
    contents.LayerArn = output.LayerArn;
  }
  if (output.LayerName !== undefined && output.LayerName !== null) {
    contents.LayerName = output.LayerName;
  }
  return contents;
};

const deserializeAws_restJson1_1LayersReferenceList = (
  output: any,
  context: __SerdeContext
): Layer[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Layer(entry, context)
  );
};

const deserializeAws_restJson1_1OnFailure = (
  output: any,
  context: __SerdeContext
): OnFailure => {
  let contents: any = {
    __type: "OnFailure",
    Destination: undefined
  };
  if (output.Destination !== undefined && output.Destination !== null) {
    contents.Destination = output.Destination;
  }
  return contents;
};

const deserializeAws_restJson1_1OnSuccess = (
  output: any,
  context: __SerdeContext
): OnSuccess => {
  let contents: any = {
    __type: "OnSuccess",
    Destination: undefined
  };
  if (output.Destination !== undefined && output.Destination !== null) {
    contents.Destination = output.Destination;
  }
  return contents;
};

const deserializeAws_restJson1_1ProvisionedConcurrencyConfigList = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProvisionedConcurrencyConfigListItem(
      entry,
      context
    )
  );
};

const deserializeAws_restJson1_1ProvisionedConcurrencyConfigListItem = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem => {
  let contents: any = {
    __type: "ProvisionedConcurrencyConfigListItem",
    AllocatedProvisionedConcurrentExecutions: undefined,
    AvailableProvisionedConcurrentExecutions: undefined,
    FunctionArn: undefined,
    LastModified: undefined,
    RequestedProvisionedConcurrentExecutions: undefined,
    Status: undefined,
    StatusReason: undefined
  };
  if (
    output.AllocatedProvisionedConcurrentExecutions !== undefined &&
    output.AllocatedProvisionedConcurrentExecutions !== null
  ) {
    contents.AllocatedProvisionedConcurrentExecutions =
      output.AllocatedProvisionedConcurrentExecutions;
  }
  if (
    output.AvailableProvisionedConcurrentExecutions !== undefined &&
    output.AvailableProvisionedConcurrentExecutions !== null
  ) {
    contents.AvailableProvisionedConcurrentExecutions =
      output.AvailableProvisionedConcurrentExecutions;
  }
  if (output.FunctionArn !== undefined && output.FunctionArn !== null) {
    contents.FunctionArn = output.FunctionArn;
  }
  if (output.LastModified !== undefined && output.LastModified !== null) {
    contents.LastModified = output.LastModified;
  }
  if (
    output.RequestedProvisionedConcurrentExecutions !== undefined &&
    output.RequestedProvisionedConcurrentExecutions !== null
  ) {
    contents.RequestedProvisionedConcurrentExecutions =
      output.RequestedProvisionedConcurrentExecutions;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusReason !== undefined && output.StatusReason !== null) {
    contents.StatusReason = output.StatusReason;
  }
  return contents;
};

const deserializeAws_restJson1_1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1SubnetIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
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

const deserializeAws_restJson1_1TracingConfigResponse = (
  output: any,
  context: __SerdeContext
): TracingConfigResponse => {
  let contents: any = {
    __type: "TracingConfigResponse",
    Mode: undefined
  };
  if (output.Mode !== undefined && output.Mode !== null) {
    contents.Mode = output.Mode;
  }
  return contents;
};

const deserializeAws_restJson1_1VpcConfigResponse = (
  output: any,
  context: __SerdeContext
): VpcConfigResponse => {
  let contents: any = {
    __type: "VpcConfigResponse",
    SecurityGroupIds: undefined,
    SubnetIds: undefined,
    VpcId: undefined
  };
  if (
    output.SecurityGroupIds !== undefined &&
    output.SecurityGroupIds !== null
  ) {
    contents.SecurityGroupIds = deserializeAws_restJson1_1SecurityGroupIds(
      output.SecurityGroupIds,
      context
    );
  }
  if (output.SubnetIds !== undefined && output.SubnetIds !== null) {
    contents.SubnetIds = deserializeAws_restJson1_1SubnetIds(
      output.SubnetIds,
      context
    );
  }
  if (output.VpcId !== undefined && output.VpcId !== null) {
    contents.VpcId = output.VpcId;
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
