// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateAccessPointCommandInput,
  type CreateAccessPointCommandOutput,
  CreateAccessPointCommand,
} from "./commands/CreateAccessPointCommand";
import {
  type CreateFileSystemCommandInput,
  type CreateFileSystemCommandOutput,
  CreateFileSystemCommand,
} from "./commands/CreateFileSystemCommand";
import {
  type CreateMountTargetCommandInput,
  type CreateMountTargetCommandOutput,
  CreateMountTargetCommand,
} from "./commands/CreateMountTargetCommand";
import {
  type CreateReplicationConfigurationCommandInput,
  type CreateReplicationConfigurationCommandOutput,
  CreateReplicationConfigurationCommand,
} from "./commands/CreateReplicationConfigurationCommand";
import {
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateTagsCommand,
} from "./commands/CreateTagsCommand";
import {
  type DeleteAccessPointCommandInput,
  type DeleteAccessPointCommandOutput,
  DeleteAccessPointCommand,
} from "./commands/DeleteAccessPointCommand";
import {
  type DeleteFileSystemCommandInput,
  type DeleteFileSystemCommandOutput,
  DeleteFileSystemCommand,
} from "./commands/DeleteFileSystemCommand";
import {
  type DeleteFileSystemPolicyCommandInput,
  type DeleteFileSystemPolicyCommandOutput,
  DeleteFileSystemPolicyCommand,
} from "./commands/DeleteFileSystemPolicyCommand";
import {
  type DeleteMountTargetCommandInput,
  type DeleteMountTargetCommandOutput,
  DeleteMountTargetCommand,
} from "./commands/DeleteMountTargetCommand";
import {
  type DeleteReplicationConfigurationCommandInput,
  type DeleteReplicationConfigurationCommandOutput,
  DeleteReplicationConfigurationCommand,
} from "./commands/DeleteReplicationConfigurationCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DescribeAccessPointsCommandInput,
  type DescribeAccessPointsCommandOutput,
  DescribeAccessPointsCommand,
} from "./commands/DescribeAccessPointsCommand";
import {
  type DescribeAccountPreferencesCommandInput,
  type DescribeAccountPreferencesCommandOutput,
  DescribeAccountPreferencesCommand,
} from "./commands/DescribeAccountPreferencesCommand";
import {
  type DescribeBackupPolicyCommandInput,
  type DescribeBackupPolicyCommandOutput,
  DescribeBackupPolicyCommand,
} from "./commands/DescribeBackupPolicyCommand";
import {
  type DescribeFileSystemPolicyCommandInput,
  type DescribeFileSystemPolicyCommandOutput,
  DescribeFileSystemPolicyCommand,
} from "./commands/DescribeFileSystemPolicyCommand";
import {
  type DescribeFileSystemsCommandInput,
  type DescribeFileSystemsCommandOutput,
  DescribeFileSystemsCommand,
} from "./commands/DescribeFileSystemsCommand";
import {
  type DescribeLifecycleConfigurationCommandInput,
  type DescribeLifecycleConfigurationCommandOutput,
  DescribeLifecycleConfigurationCommand,
} from "./commands/DescribeLifecycleConfigurationCommand";
import {
  type DescribeMountTargetsCommandInput,
  type DescribeMountTargetsCommandOutput,
  DescribeMountTargetsCommand,
} from "./commands/DescribeMountTargetsCommand";
import {
  type DescribeMountTargetSecurityGroupsCommandInput,
  type DescribeMountTargetSecurityGroupsCommandOutput,
  DescribeMountTargetSecurityGroupsCommand,
} from "./commands/DescribeMountTargetSecurityGroupsCommand";
import {
  type DescribeReplicationConfigurationsCommandInput,
  type DescribeReplicationConfigurationsCommandOutput,
  DescribeReplicationConfigurationsCommand,
} from "./commands/DescribeReplicationConfigurationsCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ModifyMountTargetSecurityGroupsCommandInput,
  type ModifyMountTargetSecurityGroupsCommandOutput,
  ModifyMountTargetSecurityGroupsCommand,
} from "./commands/ModifyMountTargetSecurityGroupsCommand";
import {
  type PutAccountPreferencesCommandInput,
  type PutAccountPreferencesCommandOutput,
  PutAccountPreferencesCommand,
} from "./commands/PutAccountPreferencesCommand";
import {
  type PutBackupPolicyCommandInput,
  type PutBackupPolicyCommandOutput,
  PutBackupPolicyCommand,
} from "./commands/PutBackupPolicyCommand";
import {
  type PutFileSystemPolicyCommandInput,
  type PutFileSystemPolicyCommandOutput,
  PutFileSystemPolicyCommand,
} from "./commands/PutFileSystemPolicyCommand";
import {
  type PutLifecycleConfigurationCommandInput,
  type PutLifecycleConfigurationCommandOutput,
  PutLifecycleConfigurationCommand,
} from "./commands/PutLifecycleConfigurationCommand";
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
  type UpdateFileSystemCommandInput,
  type UpdateFileSystemCommandOutput,
  UpdateFileSystemCommand,
} from "./commands/UpdateFileSystemCommand";
import {
  type UpdateFileSystemProtectionCommandInput,
  type UpdateFileSystemProtectionCommandOutput,
  UpdateFileSystemProtectionCommand,
} from "./commands/UpdateFileSystemProtectionCommand";
import { EFSClient } from "./EFSClient";
import { paginateDescribeAccessPoints } from "./pagination/DescribeAccessPointsPaginator";
import { paginateDescribeFileSystems } from "./pagination/DescribeFileSystemsPaginator";
import { paginateDescribeMountTargets } from "./pagination/DescribeMountTargetsPaginator";
import { paginateDescribeReplicationConfigurations } from "./pagination/DescribeReplicationConfigurationsPaginator";
import { paginateDescribeTags } from "./pagination/DescribeTagsPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";

const commands = {
  CreateAccessPointCommand,
  CreateFileSystemCommand,
  CreateMountTargetCommand,
  CreateReplicationConfigurationCommand,
  CreateTagsCommand,
  DeleteAccessPointCommand,
  DeleteFileSystemCommand,
  DeleteFileSystemPolicyCommand,
  DeleteMountTargetCommand,
  DeleteReplicationConfigurationCommand,
  DeleteTagsCommand,
  DescribeAccessPointsCommand,
  DescribeAccountPreferencesCommand,
  DescribeBackupPolicyCommand,
  DescribeFileSystemPolicyCommand,
  DescribeFileSystemsCommand,
  DescribeLifecycleConfigurationCommand,
  DescribeMountTargetsCommand,
  DescribeMountTargetSecurityGroupsCommand,
  DescribeReplicationConfigurationsCommand,
  DescribeTagsCommand,
  ListTagsForResourceCommand,
  ModifyMountTargetSecurityGroupsCommand,
  PutAccountPreferencesCommand,
  PutBackupPolicyCommand,
  PutFileSystemPolicyCommand,
  PutLifecycleConfigurationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateFileSystemCommand,
  UpdateFileSystemProtectionCommand,
};
const paginators = {
  paginateDescribeAccessPoints,
  paginateDescribeFileSystems,
  paginateDescribeMountTargets,
  paginateDescribeReplicationConfigurations,
  paginateDescribeTags,
  paginateListTagsForResource,
};

export interface EFS {
  /**
   * @see {@link CreateAccessPointCommand}
   */
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPointCommandOutput>;
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;
  createAccessPoint(
    args: CreateAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFileSystemCommand}
   */
  createFileSystem(
    args: CreateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileSystemCommandOutput>;
  createFileSystem(
    args: CreateFileSystemCommandInput,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;
  createFileSystem(
    args: CreateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMountTargetCommand}
   */
  createMountTarget(
    args: CreateMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMountTargetCommandOutput>;
  createMountTarget(
    args: CreateMountTargetCommandInput,
    cb: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): void;
  createMountTarget(
    args: CreateMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMountTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReplicationConfigurationCommand}
   */
  createReplicationConfiguration(
    args: CreateReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReplicationConfigurationCommandOutput>;
  createReplicationConfiguration(
    args: CreateReplicationConfigurationCommandInput,
    cb: (err: any, data?: CreateReplicationConfigurationCommandOutput) => void
  ): void;
  createReplicationConfiguration(
    args: CreateReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagsCommandOutput>;
  createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPointCommand}
   */
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPointCommandOutput>;
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;
  deleteAccessPoint(
    args: DeleteAccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileSystemCommand}
   */
  deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemCommandOutput>;
  deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;
  deleteFileSystem(
    args: DeleteFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileSystemPolicyCommand}
   */
  deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileSystemPolicyCommandOutput>;
  deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    cb: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): void;
  deleteFileSystemPolicy(
    args: DeleteFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileSystemPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMountTargetCommand}
   */
  deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMountTargetCommandOutput>;
  deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    cb: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): void;
  deleteMountTarget(
    args: DeleteMountTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMountTargetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReplicationConfigurationCommand}
   */
  deleteReplicationConfiguration(
    args: DeleteReplicationConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReplicationConfigurationCommandOutput>;
  deleteReplicationConfiguration(
    args: DeleteReplicationConfigurationCommandInput,
    cb: (err: any, data?: DeleteReplicationConfigurationCommandOutput) => void
  ): void;
  deleteReplicationConfiguration(
    args: DeleteReplicationConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReplicationConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessPointsCommand}
   */
  describeAccessPoints(): Promise<DescribeAccessPointsCommandOutput>;
  describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessPointsCommandOutput>;
  describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    cb: (err: any, data?: DescribeAccessPointsCommandOutput) => void
  ): void;
  describeAccessPoints(
    args: DescribeAccessPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountPreferencesCommand}
   */
  describeAccountPreferences(): Promise<DescribeAccountPreferencesCommandOutput>;
  describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountPreferencesCommandOutput>;
  describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    cb: (err: any, data?: DescribeAccountPreferencesCommandOutput) => void
  ): void;
  describeAccountPreferences(
    args: DescribeAccountPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupPolicyCommand}
   */
  describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupPolicyCommandOutput>;
  describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    cb: (err: any, data?: DescribeBackupPolicyCommandOutput) => void
  ): void;
  describeBackupPolicy(
    args: DescribeBackupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFileSystemPolicyCommand}
   */
  describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemPolicyCommandOutput>;
  describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    cb: (err: any, data?: DescribeFileSystemPolicyCommandOutput) => void
  ): void;
  describeFileSystemPolicy(
    args: DescribeFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFileSystemsCommand}
   */
  describeFileSystems(): Promise<DescribeFileSystemsCommandOutput>;
  describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemsCommandOutput>;
  describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    cb: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): void;
  describeFileSystems(
    args: DescribeFileSystemsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLifecycleConfigurationCommand}
   */
  describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLifecycleConfigurationCommandOutput>;
  describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    cb: (err: any, data?: DescribeLifecycleConfigurationCommandOutput) => void
  ): void;
  describeLifecycleConfiguration(
    args: DescribeLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLifecycleConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMountTargetsCommand}
   */
  describeMountTargets(): Promise<DescribeMountTargetsCommandOutput>;
  describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMountTargetsCommandOutput>;
  describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    cb: (err: any, data?: DescribeMountTargetsCommandOutput) => void
  ): void;
  describeMountTargets(
    args: DescribeMountTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMountTargetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMountTargetSecurityGroupsCommand}
   */
  describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMountTargetSecurityGroupsCommandOutput>;
  describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    cb: (err: any, data?: DescribeMountTargetSecurityGroupsCommandOutput) => void
  ): void;
  describeMountTargetSecurityGroups(
    args: DescribeMountTargetSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMountTargetSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReplicationConfigurationsCommand}
   */
  describeReplicationConfigurations(): Promise<DescribeReplicationConfigurationsCommandOutput>;
  describeReplicationConfigurations(
    args: DescribeReplicationConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReplicationConfigurationsCommandOutput>;
  describeReplicationConfigurations(
    args: DescribeReplicationConfigurationsCommandInput,
    cb: (err: any, data?: DescribeReplicationConfigurationsCommandOutput) => void
  ): void;
  describeReplicationConfigurations(
    args: DescribeReplicationConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReplicationConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
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
   * @see {@link ModifyMountTargetSecurityGroupsCommand}
   */
  modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyMountTargetSecurityGroupsCommandOutput>;
  modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    cb: (err: any, data?: ModifyMountTargetSecurityGroupsCommandOutput) => void
  ): void;
  modifyMountTargetSecurityGroups(
    args: ModifyMountTargetSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyMountTargetSecurityGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAccountPreferencesCommand}
   */
  putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccountPreferencesCommandOutput>;
  putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    cb: (err: any, data?: PutAccountPreferencesCommandOutput) => void
  ): void;
  putAccountPreferences(
    args: PutAccountPreferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccountPreferencesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBackupPolicyCommand}
   */
  putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupPolicyCommandOutput>;
  putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    cb: (err: any, data?: PutBackupPolicyCommandOutput) => void
  ): void;
  putBackupPolicy(
    args: PutBackupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFileSystemPolicyCommand}
   */
  putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutFileSystemPolicyCommandOutput>;
  putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    cb: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): void;
  putFileSystemPolicy(
    args: PutFileSystemPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutFileSystemPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLifecycleConfigurationCommand}
   */
  putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecycleConfigurationCommandOutput>;
  putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    cb: (err: any, data?: PutLifecycleConfigurationCommandOutput) => void
  ): void;
  putLifecycleConfiguration(
    args: PutLifecycleConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecycleConfigurationCommandOutput) => void
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
   * @see {@link UpdateFileSystemCommand}
   */
  updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileSystemCommandOutput>;
  updateFileSystem(
    args: UpdateFileSystemCommandInput,
    cb: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): void;
  updateFileSystem(
    args: UpdateFileSystemCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileSystemCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFileSystemProtectionCommand}
   */
  updateFileSystemProtection(
    args: UpdateFileSystemProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileSystemProtectionCommandOutput>;
  updateFileSystemProtection(
    args: UpdateFileSystemProtectionCommandInput,
    cb: (err: any, data?: UpdateFileSystemProtectionCommandOutput) => void
  ): void;
  updateFileSystemProtection(
    args: UpdateFileSystemProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileSystemProtectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessPointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeAccessPointsCommandOutput}.
   */
  paginateDescribeAccessPoints(
    args?: DescribeAccessPointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeAccessPointsCommandOutput>;

  /**
   * @see {@link DescribeFileSystemsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFileSystemsCommandOutput}.
   */
  paginateDescribeFileSystems(
    args?: DescribeFileSystemsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFileSystemsCommandOutput>;

  /**
   * @see {@link DescribeMountTargetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeMountTargetsCommandOutput}.
   */
  paginateDescribeMountTargets(
    args?: DescribeMountTargetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeMountTargetsCommandOutput>;

  /**
   * @see {@link DescribeReplicationConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeReplicationConfigurationsCommandOutput}.
   */
  paginateDescribeReplicationConfigurations(
    args?: DescribeReplicationConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeReplicationConfigurationsCommandOutput>;

  /**
   * @see {@link DescribeTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeTagsCommandOutput}.
   */
  paginateDescribeTags(
    args: DescribeTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeTagsCommandOutput>;

  /**
   * @see {@link ListTagsForResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsForResourceCommandOutput}.
   */
  paginateListTagsForResource(
    args: ListTagsForResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsForResourceCommandOutput>;
}

/**
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for
 *       use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With
 *         Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you
 *       add and remove files, so that your applications have the storage they need, when they need it.
 *       For more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and
 *       the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System
 *         User Guide</a>.</p>
 * @public
 */
export class EFS extends EFSClient implements EFS {}
createAggregatedClient(commands, EFS, { paginators });
