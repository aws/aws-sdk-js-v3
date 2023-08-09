// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateFileSystemAliasesCommand,
  AssociateFileSystemAliasesCommandInput,
  AssociateFileSystemAliasesCommandOutput,
} from "./commands/AssociateFileSystemAliasesCommand";
import {
  CancelDataRepositoryTaskCommand,
  CancelDataRepositoryTaskCommandInput,
  CancelDataRepositoryTaskCommandOutput,
} from "./commands/CancelDataRepositoryTaskCommand";
import { CopyBackupCommand, CopyBackupCommandInput, CopyBackupCommandOutput } from "./commands/CopyBackupCommand";
import {
  CreateBackupCommand,
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
} from "./commands/CreateBackupCommand";
import {
  CreateDataRepositoryAssociationCommand,
  CreateDataRepositoryAssociationCommandInput,
  CreateDataRepositoryAssociationCommandOutput,
} from "./commands/CreateDataRepositoryAssociationCommand";
import {
  CreateDataRepositoryTaskCommand,
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
} from "./commands/CreateDataRepositoryTaskCommand";
import {
  CreateFileCacheCommand,
  CreateFileCacheCommandInput,
  CreateFileCacheCommandOutput,
} from "./commands/CreateFileCacheCommand";
import {
  CreateFileSystemCommand,
  CreateFileSystemCommandInput,
  CreateFileSystemCommandOutput,
} from "./commands/CreateFileSystemCommand";
import {
  CreateFileSystemFromBackupCommand,
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
} from "./commands/CreateFileSystemFromBackupCommand";
import {
  CreateSnapshotCommand,
  CreateSnapshotCommandInput,
  CreateSnapshotCommandOutput,
} from "./commands/CreateSnapshotCommand";
import {
  CreateStorageVirtualMachineCommand,
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
} from "./commands/CreateStorageVirtualMachineCommand";
import {
  CreateVolumeCommand,
  CreateVolumeCommandInput,
  CreateVolumeCommandOutput,
} from "./commands/CreateVolumeCommand";
import {
  CreateVolumeFromBackupCommand,
  CreateVolumeFromBackupCommandInput,
  CreateVolumeFromBackupCommandOutput,
} from "./commands/CreateVolumeFromBackupCommand";
import {
  DeleteBackupCommand,
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
} from "./commands/DeleteBackupCommand";
import {
  DeleteDataRepositoryAssociationCommand,
  DeleteDataRepositoryAssociationCommandInput,
  DeleteDataRepositoryAssociationCommandOutput,
} from "./commands/DeleteDataRepositoryAssociationCommand";
import {
  DeleteFileCacheCommand,
  DeleteFileCacheCommandInput,
  DeleteFileCacheCommandOutput,
} from "./commands/DeleteFileCacheCommand";
import {
  DeleteFileSystemCommand,
  DeleteFileSystemCommandInput,
  DeleteFileSystemCommandOutput,
} from "./commands/DeleteFileSystemCommand";
import {
  DeleteSnapshotCommand,
  DeleteSnapshotCommandInput,
  DeleteSnapshotCommandOutput,
} from "./commands/DeleteSnapshotCommand";
import {
  DeleteStorageVirtualMachineCommand,
  DeleteStorageVirtualMachineCommandInput,
  DeleteStorageVirtualMachineCommandOutput,
} from "./commands/DeleteStorageVirtualMachineCommand";
import {
  DeleteVolumeCommand,
  DeleteVolumeCommandInput,
  DeleteVolumeCommandOutput,
} from "./commands/DeleteVolumeCommand";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "./commands/DescribeBackupsCommand";
import {
  DescribeDataRepositoryAssociationsCommand,
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput,
} from "./commands/DescribeDataRepositoryAssociationsCommand";
import {
  DescribeDataRepositoryTasksCommand,
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "./commands/DescribeDataRepositoryTasksCommand";
import {
  DescribeFileCachesCommand,
  DescribeFileCachesCommandInput,
  DescribeFileCachesCommandOutput,
} from "./commands/DescribeFileCachesCommand";
import {
  DescribeFileSystemAliasesCommand,
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "./commands/DescribeFileSystemAliasesCommand";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "./commands/DescribeFileSystemsCommand";
import {
  DescribeSnapshotsCommand,
  DescribeSnapshotsCommandInput,
  DescribeSnapshotsCommandOutput,
} from "./commands/DescribeSnapshotsCommand";
import {
  DescribeStorageVirtualMachinesCommand,
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "./commands/DescribeStorageVirtualMachinesCommand";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "./commands/DescribeVolumesCommand";
import {
  DisassociateFileSystemAliasesCommand,
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
} from "./commands/DisassociateFileSystemAliasesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ReleaseFileSystemNfsV3LocksCommand,
  ReleaseFileSystemNfsV3LocksCommandInput,
  ReleaseFileSystemNfsV3LocksCommandOutput,
} from "./commands/ReleaseFileSystemNfsV3LocksCommand";
import {
  RestoreVolumeFromSnapshotCommand,
  RestoreVolumeFromSnapshotCommandInput,
  RestoreVolumeFromSnapshotCommandOutput,
} from "./commands/RestoreVolumeFromSnapshotCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDataRepositoryAssociationCommand,
  UpdateDataRepositoryAssociationCommandInput,
  UpdateDataRepositoryAssociationCommandOutput,
} from "./commands/UpdateDataRepositoryAssociationCommand";
import {
  UpdateFileCacheCommand,
  UpdateFileCacheCommandInput,
  UpdateFileCacheCommandOutput,
} from "./commands/UpdateFileCacheCommand";
import {
  UpdateFileSystemCommand,
  UpdateFileSystemCommandInput,
  UpdateFileSystemCommandOutput,
} from "./commands/UpdateFileSystemCommand";
import {
  UpdateSnapshotCommand,
  UpdateSnapshotCommandInput,
  UpdateSnapshotCommandOutput,
} from "./commands/UpdateSnapshotCommand";
import {
  UpdateStorageVirtualMachineCommand,
  UpdateStorageVirtualMachineCommandInput,
  UpdateStorageVirtualMachineCommandOutput,
} from "./commands/UpdateStorageVirtualMachineCommand";
import {
  UpdateVolumeCommand,
  UpdateVolumeCommandInput,
  UpdateVolumeCommandOutput,
} from "./commands/UpdateVolumeCommand";
import { FSxClient, FSxClientConfig } from "./FSxClient";

const commands = {
  AssociateFileSystemAliasesCommand,
  CancelDataRepositoryTaskCommand,
  CopyBackupCommand,
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
  DescribeSnapshotsCommand,
  DescribeStorageVirtualMachinesCommand,
  DescribeVolumesCommand,
  DisassociateFileSystemAliasesCommand,
  ListTagsForResourceCommand,
  ReleaseFileSystemNfsV3LocksCommand,
  RestoreVolumeFromSnapshotCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDataRepositoryAssociationCommand,
  UpdateFileCacheCommand,
  UpdateFileSystemCommand,
  UpdateSnapshotCommand,
  UpdateStorageVirtualMachineCommand,
  UpdateVolumeCommand,
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
  copyBackup(args: CopyBackupCommandInput, options?: __HttpHandlerOptions): Promise<CopyBackupCommandOutput>;
  copyBackup(args: CopyBackupCommandInput, cb: (err: any, data?: CopyBackupCommandOutput) => void): void;
  copyBackup(
    args: CopyBackupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyBackupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupCommand}
   */
  createBackup(args: CreateBackupCommandInput, options?: __HttpHandlerOptions): Promise<CreateBackupCommandOutput>;
  createBackup(args: CreateBackupCommandInput, cb: (err: any, data?: CreateBackupCommandOutput) => void): void;
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
  createFileCache(args: CreateFileCacheCommandInput, cb: (err: any, data?: CreateFileCacheCommandOutput) => void): void;
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
  createSnapshot(args: CreateSnapshotCommandInput, cb: (err: any, data?: CreateSnapshotCommandOutput) => void): void;
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
  createVolume(args: CreateVolumeCommandInput, options?: __HttpHandlerOptions): Promise<CreateVolumeCommandOutput>;
  createVolume(args: CreateVolumeCommandInput, cb: (err: any, data?: CreateVolumeCommandOutput) => void): void;
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
  deleteBackup(args: DeleteBackupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBackupCommandOutput>;
  deleteBackup(args: DeleteBackupCommandInput, cb: (err: any, data?: DeleteBackupCommandOutput) => void): void;
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
  deleteFileCache(args: DeleteFileCacheCommandInput, cb: (err: any, data?: DeleteFileCacheCommandOutput) => void): void;
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
  deleteSnapshot(args: DeleteSnapshotCommandInput, cb: (err: any, data?: DeleteSnapshotCommandOutput) => void): void;
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
  deleteVolume(args: DeleteVolumeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVolumeCommandOutput>;
  deleteVolume(args: DeleteVolumeCommandInput, cb: (err: any, data?: DeleteVolumeCommandOutput) => void): void;
  deleteVolume(
    args: DeleteVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVolumeCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupsCommand}
   */
  describeBackups(
    args: DescribeBackupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupsCommandOutput>;
  describeBackups(args: DescribeBackupsCommandInput, cb: (err: any, data?: DescribeBackupsCommandOutput) => void): void;
  describeBackups(
    args: DescribeBackupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDataRepositoryAssociationsCommand}
   */
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
   * @see {@link DescribeSnapshotsCommand}
   */
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
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVolumesCommandOutput>;
  describeVolumes(args: DescribeVolumesCommandInput, cb: (err: any, data?: DescribeVolumesCommandOutput) => void): void;
  describeVolumes(
    args: DescribeVolumesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVolumesCommandOutput) => void
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
  updateFileCache(args: UpdateFileCacheCommandInput, cb: (err: any, data?: UpdateFileCacheCommandOutput) => void): void;
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
   * @see {@link UpdateSnapshotCommand}
   */
  updateSnapshot(
    args: UpdateSnapshotCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSnapshotCommandOutput>;
  updateSnapshot(args: UpdateSnapshotCommandInput, cb: (err: any, data?: UpdateSnapshotCommandOutput) => void): void;
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
  updateVolume(args: UpdateVolumeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVolumeCommandOutput>;
  updateVolume(args: UpdateVolumeCommandInput, cb: (err: any, data?: UpdateVolumeCommandOutput) => void): void;
  updateVolume(
    args: UpdateVolumeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVolumeCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon FSx is a fully managed service that makes it easy for storage and
 *             application administrators to launch and use shared file storage.</p>
 */
export class FSx extends FSxClient implements FSx {}
createAggregatedClient(commands, FSx);
