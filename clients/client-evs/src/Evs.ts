// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateEnvironmentCommand,
  CreateEnvironmentCommandInput,
  CreateEnvironmentCommandOutput,
} from "./commands/CreateEnvironmentCommand";
import {
  CreateEnvironmentHostCommand,
  CreateEnvironmentHostCommandInput,
  CreateEnvironmentHostCommandOutput,
} from "./commands/CreateEnvironmentHostCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentHostCommand,
  DeleteEnvironmentHostCommandInput,
  DeleteEnvironmentHostCommandOutput,
} from "./commands/DeleteEnvironmentHostCommand";
import {
  GetEnvironmentCommand,
  GetEnvironmentCommandInput,
  GetEnvironmentCommandOutput,
} from "./commands/GetEnvironmentCommand";
import {
  ListEnvironmentHostsCommand,
  ListEnvironmentHostsCommandInput,
  ListEnvironmentHostsCommandOutput,
} from "./commands/ListEnvironmentHostsCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
import {
  ListEnvironmentVlansCommand,
  ListEnvironmentVlansCommandInput,
  ListEnvironmentVlansCommandOutput,
} from "./commands/ListEnvironmentVlansCommand";
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
import { EvsClient, EvsClientConfig } from "./EvsClient";

const commands = {
  CreateEnvironmentCommand,
  CreateEnvironmentHostCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentHostCommand,
  GetEnvironmentCommand,
  ListEnvironmentHostsCommand,
  ListEnvironmentsCommand,
  ListEnvironmentVlansCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface Evs {
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
   * @see {@link GetEnvironmentCommand}
   */
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEnvironmentCommandOutput>;
  getEnvironment(args: GetEnvironmentCommandInput, cb: (err: any, data?: GetEnvironmentCommandOutput) => void): void;
  getEnvironment(
    args: GetEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEnvironmentCommandOutput) => void
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
}

/**
 * <note> <p>Amazon EVS is in public preview release and is subject to change.</p> </note> <p>Amazon Elastic VMware Service (Amazon EVS) is a service that you can use to deploy a VMware Cloud Foundation (VCF) software environment directly on EC2 bare metal instances within an Amazon Virtual Private Cloud (VPC).</p> <p>Workloads running on Amazon EVS are fully compatible with workloads running on any standard VMware vSphere environment. This means that you can migrate any VMware-based workload to Amazon EVS without workload modification.</p>
 * @public
 */
export class Evs extends EvsClient implements Evs {}
createAggregatedClient(commands, Evs);
