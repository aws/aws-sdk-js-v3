// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CancelTagSyncTaskCommandInput,
  type CancelTagSyncTaskCommandOutput,
  CancelTagSyncTaskCommand,
} from "./commands/CancelTagSyncTaskCommand";
import {
  type CreateGroupCommandInput,
  type CreateGroupCommandOutput,
  CreateGroupCommand,
} from "./commands/CreateGroupCommand";
import {
  type DeleteGroupCommandInput,
  type DeleteGroupCommandOutput,
  DeleteGroupCommand,
} from "./commands/DeleteGroupCommand";
import {
  type GetAccountSettingsCommandInput,
  type GetAccountSettingsCommandOutput,
  GetAccountSettingsCommand,
} from "./commands/GetAccountSettingsCommand";
import { type GetGroupCommandInput, type GetGroupCommandOutput, GetGroupCommand } from "./commands/GetGroupCommand";
import {
  type GetGroupConfigurationCommandInput,
  type GetGroupConfigurationCommandOutput,
  GetGroupConfigurationCommand,
} from "./commands/GetGroupConfigurationCommand";
import {
  type GetGroupQueryCommandInput,
  type GetGroupQueryCommandOutput,
  GetGroupQueryCommand,
} from "./commands/GetGroupQueryCommand";
import { type GetTagsCommandInput, type GetTagsCommandOutput, GetTagsCommand } from "./commands/GetTagsCommand";
import {
  type GetTagSyncTaskCommandInput,
  type GetTagSyncTaskCommandOutput,
  GetTagSyncTaskCommand,
} from "./commands/GetTagSyncTaskCommand";
import {
  type GroupResourcesCommandInput,
  type GroupResourcesCommandOutput,
  GroupResourcesCommand,
} from "./commands/GroupResourcesCommand";
import {
  type ListGroupingStatusesCommandInput,
  type ListGroupingStatusesCommandOutput,
  ListGroupingStatusesCommand,
} from "./commands/ListGroupingStatusesCommand";
import {
  type ListGroupResourcesCommandInput,
  type ListGroupResourcesCommandOutput,
  ListGroupResourcesCommand,
} from "./commands/ListGroupResourcesCommand";
import {
  type ListGroupsCommandInput,
  type ListGroupsCommandOutput,
  ListGroupsCommand,
} from "./commands/ListGroupsCommand";
import {
  type ListTagSyncTasksCommandInput,
  type ListTagSyncTasksCommandOutput,
  ListTagSyncTasksCommand,
} from "./commands/ListTagSyncTasksCommand";
import {
  type PutGroupConfigurationCommandInput,
  type PutGroupConfigurationCommandOutput,
  PutGroupConfigurationCommand,
} from "./commands/PutGroupConfigurationCommand";
import {
  type SearchResourcesCommandInput,
  type SearchResourcesCommandOutput,
  SearchResourcesCommand,
} from "./commands/SearchResourcesCommand";
import {
  type StartTagSyncTaskCommandInput,
  type StartTagSyncTaskCommandOutput,
  StartTagSyncTaskCommand,
} from "./commands/StartTagSyncTaskCommand";
import { type TagCommandInput, type TagCommandOutput, TagCommand } from "./commands/TagCommand";
import {
  type UngroupResourcesCommandInput,
  type UngroupResourcesCommandOutput,
  UngroupResourcesCommand,
} from "./commands/UngroupResourcesCommand";
import { type UntagCommandInput, type UntagCommandOutput, UntagCommand } from "./commands/UntagCommand";
import {
  type UpdateAccountSettingsCommandInput,
  type UpdateAccountSettingsCommandOutput,
  UpdateAccountSettingsCommand,
} from "./commands/UpdateAccountSettingsCommand";
import {
  type UpdateGroupCommandInput,
  type UpdateGroupCommandOutput,
  UpdateGroupCommand,
} from "./commands/UpdateGroupCommand";
import {
  type UpdateGroupQueryCommandInput,
  type UpdateGroupQueryCommandOutput,
  UpdateGroupQueryCommand,
} from "./commands/UpdateGroupQueryCommand";
import { paginateListGroupingStatuses } from "./pagination/ListGroupingStatusesPaginator";
import { paginateListGroupResources } from "./pagination/ListGroupResourcesPaginator";
import { paginateListGroups } from "./pagination/ListGroupsPaginator";
import { paginateListTagSyncTasks } from "./pagination/ListTagSyncTasksPaginator";
import { paginateSearchResources } from "./pagination/SearchResourcesPaginator";
import { ResourceGroupsClient } from "./ResourceGroupsClient";

const commands = {
  CancelTagSyncTaskCommand,
  CreateGroupCommand,
  DeleteGroupCommand,
  GetAccountSettingsCommand,
  GetGroupCommand,
  GetGroupConfigurationCommand,
  GetGroupQueryCommand,
  GetTagsCommand,
  GetTagSyncTaskCommand,
  GroupResourcesCommand,
  ListGroupingStatusesCommand,
  ListGroupResourcesCommand,
  ListGroupsCommand,
  ListTagSyncTasksCommand,
  PutGroupConfigurationCommand,
  SearchResourcesCommand,
  StartTagSyncTaskCommand,
  TagCommand,
  UngroupResourcesCommand,
  UntagCommand,
  UpdateAccountSettingsCommand,
  UpdateGroupCommand,
  UpdateGroupQueryCommand,
};
const paginators = {
  paginateListGroupingStatuses,
  paginateListGroupResources,
  paginateListGroups,
  paginateListTagSyncTasks,
  paginateSearchResources,
};

/**
 * @public
 */
export interface ResourceGroupsRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface ResourceGroups {
  /**
   * @see {@link CancelTagSyncTaskCommand}
   */
  cancelTagSyncTask(
    args: CancelTagSyncTaskCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<CancelTagSyncTaskCommandOutput>;
  cancelTagSyncTask(
    args: CancelTagSyncTaskCommandInput,
    cb: (err: any, data?: CancelTagSyncTaskCommandOutput) => void
  ): void;
  cancelTagSyncTask(
    args: CancelTagSyncTaskCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: CancelTagSyncTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGroupCommand}
   */
  createGroup(
    args: CreateGroupCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<CreateGroupCommandOutput>;
  createGroup(
    args: CreateGroupCommandInput,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  createGroup(
    args: CreateGroupCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGroupCommand}
   */
  deleteGroup(): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<DeleteGroupCommandOutput>;
  deleteGroup(
    args: DeleteGroupCommandInput,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  deleteGroup(
    args: DeleteGroupCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountSettingsCommand}
   */
  getAccountSettings(): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GetAccountSettingsCommandOutput>;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;
  getAccountSettings(
    args: GetAccountSettingsCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GetAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupCommand}
   */
  getGroup(): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GetGroupCommandOutput>;
  getGroup(
    args: GetGroupCommandInput,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;
  getGroup(
    args: GetGroupCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupConfigurationCommand}
   */
  getGroupConfiguration(): Promise<GetGroupConfigurationCommandOutput>;
  getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GetGroupConfigurationCommandOutput>;
  getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;
  getGroupConfiguration(
    args: GetGroupConfigurationCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GetGroupConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGroupQueryCommand}
   */
  getGroupQuery(): Promise<GetGroupQueryCommandOutput>;
  getGroupQuery(
    args: GetGroupQueryCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GetGroupQueryCommandOutput>;
  getGroupQuery(
    args: GetGroupQueryCommandInput,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;
  getGroupQuery(
    args: GetGroupQueryCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GetGroupQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagsCommand}
   */
  getTags(
    args: GetTagsCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GetTagsCommandOutput>;
  getTags(
    args: GetTagsCommandInput,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  getTags(
    args: GetTagsCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTagSyncTaskCommand}
   */
  getTagSyncTask(
    args: GetTagSyncTaskCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GetTagSyncTaskCommandOutput>;
  getTagSyncTask(
    args: GetTagSyncTaskCommandInput,
    cb: (err: any, data?: GetTagSyncTaskCommandOutput) => void
  ): void;
  getTagSyncTask(
    args: GetTagSyncTaskCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GetTagSyncTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link GroupResourcesCommand}
   */
  groupResources(
    args: GroupResourcesCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<GroupResourcesCommandOutput>;
  groupResources(
    args: GroupResourcesCommandInput,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
  ): void;
  groupResources(
    args: GroupResourcesCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: GroupResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupingStatusesCommand}
   */
  listGroupingStatuses(
    args: ListGroupingStatusesCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<ListGroupingStatusesCommandOutput>;
  listGroupingStatuses(
    args: ListGroupingStatusesCommandInput,
    cb: (err: any, data?: ListGroupingStatusesCommandOutput) => void
  ): void;
  listGroupingStatuses(
    args: ListGroupingStatusesCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: ListGroupingStatusesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupResourcesCommand}
   */
  listGroupResources(): Promise<ListGroupResourcesCommandOutput>;
  listGroupResources(
    args: ListGroupResourcesCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<ListGroupResourcesCommandOutput>;
  listGroupResources(
    args: ListGroupResourcesCommandInput,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;
  listGroupResources(
    args: ListGroupResourcesCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: ListGroupResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupsCommand}
   */
  listGroups(): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<ListGroupsCommandOutput>;
  listGroups(
    args: ListGroupsCommandInput,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  listGroups(
    args: ListGroupsCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagSyncTasksCommand}
   */
  listTagSyncTasks(): Promise<ListTagSyncTasksCommandOutput>;
  listTagSyncTasks(
    args: ListTagSyncTasksCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<ListTagSyncTasksCommandOutput>;
  listTagSyncTasks(
    args: ListTagSyncTasksCommandInput,
    cb: (err: any, data?: ListTagSyncTasksCommandOutput) => void
  ): void;
  listTagSyncTasks(
    args: ListTagSyncTasksCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: ListTagSyncTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link PutGroupConfigurationCommand}
   */
  putGroupConfiguration(): Promise<PutGroupConfigurationCommandOutput>;
  putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<PutGroupConfigurationCommandOutput>;
  putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): void;
  putGroupConfiguration(
    args: PutGroupConfigurationCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: PutGroupConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchResourcesCommand}
   */
  searchResources(
    args: SearchResourcesCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<SearchResourcesCommandOutput>;
  searchResources(
    args: SearchResourcesCommandInput,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;
  searchResources(
    args: SearchResourcesCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: SearchResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTagSyncTaskCommand}
   */
  startTagSyncTask(
    args: StartTagSyncTaskCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<StartTagSyncTaskCommandOutput>;
  startTagSyncTask(
    args: StartTagSyncTaskCommandInput,
    cb: (err: any, data?: StartTagSyncTaskCommandOutput) => void
  ): void;
  startTagSyncTask(
    args: StartTagSyncTaskCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: StartTagSyncTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link TagCommand}
   */
  tag(
    args: TagCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<TagCommandOutput>;
  tag(
    args: TagCommandInput,
    cb: (err: any, data?: TagCommandOutput) => void
  ): void;
  tag(
    args: TagCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: TagCommandOutput) => void
  ): void;

  /**
   * @see {@link UngroupResourcesCommand}
   */
  ungroupResources(
    args: UngroupResourcesCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<UngroupResourcesCommandOutput>;
  ungroupResources(
    args: UngroupResourcesCommandInput,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;
  ungroupResources(
    args: UngroupResourcesCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: UngroupResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagCommand}
   */
  untag(
    args: UntagCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<UntagCommandOutput>;
  untag(
    args: UntagCommandInput,
    cb: (err: any, data?: UntagCommandOutput) => void
  ): void;
  untag(
    args: UntagCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: UntagCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccountSettingsCommand}
   */
  updateAccountSettings(): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<UpdateAccountSettingsCommandOutput>;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;
  updateAccountSettings(
    args: UpdateAccountSettingsCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: UpdateAccountSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupCommand}
   */
  updateGroup(): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<UpdateGroupCommandOutput>;
  updateGroup(
    args: UpdateGroupCommandInput,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;
  updateGroup(
    args: UpdateGroupCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: UpdateGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGroupQueryCommand}
   */
  updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options?: ResourceGroupsRequestOptions
  ): Promise<UpdateGroupQueryCommandOutput>;
  updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;
  updateGroupQuery(
    args: UpdateGroupQueryCommandInput,
    options: ResourceGroupsRequestOptions,
    cb: (err: any, data?: UpdateGroupQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroupingStatusesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupingStatusesCommandOutput}.
   */
  paginateListGroupingStatuses(
    args: ListGroupingStatusesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupingStatusesCommandOutput>;

  /**
   * @see {@link ListGroupResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupResourcesCommandOutput}.
   */
  paginateListGroupResources(
    args?: ListGroupResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupResourcesCommandOutput>;

  /**
   * @see {@link ListGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGroupsCommandOutput}.
   */
  paginateListGroups(
    args?: ListGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGroupsCommandOutput>;

  /**
   * @see {@link ListTagSyncTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagSyncTasksCommandOutput}.
   */
  paginateListTagSyncTasks(
    args?: ListTagSyncTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagSyncTasksCommandOutput>;

  /**
   * @see {@link SearchResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link SearchResourcesCommandOutput}.
   */
  paginateSearchResources(
    args: SearchResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<SearchResourcesCommandOutput>;
}

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
 *                <p>Resolving resource group member Amazon resource names (ARN)s so they can be returned as search
 *                     results</p>
 *             </li>
 *             <li>
 *                <p>Getting data about resources that are members of a group</p>
 *             </li>
 *             <li>
 *                <p>Searching Amazon Web Services resources based on a resource query</p>
 *             </li>
 *          </ul>
 * @public
 */
export class ResourceGroups extends ResourceGroupsClient implements ResourceGroups {}
createAggregatedClient(commands, ResourceGroups, { paginators });
