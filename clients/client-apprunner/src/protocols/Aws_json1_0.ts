// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AssociateCustomDomainCommandInput,
  AssociateCustomDomainCommandOutput,
} from "../commands/AssociateCustomDomainCommand";
import {
  CreateAutoScalingConfigurationCommandInput,
  CreateAutoScalingConfigurationCommandOutput,
} from "../commands/CreateAutoScalingConfigurationCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import {
  CreateObservabilityConfigurationCommandInput,
  CreateObservabilityConfigurationCommandOutput,
} from "../commands/CreateObservabilityConfigurationCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import { CreateVpcConnectorCommandInput, CreateVpcConnectorCommandOutput } from "../commands/CreateVpcConnectorCommand";
import {
  DeleteAutoScalingConfigurationCommandInput,
  DeleteAutoScalingConfigurationCommandOutput,
} from "../commands/DeleteAutoScalingConfigurationCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import {
  DeleteObservabilityConfigurationCommandInput,
  DeleteObservabilityConfigurationCommandOutput,
} from "../commands/DeleteObservabilityConfigurationCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import { DeleteVpcConnectorCommandInput, DeleteVpcConnectorCommandOutput } from "../commands/DeleteVpcConnectorCommand";
import {
  DescribeAutoScalingConfigurationCommandInput,
  DescribeAutoScalingConfigurationCommandOutput,
} from "../commands/DescribeAutoScalingConfigurationCommand";
import {
  DescribeCustomDomainsCommandInput,
  DescribeCustomDomainsCommandOutput,
} from "../commands/DescribeCustomDomainsCommand";
import {
  DescribeObservabilityConfigurationCommandInput,
  DescribeObservabilityConfigurationCommandOutput,
} from "../commands/DescribeObservabilityConfigurationCommand";
import { DescribeServiceCommandInput, DescribeServiceCommandOutput } from "../commands/DescribeServiceCommand";
import {
  DescribeVpcConnectorCommandInput,
  DescribeVpcConnectorCommandOutput,
} from "../commands/DescribeVpcConnectorCommand";
import {
  DisassociateCustomDomainCommandInput,
  DisassociateCustomDomainCommandOutput,
} from "../commands/DisassociateCustomDomainCommand";
import {
  ListAutoScalingConfigurationsCommandInput,
  ListAutoScalingConfigurationsCommandOutput,
} from "../commands/ListAutoScalingConfigurationsCommand";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput } from "../commands/ListConnectionsCommand";
import {
  ListObservabilityConfigurationsCommandInput,
  ListObservabilityConfigurationsCommandOutput,
} from "../commands/ListObservabilityConfigurationsCommand";
import { ListOperationsCommandInput, ListOperationsCommandOutput } from "../commands/ListOperationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListVpcConnectorsCommandInput, ListVpcConnectorsCommandOutput } from "../commands/ListVpcConnectorsCommand";
import { PauseServiceCommandInput, PauseServiceCommandOutput } from "../commands/PauseServiceCommand";
import { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "../commands/ResumeServiceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import { AppRunnerServiceException as __BaseException } from "../models/AppRunnerServiceException";
import {
  AssociateCustomDomainRequest,
  AssociateCustomDomainResponse,
  AuthenticationConfiguration,
  AutoScalingConfiguration,
  AutoScalingConfigurationSummary,
  CertificateValidationRecord,
  CodeConfiguration,
  CodeConfigurationValues,
  CodeRepository,
  Connection,
  ConnectionSummary,
  CreateAutoScalingConfigurationRequest,
  CreateAutoScalingConfigurationResponse,
  CreateConnectionRequest,
  CreateConnectionResponse,
  CreateObservabilityConfigurationRequest,
  CreateObservabilityConfigurationResponse,
  CreateServiceRequest,
  CreateServiceResponse,
  CreateVpcConnectorRequest,
  CreateVpcConnectorResponse,
  CustomDomain,
  DeleteAutoScalingConfigurationRequest,
  DeleteAutoScalingConfigurationResponse,
  DeleteConnectionRequest,
  DeleteConnectionResponse,
  DeleteObservabilityConfigurationRequest,
  DeleteObservabilityConfigurationResponse,
  DeleteServiceRequest,
  DeleteServiceResponse,
  DeleteVpcConnectorRequest,
  DeleteVpcConnectorResponse,
  DescribeAutoScalingConfigurationRequest,
  DescribeAutoScalingConfigurationResponse,
  DescribeCustomDomainsRequest,
  DescribeCustomDomainsResponse,
  DescribeObservabilityConfigurationRequest,
  DescribeObservabilityConfigurationResponse,
  DescribeServiceRequest,
  DescribeServiceResponse,
  DescribeVpcConnectorRequest,
  DescribeVpcConnectorResponse,
  DisassociateCustomDomainRequest,
  DisassociateCustomDomainResponse,
  EgressConfiguration,
  EncryptionConfiguration,
  HealthCheckConfiguration,
  ImageConfiguration,
  ImageRepository,
  InstanceConfiguration,
  InternalServiceErrorException,
  InvalidRequestException,
  InvalidStateException,
  ListAutoScalingConfigurationsRequest,
  ListAutoScalingConfigurationsResponse,
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListObservabilityConfigurationsRequest,
  ListObservabilityConfigurationsResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListVpcConnectorsRequest,
  ListVpcConnectorsResponse,
  NetworkConfiguration,
  ObservabilityConfiguration,
  ObservabilityConfigurationSummary,
  OperationSummary,
  PauseServiceRequest,
  PauseServiceResponse,
  ResourceNotFoundException,
  ResumeServiceRequest,
  ResumeServiceResponse,
  Service,
  ServiceObservabilityConfiguration,
  ServiceQuotaExceededException,
  ServiceSummary,
  SourceCodeVersion,
  SourceConfiguration,
  StartDeploymentRequest,
  StartDeploymentResponse,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TraceConfiguration,
  UntagResourceRequest,
  UntagResourceResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
  VpcConnector,
} from "../models/models_0";

export const serializeAws_json1_0AssociateCustomDomainCommand = async (
  input: AssociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.AssociateCustomDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AssociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateAutoScalingConfigurationCommand = async (
  input: CreateAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateObservabilityConfigurationCommand = async (
  input: CreateObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateObservabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateObservabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateVpcConnectorCommand = async (
  input: CreateVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateVpcConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateVpcConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteAutoScalingConfigurationCommand = async (
  input: DeleteAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteObservabilityConfigurationCommand = async (
  input: DeleteObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteObservabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteObservabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteVpcConnectorCommand = async (
  input: DeleteVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteVpcConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteVpcConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeAutoScalingConfigurationCommand = async (
  input: DescribeAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeCustomDomainsCommand = async (
  input: DescribeCustomDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeCustomDomains",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeCustomDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeObservabilityConfigurationCommand = async (
  input: DescribeObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeObservabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeObservabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeServiceCommand = async (
  input: DescribeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DescribeVpcConnectorCommand = async (
  input: DescribeVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeVpcConnector",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DescribeVpcConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DisassociateCustomDomainCommand = async (
  input: DisassociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DisassociateCustomDomain",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DisassociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListAutoScalingConfigurationsCommand = async (
  input: ListAutoScalingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListAutoScalingConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListAutoScalingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListObservabilityConfigurationsCommand = async (
  input: ListObservabilityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListObservabilityConfigurations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListObservabilityConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListOperations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListVpcConnectorsCommand = async (
  input: ListVpcConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListVpcConnectors",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListVpcConnectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0PauseServiceCommand = async (
  input: PauseServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.PauseService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0PauseServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ResumeServiceCommand = async (
  input: ResumeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ResumeService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ResumeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.StartDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0StartDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UpdateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AssociateCustomDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AssociateCustomDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AssociateCustomDomainResponse(data, context);
  const response: AssociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AssociateCustomDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0CreateAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateAutoScalingConfigurationResponse(data, context);
  const response: CreateAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0CreateObservabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObservabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateObservabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateObservabilityConfigurationResponse(data, context);
  const response: CreateObservabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateObservabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObservabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateServiceResponse(data, context);
  const response: CreateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0CreateVpcConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateVpcConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateVpcConnectorResponse(data, context);
  const response: CreateVpcConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateVpcConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DeleteAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteAutoScalingConfigurationResponse(data, context);
  const response: DeleteAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DeleteObservabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObservabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteObservabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteObservabilityConfigurationResponse(data, context);
  const response: DeleteObservabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteObservabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObservabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteServiceResponse(data, context);
  const response: DeleteServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DeleteVpcConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteVpcConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteVpcConnectorResponse(data, context);
  const response: DeleteVpcConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteVpcConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DescribeAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeAutoScalingConfigurationResponse(data, context);
  const response: DescribeAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DescribeCustomDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeCustomDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeCustomDomainsResponse(data, context);
  const response: DescribeCustomDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeCustomDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DescribeObservabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeObservabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeObservabilityConfigurationResponse(data, context);
  const response: DescribeObservabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeObservabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DescribeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeServiceResponse(data, context);
  const response: DescribeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DescribeVpcConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DescribeVpcConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DescribeVpcConnectorResponse(data, context);
  const response: DescribeVpcConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DescribeVpcConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0DisassociateCustomDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DisassociateCustomDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DisassociateCustomDomainResponse(data, context);
  const response: DisassociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DisassociateCustomDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListAutoScalingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListAutoScalingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListAutoScalingConfigurationsResponse(data, context);
  const response: ListAutoScalingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListAutoScalingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListConnectionsResponse(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListObservabilityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObservabilityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListObservabilityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListObservabilityConfigurationsResponse(data, context);
  const response: ListObservabilityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListObservabilityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObservabilityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListOperationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListOperationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListOperationsResponse(data, context);
  const response: ListOperationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListOperationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOperationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServicesResponse(data, context);
  const response: ListServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ListVpcConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListVpcConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListVpcConnectorsResponse(data, context);
  const response: ListVpcConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListVpcConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0PauseServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0PauseServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0PauseServiceResponse(data, context);
  const response: PauseServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0PauseServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0ResumeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ResumeServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ResumeServiceResponse(data, context);
  const response: ResumeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ResumeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0StartDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0StartDeploymentResponse(data, context);
  const response: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_json1_0UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServiceResponse(data, context);
  const response: UpdateServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await deserializeAws_json1_0InternalServiceErrorExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await deserializeAws_json1_0InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await deserializeAws_json1_0InvalidStateExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_json1_0InternalServiceErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServiceErrorException(body, context);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidRequestException(body, context);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InvalidStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InvalidStateException(body, context);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ResourceNotFoundException(body, context);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AssociateCustomDomainRequest = (
  input: AssociateCustomDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != undefined && { DomainName: input.DomainName }),
    ...(input.EnableWWWSubdomain != undefined && { EnableWWWSubdomain: input.EnableWWWSubdomain }),
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0AuthenticationConfiguration = (
  input: AuthenticationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessRoleArn != undefined && { AccessRoleArn: input.AccessRoleArn }),
    ...(input.ConnectionArn != undefined && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0CodeConfiguration = (input: CodeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CodeConfigurationValues != undefined && {
      CodeConfigurationValues: serializeAws_json1_0CodeConfigurationValues(input.CodeConfigurationValues, context),
    }),
    ...(input.ConfigurationSource != undefined && { ConfigurationSource: input.ConfigurationSource }),
  };
};

const serializeAws_json1_0CodeConfigurationValues = (input: CodeConfigurationValues, context: __SerdeContext): any => {
  return {
    ...(input.BuildCommand != undefined && { BuildCommand: input.BuildCommand }),
    ...(input.Port != undefined && { Port: input.Port }),
    ...(input.Runtime != undefined && { Runtime: input.Runtime }),
    ...(input.RuntimeEnvironmentVariables != undefined && {
      RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
        input.RuntimeEnvironmentVariables,
        context
      ),
    }),
    ...(input.StartCommand != undefined && { StartCommand: input.StartCommand }),
  };
};

const serializeAws_json1_0CodeRepository = (input: CodeRepository, context: __SerdeContext): any => {
  return {
    ...(input.CodeConfiguration != undefined && {
      CodeConfiguration: serializeAws_json1_0CodeConfiguration(input.CodeConfiguration, context),
    }),
    ...(input.RepositoryUrl != undefined && { RepositoryUrl: input.RepositoryUrl }),
    ...(input.SourceCodeVersion != undefined && {
      SourceCodeVersion: serializeAws_json1_0SourceCodeVersion(input.SourceCodeVersion, context),
    }),
  };
};

const serializeAws_json1_0CreateAutoScalingConfigurationRequest = (
  input: CreateAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationName != undefined && {
      AutoScalingConfigurationName: input.AutoScalingConfigurationName,
    }),
    ...(input.MaxConcurrency != undefined && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxSize != undefined && { MaxSize: input.MaxSize }),
    ...(input.MinSize != undefined && { MinSize: input.MinSize }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != undefined && { ConnectionName: input.ConnectionName }),
    ...(input.ProviderType != undefined && { ProviderType: input.ProviderType }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateObservabilityConfigurationRequest = (
  input: CreateObservabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationName != undefined && {
      ObservabilityConfigurationName: input.ObservabilityConfigurationName,
    }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.TraceConfiguration != undefined && {
      TraceConfiguration: serializeAws_json1_0TraceConfiguration(input.TraceConfiguration, context),
    }),
  };
};

const serializeAws_json1_0CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingConfigurationArn != undefined && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
    ...(input.EncryptionConfiguration != undefined && {
      EncryptionConfiguration: serializeAws_json1_0EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.HealthCheckConfiguration != undefined && {
      HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(input.HealthCheckConfiguration, context),
    }),
    ...(input.InstanceConfiguration != undefined && {
      InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
    }),
    ...(input.NetworkConfiguration != undefined && {
      NetworkConfiguration: serializeAws_json1_0NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.ObservabilityConfiguration != undefined && {
      ObservabilityConfiguration: serializeAws_json1_0ServiceObservabilityConfiguration(
        input.ObservabilityConfiguration,
        context
      ),
    }),
    ...(input.ServiceName != undefined && { ServiceName: input.ServiceName }),
    ...(input.SourceConfiguration != undefined && {
      SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
    }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0CreateVpcConnectorRequest = (
  input: CreateVpcConnectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroups != undefined && {
      SecurityGroups: serializeAws_json1_0StringList(input.SecurityGroups, context),
    }),
    ...(input.Subnets != undefined && { Subnets: serializeAws_json1_0StringList(input.Subnets, context) }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
    ...(input.VpcConnectorName != undefined && { VpcConnectorName: input.VpcConnectorName }),
  };
};

const serializeAws_json1_0DeleteAutoScalingConfigurationRequest = (
  input: DeleteAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationArn != undefined && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
  };
};

const serializeAws_json1_0DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != undefined && { ConnectionArn: input.ConnectionArn }),
  };
};

const serializeAws_json1_0DeleteObservabilityConfigurationRequest = (
  input: DeleteObservabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationArn != undefined && {
      ObservabilityConfigurationArn: input.ObservabilityConfigurationArn,
    }),
  };
};

const serializeAws_json1_0DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0DeleteVpcConnectorRequest = (
  input: DeleteVpcConnectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VpcConnectorArn != undefined && { VpcConnectorArn: input.VpcConnectorArn }),
  };
};

const serializeAws_json1_0DescribeAutoScalingConfigurationRequest = (
  input: DescribeAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationArn != undefined && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
  };
};

const serializeAws_json1_0DescribeCustomDomainsRequest = (
  input: DescribeCustomDomainsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0DescribeObservabilityConfigurationRequest = (
  input: DescribeObservabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationArn != undefined && {
      ObservabilityConfigurationArn: input.ObservabilityConfigurationArn,
    }),
  };
};

const serializeAws_json1_0DescribeServiceRequest = (input: DescribeServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0DescribeVpcConnectorRequest = (
  input: DescribeVpcConnectorRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VpcConnectorArn != undefined && { VpcConnectorArn: input.VpcConnectorArn }),
  };
};

const serializeAws_json1_0DisassociateCustomDomainRequest = (
  input: DisassociateCustomDomainRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != undefined && { DomainName: input.DomainName }),
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0EgressConfiguration = (input: EgressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EgressType != undefined && { EgressType: input.EgressType }),
    ...(input.VpcConnectorArn != undefined && { VpcConnectorArn: input.VpcConnectorArn }),
  };
};

const serializeAws_json1_0EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKey != undefined && { KmsKey: input.KmsKey }),
  };
};

const serializeAws_json1_0HealthCheckConfiguration = (
  input: HealthCheckConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthyThreshold != undefined && { HealthyThreshold: input.HealthyThreshold }),
    ...(input.Interval != undefined && { Interval: input.Interval }),
    ...(input.Path != undefined && { Path: input.Path }),
    ...(input.Protocol != undefined && { Protocol: input.Protocol }),
    ...(input.Timeout != undefined && { Timeout: input.Timeout }),
    ...(input.UnhealthyThreshold != undefined && { UnhealthyThreshold: input.UnhealthyThreshold }),
  };
};

const serializeAws_json1_0ImageConfiguration = (input: ImageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Port != undefined && { Port: input.Port }),
    ...(input.RuntimeEnvironmentVariables != undefined && {
      RuntimeEnvironmentVariables: serializeAws_json1_0RuntimeEnvironmentVariables(
        input.RuntimeEnvironmentVariables,
        context
      ),
    }),
    ...(input.StartCommand != undefined && { StartCommand: input.StartCommand }),
  };
};

const serializeAws_json1_0ImageRepository = (input: ImageRepository, context: __SerdeContext): any => {
  return {
    ...(input.ImageConfiguration != undefined && {
      ImageConfiguration: serializeAws_json1_0ImageConfiguration(input.ImageConfiguration, context),
    }),
    ...(input.ImageIdentifier != undefined && { ImageIdentifier: input.ImageIdentifier }),
    ...(input.ImageRepositoryType != undefined && { ImageRepositoryType: input.ImageRepositoryType }),
  };
};

const serializeAws_json1_0InstanceConfiguration = (input: InstanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Cpu != undefined && { Cpu: input.Cpu }),
    ...(input.InstanceRoleArn != undefined && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Memory != undefined && { Memory: input.Memory }),
  };
};

const serializeAws_json1_0ListAutoScalingConfigurationsRequest = (
  input: ListAutoScalingConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationName != undefined && {
      AutoScalingConfigurationName: input.AutoScalingConfigurationName,
    }),
    ...(input.LatestOnly != undefined && { LatestOnly: input.LatestOnly }),
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListConnectionsRequest = (input: ListConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != undefined && { ConnectionName: input.ConnectionName }),
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListObservabilityConfigurationsRequest = (
  input: ListObservabilityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LatestOnly != undefined && { LatestOnly: input.LatestOnly }),
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
    ...(input.ObservabilityConfigurationName != undefined && {
      ObservabilityConfigurationName: input.ObservabilityConfigurationName,
    }),
  };
};

const serializeAws_json1_0ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != undefined && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_json1_0ListVpcConnectorsRequest = (
  input: ListVpcConnectorsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != undefined && { MaxResults: input.MaxResults }),
    ...(input.NextToken != undefined && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_0NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EgressConfiguration != undefined && {
      EgressConfiguration: serializeAws_json1_0EgressConfiguration(input.EgressConfiguration, context),
    }),
  };
};

const serializeAws_json1_0PauseServiceRequest = (input: PauseServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0ResumeServiceRequest = (input: ResumeServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0RuntimeEnvironmentVariables = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
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

const serializeAws_json1_0ServiceObservabilityConfiguration = (
  input: ServiceObservabilityConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationArn != undefined && {
      ObservabilityConfigurationArn: input.ObservabilityConfigurationArn,
    }),
    ...(input.ObservabilityEnabled != undefined && { ObservabilityEnabled: input.ObservabilityEnabled }),
  };
};

const serializeAws_json1_0SourceCodeVersion = (input: SourceCodeVersion, context: __SerdeContext): any => {
  return {
    ...(input.Type != undefined && { Type: input.Type }),
    ...(input.Value != undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_0SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationConfiguration != undefined && {
      AuthenticationConfiguration: serializeAws_json1_0AuthenticationConfiguration(
        input.AuthenticationConfiguration,
        context
      ),
    }),
    ...(input.AutoDeploymentsEnabled != undefined && { AutoDeploymentsEnabled: input.AutoDeploymentsEnabled }),
    ...(input.CodeRepository != undefined && {
      CodeRepository: serializeAws_json1_0CodeRepository(input.CodeRepository, context),
    }),
    ...(input.ImageRepository != undefined && {
      ImageRepository: serializeAws_json1_0ImageRepository(input.ImageRepository, context),
    }),
  };
};

const serializeAws_json1_0StartDeploymentRequest = (input: StartDeploymentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
  };
};

const serializeAws_json1_0StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != undefined && { Key: input.Key }),
    ...(input.Value != undefined && { Value: input.Value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != undefined && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != undefined && { Tags: serializeAws_json1_0TagList(input.Tags, context) }),
  };
};

const serializeAws_json1_0TraceConfiguration = (input: TraceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Vendor != undefined && { Vendor: input.Vendor }),
  };
};

const serializeAws_json1_0UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != undefined && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != undefined && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingConfigurationArn != undefined && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
    ...(input.HealthCheckConfiguration != undefined && {
      HealthCheckConfiguration: serializeAws_json1_0HealthCheckConfiguration(input.HealthCheckConfiguration, context),
    }),
    ...(input.InstanceConfiguration != undefined && {
      InstanceConfiguration: serializeAws_json1_0InstanceConfiguration(input.InstanceConfiguration, context),
    }),
    ...(input.NetworkConfiguration != undefined && {
      NetworkConfiguration: serializeAws_json1_0NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.ObservabilityConfiguration != undefined && {
      ObservabilityConfiguration: serializeAws_json1_0ServiceObservabilityConfiguration(
        input.ObservabilityConfiguration,
        context
      ),
    }),
    ...(input.ServiceArn != undefined && { ServiceArn: input.ServiceArn }),
    ...(input.SourceConfiguration != undefined && {
      SourceConfiguration: serializeAws_json1_0SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

const deserializeAws_json1_0AssociateCustomDomainResponse = (
  output: any,
  context: __SerdeContext
): AssociateCustomDomainResponse => {
  return {
    CustomDomain:
      output.CustomDomain != undefined ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context) : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    ServiceArn: __expectString(output.ServiceArn),
  } as any;
};

const deserializeAws_json1_0AuthenticationConfiguration = (
  output: any,
  context: __SerdeContext
): AuthenticationConfiguration => {
  return {
    AccessRoleArn: __expectString(output.AccessRoleArn),
    ConnectionArn: __expectString(output.ConnectionArn),
  } as any;
};

const deserializeAws_json1_0AutoScalingConfiguration = (
  output: any,
  context: __SerdeContext
): AutoScalingConfiguration => {
  return {
    AutoScalingConfigurationArn: __expectString(output.AutoScalingConfigurationArn),
    AutoScalingConfigurationName: __expectString(output.AutoScalingConfigurationName),
    AutoScalingConfigurationRevision: __expectInt32(output.AutoScalingConfigurationRevision),
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    DeletedAt:
      output.DeletedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt)))
        : undefined,
    Latest: __expectBoolean(output.Latest),
    MaxConcurrency: __expectInt32(output.MaxConcurrency),
    MaxSize: __expectInt32(output.MaxSize),
    MinSize: __expectInt32(output.MinSize),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0AutoScalingConfigurationSummary = (
  output: any,
  context: __SerdeContext
): AutoScalingConfigurationSummary => {
  return {
    AutoScalingConfigurationArn: __expectString(output.AutoScalingConfigurationArn),
    AutoScalingConfigurationName: __expectString(output.AutoScalingConfigurationName),
    AutoScalingConfigurationRevision: __expectInt32(output.AutoScalingConfigurationRevision),
  } as any;
};

const deserializeAws_json1_0AutoScalingConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): AutoScalingConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0AutoScalingConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CertificateValidationRecord = (
  output: any,
  context: __SerdeContext
): CertificateValidationRecord => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0CertificateValidationRecordList = (
  output: any,
  context: __SerdeContext
): CertificateValidationRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CertificateValidationRecord(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CodeConfiguration = (output: any, context: __SerdeContext): CodeConfiguration => {
  return {
    CodeConfigurationValues:
      output.CodeConfigurationValues != undefined
        ? deserializeAws_json1_0CodeConfigurationValues(output.CodeConfigurationValues, context)
        : undefined,
    ConfigurationSource: __expectString(output.ConfigurationSource),
  } as any;
};

const deserializeAws_json1_0CodeConfigurationValues = (
  output: any,
  context: __SerdeContext
): CodeConfigurationValues => {
  return {
    BuildCommand: __expectString(output.BuildCommand),
    Port: __expectString(output.Port),
    Runtime: __expectString(output.Runtime),
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables != undefined
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: __expectString(output.StartCommand),
  } as any;
};

const deserializeAws_json1_0CodeRepository = (output: any, context: __SerdeContext): CodeRepository => {
  return {
    CodeConfiguration:
      output.CodeConfiguration != undefined
        ? deserializeAws_json1_0CodeConfiguration(output.CodeConfiguration, context)
        : undefined,
    RepositoryUrl: __expectString(output.RepositoryUrl),
    SourceCodeVersion:
      output.SourceCodeVersion != undefined
        ? deserializeAws_json1_0SourceCodeVersion(output.SourceCodeVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ConnectionSummary = (output: any, context: __SerdeContext): ConnectionSummary => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0ConnectionSummaryList = (output: any, context: __SerdeContext): ConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ConnectionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0CreateAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration != undefined
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateConnectionResponse => {
  return {
    Connection:
      output.Connection != undefined ? deserializeAws_json1_0Connection(output.Connection, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateObservabilityConfigurationResponse => {
  return {
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != undefined
        ? deserializeAws_json1_0ObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != undefined ? deserializeAws_json1_0Service(output.Service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateVpcConnectorResponse = (
  output: any,
  context: __SerdeContext
): CreateVpcConnectorResponse => {
  return {
    VpcConnector:
      output.VpcConnector != undefined ? deserializeAws_json1_0VpcConnector(output.VpcConnector, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CustomDomain = (output: any, context: __SerdeContext): CustomDomain => {
  return {
    CertificateValidationRecords:
      output.CertificateValidationRecords != undefined
        ? deserializeAws_json1_0CertificateValidationRecordList(output.CertificateValidationRecords, context)
        : undefined,
    DomainName: __expectString(output.DomainName),
    EnableWWWSubdomain: __expectBoolean(output.EnableWWWSubdomain),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_json1_0CustomDomainList = (output: any, context: __SerdeContext): CustomDomain[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CustomDomain(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0DeleteAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration != undefined
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteConnectionResponse => {
  return {
    Connection:
      output.Connection != undefined ? deserializeAws_json1_0Connection(output.Connection, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteObservabilityConfigurationResponse => {
  return {
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != undefined
        ? deserializeAws_json1_0ObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != undefined ? deserializeAws_json1_0Service(output.Service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteVpcConnectorResponse = (
  output: any,
  context: __SerdeContext
): DeleteVpcConnectorResponse => {
  return {
    VpcConnector:
      output.VpcConnector != undefined ? deserializeAws_json1_0VpcConnector(output.VpcConnector, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration != undefined
        ? deserializeAws_json1_0AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeCustomDomainsResponse = (
  output: any,
  context: __SerdeContext
): DescribeCustomDomainsResponse => {
  return {
    CustomDomains:
      output.CustomDomains != undefined
        ? deserializeAws_json1_0CustomDomainList(output.CustomDomains, context)
        : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    NextToken: __expectString(output.NextToken),
    ServiceArn: __expectString(output.ServiceArn),
  } as any;
};

const deserializeAws_json1_0DescribeObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeObservabilityConfigurationResponse => {
  return {
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != undefined
        ? deserializeAws_json1_0ObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeServiceResponse = (
  output: any,
  context: __SerdeContext
): DescribeServiceResponse => {
  return {
    Service: output.Service != undefined ? deserializeAws_json1_0Service(output.Service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DescribeVpcConnectorResponse = (
  output: any,
  context: __SerdeContext
): DescribeVpcConnectorResponse => {
  return {
    VpcConnector:
      output.VpcConnector != undefined ? deserializeAws_json1_0VpcConnector(output.VpcConnector, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DisassociateCustomDomainResponse = (
  output: any,
  context: __SerdeContext
): DisassociateCustomDomainResponse => {
  return {
    CustomDomain:
      output.CustomDomain != undefined ? deserializeAws_json1_0CustomDomain(output.CustomDomain, context) : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    ServiceArn: __expectString(output.ServiceArn),
  } as any;
};

const deserializeAws_json1_0EgressConfiguration = (output: any, context: __SerdeContext): EgressConfiguration => {
  return {
    EgressType: __expectString(output.EgressType),
    VpcConnectorArn: __expectString(output.VpcConnectorArn),
  } as any;
};

const deserializeAws_json1_0EncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): EncryptionConfiguration => {
  return {
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

const deserializeAws_json1_0HealthCheckConfiguration = (
  output: any,
  context: __SerdeContext
): HealthCheckConfiguration => {
  return {
    HealthyThreshold: __expectInt32(output.HealthyThreshold),
    Interval: __expectInt32(output.Interval),
    Path: __expectString(output.Path),
    Protocol: __expectString(output.Protocol),
    Timeout: __expectInt32(output.Timeout),
    UnhealthyThreshold: __expectInt32(output.UnhealthyThreshold),
  } as any;
};

const deserializeAws_json1_0ImageConfiguration = (output: any, context: __SerdeContext): ImageConfiguration => {
  return {
    Port: __expectString(output.Port),
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables != undefined
        ? deserializeAws_json1_0RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: __expectString(output.StartCommand),
  } as any;
};

const deserializeAws_json1_0ImageRepository = (output: any, context: __SerdeContext): ImageRepository => {
  return {
    ImageConfiguration:
      output.ImageConfiguration != undefined
        ? deserializeAws_json1_0ImageConfiguration(output.ImageConfiguration, context)
        : undefined,
    ImageIdentifier: __expectString(output.ImageIdentifier),
    ImageRepositoryType: __expectString(output.ImageRepositoryType),
  } as any;
};

const deserializeAws_json1_0InstanceConfiguration = (output: any, context: __SerdeContext): InstanceConfiguration => {
  return {
    Cpu: __expectString(output.Cpu),
    InstanceRoleArn: __expectString(output.InstanceRoleArn),
    Memory: __expectString(output.Memory),
  } as any;
};

const deserializeAws_json1_0InternalServiceErrorException = (
  output: any,
  context: __SerdeContext
): InternalServiceErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidRequestException = (
  output: any,
  context: __SerdeContext
): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ListAutoScalingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAutoScalingConfigurationsResponse => {
  return {
    AutoScalingConfigurationSummaryList:
      output.AutoScalingConfigurationSummaryList != undefined
        ? deserializeAws_json1_0AutoScalingConfigurationSummaryList(output.AutoScalingConfigurationSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListConnectionsResponse = (
  output: any,
  context: __SerdeContext
): ListConnectionsResponse => {
  return {
    ConnectionSummaryList:
      output.ConnectionSummaryList != undefined
        ? deserializeAws_json1_0ConnectionSummaryList(output.ConnectionSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_0ListObservabilityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListObservabilityConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ObservabilityConfigurationSummaryList:
      output.ObservabilityConfigurationSummaryList != undefined
        ? deserializeAws_json1_0ObservabilityConfigurationSummaryList(
            output.ObservabilityConfigurationSummaryList,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OperationSummaryList:
      output.OperationSummaryList != undefined
        ? deserializeAws_json1_0OperationSummaryList(output.OperationSummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceSummaryList:
      output.ServiceSummaryList != undefined
        ? deserializeAws_json1_0ServiceSummaryList(output.ServiceSummaryList, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != undefined ? deserializeAws_json1_0TagList(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListVpcConnectorsResponse = (
  output: any,
  context: __SerdeContext
): ListVpcConnectorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    VpcConnectors:
      output.VpcConnectors != undefined
        ? deserializeAws_json1_0VpcConnectors(output.VpcConnectors, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    EgressConfiguration:
      output.EgressConfiguration != undefined
        ? deserializeAws_json1_0EgressConfiguration(output.EgressConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ObservabilityConfiguration = (
  output: any,
  context: __SerdeContext
): ObservabilityConfiguration => {
  return {
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    DeletedAt:
      output.DeletedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt)))
        : undefined,
    Latest: __expectBoolean(output.Latest),
    ObservabilityConfigurationArn: __expectString(output.ObservabilityConfigurationArn),
    ObservabilityConfigurationName: __expectString(output.ObservabilityConfigurationName),
    ObservabilityConfigurationRevision: __expectInt32(output.ObservabilityConfigurationRevision),
    Status: __expectString(output.Status),
    TraceConfiguration:
      output.TraceConfiguration != undefined
        ? deserializeAws_json1_0TraceConfiguration(output.TraceConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ObservabilityConfigurationSummary = (
  output: any,
  context: __SerdeContext
): ObservabilityConfigurationSummary => {
  return {
    ObservabilityConfigurationArn: __expectString(output.ObservabilityConfigurationArn),
    ObservabilityConfigurationName: __expectString(output.ObservabilityConfigurationName),
    ObservabilityConfigurationRevision: __expectInt32(output.ObservabilityConfigurationRevision),
  } as any;
};

const deserializeAws_json1_0ObservabilityConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): ObservabilityConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ObservabilityConfigurationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return {
    EndedAt:
      output.EndedAt != undefined ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    Id: __expectString(output.Id),
    StartedAt:
      output.StartedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt)))
        : undefined,
    Status: __expectString(output.Status),
    TargetArn: __expectString(output.TargetArn),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_json1_0OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0OperationSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0PauseServiceResponse = (output: any, context: __SerdeContext): PauseServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != undefined ? deserializeAws_json1_0Service(output.Service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ResumeServiceResponse = (output: any, context: __SerdeContext): ResumeServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != undefined ? deserializeAws_json1_0Service(output.Service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0RuntimeEnvironmentVariables = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
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

const deserializeAws_json1_0Service = (output: any, context: __SerdeContext): Service => {
  return {
    AutoScalingConfigurationSummary:
      output.AutoScalingConfigurationSummary != undefined
        ? deserializeAws_json1_0AutoScalingConfigurationSummary(output.AutoScalingConfigurationSummary, context)
        : undefined,
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    DeletedAt:
      output.DeletedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt)))
        : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != undefined
        ? deserializeAws_json1_0EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    HealthCheckConfiguration:
      output.HealthCheckConfiguration != undefined
        ? deserializeAws_json1_0HealthCheckConfiguration(output.HealthCheckConfiguration, context)
        : undefined,
    InstanceConfiguration:
      output.InstanceConfiguration != undefined
        ? deserializeAws_json1_0InstanceConfiguration(output.InstanceConfiguration, context)
        : undefined,
    NetworkConfiguration:
      output.NetworkConfiguration != undefined
        ? deserializeAws_json1_0NetworkConfiguration(output.NetworkConfiguration, context)
        : undefined,
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != undefined
        ? deserializeAws_json1_0ServiceObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceUrl: __expectString(output.ServiceUrl),
    SourceConfiguration:
      output.SourceConfiguration != undefined
        ? deserializeAws_json1_0SourceConfiguration(output.SourceConfiguration, context)
        : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_json1_0ServiceObservabilityConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceObservabilityConfiguration => {
  return {
    ObservabilityConfigurationArn: __expectString(output.ObservabilityConfigurationArn),
    ObservabilityEnabled: __expectBoolean(output.ObservabilityEnabled),
  } as any;
};

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_0ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceUrl: __expectString(output.ServiceUrl),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt)))
        : undefined,
  } as any;
};

const deserializeAws_json1_0ServiceSummaryList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ServiceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0SourceCodeVersion = (output: any, context: __SerdeContext): SourceCodeVersion => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration != undefined
        ? deserializeAws_json1_0AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    AutoDeploymentsEnabled: __expectBoolean(output.AutoDeploymentsEnabled),
    CodeRepository:
      output.CodeRepository != undefined
        ? deserializeAws_json1_0CodeRepository(output.CodeRepository, context)
        : undefined,
    ImageRepository:
      output.ImageRepository != undefined
        ? deserializeAws_json1_0ImageRepository(output.ImageRepository, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0StartDeploymentResponse = (
  output: any,
  context: __SerdeContext
): StartDeploymentResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

const deserializeAws_json1_0StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_0TagList = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0TraceConfiguration = (output: any, context: __SerdeContext): TraceConfiguration => {
  return {
    Vendor: __expectString(output.Vendor),
  } as any;
};

const deserializeAws_json1_0UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_0UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != undefined ? deserializeAws_json1_0Service(output.Service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0VpcConnector = (output: any, context: __SerdeContext): VpcConnector => {
  return {
    CreatedAt:
      output.CreatedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt)))
        : undefined,
    DeletedAt:
      output.DeletedAt != undefined
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt)))
        : undefined,
    SecurityGroups:
      output.SecurityGroups != undefined ? deserializeAws_json1_0StringList(output.SecurityGroups, context) : undefined,
    Status: __expectString(output.Status),
    Subnets: output.Subnets != undefined ? deserializeAws_json1_0StringList(output.Subnets, context) : undefined,
    VpcConnectorArn: __expectString(output.VpcConnectorArn),
    VpcConnectorName: __expectString(output.VpcConnectorName),
    VpcConnectorRevision: __expectInt32(output.VpcConnectorRevision),
  } as any;
};

const deserializeAws_json1_0VpcConnectors = (output: any, context: __SerdeContext): VpcConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0VpcConnector(entry, context);
    });
  return retVal;
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
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
};
