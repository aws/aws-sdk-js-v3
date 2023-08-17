// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ConfigureLogsCommand,
  ConfigureLogsCommandInput,
  ConfigureLogsCommandOutput,
} from "./commands/ConfigureLogsCommand";
import { CreateAssetCommand, CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import {
  CreatePackagingConfigurationCommand,
  CreatePackagingConfigurationCommandInput,
  CreatePackagingConfigurationCommandOutput,
} from "./commands/CreatePackagingConfigurationCommand";
import {
  CreatePackagingGroupCommand,
  CreatePackagingGroupCommandInput,
  CreatePackagingGroupCommandOutput,
} from "./commands/CreatePackagingGroupCommand";
import { DeleteAssetCommand, DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import {
  DeletePackagingConfigurationCommand,
  DeletePackagingConfigurationCommandInput,
  DeletePackagingConfigurationCommandOutput,
} from "./commands/DeletePackagingConfigurationCommand";
import {
  DeletePackagingGroupCommand,
  DeletePackagingGroupCommandInput,
  DeletePackagingGroupCommandOutput,
} from "./commands/DeletePackagingGroupCommand";
import {
  DescribeAssetCommand,
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput,
} from "./commands/DescribeAssetCommand";
import {
  DescribePackagingConfigurationCommand,
  DescribePackagingConfigurationCommandInput,
  DescribePackagingConfigurationCommandOutput,
} from "./commands/DescribePackagingConfigurationCommand";
import {
  DescribePackagingGroupCommand,
  DescribePackagingGroupCommandInput,
  DescribePackagingGroupCommandOutput,
} from "./commands/DescribePackagingGroupCommand";
import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListPackagingConfigurationsCommand,
  ListPackagingConfigurationsCommandInput,
  ListPackagingConfigurationsCommandOutput,
} from "./commands/ListPackagingConfigurationsCommand";
import {
  ListPackagingGroupsCommand,
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
} from "./commands/ListPackagingGroupsCommand";
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
  UpdatePackagingGroupCommand,
  UpdatePackagingGroupCommandInput,
  UpdatePackagingGroupCommandOutput,
} from "./commands/UpdatePackagingGroupCommand";
import { MediaPackageVodClient, MediaPackageVodClientConfig } from "./MediaPackageVodClient";

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

export interface MediaPackageVod {
  /**
   * @see {@link ConfigureLogsCommand}
   */
  configureLogs(args: ConfigureLogsCommandInput, options?: __HttpHandlerOptions): Promise<ConfigureLogsCommandOutput>;
  configureLogs(args: ConfigureLogsCommandInput, cb: (err: any, data?: ConfigureLogsCommandOutput) => void): void;
  configureLogs(
    args: ConfigureLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetCommand}
   */
  createAsset(args: CreateAssetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetCommandOutput>;
  createAsset(args: CreateAssetCommandInput, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
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
  deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
  deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
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
  describeAsset(args: DescribeAssetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssetCommandOutput>;
  describeAsset(args: DescribeAssetCommandInput, cb: (err: any, data?: DescribeAssetCommandOutput) => void): void;
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
  listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
  listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
  listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPackagingConfigurationsCommand}
   */
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
}

/**
 * @public
 * AWS Elemental MediaPackage VOD
 */
export class MediaPackageVod extends MediaPackageVodClient implements MediaPackageVod {}
createAggregatedClient(commands, MediaPackageVod);
