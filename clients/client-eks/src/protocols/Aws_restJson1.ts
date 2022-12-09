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

export const serializeAws_restJson1AssociateEncryptionConfigCommand = async (
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
      encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
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

export const serializeAws_restJson1AssociateIdentityProviderConfigCommand = async (
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
    ...(input.oidc != null && { oidc: serializeAws_restJson1OidcIdentityProviderConfigRequest(input.oidc, context) }),
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

export const serializeAws_restJson1CreateAddonCommand = async (
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

export const serializeAws_restJson1CreateClusterCommand = async (
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
      encryptionConfig: serializeAws_restJson1EncryptionConfigList(input.encryptionConfig, context),
    }),
    ...(input.kubernetesNetworkConfig != null && {
      kubernetesNetworkConfig: serializeAws_restJson1KubernetesNetworkConfigRequest(
        input.kubernetesNetworkConfig,
        context
      ),
    }),
    ...(input.logging != null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.name != null && { name: input.name }),
    ...(input.outpostConfig != null && {
      outpostConfig: serializeAws_restJson1OutpostConfigRequest(input.outpostConfig, context),
    }),
    ...(input.resourcesVpcConfig != null && {
      resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
    }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateFargateProfileCommand = async (
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
    ...(input.selectors != null && {
      selectors: serializeAws_restJson1FargateProfileSelectors(input.selectors, context),
    }),
    ...(input.subnets != null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
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

export const serializeAws_restJson1CreateNodegroupCommand = async (
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
    ...(input.instanceTypes != null && {
      instanceTypes: serializeAws_restJson1StringList(input.instanceTypes, context),
    }),
    ...(input.labels != null && { labels: serializeAws_restJson1labelsMap(input.labels, context) }),
    ...(input.launchTemplate != null && {
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
    }),
    ...(input.nodeRole != null && { nodeRole: input.nodeRole }),
    ...(input.nodegroupName != null && { nodegroupName: input.nodegroupName }),
    ...(input.releaseVersion != null && { releaseVersion: input.releaseVersion }),
    ...(input.remoteAccess != null && {
      remoteAccess: serializeAws_restJson1RemoteAccessConfig(input.remoteAccess, context),
    }),
    ...(input.scalingConfig != null && {
      scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
    }),
    ...(input.subnets != null && { subnets: serializeAws_restJson1StringList(input.subnets, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
    ...(input.taints != null && { taints: serializeAws_restJson1taintsList(input.taints, context) }),
    ...(input.updateConfig != null && {
      updateConfig: serializeAws_restJson1NodegroupUpdateConfig(input.updateConfig, context),
    }),
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

export const serializeAws_restJson1DeleteAddonCommand = async (
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

export const serializeAws_restJson1DeleteClusterCommand = async (
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

export const serializeAws_restJson1DeleteFargateProfileCommand = async (
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

export const serializeAws_restJson1DeleteNodegroupCommand = async (
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

export const serializeAws_restJson1DeregisterClusterCommand = async (
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

export const serializeAws_restJson1DescribeAddonCommand = async (
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

export const serializeAws_restJson1DescribeAddonConfigurationCommand = async (
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

export const serializeAws_restJson1DescribeAddonVersionsCommand = async (
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

export const serializeAws_restJson1DescribeClusterCommand = async (
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

export const serializeAws_restJson1DescribeFargateProfileCommand = async (
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

export const serializeAws_restJson1DescribeIdentityProviderConfigCommand = async (
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
      identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
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

export const serializeAws_restJson1DescribeNodegroupCommand = async (
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

export const serializeAws_restJson1DescribeUpdateCommand = async (
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

export const serializeAws_restJson1DisassociateIdentityProviderConfigCommand = async (
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
      identityProviderConfig: serializeAws_restJson1IdentityProviderConfig(input.identityProviderConfig, context),
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

export const serializeAws_restJson1ListAddonsCommand = async (
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

export const serializeAws_restJson1ListClustersCommand = async (
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

export const serializeAws_restJson1ListFargateProfilesCommand = async (
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

export const serializeAws_restJson1ListIdentityProviderConfigsCommand = async (
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

export const serializeAws_restJson1ListNodegroupsCommand = async (
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

export const serializeAws_restJson1ListUpdatesCommand = async (
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

export const serializeAws_restJson1RegisterClusterCommand = async (
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
      connectorConfig: serializeAws_restJson1ConnectorConfigRequest(input.connectorConfig, context),
    }),
    ...(input.name != null && { name: input.name }),
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

export const serializeAws_restJson1UpdateAddonCommand = async (
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

export const serializeAws_restJson1UpdateClusterConfigCommand = async (
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
    ...(input.logging != null && { logging: serializeAws_restJson1Logging(input.logging, context) }),
    ...(input.resourcesVpcConfig != null && {
      resourcesVpcConfig: serializeAws_restJson1VpcConfigRequest(input.resourcesVpcConfig, context),
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

export const serializeAws_restJson1UpdateClusterVersionCommand = async (
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

export const serializeAws_restJson1UpdateNodegroupConfigCommand = async (
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
    ...(input.labels != null && { labels: serializeAws_restJson1UpdateLabelsPayload(input.labels, context) }),
    ...(input.scalingConfig != null && {
      scalingConfig: serializeAws_restJson1NodegroupScalingConfig(input.scalingConfig, context),
    }),
    ...(input.taints != null && { taints: serializeAws_restJson1UpdateTaintsPayload(input.taints, context) }),
    ...(input.updateConfig != null && {
      updateConfig: serializeAws_restJson1NodegroupUpdateConfig(input.updateConfig, context),
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

export const serializeAws_restJson1UpdateNodegroupVersionCommand = async (
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
      launchTemplate: serializeAws_restJson1LaunchTemplateSpecification(input.launchTemplate, context),
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

export const deserializeAws_restJson1AssociateEncryptionConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateEncryptionConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateEncryptionConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateEncryptionConfigCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AssociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AssociateIdentityProviderConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1AssociateIdentityProviderConfigCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon != null) {
    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateAddonCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateClusterCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      throw await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFargateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile != null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFargateProfileCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "UnsupportedAvailabilityZoneException":
    case "com.amazonaws.eks#UnsupportedAvailabilityZoneException":
      throw await deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNodegroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup != null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateNodegroupCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon != null) {
    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteAddonCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteClusterCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFargateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile != null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteFargateProfileCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNodegroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup != null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteNodegroupCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeregisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return contents;
};

const deserializeAws_restJson1DeregisterClusterCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addon != null) {
    contents.addon = deserializeAws_restJson1Addon(data.addon, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAddonCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAddonConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAddonConfigurationCommandError(output, context);
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

const deserializeAws_restJson1DescribeAddonConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeAddonVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeAddonVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeAddonVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addons != null) {
    contents.addons = deserializeAws_restJson1Addons(data.addons, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeAddonVersionsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeClusterCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeFargateProfileCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFargateProfileCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFargateProfileCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfile != null) {
    contents.fargateProfile = deserializeAws_restJson1FargateProfile(data.fargateProfile, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeFargateProfileCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeIdentityProviderConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderConfig != null) {
    contents.identityProviderConfig = deserializeAws_restJson1IdentityProviderConfigResponse(
      data.identityProviderConfig,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeIdentityProviderConfigCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeNodegroupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeNodegroupCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeNodegroupCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nodegroup != null) {
    contents.nodegroup = deserializeAws_restJson1Nodegroup(data.nodegroup, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeNodegroupCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeUpdateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeUpdateCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateIdentityProviderConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateIdentityProviderConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1DisassociateIdentityProviderConfigCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListAddonsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAddonsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAddonsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.addons != null) {
    contents.addons = deserializeAws_restJson1StringList(data.addons, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAddonsCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListClustersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListClustersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListClustersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.clusters != null) {
    contents.clusters = deserializeAws_restJson1StringList(data.clusters, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListClustersCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListFargateProfilesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFargateProfilesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFargateProfilesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.fargateProfileNames != null) {
    contents.fargateProfileNames = deserializeAws_restJson1StringList(data.fargateProfileNames, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFargateProfilesCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListIdentityProviderConfigsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIdentityProviderConfigsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListIdentityProviderConfigsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.identityProviderConfigs != null) {
    contents.identityProviderConfigs = deserializeAws_restJson1IdentityProviderConfigs(
      data.identityProviderConfigs,
      context
    );
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListIdentityProviderConfigsCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListNodegroupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNodegroupsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNodegroupsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.nodegroups != null) {
    contents.nodegroups = deserializeAws_restJson1StringList(data.nodegroups, context);
  }
  return contents;
};

const deserializeAws_restJson1ListNodegroupsCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListUpdatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListUpdatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListUpdatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.updateIds != null) {
    contents.updateIds = deserializeAws_restJson1StringList(data.updateIds, context);
  }
  return contents;
};

const deserializeAws_restJson1ListUpdatesCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1RegisterClusterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterClusterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterClusterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.cluster != null) {
    contents.cluster = deserializeAws_restJson1Cluster(data.cluster, context);
  }
  return contents;
};

const deserializeAws_restJson1RegisterClusterCommandError = async (
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
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ClientException":
    case "com.amazonaws.eks#ClientException":
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceLimitExceededException":
    case "com.amazonaws.eks#ResourceLimitExceededException":
      throw await deserializeAws_restJson1ResourceLimitExceededExceptionResponse(parsedOutput, context);
    case "ResourcePropagationDelayException":
    case "com.amazonaws.eks#ResourcePropagationDelayException":
      throw await deserializeAws_restJson1ResourcePropagationDelayExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.eks#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
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
    case "BadRequestException":
    case "com.amazonaws.eks#BadRequestException":
      throw await deserializeAws_restJson1BadRequestExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.eks#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateAddonCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateAddonCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateAddonCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateAddonCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateClusterConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClusterConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateClusterConfigCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateClusterVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateClusterVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateClusterVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateClusterVersionCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateNodegroupConfigCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupConfigCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNodegroupConfigCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateNodegroupConfigCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateNodegroupVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNodegroupVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNodegroupVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.update != null) {
    contents.update = deserializeAws_restJson1Update(data.update, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateNodegroupVersionCommandError = async (
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
      throw await deserializeAws_restJson1ClientExceptionResponse(parsedOutput, context);
    case "InvalidParameterException":
    case "com.amazonaws.eks#InvalidParameterException":
      throw await deserializeAws_restJson1InvalidParameterExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.eks#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ResourceInUseException":
    case "com.amazonaws.eks#ResourceInUseException":
      throw await deserializeAws_restJson1ResourceInUseExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.eks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServerException":
    case "com.amazonaws.eks#ServerException":
      throw await deserializeAws_restJson1ServerExceptionResponse(parsedOutput, context);
    default:
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

const deserializeAws_restJson1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
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

const deserializeAws_restJson1ClientExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ClientException> => {
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

const deserializeAws_restJson1InvalidParameterExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
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

const deserializeAws_restJson1ResourceInUseExceptionResponse = async (
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

const deserializeAws_restJson1ResourceLimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ResourcePropagationDelayExceptionResponse = async (
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

const deserializeAws_restJson1ServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServerException> => {
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const deserializeAws_restJson1UnsupportedAvailabilityZoneExceptionResponse = async (
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
    contents.validZones = deserializeAws_restJson1StringList(data.validZones, context);
  }
  const exception = new UnsupportedAvailabilityZoneException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1ConnectorConfigRequest = (input: ConnectorConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.provider != null && { provider: input.provider }),
    ...(input.roleArn != null && { roleArn: input.roleArn }),
  };
};

const serializeAws_restJson1ControlPlanePlacementRequest = (
  input: ControlPlanePlacementRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.groupName != null && { groupName: input.groupName }),
  };
};

const serializeAws_restJson1EncryptionConfig = (input: EncryptionConfig, context: __SerdeContext): any => {
  return {
    ...(input.provider != null && { provider: serializeAws_restJson1Provider(input.provider, context) }),
    ...(input.resources != null && { resources: serializeAws_restJson1StringList(input.resources, context) }),
  };
};

const serializeAws_restJson1EncryptionConfigList = (input: EncryptionConfig[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1EncryptionConfig(entry, context);
    });
};

const serializeAws_restJson1FargateProfileLabel = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1FargateProfileSelector = (input: FargateProfileSelector, context: __SerdeContext): any => {
  return {
    ...(input.labels != null && { labels: serializeAws_restJson1FargateProfileLabel(input.labels, context) }),
    ...(input.namespace != null && { namespace: input.namespace }),
  };
};

const serializeAws_restJson1FargateProfileSelectors = (
  input: FargateProfileSelector[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FargateProfileSelector(entry, context);
    });
};

const serializeAws_restJson1IdentityProviderConfig = (input: IdentityProviderConfig, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1KubernetesNetworkConfigRequest = (
  input: KubernetesNetworkConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ipFamily != null && { ipFamily: input.ipFamily }),
    ...(input.serviceIpv4Cidr != null && { serviceIpv4Cidr: input.serviceIpv4Cidr }),
  };
};

const serializeAws_restJson1labelsKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1labelsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1LaunchTemplateSpecification = (
  input: LaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.id != null && { id: input.id }),
    ...(input.name != null && { name: input.name }),
    ...(input.version != null && { version: input.version }),
  };
};

const serializeAws_restJson1Logging = (input: Logging, context: __SerdeContext): any => {
  return {
    ...(input.clusterLogging != null && {
      clusterLogging: serializeAws_restJson1LogSetups(input.clusterLogging, context),
    }),
  };
};

const serializeAws_restJson1LogSetup = (input: LogSetup, context: __SerdeContext): any => {
  return {
    ...(input.enabled != null && { enabled: input.enabled }),
    ...(input.types != null && { types: serializeAws_restJson1LogTypes(input.types, context) }),
  };
};

const serializeAws_restJson1LogSetups = (input: LogSetup[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LogSetup(entry, context);
    });
};

const serializeAws_restJson1LogTypes = (input: (LogType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NodegroupScalingConfig = (input: NodegroupScalingConfig, context: __SerdeContext): any => {
  return {
    ...(input.desiredSize != null && { desiredSize: input.desiredSize }),
    ...(input.maxSize != null && { maxSize: input.maxSize }),
    ...(input.minSize != null && { minSize: input.minSize }),
  };
};

const serializeAws_restJson1NodegroupUpdateConfig = (input: NodegroupUpdateConfig, context: __SerdeContext): any => {
  return {
    ...(input.maxUnavailable != null && { maxUnavailable: input.maxUnavailable }),
    ...(input.maxUnavailablePercentage != null && { maxUnavailablePercentage: input.maxUnavailablePercentage }),
  };
};

const serializeAws_restJson1OidcIdentityProviderConfigRequest = (
  input: OidcIdentityProviderConfigRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.clientId != null && { clientId: input.clientId }),
    ...(input.groupsClaim != null && { groupsClaim: input.groupsClaim }),
    ...(input.groupsPrefix != null && { groupsPrefix: input.groupsPrefix }),
    ...(input.identityProviderConfigName != null && { identityProviderConfigName: input.identityProviderConfigName }),
    ...(input.issuerUrl != null && { issuerUrl: input.issuerUrl }),
    ...(input.requiredClaims != null && {
      requiredClaims: serializeAws_restJson1requiredClaimsMap(input.requiredClaims, context),
    }),
    ...(input.usernameClaim != null && { usernameClaim: input.usernameClaim }),
    ...(input.usernamePrefix != null && { usernamePrefix: input.usernamePrefix }),
  };
};

const serializeAws_restJson1OutpostConfigRequest = (input: OutpostConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.controlPlaneInstanceType != null && { controlPlaneInstanceType: input.controlPlaneInstanceType }),
    ...(input.controlPlanePlacement != null && {
      controlPlanePlacement: serializeAws_restJson1ControlPlanePlacementRequest(input.controlPlanePlacement, context),
    }),
    ...(input.outpostArns != null && { outpostArns: serializeAws_restJson1StringList(input.outpostArns, context) }),
  };
};

const serializeAws_restJson1Provider = (input: Provider, context: __SerdeContext): any => {
  return {
    ...(input.keyArn != null && { keyArn: input.keyArn }),
  };
};

const serializeAws_restJson1RemoteAccessConfig = (input: RemoteAccessConfig, context: __SerdeContext): any => {
  return {
    ...(input.ec2SshKey != null && { ec2SshKey: input.ec2SshKey }),
    ...(input.sourceSecurityGroups != null && {
      sourceSecurityGroups: serializeAws_restJson1StringList(input.sourceSecurityGroups, context),
    }),
  };
};

const serializeAws_restJson1requiredClaimsMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
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

const serializeAws_restJson1Taint = (input: Taint, context: __SerdeContext): any => {
  return {
    ...(input.effect != null && { effect: input.effect }),
    ...(input.key != null && { key: input.key }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1taintsList = (input: Taint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Taint(entry, context);
    });
};

const serializeAws_restJson1UpdateLabelsPayload = (input: UpdateLabelsPayload, context: __SerdeContext): any => {
  return {
    ...(input.addOrUpdateLabels != null && {
      addOrUpdateLabels: serializeAws_restJson1labelsMap(input.addOrUpdateLabels, context),
    }),
    ...(input.removeLabels != null && {
      removeLabels: serializeAws_restJson1labelsKeyList(input.removeLabels, context),
    }),
  };
};

const serializeAws_restJson1UpdateTaintsPayload = (input: UpdateTaintsPayload, context: __SerdeContext): any => {
  return {
    ...(input.addOrUpdateTaints != null && {
      addOrUpdateTaints: serializeAws_restJson1taintsList(input.addOrUpdateTaints, context),
    }),
    ...(input.removeTaints != null && { removeTaints: serializeAws_restJson1taintsList(input.removeTaints, context) }),
  };
};

const serializeAws_restJson1VpcConfigRequest = (input: VpcConfigRequest, context: __SerdeContext): any => {
  return {
    ...(input.endpointPrivateAccess != null && { endpointPrivateAccess: input.endpointPrivateAccess }),
    ...(input.endpointPublicAccess != null && { endpointPublicAccess: input.endpointPublicAccess }),
    ...(input.publicAccessCidrs != null && {
      publicAccessCidrs: serializeAws_restJson1StringList(input.publicAccessCidrs, context),
    }),
    ...(input.securityGroupIds != null && {
      securityGroupIds: serializeAws_restJson1StringList(input.securityGroupIds, context),
    }),
    ...(input.subnetIds != null && { subnetIds: serializeAws_restJson1StringList(input.subnetIds, context) }),
  };
};

const deserializeAws_restJson1Addon = (output: any, context: __SerdeContext): Addon => {
  return {
    addonArn: __expectString(output.addonArn),
    addonName: __expectString(output.addonName),
    addonVersion: __expectString(output.addonVersion),
    clusterName: __expectString(output.clusterName),
    configurationValues: __expectString(output.configurationValues),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    health: output.health != null ? deserializeAws_restJson1AddonHealth(output.health, context) : undefined,
    marketplaceInformation:
      output.marketplaceInformation != null
        ? deserializeAws_restJson1MarketplaceInformation(output.marketplaceInformation, context)
        : undefined,
    modifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt))) : undefined,
    owner: __expectString(output.owner),
    publisher: __expectString(output.publisher),
    serviceAccountRoleArn: __expectString(output.serviceAccountRoleArn),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AddonHealth = (output: any, context: __SerdeContext): AddonHealth => {
  return {
    issues: output.issues != null ? deserializeAws_restJson1AddonIssueList(output.issues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AddonInfo = (output: any, context: __SerdeContext): AddonInfo => {
  return {
    addonName: __expectString(output.addonName),
    addonVersions:
      output.addonVersions != null
        ? deserializeAws_restJson1AddonVersionInfoList(output.addonVersions, context)
        : undefined,
    marketplaceInformation:
      output.marketplaceInformation != null
        ? deserializeAws_restJson1MarketplaceInformation(output.marketplaceInformation, context)
        : undefined,
    owner: __expectString(output.owner),
    publisher: __expectString(output.publisher),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1AddonIssue = (output: any, context: __SerdeContext): AddonIssue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds:
      output.resourceIds != null ? deserializeAws_restJson1StringList(output.resourceIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AddonIssueList = (output: any, context: __SerdeContext): AddonIssue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AddonIssue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Addons = (output: any, context: __SerdeContext): AddonInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AddonInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AddonVersionInfo = (output: any, context: __SerdeContext): AddonVersionInfo => {
  return {
    addonVersion: __expectString(output.addonVersion),
    architecture:
      output.architecture != null ? deserializeAws_restJson1StringList(output.architecture, context) : undefined,
    compatibilities:
      output.compatibilities != null
        ? deserializeAws_restJson1Compatibilities(output.compatibilities, context)
        : undefined,
    requiresConfiguration: __expectBoolean(output.requiresConfiguration),
  } as any;
};

const deserializeAws_restJson1AddonVersionInfoList = (output: any, context: __SerdeContext): AddonVersionInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AddonVersionInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AutoScalingGroup = (output: any, context: __SerdeContext): AutoScalingGroup => {
  return {
    name: __expectString(output.name),
  } as any;
};

const deserializeAws_restJson1AutoScalingGroupList = (output: any, context: __SerdeContext): AutoScalingGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AutoScalingGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Certificate = (output: any, context: __SerdeContext): Certificate => {
  return {
    data: __expectString(output.data),
  } as any;
};

const deserializeAws_restJson1Cluster = (output: any, context: __SerdeContext): Cluster => {
  return {
    arn: __expectString(output.arn),
    certificateAuthority:
      output.certificateAuthority != null
        ? deserializeAws_restJson1Certificate(output.certificateAuthority, context)
        : undefined,
    clientRequestToken: __expectString(output.clientRequestToken),
    connectorConfig:
      output.connectorConfig != null
        ? deserializeAws_restJson1ConnectorConfigResponse(output.connectorConfig, context)
        : undefined,
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    encryptionConfig:
      output.encryptionConfig != null
        ? deserializeAws_restJson1EncryptionConfigList(output.encryptionConfig, context)
        : undefined,
    endpoint: __expectString(output.endpoint),
    health: output.health != null ? deserializeAws_restJson1ClusterHealth(output.health, context) : undefined,
    id: __expectString(output.id),
    identity: output.identity != null ? deserializeAws_restJson1Identity(output.identity, context) : undefined,
    kubernetesNetworkConfig:
      output.kubernetesNetworkConfig != null
        ? deserializeAws_restJson1KubernetesNetworkConfigResponse(output.kubernetesNetworkConfig, context)
        : undefined,
    logging: output.logging != null ? deserializeAws_restJson1Logging(output.logging, context) : undefined,
    name: __expectString(output.name),
    outpostConfig:
      output.outpostConfig != null
        ? deserializeAws_restJson1OutpostConfigResponse(output.outpostConfig, context)
        : undefined,
    platformVersion: __expectString(output.platformVersion),
    resourcesVpcConfig:
      output.resourcesVpcConfig != null
        ? deserializeAws_restJson1VpcConfigResponse(output.resourcesVpcConfig, context)
        : undefined,
    roleArn: __expectString(output.roleArn),
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1ClusterHealth = (output: any, context: __SerdeContext): ClusterHealth => {
  return {
    issues: output.issues != null ? deserializeAws_restJson1ClusterIssueList(output.issues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClusterIssue = (output: any, context: __SerdeContext): ClusterIssue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds:
      output.resourceIds != null ? deserializeAws_restJson1StringList(output.resourceIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClusterIssueList = (output: any, context: __SerdeContext): ClusterIssue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ClusterIssue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Compatibilities = (output: any, context: __SerdeContext): Compatibility[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Compatibility(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Compatibility = (output: any, context: __SerdeContext): Compatibility => {
  return {
    clusterVersion: __expectString(output.clusterVersion),
    defaultVersion: __expectBoolean(output.defaultVersion),
    platformVersions:
      output.platformVersions != null
        ? deserializeAws_restJson1StringList(output.platformVersions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ConnectorConfigResponse = (
  output: any,
  context: __SerdeContext
): ConnectorConfigResponse => {
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

const deserializeAws_restJson1ControlPlanePlacementResponse = (
  output: any,
  context: __SerdeContext
): ControlPlanePlacementResponse => {
  return {
    groupName: __expectString(output.groupName),
  } as any;
};

const deserializeAws_restJson1EncryptionConfig = (output: any, context: __SerdeContext): EncryptionConfig => {
  return {
    provider: output.provider != null ? deserializeAws_restJson1Provider(output.provider, context) : undefined,
    resources: output.resources != null ? deserializeAws_restJson1StringList(output.resources, context) : undefined,
  } as any;
};

const deserializeAws_restJson1EncryptionConfigList = (output: any, context: __SerdeContext): EncryptionConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EncryptionConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    errorCode: __expectString(output.errorCode),
    errorMessage: __expectString(output.errorMessage),
    resourceIds:
      output.resourceIds != null ? deserializeAws_restJson1StringList(output.resourceIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorDetails = (output: any, context: __SerdeContext): ErrorDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ErrorDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FargateProfile = (output: any, context: __SerdeContext): FargateProfile => {
  return {
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    fargateProfileArn: __expectString(output.fargateProfileArn),
    fargateProfileName: __expectString(output.fargateProfileName),
    podExecutionRoleArn: __expectString(output.podExecutionRoleArn),
    selectors:
      output.selectors != null ? deserializeAws_restJson1FargateProfileSelectors(output.selectors, context) : undefined,
    status: __expectString(output.status),
    subnets: output.subnets != null ? deserializeAws_restJson1StringList(output.subnets, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FargateProfileLabel = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1FargateProfileSelector = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector => {
  return {
    labels: output.labels != null ? deserializeAws_restJson1FargateProfileLabel(output.labels, context) : undefined,
    namespace: __expectString(output.namespace),
  } as any;
};

const deserializeAws_restJson1FargateProfileSelectors = (
  output: any,
  context: __SerdeContext
): FargateProfileSelector[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FargateProfileSelector(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Identity = (output: any, context: __SerdeContext): Identity => {
  return {
    oidc: output.oidc != null ? deserializeAws_restJson1OIDC(output.oidc, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IdentityProviderConfig = (
  output: any,
  context: __SerdeContext
): IdentityProviderConfig => {
  return {
    name: __expectString(output.name),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1IdentityProviderConfigResponse = (
  output: any,
  context: __SerdeContext
): IdentityProviderConfigResponse => {
  return {
    oidc: output.oidc != null ? deserializeAws_restJson1OidcIdentityProviderConfig(output.oidc, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IdentityProviderConfigs = (
  output: any,
  context: __SerdeContext
): IdentityProviderConfig[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IdentityProviderConfig(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Issue = (output: any, context: __SerdeContext): Issue => {
  return {
    code: __expectString(output.code),
    message: __expectString(output.message),
    resourceIds:
      output.resourceIds != null ? deserializeAws_restJson1StringList(output.resourceIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1IssueList = (output: any, context: __SerdeContext): Issue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Issue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KubernetesNetworkConfigResponse = (
  output: any,
  context: __SerdeContext
): KubernetesNetworkConfigResponse => {
  return {
    ipFamily: __expectString(output.ipFamily),
    serviceIpv4Cidr: __expectString(output.serviceIpv4Cidr),
    serviceIpv6Cidr: __expectString(output.serviceIpv6Cidr),
  } as any;
};

const deserializeAws_restJson1labelsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1LaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): LaunchTemplateSpecification => {
  return {
    id: __expectString(output.id),
    name: __expectString(output.name),
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1Logging = (output: any, context: __SerdeContext): Logging => {
  return {
    clusterLogging:
      output.clusterLogging != null ? deserializeAws_restJson1LogSetups(output.clusterLogging, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogSetup = (output: any, context: __SerdeContext): LogSetup => {
  return {
    enabled: __expectBoolean(output.enabled),
    types: output.types != null ? deserializeAws_restJson1LogTypes(output.types, context) : undefined,
  } as any;
};

const deserializeAws_restJson1LogSetups = (output: any, context: __SerdeContext): LogSetup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LogSetup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LogTypes = (output: any, context: __SerdeContext): (LogType | string)[] => {
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

const deserializeAws_restJson1MarketplaceInformation = (
  output: any,
  context: __SerdeContext
): MarketplaceInformation => {
  return {
    productId: __expectString(output.productId),
    productUrl: __expectString(output.productUrl),
  } as any;
};

const deserializeAws_restJson1Nodegroup = (output: any, context: __SerdeContext): Nodegroup => {
  return {
    amiType: __expectString(output.amiType),
    capacityType: __expectString(output.capacityType),
    clusterName: __expectString(output.clusterName),
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    diskSize: __expectInt32(output.diskSize),
    health: output.health != null ? deserializeAws_restJson1NodegroupHealth(output.health, context) : undefined,
    instanceTypes:
      output.instanceTypes != null ? deserializeAws_restJson1StringList(output.instanceTypes, context) : undefined,
    labels: output.labels != null ? deserializeAws_restJson1labelsMap(output.labels, context) : undefined,
    launchTemplate:
      output.launchTemplate != null
        ? deserializeAws_restJson1LaunchTemplateSpecification(output.launchTemplate, context)
        : undefined,
    modifiedAt:
      output.modifiedAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.modifiedAt))) : undefined,
    nodeRole: __expectString(output.nodeRole),
    nodegroupArn: __expectString(output.nodegroupArn),
    nodegroupName: __expectString(output.nodegroupName),
    releaseVersion: __expectString(output.releaseVersion),
    remoteAccess:
      output.remoteAccess != null
        ? deserializeAws_restJson1RemoteAccessConfig(output.remoteAccess, context)
        : undefined,
    resources:
      output.resources != null ? deserializeAws_restJson1NodegroupResources(output.resources, context) : undefined,
    scalingConfig:
      output.scalingConfig != null
        ? deserializeAws_restJson1NodegroupScalingConfig(output.scalingConfig, context)
        : undefined,
    status: __expectString(output.status),
    subnets: output.subnets != null ? deserializeAws_restJson1StringList(output.subnets, context) : undefined,
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    taints: output.taints != null ? deserializeAws_restJson1taintsList(output.taints, context) : undefined,
    updateConfig:
      output.updateConfig != null
        ? deserializeAws_restJson1NodegroupUpdateConfig(output.updateConfig, context)
        : undefined,
    version: __expectString(output.version),
  } as any;
};

const deserializeAws_restJson1NodegroupHealth = (output: any, context: __SerdeContext): NodegroupHealth => {
  return {
    issues: output.issues != null ? deserializeAws_restJson1IssueList(output.issues, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NodegroupResources = (output: any, context: __SerdeContext): NodegroupResources => {
  return {
    autoScalingGroups:
      output.autoScalingGroups != null
        ? deserializeAws_restJson1AutoScalingGroupList(output.autoScalingGroups, context)
        : undefined,
    remoteAccessSecurityGroup: __expectString(output.remoteAccessSecurityGroup),
  } as any;
};

const deserializeAws_restJson1NodegroupScalingConfig = (
  output: any,
  context: __SerdeContext
): NodegroupScalingConfig => {
  return {
    desiredSize: __expectInt32(output.desiredSize),
    maxSize: __expectInt32(output.maxSize),
    minSize: __expectInt32(output.minSize),
  } as any;
};

const deserializeAws_restJson1NodegroupUpdateConfig = (output: any, context: __SerdeContext): NodegroupUpdateConfig => {
  return {
    maxUnavailable: __expectInt32(output.maxUnavailable),
    maxUnavailablePercentage: __expectInt32(output.maxUnavailablePercentage),
  } as any;
};

const deserializeAws_restJson1OIDC = (output: any, context: __SerdeContext): OIDC => {
  return {
    issuer: __expectString(output.issuer),
  } as any;
};

const deserializeAws_restJson1OidcIdentityProviderConfig = (
  output: any,
  context: __SerdeContext
): OidcIdentityProviderConfig => {
  return {
    clientId: __expectString(output.clientId),
    clusterName: __expectString(output.clusterName),
    groupsClaim: __expectString(output.groupsClaim),
    groupsPrefix: __expectString(output.groupsPrefix),
    identityProviderConfigArn: __expectString(output.identityProviderConfigArn),
    identityProviderConfigName: __expectString(output.identityProviderConfigName),
    issuerUrl: __expectString(output.issuerUrl),
    requiredClaims:
      output.requiredClaims != null
        ? deserializeAws_restJson1requiredClaimsMap(output.requiredClaims, context)
        : undefined,
    status: __expectString(output.status),
    tags: output.tags != null ? deserializeAws_restJson1TagMap(output.tags, context) : undefined,
    usernameClaim: __expectString(output.usernameClaim),
    usernamePrefix: __expectString(output.usernamePrefix),
  } as any;
};

const deserializeAws_restJson1OutpostConfigResponse = (output: any, context: __SerdeContext): OutpostConfigResponse => {
  return {
    controlPlaneInstanceType: __expectString(output.controlPlaneInstanceType),
    controlPlanePlacement:
      output.controlPlanePlacement != null
        ? deserializeAws_restJson1ControlPlanePlacementResponse(output.controlPlanePlacement, context)
        : undefined,
    outpostArns:
      output.outpostArns != null ? deserializeAws_restJson1StringList(output.outpostArns, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Provider = (output: any, context: __SerdeContext): Provider => {
  return {
    keyArn: __expectString(output.keyArn),
  } as any;
};

const deserializeAws_restJson1RemoteAccessConfig = (output: any, context: __SerdeContext): RemoteAccessConfig => {
  return {
    ec2SshKey: __expectString(output.ec2SshKey),
    sourceSecurityGroups:
      output.sourceSecurityGroups != null
        ? deserializeAws_restJson1StringList(output.sourceSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1requiredClaimsMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Taint = (output: any, context: __SerdeContext): Taint => {
  return {
    effect: __expectString(output.effect),
    key: __expectString(output.key),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1taintsList = (output: any, context: __SerdeContext): Taint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Taint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Update = (output: any, context: __SerdeContext): Update => {
  return {
    createdAt:
      output.createdAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.createdAt))) : undefined,
    errors: output.errors != null ? deserializeAws_restJson1ErrorDetails(output.errors, context) : undefined,
    id: __expectString(output.id),
    params: output.params != null ? deserializeAws_restJson1UpdateParams(output.params, context) : undefined,
    status: __expectString(output.status),
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1UpdateParam = (output: any, context: __SerdeContext): UpdateParam => {
  return {
    type: __expectString(output.type),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1UpdateParams = (output: any, context: __SerdeContext): UpdateParam[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UpdateParam(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcConfigResponse = (output: any, context: __SerdeContext): VpcConfigResponse => {
  return {
    clusterSecurityGroupId: __expectString(output.clusterSecurityGroupId),
    endpointPrivateAccess: __expectBoolean(output.endpointPrivateAccess),
    endpointPublicAccess: __expectBoolean(output.endpointPublicAccess),
    publicAccessCidrs:
      output.publicAccessCidrs != null
        ? deserializeAws_restJson1StringList(output.publicAccessCidrs, context)
        : undefined,
    securityGroupIds:
      output.securityGroupIds != null
        ? deserializeAws_restJson1StringList(output.securityGroupIds, context)
        : undefined,
    subnetIds: output.subnetIds != null ? deserializeAws_restJson1StringList(output.subnetIds, context) : undefined,
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
