// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateServiceRoleToAccountCommandInput,
  AssociateServiceRoleToAccountCommandOutput,
} from "../commands/AssociateServiceRoleToAccountCommand";
import {
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
} from "../commands/BatchAssociateClientDeviceWithCoreDeviceCommand";
import {
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
} from "../commands/BatchDisassociateClientDeviceFromCoreDeviceCommand";
import { CancelDeploymentCommandInput, CancelDeploymentCommandOutput } from "../commands/CancelDeploymentCommand";
import {
  CreateComponentVersionCommandInput,
  CreateComponentVersionCommandOutput,
} from "../commands/CreateComponentVersionCommand";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput } from "../commands/CreateDeploymentCommand";
import { DeleteComponentCommandInput, DeleteComponentCommandOutput } from "../commands/DeleteComponentCommand";
import { DeleteCoreDeviceCommandInput, DeleteCoreDeviceCommandOutput } from "../commands/DeleteCoreDeviceCommand";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput } from "../commands/DeleteDeploymentCommand";
import { DescribeComponentCommandInput, DescribeComponentCommandOutput } from "../commands/DescribeComponentCommand";
import {
  DisassociateServiceRoleFromAccountCommandInput,
  DisassociateServiceRoleFromAccountCommandOutput,
} from "../commands/DisassociateServiceRoleFromAccountCommand";
import { GetComponentCommandInput, GetComponentCommandOutput } from "../commands/GetComponentCommand";
import {
  GetComponentVersionArtifactCommandInput,
  GetComponentVersionArtifactCommandOutput,
} from "../commands/GetComponentVersionArtifactCommand";
import {
  GetConnectivityInfoCommandInput,
  GetConnectivityInfoCommandOutput,
} from "../commands/GetConnectivityInfoCommand";
import { GetCoreDeviceCommandInput, GetCoreDeviceCommandOutput } from "../commands/GetCoreDeviceCommand";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput } from "../commands/GetDeploymentCommand";
import {
  GetServiceRoleForAccountCommandInput,
  GetServiceRoleForAccountCommandOutput,
} from "../commands/GetServiceRoleForAccountCommand";
import {
  ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  ListClientDevicesAssociatedWithCoreDeviceCommandOutput,
} from "../commands/ListClientDevicesAssociatedWithCoreDeviceCommand";
import { ListComponentsCommandInput, ListComponentsCommandOutput } from "../commands/ListComponentsCommand";
import {
  ListComponentVersionsCommandInput,
  ListComponentVersionsCommandOutput,
} from "../commands/ListComponentVersionsCommand";
import { ListCoreDevicesCommandInput, ListCoreDevicesCommandOutput } from "../commands/ListCoreDevicesCommand";
import { ListDeploymentsCommandInput, ListDeploymentsCommandOutput } from "../commands/ListDeploymentsCommand";
import {
  ListEffectiveDeploymentsCommandInput,
  ListEffectiveDeploymentsCommandOutput,
} from "../commands/ListEffectiveDeploymentsCommand";
import {
  ListInstalledComponentsCommandInput,
  ListInstalledComponentsCommandOutput,
} from "../commands/ListInstalledComponentsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ResolveComponentCandidatesCommandInput,
  ResolveComponentCandidatesCommandOutput,
} from "../commands/ResolveComponentCandidatesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
} from "../commands/UpdateConnectivityInfoCommand";
import { GreengrassV2ServiceException as __BaseException } from "../models/GreengrassV2ServiceException";
import {
  AccessDeniedException,
  AssociateClientDeviceWithCoreDeviceEntry,
  AssociateClientDeviceWithCoreDeviceErrorEntry,
  AssociatedClientDevice,
  CloudComponentStatus,
  Component,
  ComponentCandidate,
  ComponentConfigurationUpdate,
  ComponentDependencyRequirement,
  ComponentDeploymentSpecification,
  ComponentLatestVersion,
  ComponentPlatform,
  ComponentRunWith,
  ComponentVersionListItem,
  ConflictException,
  ConnectivityInfo,
  CoreDevice,
  Deployment,
  DeploymentComponentUpdatePolicy,
  DeploymentConfigurationValidationPolicy,
  DeploymentIoTJobConfiguration,
  DeploymentPolicies,
  DisassociateClientDeviceFromCoreDeviceEntry,
  DisassociateClientDeviceFromCoreDeviceErrorEntry,
  EffectiveDeployment,
  EffectiveDeploymentStatusDetails,
  InstalledComponent,
  InternalServerException,
  IoTJobAbortConfig,
  IoTJobAbortCriteria,
  IoTJobExecutionsRolloutConfig,
  IoTJobExponentialRolloutRate,
  IoTJobRateIncreaseCriteria,
  IoTJobTimeoutConfig,
  LambdaContainerParams,
  LambdaDeviceMount,
  LambdaEventSource,
  LambdaExecutionParameters,
  LambdaFunctionRecipeSource,
  LambdaLinuxProcessParams,
  LambdaVolumeMount,
  RequestAlreadyInProgressException,
  ResolvedComponentVersion,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  SystemResourceLimits,
  ThrottlingException,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const se_AssociateServiceRoleToAccountCommand = async (
  input: AssociateServiceRoleToAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/servicerole";
  let body: any;
  body = JSON.stringify({
    ...(input.roleArn != null && { RoleArn: input.roleArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand
 */
export const se_BatchAssociateClientDeviceWithCoreDeviceCommand = async (
  input: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}/associateClientDevices";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && { entries: se_AssociateClientDeviceWithCoreDeviceEntryList(input.entries, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand
 */
export const se_BatchDisassociateClientDeviceFromCoreDeviceCommand = async (
  input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}/disassociateClientDevices";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    ...(input.entries != null && {
      entries: se_DisassociateClientDeviceFromCoreDeviceEntryList(input.entries, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CancelDeploymentCommand
 */
export const se_CancelDeploymentCommand = async (
  input: CancelDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/deployments/{deploymentId}/cancel";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deploymentId",
    () => input.deploymentId!,
    "{deploymentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateComponentVersionCommand
 */
export const se_CreateComponentVersionCommand = async (
  input: CreateComponentVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/createComponentVersion";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.inlineRecipe != null && { inlineRecipe: context.base64Encoder(input.inlineRecipe) }),
    ...(input.lambdaFunction != null && {
      lambdaFunction: se_LambdaFunctionRecipeSource(input.lambdaFunction, context),
    }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDeploymentCommand
 */
export const se_CreateDeploymentCommand = async (
  input: CreateDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/deployments";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.components != null && { components: se_ComponentDeploymentSpecifications(input.components, context) }),
    ...(input.deploymentName != null && { deploymentName: input.deploymentName }),
    ...(input.deploymentPolicies != null && {
      deploymentPolicies: se_DeploymentPolicies(input.deploymentPolicies, context),
    }),
    ...(input.iotJobConfiguration != null && {
      iotJobConfiguration: se_DeploymentIoTJobConfiguration(input.iotJobConfiguration, context),
    }),
    ...(input.parentTargetArn != null && { parentTargetArn: input.parentTargetArn }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.targetArn != null && { targetArn: input.targetArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteComponentCommand
 */
export const se_DeleteComponentCommand = async (
  input: DeleteComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/components/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteCoreDeviceCommand
 */
export const se_DeleteCoreDeviceCommand = async (
  input: DeleteCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDeploymentCommand
 */
export const se_DeleteDeploymentCommand = async (
  input: DeleteDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/deployments/{deploymentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deploymentId",
    () => input.deploymentId!,
    "{deploymentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeComponentCommand
 */
export const se_DescribeComponentCommand = async (
  input: DescribeComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/components/{arn}/metadata";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const se_DisassociateServiceRoleFromAccountCommand = async (
  input: DisassociateServiceRoleFromAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/servicerole";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetComponentCommand
 */
export const se_GetComponentCommand = async (
  input: GetComponentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/components/{arn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    recipeOutputFormat: [, input.recipeOutputFormat!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetComponentVersionArtifactCommand
 */
export const se_GetComponentVersionArtifactCommand = async (
  input: GetComponentVersionArtifactCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/components/{arn}/artifacts/{artifactName+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "artifactName",
    () => input.artifactName!,
    "{artifactName+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetConnectivityInfoCommand
 */
export const se_GetConnectivityInfoCommand = async (
  input: GetConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/things/{thingName}/connectivityInfo";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetCoreDeviceCommand
 */
export const se_GetCoreDeviceCommand = async (
  input: GetCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDeploymentCommand
 */
export const se_GetDeploymentCommand = async (
  input: GetDeploymentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/deployments/{deploymentId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deploymentId",
    () => input.deploymentId!,
    "{deploymentId}",
    false
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const se_GetServiceRoleForAccountCommand = async (
  input: GetServiceRoleForAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/servicerole";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand
 */
export const se_ListClientDevicesAssociatedWithCoreDeviceCommand = async (
  input: ListClientDevicesAssociatedWithCoreDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}/associatedClientDevices";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListComponentsCommand
 */
export const se_ListComponentsCommand = async (
  input: ListComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/components";
  const query: any = map({
    scope: [, input.scope!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListComponentVersionsCommand
 */
export const se_ListComponentVersionsCommand = async (
  input: ListComponentVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/components/{arn}/versions";
  resolvedPath = __resolvedPath(resolvedPath, input, "arn", () => input.arn!, "{arn}", false);
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListCoreDevicesCommand
 */
export const se_ListCoreDevicesCommand = async (
  input: ListCoreDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/coreDevices";
  const query: any = map({
    thingGroupArn: [, input.thingGroupArn!],
    status: [, input.status!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListDeploymentsCommand
 */
export const se_ListDeploymentsCommand = async (
  input: ListDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/deployments";
  const query: any = map({
    targetArn: [, input.targetArn!],
    historyFilter: [, input.historyFilter!],
    parentTargetArn: [, input.parentTargetArn!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListEffectiveDeploymentsCommand
 */
export const se_ListEffectiveDeploymentsCommand = async (
  input: ListEffectiveDeploymentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}/effectiveDeployments";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListInstalledComponentsCommand
 */
export const se_ListInstalledComponentsCommand = async (
  input: ListInstalledComponentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/v2/coreDevices/{coreDeviceThingName}/installedComponents";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "coreDeviceThingName",
    () => input.coreDeviceThingName!,
    "{coreDeviceThingName}",
    false
  );
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    topologyFilter: [, input.topologyFilter!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ResolveComponentCandidatesCommand
 */
export const se_ResolveComponentCandidatesCommand = async (
  input: ResolveComponentCandidatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/greengrass/v2/resolveComponentCandidates";
  let body: any;
  body = JSON.stringify({
    ...(input.componentCandidates != null && {
      componentCandidates: se_ComponentCandidateList(input.componentCandidates, context),
    }),
    ...(input.platform != null && { platform: se_ComponentPlatform(input.platform, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
    ],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const se_UpdateConnectivityInfoCommand = async (
  input: UpdateConnectivityInfoCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/greengrass/things/{thingName}/connectivityInfo";
  resolvedPath = __resolvedPath(resolvedPath, input, "thingName", () => input.thingName!, "{thingName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.connectivityInfo != null && {
      ConnectivityInfo: se_connectivityInfoList(input.connectivityInfo, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateServiceRoleToAccountCommand
 */
export const de_AssociateServiceRoleToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateServiceRoleToAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociatedAt != null) {
    contents.associatedAt = __expectString(data.AssociatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateServiceRoleToAccountCommandError
 */
const de_AssociateServiceRoleToAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand
 */
export const de_BatchAssociateClientDeviceWithCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchAssociateClientDeviceWithCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_AssociateClientDeviceWithCoreDeviceErrorList(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommandError
 */
const de_BatchAssociateClientDeviceWithCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand
 */
export const de_BatchDisassociateClientDeviceFromCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchDisassociateClientDeviceFromCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = de_DisassociateClientDeviceFromCoreDeviceErrorList(data.errorEntries, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommandError
 */
const de_BatchDisassociateClientDeviceFromCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1CancelDeploymentCommand
 */
export const de_CancelDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CancelDeploymentCommandError
 */
const de_CancelDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1CreateComponentVersionCommand
 */
export const de_CreateComponentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateComponentVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.componentName != null) {
    contents.componentName = __expectString(data.componentName);
  }
  if (data.componentVersion != null) {
    contents.componentVersion = __expectString(data.componentVersion);
  }
  if (data.creationTimestamp != null) {
    contents.creationTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTimestamp)));
  }
  if (data.status != null) {
    contents.status = de_CloudComponentStatus(data.status, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateComponentVersionCommandError
 */
const de_CreateComponentVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestAlreadyInProgressException":
    case "com.amazonaws.greengrassv2#RequestAlreadyInProgressException":
      throw await de_RequestAlreadyInProgressExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.greengrassv2#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1CreateDeploymentCommand
 */
export const de_CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deploymentId != null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  if (data.iotJobArn != null) {
    contents.iotJobArn = __expectString(data.iotJobArn);
  }
  if (data.iotJobId != null) {
    contents.iotJobId = __expectString(data.iotJobId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeploymentCommandError
 */
const de_CreateDeploymentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "RequestAlreadyInProgressException":
    case "com.amazonaws.greengrassv2#RequestAlreadyInProgressException":
      throw await de_RequestAlreadyInProgressExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1DeleteComponentCommand
 */
export const de_DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteComponentCommandError
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
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1DeleteCoreDeviceCommand
 */
export const de_DeleteCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreDeviceCommandError
 */
const de_DeleteCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1DeleteDeploymentCommand
 */
export const de_DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeploymentCommandError
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
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1DescribeComponentCommand
 */
export const de_DescribeComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.arn != null) {
    contents.arn = __expectString(data.arn);
  }
  if (data.componentName != null) {
    contents.componentName = __expectString(data.componentName);
  }
  if (data.componentVersion != null) {
    contents.componentVersion = __expectString(data.componentVersion);
  }
  if (data.creationTimestamp != null) {
    contents.creationTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTimestamp)));
  }
  if (data.description != null) {
    contents.description = __expectString(data.description);
  }
  if (data.platforms != null) {
    contents.platforms = de_ComponentPlatformList(data.platforms, context);
  }
  if (data.publisher != null) {
    contents.publisher = __expectString(data.publisher);
  }
  if (data.status != null) {
    contents.status = de_CloudComponentStatus(data.status, context);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeComponentCommandError
 */
const de_DescribeComponentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand
 */
export const de_DisassociateServiceRoleFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateServiceRoleFromAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DisassociatedAt != null) {
    contents.disassociatedAt = __expectString(data.DisassociatedAt);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError
 */
const de_DisassociateServiceRoleFromAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetComponentCommand
 */
export const de_GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.recipe != null) {
    contents.recipe = context.base64Decoder(data.recipe);
  }
  if (data.recipeOutputFormat != null) {
    contents.recipeOutputFormat = __expectString(data.recipeOutputFormat);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentCommandError
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
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1GetComponentVersionArtifactCommand
 */
export const de_GetComponentVersionArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentVersionArtifactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetComponentVersionArtifactCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.preSignedUrl != null) {
    contents.preSignedUrl = __expectString(data.preSignedUrl);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetComponentVersionArtifactCommandError
 */
const de_GetComponentVersionArtifactCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentVersionArtifactCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1GetConnectivityInfoCommand
 */
export const de_GetConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetConnectivityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectivityInfo != null) {
    contents.connectivityInfo = de_connectivityInfoList(data.ConnectivityInfo, context);
  }
  if (data.Message != null) {
    contents.message = __expectString(data.Message);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectivityInfoCommandError
 */
const de_GetConnectivityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1GetCoreDeviceCommand
 */
export const de_GetCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.architecture != null) {
    contents.architecture = __expectString(data.architecture);
  }
  if (data.coreDeviceThingName != null) {
    contents.coreDeviceThingName = __expectString(data.coreDeviceThingName);
  }
  if (data.coreVersion != null) {
    contents.coreVersion = __expectString(data.coreVersion);
  }
  if (data.lastStatusUpdateTimestamp != null) {
    contents.lastStatusUpdateTimestamp = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.lastStatusUpdateTimestamp))
    );
  }
  if (data.platform != null) {
    contents.platform = __expectString(data.platform);
  }
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreDeviceCommandError
 */
const de_GetCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1GetDeploymentCommand
 */
export const de_GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.components != null) {
    contents.components = de_ComponentDeploymentSpecifications(data.components, context);
  }
  if (data.creationTimestamp != null) {
    contents.creationTimestamp = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.creationTimestamp)));
  }
  if (data.deploymentId != null) {
    contents.deploymentId = __expectString(data.deploymentId);
  }
  if (data.deploymentName != null) {
    contents.deploymentName = __expectString(data.deploymentName);
  }
  if (data.deploymentPolicies != null) {
    contents.deploymentPolicies = de_DeploymentPolicies(data.deploymentPolicies, context);
  }
  if (data.deploymentStatus != null) {
    contents.deploymentStatus = __expectString(data.deploymentStatus);
  }
  if (data.iotJobArn != null) {
    contents.iotJobArn = __expectString(data.iotJobArn);
  }
  if (data.iotJobConfiguration != null) {
    contents.iotJobConfiguration = de_DeploymentIoTJobConfiguration(data.iotJobConfiguration, context);
  }
  if (data.iotJobId != null) {
    contents.iotJobId = __expectString(data.iotJobId);
  }
  if (data.isLatestForTarget != null) {
    contents.isLatestForTarget = __expectBoolean(data.isLatestForTarget);
  }
  if (data.parentTargetArn != null) {
    contents.parentTargetArn = __expectString(data.parentTargetArn);
  }
  if (data.revisionId != null) {
    contents.revisionId = __expectString(data.revisionId);
  }
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.targetArn != null) {
    contents.targetArn = __expectString(data.targetArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDeploymentCommandError
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
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1GetServiceRoleForAccountCommand
 */
export const de_GetServiceRoleForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetServiceRoleForAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AssociatedAt != null) {
    contents.associatedAt = __expectString(data.AssociatedAt);
  }
  if (data.RoleArn != null) {
    contents.roleArn = __expectString(data.RoleArn);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetServiceRoleForAccountCommandError
 */
const de_GetServiceRoleForAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand
 */
export const de_ListClientDevicesAssociatedWithCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClientDevicesAssociatedWithCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedClientDevices != null) {
    contents.associatedClientDevices = de_AssociatedClientDeviceList(data.associatedClientDevices, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommandError
 */
const de_ListClientDevicesAssociatedWithCoreDeviceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListComponentsCommand
 */
export const de_ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.components != null) {
    contents.components = de_ComponentList(data.components, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentsCommandError
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
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListComponentVersionsCommand
 */
export const de_ListComponentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListComponentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentVersions != null) {
    contents.componentVersions = de_ComponentVersionList(data.componentVersions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListComponentVersionsCommandError
 */
const de_ListComponentVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListCoreDevicesCommand
 */
export const de_ListCoreDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCoreDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.coreDevices != null) {
    contents.coreDevices = de_CoreDevicesList(data.coreDevices, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreDevicesCommandError
 */
const de_ListCoreDevicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDevicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListDeploymentsCommand
 */
export const de_ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deployments != null) {
    contents.deployments = de_DeploymentList(data.deployments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDeploymentsCommandError
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
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListEffectiveDeploymentsCommand
 */
export const de_ListEffectiveDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEffectiveDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListEffectiveDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.effectiveDeployments != null) {
    contents.effectiveDeployments = de_EffectiveDeploymentsList(data.effectiveDeployments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListEffectiveDeploymentsCommandError
 */
const de_ListEffectiveDeploymentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEffectiveDeploymentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListInstalledComponentsCommand
 */
export const de_ListInstalledComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstalledComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListInstalledComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.installedComponents != null) {
    contents.installedComponents = de_InstalledComponentList(data.installedComponents, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListInstalledComponentsCommandError
 */
const de_ListInstalledComponentsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstalledComponentsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1ResolveComponentCandidatesCommand
 */
export const de_ResolveComponentCandidatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveComponentCandidatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ResolveComponentCandidatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolvedComponentVersions != null) {
    contents.resolvedComponentVersions = de_ResolvedComponentVersionsList(data.resolvedComponentVersions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ResolveComponentCandidatesCommandError
 */
const de_ResolveComponentCandidatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveComponentCandidatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.greengrassv2#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
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
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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
 * deserializeAws_restJson1UpdateConnectivityInfoCommand
 */
export const de_UpdateConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateConnectivityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Message != null) {
    contents.message = __expectString(data.Message);
  }
  if (data.Version != null) {
    contents.version = __expectString(data.Version);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectivityInfoCommandError
 */
const de_UpdateConnectivityInfoCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
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

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestAlreadyInProgressExceptionRes
 */
const de_RequestAlreadyInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestAlreadyInProgressException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new RequestAlreadyInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceQuotaExceededExceptionRes
 */
const de_ServiceQuotaExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ServiceQuotaExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.quotaCode != null) {
    contents.quotaCode = __expectString(data.quotaCode);
  }
  if (data.serviceCode != null) {
    contents.serviceCode = __expectString(data.serviceCode);
  }
  const exception = new ThrottlingException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ValidationExceptionRes
 */
const de_ValidationExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fields != null) {
    contents.fields = de_ValidationExceptionFieldList(data.fields, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AssociateClientDeviceWithCoreDeviceEntry
 */
const se_AssociateClientDeviceWithCoreDeviceEntry = (
  input: AssociateClientDeviceWithCoreDeviceEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_restJson1AssociateClientDeviceWithCoreDeviceEntryList
 */
const se_AssociateClientDeviceWithCoreDeviceEntryList = (
  input: AssociateClientDeviceWithCoreDeviceEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AssociateClientDeviceWithCoreDeviceEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentCandidate
 */
const se_ComponentCandidate = (input: ComponentCandidate, context: __SerdeContext): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentVersion != null && { componentVersion: input.componentVersion }),
    ...(input.versionRequirements != null && {
      versionRequirements: se_ComponentVersionRequirementMap(input.versionRequirements, context),
    }),
  };
};

/**
 * serializeAws_restJson1ComponentCandidateList
 */
const se_ComponentCandidateList = (input: ComponentCandidate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentCandidate(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentConfigurationPathList
 */
const se_ComponentConfigurationPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ComponentConfigurationUpdate
 */
const se_ComponentConfigurationUpdate = (input: ComponentConfigurationUpdate, context: __SerdeContext): any => {
  return {
    ...(input.merge != null && { merge: input.merge }),
    ...(input.reset != null && { reset: se_ComponentConfigurationPathList(input.reset, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentDependencyMap
 */
const se_ComponentDependencyMap = (
  input: Record<string, ComponentDependencyRequirement>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentDependencyRequirement(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentDependencyRequirement
 */
const se_ComponentDependencyRequirement = (input: ComponentDependencyRequirement, context: __SerdeContext): any => {
  return {
    ...(input.dependencyType != null && { dependencyType: input.dependencyType }),
    ...(input.versionRequirement != null && { versionRequirement: input.versionRequirement }),
  };
};

/**
 * serializeAws_restJson1ComponentDeploymentSpecification
 */
const se_ComponentDeploymentSpecification = (input: ComponentDeploymentSpecification, context: __SerdeContext): any => {
  return {
    ...(input.componentVersion != null && { componentVersion: input.componentVersion }),
    ...(input.configurationUpdate != null && {
      configurationUpdate: se_ComponentConfigurationUpdate(input.configurationUpdate, context),
    }),
    ...(input.runWith != null && { runWith: se_ComponentRunWith(input.runWith, context) }),
  };
};

/**
 * serializeAws_restJson1ComponentDeploymentSpecifications
 */
const se_ComponentDeploymentSpecifications = (
  input: Record<string, ComponentDeploymentSpecification>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_ComponentDeploymentSpecification(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ComponentPlatform
 */
const se_ComponentPlatform = (input: ComponentPlatform, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && { attributes: se_PlatformAttributesMap(input.attributes, context) }),
    ...(input.name != null && { name: input.name }),
  };
};

/**
 * serializeAws_restJson1ComponentPlatformList
 */
const se_ComponentPlatformList = (input: ComponentPlatform[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ComponentPlatform(entry, context);
    });
};

/**
 * serializeAws_restJson1ComponentRunWith
 */
const se_ComponentRunWith = (input: ComponentRunWith, context: __SerdeContext): any => {
  return {
    ...(input.posixUser != null && { posixUser: input.posixUser }),
    ...(input.systemResourceLimits != null && {
      systemResourceLimits: se_SystemResourceLimits(input.systemResourceLimits, context),
    }),
    ...(input.windowsUser != null && { windowsUser: input.windowsUser }),
  };
};

/**
 * serializeAws_restJson1ComponentVersionRequirementMap
 */
const se_ComponentVersionRequirementMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ConnectivityInfo
 */
const se_ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return {
    ...(input.hostAddress != null && { HostAddress: input.hostAddress }),
    ...(input.id != null && { Id: input.id }),
    ...(input.metadata != null && { Metadata: input.metadata }),
    ...(input.portNumber != null && { PortNumber: input.portNumber }),
  };
};

/**
 * serializeAws_restJson1connectivityInfoList
 */
const se_connectivityInfoList = (input: ConnectivityInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConnectivityInfo(entry, context);
    });
};

/**
 * serializeAws_restJson1DeploymentComponentUpdatePolicy
 */
const se_DeploymentComponentUpdatePolicy = (input: DeploymentComponentUpdatePolicy, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

/**
 * serializeAws_restJson1DeploymentConfigurationValidationPolicy
 */
const se_DeploymentConfigurationValidationPolicy = (
  input: DeploymentConfigurationValidationPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

/**
 * serializeAws_restJson1DeploymentIoTJobConfiguration
 */
const se_DeploymentIoTJobConfiguration = (input: DeploymentIoTJobConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.abortConfig != null && { abortConfig: se_IoTJobAbortConfig(input.abortConfig, context) }),
    ...(input.jobExecutionsRolloutConfig != null && {
      jobExecutionsRolloutConfig: se_IoTJobExecutionsRolloutConfig(input.jobExecutionsRolloutConfig, context),
    }),
    ...(input.timeoutConfig != null && { timeoutConfig: se_IoTJobTimeoutConfig(input.timeoutConfig, context) }),
  };
};

/**
 * serializeAws_restJson1DeploymentPolicies
 */
const se_DeploymentPolicies = (input: DeploymentPolicies, context: __SerdeContext): any => {
  return {
    ...(input.componentUpdatePolicy != null && {
      componentUpdatePolicy: se_DeploymentComponentUpdatePolicy(input.componentUpdatePolicy, context),
    }),
    ...(input.configurationValidationPolicy != null && {
      configurationValidationPolicy: se_DeploymentConfigurationValidationPolicy(
        input.configurationValidationPolicy,
        context
      ),
    }),
    ...(input.failureHandlingPolicy != null && { failureHandlingPolicy: input.failureHandlingPolicy }),
  };
};

/**
 * serializeAws_restJson1DisassociateClientDeviceFromCoreDeviceEntry
 */
const se_DisassociateClientDeviceFromCoreDeviceEntry = (
  input: DisassociateClientDeviceFromCoreDeviceEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

/**
 * serializeAws_restJson1DisassociateClientDeviceFromCoreDeviceEntryList
 */
const se_DisassociateClientDeviceFromCoreDeviceEntryList = (
  input: DisassociateClientDeviceFromCoreDeviceEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DisassociateClientDeviceFromCoreDeviceEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1IoTJobAbortConfig
 */
const se_IoTJobAbortConfig = (input: IoTJobAbortConfig, context: __SerdeContext): any => {
  return {
    ...(input.criteriaList != null && { criteriaList: se_IoTJobAbortCriteriaList(input.criteriaList, context) }),
  };
};

/**
 * serializeAws_restJson1IoTJobAbortCriteria
 */
const se_IoTJobAbortCriteria = (input: IoTJobAbortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.failureType != null && { failureType: input.failureType }),
    ...(input.minNumberOfExecutedThings != null && { minNumberOfExecutedThings: input.minNumberOfExecutedThings }),
    ...(input.thresholdPercentage != null && { thresholdPercentage: __serializeFloat(input.thresholdPercentage) }),
  };
};

/**
 * serializeAws_restJson1IoTJobAbortCriteriaList
 */
const se_IoTJobAbortCriteriaList = (input: IoTJobAbortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_IoTJobAbortCriteria(entry, context);
    });
};

/**
 * serializeAws_restJson1IoTJobExecutionsRolloutConfig
 */
const se_IoTJobExecutionsRolloutConfig = (input: IoTJobExecutionsRolloutConfig, context: __SerdeContext): any => {
  return {
    ...(input.exponentialRate != null && {
      exponentialRate: se_IoTJobExponentialRolloutRate(input.exponentialRate, context),
    }),
    ...(input.maximumPerMinute != null && { maximumPerMinute: input.maximumPerMinute }),
  };
};

/**
 * serializeAws_restJson1IoTJobExponentialRolloutRate
 */
const se_IoTJobExponentialRolloutRate = (input: IoTJobExponentialRolloutRate, context: __SerdeContext): any => {
  return {
    ...(input.baseRatePerMinute != null && { baseRatePerMinute: input.baseRatePerMinute }),
    ...(input.incrementFactor != null && { incrementFactor: __serializeFloat(input.incrementFactor) }),
    ...(input.rateIncreaseCriteria != null && {
      rateIncreaseCriteria: se_IoTJobRateIncreaseCriteria(input.rateIncreaseCriteria, context),
    }),
  };
};

/**
 * serializeAws_restJson1IoTJobRateIncreaseCriteria
 */
const se_IoTJobRateIncreaseCriteria = (input: IoTJobRateIncreaseCriteria, context: __SerdeContext): any => {
  return {
    ...(input.numberOfNotifiedThings != null && { numberOfNotifiedThings: input.numberOfNotifiedThings }),
    ...(input.numberOfSucceededThings != null && { numberOfSucceededThings: input.numberOfSucceededThings }),
  };
};

/**
 * serializeAws_restJson1IoTJobTimeoutConfig
 */
const se_IoTJobTimeoutConfig = (input: IoTJobTimeoutConfig, context: __SerdeContext): any => {
  return {
    ...(input.inProgressTimeoutInMinutes != null && { inProgressTimeoutInMinutes: input.inProgressTimeoutInMinutes }),
  };
};

/**
 * serializeAws_restJson1LambdaContainerParams
 */
const se_LambdaContainerParams = (input: LambdaContainerParams, context: __SerdeContext): any => {
  return {
    ...(input.devices != null && { devices: se_LambdaDeviceList(input.devices, context) }),
    ...(input.memorySizeInKB != null && { memorySizeInKB: input.memorySizeInKB }),
    ...(input.mountROSysfs != null && { mountROSysfs: input.mountROSysfs }),
    ...(input.volumes != null && { volumes: se_LambdaVolumeList(input.volumes, context) }),
  };
};

/**
 * serializeAws_restJson1LambdaDeviceList
 */
const se_LambdaDeviceList = (input: LambdaDeviceMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LambdaDeviceMount(entry, context);
    });
};

/**
 * serializeAws_restJson1LambdaDeviceMount
 */
const se_LambdaDeviceMount = (input: LambdaDeviceMount, context: __SerdeContext): any => {
  return {
    ...(input.addGroupOwner != null && { addGroupOwner: input.addGroupOwner }),
    ...(input.path != null && { path: input.path }),
    ...(input.permission != null && { permission: input.permission }),
  };
};

/**
 * serializeAws_restJson1LambdaEnvironmentVariables
 */
const se_LambdaEnvironmentVariables = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1LambdaEventSource
 */
const se_LambdaEventSource = (input: LambdaEventSource, context: __SerdeContext): any => {
  return {
    ...(input.topic != null && { topic: input.topic }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1LambdaEventSourceList
 */
const se_LambdaEventSourceList = (input: LambdaEventSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LambdaEventSource(entry, context);
    });
};

/**
 * serializeAws_restJson1LambdaExecArgsList
 */
const se_LambdaExecArgsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1LambdaExecutionParameters
 */
const se_LambdaExecutionParameters = (input: LambdaExecutionParameters, context: __SerdeContext): any => {
  return {
    ...(input.environmentVariables != null && {
      environmentVariables: se_LambdaEnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.eventSources != null && { eventSources: se_LambdaEventSourceList(input.eventSources, context) }),
    ...(input.execArgs != null && { execArgs: se_LambdaExecArgsList(input.execArgs, context) }),
    ...(input.inputPayloadEncodingType != null && { inputPayloadEncodingType: input.inputPayloadEncodingType }),
    ...(input.linuxProcessParams != null && {
      linuxProcessParams: se_LambdaLinuxProcessParams(input.linuxProcessParams, context),
    }),
    ...(input.maxIdleTimeInSeconds != null && { maxIdleTimeInSeconds: input.maxIdleTimeInSeconds }),
    ...(input.maxInstancesCount != null && { maxInstancesCount: input.maxInstancesCount }),
    ...(input.maxQueueSize != null && { maxQueueSize: input.maxQueueSize }),
    ...(input.pinned != null && { pinned: input.pinned }),
    ...(input.statusTimeoutInSeconds != null && { statusTimeoutInSeconds: input.statusTimeoutInSeconds }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

/**
 * serializeAws_restJson1LambdaFunctionRecipeSource
 */
const se_LambdaFunctionRecipeSource = (input: LambdaFunctionRecipeSource, context: __SerdeContext): any => {
  return {
    ...(input.componentDependencies != null && {
      componentDependencies: se_ComponentDependencyMap(input.componentDependencies, context),
    }),
    ...(input.componentLambdaParameters != null && {
      componentLambdaParameters: se_LambdaExecutionParameters(input.componentLambdaParameters, context),
    }),
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentPlatforms != null && {
      componentPlatforms: se_ComponentPlatformList(input.componentPlatforms, context),
    }),
    ...(input.componentVersion != null && { componentVersion: input.componentVersion }),
    ...(input.lambdaArn != null && { lambdaArn: input.lambdaArn }),
  };
};

/**
 * serializeAws_restJson1LambdaLinuxProcessParams
 */
const se_LambdaLinuxProcessParams = (input: LambdaLinuxProcessParams, context: __SerdeContext): any => {
  return {
    ...(input.containerParams != null && { containerParams: se_LambdaContainerParams(input.containerParams, context) }),
    ...(input.isolationMode != null && { isolationMode: input.isolationMode }),
  };
};

/**
 * serializeAws_restJson1LambdaVolumeList
 */
const se_LambdaVolumeList = (input: LambdaVolumeMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LambdaVolumeMount(entry, context);
    });
};

/**
 * serializeAws_restJson1LambdaVolumeMount
 */
const se_LambdaVolumeMount = (input: LambdaVolumeMount, context: __SerdeContext): any => {
  return {
    ...(input.addGroupOwner != null && { addGroupOwner: input.addGroupOwner }),
    ...(input.destinationPath != null && { destinationPath: input.destinationPath }),
    ...(input.permission != null && { permission: input.permission }),
    ...(input.sourcePath != null && { sourcePath: input.sourcePath }),
  };
};

/**
 * serializeAws_restJson1PlatformAttributesMap
 */
const se_PlatformAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1SystemResourceLimits
 */
const se_SystemResourceLimits = (input: SystemResourceLimits, context: __SerdeContext): any => {
  return {
    ...(input.cpus != null && { cpus: __serializeFloat(input.cpus) }),
    ...(input.memory != null && { memory: input.memory }),
  };
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1AssociateClientDeviceWithCoreDeviceErrorEntry
 */
const de_AssociateClientDeviceWithCoreDeviceErrorEntry = (
  output: any,
  context: __SerdeContext
): AssociateClientDeviceWithCoreDeviceErrorEntry => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_restJson1AssociateClientDeviceWithCoreDeviceErrorList
 */
const de_AssociateClientDeviceWithCoreDeviceErrorList = (
  output: any,
  context: __SerdeContext
): AssociateClientDeviceWithCoreDeviceErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociateClientDeviceWithCoreDeviceErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssociatedClientDevice
 */
const de_AssociatedClientDevice = (output: any, context: __SerdeContext): AssociatedClientDevice => {
  return {
    associationTimestamp:
      output.associationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.associationTimestamp)))
        : undefined,
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_restJson1AssociatedClientDeviceList
 */
const de_AssociatedClientDeviceList = (output: any, context: __SerdeContext): AssociatedClientDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AssociatedClientDevice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CloudComponentStatus
 */
const de_CloudComponentStatus = (output: any, context: __SerdeContext): CloudComponentStatus => {
  return {
    componentState: __expectString(output.componentState),
    errors: output.errors != null ? de_StringMap(output.errors, context) : undefined,
    message: __expectString(output.message),
    vendorGuidance: __expectString(output.vendorGuidance),
    vendorGuidanceMessage: __expectString(output.vendorGuidanceMessage),
  } as any;
};

/**
 * deserializeAws_restJson1Component
 */
const de_Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: __expectString(output.arn),
    componentName: __expectString(output.componentName),
    latestVersion: output.latestVersion != null ? de_ComponentLatestVersion(output.latestVersion, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentConfigurationPathList
 */
const de_ComponentConfigurationPathList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ComponentConfigurationUpdate
 */
const de_ComponentConfigurationUpdate = (output: any, context: __SerdeContext): ComponentConfigurationUpdate => {
  return {
    merge: __expectString(output.merge),
    reset: output.reset != null ? de_ComponentConfigurationPathList(output.reset, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentDeploymentSpecification
 */
const de_ComponentDeploymentSpecification = (
  output: any,
  context: __SerdeContext
): ComponentDeploymentSpecification => {
  return {
    componentVersion: __expectString(output.componentVersion),
    configurationUpdate:
      output.configurationUpdate != null
        ? de_ComponentConfigurationUpdate(output.configurationUpdate, context)
        : undefined,
    runWith: output.runWith != null ? de_ComponentRunWith(output.runWith, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComponentDeploymentSpecifications
 */
const de_ComponentDeploymentSpecifications = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentDeploymentSpecification> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentDeploymentSpecification>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = de_ComponentDeploymentSpecification(value, context);
      return acc;
    },
    {}
  );
};

/**
 * deserializeAws_restJson1ComponentLatestVersion
 */
const de_ComponentLatestVersion = (output: any, context: __SerdeContext): ComponentLatestVersion => {
  return {
    arn: __expectString(output.arn),
    componentVersion: __expectString(output.componentVersion),
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    description: __expectString(output.description),
    platforms: output.platforms != null ? de_ComponentPlatformList(output.platforms, context) : undefined,
    publisher: __expectString(output.publisher),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentList
 */
const de_ComponentList = (output: any, context: __SerdeContext): Component[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Component(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentPlatform
 */
const de_ComponentPlatform = (output: any, context: __SerdeContext): ComponentPlatform => {
  return {
    attributes: output.attributes != null ? de_PlatformAttributesMap(output.attributes, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentPlatformList
 */
const de_ComponentPlatformList = (output: any, context: __SerdeContext): ComponentPlatform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentPlatform(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentRunWith
 */
const de_ComponentRunWith = (output: any, context: __SerdeContext): ComponentRunWith => {
  return {
    posixUser: __expectString(output.posixUser),
    systemResourceLimits:
      output.systemResourceLimits != null ? de_SystemResourceLimits(output.systemResourceLimits, context) : undefined,
    windowsUser: __expectString(output.windowsUser),
  } as any;
};

/**
 * deserializeAws_restJson1ComponentVersionList
 */
const de_ComponentVersionList = (output: any, context: __SerdeContext): ComponentVersionListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ComponentVersionListItem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ComponentVersionListItem
 */
const de_ComponentVersionListItem = (output: any, context: __SerdeContext): ComponentVersionListItem => {
  return {
    arn: __expectString(output.arn),
    componentName: __expectString(output.componentName),
    componentVersion: __expectString(output.componentVersion),
  } as any;
};

/**
 * deserializeAws_restJson1ConnectivityInfo
 */
const de_ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return {
    hostAddress: __expectString(output.HostAddress),
    id: __expectString(output.Id),
    metadata: __expectString(output.Metadata),
    portNumber: __expectInt32(output.PortNumber),
  } as any;
};

/**
 * deserializeAws_restJson1connectivityInfoList
 */
const de_connectivityInfoList = (output: any, context: __SerdeContext): ConnectivityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConnectivityInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CoreDevice
 */
const de_CoreDevice = (output: any, context: __SerdeContext): CoreDevice => {
  return {
    coreDeviceThingName: __expectString(output.coreDeviceThingName),
    lastStatusUpdateTimestamp:
      output.lastStatusUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusUpdateTimestamp)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

/**
 * deserializeAws_restJson1CoreDevicesList
 */
const de_CoreDevicesList = (output: any, context: __SerdeContext): CoreDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CoreDevice(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Deployment
 */
const de_Deployment = (output: any, context: __SerdeContext): Deployment => {
  return {
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    deploymentId: __expectString(output.deploymentId),
    deploymentName: __expectString(output.deploymentName),
    deploymentStatus: __expectString(output.deploymentStatus),
    isLatestForTarget: __expectBoolean(output.isLatestForTarget),
    parentTargetArn: __expectString(output.parentTargetArn),
    revisionId: __expectString(output.revisionId),
    targetArn: __expectString(output.targetArn),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentComponentUpdatePolicy
 */
const de_DeploymentComponentUpdatePolicy = (output: any, context: __SerdeContext): DeploymentComponentUpdatePolicy => {
  return {
    action: __expectString(output.action),
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentConfigurationValidationPolicy
 */
const de_DeploymentConfigurationValidationPolicy = (
  output: any,
  context: __SerdeContext
): DeploymentConfigurationValidationPolicy => {
  return {
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentIoTJobConfiguration
 */
const de_DeploymentIoTJobConfiguration = (output: any, context: __SerdeContext): DeploymentIoTJobConfiguration => {
  return {
    abortConfig: output.abortConfig != null ? de_IoTJobAbortConfig(output.abortConfig, context) : undefined,
    jobExecutionsRolloutConfig:
      output.jobExecutionsRolloutConfig != null
        ? de_IoTJobExecutionsRolloutConfig(output.jobExecutionsRolloutConfig, context)
        : undefined,
    timeoutConfig: output.timeoutConfig != null ? de_IoTJobTimeoutConfig(output.timeoutConfig, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DeploymentList
 */
const de_DeploymentList = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Deployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DeploymentPolicies
 */
const de_DeploymentPolicies = (output: any, context: __SerdeContext): DeploymentPolicies => {
  return {
    componentUpdatePolicy:
      output.componentUpdatePolicy != null
        ? de_DeploymentComponentUpdatePolicy(output.componentUpdatePolicy, context)
        : undefined,
    configurationValidationPolicy:
      output.configurationValidationPolicy != null
        ? de_DeploymentConfigurationValidationPolicy(output.configurationValidationPolicy, context)
        : undefined,
    failureHandlingPolicy: __expectString(output.failureHandlingPolicy),
  } as any;
};

/**
 * deserializeAws_restJson1DisassociateClientDeviceFromCoreDeviceErrorEntry
 */
const de_DisassociateClientDeviceFromCoreDeviceErrorEntry = (
  output: any,
  context: __SerdeContext
): DisassociateClientDeviceFromCoreDeviceErrorEntry => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    thingName: __expectString(output.thingName),
  } as any;
};

/**
 * deserializeAws_restJson1DisassociateClientDeviceFromCoreDeviceErrorList
 */
const de_DisassociateClientDeviceFromCoreDeviceErrorList = (
  output: any,
  context: __SerdeContext
): DisassociateClientDeviceFromCoreDeviceErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DisassociateClientDeviceFromCoreDeviceErrorEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EffectiveDeployment
 */
const de_EffectiveDeployment = (output: any, context: __SerdeContext): EffectiveDeployment => {
  return {
    coreDeviceExecutionStatus: __expectString(output.coreDeviceExecutionStatus),
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    deploymentId: __expectString(output.deploymentId),
    deploymentName: __expectString(output.deploymentName),
    description: __expectString(output.description),
    iotJobArn: __expectString(output.iotJobArn),
    iotJobId: __expectString(output.iotJobId),
    modifiedTimestamp:
      output.modifiedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedTimestamp)))
        : undefined,
    reason: __expectString(output.reason),
    statusDetails:
      output.statusDetails != null ? de_EffectiveDeploymentStatusDetails(output.statusDetails, context) : undefined,
    targetArn: __expectString(output.targetArn),
  } as any;
};

/**
 * deserializeAws_restJson1EffectiveDeploymentErrorStack
 */
const de_EffectiveDeploymentErrorStack = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EffectiveDeploymentErrorTypeList
 */
const de_EffectiveDeploymentErrorTypeList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1EffectiveDeploymentsList
 */
const de_EffectiveDeploymentsList = (output: any, context: __SerdeContext): EffectiveDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EffectiveDeployment(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1EffectiveDeploymentStatusDetails
 */
const de_EffectiveDeploymentStatusDetails = (
  output: any,
  context: __SerdeContext
): EffectiveDeploymentStatusDetails => {
  return {
    errorStack: output.errorStack != null ? de_EffectiveDeploymentErrorStack(output.errorStack, context) : undefined,
    errorTypes: output.errorTypes != null ? de_EffectiveDeploymentErrorTypeList(output.errorTypes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstalledComponent
 */
const de_InstalledComponent = (output: any, context: __SerdeContext): InstalledComponent => {
  return {
    componentName: __expectString(output.componentName),
    componentVersion: __expectString(output.componentVersion),
    isRoot: __expectBoolean(output.isRoot),
    lastInstallationSource: __expectString(output.lastInstallationSource),
    lastReportedTimestamp:
      output.lastReportedTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastReportedTimestamp)))
        : undefined,
    lastStatusChangeTimestamp:
      output.lastStatusChangeTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusChangeTimestamp)))
        : undefined,
    lifecycleState: __expectString(output.lifecycleState),
    lifecycleStateDetails: __expectString(output.lifecycleStateDetails),
    lifecycleStatusCodes:
      output.lifecycleStatusCodes != null
        ? de_InstalledComponentLifecycleStatusCodeList(output.lifecycleStatusCodes, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InstalledComponentLifecycleStatusCodeList
 */
const de_InstalledComponentLifecycleStatusCodeList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1InstalledComponentList
 */
const de_InstalledComponentList = (output: any, context: __SerdeContext): InstalledComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_InstalledComponent(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IoTJobAbortConfig
 */
const de_IoTJobAbortConfig = (output: any, context: __SerdeContext): IoTJobAbortConfig => {
  return {
    criteriaList: output.criteriaList != null ? de_IoTJobAbortCriteriaList(output.criteriaList, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IoTJobAbortCriteria
 */
const de_IoTJobAbortCriteria = (output: any, context: __SerdeContext): IoTJobAbortCriteria => {
  return {
    action: __expectString(output.action),
    failureType: __expectString(output.failureType),
    minNumberOfExecutedThings: __expectInt32(output.minNumberOfExecutedThings),
    thresholdPercentage: __limitedParseDouble(output.thresholdPercentage),
  } as any;
};

/**
 * deserializeAws_restJson1IoTJobAbortCriteriaList
 */
const de_IoTJobAbortCriteriaList = (output: any, context: __SerdeContext): IoTJobAbortCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IoTJobAbortCriteria(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1IoTJobExecutionsRolloutConfig
 */
const de_IoTJobExecutionsRolloutConfig = (output: any, context: __SerdeContext): IoTJobExecutionsRolloutConfig => {
  return {
    exponentialRate:
      output.exponentialRate != null ? de_IoTJobExponentialRolloutRate(output.exponentialRate, context) : undefined,
    maximumPerMinute: __expectInt32(output.maximumPerMinute),
  } as any;
};

/**
 * deserializeAws_restJson1IoTJobExponentialRolloutRate
 */
const de_IoTJobExponentialRolloutRate = (output: any, context: __SerdeContext): IoTJobExponentialRolloutRate => {
  return {
    baseRatePerMinute: __expectInt32(output.baseRatePerMinute),
    incrementFactor: __limitedParseDouble(output.incrementFactor),
    rateIncreaseCriteria:
      output.rateIncreaseCriteria != null
        ? de_IoTJobRateIncreaseCriteria(output.rateIncreaseCriteria, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IoTJobRateIncreaseCriteria
 */
const de_IoTJobRateIncreaseCriteria = (output: any, context: __SerdeContext): IoTJobRateIncreaseCriteria => {
  return {
    numberOfNotifiedThings: __expectInt32(output.numberOfNotifiedThings),
    numberOfSucceededThings: __expectInt32(output.numberOfSucceededThings),
  } as any;
};

/**
 * deserializeAws_restJson1IoTJobTimeoutConfig
 */
const de_IoTJobTimeoutConfig = (output: any, context: __SerdeContext): IoTJobTimeoutConfig => {
  return {
    inProgressTimeoutInMinutes: __expectLong(output.inProgressTimeoutInMinutes),
  } as any;
};

/**
 * deserializeAws_restJson1PlatformAttributesMap
 */
const de_PlatformAttributesMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ResolvedComponentVersion
 */
const de_ResolvedComponentVersion = (output: any, context: __SerdeContext): ResolvedComponentVersion => {
  return {
    arn: __expectString(output.arn),
    componentName: __expectString(output.componentName),
    componentVersion: __expectString(output.componentVersion),
    message: __expectString(output.message),
    recipe: output.recipe != null ? context.base64Decoder(output.recipe) : undefined,
    vendorGuidance: __expectString(output.vendorGuidance),
  } as any;
};

/**
 * deserializeAws_restJson1ResolvedComponentVersionsList
 */
const de_ResolvedComponentVersionsList = (output: any, context: __SerdeContext): ResolvedComponentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResolvedComponentVersion(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1StringMap
 */
const de_StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1SystemResourceLimits
 */
const de_SystemResourceLimits = (output: any, context: __SerdeContext): SystemResourceLimits => {
  return {
    cpus: __limitedParseDouble(output.cpus),
    memory: __expectLong(output.memory),
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ValidationExceptionField
 */
const de_ValidationExceptionField = (output: any, context: __SerdeContext): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1ValidationExceptionFieldList
 */
const de_ValidationExceptionFieldList = (output: any, context: __SerdeContext): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ValidationExceptionField(entry, context);
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

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

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
