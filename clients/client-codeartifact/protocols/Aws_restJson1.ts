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
import { ListPackagesCommandInput, ListPackagesCommandOutput } from "../commands/ListPackagesCommand";
import { ListRepositoriesCommandInput, ListRepositoriesCommandOutput } from "../commands/ListRepositoriesCommand";
import {
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "../commands/ListRepositoriesInDomainCommand";
import {
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "../commands/PutDomainPermissionsPolicyCommand";
import {
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "../commands/PutRepositoryPermissionsPolicyCommand";
import {
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "../commands/UpdatePackageVersionsStatusCommand";
import { UpdateRepositoryCommandInput, UpdateRepositoryCommandOutput } from "../commands/UpdateRepositoryCommand";
import {
  AccessDeniedException,
  AssetSummary,
  ConflictException,
  DomainDescription,
  DomainSummary,
  HashAlgorithm,
  InternalServerException,
  LicenseInfo,
  PackageDependency,
  PackageSummary,
  PackageVersionDescription,
  PackageVersionError,
  PackageVersionSummary,
  RepositoryDescription,
  RepositoryExternalConnectionInfo,
  RepositorySummary,
  ResourceNotFoundException,
  ResourcePolicy,
  ServiceQuotaExceededException,
  SuccessfulPackageVersionInfo,
  ThrottlingException,
  UpstreamRepository,
  UpstreamRepositoryInfo,
  ValidationException,
} from "../models/index";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export const serializeAws_restJson1AssociateExternalConnectionCommand = async (
  input: AssociateExternalConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository/external-connection";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.externalConnection !== undefined && { "external-connection": input.externalConnection }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CopyPackageVersionsCommand = async (
  input: CopyPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/package/versions/copy";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.sourceRepository !== undefined && { "source-repository": input.sourceRepository }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.destinationRepository !== undefined && { "destination-repository": input.destinationRepository }),
    ...(input.format !== undefined && { format: input.format }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.allowOverwrite !== undefined && { allowOverwrite: input.allowOverwrite }),
    ...(input.includeFromUpstream !== undefined && { includeFromUpstream: input.includeFromUpstream }),
    ...(input.versionRevisions !== undefined && {
      versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
    }),
    ...(input.versions !== undefined && {
      versions: serializeAws_restJson1PackageVersionList(input.versions, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateDomainCommand = async (
  input: CreateDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/domain";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.encryptionKey !== undefined && { encryptionKey: input.encryptionKey }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1CreateRepositoryCommand = async (
  input: CreateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/repository";
  const query: any = {
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && { description: input.description }),
    ...(input.upstreams !== undefined && {
      upstreams: serializeAws_restJson1UpstreamRepositoryList(input.upstreams, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteDomainCommand = async (
  input: DeleteDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/domain";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteDomainPermissionsPolicyCommand = async (
  input: DeleteDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/domain/permissions/policy";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.policyRevision !== undefined && { "policy-revision": input.policyRevision }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeletePackageVersionsCommand = async (
  input: DeletePackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/package/versions/delete";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.package !== undefined && { package: input.package }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.expectedStatus !== undefined && { expectedStatus: input.expectedStatus }),
    ...(input.versions !== undefined && {
      versions: serializeAws_restJson1PackageVersionList(input.versions, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteRepositoryCommand = async (
  input: DeleteRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository";
  const query: any = {
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = async (
  input: DeleteRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository/permissions/policies";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.policyRevision !== undefined && { "policy-revision": input.policyRevision }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DescribeDomainCommand = async (
  input: DescribeDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/domain";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DescribePackageVersionCommand = async (
  input: DescribePackageVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/package/version";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.packageVersion !== undefined && { version: input.packageVersion }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DescribeRepositoryCommand = async (
  input: DescribeRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository";
  const query: any = {
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DisassociateExternalConnectionCommand = async (
  input: DisassociateExternalConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository/external-connection";
  const query: any = {
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.externalConnection !== undefined && { "external-connection": input.externalConnection }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1DisposePackageVersionsCommand = async (
  input: DisposePackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/package/versions/dispose";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.package !== undefined && { package: input.package }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.expectedStatus !== undefined && { expectedStatus: input.expectedStatus }),
    ...(input.versionRevisions !== undefined && {
      versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
    }),
    ...(input.versions !== undefined && {
      versions: serializeAws_restJson1PackageVersionList(input.versions, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetAuthorizationTokenCommand = async (
  input: GetAuthorizationTokenCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/authorization-token";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.durationSeconds !== undefined && { duration: input.durationSeconds.toString() }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetDomainPermissionsPolicyCommand = async (
  input: GetDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/domain/permissions/policy";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetPackageVersionAssetCommand = async (
  input: GetPackageVersionAssetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/package/version/asset";
  const query: any = {
    ...(input.packageVersion !== undefined && { version: input.packageVersion }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.packageVersionRevision !== undefined && { revision: input.packageVersionRevision }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.asset !== undefined && { asset: input.asset }),
    ...(input.repository !== undefined && { repository: input.repository }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetPackageVersionReadmeCommand = async (
  input: GetPackageVersionReadmeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/package/version/readme";
  const query: any = {
    ...(input.package !== undefined && { package: input.package }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.packageVersion !== undefined && { version: input.packageVersion }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetRepositoryEndpointCommand = async (
  input: GetRepositoryEndpointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository/endpoint";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.repository !== undefined && { repository: input.repository }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1GetRepositoryPermissionsPolicyCommand = async (
  input: GetRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repository/permissions/policy";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.repository !== undefined && { repository: input.repository }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListDomainsCommand = async (
  input: ListDomainsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/domains";
  let body: any;
  body = JSON.stringify({
    ...(input.maxResults !== undefined && { maxResults: input.maxResults }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListPackagesCommand = async (
  input: ListPackagesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/packages";
  const query: any = {
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
    ...(input.packagePrefix !== undefined && { "package-prefix": input.packagePrefix }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domain !== undefined && { domain: input.domain }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListPackageVersionAssetsCommand = async (
  input: ListPackageVersionAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/package/version/assets";
  const query: any = {
    ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    ...(input.packageVersion !== undefined && { version: input.packageVersion }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListPackageVersionDependenciesCommand = async (
  input: ListPackageVersionDependenciesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/package/version/dependencies";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.packageVersion !== undefined && { version: input.packageVersion }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListPackageVersionsCommand = async (
  input: ListPackageVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/package/versions";
  const query: any = {
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.status !== undefined && { status: input.status }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    ...(input.sortBy !== undefined && { sortBy: input.sortBy }),
    ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListRepositoriesCommand = async (
  input: ListRepositoriesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/repositories";
  const query: any = {
    ...(input.repositoryPrefix !== undefined && { "repository-prefix": input.repositoryPrefix }),
    ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
    ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1ListRepositoriesInDomainCommand = async (
  input: ListRepositoriesInDomainCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
  };
  let resolvedPath = "/v1/domain/repositories";
  const query: any = {
    ...(input.nextToken !== undefined && { "next-token": input.nextToken }),
    ...(input.administratorAccount !== undefined && { "administrator-account": input.administratorAccount }),
    ...(input.maxResults !== undefined && { "max-results": input.maxResults.toString() }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.repositoryPrefix !== undefined && { "repository-prefix": input.repositoryPrefix }),
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1PutDomainPermissionsPolicyCommand = async (
  input: PutDomainPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/domain/permissions/policy";
  let body: any;
  body = JSON.stringify({
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.domainOwner !== undefined && { domainOwner: input.domainOwner }),
    ...(input.policyDocument !== undefined && { policyDocument: input.policyDocument }),
    ...(input.policyRevision !== undefined && { policyRevision: input.policyRevision }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1PutRepositoryPermissionsPolicyCommand = async (
  input: PutRepositoryPermissionsPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/repository/permissions/policy";
  const query: any = {
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.repository !== undefined && { repository: input.repository }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.policyDocument !== undefined && { policyDocument: input.policyDocument }),
    ...(input.policyRevision !== undefined && { policyRevision: input.policyRevision }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UpdatePackageVersionsStatusCommand = async (
  input: UpdatePackageVersionsStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/package/versions/update_status";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.package !== undefined && { package: input.package }),
    ...(input.namespace !== undefined && { namespace: input.namespace }),
    ...(input.format !== undefined && { format: input.format }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
    ...(input.repository !== undefined && { repository: input.repository }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.expectedStatus !== undefined && { expectedStatus: input.expectedStatus }),
    ...(input.targetStatus !== undefined && { targetStatus: input.targetStatus }),
    ...(input.versionRevisions !== undefined && {
      versionRevisions: serializeAws_restJson1PackageVersionRevisionMap(input.versionRevisions, context),
    }),
    ...(input.versions !== undefined && {
      versions: serializeAws_restJson1PackageVersionList(input.versions, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const serializeAws_restJson1UpdateRepositoryCommand = async (
  input: UpdateRepositoryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json",
  };
  let resolvedPath = "/v1/repository";
  const query: any = {
    ...(input.domain !== undefined && { domain: input.domain }),
    ...(input.repository !== undefined && { repository: input.repository }),
    ...(input.domainOwner !== undefined && { "domain-owner": input.domainOwner }),
  };
  let body: any;
  body = JSON.stringify({
    ...(input.description !== undefined && { description: input.description }),
    ...(input.upstreams !== undefined && {
      upstreams: serializeAws_restJson1UpstreamRepositoryList(input.upstreams, context),
    }),
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
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

export const deserializeAws_restJson1AssociateExternalConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateExternalConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1AssociateExternalConnectionCommandError(output, context);
  }
  const contents: AssociateExternalConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "AssociateExternalConnectionResult",
    repository: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repository !== undefined && data.repository !== null) {
    contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AssociateExternalConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateExternalConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CopyPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CopyPackageVersionsCommandError(output, context);
  }
  const contents: CopyPackageVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CopyPackageVersionsResult",
    failedVersions: undefined,
    successfulVersions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedVersions !== undefined && data.failedVersions !== null) {
    contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
  }
  if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
    contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(
      data.successfulVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CopyPackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyPackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateDomainCommandError(output, context);
  }
  const contents: CreateDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateDomainResult",
    domain: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.domain !== undefined && data.domain !== null) {
    contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1CreateRepositoryCommandError(output, context);
  }
  const contents: CreateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRepositoryResult",
    repository: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repository !== undefined && data.repository !== null) {
    contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteDomainCommandError(output, context);
  }
  const contents: DeleteDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainResult",
    domain: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.domain !== undefined && data.domain !== null) {
    contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError(output, context);
  }
  const contents: DeleteDomainPermissionsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteDomainPermissionsPolicyResult",
    policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDomainPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDomainPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeletePackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeletePackageVersionsCommandError(output, context);
  }
  const contents: DeletePackageVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeletePackageVersionsResult",
    failedVersions: undefined,
    successfulVersions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedVersions !== undefined && data.failedVersions !== null) {
    contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
  }
  if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
    contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(
      data.successfulVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeletePackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteRepositoryCommandError(output, context);
  }
  const contents: DeleteRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRepositoryResult",
    repository: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repository !== undefined && data.repository !== null) {
    contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError(output, context);
  }
  const contents: DeleteRepositoryPermissionsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRepositoryPermissionsPolicyResult",
    policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRepositoryPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRepositoryPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeDomainCommandError(output, context);
  }
  const contents: DescribeDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeDomainResult",
    domain: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.domain !== undefined && data.domain !== null) {
    contents.domain = deserializeAws_restJson1DomainDescription(data.domain, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribePackageVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribePackageVersionCommandError(output, context);
  }
  const contents: DescribePackageVersionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribePackageVersionResult",
    packageVersion: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.packageVersion !== undefined && data.packageVersion !== null) {
    contents.packageVersion = deserializeAws_restJson1PackageVersionDescription(data.packageVersion, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribePackageVersionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribePackageVersionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DescribeRepositoryCommandError(output, context);
  }
  const contents: DescribeRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRepositoryResult",
    repository: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repository !== undefined && data.repository !== null) {
    contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisassociateExternalConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateExternalConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisassociateExternalConnectionCommandError(output, context);
  }
  const contents: DisassociateExternalConnectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisassociateExternalConnectionResult",
    repository: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repository !== undefined && data.repository !== null) {
    contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateExternalConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateExternalConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DisposePackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisposePackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1DisposePackageVersionsCommandError(output, context);
  }
  const contents: DisposePackageVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DisposePackageVersionsResult",
    failedVersions: undefined,
    successfulVersions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedVersions !== undefined && data.failedVersions !== null) {
    contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
  }
  if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
    contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(
      data.successfulVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisposePackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisposePackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetAuthorizationTokenCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetAuthorizationTokenCommandError(output, context);
  }
  const contents: GetAuthorizationTokenCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetAuthorizationTokenResult",
    authorizationToken: undefined,
    expiration: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.authorizationToken !== undefined && data.authorizationToken !== null) {
    contents.authorizationToken = data.authorizationToken;
  }
  if (data.expiration !== undefined && data.expiration !== null) {
    contents.expiration = new Date(Math.round(data.expiration * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetAuthorizationTokenCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAuthorizationTokenCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetDomainPermissionsPolicyCommandError(output, context);
  }
  const contents: GetDomainPermissionsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDomainPermissionsPolicyResult",
    policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDomainPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDomainPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetPackageVersionAssetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionAssetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetPackageVersionAssetCommandError(output, context);
  }
  const contents: GetPackageVersionAssetCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPackageVersionAssetResult",
    asset: undefined,
    assetName: undefined,
    packageVersion: undefined,
    packageVersionRevision: undefined,
  };
  if (output.headers["x-packageversionrevision"] !== undefined) {
    contents.packageVersionRevision = output.headers["x-packageversionrevision"];
  }
  if (output.headers["x-packageversion"] !== undefined) {
    contents.packageVersion = output.headers["x-packageversion"];
  }
  if (output.headers["x-assetname"] !== undefined) {
    contents.assetName = output.headers["x-assetname"];
  }
  const data: any = output.body;
  contents.asset = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPackageVersionAssetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionAssetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetPackageVersionReadmeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionReadmeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetPackageVersionReadmeCommandError(output, context);
  }
  const contents: GetPackageVersionReadmeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetPackageVersionReadmeResult",
    format: undefined,
    namespace: undefined,
    package: undefined,
    readme: undefined,
    version: undefined,
    versionRevision: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.format !== undefined && data.format !== null) {
    contents.format = data.format;
  }
  if (data.namespace !== undefined && data.namespace !== null) {
    contents.namespace = data.namespace;
  }
  if (data.package !== undefined && data.package !== null) {
    contents.package = data.package;
  }
  if (data.readme !== undefined && data.readme !== null) {
    contents.readme = data.readme;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.versionRevision !== undefined && data.versionRevision !== null) {
    contents.versionRevision = data.versionRevision;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetPackageVersionReadmeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetPackageVersionReadmeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRepositoryEndpointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryEndpointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetRepositoryEndpointCommandError(output, context);
  }
  const contents: GetRepositoryEndpointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRepositoryEndpointResult",
    repositoryEndpoint: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repositoryEndpoint !== undefined && data.repositoryEndpoint !== null) {
    contents.repositoryEndpoint = data.repositoryEndpoint;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRepositoryEndpointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryEndpointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError(output, context);
  }
  const contents: GetRepositoryPermissionsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRepositoryPermissionsPolicyResult",
    policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRepositoryPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRepositoryPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListDomainsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListDomainsCommandError(output, context);
  }
  const contents: ListDomainsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListDomainsResult",
    domains: undefined,
    nextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.domains !== undefined && data.domains !== null) {
    contents.domains = deserializeAws_restJson1DomainSummaryList(data.domains, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDomainsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDomainsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPackagesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPackagesCommandError(output, context);
  }
  const contents: ListPackagesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPackagesResult",
    nextToken: undefined,
    packages: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.packages !== undefined && data.packages !== null) {
    contents.packages = deserializeAws_restJson1PackageSummaryList(data.packages, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackagesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackagesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPackageVersionAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPackageVersionAssetsCommandError(output, context);
  }
  const contents: ListPackageVersionAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPackageVersionAssetsResult",
    assets: undefined,
    format: undefined,
    namespace: undefined,
    nextToken: undefined,
    package: undefined,
    version: undefined,
    versionRevision: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.assets !== undefined && data.assets !== null) {
    contents.assets = deserializeAws_restJson1AssetSummaryList(data.assets, context);
  }
  if (data.format !== undefined && data.format !== null) {
    contents.format = data.format;
  }
  if (data.namespace !== undefined && data.namespace !== null) {
    contents.namespace = data.namespace;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.package !== undefined && data.package !== null) {
    contents.package = data.package;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.versionRevision !== undefined && data.versionRevision !== null) {
    contents.versionRevision = data.versionRevision;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackageVersionAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPackageVersionDependenciesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionDependenciesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPackageVersionDependenciesCommandError(output, context);
  }
  const contents: ListPackageVersionDependenciesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPackageVersionDependenciesResult",
    dependencies: undefined,
    format: undefined,
    namespace: undefined,
    nextToken: undefined,
    package: undefined,
    version: undefined,
    versionRevision: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.dependencies !== undefined && data.dependencies !== null) {
    contents.dependencies = deserializeAws_restJson1PackageDependencyList(data.dependencies, context);
  }
  if (data.format !== undefined && data.format !== null) {
    contents.format = data.format;
  }
  if (data.namespace !== undefined && data.namespace !== null) {
    contents.namespace = data.namespace;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.package !== undefined && data.package !== null) {
    contents.package = data.package;
  }
  if (data.version !== undefined && data.version !== null) {
    contents.version = data.version;
  }
  if (data.versionRevision !== undefined && data.versionRevision !== null) {
    contents.versionRevision = data.versionRevision;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackageVersionDependenciesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionDependenciesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPackageVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListPackageVersionsCommandError(output, context);
  }
  const contents: ListPackageVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPackageVersionsResult",
    defaultDisplayVersion: undefined,
    format: undefined,
    namespace: undefined,
    nextToken: undefined,
    package: undefined,
    versions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.defaultDisplayVersion !== undefined && data.defaultDisplayVersion !== null) {
    contents.defaultDisplayVersion = data.defaultDisplayVersion;
  }
  if (data.format !== undefined && data.format !== null) {
    contents.format = data.format;
  }
  if (data.namespace !== undefined && data.namespace !== null) {
    contents.namespace = data.namespace;
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.package !== undefined && data.package !== null) {
    contents.package = data.package;
  }
  if (data.versions !== undefined && data.versions !== null) {
    contents.versions = deserializeAws_restJson1PackageVersionSummaryList(data.versions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPackageVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPackageVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRepositoriesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRepositoriesCommandError(output, context);
  }
  const contents: ListRepositoriesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRepositoriesResult",
    nextToken: undefined,
    repositories: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.repositories !== undefined && data.repositories !== null) {
    contents.repositories = deserializeAws_restJson1RepositorySummaryList(data.repositories, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRepositoriesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListRepositoriesInDomainCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesInDomainCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1ListRepositoriesInDomainCommandError(output, context);
  }
  const contents: ListRepositoriesInDomainCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRepositoriesInDomainResult",
    nextToken: undefined,
    repositories: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.repositories !== undefined && data.repositories !== null) {
    contents.repositories = deserializeAws_restJson1RepositorySummaryList(data.repositories, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRepositoriesInDomainCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRepositoriesInDomainCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutDomainPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDomainPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutDomainPermissionsPolicyCommandError(output, context);
  }
  const contents: PutDomainPermissionsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutDomainPermissionsPolicyResult",
    policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutDomainPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDomainPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PutRepositoryPermissionsPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryPermissionsPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError(output, context);
  }
  const contents: PutRepositoryPermissionsPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PutRepositoryPermissionsPolicyResult",
    policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.policy !== undefined && data.policy !== null) {
    contents.policy = deserializeAws_restJson1ResourcePolicy(data.policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutRepositoryPermissionsPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRepositoryPermissionsPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdatePackageVersionsStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageVersionsStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdatePackageVersionsStatusCommandError(output, context);
  }
  const contents: UpdatePackageVersionsStatusCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdatePackageVersionsStatusResult",
    failedVersions: undefined,
    successfulVersions: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.failedVersions !== undefined && data.failedVersions !== null) {
    contents.failedVersions = deserializeAws_restJson1PackageVersionErrorMap(data.failedVersions, context);
  }
  if (data.successfulVersions !== undefined && data.successfulVersions !== null) {
    contents.successfulVersions = deserializeAws_restJson1SuccessfulPackageVersionInfoMap(
      data.successfulVersions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdatePackageVersionsStatusCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdatePackageVersionsStatusCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UpdateRepositoryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1UpdateRepositoryCommandError(output, context);
  }
  const contents: UpdateRepositoryCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRepositoryResult",
    repository: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.repository !== undefined && data.repository !== null) {
    contents.repository = deserializeAws_restJson1RepositoryDescription(data.repository, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRepositoryCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRepositoryCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.codeartifact#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.codeartifact#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.codeartifact#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.codeartifact#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.codeartifact#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.codeartifact#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.codeartifact#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    resourceId: undefined,
    resourceType: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.resourceId !== undefined && data.resourceId !== null) {
    contents.resourceId = data.resourceId;
  }
  if (data.resourceType !== undefined && data.resourceType !== null) {
    contents.resourceType = data.resourceType;
  }
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    retryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.retryAfterSeconds = parseInt(parsedOutput.headers["retry-after"], 10);
  }
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined,
    reason: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.reason !== undefined && data.reason !== null) {
    contents.reason = data.reason;
  }
  return contents;
};

const serializeAws_restJson1PackageVersionList = (input: string[], context: __SerdeContext): any => {
  return input.map((entry) => entry);
};

const serializeAws_restJson1PackageVersionRevisionMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const serializeAws_restJson1UpstreamRepository = (input: UpstreamRepository, context: __SerdeContext): any => {
  return {
    ...(input.repositoryName !== undefined && { repositoryName: input.repositoryName }),
  };
};

const serializeAws_restJson1UpstreamRepositoryList = (input: UpstreamRepository[], context: __SerdeContext): any => {
  return input.map((entry) => serializeAws_restJson1UpstreamRepository(entry, context));
};

const deserializeAws_restJson1AssetHashes = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [HashAlgorithm | string, any]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  );
};

const deserializeAws_restJson1AssetSummary = (output: any, context: __SerdeContext): AssetSummary => {
  return {
    __type: "AssetSummary",
    hashes:
      output.hashes !== undefined && output.hashes !== null
        ? deserializeAws_restJson1AssetHashes(output.hashes, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    size: output.size !== undefined && output.size !== null ? output.size : undefined,
  } as any;
};

const deserializeAws_restJson1AssetSummaryList = (output: any, context: __SerdeContext): AssetSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1AssetSummary(entry, context));
};

const deserializeAws_restJson1DomainDescription = (output: any, context: __SerdeContext): DomainDescription => {
  return {
    __type: "DomainDescription",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    assetSizeBytes:
      output.assetSizeBytes !== undefined && output.assetSizeBytes !== null ? output.assetSizeBytes : undefined,
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? new Date(Math.round(output.createdTime * 1000))
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
    repositoryCount:
      output.repositoryCount !== undefined && output.repositoryCount !== null ? output.repositoryCount : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1DomainSummary = (output: any, context: __SerdeContext): DomainSummary => {
  return {
    __type: "DomainSummary",
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdTime:
      output.createdTime !== undefined && output.createdTime !== null
        ? new Date(Math.round(output.createdTime * 1000))
        : undefined,
    encryptionKey:
      output.encryptionKey !== undefined && output.encryptionKey !== null ? output.encryptionKey : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    owner: output.owner !== undefined && output.owner !== null ? output.owner : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1DomainSummaryList = (output: any, context: __SerdeContext): DomainSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1DomainSummary(entry, context));
};

const deserializeAws_restJson1LicenseInfo = (output: any, context: __SerdeContext): LicenseInfo => {
  return {
    __type: "LicenseInfo",
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    url: output.url !== undefined && output.url !== null ? output.url : undefined,
  } as any;
};

const deserializeAws_restJson1LicenseInfoList = (output: any, context: __SerdeContext): LicenseInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1LicenseInfo(entry, context));
};

const deserializeAws_restJson1PackageDependency = (output: any, context: __SerdeContext): PackageDependency => {
  return {
    __type: "PackageDependency",
    dependencyType:
      output.dependencyType !== undefined && output.dependencyType !== null ? output.dependencyType : undefined,
    namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    package: output.package !== undefined && output.package !== null ? output.package : undefined,
    versionRequirement:
      output.versionRequirement !== undefined && output.versionRequirement !== null
        ? output.versionRequirement
        : undefined,
  } as any;
};

const deserializeAws_restJson1PackageDependencyList = (output: any, context: __SerdeContext): PackageDependency[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1PackageDependency(entry, context));
};

const deserializeAws_restJson1PackageSummary = (output: any, context: __SerdeContext): PackageSummary => {
  return {
    __type: "PackageSummary",
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    package: output.package !== undefined && output.package !== null ? output.package : undefined,
  } as any;
};

const deserializeAws_restJson1PackageSummaryList = (output: any, context: __SerdeContext): PackageSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1PackageSummary(entry, context));
};

const deserializeAws_restJson1PackageVersionDescription = (
  output: any,
  context: __SerdeContext
): PackageVersionDescription => {
  return {
    __type: "PackageVersionDescription",
    displayName: output.displayName !== undefined && output.displayName !== null ? output.displayName : undefined,
    format: output.format !== undefined && output.format !== null ? output.format : undefined,
    homePage: output.homePage !== undefined && output.homePage !== null ? output.homePage : undefined,
    licenses:
      output.licenses !== undefined && output.licenses !== null
        ? deserializeAws_restJson1LicenseInfoList(output.licenses, context)
        : undefined,
    namespace: output.namespace !== undefined && output.namespace !== null ? output.namespace : undefined,
    packageName: output.packageName !== undefined && output.packageName !== null ? output.packageName : undefined,
    publishedTime:
      output.publishedTime !== undefined && output.publishedTime !== null
        ? new Date(Math.round(output.publishedTime * 1000))
        : undefined,
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    sourceCodeRepository:
      output.sourceCodeRepository !== undefined && output.sourceCodeRepository !== null
        ? output.sourceCodeRepository
        : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    summary: output.summary !== undefined && output.summary !== null ? output.summary : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1PackageVersionError = (output: any, context: __SerdeContext): PackageVersionError => {
  return {
    __type: "PackageVersionError",
    errorCode: output.errorCode !== undefined && output.errorCode !== null ? output.errorCode : undefined,
    errorMessage: output.errorMessage !== undefined && output.errorMessage !== null ? output.errorMessage : undefined,
  } as any;
};

const deserializeAws_restJson1PackageVersionErrorMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: PackageVersionError } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: PackageVersionError }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1PackageVersionError(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1PackageVersionSummary = (output: any, context: __SerdeContext): PackageVersionSummary => {
  return {
    __type: "PackageVersionSummary",
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
    version: output.version !== undefined && output.version !== null ? output.version : undefined,
  } as any;
};

const deserializeAws_restJson1PackageVersionSummaryList = (
  output: any,
  context: __SerdeContext
): PackageVersionSummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1PackageVersionSummary(entry, context));
};

const deserializeAws_restJson1RepositoryDescription = (output: any, context: __SerdeContext): RepositoryDescription => {
  return {
    __type: "RepositoryDescription",
    administratorAccount:
      output.administratorAccount !== undefined && output.administratorAccount !== null
        ? output.administratorAccount
        : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainOwner: output.domainOwner !== undefined && output.domainOwner !== null ? output.domainOwner : undefined,
    externalConnections:
      output.externalConnections !== undefined && output.externalConnections !== null
        ? deserializeAws_restJson1RepositoryExternalConnectionInfoList(output.externalConnections, context)
        : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
    upstreams:
      output.upstreams !== undefined && output.upstreams !== null
        ? deserializeAws_restJson1UpstreamRepositoryInfoList(output.upstreams, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RepositoryExternalConnectionInfo = (
  output: any,
  context: __SerdeContext
): RepositoryExternalConnectionInfo => {
  return {
    __type: "RepositoryExternalConnectionInfo",
    externalConnectionName:
      output.externalConnectionName !== undefined && output.externalConnectionName !== null
        ? output.externalConnectionName
        : undefined,
    packageFormat:
      output.packageFormat !== undefined && output.packageFormat !== null ? output.packageFormat : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1RepositoryExternalConnectionInfoList = (
  output: any,
  context: __SerdeContext
): RepositoryExternalConnectionInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RepositoryExternalConnectionInfo(entry, context));
};

const deserializeAws_restJson1RepositorySummary = (output: any, context: __SerdeContext): RepositorySummary => {
  return {
    __type: "RepositorySummary",
    administratorAccount:
      output.administratorAccount !== undefined && output.administratorAccount !== null
        ? output.administratorAccount
        : undefined,
    arn: output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    description: output.description !== undefined && output.description !== null ? output.description : undefined,
    domainName: output.domainName !== undefined && output.domainName !== null ? output.domainName : undefined,
    domainOwner: output.domainOwner !== undefined && output.domainOwner !== null ? output.domainOwner : undefined,
    name: output.name !== undefined && output.name !== null ? output.name : undefined,
  } as any;
};

const deserializeAws_restJson1RepositorySummaryList = (output: any, context: __SerdeContext): RepositorySummary[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1RepositorySummary(entry, context));
};

const deserializeAws_restJson1ResourcePolicy = (output: any, context: __SerdeContext): ResourcePolicy => {
  return {
    __type: "ResourcePolicy",
    document: output.document !== undefined && output.document !== null ? output.document : undefined,
    resourceArn: output.resourceArn !== undefined && output.resourceArn !== null ? output.resourceArn : undefined,
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
  } as any;
};

const deserializeAws_restJson1SuccessfulPackageVersionInfo = (
  output: any,
  context: __SerdeContext
): SuccessfulPackageVersionInfo => {
  return {
    __type: "SuccessfulPackageVersionInfo",
    revision: output.revision !== undefined && output.revision !== null ? output.revision : undefined,
    status: output.status !== undefined && output.status !== null ? output.status : undefined,
  } as any;
};

const deserializeAws_restJson1SuccessfulPackageVersionInfoMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: SuccessfulPackageVersionInfo } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: SuccessfulPackageVersionInfo }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: deserializeAws_restJson1SuccessfulPackageVersionInfo(value, context),
    }),
    {}
  );
};

const deserializeAws_restJson1UpstreamRepositoryInfo = (
  output: any,
  context: __SerdeContext
): UpstreamRepositoryInfo => {
  return {
    __type: "UpstreamRepositoryInfo",
    repositoryName:
      output.repositoryName !== undefined && output.repositoryName !== null ? output.repositoryName : undefined,
  } as any;
};

const deserializeAws_restJson1UpstreamRepositoryInfoList = (
  output: any,
  context: __SerdeContext
): UpstreamRepositoryInfo[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1UpstreamRepositoryInfo(entry, context));
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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

  return "";
};
