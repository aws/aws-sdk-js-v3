// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateEipToVlanCommandInput,
  type AssociateEipToVlanCommandOutput,
  AssociateEipToVlanCommand,
} from "./commands/AssociateEipToVlanCommand";
import {
  type CreateEntitlementCommandInput,
  type CreateEntitlementCommandOutput,
  CreateEntitlementCommand,
} from "./commands/CreateEntitlementCommand";
import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type CreateEnvironmentConnectorCommandInput,
  type CreateEnvironmentConnectorCommandOutput,
  CreateEnvironmentConnectorCommand,
} from "./commands/CreateEnvironmentConnectorCommand";
import {
  type CreateEnvironmentHostCommandInput,
  type CreateEnvironmentHostCommandOutput,
  CreateEnvironmentHostCommand,
} from "./commands/CreateEnvironmentHostCommand";
import {
  type DeleteEntitlementCommandInput,
  type DeleteEntitlementCommandOutput,
  DeleteEntitlementCommand,
} from "./commands/DeleteEntitlementCommand";
import {
  type DeleteEnvironmentCommandInput,
  type DeleteEnvironmentCommandOutput,
  DeleteEnvironmentCommand,
} from "./commands/DeleteEnvironmentCommand";
import {
  type DeleteEnvironmentConnectorCommandInput,
  type DeleteEnvironmentConnectorCommandOutput,
  DeleteEnvironmentConnectorCommand,
} from "./commands/DeleteEnvironmentConnectorCommand";
import {
  type DeleteEnvironmentHostCommandInput,
  type DeleteEnvironmentHostCommandOutput,
  DeleteEnvironmentHostCommand,
} from "./commands/DeleteEnvironmentHostCommand";
import {
  type DisassociateEipFromVlanCommandInput,
  type DisassociateEipFromVlanCommandOutput,
  DisassociateEipFromVlanCommand,
} from "./commands/DisassociateEipFromVlanCommand";
import {
  type GetDepotUrlCommandInput,
  type GetDepotUrlCommandOutput,
  GetDepotUrlCommand,
} from "./commands/GetDepotUrlCommand";
import {
  type GetEnvironmentCommandInput,
  type GetEnvironmentCommandOutput,
  GetEnvironmentCommand,
} from "./commands/GetEnvironmentCommand";
import {
  type GetVersionsCommandInput,
  type GetVersionsCommandOutput,
  GetVersionsCommand,
} from "./commands/GetVersionsCommand";
import {
  type ListEnvironmentConnectorsCommandInput,
  type ListEnvironmentConnectorsCommandOutput,
  ListEnvironmentConnectorsCommand,
} from "./commands/ListEnvironmentConnectorsCommand";
import {
  type ListEnvironmentHostsCommandInput,
  type ListEnvironmentHostsCommandOutput,
  ListEnvironmentHostsCommand,
} from "./commands/ListEnvironmentHostsCommand";
import {
  type ListEnvironmentsCommandInput,
  type ListEnvironmentsCommandOutput,
  ListEnvironmentsCommand,
} from "./commands/ListEnvironmentsCommand";
import {
  type ListEnvironmentVlansCommandInput,
  type ListEnvironmentVlansCommandOutput,
  ListEnvironmentVlansCommand,
} from "./commands/ListEnvironmentVlansCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVmEntitlementsCommandInput,
  type ListVmEntitlementsCommandOutput,
  ListVmEntitlementsCommand,
} from "./commands/ListVmEntitlementsCommand";
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
  type UpdateEnvironmentConnectorCommandInput,
  type UpdateEnvironmentConnectorCommandOutput,
  UpdateEnvironmentConnectorCommand,
} from "./commands/UpdateEnvironmentConnectorCommand";
import { EvsClient } from "./EvsClient";
import { paginateListEnvironmentConnectors } from "./pagination/ListEnvironmentConnectorsPaginator";
import { paginateListEnvironmentHosts } from "./pagination/ListEnvironmentHostsPaginator";
import { paginateListEnvironments } from "./pagination/ListEnvironmentsPaginator";
import { paginateListEnvironmentVlans } from "./pagination/ListEnvironmentVlansPaginator";
import { paginateListVmEntitlements } from "./pagination/ListVmEntitlementsPaginator";

const commands = {
  AssociateEipToVlanCommand,
  CreateEntitlementCommand,
  CreateEnvironmentCommand,
  CreateEnvironmentConnectorCommand,
  CreateEnvironmentHostCommand,
  DeleteEntitlementCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentConnectorCommand,
  DeleteEnvironmentHostCommand,
  DisassociateEipFromVlanCommand,
  GetDepotUrlCommand,
  GetEnvironmentCommand,
  GetVersionsCommand,
  ListEnvironmentConnectorsCommand,
  ListEnvironmentHostsCommand,
  ListEnvironmentsCommand,
  ListEnvironmentVlansCommand,
  ListTagsForResourceCommand,
  ListVmEntitlementsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnvironmentConnectorCommand,
};
const paginators = {
  paginateListEnvironmentConnectors,
  paginateListEnvironmentHosts,
  paginateListEnvironments,
  paginateListEnvironmentVlans,
  paginateListVmEntitlements,
};

export interface Evs {
  /**
   * @see {@link AssociateEipToVlanCommand}
   */
  associateEipToVlan(
    args: AssociateEipToVlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateEipToVlanCommandOutput>;
  associateEipToVlan(
    args: AssociateEipToVlanCommandInput,
    cb: (err: any, data?: AssociateEipToVlanCommandOutput) => void
  ): void;
  associateEipToVlan(
    args: AssociateEipToVlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateEipToVlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEntitlementCommand}
   */
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEntitlementCommandOutput>;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;
  createEntitlement(
    args: CreateEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentConnectorCommand}
   */
  createEnvironmentConnector(
    args: CreateEnvironmentConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentConnectorCommandOutput>;
  createEnvironmentConnector(
    args: CreateEnvironmentConnectorCommandInput,
    cb: (err: any, data?: CreateEnvironmentConnectorCommandOutput) => void
  ): void;
  createEnvironmentConnector(
    args: CreateEnvironmentConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentHostCommand}
   */
  createEnvironmentHost(
    args: CreateEnvironmentHostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentHostCommandOutput>;
  createEnvironmentHost(
    args: CreateEnvironmentHostCommandInput,
    cb: (err: any, data?: CreateEnvironmentHostCommandOutput) => void
  ): void;
  createEnvironmentHost(
    args: CreateEnvironmentHostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentHostCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEntitlementCommand}
   */
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEntitlementCommandOutput>;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;
  deleteEntitlement(
    args: DeleteEntitlementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEntitlementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentConnectorCommand}
   */
  deleteEnvironmentConnector(
    args: DeleteEnvironmentConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentConnectorCommandOutput>;
  deleteEnvironmentConnector(
    args: DeleteEnvironmentConnectorCommandInput,
    cb: (err: any, data?: DeleteEnvironmentConnectorCommandOutput) => void
  ): void;
  deleteEnvironmentConnector(
    args: DeleteEnvironmentConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentHostCommand}
   */
  deleteEnvironmentHost(
    args: DeleteEnvironmentHostCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentHostCommandOutput>;
  deleteEnvironmentHost(
    args: DeleteEnvironmentHostCommandInput,
    cb: (err: any, data?: DeleteEnvironmentHostCommandOutput) => void
  ): void;
  deleteEnvironmentHost(
    args: DeleteEnvironmentHostCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentHostCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateEipFromVlanCommand}
   */
  disassociateEipFromVlan(
    args: DisassociateEipFromVlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateEipFromVlanCommandOutput>;
  disassociateEipFromVlan(
    args: DisassociateEipFromVlanCommandInput,
    cb: (err: any, data?: DisassociateEipFromVlanCommandOutput) => void
  ): void;
  disassociateEipFromVlan(
    args: DisassociateEipFromVlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateEipFromVlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDepotUrlCommand}
   */
  getDepotUrl(
    args: GetDepotUrlCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDepotUrlCommandOutput>;
  getDepotUrl(
    args: GetDepotUrlCommandInput,
    cb: (err: any, data?: GetDepotUrlCommandOutput) => void
  ): void;
  getDepotUrl(
    args: GetDepotUrlCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDepotUrlCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetVersionsCommand}
   */
  getVersions(): Promise<GetVersionsCommandOutput>;
  getVersions(
    args: GetVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVersionsCommandOutput>;
  getVersions(
    args: GetVersionsCommandInput,
    cb: (err: any, data?: GetVersionsCommandOutput) => void
  ): void;
  getVersions(
    args: GetVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentConnectorsCommand}
   */
  listEnvironmentConnectors(
    args: ListEnvironmentConnectorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentConnectorsCommandOutput>;
  listEnvironmentConnectors(
    args: ListEnvironmentConnectorsCommandInput,
    cb: (err: any, data?: ListEnvironmentConnectorsCommandOutput) => void
  ): void;
  listEnvironmentConnectors(
    args: ListEnvironmentConnectorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentConnectorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentHostsCommand}
   */
  listEnvironmentHosts(
    args: ListEnvironmentHostsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentHostsCommandOutput>;
  listEnvironmentHosts(
    args: ListEnvironmentHostsCommandInput,
    cb: (err: any, data?: ListEnvironmentHostsCommandOutput) => void
  ): void;
  listEnvironmentHosts(
    args: ListEnvironmentHostsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentHostsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentVlansCommand}
   */
  listEnvironmentVlans(
    args: ListEnvironmentVlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEnvironmentVlansCommandOutput>;
  listEnvironmentVlans(
    args: ListEnvironmentVlansCommandInput,
    cb: (err: any, data?: ListEnvironmentVlansCommandOutput) => void
  ): void;
  listEnvironmentVlans(
    args: ListEnvironmentVlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEnvironmentVlansCommandOutput) => void
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
   * @see {@link ListVmEntitlementsCommand}
   */
  listVmEntitlements(
    args: ListVmEntitlementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVmEntitlementsCommandOutput>;
  listVmEntitlements(
    args: ListVmEntitlementsCommandInput,
    cb: (err: any, data?: ListVmEntitlementsCommandOutput) => void
  ): void;
  listVmEntitlements(
    args: ListVmEntitlementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVmEntitlementsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentConnectorCommand}
   */
  updateEnvironmentConnector(
    args: UpdateEnvironmentConnectorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentConnectorCommandOutput>;
  updateEnvironmentConnector(
    args: UpdateEnvironmentConnectorCommandInput,
    cb: (err: any, data?: UpdateEnvironmentConnectorCommandOutput) => void
  ): void;
  updateEnvironmentConnector(
    args: UpdateEnvironmentConnectorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentConnectorCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentConnectorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentConnectorsCommandOutput}.
   */
  paginateListEnvironmentConnectors(
    args: ListEnvironmentConnectorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentConnectorsCommandOutput>;

  /**
   * @see {@link ListEnvironmentHostsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentHostsCommandOutput}.
   */
  paginateListEnvironmentHosts(
    args: ListEnvironmentHostsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentHostsCommandOutput>;

  /**
   * @see {@link ListEnvironmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentsCommandOutput}.
   */
  paginateListEnvironments(
    args?: ListEnvironmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentsCommandOutput>;

  /**
   * @see {@link ListEnvironmentVlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListEnvironmentVlansCommandOutput}.
   */
  paginateListEnvironmentVlans(
    args: ListEnvironmentVlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListEnvironmentVlansCommandOutput>;

  /**
   * @see {@link ListVmEntitlementsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVmEntitlementsCommandOutput}.
   */
  paginateListVmEntitlements(
    args: ListVmEntitlementsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVmEntitlementsCommandOutput>;
}

/**
 * <p>Amazon Elastic VMware Service (Amazon EVS) is a service that you can use to deploy a VMware Cloud Foundation (VCF) software environment directly on EC2 bare metal instances within an Amazon Virtual Private Cloud (VPC).</p> <p>Workloads running on Amazon EVS are fully compatible with workloads running on any standard VMware vSphere environment. This means that you can migrate any VMware-based workload to Amazon EVS without workload modification.</p>
 * @public
 */
export class Evs extends EvsClient implements Evs {}
createAggregatedClient(commands, Evs, { paginators });
