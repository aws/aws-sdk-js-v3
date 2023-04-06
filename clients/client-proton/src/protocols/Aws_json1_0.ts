// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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
  AccountSettings,
  CancelComponentDeploymentInput,
  CancelComponentDeploymentOutput,
  CancelEnvironmentDeploymentInput,
  CancelEnvironmentDeploymentOutput,
  CancelServiceInstanceDeploymentInput,
  CancelServiceInstanceDeploymentOutput,
  CancelServicePipelineDeploymentInput,
  CancelServicePipelineDeploymentOutput,
  CompatibleEnvironmentTemplate,
  CompatibleEnvironmentTemplateInput,
  Component,
  ComponentSummary,
  ConflictException,
  CountsSummary,
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
  CreateRepositoryOutput,
  CreateServiceInput,
  CreateServiceInstanceInput,
  CreateServiceInstanceOutput,
  CreateServiceOutput,
  CreateServiceSyncConfigInput,
  CreateServiceSyncConfigOutput,
  CreateServiceTemplateInput,
  CreateServiceTemplateOutput,
  CreateServiceTemplateVersionInput,
  CreateServiceTemplateVersionOutput,
  CreateTemplateSyncConfigInput,
  CreateTemplateSyncConfigOutput,
  DeleteComponentInput,
  DeleteComponentOutput,
  DeleteEnvironmentAccountConnectionInput,
  DeleteEnvironmentAccountConnectionOutput,
  DeleteEnvironmentInput,
  DeleteEnvironmentOutput,
  DeleteEnvironmentTemplateInput,
  DeleteEnvironmentTemplateOutput,
  DeleteEnvironmentTemplateVersionInput,
  DeleteEnvironmentTemplateVersionOutput,
  DeleteRepositoryInput,
  DeleteRepositoryOutput,
  DeleteServiceInput,
  DeleteServiceOutput,
  DeleteServiceSyncConfigInput,
  DeleteServiceSyncConfigOutput,
  DeleteServiceTemplateInput,
  DeleteServiceTemplateOutput,
  DeleteServiceTemplateVersionInput,
  DeleteServiceTemplateVersionOutput,
  DeleteTemplateSyncConfigInput,
  DeleteTemplateSyncConfigOutput,
  Environment,
  EnvironmentAccountConnection,
  EnvironmentAccountConnectionStatus,
  EnvironmentAccountConnectionSummary,
  EnvironmentSummary,
  EnvironmentTemplate,
  EnvironmentTemplateFilter,
  EnvironmentTemplateSummary,
  EnvironmentTemplateVersion,
  EnvironmentTemplateVersionSummary,
  GetAccountSettingsInput,
  GetAccountSettingsOutput,
  GetComponentInput,
  GetComponentOutput,
  GetEnvironmentAccountConnectionInput,
  GetEnvironmentAccountConnectionOutput,
  GetEnvironmentInput,
  GetEnvironmentOutput,
  GetEnvironmentTemplateInput,
  GetEnvironmentTemplateOutput,
  GetEnvironmentTemplateVersionInput,
  GetEnvironmentTemplateVersionOutput,
  GetRepositoryInput,
  GetRepositoryOutput,
  GetRepositorySyncStatusInput,
  GetRepositorySyncStatusOutput,
  GetResourcesSummaryInput,
  GetResourcesSummaryOutput,
  GetServiceInput,
  GetServiceInstanceInput,
  GetServiceInstanceOutput,
  GetServiceInstanceSyncStatusInput,
  GetServiceInstanceSyncStatusOutput,
  GetServiceOutput,
  GetServiceSyncBlockerSummaryInput,
  GetServiceSyncBlockerSummaryOutput,
  GetServiceSyncConfigInput,
  GetServiceSyncConfigOutput,
  GetServiceTemplateInput,
  GetServiceTemplateOutput,
  GetServiceTemplateVersionInput,
  GetServiceTemplateVersionOutput,
  GetTemplateSyncConfigInput,
  GetTemplateSyncConfigOutput,
  GetTemplateSyncStatusInput,
  GetTemplateSyncStatusOutput,
  InternalServerException,
  ListComponentOutputsInput,
  ListComponentOutputsOutput,
  ListComponentProvisionedResourcesInput,
  ListComponentProvisionedResourcesOutput,
  ListComponentsInput,
  ListComponentsOutput,
  ListEnvironmentAccountConnectionsInput,
  ListEnvironmentAccountConnectionsOutput,
  ListEnvironmentOutputsInput,
  ListEnvironmentOutputsOutput,
  ListEnvironmentProvisionedResourcesInput,
  ListEnvironmentProvisionedResourcesOutput,
  ListEnvironmentsInput,
  ListEnvironmentsOutput,
  ListEnvironmentTemplatesInput,
  ListEnvironmentTemplatesOutput,
  ListEnvironmentTemplateVersionsInput,
  ListEnvironmentTemplateVersionsOutput,
  ListRepositoriesInput,
  ListRepositoriesOutput,
  ListRepositorySyncDefinitionsInput,
  ListRepositorySyncDefinitionsOutput,
  ListServiceInstanceOutputsInput,
  ListServiceInstanceOutputsOutput,
  ListServiceInstanceProvisionedResourcesInput,
  ListServiceInstanceProvisionedResourcesOutput,
  ListServiceInstancesFilter,
  ListServiceInstancesInput,
  ListServiceInstancesOutput,
  ListServicePipelineOutputsInput,
  ListServicePipelineOutputsOutput,
  ListServicePipelineProvisionedResourcesInput,
  ListServicePipelineProvisionedResourcesOutput,
  ListServicesInput,
  ListServicesOutput,
  ListServiceTemplatesInput,
  ListServiceTemplatesOutput,
  ListServiceTemplateVersionsInput,
  ListServiceTemplateVersionsOutput,
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  NotifyResourceDeploymentStatusChangeInput,
  NotifyResourceDeploymentStatusChangeOutput,
  Output,
  ProvisionedResource,
  RejectEnvironmentAccountConnectionInput,
  RejectEnvironmentAccountConnectionOutput,
  Repository,
  RepositoryBranch,
  RepositoryBranchInput,
  RepositorySummary,
  RepositorySyncAttempt,
  RepositorySyncDefinition,
  RepositorySyncEvent,
  ResourceCountsSummary,
  ResourceNotFoundException,
  ResourceSyncAttempt,
  ResourceSyncEvent,
  Revision,
  S3ObjectSource,
  Service,
  ServiceInstance,
  ServiceInstanceSummary,
  ServicePipeline,
  ServiceQuotaExceededException,
  ServiceSummary,
  ServiceSyncBlockerSummary,
  ServiceSyncConfig,
  ServiceTemplate,
  ServiceTemplateSummary,
  ServiceTemplateSupportedComponentSourceType,
  ServiceTemplateVersion,
  ServiceTemplateVersionSummary,
  SyncBlocker,
  SyncBlockerContext,
  Tag,
  TagResourceInput,
  TagResourceOutput,
  TemplateSyncConfig,
  TemplateVersionSourceInput,
  ThrottlingException,
  UntagResourceInput,
  UntagResourceOutput,
  UpdateAccountSettingsInput,
  UpdateAccountSettingsOutput,
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
  UpdateServiceSyncConfigOutput,
  UpdateServiceTemplateInput,
  UpdateServiceTemplateOutput,
  UpdateServiceTemplateVersionInput,
  UpdateServiceTemplateVersionOutput,
  UpdateTemplateSyncConfigInput,
  UpdateTemplateSyncConfigOutput,
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.AcceptEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(se_AcceptEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelComponentDeploymentCommand
 */
export const se_CancelComponentDeploymentCommand = async (
  input: CancelComponentDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelComponentDeployment",
  };
  let body: any;
  body = JSON.stringify(se_CancelComponentDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelEnvironmentDeploymentCommand
 */
export const se_CancelEnvironmentDeploymentCommand = async (
  input: CancelEnvironmentDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelEnvironmentDeployment",
  };
  let body: any;
  body = JSON.stringify(se_CancelEnvironmentDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelServiceInstanceDeploymentCommand
 */
export const se_CancelServiceInstanceDeploymentCommand = async (
  input: CancelServiceInstanceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelServiceInstanceDeployment",
  };
  let body: any;
  body = JSON.stringify(se_CancelServiceInstanceDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CancelServicePipelineDeploymentCommand
 */
export const se_CancelServicePipelineDeploymentCommand = async (
  input: CancelServicePipelineDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelServicePipelineDeployment",
  };
  let body: any;
  body = JSON.stringify(se_CancelServicePipelineDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateComponentCommand
 */
export const se_CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateComponent",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironment",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironmentAccountConnection",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(se_CreateEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateEnvironmentTemplateVersionCommand
 */
export const se_CreateEnvironmentTemplateVersionCommand = async (
  input: CreateEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironmentTemplateVersion",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(se_CreateRepositoryInput(input, context));
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
    "x-amz-target": "AwsProton20200720.CreateService",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateServiceInstance",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateServiceSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_CreateServiceSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceTemplateCommand
 */
export const se_CreateServiceTemplateCommand = async (
  input: CreateServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(se_CreateServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0CreateServiceTemplateVersionCommand
 */
export const se_CreateServiceTemplateVersionCommand = async (
  input: CreateServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateServiceTemplateVersion",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_CreateTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteComponent",
  };
  let body: any;
  body = JSON.stringify(se_DeleteComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentCommand
 */
export const se_DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironment",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentAccountConnectionCommand
 */
export const se_DeleteEnvironmentAccountConnectionCommand = async (
  input: DeleteEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentTemplateCommand
 */
export const se_DeleteEnvironmentTemplateCommand = async (
  input: DeleteEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteEnvironmentTemplateVersionCommand
 */
export const se_DeleteEnvironmentTemplateVersionCommand = async (
  input: DeleteEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(se_DeleteEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteRepository",
  };
  let body: any;
  body = JSON.stringify(se_DeleteRepositoryInput(input, context));
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
    "x-amz-target": "AwsProton20200720.DeleteService",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceSyncConfigCommand
 */
export const se_DeleteServiceSyncConfigCommand = async (
  input: DeleteServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteServiceSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceTemplateCommand
 */
export const se_DeleteServiceTemplateCommand = async (
  input: DeleteServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteServiceTemplateVersionCommand
 */
export const se_DeleteServiceTemplateVersionCommand = async (
  input: DeleteServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(se_DeleteServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0DeleteTemplateSyncConfigCommand
 */
export const se_DeleteTemplateSyncConfigCommand = async (
  input: DeleteTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_DeleteTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetAccountSettingsCommand
 */
export const se_GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetAccountSettings",
  };
  let body: any;
  body = JSON.stringify(se_GetAccountSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetComponent",
  };
  let body: any;
  body = JSON.stringify(se_GetComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentCommand
 */
export const se_GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironment",
  };
  let body: any;
  body = JSON.stringify(se_GetEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentAccountConnectionCommand
 */
export const se_GetEnvironmentAccountConnectionCommand = async (
  input: GetEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(se_GetEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentTemplateCommand
 */
export const se_GetEnvironmentTemplateCommand = async (
  input: GetEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetEnvironmentTemplateVersionCommand
 */
export const se_GetEnvironmentTemplateVersionCommand = async (
  input: GetEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(se_GetEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRepositoryCommand
 */
export const se_GetRepositoryCommand = async (
  input: GetRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetRepository",
  };
  let body: any;
  body = JSON.stringify(se_GetRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetRepositorySyncStatusCommand
 */
export const se_GetRepositorySyncStatusCommand = async (
  input: GetRepositorySyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetRepositorySyncStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetRepositorySyncStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetResourcesSummaryCommand
 */
export const se_GetResourcesSummaryCommand = async (
  input: GetResourcesSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetResourcesSummary",
  };
  let body: any;
  body = JSON.stringify(se_GetResourcesSummaryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceCommand
 */
export const se_GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetService",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceInstanceCommand
 */
export const se_GetServiceInstanceCommand = async (
  input: GetServiceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceInstance",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceInstanceSyncStatusCommand
 */
export const se_GetServiceInstanceSyncStatusCommand = async (
  input: GetServiceInstanceSyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceInstanceSyncStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceInstanceSyncStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceSyncBlockerSummaryCommand
 */
export const se_GetServiceSyncBlockerSummaryCommand = async (
  input: GetServiceSyncBlockerSummaryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceSyncBlockerSummary",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceSyncBlockerSummaryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceSyncConfigCommand
 */
export const se_GetServiceSyncConfigCommand = async (
  input: GetServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceTemplateCommand
 */
export const se_GetServiceTemplateCommand = async (
  input: GetServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetServiceTemplateVersionCommand
 */
export const se_GetServiceTemplateVersionCommand = async (
  input: GetServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(se_GetServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTemplateSyncConfigCommand
 */
export const se_GetTemplateSyncConfigCommand = async (
  input: GetTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_GetTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0GetTemplateSyncStatusCommand
 */
export const se_GetTemplateSyncStatusCommand = async (
  input: GetTemplateSyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetTemplateSyncStatus",
  };
  let body: any;
  body = JSON.stringify(se_GetTemplateSyncStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComponentOutputsCommand
 */
export const se_ListComponentOutputsCommand = async (
  input: ListComponentOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListComponentOutputs",
  };
  let body: any;
  body = JSON.stringify(se_ListComponentOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComponentProvisionedResourcesCommand
 */
export const se_ListComponentProvisionedResourcesCommand = async (
  input: ListComponentProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListComponentProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(se_ListComponentProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListComponents",
  };
  let body: any;
  body = JSON.stringify(se_ListComponentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentAccountConnectionsCommand
 */
export const se_ListEnvironmentAccountConnectionsCommand = async (
  input: ListEnvironmentAccountConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentAccountConnections",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentAccountConnectionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentOutputsCommand
 */
export const se_ListEnvironmentOutputsCommand = async (
  input: ListEnvironmentOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentOutputs",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentProvisionedResourcesCommand
 */
export const se_ListEnvironmentProvisionedResourcesCommand = async (
  input: ListEnvironmentProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentsCommand
 */
export const se_ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironments",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentTemplatesCommand
 */
export const se_ListEnvironmentTemplatesCommand = async (
  input: ListEnvironmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentTemplates",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentTemplatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListEnvironmentTemplateVersionsCommand
 */
export const se_ListEnvironmentTemplateVersionsCommand = async (
  input: ListEnvironmentTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentTemplateVersions",
  };
  let body: any;
  body = JSON.stringify(se_ListEnvironmentTemplateVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRepositoriesCommand
 */
export const se_ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListRepositories",
  };
  let body: any;
  body = JSON.stringify(se_ListRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListRepositorySyncDefinitionsCommand
 */
export const se_ListRepositorySyncDefinitionsCommand = async (
  input: ListRepositorySyncDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListRepositorySyncDefinitions",
  };
  let body: any;
  body = JSON.stringify(se_ListRepositorySyncDefinitionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceInstanceOutputsCommand
 */
export const se_ListServiceInstanceOutputsCommand = async (
  input: ListServiceInstanceOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceInstanceOutputs",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceInstanceOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand
 */
export const se_ListServiceInstanceProvisionedResourcesCommand = async (
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceInstanceProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceInstanceProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceInstancesCommand
 */
export const se_ListServiceInstancesCommand = async (
  input: ListServiceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceInstances",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServicePipelineOutputsCommand
 */
export const se_ListServicePipelineOutputsCommand = async (
  input: ListServicePipelineOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServicePipelineOutputs",
  };
  let body: any;
  body = JSON.stringify(se_ListServicePipelineOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServicePipelineProvisionedResourcesCommand
 */
export const se_ListServicePipelineProvisionedResourcesCommand = async (
  input: ListServicePipelineProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServicePipelineProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(se_ListServicePipelineProvisionedResourcesInput(input, context));
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
    "x-amz-target": "AwsProton20200720.ListServices",
  };
  let body: any;
  body = JSON.stringify(se_ListServicesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceTemplatesCommand
 */
export const se_ListServiceTemplatesCommand = async (
  input: ListServiceTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceTemplates",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceTemplatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0ListServiceTemplateVersionsCommand
 */
export const se_ListServiceTemplateVersionsCommand = async (
  input: ListServiceTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceTemplateVersions",
  };
  let body: any;
  body = JSON.stringify(se_ListServiceTemplateVersionsInput(input, context));
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
    "x-amz-target": "AwsProton20200720.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand
 */
export const se_NotifyResourceDeploymentStatusChangeCommand = async (
  input: NotifyResourceDeploymentStatusChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.NotifyResourceDeploymentStatusChange",
  };
  let body: any;
  body = JSON.stringify(se_NotifyResourceDeploymentStatusChangeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0RejectEnvironmentAccountConnectionCommand
 */
export const se_RejectEnvironmentAccountConnectionCommand = async (
  input: RejectEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.RejectEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(se_RejectEnvironmentAccountConnectionInput(input, context));
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
    "x-amz-target": "AwsProton20200720.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceInput(input, context));
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
    "x-amz-target": "AwsProton20200720.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateAccountSettingsCommand
 */
export const se_UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateAccountSettings",
  };
  let body: any;
  body = JSON.stringify(se_UpdateAccountSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateComponentCommand
 */
export const se_UpdateComponentCommand = async (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateComponent",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironment",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnvironmentTemplateCommand
 */
export const se_UpdateEnvironmentTemplateCommand = async (
  input: UpdateEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateEnvironmentTemplateVersionCommand
 */
export const se_UpdateEnvironmentTemplateVersionCommand = async (
  input: UpdateEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(se_UpdateEnvironmentTemplateVersionInput(input, context));
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
    "x-amz-target": "AwsProton20200720.UpdateService",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceInstance",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServicePipeline",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceSyncBlocker",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceSyncBlockerInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceSyncConfigCommand
 */
export const se_UpdateServiceSyncConfigCommand = async (
  input: UpdateServiceSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceTemplateCommand
 */
export const se_UpdateServiceTemplateCommand = async (
  input: UpdateServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateServiceTemplateVersionCommand
 */
export const se_UpdateServiceTemplateVersionCommand = async (
  input: UpdateServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(se_UpdateServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_0UpdateTemplateSyncConfigCommand
 */
export const se_UpdateTemplateSyncConfigCommand = async (
  input: UpdateTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(se_UpdateTemplateSyncConfigInput(input, context));
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateRepositoryOutput(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  contents = de_CreateServiceOutput(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateServiceSyncConfigOutput(data, context);
  const response: CreateServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CreateTemplateSyncConfigOutput(data, context);
  const response: CreateTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteRepositoryOutput(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  contents = de_DeleteServiceOutput(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteServiceSyncConfigOutput(data, context);
  const response: DeleteServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteTemplateSyncConfigOutput(data, context);
  const response: DeleteTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetAccountSettingsOutput(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetRepositoryOutput(data, context);
  const response: GetRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetResourcesSummaryOutput(data, context);
  const response: GetResourcesSummaryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetServiceSyncConfigOutput(data, context);
  const response: GetServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_GetTemplateSyncConfigOutput(data, context);
  const response: GetTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListComponentOutputsOutput(data, context);
  const response: ListComponentOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListComponentProvisionedResourcesOutput(data, context);
  const response: ListComponentProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListEnvironmentOutputsOutput(data, context);
  const response: ListEnvironmentOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListEnvironmentProvisionedResourcesOutput(data, context);
  const response: ListEnvironmentProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListRepositoriesOutput(data, context);
  const response: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListRepositorySyncDefinitionsOutput(data, context);
  const response: ListRepositorySyncDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListServiceInstanceOutputsOutput(data, context);
  const response: ListServiceInstanceOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListServiceInstanceProvisionedResourcesOutput(data, context);
  const response: ListServiceInstanceProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListServicePipelineOutputsOutput(data, context);
  const response: ListServicePipelineOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListServicePipelineProvisionedResourcesOutput(data, context);
  const response: ListServicePipelineProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
  contents = de_ListServicesOutput(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  contents = de_ListTagsForResourceOutput(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_NotifyResourceDeploymentStatusChangeOutput(data, context);
  const response: NotifyResourceDeploymentStatusChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  contents = de_TagResourceOutput(data, context);
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
  contents = de_UntagResourceOutput(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateAccountSettingsOutput(data, context);
  const response: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
  contents = de_UpdateServiceOutput(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateServiceSyncConfigOutput(data, context);
  const response: UpdateServiceSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UpdateTemplateSyncConfigOutput(data, context);
  const response: UpdateTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_AccessDeniedException(body, context);
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
  const deserialized: any = de_ConflictException(body, context);
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
  const deserialized: any = de_InternalServerException(body, context);
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
 * deserializeAws_json1_0ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = de_ThrottlingException(body, context);
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
  const deserialized: any = de_ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_0AcceptEnvironmentAccountConnectionInput
 */
const se_AcceptEnvironmentAccountConnectionInput = (
  input: AcceptEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0CancelComponentDeploymentInput
 */
const se_CancelComponentDeploymentInput = (input: CancelComponentDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
  };
};

/**
 * serializeAws_json1_0CancelEnvironmentDeploymentInput
 */
const se_CancelEnvironmentDeploymentInput = (input: CancelEnvironmentDeploymentInput, context: __SerdeContext): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
  };
};

/**
 * serializeAws_json1_0CancelServiceInstanceDeploymentInput
 */
const se_CancelServiceInstanceDeploymentInput = (
  input: CancelServiceInstanceDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0CancelServicePipelineDeploymentInput
 */
const se_CancelServicePipelineDeploymentInput = (
  input: CancelServicePipelineDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0CompatibleEnvironmentTemplateInput
 */
const se_CompatibleEnvironmentTemplateInput = (
  input: CompatibleEnvironmentTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0CompatibleEnvironmentTemplateInputList
 */
const se_CompatibleEnvironmentTemplateInputList = (
  input: CompatibleEnvironmentTemplateInput[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CompatibleEnvironmentTemplateInput(entry, context);
    });
};

/**
 * serializeAws_json1_0CreateComponentInput
 */
const se_CreateComponentInput = (input: CreateComponentInput, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.manifest != null && { manifest: input.manifest }),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.serviceSpec != null && { serviceSpec: input.serviceSpec }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.templateFile != null && { templateFile: input.templateFile }),
  };
};

/**
 * serializeAws_json1_0CreateEnvironmentAccountConnectionInput
 */
const se_CreateEnvironmentAccountConnectionInput = (
  input: CreateEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.codebuildRoleArn != null && { codebuildRoleArn: input.codebuildRoleArn }),
    ...(input.componentRoleArn != null && { componentRoleArn: input.componentRoleArn }),
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.managementAccountId != null && { managementAccountId: input.managementAccountId }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateEnvironmentInput
 */
const se_CreateEnvironmentInput = (input: CreateEnvironmentInput, context: __SerdeContext): any => {
  return {
    ...(input.codebuildRoleArn != null && { codebuildRoleArn: input.codebuildRoleArn }),
    ...(input.componentRoleArn != null && { componentRoleArn: input.componentRoleArn }),
    ...(input.description != null && { description: input.description }),
    ...(input.environmentAccountConnectionId != null && {
      environmentAccountConnectionId: input.environmentAccountConnectionId,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.protonServiceRoleArn != null && { protonServiceRoleArn: input.protonServiceRoleArn }),
    ...(input.provisioningRepository != null && {
      provisioningRepository: se_RepositoryBranchInput(input.provisioningRepository, context),
    }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0CreateEnvironmentTemplateInput
 */
const se_CreateEnvironmentTemplateInput = (input: CreateEnvironmentTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.name != null && { name: input.name }),
    ...(input.provisioning != null && { provisioning: input.provisioning }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateEnvironmentTemplateVersionInput
 */
const se_CreateEnvironmentTemplateVersionInput = (
  input: CreateEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.source != null && { source: se_TemplateVersionSourceInput(input.source, context) }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0CreateRepositoryInput
 */
const se_CreateRepositoryInput = (input: CreateRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.connectionArn != null && { connectionArn: input.connectionArn }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateServiceInput
 */
const se_CreateServiceInput = (input: CreateServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.repositoryConnectionArn != null && { repositoryConnectionArn: input.repositoryConnectionArn }),
    ...(input.repositoryId != null && { repositoryId: input.repositoryId }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0CreateServiceInstanceInput
 */
const se_CreateServiceInstanceInput = (input: CreateServiceInstanceInput, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

/**
 * serializeAws_json1_0CreateServiceSyncConfigInput
 */
const se_CreateServiceSyncConfigInput = (input: CreateServiceSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0CreateServiceTemplateInput
 */
const se_CreateServiceTemplateInput = (input: CreateServiceTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.name != null && { name: input.name }),
    ...(input.pipelineProvisioning != null && { pipelineProvisioning: input.pipelineProvisioning }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0CreateServiceTemplateVersionInput
 */
const se_CreateServiceTemplateVersionInput = (
  input: CreateServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.compatibleEnvironmentTemplates != null && {
      compatibleEnvironmentTemplates: se_CompatibleEnvironmentTemplateInputList(
        input.compatibleEnvironmentTemplates,
        context
      ),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.source != null && { source: se_TemplateVersionSourceInput(input.source, context) }),
    ...(input.supportedComponentSources != null && {
      supportedComponentSources: se_ServiceTemplateSupportedComponentSourceInputList(
        input.supportedComponentSources,
        context
      ),
    }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0CreateTemplateSyncConfigInput
 */
const se_CreateTemplateSyncConfigInput = (input: CreateTemplateSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.subdirectory != null && { subdirectory: input.subdirectory }),
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

/**
 * serializeAws_json1_0DeleteComponentInput
 */
const se_DeleteComponentInput = (input: DeleteComponentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteEnvironmentAccountConnectionInput
 */
const se_DeleteEnvironmentAccountConnectionInput = (
  input: DeleteEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0DeleteEnvironmentInput
 */
const se_DeleteEnvironmentInput = (input: DeleteEnvironmentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteEnvironmentTemplateInput
 */
const se_DeleteEnvironmentTemplateInput = (input: DeleteEnvironmentTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteEnvironmentTemplateVersionInput
 */
const se_DeleteEnvironmentTemplateVersionInput = (
  input: DeleteEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0DeleteRepositoryInput
 */
const se_DeleteRepositoryInput = (input: DeleteRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
  };
};

/**
 * serializeAws_json1_0DeleteServiceInput
 */
const se_DeleteServiceInput = (input: DeleteServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteServiceSyncConfigInput
 */
const se_DeleteServiceSyncConfigInput = (input: DeleteServiceSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0DeleteServiceTemplateInput
 */
const se_DeleteServiceTemplateInput = (input: DeleteServiceTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0DeleteServiceTemplateVersionInput
 */
const se_DeleteServiceTemplateVersionInput = (
  input: DeleteServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0DeleteTemplateSyncConfigInput
 */
const se_DeleteTemplateSyncConfigInput = (input: DeleteTemplateSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

/**
 * serializeAws_json1_0EnvironmentAccountConnectionStatusList
 */
const se_EnvironmentAccountConnectionStatusList = (
  input: (EnvironmentAccountConnectionStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_0EnvironmentTemplateFilter
 */
const se_EnvironmentTemplateFilter = (input: EnvironmentTemplateFilter, context: __SerdeContext): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0EnvironmentTemplateFilterList
 */
const se_EnvironmentTemplateFilterList = (input: EnvironmentTemplateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EnvironmentTemplateFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0GetAccountSettingsInput
 */
const se_GetAccountSettingsInput = (input: GetAccountSettingsInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetComponentInput
 */
const se_GetComponentInput = (input: GetComponentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetEnvironmentAccountConnectionInput
 */
const se_GetEnvironmentAccountConnectionInput = (
  input: GetEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0GetEnvironmentInput
 */
const se_GetEnvironmentInput = (input: GetEnvironmentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetEnvironmentTemplateInput
 */
const se_GetEnvironmentTemplateInput = (input: GetEnvironmentTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetEnvironmentTemplateVersionInput
 */
const se_GetEnvironmentTemplateVersionInput = (
  input: GetEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0GetRepositoryInput
 */
const se_GetRepositoryInput = (input: GetRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
  };
};

/**
 * serializeAws_json1_0GetRepositorySyncStatusInput
 */
const se_GetRepositorySyncStatusInput = (input: GetRepositorySyncStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.syncType != null && { syncType: input.syncType }),
  };
};

/**
 * serializeAws_json1_0GetResourcesSummaryInput
 */
const se_GetResourcesSummaryInput = (input: GetResourcesSummaryInput, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_json1_0GetServiceInput
 */
const se_GetServiceInput = (input: GetServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetServiceInstanceInput
 */
const se_GetServiceInstanceInput = (input: GetServiceInstanceInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0GetServiceInstanceSyncStatusInput
 */
const se_GetServiceInstanceSyncStatusInput = (
  input: GetServiceInstanceSyncStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0GetServiceSyncBlockerSummaryInput
 */
const se_GetServiceSyncBlockerSummaryInput = (
  input: GetServiceSyncBlockerSummaryInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0GetServiceSyncConfigInput
 */
const se_GetServiceSyncConfigInput = (input: GetServiceSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0GetServiceTemplateInput
 */
const se_GetServiceTemplateInput = (input: GetServiceTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0GetServiceTemplateVersionInput
 */
const se_GetServiceTemplateVersionInput = (input: GetServiceTemplateVersionInput, context: __SerdeContext): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0GetTemplateSyncConfigInput
 */
const se_GetTemplateSyncConfigInput = (input: GetTemplateSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

/**
 * serializeAws_json1_0GetTemplateSyncStatusInput
 */
const se_GetTemplateSyncStatusInput = (input: GetTemplateSyncStatusInput, context: __SerdeContext): any => {
  return {
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
    ...(input.templateVersion != null && { templateVersion: input.templateVersion }),
  };
};

/**
 * serializeAws_json1_0ListComponentOutputsInput
 */
const se_ListComponentOutputsInput = (input: ListComponentOutputsInput, context: __SerdeContext): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListComponentProvisionedResourcesInput
 */
const se_ListComponentProvisionedResourcesInput = (
  input: ListComponentProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListComponentsInput
 */
const se_ListComponentsInput = (input: ListComponentsInput, context: __SerdeContext): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0ListEnvironmentAccountConnectionsInput
 */
const se_ListEnvironmentAccountConnectionsInput = (
  input: ListEnvironmentAccountConnectionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.requestedBy != null && { requestedBy: input.requestedBy }),
    ...(input.statuses != null && { statuses: se_EnvironmentAccountConnectionStatusList(input.statuses, context) }),
  };
};

/**
 * serializeAws_json1_0ListEnvironmentOutputsInput
 */
const se_ListEnvironmentOutputsInput = (input: ListEnvironmentOutputsInput, context: __SerdeContext): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListEnvironmentProvisionedResourcesInput
 */
const se_ListEnvironmentProvisionedResourcesInput = (
  input: ListEnvironmentProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListEnvironmentsInput
 */
const se_ListEnvironmentsInput = (input: ListEnvironmentsInput, context: __SerdeContext): any => {
  return {
    ...(input.environmentTemplates != null && {
      environmentTemplates: se_EnvironmentTemplateFilterList(input.environmentTemplates, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListEnvironmentTemplatesInput
 */
const se_ListEnvironmentTemplatesInput = (input: ListEnvironmentTemplatesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListEnvironmentTemplateVersionsInput
 */
const se_ListEnvironmentTemplateVersionsInput = (
  input: ListEnvironmentTemplateVersionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0ListRepositoriesInput
 */
const se_ListRepositoriesInput = (input: ListRepositoriesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListRepositorySyncDefinitionsInput
 */
const se_ListRepositorySyncDefinitionsInput = (
  input: ListRepositorySyncDefinitionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.syncType != null && { syncType: input.syncType }),
  };
};

/**
 * serializeAws_json1_0ListServiceInstanceOutputsInput
 */
const se_ListServiceInstanceOutputsInput = (input: ListServiceInstanceOutputsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0ListServiceInstanceProvisionedResourcesInput
 */
const se_ListServiceInstanceProvisionedResourcesInput = (
  input: ListServiceInstanceProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0ListServiceInstancesFilter
 */
const se_ListServiceInstancesFilter = (input: ListServiceInstancesFilter, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_json1_0ListServiceInstancesFilterList
 */
const se_ListServiceInstancesFilterList = (input: ListServiceInstancesFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ListServiceInstancesFilter(entry, context);
    });
};

/**
 * serializeAws_json1_0ListServiceInstancesInput
 */
const se_ListServiceInstancesInput = (input: ListServiceInstancesInput, context: __SerdeContext): any => {
  return {
    ...(input.filters != null && { filters: se_ListServiceInstancesFilterList(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

/**
 * serializeAws_json1_0ListServicePipelineOutputsInput
 */
const se_ListServicePipelineOutputsInput = (input: ListServicePipelineOutputsInput, context: __SerdeContext): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0ListServicePipelineProvisionedResourcesInput
 */
const se_ListServicePipelineProvisionedResourcesInput = (
  input: ListServicePipelineProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0ListServicesInput
 */
const se_ListServicesInput = (input: ListServicesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListServiceTemplatesInput
 */
const se_ListServiceTemplatesInput = (input: ListServiceTemplatesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

/**
 * serializeAws_json1_0ListServiceTemplateVersionsInput
 */
const se_ListServiceTemplateVersionsInput = (input: ListServiceTemplateVersionsInput, context: __SerdeContext): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0ListTagsForResourceInput
 */
const se_ListTagsForResourceInput = (input: ListTagsForResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

/**
 * serializeAws_json1_0NotifyResourceDeploymentStatusChangeInput
 */
const se_NotifyResourceDeploymentStatusChangeInput = (
  input: NotifyResourceDeploymentStatusChangeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.outputs != null && { outputs: se_OutputsList(input.outputs, context) }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.status != null && { status: input.status }),
    ...(input.statusMessage != null && { statusMessage: input.statusMessage }),
  };
};

/**
 * serializeAws_json1_0Output
 */
const se_Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.valueString != null && { valueString: input.valueString }),
  };
};

/**
 * serializeAws_json1_0OutputsList
 */
const se_OutputsList = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Output(entry, context);
    });
};

/**
 * serializeAws_json1_0RejectEnvironmentAccountConnectionInput
 */
const se_RejectEnvironmentAccountConnectionInput = (
  input: RejectEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

/**
 * serializeAws_json1_0RepositoryBranchInput
 */
const se_RepositoryBranchInput = (input: RepositoryBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
  };
};

/**
 * serializeAws_json1_0S3ObjectSource
 */
const se_S3ObjectSource = (input: S3ObjectSource, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
  };
};

/**
 * serializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList
 */
const se_ServiceTemplateSupportedComponentSourceInputList = (
  input: (ServiceTemplateSupportedComponentSourceType | string)[],
  context: __SerdeContext
): any => {
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
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
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
 * serializeAws_json1_0TagResourceInput
 */
const se_TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: se_TagList(input.tags, context) }),
  };
};

/**
 * serializeAws_json1_0TemplateVersionSourceInput
 */
const se_TemplateVersionSourceInput = (input: TemplateVersionSourceInput, context: __SerdeContext): any => {
  return TemplateVersionSourceInput.visit(input, {
    s3: (value) => ({ s3: se_S3ObjectSource(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

/**
 * serializeAws_json1_0UntagResourceInput
 */
const se_UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: se_TagKeyList(input.tagKeys, context) }),
  };
};

/**
 * serializeAws_json1_0UpdateAccountSettingsInput
 */
const se_UpdateAccountSettingsInput = (input: UpdateAccountSettingsInput, context: __SerdeContext): any => {
  return {
    ...(input.deletePipelineProvisioningRepository != null && {
      deletePipelineProvisioningRepository: input.deletePipelineProvisioningRepository,
    }),
    ...(input.pipelineCodebuildRoleArn != null && { pipelineCodebuildRoleArn: input.pipelineCodebuildRoleArn }),
    ...(input.pipelineProvisioningRepository != null && {
      pipelineProvisioningRepository: se_RepositoryBranchInput(input.pipelineProvisioningRepository, context),
    }),
    ...(input.pipelineServiceRoleArn != null && { pipelineServiceRoleArn: input.pipelineServiceRoleArn }),
  };
};

/**
 * serializeAws_json1_0UpdateComponentInput
 */
const se_UpdateComponentInput = (input: UpdateComponentInput, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.serviceSpec != null && { serviceSpec: input.serviceSpec }),
    ...(input.templateFile != null && { templateFile: input.templateFile }),
  };
};

/**
 * serializeAws_json1_0UpdateEnvironmentAccountConnectionInput
 */
const se_UpdateEnvironmentAccountConnectionInput = (
  input: UpdateEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.codebuildRoleArn != null && { codebuildRoleArn: input.codebuildRoleArn }),
    ...(input.componentRoleArn != null && { componentRoleArn: input.componentRoleArn }),
    ...(input.id != null && { id: input.id }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_json1_0UpdateEnvironmentInput
 */
const se_UpdateEnvironmentInput = (input: UpdateEnvironmentInput, context: __SerdeContext): any => {
  return {
    ...(input.codebuildRoleArn != null && { codebuildRoleArn: input.codebuildRoleArn }),
    ...(input.componentRoleArn != null && { componentRoleArn: input.componentRoleArn }),
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.description != null && { description: input.description }),
    ...(input.environmentAccountConnectionId != null && {
      environmentAccountConnectionId: input.environmentAccountConnectionId,
    }),
    ...(input.name != null && { name: input.name }),
    ...(input.protonServiceRoleArn != null && { protonServiceRoleArn: input.protonServiceRoleArn }),
    ...(input.provisioningRepository != null && {
      provisioningRepository: se_RepositoryBranchInput(input.provisioningRepository, context),
    }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

/**
 * serializeAws_json1_0UpdateEnvironmentTemplateInput
 */
const se_UpdateEnvironmentTemplateInput = (input: UpdateEnvironmentTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0UpdateEnvironmentTemplateVersionInput
 */
const se_UpdateEnvironmentTemplateVersionInput = (
  input: UpdateEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.status != null && { status: input.status }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceInput
 */
const se_UpdateServiceInput = (input: UpdateServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.spec != null && { spec: input.spec }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceInstanceInput
 */
const se_UpdateServiceInstanceInput = (input: UpdateServiceInstanceInput, context: __SerdeContext): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

/**
 * serializeAws_json1_0UpdateServicePipelineInput
 */
const se_UpdateServicePipelineInput = (input: UpdateServicePipelineInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceSyncBlockerInput
 */
const se_UpdateServiceSyncBlockerInput = (input: UpdateServiceSyncBlockerInput, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.resolvedReason != null && { resolvedReason: input.resolvedReason }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceSyncConfigInput
 */
const se_UpdateServiceSyncConfigInput = (input: UpdateServiceSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.filePath != null && { filePath: input.filePath }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceTemplateInput
 */
const se_UpdateServiceTemplateInput = (input: UpdateServiceTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_json1_0UpdateServiceTemplateVersionInput
 */
const se_UpdateServiceTemplateVersionInput = (
  input: UpdateServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.compatibleEnvironmentTemplates != null && {
      compatibleEnvironmentTemplates: se_CompatibleEnvironmentTemplateInputList(
        input.compatibleEnvironmentTemplates,
        context
      ),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.status != null && { status: input.status }),
    ...(input.supportedComponentSources != null && {
      supportedComponentSources: se_ServiceTemplateSupportedComponentSourceInputList(
        input.supportedComponentSources,
        context
      ),
    }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

/**
 * serializeAws_json1_0UpdateTemplateSyncConfigInput
 */
const se_UpdateTemplateSyncConfigInput = (input: UpdateTemplateSyncConfigInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.subdirectory != null && { subdirectory: input.subdirectory }),
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

/**
 * deserializeAws_json1_0AcceptEnvironmentAccountConnectionOutput
 */
const de_AcceptEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): AcceptEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? de_EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0AccessDeniedException
 */
const de_AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0AccountSettings
 */
const de_AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    pipelineCodebuildRoleArn: __expectString(output.pipelineCodebuildRoleArn),
    pipelineProvisioningRepository:
      output.pipelineProvisioningRepository != null
        ? de_RepositoryBranch(output.pipelineProvisioningRepository, context)
        : undefined,
    pipelineServiceRoleArn: __expectString(output.pipelineServiceRoleArn),
  } as any;
};

/**
 * deserializeAws_json1_0CancelComponentDeploymentOutput
 */
const de_CancelComponentDeploymentOutput = (output: any, context: __SerdeContext): CancelComponentDeploymentOutput => {
  return {
    component: output.component != null ? de_Component(output.component, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CancelEnvironmentDeploymentOutput
 */
const de_CancelEnvironmentDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelEnvironmentDeploymentOutput => {
  return {
    environment: output.environment != null ? de_Environment(output.environment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CancelServiceInstanceDeploymentOutput
 */
const de_CancelServiceInstanceDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelServiceInstanceDeploymentOutput => {
  return {
    serviceInstance: output.serviceInstance != null ? de_ServiceInstance(output.serviceInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CancelServicePipelineDeploymentOutput
 */
const de_CancelServicePipelineDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelServicePipelineDeploymentOutput => {
  return {
    pipeline: output.pipeline != null ? de_ServicePipeline(output.pipeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CompatibleEnvironmentTemplate
 */
const de_CompatibleEnvironmentTemplate = (output: any, context: __SerdeContext): CompatibleEnvironmentTemplate => {
  return {
    majorVersion: __expectString(output.majorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0CompatibleEnvironmentTemplateList
 */
const de_CompatibleEnvironmentTemplateList = (
  output: any,
  context: __SerdeContext
): CompatibleEnvironmentTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CompatibleEnvironmentTemplate(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    description: __expectString(output.description),
    environmentName: __expectString(output.environmentName),
    lastClientRequestToken: __expectString(output.lastClientRequestToken),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    serviceInstanceName: __expectString(output.serviceInstanceName),
    serviceName: __expectString(output.serviceName),
    serviceSpec: __expectString(output.serviceSpec),
  } as any;
};

/**
 * deserializeAws_json1_0ComponentSummary
 */
const de_ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    environmentName: __expectString(output.environmentName),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    serviceInstanceName: __expectString(output.serviceInstanceName),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_json1_0ComponentSummaryList
 */
const de_ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ConflictException
 */
const de_ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0CountsSummary
 */
const de_CountsSummary = (output: any, context: __SerdeContext): CountsSummary => {
  return {
    components: output.components != null ? de_ResourceCountsSummary(output.components, context) : undefined,
    environmentTemplates:
      output.environmentTemplates != null ? de_ResourceCountsSummary(output.environmentTemplates, context) : undefined,
    environments: output.environments != null ? de_ResourceCountsSummary(output.environments, context) : undefined,
    pipelines: output.pipelines != null ? de_ResourceCountsSummary(output.pipelines, context) : undefined,
    serviceInstances:
      output.serviceInstances != null ? de_ResourceCountsSummary(output.serviceInstances, context) : undefined,
    serviceTemplates:
      output.serviceTemplates != null ? de_ResourceCountsSummary(output.serviceTemplates, context) : undefined,
    services: output.services != null ? de_ResourceCountsSummary(output.services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateComponentOutput
 */
const de_CreateComponentOutput = (output: any, context: __SerdeContext): CreateComponentOutput => {
  return {
    component: output.component != null ? de_Component(output.component, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentAccountConnectionOutput
 */
const de_CreateEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? de_EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentOutput
 */
const de_CreateEnvironmentOutput = (output: any, context: __SerdeContext): CreateEnvironmentOutput => {
  return {
    environment: output.environment != null ? de_Environment(output.environment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentTemplateOutput
 */
const de_CreateEnvironmentTemplateOutput = (output: any, context: __SerdeContext): CreateEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null ? de_EnvironmentTemplate(output.environmentTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateEnvironmentTemplateVersionOutput
 */
const de_CreateEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? de_EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateRepositoryOutput
 */
const de_CreateRepositoryOutput = (output: any, context: __SerdeContext): CreateRepositoryOutput => {
  return {
    repository: output.repository != null ? de_Repository(output.repository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateServiceInstanceOutput
 */
const de_CreateServiceInstanceOutput = (output: any, context: __SerdeContext): CreateServiceInstanceOutput => {
  return {
    serviceInstance: output.serviceInstance != null ? de_ServiceInstance(output.serviceInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateServiceOutput
 */
const de_CreateServiceOutput = (output: any, context: __SerdeContext): CreateServiceOutput => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateServiceSyncConfigOutput
 */
const de_CreateServiceSyncConfigOutput = (output: any, context: __SerdeContext): CreateServiceSyncConfigOutput => {
  return {
    serviceSyncConfig:
      output.serviceSyncConfig != null ? de_ServiceSyncConfig(output.serviceSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateServiceTemplateOutput
 */
const de_CreateServiceTemplateOutput = (output: any, context: __SerdeContext): CreateServiceTemplateOutput => {
  return {
    serviceTemplate: output.serviceTemplate != null ? de_ServiceTemplate(output.serviceTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateServiceTemplateVersionOutput
 */
const de_CreateServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): CreateServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? de_ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0CreateTemplateSyncConfigOutput
 */
const de_CreateTemplateSyncConfigOutput = (output: any, context: __SerdeContext): CreateTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null ? de_TemplateSyncConfig(output.templateSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteComponentOutput
 */
const de_DeleteComponentOutput = (output: any, context: __SerdeContext): DeleteComponentOutput => {
  return {
    component: output.component != null ? de_Component(output.component, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentAccountConnectionOutput
 */
const de_DeleteEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? de_EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentOutput
 */
const de_DeleteEnvironmentOutput = (output: any, context: __SerdeContext): DeleteEnvironmentOutput => {
  return {
    environment: output.environment != null ? de_Environment(output.environment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentTemplateOutput
 */
const de_DeleteEnvironmentTemplateOutput = (output: any, context: __SerdeContext): DeleteEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null ? de_EnvironmentTemplate(output.environmentTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteEnvironmentTemplateVersionOutput
 */
const de_DeleteEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? de_EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteRepositoryOutput
 */
const de_DeleteRepositoryOutput = (output: any, context: __SerdeContext): DeleteRepositoryOutput => {
  return {
    repository: output.repository != null ? de_Repository(output.repository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteServiceOutput
 */
const de_DeleteServiceOutput = (output: any, context: __SerdeContext): DeleteServiceOutput => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteServiceSyncConfigOutput
 */
const de_DeleteServiceSyncConfigOutput = (output: any, context: __SerdeContext): DeleteServiceSyncConfigOutput => {
  return {
    serviceSyncConfig:
      output.serviceSyncConfig != null ? de_ServiceSyncConfig(output.serviceSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteServiceTemplateOutput
 */
const de_DeleteServiceTemplateOutput = (output: any, context: __SerdeContext): DeleteServiceTemplateOutput => {
  return {
    serviceTemplate: output.serviceTemplate != null ? de_ServiceTemplate(output.serviceTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteServiceTemplateVersionOutput
 */
const de_DeleteServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): DeleteServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? de_ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0DeleteTemplateSyncConfigOutput
 */
const de_DeleteTemplateSyncConfigOutput = (output: any, context: __SerdeContext): DeleteTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null ? de_TemplateSyncConfig(output.templateSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Environment
 */
const de_Environment = (output: any, context: __SerdeContext): Environment => {
  return {
    arn: __expectString(output.arn),
    codebuildRoleArn: __expectString(output.codebuildRoleArn),
    componentRoleArn: __expectString(output.componentRoleArn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    description: __expectString(output.description),
    environmentAccountConnectionId: __expectString(output.environmentAccountConnectionId),
    environmentAccountId: __expectString(output.environmentAccountId),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    name: __expectString(output.name),
    protonServiceRoleArn: __expectString(output.protonServiceRoleArn),
    provisioning: __expectString(output.provisioning),
    provisioningRepository:
      output.provisioningRepository != null ? de_RepositoryBranch(output.provisioningRepository, context) : undefined,
    spec: __expectString(output.spec),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0EnvironmentAccountConnection
 */
const de_EnvironmentAccountConnection = (output: any, context: __SerdeContext): EnvironmentAccountConnection => {
  return {
    arn: __expectString(output.arn),
    codebuildRoleArn: __expectString(output.codebuildRoleArn),
    componentRoleArn: __expectString(output.componentRoleArn),
    environmentAccountId: __expectString(output.environmentAccountId),
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    managementAccountId: __expectString(output.managementAccountId),
    requestedAt:
      output.requestedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestedAt)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0EnvironmentAccountConnectionSummary
 */
const de_EnvironmentAccountConnectionSummary = (
  output: any,
  context: __SerdeContext
): EnvironmentAccountConnectionSummary => {
  return {
    arn: __expectString(output.arn),
    componentRoleArn: __expectString(output.componentRoleArn),
    environmentAccountId: __expectString(output.environmentAccountId),
    environmentName: __expectString(output.environmentName),
    id: __expectString(output.id),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    managementAccountId: __expectString(output.managementAccountId),
    requestedAt:
      output.requestedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.requestedAt)))
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentAccountConnectionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EnvironmentSummary
 */
const de_EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
  return {
    arn: __expectString(output.arn),
    componentRoleArn: __expectString(output.componentRoleArn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    description: __expectString(output.description),
    environmentAccountConnectionId: __expectString(output.environmentAccountConnectionId),
    environmentAccountId: __expectString(output.environmentAccountId),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    name: __expectString(output.name),
    protonServiceRoleArn: __expectString(output.protonServiceRoleArn),
    provisioning: __expectString(output.provisioning),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0EnvironmentSummaryList
 */
const de_EnvironmentSummaryList = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EnvironmentTemplate
 */
const de_EnvironmentTemplate = (output: any, context: __SerdeContext): EnvironmentTemplate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    encryptionKey: __expectString(output.encryptionKey),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    provisioning: __expectString(output.provisioning),
    recommendedVersion: __expectString(output.recommendedVersion),
  } as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateSummary
 */
const de_EnvironmentTemplateSummary = (output: any, context: __SerdeContext): EnvironmentTemplateSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    provisioning: __expectString(output.provisioning),
    recommendedVersion: __expectString(output.recommendedVersion),
  } as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateSummaryList
 */
const de_EnvironmentTemplateSummaryList = (output: any, context: __SerdeContext): EnvironmentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateVersion
 */
const de_EnvironmentTemplateVersion = (output: any, context: __SerdeContext): EnvironmentTemplateVersion => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    majorVersion: __expectString(output.majorVersion),
    minorVersion: __expectString(output.minorVersion),
    recommendedMinorVersion: __expectString(output.recommendedMinorVersion),
    schema: __expectString(output.schema),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0EnvironmentTemplateVersionSummary
 */
const de_EnvironmentTemplateVersionSummary = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateVersionSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    majorVersion: __expectString(output.majorVersion),
    minorVersion: __expectString(output.minorVersion),
    recommendedMinorVersion: __expectString(output.recommendedMinorVersion),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateName: __expectString(output.templateName),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_EnvironmentTemplateVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0GetAccountSettingsOutput
 */
const de_GetAccountSettingsOutput = (output: any, context: __SerdeContext): GetAccountSettingsOutput => {
  return {
    accountSettings: output.accountSettings != null ? de_AccountSettings(output.accountSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetComponentOutput
 */
const de_GetComponentOutput = (output: any, context: __SerdeContext): GetComponentOutput => {
  return {
    component: output.component != null ? de_Component(output.component, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentAccountConnectionOutput
 */
const de_GetEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? de_EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentOutput
 */
const de_GetEnvironmentOutput = (output: any, context: __SerdeContext): GetEnvironmentOutput => {
  return {
    environment: output.environment != null ? de_Environment(output.environment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentTemplateOutput
 */
const de_GetEnvironmentTemplateOutput = (output: any, context: __SerdeContext): GetEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null ? de_EnvironmentTemplate(output.environmentTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetEnvironmentTemplateVersionOutput
 */
const de_GetEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? de_EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetRepositoryOutput
 */
const de_GetRepositoryOutput = (output: any, context: __SerdeContext): GetRepositoryOutput => {
  return {
    repository: output.repository != null ? de_Repository(output.repository, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetRepositorySyncStatusOutput
 */
const de_GetRepositorySyncStatusOutput = (output: any, context: __SerdeContext): GetRepositorySyncStatusOutput => {
  return {
    latestSync: output.latestSync != null ? de_RepositorySyncAttempt(output.latestSync, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetResourcesSummaryOutput
 */
const de_GetResourcesSummaryOutput = (output: any, context: __SerdeContext): GetResourcesSummaryOutput => {
  return {
    counts: output.counts != null ? de_CountsSummary(output.counts, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceInstanceOutput
 */
const de_GetServiceInstanceOutput = (output: any, context: __SerdeContext): GetServiceInstanceOutput => {
  return {
    serviceInstance: output.serviceInstance != null ? de_ServiceInstance(output.serviceInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceInstanceSyncStatusOutput
 */
const de_GetServiceInstanceSyncStatusOutput = (
  output: any,
  context: __SerdeContext
): GetServiceInstanceSyncStatusOutput => {
  return {
    desiredState: output.desiredState != null ? de_Revision(output.desiredState, context) : undefined,
    latestSuccessfulSync:
      output.latestSuccessfulSync != null ? de_ResourceSyncAttempt(output.latestSuccessfulSync, context) : undefined,
    latestSync: output.latestSync != null ? de_ResourceSyncAttempt(output.latestSync, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceOutput
 */
const de_GetServiceOutput = (output: any, context: __SerdeContext): GetServiceOutput => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceSyncBlockerSummaryOutput
 */
const de_GetServiceSyncBlockerSummaryOutput = (
  output: any,
  context: __SerdeContext
): GetServiceSyncBlockerSummaryOutput => {
  return {
    serviceSyncBlockerSummary:
      output.serviceSyncBlockerSummary != null
        ? de_ServiceSyncBlockerSummary(output.serviceSyncBlockerSummary, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceSyncConfigOutput
 */
const de_GetServiceSyncConfigOutput = (output: any, context: __SerdeContext): GetServiceSyncConfigOutput => {
  return {
    serviceSyncConfig:
      output.serviceSyncConfig != null ? de_ServiceSyncConfig(output.serviceSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceTemplateOutput
 */
const de_GetServiceTemplateOutput = (output: any, context: __SerdeContext): GetServiceTemplateOutput => {
  return {
    serviceTemplate: output.serviceTemplate != null ? de_ServiceTemplate(output.serviceTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetServiceTemplateVersionOutput
 */
const de_GetServiceTemplateVersionOutput = (output: any, context: __SerdeContext): GetServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? de_ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetTemplateSyncConfigOutput
 */
const de_GetTemplateSyncConfigOutput = (output: any, context: __SerdeContext): GetTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null ? de_TemplateSyncConfig(output.templateSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0GetTemplateSyncStatusOutput
 */
const de_GetTemplateSyncStatusOutput = (output: any, context: __SerdeContext): GetTemplateSyncStatusOutput => {
  return {
    desiredState: output.desiredState != null ? de_Revision(output.desiredState, context) : undefined,
    latestSuccessfulSync:
      output.latestSuccessfulSync != null ? de_ResourceSyncAttempt(output.latestSuccessfulSync, context) : undefined,
    latestSync: output.latestSync != null ? de_ResourceSyncAttempt(output.latestSync, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0InternalServerException
 */
const de_InternalServerException = (output: any, context: __SerdeContext): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0LatestSyncBlockers
 */
const de_LatestSyncBlockers = (output: any, context: __SerdeContext): SyncBlocker[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SyncBlocker(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ListComponentOutputsOutput
 */
const de_ListComponentOutputsOutput = (output: any, context: __SerdeContext): ListComponentOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? de_OutputsList(output.outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListComponentProvisionedResourcesOutput
 */
const de_ListComponentProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListComponentProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? de_ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListComponentsOutput
 */
const de_ListComponentsOutput = (output: any, context: __SerdeContext): ListComponentsOutput => {
  return {
    components: output.components != null ? de_ComponentSummaryList(output.components, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentAccountConnectionsOutput
 */
const de_ListEnvironmentAccountConnectionsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentAccountConnectionsOutput => {
  return {
    environmentAccountConnections:
      output.environmentAccountConnections != null
        ? de_EnvironmentAccountConnectionSummaryList(output.environmentAccountConnections, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentOutputsOutput
 */
const de_ListEnvironmentOutputsOutput = (output: any, context: __SerdeContext): ListEnvironmentOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? de_OutputsList(output.outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentProvisionedResourcesOutput
 */
const de_ListEnvironmentProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? de_ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentsOutput
 */
const de_ListEnvironmentsOutput = (output: any, context: __SerdeContext): ListEnvironmentsOutput => {
  return {
    environments: output.environments != null ? de_EnvironmentSummaryList(output.environments, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentTemplatesOutput
 */
const de_ListEnvironmentTemplatesOutput = (output: any, context: __SerdeContext): ListEnvironmentTemplatesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templates: output.templates != null ? de_EnvironmentTemplateSummaryList(output.templates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListEnvironmentTemplateVersionsOutput
 */
const de_ListEnvironmentTemplateVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentTemplateVersionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templateVersions:
      output.templateVersions != null
        ? de_EnvironmentTemplateVersionSummaryList(output.templateVersions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListRepositoriesOutput
 */
const de_ListRepositoriesOutput = (output: any, context: __SerdeContext): ListRepositoriesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories: output.repositories != null ? de_RepositorySummaryList(output.repositories, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListRepositorySyncDefinitionsOutput
 */
const de_ListRepositorySyncDefinitionsOutput = (
  output: any,
  context: __SerdeContext
): ListRepositorySyncDefinitionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    syncDefinitions:
      output.syncDefinitions != null ? de_RepositorySyncDefinitionList(output.syncDefinitions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServiceInstanceOutputsOutput
 */
const de_ListServiceInstanceOutputsOutput = (
  output: any,
  context: __SerdeContext
): ListServiceInstanceOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? de_OutputsList(output.outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServiceInstanceProvisionedResourcesOutput
 */
const de_ListServiceInstanceProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListServiceInstanceProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? de_ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServiceInstancesOutput
 */
const de_ListServiceInstancesOutput = (output: any, context: __SerdeContext): ListServiceInstancesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    serviceInstances:
      output.serviceInstances != null ? de_ServiceInstanceSummaryList(output.serviceInstances, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServicePipelineOutputsOutput
 */
const de_ListServicePipelineOutputsOutput = (
  output: any,
  context: __SerdeContext
): ListServicePipelineOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? de_OutputsList(output.outputs, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServicePipelineProvisionedResourcesOutput
 */
const de_ListServicePipelineProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListServicePipelineProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? de_ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServicesOutput
 */
const de_ListServicesOutput = (output: any, context: __SerdeContext): ListServicesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    services: output.services != null ? de_ServiceSummaryList(output.services, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServiceTemplatesOutput
 */
const de_ListServiceTemplatesOutput = (output: any, context: __SerdeContext): ListServiceTemplatesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templates: output.templates != null ? de_ServiceTemplateSummaryList(output.templates, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListServiceTemplateVersionsOutput
 */
const de_ListServiceTemplateVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListServiceTemplateVersionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templateVersions:
      output.templateVersions != null
        ? de_ServiceTemplateVersionSummaryList(output.templateVersions, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ListTagsForResourceOutput
 */
const de_ListTagsForResourceOutput = (output: any, context: __SerdeContext): ListTagsForResourceOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? de_TagList(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0NotifyResourceDeploymentStatusChangeOutput
 */
const de_NotifyResourceDeploymentStatusChangeOutput = (
  output: any,
  context: __SerdeContext
): NotifyResourceDeploymentStatusChangeOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0Output
 */
const de_Output = (output: any, context: __SerdeContext): Output => {
  return {
    key: __expectString(output.key),
    valueString: __expectString(output.valueString),
  } as any;
};

/**
 * deserializeAws_json1_0OutputsList
 */
const de_OutputsList = (output: any, context: __SerdeContext): Output[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Output(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ProvisionedResource
 */
const de_ProvisionedResource = (output: any, context: __SerdeContext): ProvisionedResource => {
  return {
    identifier: __expectString(output.identifier),
    name: __expectString(output.name),
    provisioningEngine: __expectString(output.provisioningEngine),
  } as any;
};

/**
 * deserializeAws_json1_0ProvisionedResourceList
 */
const de_ProvisionedResourceList = (output: any, context: __SerdeContext): ProvisionedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisionedResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RejectEnvironmentAccountConnectionOutput
 */
const de_RejectEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): RejectEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? de_EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0Repository
 */
const de_Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    arn: __expectString(output.arn),
    connectionArn: __expectString(output.connectionArn),
    encryptionKey: __expectString(output.encryptionKey),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
  } as any;
};

/**
 * deserializeAws_json1_0RepositoryBranch
 */
const de_RepositoryBranch = (output: any, context: __SerdeContext): RepositoryBranch => {
  return {
    arn: __expectString(output.arn),
    branch: __expectString(output.branch),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
  } as any;
};

/**
 * deserializeAws_json1_0RepositorySummary
 */
const de_RepositorySummary = (output: any, context: __SerdeContext): RepositorySummary => {
  return {
    arn: __expectString(output.arn),
    connectionArn: __expectString(output.connectionArn),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
  } as any;
};

/**
 * deserializeAws_json1_0RepositorySummaryList
 */
const de_RepositorySummaryList = (output: any, context: __SerdeContext): RepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositorySummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RepositorySyncAttempt
 */
const de_RepositorySyncAttempt = (output: any, context: __SerdeContext): RepositorySyncAttempt => {
  return {
    events: output.events != null ? de_RepositorySyncEvents(output.events, context) : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_json1_0RepositorySyncDefinition
 */
const de_RepositorySyncDefinition = (output: any, context: __SerdeContext): RepositorySyncDefinition => {
  return {
    branch: __expectString(output.branch),
    directory: __expectString(output.directory),
    parent: __expectString(output.parent),
    target: __expectString(output.target),
  } as any;
};

/**
 * deserializeAws_json1_0RepositorySyncDefinitionList
 */
const de_RepositorySyncDefinitionList = (output: any, context: __SerdeContext): RepositorySyncDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositorySyncDefinition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0RepositorySyncEvent
 */
const de_RepositorySyncEvent = (output: any, context: __SerdeContext): RepositorySyncEvent => {
  return {
    event: __expectString(output.event),
    externalId: __expectString(output.externalId),
    time: output.time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.time))) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0RepositorySyncEvents
 */
const de_RepositorySyncEvents = (output: any, context: __SerdeContext): RepositorySyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RepositorySyncEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ResourceCountsSummary
 */
const de_ResourceCountsSummary = (output: any, context: __SerdeContext): ResourceCountsSummary => {
  return {
    behindMajor: __expectInt32(output.behindMajor),
    behindMinor: __expectInt32(output.behindMinor),
    failed: __expectInt32(output.failed),
    total: __expectInt32(output.total),
    upToDate: __expectInt32(output.upToDate),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceNotFoundException
 */
const de_ResourceNotFoundException = (output: any, context: __SerdeContext): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceSyncAttempt
 */
const de_ResourceSyncAttempt = (output: any, context: __SerdeContext): ResourceSyncAttempt => {
  return {
    events: output.events != null ? de_ResourceSyncEvents(output.events, context) : undefined,
    initialRevision: output.initialRevision != null ? de_Revision(output.initialRevision, context) : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    status: __expectString(output.status),
    target: __expectString(output.target),
    targetRevision: output.targetRevision != null ? de_Revision(output.targetRevision, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ResourceSyncEvent
 */
const de_ResourceSyncEvent = (output: any, context: __SerdeContext): ResourceSyncEvent => {
  return {
    event: __expectString(output.event),
    externalId: __expectString(output.externalId),
    time: output.time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.time))) : undefined,
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0ResourceSyncEvents
 */
const de_ResourceSyncEvents = (output: any, context: __SerdeContext): ResourceSyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceSyncEvent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Revision
 */
const de_Revision = (output: any, context: __SerdeContext): Revision => {
  return {
    branch: __expectString(output.branch),
    directory: __expectString(output.directory),
    repositoryName: __expectString(output.repositoryName),
    repositoryProvider: __expectString(output.repositoryProvider),
    sha: __expectString(output.sha),
  } as any;
};

/**
 * deserializeAws_json1_0Service
 */
const de_Service = (output: any, context: __SerdeContext): Service => {
  return {
    arn: __expectString(output.arn),
    branchName: __expectString(output.branchName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    pipeline: output.pipeline != null ? de_ServicePipeline(output.pipeline, context) : undefined,
    repositoryConnectionArn: __expectString(output.repositoryConnectionArn),
    repositoryId: __expectString(output.repositoryId),
    spec: __expectString(output.spec),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceInstance
 */
const de_ServiceInstance = (output: any, context: __SerdeContext): ServiceInstance => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    environmentName: __expectString(output.environmentName),
    lastClientRequestToken: __expectString(output.lastClientRequestToken),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    name: __expectString(output.name),
    serviceName: __expectString(output.serviceName),
    spec: __expectString(output.spec),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceInstanceSummary
 */
const de_ServiceInstanceSummary = (output: any, context: __SerdeContext): ServiceInstanceSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    environmentName: __expectString(output.environmentName),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    name: __expectString(output.name),
    serviceName: __expectString(output.serviceName),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceInstanceSummaryList
 */
const de_ServiceInstanceSummaryList = (output: any, context: __SerdeContext): ServiceInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceInstanceSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServicePipeline
 */
const de_ServicePipeline = (output: any, context: __SerdeContext): ServicePipeline => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    lastDeploymentAttemptedAt:
      output.lastDeploymentAttemptedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentAttemptedAt)))
        : undefined,
    lastDeploymentSucceededAt:
      output.lastDeploymentSucceededAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastDeploymentSucceededAt)))
        : undefined,
    spec: __expectString(output.spec),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceQuotaExceededException
 */
const de_ServiceQuotaExceededException = (output: any, context: __SerdeContext): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceSummary
 */
const de_ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateName: __expectString(output.templateName),
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
 * deserializeAws_json1_0ServiceSyncBlockerSummary
 */
const de_ServiceSyncBlockerSummary = (output: any, context: __SerdeContext): ServiceSyncBlockerSummary => {
  return {
    latestBlockers: output.latestBlockers != null ? de_LatestSyncBlockers(output.latestBlockers, context) : undefined,
    serviceInstanceName: __expectString(output.serviceInstanceName),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceSyncConfig
 */
const de_ServiceSyncConfig = (output: any, context: __SerdeContext): ServiceSyncConfig => {
  return {
    branch: __expectString(output.branch),
    filePath: __expectString(output.filePath),
    repositoryName: __expectString(output.repositoryName),
    repositoryProvider: __expectString(output.repositoryProvider),
    serviceName: __expectString(output.serviceName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceTemplate
 */
const de_ServiceTemplate = (output: any, context: __SerdeContext): ServiceTemplate => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    encryptionKey: __expectString(output.encryptionKey),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    pipelineProvisioning: __expectString(output.pipelineProvisioning),
    recommendedVersion: __expectString(output.recommendedVersion),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateSummary
 */
const de_ServiceTemplateSummary = (output: any, context: __SerdeContext): ServiceTemplateSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    displayName: __expectString(output.displayName),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    name: __expectString(output.name),
    pipelineProvisioning: __expectString(output.pipelineProvisioning),
    recommendedVersion: __expectString(output.recommendedVersion),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateSummaryList
 */
const de_ServiceTemplateSummaryList = (output: any, context: __SerdeContext): ServiceTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ServiceTemplateSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList
 */
const de_ServiceTemplateSupportedComponentSourceInputList = (
  output: any,
  context: __SerdeContext
): (ServiceTemplateSupportedComponentSourceType | string)[] => {
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
 * deserializeAws_json1_0ServiceTemplateVersion
 */
const de_ServiceTemplateVersion = (output: any, context: __SerdeContext): ServiceTemplateVersion => {
  return {
    arn: __expectString(output.arn),
    compatibleEnvironmentTemplates:
      output.compatibleEnvironmentTemplates != null
        ? de_CompatibleEnvironmentTemplateList(output.compatibleEnvironmentTemplates, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    majorVersion: __expectString(output.majorVersion),
    minorVersion: __expectString(output.minorVersion),
    recommendedMinorVersion: __expectString(output.recommendedMinorVersion),
    schema: __expectString(output.schema),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    supportedComponentSources:
      output.supportedComponentSources != null
        ? de_ServiceTemplateSupportedComponentSourceInputList(output.supportedComponentSources, context)
        : undefined,
    templateName: __expectString(output.templateName),
  } as any;
};

/**
 * deserializeAws_json1_0ServiceTemplateVersionSummary
 */
const de_ServiceTemplateVersionSummary = (output: any, context: __SerdeContext): ServiceTemplateVersionSummary => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    description: __expectString(output.description),
    lastModifiedAt:
      output.lastModifiedAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastModifiedAt)))
        : undefined,
    majorVersion: __expectString(output.majorVersion),
    minorVersion: __expectString(output.minorVersion),
    recommendedMinorVersion: __expectString(output.recommendedMinorVersion),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateName: __expectString(output.templateName),
  } as any;
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
      if (entry === null) {
        return null as any;
      }
      return de_ServiceTemplateVersionSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0SyncBlocker
 */
const de_SyncBlocker = (output: any, context: __SerdeContext): SyncBlocker => {
  return {
    contexts: output.contexts != null ? de_SyncBlockerContexts(output.contexts, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    createdReason: __expectString(output.createdReason),
    id: __expectString(output.id),
    resolvedAt:
      output.resolvedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.resolvedAt))) : undefined,
    resolvedReason: __expectString(output.resolvedReason),
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_json1_0SyncBlockerContext
 */
const de_SyncBlockerContext = (output: any, context: __SerdeContext): SyncBlockerContext => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_json1_0SyncBlockerContexts
 */
const de_SyncBlockerContexts = (output: any, context: __SerdeContext): SyncBlockerContext[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_SyncBlockerContext(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_0Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
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
 * deserializeAws_json1_0TagResourceOutput
 */
const de_TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0TemplateSyncConfig
 */
const de_TemplateSyncConfig = (output: any, context: __SerdeContext): TemplateSyncConfig => {
  return {
    branch: __expectString(output.branch),
    repositoryName: __expectString(output.repositoryName),
    repositoryProvider: __expectString(output.repositoryProvider),
    subdirectory: __expectString(output.subdirectory),
    templateName: __expectString(output.templateName),
    templateType: __expectString(output.templateType),
  } as any;
};

/**
 * deserializeAws_json1_0ThrottlingException
 */
const de_ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

/**
 * deserializeAws_json1_0UntagResourceOutput
 */
const de_UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

/**
 * deserializeAws_json1_0UpdateAccountSettingsOutput
 */
const de_UpdateAccountSettingsOutput = (output: any, context: __SerdeContext): UpdateAccountSettingsOutput => {
  return {
    accountSettings: output.accountSettings != null ? de_AccountSettings(output.accountSettings, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateComponentOutput
 */
const de_UpdateComponentOutput = (output: any, context: __SerdeContext): UpdateComponentOutput => {
  return {
    component: output.component != null ? de_Component(output.component, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentAccountConnectionOutput
 */
const de_UpdateEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? de_EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentOutput
 */
const de_UpdateEnvironmentOutput = (output: any, context: __SerdeContext): UpdateEnvironmentOutput => {
  return {
    environment: output.environment != null ? de_Environment(output.environment, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentTemplateOutput
 */
const de_UpdateEnvironmentTemplateOutput = (output: any, context: __SerdeContext): UpdateEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null ? de_EnvironmentTemplate(output.environmentTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateEnvironmentTemplateVersionOutput
 */
const de_UpdateEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? de_EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServiceInstanceOutput
 */
const de_UpdateServiceInstanceOutput = (output: any, context: __SerdeContext): UpdateServiceInstanceOutput => {
  return {
    serviceInstance: output.serviceInstance != null ? de_ServiceInstance(output.serviceInstance, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServiceOutput
 */
const de_UpdateServiceOutput = (output: any, context: __SerdeContext): UpdateServiceOutput => {
  return {
    service: output.service != null ? de_Service(output.service, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServicePipelineOutput
 */
const de_UpdateServicePipelineOutput = (output: any, context: __SerdeContext): UpdateServicePipelineOutput => {
  return {
    pipeline: output.pipeline != null ? de_ServicePipeline(output.pipeline, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServiceSyncBlockerOutput
 */
const de_UpdateServiceSyncBlockerOutput = (output: any, context: __SerdeContext): UpdateServiceSyncBlockerOutput => {
  return {
    serviceInstanceName: __expectString(output.serviceInstanceName),
    serviceName: __expectString(output.serviceName),
    serviceSyncBlocker:
      output.serviceSyncBlocker != null ? de_SyncBlocker(output.serviceSyncBlocker, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServiceSyncConfigOutput
 */
const de_UpdateServiceSyncConfigOutput = (output: any, context: __SerdeContext): UpdateServiceSyncConfigOutput => {
  return {
    serviceSyncConfig:
      output.serviceSyncConfig != null ? de_ServiceSyncConfig(output.serviceSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServiceTemplateOutput
 */
const de_UpdateServiceTemplateOutput = (output: any, context: __SerdeContext): UpdateServiceTemplateOutput => {
  return {
    serviceTemplate: output.serviceTemplate != null ? de_ServiceTemplate(output.serviceTemplate, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateServiceTemplateVersionOutput
 */
const de_UpdateServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): UpdateServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? de_ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0UpdateTemplateSyncConfigOutput
 */
const de_UpdateTemplateSyncConfigOutput = (output: any, context: __SerdeContext): UpdateTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null ? de_TemplateSyncConfig(output.templateSyncConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_0ValidationException
 */
const de_ValidationException = (output: any, context: __SerdeContext): ValidationException => {
  return {
    message: __expectString(output.message),
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
