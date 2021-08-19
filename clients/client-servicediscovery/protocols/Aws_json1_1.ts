import {
  CreateHttpNamespaceCommandInput,
  CreateHttpNamespaceCommandOutput,
} from "../commands/CreateHttpNamespaceCommand";
import {
  CreatePrivateDnsNamespaceCommandInput,
  CreatePrivateDnsNamespaceCommandOutput,
} from "../commands/CreatePrivateDnsNamespaceCommand";
import {
  CreatePublicDnsNamespaceCommandInput,
  CreatePublicDnsNamespaceCommandOutput,
} from "../commands/CreatePublicDnsNamespaceCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import { DeleteNamespaceCommandInput, DeleteNamespaceCommandOutput } from "../commands/DeleteNamespaceCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import { DeregisterInstanceCommandInput, DeregisterInstanceCommandOutput } from "../commands/DeregisterInstanceCommand";
import { DiscoverInstancesCommandInput, DiscoverInstancesCommandOutput } from "../commands/DiscoverInstancesCommand";
import { GetInstanceCommandInput, GetInstanceCommandOutput } from "../commands/GetInstanceCommand";
import {
  GetInstancesHealthStatusCommandInput,
  GetInstancesHealthStatusCommandOutput,
} from "../commands/GetInstancesHealthStatusCommand";
import { GetNamespaceCommandInput, GetNamespaceCommandOutput } from "../commands/GetNamespaceCommand";
import { GetOperationCommandInput, GetOperationCommandOutput } from "../commands/GetOperationCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "../commands/GetServiceCommand";
import { ListInstancesCommandInput, ListInstancesCommandOutput } from "../commands/ListInstancesCommand";
import { ListNamespacesCommandInput, ListNamespacesCommandOutput } from "../commands/ListNamespacesCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { RegisterInstanceCommandInput, RegisterInstanceCommandOutput } from "../commands/RegisterInstanceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateHttpNamespaceCommandInput,
  UpdateHttpNamespaceCommandOutput,
} from "../commands/UpdateHttpNamespaceCommand";
import {
  UpdateInstanceCustomHealthStatusCommandInput,
  UpdateInstanceCustomHealthStatusCommandOutput,
} from "../commands/UpdateInstanceCustomHealthStatusCommand";
import {
  UpdatePrivateDnsNamespaceCommandInput,
  UpdatePrivateDnsNamespaceCommandOutput,
} from "../commands/UpdatePrivateDnsNamespaceCommand";
import {
  UpdatePublicDnsNamespaceCommandInput,
  UpdatePublicDnsNamespaceCommandOutput,
} from "../commands/UpdatePublicDnsNamespaceCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  CreateHttpNamespaceRequest,
  CreateHttpNamespaceResponse,
  CreatePrivateDnsNamespaceRequest,
  CreatePrivateDnsNamespaceResponse,
  CreatePublicDnsNamespaceRequest,
  CreatePublicDnsNamespaceResponse,
  CreateServiceRequest,
  CreateServiceResponse,
  CustomHealthNotFound,
  DeleteNamespaceRequest,
  DeleteNamespaceResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeregisterInstanceRequest,
  DeregisterInstanceResponse,
  DiscoverInstancesRequest,
  DiscoverInstancesResponse,
  DnsConfig,
  DnsConfigChange,
  DnsProperties,
  DnsRecord,
  DuplicateRequest,
  GetInstanceRequest,
  GetInstanceResponse,
  GetInstancesHealthStatusRequest,
  GetInstancesHealthStatusResponse,
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetOperationRequest,
  GetOperationResponse,
  GetServiceRequest,
  GetServiceResponse,
  HealthCheckConfig,
  HealthCheckCustomConfig,
  HealthStatus,
  HttpInstanceSummary,
  HttpNamespaceChange,
  HttpProperties,
  Instance,
  InstanceNotFound,
  InstanceSummary,
  InvalidInput,
  ListInstancesRequest,
  ListInstancesResponse,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  Namespace,
  NamespaceAlreadyExists,
  NamespaceFilter,
  NamespaceNotFound,
  NamespaceProperties,
  NamespaceSummary,
  Operation,
  OperationFilter,
  OperationNotFound,
  OperationSummary,
  OperationTargetType,
  PrivateDnsNamespaceChange,
  PrivateDnsNamespaceProperties,
  PrivateDnsNamespacePropertiesChange,
  PrivateDnsPropertiesMutable,
  PrivateDnsPropertiesMutableChange,
  PublicDnsNamespaceChange,
  PublicDnsNamespaceProperties,
  PublicDnsNamespacePropertiesChange,
  PublicDnsPropertiesMutable,
  PublicDnsPropertiesMutableChange,
  RegisterInstanceRequest,
  RegisterInstanceResponse,
  RequestLimitExceeded,
  ResourceInUse,
  ResourceLimitExceeded,
  ResourceNotFoundException,
  SOA,
  SOAChange,
  Service,
  ServiceAlreadyExists,
  ServiceChange,
  ServiceFilter,
  ServiceNotFound,
  ServiceSummary,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TooManyTagsException,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateHttpNamespaceRequest,
  UpdateHttpNamespaceResponse,
  UpdateInstanceCustomHealthStatusRequest,
  UpdatePrivateDnsNamespaceRequest,
  UpdatePrivateDnsNamespaceResponse,
  UpdatePublicDnsNamespaceRequest,
  UpdatePublicDnsNamespaceResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
} from "../models/models_0";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import { expectInt as __expectInt, expectString as __expectString } from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_json1_1CreateHttpNamespaceCommand = async (
  input: CreateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreateHttpNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateHttpNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePrivateDnsNamespaceCommand = async (
  input: CreatePrivateDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePrivateDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreatePublicDnsNamespaceCommand = async (
  input: CreatePublicDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreatePublicDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreatePublicDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DeleteNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DeleteService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeregisterInstanceCommand = async (
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DeregisterInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeregisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DiscoverInstancesCommand = async (
  input: DiscoverInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DiscoverInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DiscoverInstancesRequest(input, context));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

export const serializeAws_json1_1GetInstanceCommand = async (
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetInstancesHealthStatusCommand = async (
  input: GetInstancesHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetInstancesHealthStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetInstancesHealthStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetOperation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetOperationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1GetServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListNamespaces",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListNamespacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RegisterInstanceCommand = async (
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.RegisterInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RegisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateHttpNamespaceCommand = async (
  input: UpdateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdateHttpNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateHttpNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = async (
  input: UpdateInstanceCustomHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePrivateDnsNamespaceCommand = async (
  input: UpdatePrivateDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePrivateDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdatePublicDnsNamespaceCommand = async (
  input: UpdatePublicDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdatePublicDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1CreateHttpNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHttpNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateHttpNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateHttpNamespaceResponse(data, context);
  const response: CreateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateHttpNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHttpNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceAlreadyExists":
    case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreatePrivateDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePrivateDnsNamespaceResponse(data, context);
  const response: CreatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceAlreadyExists":
    case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreatePublicDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreatePublicDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreatePublicDnsNamespaceResponse(data, context);
  const response: CreatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreatePublicDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceAlreadyExists":
    case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1NamespaceAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceAlreadyExists":
    case "com.amazonaws.servicediscovery#ServiceAlreadyExists":
      response = {
        ...(await deserializeAws_json1_1ServiceAlreadyExistsResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DeregisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeregisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeregisterInstanceResponse(data, context);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeregisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1DiscoverInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DiscoverInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DiscoverInstancesResponse(data, context);
  const response: DiscoverInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DiscoverInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestLimitExceeded":
    case "com.amazonaws.servicediscovery#RequestLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1RequestLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstanceResponse(data, context);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetInstancesHealthStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesHealthStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetInstancesHealthStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetInstancesHealthStatusResponse(data, context);
  const response: GetInstancesHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetInstancesHealthStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesHealthStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetNamespaceResponse(data, context);
  const response: GetNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetOperationResponse(data, context);
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "OperationNotFound":
    case "com.amazonaws.servicediscovery#OperationNotFound":
      response = {
        ...(await deserializeAws_json1_1OperationNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1GetServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1GetServiceResponse(data, context);
  const response: GetServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1GetServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListInstancesResponse(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListNamespacesResponse(data, context);
  const response: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.servicediscovery#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1RegisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RegisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RegisterInstanceResponse(data, context);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RegisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      response = {
        ...(await deserializeAws_json1_1ResourceLimitExceededResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.servicediscovery#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      response = {
        ...(await deserializeAws_json1_1TooManyTagsExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.servicediscovery#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_json1_1ResourceNotFoundExceptionResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateHttpNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHttpNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateHttpNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateHttpNamespaceResponse(data, context);
  const response: UpdateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateHttpNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHttpNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCustomHealthStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInstanceCustomHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCustomHealthStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomHealthNotFound":
    case "com.amazonaws.servicediscovery#CustomHealthNotFound":
      response = {
        ...(await deserializeAws_json1_1CustomHealthNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      response = {
        ...(await deserializeAws_json1_1InstanceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdatePrivateDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivateDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePrivateDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePrivateDnsNamespaceResponse(data, context);
  const response: UpdatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePrivateDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivateDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdatePublicDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdatePublicDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdatePublicDnsNamespaceResponse(data, context);
  const response: UpdatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdatePublicDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      response = {
        ...(await deserializeAws_json1_1NamespaceNotFoundResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      response = {
        ...(await deserializeAws_json1_1ResourceInUseResponse(parsedOutput, context)),
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

export const deserializeAws_json1_1UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      response = {
        ...(await deserializeAws_json1_1DuplicateRequestResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      response = {
        ...(await deserializeAws_json1_1InvalidInputResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      response = {
        ...(await deserializeAws_json1_1ServiceNotFoundResponse(parsedOutput, context)),
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

const deserializeAws_json1_1CustomHealthNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomHealthNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1CustomHealthNotFound(body, context);
  const contents: CustomHealthNotFound = {
    name: "CustomHealthNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1DuplicateRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DuplicateRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DuplicateRequest(body, context);
  const contents: DuplicateRequest = {
    name: "DuplicateRequest",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InstanceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InstanceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InstanceNotFound(body, context);
  const contents: InstanceNotFound = {
    name: "InstanceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1InvalidInputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidInput(body, context);
  const contents: InvalidInput = {
    name: "InvalidInput",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NamespaceAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NamespaceAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NamespaceAlreadyExists(body, context);
  const contents: NamespaceAlreadyExists = {
    name: "NamespaceAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1NamespaceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NamespaceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NamespaceNotFound(body, context);
  const contents: NamespaceNotFound = {
    name: "NamespaceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1OperationNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1OperationNotFound(body, context);
  const contents: OperationNotFound = {
    name: "OperationNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1RequestLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1RequestLimitExceeded(body, context);
  const contents: RequestLimitExceeded = {
    name: "RequestLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceInUseResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceInUse(body, context);
  const contents: ResourceInUse = {
    name: "ResourceInUse",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceLimitExceeded(body, context);
  const contents: ResourceLimitExceeded = {
    name: "ResourceLimitExceeded",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFoundException(body, context);
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceAlreadyExistsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceAlreadyExists(body, context);
  const contents: ServiceAlreadyExists = {
    name: "ServiceAlreadyExists",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1ServiceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceNotFound(body, context);
  const contents: ServiceNotFound = {
    name: "ServiceNotFound",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const deserializeAws_json1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1TooManyTagsException(body, context);
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  };
  return contents;
};

const serializeAws_json1_1Attributes = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_json1_1CreateHttpNamespaceRequest = (
  input: CreateHttpNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreatePrivateDnsNamespaceRequest = (
  input: CreatePrivateDnsNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && {
        Properties: serializeAws_json1_1PrivateDnsNamespaceProperties(input.Properties, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Vpc !== undefined && input.Vpc !== null && { Vpc: input.Vpc }),
  };
};

const serializeAws_json1_1CreatePublicDnsNamespaceRequest = (
  input: CreatePublicDnsNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && {
        Properties: serializeAws_json1_1PublicDnsNamespaceProperties(input.Properties, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DnsConfig !== undefined &&
      input.DnsConfig !== null && { DnsConfig: serializeAws_json1_1DnsConfig(input.DnsConfig, context) }),
    ...(input.HealthCheckConfig !== undefined &&
      input.HealthCheckConfig !== null && {
        HealthCheckConfig: serializeAws_json1_1HealthCheckConfig(input.HealthCheckConfig, context),
      }),
    ...(input.HealthCheckCustomConfig !== undefined &&
      input.HealthCheckCustomConfig !== null && {
        HealthCheckCustomConfig: serializeAws_json1_1HealthCheckCustomConfig(input.HealthCheckCustomConfig, context),
      }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.NamespaceId !== undefined && input.NamespaceId !== null && { NamespaceId: input.NamespaceId }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DeleteNamespaceRequest = (input: DeleteNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_json1_1DeregisterInstanceRequest = (
  input: DeregisterInstanceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
  };
};

const serializeAws_json1_1DiscoverInstancesRequest = (
  input: DiscoverInstancesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthStatus !== undefined && input.HealthStatus !== null && { HealthStatus: input.HealthStatus }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NamespaceName !== undefined && input.NamespaceName !== null && { NamespaceName: input.NamespaceName }),
    ...(input.OptionalParameters !== undefined &&
      input.OptionalParameters !== null && {
        OptionalParameters: serializeAws_json1_1Attributes(input.OptionalParameters, context),
      }),
    ...(input.QueryParameters !== undefined &&
      input.QueryParameters !== null && {
        QueryParameters: serializeAws_json1_1Attributes(input.QueryParameters, context),
      }),
    ...(input.ServiceName !== undefined && input.ServiceName !== null && { ServiceName: input.ServiceName }),
  };
};

const serializeAws_json1_1DnsConfig = (input: DnsConfig, context: __SerdeContext): any => {
  return {
    ...(input.DnsRecords !== undefined &&
      input.DnsRecords !== null && { DnsRecords: serializeAws_json1_1DnsRecordList(input.DnsRecords, context) }),
    ...(input.NamespaceId !== undefined && input.NamespaceId !== null && { NamespaceId: input.NamespaceId }),
    ...(input.RoutingPolicy !== undefined && input.RoutingPolicy !== null && { RoutingPolicy: input.RoutingPolicy }),
  };
};

const serializeAws_json1_1DnsConfigChange = (input: DnsConfigChange, context: __SerdeContext): any => {
  return {
    ...(input.DnsRecords !== undefined &&
      input.DnsRecords !== null && { DnsRecords: serializeAws_json1_1DnsRecordList(input.DnsRecords, context) }),
  };
};

const serializeAws_json1_1DnsRecord = (input: DnsRecord, context: __SerdeContext): any => {
  return {
    ...(input.TTL !== undefined && input.TTL !== null && { TTL: input.TTL }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1DnsRecordList = (input: DnsRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1DnsRecord(entry, context);
    });
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1GetInstanceRequest = (input: GetInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
  };
};

const serializeAws_json1_1GetInstancesHealthStatusRequest = (
  input: GetInstancesHealthStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Instances !== undefined &&
      input.Instances !== null && { Instances: serializeAws_json1_1InstanceIdList(input.Instances, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
  };
};

const serializeAws_json1_1GetNamespaceRequest = (input: GetNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_json1_1GetOperationRequest = (input: GetOperationRequest, context: __SerdeContext): any => {
  return {
    ...(input.OperationId !== undefined && input.OperationId !== null && { OperationId: input.OperationId }),
  };
};

const serializeAws_json1_1GetServiceRequest = (input: GetServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
  };
};

const serializeAws_json1_1HealthCheckConfig = (input: HealthCheckConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailureThreshold !== undefined &&
      input.FailureThreshold !== null && { FailureThreshold: input.FailureThreshold }),
    ...(input.ResourcePath !== undefined && input.ResourcePath !== null && { ResourcePath: input.ResourcePath }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_json1_1HealthCheckCustomConfig = (input: HealthCheckCustomConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailureThreshold !== undefined &&
      input.FailureThreshold !== null && { FailureThreshold: input.FailureThreshold }),
  };
};

const serializeAws_json1_1HttpNamespaceChange = (input: HttpNamespaceChange, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
  };
};

const serializeAws_json1_1InstanceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1ListInstancesRequest = (input: ListInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
  };
};

const serializeAws_json1_1ListNamespacesRequest = (input: ListNamespacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1NamespaceFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1OperationFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters !== undefined &&
      input.Filters !== null && { Filters: serializeAws_json1_1ServiceFilters(input.Filters, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1NamespaceFilter = (input: NamespaceFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1NamespaceFilters = (input: NamespaceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1NamespaceFilter(entry, context);
    });
};

const serializeAws_json1_1OperationFilter = (input: OperationFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1OperationFilters = (input: OperationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1OperationFilter(entry, context);
    });
};

const serializeAws_json1_1PrivateDnsNamespaceChange = (
  input: PrivateDnsNamespaceChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && {
        Properties: serializeAws_json1_1PrivateDnsNamespacePropertiesChange(input.Properties, context),
      }),
  };
};

const serializeAws_json1_1PrivateDnsNamespaceProperties = (
  input: PrivateDnsNamespaceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsProperties !== undefined &&
      input.DnsProperties !== null && {
        DnsProperties: serializeAws_json1_1PrivateDnsPropertiesMutable(input.DnsProperties, context),
      }),
  };
};

const serializeAws_json1_1PrivateDnsNamespacePropertiesChange = (
  input: PrivateDnsNamespacePropertiesChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsProperties !== undefined &&
      input.DnsProperties !== null && {
        DnsProperties: serializeAws_json1_1PrivateDnsPropertiesMutableChange(input.DnsProperties, context),
      }),
  };
};

const serializeAws_json1_1PrivateDnsPropertiesMutable = (
  input: PrivateDnsPropertiesMutable,
  context: __SerdeContext
): any => {
  return {
    ...(input.SOA !== undefined && input.SOA !== null && { SOA: serializeAws_json1_1SOA(input.SOA, context) }),
  };
};

const serializeAws_json1_1PrivateDnsPropertiesMutableChange = (
  input: PrivateDnsPropertiesMutableChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.SOA !== undefined && input.SOA !== null && { SOA: serializeAws_json1_1SOAChange(input.SOA, context) }),
  };
};

const serializeAws_json1_1PublicDnsNamespaceChange = (
  input: PublicDnsNamespaceChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Properties !== undefined &&
      input.Properties !== null && {
        Properties: serializeAws_json1_1PublicDnsNamespacePropertiesChange(input.Properties, context),
      }),
  };
};

const serializeAws_json1_1PublicDnsNamespaceProperties = (
  input: PublicDnsNamespaceProperties,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsProperties !== undefined &&
      input.DnsProperties !== null && {
        DnsProperties: serializeAws_json1_1PublicDnsPropertiesMutable(input.DnsProperties, context),
      }),
  };
};

const serializeAws_json1_1PublicDnsNamespacePropertiesChange = (
  input: PublicDnsNamespacePropertiesChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsProperties !== undefined &&
      input.DnsProperties !== null && {
        DnsProperties: serializeAws_json1_1PublicDnsPropertiesMutableChange(input.DnsProperties, context),
      }),
  };
};

const serializeAws_json1_1PublicDnsPropertiesMutable = (
  input: PublicDnsPropertiesMutable,
  context: __SerdeContext
): any => {
  return {
    ...(input.SOA !== undefined && input.SOA !== null && { SOA: serializeAws_json1_1SOA(input.SOA, context) }),
  };
};

const serializeAws_json1_1PublicDnsPropertiesMutableChange = (
  input: PublicDnsPropertiesMutableChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.SOA !== undefined && input.SOA !== null && { SOA: serializeAws_json1_1SOAChange(input.SOA, context) }),
  };
};

const serializeAws_json1_1RegisterInstanceRequest = (input: RegisterInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes !== undefined &&
      input.Attributes !== null && { Attributes: serializeAws_json1_1Attributes(input.Attributes, context) }),
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
  };
};

const serializeAws_json1_1ServiceChange = (input: ServiceChange, context: __SerdeContext): any => {
  return {
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.DnsConfig !== undefined &&
      input.DnsConfig !== null && { DnsConfig: serializeAws_json1_1DnsConfigChange(input.DnsConfig, context) }),
    ...(input.HealthCheckConfig !== undefined &&
      input.HealthCheckConfig !== null && {
        HealthCheckConfig: serializeAws_json1_1HealthCheckConfig(input.HealthCheckConfig, context),
      }),
  };
};

const serializeAws_json1_1ServiceFilter = (input: ServiceFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition !== undefined && input.Condition !== null && { Condition: input.Condition }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1ServiceFilters = (input: ServiceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1ServiceFilter(entry, context);
    });
};

const serializeAws_json1_1SOA = (input: SOA, context: __SerdeContext): any => {
  return {
    ...(input.TTL !== undefined && input.TTL !== null && { TTL: input.TTL }),
  };
};

const serializeAws_json1_1SOAChange = (input: SOAChange, context: __SerdeContext): any => {
  return {
    ...(input.TTL !== undefined && input.TTL !== null && { TTL: input.TTL }),
  };
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key !== undefined && input.Key !== null && { Key: input.Key }),
    ...(input.Value !== undefined && input.Value !== null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_1TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_1TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN !== undefined && input.ResourceARN !== null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_json1_1TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateHttpNamespaceRequest = (
  input: UpdateHttpNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Namespace !== undefined &&
      input.Namespace !== null && { Namespace: serializeAws_json1_1HttpNamespaceChange(input.Namespace, context) }),
    UpdaterRequestId: input.UpdaterRequestId ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest = (
  input: UpdateInstanceCustomHealthStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId !== undefined && input.InstanceId !== null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId !== undefined && input.ServiceId !== null && { ServiceId: input.ServiceId }),
    ...(input.Status !== undefined && input.Status !== null && { Status: input.Status }),
  };
};

const serializeAws_json1_1UpdatePrivateDnsNamespaceRequest = (
  input: UpdatePrivateDnsNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Namespace !== undefined &&
      input.Namespace !== null && {
        Namespace: serializeAws_json1_1PrivateDnsNamespaceChange(input.Namespace, context),
      }),
    UpdaterRequestId: input.UpdaterRequestId ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1UpdatePublicDnsNamespaceRequest = (
  input: UpdatePublicDnsNamespaceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Namespace !== undefined &&
      input.Namespace !== null && {
        Namespace: serializeAws_json1_1PublicDnsNamespaceChange(input.Namespace, context),
      }),
    UpdaterRequestId: input.UpdaterRequestId ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Service !== undefined &&
      input.Service !== null && { Service: serializeAws_json1_1ServiceChange(input.Service, context) }),
  };
};

const deserializeAws_json1_1Attributes = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_json1_1CreateHttpNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreateHttpNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1CreatePrivateDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreatePrivateDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1CreatePublicDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreatePublicDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_1Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CustomHealthNotFound = (output: any, context: __SerdeContext): CustomHealthNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DeleteNamespaceResponse = (
  output: any,
  context: __SerdeContext
): DeleteNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {} as any;
};

const deserializeAws_json1_1DeregisterInstanceResponse = (
  output: any,
  context: __SerdeContext
): DeregisterInstanceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1DiscoverInstancesResponse = (
  output: any,
  context: __SerdeContext
): DiscoverInstancesResponse => {
  return {
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1HttpInstanceSummaryList(output.Instances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DnsConfig = (output: any, context: __SerdeContext): DnsConfig => {
  return {
    DnsRecords:
      output.DnsRecords !== undefined && output.DnsRecords !== null
        ? deserializeAws_json1_1DnsRecordList(output.DnsRecords, context)
        : undefined,
    NamespaceId: __expectString(output.NamespaceId),
    RoutingPolicy: __expectString(output.RoutingPolicy),
  } as any;
};

const deserializeAws_json1_1DnsProperties = (output: any, context: __SerdeContext): DnsProperties => {
  return {
    HostedZoneId: __expectString(output.HostedZoneId),
    SOA: output.SOA !== undefined && output.SOA !== null ? deserializeAws_json1_1SOA(output.SOA, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DnsRecord = (output: any, context: __SerdeContext): DnsRecord => {
  return {
    TTL: __expectInt(output.TTL),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DnsRecordList = (output: any, context: __SerdeContext): DnsRecord[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DnsRecord(entry, context);
    });
};

const deserializeAws_json1_1DuplicateRequest = (output: any, context: __SerdeContext): DuplicateRequest => {
  return {
    DuplicateOperationId: __expectString(output.DuplicateOperationId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1GetInstanceResponse = (output: any, context: __SerdeContext): GetInstanceResponse => {
  return {
    Instance:
      output.Instance !== undefined && output.Instance !== null
        ? deserializeAws_json1_1Instance(output.Instance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetInstancesHealthStatusResponse = (
  output: any,
  context: __SerdeContext
): GetInstancesHealthStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status:
      output.Status !== undefined && output.Status !== null
        ? deserializeAws_json1_1InstanceHealthStatusMap(output.Status, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetNamespaceResponse = (output: any, context: __SerdeContext): GetNamespaceResponse => {
  return {
    Namespace:
      output.Namespace !== undefined && output.Namespace !== null
        ? deserializeAws_json1_1Namespace(output.Namespace, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetOperationResponse = (output: any, context: __SerdeContext): GetOperationResponse => {
  return {
    Operation:
      output.Operation !== undefined && output.Operation !== null
        ? deserializeAws_json1_1Operation(output.Operation, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1GetServiceResponse = (output: any, context: __SerdeContext): GetServiceResponse => {
  return {
    Service:
      output.Service !== undefined && output.Service !== null
        ? deserializeAws_json1_1Service(output.Service, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1HealthCheckConfig = (output: any, context: __SerdeContext): HealthCheckConfig => {
  return {
    FailureThreshold: __expectInt(output.FailureThreshold),
    ResourcePath: __expectString(output.ResourcePath),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1HealthCheckCustomConfig = (
  output: any,
  context: __SerdeContext
): HealthCheckCustomConfig => {
  return {
    FailureThreshold: __expectInt(output.FailureThreshold),
  } as any;
};

const deserializeAws_json1_1HttpInstanceSummary = (output: any, context: __SerdeContext): HttpInstanceSummary => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    HealthStatus: __expectString(output.HealthStatus),
    InstanceId: __expectString(output.InstanceId),
    NamespaceName: __expectString(output.NamespaceName),
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

const deserializeAws_json1_1HttpInstanceSummaryList = (output: any, context: __SerdeContext): HttpInstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1HttpInstanceSummary(entry, context);
    });
};

const deserializeAws_json1_1HttpProperties = (output: any, context: __SerdeContext): HttpProperties => {
  return {
    HttpName: __expectString(output.HttpName),
  } as any;
};

const deserializeAws_json1_1Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1InstanceHealthStatusMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: HealthStatus | string } => {
  return Object.entries(output).reduce((acc: { [key: string]: HealthStatus | string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_json1_1InstanceNotFound = (output: any, context: __SerdeContext): InstanceNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    Attributes:
      output.Attributes !== undefined && output.Attributes !== null
        ? deserializeAws_json1_1Attributes(output.Attributes, context)
        : undefined,
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_json1_1InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1InstanceSummary(entry, context);
    });
};

const deserializeAws_json1_1InvalidInput = (output: any, context: __SerdeContext): InvalidInput => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListInstancesResponse = (output: any, context: __SerdeContext): ListInstancesResponse => {
  return {
    Instances:
      output.Instances !== undefined && output.Instances !== null
        ? deserializeAws_json1_1InstanceSummaryList(output.Instances, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListNamespacesResponse = (output: any, context: __SerdeContext): ListNamespacesResponse => {
  return {
    Namespaces:
      output.Namespaces !== undefined && output.Namespaces !== null
        ? deserializeAws_json1_1NamespaceSummariesList(output.Namespaces, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Operations:
      output.Operations !== undefined && output.Operations !== null
        ? deserializeAws_json1_1OperationSummaryList(output.Operations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Services:
      output.Services !== undefined && output.Services !== null
        ? deserializeAws_json1_1ServiceSummariesList(output.Services, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_json1_1TagList(output.Tags, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1Namespace = (output: any, context: __SerdeContext): Namespace => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1NamespaceProperties(output.Properties, context)
        : undefined,
    ServiceCount: __expectInt(output.ServiceCount),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1NamespaceAlreadyExists = (output: any, context: __SerdeContext): NamespaceAlreadyExists => {
  return {
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Message: __expectString(output.Message),
    NamespaceId: __expectString(output.NamespaceId),
  } as any;
};

const deserializeAws_json1_1NamespaceNotFound = (output: any, context: __SerdeContext): NamespaceNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NamespaceProperties = (output: any, context: __SerdeContext): NamespaceProperties => {
  return {
    DnsProperties:
      output.DnsProperties !== undefined && output.DnsProperties !== null
        ? deserializeAws_json1_1DnsProperties(output.DnsProperties, context)
        : undefined,
    HttpProperties:
      output.HttpProperties !== undefined && output.HttpProperties !== null
        ? deserializeAws_json1_1HttpProperties(output.HttpProperties, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1NamespaceSummariesList = (output: any, context: __SerdeContext): NamespaceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1NamespaceSummary(entry, context);
    });
};

const deserializeAws_json1_1NamespaceSummary = (output: any, context: __SerdeContext): NamespaceSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Properties:
      output.Properties !== undefined && output.Properties !== null
        ? deserializeAws_json1_1NamespaceProperties(output.Properties, context)
        : undefined,
    ServiceCount: __expectInt(output.ServiceCount),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    Status: __expectString(output.Status),
    Targets:
      output.Targets !== undefined && output.Targets !== null
        ? deserializeAws_json1_1OperationTargetsMap(output.Targets, context)
        : undefined,
    Type: __expectString(output.Type),
    UpdateDate:
      output.UpdateDate !== undefined && output.UpdateDate !== null
        ? new Date(Math.round(output.UpdateDate * 1000))
        : undefined,
  } as any;
};

const deserializeAws_json1_1OperationNotFound = (output: any, context: __SerdeContext): OperationNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return {
    Id: __expectString(output.Id),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_1OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OperationSummary(entry, context);
    });
};

const deserializeAws_json1_1OperationTargetsMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [OperationTargetType | string, any]) => {
      if (value === null) {
        return acc;
      }
      return {
        ...acc,
        [key]: __expectString(value) as any,
      };
    },
    {}
  );
};

const deserializeAws_json1_1RegisterInstanceResponse = (
  output: any,
  context: __SerdeContext
): RegisterInstanceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1RequestLimitExceeded = (output: any, context: __SerdeContext): RequestLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceInUse = (output: any, context: __SerdeContext): ResourceInUse => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceLimitExceeded = (output: any, context: __SerdeContext): ResourceLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Service = (output: any, context: __SerdeContext): Service => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Description: __expectString(output.Description),
    DnsConfig:
      output.DnsConfig !== undefined && output.DnsConfig !== null
        ? deserializeAws_json1_1DnsConfig(output.DnsConfig, context)
        : undefined,
    HealthCheckConfig:
      output.HealthCheckConfig !== undefined && output.HealthCheckConfig !== null
        ? deserializeAws_json1_1HealthCheckConfig(output.HealthCheckConfig, context)
        : undefined,
    HealthCheckCustomConfig:
      output.HealthCheckCustomConfig !== undefined && output.HealthCheckCustomConfig !== null
        ? deserializeAws_json1_1HealthCheckCustomConfig(output.HealthCheckCustomConfig, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceCount: __expectInt(output.InstanceCount),
    Name: __expectString(output.Name),
    NamespaceId: __expectString(output.NamespaceId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1ServiceAlreadyExists = (output: any, context: __SerdeContext): ServiceAlreadyExists => {
  return {
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Message: __expectString(output.Message),
    ServiceId: __expectString(output.ServiceId),
  } as any;
};

const deserializeAws_json1_1ServiceNotFound = (output: any, context: __SerdeContext): ServiceNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ServiceSummariesList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1ServiceSummary(entry, context);
    });
};

const deserializeAws_json1_1ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate !== undefined && output.CreateDate !== null
        ? new Date(Math.round(output.CreateDate * 1000))
        : undefined,
    Description: __expectString(output.Description),
    DnsConfig:
      output.DnsConfig !== undefined && output.DnsConfig !== null
        ? deserializeAws_json1_1DnsConfig(output.DnsConfig, context)
        : undefined,
    HealthCheckConfig:
      output.HealthCheckConfig !== undefined && output.HealthCheckConfig !== null
        ? deserializeAws_json1_1HealthCheckConfig(output.HealthCheckConfig, context)
        : undefined,
    HealthCheckCustomConfig:
      output.HealthCheckCustomConfig !== undefined && output.HealthCheckCustomConfig !== null
        ? deserializeAws_json1_1HealthCheckCustomConfig(output.HealthCheckCustomConfig, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceCount: __expectInt(output.InstanceCount),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1SOA = (output: any, context: __SerdeContext): SOA => {
  return {
    TTL: __expectInt(output.TTL),
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateHttpNamespaceResponse = (
  output: any,
  context: __SerdeContext
): UpdateHttpNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1UpdatePrivateDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): UpdatePrivateDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1UpdatePublicDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): UpdatePublicDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_1UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
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

const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};

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
