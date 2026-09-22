// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateEnvironmentCommandInput,
  type CreateEnvironmentCommandOutput,
  CreateEnvironmentCommand,
} from "./commands/CreateEnvironmentCommand";
import {
  type DeleteDeviceCommandInput,
  type DeleteDeviceCommandOutput,
  DeleteDeviceCommand,
} from "./commands/DeleteDeviceCommand";
import {
  type DeleteEnvironmentCommandInput,
  type DeleteEnvironmentCommandOutput,
  DeleteEnvironmentCommand,
} from "./commands/DeleteEnvironmentCommand";
import {
  type DeregisterDeviceCommandInput,
  type DeregisterDeviceCommandOutput,
  DeregisterDeviceCommand,
} from "./commands/DeregisterDeviceCommand";
import { type GetDeviceCommandInput, type GetDeviceCommandOutput, GetDeviceCommand } from "./commands/GetDeviceCommand";
import {
  type GetEnvironmentCommandInput,
  type GetEnvironmentCommandOutput,
  GetEnvironmentCommand,
} from "./commands/GetEnvironmentCommand";
import {
  type GetSoftwareSetCommandInput,
  type GetSoftwareSetCommandOutput,
  GetSoftwareSetCommand,
} from "./commands/GetSoftwareSetCommand";
import {
  type ListDevicesCommandInput,
  type ListDevicesCommandOutput,
  ListDevicesCommand,
} from "./commands/ListDevicesCommand";
import {
  type ListEnvironmentsCommandInput,
  type ListEnvironmentsCommandOutput,
  ListEnvironmentsCommand,
} from "./commands/ListEnvironmentsCommand";
import {
  type ListSoftwareSetsCommandInput,
  type ListSoftwareSetsCommandOutput,
  ListSoftwareSetsCommand,
} from "./commands/ListSoftwareSetsCommand";
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
  type UpdateDeviceCommandInput,
  type UpdateDeviceCommandOutput,
  UpdateDeviceCommand,
} from "./commands/UpdateDeviceCommand";
import {
  type UpdateEnvironmentCommandInput,
  type UpdateEnvironmentCommandOutput,
  UpdateEnvironmentCommand,
} from "./commands/UpdateEnvironmentCommand";
import {
  type UpdateSoftwareSetCommandInput,
  type UpdateSoftwareSetCommandOutput,
  UpdateSoftwareSetCommand,
} from "./commands/UpdateSoftwareSetCommand";
import { paginateListDevices } from "./pagination/ListDevicesPaginator";
import { paginateListEnvironments } from "./pagination/ListEnvironmentsPaginator";
import { paginateListSoftwareSets } from "./pagination/ListSoftwareSetsPaginator";
import { WorkSpacesThinClientClient } from "./WorkSpacesThinClientClient";

const commands = {
  CreateEnvironmentCommand,
  DeleteDeviceCommand,
  DeleteEnvironmentCommand,
  DeregisterDeviceCommand,
  GetDeviceCommand,
  GetEnvironmentCommand,
  GetSoftwareSetCommand,
  ListDevicesCommand,
  ListEnvironmentsCommand,
  ListSoftwareSetsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDeviceCommand,
  UpdateEnvironmentCommand,
  UpdateSoftwareSetCommand,
};
const paginators = {
  paginateListDevices,
  paginateListEnvironments,
  paginateListSoftwareSets,
};

/**
 * @public
 */
export interface WorkSpacesThinClientRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface WorkSpacesThinClient {
  /**
   * @see {@link CreateEnvironmentCommand}
   */
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<CreateEnvironmentCommandOutput>;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;
  createEnvironment(
    args: CreateEnvironmentCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: CreateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDeviceCommand}
   */
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<DeleteDeviceCommandOutput>;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;
  deleteDevice(
    args: DeleteDeviceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: DeleteDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEnvironmentCommand}
   */
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<DeleteEnvironmentCommandOutput>;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;
  deleteEnvironment(
    args: DeleteEnvironmentCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: DeleteEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterDeviceCommand}
   */
  deregisterDevice(
    args: DeregisterDeviceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<DeregisterDeviceCommandOutput>;
  deregisterDevice(
    args: DeregisterDeviceCommandInput,
    cb: (err: any, data?: DeregisterDeviceCommandOutput) => void
  ): void;
  deregisterDevice(
    args: DeregisterDeviceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: DeregisterDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceCommand}
   */
  getDevice(
    args: GetDeviceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<GetDeviceCommandOutput>;
  getDevice(
    args: GetDeviceCommandInput,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;
  getDevice(
    args: GetDeviceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: GetDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSoftwareSetCommand}
   */
  getSoftwareSet(
    args: GetSoftwareSetCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<GetSoftwareSetCommandOutput>;
  getSoftwareSet(
    args: GetSoftwareSetCommandInput,
    cb: (err: any, data?: GetSoftwareSetCommandOutput) => void
  ): void;
  getSoftwareSet(
    args: GetSoftwareSetCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: GetSoftwareSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   */
  listDevices(): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<ListDevicesCommandOutput>;
  listDevices(
    args: ListDevicesCommandInput,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;
  listDevices(
    args: ListDevicesCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: ListDevicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
  listEnvironments(): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<ListEnvironmentsCommandOutput>;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;
  listEnvironments(
    args: ListEnvironmentsCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: ListEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSoftwareSetsCommand}
   */
  listSoftwareSets(): Promise<ListSoftwareSetsCommandOutput>;
  listSoftwareSets(
    args: ListSoftwareSetsCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<ListSoftwareSetsCommandOutput>;
  listSoftwareSets(
    args: ListSoftwareSetsCommandInput,
    cb: (err: any, data?: ListSoftwareSetsCommandOutput) => void
  ): void;
  listSoftwareSets(
    args: ListSoftwareSetsCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: ListSoftwareSetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDeviceCommand}
   */
  updateDevice(
    args: UpdateDeviceCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<UpdateDeviceCommandOutput>;
  updateDevice(
    args: UpdateDeviceCommandInput,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;
  updateDevice(
    args: UpdateDeviceCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: UpdateDeviceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSoftwareSetCommand}
   */
  updateSoftwareSet(
    args: UpdateSoftwareSetCommandInput,
    options?: WorkSpacesThinClientRequestOptions
  ): Promise<UpdateSoftwareSetCommandOutput>;
  updateSoftwareSet(
    args: UpdateSoftwareSetCommandInput,
    cb: (err: any, data?: UpdateSoftwareSetCommandOutput) => void
  ): void;
  updateSoftwareSet(
    args: UpdateSoftwareSetCommandInput,
    options: WorkSpacesThinClientRequestOptions,
    cb: (err: any, data?: UpdateSoftwareSetCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDevicesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDevicesCommandOutput}.
   */
  paginateListDevices(
    args?: ListDevicesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDevicesCommandOutput>;

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
   * @see {@link ListSoftwareSetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSoftwareSetsCommandOutput}.
   */
  paginateListSoftwareSets(
    args?: ListSoftwareSetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSoftwareSetsCommandOutput>;
}

/**
 * <p>Amazon WorkSpaces Thin Client is an affordable device built to work with Amazon Web Services End User Computing (EUC) virtual desktops to provide users with a complete cloud desktop solution. WorkSpaces Thin Client is a compact device designed to connect up to two monitors and USB devices like a keyboard, mouse, headset, and webcam. To maximize endpoint security, WorkSpaces Thin Client devices do not allow local data storage or installation of unapproved applications. The WorkSpaces Thin Client device ships preloaded with device management software.</p> <p>You can use these APIs to complete WorkSpaces Thin Client tasks, such as creating environments or viewing devices. For more information about WorkSpaces Thin Client, including the required permissions to use the service, see the <a href="https://docs.aws.amazon.com/workspaces-thin-client/latest/ag/">Amazon WorkSpaces Thin Client Administrator Guide</a>. For more information about using the Command Line Interface (CLI) to manage your WorkSpaces Thin Client resources, see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces-thin-client/index.html">WorkSpaces Thin Client section of the CLI Reference</a>.</p>
 * @public
 */
export class WorkSpacesThinClient extends WorkSpacesThinClientClient implements WorkSpacesThinClient {}
createAggregatedClient(commands, WorkSpacesThinClient, { paginators });
