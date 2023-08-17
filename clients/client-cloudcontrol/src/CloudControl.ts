// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudControlClient, CloudControlClientConfig } from "./CloudControlClient";
import {
  CancelResourceRequestCommand,
  CancelResourceRequestCommandInput,
  CancelResourceRequestCommandOutput,
} from "./commands/CancelResourceRequestCommand";
import {
  CreateResourceCommand,
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import {
  DeleteResourceCommand,
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import { GetResourceCommand, GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import {
  GetResourceRequestStatusCommand,
  GetResourceRequestStatusCommandInput,
  GetResourceRequestStatusCommandOutput,
} from "./commands/GetResourceRequestStatusCommand";
import {
  ListResourceRequestsCommand,
  ListResourceRequestsCommandInput,
  ListResourceRequestsCommandOutput,
} from "./commands/ListResourceRequestsCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";

const commands = {
  CancelResourceRequestCommand,
  CreateResourceCommand,
  DeleteResourceCommand,
  GetResourceCommand,
  GetResourceRequestStatusCommand,
  ListResourceRequestsCommand,
  ListResourcesCommand,
  UpdateResourceCommand,
};

export interface CloudControl {
  /**
   * @see {@link CancelResourceRequestCommand}
   */
  cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelResourceRequestCommandOutput>;
  cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    cb: (err: any, data?: CancelResourceRequestCommandOutput) => void
  ): void;
  cancelResourceRequest(
    args: CancelResourceRequestCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelResourceRequestCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceCommand}
   */
  createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  createResource(args: CreateResourceCommandInput, cb: (err: any, data?: CreateResourceCommandOutput) => void): void;
  createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceCommand}
   */
  deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  deleteResource(args: DeleteResourceCommandInput, cb: (err: any, data?: DeleteResourceCommandOutput) => void): void;
  deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceCommand}
   */
  getResource(args: GetResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceCommandOutput>;
  getResource(args: GetResourceCommandInput, cb: (err: any, data?: GetResourceCommandOutput) => void): void;
  getResource(
    args: GetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceRequestStatusCommand}
   */
  getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceRequestStatusCommandOutput>;
  getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    cb: (err: any, data?: GetResourceRequestStatusCommandOutput) => void
  ): void;
  getResourceRequestStatus(
    args: GetResourceRequestStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceRequestStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourceRequestsCommand}
   */
  listResourceRequests(
    args: ListResourceRequestsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceRequestsCommandOutput>;
  listResourceRequests(
    args: ListResourceRequestsCommandInput,
    cb: (err: any, data?: ListResourceRequestsCommandOutput) => void
  ): void;
  listResourceRequests(
    args: ListResourceRequestsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceRequestsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceCommand}
   */
  updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>For more information about Amazon Web Services Cloud Control API, see the <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/what-is-cloudcontrolapi.html">Amazon Web Services Cloud Control API User
 *         Guide</a>.</p>
 */
export class CloudControl extends CloudControlClient implements CloudControl {}
createAggregatedClient(commands, CloudControl);
