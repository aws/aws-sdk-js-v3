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
  throwDefaultError,
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
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  UpdateVpcIngressConnectionCommandInput,
  UpdateVpcIngressConnectionCommandOutput,
} from "../commands/UpdateVpcIngressConnectionCommand";
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
  CreateVpcIngressConnectionRequest,
  CreateVpcIngressConnectionResponse,
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
  DeleteVpcIngressConnectionRequest,
  DeleteVpcIngressConnectionResponse,
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
  DescribeVpcIngressConnectionRequest,
  DescribeVpcIngressConnectionResponse,
  DisassociateCustomDomainRequest,
  DisassociateCustomDomainResponse,
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
  ListObservabilityConfigurationsResponse,
  ListOperationsRequest,
  ListOperationsResponse,
  ListServicesRequest,
  ListServicesResponse,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListVpcConnectorsRequest,
  ListVpcConnectorsResponse,
  ListVpcIngressConnectionsFilter,
  ListVpcIngressConnectionsRequest,
  ListVpcIngressConnectionsResponse,
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
  UpdateVpcIngressConnectionRequest,
  UpdateVpcIngressConnectionResponse,
  VpcConnector,
  VpcDNSTarget,
  VpcIngressConnection,
  VpcIngressConnectionSummary,
} from "../models/models_0";

/**
 * serializeAws_json1_0AssociateCustomDomainCommand
 */
export const se_AssociateCustomDomainCommand = async (
  input: AssociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.AssociateCustomDomain",
  };
  let body: any;
  body = JSON.stringify(se_AssociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateAutoScalingConfigurationCommand
 */
export const se_CreateAutoScalingConfigurationCommand = async (
  input: CreateAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_CreateAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateConnection",
  };
  let body: any;
  body = JSON.stringify(se_CreateConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateObservabilityConfigurationCommand
 */
export const se_CreateObservabilityConfigurationCommand = async (
  input: CreateObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateObservabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_CreateObservabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceCommand
 */
export const se_CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateService",
  };
  let body: any;
  body = JSON.stringify(se_CreateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVpcConnectorCommand
 */
export const se_CreateVpcConnectorCommand = async (
  input: CreateVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateVpcConnector",
  };
  let body: any;
  body = JSON.stringify(se_CreateVpcConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateVpcIngressConnectionCommand
 */
export const se_CreateVpcIngressConnectionCommand = async (
  input: CreateVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.CreateVpcIngressConnection",
  };
  let body: any;
  body = JSON.stringify(se_CreateVpcIngressConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteAutoScalingConfigurationCommand
 */
export const se_DeleteAutoScalingConfigurationCommand = async (
  input: DeleteAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteConnection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteObservabilityConfigurationCommand
 */
export const se_DeleteObservabilityConfigurationCommand = async (
  input: DeleteObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteObservabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DeleteObservabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceCommand
 */
export const se_DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteService",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVpcConnectorCommand
 */
export const se_DeleteVpcConnectorCommand = async (
  input: DeleteVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteVpcConnector",
  };
  let body: any;
  body = JSON.stringify(se_DeleteVpcConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteVpcIngressConnectionCommand
 */
export const se_DeleteVpcIngressConnectionCommand = async (
  input: DeleteVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DeleteVpcIngressConnection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteVpcIngressConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeAutoScalingConfigurationCommand
 */
export const se_DescribeAutoScalingConfigurationCommand = async (
  input: DescribeAutoScalingConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeAutoScalingConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DescribeAutoScalingConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeCustomDomainsCommand
 */
export const se_DescribeCustomDomainsCommand = async (
  input: DescribeCustomDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeCustomDomains",
  };
  let body: any;
  body = JSON.stringify(se_DescribeCustomDomainsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeObservabilityConfigurationCommand
 */
export const se_DescribeObservabilityConfigurationCommand = async (
  input: DescribeObservabilityConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeObservabilityConfiguration",
  };
  let body: any;
  body = JSON.stringify(se_DescribeObservabilityConfigurationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeServiceCommand
 */
export const se_DescribeServiceCommand = async (
  input: DescribeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeService",
  };
  let body: any;
  body = JSON.stringify(se_DescribeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeVpcConnectorCommand
 */
export const se_DescribeVpcConnectorCommand = async (
  input: DescribeVpcConnectorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeVpcConnector",
  };
  let body: any;
  body = JSON.stringify(se_DescribeVpcConnectorRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DescribeVpcIngressConnectionCommand
 */
export const se_DescribeVpcIngressConnectionCommand = async (
  input: DescribeVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DescribeVpcIngressConnection",
  };
  let body: any;
  body = JSON.stringify(se_DescribeVpcIngressConnectionRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DisassociateCustomDomainCommand
 */
export const se_DisassociateCustomDomainCommand = async (
  input: DisassociateCustomDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.DisassociateCustomDomain",
  };
  let body: any;
  body = JSON.stringify(se_DisassociateCustomDomainRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListAutoScalingConfigurationsCommand
 */
export const se_ListAutoScalingConfigurationsCommand = async (
  input: ListAutoScalingConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListAutoScalingConfigurations",
  };
  let body: any;
  body = JSON.stringify(se_ListAutoScalingConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListConnectionsCommand
 */
export const se_ListConnectionsCommand = async (
  input: ListConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListConnections",
  };
  let body: any;
  body = JSON.stringify(se_ListConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListObservabilityConfigurationsCommand
 */
export const se_ListObservabilityConfigurationsCommand = async (
  input: ListObservabilityConfigurationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListObservabilityConfigurations",
  };
  let body: any;
  body = JSON.stringify(se_ListObservabilityConfigurationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListOperationsCommand
 */
export const se_ListOperationsCommand = async (
  input: ListOperationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListOperations",
  };
  let body: any;
  body = JSON.stringify(se_ListOperationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServicesCommand
 */
export const se_ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListServices",
  };
  let body: any;
  body = JSON.stringify(se_ListServicesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVpcConnectorsCommand
 */
export const se_ListVpcConnectorsCommand = async (
  input: ListVpcConnectorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListVpcConnectors",
  };
  let body: any;
  body = JSON.stringify(se_ListVpcConnectorsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListVpcIngressConnectionsCommand
 */
export const se_ListVpcIngressConnectionsCommand = async (
  input: ListVpcIngressConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ListVpcIngressConnections",
  };
  let body: any;
  body = JSON.stringify(se_ListVpcIngressConnectionsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0PauseServiceCommand
 */
export const se_PauseServiceCommand = async (
  input: PauseServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.PauseService",
  };
  let body: any;
  body = JSON.stringify(se_PauseServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ResumeServiceCommand
 */
export const se_ResumeServiceCommand = async (
  input: ResumeServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.ResumeService",
  };
  let body: any;
  body = JSON.stringify(se_ResumeServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0StartDeploymentCommand
 */
export const se_StartDeploymentCommand = async (
  input: StartDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.StartDeployment",
  };
  let body: any;
  body = JSON.stringify(se_StartDeploymentRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceCommand
 */
export const se_UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UpdateService",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateVpcIngressConnectionCommand
 */
export const se_UpdateVpcIngressConnectionCommand = async (
  input: UpdateVpcIngressConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AppRunner.UpdateVpcIngressConnection",
  };
  let body: any;
  body = JSON.stringify(se_UpdateVpcIngressConnectionRequest(input, context));
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
  contents = de_AssociateCustomDomainResponse(data, context);
  const response: AssociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeCustomDomainsResponse(data, context);
  const response: DescribeCustomDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateCustomDomainResponse(data, context);
  const response: DisassociateCustomDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListObservabilityConfigurationsResponse(data, context);
  const response: ListObservabilityConfigurationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListVpcIngressConnectionsResponse(data, context);
  const response: ListVpcIngressConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_StartDeploymentResponse(data, context);
  const response: StartDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_InternalServiceErrorException(body, context);
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
  const deserialized: any = de_InvalidRequestException(body, context);
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
  const deserialized: any = de_InvalidStateException(body, context);
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
  const deserialized: any = de_ResourceNotFoundException(body, context);
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
  const deserialized: any = de_ServiceQuotaExceededException(body, context);
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AssociateCustomDomainRequest
 */
const se_AssociateCustomDomainRequest = (input: AssociateCustomDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EnableWWWSubdomain != null && { EnableWWWSubdomain: input.EnableWWWSubdomain }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0AuthenticationConfiguration
 */
const se_AuthenticationConfiguration = (input: AuthenticationConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AccessRoleArn != null && { AccessRoleArn: input.AccessRoleArn }),
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
  };
};

/**
 * serializeAws_json1_0CodeConfiguration
 */
const se_CodeConfiguration = (input: CodeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CodeConfigurationValues != null && {
      CodeConfigurationValues: se_CodeConfigurationValues(input.CodeConfigurationValues, context),
    }),
    ...(input.ConfigurationSource != null && { ConfigurationSource: input.ConfigurationSource }),
  };
};

/**
 * serializeAws_json1_0CodeConfigurationValues
 */
const se_CodeConfigurationValues = (input: CodeConfigurationValues, context: __SerdeContext): any => {
  return {
    ...(input.BuildCommand != null && { BuildCommand: input.BuildCommand }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.Runtime != null && { Runtime: input.Runtime }),
    ...(input.RuntimeEnvironmentSecrets != null && {
      RuntimeEnvironmentSecrets: se_RuntimeEnvironmentSecrets(input.RuntimeEnvironmentSecrets, context),
    }),
    ...(input.RuntimeEnvironmentVariables != null && {
      RuntimeEnvironmentVariables: se_RuntimeEnvironmentVariables(input.RuntimeEnvironmentVariables, context),
    }),
    ...(input.StartCommand != null && { StartCommand: input.StartCommand }),
  };
};

/**
 * serializeAws_json1_0CodeRepository
 */
const se_CodeRepository = (input: CodeRepository, context: __SerdeContext): any => {
  return {
    ...(input.CodeConfiguration != null && {
      CodeConfiguration: se_CodeConfiguration(input.CodeConfiguration, context),
    }),
    ...(input.RepositoryUrl != null && { RepositoryUrl: input.RepositoryUrl }),
    ...(input.SourceCodeVersion != null && {
      SourceCodeVersion: se_SourceCodeVersion(input.SourceCodeVersion, context),
    }),
  };
};

/**
 * serializeAws_json1_0CreateAutoScalingConfigurationRequest
 */
const se_CreateAutoScalingConfigurationRequest = (
  input: CreateAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationName != null && {
      AutoScalingConfigurationName: input.AutoScalingConfigurationName,
    }),
    ...(input.MaxConcurrency != null && { MaxConcurrency: input.MaxConcurrency }),
    ...(input.MaxSize != null && { MaxSize: input.MaxSize }),
    ...(input.MinSize != null && { MinSize: input.MinSize }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateConnectionRequest
 */
const se_CreateConnectionRequest = (input: CreateConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.ProviderType != null && { ProviderType: input.ProviderType }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateObservabilityConfigurationRequest
 */
const se_CreateObservabilityConfigurationRequest = (
  input: CreateObservabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationName != null && {
      ObservabilityConfigurationName: input.ObservabilityConfigurationName,
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.TraceConfiguration != null && {
      TraceConfiguration: se_TraceConfiguration(input.TraceConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0CreateServiceRequest
 */
const se_CreateServiceRequest = (input: CreateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingConfigurationArn != null && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
    ...(input.EncryptionConfiguration != null && {
      EncryptionConfiguration: se_EncryptionConfiguration(input.EncryptionConfiguration, context),
    }),
    ...(input.HealthCheckConfiguration != null && {
      HealthCheckConfiguration: se_HealthCheckConfiguration(input.HealthCheckConfiguration, context),
    }),
    ...(input.InstanceConfiguration != null && {
      InstanceConfiguration: se_InstanceConfiguration(input.InstanceConfiguration, context),
    }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: se_NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.ObservabilityConfiguration != null && {
      ObservabilityConfiguration: se_ServiceObservabilityConfiguration(input.ObservabilityConfiguration, context),
    }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: se_SourceConfiguration(input.SourceConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateVpcConnectorRequest
 */
const se_CreateVpcConnectorRequest = (input: CreateVpcConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.SecurityGroups != null && { SecurityGroups: se_StringList(input.SecurityGroups, context) }),
    ...(input.Subnets != null && { Subnets: se_StringList(input.Subnets, context) }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcConnectorName != null && { VpcConnectorName: input.VpcConnectorName }),
  };
};

/**
 * serializeAws_json1_0CreateVpcIngressConnectionRequest
 */
const se_CreateVpcIngressConnectionRequest = (
  input: CreateVpcIngressConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IngressVpcConfiguration != null && {
      IngressVpcConfiguration: se_IngressVpcConfiguration(input.IngressVpcConfiguration, context),
    }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
    ...(input.VpcIngressConnectionName != null && { VpcIngressConnectionName: input.VpcIngressConnectionName }),
  };
};

/**
 * serializeAws_json1_0DeleteAutoScalingConfigurationRequest
 */
const se_DeleteAutoScalingConfigurationRequest = (
  input: DeleteAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationArn != null && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
  };
};

/**
 * serializeAws_json1_0DeleteConnectionRequest
 */
const se_DeleteConnectionRequest = (input: DeleteConnectionRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionArn != null && { ConnectionArn: input.ConnectionArn }),
  };
};

/**
 * serializeAws_json1_0DeleteObservabilityConfigurationRequest
 */
const se_DeleteObservabilityConfigurationRequest = (
  input: DeleteObservabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationArn != null && {
      ObservabilityConfigurationArn: input.ObservabilityConfigurationArn,
    }),
  };
};

/**
 * serializeAws_json1_0DeleteServiceRequest
 */
const se_DeleteServiceRequest = (input: DeleteServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0DeleteVpcConnectorRequest
 */
const se_DeleteVpcConnectorRequest = (input: DeleteVpcConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.VpcConnectorArn != null && { VpcConnectorArn: input.VpcConnectorArn }),
  };
};

/**
 * serializeAws_json1_0DeleteVpcIngressConnectionRequest
 */
const se_DeleteVpcIngressConnectionRequest = (
  input: DeleteVpcIngressConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VpcIngressConnectionArn != null && { VpcIngressConnectionArn: input.VpcIngressConnectionArn }),
  };
};

/**
 * serializeAws_json1_0DescribeAutoScalingConfigurationRequest
 */
const se_DescribeAutoScalingConfigurationRequest = (
  input: DescribeAutoScalingConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationArn != null && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
  };
};

/**
 * serializeAws_json1_0DescribeCustomDomainsRequest
 */
const se_DescribeCustomDomainsRequest = (input: DescribeCustomDomainsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0DescribeObservabilityConfigurationRequest
 */
const se_DescribeObservabilityConfigurationRequest = (
  input: DescribeObservabilityConfigurationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationArn != null && {
      ObservabilityConfigurationArn: input.ObservabilityConfigurationArn,
    }),
  };
};

/**
 * serializeAws_json1_0DescribeServiceRequest
 */
const se_DescribeServiceRequest = (input: DescribeServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0DescribeVpcConnectorRequest
 */
const se_DescribeVpcConnectorRequest = (input: DescribeVpcConnectorRequest, context: __SerdeContext): any => {
  return {
    ...(input.VpcConnectorArn != null && { VpcConnectorArn: input.VpcConnectorArn }),
  };
};

/**
 * serializeAws_json1_0DescribeVpcIngressConnectionRequest
 */
const se_DescribeVpcIngressConnectionRequest = (
  input: DescribeVpcIngressConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.VpcIngressConnectionArn != null && { VpcIngressConnectionArn: input.VpcIngressConnectionArn }),
  };
};

/**
 * serializeAws_json1_0DisassociateCustomDomainRequest
 */
const se_DisassociateCustomDomainRequest = (input: DisassociateCustomDomainRequest, context: __SerdeContext): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0EgressConfiguration
 */
const se_EgressConfiguration = (input: EgressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EgressType != null && { EgressType: input.EgressType }),
    ...(input.VpcConnectorArn != null && { VpcConnectorArn: input.VpcConnectorArn }),
  };
};

/**
 * serializeAws_json1_0EncryptionConfiguration
 */
const se_EncryptionConfiguration = (input: EncryptionConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.KmsKey != null && { KmsKey: input.KmsKey }),
  };
};

/**
 * serializeAws_json1_0HealthCheckConfiguration
 */
const se_HealthCheckConfiguration = (input: HealthCheckConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.HealthyThreshold != null && { HealthyThreshold: input.HealthyThreshold }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.UnhealthyThreshold != null && { UnhealthyThreshold: input.UnhealthyThreshold }),
  };
};

/**
 * serializeAws_json1_0ImageConfiguration
 */
const se_ImageConfiguration = (input: ImageConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Port != null && { Port: input.Port }),
    ...(input.RuntimeEnvironmentSecrets != null && {
      RuntimeEnvironmentSecrets: se_RuntimeEnvironmentSecrets(input.RuntimeEnvironmentSecrets, context),
    }),
    ...(input.RuntimeEnvironmentVariables != null && {
      RuntimeEnvironmentVariables: se_RuntimeEnvironmentVariables(input.RuntimeEnvironmentVariables, context),
    }),
    ...(input.StartCommand != null && { StartCommand: input.StartCommand }),
  };
};

/**
 * serializeAws_json1_0ImageRepository
 */
const se_ImageRepository = (input: ImageRepository, context: __SerdeContext): any => {
  return {
    ...(input.ImageConfiguration != null && {
      ImageConfiguration: se_ImageConfiguration(input.ImageConfiguration, context),
    }),
    ...(input.ImageIdentifier != null && { ImageIdentifier: input.ImageIdentifier }),
    ...(input.ImageRepositoryType != null && { ImageRepositoryType: input.ImageRepositoryType }),
  };
};

/**
 * serializeAws_json1_0IngressConfiguration
 */
const se_IngressConfiguration = (input: IngressConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.IsPubliclyAccessible != null && { IsPubliclyAccessible: input.IsPubliclyAccessible }),
  };
};

/**
 * serializeAws_json1_0IngressVpcConfiguration
 */
const se_IngressVpcConfiguration = (input: IngressVpcConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

/**
 * serializeAws_json1_0InstanceConfiguration
 */
const se_InstanceConfiguration = (input: InstanceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.InstanceRoleArn != null && { InstanceRoleArn: input.InstanceRoleArn }),
    ...(input.Memory != null && { Memory: input.Memory }),
  };
};

/**
 * serializeAws_json1_0ListAutoScalingConfigurationsRequest
 */
const se_ListAutoScalingConfigurationsRequest = (
  input: ListAutoScalingConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoScalingConfigurationName != null && {
      AutoScalingConfigurationName: input.AutoScalingConfigurationName,
    }),
    ...(input.LatestOnly != null && { LatestOnly: input.LatestOnly }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListConnectionsRequest
 */
const se_ListConnectionsRequest = (input: ListConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.ConnectionName != null && { ConnectionName: input.ConnectionName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListObservabilityConfigurationsRequest
 */
const se_ListObservabilityConfigurationsRequest = (
  input: ListObservabilityConfigurationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.LatestOnly != null && { LatestOnly: input.LatestOnly }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ObservabilityConfigurationName != null && {
      ObservabilityConfigurationName: input.ObservabilityConfigurationName,
    }),
  };
};

/**
 * serializeAws_json1_0ListOperationsRequest
 */
const se_ListOperationsRequest = (input: ListOperationsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0ListServicesRequest
 */
const se_ListServicesRequest = (input: ListServicesRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_json1_0ListVpcConnectorsRequest
 */
const se_ListVpcConnectorsRequest = (input: ListVpcConnectorsRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0ListVpcIngressConnectionsFilter
 */
const se_ListVpcIngressConnectionsFilter = (input: ListVpcIngressConnectionsFilter, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
    ...(input.VpcEndpointId != null && { VpcEndpointId: input.VpcEndpointId }),
  };
};

/**
 * serializeAws_json1_0ListVpcIngressConnectionsRequest
 */
const se_ListVpcIngressConnectionsRequest = (input: ListVpcIngressConnectionsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filter != null && { Filter: se_ListVpcIngressConnectionsFilter(input.Filter, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_0NetworkConfiguration
 */
const se_NetworkConfiguration = (input: NetworkConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.EgressConfiguration != null && {
      EgressConfiguration: se_EgressConfiguration(input.EgressConfiguration, context),
    }),
    ...(input.IngressConfiguration != null && {
      IngressConfiguration: se_IngressConfiguration(input.IngressConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0PauseServiceRequest
 */
const se_PauseServiceRequest = (input: PauseServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0ResumeServiceRequest
 */
const se_ResumeServiceRequest = (input: ResumeServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0RuntimeEnvironmentSecrets
 */
const se_RuntimeEnvironmentSecrets = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0RuntimeEnvironmentVariables
 */
const se_RuntimeEnvironmentVariables = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_json1_0ServiceObservabilityConfiguration
 */
const se_ServiceObservabilityConfiguration = (
  input: ServiceObservabilityConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ObservabilityConfigurationArn != null && {
      ObservabilityConfigurationArn: input.ObservabilityConfigurationArn,
    }),
    ...(input.ObservabilityEnabled != null && { ObservabilityEnabled: input.ObservabilityEnabled }),
  };
};

/**
 * serializeAws_json1_0SourceCodeVersion
 */
const se_SourceCodeVersion = (input: SourceCodeVersion, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0SourceConfiguration
 */
const se_SourceConfiguration = (input: SourceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AuthenticationConfiguration != null && {
      AuthenticationConfiguration: se_AuthenticationConfiguration(input.AuthenticationConfiguration, context),
    }),
    ...(input.AutoDeploymentsEnabled != null && { AutoDeploymentsEnabled: input.AutoDeploymentsEnabled }),
    ...(input.CodeRepository != null && { CodeRepository: se_CodeRepository(input.CodeRepository, context) }),
    ...(input.ImageRepository != null && { ImageRepository: se_ImageRepository(input.ImageRepository, context) }),
  };
};

/**
 * serializeAws_json1_0StartDeploymentRequest
 */
const se_StartDeploymentRequest = (input: StartDeploymentRequest, context: __SerdeContext): any => {
  return {
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
  };
};

/**
 * serializeAws_json1_0StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_0TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0TagList
 */
const se_TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_0TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.Tags != null && { Tags: se_TagList(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_0TraceConfiguration
 */
const se_TraceConfiguration = (input: TraceConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Vendor != null && { Vendor: input.Vendor }),
  };
};

/**
 * serializeAws_json1_0UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceRequest
 */
const se_UpdateServiceRequest = (input: UpdateServiceRequest, context: __SerdeContext): any => {
  return {
    ...(input.AutoScalingConfigurationArn != null && {
      AutoScalingConfigurationArn: input.AutoScalingConfigurationArn,
    }),
    ...(input.HealthCheckConfiguration != null && {
      HealthCheckConfiguration: se_HealthCheckConfiguration(input.HealthCheckConfiguration, context),
    }),
    ...(input.InstanceConfiguration != null && {
      InstanceConfiguration: se_InstanceConfiguration(input.InstanceConfiguration, context),
    }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: se_NetworkConfiguration(input.NetworkConfiguration, context),
    }),
    ...(input.ObservabilityConfiguration != null && {
      ObservabilityConfiguration: se_ServiceObservabilityConfiguration(input.ObservabilityConfiguration, context),
    }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
    ...(input.SourceConfiguration != null && {
      SourceConfiguration: se_SourceConfiguration(input.SourceConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_0UpdateVpcIngressConnectionRequest
 */
const se_UpdateVpcIngressConnectionRequest = (
  input: UpdateVpcIngressConnectionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.IngressVpcConfiguration != null && {
      IngressVpcConfiguration: se_IngressVpcConfiguration(input.IngressVpcConfiguration, context),
    }),
    ...(input.VpcIngressConnectionArn != null && { VpcIngressConnectionArn: input.VpcIngressConnectionArn }),
  };
};

/**
 * deserializeAws_json1_0AssociateCustomDomainResponse
 */
const de_AssociateCustomDomainResponse = (output: any, context: __SerdeContext): AssociateCustomDomainResponse => {
  return {
    CustomDomain: output.CustomDomain != null ? de_CustomDomain(output.CustomDomain, context) : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    ServiceArn: __expectString(output.ServiceArn),
    VpcDNSTargets: output.VpcDNSTargets != null ? de_VpcDNSTargetList(output.VpcDNSTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0AuthenticationConfiguration
 */
const de_AuthenticationConfiguration = (output: any, context: __SerdeContext): AuthenticationConfiguration => {
  return {
    AccessRoleArn: __expectString(output.AccessRoleArn),
    ConnectionArn: __expectString(output.ConnectionArn),
  } as any;
};

/**
 * deserializeAws_json1_0AutoScalingConfiguration
 */
const de_AutoScalingConfiguration = (output: any, context: __SerdeContext): AutoScalingConfiguration => {
  return {
    AutoScalingConfigurationArn: __expectString(output.AutoScalingConfigurationArn),
    AutoScalingConfigurationName: __expectString(output.AutoScalingConfigurationName),
    AutoScalingConfigurationRevision: __expectInt32(output.AutoScalingConfigurationRevision),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DeletedAt:
      output.DeletedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt))) : undefined,
    Latest: __expectBoolean(output.Latest),
    MaxConcurrency: __expectInt32(output.MaxConcurrency),
    MaxSize: __expectInt32(output.MaxSize),
    MinSize: __expectInt32(output.MinSize),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0AutoScalingConfigurationSummary
 */
const de_AutoScalingConfigurationSummary = (output: any, context: __SerdeContext): AutoScalingConfigurationSummary => {
  return {
    AutoScalingConfigurationArn: __expectString(output.AutoScalingConfigurationArn),
    AutoScalingConfigurationName: __expectString(output.AutoScalingConfigurationName),
    AutoScalingConfigurationRevision: __expectInt32(output.AutoScalingConfigurationRevision),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_AutoScalingConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CertificateValidationRecord
 */
const de_CertificateValidationRecord = (output: any, context: __SerdeContext): CertificateValidationRecord => {
  return {
    Name: __expectString(output.Name),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0CertificateValidationRecordList
 */
const de_CertificateValidationRecordList = (output: any, context: __SerdeContext): CertificateValidationRecord[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CertificateValidationRecord(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0CodeConfiguration
 */
const de_CodeConfiguration = (output: any, context: __SerdeContext): CodeConfiguration => {
  return {
    CodeConfigurationValues:
      output.CodeConfigurationValues != null
        ? de_CodeConfigurationValues(output.CodeConfigurationValues, context)
        : undefined,
    ConfigurationSource: __expectString(output.ConfigurationSource),
  } as any;
};

/**
 * deserializeAws_json1_0CodeConfigurationValues
 */
const de_CodeConfigurationValues = (output: any, context: __SerdeContext): CodeConfigurationValues => {
  return {
    BuildCommand: __expectString(output.BuildCommand),
    Port: __expectString(output.Port),
    Runtime: __expectString(output.Runtime),
    RuntimeEnvironmentSecrets:
      output.RuntimeEnvironmentSecrets != null
        ? de_RuntimeEnvironmentSecrets(output.RuntimeEnvironmentSecrets, context)
        : undefined,
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables != null
        ? de_RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: __expectString(output.StartCommand),
  } as any;
};

/**
 * deserializeAws_json1_0CodeRepository
 */
const de_CodeRepository = (output: any, context: __SerdeContext): CodeRepository => {
  return {
    CodeConfiguration:
      output.CodeConfiguration != null ? de_CodeConfiguration(output.CodeConfiguration, context) : undefined,
    RepositoryUrl: __expectString(output.RepositoryUrl),
    SourceCodeVersion:
      output.SourceCodeVersion != null ? de_SourceCodeVersion(output.SourceCodeVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0ConnectionSummary
 */
const de_ConnectionSummary = (output: any, context: __SerdeContext): ConnectionSummary => {
  return {
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionName: __expectString(output.ConnectionName),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ProviderType: __expectString(output.ProviderType),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0ConnectionSummaryList
 */
const de_ConnectionSummaryList = (output: any, context: __SerdeContext): ConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
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
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration != null
        ? de_AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateConnectionResponse
 */
const de_CreateConnectionResponse = (output: any, context: __SerdeContext): CreateConnectionResponse => {
  return {
    Connection: output.Connection != null ? de_Connection(output.Connection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateObservabilityConfigurationResponse
 */
const de_CreateObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): CreateObservabilityConfigurationResponse => {
  return {
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != null
        ? de_ObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateServiceResponse
 */
const de_CreateServiceResponse = (output: any, context: __SerdeContext): CreateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateVpcConnectorResponse
 */
const de_CreateVpcConnectorResponse = (output: any, context: __SerdeContext): CreateVpcConnectorResponse => {
  return {
    VpcConnector: output.VpcConnector != null ? de_VpcConnector(output.VpcConnector, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateVpcIngressConnectionResponse
 */
const de_CreateVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): CreateVpcIngressConnectionResponse => {
  return {
    VpcIngressConnection:
      output.VpcIngressConnection != null ? de_VpcIngressConnection(output.VpcIngressConnection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CustomDomain
 */
const de_CustomDomain = (output: any, context: __SerdeContext): CustomDomain => {
  return {
    CertificateValidationRecords:
      output.CertificateValidationRecords != null
        ? de_CertificateValidationRecordList(output.CertificateValidationRecords, context)
        : undefined,
    DomainName: __expectString(output.DomainName),
    EnableWWWSubdomain: __expectBoolean(output.EnableWWWSubdomain),
    Status: __expectString(output.Status),
  } as any;
};

/**
 * deserializeAws_json1_0CustomDomainList
 */
const de_CustomDomainList = (output: any, context: __SerdeContext): CustomDomain[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CustomDomain(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0DeleteAutoScalingConfigurationResponse
 */
const de_DeleteAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration != null
        ? de_AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteConnectionResponse
 */
const de_DeleteConnectionResponse = (output: any, context: __SerdeContext): DeleteConnectionResponse => {
  return {
    Connection: output.Connection != null ? de_Connection(output.Connection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteObservabilityConfigurationResponse
 */
const de_DeleteObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DeleteObservabilityConfigurationResponse => {
  return {
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != null
        ? de_ObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteServiceResponse
 */
const de_DeleteServiceResponse = (output: any, context: __SerdeContext): DeleteServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteVpcConnectorResponse
 */
const de_DeleteVpcConnectorResponse = (output: any, context: __SerdeContext): DeleteVpcConnectorResponse => {
  return {
    VpcConnector: output.VpcConnector != null ? de_VpcConnector(output.VpcConnector, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteVpcIngressConnectionResponse
 */
const de_DeleteVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): DeleteVpcIngressConnectionResponse => {
  return {
    VpcIngressConnection:
      output.VpcIngressConnection != null ? de_VpcIngressConnection(output.VpcIngressConnection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeAutoScalingConfigurationResponse
 */
const de_DescribeAutoScalingConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeAutoScalingConfigurationResponse => {
  return {
    AutoScalingConfiguration:
      output.AutoScalingConfiguration != null
        ? de_AutoScalingConfiguration(output.AutoScalingConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeCustomDomainsResponse
 */
const de_DescribeCustomDomainsResponse = (output: any, context: __SerdeContext): DescribeCustomDomainsResponse => {
  return {
    CustomDomains: output.CustomDomains != null ? de_CustomDomainList(output.CustomDomains, context) : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    NextToken: __expectString(output.NextToken),
    ServiceArn: __expectString(output.ServiceArn),
    VpcDNSTargets: output.VpcDNSTargets != null ? de_VpcDNSTargetList(output.VpcDNSTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeObservabilityConfigurationResponse
 */
const de_DescribeObservabilityConfigurationResponse = (
  output: any,
  context: __SerdeContext
): DescribeObservabilityConfigurationResponse => {
  return {
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != null
        ? de_ObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeServiceResponse
 */
const de_DescribeServiceResponse = (output: any, context: __SerdeContext): DescribeServiceResponse => {
  return {
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeVpcConnectorResponse
 */
const de_DescribeVpcConnectorResponse = (output: any, context: __SerdeContext): DescribeVpcConnectorResponse => {
  return {
    VpcConnector: output.VpcConnector != null ? de_VpcConnector(output.VpcConnector, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DescribeVpcIngressConnectionResponse
 */
const de_DescribeVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): DescribeVpcIngressConnectionResponse => {
  return {
    VpcIngressConnection:
      output.VpcIngressConnection != null ? de_VpcIngressConnection(output.VpcIngressConnection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DisassociateCustomDomainResponse
 */
const de_DisassociateCustomDomainResponse = (
  output: any,
  context: __SerdeContext
): DisassociateCustomDomainResponse => {
  return {
    CustomDomain: output.CustomDomain != null ? de_CustomDomain(output.CustomDomain, context) : undefined,
    DNSTarget: __expectString(output.DNSTarget),
    ServiceArn: __expectString(output.ServiceArn),
    VpcDNSTargets: output.VpcDNSTargets != null ? de_VpcDNSTargetList(output.VpcDNSTargets, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0EgressConfiguration
 */
const de_EgressConfiguration = (output: any, context: __SerdeContext): EgressConfiguration => {
  return {
    EgressType: __expectString(output.EgressType),
    VpcConnectorArn: __expectString(output.VpcConnectorArn),
  } as any;
};

/**
 * deserializeAws_json1_0EncryptionConfiguration
 */
const de_EncryptionConfiguration = (output: any, context: __SerdeContext): EncryptionConfiguration => {
  return {
    KmsKey: __expectString(output.KmsKey),
  } as any;
};

/**
 * deserializeAws_json1_0HealthCheckConfiguration
 */
const de_HealthCheckConfiguration = (output: any, context: __SerdeContext): HealthCheckConfiguration => {
  return {
    HealthyThreshold: __expectInt32(output.HealthyThreshold),
    Interval: __expectInt32(output.Interval),
    Path: __expectString(output.Path),
    Protocol: __expectString(output.Protocol),
    Timeout: __expectInt32(output.Timeout),
    UnhealthyThreshold: __expectInt32(output.UnhealthyThreshold),
  } as any;
};

/**
 * deserializeAws_json1_0ImageConfiguration
 */
const de_ImageConfiguration = (output: any, context: __SerdeContext): ImageConfiguration => {
  return {
    Port: __expectString(output.Port),
    RuntimeEnvironmentSecrets:
      output.RuntimeEnvironmentSecrets != null
        ? de_RuntimeEnvironmentSecrets(output.RuntimeEnvironmentSecrets, context)
        : undefined,
    RuntimeEnvironmentVariables:
      output.RuntimeEnvironmentVariables != null
        ? de_RuntimeEnvironmentVariables(output.RuntimeEnvironmentVariables, context)
        : undefined,
    StartCommand: __expectString(output.StartCommand),
  } as any;
};

/**
 * deserializeAws_json1_0ImageRepository
 */
const de_ImageRepository = (output: any, context: __SerdeContext): ImageRepository => {
  return {
    ImageConfiguration:
      output.ImageConfiguration != null ? de_ImageConfiguration(output.ImageConfiguration, context) : undefined,
    ImageIdentifier: __expectString(output.ImageIdentifier),
    ImageRepositoryType: __expectString(output.ImageRepositoryType),
  } as any;
};

/**
 * deserializeAws_json1_0IngressConfiguration
 */
const de_IngressConfiguration = (output: any, context: __SerdeContext): IngressConfiguration => {
  return {
    IsPubliclyAccessible: __expectBoolean(output.IsPubliclyAccessible),
  } as any;
};

/**
 * deserializeAws_json1_0IngressVpcConfiguration
 */
const de_IngressVpcConfiguration = (output: any, context: __SerdeContext): IngressVpcConfiguration => {
  return {
    VpcEndpointId: __expectString(output.VpcEndpointId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_0InstanceConfiguration
 */
const de_InstanceConfiguration = (output: any, context: __SerdeContext): InstanceConfiguration => {
  return {
    Cpu: __expectString(output.Cpu),
    InstanceRoleArn: __expectString(output.InstanceRoleArn),
    Memory: __expectString(output.Memory),
  } as any;
};

/**
 * deserializeAws_json1_0InternalServiceErrorException
 */
const de_InternalServiceErrorException = (output: any, context: __SerdeContext): InternalServiceErrorException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidRequestException
 */
const de_InvalidRequestException = (output: any, context: __SerdeContext): InvalidRequestException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0InvalidStateException
 */
const de_InvalidStateException = (output: any, context: __SerdeContext): InvalidStateException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ListAutoScalingConfigurationsResponse
 */
const de_ListAutoScalingConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListAutoScalingConfigurationsResponse => {
  return {
    AutoScalingConfigurationSummaryList:
      output.AutoScalingConfigurationSummaryList != null
        ? de_AutoScalingConfigurationSummaryList(output.AutoScalingConfigurationSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListConnectionsResponse
 */
const de_ListConnectionsResponse = (output: any, context: __SerdeContext): ListConnectionsResponse => {
  return {
    ConnectionSummaryList:
      output.ConnectionSummaryList != null
        ? de_ConnectionSummaryList(output.ConnectionSummaryList, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListObservabilityConfigurationsResponse
 */
const de_ListObservabilityConfigurationsResponse = (
  output: any,
  context: __SerdeContext
): ListObservabilityConfigurationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ObservabilityConfigurationSummaryList:
      output.ObservabilityConfigurationSummaryList != null
        ? de_ObservabilityConfigurationSummaryList(output.ObservabilityConfigurationSummaryList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListOperationsResponse
 */
const de_ListOperationsResponse = (output: any, context: __SerdeContext): ListOperationsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    OperationSummaryList:
      output.OperationSummaryList != null ? de_OperationSummaryList(output.OperationSummaryList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServicesResponse
 */
const de_ListServicesResponse = (output: any, context: __SerdeContext): ListServicesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    ServiceSummaryList:
      output.ServiceSummaryList != null ? de_ServiceSummaryList(output.ServiceSummaryList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    Tags: output.Tags != null ? de_TagList(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListVpcConnectorsResponse
 */
const de_ListVpcConnectorsResponse = (output: any, context: __SerdeContext): ListVpcConnectorsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    VpcConnectors: output.VpcConnectors != null ? de_VpcConnectors(output.VpcConnectors, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListVpcIngressConnectionsResponse
 */
const de_ListVpcIngressConnectionsResponse = (
  output: any,
  context: __SerdeContext
): ListVpcIngressConnectionsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    VpcIngressConnectionSummaryList:
      output.VpcIngressConnectionSummaryList != null
        ? de_VpcIngressConnectionSummaryList(output.VpcIngressConnectionSummaryList, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0NetworkConfiguration
 */
const de_NetworkConfiguration = (output: any, context: __SerdeContext): NetworkConfiguration => {
  return {
    EgressConfiguration:
      output.EgressConfiguration != null ? de_EgressConfiguration(output.EgressConfiguration, context) : undefined,
    IngressConfiguration:
      output.IngressConfiguration != null ? de_IngressConfiguration(output.IngressConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ObservabilityConfiguration
 */
const de_ObservabilityConfiguration = (output: any, context: __SerdeContext): ObservabilityConfiguration => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DeletedAt:
      output.DeletedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt))) : undefined,
    Latest: __expectBoolean(output.Latest),
    ObservabilityConfigurationArn: __expectString(output.ObservabilityConfigurationArn),
    ObservabilityConfigurationName: __expectString(output.ObservabilityConfigurationName),
    ObservabilityConfigurationRevision: __expectInt32(output.ObservabilityConfigurationRevision),
    Status: __expectString(output.Status),
    TraceConfiguration:
      output.TraceConfiguration != null ? de_TraceConfiguration(output.TraceConfiguration, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ObservabilityConfigurationSummary
 */
const de_ObservabilityConfigurationSummary = (
  output: any,
  context: __SerdeContext
): ObservabilityConfigurationSummary => {
  return {
    ObservabilityConfigurationArn: __expectString(output.ObservabilityConfigurationArn),
    ObservabilityConfigurationName: __expectString(output.ObservabilityConfigurationName),
    ObservabilityConfigurationRevision: __expectInt32(output.ObservabilityConfigurationRevision),
  } as any;
};

/**
 * deserializeAws_json1_0ObservabilityConfigurationSummaryList
 */
const de_ObservabilityConfigurationSummaryList = (
  output: any,
  context: __SerdeContext
): ObservabilityConfigurationSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ObservabilityConfigurationSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0OperationSummary
 */
const de_OperationSummary = (output: any, context: __SerdeContext): OperationSummary => {
  return {
    EndedAt:
      output.EndedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndedAt))) : undefined,
    Id: __expectString(output.Id),
    StartedAt:
      output.StartedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartedAt))) : undefined,
    Status: __expectString(output.Status),
    TargetArn: __expectString(output.TargetArn),
    Type: __expectString(output.Type),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0OperationSummaryList
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
 * deserializeAws_json1_0PauseServiceResponse
 */
const de_PauseServiceResponse = (output: any, context: __SerdeContext): PauseServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ResumeServiceResponse
 */
const de_ResumeServiceResponse = (output: any, context: __SerdeContext): ResumeServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0RuntimeEnvironmentSecrets
 */
const de_RuntimeEnvironmentSecrets = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0RuntimeEnvironmentVariables
 */
const de_RuntimeEnvironmentVariables = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_json1_0Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    AutoScalingConfigurationSummary:
      output.AutoScalingConfigurationSummary != null
        ? de_AutoScalingConfigurationSummary(output.AutoScalingConfigurationSummary, context)
        : undefined,
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DeletedAt:
      output.DeletedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt))) : undefined,
    EncryptionConfiguration:
      output.EncryptionConfiguration != null
        ? de_EncryptionConfiguration(output.EncryptionConfiguration, context)
        : undefined,
    HealthCheckConfiguration:
      output.HealthCheckConfiguration != null
        ? de_HealthCheckConfiguration(output.HealthCheckConfiguration, context)
        : undefined,
    InstanceConfiguration:
      output.InstanceConfiguration != null
        ? de_InstanceConfiguration(output.InstanceConfiguration, context)
        : undefined,
    NetworkConfiguration:
      output.NetworkConfiguration != null ? de_NetworkConfiguration(output.NetworkConfiguration, context) : undefined,
    ObservabilityConfiguration:
      output.ObservabilityConfiguration != null
        ? de_ServiceObservabilityConfiguration(output.ObservabilityConfiguration, context)
        : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceUrl: __expectString(output.ServiceUrl),
    SourceConfiguration:
      output.SourceConfiguration != null ? de_SourceConfiguration(output.SourceConfiguration, context) : undefined,
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ServiceObservabilityConfiguration
 */
const de_ServiceObservabilityConfiguration = (
  output: any,
  context: __SerdeContext
): ServiceObservabilityConfiguration => {
  return {
    ObservabilityConfigurationArn: __expectString(output.ObservabilityConfigurationArn),
    ObservabilityEnabled: __expectBoolean(output.ObservabilityEnabled),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceUrl: __expectString(output.ServiceUrl),
    Status: __expectString(output.Status),
    UpdatedAt:
      output.UpdatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.UpdatedAt))) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ServiceSummaryList
 */
const de_ServiceSummaryList = (output: any, context: __SerdeContext): ServiceSummary[] => {
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
 * deserializeAws_json1_0SourceCodeVersion
 */
const de_SourceCodeVersion = (output: any, context: __SerdeContext): SourceCodeVersion => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0SourceConfiguration
 */
const de_SourceConfiguration = (output: any, context: __SerdeContext): SourceConfiguration => {
  return {
    AuthenticationConfiguration:
      output.AuthenticationConfiguration != null
        ? de_AuthenticationConfiguration(output.AuthenticationConfiguration, context)
        : undefined,
    AutoDeploymentsEnabled: __expectBoolean(output.AutoDeploymentsEnabled),
    CodeRepository: output.CodeRepository != null ? de_CodeRepository(output.CodeRepository, context) : undefined,
    ImageRepository: output.ImageRepository != null ? de_ImageRepository(output.ImageRepository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0StartDeploymentResponse
 */
const de_StartDeploymentResponse = (output: any, context: __SerdeContext): StartDeploymentResponse => {
  return {
    OperationId: __expectString(output.OperationId),
  } as any;
};

/**
 * deserializeAws_json1_0StringList
 */
const de_StringList = (output: any, context: __SerdeContext): string[] => {
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

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_0TagList
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
 * deserializeAws_json1_0TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0TraceConfiguration
 */
const de_TraceConfiguration = (output: any, context: __SerdeContext): TraceConfiguration => {
  return {
    Vendor: __expectString(output.Vendor),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateServiceResponse
 */
const de_UpdateServiceResponse = (output: any, context: __SerdeContext): UpdateServiceResponse => {
  return {
    OperationId: __expectString(output.OperationId),
    Service: output.Service != null ? de_Service(output.Service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateVpcIngressConnectionResponse
 */
const de_UpdateVpcIngressConnectionResponse = (
  output: any,
  context: __SerdeContext
): UpdateVpcIngressConnectionResponse => {
  return {
    VpcIngressConnection:
      output.VpcIngressConnection != null ? de_VpcIngressConnection(output.VpcIngressConnection, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0VpcConnector
 */
const de_VpcConnector = (output: any, context: __SerdeContext): VpcConnector => {
  return {
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DeletedAt:
      output.DeletedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt))) : undefined,
    SecurityGroups: output.SecurityGroups != null ? de_StringList(output.SecurityGroups, context) : undefined,
    Status: __expectString(output.Status),
    Subnets: output.Subnets != null ? de_StringList(output.Subnets, context) : undefined,
    VpcConnectorArn: __expectString(output.VpcConnectorArn),
    VpcConnectorName: __expectString(output.VpcConnectorName),
    VpcConnectorRevision: __expectInt32(output.VpcConnectorRevision),
  } as any;
};

/**
 * deserializeAws_json1_0VpcConnectors
 */
const de_VpcConnectors = (output: any, context: __SerdeContext): VpcConnector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcConnector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VpcDNSTarget
 */
const de_VpcDNSTarget = (output: any, context: __SerdeContext): VpcDNSTarget => {
  return {
    DomainName: __expectString(output.DomainName),
    VpcId: __expectString(output.VpcId),
    VpcIngressConnectionArn: __expectString(output.VpcIngressConnectionArn),
  } as any;
};

/**
 * deserializeAws_json1_0VpcDNSTargetList
 */
const de_VpcDNSTargetList = (output: any, context: __SerdeContext): VpcDNSTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcDNSTarget(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0VpcIngressConnection
 */
const de_VpcIngressConnection = (output: any, context: __SerdeContext): VpcIngressConnection => {
  return {
    AccountId: __expectString(output.AccountId),
    CreatedAt:
      output.CreatedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreatedAt))) : undefined,
    DeletedAt:
      output.DeletedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletedAt))) : undefined,
    DomainName: __expectString(output.DomainName),
    IngressVpcConfiguration:
      output.IngressVpcConfiguration != null
        ? de_IngressVpcConfiguration(output.IngressVpcConfiguration, context)
        : undefined,
    ServiceArn: __expectString(output.ServiceArn),
    Status: __expectString(output.Status),
    VpcIngressConnectionArn: __expectString(output.VpcIngressConnectionArn),
    VpcIngressConnectionName: __expectString(output.VpcIngressConnectionName),
  } as any;
};

/**
 * deserializeAws_json1_0VpcIngressConnectionSummary
 */
const de_VpcIngressConnectionSummary = (output: any, context: __SerdeContext): VpcIngressConnectionSummary => {
  return {
    ServiceArn: __expectString(output.ServiceArn),
    VpcIngressConnectionArn: __expectString(output.VpcIngressConnectionArn),
  } as any;
};

/**
 * deserializeAws_json1_0VpcIngressConnectionSummaryList
 */
const de_VpcIngressConnectionSummaryList = (output: any, context: __SerdeContext): VpcIngressConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_VpcIngressConnectionSummary(entry, context);
    });
  return retVal;
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
