// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
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
import { GetServiceCommandInput, GetServiceCommandOutput } from "../commands/GetServiceCommand";
import { GetServiceInstanceCommandInput, GetServiceInstanceCommandOutput } from "../commands/GetServiceInstanceCommand";
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
  CreateServiceOutput,
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
  GetServiceInput,
  GetServiceInstanceInput,
  GetServiceInstanceOutput,
  GetServiceOutput,
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
  ServiceTemplate,
  ServiceTemplateSummary,
  ServiceTemplateSupportedComponentSourceType,
  ServiceTemplateVersion,
  ServiceTemplateVersionSummary,
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
  UpdateServiceTemplateInput,
  UpdateServiceTemplateOutput,
  UpdateServiceTemplateVersionInput,
  UpdateServiceTemplateVersionOutput,
  UpdateTemplateSyncConfigInput,
  UpdateTemplateSyncConfigOutput,
  ValidationException,
} from "../models/models_0";
import { ProtonServiceException as __BaseException } from "../models/ProtonServiceException";

export const serializeAws_json1_0AcceptEnvironmentAccountConnectionCommand = async (
  input: AcceptEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.AcceptEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0AcceptEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CancelComponentDeploymentCommand = async (
  input: CancelComponentDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelComponentDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelComponentDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CancelEnvironmentDeploymentCommand = async (
  input: CancelEnvironmentDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelEnvironmentDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelEnvironmentDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CancelServiceInstanceDeploymentCommand = async (
  input: CancelServiceInstanceDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelServiceInstanceDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelServiceInstanceDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CancelServicePipelineDeploymentCommand = async (
  input: CancelServicePipelineDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CancelServicePipelineDeployment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CancelServicePipelineDeploymentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateComponentCommand = async (
  input: CreateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateEnvironmentCommand = async (
  input: CreateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateEnvironmentAccountConnectionCommand = async (
  input: CreateEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateEnvironmentTemplateCommand = async (
  input: CreateEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateEnvironmentTemplateVersionCommand = async (
  input: CreateEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateServiceCommand = async (
  input: CreateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateServiceTemplateCommand = async (
  input: CreateServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateServiceTemplateVersionCommand = async (
  input: CreateServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0CreateTemplateSyncConfigCommand = async (
  input: CreateTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.CreateTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0CreateTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteEnvironmentCommand = async (
  input: DeleteEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteEnvironmentAccountConnectionCommand = async (
  input: DeleteEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteEnvironmentTemplateCommand = async (
  input: DeleteEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteEnvironmentTemplateVersionCommand = async (
  input: DeleteEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteServiceCommand = async (
  input: DeleteServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteServiceTemplateCommand = async (
  input: DeleteServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteServiceTemplateVersionCommand = async (
  input: DeleteServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0DeleteTemplateSyncConfigCommand = async (
  input: DeleteTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.DeleteTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0DeleteTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetAccountSettingsCommand = async (
  input: GetAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetAccountSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetAccountSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnvironmentCommand = async (
  input: GetEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnvironmentAccountConnectionCommand = async (
  input: GetEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnvironmentTemplateCommand = async (
  input: GetEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetEnvironmentTemplateVersionCommand = async (
  input: GetEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRepositoryCommand = async (
  input: GetRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetRepository",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRepositoryInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetRepositorySyncStatusCommand = async (
  input: GetRepositorySyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetRepositorySyncStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetRepositorySyncStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetServiceCommand = async (
  input: GetServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetServiceInstanceCommand = async (
  input: GetServiceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetServiceInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetServiceTemplateCommand = async (
  input: GetServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetServiceTemplateVersionCommand = async (
  input: GetServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetTemplateSyncConfigCommand = async (
  input: GetTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0GetTemplateSyncStatusCommand = async (
  input: GetTemplateSyncStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.GetTemplateSyncStatus",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0GetTemplateSyncStatusInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListComponentOutputsCommand = async (
  input: ListComponentOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListComponentOutputs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListComponentOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListComponentProvisionedResourcesCommand = async (
  input: ListComponentProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListComponentProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListComponentProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListComponents",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListComponentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListEnvironmentAccountConnectionsCommand = async (
  input: ListEnvironmentAccountConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentAccountConnections",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListEnvironmentAccountConnectionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListEnvironmentOutputsCommand = async (
  input: ListEnvironmentOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentOutputs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListEnvironmentOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListEnvironmentProvisionedResourcesCommand = async (
  input: ListEnvironmentProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListEnvironmentProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListEnvironmentsCommand = async (
  input: ListEnvironmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironments",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListEnvironmentsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListEnvironmentTemplatesCommand = async (
  input: ListEnvironmentTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListEnvironmentTemplatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListEnvironmentTemplateVersionsCommand = async (
  input: ListEnvironmentTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListEnvironmentTemplateVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListEnvironmentTemplateVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListRepositories",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListRepositoriesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListRepositorySyncDefinitionsCommand = async (
  input: ListRepositorySyncDefinitionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListRepositorySyncDefinitions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListRepositorySyncDefinitionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServiceInstanceOutputsCommand = async (
  input: ListServiceInstanceOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceInstanceOutputs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServiceInstanceOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand = async (
  input: ListServiceInstanceProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceInstanceProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServiceInstanceProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServiceInstancesCommand = async (
  input: ListServiceInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceInstances",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServiceInstancesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServicePipelineOutputsCommand = async (
  input: ListServicePipelineOutputsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServicePipelineOutputs",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServicePipelineOutputsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServicePipelineProvisionedResourcesCommand = async (
  input: ListServicePipelineProvisionedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServicePipelineProvisionedResources",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServicePipelineProvisionedResourcesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServicesCommand = async (
  input: ListServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServices",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServicesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServiceTemplatesCommand = async (
  input: ListServiceTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceTemplates",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServiceTemplatesInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListServiceTemplateVersionsCommand = async (
  input: ListServiceTemplateVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListServiceTemplateVersions",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListServiceTemplateVersionsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0ListTagsForResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand = async (
  input: NotifyResourceDeploymentStatusChangeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.NotifyResourceDeploymentStatusChange",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0NotifyResourceDeploymentStatusChangeInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0RejectEnvironmentAccountConnectionCommand = async (
  input: RejectEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.RejectEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0RejectEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateAccountSettingsCommand = async (
  input: UpdateAccountSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateAccountSettings",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateAccountSettingsInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateComponentCommand = async (
  input: UpdateComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateComponent",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateComponentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEnvironmentCommand = async (
  input: UpdateEnvironmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironment",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateEnvironmentInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEnvironmentAccountConnectionCommand = async (
  input: UpdateEnvironmentAccountConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironmentAccountConnection",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateEnvironmentAccountConnectionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEnvironmentTemplateCommand = async (
  input: UpdateEnvironmentTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironmentTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateEnvironmentTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateEnvironmentTemplateVersionCommand = async (
  input: UpdateEnvironmentTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateEnvironmentTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateEnvironmentTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServiceCommand = async (
  input: UpdateServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateService",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServiceInstanceCommand = async (
  input: UpdateServiceInstanceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceInstance",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceInstanceInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServicePipelineCommand = async (
  input: UpdateServicePipelineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServicePipeline",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServicePipelineInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServiceTemplateCommand = async (
  input: UpdateServiceTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceTemplate",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceTemplateInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateServiceTemplateVersionCommand = async (
  input: UpdateServiceTemplateVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateServiceTemplateVersion",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateServiceTemplateVersionInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_0UpdateTemplateSyncConfigCommand = async (
  input: UpdateTemplateSyncConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.0",
    "x-amz-target": "AwsProton20200720.UpdateTemplateSyncConfig",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_0UpdateTemplateSyncConfigInput(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0AcceptEnvironmentAccountConnectionOutput(data, context);
  const response: AcceptEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0AcceptEnvironmentAccountConnectionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CancelComponentDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelComponentDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelComponentDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelComponentDeploymentOutput(data, context);
  const response: CancelComponentDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelComponentDeploymentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CancelEnvironmentDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelEnvironmentDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelEnvironmentDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelEnvironmentDeploymentOutput(data, context);
  const response: CancelEnvironmentDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelEnvironmentDeploymentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CancelServiceInstanceDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServiceInstanceDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelServiceInstanceDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelServiceInstanceDeploymentOutput(data, context);
  const response: CancelServiceInstanceDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelServiceInstanceDeploymentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CancelServicePipelineDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelServicePipelineDeploymentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CancelServicePipelineDeploymentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CancelServicePipelineDeploymentOutput(data, context);
  const response: CancelServicePipelineDeploymentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CancelServicePipelineDeploymentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateComponentOutput(data, context);
  const response: CreateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateComponentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateEnvironmentOutput(data, context);
  const response: CreateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateEnvironmentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateEnvironmentAccountConnectionOutput(data, context);
  const response: CreateEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateEnvironmentAccountConnectionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateEnvironmentTemplateOutput(data, context);
  const response: CreateEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateEnvironmentTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateEnvironmentTemplateVersionOutput(data, context);
  const response: CreateEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateEnvironmentTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateRepositoryOutput(data, context);
  const response: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateRepositoryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateServiceOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateServiceTemplateOutput(data, context);
  const response: CreateServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateServiceTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateServiceTemplateVersionOutput(data, context);
  const response: CreateServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateServiceTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0CreateTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0CreateTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0CreateTemplateSyncConfigOutput(data, context);
  const response: CreateTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0CreateTemplateSyncConfigCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteComponentOutput(data, context);
  const response: DeleteComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteComponentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteEnvironmentOutput(data, context);
  const response: DeleteEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteEnvironmentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteEnvironmentAccountConnectionOutput(data, context);
  const response: DeleteEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteEnvironmentAccountConnectionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteEnvironmentTemplateOutput(data, context);
  const response: DeleteEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteEnvironmentTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteEnvironmentTemplateVersionOutput(data, context);
  const response: DeleteEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteEnvironmentTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteRepositoryOutput(data, context);
  const response: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteRepositoryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteServiceOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteServiceTemplateOutput(data, context);
  const response: DeleteServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteServiceTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteServiceTemplateVersionOutput(data, context);
  const response: DeleteServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteServiceTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0DeleteTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0DeleteTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0DeleteTemplateSyncConfigOutput(data, context);
  const response: DeleteTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0DeleteTemplateSyncConfigCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetAccountSettingsOutput(data, context);
  const response: GetAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetAccountSettingsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetComponentOutput(data, context);
  const response: GetComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetComponentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnvironmentOutput(data, context);
  const response: GetEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnvironmentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnvironmentAccountConnectionOutput(data, context);
  const response: GetEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnvironmentAccountConnectionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnvironmentTemplateOutput(data, context);
  const response: GetEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnvironmentTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetEnvironmentTemplateVersionOutput(data, context);
  const response: GetEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetEnvironmentTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRepositoryCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRepositoryOutput(data, context);
  const response: GetRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRepositoryCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetRepositorySyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositorySyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetRepositorySyncStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetRepositorySyncStatusOutput(data, context);
  const response: GetRepositorySyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetRepositorySyncStatusCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetServiceOutput(data, context);
  const response: GetServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetServiceCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetServiceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetServiceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetServiceInstanceOutput(data, context);
  const response: GetServiceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetServiceInstanceCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetServiceTemplateOutput(data, context);
  const response: GetServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetServiceTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetServiceTemplateVersionOutput(data, context);
  const response: GetServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetServiceTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetTemplateSyncConfigOutput(data, context);
  const response: GetTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetTemplateSyncConfigCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0GetTemplateSyncStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemplateSyncStatusCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0GetTemplateSyncStatusCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0GetTemplateSyncStatusOutput(data, context);
  const response: GetTemplateSyncStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0GetTemplateSyncStatusCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListComponentOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListComponentOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListComponentOutputsOutput(data, context);
  const response: ListComponentOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListComponentOutputsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListComponentProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListComponentProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListComponentProvisionedResourcesOutput(data, context);
  const response: ListComponentProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListComponentProvisionedResourcesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListComponentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListComponentsOutput(data, context);
  const response: ListComponentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListComponentsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListEnvironmentAccountConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentAccountConnectionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListEnvironmentAccountConnectionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListEnvironmentAccountConnectionsOutput(data, context);
  const response: ListEnvironmentAccountConnectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListEnvironmentAccountConnectionsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListEnvironmentOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListEnvironmentOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListEnvironmentOutputsOutput(data, context);
  const response: ListEnvironmentOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListEnvironmentOutputsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListEnvironmentProvisionedResourcesOutput(data, context);
  const response: ListEnvironmentProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListEnvironmentProvisionedResourcesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListEnvironmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListEnvironmentsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListEnvironmentsOutput(data, context);
  const response: ListEnvironmentsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListEnvironmentsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListEnvironmentTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListEnvironmentTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListEnvironmentTemplatesOutput(data, context);
  const response: ListEnvironmentTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListEnvironmentTemplatesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListEnvironmentTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnvironmentTemplateVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListEnvironmentTemplateVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListEnvironmentTemplateVersionsOutput(data, context);
  const response: ListEnvironmentTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListEnvironmentTemplateVersionsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListRepositoriesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListRepositoriesOutput(data, context);
  const response: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListRepositoriesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListRepositorySyncDefinitionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositorySyncDefinitionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListRepositorySyncDefinitionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListRepositorySyncDefinitionsOutput(data, context);
  const response: ListRepositorySyncDefinitionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListRepositorySyncDefinitionsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServiceInstanceOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstanceOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServiceInstanceOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServiceInstanceOutputsOutput(data, context);
  const response: ListServiceInstanceOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServiceInstanceOutputsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstanceProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServiceInstanceProvisionedResourcesOutput(data, context);
  const response: ListServiceInstanceProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServiceInstanceProvisionedResourcesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServiceInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceInstancesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServiceInstancesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServiceInstancesOutput(data, context);
  const response: ListServiceInstancesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServiceInstancesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServicePipelineOutputsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePipelineOutputsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServicePipelineOutputsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServicePipelineOutputsOutput(data, context);
  const response: ListServicePipelineOutputsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServicePipelineOutputsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServicePipelineProvisionedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicePipelineProvisionedResourcesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServicePipelineProvisionedResourcesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServicePipelineProvisionedResourcesOutput(data, context);
  const response: ListServicePipelineProvisionedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServicePipelineProvisionedResourcesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServicesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServicesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServicesOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServiceTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceTemplatesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServiceTemplatesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServiceTemplatesOutput(data, context);
  const response: ListServiceTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServiceTemplatesCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListServiceTemplateVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListServiceTemplateVersionsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListServiceTemplateVersionsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListServiceTemplateVersionsOutput(data, context);
  const response: ListServiceTemplateVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0ListServiceTemplateVersionsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0ListTagsForResourceOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<NotifyResourceDeploymentStatusChangeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0NotifyResourceDeploymentStatusChangeOutput(data, context);
  const response: NotifyResourceDeploymentStatusChangeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0NotifyResourceDeploymentStatusChangeCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0RejectEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0RejectEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0RejectEnvironmentAccountConnectionOutput(data, context);
  const response: RejectEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0RejectEnvironmentAccountConnectionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0TagResourceOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UntagResourceOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateAccountSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAccountSettingsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateAccountSettingsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateAccountSettingsOutput(data, context);
  const response: UpdateAccountSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateAccountSettingsCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateComponentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateComponentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateComponentOutput(data, context);
  const response: UpdateComponentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateComponentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateEnvironmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateEnvironmentCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnvironmentOutput(data, context);
  const response: UpdateEnvironmentCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEnvironmentCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateEnvironmentAccountConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentAccountConnectionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateEnvironmentAccountConnectionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnvironmentAccountConnectionOutput(data, context);
  const response: UpdateEnvironmentAccountConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEnvironmentAccountConnectionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateEnvironmentTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateEnvironmentTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnvironmentTemplateOutput(data, context);
  const response: UpdateEnvironmentTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEnvironmentTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateEnvironmentTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateEnvironmentTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateEnvironmentTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateEnvironmentTemplateVersionOutput(data, context);
  const response: UpdateEnvironmentTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateEnvironmentTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServiceOutput(data, context);
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
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.proton#AccessDeniedException":
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.proton#ServiceQuotaExceededException":
      throw await deserializeAws_json1_0ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateServiceInstanceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceInstanceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceInstanceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServiceInstanceOutput(data, context);
  const response: UpdateServiceInstanceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateServiceInstanceCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateServicePipelineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServicePipelineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServicePipelineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServicePipelineOutput(data, context);
  const response: UpdateServicePipelineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateServicePipelineCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateServiceTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceTemplateCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceTemplateCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServiceTemplateOutput(data, context);
  const response: UpdateServiceTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateServiceTemplateCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateServiceTemplateVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateServiceTemplateVersionCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateServiceTemplateVersionCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateServiceTemplateVersionOutput(data, context);
  const response: UpdateServiceTemplateVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateServiceTemplateVersionCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_json1_0UpdateTemplateSyncConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTemplateSyncConfigCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_0UpdateTemplateSyncConfigCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_0UpdateTemplateSyncConfigOutput(data, context);
  const response: UpdateTemplateSyncConfigCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_0UpdateTemplateSyncConfigCommandError = async (
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
      throw await deserializeAws_json1_0AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.proton#ConflictException":
      throw await deserializeAws_json1_0ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.proton#InternalServerException":
      throw await deserializeAws_json1_0InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.proton#ResourceNotFoundException":
      throw await deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.proton#ThrottlingException":
      throw await deserializeAws_json1_0ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.proton#ValidationException":
      throw await deserializeAws_json1_0ValidationExceptionResponse(parsedOutput, context);
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

const deserializeAws_json1_0AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0AccessDeniedException(body, context);
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ConflictException(body, context);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0InternalServerException(body, context);
  const exception = new InternalServerException({
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

const deserializeAws_json1_0ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ThrottlingException(body, context);
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_0ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_0ValidationException(body, context);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_0AcceptEnvironmentAccountConnectionInput = (
  input: AcceptEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0CancelComponentDeploymentInput = (
  input: CancelComponentDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
  };
};

const serializeAws_json1_0CancelEnvironmentDeploymentInput = (
  input: CancelEnvironmentDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
  };
};

const serializeAws_json1_0CancelServiceInstanceDeploymentInput = (
  input: CancelServiceInstanceDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0CancelServicePipelineDeploymentInput = (
  input: CancelServicePipelineDeploymentInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0CompatibleEnvironmentTemplateInput = (
  input: CompatibleEnvironmentTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0CompatibleEnvironmentTemplateInputList = (
  input: CompatibleEnvironmentTemplateInput[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0CompatibleEnvironmentTemplateInput(entry, context);
    });
};

const serializeAws_json1_0CreateComponentInput = (input: CreateComponentInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.manifest != null && { manifest: input.manifest }),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.serviceSpec != null && { serviceSpec: input.serviceSpec }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.templateFile != null && { templateFile: input.templateFile }),
  };
};

const serializeAws_json1_0CreateEnvironmentAccountConnectionInput = (
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
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateEnvironmentInput = (input: CreateEnvironmentInput, context: __SerdeContext): any => {
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
      provisioningRepository: serializeAws_json1_0RepositoryBranchInput(input.provisioningRepository, context),
    }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0CreateEnvironmentTemplateInput = (
  input: CreateEnvironmentTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.name != null && { name: input.name }),
    ...(input.provisioning != null && { provisioning: input.provisioning }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateEnvironmentTemplateVersionInput = (
  input: CreateEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.source != null && { source: serializeAws_json1_0TemplateVersionSourceInput(input.source, context) }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0CreateRepositoryInput = (input: CreateRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.connectionArn != null && { connectionArn: input.connectionArn }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateServiceInput = (input: CreateServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.branchName != null && { branchName: input.branchName }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.repositoryConnectionArn != null && { repositoryConnectionArn: input.repositoryConnectionArn }),
    ...(input.repositoryId != null && { repositoryId: input.repositoryId }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0CreateServiceTemplateInput = (
  input: CreateServiceTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.encryptionKey != null && { encryptionKey: input.encryptionKey }),
    ...(input.name != null && { name: input.name }),
    ...(input.pipelineProvisioning != null && { pipelineProvisioning: input.pipelineProvisioning }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0CreateServiceTemplateVersionInput = (
  input: CreateServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.compatibleEnvironmentTemplates != null && {
      compatibleEnvironmentTemplates: serializeAws_json1_0CompatibleEnvironmentTemplateInputList(
        input.compatibleEnvironmentTemplates,
        context
      ),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.source != null && { source: serializeAws_json1_0TemplateVersionSourceInput(input.source, context) }),
    ...(input.supportedComponentSources != null && {
      supportedComponentSources: serializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList(
        input.supportedComponentSources,
        context
      ),
    }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0CreateTemplateSyncConfigInput = (
  input: CreateTemplateSyncConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.subdirectory != null && { subdirectory: input.subdirectory }),
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

const serializeAws_json1_0DeleteComponentInput = (input: DeleteComponentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteEnvironmentAccountConnectionInput = (
  input: DeleteEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0DeleteEnvironmentInput = (input: DeleteEnvironmentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteEnvironmentTemplateInput = (
  input: DeleteEnvironmentTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteEnvironmentTemplateVersionInput = (
  input: DeleteEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0DeleteRepositoryInput = (input: DeleteRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
  };
};

const serializeAws_json1_0DeleteServiceInput = (input: DeleteServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteServiceTemplateInput = (
  input: DeleteServiceTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0DeleteServiceTemplateVersionInput = (
  input: DeleteServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0DeleteTemplateSyncConfigInput = (
  input: DeleteTemplateSyncConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

const serializeAws_json1_0EnvironmentAccountConnectionStatusList = (
  input: (EnvironmentAccountConnectionStatus | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0EnvironmentTemplateFilter = (
  input: EnvironmentTemplateFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0EnvironmentTemplateFilterList = (
  input: EnvironmentTemplateFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0EnvironmentTemplateFilter(entry, context);
    });
};

const serializeAws_json1_0GetAccountSettingsInput = (input: GetAccountSettingsInput, context: __SerdeContext): any => {
  return {};
};

const serializeAws_json1_0GetComponentInput = (input: GetComponentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetEnvironmentAccountConnectionInput = (
  input: GetEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0GetEnvironmentInput = (input: GetEnvironmentInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetEnvironmentTemplateInput = (
  input: GetEnvironmentTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetEnvironmentTemplateVersionInput = (
  input: GetEnvironmentTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0GetRepositoryInput = (input: GetRepositoryInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
  };
};

const serializeAws_json1_0GetRepositorySyncStatusInput = (
  input: GetRepositorySyncStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.syncType != null && { syncType: input.syncType }),
  };
};

const serializeAws_json1_0GetServiceInput = (input: GetServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetServiceInstanceInput = (input: GetServiceInstanceInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0GetServiceTemplateInput = (input: GetServiceTemplateInput, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0GetServiceTemplateVersionInput = (
  input: GetServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0GetTemplateSyncConfigInput = (
  input: GetTemplateSyncConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

const serializeAws_json1_0GetTemplateSyncStatusInput = (
  input: GetTemplateSyncStatusInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
    ...(input.templateVersion != null && { templateVersion: input.templateVersion }),
  };
};

const serializeAws_json1_0ListComponentOutputsInput = (
  input: ListComponentOutputsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListComponentProvisionedResourcesInput = (
  input: ListComponentProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListComponentsInput = (input: ListComponentsInput, context: __SerdeContext): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0ListEnvironmentAccountConnectionsInput = (
  input: ListEnvironmentAccountConnectionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.requestedBy != null && { requestedBy: input.requestedBy }),
    ...(input.statuses != null && {
      statuses: serializeAws_json1_0EnvironmentAccountConnectionStatusList(input.statuses, context),
    }),
  };
};

const serializeAws_json1_0ListEnvironmentOutputsInput = (
  input: ListEnvironmentOutputsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListEnvironmentProvisionedResourcesInput = (
  input: ListEnvironmentProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentName != null && { environmentName: input.environmentName }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListEnvironmentsInput = (input: ListEnvironmentsInput, context: __SerdeContext): any => {
  return {
    ...(input.environmentTemplates != null && {
      environmentTemplates: serializeAws_json1_0EnvironmentTemplateFilterList(input.environmentTemplates, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListEnvironmentTemplatesInput = (
  input: ListEnvironmentTemplatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListEnvironmentTemplateVersionsInput = (
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

const serializeAws_json1_0ListRepositoriesInput = (input: ListRepositoriesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListRepositorySyncDefinitionsInput = (
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

const serializeAws_json1_0ListServiceInstanceOutputsInput = (
  input: ListServiceInstanceOutputsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0ListServiceInstanceProvisionedResourcesInput = (
  input: ListServiceInstanceProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0ListServiceInstancesFilter = (
  input: ListServiceInstancesFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_0ListServiceInstancesFilterList = (
  input: ListServiceInstancesFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0ListServiceInstancesFilter(entry, context);
    });
};

const serializeAws_json1_0ListServiceInstancesInput = (
  input: ListServiceInstancesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.filters != null && {
      filters: serializeAws_json1_0ListServiceInstancesFilterList(input.filters, context),
    }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.sortBy != null && { sortBy: input.sortBy }),
    ...(input.sortOrder != null && { sortOrder: input.sortOrder }),
  };
};

const serializeAws_json1_0ListServicePipelineOutputsInput = (
  input: ListServicePipelineOutputsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0ListServicePipelineProvisionedResourcesInput = (
  input: ListServicePipelineProvisionedResourcesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
  };
};

const serializeAws_json1_0ListServicesInput = (input: ListServicesInput, context: __SerdeContext): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListServiceTemplatesInput = (
  input: ListServiceTemplatesInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
  };
};

const serializeAws_json1_0ListServiceTemplateVersionsInput = (
  input: ListServiceTemplateVersionsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0ListTagsForResourceInput = (
  input: ListTagsForResourceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.nextToken != null && { nextToken: input.nextToken }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
  };
};

const serializeAws_json1_0NotifyResourceDeploymentStatusChangeInput = (
  input: NotifyResourceDeploymentStatusChangeInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentId != null && { deploymentId: input.deploymentId }),
    ...(input.outputs != null && { outputs: serializeAws_json1_0OutputsList(input.outputs, context) }),
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.status != null && { status: input.status }),
    ...(input.statusMessage != null && { statusMessage: input.statusMessage }),
  };
};

const serializeAws_json1_0Output = (input: Output, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.valueString != null && { valueString: input.valueString }),
  };
};

const serializeAws_json1_0OutputsList = (input: Output[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Output(entry, context);
    });
};

const serializeAws_json1_0RejectEnvironmentAccountConnectionInput = (
  input: RejectEnvironmentAccountConnectionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
  };
};

const serializeAws_json1_0RepositoryBranchInput = (input: RepositoryBranchInput, context: __SerdeContext): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.name != null && { name: input.name }),
    ...(input.provider != null && { provider: input.provider }),
  };
};

const serializeAws_json1_0S3ObjectSource = (input: S3ObjectSource, context: __SerdeContext): any => {
  return {
    ...(input.bucket != null && { bucket: input.bucket }),
    ...(input.key != null && { key: input.key }),
  };
};

const serializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList = (
  input: (ServiceTemplateSupportedComponentSourceType | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_json1_0TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_0TagList = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_0Tag(entry, context);
    });
};

const serializeAws_json1_0TagResourceInput = (input: TagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tags != null && { tags: serializeAws_json1_0TagList(input.tags, context) }),
  };
};

const serializeAws_json1_0TemplateVersionSourceInput = (
  input: TemplateVersionSourceInput,
  context: __SerdeContext
): any => {
  return TemplateVersionSourceInput.visit(input, {
    s3: (value) => ({ s3: serializeAws_json1_0S3ObjectSource(value, context) }),
    _: (name, value) => ({ name: value } as any),
  });
};

const serializeAws_json1_0UntagResourceInput = (input: UntagResourceInput, context: __SerdeContext): any => {
  return {
    ...(input.resourceArn != null && { resourceArn: input.resourceArn }),
    ...(input.tagKeys != null && { tagKeys: serializeAws_json1_0TagKeyList(input.tagKeys, context) }),
  };
};

const serializeAws_json1_0UpdateAccountSettingsInput = (
  input: UpdateAccountSettingsInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deletePipelineProvisioningRepository != null && {
      deletePipelineProvisioningRepository: input.deletePipelineProvisioningRepository,
    }),
    ...(input.pipelineCodebuildRoleArn != null && { pipelineCodebuildRoleArn: input.pipelineCodebuildRoleArn }),
    ...(input.pipelineProvisioningRepository != null && {
      pipelineProvisioningRepository: serializeAws_json1_0RepositoryBranchInput(
        input.pipelineProvisioningRepository,
        context
      ),
    }),
    ...(input.pipelineServiceRoleArn != null && { pipelineServiceRoleArn: input.pipelineServiceRoleArn }),
  };
};

const serializeAws_json1_0UpdateComponentInput = (input: UpdateComponentInput, context: __SerdeContext): any => {
  return {
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceInstanceName != null && { serviceInstanceName: input.serviceInstanceName }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.serviceSpec != null && { serviceSpec: input.serviceSpec }),
    ...(input.templateFile != null && { templateFile: input.templateFile }),
  };
};

const serializeAws_json1_0UpdateEnvironmentAccountConnectionInput = (
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

const serializeAws_json1_0UpdateEnvironmentInput = (input: UpdateEnvironmentInput, context: __SerdeContext): any => {
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
      provisioningRepository: serializeAws_json1_0RepositoryBranchInput(input.provisioningRepository, context),
    }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

const serializeAws_json1_0UpdateEnvironmentTemplateInput = (
  input: UpdateEnvironmentTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0UpdateEnvironmentTemplateVersionInput = (
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

const serializeAws_json1_0UpdateServiceInput = (input: UpdateServiceInput, context: __SerdeContext): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.name != null && { name: input.name }),
    ...(input.spec != null && { spec: input.spec }),
  };
};

const serializeAws_json1_0UpdateServiceInstanceInput = (
  input: UpdateServiceInstanceInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.name != null && { name: input.name }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

const serializeAws_json1_0UpdateServicePipelineInput = (
  input: UpdateServicePipelineInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.deploymentType != null && { deploymentType: input.deploymentType }),
    ...(input.serviceName != null && { serviceName: input.serviceName }),
    ...(input.spec != null && { spec: input.spec }),
    ...(input.templateMajorVersion != null && { templateMajorVersion: input.templateMajorVersion }),
    ...(input.templateMinorVersion != null && { templateMinorVersion: input.templateMinorVersion }),
  };
};

const serializeAws_json1_0UpdateServiceTemplateInput = (
  input: UpdateServiceTemplateInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.description != null && { description: input.description }),
    ...(input.displayName != null && { displayName: input.displayName }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_json1_0UpdateServiceTemplateVersionInput = (
  input: UpdateServiceTemplateVersionInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.compatibleEnvironmentTemplates != null && {
      compatibleEnvironmentTemplates: serializeAws_json1_0CompatibleEnvironmentTemplateInputList(
        input.compatibleEnvironmentTemplates,
        context
      ),
    }),
    ...(input.description != null && { description: input.description }),
    ...(input.majorVersion != null && { majorVersion: input.majorVersion }),
    ...(input.minorVersion != null && { minorVersion: input.minorVersion }),
    ...(input.status != null && { status: input.status }),
    ...(input.supportedComponentSources != null && {
      supportedComponentSources: serializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList(
        input.supportedComponentSources,
        context
      ),
    }),
    ...(input.templateName != null && { templateName: input.templateName }),
  };
};

const serializeAws_json1_0UpdateTemplateSyncConfigInput = (
  input: UpdateTemplateSyncConfigInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.branch != null && { branch: input.branch }),
    ...(input.repositoryName != null && { repositoryName: input.repositoryName }),
    ...(input.repositoryProvider != null && { repositoryProvider: input.repositoryProvider }),
    ...(input.subdirectory != null && { subdirectory: input.subdirectory }),
    ...(input.templateName != null && { templateName: input.templateName }),
    ...(input.templateType != null && { templateType: input.templateType }),
  };
};

const deserializeAws_json1_0AcceptEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): AcceptEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? deserializeAws_json1_0EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0AccessDeniedException = (output: any, context: __SerdeContext): AccessDeniedException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0AccountSettings = (output: any, context: __SerdeContext): AccountSettings => {
  return {
    pipelineCodebuildRoleArn: __expectString(output.pipelineCodebuildRoleArn),
    pipelineProvisioningRepository:
      output.pipelineProvisioningRepository != null
        ? deserializeAws_json1_0RepositoryBranch(output.pipelineProvisioningRepository, context)
        : undefined,
    pipelineServiceRoleArn: __expectString(output.pipelineServiceRoleArn),
  } as any;
};

const deserializeAws_json1_0CancelComponentDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelComponentDeploymentOutput => {
  return {
    component: output.component != null ? deserializeAws_json1_0Component(output.component, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CancelEnvironmentDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelEnvironmentDeploymentOutput => {
  return {
    environment:
      output.environment != null ? deserializeAws_json1_0Environment(output.environment, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CancelServiceInstanceDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelServiceInstanceDeploymentOutput => {
  return {
    serviceInstance:
      output.serviceInstance != null
        ? deserializeAws_json1_0ServiceInstance(output.serviceInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CancelServicePipelineDeploymentOutput = (
  output: any,
  context: __SerdeContext
): CancelServicePipelineDeploymentOutput => {
  return {
    pipeline: output.pipeline != null ? deserializeAws_json1_0ServicePipeline(output.pipeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CompatibleEnvironmentTemplate = (
  output: any,
  context: __SerdeContext
): CompatibleEnvironmentTemplate => {
  return {
    majorVersion: __expectString(output.majorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

const deserializeAws_json1_0CompatibleEnvironmentTemplateList = (
  output: any,
  context: __SerdeContext
): CompatibleEnvironmentTemplate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0CompatibleEnvironmentTemplate(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: __expectString(output.arn),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    deploymentStatus: __expectString(output.deploymentStatus),
    deploymentStatusMessage: __expectString(output.deploymentStatusMessage),
    description: __expectString(output.description),
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
    serviceSpec: __expectString(output.serviceSpec),
  } as any;
};

const deserializeAws_json1_0ComponentSummary = (output: any, context: __SerdeContext): ComponentSummary => {
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

const deserializeAws_json1_0ComponentSummaryList = (output: any, context: __SerdeContext): ComponentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ComponentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ConflictException = (output: any, context: __SerdeContext): ConflictException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0CreateComponentOutput = (output: any, context: __SerdeContext): CreateComponentOutput => {
  return {
    component: output.component != null ? deserializeAws_json1_0Component(output.component, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? deserializeAws_json1_0EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateEnvironmentOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentOutput => {
  return {
    environment:
      output.environment != null ? deserializeAws_json1_0Environment(output.environment, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateEnvironmentTemplateOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null
        ? deserializeAws_json1_0EnvironmentTemplate(output.environmentTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): CreateEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? deserializeAws_json1_0EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateRepositoryOutput = (output: any, context: __SerdeContext): CreateRepositoryOutput => {
  return {
    repository: output.repository != null ? deserializeAws_json1_0Repository(output.repository, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateServiceOutput = (output: any, context: __SerdeContext): CreateServiceOutput => {
  return {
    service: output.service != null ? deserializeAws_json1_0Service(output.service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0CreateServiceTemplateOutput = (
  output: any,
  context: __SerdeContext
): CreateServiceTemplateOutput => {
  return {
    serviceTemplate:
      output.serviceTemplate != null
        ? deserializeAws_json1_0ServiceTemplate(output.serviceTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): CreateServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? deserializeAws_json1_0ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0CreateTemplateSyncConfigOutput = (
  output: any,
  context: __SerdeContext
): CreateTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null
        ? deserializeAws_json1_0TemplateSyncConfig(output.templateSyncConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteComponentOutput = (output: any, context: __SerdeContext): DeleteComponentOutput => {
  return {
    component: output.component != null ? deserializeAws_json1_0Component(output.component, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? deserializeAws_json1_0EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteEnvironmentOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentOutput => {
  return {
    environment:
      output.environment != null ? deserializeAws_json1_0Environment(output.environment, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteEnvironmentTemplateOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null
        ? deserializeAws_json1_0EnvironmentTemplate(output.environmentTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): DeleteEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? deserializeAws_json1_0EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteRepositoryOutput = (output: any, context: __SerdeContext): DeleteRepositoryOutput => {
  return {
    repository: output.repository != null ? deserializeAws_json1_0Repository(output.repository, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteServiceOutput = (output: any, context: __SerdeContext): DeleteServiceOutput => {
  return {
    service: output.service != null ? deserializeAws_json1_0Service(output.service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteServiceTemplateOutput = (
  output: any,
  context: __SerdeContext
): DeleteServiceTemplateOutput => {
  return {
    serviceTemplate:
      output.serviceTemplate != null
        ? deserializeAws_json1_0ServiceTemplate(output.serviceTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): DeleteServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? deserializeAws_json1_0ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0DeleteTemplateSyncConfigOutput = (
  output: any,
  context: __SerdeContext
): DeleteTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null
        ? deserializeAws_json1_0TemplateSyncConfig(output.templateSyncConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Environment = (output: any, context: __SerdeContext): Environment => {
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
      output.provisioningRepository != null
        ? deserializeAws_json1_0RepositoryBranch(output.provisioningRepository, context)
        : undefined,
    spec: __expectString(output.spec),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

const deserializeAws_json1_0EnvironmentAccountConnection = (
  output: any,
  context: __SerdeContext
): EnvironmentAccountConnection => {
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

const deserializeAws_json1_0EnvironmentAccountConnectionSummary = (
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

const deserializeAws_json1_0EnvironmentAccountConnectionSummaryList = (
  output: any,
  context: __SerdeContext
): EnvironmentAccountConnectionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0EnvironmentAccountConnectionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0EnvironmentSummary = (output: any, context: __SerdeContext): EnvironmentSummary => {
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

const deserializeAws_json1_0EnvironmentSummaryList = (output: any, context: __SerdeContext): EnvironmentSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0EnvironmentSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0EnvironmentTemplate = (output: any, context: __SerdeContext): EnvironmentTemplate => {
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

const deserializeAws_json1_0EnvironmentTemplateSummary = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateSummary => {
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

const deserializeAws_json1_0EnvironmentTemplateSummaryList = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0EnvironmentTemplateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0EnvironmentTemplateVersion = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateVersion => {
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

const deserializeAws_json1_0EnvironmentTemplateVersionSummary = (
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

const deserializeAws_json1_0EnvironmentTemplateVersionSummaryList = (
  output: any,
  context: __SerdeContext
): EnvironmentTemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0EnvironmentTemplateVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0GetAccountSettingsOutput = (
  output: any,
  context: __SerdeContext
): GetAccountSettingsOutput => {
  return {
    accountSettings:
      output.accountSettings != null
        ? deserializeAws_json1_0AccountSettings(output.accountSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetComponentOutput = (output: any, context: __SerdeContext): GetComponentOutput => {
  return {
    component: output.component != null ? deserializeAws_json1_0Component(output.component, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? deserializeAws_json1_0EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetEnvironmentOutput = (output: any, context: __SerdeContext): GetEnvironmentOutput => {
  return {
    environment:
      output.environment != null ? deserializeAws_json1_0Environment(output.environment, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetEnvironmentTemplateOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null
        ? deserializeAws_json1_0EnvironmentTemplate(output.environmentTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): GetEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? deserializeAws_json1_0EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetRepositoryOutput = (output: any, context: __SerdeContext): GetRepositoryOutput => {
  return {
    repository: output.repository != null ? deserializeAws_json1_0Repository(output.repository, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetRepositorySyncStatusOutput = (
  output: any,
  context: __SerdeContext
): GetRepositorySyncStatusOutput => {
  return {
    latestSync:
      output.latestSync != null ? deserializeAws_json1_0RepositorySyncAttempt(output.latestSync, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetServiceInstanceOutput = (
  output: any,
  context: __SerdeContext
): GetServiceInstanceOutput => {
  return {
    serviceInstance:
      output.serviceInstance != null
        ? deserializeAws_json1_0ServiceInstance(output.serviceInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetServiceOutput = (output: any, context: __SerdeContext): GetServiceOutput => {
  return {
    service: output.service != null ? deserializeAws_json1_0Service(output.service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0GetServiceTemplateOutput = (
  output: any,
  context: __SerdeContext
): GetServiceTemplateOutput => {
  return {
    serviceTemplate:
      output.serviceTemplate != null
        ? deserializeAws_json1_0ServiceTemplate(output.serviceTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): GetServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? deserializeAws_json1_0ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetTemplateSyncConfigOutput = (
  output: any,
  context: __SerdeContext
): GetTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null
        ? deserializeAws_json1_0TemplateSyncConfig(output.templateSyncConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0GetTemplateSyncStatusOutput = (
  output: any,
  context: __SerdeContext
): GetTemplateSyncStatusOutput => {
  return {
    desiredState:
      output.desiredState != null ? deserializeAws_json1_0Revision(output.desiredState, context) : undefined,
    latestSuccessfulSync:
      output.latestSuccessfulSync != null
        ? deserializeAws_json1_0ResourceSyncAttempt(output.latestSuccessfulSync, context)
        : undefined,
    latestSync:
      output.latestSync != null ? deserializeAws_json1_0ResourceSyncAttempt(output.latestSync, context) : undefined,
  } as any;
};

const deserializeAws_json1_0InternalServerException = (
  output: any,
  context: __SerdeContext
): InternalServerException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ListComponentOutputsOutput = (
  output: any,
  context: __SerdeContext
): ListComponentOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? deserializeAws_json1_0OutputsList(output.outputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListComponentProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListComponentProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? deserializeAws_json1_0ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListComponentsOutput = (output: any, context: __SerdeContext): ListComponentsOutput => {
  return {
    components:
      output.components != null ? deserializeAws_json1_0ComponentSummaryList(output.components, context) : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListEnvironmentAccountConnectionsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentAccountConnectionsOutput => {
  return {
    environmentAccountConnections:
      output.environmentAccountConnections != null
        ? deserializeAws_json1_0EnvironmentAccountConnectionSummaryList(output.environmentAccountConnections, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListEnvironmentOutputsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? deserializeAws_json1_0OutputsList(output.outputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListEnvironmentProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? deserializeAws_json1_0ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListEnvironmentsOutput = (output: any, context: __SerdeContext): ListEnvironmentsOutput => {
  return {
    environments:
      output.environments != null
        ? deserializeAws_json1_0EnvironmentSummaryList(output.environments, context)
        : undefined,
    nextToken: __expectString(output.nextToken),
  } as any;
};

const deserializeAws_json1_0ListEnvironmentTemplatesOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentTemplatesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templates:
      output.templates != null
        ? deserializeAws_json1_0EnvironmentTemplateSummaryList(output.templates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListEnvironmentTemplateVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListEnvironmentTemplateVersionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templateVersions:
      output.templateVersions != null
        ? deserializeAws_json1_0EnvironmentTemplateVersionSummaryList(output.templateVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListRepositoriesOutput = (output: any, context: __SerdeContext): ListRepositoriesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    repositories:
      output.repositories != null
        ? deserializeAws_json1_0RepositorySummaryList(output.repositories, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListRepositorySyncDefinitionsOutput = (
  output: any,
  context: __SerdeContext
): ListRepositorySyncDefinitionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    syncDefinitions:
      output.syncDefinitions != null
        ? deserializeAws_json1_0RepositorySyncDefinitionList(output.syncDefinitions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServiceInstanceOutputsOutput = (
  output: any,
  context: __SerdeContext
): ListServiceInstanceOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? deserializeAws_json1_0OutputsList(output.outputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListServiceInstanceProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListServiceInstanceProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? deserializeAws_json1_0ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServiceInstancesOutput = (
  output: any,
  context: __SerdeContext
): ListServiceInstancesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    serviceInstances:
      output.serviceInstances != null
        ? deserializeAws_json1_0ServiceInstanceSummaryList(output.serviceInstances, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServicePipelineOutputsOutput = (
  output: any,
  context: __SerdeContext
): ListServicePipelineOutputsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    outputs: output.outputs != null ? deserializeAws_json1_0OutputsList(output.outputs, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListServicePipelineProvisionedResourcesOutput = (
  output: any,
  context: __SerdeContext
): ListServicePipelineProvisionedResourcesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    provisionedResources:
      output.provisionedResources != null
        ? deserializeAws_json1_0ProvisionedResourceList(output.provisionedResources, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServicesOutput = (output: any, context: __SerdeContext): ListServicesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    services: output.services != null ? deserializeAws_json1_0ServiceSummaryList(output.services, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ListServiceTemplatesOutput = (
  output: any,
  context: __SerdeContext
): ListServiceTemplatesOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templates:
      output.templates != null
        ? deserializeAws_json1_0ServiceTemplateSummaryList(output.templates, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListServiceTemplateVersionsOutput = (
  output: any,
  context: __SerdeContext
): ListServiceTemplateVersionsOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    templateVersions:
      output.templateVersions != null
        ? deserializeAws_json1_0ServiceTemplateVersionSummaryList(output.templateVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ListTagsForResourceOutput = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceOutput => {
  return {
    nextToken: __expectString(output.nextToken),
    tags: output.tags != null ? deserializeAws_json1_0TagList(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_0NotifyResourceDeploymentStatusChangeOutput = (
  output: any,
  context: __SerdeContext
): NotifyResourceDeploymentStatusChangeOutput => {
  return {} as any;
};

const deserializeAws_json1_0Output = (output: any, context: __SerdeContext): Output => {
  return {
    key: __expectString(output.key),
    valueString: __expectString(output.valueString),
  } as any;
};

const deserializeAws_json1_0OutputsList = (output: any, context: __SerdeContext): Output[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0Output(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ProvisionedResource = (output: any, context: __SerdeContext): ProvisionedResource => {
  return {
    identifier: __expectString(output.identifier),
    name: __expectString(output.name),
    provisioningEngine: __expectString(output.provisioningEngine),
  } as any;
};

const deserializeAws_json1_0ProvisionedResourceList = (output: any, context: __SerdeContext): ProvisionedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ProvisionedResource(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0RejectEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): RejectEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? deserializeAws_json1_0EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0Repository = (output: any, context: __SerdeContext): Repository => {
  return {
    arn: __expectString(output.arn),
    connectionArn: __expectString(output.connectionArn),
    encryptionKey: __expectString(output.encryptionKey),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
  } as any;
};

const deserializeAws_json1_0RepositoryBranch = (output: any, context: __SerdeContext): RepositoryBranch => {
  return {
    arn: __expectString(output.arn),
    branch: __expectString(output.branch),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
  } as any;
};

const deserializeAws_json1_0RepositorySummary = (output: any, context: __SerdeContext): RepositorySummary => {
  return {
    arn: __expectString(output.arn),
    name: __expectString(output.name),
    provider: __expectString(output.provider),
  } as any;
};

const deserializeAws_json1_0RepositorySummaryList = (output: any, context: __SerdeContext): RepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RepositorySummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0RepositorySyncAttempt = (output: any, context: __SerdeContext): RepositorySyncAttempt => {
  return {
    events: output.events != null ? deserializeAws_json1_0RepositorySyncEvents(output.events, context) : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_json1_0RepositorySyncDefinition = (
  output: any,
  context: __SerdeContext
): RepositorySyncDefinition => {
  return {
    branch: __expectString(output.branch),
    directory: __expectString(output.directory),
    parent: __expectString(output.parent),
    target: __expectString(output.target),
  } as any;
};

const deserializeAws_json1_0RepositorySyncDefinitionList = (
  output: any,
  context: __SerdeContext
): RepositorySyncDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RepositorySyncDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0RepositorySyncEvent = (output: any, context: __SerdeContext): RepositorySyncEvent => {
  return {
    event: __expectString(output.event),
    externalId: __expectString(output.externalId),
    time: output.time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.time))) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0RepositorySyncEvents = (output: any, context: __SerdeContext): RepositorySyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0RepositorySyncEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ResourceNotFoundException = (
  output: any,
  context: __SerdeContext
): ResourceNotFoundException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ResourceSyncAttempt = (output: any, context: __SerdeContext): ResourceSyncAttempt => {
  return {
    events: output.events != null ? deserializeAws_json1_0ResourceSyncEvents(output.events, context) : undefined,
    initialRevision:
      output.initialRevision != null ? deserializeAws_json1_0Revision(output.initialRevision, context) : undefined,
    startedAt:
      output.startedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.startedAt))) : undefined,
    status: __expectString(output.status),
    target: __expectString(output.target),
    targetRevision:
      output.targetRevision != null ? deserializeAws_json1_0Revision(output.targetRevision, context) : undefined,
  } as any;
};

const deserializeAws_json1_0ResourceSyncEvent = (output: any, context: __SerdeContext): ResourceSyncEvent => {
  return {
    event: __expectString(output.event),
    externalId: __expectString(output.externalId),
    time: output.time != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.time))) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_json1_0ResourceSyncEvents = (output: any, context: __SerdeContext): ResourceSyncEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ResourceSyncEvent(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Revision = (output: any, context: __SerdeContext): Revision => {
  return {
    branch: __expectString(output.branch),
    directory: __expectString(output.directory),
    repositoryName: __expectString(output.repositoryName),
    repositoryProvider: __expectString(output.repositoryProvider),
    sha: __expectString(output.sha),
  } as any;
};

const deserializeAws_json1_0Service = (output: any, context: __SerdeContext): Service => {
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
    pipeline: output.pipeline != null ? deserializeAws_json1_0ServicePipeline(output.pipeline, context) : undefined,
    repositoryConnectionArn: __expectString(output.repositoryConnectionArn),
    repositoryId: __expectString(output.repositoryId),
    spec: __expectString(output.spec),
    status: __expectString(output.status),
    statusMessage: __expectString(output.statusMessage),
    templateName: __expectString(output.templateName),
  } as any;
};

const deserializeAws_json1_0ServiceInstance = (output: any, context: __SerdeContext): ServiceInstance => {
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
    spec: __expectString(output.spec),
    templateMajorVersion: __expectString(output.templateMajorVersion),
    templateMinorVersion: __expectString(output.templateMinorVersion),
    templateName: __expectString(output.templateName),
  } as any;
};

const deserializeAws_json1_0ServiceInstanceSummary = (output: any, context: __SerdeContext): ServiceInstanceSummary => {
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

const deserializeAws_json1_0ServiceInstanceSummaryList = (
  output: any,
  context: __SerdeContext
): ServiceInstanceSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ServiceInstanceSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ServicePipeline = (output: any, context: __SerdeContext): ServicePipeline => {
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

const deserializeAws_json1_0ServiceQuotaExceededException = (
  output: any,
  context: __SerdeContext
): ServiceQuotaExceededException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0ServiceSummary = (output: any, context: __SerdeContext): ServiceSummary => {
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

const deserializeAws_json1_0ServiceTemplate = (output: any, context: __SerdeContext): ServiceTemplate => {
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

const deserializeAws_json1_0ServiceTemplateSummary = (output: any, context: __SerdeContext): ServiceTemplateSummary => {
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

const deserializeAws_json1_0ServiceTemplateSummaryList = (
  output: any,
  context: __SerdeContext
): ServiceTemplateSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ServiceTemplateSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList = (
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

const deserializeAws_json1_0ServiceTemplateVersion = (output: any, context: __SerdeContext): ServiceTemplateVersion => {
  return {
    arn: __expectString(output.arn),
    compatibleEnvironmentTemplates:
      output.compatibleEnvironmentTemplates != null
        ? deserializeAws_json1_0CompatibleEnvironmentTemplateList(output.compatibleEnvironmentTemplates, context)
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
        ? deserializeAws_json1_0ServiceTemplateSupportedComponentSourceInputList(
            output.supportedComponentSources,
            context
          )
        : undefined,
    templateName: __expectString(output.templateName),
  } as any;
};

const deserializeAws_json1_0ServiceTemplateVersionSummary = (
  output: any,
  context: __SerdeContext
): ServiceTemplateVersionSummary => {
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

const deserializeAws_json1_0ServiceTemplateVersionSummaryList = (
  output: any,
  context: __SerdeContext
): ServiceTemplateVersionSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_0ServiceTemplateVersionSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_0Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    key: __expectString(output.key),
    value: __expectString(output.value),
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

const deserializeAws_json1_0TagResourceOutput = (output: any, context: __SerdeContext): TagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0TemplateSyncConfig = (output: any, context: __SerdeContext): TemplateSyncConfig => {
  return {
    branch: __expectString(output.branch),
    repositoryName: __expectString(output.repositoryName),
    repositoryProvider: __expectString(output.repositoryProvider),
    subdirectory: __expectString(output.subdirectory),
    templateName: __expectString(output.templateName),
    templateType: __expectString(output.templateType),
  } as any;
};

const deserializeAws_json1_0ThrottlingException = (output: any, context: __SerdeContext): ThrottlingException => {
  return {
    message: __expectString(output.message),
  } as any;
};

const deserializeAws_json1_0UntagResourceOutput = (output: any, context: __SerdeContext): UntagResourceOutput => {
  return {} as any;
};

const deserializeAws_json1_0UpdateAccountSettingsOutput = (
  output: any,
  context: __SerdeContext
): UpdateAccountSettingsOutput => {
  return {
    accountSettings:
      output.accountSettings != null
        ? deserializeAws_json1_0AccountSettings(output.accountSettings, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateComponentOutput = (output: any, context: __SerdeContext): UpdateComponentOutput => {
  return {
    component: output.component != null ? deserializeAws_json1_0Component(output.component, context) : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateEnvironmentAccountConnectionOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentAccountConnectionOutput => {
  return {
    environmentAccountConnection:
      output.environmentAccountConnection != null
        ? deserializeAws_json1_0EnvironmentAccountConnection(output.environmentAccountConnection, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateEnvironmentOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentOutput => {
  return {
    environment:
      output.environment != null ? deserializeAws_json1_0Environment(output.environment, context) : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateEnvironmentTemplateOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentTemplateOutput => {
  return {
    environmentTemplate:
      output.environmentTemplate != null
        ? deserializeAws_json1_0EnvironmentTemplate(output.environmentTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateEnvironmentTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): UpdateEnvironmentTemplateVersionOutput => {
  return {
    environmentTemplateVersion:
      output.environmentTemplateVersion != null
        ? deserializeAws_json1_0EnvironmentTemplateVersion(output.environmentTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateServiceInstanceOutput = (
  output: any,
  context: __SerdeContext
): UpdateServiceInstanceOutput => {
  return {
    serviceInstance:
      output.serviceInstance != null
        ? deserializeAws_json1_0ServiceInstance(output.serviceInstance, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateServiceOutput = (output: any, context: __SerdeContext): UpdateServiceOutput => {
  return {
    service: output.service != null ? deserializeAws_json1_0Service(output.service, context) : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateServicePipelineOutput = (
  output: any,
  context: __SerdeContext
): UpdateServicePipelineOutput => {
  return {
    pipeline: output.pipeline != null ? deserializeAws_json1_0ServicePipeline(output.pipeline, context) : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateServiceTemplateOutput = (
  output: any,
  context: __SerdeContext
): UpdateServiceTemplateOutput => {
  return {
    serviceTemplate:
      output.serviceTemplate != null
        ? deserializeAws_json1_0ServiceTemplate(output.serviceTemplate, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateServiceTemplateVersionOutput = (
  output: any,
  context: __SerdeContext
): UpdateServiceTemplateVersionOutput => {
  return {
    serviceTemplateVersion:
      output.serviceTemplateVersion != null
        ? deserializeAws_json1_0ServiceTemplateVersion(output.serviceTemplateVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0UpdateTemplateSyncConfigOutput = (
  output: any,
  context: __SerdeContext
): UpdateTemplateSyncConfigOutput => {
  return {
    templateSyncConfig:
      output.templateSyncConfig != null
        ? deserializeAws_json1_0TemplateSyncConfig(output.templateSyncConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_0ValidationException = (output: any, context: __SerdeContext): ValidationException => {
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
