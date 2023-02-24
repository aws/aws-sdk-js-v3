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

export const serializeAws_restJson1AssociateServiceRoleToAccountCommand = async (
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

export const serializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand = async (
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
    ...(input.entries != null && {
      entries: serializeAws_restJson1AssociateClientDeviceWithCoreDeviceEntryList(input.entries, context),
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

export const serializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand = async (
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
      entries: serializeAws_restJson1DisassociateClientDeviceFromCoreDeviceEntryList(input.entries, context),
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

export const serializeAws_restJson1CancelDeploymentCommand = async (
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

export const serializeAws_restJson1CreateComponentVersionCommand = async (
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
      lambdaFunction: serializeAws_restJson1LambdaFunctionRecipeSource(input.lambdaFunction, context),
    }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateDeploymentCommand = async (
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
    ...(input.components != null && {
      components: serializeAws_restJson1ComponentDeploymentSpecifications(input.components, context),
    }),
    ...(input.deploymentName != null && { deploymentName: input.deploymentName }),
    ...(input.deploymentPolicies != null && {
      deploymentPolicies: serializeAws_restJson1DeploymentPolicies(input.deploymentPolicies, context),
    }),
    ...(input.iotJobConfiguration != null && {
      iotJobConfiguration: serializeAws_restJson1DeploymentIoTJobConfiguration(input.iotJobConfiguration, context),
    }),
    ...(input.parentTargetArn != null && { parentTargetArn: input.parentTargetArn }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeleteComponentCommand = async (
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

export const serializeAws_restJson1DeleteCoreDeviceCommand = async (
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

export const serializeAws_restJson1DeleteDeploymentCommand = async (
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

export const serializeAws_restJson1DescribeComponentCommand = async (
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

export const serializeAws_restJson1DisassociateServiceRoleFromAccountCommand = async (
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

export const serializeAws_restJson1GetComponentCommand = async (
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

export const serializeAws_restJson1GetComponentVersionArtifactCommand = async (
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

export const serializeAws_restJson1GetConnectivityInfoCommand = async (
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

export const serializeAws_restJson1GetCoreDeviceCommand = async (
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

export const serializeAws_restJson1GetDeploymentCommand = async (
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

export const serializeAws_restJson1GetServiceRoleForAccountCommand = async (
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

export const serializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand = async (
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

export const serializeAws_restJson1ListComponentsCommand = async (
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

export const serializeAws_restJson1ListComponentVersionsCommand = async (
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

export const serializeAws_restJson1ListCoreDevicesCommand = async (
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

export const serializeAws_restJson1ListDeploymentsCommand = async (
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

export const serializeAws_restJson1ListEffectiveDeploymentsCommand = async (
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

export const serializeAws_restJson1ListInstalledComponentsCommand = async (
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
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

export const serializeAws_restJson1ResolveComponentCandidatesCommand = async (
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
      componentCandidates: serializeAws_restJson1ComponentCandidateList(input.componentCandidates, context),
    }),
    ...(input.platform != null && { platform: serializeAws_restJson1ComponentPlatform(input.platform, context) }),
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
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

export const serializeAws_restJson1UpdateConnectivityInfoCommand = async (
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
      ConnectivityInfo: serializeAws_restJson1connectivityInfoList(input.connectivityInfo, context),
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

export const deserializeAws_restJson1AssociateServiceRoleToAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateServiceRoleToAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateServiceRoleToAccountCommandError(output, context);
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

const deserializeAws_restJson1AssociateServiceRoleToAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1AssociateClientDeviceWithCoreDeviceErrorList(
      data.errorEntries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.errorEntries != null) {
    contents.errorEntries = deserializeAws_restJson1DisassociateClientDeviceFromCoreDeviceErrorList(
      data.errorEntries,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CancelDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelDeploymentCommandError(output, context);
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

const deserializeAws_restJson1CancelDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateComponentVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateComponentVersionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateComponentVersionCommandError(output, context);
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
    contents.status = deserializeAws_restJson1CloudComponentStatus(data.status, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateComponentVersionCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestAlreadyInProgressException":
    case "com.amazonaws.greengrassv2#RequestAlreadyInProgressException":
      throw await deserializeAws_restJson1RequestAlreadyInProgressExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.greengrassv2#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeploymentCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDeploymentCommandError(output, context);
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

const deserializeAws_restJson1CreateDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "RequestAlreadyInProgressException":
    case "com.amazonaws.greengrassv2#RequestAlreadyInProgressException":
      throw await deserializeAws_restJson1RequestAlreadyInProgressExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteComponentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteComponentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreDeviceCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteCoreDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeploymentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeComponentCommandError(output, context);
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
    contents.platforms = deserializeAws_restJson1ComponentPlatformList(data.platforms, context);
  }
  if (data.publisher != null) {
    contents.publisher = __expectString(data.publisher);
  }
  if (data.status != null) {
    contents.status = deserializeAws_restJson1CloudComponentStatus(data.status, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DisassociateServiceRoleFromAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateServiceRoleFromAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError(output, context);
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

const deserializeAws_restJson1DisassociateServiceRoleFromAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetComponentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetComponentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetComponentVersionArtifactCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetComponentVersionArtifactCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetComponentVersionArtifactCommandError(output, context);
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

const deserializeAws_restJson1GetComponentVersionArtifactCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectivityInfoCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectivityInfo != null) {
    contents.connectivityInfo = deserializeAws_restJson1connectivityInfoList(data.ConnectivityInfo, context);
  }
  if (data.Message != null) {
    contents.message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectivityInfoCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCoreDeviceCommandError(output, context);
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCoreDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDeploymentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeploymentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeploymentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.components != null) {
    contents.components = deserializeAws_restJson1ComponentDeploymentSpecifications(data.components, context);
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
    contents.deploymentPolicies = deserializeAws_restJson1DeploymentPolicies(data.deploymentPolicies, context);
  }
  if (data.deploymentStatus != null) {
    contents.deploymentStatus = __expectString(data.deploymentStatus);
  }
  if (data.iotJobArn != null) {
    contents.iotJobArn = __expectString(data.iotJobArn);
  }
  if (data.iotJobConfiguration != null) {
    contents.iotJobConfiguration = deserializeAws_restJson1DeploymentIoTJobConfiguration(
      data.iotJobConfiguration,
      context
    );
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
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.targetArn != null) {
    contents.targetArn = __expectString(data.targetArn);
  }
  return contents;
};

const deserializeAws_restJson1GetDeploymentCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetServiceRoleForAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetServiceRoleForAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetServiceRoleForAccountCommandError(output, context);
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

const deserializeAws_restJson1GetServiceRoleForAccountCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClientDevicesAssociatedWithCoreDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.associatedClientDevices != null) {
    contents.associatedClientDevices = deserializeAws_restJson1AssociatedClientDeviceList(
      data.associatedClientDevices,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListClientDevicesAssociatedWithCoreDeviceCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.components != null) {
    contents.components = deserializeAws_restJson1ComponentList(data.components, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListComponentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListComponentVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListComponentVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListComponentVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.componentVersions != null) {
    contents.componentVersions = deserializeAws_restJson1ComponentVersionList(data.componentVersions, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListComponentVersionsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListCoreDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCoreDevicesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.coreDevices != null) {
    contents.coreDevices = deserializeAws_restJson1CoreDevicesList(data.coreDevices, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCoreDevicesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deployments != null) {
    contents.deployments = deserializeAws_restJson1DeploymentList(data.deployments, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeploymentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListEffectiveDeploymentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEffectiveDeploymentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEffectiveDeploymentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.effectiveDeployments != null) {
    contents.effectiveDeployments = deserializeAws_restJson1EffectiveDeploymentsList(
      data.effectiveDeployments,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListEffectiveDeploymentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListInstalledComponentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInstalledComponentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInstalledComponentsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.installedComponents != null) {
    contents.installedComponents = deserializeAws_restJson1InstalledComponentList(data.installedComponents, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInstalledComponentsCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ResolveComponentCandidatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ResolveComponentCandidatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ResolveComponentCandidatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.resolvedComponentVersions != null) {
    contents.resolvedComponentVersions = deserializeAws_restJson1ResolvedComponentVersionsList(
      data.resolvedComponentVersions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ResolveComponentCandidatesCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.greengrassv2#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.greengrassv2#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.greengrassv2#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.greengrassv2#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UpdateConnectivityInfoCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectivityInfoCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateConnectivityInfoCommandError(output, context);
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

const deserializeAws_restJson1UpdateConnectivityInfoCommandError = async (
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
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.greengrassv2#ValidationException":
      throw await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
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

const deserializeAws_restJson1RequestAlreadyInProgressExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
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

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
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

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.fields != null) {
    contents.fields = deserializeAws_restJson1ValidationExceptionFieldList(data.fields, context);
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

const serializeAws_restJson1AssociateClientDeviceWithCoreDeviceEntry = (
  input: AssociateClientDeviceWithCoreDeviceEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

const serializeAws_restJson1AssociateClientDeviceWithCoreDeviceEntryList = (
  input: AssociateClientDeviceWithCoreDeviceEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AssociateClientDeviceWithCoreDeviceEntry(entry, context);
    });
};

const serializeAws_restJson1ComponentCandidate = (input: ComponentCandidate, context: __SerdeContext): any => {
  return {
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentVersion != null && { componentVersion: input.componentVersion }),
    ...(input.versionRequirements != null && {
      versionRequirements: serializeAws_restJson1ComponentVersionRequirementMap(input.versionRequirements, context),
    }),
  };
};

const serializeAws_restJson1ComponentCandidateList = (input: ComponentCandidate[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ComponentCandidate(entry, context);
    });
};

const serializeAws_restJson1ComponentConfigurationPathList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ComponentConfigurationUpdate = (
  input: ComponentConfigurationUpdate,
  context: __SerdeContext
): any => {
  return {
    ...(input.merge != null && { merge: input.merge }),
    ...(input.reset != null && { reset: serializeAws_restJson1ComponentConfigurationPathList(input.reset, context) }),
  };
};

const serializeAws_restJson1ComponentDependencyMap = (
  input: Record<string, ComponentDependencyRequirement>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ComponentDependencyRequirement(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ComponentDependencyRequirement = (
  input: ComponentDependencyRequirement,
  context: __SerdeContext
): any => {
  return {
    ...(input.dependencyType != null && { dependencyType: input.dependencyType }),
    ...(input.versionRequirement != null && { versionRequirement: input.versionRequirement }),
  };
};

const serializeAws_restJson1ComponentDeploymentSpecification = (
  input: ComponentDeploymentSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentVersion != null && { componentVersion: input.componentVersion }),
    ...(input.configurationUpdate != null && {
      configurationUpdate: serializeAws_restJson1ComponentConfigurationUpdate(input.configurationUpdate, context),
    }),
    ...(input.runWith != null && { runWith: serializeAws_restJson1ComponentRunWith(input.runWith, context) }),
  };
};

const serializeAws_restJson1ComponentDeploymentSpecifications = (
  input: Record<string, ComponentDeploymentSpecification>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1ComponentDeploymentSpecification(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1ComponentPlatform = (input: ComponentPlatform, context: __SerdeContext): any => {
  return {
    ...(input.attributes != null && {
      attributes: serializeAws_restJson1PlatformAttributesMap(input.attributes, context),
    }),
    ...(input.name != null && { name: input.name }),
  };
};

const serializeAws_restJson1ComponentPlatformList = (input: ComponentPlatform[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ComponentPlatform(entry, context);
    });
};

const serializeAws_restJson1ComponentRunWith = (input: ComponentRunWith, context: __SerdeContext): any => {
  return {
    ...(input.posixUser != null && { posixUser: input.posixUser }),
    ...(input.systemResourceLimits != null && {
      systemResourceLimits: serializeAws_restJson1SystemResourceLimits(input.systemResourceLimits, context),
    }),
    ...(input.windowsUser != null && { windowsUser: input.windowsUser }),
  };
};

const serializeAws_restJson1ComponentVersionRequirementMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ConnectivityInfo = (input: ConnectivityInfo, context: __SerdeContext): any => {
  return {
    ...(input.hostAddress != null && { HostAddress: input.hostAddress }),
    ...(input.id != null && { Id: input.id }),
    ...(input.metadata != null && { Metadata: input.metadata }),
    ...(input.portNumber != null && { PortNumber: input.portNumber }),
  };
};

const serializeAws_restJson1connectivityInfoList = (input: ConnectivityInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConnectivityInfo(entry, context);
    });
};

const serializeAws_restJson1DeploymentComponentUpdatePolicy = (
  input: DeploymentComponentUpdatePolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1DeploymentConfigurationValidationPolicy = (
  input: DeploymentConfigurationValidationPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1DeploymentIoTJobConfiguration = (
  input: DeploymentIoTJobConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.abortConfig != null && {
      abortConfig: serializeAws_restJson1IoTJobAbortConfig(input.abortConfig, context),
    }),
    ...(input.jobExecutionsRolloutConfig != null && {
      jobExecutionsRolloutConfig: serializeAws_restJson1IoTJobExecutionsRolloutConfig(
        input.jobExecutionsRolloutConfig,
        context
      ),
    }),
    ...(input.timeoutConfig != null && {
      timeoutConfig: serializeAws_restJson1IoTJobTimeoutConfig(input.timeoutConfig, context),
    }),
  };
};

const serializeAws_restJson1DeploymentPolicies = (input: DeploymentPolicies, context: __SerdeContext): any => {
  return {
    ...(input.componentUpdatePolicy != null && {
      componentUpdatePolicy: serializeAws_restJson1DeploymentComponentUpdatePolicy(
        input.componentUpdatePolicy,
        context
      ),
    }),
    ...(input.configurationValidationPolicy != null && {
      configurationValidationPolicy: serializeAws_restJson1DeploymentConfigurationValidationPolicy(
        input.configurationValidationPolicy,
        context
      ),
    }),
    ...(input.failureHandlingPolicy != null && { failureHandlingPolicy: input.failureHandlingPolicy }),
  };
};

const serializeAws_restJson1DisassociateClientDeviceFromCoreDeviceEntry = (
  input: DisassociateClientDeviceFromCoreDeviceEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.thingName != null && { thingName: input.thingName }),
  };
};

const serializeAws_restJson1DisassociateClientDeviceFromCoreDeviceEntryList = (
  input: DisassociateClientDeviceFromCoreDeviceEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DisassociateClientDeviceFromCoreDeviceEntry(entry, context);
    });
};

const serializeAws_restJson1IoTJobAbortConfig = (input: IoTJobAbortConfig, context: __SerdeContext): any => {
  return {
    ...(input.criteriaList != null && {
      criteriaList: serializeAws_restJson1IoTJobAbortCriteriaList(input.criteriaList, context),
    }),
  };
};

const serializeAws_restJson1IoTJobAbortCriteria = (input: IoTJobAbortCriteria, context: __SerdeContext): any => {
  return {
    ...(input.action != null && { action: input.action }),
    ...(input.failureType != null && { failureType: input.failureType }),
    ...(input.minNumberOfExecutedThings != null && { minNumberOfExecutedThings: input.minNumberOfExecutedThings }),
    ...(input.thresholdPercentage != null && { thresholdPercentage: __serializeFloat(input.thresholdPercentage) }),
  };
};

const serializeAws_restJson1IoTJobAbortCriteriaList = (input: IoTJobAbortCriteria[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1IoTJobAbortCriteria(entry, context);
    });
};

const serializeAws_restJson1IoTJobExecutionsRolloutConfig = (
  input: IoTJobExecutionsRolloutConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.exponentialRate != null && {
      exponentialRate: serializeAws_restJson1IoTJobExponentialRolloutRate(input.exponentialRate, context),
    }),
    ...(input.maximumPerMinute != null && { maximumPerMinute: input.maximumPerMinute }),
  };
};

const serializeAws_restJson1IoTJobExponentialRolloutRate = (
  input: IoTJobExponentialRolloutRate,
  context: __SerdeContext
): any => {
  return {
    ...(input.baseRatePerMinute != null && { baseRatePerMinute: input.baseRatePerMinute }),
    ...(input.incrementFactor != null && { incrementFactor: __serializeFloat(input.incrementFactor) }),
    ...(input.rateIncreaseCriteria != null && {
      rateIncreaseCriteria: serializeAws_restJson1IoTJobRateIncreaseCriteria(input.rateIncreaseCriteria, context),
    }),
  };
};

const serializeAws_restJson1IoTJobRateIncreaseCriteria = (
  input: IoTJobRateIncreaseCriteria,
  context: __SerdeContext
): any => {
  return {
    ...(input.numberOfNotifiedThings != null && { numberOfNotifiedThings: input.numberOfNotifiedThings }),
    ...(input.numberOfSucceededThings != null && { numberOfSucceededThings: input.numberOfSucceededThings }),
  };
};

const serializeAws_restJson1IoTJobTimeoutConfig = (input: IoTJobTimeoutConfig, context: __SerdeContext): any => {
  return {
    ...(input.inProgressTimeoutInMinutes != null && { inProgressTimeoutInMinutes: input.inProgressTimeoutInMinutes }),
  };
};

const serializeAws_restJson1LambdaContainerParams = (input: LambdaContainerParams, context: __SerdeContext): any => {
  return {
    ...(input.devices != null && { devices: serializeAws_restJson1LambdaDeviceList(input.devices, context) }),
    ...(input.memorySizeInKB != null && { memorySizeInKB: input.memorySizeInKB }),
    ...(input.mountROSysfs != null && { mountROSysfs: input.mountROSysfs }),
    ...(input.volumes != null && { volumes: serializeAws_restJson1LambdaVolumeList(input.volumes, context) }),
  };
};

const serializeAws_restJson1LambdaDeviceList = (input: LambdaDeviceMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LambdaDeviceMount(entry, context);
    });
};

const serializeAws_restJson1LambdaDeviceMount = (input: LambdaDeviceMount, context: __SerdeContext): any => {
  return {
    ...(input.addGroupOwner != null && { addGroupOwner: input.addGroupOwner }),
    ...(input.path != null && { path: input.path }),
    ...(input.permission != null && { permission: input.permission }),
  };
};

const serializeAws_restJson1LambdaEnvironmentVariables = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1LambdaEventSource = (input: LambdaEventSource, context: __SerdeContext): any => {
  return {
    ...(input.topic != null && { topic: input.topic }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1LambdaEventSourceList = (input: LambdaEventSource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LambdaEventSource(entry, context);
    });
};

const serializeAws_restJson1LambdaExecArgsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1LambdaExecutionParameters = (
  input: LambdaExecutionParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.environmentVariables != null && {
      environmentVariables: serializeAws_restJson1LambdaEnvironmentVariables(input.environmentVariables, context),
    }),
    ...(input.eventSources != null && {
      eventSources: serializeAws_restJson1LambdaEventSourceList(input.eventSources, context),
    }),
    ...(input.execArgs != null && { execArgs: serializeAws_restJson1LambdaExecArgsList(input.execArgs, context) }),
    ...(input.inputPayloadEncodingType != null && { inputPayloadEncodingType: input.inputPayloadEncodingType }),
    ...(input.linuxProcessParams != null && {
      linuxProcessParams: serializeAws_restJson1LambdaLinuxProcessParams(input.linuxProcessParams, context),
    }),
    ...(input.maxIdleTimeInSeconds != null && { maxIdleTimeInSeconds: input.maxIdleTimeInSeconds }),
    ...(input.maxInstancesCount != null && { maxInstancesCount: input.maxInstancesCount }),
    ...(input.maxQueueSize != null && { maxQueueSize: input.maxQueueSize }),
    ...(input.pinned != null && { pinned: input.pinned }),
    ...(input.statusTimeoutInSeconds != null && { statusTimeoutInSeconds: input.statusTimeoutInSeconds }),
    ...(input.timeoutInSeconds != null && { timeoutInSeconds: input.timeoutInSeconds }),
  };
};

const serializeAws_restJson1LambdaFunctionRecipeSource = (
  input: LambdaFunctionRecipeSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.componentDependencies != null && {
      componentDependencies: serializeAws_restJson1ComponentDependencyMap(input.componentDependencies, context),
    }),
    ...(input.componentLambdaParameters != null && {
      componentLambdaParameters: serializeAws_restJson1LambdaExecutionParameters(
        input.componentLambdaParameters,
        context
      ),
    }),
    ...(input.componentName != null && { componentName: input.componentName }),
    ...(input.componentPlatforms != null && {
      componentPlatforms: serializeAws_restJson1ComponentPlatformList(input.componentPlatforms, context),
    }),
    ...(input.componentVersion != null && { componentVersion: input.componentVersion }),
    ...(input.lambdaArn != null && { lambdaArn: input.lambdaArn }),
  };
};

const serializeAws_restJson1LambdaLinuxProcessParams = (
  input: LambdaLinuxProcessParams,
  context: __SerdeContext
): any => {
  return {
    ...(input.containerParams != null && {
      containerParams: serializeAws_restJson1LambdaContainerParams(input.containerParams, context),
    }),
    ...(input.isolationMode != null && { isolationMode: input.isolationMode }),
  };
};

const serializeAws_restJson1LambdaVolumeList = (input: LambdaVolumeMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LambdaVolumeMount(entry, context);
    });
};

const serializeAws_restJson1LambdaVolumeMount = (input: LambdaVolumeMount, context: __SerdeContext): any => {
  return {
    ...(input.addGroupOwner != null && { addGroupOwner: input.addGroupOwner }),
    ...(input.destinationPath != null && { destinationPath: input.destinationPath }),
    ...(input.permission != null && { permission: input.permission }),
    ...(input.sourcePath != null && { sourcePath: input.sourcePath }),
  };
};

const serializeAws_restJson1PlatformAttributesMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1SystemResourceLimits = (input: SystemResourceLimits, context: __SerdeContext): any => {
  return {
    ...(input.cpus != null && { cpus: __serializeFloat(input.cpus) }),
    ...(input.memory != null && { memory: input.memory }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1AssociateClientDeviceWithCoreDeviceErrorEntry = (
  output: any,
  context: __SerdeContext
): AssociateClientDeviceWithCoreDeviceErrorEntry => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    thingName: __expectString(output.thingName),
  } as any;
};

const deserializeAws_restJson1AssociateClientDeviceWithCoreDeviceErrorList = (
  output: any,
  context: __SerdeContext
): AssociateClientDeviceWithCoreDeviceErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssociateClientDeviceWithCoreDeviceErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssociatedClientDevice = (
  output: any,
  context: __SerdeContext
): AssociatedClientDevice => {
  return {
    associationTimestamp:
      output.associationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.associationTimestamp)))
        : undefined,
    thingName: __expectString(output.thingName),
  } as any;
};

const deserializeAws_restJson1AssociatedClientDeviceList = (
  output: any,
  context: __SerdeContext
): AssociatedClientDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssociatedClientDevice(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CloudComponentStatus = (output: any, context: __SerdeContext): CloudComponentStatus => {
  return {
    componentState: __expectString(output.componentState),
    errors: output.errors != null ? deserializeAws_restJson1StringMap(output.errors, context) : undefined,
    message: __expectString(output.message),
    vendorGuidance: __expectString(output.vendorGuidance),
    vendorGuidanceMessage: __expectString(output.vendorGuidanceMessage),
  } as any;
};

const deserializeAws_restJson1Component = (output: any, context: __SerdeContext): Component => {
  return {
    arn: __expectString(output.arn),
    componentName: __expectString(output.componentName),
    latestVersion:
      output.latestVersion != null
        ? deserializeAws_restJson1ComponentLatestVersion(output.latestVersion, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentConfigurationPathList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ComponentConfigurationUpdate = (
  output: any,
  context: __SerdeContext
): ComponentConfigurationUpdate => {
  return {
    merge: __expectString(output.merge),
    reset:
      output.reset != null ? deserializeAws_restJson1ComponentConfigurationPathList(output.reset, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentDeploymentSpecification = (
  output: any,
  context: __SerdeContext
): ComponentDeploymentSpecification => {
  return {
    componentVersion: __expectString(output.componentVersion),
    configurationUpdate:
      output.configurationUpdate != null
        ? deserializeAws_restJson1ComponentConfigurationUpdate(output.configurationUpdate, context)
        : undefined,
    runWith: output.runWith != null ? deserializeAws_restJson1ComponentRunWith(output.runWith, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ComponentDeploymentSpecifications = (
  output: any,
  context: __SerdeContext
): Record<string, ComponentDeploymentSpecification> => {
  return Object.entries(output).reduce(
    (acc: Record<string, ComponentDeploymentSpecification>, [key, value]: [string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = deserializeAws_restJson1ComponentDeploymentSpecification(value, context);
      return acc;
    },
    {}
  );
};

const deserializeAws_restJson1ComponentLatestVersion = (
  output: any,
  context: __SerdeContext
): ComponentLatestVersion => {
  return {
    arn: __expectString(output.arn),
    componentVersion: __expectString(output.componentVersion),
    creationTimestamp:
      output.creationTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.creationTimestamp)))
        : undefined,
    description: __expectString(output.description),
    platforms:
      output.platforms != null ? deserializeAws_restJson1ComponentPlatformList(output.platforms, context) : undefined,
    publisher: __expectString(output.publisher),
  } as any;
};

const deserializeAws_restJson1ComponentList = (output: any, context: __SerdeContext): Component[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Component(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentPlatform = (output: any, context: __SerdeContext): ComponentPlatform => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_restJson1PlatformAttributesMap(output.attributes, context) : undefined,
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ComponentPlatformList = (output: any, context: __SerdeContext): ComponentPlatform[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentPlatform(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentRunWith = (output: any, context: __SerdeContext): ComponentRunWith => {
  return {
    posixUser: __expectString(output.posixUser),
    systemResourceLimits:
      output.systemResourceLimits != null
        ? deserializeAws_restJson1SystemResourceLimits(output.systemResourceLimits, context)
        : undefined,
    windowsUser: __expectString(output.windowsUser),
  } as any;
};

const deserializeAws_restJson1ComponentVersionList = (
  output: any,
  context: __SerdeContext
): ComponentVersionListItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ComponentVersionListItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ComponentVersionListItem = (
  output: any,
  context: __SerdeContext
): ComponentVersionListItem => {
  return {
    arn: __expectString(output.arn),
    componentName: __expectString(output.componentName),
    componentVersion: __expectString(output.componentVersion),
  } as any;
};

const deserializeAws_restJson1ConnectivityInfo = (output: any, context: __SerdeContext): ConnectivityInfo => {
  return {
    hostAddress: __expectString(output.HostAddress),
    id: __expectString(output.Id),
    metadata: __expectString(output.Metadata),
    portNumber: __expectInt32(output.PortNumber),
  } as any;
};

const deserializeAws_restJson1connectivityInfoList = (output: any, context: __SerdeContext): ConnectivityInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConnectivityInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CoreDevice = (output: any, context: __SerdeContext): CoreDevice => {
  return {
    coreDeviceThingName: __expectString(output.coreDeviceThingName),
    lastStatusUpdateTimestamp:
      output.lastStatusUpdateTimestamp != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.lastStatusUpdateTimestamp)))
        : undefined,
    status: __expectString(output.status),
  } as any;
};

const deserializeAws_restJson1CoreDevicesList = (output: any, context: __SerdeContext): CoreDevice[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CoreDevice(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Deployment = (output: any, context: __SerdeContext): Deployment => {
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

const deserializeAws_restJson1DeploymentComponentUpdatePolicy = (
  output: any,
  context: __SerdeContext
): DeploymentComponentUpdatePolicy => {
  return {
    action: __expectString(output.action),
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
  } as any;
};

const deserializeAws_restJson1DeploymentConfigurationValidationPolicy = (
  output: any,
  context: __SerdeContext
): DeploymentConfigurationValidationPolicy => {
  return {
    timeoutInSeconds: __expectInt32(output.timeoutInSeconds),
  } as any;
};

const deserializeAws_restJson1DeploymentIoTJobConfiguration = (
  output: any,
  context: __SerdeContext
): DeploymentIoTJobConfiguration => {
  return {
    abortConfig:
      output.abortConfig != null ? deserializeAws_restJson1IoTJobAbortConfig(output.abortConfig, context) : undefined,
    jobExecutionsRolloutConfig:
      output.jobExecutionsRolloutConfig != null
        ? deserializeAws_restJson1IoTJobExecutionsRolloutConfig(output.jobExecutionsRolloutConfig, context)
        : undefined,
    timeoutConfig:
      output.timeoutConfig != null
        ? deserializeAws_restJson1IoTJobTimeoutConfig(output.timeoutConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DeploymentList = (output: any, context: __SerdeContext): Deployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Deployment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DeploymentPolicies = (output: any, context: __SerdeContext): DeploymentPolicies => {
  return {
    componentUpdatePolicy:
      output.componentUpdatePolicy != null
        ? deserializeAws_restJson1DeploymentComponentUpdatePolicy(output.componentUpdatePolicy, context)
        : undefined,
    configurationValidationPolicy:
      output.configurationValidationPolicy != null
        ? deserializeAws_restJson1DeploymentConfigurationValidationPolicy(output.configurationValidationPolicy, context)
        : undefined,
    failureHandlingPolicy: __expectString(output.failureHandlingPolicy),
  } as any;
};

const deserializeAws_restJson1DisassociateClientDeviceFromCoreDeviceErrorEntry = (
  output: any,
  context: __SerdeContext
): DisassociateClientDeviceFromCoreDeviceErrorEntry => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    thingName: __expectString(output.thingName),
  } as any;
};

const deserializeAws_restJson1DisassociateClientDeviceFromCoreDeviceErrorList = (
  output: any,
  context: __SerdeContext
): DisassociateClientDeviceFromCoreDeviceErrorEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DisassociateClientDeviceFromCoreDeviceErrorEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EffectiveDeployment = (output: any, context: __SerdeContext): EffectiveDeployment => {
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
      output.statusDetails != null
        ? deserializeAws_restJson1EffectiveDeploymentStatusDetails(output.statusDetails, context)
        : undefined,
    targetArn: __expectString(output.targetArn),
  } as any;
};

const deserializeAws_restJson1EffectiveDeploymentErrorStack = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EffectiveDeploymentErrorTypeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1EffectiveDeploymentsList = (
  output: any,
  context: __SerdeContext
): EffectiveDeployment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EffectiveDeployment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1EffectiveDeploymentStatusDetails = (
  output: any,
  context: __SerdeContext
): EffectiveDeploymentStatusDetails => {
  return {
    errorStack:
      output.errorStack != null
        ? deserializeAws_restJson1EffectiveDeploymentErrorStack(output.errorStack, context)
        : undefined,
    errorTypes:
      output.errorTypes != null
        ? deserializeAws_restJson1EffectiveDeploymentErrorTypeList(output.errorTypes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstalledComponent = (output: any, context: __SerdeContext): InstalledComponent => {
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
        ? deserializeAws_restJson1InstalledComponentLifecycleStatusCodeList(output.lifecycleStatusCodes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InstalledComponentLifecycleStatusCodeList = (
  output: any,
  context: __SerdeContext
): string[] => {
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

const deserializeAws_restJson1InstalledComponentList = (output: any, context: __SerdeContext): InstalledComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstalledComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IoTJobAbortConfig = (output: any, context: __SerdeContext): IoTJobAbortConfig => {
  return {
    criteriaList:
      output.criteriaList != null
        ? deserializeAws_restJson1IoTJobAbortCriteriaList(output.criteriaList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobAbortCriteria = (output: any, context: __SerdeContext): IoTJobAbortCriteria => {
  return {
    action: __expectString(output.action),
    failureType: __expectString(output.failureType),
    minNumberOfExecutedThings: __expectInt32(output.minNumberOfExecutedThings),
    thresholdPercentage: __limitedParseDouble(output.thresholdPercentage),
  } as any;
};

const deserializeAws_restJson1IoTJobAbortCriteriaList = (
  output: any,
  context: __SerdeContext
): IoTJobAbortCriteria[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IoTJobAbortCriteria(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IoTJobExecutionsRolloutConfig = (
  output: any,
  context: __SerdeContext
): IoTJobExecutionsRolloutConfig => {
  return {
    exponentialRate:
      output.exponentialRate != null
        ? deserializeAws_restJson1IoTJobExponentialRolloutRate(output.exponentialRate, context)
        : undefined,
    maximumPerMinute: __expectInt32(output.maximumPerMinute),
  } as any;
};

const deserializeAws_restJson1IoTJobExponentialRolloutRate = (
  output: any,
  context: __SerdeContext
): IoTJobExponentialRolloutRate => {
  return {
    baseRatePerMinute: __expectInt32(output.baseRatePerMinute),
    incrementFactor: __limitedParseDouble(output.incrementFactor),
    rateIncreaseCriteria:
      output.rateIncreaseCriteria != null
        ? deserializeAws_restJson1IoTJobRateIncreaseCriteria(output.rateIncreaseCriteria, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1IoTJobRateIncreaseCriteria = (
  output: any,
  context: __SerdeContext
): IoTJobRateIncreaseCriteria => {
  return {
    numberOfNotifiedThings: __expectInt32(output.numberOfNotifiedThings),
    numberOfSucceededThings: __expectInt32(output.numberOfSucceededThings),
  } as any;
};

const deserializeAws_restJson1IoTJobTimeoutConfig = (output: any, context: __SerdeContext): IoTJobTimeoutConfig => {
  return {
    inProgressTimeoutInMinutes: __expectLong(output.inProgressTimeoutInMinutes),
  } as any;
};

const deserializeAws_restJson1PlatformAttributesMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ResolvedComponentVersion = (
  output: any,
  context: __SerdeContext
): ResolvedComponentVersion => {
  return {
    arn: __expectString(output.arn),
    componentName: __expectString(output.componentName),
    componentVersion: __expectString(output.componentVersion),
    message: __expectString(output.message),
    recipe: output.recipe != null ? context.base64Decoder(output.recipe) : undefined,
    vendorGuidance: __expectString(output.vendorGuidance),
  } as any;
};

const deserializeAws_restJson1ResolvedComponentVersionsList = (
  output: any,
  context: __SerdeContext
): ResolvedComponentVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResolvedComponentVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1SystemResourceLimits = (output: any, context: __SerdeContext): SystemResourceLimits => {
  return {
    cpus: __limitedParseDouble(output.cpus),
    memory: __expectLong(output.memory),
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1ValidationExceptionFieldList = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
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
