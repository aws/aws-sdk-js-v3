// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

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
  Service,
  ServiceAlreadyExists,
  ServiceChange,
  ServiceFilter,
  ServiceNotFound,
  ServiceSummary,
  SOA,
  SOAChange,
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
import { ServiceDiscoveryServiceException as __BaseException } from "../models/ServiceDiscoveryServiceException";

/**
 * serializeAws_json1_1CreateHttpNamespaceCommand
 */
export const se_CreateHttpNamespaceCommand = async (
  input: CreateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreateHttpNamespace",
  };
  let body: any;
  body = JSON.stringify(se_CreateHttpNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePrivateDnsNamespaceCommand
 */
export const se_CreatePrivateDnsNamespaceCommand = async (
  input: CreatePrivateDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreatePrivateDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(se_CreatePrivateDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreatePublicDnsNamespaceCommand
 */
export const se_CreatePublicDnsNamespaceCommand = async (
  input: CreatePublicDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreatePublicDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(se_CreatePublicDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.CreateService",
  };
  let body: any;
  body = JSON.stringify(se_CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteNamespaceCommand
 */
export const se_DeleteNamespaceCommand = async (
  input: DeleteNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DeleteNamespace",
  };
  let body: any;
  body = JSON.stringify(se_DeleteNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DeleteService",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterInstanceCommand
 */
export const se_DeregisterInstanceCommand = async (
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DeregisterInstance",
  };
  let body: any;
  body = JSON.stringify(se_DeregisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DiscoverInstancesCommand
 */
export const se_DiscoverInstancesCommand = async (
  input: DiscoverInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.DiscoverInstances",
  };
  let body: any;
  body = JSON.stringify(se_DiscoverInstancesRequest(input, context));
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return buildHttpRpcRequest(context, headers, "/", resolvedHostname, body);
};

/**
 * serializeAws_json1_1GetInstanceCommand
 */
export const se_GetInstanceCommand = async (
  input: GetInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetInstance",
  };
  let body: any;
  body = JSON.stringify(se_GetInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstancesHealthStatusCommand
 */
export const se_GetInstancesHealthStatusCommand = async (
  input: GetInstancesHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetInstancesHealthStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetInstancesHealthStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNamespaceCommand
 */
export const se_GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetNamespace",
  };
  let body: any;
  body = JSON.stringify(se_GetNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationCommand
 */
export const se_GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetOperation",
  };
  let body: any;
  body = JSON.stringify(se_GetOperationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceCommand
 */
export const se_GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.GetService",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListInstances",
  };
  let body: any;
  body = JSON.stringify(se_ListInstancesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNamespacesCommand
 */
export const se_ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListNamespaces",
  };
  let body: any;
  body = JSON.stringify(se_ListNamespacesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOperationsCommand
 */
export const se_ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListOperations",
  };
  let body: any;
  body = JSON.stringify(se_ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListServices",
  };
  let body: any;
  body = JSON.stringify(se_ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterInstanceCommand
 */
export const se_RegisterInstanceCommand = async (
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.RegisterInstance",
  };
  let body: any;
  body = JSON.stringify(se_RegisterInstanceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHttpNamespaceCommand
 */
export const se_UpdateHttpNamespaceCommand = async (
  input: UpdateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdateHttpNamespace",
  };
  let body: any;
  body = JSON.stringify(se_UpdateHttpNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateInstanceCustomHealthStatusCommand
 */
export const se_UpdateInstanceCustomHealthStatusCommand = async (
  input: UpdateInstanceCustomHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus",
  };
  let body: any;
  body = JSON.stringify(se_UpdateInstanceCustomHealthStatusRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePrivateDnsNamespaceCommand
 */
export const se_UpdatePrivateDnsNamespaceCommand = async (
  input: UpdatePrivateDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePrivateDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePublicDnsNamespaceCommand
 */
export const se_UpdatePublicDnsNamespaceCommand = async (
  input: UpdatePublicDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdatePublicDnsNamespace",
  };
  let body: any;
  body = JSON.stringify(se_UpdatePublicDnsNamespaceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateServiceCommand
 */
export const se_UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "Route53AutoNaming_v20170314.UpdateService",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1CreateHttpNamespaceCommand
 */
export const de_CreateHttpNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHttpNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateHttpNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateHttpNamespaceResponse(data, context);
  const response: CreateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateHttpNamespaceCommandError
 */
const de_CreateHttpNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateHttpNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceAlreadyExists":
    case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
      throw await de_NamespaceAlreadyExistsRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePrivateDnsNamespaceCommand
 */
export const de_CreatePrivateDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePrivateDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePrivateDnsNamespaceResponse(data, context);
  const response: CreatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePrivateDnsNamespaceCommandError
 */
const de_CreatePrivateDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePrivateDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceAlreadyExists":
    case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
      throw await de_NamespaceAlreadyExistsRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreatePublicDnsNamespaceCommand
 */
export const de_CreatePublicDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreatePublicDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreatePublicDnsNamespaceResponse(data, context);
  const response: CreatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreatePublicDnsNamespaceCommandError
 */
const de_CreatePublicDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreatePublicDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceAlreadyExists":
    case "com.amazonaws.servicediscovery#NamespaceAlreadyExists":
      throw await de_NamespaceAlreadyExistsRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateServiceCommand
 */
export const de_CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1CreateServiceCommandError
 */
const de_CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ServiceAlreadyExists":
    case "com.amazonaws.servicediscovery#ServiceAlreadyExists":
      throw await de_ServiceAlreadyExistsRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteNamespaceCommand
 */
export const de_DeleteNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteNamespaceResponse(data, context);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteNamespaceCommandError
 */
const de_DeleteNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteServiceCommand
 */
export const de_DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeleteServiceCommandError
 */
const de_DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeregisterInstanceCommand
 */
export const de_DeregisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeregisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeregisterInstanceResponse(data, context);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DeregisterInstanceCommandError
 */
const de_DeregisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      throw await de_InstanceNotFoundRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DiscoverInstancesCommand
 */
export const de_DiscoverInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DiscoverInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DiscoverInstancesResponse(data, context);
  const response: DiscoverInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1DiscoverInstancesCommandError
 */
const de_DiscoverInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    case "RequestLimitExceeded":
    case "com.amazonaws.servicediscovery#RequestLimitExceeded":
      throw await de_RequestLimitExceededRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstanceCommand
 */
export const de_GetInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstanceResponse(data, context);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstanceCommandError
 */
const de_GetInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      throw await de_InstanceNotFoundRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetInstancesHealthStatusCommand
 */
export const de_GetInstancesHealthStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesHealthStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetInstancesHealthStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetInstancesHealthStatusResponse(data, context);
  const response: GetInstancesHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetInstancesHealthStatusCommandError
 */
const de_GetInstancesHealthStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInstancesHealthStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      throw await de_InstanceNotFoundRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetNamespaceCommand
 */
export const de_GetNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetNamespaceResponse(data, context);
  const response: GetNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetNamespaceCommandError
 */
const de_GetNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetOperationCommand
 */
export const de_GetOperationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetOperationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetOperationResponse(data, context);
  const response: GetOperationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetOperationCommandError
 */
const de_GetOperationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOperationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "OperationNotFound":
    case "com.amazonaws.servicediscovery#OperationNotFound":
      throw await de_OperationNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1GetServiceCommand
 */
export const de_GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceResponse(data, context);
  const response: GetServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1GetServiceCommandError
 */
const de_GetServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListInstancesCommand
 */
export const de_ListInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListInstancesResponse(data, context);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListInstancesCommandError
 */
const de_ListInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListNamespacesCommand
 */
export const de_ListNamespacesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListNamespacesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListNamespacesResponse(data, context);
  const response: ListNamespacesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListNamespacesCommandError
 */
const de_ListNamespacesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNamespacesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListOperationsCommand
 */
export const de_ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListOperationsCommandError
 */
const de_ListOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListServicesCommand
 */
export const de_ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListServicesCommandError
 */
const de_ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicediscovery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RegisterInstanceCommand
 */
export const de_RegisterInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RegisterInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RegisterInstanceResponse(data, context);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1RegisterInstanceCommandError
 */
const de_RegisterInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    case "ResourceLimitExceeded":
    case "com.amazonaws.servicediscovery#ResourceLimitExceeded":
      throw await de_ResourceLimitExceededRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicediscovery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "TooManyTagsException":
    case "com.amazonaws.servicediscovery#TooManyTagsException":
      throw await de_TooManyTagsExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.servicediscovery#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateHttpNamespaceCommand
 */
export const de_UpdateHttpNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHttpNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateHttpNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateHttpNamespaceResponse(data, context);
  const response: UpdateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateHttpNamespaceCommandError
 */
const de_UpdateHttpNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateHttpNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommand
 */
export const de_UpdateInstanceCustomHealthStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCustomHealthStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateInstanceCustomHealthStatusCommandError(output, context);
  }
  await collectBody(output.body, context);
  const response: UpdateInstanceCustomHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateInstanceCustomHealthStatusCommandError
 */
const de_UpdateInstanceCustomHealthStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInstanceCustomHealthStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "CustomHealthNotFound":
    case "com.amazonaws.servicediscovery#CustomHealthNotFound":
      throw await de_CustomHealthNotFoundRes(parsedOutput, context);
    case "InstanceNotFound":
    case "com.amazonaws.servicediscovery#InstanceNotFound":
      throw await de_InstanceNotFoundRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePrivateDnsNamespaceCommand
 */
export const de_UpdatePrivateDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivateDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePrivateDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePrivateDnsNamespaceResponse(data, context);
  const response: UpdatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePrivateDnsNamespaceCommandError
 */
const de_UpdatePrivateDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePrivateDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdatePublicDnsNamespaceCommand
 */
export const de_UpdatePublicDnsNamespaceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicDnsNamespaceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdatePublicDnsNamespaceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdatePublicDnsNamespaceResponse(data, context);
  const response: UpdatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdatePublicDnsNamespaceCommandError
 */
const de_UpdatePublicDnsNamespaceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePublicDnsNamespaceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "NamespaceNotFound":
    case "com.amazonaws.servicediscovery#NamespaceNotFound":
      throw await de_NamespaceNotFoundRes(parsedOutput, context);
    case "ResourceInUse":
    case "com.amazonaws.servicediscovery#ResourceInUse":
      throw await de_ResourceInUseRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateServiceCommand
 */
export const de_UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

/**
 * deserializeAws_json1_1UpdateServiceCommandError
 */
const de_UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DuplicateRequest":
    case "com.amazonaws.servicediscovery#DuplicateRequest":
      throw await de_DuplicateRequestRes(parsedOutput, context);
    case "InvalidInput":
    case "com.amazonaws.servicediscovery#InvalidInput":
      throw await de_InvalidInputRes(parsedOutput, context);
    case "ServiceNotFound":
    case "com.amazonaws.servicediscovery#ServiceNotFound":
      throw await de_ServiceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CustomHealthNotFoundRes
 */
const de_CustomHealthNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<CustomHealthNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_CustomHealthNotFound(body, context);
  const exception = new CustomHealthNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DuplicateRequestRes
 */
const de_DuplicateRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<DuplicateRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = de_DuplicateRequest(body, context);
  const exception = new DuplicateRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InstanceNotFoundRes
 */
const de_InstanceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<InstanceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InstanceNotFound(body, context);
  const exception = new InstanceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidInputRes
 */
const de_InvalidInputRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidInput> => {
  const body = parsedOutput.body;
  const deserialized: any = de_InvalidInput(body, context);
  const exception = new InvalidInput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NamespaceAlreadyExistsRes
 */
const de_NamespaceAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NamespaceAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NamespaceAlreadyExists(body, context);
  const exception = new NamespaceAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NamespaceNotFoundRes
 */
const de_NamespaceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<NamespaceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_NamespaceNotFound(body, context);
  const exception = new NamespaceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1OperationNotFoundRes
 */
const de_OperationNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<OperationNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_OperationNotFound(body, context);
  const exception = new OperationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1RequestLimitExceededRes
 */
const de_RequestLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_RequestLimitExceeded(body, context);
  const exception = new RequestLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceInUseRes
 */
const de_ResourceInUseRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceInUse> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceInUse(body, context);
  const exception = new ResourceInUse({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceLimitExceededRes
 */
const de_ResourceLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceLimitExceeded(body, context);
  const exception = new ResourceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceAlreadyExistsRes
 */
const de_ServiceAlreadyExistsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceAlreadyExists> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceAlreadyExists(body, context);
  const exception = new ServiceAlreadyExists({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceNotFoundRes
 */
const de_ServiceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServiceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ServiceNotFound(body, context);
  const exception = new ServiceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1TooManyTagsExceptionRes
 */
const de_TooManyTagsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_TooManyTagsException(body, context);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1Attributes
 */
const se_Attributes = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_1CreateHttpNamespaceRequest
 */
const se_CreateHttpNamespaceRequest = (input: CreateHttpNamespaceRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreatePrivateDnsNamespaceRequest
 */
const se_CreatePrivateDnsNamespaceRequest = (input: CreatePrivateDnsNamespaceRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Properties != null && { Properties: se_PrivateDnsNamespaceProperties(input.Properties, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Vpc != null && { Vpc: input.Vpc }),
  };
};

/**
 * serializeAws_json1_1CreatePublicDnsNamespaceRequest
 */
const se_CreatePublicDnsNamespaceRequest = (input: CreatePublicDnsNamespaceRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Properties != null && { Properties: se_PublicDnsNamespaceProperties(input.Properties, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateServiceRequest
 */
const se_CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DnsConfig != null && { DnsConfig: se_DnsConfig(input.DnsConfig, context) }),
    ...(input.HealthCheckConfig != null && {
      HealthCheckConfig: se_HealthCheckConfig(input.HealthCheckConfig, context),
    }),
    ...(input.HealthCheckCustomConfig != null && {
      HealthCheckCustomConfig: se_HealthCheckCustomConfig(input.HealthCheckCustomConfig, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NamespaceId != null && { NamespaceId: input.NamespaceId }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DeleteNamespaceRequest
 */
const se_DeleteNamespaceRequest = (input: DeleteNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeleteServiceRequest
 */
const se_DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1DeregisterInstanceRequest
 */
const se_DeregisterInstanceRequest = (input: DeregisterInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
  };
};

/**
 * serializeAws_json1_1DiscoverInstancesRequest
 */
const se_DiscoverInstancesRequest = (input: DiscoverInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.HealthStatus != null && { HealthStatus: input.HealthStatus }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NamespaceName != null && { NamespaceName: input.NamespaceName }),
    ...(input.OptionalParameters != null && { OptionalParameters: se_Attributes(input.OptionalParameters, context) }),
    ...(input.QueryParameters != null && { QueryParameters: se_Attributes(input.QueryParameters, context) }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
  };
};

/**
 * serializeAws_json1_1DnsConfig
 */
const se_DnsConfig = (input: DnsConfig, context: __SerdeContext): any => {
  return {
    ...(input.DnsRecords != null && { DnsRecords: se_DnsRecordList(input.DnsRecords, context) }),
    ...(input.NamespaceId != null && { NamespaceId: input.NamespaceId }),
    ...(input.RoutingPolicy != null && { RoutingPolicy: input.RoutingPolicy }),
  };
};

/**
 * serializeAws_json1_1DnsConfigChange
 */
const se_DnsConfigChange = (input: DnsConfigChange, context: __SerdeContext): any => {
  return {
    ...(input.DnsRecords != null && { DnsRecords: se_DnsRecordList(input.DnsRecords, context) }),
  };
};

/**
 * serializeAws_json1_1DnsRecord
 */
const se_DnsRecord = (input: DnsRecord, context: __SerdeContext): any => {
  return {
    ...(input.TTL != null && { TTL: input.TTL }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1DnsRecordList
 */
const se_DnsRecordList = (input: DnsRecord[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DnsRecord(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1GetInstanceRequest
 */
const se_GetInstanceRequest = (input: GetInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
  };
};

/**
 * serializeAws_json1_1GetInstancesHealthStatusRequest
 */
const se_GetInstancesHealthStatusRequest = (input: GetInstancesHealthStatusRequest, context: __SerdeContext): any => {
  return {
    ...(input.Instances != null && { Instances: se_InstanceIdList(input.Instances, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
  };
};

/**
 * serializeAws_json1_1GetNamespaceRequest
 */
const se_GetNamespaceRequest = (input: GetNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1GetOperationRequest
 */
const se_GetOperationRequest = (input: GetOperationRequest, context: __SerdeContext): any => {
  return {
    ...(input.OperationId != null && { OperationId: input.OperationId }),
  };
};

/**
 * serializeAws_json1_1GetServiceRequest
 */
const se_GetServiceRequest = (input: GetServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
  };
};

/**
 * serializeAws_json1_1HealthCheckConfig
 */
const se_HealthCheckConfig = (input: HealthCheckConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailureThreshold != null && { FailureThreshold: input.FailureThreshold }),
    ...(input.ResourcePath != null && { ResourcePath: input.ResourcePath }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1HealthCheckCustomConfig
 */
const se_HealthCheckCustomConfig = (input: HealthCheckCustomConfig, context: __SerdeContext): any => {
  return {
    ...(input.FailureThreshold != null && { FailureThreshold: input.FailureThreshold }),
  };
};

/**
 * serializeAws_json1_1HttpNamespaceChange
 */
const se_HttpNamespaceChange = (input: HttpNamespaceChange, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
  };
};

/**
 * serializeAws_json1_1InstanceIdList
 */
const se_InstanceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListInstancesRequest
 */
const se_ListInstancesRequest = (input: ListInstancesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
  };
};

/**
 * serializeAws_json1_1ListNamespacesRequest
 */
const se_ListNamespacesRequest = (input: ListNamespacesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_NamespaceFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListOperationsRequest
 */
const se_ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_OperationFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListServicesRequest
 */
const se_ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_ServiceFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1NamespaceFilter
 */
const se_NamespaceFilter = (input: NamespaceFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1NamespaceFilters
 */
const se_NamespaceFilters = (input: NamespaceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_NamespaceFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1OperationFilter
 */
const se_OperationFilter = (input: OperationFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1OperationFilters
 */
const se_OperationFilters = (input: OperationFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OperationFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1PrivateDnsNamespaceChange
 */
const se_PrivateDnsNamespaceChange = (input: PrivateDnsNamespaceChange, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Properties != null && { Properties: se_PrivateDnsNamespacePropertiesChange(input.Properties, context) }),
  };
};

/**
 * serializeAws_json1_1PrivateDnsNamespaceProperties
 */
const se_PrivateDnsNamespaceProperties = (input: PrivateDnsNamespaceProperties, context: __SerdeContext): any => {
  return {
    ...(input.DnsProperties != null && { DnsProperties: se_PrivateDnsPropertiesMutable(input.DnsProperties, context) }),
  };
};

/**
 * serializeAws_json1_1PrivateDnsNamespacePropertiesChange
 */
const se_PrivateDnsNamespacePropertiesChange = (
  input: PrivateDnsNamespacePropertiesChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsProperties != null && {
      DnsProperties: se_PrivateDnsPropertiesMutableChange(input.DnsProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1PrivateDnsPropertiesMutable
 */
const se_PrivateDnsPropertiesMutable = (input: PrivateDnsPropertiesMutable, context: __SerdeContext): any => {
  return {
    ...(input.SOA != null && { SOA: se_SOA(input.SOA, context) }),
  };
};

/**
 * serializeAws_json1_1PrivateDnsPropertiesMutableChange
 */
const se_PrivateDnsPropertiesMutableChange = (
  input: PrivateDnsPropertiesMutableChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.SOA != null && { SOA: se_SOAChange(input.SOA, context) }),
  };
};

/**
 * serializeAws_json1_1PublicDnsNamespaceChange
 */
const se_PublicDnsNamespaceChange = (input: PublicDnsNamespaceChange, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Properties != null && { Properties: se_PublicDnsNamespacePropertiesChange(input.Properties, context) }),
  };
};

/**
 * serializeAws_json1_1PublicDnsNamespaceProperties
 */
const se_PublicDnsNamespaceProperties = (input: PublicDnsNamespaceProperties, context: __SerdeContext): any => {
  return {
    ...(input.DnsProperties != null && { DnsProperties: se_PublicDnsPropertiesMutable(input.DnsProperties, context) }),
  };
};

/**
 * serializeAws_json1_1PublicDnsNamespacePropertiesChange
 */
const se_PublicDnsNamespacePropertiesChange = (
  input: PublicDnsNamespacePropertiesChange,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsProperties != null && {
      DnsProperties: se_PublicDnsPropertiesMutableChange(input.DnsProperties, context),
    }),
  };
};

/**
 * serializeAws_json1_1PublicDnsPropertiesMutable
 */
const se_PublicDnsPropertiesMutable = (input: PublicDnsPropertiesMutable, context: __SerdeContext): any => {
  return {
    ...(input.SOA != null && { SOA: se_SOA(input.SOA, context) }),
  };
};

/**
 * serializeAws_json1_1PublicDnsPropertiesMutableChange
 */
const se_PublicDnsPropertiesMutableChange = (input: PublicDnsPropertiesMutableChange, context: __SerdeContext): any => {
  return {
    ...(input.SOA != null && { SOA: se_SOAChange(input.SOA, context) }),
  };
};

/**
 * serializeAws_json1_1RegisterInstanceRequest
 */
const se_RegisterInstanceRequest = (input: RegisterInstanceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Attributes != null && { Attributes: se_Attributes(input.Attributes, context) }),
    CreatorRequestId: input.CreatorRequestId ?? generateIdempotencyToken(),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
  };
};

/**
 * serializeAws_json1_1ServiceChange
 */
const se_ServiceChange = (input: ServiceChange, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DnsConfig != null && { DnsConfig: se_DnsConfigChange(input.DnsConfig, context) }),
    ...(input.HealthCheckConfig != null && {
      HealthCheckConfig: se_HealthCheckConfig(input.HealthCheckConfig, context),
    }),
  };
};

/**
 * serializeAws_json1_1ServiceFilter
 */
const se_ServiceFilter = (input: ServiceFilter, context: __SerdeContext): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1ServiceFilters
 */
const se_ServiceFilters = (input: ServiceFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ServiceFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1SOA
 */
const se_SOA = (input: SOA, context: __SerdeContext): any => {
  return {
    ...(input.TTL != null && { TTL: input.TTL }),
  };
};

/**
 * serializeAws_json1_1SOAChange
 */
const se_SOAChange = (input: SOAChange, context: __SerdeContext): any => {
  return {
    ...(input.TTL != null && { TTL: input.TTL }),
  };
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateHttpNamespaceRequest
 */
const se_UpdateHttpNamespaceRequest = (input: UpdateHttpNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Namespace != null && { Namespace: se_HttpNamespaceChange(input.Namespace, context) }),
    UpdaterRequestId: input.UpdaterRequestId ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1UpdateInstanceCustomHealthStatusRequest
 */
const se_UpdateInstanceCustomHealthStatusRequest = (
  input: UpdateInstanceCustomHealthStatusRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

/**
 * serializeAws_json1_1UpdatePrivateDnsNamespaceRequest
 */
const se_UpdatePrivateDnsNamespaceRequest = (input: UpdatePrivateDnsNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Namespace != null && { Namespace: se_PrivateDnsNamespaceChange(input.Namespace, context) }),
    UpdaterRequestId: input.UpdaterRequestId ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1UpdatePublicDnsNamespaceRequest
 */
const se_UpdatePublicDnsNamespaceRequest = (input: UpdatePublicDnsNamespaceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Namespace != null && { Namespace: se_PublicDnsNamespaceChange(input.Namespace, context) }),
    UpdaterRequestId: input.UpdaterRequestId ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1UpdateServiceRequest
 */
const se_UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Service != null && { Service: se_ServiceChange(input.Service, context) }),
  };
};

/**
 * deserializeAws_json1_1Attributes
 */
const de_Attributes = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1CreateHttpNamespaceResponse
 */
const de_CreateHttpNamespaceResponse = (output: any, context: __SerdeContext): CreateHttpNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePrivateDnsNamespaceResponse
 */
const de_CreatePrivateDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreatePrivateDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreatePublicDnsNamespaceResponse
 */
const de_CreatePublicDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): CreatePublicDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1CreateServiceResponse
 */
const de_CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CustomHealthNotFound
 */
const de_CustomHealthNotFound = (output: any, context: __SerdeContext): CustomHealthNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteNamespaceResponse
 */
const de_DeleteNamespaceResponse = (output: any, context: __SerdeContext): DeleteNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteServiceResponse
 */
const de_DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1DeregisterInstanceResponse
 */
const de_DeregisterInstanceResponse = (output: any, context: __SerdeContext): DeregisterInstanceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1DiscoverInstancesResponse
 */
const de_DiscoverInstancesResponse = (output: any, context: __SerdeContext): DiscoverInstancesResponse => {
  return {
    Instances: output.Instances != null ? de_HttpInstanceSummaryList(output.Instances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DnsConfig
 */
const de_DnsConfig = (output: any, context: __SerdeContext): DnsConfig => {
  return {
    DnsRecords: output.DnsRecords != null ? de_DnsRecordList(output.DnsRecords, context) : undefined,
    NamespaceId: __expectString(output.NamespaceId),
    RoutingPolicy: __expectString(output.RoutingPolicy),
  } as any;
};

/**
 * deserializeAws_json1_1DnsProperties
 */
const de_DnsProperties = (output: any, context: __SerdeContext): DnsProperties => {
  return {
    HostedZoneId: __expectString(output.HostedZoneId),
    SOA: output.SOA != null ? de_SOA(output.SOA, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DnsRecord
 */
const de_DnsRecord = (output: any, context: __SerdeContext): DnsRecord => {
  return {
    TTL: __expectLong(output.TTL),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DnsRecordList
 */
const de_DnsRecordList = (output: any, context: __SerdeContext): DnsRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DnsRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DuplicateRequest
 */
const de_DuplicateRequest = (output: any, context: __SerdeContext): DuplicateRequest => {
  return {
    DuplicateOperationId: __expectString(output.DuplicateOperationId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1GetInstanceResponse
 */
const de_GetInstanceResponse = (output: any, context: __SerdeContext): GetInstanceResponse => {
  return {
    Instance: output.Instance != null ? de_Instance(output.Instance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetInstancesHealthStatusResponse
 */
const de_GetInstancesHealthStatusResponse = (
  output: any,
  context: __SerdeContext
): GetInstancesHealthStatusResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Status: output.Status != null ? de_InstanceHealthStatusMap(output.Status, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetNamespaceResponse
 */
const de_GetNamespaceResponse = (output: any, context: __SerdeContext): GetNamespaceResponse => {
  return {
    Namespace: output.Namespace != null ? de_Namespace(output.Namespace, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetOperationResponse
 */
const de_GetOperationResponse = (output: any, context: __SerdeContext): GetOperationResponse => {
  return {
    Operation: output.Operation != null ? de_Operation(output.Operation, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1GetServiceResponse
 */
const de_GetServiceResponse = (output: any, context: __SerdeContext): GetServiceResponse => {
  return {
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1HealthCheckConfig
 */
const de_HealthCheckConfig = (output: any, context: __SerdeContext): HealthCheckConfig => {
  return {
    FailureThreshold: __expectInt32(output.FailureThreshold),
    ResourcePath: __expectString(output.ResourcePath),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1HealthCheckCustomConfig
 */
const de_HealthCheckCustomConfig = (output: any, context: __SerdeContext): HealthCheckCustomConfig => {
  return {
    FailureThreshold: __expectInt32(output.FailureThreshold),
  } as any;
};

/**
 * deserializeAws_json1_1HttpInstanceSummary
 */
const de_HttpInstanceSummary = (output: any, context: __SerdeContext): HttpInstanceSummary => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    HealthStatus: __expectString(output.HealthStatus),
    InstanceId: __expectString(output.InstanceId),
    NamespaceName: __expectString(output.NamespaceName),
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

/**
 * deserializeAws_json1_1HttpInstanceSummaryList
 */
const de_HttpInstanceSummaryList = (output: any, context: __SerdeContext): HttpInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_HttpInstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1HttpProperties
 */
const de_HttpProperties = (output: any, context: __SerdeContext): HttpProperties => {
  return {
    HttpName: __expectString(output.HttpName),
  } as any;
};

/**
 * deserializeAws_json1_1Instance
 */
const de_Instance = (output: any, context: __SerdeContext): Instance => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceHealthStatusMap
 */
const de_InstanceHealthStatusMap = (output: any, context: __SerdeContext): Record<string, HealthStatus | string> => {
  return Object.entries(output).reduce((acc: Record<string, HealthStatus | string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_1InstanceNotFound
 */
const de_InstanceNotFound = (output: any, context: __SerdeContext): InstanceNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceSummary
 */
const de_InstanceSummary = (output: any, context: __SerdeContext): InstanceSummary => {
  return {
    Attributes: output.Attributes != null ? de_Attributes(output.Attributes, context) : undefined,
    Id: __expectString(output.Id),
  } as any;
};

/**
 * deserializeAws_json1_1InstanceSummaryList
 */
const de_InstanceSummaryList = (output: any, context: __SerdeContext): InstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1InvalidInput
 */
const de_InvalidInput = (output: any, context: __SerdeContext): InvalidInput => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListInstancesResponse
 */
const de_ListInstancesResponse = (output: any, context: __SerdeContext): ListInstancesResponse => {
  return {
    Instances: output.Instances != null ? de_InstanceSummaryList(output.Instances, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListNamespacesResponse
 */
const de_ListNamespacesResponse = (output: any, context: __SerdeContext): ListNamespacesResponse => {
  return {
    Namespaces: output.Namespaces != null ? de_NamespaceSummariesList(output.Namespaces, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1ListOperationsResponse
 */
const de_ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Operations: output.Operations != null ? de_OperationSummaryList(output.Operations, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListServicesResponse
 */
const de_ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Services: output.Services != null ? de_ServiceSummariesList(output.Services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Namespace
 */
const de_Namespace = (output: any, context: __SerdeContext): Namespace => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Properties: output.Properties != null ? de_NamespaceProperties(output.Properties, context) : undefined,
    ServiceCount: __expectInt32(output.ServiceCount),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1NamespaceAlreadyExists
 */
const de_NamespaceAlreadyExists = (output: any, context: __SerdeContext): NamespaceAlreadyExists => {
  return {
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Message: __expectString(output.Message),
    NamespaceId: __expectString(output.NamespaceId),
  } as any;
};

/**
 * deserializeAws_json1_1NamespaceNotFound
 */
const de_NamespaceNotFound = (output: any, context: __SerdeContext): NamespaceNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NamespaceProperties
 */
const de_NamespaceProperties = (output: any, context: __SerdeContext): NamespaceProperties => {
  return {
    DnsProperties: output.DnsProperties != null ? de_DnsProperties(output.DnsProperties, context) : undefined,
    HttpProperties: output.HttpProperties != null ? de_HttpProperties(output.HttpProperties, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1NamespaceSummariesList
 */
const de_NamespaceSummariesList = (output: any, context: __SerdeContext): NamespaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_NamespaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NamespaceSummary
 */
const de_NamespaceSummary = (output: any, context: __SerdeContext): NamespaceSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    Description: __expectString(output.Description),
    Id: __expectString(output.Id),
    Name: __expectString(output.Name),
    Properties: output.Properties != null ? de_NamespaceProperties(output.Properties, context) : undefined,
    ServiceCount: __expectInt32(output.ServiceCount),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1Operation
 */
const de_Operation = (output: any, context: __SerdeContext): Operation => {
  return {
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
    Status: __expectString(output.Status),
    Targets: output.Targets != null ? de_OperationTargetsMap(output.Targets, context) : undefined,
    Type: __expectString(output.Type),
    UpdateDate:
      output.UpdateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdateDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OperationNotFound
 */
const de_OperationNotFound = (output: any, context: __SerdeContext): OperationNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1OperationSummary
 */
const de_OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return {
    Id: __expectString(output.Id),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_1OperationSummaryList
 */
const de_OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OperationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OperationTargetsMap
 */
const de_OperationTargetsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce(
    (acc: Record<string, string>, [key, value]: [OperationTargetType | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = __expectString(value) as any;
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_json1_1RegisterInstanceResponse
 */
const de_RegisterInstanceResponse = (output: any, context: __SerdeContext): RegisterInstanceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1RequestLimitExceeded
 */
const de_RequestLimitExceeded = (output: any, context: __SerdeContext): RequestLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceInUse
 */
const de_ResourceInUse = (output: any, context: __SerdeContext): ResourceInUse => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceLimitExceeded
 */
const de_ResourceLimitExceeded = (output: any, context: __SerdeContext): ResourceLimitExceeded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Description: __expectString(output.Description),
    DnsConfig: output.DnsConfig != null ? de_DnsConfig(output.DnsConfig, context) : undefined,
    HealthCheckConfig:
      output.HealthCheckConfig != null ? de_HealthCheckConfig(output.HealthCheckConfig, context) : undefined,
    HealthCheckCustomConfig:
      output.HealthCheckCustomConfig != null
        ? de_HealthCheckCustomConfig(output.HealthCheckCustomConfig, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceCount: __expectInt32(output.InstanceCount),
    Name: __expectString(output.Name),
    NamespaceId: __expectString(output.NamespaceId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceAlreadyExists
 */
const de_ServiceAlreadyExists = (output: any, context: __SerdeContext): ServiceAlreadyExists => {
  return {
    CreatorRequestId: __expectString(output.CreatorRequestId),
    Message: __expectString(output.Message),
    ServiceId: __expectString(output.ServiceId),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceNotFound
 */
const de_ServiceNotFound = (output: any, context: __SerdeContext): ServiceNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceSummariesList
 */
const de_ServiceSummariesList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate:
      output.CreateDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreateDate))) : undefined,
    Description: __expectString(output.Description),
    DnsConfig: output.DnsConfig != null ? de_DnsConfig(output.DnsConfig, context) : undefined,
    HealthCheckConfig:
      output.HealthCheckConfig != null ? de_HealthCheckConfig(output.HealthCheckConfig, context) : undefined,
    HealthCheckCustomConfig:
      output.HealthCheckCustomConfig != null
        ? de_HealthCheckCustomConfig(output.HealthCheckCustomConfig, context)
        : undefined,
    Id: __expectString(output.Id),
    InstanceCount: __expectInt32(output.InstanceCount),
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1SOA
 */
const de_SOA = (output: any, context: __SerdeContext): SOA => {
  return {
    TTL: __expectLong(output.TTL),
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagList
 */
const de_TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1TooManyTagsException
 */
const de_TooManyTagsException = (output: any, context: __SerdeContext): TooManyTagsException => {
  return {
    Message: __expectString(output.Message),
    ResourceName: __expectString(output.ResourceName),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateHttpNamespaceResponse
 */
const de_UpdateHttpNamespaceResponse = (output: any, context: __SerdeContext): UpdateHttpNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePrivateDnsNamespaceResponse
 */
const de_UpdatePrivateDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): UpdatePrivateDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdatePublicDnsNamespaceResponse
 */
const de_UpdatePublicDnsNamespaceResponse = (
  output: any,
  context: __SerdeContext
): UpdatePublicDnsNamespaceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_1UpdateServiceResponse
 */
const de_UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
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
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
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

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
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
};
