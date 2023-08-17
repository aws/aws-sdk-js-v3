// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { ResourceGroupsClient, ResourceGroupsClientConfig } from "./ResourceGroupsClient";

const commands = {
  CreateGroupCommand,
  DeleteGroupCommand,
  GetAccountSettingsCommand,
  GetGroupCommand,
  GetGroupConfigurationCommand,
  GetGroupQueryCommand,
  GetTagsCommand,
  GroupResourcesCommand,
  ListGroupResourcesCommand,
  ListGroupsCommand,
  PutGroupConfigurationCommand,
  SearchResourcesCommand,
  TagCommand,
  UngroupResourcesCommand,
  UntagCommand,
  UpdateAccountSettingsCommand,
  UpdateGroupCommand,
  UpdateGroupQueryCommand,
};

export interface ResourceGroups {
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
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
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
   * @see {@link GetGroupConfigurationCommand}
   */
  getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGroupConfigurationCommandOutput>;
  getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;
  getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupQueryCommand}
   */
  getGroupQuery(args: GetGroupQueryCommandInput, options?: __HttpHandlerOptions): Promise<GetGroupQueryCommandOutput>;
  getGroupQuery(args: GetGroupQueryCommandInput, cb: (err: any, data?: GetGroupQueryCommandOutput) => void): void;
  getGroupQuery(
    args: GetGroupQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GroupResourcesCommand}
   */
  groupResources(
    args: GroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GroupResourcesCommandOutput>;
  groupResources(args: GroupResourcesCommandInput, cb: (err: any, data?: GroupResourcesCommandOutput) => void): void;
  groupResources(
    args: GroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
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
   * @see {@link PutGroupConfigurationCommand}
   */
  putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGroupConfigurationCommandOutput>;
  putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): void;
  putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchResourcesCommand}
   */
  searchResources(
    args: SearchResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchResourcesCommandOutput>;
  searchResources(args: SearchResourcesCommandInput, cb: (err: any, data?: SearchResourcesCommandOutput) => void): void;
  searchResources(
    args: SearchResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link TagCommand}
   */
  tag(args: TagCommandInput, options?: __HttpHandlerOptions): Promise<TagCommandOutput>;
  tag(args: TagCommandInput, cb: (err: any, data?: TagCommandOutput) => void): void;
  tag(args: TagCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagCommandOutput) => void): void;

  /**
   * @see {@link UngroupResourcesCommand}
   */
  ungroupResources(
    args: UngroupResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UngroupResourcesCommandOutput>;
  ungroupResources(
    args: UngroupResourcesCommandInput,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;
  ungroupResources(
    args: UngroupResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagCommand}
   */
  untag(args: UntagCommandInput, options?: __HttpHandlerOptions): Promise<UntagCommandOutput>;
  untag(args: UntagCommandInput, cb: (err: any, data?: UntagCommandOutput) => void): void;
  untag(
    args: UntagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(args: UpdateGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGroupCommandOutput>;
  updateGroup(args: UpdateGroupCommandInput, cb: (err: any, data?: UpdateGroupCommandOutput) => void): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupQueryCommand}
   */
  updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGroupQueryCommandOutput>;
  updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
  updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
}

/**
 * @public
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
export class ResourceGroups extends ResourceGroupsClient implements ResourceGroups {}
createAggregatedClient(commands, ResourceGroups);
