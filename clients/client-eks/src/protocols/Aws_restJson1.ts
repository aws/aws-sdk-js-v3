// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateEncryptionConfigCommandInput,
  AssociateEncryptionConfigCommandOutput,
} from "../commands/AssociateEncryptionConfigCommand";
import {
  AssociateIdentityProviderConfigCommandInput,
  AssociateIdentityProviderConfigCommandOutput,
} from "../commands/AssociateIdentityProviderConfigCommand";
import { CreateAddonCommandInput, CreateAddonCommandOutput } from "../commands/CreateAddonCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "../commands/CreateClusterCommand";
import {
  CreateFargateProfileCommandInput,
  CreateFargateProfileCommandOutput,
} from "../commands/CreateFargateProfileCommand";
import { CreateNodegroupCommandInput, CreateNodegroupCommandOutput } from "../commands/CreateNodegroupCommand";
import { DeleteAddonCommandInput, DeleteAddonCommandOutput } from "../commands/DeleteAddonCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "../commands/DeleteClusterCommand";
import {
  DeleteFargateProfileCommandInput,
  DeleteFargateProfileCommandOutput,
} from "../commands/DeleteFargateProfileCommand";
import { DeleteNodegroupCommandInput, DeleteNodegroupCommandOutput } from "../commands/DeleteNodegroupCommand";
import { DeregisterClusterCommandInput, DeregisterClusterCommandOutput } from "../commands/DeregisterClusterCommand";
import { DescribeAddonCommandInput, DescribeAddonCommandOutput } from "../commands/DescribeAddonCommand";
import {
  DescribeAddonConfigurationCommandInput,
  DescribeAddonConfigurationCommandOutput,
} from "../commands/DescribeAddonConfigurationCommand";
import {
  DescribeAddonVersionsCommandInput,
  DescribeAddonVersionsCommandOutput,
} from "../commands/DescribeAddonVersionsCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "../commands/DescribeClusterCommand";
import {
  DescribeFargateProfileCommandInput,
  DescribeFargateProfileCommandOutput,
} from "../commands/DescribeFargateProfileCommand";
import {
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
} from "../commands/DescribeIdentityProviderConfigCommand";
import { DescribeNodegroupCommandInput, DescribeNodegroupCommandOutput } from "../commands/DescribeNodegroupCommand";
import { DescribeUpdateCommandInput, DescribeUpdateCommandOutput } from "../commands/DescribeUpdateCommand";
import {
  DisassociateIdentityProviderConfigCommandInput,
  DisassociateIdentityProviderConfigCommandOutput,
} from "../commands/DisassociateIdentityProviderConfigCommand";
import { ListAddonsCommandInput, ListAddonsCommandOutput } from "../commands/ListAddonsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "../commands/ListClustersCommand";
import {
  ListFargateProfilesCommandInput,
  ListFargateProfilesCommandOutput,
} from "../commands/ListFargateProfilesCommand";
import {
  ListIdentityProviderConfigsCommandInput,
  ListIdentityProviderConfigsCommandOutput,
} from "../commands/ListIdentityProviderConfigsCommand";
import { ListNodegroupsCommandInput, ListNodegroupsCommandOutput } from "../commands/ListNodegroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { ListUpdatesCommandInput, ListUpdatesCommandOutput } from "../commands/ListUpdatesCommand";
import { RegisterClusterCommandInput, RegisterClusterCommandOutput } from "../commands/RegisterClusterCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateAddonCommandInput, UpdateAddonCommandOutput } from "../commands/UpdateAddonCommand";
import {
  UpdateClusterConfigCommandInput,
  UpdateClusterConfigCommandOutput,
} from "../commands/UpdateClusterConfigCommand";
import {
  UpdateClusterVersionCommandInput,
  UpdateClusterVersionCommandOutput,
} from "../commands/UpdateClusterVersionCommand";
import {
  UpdateNodegroupConfigCommandInput,
  UpdateNodegroupConfigCommandOutput,
} from "../commands/UpdateNodegroupConfigCommand";
import {
  UpdateNodegroupVersionCommandInput,
  UpdateNodegroupVersionCommandOutput,
} from "../commands/UpdateNodegroupVersionCommand";
import { EKSServiceException as __BaseException } from "../models/EKSServiceException";
import {
  AccessDeniedException,
  Addon,
  AddonHealth,
  AddonInfo,
  AddonIssue,
  AddonVersionInfo,
  AutoScalingGroup,
  BadRequestException,
  Certificate,
  ClientException,
  Cluster,
  ClusterHealth,
  ClusterIssue,
  Compatibility,
  ConnectorConfigRequest,
  ConnectorConfigResponse,
  ControlPlanePlacementRequest,
  ControlPlanePlacementResponse,
  EncryptionConfig,
  ErrorDetail,
  FargateProfile,
  FargateProfileSelector,
  Identity,
  IdentityProviderConfig,
  IdentityProviderConfigResponse,
  InvalidParameterException,
  InvalidRequestException,
  Issue,
  KubernetesNetworkConfigRequest,
  KubernetesNetworkConfigResponse,
  LaunchTemplateSpecification,
  Logging,
  LogSetup,
  LogType,
  MarketplaceInformation,
  Nodegroup,
  NodegroupHealth,
  NodegroupResources,
  NodegroupScalingConfig,
  NodegroupUpdateConfig,
  NotFoundException,
  OIDC,
  OidcIdentityProviderConfig,
  OidcIdentityProviderConfigRequest,
  OutpostConfigRequest,
  OutpostConfigResponse,
  Provider,
  RemoteAccessConfig,
  ResourceInUseException,
  ResourceLimitExceededException,
  ResourceNotFoundException,
  ResourcePropagationDelayException,
  ServerException,
  ServiceUnavailableException,
  Taint,
  UnsupportedAvailabilityZoneException,
  Update,
  UpdateLabelsPayload,
  UpdateParam,
  UpdateTaintsPayload,
  VpcConfigRequest,
  VpcConfigResponse,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateEncryptionConfigCommand
 */
export const se_AssociateEncryptionConfigCommand = async (
  input: AssociateEncryptionConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/encryption-config/associate";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.encryptionConfig != null && {
      encryptionConfig: se_EncryptionConfigList(input.encryptionConfig, context),
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
 * serializeAws_restJson1AssociateIdentityProviderConfigCommand
 */
export const se_AssociateIdentityProviderConfigCommand = async (
  input: AssociateIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs/associate";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.oidc != null && { oidc: se_OidcIdentityProviderConfigRequest(input.oidc, context) }),
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
 * serializeAws_restJson1CreateAddonCommand
 */
export const se_CreateAddonCommand = async (
  input: CreateAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/addons";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.addonName != null && { addonName: input.addonName }),
    ...(input.addonVersion != null && { addonVersion: input.addonVersion }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.configurationValues != null && { configurationValues: input.configurationValues }),
    ...(input.resolveConflicts != null && { resolveConflicts: input.resolveConflicts }),
    ...(input.serviceAccountRoleArn != null && { serviceAccountRoleArn: input.serviceAccountRoleArn }),
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
 * serializeAws_restJson1CreateClusterCommand
 */
export const se_CreateClusterCommand = async (
  input: CreateClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.encryptionConfig != null && {
      encryptionConfig: se_EncryptionConfigList(input.encryptionConfig, context),
    }),
    ...(input.kubernetesNetworkConfig != null && {
      kubernetesNetworkConfig: se_KubernetesNetworkConfigRequest(input.kubernetesNetworkConfig, context),
    }),
    ...(input.logging != null && { logging: se_Logging(input.logging, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.outpostConfig != null && { outpostConfig: se_OutpostConfigRequest(input.outpostConfig, context) }),
    ...(input.resourcesVpcConfig != null && {
      resourcesVpcConfig: se_VpcConfigRequest(input.resourcesVpcConfig, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.version != null && { version: input.version }),
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
 * serializeAws_restJson1CreateFargateProfileCommand
 */
export const se_CreateFargateProfileCommand = async (
  input: CreateFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/fargate-profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.fargateProfileName != null && { fargateProfileName: input.fargateProfileName }),
    ...(input.podExecutionRoleArn != null && { podExecutionRoleArn: input.podExecutionRoleArn }),
    ...(input.selectors != null && { selectors: se_FargateProfileSelectors(input.selectors, context) }),
    ...(input.subnets != null && { subnets: se_StringList(input.subnets, context) }),
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
 * serializeAws_restJson1CreateNodegroupCommand
 */
export const se_CreateNodegroupCommand = async (
  input: CreateNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/node-groups";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.amiType != null && { amiType: input.amiType }),
    ...(input.capacityType != null && { capacityType: input.capacityType }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.diskSize != null && { diskSize: input.diskSize }),
    ...(input.instanceTypes != null && { instanceTypes: se_StringList(input.instanceTypes, context) }),
    ...(input.labels != null && { labels: se_labelsMap(input.labels, context) }),
    ...(input.launchTemplate != null && {
      launchTemplate: se_LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.nodeRole != null && { nodeRole: input.nodeRole }),
    ...(input.nodegroupName != null && { nodegroupName: input.nodegroupName }),
    ...(input.releaseVersion != null && { releaseVersion: input.releaseVersion }),
    ...(input.remoteAccess != null && { remoteAccess: se_RemoteAccessConfig(input.remoteAccess, context) }),
    ...(input.scalingConfig != null && { scalingConfig: se_NodegroupScalingConfig(input.scalingConfig, context) }),
    ...(input.subnets != null && { subnets: se_StringList(input.subnets, context) }),
    ...(input.tags != null && { tags: se_TagMap(input.tags, context) }),
    ...(input.taints != null && { taints: se_taintsList(input.taints, context) }),
    ...(input.updateConfig != null && { updateConfig: se_NodegroupUpdateConfig(input.updateConfig, context) }),
    ...(input.version != null && { version: input.version }),
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
 * serializeAws_restJson1DeleteAddonCommand
 */
export const se_DeleteAddonCommand = async (
  input: DeleteAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/addons/{addonName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "addonName", () => input.addonName!, "{addonName}", false);
  const query: any = map({
    preserve: [() => input.preserve !== void 0, () => input.preserve!.toString()],
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
 * serializeAws_restJson1DeleteClusterCommand
 */
export const se_DeleteClusterCommand = async (
  input: DeleteClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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
 * serializeAws_restJson1DeleteFargateProfileCommand
 */
export const se_DeleteFargateProfileCommand = async (
  input: DeleteFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "fargateProfileName",
    () => input.fargateProfileName!,
    "{fargateProfileName}",
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
 * serializeAws_restJson1DeleteNodegroupCommand
 */
export const se_DeleteNodegroupCommand = async (
  input: DeleteNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nodegroupName",
    () => input.nodegroupName!,
    "{nodegroupName}",
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
 * serializeAws_restJson1DeregisterClusterCommand
 */
export const se_DeregisterClusterCommand = async (
  input: DeregisterClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cluster-registrations/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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
 * serializeAws_restJson1DescribeAddonCommand
 */
export const se_DescribeAddonCommand = async (
  input: DescribeAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/addons/{addonName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "addonName", () => input.addonName!, "{addonName}", false);
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
 * serializeAws_restJson1DescribeAddonConfigurationCommand
 */
export const se_DescribeAddonConfigurationCommand = async (
  input: DescribeAddonConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/addons/configuration-schemas";
  const query: any = map({
    addonName: [, __expectNonNull(input.addonName!, `addonName`)],
    addonVersion: [, __expectNonNull(input.addonVersion!, `addonVersion`)],
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
 * serializeAws_restJson1DescribeAddonVersionsCommand
 */
export const se_DescribeAddonVersionsCommand = async (
  input: DescribeAddonVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/addons/supported-versions";
  const query: any = map({
    kubernetesVersion: [, input.kubernetesVersion!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    addonName: [, input.addonName!],
    types: [() => input.types !== void 0, () => (input.types! || []).map((_entry) => _entry as any)],
    publishers: [() => input.publishers !== void 0, () => (input.publishers! || []).map((_entry) => _entry as any)],
    owners: [() => input.owners !== void 0, () => (input.owners! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1DescribeClusterCommand
 */
export const se_DescribeClusterCommand = async (
  input: DescribeClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
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
 * serializeAws_restJson1DescribeFargateProfileCommand
 */
export const se_DescribeFargateProfileCommand = async (
  input: DescribeFargateProfileCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/fargate-profiles/{fargateProfileName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "fargateProfileName",
    () => input.fargateProfileName!,
    "{fargateProfileName}",
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
 * serializeAws_restJson1DescribeIdentityProviderConfigCommand
 */
export const se_DescribeIdentityProviderConfigCommand = async (
  input: DescribeIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs/describe";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.identityProviderConfig != null && {
      identityProviderConfig: se_IdentityProviderConfig(input.identityProviderConfig, context),
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
 * serializeAws_restJson1DescribeNodegroupCommand
 */
export const se_DescribeNodegroupCommand = async (
  input: DescribeNodegroupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nodegroupName",
    () => input.nodegroupName!,
    "{nodegroupName}",
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
 * serializeAws_restJson1DescribeUpdateCommand
 */
export const se_DescribeUpdateCommand = async (
  input: DescribeUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/updates/{updateId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "updateId", () => input.updateId!, "{updateId}", false);
  const query: any = map({
    nodegroupName: [, input.nodegroupName!],
    addonName: [, input.addonName!],
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
 * serializeAws_restJson1DisassociateIdentityProviderConfigCommand
 */
export const se_DisassociateIdentityProviderConfigCommand = async (
  input: DisassociateIdentityProviderConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs/disassociate";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.identityProviderConfig != null && {
      identityProviderConfig: se_IdentityProviderConfig(input.identityProviderConfig, context),
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
 * serializeAws_restJson1ListAddonsCommand
 */
export const se_ListAddonsCommand = async (
  input: ListAddonsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/addons";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
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
 * serializeAws_restJson1ListClustersCommand
 */
export const se_ListClustersCommand = async (
  input: ListClustersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters";
  const query: any = map({
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    nextToken: [, input.nextToken!],
    include: [() => input.include !== void 0, () => (input.include! || []).map((_entry) => _entry as any)],
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
 * serializeAws_restJson1ListFargateProfilesCommand
 */
export const se_ListFargateProfilesCommand = async (
  input: ListFargateProfilesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/fargate-profiles";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
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
 * serializeAws_restJson1ListIdentityProviderConfigsCommand
 */
export const se_ListIdentityProviderConfigsCommand = async (
  input: ListIdentityProviderConfigsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/identity-provider-configs";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
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
 * serializeAws_restJson1ListNodegroupsCommand
 */
export const se_ListNodegroupsCommand = async (
  input: ListNodegroupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{clusterName}/node-groups";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
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
 * serializeAws_restJson1ListUpdatesCommand
 */
export const se_ListUpdatesCommand = async (
  input: ListUpdatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/updates";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  const query: any = map({
    nodegroupName: [, input.nodegroupName!],
    addonName: [, input.addonName!],
    nextToken: [, input.nextToken!],
    maxResults: [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
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
 * serializeAws_restJson1RegisterClusterCommand
 */
export const se_RegisterClusterCommand = async (
  input: RegisterClusterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/cluster-registrations";
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.connectorConfig != null && {
      connectorConfig: se_ConnectorConfigRequest(input.connectorConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
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
 * serializeAws_restJson1UpdateAddonCommand
 */
export const se_UpdateAddonCommand = async (
  input: UpdateAddonCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/addons/{addonName}/update";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "addonName", () => input.addonName!, "{addonName}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.addonVersion != null && { addonVersion: input.addonVersion }),
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.configurationValues != null && { configurationValues: input.configurationValues }),
    ...(input.resolveConflicts != null && { resolveConflicts: input.resolveConflicts }),
    ...(input.serviceAccountRoleArn != null && { serviceAccountRoleArn: input.serviceAccountRoleArn }),
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
 * serializeAws_restJson1UpdateClusterConfigCommand
 */
export const se_UpdateClusterConfigCommand = async (
  input: UpdateClusterConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/update-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.logging != null && { logging: se_Logging(input.logging, context) }),
    ...(input.resourcesVpcConfig != null && {
      resourcesVpcConfig: se_VpcConfigRequest(input.resourcesVpcConfig, context),
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
 * serializeAws_restJson1UpdateClusterVersionCommand
 */
export const se_UpdateClusterVersionCommand = async (
  input: UpdateClusterVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/clusters/{name}/updates";
  resolvedPath = __resolvedPath(resolvedPath, input, "name", () => input.name!, "{name}", false);
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.version != null && { version: input.version }),
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
 * serializeAws_restJson1UpdateNodegroupConfigCommand
 */
export const se_UpdateNodegroupConfigCommand = async (
  input: UpdateNodegroupConfigCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-config";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nodegroupName",
    () => input.nodegroupName!,
    "{nodegroupName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.labels != null && { labels: se_UpdateLabelsPayload(input.labels, context) }),
    ...(input.scalingConfig != null && { scalingConfig: se_NodegroupScalingConfig(input.scalingConfig, context) }),
    ...(input.taints != null && { taints: se_UpdateTaintsPayload(input.taints, context) }),
    ...(input.updateConfig != null && { updateConfig: se_NodegroupUpdateConfig(input.updateConfig, context) }),
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
 * serializeAws_restJson1UpdateNodegroupVersionCommand
 */
export const se_UpdateNodegroupVersionCommand = async (
  input: UpdateNodegroupVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/clusters/{clusterName}/node-groups/{nodegroupName}/update-version";
  resolvedPath = __resolvedPath(resolvedPath, input, "clusterName", () => input.clusterName!, "{clusterName}", false);
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "nodegroupName",
    () => input.nodegroupName!,
    "{nodegroupName}",
    false
  );
  let body: any;
  body = JSON.stringify({
    clientRequestToken: input.clientRequestToken ?? generateIdempotencyToken(),
    ...(input.force != null && { force: input.force }),
    ...(input.launchTemplate != null && {
      launchTemplate: se_LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.releaseVersion != null && { releaseVersion: input.releaseVersion }),
    ...(input.version != null && { version: input.version }),
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
 * deserializeAws_restJson1AssociateEncryptionConfigCommand
 */
export const de_AssociateEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateEncryptionConfigCommandError
 */
const de_AssociateEncryptionConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEncryptionConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1AssociateIdentityProviderConfigCommand
 */
export const de_AssociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateIdentityProviderConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = de_TagMap(data.tags, context);
  }
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssociateIdentityProviderConfigCommandError
 */
const de_AssociateIdentityProviderConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIdentityProviderConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateAddonCommand
 */
export const de_CreateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon != null) {
    contents.addon = de_Addon(data.addon, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateAddonCommandError
 */
const de_CreateAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateClusterCommand
 */
export const de_CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = de_Cluster(data.cluster, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateClusterCommandError
 */
const de_CreateClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      throw await de_UnsupportedAvailabilityZoneExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateFargateProfileCommand
 */
export const de_CreateFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFargateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile != null) {
    contents.fargateProfile = de_FargateProfile(data.fargateProfile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateFargateProfileCommandError
 */
const de_CreateFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      throw await de_UnsupportedAvailabilityZoneExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1CreateNodegroupCommand
 */
export const de_CreateNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateNodegroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup != null) {
    contents.nodegroup = de_Nodegroup(data.nodegroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CreateNodegroupCommandError
 */
const de_CreateNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteAddonCommand
 */
export const de_DeleteAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon != null) {
    contents.addon = de_Addon(data.addon, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAddonCommandError
 */
const de_DeleteAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteClusterCommand
 */
export const de_DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = de_Cluster(data.cluster, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteClusterCommandError
 */
const de_DeleteClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteFargateProfileCommand
 */
export const de_DeleteFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFargateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile != null) {
    contents.fargateProfile = de_FargateProfile(data.fargateProfile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFargateProfileCommandError
 */
const de_DeleteFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeleteNodegroupCommand
 */
export const de_DeleteNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteNodegroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup != null) {
    contents.nodegroup = de_Nodegroup(data.nodegroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNodegroupCommandError
 */
const de_DeleteNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DeregisterClusterCommand
 */
export const de_DeregisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = de_Cluster(data.cluster, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterClusterCommandError
 */
const de_DeregisterClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.eks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeAddonCommand
 */
export const de_DescribeAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon != null) {
    contents.addon = de_Addon(data.addon, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAddonCommandError
 */
const de_DescribeAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeAddonConfigurationCommand
 */
export const de_DescribeAddonConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAddonConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.addonVersion != null) {
    contents.addonVersion = __expectString(data.addonVersion);
  }
  if (data.configurationSchema != null) {
    contents.configurationSchema = __expectString(data.configurationSchema);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAddonConfigurationCommandError
 */
const de_DescribeAddonConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeAddonVersionsCommand
 */
export const de_DescribeAddonVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeAddonVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addons != null) {
    contents.addons = de_Addons(data.addons, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeAddonVersionsCommandError
 */
const de_DescribeAddonVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeClusterCommand
 */
export const de_DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = de_Cluster(data.cluster, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeClusterCommandError
 */
const de_DescribeClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeFargateProfileCommand
 */
export const de_DescribeFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFargateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile != null) {
    contents.fargateProfile = de_FargateProfile(data.fargateProfile, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFargateProfileCommandError
 */
const de_DescribeFargateProfileCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeIdentityProviderConfigCommand
 */
export const de_DescribeIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeIdentityProviderConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderConfig != null) {
    contents.identityProviderConfig = de_IdentityProviderConfigResponse(data.identityProviderConfig, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeIdentityProviderConfigCommandError
 */
const de_DescribeIdentityProviderConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeNodegroupCommand
 */
export const de_DescribeNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeNodegroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup != null) {
    contents.nodegroup = de_Nodegroup(data.nodegroup, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeNodegroupCommandError
 */
const de_DescribeNodegroupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DescribeUpdateCommand
 */
export const de_DescribeUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeUpdateCommandError
 */
const de_DescribeUpdateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1DisassociateIdentityProviderConfigCommand
 */
export const de_DisassociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateIdentityProviderConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError
 */
const de_DisassociateIdentityProviderConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIdentityProviderConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListAddonsCommand
 */
export const de_ListAddonsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListAddonsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addons != null) {
    contents.addons = de_StringList(data.addons, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListAddonsCommandError
 */
const de_ListAddonsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListClustersCommand
 */
export const de_ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListClustersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusters != null) {
    contents.clusters = de_StringList(data.clusters, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListClustersCommandError
 */
const de_ListClustersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListFargateProfilesCommand
 */
export const de_ListFargateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFargateProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfileNames != null) {
    contents.fargateProfileNames = de_StringList(data.fargateProfileNames, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListFargateProfilesCommandError
 */
const de_ListFargateProfilesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListIdentityProviderConfigsCommand
 */
export const de_ListIdentityProviderConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListIdentityProviderConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderConfigs != null) {
    contents.identityProviderConfigs = de_IdentityProviderConfigs(data.identityProviderConfigs, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListIdentityProviderConfigsCommandError
 */
const de_ListIdentityProviderConfigsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListNodegroupsCommand
 */
export const de_ListNodegroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListNodegroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.nodegroups != null) {
    contents.nodegroups = de_StringList(data.nodegroups, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListNodegroupsCommandError
 */
const de_ListNodegroupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1ListUpdatesCommand
 */
export const de_ListUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListUpdatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.updateIds != null) {
    contents.updateIds = de_StringList(data.updateIds, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListUpdatesCommandError
 */
const de_ListUpdatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1RegisterClusterCommand
 */
export const de_RegisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = de_Cluster(data.cluster, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RegisterClusterCommandError
 */
const de_RegisterClusterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClusterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.eks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await de_ResourceLimitExceededExceptionRes(parsedOutput, context);
    case "ResourcePropagationDelayException":
    case "com.amazonaws.eks#ResourcePropagationDelayException":
      throw await de_ResourcePropagationDelayExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await de_BadRequestExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateAddonCommand
 */
export const de_UpdateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateAddonCommandError
 */
const de_UpdateAddonCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddonCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateClusterConfigCommand
 */
export const de_UpdateClusterConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateClusterConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClusterConfigCommandError
 */
const de_UpdateClusterConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateClusterVersionCommand
 */
export const de_UpdateClusterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateClusterVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateClusterVersionCommandError
 */
const de_UpdateClusterVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateNodegroupConfigCommand
 */
export const de_UpdateNodegroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNodegroupConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNodegroupConfigCommandError
 */
const de_UpdateNodegroupConfigCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1UpdateNodegroupVersionCommand
 */
export const de_UpdateNodegroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateNodegroupVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = de_Update(data.update, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNodegroupVersionCommandError
 */
const de_UpdateNodegroupVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await de_ClientExceptionRes(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await de_InvalidParameterExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await de_ResourceInUseExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await de_ServerExceptionRes(parsedOutput, context);
    default:
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
 * deserializeAws_restJson1BadRequestExceptionRes
 */
const de_BadRequestExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new BadRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ClientExceptionRes
 */
const de_ClientExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ClientException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new ClientException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterExceptionRes
 */
const de_InvalidParameterExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.fargateProfileName != null) {
    contents.fargateProfileName = __expectString(data.fargateProfileName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new InvalidParameterException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new NotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceInUseExceptionRes
 */
const de_ResourceInUseExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new ResourceInUseException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceLimitExceededExceptionRes
 */
const de_ResourceLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new ResourceLimitExceededException({
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
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.fargateProfileName != null) {
    contents.fargateProfileName = __expectString(data.fargateProfileName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourcePropagationDelayExceptionRes
 */
const de_ResourcePropagationDelayExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourcePropagationDelayException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ResourcePropagationDelayException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServerExceptionRes
 */
const de_ServerExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ServerException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.addonName != null) {
    contents.addonName = __expectString(data.addonName);
  }
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  const exception = new ServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionRes
 */
const de_UnsupportedAvailabilityZoneExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedAvailabilityZoneException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.clusterName != null) {
    contents.clusterName = __expectString(data.clusterName);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.nodegroupName != null) {
    contents.nodegroupName = __expectString(data.nodegroupName);
  }
  if (data.validZones != null) {
    contents.validZones = de_StringList(data.validZones, context);
  }
  const exception = new UnsupportedAvailabilityZoneException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1ConnectorConfigRequest
 */
const se_ConnectorConfigRequest = (input: ConnectorConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.provider != null && { provider: input.provider }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

/**
 * serializeAws_restJson1ControlPlanePlacementRequest
 */
const se_ControlPlanePlacementRequest = (input: ControlPlanePlacementRequest, context: __SerdeContext): any => {
  return {
    ...(input.groupName != null && { groupName: input.groupName }),
  };
};

/**
 * serializeAws_restJson1EncryptionConfig
 */
const se_EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.provider != null && { provider: se_Provider(input.provider, context) }),
    ...(input.resources != null && { resources: se_StringList(input.resources, context) }),
  };
};

/**
 * serializeAws_restJson1EncryptionConfigList
 */
const se_EncryptionConfigList = (input: EncryptionConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_EncryptionConfig(entry, context);
    });
};

/**
 * serializeAws_restJson1FargateProfileLabel
 */
const se_FargateProfileLabel = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1FargateProfileSelector
 */
const se_FargateProfileSelector = (input: FargateProfileSelector, context: __SerdeContext): any => {
  return {
    ...(input.labels != null && { labels: se_FargateProfileLabel(input.labels, context) }),
    ...(input.namespace != null && { namespace: input.namespace }),
  };
};

/**
 * serializeAws_restJson1FargateProfileSelectors
 */
const se_FargateProfileSelectors = (input: FargateProfileSelector[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FargateProfileSelector(entry, context);
    });
};

/**
 * serializeAws_restJson1IdentityProviderConfig
 */
const se_IdentityProviderConfig = (input: IdentityProviderConfig, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

/**
 * serializeAws_restJson1KubernetesNetworkConfigRequest
 */
const se_KubernetesNetworkConfigRequest = (input: KubernetesNetworkConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.ipFamily != null && { ipFamily: input.ipFamily }),
    ...(input.serviceIpv4Cidr != null && { serviceIpv4Cidr: input.serviceIpv4Cidr }),
  };
};

/**
 * serializeAws_restJson1labelsKeyList
 */
const se_labelsKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1labelsMap
 */
const se_labelsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1LaunchTemplateSpecification
 */
const se_LaunchTemplateSpecification = (input: LaunchTemplateSpecification, context: __SerdeContext): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

/**
 * serializeAws_restJson1Logging
 */
const se_Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.clusterLogging != null && { clusterLogging: se_LogSetups(input.clusterLogging, context) }),
  };
};

/**
 * serializeAws_restJson1LogSetup
 */
const se_LogSetup = (input: LogSetup, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.types != null && { types: se_LogTypes(input.types, context) }),
  };
};

/**
 * serializeAws_restJson1LogSetups
 */
const se_LogSetups = (input: LogSetup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LogSetup(entry, context);
    });
};

/**
 * serializeAws_restJson1LogTypes
 */
const se_LogTypes = (input: (LogType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1NodegroupScalingConfig
 */
const se_NodegroupScalingConfig = (input: NodegroupScalingConfig, context: __SerdeContext): any => {
  return {
    ...(input.desiredSize != null && { desiredSize: input.desiredSize }),
    ...(input.maxSize != null && { maxSize: input.maxSize }),
    ...(input.minSize != null && { minSize: input.minSize }),
  };
};

/**
 * serializeAws_restJson1NodegroupUpdateConfig
 */
const se_NodegroupUpdateConfig = (input: NodegroupUpdateConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxUnavailable != null && { maxUnavailable: input.maxUnavailable }),
    ...(input.maxUnavailablePercentage != null && { maxUnavailablePercentage: input.maxUnavailablePercentage }),
  };
};

/**
 * serializeAws_restJson1OidcIdentityProviderConfigRequest
 */
const se_OidcIdentityProviderConfigRequest = (
  input: OidcIdentityProviderConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.groupsClaim != null && { groupsClaim: input.groupsClaim }),
    ...(input.groupsPrefix != null && { groupsPrefix: input.groupsPrefix }),
    ...(input.identityProviderConfigName != null && { identityProviderConfigName: input.identityProviderConfigName }),
    ...(input.issuerUrl != null && { issuerUrl: input.issuerUrl }),
    ...(input.requiredClaims != null && { requiredClaims: se_requiredClaimsMap(input.requiredClaims, context) }),
    ...(input.usernameClaim != null && { usernameClaim: input.usernameClaim }),
    ...(input.usernamePrefix != null && { usernamePrefix: input.usernamePrefix }),
  };
};

/**
 * serializeAws_restJson1OutpostConfigRequest
 */
const se_OutpostConfigRequest = (input: OutpostConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.controlPlaneInstanceType != null && { controlPlaneInstanceType: input.controlPlaneInstanceType }),
    ...(input.controlPlanePlacement != null && {
      controlPlanePlacement: se_ControlPlanePlacementRequest(input.controlPlanePlacement, context),
    }),
    ...(input.outpostArns != null && { outpostArns: se_StringList(input.outpostArns, context) }),
  };
};

/**
 * serializeAws_restJson1Provider
 */
const se_Provider = (input: Provider, context: __SerdeContext): any => {
  return {
    ...(input.keyArn != null && { keyArn: input.keyArn }),
  };
};

/**
 * serializeAws_restJson1RemoteAccessConfig
 */
const se_RemoteAccessConfig = (input: RemoteAccessConfig, context: __SerdeContext): any => {
  return {
    ...(input.ec2SshKey != null && { ec2SshKey: input.ec2SshKey }),
    ...(input.sourceSecurityGroups != null && {
      sourceSecurityGroups: se_StringList(input.sourceSecurityGroups, context),
    }),
  };
};

/**
 * serializeAws_restJson1requiredClaimsMap
 */
const se_requiredClaimsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1StringList
 */
const se_StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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
 * serializeAws_restJson1Taint
 */
const se_Taint = (input: Taint, context: __SerdeContext): any => {
  return {
    ...(input.effect != null && { effect: input.effect }),
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

/**
 * serializeAws_restJson1taintsList
 */
const se_taintsList = (input: Taint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Taint(entry, context);
    });
};

/**
 * serializeAws_restJson1UpdateLabelsPayload
 */
const se_UpdateLabelsPayload = (input: UpdateLabelsPayload, context: __SerdeContext): any => {
  return {
    ...(input.addOrUpdateLabels != null && { addOrUpdateLabels: se_labelsMap(input.addOrUpdateLabels, context) }),
    ...(input.removeLabels != null && { removeLabels: se_labelsKeyList(input.removeLabels, context) }),
  };
};

/**
 * serializeAws_restJson1UpdateTaintsPayload
 */
const se_UpdateTaintsPayload = (input: UpdateTaintsPayload, context: __SerdeContext): any => {
  return {
    ...(input.addOrUpdateTaints != null && { addOrUpdateTaints: se_taintsList(input.addOrUpdateTaints, context) }),
    ...(input.removeTaints != null && { removeTaints: se_taintsList(input.removeTaints, context) }),
  };
};

/**
 * serializeAws_restJson1VpcConfigRequest
 */
const se_VpcConfigRequest = (input: VpcConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointPrivateAccess != null && { endpointPrivateAccess: input.endpointPrivateAccess }),
    ...(input.endpointPublicAccess != null && { endpointPublicAccess: input.endpointPublicAccess }),
    ...(input.publicAccessCidrs != null && { publicAccessCidrs: se_StringList(input.publicAccessCidrs, context) }),
    ...(input.securityGroupIds != null && { securityGroupIds: se_StringList(input.securityGroupIds, context) }),
    ...(input.subnetIds != null && { subnetIds: se_StringList(input.subnetIds, context) }),
  };
};

/**
 * deserializeAws_restJson1Addon
 */
const de_Addon = (output: any, context: __SerdeContext): Addon => {
  return {
    addonArn: __expectString(output.addonArn),
    addonName: __expectString(output.addonName),
    addonVersion: __expectString(output.addonVersion),
    clusterName: __expectString(output.clusterName),
    configurationValues: __expectString(output.configurationValues),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    health: output.health != null ? de_AddonHealth(output.health, context) : undefined,
    marketplaceInformation:
      output.marketplaceInformation != null
        ? de_MarketplaceInformation(output.marketplaceInformation, context)
        : undefined,
    modifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt))) : undefined,
    owner: __expectString(output.owner),
    publisher: __expectString(output.publisher),
    serviceAccountRoleArn: __expectString(output.serviceAccountRoleArn),
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AddonHealth
 */
const de_AddonHealth = (output: any, context: __SerdeContext): AddonHealth => {
  return {
    issues: output.issues != null ? de_AddonIssueList(output.issues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AddonInfo
 */
const de_AddonInfo = (output: any, context: __SerdeContext): AddonInfo => {
  return {
    addonName: __expectString(output.addonName),
    addonVersions: output.addonVersions != null ? de_AddonVersionInfoList(output.addonVersions, context) : undefined,
    marketplaceInformation:
      output.marketplaceInformation != null
        ? de_MarketplaceInformation(output.marketplaceInformation, context)
        : undefined,
    owner: __expectString(output.owner),
    publisher: __expectString(output.publisher),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1AddonIssue
 */
const de_AddonIssue = (output: any, context: __SerdeContext): AddonIssue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds: output.resourceIds != null ? de_StringList(output.resourceIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1AddonIssueList
 */
const de_AddonIssueList = (output: any, context: __SerdeContext): AddonIssue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AddonIssue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Addons
 */
const de_Addons = (output: any, context: __SerdeContext): AddonInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AddonInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AddonVersionInfo
 */
const de_AddonVersionInfo = (output: any, context: __SerdeContext): AddonVersionInfo => {
  return {
    addonVersion: __expectString(output.addonVersion),
    architecture: output.architecture != null ? de_StringList(output.architecture, context) : undefined,
    compatibilities: output.compatibilities != null ? de_Compatibilities(output.compatibilities, context) : undefined,
    requiresConfiguration: __expectBoolean(output.requiresConfiguration),
  } as any;
};

/**
 * deserializeAws_restJson1AddonVersionInfoList
 */
const de_AddonVersionInfoList = (output: any, context: __SerdeContext): AddonVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AddonVersionInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AutoScalingGroup
 */
const de_AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  return {
    name: __expectString(output.name),
  } as any;
};

/**
 * deserializeAws_restJson1AutoScalingGroupList
 */
const de_AutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AutoScalingGroup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Certificate
 */
const de_Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    data: __expectString(output.data),
  } as any;
};

/**
 * deserializeAws_restJson1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    arn: __expectString(output.arn),
    certificateAuthority:
      output.certificateAuthority != null ? de_Certificate(output.certificateAuthority, context) : undefined,
    clientRequestToken: __expectString(output.clientRequestToken),
    connectorConfig:
      output.connectorConfig != null ? de_ConnectorConfigResponse(output.connectorConfig, context) : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    encryptionConfig:
      output.encryptionConfig != null ? de_EncryptionConfigList(output.encryptionConfig, context) : undefined,
    endpoint: __expectString(output.endpoint),
    health: output.health != null ? de_ClusterHealth(output.health, context) : undefined,
    id: __expectString(output.id),
    identity: output.identity != null ? de_Identity(output.identity, context) : undefined,
    kubernetesNetworkConfig:
      output.kubernetesNetworkConfig != null
        ? de_KubernetesNetworkConfigResponse(output.kubernetesNetworkConfig, context)
        : undefined,
    logging: output.logging != null ? de_Logging(output.logging, context) : undefined,
    name: __expectString(output.name),
    outpostConfig: output.outpostConfig != null ? de_OutpostConfigResponse(output.outpostConfig, context) : undefined,
    platformVersion: __expectString(output.platformVersion),
    resourcesVpcConfig:
      output.resourcesVpcConfig != null ? de_VpcConfigResponse(output.resourcesVpcConfig, context) : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1ClusterHealth
 */
const de_ClusterHealth = (output: any, context: __SerdeContext): ClusterHealth => {
  return {
    issues: output.issues != null ? de_ClusterIssueList(output.issues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClusterIssue
 */
const de_ClusterIssue = (output: any, context: __SerdeContext): ClusterIssue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds: output.resourceIds != null ? de_StringList(output.resourceIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ClusterIssueList
 */
const de_ClusterIssueList = (output: any, context: __SerdeContext): ClusterIssue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ClusterIssue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Compatibilities
 */
const de_Compatibilities = (output: any, context: __SerdeContext): Compatibility[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Compatibility(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Compatibility
 */
const de_Compatibility = (output: any, context: __SerdeContext): Compatibility => {
  return {
    clusterVersion: __expectString(output.clusterVersion),
    defaultVersion: __expectBoolean(output.defaultVersion),
    platformVersions: output.platformVersions != null ? de_StringList(output.platformVersions, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ConnectorConfigResponse
 */
const de_ConnectorConfigResponse = (output: any, context: __SerdeContext): ConnectorConfigResponse => {
  return {
    activationCode: __expectString(output.activationCode),
    activationExpiry:
      output.activationExpiry != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.activationExpiry)))
        : undefined,
    activationId: __expectString(output.activationId),
    provider: __expectString(output.provider),
    roleArn: __expectString(output.roleArn),
  } as any;
};

/**
 * deserializeAws_restJson1ControlPlanePlacementResponse
 */
const de_ControlPlanePlacementResponse = (output: any, context: __SerdeContext): ControlPlanePlacementResponse => {
  return {
    groupName: __expectString(output.groupName),
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionConfig
 */
const de_EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    provider: output.provider != null ? de_Provider(output.provider, context) : undefined,
    resources: output.resources != null ? de_StringList(output.resources, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1EncryptionConfigList
 */
const de_EncryptionConfigList = (output: any, context: __SerdeContext): EncryptionConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_EncryptionConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ErrorDetail
 */
const de_ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    resourceIds: output.resourceIds != null ? de_StringList(output.resourceIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ErrorDetails
 */
const de_ErrorDetails = (output: any, context: __SerdeContext): ErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ErrorDetail(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FargateProfile
 */
const de_FargateProfile = (output: any, context: __SerdeContext): FargateProfile => {
  return {
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fargateProfileArn: __expectString(output.fargateProfileArn),
    fargateProfileName: __expectString(output.fargateProfileName),
    podExecutionRoleArn: __expectString(output.podExecutionRoleArn),
    selectors: output.selectors != null ? de_FargateProfileSelectors(output.selectors, context) : undefined,
    status: __expectString(output.status),
    subnets: output.subnets != null ? de_StringList(output.subnets, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FargateProfileLabel
 */
const de_FargateProfileLabel = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1FargateProfileSelector
 */
const de_FargateProfileSelector = (output: any, context: __SerdeContext): FargateProfileSelector => {
  return {
    labels: output.labels != null ? de_FargateProfileLabel(output.labels, context) : undefined,
    namespace: __expectString(output.namespace),
  } as any;
};

/**
 * deserializeAws_restJson1FargateProfileSelectors
 */
const de_FargateProfileSelectors = (output: any, context: __SerdeContext): FargateProfileSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FargateProfileSelector(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Identity
 */
const de_Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    oidc: output.oidc != null ? de_OIDC(output.oidc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IdentityProviderConfig
 */
const de_IdentityProviderConfig = (output: any, context: __SerdeContext): IdentityProviderConfig => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1IdentityProviderConfigResponse
 */
const de_IdentityProviderConfigResponse = (output: any, context: __SerdeContext): IdentityProviderConfigResponse => {
  return {
    oidc: output.oidc != null ? de_OidcIdentityProviderConfig(output.oidc, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IdentityProviderConfigs
 */
const de_IdentityProviderConfigs = (output: any, context: __SerdeContext): IdentityProviderConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_IdentityProviderConfig(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Issue
 */
const de_Issue = (output: any, context: __SerdeContext): Issue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds: output.resourceIds != null ? de_StringList(output.resourceIds, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1IssueList
 */
const de_IssueList = (output: any, context: __SerdeContext): Issue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Issue(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1KubernetesNetworkConfigResponse
 */
const de_KubernetesNetworkConfigResponse = (output: any, context: __SerdeContext): KubernetesNetworkConfigResponse => {
  return {
    ipFamily: __expectString(output.ipFamily),
    serviceIpv4Cidr: __expectString(output.serviceIpv4Cidr),
    serviceIpv6Cidr: __expectString(output.serviceIpv6Cidr),
  } as any;
};

/**
 * deserializeAws_restJson1labelsMap
 */
const de_labelsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1LaunchTemplateSpecification
 */
const de_LaunchTemplateSpecification = (output: any, context: __SerdeContext): LaunchTemplateSpecification => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1Logging
 */
const de_Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    clusterLogging: output.clusterLogging != null ? de_LogSetups(output.clusterLogging, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogSetup
 */
const de_LogSetup = (output: any, context: __SerdeContext): LogSetup => {
  return {
    enabled: __expectBoolean(output.enabled),
    types: output.types != null ? de_LogTypes(output.types, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LogSetups
 */
const de_LogSetups = (output: any, context: __SerdeContext): LogSetup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LogSetup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LogTypes
 */
const de_LogTypes = (output: any, context: __SerdeContext): (LogType | string)[] => {
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
 * deserializeAws_restJson1MarketplaceInformation
 */
const de_MarketplaceInformation = (output: any, context: __SerdeContext): MarketplaceInformation => {
  return {
    productId: __expectString(output.productId),
    productUrl: __expectString(output.productUrl),
  } as any;
};

/**
 * deserializeAws_restJson1Nodegroup
 */
const de_Nodegroup = (output: any, context: __SerdeContext): Nodegroup => {
  return {
    amiType: __expectString(output.amiType),
    capacityType: __expectString(output.capacityType),
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    diskSize: __expectInt32(output.diskSize),
    health: output.health != null ? de_NodegroupHealth(output.health, context) : undefined,
    instanceTypes: output.instanceTypes != null ? de_StringList(output.instanceTypes, context) : undefined,
    labels: output.labels != null ? de_labelsMap(output.labels, context) : undefined,
    launchTemplate:
      output.launchTemplate != null ? de_LaunchTemplateSpecification(output.launchTemplate, context) : undefined,
    modifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt))) : undefined,
    nodeRole: __expectString(output.nodeRole),
    nodegroupArn: __expectString(output.nodegroupArn),
    nodegroupName: __expectString(output.nodegroupName),
    releaseVersion: __expectString(output.releaseVersion),
    remoteAccess: output.remoteAccess != null ? de_RemoteAccessConfig(output.remoteAccess, context) : undefined,
    resources: output.resources != null ? de_NodegroupResources(output.resources, context) : undefined,
    scalingConfig: output.scalingConfig != null ? de_NodegroupScalingConfig(output.scalingConfig, context) : undefined,
    status: __expectString(output.status),
    subnets: output.subnets != null ? de_StringList(output.subnets, context) : undefined,
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    taints: output.taints != null ? de_taintsList(output.taints, context) : undefined,
    updateConfig: output.updateConfig != null ? de_NodegroupUpdateConfig(output.updateConfig, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

/**
 * deserializeAws_restJson1NodegroupHealth
 */
const de_NodegroupHealth = (output: any, context: __SerdeContext): NodegroupHealth => {
  return {
    issues: output.issues != null ? de_IssueList(output.issues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1NodegroupResources
 */
const de_NodegroupResources = (output: any, context: __SerdeContext): NodegroupResources => {
  return {
    autoScalingGroups:
      output.autoScalingGroups != null ? de_AutoScalingGroupList(output.autoScalingGroups, context) : undefined,
    remoteAccessSecurityGroup: __expectString(output.remoteAccessSecurityGroup),
  } as any;
};

/**
 * deserializeAws_restJson1NodegroupScalingConfig
 */
const de_NodegroupScalingConfig = (output: any, context: __SerdeContext): NodegroupScalingConfig => {
  return {
    desiredSize: __expectInt32(output.desiredSize),
    maxSize: __expectInt32(output.maxSize),
    minSize: __expectInt32(output.minSize),
  } as any;
};

/**
 * deserializeAws_restJson1NodegroupUpdateConfig
 */
const de_NodegroupUpdateConfig = (output: any, context: __SerdeContext): NodegroupUpdateConfig => {
  return {
    maxUnavailable: __expectInt32(output.maxUnavailable),
    maxUnavailablePercentage: __expectInt32(output.maxUnavailablePercentage),
  } as any;
};

/**
 * deserializeAws_restJson1OIDC
 */
const de_OIDC = (output: any, context: __SerdeContext): OIDC => {
  return {
    issuer: __expectString(output.issuer),
  } as any;
};

/**
 * deserializeAws_restJson1OidcIdentityProviderConfig
 */
const de_OidcIdentityProviderConfig = (output: any, context: __SerdeContext): OidcIdentityProviderConfig => {
  return {
    clientId: __expectString(output.clientId),
    clusterName: __expectString(output.clusterName),
    groupsClaim: __expectString(output.groupsClaim),
    groupsPrefix: __expectString(output.groupsPrefix),
    identityProviderConfigArn: __expectString(output.identityProviderConfigArn),
    identityProviderConfigName: __expectString(output.identityProviderConfigName),
    issuerUrl: __expectString(output.issuerUrl),
    requiredClaims: output.requiredClaims != null ? de_requiredClaimsMap(output.requiredClaims, context) : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? de_TagMap(output.tags, context) : undefined,
    usernameClaim: __expectString(output.usernameClaim),
    usernamePrefix: __expectString(output.usernamePrefix),
  } as any;
};

/**
 * deserializeAws_restJson1OutpostConfigResponse
 */
const de_OutpostConfigResponse = (output: any, context: __SerdeContext): OutpostConfigResponse => {
  return {
    controlPlaneInstanceType: __expectString(output.controlPlaneInstanceType),
    controlPlanePlacement:
      output.controlPlanePlacement != null
        ? de_ControlPlanePlacementResponse(output.controlPlanePlacement, context)
        : undefined,
    outpostArns: output.outpostArns != null ? de_StringList(output.outpostArns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1Provider
 */
const de_Provider = (output: any, context: __SerdeContext): Provider => {
  return {
    keyArn: __expectString(output.keyArn),
  } as any;
};

/**
 * deserializeAws_restJson1RemoteAccessConfig
 */
const de_RemoteAccessConfig = (output: any, context: __SerdeContext): RemoteAccessConfig => {
  return {
    ec2SshKey: __expectString(output.ec2SshKey),
    sourceSecurityGroups:
      output.sourceSecurityGroups != null ? de_StringList(output.sourceSecurityGroups, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1requiredClaimsMap
 */
const de_requiredClaimsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1StringList
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
 * deserializeAws_restJson1Taint
 */
const de_Taint = (output: any, context: __SerdeContext): Taint => {
  return {
    effect: __expectString(output.effect),
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1taintsList
 */
const de_taintsList = (output: any, context: __SerdeContext): Taint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Taint(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Update
 */
const de_Update = (output: any, context: __SerdeContext): Update => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    errors: output.errors != null ? de_ErrorDetails(output.errors, context) : undefined,
    id: __expectString(output.id),
    params: output.params != null ? de_UpdateParams(output.params, context) : undefined,
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

/**
 * deserializeAws_restJson1UpdateParam
 */
const de_UpdateParam = (output: any, context: __SerdeContext): UpdateParam => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

/**
 * deserializeAws_restJson1UpdateParams
 */
const de_UpdateParams = (output: any, context: __SerdeContext): UpdateParam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UpdateParam(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VpcConfigResponse
 */
const de_VpcConfigResponse = (output: any, context: __SerdeContext): VpcConfigResponse => {
  return {
    clusterSecurityGroupId: __expectString(output.clusterSecurityGroupId),
    endpointPrivateAccess: __expectBoolean(output.endpointPrivateAccess),
    endpointPublicAccess: __expectBoolean(output.endpointPublicAccess),
    publicAccessCidrs: output.publicAccessCidrs != null ? de_StringList(output.publicAccessCidrs, context) : undefined,
    securityGroupIds: output.securityGroupIds != null ? de_StringList(output.securityGroupIds, context) : undefined,
    subnetIds: output.subnetIds != null ? de_StringList(output.subnetIds, context) : undefined,
    vpcId: __expectString(output.vpcId),
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
