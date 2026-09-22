// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import { CodeConnectionsClient } from "./CodeConnectionsClient";
import {
  type CreateConnectionCommandInput,
  type CreateConnectionCommandOutput,
  CreateConnectionCommand,
} from "./commands/CreateConnectionCommand";
import {
  type CreateHostCommandInput,
  type CreateHostCommandOutput,
  CreateHostCommand,
} from "./commands/CreateHostCommand";
import {
  type CreateRepositoryLinkCommandInput,
  type CreateRepositoryLinkCommandOutput,
  CreateRepositoryLinkCommand,
} from "./commands/CreateRepositoryLinkCommand";
import {
  type CreateSyncConfigurationCommandInput,
  type CreateSyncConfigurationCommandOutput,
  CreateSyncConfigurationCommand,
} from "./commands/CreateSyncConfigurationCommand";
import {
  type DeleteConnectionCommandInput,
  type DeleteConnectionCommandOutput,
  DeleteConnectionCommand,
} from "./commands/DeleteConnectionCommand";
import {
  type DeleteHostCommandInput,
  type DeleteHostCommandOutput,
  DeleteHostCommand,
} from "./commands/DeleteHostCommand";
import {
  type DeleteRepositoryLinkCommandInput,
  type DeleteRepositoryLinkCommandOutput,
  DeleteRepositoryLinkCommand,
} from "./commands/DeleteRepositoryLinkCommand";
import {
  type DeleteSyncConfigurationCommandInput,
  type DeleteSyncConfigurationCommandOutput,
  DeleteSyncConfigurationCommand,
} from "./commands/DeleteSyncConfigurationCommand";
import {
  type GetConnectionCommandInput,
  type GetConnectionCommandOutput,
  GetConnectionCommand,
} from "./commands/GetConnectionCommand";
import { type GetHostCommandInput, type GetHostCommandOutput, GetHostCommand } from "./commands/GetHostCommand";
import {
  type GetRepositoryLinkCommandInput,
  type GetRepositoryLinkCommandOutput,
  GetRepositoryLinkCommand,
} from "./commands/GetRepositoryLinkCommand";
import {
  type GetRepositorySyncStatusCommandInput,
  type GetRepositorySyncStatusCommandOutput,
  GetRepositorySyncStatusCommand,
} from "./commands/GetRepositorySyncStatusCommand";
import {
  type GetResourceSyncStatusCommandInput,
  type GetResourceSyncStatusCommandOutput,
  GetResourceSyncStatusCommand,
} from "./commands/GetResourceSyncStatusCommand";
import {
  type GetSyncBlockerSummaryCommandInput,
  type GetSyncBlockerSummaryCommandOutput,
  GetSyncBlockerSummaryCommand,
} from "./commands/GetSyncBlockerSummaryCommand";
import {
  type GetSyncConfigurationCommandInput,
  type GetSyncConfigurationCommandOutput,
  GetSyncConfigurationCommand,
} from "./commands/GetSyncConfigurationCommand";
import {
  type ListConnectionsCommandInput,
  type ListConnectionsCommandOutput,
  ListConnectionsCommand,
} from "./commands/ListConnectionsCommand";
import { type ListHostsCommandInput, type ListHostsCommandOutput, ListHostsCommand } from "./commands/ListHostsCommand";
import {
  type ListRepositoryLinksCommandInput,
  type ListRepositoryLinksCommandOutput,
  ListRepositoryLinksCommand,
} from "./commands/ListRepositoryLinksCommand";
import {
  type ListRepositorySyncDefinitionsCommandInput,
  type ListRepositorySyncDefinitionsCommandOutput,
  ListRepositorySyncDefinitionsCommand,
} from "./commands/ListRepositorySyncDefinitionsCommand";
import {
  type ListSyncConfigurationsCommandInput,
  type ListSyncConfigurationsCommandOutput,
  ListSyncConfigurationsCommand,
} from "./commands/ListSyncConfigurationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateHostCommandInput,
  type UpdateHostCommandOutput,
  UpdateHostCommand,
} from "./commands/UpdateHostCommand";
import {
  type UpdateRepositoryLinkCommandInput,
  type UpdateRepositoryLinkCommandOutput,
  UpdateRepositoryLinkCommand,
} from "./commands/UpdateRepositoryLinkCommand";
import {
  type UpdateSyncBlockerCommandInput,
  type UpdateSyncBlockerCommandOutput,
  UpdateSyncBlockerCommand,
} from "./commands/UpdateSyncBlockerCommand";
import {
  type UpdateSyncConfigurationCommandInput,
  type UpdateSyncConfigurationCommandOutput,
  UpdateSyncConfigurationCommand,
} from "./commands/UpdateSyncConfigurationCommand";
import { paginateListConnections } from "./pagination/ListConnectionsPaginator";
import { paginateListHosts } from "./pagination/ListHostsPaginator";
import { paginateListRepositoryLinks } from "./pagination/ListRepositoryLinksPaginator";
import { paginateListSyncConfigurations } from "./pagination/ListSyncConfigurationsPaginator";

const commands = {
  CreateConnectionCommand,
  CreateHostCommand,
  CreateRepositoryLinkCommand,
  CreateSyncConfigurationCommand,
  DeleteConnectionCommand,
  DeleteHostCommand,
  DeleteRepositoryLinkCommand,
  DeleteSyncConfigurationCommand,
  GetConnectionCommand,
  GetHostCommand,
  GetRepositoryLinkCommand,
  GetRepositorySyncStatusCommand,
  GetResourceSyncStatusCommand,
  GetSyncBlockerSummaryCommand,
  GetSyncConfigurationCommand,
  ListConnectionsCommand,
  ListHostsCommand,
  ListRepositoryLinksCommand,
  ListRepositorySyncDefinitionsCommand,
  ListSyncConfigurationsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateHostCommand,
  UpdateRepositoryLinkCommand,
  UpdateSyncBlockerCommand,
  UpdateSyncConfigurationCommand,
};
const paginators = {
  paginateListConnections,
  paginateListHosts,
  paginateListRepositoryLinks,
  paginateListSyncConfigurations,
};

/**
 * @public
 */
export interface CodeConnectionsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface CodeConnections {
  /**
   * @see {@link CreateConnectionCommand}
   */
  createConnection(
    args: CreateConnectionCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<CreateConnectionCommandOutput>;
  createConnection(
    args: CreateConnectionCommandInput,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;
  createConnection(
    args: CreateConnectionCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: CreateConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHostCommand}
   */
  createHost(
    args: CreateHostCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<CreateHostCommandOutput>;
  createHost(
    args: CreateHostCommandInput,
    cb: (err: any, data?: CreateHostCommandOutput) => void
  ): void;
  createHost(
    args: CreateHostCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: CreateHostCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRepositoryLinkCommand}
   */
  createRepositoryLink(
    args: CreateRepositoryLinkCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<CreateRepositoryLinkCommandOutput>;
  createRepositoryLink(
    args: CreateRepositoryLinkCommandInput,
    cb: (err: any, data?: CreateRepositoryLinkCommandOutput) => void
  ): void;
  createRepositoryLink(
    args: CreateRepositoryLinkCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: CreateRepositoryLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSyncConfigurationCommand}
   */
  createSyncConfiguration(
    args: CreateSyncConfigurationCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<CreateSyncConfigurationCommandOutput>;
  createSyncConfiguration(
    args: CreateSyncConfigurationCommandInput,
    cb: (err: any, data?: CreateSyncConfigurationCommandOutput) => void
  ): void;
  createSyncConfiguration(
    args: CreateSyncConfigurationCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: CreateSyncConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionCommand}
   */
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<DeleteConnectionCommandOutput>;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;
  deleteConnection(
    args: DeleteConnectionCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: DeleteConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteHostCommand}
   */
  deleteHost(
    args: DeleteHostCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<DeleteHostCommandOutput>;
  deleteHost(
    args: DeleteHostCommandInput,
    cb: (err: any, data?: DeleteHostCommandOutput) => void
  ): void;
  deleteHost(
    args: DeleteHostCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: DeleteHostCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRepositoryLinkCommand}
   */
  deleteRepositoryLink(
    args: DeleteRepositoryLinkCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<DeleteRepositoryLinkCommandOutput>;
  deleteRepositoryLink(
    args: DeleteRepositoryLinkCommandInput,
    cb: (err: any, data?: DeleteRepositoryLinkCommandOutput) => void
  ): void;
  deleteRepositoryLink(
    args: DeleteRepositoryLinkCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: DeleteRepositoryLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSyncConfigurationCommand}
   */
  deleteSyncConfiguration(
    args: DeleteSyncConfigurationCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<DeleteSyncConfigurationCommandOutput>;
  deleteSyncConfiguration(
    args: DeleteSyncConfigurationCommandInput,
    cb: (err: any, data?: DeleteSyncConfigurationCommandOutput) => void
  ): void;
  deleteSyncConfiguration(
    args: DeleteSyncConfigurationCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: DeleteSyncConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConnectionCommand}
   */
  getConnection(
    args: GetConnectionCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetConnectionCommandOutput>;
  getConnection(
    args: GetConnectionCommandInput,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;
  getConnection(
    args: GetConnectionCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetConnectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHostCommand}
   */
  getHost(
    args: GetHostCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetHostCommandOutput>;
  getHost(
    args: GetHostCommandInput,
    cb: (err: any, data?: GetHostCommandOutput) => void
  ): void;
  getHost(
    args: GetHostCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetHostCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositoryLinkCommand}
   */
  getRepositoryLink(
    args: GetRepositoryLinkCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetRepositoryLinkCommandOutput>;
  getRepositoryLink(
    args: GetRepositoryLinkCommandInput,
    cb: (err: any, data?: GetRepositoryLinkCommandOutput) => void
  ): void;
  getRepositoryLink(
    args: GetRepositoryLinkCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetRepositoryLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRepositorySyncStatusCommand}
   */
  getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetRepositorySyncStatusCommandOutput>;
  getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    cb: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): void;
  getRepositorySyncStatus(
    args: GetRepositorySyncStatusCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetRepositorySyncStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceSyncStatusCommand}
   */
  getResourceSyncStatus(
    args: GetResourceSyncStatusCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetResourceSyncStatusCommandOutput>;
  getResourceSyncStatus(
    args: GetResourceSyncStatusCommandInput,
    cb: (err: any, data?: GetResourceSyncStatusCommandOutput) => void
  ): void;
  getResourceSyncStatus(
    args: GetResourceSyncStatusCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetResourceSyncStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSyncBlockerSummaryCommand}
   */
  getSyncBlockerSummary(
    args: GetSyncBlockerSummaryCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetSyncBlockerSummaryCommandOutput>;
  getSyncBlockerSummary(
    args: GetSyncBlockerSummaryCommandInput,
    cb: (err: any, data?: GetSyncBlockerSummaryCommandOutput) => void
  ): void;
  getSyncBlockerSummary(
    args: GetSyncBlockerSummaryCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetSyncBlockerSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSyncConfigurationCommand}
   */
  getSyncConfiguration(
    args: GetSyncConfigurationCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<GetSyncConfigurationCommandOutput>;
  getSyncConfiguration(
    args: GetSyncConfigurationCommandInput,
    cb: (err: any, data?: GetSyncConfigurationCommandOutput) => void
  ): void;
  getSyncConfiguration(
    args: GetSyncConfigurationCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: GetSyncConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   */
  listConnections(): Promise<ListConnectionsCommandOutput>;
  listConnections(
    args: ListConnectionsCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<ListConnectionsCommandOutput>;
  listConnections(
    args: ListConnectionsCommandInput,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;
  listConnections(
    args: ListConnectionsCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: ListConnectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHostsCommand}
   */
  listHosts(): Promise<ListHostsCommandOutput>;
  listHosts(
    args: ListHostsCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<ListHostsCommandOutput>;
  listHosts(
    args: ListHostsCommandInput,
    cb: (err: any, data?: ListHostsCommandOutput) => void
  ): void;
  listHosts(
    args: ListHostsCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: ListHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositoryLinksCommand}
   */
  listRepositoryLinks(): Promise<ListRepositoryLinksCommandOutput>;
  listRepositoryLinks(
    args: ListRepositoryLinksCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<ListRepositoryLinksCommandOutput>;
  listRepositoryLinks(
    args: ListRepositoryLinksCommandInput,
    cb: (err: any, data?: ListRepositoryLinksCommandOutput) => void
  ): void;
  listRepositoryLinks(
    args: ListRepositoryLinksCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: ListRepositoryLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRepositorySyncDefinitionsCommand}
   */
  listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<ListRepositorySyncDefinitionsCommandOutput>;
  listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    cb: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): void;
  listRepositorySyncDefinitions(
    args: ListRepositorySyncDefinitionsCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: ListRepositorySyncDefinitionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSyncConfigurationsCommand}
   */
  listSyncConfigurations(
    args: ListSyncConfigurationsCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<ListSyncConfigurationsCommandOutput>;
  listSyncConfigurations(
    args: ListSyncConfigurationsCommandInput,
    cb: (err: any, data?: ListSyncConfigurationsCommandOutput) => void
  ): void;
  listSyncConfigurations(
    args: ListSyncConfigurationsCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: ListSyncConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateHostCommand}
   */
  updateHost(
    args: UpdateHostCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<UpdateHostCommandOutput>;
  updateHost(
    args: UpdateHostCommandInput,
    cb: (err: any, data?: UpdateHostCommandOutput) => void
  ): void;
  updateHost(
    args: UpdateHostCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: UpdateHostCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRepositoryLinkCommand}
   */
  updateRepositoryLink(
    args: UpdateRepositoryLinkCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<UpdateRepositoryLinkCommandOutput>;
  updateRepositoryLink(
    args: UpdateRepositoryLinkCommandInput,
    cb: (err: any, data?: UpdateRepositoryLinkCommandOutput) => void
  ): void;
  updateRepositoryLink(
    args: UpdateRepositoryLinkCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: UpdateRepositoryLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSyncBlockerCommand}
   */
  updateSyncBlocker(
    args: UpdateSyncBlockerCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<UpdateSyncBlockerCommandOutput>;
  updateSyncBlocker(
    args: UpdateSyncBlockerCommandInput,
    cb: (err: any, data?: UpdateSyncBlockerCommandOutput) => void
  ): void;
  updateSyncBlocker(
    args: UpdateSyncBlockerCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: UpdateSyncBlockerCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSyncConfigurationCommand}
   */
  updateSyncConfiguration(
    args: UpdateSyncConfigurationCommandInput,
    options?: CodeConnectionsRequestOptions
  ): Promise<UpdateSyncConfigurationCommandOutput>;
  updateSyncConfiguration(
    args: UpdateSyncConfigurationCommandInput,
    cb: (err: any, data?: UpdateSyncConfigurationCommandOutput) => void
  ): void;
  updateSyncConfiguration(
    args: UpdateSyncConfigurationCommandInput,
    options: CodeConnectionsRequestOptions,
    cb: (err: any, data?: UpdateSyncConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConnectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListConnectionsCommandOutput}.
   */
  paginateListConnections(
    args?: ListConnectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListConnectionsCommandOutput>;

  /**
   * @see {@link ListHostsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHostsCommandOutput}.
   */
  paginateListHosts(
    args?: ListHostsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHostsCommandOutput>;

  /**
   * @see {@link ListRepositoryLinksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRepositoryLinksCommandOutput}.
   */
  paginateListRepositoryLinks(
    args?: ListRepositoryLinksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRepositoryLinksCommandOutput>;

  /**
   * @see {@link ListSyncConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSyncConfigurationsCommandOutput}.
   */
  paginateListSyncConfigurations(
    args: ListSyncConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSyncConfigurationsCommandOutput>;
}

/**
 * <fullname>AWS CodeConnections</fullname>
 *          <p>This Amazon Web Services CodeConnections API Reference provides descriptions and usage examples of
 *       the operations and data types for the Amazon Web Services CodeConnections API. You can use the
 *       connections API to work with connections and installations.</p>
 *          <p>
 *             <i>Connections</i> are configurations that you use to connect Amazon Web Services
 *       resources to external code repositories. Each connection is a resource that can be given to
 *       services such as CodePipeline to connect to a third-party repository such as Bitbucket. For
 *       example, you can add the connection in CodePipeline so that it triggers your pipeline when a
 *       code change is made to your third-party code repository. Each connection is named and
 *       associated with a unique ARN that is used to reference the connection.</p>
 *          <p>When you create a connection, the console initiates a third-party connection handshake.
 *         <i>Installations</i> are the apps that are used to conduct this handshake. For
 *       example, the installation for the Bitbucket provider type is the Bitbucket app. When you
 *       create a connection, you can choose an existing installation or create one.</p>
 *          <p>When you want to create a connection to an installed provider type such as GitHub
 *       Enterprise Server, you create a <i>host</i> for your connections.</p>
 *          <p>You can work with connections by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateConnection</a>, which creates a uniquely named connection that can be
 *           referenced by services such as CodePipeline.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteConnection</a>, which deletes the specified connection.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetConnection</a>, which returns information about the connection, including
 *           the connection status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListConnections</a>, which lists the connections associated with your
 *           account.</p>
 *             </li>
 *          </ul>
 *          <p>You can work with hosts by calling:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateHost</a>, which creates a host that represents the infrastructure where your provider is installed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteHost</a>, which deletes the specified host.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetHost</a>, which returns information about the host, including
 *           the setup status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListHosts</a>, which lists the hosts associated with your
 *           account.</p>
 *             </li>
 *          </ul>
 *          <p>You can work with tags in Amazon Web Services CodeConnections by calling the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a>, which gets information about Amazon Web Services tags for a
 *           specified Amazon Resource Name (ARN) in Amazon Web Services CodeConnections.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a>, which adds or updates tags for a resource in Amazon Web Services CodeConnections.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a>, which removes tags for a resource in Amazon Web Services
 *           CodeConnections.</p>
 *             </li>
 *          </ul>
 *          <p>For information about how to use Amazon Web Services CodeConnections, see the <a href="https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html">Developer
 *         Tools User Guide</a>.</p>
 * @public
 */
export class CodeConnections extends CodeConnectionsClient implements CodeConnections {}
createAggregatedClient(commands, CodeConnections, { paginators });
