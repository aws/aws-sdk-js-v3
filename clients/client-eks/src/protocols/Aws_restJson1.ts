// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  BadRequestException,
  ClientException,
  Cluster,
  ConnectorConfigRequest,
  ConnectorConfigResponse,
  ControlPlanePlacementRequest,
  EncryptionConfig,
  FargateProfile,
  FargateProfileSelector,
  IdentityProviderConfig,
  InvalidParameterException,
  InvalidRequestException,
  KubernetesNetworkConfigRequest,
  LaunchTemplateSpecification,
  Logging,
  LogSetup,
  LogType,
  Nodegroup,
  NodegroupScalingConfig,
  NodegroupUpdateConfig,
  NotFoundException,
  OidcIdentityProviderConfigRequest,
  OutpostConfigRequest,
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
  UpdateTaintsPayload,
  VpcConfigRequest,
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      encryptionConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      oidc: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      addonName: [],
      addonVersion: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationValues: [],
      resolveConflicts: [],
      serviceAccountRoleArn: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      encryptionConfig: (_) => _json(_),
      kubernetesNetworkConfig: (_) => _json(_),
      logging: (_) => _json(_),
      name: [],
      outpostConfig: (_) => _json(_),
      resourcesVpcConfig: (_) => _json(_),
      roleArn: [],
      tags: (_) => _json(_),
      version: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      fargateProfileName: [],
      podExecutionRoleArn: [],
      selectors: (_) => _json(_),
      subnets: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      amiType: [],
      capacityType: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      diskSize: [],
      instanceTypes: (_) => _json(_),
      labels: (_) => _json(_),
      launchTemplate: (_) => _json(_),
      nodeRole: [],
      nodegroupName: [],
      releaseVersion: [],
      remoteAccess: (_) => _json(_),
      scalingConfig: (_) => _json(_),
      subnets: (_) => _json(_),
      tags: (_) => _json(_),
      taints: (_) => _json(_),
      updateConfig: (_) => _json(_),
      version: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      identityProviderConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      identityProviderConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      connectorConfig: (_) => _json(_),
      name: [],
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      addonVersion: [],
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      configurationValues: [],
      resolveConflicts: [],
      serviceAccountRoleArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      logging: (_) => _json(_),
      resourcesVpcConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      version: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      labels: (_) => _json(_),
      scalingConfig: (_) => _json(_),
      taints: (_) => _json(_),
      updateConfig: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      clientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
      force: [],
      launchTemplate: (_) => _json(_),
      releaseVersion: [],
      version: [],
    })
  );
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    addon: (_) => de_Addon(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fargateProfile: (_) => de_FargateProfile(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nodegroup: (_) => de_Nodegroup(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    addon: (_) => de_Addon(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fargateProfile: (_) => de_FargateProfile(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nodegroup: (_) => de_Nodegroup(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    addon: (_) => de_Addon(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    addonName: __expectString,
    addonVersion: __expectString,
    configurationSchema: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    addons: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fargateProfile: (_) => de_FargateProfile(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    identityProviderConfig: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nodegroup: (_) => de_Nodegroup(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    addons: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    clusters: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    fargateProfileNames: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    identityProviderConfigs: _json,
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    nodegroups: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    tags: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    nextToken: __expectString,
    updateIds: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    cluster: (_) => de_Cluster(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    update: (_) => de_Update(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    fargateProfileName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    fargateProfileName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    addonName: __expectString,
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    clusterName: __expectString,
    message: __expectString,
    nodegroupName: __expectString,
    validZones: _json,
  });
  Object.assign(contents, doc);
  const exception = new UnsupportedAvailabilityZoneException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_ConnectorConfigRequest omitted.

// se_ControlPlanePlacementRequest omitted.

// se_EncryptionConfig omitted.

// se_EncryptionConfigList omitted.

// se_FargateProfileLabel omitted.

// se_FargateProfileSelector omitted.

// se_FargateProfileSelectors omitted.

// se_IdentityProviderConfig omitted.

// se_KubernetesNetworkConfigRequest omitted.

// se_labelsKeyList omitted.

// se_labelsMap omitted.

// se_LaunchTemplateSpecification omitted.

// se_Logging omitted.

// se_LogSetup omitted.

// se_LogSetups omitted.

// se_LogTypes omitted.

// se_NodegroupScalingConfig omitted.

// se_NodegroupUpdateConfig omitted.

// se_OidcIdentityProviderConfigRequest omitted.

// se_OutpostConfigRequest omitted.

// se_Provider omitted.

// se_RemoteAccessConfig omitted.

// se_requiredClaimsMap omitted.

// se_StringList omitted.

// se_TagMap omitted.

// se_Taint omitted.

// se_taintsList omitted.

// se_UpdateLabelsPayload omitted.

// se_UpdateTaintsPayload omitted.

// se_VpcConfigRequest omitted.

/**
 * deserializeAws_restJson1Addon
 */
const de_Addon = (output: any, context: __SerdeContext): Addon => {
  return take(output, {
    addonArn: __expectString,
    addonName: __expectString,
    addonVersion: __expectString,
    clusterName: __expectString,
    configurationValues: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    health: _json,
    marketplaceInformation: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    owner: __expectString,
    publisher: __expectString,
    serviceAccountRoleArn: __expectString,
    status: __expectString,
    tags: _json,
  }) as any;
};

// de_AddonHealth omitted.

// de_AddonInfo omitted.

// de_AddonIssue omitted.

// de_AddonIssueList omitted.

// de_Addons omitted.

// de_AddonVersionInfo omitted.

// de_AddonVersionInfoList omitted.

// de_AutoScalingGroup omitted.

// de_AutoScalingGroupList omitted.

// de_Certificate omitted.

/**
 * deserializeAws_restJson1Cluster
 */
const de_Cluster = (output: any, context: __SerdeContext): Cluster => {
  return take(output, {
    arn: __expectString,
    certificateAuthority: _json,
    clientRequestToken: __expectString,
    connectorConfig: (_: any) => de_ConnectorConfigResponse(_, context),
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionConfig: _json,
    endpoint: __expectString,
    health: _json,
    id: __expectString,
    identity: _json,
    kubernetesNetworkConfig: _json,
    logging: _json,
    name: __expectString,
    outpostConfig: _json,
    platformVersion: __expectString,
    resourcesVpcConfig: _json,
    roleArn: __expectString,
    status: __expectString,
    tags: _json,
    version: __expectString,
  }) as any;
};

// de_ClusterHealth omitted.

// de_ClusterIssue omitted.

// de_ClusterIssueList omitted.

// de_Compatibilities omitted.

// de_Compatibility omitted.

/**
 * deserializeAws_restJson1ConnectorConfigResponse
 */
const de_ConnectorConfigResponse = (output: any, context: __SerdeContext): ConnectorConfigResponse => {
  return take(output, {
    activationCode: __expectString,
    activationExpiry: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    activationId: __expectString,
    provider: __expectString,
    roleArn: __expectString,
  }) as any;
};

// de_ControlPlanePlacementResponse omitted.

// de_EncryptionConfig omitted.

// de_EncryptionConfigList omitted.

// de_ErrorDetail omitted.

// de_ErrorDetails omitted.

/**
 * deserializeAws_restJson1FargateProfile
 */
const de_FargateProfile = (output: any, context: __SerdeContext): FargateProfile => {
  return take(output, {
    clusterName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    fargateProfileArn: __expectString,
    fargateProfileName: __expectString,
    podExecutionRoleArn: __expectString,
    selectors: _json,
    status: __expectString,
    subnets: _json,
    tags: _json,
  }) as any;
};

// de_FargateProfileLabel omitted.

// de_FargateProfileSelector omitted.

// de_FargateProfileSelectors omitted.

// de_Identity omitted.

// de_IdentityProviderConfig omitted.

// de_IdentityProviderConfigResponse omitted.

// de_IdentityProviderConfigs omitted.

// de_Issue omitted.

// de_IssueList omitted.

// de_KubernetesNetworkConfigResponse omitted.

// de_labelsMap omitted.

// de_LaunchTemplateSpecification omitted.

// de_Logging omitted.

// de_LogSetup omitted.

// de_LogSetups omitted.

// de_LogTypes omitted.

// de_MarketplaceInformation omitted.

/**
 * deserializeAws_restJson1Nodegroup
 */
const de_Nodegroup = (output: any, context: __SerdeContext): Nodegroup => {
  return take(output, {
    amiType: __expectString,
    capacityType: __expectString,
    clusterName: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    diskSize: __expectInt32,
    health: _json,
    instanceTypes: _json,
    labels: _json,
    launchTemplate: _json,
    modifiedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    nodeRole: __expectString,
    nodegroupArn: __expectString,
    nodegroupName: __expectString,
    releaseVersion: __expectString,
    remoteAccess: _json,
    resources: _json,
    scalingConfig: _json,
    status: __expectString,
    subnets: _json,
    tags: _json,
    taints: _json,
    updateConfig: _json,
    version: __expectString,
  }) as any;
};

// de_NodegroupHealth omitted.

// de_NodegroupResources omitted.

// de_NodegroupScalingConfig omitted.

// de_NodegroupUpdateConfig omitted.

// de_OIDC omitted.

// de_OidcIdentityProviderConfig omitted.

// de_OutpostConfigResponse omitted.

// de_Provider omitted.

// de_RemoteAccessConfig omitted.

// de_requiredClaimsMap omitted.

// de_StringList omitted.

// de_TagMap omitted.

// de_Taint omitted.

// de_taintsList omitted.

/**
 * deserializeAws_restJson1Update
 */
const de_Update = (output: any, context: __SerdeContext): Update => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    errors: _json,
    id: __expectString,
    params: _json,
    status: __expectString,
    type: __expectString,
  }) as any;
};

// de_UpdateParam omitted.

// de_UpdateParams omitted.

// de_VpcConfigResponse omitted.

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
