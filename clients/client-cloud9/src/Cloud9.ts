// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { Cloud9Client, Cloud9ClientConfig } from "./Cloud9Client";
import {
  CreateEnvironmentEC2Command,
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
} from "./commands/CreateEnvironmentEC2Command";
import {
  CreateEnvironmentMembershipCommand,
  CreateEnvironmentMembershipCommandInput,
  CreateEnvironmentMembershipCommandOutput,
} from "./commands/CreateEnvironmentMembershipCommand";
import {
  DeleteEnvironmentCommand,
  DeleteEnvironmentCommandInput,
  DeleteEnvironmentCommandOutput,
} from "./commands/DeleteEnvironmentCommand";
import {
  DeleteEnvironmentMembershipCommand,
  DeleteEnvironmentMembershipCommandInput,
  DeleteEnvironmentMembershipCommandOutput,
} from "./commands/DeleteEnvironmentMembershipCommand";
import {
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentMembershipsCommandInput,
  DescribeEnvironmentMembershipsCommandOutput,
} from "./commands/DescribeEnvironmentMembershipsCommand";
import {
  DescribeEnvironmentsCommand,
  DescribeEnvironmentsCommandInput,
  DescribeEnvironmentsCommandOutput,
} from "./commands/DescribeEnvironmentsCommand";
import {
  DescribeEnvironmentStatusCommand,
  DescribeEnvironmentStatusCommandInput,
  DescribeEnvironmentStatusCommandOutput,
} from "./commands/DescribeEnvironmentStatusCommand";
import {
  ListEnvironmentsCommand,
  ListEnvironmentsCommandInput,
  ListEnvironmentsCommandOutput,
} from "./commands/ListEnvironmentsCommand";
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
  UpdateEnvironmentCommand,
  UpdateEnvironmentCommandInput,
  UpdateEnvironmentCommandOutput,
} from "./commands/UpdateEnvironmentCommand";
import {
  UpdateEnvironmentMembershipCommand,
  UpdateEnvironmentMembershipCommandInput,
  UpdateEnvironmentMembershipCommandOutput,
} from "./commands/UpdateEnvironmentMembershipCommand";

const commands = {
  CreateEnvironmentEC2Command,
  CreateEnvironmentMembershipCommand,
  DeleteEnvironmentCommand,
  DeleteEnvironmentMembershipCommand,
  DescribeEnvironmentMembershipsCommand,
  DescribeEnvironmentsCommand,
  DescribeEnvironmentStatusCommand,
  ListEnvironmentsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateEnvironmentCommand,
  UpdateEnvironmentMembershipCommand,
};

export interface Cloud9 {
  /**
   * @see {@link CreateEnvironmentEC2Command}
   */
  createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentEC2CommandOutput>;
  createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    cb: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void
  ): void;
  createEnvironmentEC2(
    args: CreateEnvironmentEC2CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentEC2CommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEnvironmentMembershipCommand}
   */
  createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEnvironmentMembershipCommandOutput>;
  createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    cb: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void
  ): void;
  createEnvironmentMembership(
    args: CreateEnvironmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEnvironmentMembershipCommandOutput) => void
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
   * @see {@link DeleteEnvironmentMembershipCommand}
   */
  deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEnvironmentMembershipCommandOutput>;
  deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    cb: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void
  ): void;
  deleteEnvironmentMembership(
    args: DeleteEnvironmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEnvironmentMembershipCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentMembershipsCommand}
   */
  describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentMembershipsCommandOutput>;
  describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void
  ): void;
  describeEnvironmentMemberships(
    args: DescribeEnvironmentMembershipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentMembershipsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentsCommand}
   */
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentsCommandOutput>;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;
  describeEnvironments(
    args: DescribeEnvironmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEnvironmentStatusCommand}
   */
  describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEnvironmentStatusCommandOutput>;
  describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    cb: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void
  ): void;
  describeEnvironmentStatus(
    args: DescribeEnvironmentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEnvironmentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEnvironmentsCommand}
   */
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
   * @see {@link UpdateEnvironmentCommand}
   */
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentCommandOutput>;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;
  updateEnvironment(
    args: UpdateEnvironmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEnvironmentMembershipCommand}
   */
  updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEnvironmentMembershipCommandOutput>;
  updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    cb: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void
  ): void;
  updateEnvironmentMembership(
    args: UpdateEnvironmentMembershipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEnvironmentMembershipCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Cloud9</fullname>
 *          <p>Cloud9 is a collection of tools that you can use to code, build, run, test, debug, and
 *       release software in the cloud.</p>
 *          <p>For more information about Cloud9, see the <a href="https://docs.aws.amazon.com/cloud9/latest/user-guide">Cloud9 User Guide</a>.</p>
 *          <p>Cloud9 supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentEC2</code>: Creates an Cloud9 development environment, launches
 *           an Amazon EC2 instance, and then connects from the instance to the environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateEnvironmentMembership</code>: Adds an environment member to an
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironment</code>: Deletes an environment. If an Amazon EC2 instance is
 *           connected to the environment, also terminates the instance.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteEnvironmentMembership</code>: Deletes an environment member from an
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentMemberships</code>: Gets information about environment
 *           members for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironments</code>: Gets information about environments.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEnvironmentStatus</code>: Gets status information for an
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListEnvironments</code>: Gets a list of environment identifiers.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForResource</code>: Gets the tags for an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TagResource</code>: Adds tags to an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UntagResource</code>: Removes tags from an environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironment</code>: Changes the settings of an existing
 *           environment.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateEnvironmentMembership</code>: Changes the settings of an existing
 *           environment member for an environment.</p>
 *             </li>
 *          </ul>
 */
export class Cloud9 extends Cloud9Client implements Cloud9 {}
createAggregatedClient(commands, Cloud9);
