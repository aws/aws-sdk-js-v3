// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateResourceCommand,
  AssociateResourceCommandInput,
  AssociateResourceCommandOutput,
} from "./commands/AssociateResourceCommand";
import {
  CreateCanaryCommand,
  CreateCanaryCommandInput,
  CreateCanaryCommandOutput,
} from "./commands/CreateCanaryCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  DeleteCanaryCommand,
  DeleteCanaryCommandInput,
  DeleteCanaryCommandOutput,
} from "./commands/DeleteCanaryCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DescribeCanariesCommand,
  DescribeCanariesCommandInput,
  DescribeCanariesCommandOutput,
} from "./commands/DescribeCanariesCommand";
import {
  DescribeCanariesLastRunCommand,
  DescribeCanariesLastRunCommandInput,
  DescribeCanariesLastRunCommandOutput,
} from "./commands/DescribeCanariesLastRunCommand";
import {
  DescribeRuntimeVersionsCommand,
  DescribeRuntimeVersionsCommandInput,
  DescribeRuntimeVersionsCommandOutput,
} from "./commands/DescribeRuntimeVersionsCommand";
import {
  DisassociateResourceCommand,
  DisassociateResourceCommandInput,
  DisassociateResourceCommandOutput,
} from "./commands/DisassociateResourceCommand";
import { GetCanaryCommand, GetCanaryCommandInput, GetCanaryCommandOutput } from "./commands/GetCanaryCommand";
import {
  GetCanaryRunsCommand,
  GetCanaryRunsCommandInput,
  GetCanaryRunsCommandOutput,
} from "./commands/GetCanaryRunsCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  ListAssociatedGroupsCommand,
  ListAssociatedGroupsCommandInput,
  ListAssociatedGroupsCommandOutput,
} from "./commands/ListAssociatedGroupsCommand";
import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartCanaryCommand, StartCanaryCommandInput, StartCanaryCommandOutput } from "./commands/StartCanaryCommand";
import { StopCanaryCommand, StopCanaryCommandInput, StopCanaryCommandOutput } from "./commands/StopCanaryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateCanaryCommand,
  UpdateCanaryCommandInput,
  UpdateCanaryCommandOutput,
} from "./commands/UpdateCanaryCommand";
import { SyntheticsClient, SyntheticsClientConfig } from "./SyntheticsClient";

const commands = {
  AssociateResourceCommand,
  CreateCanaryCommand,
  CreateGroupCommand,
  DeleteCanaryCommand,
  DeleteGroupCommand,
  DescribeCanariesCommand,
  DescribeCanariesLastRunCommand,
  DescribeRuntimeVersionsCommand,
  DisassociateResourceCommand,
  GetCanaryCommand,
  GetCanaryRunsCommand,
  GetGroupCommand,
  ListAssociatedGroupsCommand,
  ListGroupResourcesCommand,
  ListGroupsCommand,
  ListTagsForResourceCommand,
  StartCanaryCommand,
  StopCanaryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateCanaryCommand,
};

export interface Synthetics {
  /**
   * @see {@link AssociateResourceCommand}
   */
  associateResource(
    args: AssociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceCommandOutput>;
  associateResource(
    args: AssociateResourceCommandInput,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;
  associateResource(
    args: AssociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateCanaryCommand}
   */
  createCanary(args: CreateCanaryCommandInput, options?: __HttpHandlerOptions): Promise<CreateCanaryCommandOutput>;
  createCanary(args: CreateCanaryCommandInput, cb: (err: any, data?: CreateCanaryCommandOutput) => void): void;
  createCanary(
    args: CreateCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCanaryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCanaryCommand}
   */
  deleteCanary(args: DeleteCanaryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCanaryCommandOutput>;
  deleteCanary(args: DeleteCanaryCommandInput, cb: (err: any, data?: DeleteCanaryCommandOutput) => void): void;
  deleteCanary(
    args: DeleteCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCanaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCanariesCommand}
   */
  describeCanaries(
    args: DescribeCanariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCanariesCommandOutput>;
  describeCanaries(
    args: DescribeCanariesCommandInput,
    cb: (err: any, data?: DescribeCanariesCommandOutput) => void
  ): void;
  describeCanaries(
    args: DescribeCanariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCanariesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCanariesLastRunCommand}
   */
  describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCanariesLastRunCommandOutput>;
  describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    cb: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void
  ): void;
  describeCanariesLastRun(
    args: DescribeCanariesLastRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCanariesLastRunCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRuntimeVersionsCommand}
   */
  describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuntimeVersionsCommandOutput>;
  describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    cb: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void
  ): void;
  describeRuntimeVersions(
    args: DescribeRuntimeVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuntimeVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateResourceCommand}
   */
  disassociateResource(
    args: DisassociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceCommandOutput>;
  disassociateResource(
    args: DisassociateResourceCommandInput,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;
  disassociateResource(
    args: DisassociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCanaryCommand}
   */
  getCanary(args: GetCanaryCommandInput, options?: __HttpHandlerOptions): Promise<GetCanaryCommandOutput>;
  getCanary(args: GetCanaryCommandInput, cb: (err: any, data?: GetCanaryCommandOutput) => void): void;
  getCanary(
    args: GetCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCanaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCanaryRunsCommand}
   */
  getCanaryRuns(args: GetCanaryRunsCommandInput, options?: __HttpHandlerOptions): Promise<GetCanaryRunsCommandOutput>;
  getCanaryRuns(args: GetCanaryRunsCommandInput, cb: (err: any, data?: GetCanaryRunsCommandOutput) => void): void;
  getCanaryRuns(
    args: GetCanaryRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCanaryRunsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedGroupsCommand}
   */
  listAssociatedGroups(
    args: ListAssociatedGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedGroupsCommandOutput>;
  listAssociatedGroups(
    args: ListAssociatedGroupsCommandInput,
    cb: (err: any, data?: ListAssociatedGroupsCommandOutput) => void
  ): void;
  listAssociatedGroups(
    args: ListAssociatedGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupResourcesCommand}
   */
  listGroupResources(
    args: ListGroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupResourcesCommandOutput>;
  listGroupResources(
    args: ListGroupResourcesCommandInput,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;
  listGroupResources(
    args: ListGroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
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
   * @see {@link StartCanaryCommand}
   */
  startCanary(args: StartCanaryCommandInput, options?: __HttpHandlerOptions): Promise<StartCanaryCommandOutput>;
  startCanary(args: StartCanaryCommandInput, cb: (err: any, data?: StartCanaryCommandOutput) => void): void;
  startCanary(
    args: StartCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCanaryCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCanaryCommand}
   */
  stopCanary(args: StopCanaryCommandInput, options?: __HttpHandlerOptions): Promise<StopCanaryCommandOutput>;
  stopCanary(args: StopCanaryCommandInput, cb: (err: any, data?: StopCanaryCommandOutput) => void): void;
  stopCanary(
    args: StopCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCanaryCommandOutput) => void
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
   * @see {@link UpdateCanaryCommand}
   */
  updateCanary(args: UpdateCanaryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCanaryCommandOutput>;
  updateCanary(args: UpdateCanaryCommandInput, cb: (err: any, data?: UpdateCanaryCommandOutput) => void): void;
  updateCanary(
    args: UpdateCanaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCanaryCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Amazon CloudWatch Synthetics</fullname>
 *          <p>You can use Amazon CloudWatch Synthetics to continually monitor your services. You can
 *          create and manage <i>canaries</i>, which are modular, lightweight scripts
 *          that monitor your endpoints and APIs
 *             from the outside-in. You can set up your canaries to run
 *          24 hours a day, once per minute. The canaries help you check the availability and latency
 *          of your web services and troubleshoot anomalies by investigating load time data,
 *          screenshots of the UI, logs, and metrics. The canaries seamlessly integrate with CloudWatch
 *          ServiceLens to help you trace the causes of impacted nodes in your applications. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ServiceLens.html">Using ServiceLens to Monitor
 *             the Health of Your Applications</a> in the <i>Amazon CloudWatch User
 *             Guide</i>.</p>
 *          <p>Before you create and manage canaries, be aware of the security considerations. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html">Security
 *             Considerations for Synthetics Canaries</a>.</p>
 */
export class Synthetics extends SyntheticsClient implements Synthetics {}
createAggregatedClient(commands, Synthetics);
