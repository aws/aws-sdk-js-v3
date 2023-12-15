// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
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
  CreateVpcIngressConnectionCommandInput,
  CreateVpcIngressConnectionCommandOutput,
} from "../commands/CreateVpcIngressConnectionCommand";
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
  DeleteVpcIngressConnectionCommandInput,
  DeleteVpcIngressConnectionCommandOutput,
} from "../commands/DeleteVpcIngressConnectionCommand";
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
  DescribeVpcIngressConnectionCommandInput,
  DescribeVpcIngressConnectionCommandOutput,
} from "../commands/DescribeVpcIngressConnectionCommand";
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
  ListServicesForAutoScalingConfigurationCommandInput,
  ListServicesForAutoScalingConfigurationCommandOutput,
} from "../commands/ListServicesForAutoScalingConfigurationCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListVpcConnectorsCommandInput, ListVpcConnectorsCommandOutput } from "../commands/ListVpcConnectorsCommand";
import {
  ListVpcIngressConnectionsCommandInput,
  ListVpcIngressConnectionsCommandOutput,
} from "../commands/ListVpcIngressConnectionsCommand";
import { PauseServiceCommandInput, PauseServiceCommandOutput } from "../commands/PauseServiceCommand";
import { ResumeServiceCommandInput, ResumeServiceCommandOutput } from "../commands/ResumeServiceCommand";
import { StartDeploymentCommandInput, StartDeploymentCommandOutput } from "../commands/StartDeploymentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDefaultAutoScalingConfigurationCommandInput,
  UpdateDefaultAutoScalingConfigurationCommandOutput,
} from "../commands/UpdateDefaultAutoScalingConfigurationCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  UpdateVpcIngressConnectionCommandInput,
  UpdateVpcIngressConnectionCommandOutput,
} from "../commands/UpdateVpcIngressConnectionCommand";
import { AppRunnerServiceException as __BaseException } from "../models/AppRunnerServiceException";
import {
  AssociateCustomDomainRequest,
  AuthenticationConfiguration,
  AutoScalingConfiguration,
  AutoScalingConfigurationSummary,
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
  CreateVpcIngressConnectionRequest,
  CreateVpcIngressConnectionResponse,
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
  DeleteVpcIngressConnectionRequest,
  DeleteVpcIngressConnectionResponse,
  DescribeAutoScalingConfigurationRequest,
  DescribeAutoScalingConfigurationResponse,
  DescribeCustomDomainsRequest,
  DescribeObservabilityConfigurationRequest,
  DescribeObservabilityConfigurationResponse,
  DescribeServiceRequest,
  DescribeServiceResponse,
  DescribeVpcConnectorRequest,
  DescribeVpcConnectorResponse,
  DescribeVpcIngressConnectionRequest,
  DescribeVpcIngressConnectionResponse,
  DisassociateCustomDomainRequest,
  EgressConfiguration,
  EncryptionConfiguration,
  HealthCheckConfiguration,
  ImageConfiguration,
  ImageRepository,
  IngressConfiguration,
  IngressVpcConfiguration,
  InstanceConfiguration,
  InternalServiceErrorException,
  InvalidRequestException,
  InvalidStateException,
  ListAutoScalingConfigurationsRequest,
  ListAutoScalingConfigurationsResponse,
  ListConnectionsRequest,
  ListConnectionsResponse,
  ListObservabilityConfigurationsRequest,
  ListOperationsRequest,
  ListOperationsResponse,
  ListServicesForAutoScalingConfigurationRequest,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListVpcConnectorsRequest,
  ListVpcConnectorsResponse,
  ListVpcIngressConnectionsFilter,
  ListVpcIngressConnectionsRequest,
  NetworkConfiguration,
  ObservabilityConfiguration,
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
  Tag,
  TagResourceRequest,
  TraceConfiguration,
  UntagResourceRequest,
  UpdateDefaultAutoScalingConfigurationRequest,
  UpdateDefaultAutoScalingConfigurationResponse,
  UpdateServiceRequest,
  UpdateServiceResponse,
  UpdateVpcIngressConnectionRequest,
  UpdateVpcIngressConnectionResponse,
  VpcConnector,
  VpcIngressConnection,
} from "../models/models_0";

/**
 * serializeAws_json1_0AssociateCustomDomainCommand
 */
export const se_AssociateCustomDomainCommand = async (
  input: AssociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateCustomDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAutoScalingConfigurationCommand
 */
export const se_CreateAutoScalingConfigurationCommand = async (
  input: CreateAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateAutoScalingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateObservabilityConfigurationCommand
 */
export const se_CreateObservabilityConfigurationCommand = async (
  input: CreateObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateObservabilityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVpcConnectorCommand
 */
export const se_CreateVpcConnectorCommand = async (
  input: CreateVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVpcConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVpcIngressConnectionCommand
 */
export const se_CreateVpcIngressConnectionCommand = async (
  input: CreateVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVpcIngressConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAutoScalingConfigurationCommand
 */
export const se_DeleteAutoScalingConfigurationCommand = async (
  input: DeleteAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteAutoScalingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteObservabilityConfigurationCommand
 */
export const se_DeleteObservabilityConfigurationCommand = async (
  input: DeleteObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteObservabilityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceCommand
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
 * serializeAws_json1_0DeleteVpcConnectorCommand
 */
export const se_DeleteVpcConnectorCommand = async (
  input: DeleteVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVpcConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVpcIngressConnectionCommand
 */
export const se_DeleteVpcIngressConnectionCommand = async (
  input: DeleteVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVpcIngressConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeAutoScalingConfigurationCommand
 */
export const se_DescribeAutoScalingConfigurationCommand = async (
  input: DescribeAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeAutoScalingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeCustomDomainsCommand
 */
export const se_DescribeCustomDomainsCommand = async (
  input: DescribeCustomDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeCustomDomains");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeObservabilityConfigurationCommand
 */
export const se_DescribeObservabilityConfigurationCommand = async (
  input: DescribeObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeObservabilityConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeServiceCommand
 */
export const se_DescribeServiceCommand = async (
  input: DescribeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeVpcConnectorCommand
 */
export const se_DescribeVpcConnectorCommand = async (
  input: DescribeVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVpcConnector");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeVpcIngressConnectionCommand
 */
export const se_DescribeVpcIngressConnectionCommand = async (
  input: DescribeVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVpcIngressConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateCustomDomainCommand
 */
export const se_DisassociateCustomDomainCommand = async (
  input: DisassociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateCustomDomain");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAutoScalingConfigurationsCommand
 */
export const se_ListAutoScalingConfigurationsCommand = async (
  input: ListAutoScalingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListAutoScalingConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListObservabilityConfigurationsCommand
 */
export const se_ListObservabilityConfigurationsCommand = async (
  input: ListObservabilityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListObservabilityConfigurations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOperationsCommand
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
 * serializeAws_json1_0ListServicesCommand
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
 * serializeAws_json1_0ListServicesForAutoScalingConfigurationCommand
 */
export const se_ListServicesForAutoScalingConfigurationCommand = async (
  input: ListServicesForAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServicesForAutoScalingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
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
 * serializeAws_json1_0ListVpcConnectorsCommand
 */
export const se_ListVpcConnectorsCommand = async (
  input: ListVpcConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVpcConnectors");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVpcIngressConnectionsCommand
 */
export const se_ListVpcIngressConnectionsCommand = async (
  input: ListVpcIngressConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListVpcIngressConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PauseServiceCommand
 */
export const se_PauseServiceCommand = async (
  input: PauseServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("PauseService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ResumeServiceCommand
 */
export const se_ResumeServiceCommand = async (
  input: ResumeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ResumeService");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartDeploymentCommand
 */
export const se_StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("StartDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
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
 * serializeAws_json1_0UntagResourceCommand
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
 * serializeAws_json1_0UpdateDefaultAutoScalingConfigurationCommand
 */
export const se_UpdateDefaultAutoScalingConfigurationCommand = async (
  input: UpdateDefaultAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDefaultAutoScalingConfiguration");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceCommand
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
 * serializeAws_json1_0UpdateVpcIngressConnectionCommand
 */
export const se_UpdateVpcIngressConnectionCommand = async (
  input: UpdateVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVpcIngressConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AssociateCustomDomainCommand
 */
export const de_AssociateCustomDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateCustomDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0AssociateCustomDomainCommandError
 */
const de_AssociateCustomDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateAutoScalingConfigurationCommand
 */
export const de_CreateAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateAutoScalingConfigurationResponse(data, context);
  const response: CreateAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateAutoScalingConfigurationCommandError
 */
const de_CreateAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateConnectionResponse(data, context);
  const response: CreateConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateConnectionCommandError
 */
const de_CreateConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateObservabilityConfigurationCommand
 */
export const de_CreateObservabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObservabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateObservabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateObservabilityConfigurationResponse(data, context);
  const response: CreateObservabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateObservabilityConfigurationCommandError
 */
const de_CreateObservabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateObservabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateServiceCommand
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
 * deserializeAws_json1_0CreateServiceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateVpcConnectorCommand
 */
export const de_CreateVpcConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVpcConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVpcConnectorResponse(data, context);
  const response: CreateVpcConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateVpcConnectorCommandError
 */
const de_CreateVpcConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateVpcIngressConnectionCommand
 */
export const de_CreateVpcIngressConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcIngressConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVpcIngressConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVpcIngressConnectionResponse(data, context);
  const response: CreateVpcIngressConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateVpcIngressConnectionCommandError
 */
const de_CreateVpcIngressConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcIngressConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.apprunner#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteAutoScalingConfigurationCommand
 */
export const de_DeleteAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteAutoScalingConfigurationResponse(data, context);
  const response: DeleteAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteAutoScalingConfigurationCommandError
 */
const de_DeleteAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteConnectionResponse(data, context);
  const response: DeleteConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteConnectionCommandError
 */
const de_DeleteConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DeleteObservabilityConfigurationCommand
 */
export const de_DeleteObservabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObservabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteObservabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteObservabilityConfigurationResponse(data, context);
  const response: DeleteObservabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteObservabilityConfigurationCommandError
 */
const de_DeleteObservabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObservabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DeleteServiceCommand
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
  return response;
};

/**
 * deserializeAws_json1_0DeleteServiceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DeleteVpcConnectorCommand
 */
export const de_DeleteVpcConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVpcConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVpcConnectorResponse(data, context);
  const response: DeleteVpcConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteVpcConnectorCommandError
 */
const de_DeleteVpcConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DeleteVpcIngressConnectionCommand
 */
export const de_DeleteVpcIngressConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcIngressConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVpcIngressConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteVpcIngressConnectionResponse(data, context);
  const response: DeleteVpcIngressConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteVpcIngressConnectionCommandError
 */
const de_DeleteVpcIngressConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVpcIngressConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DescribeAutoScalingConfigurationCommand
 */
export const de_DescribeAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeAutoScalingConfigurationResponse(data, context);
  const response: DescribeAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeAutoScalingConfigurationCommandError
 */
const de_DescribeAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DescribeCustomDomainsCommand
 */
export const de_DescribeCustomDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeCustomDomainsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeCustomDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeCustomDomainsCommandError
 */
const de_DescribeCustomDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCustomDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DescribeObservabilityConfigurationCommand
 */
export const de_DescribeObservabilityConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservabilityConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeObservabilityConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeObservabilityConfigurationResponse(data, context);
  const response: DescribeObservabilityConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeObservabilityConfigurationCommandError
 */
const de_DescribeObservabilityConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeObservabilityConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DescribeServiceCommand
 */
export const de_DescribeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeServiceResponse(data, context);
  const response: DescribeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeServiceCommandError
 */
const de_DescribeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DescribeVpcConnectorCommand
 */
export const de_DescribeVpcConnectorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcConnectorCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVpcConnectorCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVpcConnectorResponse(data, context);
  const response: DescribeVpcConnectorCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeVpcConnectorCommandError
 */
const de_DescribeVpcConnectorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcConnectorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DescribeVpcIngressConnectionCommand
 */
export const de_DescribeVpcIngressConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcIngressConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVpcIngressConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVpcIngressConnectionResponse(data, context);
  const response: DescribeVpcIngressConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DescribeVpcIngressConnectionCommandError
 */
const de_DescribeVpcIngressConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVpcIngressConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0DisassociateCustomDomainCommand
 */
export const de_DisassociateCustomDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomDomainCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateCustomDomainCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DisassociateCustomDomainCommandError
 */
const de_DisassociateCustomDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0ListAutoScalingConfigurationsCommand
 */
export const de_ListAutoScalingConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListAutoScalingConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListAutoScalingConfigurationsResponse(data, context);
  const response: ListAutoScalingConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListAutoScalingConfigurationsCommandError
 */
const de_ListAutoScalingConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAutoScalingConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListConnectionsCommand
 */
export const de_ListConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListConnectionsResponse(data, context);
  const response: ListConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListConnectionsCommandError
 */
const de_ListConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListObservabilityConfigurationsCommand
 */
export const de_ListObservabilityConfigurationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObservabilityConfigurationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListObservabilityConfigurationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListObservabilityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListObservabilityConfigurationsCommandError
 */
const de_ListObservabilityConfigurationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListObservabilityConfigurationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListOperationsCommand
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
  return response;
};

/**
 * deserializeAws_json1_0ListOperationsCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0ListServicesCommand
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
 * deserializeAws_json1_0ListServicesCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServicesForAutoScalingConfigurationCommand
 */
export const de_ListServicesForAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesForAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicesForAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServicesForAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServicesForAutoScalingConfigurationCommandError
 */
const de_ListServicesForAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesForAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0ListTagsForResourceCommand
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
 * deserializeAws_json1_0ListTagsForResourceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0ListVpcConnectorsCommand
 */
export const de_ListVpcConnectorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcConnectorsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVpcConnectorsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListVpcConnectorsResponse(data, context);
  const response: ListVpcConnectorsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListVpcConnectorsCommandError
 */
const de_ListVpcConnectorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcConnectorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListVpcIngressConnectionsCommand
 */
export const de_ListVpcIngressConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcIngressConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListVpcIngressConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListVpcIngressConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListVpcIngressConnectionsCommandError
 */
const de_ListVpcIngressConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVpcIngressConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0PauseServiceCommand
 */
export const de_PauseServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_PauseServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_PauseServiceResponse(data, context);
  const response: PauseServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0PauseServiceCommandError
 */
const de_PauseServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PauseServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0ResumeServiceCommand
 */
export const de_ResumeServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ResumeServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ResumeServiceResponse(data, context);
  const response: ResumeServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ResumeServiceCommandError
 */
const de_ResumeServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResumeServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0StartDeploymentCommand
 */
export const de_StartDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_StartDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0StartDeploymentCommandError
 */
const de_StartDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0TagResourceCommand
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
 * deserializeAws_json1_0TagResourceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0UntagResourceCommand
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
 * deserializeAws_json1_0UntagResourceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0UpdateDefaultAutoScalingConfigurationCommand
 */
export const de_UpdateDefaultAutoScalingConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultAutoScalingConfigurationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDefaultAutoScalingConfigurationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDefaultAutoScalingConfigurationResponse(data, context);
  const response: UpdateDefaultAutoScalingConfigurationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateDefaultAutoScalingConfigurationCommandError
 */
const de_UpdateDefaultAutoScalingConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDefaultAutoScalingConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0UpdateServiceCommand
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
  return response;
};

/**
 * deserializeAws_json1_0UpdateServiceCommandError
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
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0UpdateVpcIngressConnectionCommand
 */
export const de_UpdateVpcIngressConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcIngressConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVpcIngressConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVpcIngressConnectionResponse(data, context);
  const response: UpdateVpcIngressConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateVpcIngressConnectionCommandError
 */
const de_UpdateVpcIngressConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcIngressConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceErrorException":
    case "com.amazonaws.apprunner#InternalServiceErrorException":
      throw await de_InternalServiceErrorExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.apprunner#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidStateException":
    case "com.amazonaws.apprunner#InvalidStateException":
      throw await de_InvalidStateExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.apprunner#ResourceNotFoundException":
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
 * deserializeAws_json1_0InternalServiceErrorExceptionRes
 */
const de_InternalServiceErrorExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceErrorException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServiceErrorException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InvalidStateExceptionRes
 */
const de_InvalidStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidStateException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidStateException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ResourceNotFoundExceptionRes
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
 * deserializeAws_json1_0ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AssociateCustomDomainRequest omitted.

// se_AuthenticationConfiguration omitted.

// se_CodeConfiguration omitted.

// se_CodeConfigurationValues omitted.

// se_CodeRepository omitted.

// se_CreateAutoScalingConfigurationRequest omitted.

// se_CreateConnectionRequest omitted.

// se_CreateObservabilityConfigurationRequest omitted.

// se_CreateServiceRequest omitted.

// se_CreateVpcConnectorRequest omitted.

// se_CreateVpcIngressConnectionRequest omitted.

// se_DeleteAutoScalingConfigurationRequest omitted.

// se_DeleteConnectionRequest omitted.

// se_DeleteObservabilityConfigurationRequest omitted.

// se_DeleteServiceRequest omitted.

// se_DeleteVpcConnectorRequest omitted.

// se_DeleteVpcIngressConnectionRequest omitted.

// se_DescribeAutoScalingConfigurationRequest omitted.

// se_DescribeCustomDomainsRequest omitted.

// se_DescribeObservabilityConfigurationRequest omitted.

// se_DescribeServiceRequest omitted.

// se_DescribeVpcConnectorRequest omitted.

// se_DescribeVpcIngressConnectionRequest omitted.

// se_DisassociateCustomDomainRequest omitted.

// se_EgressConfiguration omitted.

// se_EncryptionConfiguration omitted.

// se_HealthCheckConfiguration omitted.

// se_ImageConfiguration omitted.

// se_ImageRepository omitted.

// se_IngressConfiguration omitted.

// se_IngressVpcConfiguration omitted.

// se_InstanceConfiguration omitted.

// se_ListAutoScalingConfigurationsRequest omitted.

// se_ListConnectionsRequest omitted.

// se_ListObservabilityConfigurationsRequest omitted.

// se_ListOperationsRequest omitted.

// se_ListServicesForAutoScalingConfigurationRequest omitted.

// se_ListServicesRequest omitted.

// se_ListTagsForResourceRequest omitted.

// se_ListVpcConnectorsRequest omitted.

// se_ListVpcIngressConnectionsFilter omitted.

// se_ListVpcIngressConnectionsRequest omitted.

// se_NetworkConfiguration omitted.

// se_PauseServiceRequest omitted.

// se_ResumeServiceRequest omitted.

// se_RuntimeEnvironmentSecrets omitted.

// se_RuntimeEnvironmentVariables omitted.

// se_ServiceObservabilityConfiguration omitted.

// se_SourceCodeVersion omitted.

// se_SourceConfiguration omitted.

// se_StartDeploymentRequest omitted.

// se_StringList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceRequest omitted.

// se_TraceConfiguration omitted.

// se_UntagResourceRequest omitted.

// se_UpdateDefaultAutoScalingConfigurationRequest omitted.

// se_UpdateServiceRequest omitted.

// se_UpdateVpcIngressConnectionRequest omitted.

// de_AssociateCustomDomainResponse omitted.

// de_AuthenticationConfiguration omitted.

/**
 * deserializeAws_json1_0AutoScalingConfiguration
 */
const de_AutoScalingConfiguration = (output: any, context: __SerdeContext): AutoScalingConfiguration => {
  return take(output, {
    AutoScalingConfigurationArn: __expectString,
    AutoScalingConfigurationName: __expectString,
    AutoScalingConfigurationRevision: __expectInt32,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HasAssociatedService: __expectBoolean,
    IsDefault: __expectBoolean,
    Latest: __expectBoolean,
    MaxConcurrency: __expectInt32,
    MaxSize: __expectInt32,
    MinSize: __expectInt32,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingConfigurationSummary
 */
const de_AutoScalingConfigurationSummary = (output: any, context: __SerdeContext): AutoScalingConfigurationSummary => {
  return take(output, {
    AutoScalingConfigurationArn: __expectString,
    AutoScalingConfigurationName: __expectString,
    AutoScalingConfigurationRevision: __expectInt32,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    HasAssociatedService: __expectBoolean,
    IsDefault: __expectBoolean,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0AutoScalingConfigurationSummaryList
 */
const de_AutoScalingConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): AutoScalingConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AutoScalingConfigurationSummary(entry, context);
    });
  return retVal;
};

// de_CertificateValidationRecord omitted.

// de_CertificateValidationRecordList omitted.

// de_CodeConfiguration omitted.

// de_CodeConfigurationValues omitted.

// de_CodeRepository omitted.

/**
 * deserializeAws_json1_0Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return take(output, {
    ConnectionArn: __expectString,
    ConnectionName: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProviderType: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ConnectionSummary
 */
const de_ConnectionSummary = (output: any, context: __SerdeContext): ConnectionSummary => {
  return take(output, {
    ConnectionArn: __expectString,
    ConnectionName: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ProviderType: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ConnectionSummaryList
 */
const de_ConnectionSummaryList = (output: any, context: __SerdeContext): ConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CreateAutoScalingConfigurationResponse
 */
const de_CreateAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateAutoScalingConfigurationResponse => {
  return take(output, {
    AutoScalingConfiguration: (_: any) => de_AutoScalingConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateConnectionResponse
 */
const de_CreateConnectionResponse = (output: any, context: __SerdeContext): CreateConnectionResponse => {
  return take(output, {
    Connection: (_: any) => de_Connection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateObservabilityConfigurationResponse
 */
const de_CreateObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateObservabilityConfigurationResponse => {
  return take(output, {
    ObservabilityConfiguration: (_: any) => de_ObservabilityConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateServiceResponse
 */
const de_CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return take(output, {
    OperationId: __expectString,
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateVpcConnectorResponse
 */
const de_CreateVpcConnectorResponse = (output: any, context: __SerdeContext): CreateVpcConnectorResponse => {
  return take(output, {
    VpcConnector: (_: any) => de_VpcConnector(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateVpcIngressConnectionResponse
 */
const de_CreateVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateVpcIngressConnectionResponse => {
  return take(output, {
    VpcIngressConnection: (_: any) => de_VpcIngressConnection(_, context),
  }) as any;
};

// de_CustomDomain omitted.

// de_CustomDomainList omitted.

/**
 * deserializeAws_json1_0DeleteAutoScalingConfigurationResponse
 */
const de_DeleteAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAutoScalingConfigurationResponse => {
  return take(output, {
    AutoScalingConfiguration: (_: any) => de_AutoScalingConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteConnectionResponse
 */
const de_DeleteConnectionResponse = (output: any, context: __SerdeContext): DeleteConnectionResponse => {
  return take(output, {
    Connection: (_: any) => de_Connection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteObservabilityConfigurationResponse
 */
const de_DeleteObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteObservabilityConfigurationResponse => {
  return take(output, {
    ObservabilityConfiguration: (_: any) => de_ObservabilityConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteServiceResponse
 */
const de_DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return take(output, {
    OperationId: __expectString,
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteVpcConnectorResponse
 */
const de_DeleteVpcConnectorResponse = (output: any, context: __SerdeContext): DeleteVpcConnectorResponse => {
  return take(output, {
    VpcConnector: (_: any) => de_VpcConnector(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteVpcIngressConnectionResponse
 */
const de_DeleteVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteVpcIngressConnectionResponse => {
  return take(output, {
    VpcIngressConnection: (_: any) => de_VpcIngressConnection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeAutoScalingConfigurationResponse
 */
const de_DescribeAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAutoScalingConfigurationResponse => {
  return take(output, {
    AutoScalingConfiguration: (_: any) => de_AutoScalingConfiguration(_, context),
  }) as any;
};

// de_DescribeCustomDomainsResponse omitted.

/**
 * deserializeAws_json1_0DescribeObservabilityConfigurationResponse
 */
const de_DescribeObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeObservabilityConfigurationResponse => {
  return take(output, {
    ObservabilityConfiguration: (_: any) => de_ObservabilityConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeServiceResponse
 */
const de_DescribeServiceResponse = (output: any, context: __SerdeContext): DescribeServiceResponse => {
  return take(output, {
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeVpcConnectorResponse
 */
const de_DescribeVpcConnectorResponse = (output: any, context: __SerdeContext): DescribeVpcConnectorResponse => {
  return take(output, {
    VpcConnector: (_: any) => de_VpcConnector(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DescribeVpcIngressConnectionResponse
 */
const de_DescribeVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeVpcIngressConnectionResponse => {
  return take(output, {
    VpcIngressConnection: (_: any) => de_VpcIngressConnection(_, context),
  }) as any;
};

// de_DisassociateCustomDomainResponse omitted.

// de_EgressConfiguration omitted.

// de_EncryptionConfiguration omitted.

// de_HealthCheckConfiguration omitted.

// de_ImageConfiguration omitted.

// de_ImageRepository omitted.

// de_IngressConfiguration omitted.

// de_IngressVpcConfiguration omitted.

// de_InstanceConfiguration omitted.

// de_InternalServiceErrorException omitted.

// de_InvalidRequestException omitted.

// de_InvalidStateException omitted.

/**
 * deserializeAws_json1_0ListAutoScalingConfigurationsResponse
 */
const de_ListAutoScalingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAutoScalingConfigurationsResponse => {
  return take(output, {
    AutoScalingConfigurationSummaryList: (_: any) => de_AutoScalingConfigurationSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListConnectionsResponse
 */
const de_ListConnectionsResponse = (output: any, context: __SerdeContext): ListConnectionsResponse => {
  return take(output, {
    ConnectionSummaryList: (_: any) => de_ConnectionSummaryList(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_ListObservabilityConfigurationsResponse omitted.

/**
 * deserializeAws_json1_0ListOperationsResponse
 */
const de_ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return take(output, {
    NextToken: __expectString,
    OperationSummaryList: (_: any) => de_OperationSummaryList(_, context),
  }) as any;
};

// de_ListServicesForAutoScalingConfigurationResponse omitted.

/**
 * deserializeAws_json1_0ListServicesResponse
 */
const de_ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return take(output, {
    NextToken: __expectString,
    ServiceSummaryList: (_: any) => de_ServiceSummaryList(_, context),
  }) as any;
};

// de_ListTagsForResourceResponse omitted.

/**
 * deserializeAws_json1_0ListVpcConnectorsResponse
 */
const de_ListVpcConnectorsResponse = (output: any, context: __SerdeContext): ListVpcConnectorsResponse => {
  return take(output, {
    NextToken: __expectString,
    VpcConnectors: (_: any) => de_VpcConnectors(_, context),
  }) as any;
};

// de_ListVpcIngressConnectionsResponse omitted.

// de_NetworkConfiguration omitted.

/**
 * deserializeAws_json1_0ObservabilityConfiguration
 */
const de_ObservabilityConfiguration = (output: any, context: __SerdeContext): ObservabilityConfiguration => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Latest: __expectBoolean,
    ObservabilityConfigurationArn: __expectString,
    ObservabilityConfigurationName: __expectString,
    ObservabilityConfigurationRevision: __expectInt32,
    Status: __expectString,
    TraceConfiguration: _json,
  }) as any;
};

// de_ObservabilityConfigurationSummary omitted.

// de_ObservabilityConfigurationSummaryList omitted.

/**
 * deserializeAws_json1_0OperationSummary
 */
const de_OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return take(output, {
    EndedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Id: __expectString,
    StartedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TargetArn: __expectString,
    Type: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0OperationSummaryList
 */
const de_OperationSummaryList = (output: any, context: __SerdeContext): OperationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OperationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0PauseServiceResponse
 */
const de_PauseServiceResponse = (output: any, context: __SerdeContext): PauseServiceResponse => {
  return take(output, {
    OperationId: __expectString,
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0ResumeServiceResponse
 */
const de_ResumeServiceResponse = (output: any, context: __SerdeContext): ResumeServiceResponse => {
  return take(output, {
    OperationId: __expectString,
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

// de_RuntimeEnvironmentSecrets omitted.

// de_RuntimeEnvironmentVariables omitted.

/**
 * deserializeAws_json1_0Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return take(output, {
    AutoScalingConfigurationSummary: (_: any) => de_AutoScalingConfigurationSummary(_, context),
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EncryptionConfiguration: _json,
    HealthCheckConfiguration: _json,
    InstanceConfiguration: _json,
    NetworkConfiguration: _json,
    ObservabilityConfiguration: _json,
    ServiceArn: __expectString,
    ServiceId: __expectString,
    ServiceName: __expectString,
    ServiceUrl: __expectString,
    SourceConfiguration: _json,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ServiceArnList omitted.

// de_ServiceObservabilityConfiguration omitted.

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_0ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ServiceArn: __expectString,
    ServiceId: __expectString,
    ServiceName: __expectString,
    ServiceUrl: __expectString,
    Status: __expectString,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceSummaryList
 */
const de_ServiceSummaryList = (output: any, context: __SerdeContext): ServiceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceSummary(entry, context);
    });
  return retVal;
};

// de_SourceCodeVersion omitted.

// de_SourceConfiguration omitted.

// de_StartDeploymentResponse omitted.

// de_StringList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceResponse omitted.

// de_TraceConfiguration omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_0UpdateDefaultAutoScalingConfigurationResponse
 */
const de_UpdateDefaultAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): UpdateDefaultAutoScalingConfigurationResponse => {
  return take(output, {
    AutoScalingConfiguration: (_: any) => de_AutoScalingConfiguration(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateServiceResponse
 */
const de_UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return take(output, {
    OperationId: __expectString,
    Service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateVpcIngressConnectionResponse
 */
const de_UpdateVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateVpcIngressConnectionResponse => {
  return take(output, {
    VpcIngressConnection: (_: any) => de_VpcIngressConnection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0VpcConnector
 */
const de_VpcConnector = (output: any, context: __SerdeContext): VpcConnector => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SecurityGroups: _json,
    Status: __expectString,
    Subnets: _json,
    VpcConnectorArn: __expectString,
    VpcConnectorName: __expectString,
    VpcConnectorRevision: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_json1_0VpcConnectors
 */
const de_VpcConnectors = (output: any, context: __SerdeContext): VpcConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_VpcConnector(entry, context);
    });
  return retVal;
};

// de_VpcDNSTarget omitted.

// de_VpcDNSTargetList omitted.

/**
 * deserializeAws_json1_0VpcIngressConnection
 */
const de_VpcIngressConnection = (output: any, context: __SerdeContext): VpcIngressConnection => {
  return take(output, {
    AccountId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DomainName: __expectString,
    IngressVpcConfiguration: _json,
    ServiceArn: __expectString,
    Status: __expectString,
    VpcIngressConnectionArn: __expectString,
    VpcIngressConnectionName: __expectString,
  }) as any;
};

// de_VpcIngressConnectionSummary omitted.

// de_VpcIngressConnectionSummaryList omitted.

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
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": `AppRunner.${operation}`,
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
