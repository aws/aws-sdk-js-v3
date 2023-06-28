// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CodeartifactClient, CodeartifactClientConfig } from "./CodeartifactClient";
import {
  AssociateExternalConnectionCommand,
  AssociateExternalConnectionCommandInput,
  AssociateExternalConnectionCommandOutput,
} from "./commands/AssociateExternalConnectionCommand";
import {
  CopyPackageVersionsCommand,
  CopyPackageVersionsCommandInput,
  CopyPackageVersionsCommandOutput,
} from "./commands/CopyPackageVersionsCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  CreateRepositoryCommand,
  CreateRepositoryCommandInput,
  CreateRepositoryCommandOutput,
} from "./commands/CreateRepositoryCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteDomainPermissionsPolicyCommand,
  DeleteDomainPermissionsPolicyCommandInput,
  DeleteDomainPermissionsPolicyCommandOutput,
} from "./commands/DeleteDomainPermissionsPolicyCommand";
import {
  DeletePackageCommand,
  DeletePackageCommandInput,
  DeletePackageCommandOutput,
} from "./commands/DeletePackageCommand";
import {
  DeletePackageVersionsCommand,
  DeletePackageVersionsCommandInput,
  DeletePackageVersionsCommandOutput,
} from "./commands/DeletePackageVersionsCommand";
import {
  DeleteRepositoryCommand,
  DeleteRepositoryCommandInput,
  DeleteRepositoryCommandOutput,
} from "./commands/DeleteRepositoryCommand";
import {
  DeleteRepositoryPermissionsPolicyCommand,
  DeleteRepositoryPermissionsPolicyCommandInput,
  DeleteRepositoryPermissionsPolicyCommandOutput,
} from "./commands/DeleteRepositoryPermissionsPolicyCommand";
import {
  DescribeDomainCommand,
  DescribeDomainCommandInput,
  DescribeDomainCommandOutput,
} from "./commands/DescribeDomainCommand";
import {
  DescribePackageCommand,
  DescribePackageCommandInput,
  DescribePackageCommandOutput,
} from "./commands/DescribePackageCommand";
import {
  DescribePackageVersionCommand,
  DescribePackageVersionCommandInput,
  DescribePackageVersionCommandOutput,
} from "./commands/DescribePackageVersionCommand";
import {
  DescribeRepositoryCommand,
  DescribeRepositoryCommandInput,
  DescribeRepositoryCommandOutput,
} from "./commands/DescribeRepositoryCommand";
import {
  DisassociateExternalConnectionCommand,
  DisassociateExternalConnectionCommandInput,
  DisassociateExternalConnectionCommandOutput,
} from "./commands/DisassociateExternalConnectionCommand";
import {
  DisposePackageVersionsCommand,
  DisposePackageVersionsCommandInput,
  DisposePackageVersionsCommandOutput,
} from "./commands/DisposePackageVersionsCommand";
import {
  GetAuthorizationTokenCommand,
  GetAuthorizationTokenCommandInput,
  GetAuthorizationTokenCommandOutput,
} from "./commands/GetAuthorizationTokenCommand";
import {
  GetDomainPermissionsPolicyCommand,
  GetDomainPermissionsPolicyCommandInput,
  GetDomainPermissionsPolicyCommandOutput,
} from "./commands/GetDomainPermissionsPolicyCommand";
import {
  GetPackageVersionAssetCommand,
  GetPackageVersionAssetCommandInput,
  GetPackageVersionAssetCommandOutput,
} from "./commands/GetPackageVersionAssetCommand";
import {
  GetPackageVersionReadmeCommand,
  GetPackageVersionReadmeCommandInput,
  GetPackageVersionReadmeCommandOutput,
} from "./commands/GetPackageVersionReadmeCommand";
import {
  GetRepositoryEndpointCommand,
  GetRepositoryEndpointCommandInput,
  GetRepositoryEndpointCommandOutput,
} from "./commands/GetRepositoryEndpointCommand";
import {
  GetRepositoryPermissionsPolicyCommand,
  GetRepositoryPermissionsPolicyCommandInput,
  GetRepositoryPermissionsPolicyCommandOutput,
} from "./commands/GetRepositoryPermissionsPolicyCommand";
import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import {
  ListPackagesCommand,
  ListPackagesCommandInput,
  ListPackagesCommandOutput,
} from "./commands/ListPackagesCommand";
import {
  ListPackageVersionAssetsCommand,
  ListPackageVersionAssetsCommandInput,
  ListPackageVersionAssetsCommandOutput,
} from "./commands/ListPackageVersionAssetsCommand";
import {
  ListPackageVersionDependenciesCommand,
  ListPackageVersionDependenciesCommandInput,
  ListPackageVersionDependenciesCommandOutput,
} from "./commands/ListPackageVersionDependenciesCommand";
import {
  ListPackageVersionsCommand,
  ListPackageVersionsCommandInput,
  ListPackageVersionsCommandOutput,
} from "./commands/ListPackageVersionsCommand";
import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "./commands/ListRepositoriesCommand";
import {
  ListRepositoriesInDomainCommand,
  ListRepositoriesInDomainCommandInput,
  ListRepositoriesInDomainCommandOutput,
} from "./commands/ListRepositoriesInDomainCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PublishPackageVersionCommand,
  PublishPackageVersionCommandInput,
  PublishPackageVersionCommandOutput,
} from "./commands/PublishPackageVersionCommand";
import {
  PutDomainPermissionsPolicyCommand,
  PutDomainPermissionsPolicyCommandInput,
  PutDomainPermissionsPolicyCommandOutput,
} from "./commands/PutDomainPermissionsPolicyCommand";
import {
  PutPackageOriginConfigurationCommand,
  PutPackageOriginConfigurationCommandInput,
  PutPackageOriginConfigurationCommandOutput,
} from "./commands/PutPackageOriginConfigurationCommand";
import {
  PutRepositoryPermissionsPolicyCommand,
  PutRepositoryPermissionsPolicyCommandInput,
  PutRepositoryPermissionsPolicyCommandOutput,
} from "./commands/PutRepositoryPermissionsPolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdatePackageVersionsStatusCommand,
  UpdatePackageVersionsStatusCommandInput,
  UpdatePackageVersionsStatusCommandOutput,
} from "./commands/UpdatePackageVersionsStatusCommand";
import {
  UpdateRepositoryCommand,
  UpdateRepositoryCommandInput,
  UpdateRepositoryCommandOutput,
} from "./commands/UpdateRepositoryCommand";

const commands = {
  AssociateExternalConnectionCommand,
  CopyPackageVersionsCommand,
  CreateDomainCommand,
  CreateRepositoryCommand,
  DeleteDomainCommand,
  DeleteDomainPermissionsPolicyCommand,
  DeletePackageCommand,
  DeletePackageVersionsCommand,
  DeleteRepositoryCommand,
  DeleteRepositoryPermissionsPolicyCommand,
  DescribeDomainCommand,
  DescribePackageCommand,
  DescribePackageVersionCommand,
  DescribeRepositoryCommand,
  DisassociateExternalConnectionCommand,
  DisposePackageVersionsCommand,
  GetAuthorizationTokenCommand,
  GetDomainPermissionsPolicyCommand,
  GetPackageVersionAssetCommand,
  GetPackageVersionReadmeCommand,
  GetRepositoryEndpointCommand,
  GetRepositoryPermissionsPolicyCommand,
  ListDomainsCommand,
  ListPackagesCommand,
  ListPackageVersionAssetsCommand,
  ListPackageVersionDependenciesCommand,
  ListPackageVersionsCommand,
  ListRepositoriesCommand,
  ListRepositoriesInDomainCommand,
  ListTagsForResourceCommand,
  PublishPackageVersionCommand,
  PutDomainPermissionsPolicyCommand,
  PutPackageOriginConfigurationCommand,
  PutRepositoryPermissionsPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePackageVersionsStatusCommand,
  UpdateRepositoryCommand,
};

export interface Codeartifact {
  /**
   * @see {@link AssociateExternalConnectionCommand}
   */
  associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateExternalConnectionCommandOutput>;
  associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    cb: (err: any, data?: AssociateExternalConnectionCommandOutput) => void
  ): void;
  associateExternalConnection(
    args: AssociateExternalConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateExternalConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyPackageVersionsCommand}
   */
  copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyPackageVersionsCommandOutput>;
  copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    cb: (err: any, data?: CopyPackageVersionsCommandOutput) => void
  ): void;
  copyPackageVersions(
    args: CopyPackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyPackageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
  createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRepositoryCommand}
   */
  createRepository(
    args: CreateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRepositoryCommandOutput>;
  createRepository(
    args: CreateRepositoryCommandInput,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;
  createRepository(
    args: CreateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
  deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainPermissionsPolicyCommand}
   */
  deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainPermissionsPolicyCommandOutput>;
  deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    cb: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void
  ): void;
  deleteDomainPermissionsPolicy(
    args: DeleteDomainPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainPermissionsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackageCommand}
   */
  deletePackage(args: DeletePackageCommandInput, options?: __HttpHandlerOptions): Promise<DeletePackageCommandOutput>;
  deletePackage(args: DeletePackageCommandInput, cb: (err: any, data?: DeletePackageCommandOutput) => void): void;
  deletePackage(
    args: DeletePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackageVersionsCommand}
   */
  deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackageVersionsCommandOutput>;
  deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    cb: (err: any, data?: DeletePackageVersionsCommandOutput) => void
  ): void;
  deletePackageVersions(
    args: DeletePackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryCommand}
   */
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryCommandOutput>;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;
  deleteRepository(
    args: DeleteRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryPermissionsPolicyCommand}
   */
  deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRepositoryPermissionsPolicyCommandOutput>;
  deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    cb: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  deleteRepositoryPermissionsPolicy(
    args: DeleteRepositoryPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRepositoryPermissionsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainCommand}
   */
  describeDomain(
    args: DescribeDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainCommandOutput>;
  describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
  describeDomain(
    args: DescribeDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackageCommand}
   */
  describePackage(
    args: DescribePackageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageCommandOutput>;
  describePackage(args: DescribePackageCommandInput, cb: (err: any, data?: DescribePackageCommandOutput) => void): void;
  describePackage(
    args: DescribePackageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackageVersionCommand}
   */
  describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackageVersionCommandOutput>;
  describePackageVersion(
    args: DescribePackageVersionCommandInput,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;
  describePackageVersion(
    args: DescribePackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRepositoryCommand}
   */
  describeRepository(
    args: DescribeRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRepositoryCommandOutput>;
  describeRepository(
    args: DescribeRepositoryCommandInput,
    cb: (err: any, data?: DescribeRepositoryCommandOutput) => void
  ): void;
  describeRepository(
    args: DescribeRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRepositoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateExternalConnectionCommand}
   */
  disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateExternalConnectionCommandOutput>;
  disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    cb: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void
  ): void;
  disassociateExternalConnection(
    args: DisassociateExternalConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateExternalConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DisposePackageVersionsCommand}
   */
  disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisposePackageVersionsCommandOutput>;
  disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    cb: (err: any, data?: DisposePackageVersionsCommandOutput) => void
  ): void;
  disposePackageVersions(
    args: DisposePackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisposePackageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAuthorizationTokenCommand}
   */
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizationTokenCommandOutput>;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;
  getAuthorizationToken(
    args: GetAuthorizationTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizationTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDomainPermissionsPolicyCommand}
   */
  getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainPermissionsPolicyCommandOutput>;
  getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    cb: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void
  ): void;
  getDomainPermissionsPolicy(
    args: GetDomainPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainPermissionsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageVersionAssetCommand}
   */
  getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionAssetCommandOutput>;
  getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    cb: (err: any, data?: GetPackageVersionAssetCommandOutput) => void
  ): void;
  getPackageVersionAsset(
    args: GetPackageVersionAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPackageVersionReadmeCommand}
   */
  getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPackageVersionReadmeCommandOutput>;
  getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    cb: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void
  ): void;
  getPackageVersionReadme(
    args: GetPackageVersionReadmeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPackageVersionReadmeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryEndpointCommand}
   */
  getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryEndpointCommandOutput>;
  getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    cb: (err: any, data?: GetRepositoryEndpointCommandOutput) => void
  ): void;
  getRepositoryEndpoint(
    args: GetRepositoryEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryPermissionsPolicyCommand}
   */
  getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRepositoryPermissionsPolicyCommandOutput>;
  getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    cb: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  getRepositoryPermissionsPolicy(
    args: GetRepositoryPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRepositoryPermissionsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainsCommand}
   */
  listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
  listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
  listDomains(
    args: ListDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagesCommand}
   */
  listPackages(args: ListPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListPackagesCommandOutput>;
  listPackages(args: ListPackagesCommandInput, cb: (err: any, data?: ListPackagesCommandOutput) => void): void;
  listPackages(
    args: ListPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackageVersionAssetsCommand}
   */
  listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionAssetsCommandOutput>;
  listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    cb: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void
  ): void;
  listPackageVersionAssets(
    args: ListPackageVersionAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackageVersionDependenciesCommand}
   */
  listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionDependenciesCommandOutput>;
  listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    cb: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void
  ): void;
  listPackageVersionDependencies(
    args: ListPackageVersionDependenciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionDependenciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackageVersionsCommand}
   */
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackageVersionsCommandOutput>;
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    cb: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): void;
  listPackageVersions(
    args: ListPackageVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackageVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoriesCommand}
   */
  listRepositories(
    args: ListRepositoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesCommandOutput>;
  listRepositories(
    args: ListRepositoriesCommandInput,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;
  listRepositories(
    args: ListRepositoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoriesInDomainCommand}
   */
  listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRepositoriesInDomainCommandOutput>;
  listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    cb: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void
  ): void;
  listRepositoriesInDomain(
    args: ListRepositoriesInDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRepositoriesInDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PublishPackageVersionCommand}
   */
  publishPackageVersion(
    args: PublishPackageVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishPackageVersionCommandOutput>;
  publishPackageVersion(
    args: PublishPackageVersionCommandInput,
    cb: (err: any, data?: PublishPackageVersionCommandOutput) => void
  ): void;
  publishPackageVersion(
    args: PublishPackageVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishPackageVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDomainPermissionsPolicyCommand}
   */
  putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDomainPermissionsPolicyCommandOutput>;
  putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    cb: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void
  ): void;
  putDomainPermissionsPolicy(
    args: PutDomainPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDomainPermissionsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPackageOriginConfigurationCommand}
   */
  putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPackageOriginConfigurationCommandOutput>;
  putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    cb: (err: any, data?: PutPackageOriginConfigurationCommandOutput) => void
  ): void;
  putPackageOriginConfiguration(
    args: PutPackageOriginConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPackageOriginConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRepositoryPermissionsPolicyCommand}
   */
  putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRepositoryPermissionsPolicyCommandOutput>;
  putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    cb: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void
  ): void;
  putRepositoryPermissionsPolicy(
    args: PutRepositoryPermissionsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRepositoryPermissionsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackageVersionsStatusCommand}
   */
  updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackageVersionsStatusCommandOutput>;
  updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    cb: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void
  ): void;
  updatePackageVersionsStatus(
    args: UpdatePackageVersionsStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackageVersionsStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRepositoryCommand}
   */
  updateRepository(
    args: UpdateRepositoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRepositoryCommandOutput>;
  updateRepository(
    args: UpdateRepositoryCommandInput,
    cb: (err: any, data?: UpdateRepositoryCommandOutput) => void
  ): void;
  updateRepository(
    args: UpdateRepositoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRepositoryCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p> CodeArtifact is a fully managed artifact repository compatible with language-native
 *       package managers and build tools such as npm, Apache Maven, pip, and dotnet. You can use CodeArtifact to
 *       share packages with development teams and pull packages. Packages can be pulled from both
 *       public and CodeArtifact repositories. You can also create an upstream relationship between a CodeArtifact
 *       repository and another repository, which effectively merges their contents from the point of
 *       view of a package manager client. </p>
 *          <p>
 *             <b>CodeArtifact Components</b>
 *          </p>
 *          <p>Use the information in this guide to help you work with the following CodeArtifact components:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Repository</b>: A CodeArtifact repository contains a set of <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/welcome.html#welcome-concepts-package-version">package
 *             versions</a>, each of which maps to a set of assets, or files. Repositories are
 *           polyglot, so a single repository can contain packages of any supported type. Each
 *           repository exposes endpoints for fetching and publishing packages using tools like the
 *             <b>
 *                      <code>npm</code>
 *                   </b> CLI, the Maven CLI (<b>
 *                      <code>mvn</code>
 *                   </b>), Python CLIs (<b>
 *                      <code>pip</code>
 *                   </b> and <code>twine</code>), and NuGet CLIs (<code>nuget</code> and <code>dotnet</code>).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Domain</b>: Repositories are aggregated into a higher-level entity known as a
 *             <i>domain</i>. All package assets and metadata are stored in the domain,
 *             but are consumed through repositories. A given package asset, such as a Maven JAR file, is
 *             stored once per domain, no matter how many repositories it's present in. All of the assets
 *             and metadata in a domain are encrypted with the same customer master key (CMK) stored in
 *             Key Management Service (KMS).</p>
 *                <p>Each repository is a member of a single domain and can't be moved to a
 *             different domain.</p>
 *                <p>The domain allows organizational policy to be applied across multiple
 *             repositories, such as which accounts can access repositories in the domain, and
 *             which public repositories can be used as sources of packages.</p>
 *                <p>Although an organization can have multiple domains, we recommend a single production
 *             domain that contains all published artifacts so that teams can find and share packages
 *             across their organization.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package</b>: A <i>package</i> is a bundle of software and the metadata required to
 *           resolve dependencies and install the software. CodeArtifact supports <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-npm.html">npm</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-python.html">PyPI</a>, <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-maven">Maven</a>, and <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/using-nuget">NuGet</a> package formats.</p>
 *                <p>In CodeArtifact, a package consists of:</p>
 *                <ul>
 *                   <li>
 *                      <p>A <i>name</i> (for example, <code>webpack</code> is the name of a
 *               popular npm package)</p>
 *                   </li>
 *                   <li>
 *                      <p>An optional namespace (for example, <code>@types</code> in <code>@types/node</code>)</p>
 *                   </li>
 *                   <li>
 *                      <p>A set of versions (for example, <code>1.0.0</code>, <code>1.0.1</code>,
 *                 <code>1.0.2</code>, etc.)</p>
 *                   </li>
 *                   <li>
 *                      <p> Package-level metadata (for example, npm tags)</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Package version</b>: A version of a package, such as <code>@types/node 12.6.9</code>. The version number
 *           format and semantics vary for different package formats. For example, npm package versions
 *           must conform to the <a href="https://semver.org/">Semantic Versioning
 *             specification</a>. In CodeArtifact, a package version consists of the version identifier,
 *           metadata at the package version level, and a set of assets.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Upstream repository</b>: One repository is <i>upstream</i> of another when the package versions in
 *           it can be accessed from the repository endpoint of the downstream repository, effectively
 *           merging the contents of the two repositories from the point of view of a client. CodeArtifact
 *           allows creating an upstream relationship between two repositories.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Asset</b>: An individual file stored in CodeArtifact associated with a package version, such as an npm
 *             <code>.tgz</code> file or Maven POM and JAR files.</p>
 *             </li>
 *          </ul>
 *          <p>CodeArtifact supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AssociateExternalConnection</code>: Adds an existing external
 *           connection to a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CopyPackageVersions</code>: Copies package versions from one
 *           repository to another repository in the same domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateDomain</code>: Creates a domain</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateRepository</code>: Creates a CodeArtifact repository in a domain. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDomain</code>: Deletes a domain. You cannot delete a domain that contains
 *           repositories. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDomainPermissionsPolicy</code>: Deletes the resource policy that is set on a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeletePackage</code>: Deletes a package and all associated package versions.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeletePackageVersions</code>: Deletes versions of a package. After a package has
 *           been deleted, it can be republished, but its assets and metadata cannot be restored
 *           because they have been permanently removed from storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteRepository</code>: Deletes a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteRepositoryPermissionsPolicy</code>: Deletes the resource policy that is set on a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDomain</code>: Returns a <code>DomainDescription</code> object that
 *           contains information about the requested domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePackage</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageDescription.html">PackageDescription</a>
 *           object that contains details about a package. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePackageVersion</code>: Returns a <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">PackageVersionDescription</a>
 *           object that contains details about a package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeRepository</code>: Returns a <code>RepositoryDescription</code> object
 *           that contains detailed information about the requested repository. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisposePackageVersions</code>: Disposes versions of a package. A package version
 *           with the status <code>Disposed</code> cannot be restored because they have been
 *           permanently removed from storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DisassociateExternalConnection</code>: Removes an existing external connection from a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetAuthorizationToken</code>: Generates a temporary authorization token for accessing repositories in the domain. The token expires the authorization period has passed.
 *           The default authorization period is 12 hours and can be customized to any length with a maximum of 12 hours.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetDomainPermissionsPolicy</code>: Returns the policy of a resource
 *           that is attached to the specified domain. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetPackageVersionAsset</code>: Returns the contents of an asset that is in a package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetPackageVersionReadme</code>: Gets the readme file or descriptive text for a package version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryEndpoint</code>: Returns the endpoint of a repository for a specific package format. A repository has one endpoint for each
 *           package format:
 *         </p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>maven</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>npm</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>nuget</code>
 *                      </p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>pypi</code>
 *                      </p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetRepositoryPermissionsPolicy</code>: Returns the resource policy that is set on a repository.
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListDomains</code>: Returns a list of <code>DomainSummary</code> objects. Each
 *           returned <code>DomainSummary</code> object contains information about a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackages</code>: Lists the packages in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersionAssets</code>: Lists the assets for a given package version.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersionDependencies</code>: Returns a list of the direct dependencies for a
 *           package version. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListPackageVersions</code>: Returns a list of package versions for a specified
 *           package in a repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListRepositories</code>: Returns a list of repositories owned by the Amazon Web Services account that called this method.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListRepositoriesInDomain</code>: Returns a list of the repositories in a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PublishPackageVersion</code>: Creates a new package version containing one or more assets.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutDomainPermissionsPolicy</code>: Attaches a resource policy to a domain.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutPackageOriginConfiguration</code>: Sets the package origin configuration for a package, which determine
 *         how new versions of the package can be added to a specific repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutRepositoryPermissionsPolicy</code>: Sets the resource policy on a repository
 *           that specifies permissions to access it. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdatePackageVersionsStatus</code>: Updates the status of one or more versions of a package.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateRepository</code>: Updates the properties of a repository.</p>
 *             </li>
 *          </ul>
 */
export class Codeartifact extends CodeartifactClient implements Codeartifact {}
createAggregatedClient(commands, Codeartifact);
