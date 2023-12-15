// smithy-typescript generated code
import { awsExpectUnion as __expectUnion } from "@aws-sdk/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
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
  AcceptEnvironmentAccountConnectionCommandInput,
  AcceptEnvironmentAccountConnectionCommandOutput,
} from "../commands/AcceptEnvironmentAccountConnectionCommand";
import {
  CancelComponentDeploymentCommandInput,
  CancelComponentDeploymentCommandOutput,
} from "../commands/CancelComponentDeploymentCommand";
import {
  CancelEnvironmentDeploymentCommandInput,
  CancelEnvironmentDeploymentCommandOutput,
} from "../commands/CancelEnvironmentDeploymentCommand";
import {
  CancelServiceInstanceDeploymentCommandInput,
  CancelServiceInstanceDeploymentCommandOutput,
} from "../commands/CancelServiceInstanceDeploymentCommand";
import {
  CancelServicePipelineDeploymentCommandInput,
  CancelServicePipelineDeploymentCommandOutput,
} from "../commands/CancelServicePipelineDeploymentCommand";
import { CreateComponentCommandInput, CreateComponentCommandOutput } from "../commands/CreateComponentCommand";
import {
  CreateEnvironmentAccountConnectionCommandInput,
  CreateEnvironmentAccountConnectionCommandOutput,
} from "../commands/CreateEnvironmentAccountConnectionCommand";
import { CreateEnvironmentCommandInput, CreateEnvironmentCommandOutput } from "../commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentTemplateCommandInput,
  CreateEnvironmentTemplateCommandOutput,
} from "../commands/CreateEnvironmentTemplateCommand";
import {
  CreateEnvironmentTemplateVersionCommandInput,
  CreateEnvironmentTemplateVersionCommandOutput,
} from "../commands/CreateEnvironmentTemplateVersionCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "../commands/CreateServiceCommand";
import {
  CreateServiceInstanceCommandInput,
  CreateServiceInstanceCommandOutput,
} from "../commands/CreateServiceInstanceCommand";
import {
  CreateServiceSyncConfigCommandInput,
  CreateServiceSyncConfigCommandOutput,
} from "../commands/CreateServiceSyncConfigCommand";
import {
  CreateServiceTemplateCommandInput,
  CreateServiceTemplateCommandOutput,
} from "../commands/CreateServiceTemplateCommand";
import {
  CreateServiceTemplateVersionCommandInput,
  CreateServiceTemplateVersionCommandOutput,
} from "../commands/CreateServiceTemplateVersionCommand";
import {
  CreateTemplateSyncConfigCommandInput,
  CreateTemplateSyncConfigCommandOutput,
} from "../commands/CreateTemplateSyncConfigCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import {
  DeleteEnvironmentAccountConnectionCommandInput,
  DeleteEnvironmentAccountConnectionCommandOutput,
} from "../commands/DeleteEnvironmentAccountConnectionCommand";
import { DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput } from "../commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentTemplateCommandInput,
  DeleteEnvironmentTemplateCommandOutput,
} from "../commands/DeleteEnvironmentTemplateCommand";
import {
  DeleteEnvironmentTemplateVersionCommandInput,
  DeleteEnvironmentTemplateVersionCommandOutput,
} from "../commands/DeleteEnvironmentTemplateVersionCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "../commands/DeleteServiceCommand";
import {
  DeleteServiceSyncConfigCommandInput,
  DeleteServiceSyncConfigCommandOutput,
} from "../commands/DeleteServiceSyncConfigCommand";
import {
  DeleteServiceTemplateCommandInput,
  DeleteServiceTemplateCommandOutput,
} from "../commands/DeleteServiceTemplateCommand";
import {
  DeleteServiceTemplateVersionCommandInput,
  DeleteServiceTemplateVersionCommandOutput,
} from "../commands/DeleteServiceTemplateVersionCommand";
import {
  DeleteTemplateSyncConfigCommandInput,
  DeleteTemplateSyncConfigCommandOutput,
} from "../commands/DeleteTemplateSyncConfigCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "../commands/GetAccountSettingsCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetEnvironmentAccountConnectionCommandInput,
  GetEnvironmentAccountConnectionCommandOutput,
} from "../commands/GetEnvironmentAccountConnectionCommand";
import { GetEnvironmentCommandInput, GetEnvironmentCommandOutput } from "../commands/GetEnvironmentCommand";
import {
  GetEnvironmentTemplateCommandInput,
  GetEnvironmentTemplateCommandOutput,
} from "../commands/GetEnvironmentTemplateCommand";
import {
  GetEnvironmentTemplateVersionCommandInput,
  GetEnvironmentTemplateVersionCommandOutput,
} from "../commands/GetEnvironmentTemplateVersionCommand";
import { GetRepositoryCommandInput, GetRepositoryCommandOutput } from "../commands/GetRepositoryCommand";
import {
  GetRepositorySyncStatusCommandInput,
  GetRepositorySyncStatusCommandOutput,
} from "../commands/GetRepositorySyncStatusCommand";
import {
  GetResourcesSummaryCommandInput,
  GetResourcesSummaryCommandOutput,
} from "../commands/GetResourcesSummaryCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "../commands/GetServiceCommand";
import { GetServiceInstanceCommandInput, GetServiceInstanceCommandOutput } from "../commands/GetServiceInstanceCommand";
import {
  GetServiceInstanceSyncStatusCommandInput,
  GetServiceInstanceSyncStatusCommandOutput,
} from "../commands/GetServiceInstanceSyncStatusCommand";
import {
  GetServiceSyncBlockerSummaryCommandInput,
  GetServiceSyncBlockerSummaryCommandOutput,
} from "../commands/GetServiceSyncBlockerSummaryCommand";
import {
  GetServiceSyncConfigCommandInput,
  GetServiceSyncConfigCommandOutput,
} from "../commands/GetServiceSyncConfigCommand";
import { GetServiceTemplateCommandInput, GetServiceTemplateCommandOutput } from "../commands/GetServiceTemplateCommand";
import {
  GetServiceTemplateVersionCommandInput,
  GetServiceTemplateVersionCommandOutput,
} from "../commands/GetServiceTemplateVersionCommand";
import {
  GetTemplateSyncConfigCommandInput,
  GetTemplateSyncConfigCommandOutput,
} from "../commands/GetTemplateSyncConfigCommand";
import {
  GetTemplateSyncStatusCommandInput,
  GetTemplateSyncStatusCommandOutput,
} from "../commands/GetTemplateSyncStatusCommand";
import {
  ListComponentOutputsCommandInput,
  ListComponentOutputsCommandOutput,
} from "../commands/ListComponentOutputsCommand";
import {
  ListComponentProvisionedResourcesCommandInput,
  ListComponentProvisionedResourcesCommandOutput,
} from "../commands/ListComponentProvisionedResourcesCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListEnvironmentAccountConnectionsCommandInput,
  ListEnvironmentAccountConnectionsCommandOutput,
} from "../commands/ListEnvironmentAccountConnectionsCommand";
import {
  ListEnvironmentOutputsCommandInput,
  ListEnvironmentOutputsCommandOutput,
} from "../commands/ListEnvironmentOutputsCommand";
import {
  ListEnvironmentProvisionedResourcesCommandInput,
  ListEnvironmentProvisionedResourcesCommandOutput,
} from "../commands/ListEnvironmentProvisionedResourcesCommand";
import { ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput } from "../commands/ListEnvironmentsCommand";
import {
  ListEnvironmentTemplatesCommandInput,
  ListEnvironmentTemplatesCommandOutput,
} from "../commands/ListEnvironmentTemplatesCommand";
import {
  ListEnvironmentTemplateVersionsCommandInput,
  ListEnvironmentTemplateVersionsCommandOutput,
} from "../commands/ListEnvironmentTemplateVersionsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import {
  ListRepositorySyncDefinitionsCommandInput,
  ListRepositorySyncDefinitionsCommandOutput,
} from "../commands/ListRepositorySyncDefinitionsCommand";
import {
  ListServiceInstanceOutputsCommandInput,
  ListServiceInstanceOutputsCommandOutput,
} from "../commands/ListServiceInstanceOutputsCommand";
import {
  ListServiceInstanceProvisionedResourcesCommandInput,
  ListServiceInstanceProvisionedResourcesCommandOutput,
} from "../commands/ListServiceInstanceProvisionedResourcesCommand";
import {
  ListServiceInstancesCommandInput,
  ListServiceInstancesCommandOutput,
} from "../commands/ListServiceInstancesCommand";
import {
  ListServicePipelineOutputsCommandInput,
  ListServicePipelineOutputsCommandOutput,
} from "../commands/ListServicePipelineOutputsCommand";
import {
  ListServicePipelineProvisionedResourcesCommandInput,
  ListServicePipelineProvisionedResourcesCommandOutput,
} from "../commands/ListServicePipelineProvisionedResourcesCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "../commands/ListServicesCommand";
import {
  ListServiceTemplatesCommandInput,
  ListServiceTemplatesCommandOutput,
} from "../commands/ListServiceTemplatesCommand";
import {
  ListServiceTemplateVersionsCommandInput,
  ListServiceTemplateVersionsCommandOutput,
} from "../commands/ListServiceTemplateVersionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  NotifyResourceDeploymentStatusChangeCommandInput,
  NotifyResourceDeploymentStatusChangeCommandOutput,
} from "../commands/NotifyResourceDeploymentStatusChangeCommand";
import {
  RejectEnvironmentAccountConnectionCommandInput,
  RejectEnvironmentAccountConnectionCommandOutput,
} from "../commands/RejectEnvironmentAccountConnectionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "../commands/UpdateAccountSettingsCommand";
import { UpdateComponentCommandInput, UpdateComponentCommandOutput } from "../commands/UpdateComponentCommand";
import {
  UpdateEnvironmentAccountConnectionCommandInput,
  UpdateEnvironmentAccountConnectionCommandOutput,
} from "../commands/UpdateEnvironmentAccountConnectionCommand";
import { UpdateEnvironmentCommandInput, UpdateEnvironmentCommandOutput } from "../commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentTemplateCommandInput,
  UpdateEnvironmentTemplateCommandOutput,
} from "../commands/UpdateEnvironmentTemplateCommand";
import {
  UpdateEnvironmentTemplateVersionCommandInput,
  UpdateEnvironmentTemplateVersionCommandOutput,
} from "../commands/UpdateEnvironmentTemplateVersionCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "../commands/UpdateServiceCommand";
import {
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
} from "../commands/UpdateServiceInstanceCommand";
import {
  UpdateServicePipelineCommandInput,
  UpdateServicePipelineCommandOutput,
} from "../commands/UpdateServicePipelineCommand";
import {
  UpdateServiceSyncBlockerCommandInput,
  UpdateServiceSyncBlockerCommandOutput,
} from "../commands/UpdateServiceSyncBlockerCommand";
import {
  UpdateServiceSyncConfigCommandInput,
  UpdateServiceSyncConfigCommandOutput,
} from "../commands/UpdateServiceSyncConfigCommand";
import {
  UpdateServiceTemplateCommandInput,
  UpdateServiceTemplateCommandOutput,
} from "../commands/UpdateServiceTemplateCommand";
import {
  UpdateServiceTemplateVersionCommandInput,
  UpdateServiceTemplateVersionCommandOutput,
} from "../commands/UpdateServiceTemplateVersionCommand";
import {
  UpdateTemplateSyncConfigCommandInput,
  UpdateTemplateSyncConfigCommandOutput,
} from "../commands/UpdateTemplateSyncConfigCommand";
import {
  AcceptEnvironmentAccountConnectionInput,
  AcceptEnvironmentAccountConnectionOutput,
  AccessDeniedException,
  CancelComponentDeploymentInput,
  CancelComponentDeploymentOutput,
  CancelEnvironmentDeploymentInput,
  CancelEnvironmentDeploymentOutput,
  CancelServiceInstanceDeploymentInput,
  CancelServiceInstanceDeploymentOutput,
  CancelServicePipelineDeploymentInput,
  CancelServicePipelineDeploymentOutput,
  CompatibleEnvironmentTemplateInput,
  Component,
  ComponentState,
  ComponentSummary,
  ConflictException,
  CreateComponentInput,
  CreateComponentOutput,
  CreateEnvironmentAccountConnectionInput,
  CreateEnvironmentAccountConnectionOutput,
  CreateEnvironmentInput,
  CreateEnvironmentOutput,
  CreateEnvironmentTemplateInput,
  CreateEnvironmentTemplateOutput,
  CreateEnvironmentTemplateVersionInput,
  CreateEnvironmentTemplateVersionOutput,
  CreateRepositoryInput,
  CreateServiceInput,
  CreateServiceInstanceInput,
  CreateServiceInstanceOutput,
  CreateServiceOutput,
  CreateServiceSyncConfigInput,
  CreateServiceTemplateInput,
  CreateServiceTemplateOutput,
  CreateServiceTemplateVersionInput,
  CreateServiceTemplateVersionOutput,
  CreateTemplateSyncConfigInput,
  DeleteComponentInput,
  DeleteComponentOutput,
  DeleteDeploymentInput,
  DeleteDeploymentOutput,
  DeleteEnvironmentAccountConnectionInput,
  DeleteEnvironmentAccountConnectionOutput,
  DeleteEnvironmentInput,
  DeleteEnvironmentOutput,
  DeleteEnvironmentTemplateInput,
  DeleteEnvironmentTemplateOutput,
  DeleteEnvironmentTemplateVersionInput,
  DeleteEnvironmentTemplateVersionOutput,
  DeleteRepositoryInput,
  DeleteServiceInput,
  DeleteServiceOutput,
  DeleteServiceSyncConfigInput,
  DeleteServiceTemplateInput,
  DeleteServiceTemplateOutput,
  DeleteServiceTemplateVersionInput,
  DeleteServiceTemplateVersionOutput,
  DeleteTemplateSyncConfigInput,
  Deployment,
  DeploymentState,
  DeploymentSummary,
  Environment,
  EnvironmentAccountConnection,
  EnvironmentAccountConnectionStatus,
  EnvironmentAccountConnectionSummary,
  EnvironmentState,
  EnvironmentSummary,
  EnvironmentTemplate,
  EnvironmentTemplateFilter,
  EnvironmentTemplateSummary,
  EnvironmentTemplateVersion,
  EnvironmentTemplateVersionSummary,
  GetAccountSettingsInput,
  GetComponentInput,
  GetComponentOutput,
  GetDeploymentInput,
  GetDeploymentOutput,
  GetEnvironmentAccountConnectionInput,
  GetEnvironmentAccountConnectionOutput,
  GetEnvironmentInput,
  GetEnvironmentOutput,
  GetEnvironmentTemplateInput,
  GetEnvironmentTemplateOutput,
  GetEnvironmentTemplateVersionInput,
  GetEnvironmentTemplateVersionOutput,
  GetRepositoryInput,
  GetRepositorySyncStatusInput,
  GetRepositorySyncStatusOutput,
  GetResourcesSummaryInput,
  GetServiceInput,
  GetServiceInstanceInput,
  GetServiceInstanceOutput,
  GetServiceInstanceSyncStatusInput,
  GetServiceInstanceSyncStatusOutput,
  GetServiceOutput,
  GetServiceSyncBlockerSummaryInput,
  GetServiceSyncBlockerSummaryOutput,
  GetServiceSyncConfigInput,
  GetServiceTemplateInput,
  GetServiceTemplateOutput,
  GetServiceTemplateVersionInput,
  GetServiceTemplateVersionOutput,
  GetTemplateSyncConfigInput,
  GetTemplateSyncStatusInput,
  GetTemplateSyncStatusOutput,
  InternalServerException,
  ListComponentOutputsInput,
  ListComponentProvisionedResourcesInput,
  ListComponentsInput,
  ListComponentsOutput,
  ListDeploymentsInput,
  ListDeploymentsOutput,
  ListEnvironmentAccountConnectionsInput,
  ListEnvironmentAccountConnectionsOutput,
  ListEnvironmentOutputsInput,
  ListEnvironmentProvisionedResourcesInput,
  ListEnvironmentsInput,
  ListEnvironmentsOutput,
  ListEnvironmentTemplatesInput,
  ListEnvironmentTemplatesOutput,
  ListEnvironmentTemplateVersionsInput,
  ListEnvironmentTemplateVersionsOutput,
  ListRepositoriesInput,
  ListRepositorySyncDefinitionsInput,
  ListServiceInstanceOutputsInput,
  ListServiceInstanceProvisionedResourcesInput,
  ListServiceInstancesFilter,
  ListServiceInstancesInput,
  ListServiceInstancesOutput,
  ListServicePipelineOutputsInput,
  ListServicePipelineProvisionedResourcesInput,
  ListServicesInput,
  ListServicesOutput,
  ListServiceTemplatesInput,
  ListServiceTemplatesOutput,
  ListServiceTemplateVersionsInput,
  ListServiceTemplateVersionsOutput,
  ListTagsForResourceInput,
  NotifyResourceDeploymentStatusChangeInput,
  Output,
  RejectEnvironmentAccountConnectionInput,
  RejectEnvironmentAccountConnectionOutput,
  RepositoryBranchInput,
  RepositorySyncAttempt,
  RepositorySyncEvent,
  ResourceNotFoundException,
  ResourceSyncAttempt,
  ResourceSyncEvent,
  S3ObjectSource,
  Service,
  ServiceInstance,
  ServiceInstanceState,
  ServiceInstanceSummary,
  ServicePipeline,
  ServicePipelineState,
  ServiceQuotaExceededException,
  ServiceSummary,
  ServiceSyncBlockerSummary,
  ServiceTemplate,
  ServiceTemplateSummary,
  ServiceTemplateSupportedComponentSourceType,
  ServiceTemplateVersion,
  ServiceTemplateVersionSummary,
  SyncBlocker,
  Tag,
  TagResourceInput,
  TemplateVersionSourceInput,
  ThrottlingException,
  UntagResourceInput,
  UpdateAccountSettingsInput,
  UpdateComponentInput,
  UpdateComponentOutput,
  UpdateEnvironmentAccountConnectionInput,
  UpdateEnvironmentAccountConnectionOutput,
  UpdateEnvironmentInput,
  UpdateEnvironmentOutput,
  UpdateEnvironmentTemplateInput,
  UpdateEnvironmentTemplateOutput,
  UpdateEnvironmentTemplateVersionInput,
  UpdateEnvironmentTemplateVersionOutput,
  UpdateServiceInput,
  UpdateServiceInstanceInput,
  UpdateServiceInstanceOutput,
  UpdateServiceOutput,
  UpdateServicePipelineInput,
  UpdateServicePipelineOutput,
  UpdateServiceSyncBlockerInput,
  UpdateServiceSyncBlockerOutput,
  UpdateServiceSyncConfigInput,
  UpdateServiceTemplateInput,
  UpdateServiceTemplateOutput,
  UpdateServiceTemplateVersionInput,
  UpdateServiceTemplateVersionOutput,
  UpdateTemplateSyncConfigInput,
  ValidationException,
} from "../models/models_0";
import { ProtonServiceException as __BaseException } from "../models/ProtonServiceException";

/**
 * serializeAws_json1_0AcceptEnvironmentAccountConnectionCommand
 */
export const se_AcceptEnvironmentAccountConnectionCommand = async (
  input: AcceptEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AcceptEnvironmentAccountConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelComponentDeploymentCommand
 */
export const se_CancelComponentDeploymentCommand = async (
  input: CancelComponentDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelComponentDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelEnvironmentDeploymentCommand
 */
export const se_CancelEnvironmentDeploymentCommand = async (
  input: CancelEnvironmentDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelEnvironmentDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelServiceInstanceDeploymentCommand
 */
export const se_CancelServiceInstanceDeploymentCommand = async (
  input: CancelServiceInstanceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelServiceInstanceDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelServicePipelineDeploymentCommand
 */
export const se_CancelServicePipelineDeploymentCommand = async (
  input: CancelServicePipelineDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelServicePipelineDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateComponentCommand
 */
export const se_CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateComponent");
  let body: any;
  body = JSON.stringify(se_CreateComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentCommand
 */
export const se_CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEnvironment");
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentAccountConnectionCommand
 */
export const se_CreateEnvironmentAccountConnectionCommand = async (
  input: CreateEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEnvironmentAccountConnection");
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentTemplateCommand
 */
export const se_CreateEnvironmentTemplateCommand = async (
  input: CreateEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEnvironmentTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentTemplateVersionCommand
 */
export const se_CreateEnvironmentTemplateVersionCommand = async (
  input: CreateEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateEnvironmentTemplateVersion");
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateRepository");
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
  body = JSON.stringify(se_CreateServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceInstanceCommand
 */
export const se_CreateServiceInstanceCommand = async (
  input: CreateServiceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServiceInstance");
  let body: any;
  body = JSON.stringify(se_CreateServiceInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceSyncConfigCommand
 */
export const se_CreateServiceSyncConfigCommand = async (
  input: CreateServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServiceSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceTemplateCommand
 */
export const se_CreateServiceTemplateCommand = async (
  input: CreateServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServiceTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceTemplateVersionCommand
 */
export const se_CreateServiceTemplateVersionCommand = async (
  input: CreateServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateServiceTemplateVersion");
  let body: any;
  body = JSON.stringify(se_CreateServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateTemplateSyncConfigCommand
 */
export const se_CreateTemplateSyncConfigCommand = async (
  input: CreateTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateTemplateSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteDeploymentCommand
 */
export const se_DeleteDeploymentCommand = async (
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEnvironment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentAccountConnectionCommand
 */
export const se_DeleteEnvironmentAccountConnectionCommand = async (
  input: DeleteEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEnvironmentAccountConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentTemplateCommand
 */
export const se_DeleteEnvironmentTemplateCommand = async (
  input: DeleteEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEnvironmentTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentTemplateVersionCommand
 */
export const se_DeleteEnvironmentTemplateVersionCommand = async (
  input: DeleteEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteEnvironmentTemplateVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteRepository");
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
 * serializeAws_json1_0DeleteServiceSyncConfigCommand
 */
export const se_DeleteServiceSyncConfigCommand = async (
  input: DeleteServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServiceSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceTemplateCommand
 */
export const se_DeleteServiceTemplateCommand = async (
  input: DeleteServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServiceTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceTemplateVersionCommand
 */
export const se_DeleteServiceTemplateVersionCommand = async (
  input: DeleteServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteServiceTemplateVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTemplateSyncConfigCommand
 */
export const se_DeleteTemplateSyncConfigCommand = async (
  input: DeleteTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteTemplateSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetAccountSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetComponent");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetDeployment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnvironment");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentAccountConnectionCommand
 */
export const se_GetEnvironmentAccountConnectionCommand = async (
  input: GetEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnvironmentAccountConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentTemplateCommand
 */
export const se_GetEnvironmentTemplateCommand = async (
  input: GetEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnvironmentTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentTemplateVersionCommand
 */
export const se_GetEnvironmentTemplateVersionCommand = async (
  input: GetEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetEnvironmentTemplateVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRepositoryCommand
 */
export const se_GetRepositoryCommand = async (
  input: GetRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepository");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRepositorySyncStatusCommand
 */
export const se_GetRepositorySyncStatusCommand = async (
  input: GetRepositorySyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetRepositorySyncStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourcesSummaryCommand
 */
export const se_GetResourcesSummaryCommand = async (
  input: GetResourcesSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetResourcesSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceCommand
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
 * serializeAws_json1_0GetServiceInstanceCommand
 */
export const se_GetServiceInstanceCommand = async (
  input: GetServiceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceInstance");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceInstanceSyncStatusCommand
 */
export const se_GetServiceInstanceSyncStatusCommand = async (
  input: GetServiceInstanceSyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceInstanceSyncStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceSyncBlockerSummaryCommand
 */
export const se_GetServiceSyncBlockerSummaryCommand = async (
  input: GetServiceSyncBlockerSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceSyncBlockerSummary");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceSyncConfigCommand
 */
export const se_GetServiceSyncConfigCommand = async (
  input: GetServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceTemplateCommand
 */
export const se_GetServiceTemplateCommand = async (
  input: GetServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceTemplateVersionCommand
 */
export const se_GetServiceTemplateVersionCommand = async (
  input: GetServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetServiceTemplateVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTemplateSyncConfigCommand
 */
export const se_GetTemplateSyncConfigCommand = async (
  input: GetTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTemplateSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTemplateSyncStatusCommand
 */
export const se_GetTemplateSyncStatusCommand = async (
  input: GetTemplateSyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("GetTemplateSyncStatus");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComponentOutputsCommand
 */
export const se_ListComponentOutputsCommand = async (
  input: ListComponentOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComponentOutputs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComponentProvisionedResourcesCommand
 */
export const se_ListComponentProvisionedResourcesCommand = async (
  input: ListComponentProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComponentProvisionedResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListComponents");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListDeployments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentAccountConnectionsCommand
 */
export const se_ListEnvironmentAccountConnectionsCommand = async (
  input: ListEnvironmentAccountConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentAccountConnections");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentOutputsCommand
 */
export const se_ListEnvironmentOutputsCommand = async (
  input: ListEnvironmentOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentOutputs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentProvisionedResourcesCommand
 */
export const se_ListEnvironmentProvisionedResourcesCommand = async (
  input: ListEnvironmentProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentProvisionedResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironments");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentTemplatesCommand
 */
export const se_ListEnvironmentTemplatesCommand = async (
  input: ListEnvironmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentTemplateVersionsCommand
 */
export const se_ListEnvironmentTemplateVersionsCommand = async (
  input: ListEnvironmentTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListEnvironmentTemplateVersions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRepositoriesCommand
 */
export const se_ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRepositories");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRepositorySyncDefinitionsCommand
 */
export const se_ListRepositorySyncDefinitionsCommand = async (
  input: ListRepositorySyncDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListRepositorySyncDefinitions");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceInstanceOutputsCommand
 */
export const se_ListServiceInstanceOutputsCommand = async (
  input: ListServiceInstanceOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceInstanceOutputs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand
 */
export const se_ListServiceInstanceProvisionedResourcesCommand = async (
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceInstanceProvisionedResources");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceInstancesCommand
 */
export const se_ListServiceInstancesCommand = async (
  input: ListServiceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceInstances");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServicePipelineOutputsCommand
 */
export const se_ListServicePipelineOutputsCommand = async (
  input: ListServicePipelineOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServicePipelineOutputs");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServicePipelineProvisionedResourcesCommand
 */
export const se_ListServicePipelineProvisionedResourcesCommand = async (
  input: ListServicePipelineProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServicePipelineProvisionedResources");
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
 * serializeAws_json1_0ListServiceTemplatesCommand
 */
export const se_ListServiceTemplatesCommand = async (
  input: ListServiceTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceTemplates");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceTemplateVersionsCommand
 */
export const se_ListServiceTemplateVersionsCommand = async (
  input: ListServiceTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListServiceTemplateVersions");
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
 * serializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand
 */
export const se_NotifyResourceDeploymentStatusChangeCommand = async (
  input: NotifyResourceDeploymentStatusChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("NotifyResourceDeploymentStatusChange");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RejectEnvironmentAccountConnectionCommand
 */
export const se_RejectEnvironmentAccountConnectionCommand = async (
  input: RejectEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RejectEnvironmentAccountConnection");
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
 * serializeAws_json1_0UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateAccountSettings");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateComponentCommand
 */
export const se_UpdateComponentCommand = async (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateComponent");
  let body: any;
  body = JSON.stringify(se_UpdateComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnvironmentCommand
 */
export const se_UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEnvironment");
  let body: any;
  body = JSON.stringify(se_UpdateEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnvironmentAccountConnectionCommand
 */
export const se_UpdateEnvironmentAccountConnectionCommand = async (
  input: UpdateEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEnvironmentAccountConnection");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnvironmentTemplateCommand
 */
export const se_UpdateEnvironmentTemplateCommand = async (
  input: UpdateEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEnvironmentTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnvironmentTemplateVersionCommand
 */
export const se_UpdateEnvironmentTemplateVersionCommand = async (
  input: UpdateEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateEnvironmentTemplateVersion");
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
  body = JSON.stringify(se_UpdateServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceInstanceCommand
 */
export const se_UpdateServiceInstanceCommand = async (
  input: UpdateServiceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceInstance");
  let body: any;
  body = JSON.stringify(se_UpdateServiceInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServicePipelineCommand
 */
export const se_UpdateServicePipelineCommand = async (
  input: UpdateServicePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServicePipeline");
  let body: any;
  body = JSON.stringify(se_UpdateServicePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceSyncBlockerCommand
 */
export const se_UpdateServiceSyncBlockerCommand = async (
  input: UpdateServiceSyncBlockerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceSyncBlocker");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceSyncConfigCommand
 */
export const se_UpdateServiceSyncConfigCommand = async (
  input: UpdateServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceTemplateCommand
 */
export const se_UpdateServiceTemplateCommand = async (
  input: UpdateServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceTemplate");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceTemplateVersionCommand
 */
export const se_UpdateServiceTemplateVersionCommand = async (
  input: UpdateServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateServiceTemplateVersion");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTemplateSyncConfigCommand
 */
export const se_UpdateTemplateSyncConfigCommand = async (
  input: UpdateTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateTemplateSyncConfig");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommand
 */
export const de_AcceptEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AcceptEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_AcceptEnvironmentAccountConnectionOutput(data, context);
  const response: AcceptEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommandError
 */
const de_AcceptEnvironmentAccountConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEnvironmentAccountConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CancelComponentDeploymentCommand
 */
export const de_CancelComponentDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelComponentDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelComponentDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelComponentDeploymentOutput(data, context);
  const response: CancelComponentDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CancelComponentDeploymentCommandError
 */
const de_CancelComponentDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelComponentDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CancelEnvironmentDeploymentCommand
 */
export const de_CancelEnvironmentDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelEnvironmentDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelEnvironmentDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelEnvironmentDeploymentOutput(data, context);
  const response: CancelEnvironmentDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CancelEnvironmentDeploymentCommandError
 */
const de_CancelEnvironmentDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelEnvironmentDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CancelServiceInstanceDeploymentCommand
 */
export const de_CancelServiceInstanceDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceInstanceDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelServiceInstanceDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelServiceInstanceDeploymentOutput(data, context);
  const response: CancelServiceInstanceDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CancelServiceInstanceDeploymentCommandError
 */
const de_CancelServiceInstanceDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceInstanceDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CancelServicePipelineDeploymentCommand
 */
export const de_CancelServicePipelineDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServicePipelineDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelServicePipelineDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CancelServicePipelineDeploymentOutput(data, context);
  const response: CancelServicePipelineDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CancelServicePipelineDeploymentCommandError
 */
const de_CancelServicePipelineDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServicePipelineDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateComponentCommand
 */
export const de_CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateComponentOutput(data, context);
  const response: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateComponentCommandError
 */
const de_CreateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateEnvironmentCommand
 */
export const de_CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentOutput(data, context);
  const response: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEnvironmentCommandError
 */
const de_CreateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateEnvironmentAccountConnectionCommand
 */
export const de_CreateEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentAccountConnectionOutput(data, context);
  const response: CreateEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEnvironmentAccountConnectionCommandError
 */
const de_CreateEnvironmentAccountConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentAccountConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateEnvironmentTemplateCommand
 */
export const de_CreateEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentTemplateOutput(data, context);
  const response: CreateEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEnvironmentTemplateCommandError
 */
const de_CreateEnvironmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateEnvironmentTemplateVersionCommand
 */
export const de_CreateEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateEnvironmentTemplateVersionOutput(data, context);
  const response: CreateEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateEnvironmentTemplateVersionCommandError
 */
const de_CreateEnvironmentTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateRepositoryCommand
 */
export const de_CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateRepositoryCommandError
 */
const de_CreateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = de_CreateServiceOutput(data, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateServiceInstanceCommand
 */
export const de_CreateServiceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceInstanceOutput(data, context);
  const response: CreateServiceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateServiceInstanceCommandError
 */
const de_CreateServiceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateServiceSyncConfigCommand
 */
export const de_CreateServiceSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateServiceSyncConfigCommandError
 */
const de_CreateServiceSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateServiceTemplateCommand
 */
export const de_CreateServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceTemplateOutput(data, context);
  const response: CreateServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateServiceTemplateCommandError
 */
const de_CreateServiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateServiceTemplateVersionCommand
 */
export const de_CreateServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateServiceTemplateVersionOutput(data, context);
  const response: CreateServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateServiceTemplateVersionCommandError
 */
const de_CreateServiceTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0CreateTemplateSyncConfigCommand
 */
export const de_CreateTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CreateTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0CreateTemplateSyncConfigCommandError
 */
const de_CreateTemplateSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteComponentOutput(data, context);
  const response: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteComponentCommandError
 */
const de_DeleteComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteDeploymentCommand
 */
export const de_DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteDeploymentOutput(data, context);
  const response: DeleteDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteDeploymentCommandError
 */
const de_DeleteDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteEnvironmentCommand
 */
export const de_DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentOutput(data, context);
  const response: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentCommandError
 */
const de_DeleteEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteEnvironmentAccountConnectionCommand
 */
export const de_DeleteEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentAccountConnectionOutput(data, context);
  const response: DeleteEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentAccountConnectionCommandError
 */
const de_DeleteEnvironmentAccountConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentAccountConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteEnvironmentTemplateCommand
 */
export const de_DeleteEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentTemplateOutput(data, context);
  const response: DeleteEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentTemplateCommandError
 */
const de_DeleteEnvironmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteEnvironmentTemplateVersionCommand
 */
export const de_DeleteEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteEnvironmentTemplateVersionOutput(data, context);
  const response: DeleteEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentTemplateVersionCommandError
 */
const de_DeleteEnvironmentTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteRepositoryCommand
 */
export const de_DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteRepositoryCommandError
 */
const de_DeleteRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = de_DeleteServiceOutput(data, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteServiceSyncConfigCommand
 */
export const de_DeleteServiceSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteServiceSyncConfigCommandError
 */
const de_DeleteServiceSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteServiceTemplateCommand
 */
export const de_DeleteServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceTemplateOutput(data, context);
  const response: DeleteServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteServiceTemplateCommandError
 */
const de_DeleteServiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteServiceTemplateVersionCommand
 */
export const de_DeleteServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DeleteServiceTemplateVersionOutput(data, context);
  const response: DeleteServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteServiceTemplateVersionCommandError
 */
const de_DeleteServiceTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0DeleteTemplateSyncConfigCommand
 */
export const de_DeleteTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0DeleteTemplateSyncConfigCommandError
 */
const de_DeleteTemplateSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetAccountSettingsCommand
 */
export const de_GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetAccountSettingsCommandError
 */
const de_GetAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetComponentCommand
 */
export const de_GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetComponentOutput(data, context);
  const response: GetComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetComponentCommandError
 */
const de_GetComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetDeploymentOutput(data, context);
  const response: GetDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetDeploymentCommandError
 */
const de_GetDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEnvironmentCommand
 */
export const de_GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnvironmentOutput(data, context);
  const response: GetEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnvironmentCommandError
 */
const de_GetEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEnvironmentAccountConnectionCommand
 */
export const de_GetEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnvironmentAccountConnectionOutput(data, context);
  const response: GetEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnvironmentAccountConnectionCommandError
 */
const de_GetEnvironmentAccountConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentAccountConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEnvironmentTemplateCommand
 */
export const de_GetEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnvironmentTemplateOutput(data, context);
  const response: GetEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnvironmentTemplateCommandError
 */
const de_GetEnvironmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetEnvironmentTemplateVersionCommand
 */
export const de_GetEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetEnvironmentTemplateVersionOutput(data, context);
  const response: GetEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetEnvironmentTemplateVersionCommandError
 */
const de_GetEnvironmentTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetRepositoryCommand
 */
export const de_GetRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRepositoryCommandError
 */
const de_GetRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetRepositorySyncStatusCommand
 */
export const de_GetRepositorySyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositorySyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetRepositorySyncStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetRepositorySyncStatusOutput(data, context);
  const response: GetRepositorySyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetRepositorySyncStatusCommandError
 */
const de_GetRepositorySyncStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositorySyncStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetResourcesSummaryCommand
 */
export const de_GetResourcesSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetResourcesSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetResourcesSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetResourcesSummaryCommandError
 */
const de_GetResourcesSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcesSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceCommand
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
  contents = de_GetServiceOutput(data, context);
  const response: GetServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceCommandError
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceInstanceCommand
 */
export const de_GetServiceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceInstanceOutput(data, context);
  const response: GetServiceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceInstanceCommandError
 */
const de_GetServiceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceInstanceSyncStatusCommand
 */
export const de_GetServiceInstanceSyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceInstanceSyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceInstanceSyncStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceInstanceSyncStatusOutput(data, context);
  const response: GetServiceInstanceSyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceInstanceSyncStatusCommandError
 */
const de_GetServiceInstanceSyncStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceInstanceSyncStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceSyncBlockerSummaryCommand
 */
export const de_GetServiceSyncBlockerSummaryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSyncBlockerSummaryCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceSyncBlockerSummaryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceSyncBlockerSummaryOutput(data, context);
  const response: GetServiceSyncBlockerSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceSyncBlockerSummaryCommandError
 */
const de_GetServiceSyncBlockerSummaryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSyncBlockerSummaryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceSyncConfigCommand
 */
export const de_GetServiceSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceSyncConfigCommandError
 */
const de_GetServiceSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceTemplateCommand
 */
export const de_GetServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceTemplateOutput(data, context);
  const response: GetServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceTemplateCommandError
 */
const de_GetServiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetServiceTemplateVersionCommand
 */
export const de_GetServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetServiceTemplateVersionOutput(data, context);
  const response: GetServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetServiceTemplateVersionCommandError
 */
const de_GetServiceTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetTemplateSyncConfigCommand
 */
export const de_GetTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: GetTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTemplateSyncConfigCommandError
 */
const de_GetTemplateSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0GetTemplateSyncStatusCommand
 */
export const de_GetTemplateSyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_GetTemplateSyncStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_GetTemplateSyncStatusOutput(data, context);
  const response: GetTemplateSyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0GetTemplateSyncStatusCommandError
 */
const de_GetTemplateSyncStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSyncStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListComponentOutputsCommand
 */
export const de_ListComponentOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComponentOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListComponentOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListComponentOutputsCommandError
 */
const de_ListComponentOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListComponentProvisionedResourcesCommand
 */
export const de_ListComponentProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComponentProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListComponentProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListComponentProvisionedResourcesCommandError
 */
const de_ListComponentProvisionedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentProvisionedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListComponentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListComponentsOutput(data, context);
  const response: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListComponentsCommandError
 */
const de_ListComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListDeploymentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListDeploymentsOutput(data, context);
  const response: ListDeploymentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListDeploymentsCommandError
 */
const de_ListDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListEnvironmentAccountConnectionsCommand
 */
export const de_ListEnvironmentAccountConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentAccountConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentAccountConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentAccountConnectionsOutput(data, context);
  const response: ListEnvironmentAccountConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentAccountConnectionsCommandError
 */
const de_ListEnvironmentAccountConnectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentAccountConnectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListEnvironmentOutputsCommand
 */
export const de_ListEnvironmentOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListEnvironmentOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentOutputsCommandError
 */
const de_ListEnvironmentOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommand
 */
export const de_ListEnvironmentProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListEnvironmentProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommandError
 */
const de_ListEnvironmentProvisionedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentProvisionedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListEnvironmentsCommand
 */
export const de_ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentsOutput(data, context);
  const response: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentsCommandError
 */
const de_ListEnvironmentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListEnvironmentTemplatesCommand
 */
export const de_ListEnvironmentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentTemplatesOutput(data, context);
  const response: ListEnvironmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentTemplatesCommandError
 */
const de_ListEnvironmentTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListEnvironmentTemplateVersionsCommand
 */
export const de_ListEnvironmentTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentTemplateVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListEnvironmentTemplateVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListEnvironmentTemplateVersionsOutput(data, context);
  const response: ListEnvironmentTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListEnvironmentTemplateVersionsCommandError
 */
const de_ListEnvironmentTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListRepositoriesCommand
 */
export const de_ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRepositoriesCommandError
 */
const de_ListRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListRepositorySyncDefinitionsCommand
 */
export const de_ListRepositorySyncDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositorySyncDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListRepositorySyncDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListRepositorySyncDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListRepositorySyncDefinitionsCommandError
 */
const de_ListRepositorySyncDefinitionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositorySyncDefinitionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServiceInstanceOutputsCommand
 */
export const de_ListServiceInstanceOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstanceOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceInstanceOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServiceInstanceOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServiceInstanceOutputsCommandError
 */
const de_ListServiceInstanceOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstanceOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand
 */
export const de_ListServiceInstanceProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceInstanceProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServiceInstanceProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommandError
 */
const de_ListServiceInstanceProvisionedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServiceInstancesCommand
 */
export const de_ListServiceInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceInstancesOutput(data, context);
  const response: ListServiceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServiceInstancesCommandError
 */
const de_ListServiceInstancesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstancesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServicePipelineOutputsCommand
 */
export const de_ListServicePipelineOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePipelineOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicePipelineOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServicePipelineOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServicePipelineOutputsCommandError
 */
const de_ListServicePipelineOutputsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePipelineOutputsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServicePipelineProvisionedResourcesCommand
 */
export const de_ListServicePipelineProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePipelineProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServicePipelineProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListServicePipelineProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServicePipelineProvisionedResourcesCommandError
 */
const de_ListServicePipelineProvisionedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePipelineProvisionedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = de_ListServicesOutput(data, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServiceTemplatesCommand
 */
export const de_ListServiceTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceTemplatesOutput(data, context);
  const response: ListServiceTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServiceTemplatesCommandError
 */
const de_ListServiceTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0ListServiceTemplateVersionsCommand
 */
export const de_ListServiceTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListServiceTemplateVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ListServiceTemplateVersionsOutput(data, context);
  const response: ListServiceTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0ListServiceTemplateVersionsCommandError
 */
const de_ListServiceTemplateVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand
 */
export const de_NotifyResourceDeploymentStatusChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyResourceDeploymentStatusChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_NotifyResourceDeploymentStatusChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: NotifyResourceDeploymentStatusChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommandError
 */
const de_NotifyResourceDeploymentStatusChangeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyResourceDeploymentStatusChangeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0RejectEnvironmentAccountConnectionCommand
 */
export const de_RejectEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RejectEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RejectEnvironmentAccountConnectionOutput(data, context);
  const response: RejectEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0RejectEnvironmentAccountConnectionCommandError
 */
const de_RejectEnvironmentAccountConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectEnvironmentAccountConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateAccountSettingsCommand
 */
export const de_UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateAccountSettingsCommandError
 */
const de_UpdateAccountSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateComponentCommand
 */
export const de_UpdateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateComponentOutput(data, context);
  const response: UpdateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateComponentCommandError
 */
const de_UpdateComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateEnvironmentCommand
 */
export const de_UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEnvironmentOutput(data, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentCommandError
 */
const de_UpdateEnvironmentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateEnvironmentAccountConnectionCommand
 */
export const de_UpdateEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEnvironmentAccountConnectionOutput(data, context);
  const response: UpdateEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentAccountConnectionCommandError
 */
const de_UpdateEnvironmentAccountConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentAccountConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateEnvironmentTemplateCommand
 */
export const de_UpdateEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEnvironmentTemplateOutput(data, context);
  const response: UpdateEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentTemplateCommandError
 */
const de_UpdateEnvironmentTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateEnvironmentTemplateVersionCommand
 */
export const de_UpdateEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateEnvironmentTemplateVersionOutput(data, context);
  const response: UpdateEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentTemplateVersionCommandError
 */
const de_UpdateEnvironmentTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
  contents = de_UpdateServiceOutput(data, context);
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
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateServiceInstanceCommand
 */
export const de_UpdateServiceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceInstanceOutput(data, context);
  const response: UpdateServiceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateServiceInstanceCommandError
 */
const de_UpdateServiceInstanceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceInstanceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateServicePipelineCommand
 */
export const de_UpdateServicePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServicePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServicePipelineOutput(data, context);
  const response: UpdateServicePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateServicePipelineCommandError
 */
const de_UpdateServicePipelineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePipelineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateServiceSyncBlockerCommand
 */
export const de_UpdateServiceSyncBlockerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSyncBlockerCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceSyncBlockerCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceSyncBlockerOutput(data, context);
  const response: UpdateServiceSyncBlockerCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateServiceSyncBlockerCommandError
 */
const de_UpdateServiceSyncBlockerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSyncBlockerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateServiceSyncConfigCommand
 */
export const de_UpdateServiceSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateServiceSyncConfigCommandError
 */
const de_UpdateServiceSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateServiceTemplateCommand
 */
export const de_UpdateServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceTemplateOutput(data, context);
  const response: UpdateServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateServiceTemplateCommandError
 */
const de_UpdateServiceTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateServiceTemplateVersionCommand
 */
export const de_UpdateServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateServiceTemplateVersionOutput(data, context);
  const response: UpdateServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateServiceTemplateVersionCommandError
 */
const de_UpdateServiceTemplateVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceTemplateVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0UpdateTemplateSyncConfigCommand
 */
export const de_UpdateTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UpdateTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_0UpdateTemplateSyncConfigCommandError
 */
const de_UpdateTemplateSyncConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateSyncConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
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
 * deserializeAws_json1_0AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerException({
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

/**
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_0ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AcceptEnvironmentAccountConnectionInput omitted.

// se_CancelComponentDeploymentInput omitted.

// se_CancelEnvironmentDeploymentInput omitted.

// se_CancelServiceInstanceDeploymentInput omitted.

// se_CancelServicePipelineDeploymentInput omitted.

// se_CompatibleEnvironmentTemplateInput omitted.

// se_CompatibleEnvironmentTemplateInputList omitted.

/**
 * serializeAws_json1_0CreateComponentInput
 */
const se_CreateComponentInput = (input: CreateComponentInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    environmentName: [],
    manifest: [],
    name: [],
    serviceInstanceName: [],
    serviceName: [],
    serviceSpec: [],
    tags: _json,
    templateFile: [],
  });
};

/**
 * serializeAws_json1_0CreateEnvironmentAccountConnectionInput
 */
const se_CreateEnvironmentAccountConnectionInput = (
  input: CreateEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    codebuildRoleArn: [],
    componentRoleArn: [],
    environmentName: [],
    managementAccountId: [],
    roleArn: [],
    tags: _json,
  });
};

/**
 * serializeAws_json1_0CreateEnvironmentInput
 */
const se_CreateEnvironmentInput = (input: CreateEnvironmentInput, context: __SerdeContext): any => {
  return take(input, {
    codebuildRoleArn: [],
    componentRoleArn: [],
    description: [],
    environmentAccountConnectionId: [],
    name: [],
    protonServiceRoleArn: [],
    provisioningRepository: _json,
    spec: [],
    tags: _json,
    templateMajorVersion: [],
    templateMinorVersion: [],
    templateName: [],
  });
};

// se_CreateEnvironmentTemplateInput omitted.

/**
 * serializeAws_json1_0CreateEnvironmentTemplateVersionInput
 */
const se_CreateEnvironmentTemplateVersionInput = (
  input: CreateEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    description: [],
    majorVersion: [],
    source: _json,
    tags: _json,
    templateName: [],
  });
};

// se_CreateRepositoryInput omitted.

/**
 * serializeAws_json1_0CreateServiceInput
 */
const se_CreateServiceInput = (input: CreateServiceInput, context: __SerdeContext): any => {
  return take(input, {
    branchName: [],
    description: [],
    name: [],
    repositoryConnectionArn: [],
    repositoryId: [],
    spec: [],
    tags: _json,
    templateMajorVersion: [],
    templateMinorVersion: [],
    templateName: [],
  });
};

/**
 * serializeAws_json1_0CreateServiceInstanceInput
 */
const se_CreateServiceInstanceInput = (input: CreateServiceInstanceInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    name: [],
    serviceName: [],
    spec: [],
    tags: _json,
    templateMajorVersion: [],
    templateMinorVersion: [],
  });
};

// se_CreateServiceSyncConfigInput omitted.

// se_CreateServiceTemplateInput omitted.

/**
 * serializeAws_json1_0CreateServiceTemplateVersionInput
 */
const se_CreateServiceTemplateVersionInput = (
  input: CreateServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    compatibleEnvironmentTemplates: _json,
    description: [],
    majorVersion: [],
    source: _json,
    supportedComponentSources: _json,
    tags: _json,
    templateName: [],
  });
};

// se_CreateTemplateSyncConfigInput omitted.

// se_DeleteComponentInput omitted.

// se_DeleteDeploymentInput omitted.

// se_DeleteEnvironmentAccountConnectionInput omitted.

// se_DeleteEnvironmentInput omitted.

// se_DeleteEnvironmentTemplateInput omitted.

// se_DeleteEnvironmentTemplateVersionInput omitted.

// se_DeleteRepositoryInput omitted.

// se_DeleteServiceInput omitted.

// se_DeleteServiceSyncConfigInput omitted.

// se_DeleteServiceTemplateInput omitted.

// se_DeleteServiceTemplateVersionInput omitted.

// se_DeleteTemplateSyncConfigInput omitted.

// se_EnvironmentAccountConnectionStatusList omitted.

// se_EnvironmentTemplateFilter omitted.

// se_EnvironmentTemplateFilterList omitted.

// se_GetAccountSettingsInput omitted.

// se_GetComponentInput omitted.

// se_GetDeploymentInput omitted.

// se_GetEnvironmentAccountConnectionInput omitted.

// se_GetEnvironmentInput omitted.

// se_GetEnvironmentTemplateInput omitted.

// se_GetEnvironmentTemplateVersionInput omitted.

// se_GetRepositoryInput omitted.

// se_GetRepositorySyncStatusInput omitted.

// se_GetResourcesSummaryInput omitted.

// se_GetServiceInput omitted.

// se_GetServiceInstanceInput omitted.

// se_GetServiceInstanceSyncStatusInput omitted.

// se_GetServiceSyncBlockerSummaryInput omitted.

// se_GetServiceSyncConfigInput omitted.

// se_GetServiceTemplateInput omitted.

// se_GetServiceTemplateVersionInput omitted.

// se_GetTemplateSyncConfigInput omitted.

// se_GetTemplateSyncStatusInput omitted.

// se_ListComponentOutputsInput omitted.

// se_ListComponentProvisionedResourcesInput omitted.

// se_ListComponentsInput omitted.

// se_ListDeploymentsInput omitted.

// se_ListEnvironmentAccountConnectionsInput omitted.

// se_ListEnvironmentOutputsInput omitted.

// se_ListEnvironmentProvisionedResourcesInput omitted.

// se_ListEnvironmentsInput omitted.

// se_ListEnvironmentTemplatesInput omitted.

// se_ListEnvironmentTemplateVersionsInput omitted.

// se_ListRepositoriesInput omitted.

// se_ListRepositorySyncDefinitionsInput omitted.

// se_ListServiceInstanceOutputsInput omitted.

// se_ListServiceInstanceProvisionedResourcesInput omitted.

// se_ListServiceInstancesFilter omitted.

// se_ListServiceInstancesFilterList omitted.

// se_ListServiceInstancesInput omitted.

// se_ListServicePipelineOutputsInput omitted.

// se_ListServicePipelineProvisionedResourcesInput omitted.

// se_ListServicesInput omitted.

// se_ListServiceTemplatesInput omitted.

// se_ListServiceTemplateVersionsInput omitted.

// se_ListTagsForResourceInput omitted.

// se_NotifyResourceDeploymentStatusChangeInput omitted.

// se_Output omitted.

// se_OutputsList omitted.

// se_RejectEnvironmentAccountConnectionInput omitted.

// se_RepositoryBranchInput omitted.

// se_S3ObjectSource omitted.

// se_ServiceTemplateSupportedComponentSourceInputList omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_TagResourceInput omitted.

// se_TemplateVersionSourceInput omitted.

// se_UntagResourceInput omitted.

// se_UpdateAccountSettingsInput omitted.

/**
 * serializeAws_json1_0UpdateComponentInput
 */
const se_UpdateComponentInput = (input: UpdateComponentInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    deploymentType: [],
    description: [],
    name: [],
    serviceInstanceName: [],
    serviceName: [],
    serviceSpec: [],
    templateFile: [],
  });
};

// se_UpdateEnvironmentAccountConnectionInput omitted.

/**
 * serializeAws_json1_0UpdateEnvironmentInput
 */
const se_UpdateEnvironmentInput = (input: UpdateEnvironmentInput, context: __SerdeContext): any => {
  return take(input, {
    codebuildRoleArn: [],
    componentRoleArn: [],
    deploymentType: [],
    description: [],
    environmentAccountConnectionId: [],
    name: [],
    protonServiceRoleArn: [],
    provisioningRepository: _json,
    spec: [],
    templateMajorVersion: [],
    templateMinorVersion: [],
  });
};

// se_UpdateEnvironmentTemplateInput omitted.

// se_UpdateEnvironmentTemplateVersionInput omitted.

/**
 * serializeAws_json1_0UpdateServiceInput
 */
const se_UpdateServiceInput = (input: UpdateServiceInput, context: __SerdeContext): any => {
  return take(input, {
    description: [],
    name: [],
    spec: [],
  });
};

/**
 * serializeAws_json1_0UpdateServiceInstanceInput
 */
const se_UpdateServiceInstanceInput = (input: UpdateServiceInstanceInput, context: __SerdeContext): any => {
  return take(input, {
    clientToken: [true, (_) => _ ?? generateIdempotencyToken()],
    deploymentType: [],
    name: [],
    serviceName: [],
    spec: [],
    templateMajorVersion: [],
    templateMinorVersion: [],
  });
};

/**
 * serializeAws_json1_0UpdateServicePipelineInput
 */
const se_UpdateServicePipelineInput = (input: UpdateServicePipelineInput, context: __SerdeContext): any => {
  return take(input, {
    deploymentType: [],
    serviceName: [],
    spec: [],
    templateMajorVersion: [],
    templateMinorVersion: [],
  });
};

// se_UpdateServiceSyncBlockerInput omitted.

// se_UpdateServiceSyncConfigInput omitted.

// se_UpdateServiceTemplateInput omitted.

// se_UpdateServiceTemplateVersionInput omitted.

// se_UpdateTemplateSyncConfigInput omitted.

/**
 * deserializeAws_json1_0AcceptEnvironmentAccountConnectionOutput
 */
const de_AcceptEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): AcceptEnvironmentAccountConnectionOutput => {
  return take(output, {
    environmentAccountConnection: (_: any) => de_EnvironmentAccountConnection(_, context),
  }) as any;
};

// de_AccessDeniedException omitted.

// de_AccountSettings omitted.

/**
 * deserializeAws_json1_0CancelComponentDeploymentOutput
 */
const de_CancelComponentDeploymentOutput = (output: any, context: __SerdeContext): CancelComponentDeploymentOutput => {
  return take(output, {
    component: (_: any) => de_Component(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CancelEnvironmentDeploymentOutput
 */
const de_CancelEnvironmentDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelEnvironmentDeploymentOutput => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CancelServiceInstanceDeploymentOutput
 */
const de_CancelServiceInstanceDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelServiceInstanceDeploymentOutput => {
  return take(output, {
    serviceInstance: (_: any) => de_ServiceInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CancelServicePipelineDeploymentOutput
 */
const de_CancelServicePipelineDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelServicePipelineDeploymentOutput => {
  return take(output, {
    pipeline: (_: any) => de_ServicePipeline(_, context),
  }) as any;
};

// de_CompatibleEnvironmentTemplate omitted.

// de_CompatibleEnvironmentTemplateList omitted.

/**
 * deserializeAws_json1_0Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    description: __expectString,
    environmentName: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastClientRequestToken: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    name: __expectString,
    serviceInstanceName: __expectString,
    serviceName: __expectString,
    serviceSpec: __expectString,
  }) as any;
};

// de_ComponentDeploymentIdList omitted.

/**
 * deserializeAws_json1_0ComponentState
 */
const de_ComponentState = (output: any, context: __SerdeContext): ComponentState => {
  return take(output, {
    serviceInstanceName: __expectString,
    serviceName: __expectString,
    serviceSpec: __expectString,
    templateFile: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ComponentSummary
 */
const de_ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    environmentName: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    name: __expectString,
    serviceInstanceName: __expectString,
    serviceName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ComponentSummaryList
 */
const de_ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ComponentSummary(entry, context);
    });
  return retVal;
};

// de_ConflictException omitted.

// de_CountsSummary omitted.

/**
 * deserializeAws_json1_0CreateComponentOutput
 */
const de_CreateComponentOutput = (output: any, context: __SerdeContext): CreateComponentOutput => {
  return take(output, {
    component: (_: any) => de_Component(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentAccountConnectionOutput
 */
const de_CreateEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentAccountConnectionOutput => {
  return take(output, {
    environmentAccountConnection: (_: any) => de_EnvironmentAccountConnection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentOutput
 */
const de_CreateEnvironmentOutput = (output: any, context: __SerdeContext): CreateEnvironmentOutput => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentTemplateOutput
 */
const de_CreateEnvironmentTemplateOutput = (output: any, context: __SerdeContext): CreateEnvironmentTemplateOutput => {
  return take(output, {
    environmentTemplate: (_: any) => de_EnvironmentTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentTemplateVersionOutput
 */
const de_CreateEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentTemplateVersionOutput => {
  return take(output, {
    environmentTemplateVersion: (_: any) => de_EnvironmentTemplateVersion(_, context),
  }) as any;
};

// de_CreateRepositoryOutput omitted.

/**
 * deserializeAws_json1_0CreateServiceInstanceOutput
 */
const de_CreateServiceInstanceOutput = (output: any, context: __SerdeContext): CreateServiceInstanceOutput => {
  return take(output, {
    serviceInstance: (_: any) => de_ServiceInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateServiceOutput
 */
const de_CreateServiceOutput = (output: any, context: __SerdeContext): CreateServiceOutput => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

// de_CreateServiceSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0CreateServiceTemplateOutput
 */
const de_CreateServiceTemplateOutput = (output: any, context: __SerdeContext): CreateServiceTemplateOutput => {
  return take(output, {
    serviceTemplate: (_: any) => de_ServiceTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0CreateServiceTemplateVersionOutput
 */
const de_CreateServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): CreateServiceTemplateVersionOutput => {
  return take(output, {
    serviceTemplateVersion: (_: any) => de_ServiceTemplateVersion(_, context),
  }) as any;
};

// de_CreateTemplateSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0DeleteComponentOutput
 */
const de_DeleteComponentOutput = (output: any, context: __SerdeContext): DeleteComponentOutput => {
  return take(output, {
    component: (_: any) => de_Component(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteDeploymentOutput
 */
const de_DeleteDeploymentOutput = (output: any, context: __SerdeContext): DeleteDeploymentOutput => {
  return take(output, {
    deployment: (_: any) => de_Deployment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentAccountConnectionOutput
 */
const de_DeleteEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentAccountConnectionOutput => {
  return take(output, {
    environmentAccountConnection: (_: any) => de_EnvironmentAccountConnection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentOutput
 */
const de_DeleteEnvironmentOutput = (output: any, context: __SerdeContext): DeleteEnvironmentOutput => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentTemplateOutput
 */
const de_DeleteEnvironmentTemplateOutput = (output: any, context: __SerdeContext): DeleteEnvironmentTemplateOutput => {
  return take(output, {
    environmentTemplate: (_: any) => de_EnvironmentTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentTemplateVersionOutput
 */
const de_DeleteEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentTemplateVersionOutput => {
  return take(output, {
    environmentTemplateVersion: (_: any) => de_EnvironmentTemplateVersion(_, context),
  }) as any;
};

// de_DeleteRepositoryOutput omitted.

/**
 * deserializeAws_json1_0DeleteServiceOutput
 */
const de_DeleteServiceOutput = (output: any, context: __SerdeContext): DeleteServiceOutput => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

// de_DeleteServiceSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0DeleteServiceTemplateOutput
 */
const de_DeleteServiceTemplateOutput = (output: any, context: __SerdeContext): DeleteServiceTemplateOutput => {
  return take(output, {
    serviceTemplate: (_: any) => de_ServiceTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeleteServiceTemplateVersionOutput
 */
const de_DeleteServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): DeleteServiceTemplateVersionOutput => {
  return take(output, {
    serviceTemplateVersion: (_: any) => de_ServiceTemplateVersion(_, context),
  }) as any;
};

// de_DeleteTemplateSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return take(output, {
    arn: __expectString,
    completedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    componentName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    environmentName: __expectString,
    id: __expectString,
    initialState: (_: any) => de_DeploymentState(__expectUnion(_), context),
    lastAttemptedDeploymentId: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    serviceInstanceName: __expectString,
    serviceName: __expectString,
    targetArn: __expectString,
    targetResourceCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    targetResourceType: __expectString,
    targetState: (_: any) => de_DeploymentState(__expectUnion(_), context),
  }) as any;
};

/**
 * deserializeAws_json1_0DeploymentState
 */
const de_DeploymentState = (output: any, context: __SerdeContext): DeploymentState => {
  if (output.component != null) {
    return {
      component: de_ComponentState(output.component, context),
    };
  }
  if (output.environment != null) {
    return {
      environment: de_EnvironmentState(output.environment, context),
    };
  }
  if (output.serviceInstance != null) {
    return {
      serviceInstance: de_ServiceInstanceState(output.serviceInstance, context),
    };
  }
  if (output.servicePipeline != null) {
    return {
      servicePipeline: de_ServicePipelineState(output.servicePipeline, context),
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

/**
 * deserializeAws_json1_0DeploymentSummary
 */
const de_DeploymentSummary = (output: any, context: __SerdeContext): DeploymentSummary => {
  return take(output, {
    arn: __expectString,
    completedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    componentName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    environmentName: __expectString,
    id: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    serviceInstanceName: __expectString,
    serviceName: __expectString,
    targetArn: __expectString,
    targetResourceCreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    targetResourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0DeploymentSummaryList
 */
const de_DeploymentSummaryList = (output: any, context: __SerdeContext): DeploymentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeploymentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return take(output, {
    arn: __expectString,
    codebuildRoleArn: __expectString,
    componentRoleArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    description: __expectString,
    environmentAccountConnectionId: __expectString,
    environmentAccountId: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    name: __expectString,
    protonServiceRoleArn: __expectString,
    provisioning: __expectString,
    provisioningRepository: _json,
    spec: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentAccountConnection
 */
const de_EnvironmentAccountConnection = (output: any, context: __SerdeContext): EnvironmentAccountConnection => {
  return take(output, {
    arn: __expectString,
    codebuildRoleArn: __expectString,
    componentRoleArn: __expectString,
    environmentAccountId: __expectString,
    environmentName: __expectString,
    id: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    managementAccountId: __expectString,
    requestedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentAccountConnectionSummary
 */
const de_EnvironmentAccountConnectionSummary = (
  output: any,
  context: __SerdeContext
): EnvironmentAccountConnectionSummary => {
  return take(output, {
    arn: __expectString,
    componentRoleArn: __expectString,
    environmentAccountId: __expectString,
    environmentName: __expectString,
    id: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    managementAccountId: __expectString,
    requestedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    roleArn: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentAccountConnectionSummaryList
 */
const de_EnvironmentAccountConnectionSummaryList = (
  output: any,
  context: __SerdeContext
): EnvironmentAccountConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentAccountConnectionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EnvironmentState
 */
const de_EnvironmentState = (output: any, context: __SerdeContext): EnvironmentState => {
  return take(output, {
    spec: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return take(output, {
    arn: __expectString,
    componentRoleArn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    description: __expectString,
    environmentAccountConnectionId: __expectString,
    environmentAccountId: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    name: __expectString,
    protonServiceRoleArn: __expectString,
    provisioning: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentSummaryList
 */
const de_EnvironmentSummaryList = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EnvironmentTemplate
 */
const de_EnvironmentTemplate = (output: any, context: __SerdeContext): EnvironmentTemplate => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    encryptionKey: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    provisioning: __expectString,
    recommendedVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateSummary
 */
const de_EnvironmentTemplateSummary = (output: any, context: __SerdeContext): EnvironmentTemplateSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    provisioning: __expectString,
    recommendedVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateSummaryList
 */
const de_EnvironmentTemplateSummaryList = (output: any, context: __SerdeContext): EnvironmentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateVersion
 */
const de_EnvironmentTemplateVersion = (output: any, context: __SerdeContext): EnvironmentTemplateVersion => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    majorVersion: __expectString,
    minorVersion: __expectString,
    recommendedMinorVersion: __expectString,
    schema: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateVersionSummary
 */
const de_EnvironmentTemplateVersionSummary = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateVersionSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    majorVersion: __expectString,
    minorVersion: __expectString,
    recommendedMinorVersion: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateVersionSummaryList
 */
const de_EnvironmentTemplateVersionSummaryList = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_EnvironmentTemplateVersionSummary(entry, context);
    });
  return retVal;
};

// de_GetAccountSettingsOutput omitted.

/**
 * deserializeAws_json1_0GetComponentOutput
 */
const de_GetComponentOutput = (output: any, context: __SerdeContext): GetComponentOutput => {
  return take(output, {
    component: (_: any) => de_Component(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetDeploymentOutput
 */
const de_GetDeploymentOutput = (output: any, context: __SerdeContext): GetDeploymentOutput => {
  return take(output, {
    deployment: (_: any) => de_Deployment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentAccountConnectionOutput
 */
const de_GetEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentAccountConnectionOutput => {
  return take(output, {
    environmentAccountConnection: (_: any) => de_EnvironmentAccountConnection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentOutput
 */
const de_GetEnvironmentOutput = (output: any, context: __SerdeContext): GetEnvironmentOutput => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentTemplateOutput
 */
const de_GetEnvironmentTemplateOutput = (output: any, context: __SerdeContext): GetEnvironmentTemplateOutput => {
  return take(output, {
    environmentTemplate: (_: any) => de_EnvironmentTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentTemplateVersionOutput
 */
const de_GetEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentTemplateVersionOutput => {
  return take(output, {
    environmentTemplateVersion: (_: any) => de_EnvironmentTemplateVersion(_, context),
  }) as any;
};

// de_GetRepositoryOutput omitted.

/**
 * deserializeAws_json1_0GetRepositorySyncStatusOutput
 */
const de_GetRepositorySyncStatusOutput = (output: any, context: __SerdeContext): GetRepositorySyncStatusOutput => {
  return take(output, {
    latestSync: (_: any) => de_RepositorySyncAttempt(_, context),
  }) as any;
};

// de_GetResourcesSummaryOutput omitted.

/**
 * deserializeAws_json1_0GetServiceInstanceOutput
 */
const de_GetServiceInstanceOutput = (output: any, context: __SerdeContext): GetServiceInstanceOutput => {
  return take(output, {
    serviceInstance: (_: any) => de_ServiceInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetServiceInstanceSyncStatusOutput
 */
const de_GetServiceInstanceSyncStatusOutput = (
  output: any,
  context: __SerdeContext
): GetServiceInstanceSyncStatusOutput => {
  return take(output, {
    desiredState: _json,
    latestSuccessfulSync: (_: any) => de_ResourceSyncAttempt(_, context),
    latestSync: (_: any) => de_ResourceSyncAttempt(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetServiceOutput
 */
const de_GetServiceOutput = (output: any, context: __SerdeContext): GetServiceOutput => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetServiceSyncBlockerSummaryOutput
 */
const de_GetServiceSyncBlockerSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetServiceSyncBlockerSummaryOutput => {
  return take(output, {
    serviceSyncBlockerSummary: (_: any) => de_ServiceSyncBlockerSummary(_, context),
  }) as any;
};

// de_GetServiceSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0GetServiceTemplateOutput
 */
const de_GetServiceTemplateOutput = (output: any, context: __SerdeContext): GetServiceTemplateOutput => {
  return take(output, {
    serviceTemplate: (_: any) => de_ServiceTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0GetServiceTemplateVersionOutput
 */
const de_GetServiceTemplateVersionOutput = (output: any, context: __SerdeContext): GetServiceTemplateVersionOutput => {
  return take(output, {
    serviceTemplateVersion: (_: any) => de_ServiceTemplateVersion(_, context),
  }) as any;
};

// de_GetTemplateSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0GetTemplateSyncStatusOutput
 */
const de_GetTemplateSyncStatusOutput = (output: any, context: __SerdeContext): GetTemplateSyncStatusOutput => {
  return take(output, {
    desiredState: _json,
    latestSuccessfulSync: (_: any) => de_ResourceSyncAttempt(_, context),
    latestSync: (_: any) => de_ResourceSyncAttempt(_, context),
  }) as any;
};

// de_InternalServerException omitted.

/**
 * deserializeAws_json1_0LatestSyncBlockers
 */
const de_LatestSyncBlockers = (output: any, context: __SerdeContext): SyncBlocker[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_SyncBlocker(entry, context);
    });
  return retVal;
};

// de_ListComponentOutputsOutput omitted.

// de_ListComponentProvisionedResourcesOutput omitted.

/**
 * deserializeAws_json1_0ListComponentsOutput
 */
const de_ListComponentsOutput = (output: any, context: __SerdeContext): ListComponentsOutput => {
  return take(output, {
    components: (_: any) => de_ComponentSummaryList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListDeploymentsOutput
 */
const de_ListDeploymentsOutput = (output: any, context: __SerdeContext): ListDeploymentsOutput => {
  return take(output, {
    deployments: (_: any) => de_DeploymentSummaryList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentAccountConnectionsOutput
 */
const de_ListEnvironmentAccountConnectionsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentAccountConnectionsOutput => {
  return take(output, {
    environmentAccountConnections: (_: any) => de_EnvironmentAccountConnectionSummaryList(_, context),
    nextToken: __expectString,
  }) as any;
};

// de_ListEnvironmentOutputsOutput omitted.

// de_ListEnvironmentProvisionedResourcesOutput omitted.

/**
 * deserializeAws_json1_0ListEnvironmentsOutput
 */
const de_ListEnvironmentsOutput = (output: any, context: __SerdeContext): ListEnvironmentsOutput => {
  return take(output, {
    environments: (_: any) => de_EnvironmentSummaryList(_, context),
    nextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentTemplatesOutput
 */
const de_ListEnvironmentTemplatesOutput = (output: any, context: __SerdeContext): ListEnvironmentTemplatesOutput => {
  return take(output, {
    nextToken: __expectString,
    templates: (_: any) => de_EnvironmentTemplateSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentTemplateVersionsOutput
 */
const de_ListEnvironmentTemplateVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentTemplateVersionsOutput => {
  return take(output, {
    nextToken: __expectString,
    templateVersions: (_: any) => de_EnvironmentTemplateVersionSummaryList(_, context),
  }) as any;
};

// de_ListRepositoriesOutput omitted.

// de_ListRepositorySyncDefinitionsOutput omitted.

// de_ListServiceInstanceOutputsOutput omitted.

// de_ListServiceInstanceProvisionedResourcesOutput omitted.

/**
 * deserializeAws_json1_0ListServiceInstancesOutput
 */
const de_ListServiceInstancesOutput = (output: any, context: __SerdeContext): ListServiceInstancesOutput => {
  return take(output, {
    nextToken: __expectString,
    serviceInstances: (_: any) => de_ServiceInstanceSummaryList(_, context),
  }) as any;
};

// de_ListServicePipelineOutputsOutput omitted.

// de_ListServicePipelineProvisionedResourcesOutput omitted.

/**
 * deserializeAws_json1_0ListServicesOutput
 */
const de_ListServicesOutput = (output: any, context: __SerdeContext): ListServicesOutput => {
  return take(output, {
    nextToken: __expectString,
    services: (_: any) => de_ServiceSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListServiceTemplatesOutput
 */
const de_ListServiceTemplatesOutput = (output: any, context: __SerdeContext): ListServiceTemplatesOutput => {
  return take(output, {
    nextToken: __expectString,
    templates: (_: any) => de_ServiceTemplateSummaryList(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0ListServiceTemplateVersionsOutput
 */
const de_ListServiceTemplateVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListServiceTemplateVersionsOutput => {
  return take(output, {
    nextToken: __expectString,
    templateVersions: (_: any) => de_ServiceTemplateVersionSummaryList(_, context),
  }) as any;
};

// de_ListTagsForResourceOutput omitted.

// de_NotifyResourceDeploymentStatusChangeOutput omitted.

// de_Output omitted.

// de_OutputsList omitted.

// de_ProvisionedResource omitted.

// de_ProvisionedResourceList omitted.

/**
 * deserializeAws_json1_0RejectEnvironmentAccountConnectionOutput
 */
const de_RejectEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): RejectEnvironmentAccountConnectionOutput => {
  return take(output, {
    environmentAccountConnection: (_: any) => de_EnvironmentAccountConnection(_, context),
  }) as any;
};

// de_Repository omitted.

// de_RepositoryBranch omitted.

// de_RepositorySummary omitted.

// de_RepositorySummaryList omitted.

/**
 * deserializeAws_json1_0RepositorySyncAttempt
 */
const de_RepositorySyncAttempt = (output: any, context: __SerdeContext): RepositorySyncAttempt => {
  return take(output, {
    events: (_: any) => de_RepositorySyncEvents(_, context),
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
  }) as any;
};

// de_RepositorySyncDefinition omitted.

// de_RepositorySyncDefinitionList omitted.

/**
 * deserializeAws_json1_0RepositorySyncEvent
 */
const de_RepositorySyncEvent = (output: any, context: __SerdeContext): RepositorySyncEvent => {
  return take(output, {
    event: __expectString,
    externalId: __expectString,
    time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0RepositorySyncEvents
 */
const de_RepositorySyncEvents = (output: any, context: __SerdeContext): RepositorySyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RepositorySyncEvent(entry, context);
    });
  return retVal;
};

// de_ResourceCountsSummary omitted.

// de_ResourceNotFoundException omitted.

/**
 * deserializeAws_json1_0ResourceSyncAttempt
 */
const de_ResourceSyncAttempt = (output: any, context: __SerdeContext): ResourceSyncAttempt => {
  return take(output, {
    events: (_: any) => de_ResourceSyncEvents(_, context),
    initialRevision: _json,
    startedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    status: __expectString,
    target: __expectString,
    targetRevision: _json,
  }) as any;
};

/**
 * deserializeAws_json1_0ResourceSyncEvent
 */
const de_ResourceSyncEvent = (output: any, context: __SerdeContext): ResourceSyncEvent => {
  return take(output, {
    event: __expectString,
    externalId: __expectString,
    time: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    type: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ResourceSyncEvents
 */
const de_ResourceSyncEvents = (output: any, context: __SerdeContext): ResourceSyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceSyncEvent(entry, context);
    });
  return retVal;
};

// de_Revision omitted.

/**
 * deserializeAws_json1_0Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return take(output, {
    arn: __expectString,
    branchName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    pipeline: (_: any) => de_ServicePipeline(_, context),
    repositoryConnectionArn: __expectString,
    repositoryId: __expectString,
    spec: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceInstance
 */
const de_ServiceInstance = (output: any, context: __SerdeContext): ServiceInstance => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    environmentName: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastClientRequestToken: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    name: __expectString,
    serviceName: __expectString,
    spec: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceInstanceState
 */
const de_ServiceInstanceState = (output: any, context: __SerdeContext): ServiceInstanceState => {
  return take(output, {
    lastSuccessfulComponentDeploymentIds: _json,
    lastSuccessfulEnvironmentDeploymentId: __expectString,
    lastSuccessfulServicePipelineDeploymentId: __expectString,
    spec: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceInstanceSummary
 */
const de_ServiceInstanceSummary = (output: any, context: __SerdeContext): ServiceInstanceSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    environmentName: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    name: __expectString,
    serviceName: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceInstanceSummaryList
 */
const de_ServiceInstanceSummaryList = (output: any, context: __SerdeContext): ServiceInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceInstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServicePipeline
 */
const de_ServicePipeline = (output: any, context: __SerdeContext): ServicePipeline => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    deploymentStatus: __expectString,
    deploymentStatusMessage: __expectString,
    lastAttemptedDeploymentId: __expectString,
    lastDeploymentAttemptedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastDeploymentSucceededAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    lastSucceededDeploymentId: __expectString,
    spec: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServicePipelineState
 */
const de_ServicePipelineState = (output: any, context: __SerdeContext): ServicePipelineState => {
  return take(output, {
    spec: __expectString,
    templateMajorVersion: __expectString,
    templateMinorVersion: __expectString,
    templateName: __expectString,
  }) as any;
};

// de_ServiceQuotaExceededException omitted.

/**
 * deserializeAws_json1_0ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    templateName: __expectString,
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

/**
 * deserializeAws_json1_0ServiceSyncBlockerSummary
 */
const de_ServiceSyncBlockerSummary = (output: any, context: __SerdeContext): ServiceSyncBlockerSummary => {
  return take(output, {
    latestBlockers: (_: any) => de_LatestSyncBlockers(_, context),
    serviceInstanceName: __expectString,
    serviceName: __expectString,
  }) as any;
};

// de_ServiceSyncConfig omitted.

/**
 * deserializeAws_json1_0ServiceTemplate
 */
const de_ServiceTemplate = (output: any, context: __SerdeContext): ServiceTemplate => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    encryptionKey: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    pipelineProvisioning: __expectString,
    recommendedVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateSummary
 */
const de_ServiceTemplateSummary = (output: any, context: __SerdeContext): ServiceTemplateSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    displayName: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    name: __expectString,
    pipelineProvisioning: __expectString,
    recommendedVersion: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateSummaryList
 */
const de_ServiceTemplateSummaryList = (output: any, context: __SerdeContext): ServiceTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceTemplateSummary(entry, context);
    });
  return retVal;
};

// de_ServiceTemplateSupportedComponentSourceInputList omitted.

/**
 * deserializeAws_json1_0ServiceTemplateVersion
 */
const de_ServiceTemplateVersion = (output: any, context: __SerdeContext): ServiceTemplateVersion => {
  return take(output, {
    arn: __expectString,
    compatibleEnvironmentTemplates: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    majorVersion: __expectString,
    minorVersion: __expectString,
    recommendedMinorVersion: __expectString,
    schema: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    supportedComponentSources: _json,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateVersionSummary
 */
const de_ServiceTemplateVersionSummary = (output: any, context: __SerdeContext): ServiceTemplateVersionSummary => {
  return take(output, {
    arn: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    lastModifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    majorVersion: __expectString,
    minorVersion: __expectString,
    recommendedMinorVersion: __expectString,
    status: __expectString,
    statusMessage: __expectString,
    templateName: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateVersionSummaryList
 */
const de_ServiceTemplateVersionSummaryList = (
  output: any,
  context: __SerdeContext
): ServiceTemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ServiceTemplateVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SyncBlocker
 */
const de_SyncBlocker = (output: any, context: __SerdeContext): SyncBlocker => {
  return take(output, {
    contexts: _json,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    createdReason: __expectString,
    id: __expectString,
    resolvedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    resolvedReason: __expectString,
    status: __expectString,
    type: __expectString,
  }) as any;
};

// de_SyncBlockerContext omitted.

// de_SyncBlockerContexts omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TagResourceOutput omitted.

// de_TemplateSyncConfig omitted.

// de_ThrottlingException omitted.

// de_UntagResourceOutput omitted.

// de_UpdateAccountSettingsOutput omitted.

/**
 * deserializeAws_json1_0UpdateComponentOutput
 */
const de_UpdateComponentOutput = (output: any, context: __SerdeContext): UpdateComponentOutput => {
  return take(output, {
    component: (_: any) => de_Component(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentAccountConnectionOutput
 */
const de_UpdateEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentAccountConnectionOutput => {
  return take(output, {
    environmentAccountConnection: (_: any) => de_EnvironmentAccountConnection(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentOutput
 */
const de_UpdateEnvironmentOutput = (output: any, context: __SerdeContext): UpdateEnvironmentOutput => {
  return take(output, {
    environment: (_: any) => de_Environment(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentTemplateOutput
 */
const de_UpdateEnvironmentTemplateOutput = (output: any, context: __SerdeContext): UpdateEnvironmentTemplateOutput => {
  return take(output, {
    environmentTemplate: (_: any) => de_EnvironmentTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentTemplateVersionOutput
 */
const de_UpdateEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentTemplateVersionOutput => {
  return take(output, {
    environmentTemplateVersion: (_: any) => de_EnvironmentTemplateVersion(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateServiceInstanceOutput
 */
const de_UpdateServiceInstanceOutput = (output: any, context: __SerdeContext): UpdateServiceInstanceOutput => {
  return take(output, {
    serviceInstance: (_: any) => de_ServiceInstance(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateServiceOutput
 */
const de_UpdateServiceOutput = (output: any, context: __SerdeContext): UpdateServiceOutput => {
  return take(output, {
    service: (_: any) => de_Service(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateServicePipelineOutput
 */
const de_UpdateServicePipelineOutput = (output: any, context: __SerdeContext): UpdateServicePipelineOutput => {
  return take(output, {
    pipeline: (_: any) => de_ServicePipeline(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateServiceSyncBlockerOutput
 */
const de_UpdateServiceSyncBlockerOutput = (output: any, context: __SerdeContext): UpdateServiceSyncBlockerOutput => {
  return take(output, {
    serviceInstanceName: __expectString,
    serviceName: __expectString,
    serviceSyncBlocker: (_: any) => de_SyncBlocker(_, context),
  }) as any;
};

// de_UpdateServiceSyncConfigOutput omitted.

/**
 * deserializeAws_json1_0UpdateServiceTemplateOutput
 */
const de_UpdateServiceTemplateOutput = (output: any, context: __SerdeContext): UpdateServiceTemplateOutput => {
  return take(output, {
    serviceTemplate: (_: any) => de_ServiceTemplate(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_0UpdateServiceTemplateVersionOutput
 */
const de_UpdateServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): UpdateServiceTemplateVersionOutput => {
  return take(output, {
    serviceTemplateVersion: (_: any) => de_ServiceTemplateVersion(_, context),
  }) as any;
};

// de_UpdateTemplateSyncConfigOutput omitted.

// de_ValidationException omitted.

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
    "x-amz-target": `AwsProton20200720.${operation}`,
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
