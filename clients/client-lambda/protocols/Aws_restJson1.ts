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

export const serializeAws_restJson1AddLayerVersionPermissionCommand = async (
  input: AddLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const query: any = {
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.OrganizationId !== undefined && {
      OrganizationId: input.OrganizationId
    }),
    ...(input.Principal !== undefined && { Principal: input.Principal }),
    ...(input.StatementId !== undefined && { StatementId: input.StatementId })
  });
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

export const serializeAws_restJson1AddPermissionCommand = async (
  input: AddPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Action !== undefined && { Action: input.Action }),
    ...(input.EventSourceToken !== undefined && {
      EventSourceToken: input.EventSourceToken
    }),
    ...(input.Principal !== undefined && { Principal: input.Principal }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
    ...(input.SourceAccount !== undefined && {
      SourceAccount: input.SourceAccount
    }),
    ...(input.SourceArn !== undefined && { SourceArn: input.SourceArn }),
    ...(input.StatementId !== undefined && { StatementId: input.StatementId })
  });
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

export const serializeAws_restJson1CreateAliasCommand = async (
  input: CreateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.FunctionVersion !== undefined && {
      FunctionVersion: input.FunctionVersion
    }),
    ...(input.Name !== undefined && { Name: input.Name }),
    ...(input.RoutingConfig !== undefined && {
      RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(
        input.RoutingConfig,
        context
      )
    })
  });
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

export const serializeAws_restJson1CreateEventSourceMappingCommand = async (
  input: CreateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-03-31/event-source-mappings";
  let body: any;
  body = JSON.stringify({
    ...(input.BatchSize !== undefined && { BatchSize: input.BatchSize }),
    ...(input.BisectBatchOnFunctionError !== undefined && {
      BisectBatchOnFunctionError: input.BisectBatchOnFunctionError
    }),
    ...(input.DestinationConfig !== undefined && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(
        input.DestinationConfig,
        context
      )
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.EventSourceArn !== undefined && {
      EventSourceArn: input.EventSourceArn
    }),
    ...(input.FunctionName !== undefined && {
      FunctionName: input.FunctionName
    }),
    ...(input.MaximumBatchingWindowInSeconds !== undefined && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds
    }),
    ...(input.MaximumRecordAgeInSeconds !== undefined && {
      MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds
    }),
    ...(input.MaximumRetryAttempts !== undefined && {
      MaximumRetryAttempts: input.MaximumRetryAttempts
    }),
    ...(input.ParallelizationFactor !== undefined && {
      ParallelizationFactor: input.ParallelizationFactor
    }),
    ...(input.StartingPosition !== undefined && {
      StartingPosition: input.StartingPosition
    }),
    ...(input.StartingPositionTimestamp !== undefined && {
      StartingPositionTimestamp: Math.round(
        input.StartingPositionTimestamp.getTime() / 1000
      )
    })
  });
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

export const serializeAws_restJson1CreateFunctionCommand = async (
  input: CreateFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/2015-03-31/functions";
  let body: any;
  body = JSON.stringify({
    ...(input.Code !== undefined && {
      Code: serializeAws_restJson1FunctionCode(input.Code, context)
    }),
    ...(input.DeadLetterConfig !== undefined && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(
        input.DeadLetterConfig,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Environment !== undefined && {
      Environment: serializeAws_restJson1Environment(input.Environment, context)
    }),
    ...(input.FunctionName !== undefined && {
      FunctionName: input.FunctionName
    }),
    ...(input.Handler !== undefined && { Handler: input.Handler }),
    ...(input.KMSKeyArn !== undefined && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Layers !== undefined && {
      Layers: serializeAws_restJson1LayerList(input.Layers, context)
    }),
    ...(input.MemorySize !== undefined && { MemorySize: input.MemorySize }),
    ...(input.Publish !== undefined && { Publish: input.Publish }),
    ...(input.Role !== undefined && { Role: input.Role }),
    ...(input.Runtime !== undefined && { Runtime: input.Runtime }),
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
    }),
    ...(input.Timeout !== undefined && { Timeout: input.Timeout }),
    ...(input.TracingConfig !== undefined && {
      TracingConfig: serializeAws_restJson1TracingConfig(
        input.TracingConfig,
        context
      )
    }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context)
    })
  });
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

export const serializeAws_restJson1DeleteAliasCommand = async (
  input: DeleteAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DeleteEventSourceMappingCommand = async (
  input: DeleteEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DeleteFunctionCommand = async (
  input: DeleteFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1DeleteFunctionConcurrencyCommand = async (
  input: DeleteFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = async (
  input: DeleteFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1DeleteLayerVersionCommand = async (
  input: DeleteLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = async (
  input: DeleteProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1GetAliasCommand = async (
  input: GetAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1GetEventSourceMappingCommand = async (
  input: GetEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1GetFunctionCommand = async (
  input: GetFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1GetFunctionConcurrencyCommand = async (
  input: GetFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1GetFunctionConfigurationCommand = async (
  input: GetFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1GetFunctionEventInvokeConfigCommand = async (
  input: GetFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1GetLayerVersionCommand = async (
  input: GetLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1GetLayerVersionByArnCommand = async (
  input: GetLayerVersionByArnCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2018-10-31/layers";
  const query: any = {
    find: "LayerVersion",
    ...(input.Arn !== undefined && { Arn: input.Arn })
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
    body
  });
};

export const serializeAws_restJson1GetLayerVersionPolicyCommand = async (
  input: GetLayerVersionPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1GetPolicyCommand = async (
  input: GetPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1GetProvisionedConcurrencyConfigCommand = async (
  input: GetProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
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
    body
  });
};

export const serializeAws_restJson1InvokeCommand = async (
  input: InvokeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.ClientContext) && {
      "X-Amz-Client-Context": input.ClientContext!
    }),
    ...(isSerializableHeaderValue(input.InvocationType) && {
      "X-Amz-Invocation-Type": input.InvocationType!
    }),
    ...(isSerializableHeaderValue(input.LogType) && {
      "X-Amz-Log-Type": input.LogType!
    })
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
  };
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

export const serializeAws_restJson1InvokeAsyncCommand = async (
  input: InvokeAsyncCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream"
  };
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

export const serializeAws_restJson1ListAliasesCommand = async (
  input: ListAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.FunctionVersion !== undefined && {
      FunctionVersion: input.FunctionVersion
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListEventSourceMappingsCommand = async (
  input: ListEventSourceMappingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-03-31/event-source-mappings";
  const query: any = {
    ...(input.EventSourceArn !== undefined && {
      EventSourceArn: input.EventSourceArn
    }),
    ...(input.FunctionName !== undefined && {
      FunctionName: input.FunctionName
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListFunctionEventInvokeConfigsCommand = async (
  input: ListFunctionEventInvokeConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListFunctionsCommand = async (
  input: ListFunctionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2015-03-31/functions";
  const query: any = {
    ...(input.FunctionVersion !== undefined && {
      FunctionVersion: input.FunctionVersion
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MasterRegion !== undefined && {
      MasterRegion: input.MasterRegion
    }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListLayersCommand = async (
  input: ListLayersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/2018-10-31/layers";
  const query: any = {
    ...(input.CompatibleRuntime !== undefined && {
      CompatibleRuntime: input.CompatibleRuntime
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListLayerVersionsCommand = async (
  input: ListLayerVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.CompatibleRuntime !== undefined && {
      CompatibleRuntime: input.CompatibleRuntime
    }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = async (
  input: ListProvisionedConcurrencyConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
    List: "ALL",
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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

export const serializeAws_restJson1ListVersionsByFunctionCommand = async (
  input: ListVersionsByFunctionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.MaxItems !== undefined && { MaxItems: input.MaxItems.toString() })
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
    body
  });
};

export const serializeAws_restJson1PublishLayerVersionCommand = async (
  input: PublishLayerVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.CompatibleRuntimes !== undefined && {
      CompatibleRuntimes: serializeAws_restJson1CompatibleRuntimes(
        input.CompatibleRuntimes,
        context
      )
    }),
    ...(input.Content !== undefined && {
      Content: serializeAws_restJson1LayerVersionContentInput(
        input.Content,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.LicenseInfo !== undefined && { LicenseInfo: input.LicenseInfo })
  });
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

export const serializeAws_restJson1PublishVersionCommand = async (
  input: PublishVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.CodeSha256 !== undefined && { CodeSha256: input.CodeSha256 }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId })
  });
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

export const serializeAws_restJson1PutFunctionConcurrencyCommand = async (
  input: PutFunctionConcurrencyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.ReservedConcurrentExecutions !== undefined && {
      ReservedConcurrentExecutions: input.ReservedConcurrentExecutions
    })
  });
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

export const serializeAws_restJson1PutFunctionEventInvokeConfigCommand = async (
  input: PutFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationConfig !== undefined && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(
        input.DestinationConfig,
        context
      )
    }),
    ...(input.MaximumEventAgeInSeconds !== undefined && {
      MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds
    }),
    ...(input.MaximumRetryAttempts !== undefined && {
      MaximumRetryAttempts: input.MaximumRetryAttempts
    })
  });
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

export const serializeAws_restJson1PutProvisionedConcurrencyConfigCommand = async (
  input: PutProvisionedConcurrencyConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.ProvisionedConcurrentExecutions !== undefined && {
      ProvisionedConcurrentExecutions: input.ProvisionedConcurrentExecutions
    })
  });
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

export const serializeAws_restJson1RemoveLayerVersionPermissionCommand = async (
  input: RemoveLayerVersionPermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId })
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
    body
  });
};

export const serializeAws_restJson1RemovePermissionCommand = async (
  input: RemovePermissionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId })
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
    body
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1Tags(input.Tags, context)
    })
  });
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
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
  const query: any = {
    ...(input.TagKeys !== undefined && {
      tagKeys: (input.TagKeys || []).map(_entry => _entry)
    })
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
    body
  });
};

export const serializeAws_restJson1UpdateAliasCommand = async (
  input: UpdateAliasCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.FunctionVersion !== undefined && {
      FunctionVersion: input.FunctionVersion
    }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
    ...(input.RoutingConfig !== undefined && {
      RoutingConfig: serializeAws_restJson1AliasRoutingConfiguration(
        input.RoutingConfig,
        context
      )
    })
  });
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

export const serializeAws_restJson1UpdateEventSourceMappingCommand = async (
  input: UpdateEventSourceMappingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.BatchSize !== undefined && { BatchSize: input.BatchSize }),
    ...(input.BisectBatchOnFunctionError !== undefined && {
      BisectBatchOnFunctionError: input.BisectBatchOnFunctionError
    }),
    ...(input.DestinationConfig !== undefined && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(
        input.DestinationConfig,
        context
      )
    }),
    ...(input.Enabled !== undefined && { Enabled: input.Enabled }),
    ...(input.FunctionName !== undefined && {
      FunctionName: input.FunctionName
    }),
    ...(input.MaximumBatchingWindowInSeconds !== undefined && {
      MaximumBatchingWindowInSeconds: input.MaximumBatchingWindowInSeconds
    }),
    ...(input.MaximumRecordAgeInSeconds !== undefined && {
      MaximumRecordAgeInSeconds: input.MaximumRecordAgeInSeconds
    }),
    ...(input.MaximumRetryAttempts !== undefined && {
      MaximumRetryAttempts: input.MaximumRetryAttempts
    }),
    ...(input.ParallelizationFactor !== undefined && {
      ParallelizationFactor: input.ParallelizationFactor
    })
  });
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

export const serializeAws_restJson1UpdateFunctionCodeCommand = async (
  input: UpdateFunctionCodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.DryRun !== undefined && { DryRun: input.DryRun }),
    ...(input.Publish !== undefined && { Publish: input.Publish }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion !== undefined && {
      S3ObjectVersion: input.S3ObjectVersion
    }),
    ...(input.ZipFile !== undefined && {
      ZipFile: context.base64Encoder(input.ZipFile)
    })
  });
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

export const serializeAws_restJson1UpdateFunctionConfigurationCommand = async (
  input: UpdateFunctionConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  body = JSON.stringify({
    ...(input.DeadLetterConfig !== undefined && {
      DeadLetterConfig: serializeAws_restJson1DeadLetterConfig(
        input.DeadLetterConfig,
        context
      )
    }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Environment !== undefined && {
      Environment: serializeAws_restJson1Environment(input.Environment, context)
    }),
    ...(input.Handler !== undefined && { Handler: input.Handler }),
    ...(input.KMSKeyArn !== undefined && { KMSKeyArn: input.KMSKeyArn }),
    ...(input.Layers !== undefined && {
      Layers: serializeAws_restJson1LayerList(input.Layers, context)
    }),
    ...(input.MemorySize !== undefined && { MemorySize: input.MemorySize }),
    ...(input.RevisionId !== undefined && { RevisionId: input.RevisionId }),
    ...(input.Role !== undefined && { Role: input.Role }),
    ...(input.Runtime !== undefined && { Runtime: input.Runtime }),
    ...(input.Timeout !== undefined && { Timeout: input.Timeout }),
    ...(input.TracingConfig !== undefined && {
      TracingConfig: serializeAws_restJson1TracingConfig(
        input.TracingConfig,
        context
      )
    }),
    ...(input.VpcConfig !== undefined && {
      VpcConfig: serializeAws_restJson1VpcConfig(input.VpcConfig, context)
    })
  });
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

export const serializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = async (
  input: UpdateFunctionEventInvokeConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
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
  const query: any = {
    ...(input.Qualifier !== undefined && { Qualifier: input.Qualifier })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationConfig !== undefined && {
      DestinationConfig: serializeAws_restJson1DestinationConfig(
        input.DestinationConfig,
        context
      )
    }),
    ...(input.MaximumEventAgeInSeconds !== undefined && {
      MaximumEventAgeInSeconds: input.MaximumEventAgeInSeconds
    }),
    ...(input.MaximumRetryAttempts !== undefined && {
      MaximumRetryAttempts: input.MaximumRetryAttempts
    })
  });
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

export const deserializeAws_restJson1AddLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1AddLayerVersionPermissionCommandError(
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

const deserializeAws_restJson1AddLayerVersionPermissionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.lambda#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1PolicyLengthExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1AddPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddPermissionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1AddPermissionCommandError(output, context);
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

const deserializeAws_restJson1AddPermissionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyLengthExceededException":
    case "com.amazonaws.lambda#PolicyLengthExceededException":
      response = {
        ...(await deserializeAws_restJson1PolicyLengthExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAliasCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateAliasCommandError(output, context);
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
    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(
      data.RoutingConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateAliasCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateEventSourceMappingCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1CreateEventSourceMappingCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1CreateFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFunctionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateFunctionCommandError(output, context);
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
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(
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
    contents.Layers = deserializeAws_restJson1LayersReferenceList(
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
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateFunctionCommandError = async (
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
    case "com.amazonaws.lambda#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAliasCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteAliasCommandError(output, context);
  }
  const contents: DeleteAliasCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteAliasCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteEventSourceMappingCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1DeleteEventSourceMappingCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFunctionCommandError(output, context);
  }
  const contents: DeleteFunctionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteFunctionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFunctionConcurrencyCommandError(
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

const deserializeAws_restJson1DeleteFunctionConcurrencyCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError(
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

const deserializeAws_restJson1DeleteFunctionEventInvokeConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLayerVersionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteLayerVersionCommandError(
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

const deserializeAws_restJson1DeleteLayerVersionCommandError = async (
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
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError(
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

const deserializeAws_restJson1DeleteProvisionedConcurrencyConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAccountSettingsCommandError(
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
    contents.AccountLimit = deserializeAws_restJson1AccountLimit(
      data.AccountLimit,
      context
    );
  }
  if (data.AccountUsage !== undefined && data.AccountUsage !== null) {
    contents.AccountUsage = deserializeAws_restJson1AccountUsage(
      data.AccountUsage,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAccountSettingsCommandError = async (
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
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAliasCommandError(output, context);
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
    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(
      data.RoutingConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAliasCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetEventSourceMappingCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1GetEventSourceMappingCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFunctionCommandError(output, context);
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
    contents.Code = deserializeAws_restJson1FunctionCodeLocation(
      data.Code,
      context
    );
  }
  if (data.Concurrency !== undefined && data.Concurrency !== null) {
    contents.Concurrency = deserializeAws_restJson1Concurrency(
      data.Concurrency,
      context
    );
  }
  if (data.Configuration !== undefined && data.Configuration !== null) {
    contents.Configuration = deserializeAws_restJson1FunctionConfiguration(
      data.Configuration,
      context
    );
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFunctionConcurrencyCommandError(
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

const deserializeAws_restJson1GetFunctionConcurrencyCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFunctionConfigurationCommandError(
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
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(
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
    contents.Layers = deserializeAws_restJson1LayersReferenceList(
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
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetFunctionConfigurationCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1GetFunctionEventInvokeConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetLayerVersionCommandError(output, context);
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
    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(
      data.CompatibleRuntimes,
      context
    );
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(
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

const deserializeAws_restJson1GetLayerVersionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetLayerVersionByArnCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionByArnCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetLayerVersionByArnCommandError(
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
    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(
      data.CompatibleRuntimes,
      context
    );
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(
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

const deserializeAws_restJson1GetLayerVersionByArnCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetLayerVersionPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLayerVersionPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetLayerVersionPolicyCommandError(
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

const deserializeAws_restJson1GetLayerVersionPolicyCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetPolicyCommandError(output, context);
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

const deserializeAws_restJson1GetPolicyCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1GetProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError(
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

const deserializeAws_restJson1GetProvisionedConcurrencyConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ProvisionedConcurrencyConfigNotFoundException":
    case "com.amazonaws.lambda#ProvisionedConcurrencyConfigNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1InvokeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1InvokeCommandError(output, context);
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

const deserializeAws_restJson1InvokeCommandError = async (
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
    case "com.amazonaws.lambda#EC2AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1EC2AccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EC2ThrottledException":
    case "com.amazonaws.lambda#EC2ThrottledException":
      response = {
        ...(await deserializeAws_restJson1EC2ThrottledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "EC2UnexpectedException":
    case "com.amazonaws.lambda#EC2UnexpectedException":
      response = {
        ...(await deserializeAws_restJson1EC2UnexpectedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ENILimitReachedException":
    case "com.amazonaws.lambda#ENILimitReachedException":
      response = {
        ...(await deserializeAws_restJson1ENILimitReachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestContentException":
    case "com.amazonaws.lambda#InvalidRequestContentException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestContentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuntimeException":
    case "com.amazonaws.lambda#InvalidRuntimeException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuntimeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSecurityGroupIDException":
    case "com.amazonaws.lambda#InvalidSecurityGroupIDException":
      response = {
        ...(await deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidSubnetIDException":
    case "com.amazonaws.lambda#InvalidSubnetIDException":
      response = {
        ...(await deserializeAws_restJson1InvalidSubnetIDExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidZipFileException":
    case "com.amazonaws.lambda#InvalidZipFileException":
      response = {
        ...(await deserializeAws_restJson1InvalidZipFileExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSAccessDeniedException":
    case "com.amazonaws.lambda#KMSAccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1KMSAccessDeniedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSDisabledException":
    case "com.amazonaws.lambda#KMSDisabledException":
      response = {
        ...(await deserializeAws_restJson1KMSDisabledExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSInvalidStateException":
    case "com.amazonaws.lambda#KMSInvalidStateException":
      response = {
        ...(await deserializeAws_restJson1KMSInvalidStateExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "KMSNotFoundException":
    case "com.amazonaws.lambda#KMSNotFoundException":
      response = {
        ...(await deserializeAws_restJson1KMSNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTooLargeException":
    case "com.amazonaws.lambda#RequestTooLargeException":
      response = {
        ...(await deserializeAws_restJson1RequestTooLargeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotReadyException":
    case "com.amazonaws.lambda#ResourceNotReadyException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotReadyExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "SubnetIPAddressLimitReachedException":
    case "com.amazonaws.lambda#SubnetIPAddressLimitReachedException":
      response = {
        ...(await deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "UnsupportedMediaTypeException":
    case "com.amazonaws.lambda#UnsupportedMediaTypeException":
      response = {
        ...(await deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse(
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

export const deserializeAws_restJson1InvokeAsyncCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InvokeAsyncCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1InvokeAsyncCommandError(output, context);
  }
  const contents: InvokeAsyncCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InvokeAsyncResponse"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InvokeAsyncCommandError = async (
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
    case "com.amazonaws.lambda#InvalidRequestContentException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestContentExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRuntimeException":
    case "com.amazonaws.lambda#InvalidRuntimeException":
      response = {
        ...(await deserializeAws_restJson1InvalidRuntimeExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
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

export const deserializeAws_restJson1ListAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAliasesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListAliasesCommandError(output, context);
  }
  const contents: ListAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListAliasesResponse",
    Aliases: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Aliases !== undefined && data.Aliases !== null) {
    contents.Aliases = deserializeAws_restJson1AliasList(data.Aliases, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAliasesCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListEventSourceMappingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEventSourceMappingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListEventSourceMappingsCommandError(
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
    contents.EventSourceMappings = deserializeAws_restJson1EventSourceMappingsList(
      data.EventSourceMappings,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListEventSourceMappingsCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListFunctionEventInvokeConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError(
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
    contents.FunctionEventInvokeConfigs = deserializeAws_restJson1FunctionEventInvokeConfigList(
      data.FunctionEventInvokeConfigs,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionEventInvokeConfigsCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListFunctionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFunctionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListFunctionsCommandError(output, context);
  }
  const contents: ListFunctionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListFunctionsResponse",
    Functions: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Functions !== undefined && data.Functions !== null) {
    contents.Functions = deserializeAws_restJson1FunctionList(
      data.Functions,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListFunctionsCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListLayersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListLayersCommandError(output, context);
  }
  const contents: ListLayersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListLayersResponse",
    Layers: undefined,
    NextMarker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Layers !== undefined && data.Layers !== null) {
    contents.Layers = deserializeAws_restJson1LayersList(data.Layers, context);
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLayersCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListLayerVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLayerVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListLayerVersionsCommandError(
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
    contents.LayerVersions = deserializeAws_restJson1LayerVersionsList(
      data.LayerVersions,
      context
    );
  }
  if (data.NextMarker !== undefined && data.NextMarker !== null) {
    contents.NextMarker = data.NextMarker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLayerVersionsCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError(
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
    contents.ProvisionedConcurrencyConfigs = deserializeAws_restJson1ProvisionedConcurrencyConfigList(
      data.ProvisionedConcurrencyConfigs,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProvisionedConcurrencyConfigsCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsResponse",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1ListVersionsByFunctionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVersionsByFunctionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListVersionsByFunctionCommandError(
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
    contents.Versions = deserializeAws_restJson1FunctionList(
      data.Versions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVersionsByFunctionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1PublishLayerVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishLayerVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1PublishLayerVersionCommandError(
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
    contents.CompatibleRuntimes = deserializeAws_restJson1CompatibleRuntimes(
      data.CompatibleRuntimes,
      context
    );
  }
  if (data.Content !== undefined && data.Content !== null) {
    contents.Content = deserializeAws_restJson1LayerVersionContentOutput(
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

const deserializeAws_restJson1PublishLayerVersionCommandError = async (
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
    case "com.amazonaws.lambda#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1PublishVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1PublishVersionCommandError(output, context);
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
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(
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
    contents.Layers = deserializeAws_restJson1LayersReferenceList(
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
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PublishVersionCommandError = async (
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
    case "com.amazonaws.lambda#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1PutFunctionConcurrencyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionConcurrencyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutFunctionConcurrencyCommandError(
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

const deserializeAws_restJson1PutFunctionConcurrencyCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1PutFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1PutFunctionEventInvokeConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1PutProvisionedConcurrencyConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError(
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

const deserializeAws_restJson1PutProvisionedConcurrencyConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1RemoveLayerVersionPermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLayerVersionPermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemoveLayerVersionPermissionCommandError(
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

const deserializeAws_restJson1RemoveLayerVersionPermissionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1RemovePermissionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemovePermissionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1RemovePermissionCommandError(
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

const deserializeAws_restJson1RemovePermissionCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
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
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateAliasCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAliasCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateAliasCommandError(output, context);
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
    contents.RoutingConfig = deserializeAws_restJson1AliasRoutingConfiguration(
      data.RoutingConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateAliasCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateEventSourceMappingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEventSourceMappingCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateEventSourceMappingCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1UpdateEventSourceMappingCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lambda#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateFunctionCodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionCodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFunctionCodeCommandError(
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
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(
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
    contents.Layers = deserializeAws_restJson1LayersReferenceList(
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
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionCodeCommandError = async (
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
    case "com.amazonaws.lambda#CodeStorageExceededException":
      response = {
        ...(await deserializeAws_restJson1CodeStorageExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateFunctionConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFunctionConfigurationCommandError(
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
    contents.DeadLetterConfig = deserializeAws_restJson1DeadLetterConfig(
      data.DeadLetterConfig,
      context
    );
  }
  if (data.Description !== undefined && data.Description !== null) {
    contents.Description = data.Description;
  }
  if (data.Environment !== undefined && data.Environment !== null) {
    contents.Environment = deserializeAws_restJson1EnvironmentResponse(
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
    contents.Layers = deserializeAws_restJson1LayersReferenceList(
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
    contents.TracingConfig = deserializeAws_restJson1TracingConfigResponse(
      data.TracingConfig,
      context
    );
  }
  if (data.Version !== undefined && data.Version !== null) {
    contents.Version = data.Version;
  }
  if (data.VpcConfig !== undefined && data.VpcConfig !== null) {
    contents.VpcConfig = deserializeAws_restJson1VpcConfigResponse(
      data.VpcConfig,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateFunctionConfigurationCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PreconditionFailedException":
    case "com.amazonaws.lambda#PreconditionFailedException":
      response = {
        ...(await deserializeAws_restJson1PreconditionFailedExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceConflictException":
    case "com.amazonaws.lambda#ResourceConflictException":
      response = {
        ...(await deserializeAws_restJson1ResourceConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

export const deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError(
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
    contents.DestinationConfig = deserializeAws_restJson1DestinationConfig(
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

const deserializeAws_restJson1UpdateFunctionEventInvokeConfigCommandError = async (
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
    case "com.amazonaws.lambda#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.lambda#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceException":
    case "com.amazonaws.lambda#ServiceException":
      response = {
        ...(await deserializeAws_restJson1ServiceExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lambda#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1TooManyRequestsExceptionResponse(
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

const deserializeAws_restJson1CodeStorageExceededExceptionResponse = async (
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

const deserializeAws_restJson1EC2AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1EC2ThrottledExceptionResponse = async (
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

const deserializeAws_restJson1EC2UnexpectedExceptionResponse = async (
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

const deserializeAws_restJson1ENILimitReachedExceptionResponse = async (
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

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRequestContentExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRuntimeExceptionResponse = async (
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

const deserializeAws_restJson1InvalidSecurityGroupIDExceptionResponse = async (
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

const deserializeAws_restJson1InvalidSubnetIDExceptionResponse = async (
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

const deserializeAws_restJson1InvalidZipFileExceptionResponse = async (
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

const deserializeAws_restJson1KMSAccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1KMSDisabledExceptionResponse = async (
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

const deserializeAws_restJson1KMSInvalidStateExceptionResponse = async (
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

const deserializeAws_restJson1KMSNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1PolicyLengthExceededExceptionResponse = async (
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

const deserializeAws_restJson1PreconditionFailedExceptionResponse = async (
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

const deserializeAws_restJson1ProvisionedConcurrencyConfigNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1RequestTooLargeExceptionResponse = async (
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

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
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

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (
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

const deserializeAws_restJson1ServiceExceptionResponse = async (
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

const deserializeAws_restJson1SubnetIPAddressLimitReachedExceptionResponse = async (
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

const deserializeAws_restJson1TooManyRequestsExceptionResponse = async (
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

const deserializeAws_restJson1UnsupportedMediaTypeExceptionResponse = async (
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

const serializeAws_restJson1AdditionalVersionWeights = (
  input: { [key: string]: number },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1AliasRoutingConfiguration = (
  input: AliasRoutingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdditionalVersionWeights !== undefined && {
      AdditionalVersionWeights: serializeAws_restJson1AdditionalVersionWeights(
        input.AdditionalVersionWeights,
        context
      )
    })
  };
};

const serializeAws_restJson1CompatibleRuntimes = (
  input: (Runtime | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1DeadLetterConfig = (
  input: DeadLetterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetArn !== undefined && { TargetArn: input.TargetArn })
  };
};

const serializeAws_restJson1DestinationConfig = (
  input: DestinationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OnFailure !== undefined && {
      OnFailure: serializeAws_restJson1OnFailure(input.OnFailure, context)
    }),
    ...(input.OnSuccess !== undefined && {
      OnSuccess: serializeAws_restJson1OnSuccess(input.OnSuccess, context)
    })
  };
};

const serializeAws_restJson1Environment = (
  input: Environment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Variables !== undefined && {
      Variables: serializeAws_restJson1EnvironmentVariables(
        input.Variables,
        context
      )
    })
  };
};

const serializeAws_restJson1EnvironmentVariables = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1FunctionCode = (
  input: FunctionCode,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion !== undefined && {
      S3ObjectVersion: input.S3ObjectVersion
    }),
    ...(input.ZipFile !== undefined && {
      ZipFile: context.base64Encoder(input.ZipFile)
    })
  };
};

const serializeAws_restJson1LayerList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1LayerVersionContentInput = (
  input: LayerVersionContentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3Bucket !== undefined && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key !== undefined && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion !== undefined && {
      S3ObjectVersion: input.S3ObjectVersion
    }),
    ...(input.ZipFile !== undefined && {
      ZipFile: context.base64Encoder(input.ZipFile)
    })
  };
};

const serializeAws_restJson1OnFailure = (
  input: OnFailure,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && { Destination: input.Destination })
  };
};

const serializeAws_restJson1OnSuccess = (
  input: OnSuccess,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination !== undefined && { Destination: input.Destination })
  };
};

const serializeAws_restJson1SecurityGroupIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1SubnetIds = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1TracingConfig = (
  input: TracingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mode !== undefined && { Mode: input.Mode })
  };
};

const serializeAws_restJson1VpcConfig = (
  input: VpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds !== undefined && {
      SecurityGroupIds: serializeAws_restJson1SecurityGroupIds(
        input.SecurityGroupIds,
        context
      )
    }),
    ...(input.SubnetIds !== undefined && {
      SubnetIds: serializeAws_restJson1SubnetIds(input.SubnetIds, context)
    })
  };
};

const deserializeAws_restJson1AccountLimit = (
  output: any,
  context: __SerdeContext
): AccountLimit => {
  return {
    __type: "AccountLimit",
    CodeSizeUnzipped:
      output.CodeSizeUnzipped !== undefined && output.CodeSizeUnzipped !== null
        ? output.CodeSizeUnzipped
        : undefined,
    CodeSizeZipped:
      output.CodeSizeZipped !== undefined && output.CodeSizeZipped !== null
        ? output.CodeSizeZipped
        : undefined,
    ConcurrentExecutions:
      output.ConcurrentExecutions !== undefined &&
      output.ConcurrentExecutions !== null
        ? output.ConcurrentExecutions
        : undefined,
    TotalCodeSize:
      output.TotalCodeSize !== undefined && output.TotalCodeSize !== null
        ? output.TotalCodeSize
        : undefined,
    UnreservedConcurrentExecutions:
      output.UnreservedConcurrentExecutions !== undefined &&
      output.UnreservedConcurrentExecutions !== null
        ? output.UnreservedConcurrentExecutions
        : undefined
  } as any;
};

const deserializeAws_restJson1AccountUsage = (
  output: any,
  context: __SerdeContext
): AccountUsage => {
  return {
    __type: "AccountUsage",
    FunctionCount:
      output.FunctionCount !== undefined && output.FunctionCount !== null
        ? output.FunctionCount
        : undefined,
    TotalCodeSize:
      output.TotalCodeSize !== undefined && output.TotalCodeSize !== null
        ? output.TotalCodeSize
        : undefined
  } as any;
};

const deserializeAws_restJson1AdditionalVersionWeights = (
  output: any,
  context: __SerdeContext
): { [key: string]: number } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: number }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1AliasConfiguration = (
  output: any,
  context: __SerdeContext
): AliasConfiguration => {
  return {
    __type: "AliasConfiguration",
    AliasArn:
      output.AliasArn !== undefined && output.AliasArn !== null
        ? output.AliasArn
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    FunctionVersion:
      output.FunctionVersion !== undefined && output.FunctionVersion !== null
        ? output.FunctionVersion
        : undefined,
    Name:
      output.Name !== undefined && output.Name !== null
        ? output.Name
        : undefined,
    RevisionId:
      output.RevisionId !== undefined && output.RevisionId !== null
        ? output.RevisionId
        : undefined,
    RoutingConfig:
      output.RoutingConfig !== undefined && output.RoutingConfig !== null
        ? deserializeAws_restJson1AliasRoutingConfiguration(
            output.RoutingConfig,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1AliasList = (
  output: any,
  context: __SerdeContext
): AliasConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1AliasConfiguration(entry, context)
  );
};

const deserializeAws_restJson1AliasRoutingConfiguration = (
  output: any,
  context: __SerdeContext
): AliasRoutingConfiguration => {
  return {
    __type: "AliasRoutingConfiguration",
    AdditionalVersionWeights:
      output.AdditionalVersionWeights !== undefined &&
      output.AdditionalVersionWeights !== null
        ? deserializeAws_restJson1AdditionalVersionWeights(
            output.AdditionalVersionWeights,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1CompatibleRuntimes = (
  output: any,
  context: __SerdeContext
): (Runtime | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Concurrency = (
  output: any,
  context: __SerdeContext
): Concurrency => {
  return {
    __type: "Concurrency",
    ReservedConcurrentExecutions:
      output.ReservedConcurrentExecutions !== undefined &&
      output.ReservedConcurrentExecutions !== null
        ? output.ReservedConcurrentExecutions
        : undefined
  } as any;
};

const deserializeAws_restJson1DeadLetterConfig = (
  output: any,
  context: __SerdeContext
): DeadLetterConfig => {
  return {
    __type: "DeadLetterConfig",
    TargetArn:
      output.TargetArn !== undefined && output.TargetArn !== null
        ? output.TargetArn
        : undefined
  } as any;
};

const deserializeAws_restJson1DestinationConfig = (
  output: any,
  context: __SerdeContext
): DestinationConfig => {
  return {
    __type: "DestinationConfig",
    OnFailure:
      output.OnFailure !== undefined && output.OnFailure !== null
        ? deserializeAws_restJson1OnFailure(output.OnFailure, context)
        : undefined,
    OnSuccess:
      output.OnSuccess !== undefined && output.OnSuccess !== null
        ? deserializeAws_restJson1OnSuccess(output.OnSuccess, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1EnvironmentError = (
  output: any,
  context: __SerdeContext
): EnvironmentError => {
  return {
    __type: "EnvironmentError",
    ErrorCode:
      output.ErrorCode !== undefined && output.ErrorCode !== null
        ? output.ErrorCode
        : undefined,
    Message:
      output.Message !== undefined && output.Message !== null
        ? output.Message
        : undefined
  } as any;
};

const deserializeAws_restJson1EnvironmentResponse = (
  output: any,
  context: __SerdeContext
): EnvironmentResponse => {
  return {
    __type: "EnvironmentResponse",
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1EnvironmentError(output.Error, context)
        : undefined,
    Variables:
      output.Variables !== undefined && output.Variables !== null
        ? deserializeAws_restJson1EnvironmentVariables(
            output.Variables,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1EnvironmentVariables = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1EventSourceMappingConfiguration = (
  output: any,
  context: __SerdeContext
): EventSourceMappingConfiguration => {
  return {
    __type: "EventSourceMappingConfiguration",
    BatchSize:
      output.BatchSize !== undefined && output.BatchSize !== null
        ? output.BatchSize
        : undefined,
    BisectBatchOnFunctionError:
      output.BisectBatchOnFunctionError !== undefined &&
      output.BisectBatchOnFunctionError !== null
        ? output.BisectBatchOnFunctionError
        : undefined,
    DestinationConfig:
      output.DestinationConfig !== undefined &&
      output.DestinationConfig !== null
        ? deserializeAws_restJson1DestinationConfig(
            output.DestinationConfig,
            context
          )
        : undefined,
    EventSourceArn:
      output.EventSourceArn !== undefined && output.EventSourceArn !== null
        ? output.EventSourceArn
        : undefined,
    FunctionArn:
      output.FunctionArn !== undefined && output.FunctionArn !== null
        ? output.FunctionArn
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? new Date(Math.round(output.LastModified * 1000))
        : undefined,
    LastProcessingResult:
      output.LastProcessingResult !== undefined &&
      output.LastProcessingResult !== null
        ? output.LastProcessingResult
        : undefined,
    MaximumBatchingWindowInSeconds:
      output.MaximumBatchingWindowInSeconds !== undefined &&
      output.MaximumBatchingWindowInSeconds !== null
        ? output.MaximumBatchingWindowInSeconds
        : undefined,
    MaximumRecordAgeInSeconds:
      output.MaximumRecordAgeInSeconds !== undefined &&
      output.MaximumRecordAgeInSeconds !== null
        ? output.MaximumRecordAgeInSeconds
        : undefined,
    MaximumRetryAttempts:
      output.MaximumRetryAttempts !== undefined &&
      output.MaximumRetryAttempts !== null
        ? output.MaximumRetryAttempts
        : undefined,
    ParallelizationFactor:
      output.ParallelizationFactor !== undefined &&
      output.ParallelizationFactor !== null
        ? output.ParallelizationFactor
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateTransitionReason:
      output.StateTransitionReason !== undefined &&
      output.StateTransitionReason !== null
        ? output.StateTransitionReason
        : undefined,
    UUID:
      output.UUID !== undefined && output.UUID !== null
        ? output.UUID
        : undefined
  } as any;
};

const deserializeAws_restJson1EventSourceMappingsList = (
  output: any,
  context: __SerdeContext
): EventSourceMappingConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1EventSourceMappingConfiguration(entry, context)
  );
};

const deserializeAws_restJson1FunctionCodeLocation = (
  output: any,
  context: __SerdeContext
): FunctionCodeLocation => {
  return {
    __type: "FunctionCodeLocation",
    Location:
      output.Location !== undefined && output.Location !== null
        ? output.Location
        : undefined,
    RepositoryType:
      output.RepositoryType !== undefined && output.RepositoryType !== null
        ? output.RepositoryType
        : undefined
  } as any;
};

const deserializeAws_restJson1FunctionConfiguration = (
  output: any,
  context: __SerdeContext
): FunctionConfiguration => {
  return {
    __type: "FunctionConfiguration",
    CodeSha256:
      output.CodeSha256 !== undefined && output.CodeSha256 !== null
        ? output.CodeSha256
        : undefined,
    CodeSize:
      output.CodeSize !== undefined && output.CodeSize !== null
        ? output.CodeSize
        : undefined,
    DeadLetterConfig:
      output.DeadLetterConfig !== undefined && output.DeadLetterConfig !== null
        ? deserializeAws_restJson1DeadLetterConfig(
            output.DeadLetterConfig,
            context
          )
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    Environment:
      output.Environment !== undefined && output.Environment !== null
        ? deserializeAws_restJson1EnvironmentResponse(
            output.Environment,
            context
          )
        : undefined,
    FunctionArn:
      output.FunctionArn !== undefined && output.FunctionArn !== null
        ? output.FunctionArn
        : undefined,
    FunctionName:
      output.FunctionName !== undefined && output.FunctionName !== null
        ? output.FunctionName
        : undefined,
    Handler:
      output.Handler !== undefined && output.Handler !== null
        ? output.Handler
        : undefined,
    KMSKeyArn:
      output.KMSKeyArn !== undefined && output.KMSKeyArn !== null
        ? output.KMSKeyArn
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? output.LastModified
        : undefined,
    LastUpdateStatus:
      output.LastUpdateStatus !== undefined && output.LastUpdateStatus !== null
        ? output.LastUpdateStatus
        : undefined,
    LastUpdateStatusReason:
      output.LastUpdateStatusReason !== undefined &&
      output.LastUpdateStatusReason !== null
        ? output.LastUpdateStatusReason
        : undefined,
    LastUpdateStatusReasonCode:
      output.LastUpdateStatusReasonCode !== undefined &&
      output.LastUpdateStatusReasonCode !== null
        ? output.LastUpdateStatusReasonCode
        : undefined,
    Layers:
      output.Layers !== undefined && output.Layers !== null
        ? deserializeAws_restJson1LayersReferenceList(output.Layers, context)
        : undefined,
    MasterArn:
      output.MasterArn !== undefined && output.MasterArn !== null
        ? output.MasterArn
        : undefined,
    MemorySize:
      output.MemorySize !== undefined && output.MemorySize !== null
        ? output.MemorySize
        : undefined,
    RevisionId:
      output.RevisionId !== undefined && output.RevisionId !== null
        ? output.RevisionId
        : undefined,
    Role:
      output.Role !== undefined && output.Role !== null
        ? output.Role
        : undefined,
    Runtime:
      output.Runtime !== undefined && output.Runtime !== null
        ? output.Runtime
        : undefined,
    State:
      output.State !== undefined && output.State !== null
        ? output.State
        : undefined,
    StateReason:
      output.StateReason !== undefined && output.StateReason !== null
        ? output.StateReason
        : undefined,
    StateReasonCode:
      output.StateReasonCode !== undefined && output.StateReasonCode !== null
        ? output.StateReasonCode
        : undefined,
    Timeout:
      output.Timeout !== undefined && output.Timeout !== null
        ? output.Timeout
        : undefined,
    TracingConfig:
      output.TracingConfig !== undefined && output.TracingConfig !== null
        ? deserializeAws_restJson1TracingConfigResponse(
            output.TracingConfig,
            context
          )
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined,
    VpcConfig:
      output.VpcConfig !== undefined && output.VpcConfig !== null
        ? deserializeAws_restJson1VpcConfigResponse(output.VpcConfig, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1FunctionEventInvokeConfig = (
  output: any,
  context: __SerdeContext
): FunctionEventInvokeConfig => {
  return {
    __type: "FunctionEventInvokeConfig",
    DestinationConfig:
      output.DestinationConfig !== undefined &&
      output.DestinationConfig !== null
        ? deserializeAws_restJson1DestinationConfig(
            output.DestinationConfig,
            context
          )
        : undefined,
    FunctionArn:
      output.FunctionArn !== undefined && output.FunctionArn !== null
        ? output.FunctionArn
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? new Date(Math.round(output.LastModified * 1000))
        : undefined,
    MaximumEventAgeInSeconds:
      output.MaximumEventAgeInSeconds !== undefined &&
      output.MaximumEventAgeInSeconds !== null
        ? output.MaximumEventAgeInSeconds
        : undefined,
    MaximumRetryAttempts:
      output.MaximumRetryAttempts !== undefined &&
      output.MaximumRetryAttempts !== null
        ? output.MaximumRetryAttempts
        : undefined
  } as any;
};

const deserializeAws_restJson1FunctionEventInvokeConfigList = (
  output: any,
  context: __SerdeContext
): FunctionEventInvokeConfig[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FunctionEventInvokeConfig(entry, context)
  );
};

const deserializeAws_restJson1FunctionList = (
  output: any,
  context: __SerdeContext
): FunctionConfiguration[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1FunctionConfiguration(entry, context)
  );
};

const deserializeAws_restJson1Layer = (
  output: any,
  context: __SerdeContext
): Layer => {
  return {
    __type: "Layer",
    Arn:
      output.Arn !== undefined && output.Arn !== null ? output.Arn : undefined,
    CodeSize:
      output.CodeSize !== undefined && output.CodeSize !== null
        ? output.CodeSize
        : undefined
  } as any;
};

const deserializeAws_restJson1LayersList = (
  output: any,
  context: __SerdeContext
): LayersListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1LayersListItem(entry, context)
  );
};

const deserializeAws_restJson1LayersListItem = (
  output: any,
  context: __SerdeContext
): LayersListItem => {
  return {
    __type: "LayersListItem",
    LatestMatchingVersion:
      output.LatestMatchingVersion !== undefined &&
      output.LatestMatchingVersion !== null
        ? deserializeAws_restJson1LayerVersionsListItem(
            output.LatestMatchingVersion,
            context
          )
        : undefined,
    LayerArn:
      output.LayerArn !== undefined && output.LayerArn !== null
        ? output.LayerArn
        : undefined,
    LayerName:
      output.LayerName !== undefined && output.LayerName !== null
        ? output.LayerName
        : undefined
  } as any;
};

const deserializeAws_restJson1LayersReferenceList = (
  output: any,
  context: __SerdeContext
): Layer[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1Layer(entry, context)
  );
};

const deserializeAws_restJson1LayerVersionContentOutput = (
  output: any,
  context: __SerdeContext
): LayerVersionContentOutput => {
  return {
    __type: "LayerVersionContentOutput",
    CodeSha256:
      output.CodeSha256 !== undefined && output.CodeSha256 !== null
        ? output.CodeSha256
        : undefined,
    CodeSize:
      output.CodeSize !== undefined && output.CodeSize !== null
        ? output.CodeSize
        : undefined,
    Location:
      output.Location !== undefined && output.Location !== null
        ? output.Location
        : undefined
  } as any;
};

const deserializeAws_restJson1LayerVersionsList = (
  output: any,
  context: __SerdeContext
): LayerVersionsListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1LayerVersionsListItem(entry, context)
  );
};

const deserializeAws_restJson1LayerVersionsListItem = (
  output: any,
  context: __SerdeContext
): LayerVersionsListItem => {
  return {
    __type: "LayerVersionsListItem",
    CompatibleRuntimes:
      output.CompatibleRuntimes !== undefined &&
      output.CompatibleRuntimes !== null
        ? deserializeAws_restJson1CompatibleRuntimes(
            output.CompatibleRuntimes,
            context
          )
        : undefined,
    CreatedDate:
      output.CreatedDate !== undefined && output.CreatedDate !== null
        ? output.CreatedDate
        : undefined,
    Description:
      output.Description !== undefined && output.Description !== null
        ? output.Description
        : undefined,
    LayerVersionArn:
      output.LayerVersionArn !== undefined && output.LayerVersionArn !== null
        ? output.LayerVersionArn
        : undefined,
    LicenseInfo:
      output.LicenseInfo !== undefined && output.LicenseInfo !== null
        ? output.LicenseInfo
        : undefined,
    Version:
      output.Version !== undefined && output.Version !== null
        ? output.Version
        : undefined
  } as any;
};

const deserializeAws_restJson1OnFailure = (
  output: any,
  context: __SerdeContext
): OnFailure => {
  return {
    __type: "OnFailure",
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? output.Destination
        : undefined
  } as any;
};

const deserializeAws_restJson1OnSuccess = (
  output: any,
  context: __SerdeContext
): OnSuccess => {
  return {
    __type: "OnSuccess",
    Destination:
      output.Destination !== undefined && output.Destination !== null
        ? output.Destination
        : undefined
  } as any;
};

const deserializeAws_restJson1ProvisionedConcurrencyConfigList = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1ProvisionedConcurrencyConfigListItem(entry, context)
  );
};

const deserializeAws_restJson1ProvisionedConcurrencyConfigListItem = (
  output: any,
  context: __SerdeContext
): ProvisionedConcurrencyConfigListItem => {
  return {
    __type: "ProvisionedConcurrencyConfigListItem",
    AllocatedProvisionedConcurrentExecutions:
      output.AllocatedProvisionedConcurrentExecutions !== undefined &&
      output.AllocatedProvisionedConcurrentExecutions !== null
        ? output.AllocatedProvisionedConcurrentExecutions
        : undefined,
    AvailableProvisionedConcurrentExecutions:
      output.AvailableProvisionedConcurrentExecutions !== undefined &&
      output.AvailableProvisionedConcurrentExecutions !== null
        ? output.AvailableProvisionedConcurrentExecutions
        : undefined,
    FunctionArn:
      output.FunctionArn !== undefined && output.FunctionArn !== null
        ? output.FunctionArn
        : undefined,
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? output.LastModified
        : undefined,
    RequestedProvisionedConcurrentExecutions:
      output.RequestedProvisionedConcurrentExecutions !== undefined &&
      output.RequestedProvisionedConcurrentExecutions !== null
        ? output.RequestedProvisionedConcurrentExecutions
        : undefined,
    Status:
      output.Status !== undefined && output.Status !== null
        ? output.Status
        : undefined,
    StatusReason:
      output.StatusReason !== undefined && output.StatusReason !== null
        ? output.StatusReason
        : undefined
  } as any;
};

const deserializeAws_restJson1SecurityGroupIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1SubnetIds = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1TracingConfigResponse = (
  output: any,
  context: __SerdeContext
): TracingConfigResponse => {
  return {
    __type: "TracingConfigResponse",
    Mode:
      output.Mode !== undefined && output.Mode !== null
        ? output.Mode
        : undefined
  } as any;
};

const deserializeAws_restJson1VpcConfigResponse = (
  output: any,
  context: __SerdeContext
): VpcConfigResponse => {
  return {
    __type: "VpcConfigResponse",
    SecurityGroupIds:
      output.SecurityGroupIds !== undefined && output.SecurityGroupIds !== null
        ? deserializeAws_restJson1SecurityGroupIds(
            output.SecurityGroupIds,
            context
          )
        : undefined,
    SubnetIds:
      output.SubnetIds !== undefined && output.SubnetIds !== null
        ? deserializeAws_restJson1SubnetIds(output.SubnetIds, context)
        : undefined,
    VpcId:
      output.VpcId !== undefined && output.VpcId !== null
        ? output.VpcId
        : undefined
  } as any;
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
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

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
