// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AssociateFileSystemAliasesCommandInput,
  type AssociateFileSystemAliasesCommandOutput,
  AssociateFileSystemAliasesCommand,
} from "./commands/AssociateFileSystemAliasesCommand";
import {
  type CancelDataRepositoryTaskCommandInput,
  type CancelDataRepositoryTaskCommandOutput,
  CancelDataRepositoryTaskCommand,
} from "./commands/CancelDataRepositoryTaskCommand";
import {
  type CopyBackupCommandInput,
  type CopyBackupCommandOutput,
  CopyBackupCommand,
} from "./commands/CopyBackupCommand";
import {
  type CopySnapshotAndUpdateVolumeCommandInput,
  type CopySnapshotAndUpdateVolumeCommandOutput,
  CopySnapshotAndUpdateVolumeCommand,
} from "./commands/CopySnapshotAndUpdateVolumeCommand";
import {
  type CreateAndAttachS3AccessPointCommandInput,
  type CreateAndAttachS3AccessPointCommandOutput,
  CreateAndAttachS3AccessPointCommand,
} from "./commands/CreateAndAttachS3AccessPointCommand";
import {
  type CreateBackupCommandInput,
  type CreateBackupCommandOutput,
  CreateBackupCommand,
} from "./commands/CreateBackupCommand";
import {
  type CreateDataRepositoryAssociationCommandInput,
  type CreateDataRepositoryAssociationCommandOutput,
  CreateDataRepositoryAssociationCommand,
} from "./commands/CreateDataRepositoryAssociationCommand";
import {
  type CreateDataRepositoryTaskCommandInput,
  type CreateDataRepositoryTaskCommandOutput,
  CreateDataRepositoryTaskCommand,
} from "./commands/CreateDataRepositoryTaskCommand";
import {
  type CreateFileCacheCommandInput,
  type CreateFileCacheCommandOutput,
  CreateFileCacheCommand,
} from "./commands/CreateFileCacheCommand";
import {
  type CreateFileSystemCommandInput,
  type CreateFileSystemCommandOutput,
  CreateFileSystemCommand,
} from "./commands/CreateFileSystemCommand";
import {
  type CreateFileSystemFromBackupCommandInput,
  type CreateFileSystemFromBackupCommandOutput,
  CreateFileSystemFromBackupCommand,
} from "./commands/CreateFileSystemFromBackupCommand";
import {
  type CreateSnapshotCommandInput,
  type CreateSnapshotCommandOutput,
  CreateSnapshotCommand,
} from "./commands/CreateSnapshotCommand";
import {
  type CreateStorageVirtualMachineCommandInput,
  type CreateStorageVirtualMachineCommandOutput,
  CreateStorageVirtualMachineCommand,
} from "./commands/CreateStorageVirtualMachineCommand";
import {
  type CreateVolumeCommandInput,
  type CreateVolumeCommandOutput,
  CreateVolumeCommand,
} from "./commands/CreateVolumeCommand";
import {
  type CreateVolumeFromBackupCommandInput,
  type CreateVolumeFromBackupCommandOutput,
  CreateVolumeFromBackupCommand,
} from "./commands/CreateVolumeFromBackupCommand";
import {
  type DeleteBackupCommandInput,
  type DeleteBackupCommandOutput,
  DeleteBackupCommand,
} from "./commands/DeleteBackupCommand";
import {
  type DeleteDataRepositoryAssociationCommandInput,
  type DeleteDataRepositoryAssociationCommandOutput,
  DeleteDataRepositoryAssociationCommand,
} from "./commands/DeleteDataRepositoryAssociationCommand";
import {
  type DeleteFileCacheCommandInput,
  type DeleteFileCacheCommandOutput,
  DeleteFileCacheCommand,
} from "./commands/DeleteFileCacheCommand";
import {
  type DeleteFileSystemCommandInput,
  type DeleteFileSystemCommandOutput,
  DeleteFileSystemCommand,
} from "./commands/DeleteFileSystemCommand";
import {
  type DeleteSnapshotCommandInput,
  type DeleteSnapshotCommandOutput,
  DeleteSnapshotCommand,
} from "./commands/DeleteSnapshotCommand";
import {
  type DeleteStorageVirtualMachineCommandInput,
  type DeleteStorageVirtualMachineCommandOutput,
  DeleteStorageVirtualMachineCommand,
} from "./commands/DeleteStorageVirtualMachineCommand";
import {
  type DeleteVolumeCommandInput,
  type DeleteVolumeCommandOutput,
  DeleteVolumeCommand,
} from "./commands/DeleteVolumeCommand";
import {
  type DescribeBackupsCommandInput,
  type DescribeBackupsCommandOutput,
  DescribeBackupsCommand,
} from "./commands/DescribeBackupsCommand";
import {
  type DescribeDataRepositoryAssociationsCommandInput,
  type DescribeDataRepositoryAssociationsCommandOutput,
  DescribeDataRepositoryAssociationsCommand,
} from "./commands/DescribeDataRepositoryAssociationsCommand";
import {
  type DescribeDataRepositoryTasksCommandInput,
  type DescribeDataRepositoryTasksCommandOutput,
  DescribeDataRepositoryTasksCommand,
} from "./commands/DescribeDataRepositoryTasksCommand";
import {
  type DescribeFileCachesCommandInput,
  type DescribeFileCachesCommandOutput,
  DescribeFileCachesCommand,
} from "./commands/DescribeFileCachesCommand";
import {
  type DescribeFileSystemAliasesCommandInput,
  type DescribeFileSystemAliasesCommandOutput,
  DescribeFileSystemAliasesCommand,
} from "./commands/DescribeFileSystemAliasesCommand";
import {
  type DescribeFileSystemsCommandInput,
  type DescribeFileSystemsCommandOutput,
  DescribeFileSystemsCommand,
} from "./commands/DescribeFileSystemsCommand";
import {
  type DescribeS3AccessPointAttachmentsCommandInput,
  type DescribeS3AccessPointAttachmentsCommandOutput,
  DescribeS3AccessPointAttachmentsCommand,
} from "./commands/DescribeS3AccessPointAttachmentsCommand";
import {
  type DescribeSharedVpcConfigurationCommandInput,
  type DescribeSharedVpcConfigurationCommandOutput,
  DescribeSharedVpcConfigurationCommand,
} from "./commands/DescribeSharedVpcConfigurationCommand";
import {
  type DescribeSnapshotsCommandInput,
  type DescribeSnapshotsCommandOutput,
  DescribeSnapshotsCommand,
} from "./commands/DescribeSnapshotsCommand";
import {
  type DescribeStorageVirtualMachinesCommandInput,
  type DescribeStorageVirtualMachinesCommandOutput,
  DescribeStorageVirtualMachinesCommand,
} from "./commands/DescribeStorageVirtualMachinesCommand";
import {
  type DescribeVolumesCommandInput,
  type DescribeVolumesCommandOutput,
  DescribeVolumesCommand,
} from "./commands/DescribeVolumesCommand";
import {
  type DetachAndDeleteS3AccessPointCommandInput,
  type DetachAndDeleteS3AccessPointCommandOutput,
  DetachAndDeleteS3AccessPointCommand,
} from "./commands/DetachAndDeleteS3AccessPointCommand";
import {
  type DisassociateFileSystemAliasesCommandInput,
  type DisassociateFileSystemAliasesCommandOutput,
  DisassociateFileSystemAliasesCommand,
} from "./commands/DisassociateFileSystemAliasesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ReleaseFileSystemNfsV3LocksCommandInput,
  type ReleaseFileSystemNfsV3LocksCommandOutput,
  ReleaseFileSystemNfsV3LocksCommand,
} from "./commands/ReleaseFileSystemNfsV3LocksCommand";
import {
  type RestoreVolumeFromSnapshotCommandInput,
  type RestoreVolumeFromSnapshotCommandOutput,
  RestoreVolumeFromSnapshotCommand,
} from "./commands/RestoreVolumeFromSnapshotCommand";
import {
  type StartMisconfiguredStateRecoveryCommandInput,
  type StartMisconfiguredStateRecoveryCommandOutput,
  StartMisconfiguredStateRecoveryCommand,
} from "./commands/StartMisconfiguredStateRecoveryCommand";
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
  type UpdateDataRepositoryAssociationCommandInput,
  type UpdateDataRepositoryAssociationCommandOutput,
  UpdateDataRepositoryAssociationCommand,
} from "./commands/UpdateDataRepositoryAssociationCommand";
import {
  type UpdateFileCacheCommandInput,
  type UpdateFileCacheCommandOutput,
  UpdateFileCacheCommand,
} from "./commands/UpdateFileCacheCommand";
import {
  type UpdateFileSystemCommandInput,
  type UpdateFileSystemCommandOutput,
  UpdateFileSystemCommand,
} from "./commands/UpdateFileSystemCommand";
import {
  type UpdateSharedVpcConfigurationCommandInput,
  type UpdateSharedVpcConfigurationCommandOutput,
  UpdateSharedVpcConfigurationCommand,
} from "./commands/UpdateSharedVpcConfigurationCommand";
import {
  type UpdateSnapshotCommandInput,
  type UpdateSnapshotCommandOutput,
  UpdateSnapshotCommand,
} from "./commands/UpdateSnapshotCommand";
import {
  type UpdateStorageVirtualMachineCommandInput,
  type UpdateStorageVirtualMachineCommandOutput,
  UpdateStorageVirtualMachineCommand,
} from "./commands/UpdateStorageVirtualMachineCommand";
import {
  type UpdateVolumeCommandInput,
  type UpdateVolumeCommandOutput,
  UpdateVolumeCommand,
} from "./commands/UpdateVolumeCommand";
import { FSxClient } from "./FSxClient";
import { paginateDescribeBackups } from "./pagination/DescribeBackupsPaginator";
import { paginateDescribeDataRepositoryAssociations } from "./pagination/DescribeDataRepositoryAssociationsPaginator";
import { paginateDescribeDataRepositoryTasks } from "./pagination/DescribeDataRepositoryTasksPaginator";
import { paginateDescribeFileCaches } from "./pagination/DescribeFileCachesPaginator";
import { paginateDescribeFileSystemAliases } from "./pagination/DescribeFileSystemAliasesPaginator";
import { paginateDescribeFileSystems } from "./pagination/DescribeFileSystemsPaginator";
import { paginateDescribeS3AccessPointAttachments } from "./pagination/DescribeS3AccessPointAttachmentsPaginator";
import { paginateDescribeSnapshots } from "./pagination/DescribeSnapshotsPaginator";
import { paginateDescribeStorageVirtualMachines } from "./pagination/DescribeStorageVirtualMachinesPaginator";
import { paginateDescribeVolumes } from "./pagination/DescribeVolumesPaginator";
import { paginateListTagsForResource } from "./pagination/ListTagsForResourcePaginator";

const commands = {
  AssociateFileSystemAliasesCommand,
  CancelDataRepositoryTaskCommand,
  CopyBackupCommand,
  CopySnapshotAndUpdateVolumeCommand,
  CreateAndAttachS3AccessPointCommand,
  CreateBackupCommand,
  CreateDataRepositoryAssociationCommand,
  CreateDataRepositoryTaskCommand,
  CreateFileCacheCommand,
  CreateFileSystemCommand,
  CreateFileSystemFromBackupCommand,
  CreateSnapshotCommand,
  CreateStorageVirtualMachineCommand,
  CreateVolumeCommand,
  CreateVolumeFromBackupCommand,
  DeleteBackupCommand,
  DeleteDataRepositoryAssociationCommand,
  DeleteFileCacheCommand,
  DeleteFileSystemCommand,
  DeleteSnapshotCommand,
  DeleteStorageVirtualMachineCommand,
  DeleteVolumeCommand,
  DescribeBackupsCommand,
  DescribeDataRepositoryAssociationsCommand,
  DescribeDataRepositoryTasksCommand,
  DescribeFileCachesCommand,
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemsCommand,
  DescribeS3AccessPointAttachmentsCommand,
  DescribeSharedVpcConfigurationCommand,
  DescribeSnapshotsCommand,
  DescribeStorageVirtualMachinesCommand,
  DescribeVolumesCommand,
  DetachAndDeleteS3AccessPointCommand,
  DisassociateFileSystemAliasesCommand,
  ListTagsForResourceCommand,
  ReleaseFileSystemNfsV3LocksCommand,
  RestoreVolumeFromSnapshotCommand,
  StartMisconfiguredStateRecoveryCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDataRepositoryAssociationCommand,
  UpdateFileCacheCommand,
  UpdateFileSystemCommand,
  UpdateSharedVpcConfigurationCommand,
  UpdateSnapshotCommand,
  UpdateStorageVirtualMachineCommand,
  UpdateVolumeCommand,
};
const paginators = {
  paginateDescribeBackups,
  paginateDescribeDataRepositoryAssociations,
  paginateDescribeDataRepositoryTasks,
  paginateDescribeFileCaches,
  paginateDescribeFileSystemAliases,
  paginateDescribeFileSystems,
  paginateDescribeS3AccessPointAttachments,
  paginateDescribeSnapshots,
  paginateDescribeStorageVirtualMachines,
  paginateDescribeVolumes,
  paginateListTagsForResource,
};

export interface FSx {
  /**
   * @see {@link AssociateFileSystemAliasesCommand}
   */
  associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFileSystemAliasesCommandOutput>;
  associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    cb: (err: any, data?: AssociateFileSystemAliasesCommandOutput) => void
  ): void;
  associateFileSystemAliases(
    args: AssociateFileSystemAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFileSystemAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelDataRepositoryTaskCommand}
   */
  cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelDataRepositoryTaskCommandOutput>;
  cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    cb: (err: any, data?: CancelDataRepositoryTaskCommandOutput) => void
  ): void;
  cancelDataRepositoryTask(
    args: CancelDataRepositoryTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelDataRepositoryTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyBackupCommand}
   */
  copyBackup(
    args: CopyBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyBackupCommandOutput>;
  copyBackup(
    args: CopyBackupCommandInput,
    cb: (err: any, data?: CopyBackupCommandOutput) => void
  ): void;
  copyBackup(
    args: CopyBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CopySnapshotAndUpdateVolumeCommand}
   */
  copySnapshotAndUpdateVolume(
    args: CopySnapshotAndUpdateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopySnapshotAndUpdateVolumeCommandOutput>;
  copySnapshotAndUpdateVolume(
    args: CopySnapshotAndUpdateVolumeCommandInput,
    cb: (err: any, data?: CopySnapshotAndUpdateVolumeCommandOutput) => void
  ): void;
  copySnapshotAndUpdateVolume(
    args: CopySnapshotAndUpdateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopySnapshotAndUpdateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAndAttachS3AccessPointCommand}
   */
  createAndAttachS3AccessPoint(
    args: CreateAndAttachS3AccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAndAttachS3AccessPointCommandOutput>;
  createAndAttachS3AccessPoint(
    args: CreateAndAttachS3AccessPointCommandInput,
    cb: (err: any, data?: CreateAndAttachS3AccessPointCommandOutput) => void
  ): void;
  createAndAttachS3AccessPoint(
    args: CreateAndAttachS3AccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAndAttachS3AccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(): Promise<CreateBackupCommandOutput>;
  createBackup(
    args: CreateBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupCommandOutput>;
  createBackup(
    args: CreateBackupCommandInput,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;
  createBackup(
    args: CreateBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataRepositoryAssociationCommand}
   */
  createDataRepositoryAssociation(
    args: CreateDataRepositoryAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataRepositoryAssociationCommandOutput>;
  createDataRepositoryAssociation(
    args: CreateDataRepositoryAssociationCommandInput,
    cb: (err: any, data?: CreateDataRepositoryAssociationCommandOutput) => void
  ): void;
  createDataRepositoryAssociation(
    args: CreateDataRepositoryAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataRepositoryAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataRepositoryTaskCommand}
   */
  createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataRepositoryTaskCommandOutput>;
  createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    cb: (err: any, data?: CreateDataRepositoryTaskCommandOutput) => void
  ): void;
  createDataRepositoryTask(
    args: CreateDataRepositoryTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataRepositoryTaskCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFileCacheCommand}
   */
  createFileCache(
    args: CreateFileCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileCacheCommandOutput>;
  createFileCache(
    args: CreateFileCacheCommandInput,
    cb: (err: any, data?: CreateFileCacheCommandOutput) => void
  ): void;
  createFileCache(
    args: CreateFileCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileCacheCommandOutput) => void
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
   * @see {@link CreateFileSystemFromBackupCommand}
   */
  createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFileSystemFromBackupCommandOutput>;
  createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    cb: (err: any, data?: CreateFileSystemFromBackupCommandOutput) => void
  ): void;
  createFileSystemFromBackup(
    args: CreateFileSystemFromBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFileSystemFromBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSnapshotCommand}
   */
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSnapshotCommandOutput>;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;
  createSnapshot(
    args: CreateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStorageVirtualMachineCommand}
   */
  createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageVirtualMachineCommandOutput>;
  createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    cb: (err: any, data?: CreateStorageVirtualMachineCommandOutput) => void
  ): void;
  createStorageVirtualMachine(
    args: CreateStorageVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageVirtualMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVolumeCommand}
   */
  createVolume(
    args: CreateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVolumeCommandOutput>;
  createVolume(
    args: CreateVolumeCommandInput,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;
  createVolume(
    args: CreateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVolumeFromBackupCommand}
   */
  createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVolumeFromBackupCommandOutput>;
  createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    cb: (err: any, data?: CreateVolumeFromBackupCommandOutput) => void
  ): void;
  createVolumeFromBackup(
    args: CreateVolumeFromBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVolumeFromBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupCommand}
   */
  deleteBackup(
    args: DeleteBackupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupCommandOutput>;
  deleteBackup(
    args: DeleteBackupCommandInput,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;
  deleteBackup(
    args: DeleteBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataRepositoryAssociationCommand}
   */
  deleteDataRepositoryAssociation(
    args: DeleteDataRepositoryAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataRepositoryAssociationCommandOutput>;
  deleteDataRepositoryAssociation(
    args: DeleteDataRepositoryAssociationCommandInput,
    cb: (err: any, data?: DeleteDataRepositoryAssociationCommandOutput) => void
  ): void;
  deleteDataRepositoryAssociation(
    args: DeleteDataRepositoryAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataRepositoryAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFileCacheCommand}
   */
  deleteFileCache(
    args: DeleteFileCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFileCacheCommandOutput>;
  deleteFileCache(
    args: DeleteFileCacheCommandInput,
    cb: (err: any, data?: DeleteFileCacheCommandOutput) => void
  ): void;
  deleteFileCache(
    args: DeleteFileCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFileCacheCommandOutput) => void
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
   * @see {@link DeleteSnapshotCommand}
   */
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSnapshotCommandOutput>;
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;
  deleteSnapshot(
    args: DeleteSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStorageVirtualMachineCommand}
   */
  deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageVirtualMachineCommandOutput>;
  deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    cb: (err: any, data?: DeleteStorageVirtualMachineCommandOutput) => void
  ): void;
  deleteStorageVirtualMachine(
    args: DeleteStorageVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageVirtualMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVolumeCommand}
   */
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVolumeCommandOutput>;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   */
  describeBackups(): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupsCommandOutput>;
  describeBackups(
    args: DescribeBackupsCommandInput,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataRepositoryAssociationsCommand}
   */
  describeDataRepositoryAssociations(): Promise<DescribeDataRepositoryAssociationsCommandOutput>;
  describeDataRepositoryAssociations(
    args: DescribeDataRepositoryAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataRepositoryAssociationsCommandOutput>;
  describeDataRepositoryAssociations(
    args: DescribeDataRepositoryAssociationsCommandInput,
    cb: (err: any, data?: DescribeDataRepositoryAssociationsCommandOutput) => void
  ): void;
  describeDataRepositoryAssociations(
    args: DescribeDataRepositoryAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataRepositoryAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataRepositoryTasksCommand}
   */
  describeDataRepositoryTasks(): Promise<DescribeDataRepositoryTasksCommandOutput>;
  describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataRepositoryTasksCommandOutput>;
  describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    cb: (err: any, data?: DescribeDataRepositoryTasksCommandOutput) => void
  ): void;
  describeDataRepositoryTasks(
    args: DescribeDataRepositoryTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataRepositoryTasksCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFileCachesCommand}
   */
  describeFileCaches(): Promise<DescribeFileCachesCommandOutput>;
  describeFileCaches(
    args: DescribeFileCachesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileCachesCommandOutput>;
  describeFileCaches(
    args: DescribeFileCachesCommandInput,
    cb: (err: any, data?: DescribeFileCachesCommandOutput) => void
  ): void;
  describeFileCaches(
    args: DescribeFileCachesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileCachesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFileSystemAliasesCommand}
   */
  describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFileSystemAliasesCommandOutput>;
  describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    cb: (err: any, data?: DescribeFileSystemAliasesCommandOutput) => void
  ): void;
  describeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFileSystemAliasesCommandOutput) => void
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
   * @see {@link DescribeS3AccessPointAttachmentsCommand}
   */
  describeS3AccessPointAttachments(): Promise<DescribeS3AccessPointAttachmentsCommandOutput>;
  describeS3AccessPointAttachments(
    args: DescribeS3AccessPointAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeS3AccessPointAttachmentsCommandOutput>;
  describeS3AccessPointAttachments(
    args: DescribeS3AccessPointAttachmentsCommandInput,
    cb: (err: any, data?: DescribeS3AccessPointAttachmentsCommandOutput) => void
  ): void;
  describeS3AccessPointAttachments(
    args: DescribeS3AccessPointAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeS3AccessPointAttachmentsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSharedVpcConfigurationCommand}
   */
  describeSharedVpcConfiguration(): Promise<DescribeSharedVpcConfigurationCommandOutput>;
  describeSharedVpcConfiguration(
    args: DescribeSharedVpcConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSharedVpcConfigurationCommandOutput>;
  describeSharedVpcConfiguration(
    args: DescribeSharedVpcConfigurationCommandInput,
    cb: (err: any, data?: DescribeSharedVpcConfigurationCommandOutput) => void
  ): void;
  describeSharedVpcConfiguration(
    args: DescribeSharedVpcConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSharedVpcConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSnapshotsCommand}
   */
  describeSnapshots(): Promise<DescribeSnapshotsCommandOutput>;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSnapshotsCommandOutput>;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;
  describeSnapshots(
    args: DescribeSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageVirtualMachinesCommand}
   */
  describeStorageVirtualMachines(): Promise<DescribeStorageVirtualMachinesCommandOutput>;
  describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageVirtualMachinesCommandOutput>;
  describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    cb: (err: any, data?: DescribeStorageVirtualMachinesCommandOutput) => void
  ): void;
  describeStorageVirtualMachines(
    args: DescribeStorageVirtualMachinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageVirtualMachinesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVolumesCommand}
   */
  describeVolumes(): Promise<DescribeVolumesCommandOutput>;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
  ): void;

  /**
   * @see {@link DetachAndDeleteS3AccessPointCommand}
   */
  detachAndDeleteS3AccessPoint(
    args: DetachAndDeleteS3AccessPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachAndDeleteS3AccessPointCommandOutput>;
  detachAndDeleteS3AccessPoint(
    args: DetachAndDeleteS3AccessPointCommandInput,
    cb: (err: any, data?: DetachAndDeleteS3AccessPointCommandOutput) => void
  ): void;
  detachAndDeleteS3AccessPoint(
    args: DetachAndDeleteS3AccessPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachAndDeleteS3AccessPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateFileSystemAliasesCommand}
   */
  disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateFileSystemAliasesCommandOutput>;
  disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    cb: (err: any, data?: DisassociateFileSystemAliasesCommandOutput) => void
  ): void;
  disassociateFileSystemAliases(
    args: DisassociateFileSystemAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateFileSystemAliasesCommandOutput) => void
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
   * @see {@link ReleaseFileSystemNfsV3LocksCommand}
   */
  releaseFileSystemNfsV3Locks(
    args: ReleaseFileSystemNfsV3LocksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReleaseFileSystemNfsV3LocksCommandOutput>;
  releaseFileSystemNfsV3Locks(
    args: ReleaseFileSystemNfsV3LocksCommandInput,
    cb: (err: any, data?: ReleaseFileSystemNfsV3LocksCommandOutput) => void
  ): void;
  releaseFileSystemNfsV3Locks(
    args: ReleaseFileSystemNfsV3LocksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReleaseFileSystemNfsV3LocksCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreVolumeFromSnapshotCommand}
   */
  restoreVolumeFromSnapshot(
    args: RestoreVolumeFromSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreVolumeFromSnapshotCommandOutput>;
  restoreVolumeFromSnapshot(
    args: RestoreVolumeFromSnapshotCommandInput,
    cb: (err: any, data?: RestoreVolumeFromSnapshotCommandOutput) => void
  ): void;
  restoreVolumeFromSnapshot(
    args: RestoreVolumeFromSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreVolumeFromSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMisconfiguredStateRecoveryCommand}
   */
  startMisconfiguredStateRecovery(
    args: StartMisconfiguredStateRecoveryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMisconfiguredStateRecoveryCommandOutput>;
  startMisconfiguredStateRecovery(
    args: StartMisconfiguredStateRecoveryCommandInput,
    cb: (err: any, data?: StartMisconfiguredStateRecoveryCommandOutput) => void
  ): void;
  startMisconfiguredStateRecovery(
    args: StartMisconfiguredStateRecoveryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMisconfiguredStateRecoveryCommandOutput) => void
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
   * @see {@link UpdateDataRepositoryAssociationCommand}
   */
  updateDataRepositoryAssociation(
    args: UpdateDataRepositoryAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataRepositoryAssociationCommandOutput>;
  updateDataRepositoryAssociation(
    args: UpdateDataRepositoryAssociationCommandInput,
    cb: (err: any, data?: UpdateDataRepositoryAssociationCommandOutput) => void
  ): void;
  updateDataRepositoryAssociation(
    args: UpdateDataRepositoryAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataRepositoryAssociationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFileCacheCommand}
   */
  updateFileCache(
    args: UpdateFileCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFileCacheCommandOutput>;
  updateFileCache(
    args: UpdateFileCacheCommandInput,
    cb: (err: any, data?: UpdateFileCacheCommandOutput) => void
  ): void;
  updateFileCache(
    args: UpdateFileCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFileCacheCommandOutput) => void
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
   * @see {@link UpdateSharedVpcConfigurationCommand}
   */
  updateSharedVpcConfiguration(): Promise<UpdateSharedVpcConfigurationCommandOutput>;
  updateSharedVpcConfiguration(
    args: UpdateSharedVpcConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSharedVpcConfigurationCommandOutput>;
  updateSharedVpcConfiguration(
    args: UpdateSharedVpcConfigurationCommandInput,
    cb: (err: any, data?: UpdateSharedVpcConfigurationCommandOutput) => void
  ): void;
  updateSharedVpcConfiguration(
    args: UpdateSharedVpcConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSharedVpcConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSnapshotCommand}
   */
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCommandOutput>;
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSnapshotCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateStorageVirtualMachineCommand}
   */
  updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateStorageVirtualMachineCommandOutput>;
  updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    cb: (err: any, data?: UpdateStorageVirtualMachineCommandOutput) => void
  ): void;
  updateStorageVirtualMachine(
    args: UpdateStorageVirtualMachineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStorageVirtualMachineCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVolumeCommand}
   */
  updateVolume(
    args: UpdateVolumeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVolumeCommandOutput>;
  updateVolume(
    args: UpdateVolumeCommandInput,
    cb: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): void;
  updateVolume(
    args: UpdateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeBackupsCommandOutput}.
   */
  paginateDescribeBackups(
    args?: DescribeBackupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeBackupsCommandOutput>;

  /**
   * @see {@link DescribeDataRepositoryAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDataRepositoryAssociationsCommandOutput}.
   */
  paginateDescribeDataRepositoryAssociations(
    args?: DescribeDataRepositoryAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDataRepositoryAssociationsCommandOutput>;

  /**
   * @see {@link DescribeDataRepositoryTasksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeDataRepositoryTasksCommandOutput}.
   */
  paginateDescribeDataRepositoryTasks(
    args?: DescribeDataRepositoryTasksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeDataRepositoryTasksCommandOutput>;

  /**
   * @see {@link DescribeFileCachesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFileCachesCommandOutput}.
   */
  paginateDescribeFileCaches(
    args?: DescribeFileCachesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFileCachesCommandOutput>;

  /**
   * @see {@link DescribeFileSystemAliasesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeFileSystemAliasesCommandOutput}.
   */
  paginateDescribeFileSystemAliases(
    args: DescribeFileSystemAliasesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeFileSystemAliasesCommandOutput>;

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
   * @see {@link DescribeS3AccessPointAttachmentsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeS3AccessPointAttachmentsCommandOutput}.
   */
  paginateDescribeS3AccessPointAttachments(
    args?: DescribeS3AccessPointAttachmentsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeS3AccessPointAttachmentsCommandOutput>;

  /**
   * @see {@link DescribeSnapshotsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeSnapshotsCommandOutput}.
   */
  paginateDescribeSnapshots(
    args?: DescribeSnapshotsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeSnapshotsCommandOutput>;

  /**
   * @see {@link DescribeStorageVirtualMachinesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeStorageVirtualMachinesCommandOutput}.
   */
  paginateDescribeStorageVirtualMachines(
    args?: DescribeStorageVirtualMachinesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeStorageVirtualMachinesCommandOutput>;

  /**
   * @see {@link DescribeVolumesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeVolumesCommandOutput}.
   */
  paginateDescribeVolumes(
    args?: DescribeVolumesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeVolumesCommandOutput>;

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
 * <p>Amazon FSx is a fully managed service that makes it easy for storage and
 *             application administrators to launch and use shared file storage.</p>
 * @public
 */
export class FSx extends FSxClient implements FSx {}
createAggregatedClient(commands, FSx, { paginators });
