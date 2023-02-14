// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  GetAccountSettingsCommand,
  GetAccountSettingsCommandInput,
  GetAccountSettingsCommandOutput,
} from "./commands/GetAccountSettingsCommand";
import { GetGroupCommand, GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import {
  GetGroupConfigurationCommand,
  GetGroupConfigurationCommandInput,
  GetGroupConfigurationCommandOutput,
} from "./commands/GetGroupConfigurationCommand";
import {
  GetGroupQueryCommand,
  GetGroupQueryCommandInput,
  GetGroupQueryCommandOutput,
} from "./commands/GetGroupQueryCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import {
  GroupResourcesCommand,
  GroupResourcesCommandInput,
  GroupResourcesCommandOutput,
} from "./commands/GroupResourcesCommand";
import {
  ListGroupResourcesCommand,
  ListGroupResourcesCommandInput,
  ListGroupResourcesCommandOutput,
} from "./commands/ListGroupResourcesCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  PutGroupConfigurationCommand,
  PutGroupConfigurationCommandInput,
  PutGroupConfigurationCommandOutput,
} from "./commands/PutGroupConfigurationCommand";
import {
  SearchResourcesCommand,
  SearchResourcesCommandInput,
  SearchResourcesCommandOutput,
} from "./commands/SearchResourcesCommand";
import { TagCommand, TagCommandInput, TagCommandOutput } from "./commands/TagCommand";
import {
  UngroupResourcesCommand,
  UngroupResourcesCommandInput,
  UngroupResourcesCommandOutput,
} from "./commands/UngroupResourcesCommand";
import { UntagCommand, UntagCommandInput, UntagCommandOutput } from "./commands/UntagCommand";
import {
  UpdateAccountSettingsCommand,
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateGroupCommand, UpdateGroupCommandInput, UpdateGroupCommandOutput } from "./commands/UpdateGroupCommand";
import {
  UpdateGroupQueryCommand,
  UpdateGroupQueryCommandInput,
  UpdateGroupQueryCommandOutput,
} from "./commands/UpdateGroupQueryCommand";
import { ResourceGroupsClient } from "./ResourceGroupsClient";

/**
 * <p>Resource Groups lets you organize Amazon Web Services resources such as Amazon Elastic Compute Cloud instances, Amazon Relational Database Service
 *             databases, and Amazon Simple Storage Service buckets into groups using criteria that you define as tags. A
 *             resource group is a collection of resources that match the resource types specified in a
 *             query, and share one or more tags or portions of tags. You can create a group of
 *             resources based on their roles in your cloud infrastructure, lifecycle stages, regions,
 *             application layers, or virtually any criteria. Resource Groups enable you to automate management
 *             tasks, such as those in Amazon Web Services Systems Manager Automation documents, on tag-related resources in
 *             Amazon Web Services Systems Manager. Groups of tagged resources also let you quickly view a custom console in
 *             Amazon Web Services Systems Manager that shows Config compliance and other monitoring data about member
 *             resources.</p>
 *          <p>To create a resource group, build a resource query, and specify tags that identify the
 *             criteria that members of the group have in common. Tags are key-value pairs.</p>
 *          <p>For more information about Resource Groups, see the <a href="https://docs.aws.amazon.com/ARG/latest/userguide/welcome.html">Resource Groups User Guide</a>.</p>
 *          <p>Resource Groups uses a REST-compliant API that you can use to perform the following types of
 *             operations.</p>
 *          <ul>
 *             <li>
 *                <p>Create, Read, Update, and Delete (CRUD) operations on resource groups and
 *                     resource query entities</p>
 *             </li>
 *             <li>
 *                <p>Applying, editing, and removing tags from resource groups</p>
 *             </li>
 *             <li>
 *                <p>Resolving resource group member ARNs so they can be returned as search
 *                     results</p>
 *             </li>
 *             <li>
 *                <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                <p>Searching Amazon Web Services resources based on a resource query</p>
 *             </li>
 *          </ul>
 */
export class ResourceGroups extends ResourceGroupsClient {
  /**
   * <p>Creates a resource group with the specified name and description. You can optionally
   *             include either a resource query or a service configuration. For more information about
   *             constructing a resource query, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/getting_started-query.html">Build queries and groups in
   *                 Resource Groups</a> in the <i>Resource Groups User Guide</i>. For more information
   *             about service-linked groups and service configurations, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:CreateGroup</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified resource group. Deleting a resource group does not delete any
   *             resources that are members of the group; it only deletes the group structure.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:DeleteGroup</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current status of optional features in Resource Groups.</p>
   */
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  public getAccountSettings(
    args: GetAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): Promise<GetAccountSettingsCommandOutput> | void {
    const command = new GetAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a specified resource group.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:GetGroup</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getGroup(args: GetGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupCommandOutput>;
  public getGroup(args: GetGroupCommandInput, cb: (err: any, data?: GetGroupCommandOutput) => void): void;
  public getGroup(
    args: GetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  public getGroup(
    args: GetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupCommandOutput) => void),
    cb?: (err: any, data?: GetGroupCommandOutput) => void
  ): Promise<GetGroupCommandOutput> | void {
    const command = new GetGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the service configuration associated with the specified resource group. For
   *             details about the service configuration syntax, see <a href="https://docs.aws.amazon.com/ARG/latest/APIReference/about-slg.html">Service configurations for Resource Groups</a>.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:GetGroupConfiguration</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupConfigurationCommandOutput>;
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;
  public getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): Promise<GetGroupConfigurationCommandOutput> | void {
    const command = new GetGroupConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the resource query associated with the specified resource group. For more
   *             information about resource queries, see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create
   *                 a tag-based group in Resource Groups</a>.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:GetGroupQuery</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupQueryCommandOutput>;
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;
  public getGroupQuery(
    args: GetGroupQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGroupQueryCommandOutput) => void),
    cb?: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): Promise<GetGroupQueryCommandOutput> | void {
    const command = new GetGroupQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of tags that are associated with a resource group, specified by an
   *             ARN.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:GetTags</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  public getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified resources to the specified group.</p>
   *          <important>
   *             <p>You can use this operation with only resource groups that are configured with the
   *                 following types:</p>
   *             <ul>
   *                <li>
   *                   <p>
   *                      <code>AWS::EC2::HostManagement</code>
   *                   </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>AWS::EC2::CapacityReservationPool</code>
   *                   </p>
   *                </li>
   *             </ul>
   *             <p>Other resource group type and resource types aren't currently supported by this
   *                 operation.</p>
   *          </important>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:GroupResources</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public groupResources(
    args: GroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GroupResourcesCommandOutput>;
  public groupResources(
    args: GroupResourcesCommandInput,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
  ): void;
  public groupResources(
    args: GroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
  ): void;
  public groupResources(
    args: GroupResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GroupResourcesCommandOutput) => void),
    cb?: (err: any, data?: GroupResourcesCommandOutput) => void
  ): Promise<GroupResourcesCommandOutput> | void {
    const command = new GroupResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of ARNs of the resources that are members of a specified resource
   *             group.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:ListGroupResources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cloudformation:DescribeStacks</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cloudformation:ListStackResources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:GetResources</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupResourcesCommandOutput>;
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;
  public listGroupResources(
    args: ListGroupResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): Promise<ListGroupResourcesCommandOutput> | void {
    const command = new ListGroupResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of existing Resource Groups in your account.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:ListGroups</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a service configuration to the specified group. This occurs asynchronously,
   *             and can take time to complete. You can use <a>GetGroupConfiguration</a> to
   *             check the status of the update.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:PutGroupConfiguration</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupConfigurationCommandOutput>;
  public putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): void;
  public putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): void;
  public putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutGroupConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): Promise<PutGroupConfigurationCommandOutput> | void {
    const command = new PutGroupConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a list of Amazon Web Services resource identifiers that matches the specified query. The
   *             query uses the same format as a resource query in a <a>CreateGroup</a> or
   *                 <a>UpdateGroupQuery</a> operation.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:SearchResources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cloudformation:DescribeStacks</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>cloudformation:ListStackResources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:GetResources</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  public searchResources(
    args: SearchResourcesCommandInput,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  public searchResources(
    args: SearchResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SearchResourcesCommandOutput) => void),
    cb?: (err: any, data?: SearchResourcesCommandOutput) => void
  ): Promise<SearchResourcesCommandOutput> | void {
    const command = new SearchResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds tags to a resource group with the specified ARN. Existing tags on a resource
   *             group are not changed if they are not specified in the request parameters.</p>
   *          <important>
   *             <p>Do not store personally identifiable information (PII) or other confidential or
   *                 sensitive information in tags. We use tags to provide you with billing and
   *                 administration services. Tags are not intended to be used for private or sensitive
   *                 data.</p>
   *          </important>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:Tag</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public tag(args: TagCommandInput, options?: __HttpHandlerOptions): Promise<TagCommandOutput>;
  public tag(args: TagCommandInput, cb: (err: any, data?: TagCommandOutput) => void): void;
  public tag(
    args: TagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagCommandOutput) => void
  ): void;
  public tag(
    args: TagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagCommandOutput) => void),
    cb?: (err: any, data?: TagCommandOutput) => void
  ): Promise<TagCommandOutput> | void {
    const command = new TagCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified resources from the specified group. This operation works only
   *             with static groups that you populated using the <a>GroupResources</a>
   *             operation. It doesn't work with any resource groups that are automatically populated by
   *             tag-based or CloudFormation stack-based queries.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:UngroupResources</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UngroupResourcesCommandOutput>;
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;
  public ungroupResources(
    args: UngroupResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UngroupResourcesCommandOutput) => void),
    cb?: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): Promise<UngroupResourcesCommandOutput> | void {
    const command = new UngroupResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes tags from a specified resource group.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:Untag</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public untag(args: UntagCommandInput, options?: __HttpHandlerOptions): Promise<UntagCommandOutput>;
  public untag(args: UntagCommandInput, cb: (err: any, data?: UntagCommandOutput) => void): void;
  public untag(
    args: UntagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagCommandOutput) => void
  ): void;
  public untag(
    args: UntagCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagCommandOutput) => void),
    cb?: (err: any, data?: UntagCommandOutput) => void
  ): Promise<UntagCommandOutput> | void {
    const command = new UntagCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Turns on or turns off optional features in Resource Groups.</p>
   *          <p>The preceding example shows that the request to turn on group lifecycle events is
   *                 <code>IN_PROGRESS</code>. You can call the <a>GetAccountSettings</a>
   *             operation to check for completion by looking for <code>GroupLifecycleEventsStatus</code>
   *             to change to <code>ACTIVE</code>.</p>
   */
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  public updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountSettingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): Promise<UpdateAccountSettingsCommandOutput> | void {
    const command = new UpdateAccountSettingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the description for an existing group. You cannot update the name of a
   *             resource group.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:UpdateGroup</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  public updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  public updateGroup(
    args: UpdateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupCommandOutput) => void
  ): Promise<UpdateGroupCommandOutput> | void {
    const command = new UpdateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the resource query of a group. For more information about resource queries,
   *             see <a href="https://docs.aws.amazon.com/ARG/latest/userguide/gettingstarted-query.html#gettingstarted-query-cli-tag">Create a tag-based group in Resource Groups</a>.</p>
   *          <p>
   *             <b>Minimum permissions</b>
   *          </p>
   *          <p>To run this command, you must have the following permissions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>resource-groups:UpdateGroupQuery</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupQueryCommandOutput>;
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
  public updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGroupQueryCommandOutput) => void),
    cb?: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): Promise<UpdateGroupQueryCommandOutput> | void {
    const command = new UpdateGroupQueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
