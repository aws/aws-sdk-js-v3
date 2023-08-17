// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
} from "../commands/AssociateExternalConnectionCommand";
import {
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
} from "../commands/CopyPackageVersionsCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "../commands/CreateDomainCommand";
import { CreateRepositoryCommandInput, CreateRepositoryCommandOutput } from "../commands/CreateRepositoryCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "../commands/DeleteDomainCommand";
import {
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
} from "../commands/DeleteDomainPermissionsPolicyCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "../commands/DeletePackageCommand";
import {
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
} from "../commands/DeletePackageVersionsCommand";
import { DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput } from "../commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
} from "../commands/DeleteRepositoryPermissionsPolicyCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "../commands/DescribeDomainCommand";
import { DescribePackageCommandInput, DescribePackageCommandOutput } from "../commands/DescribePackageCommand";
import {
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "../commands/DescribePackageVersionCommand";
import { DescribeRepositoryCommandInput, DescribeRepositoryCommandOutput } from "../commands/DescribeRepositoryCommand";
import {
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
} from "../commands/DisassociateExternalConnectionCommand";
import {
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
} from "../commands/DisposePackageVersionsCommand";
import {
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "../commands/GetAuthorizationTokenCommand";
import {
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
} from "../commands/GetDomainPermissionsPolicyCommand";
import {
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
} from "../commands/GetPackageVersionAssetCommand";
import {
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
} from "../commands/GetPackageVersionReadmeCommand";
import {
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
} from "../commands/GetRepositoryEndpointCommand";
import {
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
} from "../commands/GetRepositoryPermissionsPolicyCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import {
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "../commands/ListPackageVersionAssetsCommand";
import {
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
} from "../commands/ListPackageVersionDependenciesCommand";
import {
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "../commands/ListPackageVersionsCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import {
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "../commands/ListRepositoriesInDomainCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  PublishPackageVersionCommandInput,
  PublishPackageVersionCommandOutput,
} from "../commands/PublishPackageVersionCommand";
import {
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "../commands/PutDomainPermissionsPolicyCommand";
import {
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
} from "../commands/PutPackageOriginConfigurationCommand";
import {
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "../commands/PutRepositoryPermissionsPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "../commands/UpdatePackageVersionsStatusCommand";
import { UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput } from "../commands/UpdateRepositoryCommand";
import { CodeartifactServiceException as __BaseException } from "../models/CodeartifactServiceException";
import {
  AccessDeniedException,
  ConflictException,
  DomainDescription,
  DomainSummary,
  InternalServerException,
  PackageOriginRestrictions,
  PackageVersionDescription,
  RepositoryDescription,
  RepositorySummary,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Tag,
  ThrottlingException,
  UpstreamRepository,
  ValidationException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateExternalConnectionCommand
 */
export const se_AssociateExternalConnectionCommand = async (
  input: AssociateExternalConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/external-connection";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    "external-connection": [, __expectNonNull(input.externalConnection!, `externalConnection`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CopyPackageVersionsCommand
 */
export const se_CopyPackageVersionsCommand = async (
  input: CopyPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/copy";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    "source-repository": [, __expectNonNull(input.sourceRepository!, `sourceRepository`)],
    "destination-repository": [, __expectNonNull(input.destinationRepository!, `destinationRepository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      allowOverwrite: [],
      includeFromUpstream: [],
      versionRevisions: (_) => _json(_),
      versions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDomainCommand
 */
export const se_CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      encryptionKey: [],
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
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateRepositoryCommand
 */
export const se_CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      tags: (_) => _json(_),
      upstreams: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDomainCommand
 */
export const se_DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
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
 * serializeAws_restJson1DeleteDomainPermissionsPolicyCommand
 */
export const se_DeleteDomainPermissionsPolicyCommand = async (
  input: DeleteDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/permissions/policy";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    "policy-revision": [, input.policyRevision!],
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
 * serializeAws_restJson1DeletePackageCommand
 */
export const se_DeletePackageCommand = async (
  input: DeletePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
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
 * serializeAws_restJson1DeletePackageVersionsCommand
 */
export const se_DeletePackageVersionsCommand = async (
  input: DeletePackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/delete";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedStatus: [],
      versions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteRepositoryCommand
 */
export const se_DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
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
 * serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand
 */
export const se_DeleteRepositoryPermissionsPolicyCommand = async (
  input: DeleteRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/permissions/policies";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    "policy-revision": [, input.policyRevision!],
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
 * serializeAws_restJson1DescribeDomainCommand
 */
export const se_DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
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
 * serializeAws_restJson1DescribePackageCommand
 */
export const se_DescribePackageCommand = async (
  input: DescribePackageCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
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
 * serializeAws_restJson1DescribePackageVersionCommand
 */
export const se_DescribePackageVersionCommand = async (
  input: DescribePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    version: [, __expectNonNull(input.packageVersion!, `packageVersion`)],
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
 * serializeAws_restJson1DescribeRepositoryCommand
 */
export const se_DescribeRepositoryCommand = async (
  input: DescribeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
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
 * serializeAws_restJson1DisassociateExternalConnectionCommand
 */
export const se_DisassociateExternalConnectionCommand = async (
  input: DisassociateExternalConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/external-connection";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    "external-connection": [, __expectNonNull(input.externalConnection!, `externalConnection`)],
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
 * serializeAws_restJson1DisposePackageVersionsCommand
 */
export const se_DisposePackageVersionsCommand = async (
  input: DisposePackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/dispose";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedStatus: [],
      versionRevisions: (_) => _json(_),
      versions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetAuthorizationTokenCommand
 */
export const se_GetAuthorizationTokenCommand = async (
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/authorization-token";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    duration: [() => input.durationSeconds !== void 0, () => input.durationSeconds!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1GetDomainPermissionsPolicyCommand
 */
export const se_GetDomainPermissionsPolicyCommand = async (
  input: GetDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/permissions/policy";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
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
 * serializeAws_restJson1GetPackageVersionAssetCommand
 */
export const se_GetPackageVersionAssetCommand = async (
  input: GetPackageVersionAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/asset";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    version: [, __expectNonNull(input.packageVersion!, `packageVersion`)],
    asset: [, __expectNonNull(input.asset!, `asset`)],
    revision: [, input.packageVersionRevision!],
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
 * serializeAws_restJson1GetPackageVersionReadmeCommand
 */
export const se_GetPackageVersionReadmeCommand = async (
  input: GetPackageVersionReadmeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/readme";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    version: [, __expectNonNull(input.packageVersion!, `packageVersion`)],
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
 * serializeAws_restJson1GetRepositoryEndpointCommand
 */
export const se_GetRepositoryEndpointCommand = async (
  input: GetRepositoryEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/endpoint";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
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
 * serializeAws_restJson1GetRepositoryPermissionsPolicyCommand
 */
export const se_GetRepositoryPermissionsPolicyCommand = async (
  input: GetRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/permissions/policy";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
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
 * serializeAws_restJson1ListDomainsCommand
 */
export const se_ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domains";
  let body: any;
  body = JSON.stringify(
    take(input, {
      maxResults: [],
      nextToken: [],
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
 * serializeAws_restJson1ListPackagesCommand
 */
export const se_ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/packages";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, input.format!],
    namespace: [, input.namespace!],
    "package-prefix": [, input.packagePrefix!],
    "max-results": [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    "next-token": [, input.nextToken!],
    publish: [, input.publish!],
    upstream: [, input.upstream!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPackageVersionAssetsCommand
 */
export const se_ListPackageVersionAssetsCommand = async (
  input: ListPackageVersionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/assets";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    version: [, __expectNonNull(input.packageVersion!, `packageVersion`)],
    "max-results": [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    "next-token": [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPackageVersionDependenciesCommand
 */
export const se_ListPackageVersionDependenciesCommand = async (
  input: ListPackageVersionDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/dependencies";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    version: [, __expectNonNull(input.packageVersion!, `packageVersion`)],
    "next-token": [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPackageVersionsCommand
 */
export const se_ListPackageVersionsCommand = async (
  input: ListPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    status: [, input.status!],
    sortBy: [, input.sortBy!],
    "max-results": [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    "next-token": [, input.nextToken!],
    originType: [, input.originType!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListRepositoriesCommand
 */
export const se_ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repositories";
  const query: any = map({
    "repository-prefix": [, input.repositoryPrefix!],
    "max-results": [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    "next-token": [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListRepositoriesInDomainCommand
 */
export const se_ListRepositoriesInDomainCommand = async (
  input: ListRepositoriesInDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/repositories";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    "administrator-account": [, input.administratorAccount!],
    "repository-prefix": [, input.repositoryPrefix!],
    "max-results": [() => input.maxResults !== void 0, () => input.maxResults!.toString()],
    "next-token": [, input.nextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tags";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PublishPackageVersionCommand
 */
export const se_PublishPackageVersionCommand = async (
  input: PublishPackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-amz-content-sha256": input.assetSHA256!,
  });
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/version/publish";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
    version: [, __expectNonNull(input.packageVersion!, `packageVersion`)],
    asset: [, __expectNonNull(input.assetName!, `assetName`)],
    unfinished: [() => input.unfinished !== void 0, () => input.unfinished!.toString()],
  });
  let body: any;
  if (input.assetContent !== undefined) {
    body = input.assetContent;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutDomainPermissionsPolicyCommand
 */
export const se_PutDomainPermissionsPolicyCommand = async (
  input: PutDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/domain/permissions/policy";
  let body: any;
  body = JSON.stringify(
    take(input, {
      domain: [],
      domainOwner: [],
      policyDocument: [],
      policyRevision: [],
    })
  );
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
 * serializeAws_restJson1PutPackageOriginConfigurationCommand
 */
export const se_PutPackageOriginConfigurationCommand = async (
  input: PutPackageOriginConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      restrictions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PutRepositoryPermissionsPolicyCommand
 */
export const se_PutRepositoryPermissionsPolicyCommand = async (
  input: PutRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository/permissions/policy";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      policyDocument: [],
      policyRevision: [],
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/tag";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
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
    query,
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
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/untag";
  const query: any = map({
    resourceArn: [, __expectNonNull(input.resourceArn!, `resourceArn`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      tagKeys: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdatePackageVersionsStatusCommand
 */
export const se_UpdatePackageVersionsStatusCommand = async (
  input: UpdatePackageVersionsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/package/versions/update_status";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
    format: [, __expectNonNull(input.format!, `format`)],
    namespace: [, input.namespace!],
    package: [, __expectNonNull(input.package!, `package`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      expectedStatus: [],
      targetStatus: [],
      versionRevisions: (_) => _json(_),
      versions: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateRepositoryCommand
 */
export const se_UpdateRepositoryCommand = async (
  input: UpdateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/repository";
  const query: any = map({
    domain: [, __expectNonNull(input.domain!, `domain`)],
    "domain-owner": [, input.domainOwner!],
    repository: [, __expectNonNull(input.repository!, `repository`)],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      description: [],
      upstreams: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * deserializeAws_restJson1AssociateExternalConnectionCommand
 */
export const de_AssociateExternalConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateExternalConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssociateExternalConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateExternalConnectionCommandError
 */
const de_AssociateExternalConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateExternalConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1CopyPackageVersionsCommand
 */
export const de_CopyPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CopyPackageVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CopyPackageVersionsCommandError
 */
const de_CopyPackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyPackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1CreateDomainCommand
 */
export const de_CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domain: (_) => de_DomainDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDomainCommandError
 */
const de_CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1CreateRepositoryCommand
 */
export const de_CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateRepositoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRepositoryCommandError
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
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DeleteDomainCommand
 */
export const de_DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domain: (_) => de_DomainDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainCommandError
 */
const de_DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand
 */
export const de_DeleteDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDomainPermissionsPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError
 */
const de_DeleteDomainPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DeletePackageCommand
 */
export const de_DeletePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deletedPackage: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageCommandError
 */
const de_DeletePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DeletePackageVersionsCommand
 */
export const de_DeletePackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeletePackageVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePackageVersionsCommandError
 */
const de_DeletePackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DeleteRepositoryCommand
 */
export const de_DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRepositoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRepositoryCommandError
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
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand
 */
export const de_DeleteRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRepositoryPermissionsPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError
 */
const de_DeleteRepositoryPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DescribeDomainCommand
 */
export const de_DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domain: (_) => de_DomainDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeDomainCommandError
 */
const de_DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DescribePackageCommand
 */
export const de_DescribePackageCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackageCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    package: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageCommandError
 */
const de_DescribePackageCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DescribePackageVersionCommand
 */
export const de_DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribePackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    packageVersion: (_) => de_PackageVersionDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribePackageVersionCommandError
 */
const de_DescribePackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DescribeRepositoryCommand
 */
export const de_DescribeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRepositoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRepositoryCommandError
 */
const de_DescribeRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DisassociateExternalConnectionCommand
 */
export const de_DisassociateExternalConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateExternalConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateExternalConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateExternalConnectionCommandError
 */
const de_DisassociateExternalConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateExternalConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1DisposePackageVersionsCommand
 */
export const de_DisposePackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisposePackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisposePackageVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisposePackageVersionsCommandError
 */
const de_DisposePackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisposePackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1GetAuthorizationTokenCommand
 */
export const de_GetAuthorizationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetAuthorizationTokenCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    authorizationToken: __expectString,
    expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetAuthorizationTokenCommandError
 */
const de_GetAuthorizationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1GetDomainPermissionsPolicyCommand
 */
export const de_GetDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDomainPermissionsPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDomainPermissionsPolicyCommandError
 */
const de_GetDomainPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1GetPackageVersionAssetCommand
 */
export const de_GetPackageVersionAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetPackageVersionAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPackageVersionAssetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    assetName: [, output.headers["x-assetname"]],
    packageVersion: [, output.headers["x-packageversion"]],
    packageVersionRevision: [, output.headers["x-packageversionrevision"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.asset = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionAssetCommandError
 */
const de_GetPackageVersionAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1GetPackageVersionReadmeCommand
 */
export const de_GetPackageVersionReadmeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionReadmeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetPackageVersionReadmeCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    format: __expectString,
    namespace: __expectString,
    package: __expectString,
    readme: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetPackageVersionReadmeCommandError
 */
const de_GetPackageVersionReadmeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionReadmeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1GetRepositoryEndpointCommand
 */
export const de_GetRepositoryEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRepositoryEndpointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repositoryEndpoint: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRepositoryEndpointCommandError
 */
const de_GetRepositoryEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand
 */
export const de_GetRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRepositoryPermissionsPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError
 */
const de_GetRepositoryPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListDomainsCommand
 */
export const de_ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDomainsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    domains: (_) => de_DomainSummaryList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDomainsCommandError
 */
const de_ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListPackagesCommand
 */
export const de_ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackagesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    packages: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackagesCommandError
 */
const de_ListPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListPackageVersionAssetsCommand
 */
export const de_ListPackageVersionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackageVersionAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    assets: _json,
    format: __expectString,
    namespace: __expectString,
    nextToken: __expectString,
    package: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionAssetsCommandError
 */
const de_ListPackageVersionAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListPackageVersionDependenciesCommand
 */
export const de_ListPackageVersionDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackageVersionDependenciesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    dependencies: _json,
    format: __expectString,
    namespace: __expectString,
    nextToken: __expectString,
    package: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionDependenciesCommandError
 */
const de_ListPackageVersionDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListPackageVersionsCommand
 */
export const de_ListPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPackageVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    defaultDisplayVersion: __expectString,
    format: __expectString,
    namespace: __expectString,
    nextToken: __expectString,
    package: __expectString,
    versions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPackageVersionsCommandError
 */
const de_ListPackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListRepositoriesCommand
 */
export const de_ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRepositoriesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    repositories: (_) => de_RepositorySummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRepositoriesCommandError
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
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ListRepositoriesInDomainCommand
 */
export const de_ListRepositoriesInDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesInDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRepositoriesInDomainCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    repositories: (_) => de_RepositorySummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRepositoriesInDomainCommandError
 */
const de_ListRepositoriesInDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesInDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1PublishPackageVersionCommand
 */
export const de_PublishPackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishPackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PublishPackageVersionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    asset: _json,
    format: __expectString,
    namespace: __expectString,
    package: __expectString,
    status: __expectString,
    version: __expectString,
    versionRevision: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PublishPackageVersionCommandError
 */
const de_PublishPackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PublishPackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1PutDomainPermissionsPolicyCommand
 */
export const de_PutDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDomainPermissionsPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutDomainPermissionsPolicyCommandError
 */
const de_PutDomainPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDomainPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1PutPackageOriginConfigurationCommand
 */
export const de_PutPackageOriginConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPackageOriginConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutPackageOriginConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    originConfiguration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutPackageOriginConfigurationCommandError
 */
const de_PutPackageOriginConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutPackageOriginConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand
 */
export const de_PutRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutRepositoryPermissionsPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError
 */
const de_PutRepositoryPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1UpdatePackageVersionsStatusCommand
 */
export const de_UpdatePackageVersionsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageVersionsStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdatePackageVersionsStatusCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    failedVersions: _json,
    successfulVersions: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdatePackageVersionsStatusCommandError
 */
const de_UpdatePackageVersionsStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageVersionsStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1UpdateRepositoryCommand
 */
export const de_UpdateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRepositoryCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    repository: (_) => de_RepositoryDescription(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRepositoryCommandError
 */
const de_UpdateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
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
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
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
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_PackageOriginRestrictions omitted.

// se_PackageVersionList omitted.

// se_PackageVersionRevisionMap omitted.

// se_Tag omitted.

// se_TagKeyList omitted.

// se_TagList omitted.

// se_UpstreamRepository omitted.

// se_UpstreamRepositoryList omitted.

// de_AssetHashes omitted.

// de_AssetSummary omitted.

// de_AssetSummaryList omitted.

/**
 * deserializeAws_restJson1DomainDescription
 */
const de_DomainDescription = (output: any, context: __SerdeContext): DomainDescription => {
  return take(output, {
    arn: __expectString,
    assetSizeBytes: __expectLong,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionKey: __expectString,
    name: __expectString,
    owner: __expectString,
    repositoryCount: __expectInt32,
    s3BucketArn: __expectString,
    status: __expectString,
  }) as any;
};

// de_DomainEntryPoint omitted.

/**
 * deserializeAws_restJson1DomainSummary
 */
const de_DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return take(output, {
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    encryptionKey: __expectString,
    name: __expectString,
    owner: __expectString,
    status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DomainSummaryList
 */
const de_DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DomainSummary(entry, context);
    });
  return retVal;
};

// de_LicenseInfo omitted.

// de_LicenseInfoList omitted.

// de_PackageDependency omitted.

// de_PackageDependencyList omitted.

// de_PackageDescription omitted.

// de_PackageOriginConfiguration omitted.

// de_PackageOriginRestrictions omitted.

// de_PackageSummary omitted.

// de_PackageSummaryList omitted.

/**
 * deserializeAws_restJson1PackageVersionDescription
 */
const de_PackageVersionDescription = (output: any, context: __SerdeContext): PackageVersionDescription => {
  return take(output, {
    displayName: __expectString,
    format: __expectString,
    homePage: __expectString,
    licenses: _json,
    namespace: __expectString,
    origin: _json,
    packageName: __expectString,
    publishedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    revision: __expectString,
    sourceCodeRepository: __expectString,
    status: __expectString,
    summary: __expectString,
    version: __expectString,
  }) as any;
};

// de_PackageVersionError omitted.

// de_PackageVersionErrorMap omitted.

// de_PackageVersionOrigin omitted.

// de_PackageVersionSummary omitted.

// de_PackageVersionSummaryList omitted.

/**
 * deserializeAws_restJson1RepositoryDescription
 */
const de_RepositoryDescription = (output: any, context: __SerdeContext): RepositoryDescription => {
  return take(output, {
    administratorAccount: __expectString,
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    domainOwner: __expectString,
    externalConnections: _json,
    name: __expectString,
    upstreams: _json,
  }) as any;
};

// de_RepositoryExternalConnectionInfo omitted.

// de_RepositoryExternalConnectionInfoList omitted.

/**
 * deserializeAws_restJson1RepositorySummary
 */
const de_RepositorySummary = (output: any, context: __SerdeContext): RepositorySummary => {
  return take(output, {
    administratorAccount: __expectString,
    arn: __expectString,
    createdTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    description: __expectString,
    domainName: __expectString,
    domainOwner: __expectString,
    name: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RepositorySummaryList
 */
const de_RepositorySummaryList = (output: any, context: __SerdeContext): RepositorySummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RepositorySummary(entry, context);
    });
  return retVal;
};

// de_ResourcePolicy omitted.

// de_SuccessfulPackageVersionInfo omitted.

// de_SuccessfulPackageVersionInfoMap omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_UpstreamRepositoryInfo omitted.

// de_UpstreamRepositoryInfoList omitted.

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
