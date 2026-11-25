// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type AssociateCertificateCommandInput,
  type AssociateCertificateCommandOutput,
  AssociateCertificateCommand,
} from "./commands/AssociateCertificateCommand";
import {
  type CreateProxyCommandInput,
  type CreateProxyCommandOutput,
  CreateProxyCommand,
} from "./commands/CreateProxyCommand";
import {
  type DeleteProxyCommandInput,
  type DeleteProxyCommandOutput,
  DeleteProxyCommand,
} from "./commands/DeleteProxyCommand";
import {
  type DisassociateCertificateCommandInput,
  type DisassociateCertificateCommandOutput,
  DisassociateCertificateCommand,
} from "./commands/DisassociateCertificateCommand";
import {
  type GetProxyAttributesCommandInput,
  type GetProxyAttributesCommandOutput,
  GetProxyAttributesCommand,
} from "./commands/GetProxyAttributesCommand";
import { type GetProxyCommandInput, type GetProxyCommandOutput, GetProxyCommand } from "./commands/GetProxyCommand";
import {
  type GetProxyConfigurationContentsCommandInput,
  type GetProxyConfigurationContentsCommandOutput,
  GetProxyConfigurationContentsCommand,
} from "./commands/GetProxyConfigurationContentsCommand";
import {
  type GetProxyUpdateCommandInput,
  type GetProxyUpdateCommandOutput,
  GetProxyUpdateCommand,
} from "./commands/GetProxyUpdateCommand";
import {
  type ListCertificateAssociationsCommandInput,
  type ListCertificateAssociationsCommandOutput,
  ListCertificateAssociationsCommand,
} from "./commands/ListCertificateAssociationsCommand";
import {
  type ListProxiesCommandInput,
  type ListProxiesCommandOutput,
  ListProxiesCommand,
} from "./commands/ListProxiesCommand";
import {
  type ListProxyUpdatesCommandInput,
  type ListProxyUpdatesCommandOutput,
  ListProxyUpdatesCommand,
} from "./commands/ListProxyUpdatesCommand";
import {
  type ListProxyVersionsCommandInput,
  type ListProxyVersionsCommandOutput,
  ListProxyVersionsCommand,
} from "./commands/ListProxyVersionsCommand";
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
  type UpdateProxyAttributesCommandInput,
  type UpdateProxyAttributesCommandOutput,
  UpdateProxyAttributesCommand,
} from "./commands/UpdateProxyAttributesCommand";
import {
  type UpdateProxyConfigurationCommandInput,
  type UpdateProxyConfigurationCommandOutput,
  UpdateProxyConfigurationCommand,
} from "./commands/UpdateProxyConfigurationCommand";
import {
  type UpdateProxyNetworkConfigurationCommandInput,
  type UpdateProxyNetworkConfigurationCommandOutput,
  UpdateProxyNetworkConfigurationCommand,
} from "./commands/UpdateProxyNetworkConfigurationCommand";
import { ELBProxyClient } from "./ELBProxyClient";
import type { ELBProxyServiceException } from "./models/ELBProxyServiceException";
import type { ResourceNotFoundException } from "./models/errors";
import { paginateListCertificateAssociations } from "./pagination/ListCertificateAssociationsPaginator";
import { paginateListProxies } from "./pagination/ListProxiesPaginator";
import { paginateListProxyUpdates } from "./pagination/ListProxyUpdatesPaginator";
import { paginateListProxyVersions } from "./pagination/ListProxyVersionsPaginator";
import { waitUntilProxyActive } from "./waiters/waitForProxyActive";
import { waitUntilProxyDeleted } from "./waiters/waitForProxyDeleted";
import { waitUntilProxyUpdateComplete } from "./waiters/waitForProxyUpdateComplete";

const commands = {
  AssociateCertificateCommand,
  CreateProxyCommand,
  DeleteProxyCommand,
  DisassociateCertificateCommand,
  GetProxyCommand,
  GetProxyAttributesCommand,
  GetProxyConfigurationContentsCommand,
  GetProxyUpdateCommand,
  ListCertificateAssociationsCommand,
  ListProxiesCommand,
  ListProxyUpdatesCommand,
  ListProxyVersionsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateProxyAttributesCommand,
  UpdateProxyConfigurationCommand,
  UpdateProxyNetworkConfigurationCommand,
};
const paginators = {
  paginateListCertificateAssociations,
  paginateListProxies,
  paginateListProxyUpdates,
  paginateListProxyVersions,
};
const waiters = {
  waitUntilProxyActive,
  waitUntilProxyDeleted,
  waitUntilProxyUpdateComplete,
};

/**
 * @public
 */
export interface ELBProxyRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ELBProxy {
  /**
   * @see {@link AssociateCertificateCommand}
   */
  associateCertificate(
    args: AssociateCertificateCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<AssociateCertificateCommandOutput>;
  associateCertificate(
    args: AssociateCertificateCommandInput,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;
  associateCertificate(
    args: AssociateCertificateCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: AssociateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProxyCommand}
   */
  createProxy(
    args: CreateProxyCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<CreateProxyCommandOutput>;
  createProxy(
    args: CreateProxyCommandInput,
    cb: (err: any, data?: CreateProxyCommandOutput) => void
  ): void;
  createProxy(
    args: CreateProxyCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: CreateProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProxyCommand}
   */
  deleteProxy(
    args: DeleteProxyCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<DeleteProxyCommandOutput>;
  deleteProxy(
    args: DeleteProxyCommandInput,
    cb: (err: any, data?: DeleteProxyCommandOutput) => void
  ): void;
  deleteProxy(
    args: DeleteProxyCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: DeleteProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateCertificateCommand}
   */
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<DisassociateCertificateCommandOutput>;
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;
  disassociateCertificate(
    args: DisassociateCertificateCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: DisassociateCertificateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProxyCommand}
   */
  getProxy(
    args: GetProxyCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<GetProxyCommandOutput>;
  getProxy(
    args: GetProxyCommandInput,
    cb: (err: any, data?: GetProxyCommandOutput) => void
  ): void;
  getProxy(
    args: GetProxyCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: GetProxyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProxyAttributesCommand}
   */
  getProxyAttributes(
    args: GetProxyAttributesCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<GetProxyAttributesCommandOutput>;
  getProxyAttributes(
    args: GetProxyAttributesCommandInput,
    cb: (err: any, data?: GetProxyAttributesCommandOutput) => void
  ): void;
  getProxyAttributes(
    args: GetProxyAttributesCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: GetProxyAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProxyConfigurationContentsCommand}
   */
  getProxyConfigurationContents(
    args: GetProxyConfigurationContentsCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<GetProxyConfigurationContentsCommandOutput>;
  getProxyConfigurationContents(
    args: GetProxyConfigurationContentsCommandInput,
    cb: (err: any, data?: GetProxyConfigurationContentsCommandOutput) => void
  ): void;
  getProxyConfigurationContents(
    args: GetProxyConfigurationContentsCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: GetProxyConfigurationContentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetProxyUpdateCommand}
   */
  getProxyUpdate(
    args: GetProxyUpdateCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<GetProxyUpdateCommandOutput>;
  getProxyUpdate(
    args: GetProxyUpdateCommandInput,
    cb: (err: any, data?: GetProxyUpdateCommandOutput) => void
  ): void;
  getProxyUpdate(
    args: GetProxyUpdateCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: GetProxyUpdateCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificateAssociationsCommand}
   */
  listCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<ListCertificateAssociationsCommandOutput>;
  listCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    cb: (err: any, data?: ListCertificateAssociationsCommandOutput) => void
  ): void;
  listCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: ListCertificateAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxiesCommand}
   */
  listProxies(): Promise<ListProxiesCommandOutput>;
  listProxies(
    args: ListProxiesCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<ListProxiesCommandOutput>;
  listProxies(
    args: ListProxiesCommandInput,
    cb: (err: any, data?: ListProxiesCommandOutput) => void
  ): void;
  listProxies(
    args: ListProxiesCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: ListProxiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxyUpdatesCommand}
   */
  listProxyUpdates(
    args: ListProxyUpdatesCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<ListProxyUpdatesCommandOutput>;
  listProxyUpdates(
    args: ListProxyUpdatesCommandInput,
    cb: (err: any, data?: ListProxyUpdatesCommandOutput) => void
  ): void;
  listProxyUpdates(
    args: ListProxyUpdatesCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: ListProxyUpdatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProxyVersionsCommand}
   */
  listProxyVersions(
    args: ListProxyVersionsCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<ListProxyVersionsCommandOutput>;
  listProxyVersions(
    args: ListProxyVersionsCommandInput,
    cb: (err: any, data?: ListProxyVersionsCommandOutput) => void
  ): void;
  listProxyVersions(
    args: ListProxyVersionsCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: ListProxyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyAttributesCommand}
   */
  updateProxyAttributes(
    args: UpdateProxyAttributesCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<UpdateProxyAttributesCommandOutput>;
  updateProxyAttributes(
    args: UpdateProxyAttributesCommandInput,
    cb: (err: any, data?: UpdateProxyAttributesCommandOutput) => void
  ): void;
  updateProxyAttributes(
    args: UpdateProxyAttributesCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: UpdateProxyAttributesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyConfigurationCommand}
   */
  updateProxyConfiguration(
    args: UpdateProxyConfigurationCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<UpdateProxyConfigurationCommandOutput>;
  updateProxyConfiguration(
    args: UpdateProxyConfigurationCommandInput,
    cb: (err: any, data?: UpdateProxyConfigurationCommandOutput) => void
  ): void;
  updateProxyConfiguration(
    args: UpdateProxyConfigurationCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: UpdateProxyConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProxyNetworkConfigurationCommand}
   */
  updateProxyNetworkConfiguration(
    args: UpdateProxyNetworkConfigurationCommandInput,
    options?: ELBProxyRequestOptions
  ): Promise<UpdateProxyNetworkConfigurationCommandOutput>;
  updateProxyNetworkConfiguration(
    args: UpdateProxyNetworkConfigurationCommandInput,
    cb: (err: any, data?: UpdateProxyNetworkConfigurationCommandOutput) => void
  ): void;
  updateProxyNetworkConfiguration(
    args: UpdateProxyNetworkConfigurationCommandInput,
    options: ELBProxyRequestOptions,
    cb: (err: any, data?: UpdateProxyNetworkConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCertificateAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCertificateAssociationsCommandOutput}.
   */
  paginateListCertificateAssociations(
    args: ListCertificateAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCertificateAssociationsCommandOutput>;

  /**
   * @see {@link ListProxiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxiesCommandOutput}.
   */
  paginateListProxies(
    args?: ListProxiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxiesCommandOutput>;

  /**
   * @see {@link ListProxyUpdatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxyUpdatesCommandOutput}.
   */
  paginateListProxyUpdates(
    args: ListProxyUpdatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxyUpdatesCommandOutput>;

  /**
   * @see {@link ListProxyVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProxyVersionsCommandOutput}.
   */
  paginateListProxyVersions(
    args: ListProxyVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProxyVersionsCommandOutput>;

  /**
   * @see {@link GetProxyCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilProxyActive(
    args: GetProxyCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ELBProxy>, "client">
  ): Promise<WaiterResult<GetProxyCommandOutput>>;

  /**
   * @see {@link GetProxyCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilProxyDeleted(
    args: GetProxyCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ELBProxy>, "client">
  ): Promise<WaiterResult<ResourceNotFoundException>>;

  /**
   * @see {@link GetProxyUpdateCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilProxyUpdateComplete(
    args: GetProxyUpdateCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<ELBProxy>, "client">
  ): Promise<WaiterResult<GetProxyUpdateCommandOutput>>;
}

/**
 * Elastic Load Balancing for Envoy is a fully managed service that runs the
 * open-source Envoy proxy on your behalf. You bring your Envoy configuration, and
 * AWS provisions the proxy, scales it, upgrades the Envoy version, patches the
 * operating system, and monitors its health. The proxy runs on Amazon EC2
 * instances inside your own virtual private cloud (VPC), so you keep full
 * control of your network, security groups, and IAM.
 * @public
 */
export class ELBProxy extends ELBProxyClient implements ELBProxy {}
createAggregatedClient(commands, ELBProxy, { paginators, waiters });
