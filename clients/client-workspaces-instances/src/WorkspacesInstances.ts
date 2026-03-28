// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateVolumeCommandInput,
  type AssociateVolumeCommandOutput,
  AssociateVolumeCommand,
} from "./commands/AssociateVolumeCommand";
import {
  type CreateVolumeCommandInput,
  type CreateVolumeCommandOutput,
  CreateVolumeCommand,
} from "./commands/CreateVolumeCommand";
import {
  type CreateWorkspaceInstanceCommandInput,
  type CreateWorkspaceInstanceCommandOutput,
  CreateWorkspaceInstanceCommand,
} from "./commands/CreateWorkspaceInstanceCommand";
import {
  type DeleteVolumeCommandInput,
  type DeleteVolumeCommandOutput,
  DeleteVolumeCommand,
} from "./commands/DeleteVolumeCommand";
import {
  type DeleteWorkspaceInstanceCommandInput,
  type DeleteWorkspaceInstanceCommandOutput,
  DeleteWorkspaceInstanceCommand,
} from "./commands/DeleteWorkspaceInstanceCommand";
import {
  type DisassociateVolumeCommandInput,
  type DisassociateVolumeCommandOutput,
  DisassociateVolumeCommand,
} from "./commands/DisassociateVolumeCommand";
import {
  type GetWorkspaceInstanceCommandInput,
  type GetWorkspaceInstanceCommandOutput,
  GetWorkspaceInstanceCommand,
} from "./commands/GetWorkspaceInstanceCommand";
import {
  type ListInstanceTypesCommandInput,
  type ListInstanceTypesCommandOutput,
  ListInstanceTypesCommand,
} from "./commands/ListInstanceTypesCommand";
import {
  type ListRegionsCommandInput,
  type ListRegionsCommandOutput,
  ListRegionsCommand,
} from "./commands/ListRegionsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWorkspaceInstancesCommandInput,
  type ListWorkspaceInstancesCommandOutput,
  ListWorkspaceInstancesCommand,
} from "./commands/ListWorkspaceInstancesCommand";
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
import { paginateListInstanceTypes } from "./pagination/ListInstanceTypesPaginator";
import { paginateListRegions } from "./pagination/ListRegionsPaginator";
import { paginateListWorkspaceInstances } from "./pagination/ListWorkspaceInstancesPaginator";
import { WorkspacesInstancesClient } from "./WorkspacesInstancesClient";

const commands = {
  AssociateVolumeCommand,
  CreateVolumeCommand,
  CreateWorkspaceInstanceCommand,
  DeleteVolumeCommand,
  DeleteWorkspaceInstanceCommand,
  DisassociateVolumeCommand,
  GetWorkspaceInstanceCommand,
  ListInstanceTypesCommand,
  ListRegionsCommand,
  ListTagsForResourceCommand,
  ListWorkspaceInstancesCommand,
  TagResourceCommand,
  UntagResourceCommand,
};
const paginators = {
  paginateListInstanceTypes,
  paginateListRegions,
  paginateListWorkspaceInstances,
};

export interface WorkspacesInstances {
  /**
   * @see {@link AssociateVolumeCommand}
   */
  associateVolume(
    args: AssociateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateVolumeCommandOutput>;
  associateVolume(
    args: AssociateVolumeCommandInput,
    cb: (err: any, data?: AssociateVolumeCommandOutput) => void
  ): void;
  associateVolume(
    args: AssociateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVolumeCommand}
   */
  createVolume(
    args: CreateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVolumeCommandOutput>;
  createVolume(
    args: CreateVolumeCommandInput,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;
  createVolume(
    args: CreateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceInstanceCommand}
   */
  createWorkspaceInstance(
    args: CreateWorkspaceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceInstanceCommandOutput>;
  createWorkspaceInstance(
    args: CreateWorkspaceInstanceCommandInput,
    cb: (err: any, data?: CreateWorkspaceInstanceCommandOutput) => void
  ): void;
  createWorkspaceInstance(
    args: CreateWorkspaceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVolumeCommandOutput>;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceInstanceCommand}
   */
  deleteWorkspaceInstance(
    args: DeleteWorkspaceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceInstanceCommandOutput>;
  deleteWorkspaceInstance(
    args: DeleteWorkspaceInstanceCommandInput,
    cb: (err: any, data?: DeleteWorkspaceInstanceCommandOutput) => void
  ): void;
  deleteWorkspaceInstance(
    args: DeleteWorkspaceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateVolumeCommand}
   */
  disassociateVolume(
    args: DisassociateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateVolumeCommandOutput>;
  disassociateVolume(
    args: DisassociateVolumeCommandInput,
    cb: (err: any, data?: DisassociateVolumeCommandOutput) => void
  ): void;
  disassociateVolume(
    args: DisassociateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkspaceInstanceCommand}
   */
  getWorkspaceInstance(
    args: GetWorkspaceInstanceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkspaceInstanceCommandOutput>;
  getWorkspaceInstance(
    args: GetWorkspaceInstanceCommandInput,
    cb: (err: any, data?: GetWorkspaceInstanceCommandOutput) => void
  ): void;
  getWorkspaceInstance(
    args: GetWorkspaceInstanceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkspaceInstanceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInstanceTypesCommand}
   */
  listInstanceTypes(): Promise<ListInstanceTypesCommandOutput>;
  listInstanceTypes(
    args: ListInstanceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInstanceTypesCommandOutput>;
  listInstanceTypes(
    args: ListInstanceTypesCommandInput,
    cb: (err: any, data?: ListInstanceTypesCommandOutput) => void
  ): void;
  listInstanceTypes(
    args: ListInstanceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInstanceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRegionsCommand}
   */
  listRegions(): Promise<ListRegionsCommandOutput>;
  listRegions(
    args: ListRegionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRegionsCommandOutput>;
  listRegions(
    args: ListRegionsCommandInput,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
  ): void;
  listRegions(
    args: ListRegionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRegionsCommandOutput) => void
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
   * @see {@link ListWorkspaceInstancesCommand}
   */
  listWorkspaceInstances(): Promise<ListWorkspaceInstancesCommandOutput>;
  listWorkspaceInstances(
    args: ListWorkspaceInstancesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkspaceInstancesCommandOutput>;
  listWorkspaceInstances(
    args: ListWorkspaceInstancesCommandInput,
    cb: (err: any, data?: ListWorkspaceInstancesCommandOutput) => void
  ): void;
  listWorkspaceInstances(
    args: ListWorkspaceInstancesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkspaceInstancesCommandOutput) => void
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
   * @see {@link ListInstanceTypesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInstanceTypesCommandOutput}.
   */
  paginateListInstanceTypes(
    args?: ListInstanceTypesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInstanceTypesCommandOutput>;

  /**
   * @see {@link ListRegionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRegionsCommandOutput}.
   */
  paginateListRegions(
    args?: ListRegionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRegionsCommandOutput>;

  /**
   * @see {@link ListWorkspaceInstancesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWorkspaceInstancesCommandOutput}.
   */
  paginateListWorkspaceInstances(
    args?: ListWorkspaceInstancesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWorkspaceInstancesCommandOutput>;
}

/**
 * <p>Amazon WorkSpaces Instances provides an API framework for managing virtual workspace environments across multiple AWS regions, enabling programmatic creation and configuration of desktop infrastructure.</p>
 * @public
 */
export class WorkspacesInstances extends WorkspacesInstancesClient implements WorkspacesInstances {}
createAggregatedClient(commands, WorkspacesInstances, { paginators });
