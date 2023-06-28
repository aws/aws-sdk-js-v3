// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateDeviceWithPlacementCommand,
  AssociateDeviceWithPlacementCommandInput,
  AssociateDeviceWithPlacementCommandOutput,
} from "./commands/AssociateDeviceWithPlacementCommand";
import {
  CreatePlacementCommand,
  CreatePlacementCommandInput,
  CreatePlacementCommandOutput,
} from "./commands/CreatePlacementCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  DeletePlacementCommand,
  DeletePlacementCommandInput,
  DeletePlacementCommandOutput,
} from "./commands/DeletePlacementCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DescribePlacementCommand,
  DescribePlacementCommandInput,
  DescribePlacementCommandOutput,
} from "./commands/DescribePlacementCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DisassociateDeviceFromPlacementCommand,
  DisassociateDeviceFromPlacementCommandInput,
  DisassociateDeviceFromPlacementCommandOutput,
} from "./commands/DisassociateDeviceFromPlacementCommand";
import {
  GetDevicesInPlacementCommand,
  GetDevicesInPlacementCommandInput,
  GetDevicesInPlacementCommandOutput,
} from "./commands/GetDevicesInPlacementCommand";
import {
  ListPlacementsCommand,
  ListPlacementsCommandInput,
  ListPlacementsCommandOutput,
} from "./commands/ListPlacementsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdatePlacementCommand,
  UpdatePlacementCommandInput,
  UpdatePlacementCommandOutput,
} from "./commands/UpdatePlacementCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { IoT1ClickProjectsClient, IoT1ClickProjectsClientConfig } from "./IoT1ClickProjectsClient";

const commands = {
  AssociateDeviceWithPlacementCommand,
  CreatePlacementCommand,
  CreateProjectCommand,
  DeletePlacementCommand,
  DeleteProjectCommand,
  DescribePlacementCommand,
  DescribeProjectCommand,
  DisassociateDeviceFromPlacementCommand,
  GetDevicesInPlacementCommand,
  ListPlacementsCommand,
  ListProjectsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePlacementCommand,
  UpdateProjectCommand,
};

export interface IoT1ClickProjects {
  /**
   * @see {@link AssociateDeviceWithPlacementCommand}
   */
  associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDeviceWithPlacementCommandOutput>;
  associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    cb: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void
  ): void;
  associateDeviceWithPlacement(
    args: AssociateDeviceWithPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDeviceWithPlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePlacementCommand}
   */
  createPlacement(
    args: CreatePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePlacementCommandOutput>;
  createPlacement(args: CreatePlacementCommandInput, cb: (err: any, data?: CreatePlacementCommandOutput) => void): void;
  createPlacement(
    args: CreatePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlacementCommand}
   */
  deletePlacement(
    args: DeletePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlacementCommandOutput>;
  deletePlacement(args: DeletePlacementCommandInput, cb: (err: any, data?: DeletePlacementCommandOutput) => void): void;
  deletePlacement(
    args: DeletePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePlacementCommand}
   */
  describePlacement(
    args: DescribePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePlacementCommandOutput>;
  describePlacement(
    args: DescribePlacementCommandInput,
    cb: (err: any, data?: DescribePlacementCommandOutput) => void
  ): void;
  describePlacement(
    args: DescribePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectCommand}
   */
  describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
  describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDeviceFromPlacementCommand}
   */
  disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDeviceFromPlacementCommandOutput>;
  disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    cb: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void
  ): void;
  disassociateDeviceFromPlacement(
    args: DisassociateDeviceFromPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDeviceFromPlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDevicesInPlacementCommand}
   */
  getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDevicesInPlacementCommandOutput>;
  getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    cb: (err: any, data?: GetDevicesInPlacementCommandOutput) => void
  ): void;
  getDevicesInPlacement(
    args: GetDevicesInPlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDevicesInPlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlacementsCommand}
   */
  listPlacements(
    args: ListPlacementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlacementsCommandOutput>;
  listPlacements(args: ListPlacementsCommandInput, cb: (err: any, data?: ListPlacementsCommandOutput) => void): void;
  listPlacements(
    args: ListPlacementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlacementsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
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
   * @see {@link UpdatePlacementCommand}
   */
  updatePlacement(
    args: UpdatePlacementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePlacementCommandOutput>;
  updatePlacement(args: UpdatePlacementCommandInput, cb: (err: any, data?: UpdatePlacementCommandOutput) => void): void;
  updatePlacement(
    args: UpdatePlacementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePlacementCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The AWS IoT 1-Click Projects API Reference</p>
 */
export class IoT1ClickProjects extends IoT1ClickProjectsClient implements IoT1ClickProjects {}
createAggregatedClient(commands, IoT1ClickProjects);
