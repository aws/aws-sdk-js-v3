// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateDefaultViewCommand,
  AssociateDefaultViewCommandInput,
  AssociateDefaultViewCommandOutput,
} from "./commands/AssociateDefaultViewCommand";
import {
  BatchGetViewCommand,
  BatchGetViewCommandInput,
  BatchGetViewCommandOutput,
} from "./commands/BatchGetViewCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateResourceExplorerSetupCommand,
  CreateResourceExplorerSetupCommandInput,
  CreateResourceExplorerSetupCommandOutput,
} from "./commands/CreateResourceExplorerSetupCommand";
import { CreateViewCommand, CreateViewCommandInput, CreateViewCommandOutput } from "./commands/CreateViewCommand";
import { DeleteIndexCommand, DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeleteResourceExplorerSetupCommand,
  DeleteResourceExplorerSetupCommandInput,
  DeleteResourceExplorerSetupCommandOutput,
} from "./commands/DeleteResourceExplorerSetupCommand";
import { DeleteViewCommand, DeleteViewCommandInput, DeleteViewCommandOutput } from "./commands/DeleteViewCommand";
import {
  DisassociateDefaultViewCommand,
  DisassociateDefaultViewCommandInput,
  DisassociateDefaultViewCommandOutput,
} from "./commands/DisassociateDefaultViewCommand";
import {
  GetAccountLevelServiceConfigurationCommand,
  GetAccountLevelServiceConfigurationCommandInput,
  GetAccountLevelServiceConfigurationCommandOutput,
} from "./commands/GetAccountLevelServiceConfigurationCommand";
import {
  GetDefaultViewCommand,
  GetDefaultViewCommandInput,
  GetDefaultViewCommandOutput,
} from "./commands/GetDefaultViewCommand";
import { GetIndexCommand, GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import {
  GetManagedViewCommand,
  GetManagedViewCommandInput,
  GetManagedViewCommandOutput,
} from "./commands/GetManagedViewCommand";
import {
  GetResourceExplorerSetupCommand,
  GetResourceExplorerSetupCommandInput,
  GetResourceExplorerSetupCommandOutput,
} from "./commands/GetResourceExplorerSetupCommand";
import {
  GetServiceIndexCommand,
  GetServiceIndexCommandInput,
  GetServiceIndexCommandOutput,
} from "./commands/GetServiceIndexCommand";
import {
  GetServiceViewCommand,
  GetServiceViewCommandInput,
  GetServiceViewCommandOutput,
} from "./commands/GetServiceViewCommand";
import { GetViewCommand, GetViewCommandInput, GetViewCommandOutput } from "./commands/GetViewCommand";
import { ListIndexesCommand, ListIndexesCommandInput, ListIndexesCommandOutput } from "./commands/ListIndexesCommand";
import {
  ListIndexesForMembersCommand,
  ListIndexesForMembersCommandInput,
  ListIndexesForMembersCommandOutput,
} from "./commands/ListIndexesForMembersCommand";
import {
  ListManagedViewsCommand,
  ListManagedViewsCommandInput,
  ListManagedViewsCommandOutput,
} from "./commands/ListManagedViewsCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  ListServiceIndexesCommand,
  ListServiceIndexesCommandInput,
  ListServiceIndexesCommandOutput,
} from "./commands/ListServiceIndexesCommand";
import {
  ListServiceViewsCommand,
  ListServiceViewsCommandInput,
  ListServiceViewsCommandOutput,
} from "./commands/ListServiceViewsCommand";
import {
  ListStreamingAccessForServicesCommand,
  ListStreamingAccessForServicesCommandInput,
  ListStreamingAccessForServicesCommandOutput,
} from "./commands/ListStreamingAccessForServicesCommand";
import {
  ListSupportedResourceTypesCommand,
  ListSupportedResourceTypesCommandInput,
  ListSupportedResourceTypesCommandOutput,
} from "./commands/ListSupportedResourceTypesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListViewsCommand, ListViewsCommandInput, ListViewsCommandOutput } from "./commands/ListViewsCommand";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateIndexTypeCommand,
  UpdateIndexTypeCommandInput,
  UpdateIndexTypeCommandOutput,
} from "./commands/UpdateIndexTypeCommand";
import { UpdateViewCommand, UpdateViewCommandInput, UpdateViewCommandOutput } from "./commands/UpdateViewCommand";
import { ResourceExplorer2Client } from "./ResourceExplorer2Client";

const commands = {
  AssociateDefaultViewCommand,
  BatchGetViewCommand,
  CreateIndexCommand,
  CreateResourceExplorerSetupCommand,
  CreateViewCommand,
  DeleteIndexCommand,
  DeleteResourceExplorerSetupCommand,
  DeleteViewCommand,
  DisassociateDefaultViewCommand,
  GetAccountLevelServiceConfigurationCommand,
  GetDefaultViewCommand,
  GetIndexCommand,
  GetManagedViewCommand,
  GetResourceExplorerSetupCommand,
  GetServiceIndexCommand,
  GetServiceViewCommand,
  GetViewCommand,
  ListIndexesCommand,
  ListIndexesForMembersCommand,
  ListManagedViewsCommand,
  ListResourcesCommand,
  ListServiceIndexesCommand,
  ListServiceViewsCommand,
  ListStreamingAccessForServicesCommand,
  ListSupportedResourceTypesCommand,
  ListTagsForResourceCommand,
  ListViewsCommand,
  SearchCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateIndexTypeCommand,
  UpdateViewCommand,
};

export interface ResourceExplorer2 {
  /**
   * @see {@link AssociateDefaultViewCommand}
   */
  associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDefaultViewCommandOutput>;
  associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    cb: (err: any, data?: AssociateDefaultViewCommandOutput) => void
  ): void;
  associateDefaultView(
    args: AssociateDefaultViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDefaultViewCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetViewCommand}
   */
  batchGetView(): Promise<BatchGetViewCommandOutput>;
  batchGetView(args: BatchGetViewCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetViewCommandOutput>;
  batchGetView(args: BatchGetViewCommandInput, cb: (err: any, data?: BatchGetViewCommandOutput) => void): void;
  batchGetView(
    args: BatchGetViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetViewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIndexCommand}
   */
  createIndex(): Promise<CreateIndexCommandOutput>;
  createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateResourceExplorerSetupCommand}
   */
  createResourceExplorerSetup(
    args: CreateResourceExplorerSetupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceExplorerSetupCommandOutput>;
  createResourceExplorerSetup(
    args: CreateResourceExplorerSetupCommandInput,
    cb: (err: any, data?: CreateResourceExplorerSetupCommandOutput) => void
  ): void;
  createResourceExplorerSetup(
    args: CreateResourceExplorerSetupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceExplorerSetupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateViewCommand}
   */
  createView(args: CreateViewCommandInput, options?: __HttpHandlerOptions): Promise<CreateViewCommandOutput>;
  createView(args: CreateViewCommandInput, cb: (err: any, data?: CreateViewCommandOutput) => void): void;
  createView(
    args: CreateViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexCommand}
   */
  deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
  deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
  deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceExplorerSetupCommand}
   */
  deleteResourceExplorerSetup(): Promise<DeleteResourceExplorerSetupCommandOutput>;
  deleteResourceExplorerSetup(
    args: DeleteResourceExplorerSetupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceExplorerSetupCommandOutput>;
  deleteResourceExplorerSetup(
    args: DeleteResourceExplorerSetupCommandInput,
    cb: (err: any, data?: DeleteResourceExplorerSetupCommandOutput) => void
  ): void;
  deleteResourceExplorerSetup(
    args: DeleteResourceExplorerSetupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceExplorerSetupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteViewCommand}
   */
  deleteView(args: DeleteViewCommandInput, options?: __HttpHandlerOptions): Promise<DeleteViewCommandOutput>;
  deleteView(args: DeleteViewCommandInput, cb: (err: any, data?: DeleteViewCommandOutput) => void): void;
  deleteView(
    args: DeleteViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteViewCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateDefaultViewCommand}
   */
  disassociateDefaultView(): Promise<DisassociateDefaultViewCommandOutput>;
  disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDefaultViewCommandOutput>;
  disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    cb: (err: any, data?: DisassociateDefaultViewCommandOutput) => void
  ): void;
  disassociateDefaultView(
    args: DisassociateDefaultViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDefaultViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountLevelServiceConfigurationCommand}
   */
  getAccountLevelServiceConfiguration(): Promise<GetAccountLevelServiceConfigurationCommandOutput>;
  getAccountLevelServiceConfiguration(
    args: GetAccountLevelServiceConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountLevelServiceConfigurationCommandOutput>;
  getAccountLevelServiceConfiguration(
    args: GetAccountLevelServiceConfigurationCommandInput,
    cb: (err: any, data?: GetAccountLevelServiceConfigurationCommandOutput) => void
  ): void;
  getAccountLevelServiceConfiguration(
    args: GetAccountLevelServiceConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountLevelServiceConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDefaultViewCommand}
   */
  getDefaultView(): Promise<GetDefaultViewCommandOutput>;
  getDefaultView(
    args: GetDefaultViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultViewCommandOutput>;
  getDefaultView(args: GetDefaultViewCommandInput, cb: (err: any, data?: GetDefaultViewCommandOutput) => void): void;
  getDefaultView(
    args: GetDefaultViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIndexCommand}
   */
  getIndex(): Promise<GetIndexCommandOutput>;
  getIndex(args: GetIndexCommandInput, options?: __HttpHandlerOptions): Promise<GetIndexCommandOutput>;
  getIndex(args: GetIndexCommandInput, cb: (err: any, data?: GetIndexCommandOutput) => void): void;
  getIndex(
    args: GetIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetManagedViewCommand}
   */
  getManagedView(
    args: GetManagedViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetManagedViewCommandOutput>;
  getManagedView(args: GetManagedViewCommandInput, cb: (err: any, data?: GetManagedViewCommandOutput) => void): void;
  getManagedView(
    args: GetManagedViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetManagedViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceExplorerSetupCommand}
   */
  getResourceExplorerSetup(
    args: GetResourceExplorerSetupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceExplorerSetupCommandOutput>;
  getResourceExplorerSetup(
    args: GetResourceExplorerSetupCommandInput,
    cb: (err: any, data?: GetResourceExplorerSetupCommandOutput) => void
  ): void;
  getResourceExplorerSetup(
    args: GetResourceExplorerSetupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceExplorerSetupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceIndexCommand}
   */
  getServiceIndex(): Promise<GetServiceIndexCommandOutput>;
  getServiceIndex(
    args: GetServiceIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceIndexCommandOutput>;
  getServiceIndex(args: GetServiceIndexCommandInput, cb: (err: any, data?: GetServiceIndexCommandOutput) => void): void;
  getServiceIndex(
    args: GetServiceIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceIndexCommandOutput) => void
  ): void;

  /**
   * @see {@link GetServiceViewCommand}
   */
  getServiceView(
    args: GetServiceViewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceViewCommandOutput>;
  getServiceView(args: GetServiceViewCommandInput, cb: (err: any, data?: GetServiceViewCommandOutput) => void): void;
  getServiceView(
    args: GetServiceViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceViewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetViewCommand}
   */
  getView(args: GetViewCommandInput, options?: __HttpHandlerOptions): Promise<GetViewCommandOutput>;
  getView(args: GetViewCommandInput, cb: (err: any, data?: GetViewCommandOutput) => void): void;
  getView(
    args: GetViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetViewCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndexesCommand}
   */
  listIndexes(): Promise<ListIndexesCommandOutput>;
  listIndexes(args: ListIndexesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndexesCommandOutput>;
  listIndexes(args: ListIndexesCommandInput, cb: (err: any, data?: ListIndexesCommandOutput) => void): void;
  listIndexes(
    args: ListIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndexesForMembersCommand}
   */
  listIndexesForMembers(
    args: ListIndexesForMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIndexesForMembersCommandOutput>;
  listIndexesForMembers(
    args: ListIndexesForMembersCommandInput,
    cb: (err: any, data?: ListIndexesForMembersCommandOutput) => void
  ): void;
  listIndexesForMembers(
    args: ListIndexesForMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexesForMembersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListManagedViewsCommand}
   */
  listManagedViews(): Promise<ListManagedViewsCommandOutput>;
  listManagedViews(
    args: ListManagedViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedViewsCommandOutput>;
  listManagedViews(
    args: ListManagedViewsCommandInput,
    cb: (err: any, data?: ListManagedViewsCommandOutput) => void
  ): void;
  listManagedViews(
    args: ListManagedViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceIndexesCommand}
   */
  listServiceIndexes(): Promise<ListServiceIndexesCommandOutput>;
  listServiceIndexes(
    args: ListServiceIndexesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceIndexesCommandOutput>;
  listServiceIndexes(
    args: ListServiceIndexesCommandInput,
    cb: (err: any, data?: ListServiceIndexesCommandOutput) => void
  ): void;
  listServiceIndexes(
    args: ListServiceIndexesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceIndexesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListServiceViewsCommand}
   */
  listServiceViews(): Promise<ListServiceViewsCommandOutput>;
  listServiceViews(
    args: ListServiceViewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceViewsCommandOutput>;
  listServiceViews(
    args: ListServiceViewsCommandInput,
    cb: (err: any, data?: ListServiceViewsCommandOutput) => void
  ): void;
  listServiceViews(
    args: ListServiceViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStreamingAccessForServicesCommand}
   */
  listStreamingAccessForServices(): Promise<ListStreamingAccessForServicesCommandOutput>;
  listStreamingAccessForServices(
    args: ListStreamingAccessForServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStreamingAccessForServicesCommandOutput>;
  listStreamingAccessForServices(
    args: ListStreamingAccessForServicesCommandInput,
    cb: (err: any, data?: ListStreamingAccessForServicesCommandOutput) => void
  ): void;
  listStreamingAccessForServices(
    args: ListStreamingAccessForServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStreamingAccessForServicesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSupportedResourceTypesCommand}
   */
  listSupportedResourceTypes(): Promise<ListSupportedResourceTypesCommandOutput>;
  listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSupportedResourceTypesCommandOutput>;
  listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    cb: (err: any, data?: ListSupportedResourceTypesCommandOutput) => void
  ): void;
  listSupportedResourceTypes(
    args: ListSupportedResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSupportedResourceTypesCommandOutput) => void
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
   * @see {@link ListViewsCommand}
   */
  listViews(): Promise<ListViewsCommandOutput>;
  listViews(args: ListViewsCommandInput, options?: __HttpHandlerOptions): Promise<ListViewsCommandOutput>;
  listViews(args: ListViewsCommandInput, cb: (err: any, data?: ListViewsCommandOutput) => void): void;
  listViews(
    args: ListViewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListViewsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchCommand}
   */
  search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
  search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
  search(
    args: SearchCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchCommandOutput) => void
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
   * @see {@link UpdateIndexTypeCommand}
   */
  updateIndexType(
    args: UpdateIndexTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexTypeCommandOutput>;
  updateIndexType(args: UpdateIndexTypeCommandInput, cb: (err: any, data?: UpdateIndexTypeCommandOutput) => void): void;
  updateIndexType(
    args: UpdateIndexTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexTypeCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateViewCommand}
   */
  updateView(args: UpdateViewCommandInput, options?: __HttpHandlerOptions): Promise<UpdateViewCommandOutput>;
  updateView(args: UpdateViewCommandInput, cb: (err: any, data?: UpdateViewCommandOutput) => void): void;
  updateView(
    args: UpdateViewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateViewCommandOutput) => void
  ): void;
}

/**
 * <p>Amazon Web Services Resource Explorer is a resource search and discovery service. By using Resource Explorer, you can explore your resources using an internet search engine-like experience. Examples of resources include Amazon Relational Database Service (Amazon RDS) instances, Amazon Simple Storage Service (Amazon S3) buckets, or Amazon DynamoDB tables. You can search for your resources using resource metadata like names, tags, and IDs. Resource Explorer can search across all of the Amazon Web Services Regions in your account in which you turn the service on, to simplify your cross-Region workloads.</p> <p>Resource Explorer scans the resources in each of the Amazon Web Services Regions in your Amazon Web Services account in which you turn on Resource Explorer. Resource Explorer <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/getting-started-terms-and-concepts.html#term-index">creates and maintains an index</a> in each Region, with the details of that Region's resources.</p> <p>You can <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region.html">search across all of the indexed Regions in your account</a> by designating one of your Amazon Web Services Regions to contain the aggregator index for the account. When you <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/manage-aggregator-region-turn-on.html">promote a local index in a Region to become the aggregator index for the account</a>, Resource Explorer automatically replicates the index information from all local indexes in the other Regions to the aggregator index. Therefore, the Region with the aggregator index has a copy of all resource information for all Regions in the account where you turned on Resource Explorer. As a result, views in the aggregator index Region include resources from all of the indexed Regions in your account.</p> <p>For more information about Amazon Web Services Resource Explorer, including how to enable and configure the service, see the <a href="https://docs.aws.amazon.com/resource-explorer/latest/userguide/">Amazon Web Services Resource Explorer User Guide</a>.</p>
 * @public
 */
export class ResourceExplorer2 extends ResourceExplorer2Client implements ResourceExplorer2 {}
createAggregatedClient(commands, ResourceExplorer2);
