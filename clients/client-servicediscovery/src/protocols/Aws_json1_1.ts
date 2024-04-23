// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
import {
  DiscoverInstancesRevisionCommandInput,
  DiscoverInstancesRevisionCommandOutput,
} from "../commands/DiscoverInstancesRevisionCommand";
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
  CreatePrivateDnsNamespaceRequest,
  CreatePublicDnsNamespaceRequest,
  CreateServiceRequest,
  CreateServiceResponse,
  CustomHealthNotFound,
  DeleteNamespaceRequest,
  DeleteServiceRequest,
  DeregisterInstanceRequest,
  DiscoverInstancesRequest,
  DiscoverInstancesRevisionRequest,
  DnsConfig,
  DnsConfigChange,
  DnsRecord,
  DuplicateRequest,
  GetInstanceRequest,
  GetInstancesHealthStatusRequest,
  GetNamespaceRequest,
  GetNamespaceResponse,
  GetOperationRequest,
  GetOperationResponse,
  GetServiceRequest,
  GetServiceResponse,
  HealthCheckConfig,
  HealthCheckCustomConfig,
  HttpNamespaceChange,
  InstanceNotFound,
  InvalidInput,
  ListInstancesRequest,
  ListNamespacesRequest,
  ListNamespacesResponse,
  ListOperationsRequest,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  Namespace,
  NamespaceAlreadyExists,
  NamespaceFilter,
  NamespaceNotFound,
  NamespaceSummary,
  Operation,
  OperationFilter,
  OperationNotFound,
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
  TooManyTagsException,
  UntagResourceRequest,
  UpdateHttpNamespaceRequest,
  UpdateInstanceCustomHealthStatusRequest,
  UpdatePrivateDnsNamespaceRequest,
  UpdatePublicDnsNamespaceRequest,
  UpdateServiceRequest,
} from "../models/models_0";
import { ServiceDiscoveryServiceException as __BaseException } from "../models/ServiceDiscoveryServiceException";

/**
 * serializeAws_json1_1CreateHttpNamespaceCommand
 */
export const se_CreateHttpNamespaceCommand = async (
  input: CreateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateHttpNamespace");
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
  const headers: __HeaderBag = sharedHeaders("CreatePrivateDnsNamespace");
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
  const headers: __HeaderBag = sharedHeaders("CreatePublicDnsNamespace");
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
  const headers: __HeaderBag = sharedHeaders("CreateService");
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
  const headers: __HeaderBag = sharedHeaders("DeleteNamespace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeregisterInstanceCommand
 */
export const se_DeregisterInstanceCommand = async (
  input: DeregisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeregisterInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DiscoverInstancesCommand
 */
export const se_DiscoverInstancesCommand = async (
  input: DiscoverInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DiscoverInstances");
  let body: any;
  body = JSON.stringify(_json(input));
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
 * serializeAws_json1_1DiscoverInstancesRevisionCommand
 */
export const se_DiscoverInstancesRevisionCommand = async (
  input: DiscoverInstancesRevisionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DiscoverInstancesRevision");
  let body: any;
  body = JSON.stringify(_json(input));
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
  const headers: __HeaderBag = sharedHeaders("GetInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetInstancesHealthStatusCommand
 */
export const se_GetInstancesHealthStatusCommand = async (
  input: GetInstancesHealthStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetInstancesHealthStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetNamespaceCommand
 */
export const se_GetNamespaceCommand = async (
  input: GetNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetNamespace");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetOperationCommand
 */
export const se_GetOperationCommand = async (
  input: GetOperationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetOperation");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1GetServiceCommand
 */
export const se_GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListInstancesCommand
 */
export const se_ListInstancesCommand = async (
  input: ListInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListNamespacesCommand
 */
export const se_ListNamespacesCommand = async (
  input: ListNamespacesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListNamespaces");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListOperationsCommand
 */
export const se_ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListOperations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServices");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RegisterInstanceCommand
 */
export const se_RegisterInstanceCommand = async (
  input: RegisterInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RegisterInstance");
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
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateHttpNamespaceCommand
 */
export const se_UpdateHttpNamespaceCommand = async (
  input: UpdateHttpNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateHttpNamespace");
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
  const headers: __HeaderBag = sharedHeaders("UpdateInstanceCustomHealthStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdatePrivateDnsNamespaceCommand
 */
export const se_UpdatePrivateDnsNamespaceCommand = async (
  input: UpdatePrivateDnsNamespaceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdatePrivateDnsNamespace");
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
  const headers: __HeaderBag = sharedHeaders("UpdatePublicDnsNamespace");
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
  const headers: __HeaderBag = sharedHeaders("UpdateService");
  let body: any;
  body = JSON.stringify(_json(input));
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
  contents = _json(data);
  const response: CreateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: CreatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DeregisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: DiscoverInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DiscoverInstancesRevisionCommand
 */
export const de_DiscoverInstancesRevisionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesRevisionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DiscoverInstancesRevisionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DiscoverInstancesRevisionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DiscoverInstancesRevisionCommandError
 */
const de_DiscoverInstancesRevisionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DiscoverInstancesRevisionCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: GetInstancesHealthStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: RegisterInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateHttpNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePrivateDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdatePublicDnsNamespaceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  contents = _json(data);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
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
  const deserialized: any = _json(body);
  const exception = new TooManyTagsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_Attributes omitted.

/**
 * serializeAws_json1_1CreateHttpNamespaceRequest
 */
const se_CreateHttpNamespaceRequest = (input: CreateHttpNamespaceRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreatePrivateDnsNamespaceRequest
 */
const se_CreatePrivateDnsNamespaceRequest = (input: CreatePrivateDnsNamespaceRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    Properties: _json,
    Tags: _json,
    Vpc: [],
  });
};

/**
 * serializeAws_json1_1CreatePublicDnsNamespaceRequest
 */
const se_CreatePublicDnsNamespaceRequest = (input: CreatePublicDnsNamespaceRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    Name: [],
    Properties: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateServiceRequest
 */
const se_CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return take(input, {
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    Description: [],
    DnsConfig: _json,
    HealthCheckConfig: _json,
    HealthCheckCustomConfig: _json,
    Name: [],
    NamespaceId: [],
    Tags: _json,
    Type: [],
  });
};

// se_DeleteNamespaceRequest omitted.

// se_DeleteServiceRequest omitted.

// se_DeregisterInstanceRequest omitted.

// se_DiscoverInstancesRequest omitted.

// se_DiscoverInstancesRevisionRequest omitted.

// se_DnsConfig omitted.

// se_DnsConfigChange omitted.

// se_DnsRecord omitted.

// se_DnsRecordList omitted.

// se_FilterValues omitted.

// se_GetInstanceRequest omitted.

// se_GetInstancesHealthStatusRequest omitted.

// se_GetNamespaceRequest omitted.

// se_GetOperationRequest omitted.

// se_GetServiceRequest omitted.

// se_HealthCheckConfig omitted.

// se_HealthCheckCustomConfig omitted.

// se_HttpNamespaceChange omitted.

// se_InstanceIdList omitted.

// se_ListInstancesRequest omitted.

// se_ListNamespacesRequest omitted.

// se_ListOperationsRequest omitted.

// se_ListServicesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_NamespaceFilter omitted.

// se_NamespaceFilters omitted.

// se_OperationFilter omitted.

// se_OperationFilters omitted.

// se_PrivateDnsNamespaceChange omitted.

// se_PrivateDnsNamespaceProperties omitted.

// se_PrivateDnsNamespacePropertiesChange omitted.

// se_PrivateDnsPropertiesMutable omitted.

// se_PrivateDnsPropertiesMutableChange omitted.

// se_PublicDnsNamespaceChange omitted.

// se_PublicDnsNamespaceProperties omitted.

// se_PublicDnsNamespacePropertiesChange omitted.

// se_PublicDnsPropertiesMutable omitted.

// se_PublicDnsPropertiesMutableChange omitted.

/**
 * serializeAws_json1_1RegisterInstanceRequest
 */
const se_RegisterInstanceRequest = (input: RegisterInstanceRequest, context: __SerdeContext): any => {
  return take(input, {
    Attributes: _json,
    CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    InstanceId: [],
    ServiceId: [],
  });
};

// se_ServiceChange omitted.

// se_ServiceFilter omitted.

// se_ServiceFilters omitted.

// se_SOA omitted.

// se_SOAChange omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_1UpdateHttpNamespaceRequest
 */
const se_UpdateHttpNamespaceRequest = (input: UpdateHttpNamespaceRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    Namespace: _json,
    UpdaterRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

// se_UpdateInstanceCustomHealthStatusRequest omitted.

/**
 * serializeAws_json1_1UpdatePrivateDnsNamespaceRequest
 */
const se_UpdatePrivateDnsNamespaceRequest = (input: UpdatePrivateDnsNamespaceRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    Namespace: _json,
    UpdaterRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

/**
 * serializeAws_json1_1UpdatePublicDnsNamespaceRequest
 */
const se_UpdatePublicDnsNamespaceRequest = (input: UpdatePublicDnsNamespaceRequest, context: __SerdeContext): any => {
  return take(input, {
    Id: [],
    Namespace: _json,
    UpdaterRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

// se_UpdateServiceRequest omitted.

// de_Attributes omitted.

// de_CreateHttpNamespaceResponse omitted.

// de_CreatePrivateDnsNamespaceResponse omitted.

// de_CreatePublicDnsNamespaceResponse omitted.

/**
 * deserializeAws_json1_1CreateServiceResponse
 */
const de_CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return take(output, {
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

// de_CustomHealthNotFound omitted.

// de_DeleteNamespaceResponse omitted.

// de_DeleteServiceResponse omitted.

// de_DeregisterInstanceResponse omitted.

// de_DiscoverInstancesResponse omitted.

// de_DiscoverInstancesRevisionResponse omitted.

// de_DnsConfig omitted.

// de_DnsProperties omitted.

// de_DnsRecord omitted.

// de_DnsRecordList omitted.

// de_DuplicateRequest omitted.

// de_GetInstanceResponse omitted.

// de_GetInstancesHealthStatusResponse omitted.

/**
 * deserializeAws_json1_1GetNamespaceResponse
 */
const de_GetNamespaceResponse = (output: any, context: __SerdeContext): GetNamespaceResponse => {
  return take(output, {
    Namespace: (_: any) => de_Namespace(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetOperationResponse
 */
const de_GetOperationResponse = (output: any, context: __SerdeContext): GetOperationResponse => {
  return take(output, {
    Operation: (_: any) => de_Operation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1GetServiceResponse
 */
const de_GetServiceResponse = (output: any, context: __SerdeContext): GetServiceResponse => {
  return take(output, {
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

// de_HealthCheckConfig omitted.

// de_HealthCheckCustomConfig omitted.

// de_HttpInstanceSummary omitted.

// de_HttpInstanceSummaryList omitted.

// de_HttpProperties omitted.

// de_Instance omitted.

// de_InstanceHealthStatusMap omitted.

// de_InstanceNotFound omitted.

// de_InstanceSummary omitted.

// de_InstanceSummaryList omitted.

// de_InvalidInput omitted.

// de_ListInstancesResponse omitted.

/**
 * deserializeAws_json1_1ListNamespacesResponse
 */
const de_ListNamespacesResponse = (output: any, context: __SerdeContext): ListNamespacesResponse => {
  return take(output, {
    Namespaces: (_: any) => de_NamespaceSummariesList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListOperationsResponse omitted.

/**
 * deserializeAws_json1_1ListServicesResponse
 */
const de_ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return take(output, {
    NextToken: __expectString,
    Services: (_: any) => de_ServiceSummariesList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_1Namespace
 */
const de_Namespace = (output: any, context: __SerdeContext): Namespace => {
  return take(output, {
    Arn: __expectString,
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Properties: _json,
    ServiceCount: __expectInt32,
    Type: __expectString,
  }) as any;
};

// de_NamespaceAlreadyExists omitted.

// de_NamespaceNotFound omitted.

// de_NamespaceProperties omitted.

/**
 * deserializeAws_json1_1NamespaceSummariesList
 */
const de_NamespaceSummariesList = (output: any, context: __SerdeContext): NamespaceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NamespaceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NamespaceSummary
 */
const de_NamespaceSummary = (output: any, context: __SerdeContext): NamespaceSummary => {
  return take(output, {
    Arn: __expectString,
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Id: __expectString,
    Name: __expectString,
    Properties: _json,
    ServiceCount: __expectInt32,
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1Operation
 */
const de_Operation = (output: any, context: __SerdeContext): Operation => {
  return take(output, {
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ErrorCode: __expectString,
    ErrorMessage: __expectString,
    Id: __expectString,
    Status: __expectString,
    Targets: _json,
    Type: __expectString,
    UpdateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_OperationNotFound omitted.

// de_OperationSummary omitted.

// de_OperationSummaryList omitted.

// de_OperationTargetsMap omitted.

// de_RegisterInstanceResponse omitted.

// de_RequestLimitExceeded omitted.

// de_ResourceInUse omitted.

// de_ResourceLimitExceeded omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_1Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return take(output, {
    Arn: __expectString,
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    Description: __expectString,
    DnsConfig: _json,
    HealthCheckConfig: _json,
    HealthCheckCustomConfig: _json,
    Id: __expectString,
    InstanceCount: __expectInt32,
    Name: __expectString,
    NamespaceId: __expectString,
    Type: __expectString,
  }) as any;
};

// de_ServiceAlreadyExists omitted.

// de_ServiceNotFound omitted.

/**
 * deserializeAws_json1_1ServiceSummariesList
 */
const de_ServiceSummariesList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return take(output, {
    Arn: __expectString,
    CreateDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DnsConfig: _json,
    HealthCheckConfig: _json,
    HealthCheckCustomConfig: _json,
    Id: __expectString,
    InstanceCount: __expectInt32,
    Name: __expectString,
    Type: __expectString,
  }) as any;
};

// de_SOA omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TooManyTagsException omitted.

// de_UntagResourceResponse omitted.

// de_UpdateHttpNamespaceResponse omitted.

// de_UpdatePrivateDnsNamespaceResponse omitted.

// de_UpdatePublicDnsNamespaceResponse omitted.

// de_UpdateServiceResponse omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
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
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `Route53AutoNaming_v20170314.${operation}`,
  };
}

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
