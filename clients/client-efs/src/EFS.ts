// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAccessPointCommand,
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
} from "./commands/CreateAccessPointCommand";
import {
  CreateFileSystemCommand,
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput,
} from "./commands/CreateFileSystemCommand";
import {
  CreateMountTargetCommand,
  CreateMountTargetCommandInput,
  CreateMountTargetCommandOutput,
} from "./commands/CreateMountTargetCommand";
import {
  CreateReplicationConfigurationCommand,
  CreateReplicationConfigurationCommandInput,
  CreateReplicationConfigurationCommandOutput,
} from "./commands/CreateReplicationConfigurationCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  DeleteAccessPointCommand,
  DeleteAccessPointCommandInput,
  DeleteAccessPointCommandOutput,
} from "./commands/DeleteAccessPointCommand";
import {
  DeleteFileSystemCommand,
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
} from "./commands/DeleteFileSystemCommand";
import {
  DeleteFileSystemPolicyCommand,
  DeleteFileSystemPolicyCommandInput,
  DeleteFileSystemPolicyCommandOutput,
} from "./commands/DeleteFileSystemPolicyCommand";
import {
  DeleteMountTargetCommand,
  DeleteMountTargetCommandInput,
  DeleteMountTargetCommandOutput,
} from "./commands/DeleteMountTargetCommand";
import {
  DeleteReplicationConfigurationCommand,
  DeleteReplicationConfigurationCommandInput,
  DeleteReplicationConfigurationCommandOutput,
} from "./commands/DeleteReplicationConfigurationCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeAccessPointsCommand,
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "./commands/DescribeAccessPointsCommand";
import {
  DescribeAccountPreferencesCommand,
  DescribeAccountPreferencesCommandInput,
  DescribeAccountPreferencesCommandOutput,
} from "./commands/DescribeAccountPreferencesCommand";
import {
  DescribeBackupPolicyCommand,
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
} from "./commands/DescribeBackupPolicyCommand";
import {
  DescribeFileSystemPolicyCommand,
  DescribeFileSystemPolicyCommandInput,
  DescribeFileSystemPolicyCommandOutput,
} from "./commands/DescribeFileSystemPolicyCommand";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeLifecycleConfigurationCommand,
  DescribeLifecycleConfigurationCommandInput,
  DescribeLifecycleConfigurationCommandOutput,
} from "./commands/DescribeLifecycleConfigurationCommand";
import {
  DescribeMountTargetsCommand,
  DescribeMountTargetsCommandInput,
  DescribeMountTargetsCommandOutput,
} from "./commands/DescribeMountTargetsCommand";
import {
  DescribeMountTargetSecurityGroupsCommand,
  DescribeMountTargetSecurityGroupsCommandInput,
  DescribeMountTargetSecurityGroupsCommandOutput,
} from "./commands/DescribeMountTargetSecurityGroupsCommand";
import {
  DescribeReplicationConfigurationsCommand,
  DescribeReplicationConfigurationsCommandInput,
  DescribeReplicationConfigurationsCommandOutput,
} from "./commands/DescribeReplicationConfigurationsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ModifyMountTargetSecurityGroupsCommand,
  ModifyMountTargetSecurityGroupsCommandInput,
  ModifyMountTargetSecurityGroupsCommandOutput,
} from "./commands/ModifyMountTargetSecurityGroupsCommand";
import {
  PutAccountPreferencesCommand,
  PutAccountPreferencesCommandInput,
  PutAccountPreferencesCommandOutput,
} from "./commands/PutAccountPreferencesCommand";
import {
  PutBackupPolicyCommand,
  PutBackupPolicyCommandInput,
  PutBackupPolicyCommandOutput,
} from "./commands/PutBackupPolicyCommand";
import {
  PutFileSystemPolicyCommand,
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
} from "./commands/PutFileSystemPolicyCommand";
import {
  PutLifecycleConfigurationCommand,
  PutLifecycleConfigurationCommandInput,
  PutLifecycleConfigurationCommandOutput,
} from "./commands/PutLifecycleConfigurationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFileSystemCommand,
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
} from "./commands/UpdateFileSystemCommand";
import { EFSClient, EFSClientConfig } from "./EFSClient";

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
  createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
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
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessPointsCommand}
   */
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
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
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
  putBackupPolicy(args: PutBackupPolicyCommandInput, cb: (err: any, data?: PutBackupPolicyCommandOutput) => void): void;
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
}

/**
 * @public
 * <fullname>Amazon Elastic File System</fullname>
 *          <p>Amazon Elastic File System (Amazon EFS) provides simple, scalable file storage for
 *       use with Amazon EC2 Linux and Mac instances in the Amazon Web Services Cloud. With Amazon EFS, storage capacity is elastic, growing and shrinking automatically as you add and
 *       remove files, so that your applications have the storage they need, when they need it. For
 *       more information, see the <a href="https://docs.aws.amazon.com/efs/latest/ug/api-reference.html">Amazon Elastic File System API Reference</a> and the <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">Amazon Elastic File System User Guide</a>.</p>
 */
export class EFS extends EFSClient implements EFS {}
createAggregatedClient(commands, EFS);
