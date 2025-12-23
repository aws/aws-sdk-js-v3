// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateVolumeCommand,
  AssociateVolumeCommandInput,
  AssociateVolumeCommandOutput,
} from "./commands/AssociateVolumeCommand";
import {
  CreateVolumeCommand,
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
} from "./commands/CreateVolumeCommand";
import {
  CreateWorkspaceInstanceCommand,
  CreateWorkspaceInstanceCommandInput,
  CreateWorkspaceInstanceCommandOutput,
} from "./commands/CreateWorkspaceInstanceCommand";
import {
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import {
  DeleteWorkspaceInstanceCommand,
  DeleteWorkspaceInstanceCommandInput,
  DeleteWorkspaceInstanceCommandOutput,
} from "./commands/DeleteWorkspaceInstanceCommand";
import {
  DisassociateVolumeCommand,
  DisassociateVolumeCommandInput,
  DisassociateVolumeCommandOutput,
} from "./commands/DisassociateVolumeCommand";
import {
  GetWorkspaceInstanceCommand,
  GetWorkspaceInstanceCommandInput,
  GetWorkspaceInstanceCommandOutput,
} from "./commands/GetWorkspaceInstanceCommand";
import {
  ListInstanceTypesCommand,
  ListInstanceTypesCommandInput,
  ListInstanceTypesCommandOutput,
} from "./commands/ListInstanceTypesCommand";
import { ListRegionsCommand, ListRegionsCommandInput, ListRegionsCommandOutput } from "./commands/ListRegionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkspaceInstancesCommand,
  ListWorkspaceInstancesCommandInput,
  ListWorkspaceInstancesCommandOutput,
} from "./commands/ListWorkspaceInstancesCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
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
}

/**
 * <p>Amazon WorkSpaces Instances provides an API framework for managing virtual workspace environments across multiple AWS regions, enabling programmatic creation and configuration of desktop infrastructure.</p>
 * @public
 */
export class WorkspacesInstances extends WorkspacesInstancesClient implements WorkspacesInstances {}
createAggregatedClient(commands, WorkspacesInstances);
