// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type ConfigureLogsCommandInput,
  type ConfigureLogsCommandOutput,
  ConfigureLogsCommand,
} from "./commands/ConfigureLogsCommand";
import {
  type CreateAssetCommandInput,
  type CreateAssetCommandOutput,
  CreateAssetCommand,
} from "./commands/CreateAssetCommand";
import {
  type CreatePackagingConfigurationCommandInput,
  type CreatePackagingConfigurationCommandOutput,
  CreatePackagingConfigurationCommand,
} from "./commands/CreatePackagingConfigurationCommand";
import {
  type CreatePackagingGroupCommandInput,
  type CreatePackagingGroupCommandOutput,
  CreatePackagingGroupCommand,
} from "./commands/CreatePackagingGroupCommand";
import {
  type DeleteAssetCommandInput,
  type DeleteAssetCommandOutput,
  DeleteAssetCommand,
} from "./commands/DeleteAssetCommand";
import {
  type DeletePackagingConfigurationCommandInput,
  type DeletePackagingConfigurationCommandOutput,
  DeletePackagingConfigurationCommand,
} from "./commands/DeletePackagingConfigurationCommand";
import {
  type DeletePackagingGroupCommandInput,
  type DeletePackagingGroupCommandOutput,
  DeletePackagingGroupCommand,
} from "./commands/DeletePackagingGroupCommand";
import {
  type DescribeAssetCommandInput,
  type DescribeAssetCommandOutput,
  DescribeAssetCommand,
} from "./commands/DescribeAssetCommand";
import {
  type DescribePackagingConfigurationCommandInput,
  type DescribePackagingConfigurationCommandOutput,
  DescribePackagingConfigurationCommand,
} from "./commands/DescribePackagingConfigurationCommand";
import {
  type DescribePackagingGroupCommandInput,
  type DescribePackagingGroupCommandOutput,
  DescribePackagingGroupCommand,
} from "./commands/DescribePackagingGroupCommand";
import {
  type ListAssetsCommandInput,
  type ListAssetsCommandOutput,
  ListAssetsCommand,
} from "./commands/ListAssetsCommand";
import {
  type ListPackagingConfigurationsCommandInput,
  type ListPackagingConfigurationsCommandOutput,
  ListPackagingConfigurationsCommand,
} from "./commands/ListPackagingConfigurationsCommand";
import {
  type ListPackagingGroupsCommandInput,
  type ListPackagingGroupsCommandOutput,
  ListPackagingGroupsCommand,
} from "./commands/ListPackagingGroupsCommand";
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
  type UpdatePackagingGroupCommandInput,
  type UpdatePackagingGroupCommandOutput,
  UpdatePackagingGroupCommand,
} from "./commands/UpdatePackagingGroupCommand";
import { MediaPackageVodClient } from "./MediaPackageVodClient";
import { paginateListAssets } from "./pagination/ListAssetsPaginator";
import { paginateListPackagingConfigurations } from "./pagination/ListPackagingConfigurationsPaginator";
import { paginateListPackagingGroups } from "./pagination/ListPackagingGroupsPaginator";

const commands = {
  ConfigureLogsCommand,
  CreateAssetCommand,
  CreatePackagingConfigurationCommand,
  CreatePackagingGroupCommand,
  DeleteAssetCommand,
  DeletePackagingConfigurationCommand,
  DeletePackagingGroupCommand,
  DescribeAssetCommand,
  DescribePackagingConfigurationCommand,
  DescribePackagingGroupCommand,
  ListAssetsCommand,
  ListPackagingConfigurationsCommand,
  ListPackagingGroupsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdatePackagingGroupCommand,
};
const paginators = {
  paginateListAssets,
  paginateListPackagingConfigurations,
  paginateListPackagingGroups,
};

export interface MediaPackageVod {
  /**
   * @see {@link ConfigureLogsCommand}
   */
  configureLogs(
    args: ConfigureLogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureLogsCommandOutput>;
  configureLogs(
    args: ConfigureLogsCommandInput,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;
  configureLogs(
    args: ConfigureLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetCommand}
   */
  createAsset(
    args: CreateAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetCommandOutput>;
  createAsset(
    args: CreateAssetCommandInput,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
  createAsset(
    args: CreateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackagingConfigurationCommand}
   */
  createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackagingConfigurationCommandOutput>;
  createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    cb: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void
  ): void;
  createPackagingConfiguration(
    args: CreatePackagingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackagingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePackagingGroupCommand}
   */
  createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePackagingGroupCommandOutput>;
  createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    cb: (err: any, data?: CreatePackagingGroupCommandOutput) => void
  ): void;
  createPackagingGroup(
    args: CreatePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePackagingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetCommand}
   */
  deleteAsset(
    args: DeleteAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetCommandOutput>;
  deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackagingConfigurationCommand}
   */
  deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackagingConfigurationCommandOutput>;
  deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    cb: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void
  ): void;
  deletePackagingConfiguration(
    args: DeletePackagingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackagingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePackagingGroupCommand}
   */
  deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePackagingGroupCommandOutput>;
  deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    cb: (err: any, data?: DeletePackagingGroupCommandOutput) => void
  ): void;
  deletePackagingGroup(
    args: DeletePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePackagingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetCommand}
   */
  describeAsset(
    args: DescribeAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetCommandOutput>;
  describeAsset(
    args: DescribeAssetCommandInput,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;
  describeAsset(
    args: DescribeAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackagingConfigurationCommand}
   */
  describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackagingConfigurationCommandOutput>;
  describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    cb: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void
  ): void;
  describePackagingConfiguration(
    args: DescribePackagingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackagingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePackagingGroupCommand}
   */
  describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePackagingGroupCommandOutput>;
  describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    cb: (err: any, data?: DescribePackagingGroupCommandOutput) => void
  ): void;
  describePackagingGroup(
    args: DescribePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePackagingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetsCommand}
   */
  listAssets(): Promise<ListAssetsCommandOutput>;
  listAssets(
    args: ListAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetsCommandOutput>;
  listAssets(
    args: ListAssetsCommandInput,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
  listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagingConfigurationsCommand}
   */
  listPackagingConfigurations(): Promise<ListPackagingConfigurationsCommandOutput>;
  listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagingConfigurationsCommandOutput>;
  listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    cb: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void
  ): void;
  listPackagingConfigurations(
    args: ListPackagingConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagingGroupsCommand}
   */
  listPackagingGroups(): Promise<ListPackagingGroupsCommandOutput>;
  listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPackagingGroupsCommandOutput>;
  listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    cb: (err: any, data?: ListPackagingGroupsCommandOutput) => void
  ): void;
  listPackagingGroups(
    args: ListPackagingGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPackagingGroupsCommandOutput) => void
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePackagingGroupCommand}
   */
  updatePackagingGroup(
    args: UpdatePackagingGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePackagingGroupCommandOutput>;
  updatePackagingGroup(
    args: UpdatePackagingGroupCommandInput,
    cb: (err: any, data?: UpdatePackagingGroupCommandOutput) => void
  ): void;
  updatePackagingGroup(
    args: UpdatePackagingGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePackagingGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetsCommandOutput}.
   */
  paginateListAssets(
    args?: ListAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetsCommandOutput>;

  /**
   * @see {@link ListPackagingConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPackagingConfigurationsCommandOutput}.
   */
  paginateListPackagingConfigurations(
    args?: ListPackagingConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPackagingConfigurationsCommandOutput>;

  /**
   * @see {@link ListPackagingGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPackagingGroupsCommandOutput}.
   */
  paginateListPackagingGroups(
    args?: ListPackagingGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPackagingGroupsCommandOutput>;
}

/**
 * AWS Elemental MediaPackage VOD
 * @public
 */
export class MediaPackageVod extends MediaPackageVodClient implements MediaPackageVod {}
createAggregatedClient(commands, MediaPackageVod, { paginators });
