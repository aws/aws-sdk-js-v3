// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import {
  AssociateFileSystemAliasesCommandInput,
  AssociateFileSystemAliasesCommandOutput,
} from "../commands/AssociateFileSystemAliasesCommand";
import {
  CancelDataRepositoryTaskCommandInput,
  CancelDataRepositoryTaskCommandOutput,
} from "../commands/CancelDataRepositoryTaskCommand";
import { CopyBackupCommandInput, CopyBackupCommandOutput } from "../commands/CopyBackupCommand";
import { CreateBackupCommandInput, CreateBackupCommandOutput } from "../commands/CreateBackupCommand";
import {
  CreateDataRepositoryAssociationCommandInput,
  CreateDataRepositoryAssociationCommandOutput,
} from "../commands/CreateDataRepositoryAssociationCommand";
import {
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
} from "../commands/CreateDataRepositoryTaskCommand";
import { CreateFileCacheCommandInput, CreateFileCacheCommandOutput } from "../commands/CreateFileCacheCommand";
import { CreateFileSystemCommandInput, CreateFileSystemCommandOutput } from "../commands/CreateFileSystemCommand";
import {
  CreateFileSystemFromBackupCommandInput,
  CreateFileSystemFromBackupCommandOutput,
} from "../commands/CreateFileSystemFromBackupCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "../commands/CreateSnapshotCommand";
import {
  CreateStorageVirtualMachineCommandInput,
  CreateStorageVirtualMachineCommandOutput,
} from "../commands/CreateStorageVirtualMachineCommand";
import { CreateVolumeCommandInput, CreateVolumeCommandOutput } from "../commands/CreateVolumeCommand";
import {
  CreateVolumeFromBackupCommandInput,
  CreateVolumeFromBackupCommandOutput,
} from "../commands/CreateVolumeFromBackupCommand";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput } from "../commands/DeleteBackupCommand";
import {
  DeleteDataRepositoryAssociationCommandInput,
  DeleteDataRepositoryAssociationCommandOutput,
} from "../commands/DeleteDataRepositoryAssociationCommand";
import { DeleteFileCacheCommandInput, DeleteFileCacheCommandOutput } from "../commands/DeleteFileCacheCommand";
import { DeleteFileSystemCommandInput, DeleteFileSystemCommandOutput } from "../commands/DeleteFileSystemCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "../commands/DeleteSnapshotCommand";
import {
  DeleteStorageVirtualMachineCommandInput,
  DeleteStorageVirtualMachineCommandOutput,
} from "../commands/DeleteStorageVirtualMachineCommand";
import { DeleteVolumeCommandInput, DeleteVolumeCommandOutput } from "../commands/DeleteVolumeCommand";
import { DescribeBackupsCommandInput, DescribeBackupsCommandOutput } from "../commands/DescribeBackupsCommand";
import {
  DescribeDataRepositoryAssociationsCommandInput,
  DescribeDataRepositoryAssociationsCommandOutput,
} from "../commands/DescribeDataRepositoryAssociationsCommand";
import {
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "../commands/DescribeDataRepositoryTasksCommand";
import { DescribeFileCachesCommandInput, DescribeFileCachesCommandOutput } from "../commands/DescribeFileCachesCommand";
import {
  DescribeFileSystemAliasesCommandInput,
  DescribeFileSystemAliasesCommandOutput,
} from "../commands/DescribeFileSystemAliasesCommand";
import {
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput } from "../commands/DescribeSnapshotsCommand";
import {
  DescribeStorageVirtualMachinesCommandInput,
  DescribeStorageVirtualMachinesCommandOutput,
} from "../commands/DescribeStorageVirtualMachinesCommand";
import { DescribeVolumesCommandInput, DescribeVolumesCommandOutput } from "../commands/DescribeVolumesCommand";
import {
  DisassociateFileSystemAliasesCommandInput,
  DisassociateFileSystemAliasesCommandOutput,
} from "../commands/DisassociateFileSystemAliasesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  ReleaseFileSystemNfsV3LocksCommandInput,
  ReleaseFileSystemNfsV3LocksCommandOutput,
} from "../commands/ReleaseFileSystemNfsV3LocksCommand";
import {
  RestoreVolumeFromSnapshotCommandInput,
  RestoreVolumeFromSnapshotCommandOutput,
} from "../commands/RestoreVolumeFromSnapshotCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import {
  UpdateDataRepositoryAssociationCommandInput,
  UpdateDataRepositoryAssociationCommandOutput,
} from "../commands/UpdateDataRepositoryAssociationCommand";
import { UpdateFileCacheCommandInput, UpdateFileCacheCommandOutput } from "../commands/UpdateFileCacheCommand";
import { UpdateFileSystemCommandInput, UpdateFileSystemCommandOutput } from "../commands/UpdateFileSystemCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "../commands/UpdateSnapshotCommand";
import {
  UpdateStorageVirtualMachineCommandInput,
  UpdateStorageVirtualMachineCommandOutput,
} from "../commands/UpdateStorageVirtualMachineCommand";
import { UpdateVolumeCommandInput, UpdateVolumeCommandOutput } from "../commands/UpdateVolumeCommand";
import { FSxServiceException as __BaseException } from "../models/FSxServiceException";
import {
  ActiveDirectoryError,
  AdministrativeAction,
  AssociateFileSystemAliasesRequest,
  AutocommitPeriod,
  AutoExportPolicy,
  AutoImportPolicy,
  Backup,
  BackupBeingCopied,
  BackupInProgress,
  BackupNotFound,
  BackupRestoring,
  BadRequest,
  CancelDataRepositoryTaskRequest,
  CompletionReport,
  CopyBackupRequest,
  CopyBackupResponse,
  CreateBackupRequest,
  CreateBackupResponse,
  CreateDataRepositoryAssociationRequest,
  CreateDataRepositoryAssociationResponse,
  CreateDataRepositoryTaskRequest,
  CreateDataRepositoryTaskResponse,
  CreateFileCacheLustreConfiguration,
  CreateFileCacheRequest,
  CreateFileCacheResponse,
  CreateFileSystemFromBackupRequest,
  CreateFileSystemFromBackupResponse,
  CreateFileSystemLustreConfiguration,
  CreateFileSystemOntapConfiguration,
  CreateFileSystemOpenZFSConfiguration,
  CreateFileSystemRequest,
  CreateFileSystemResponse,
  CreateFileSystemWindowsConfiguration,
  CreateOntapVolumeConfiguration,
  CreateOpenZFSOriginSnapshotConfiguration,
  CreateOpenZFSVolumeConfiguration,
  CreateSnaplockConfiguration,
  CreateSnapshotRequest,
  CreateSnapshotResponse,
  CreateStorageVirtualMachineRequest,
  CreateStorageVirtualMachineResponse,
  CreateSvmActiveDirectoryConfiguration,
  CreateVolumeFromBackupRequest,
  CreateVolumeFromBackupResponse,
  CreateVolumeRequest,
  CreateVolumeResponse,
  DataRepositoryAssociation,
  DataRepositoryAssociationNotFound,
  DataRepositoryTask,
  DataRepositoryTaskEnded,
  DataRepositoryTaskExecuting,
  DataRepositoryTaskFilter,
  DataRepositoryTaskNotFound,
  DataRepositoryTaskStatus,
  DeleteBackupRequest,
  DeleteDataRepositoryAssociationRequest,
  DeleteFileCacheRequest,
  DeleteFileSystemLustreConfiguration,
  DeleteFileSystemOpenZFSConfiguration,
  DeleteFileSystemOpenZFSOption,
  DeleteFileSystemRequest,
  DeleteFileSystemWindowsConfiguration,
  DeleteOpenZFSVolumeOption,
  DeleteSnapshotRequest,
  DeleteStorageVirtualMachineRequest,
  DeleteVolumeOntapConfiguration,
  DeleteVolumeOpenZFSConfiguration,
  DeleteVolumeRequest,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeDataRepositoryAssociationsRequest,
  DescribeDataRepositoryAssociationsResponse,
  DescribeDataRepositoryTasksRequest,
  DescribeDataRepositoryTasksResponse,
  DescribeFileCachesRequest,
  DescribeFileCachesResponse,
  DescribeFileSystemAliasesRequest,
  DescribeFileSystemsRequest,
  DescribeFileSystemsResponse,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResponse,
  DescribeStorageVirtualMachinesRequest,
  DescribeStorageVirtualMachinesResponse,
  DescribeVolumesRequest,
  DescribeVolumesResponse,
  DisassociateFileSystemAliasesRequest,
  DiskIopsConfiguration,
  DurationSinceLastAccess,
  EventType,
  FileCache,
  FileCacheCreating,
  FileCacheDataRepositoryAssociation,
  FileCacheLustreMetadataConfiguration,
  FileCacheNFSConfiguration,
  FileCacheNotFound,
  FileSystem,
  FileSystemNotFound,
  Filter,
  IncompatibleParameterError,
  IncompatibleRegionForMultiAZ,
  InternalServerError,
  InvalidDataRepositoryType,
  InvalidDestinationKmsKey,
  InvalidExportPath,
  InvalidImportPath,
  InvalidNetworkSettings,
  InvalidPerUnitStorageThroughput,
  InvalidRegion,
  InvalidSourceKmsKey,
  ListTagsForResourceRequest,
  LustreLogCreateConfiguration,
  LustreRootSquashConfiguration,
  MissingFileCacheConfiguration,
  MissingFileSystemConfiguration,
  MissingVolumeConfiguration,
  NotServiceResourceError,
  OpenZFSClientConfiguration,
  OpenZFSCreateRootVolumeConfiguration,
  OpenZFSNfsExport,
  OpenZFSUserOrGroupQuota,
  ReleaseConfiguration,
  ReleaseFileSystemNfsV3LocksRequest,
  ReleaseFileSystemNfsV3LocksResponse,
  ResourceDoesNotSupportTagging,
  ResourceNotFound,
  RestoreOpenZFSVolumeOption,
  RestoreVolumeFromSnapshotRequest,
  RestoreVolumeFromSnapshotResponse,
  RetentionPeriod,
  S3DataRepositoryConfiguration,
  SelfManagedActiveDirectoryConfiguration,
  SelfManagedActiveDirectoryConfigurationUpdates,
  ServiceLimitExceeded,
  SnaplockRetentionPeriod,
  Snapshot,
  SnapshotFilter,
  SnapshotNotFound,
  SourceBackupUnavailable,
  StorageVirtualMachine,
  StorageVirtualMachineFilter,
  StorageVirtualMachineNotFound,
  Tag,
  TagResourceRequest,
  TieringPolicy,
  UnsupportedOperation,
  UntagResourceRequest,
  UpdateDataRepositoryAssociationRequest,
  UpdateDataRepositoryAssociationResponse,
  UpdateFileCacheLustreConfiguration,
  UpdateFileCacheRequest,
  UpdateFileCacheResponse,
  UpdateFileSystemLustreConfiguration,
  UpdateFileSystemOntapConfiguration,
  UpdateFileSystemOpenZFSConfiguration,
  UpdateFileSystemRequest,
  UpdateFileSystemResponse,
  UpdateFileSystemWindowsConfiguration,
  UpdateOntapVolumeConfiguration,
  UpdateOpenZFSVolumeConfiguration,
  UpdateSnaplockConfiguration,
  UpdateSnapshotRequest,
  UpdateSnapshotResponse,
  UpdateStorageVirtualMachineRequest,
  UpdateStorageVirtualMachineResponse,
  UpdateSvmActiveDirectoryConfiguration,
  UpdateVolumeRequest,
  UpdateVolumeResponse,
  Volume,
  VolumeFilter,
  VolumeNotFound,
  WindowsAuditLogCreateConfiguration,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateFileSystemAliasesCommand
 */
export const se_AssociateFileSystemAliasesCommand = async (
  input: AssociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("AssociateFileSystemAliases");
  let body: any;
  body = JSON.stringify(se_AssociateFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CancelDataRepositoryTaskCommand
 */
export const se_CancelDataRepositoryTaskCommand = async (
  input: CancelDataRepositoryTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CancelDataRepositoryTask");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyBackupCommand
 */
export const se_CopyBackupCommand = async (
  input: CopyBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CopyBackup");
  let body: any;
  body = JSON.stringify(se_CopyBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateBackupCommand
 */
export const se_CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateBackup");
  let body: any;
  body = JSON.stringify(se_CreateBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataRepositoryAssociationCommand
 */
export const se_CreateDataRepositoryAssociationCommand = async (
  input: CreateDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataRepositoryAssociation");
  let body: any;
  body = JSON.stringify(se_CreateDataRepositoryAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateDataRepositoryTaskCommand
 */
export const se_CreateDataRepositoryTaskCommand = async (
  input: CreateDataRepositoryTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateDataRepositoryTask");
  let body: any;
  body = JSON.stringify(se_CreateDataRepositoryTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFileCacheCommand
 */
export const se_CreateFileCacheCommand = async (
  input: CreateFileCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFileCache");
  let body: any;
  body = JSON.stringify(se_CreateFileCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFileSystemCommand
 */
export const se_CreateFileSystemCommand = async (
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFileSystem");
  let body: any;
  body = JSON.stringify(se_CreateFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateFileSystemFromBackupCommand
 */
export const se_CreateFileSystemFromBackupCommand = async (
  input: CreateFileSystemFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateFileSystemFromBackup");
  let body: any;
  body = JSON.stringify(se_CreateFileSystemFromBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateSnapshotCommand
 */
export const se_CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateSnapshot");
  let body: any;
  body = JSON.stringify(se_CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateStorageVirtualMachineCommand
 */
export const se_CreateStorageVirtualMachineCommand = async (
  input: CreateStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateStorageVirtualMachine");
  let body: any;
  body = JSON.stringify(se_CreateStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVolumeCommand
 */
export const se_CreateVolumeCommand = async (
  input: CreateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVolume");
  let body: any;
  body = JSON.stringify(se_CreateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CreateVolumeFromBackupCommand
 */
export const se_CreateVolumeFromBackupCommand = async (
  input: CreateVolumeFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("CreateVolumeFromBackup");
  let body: any;
  body = JSON.stringify(se_CreateVolumeFromBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteBackupCommand
 */
export const se_DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteBackup");
  let body: any;
  body = JSON.stringify(se_DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteDataRepositoryAssociationCommand
 */
export const se_DeleteDataRepositoryAssociationCommand = async (
  input: DeleteDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteDataRepositoryAssociation");
  let body: any;
  body = JSON.stringify(se_DeleteDataRepositoryAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFileCacheCommand
 */
export const se_DeleteFileCacheCommand = async (
  input: DeleteFileCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFileCache");
  let body: any;
  body = JSON.stringify(se_DeleteFileCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteFileSystemCommand
 */
export const se_DeleteFileSystemCommand = async (
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteFileSystem");
  let body: any;
  body = JSON.stringify(se_DeleteFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteSnapshotCommand
 */
export const se_DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteSnapshot");
  let body: any;
  body = JSON.stringify(se_DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteStorageVirtualMachineCommand
 */
export const se_DeleteStorageVirtualMachineCommand = async (
  input: DeleteStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteStorageVirtualMachine");
  let body: any;
  body = JSON.stringify(se_DeleteStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DeleteVolumeCommand
 */
export const se_DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DeleteVolume");
  let body: any;
  body = JSON.stringify(se_DeleteVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeBackupsCommand
 */
export const se_DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeBackups");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataRepositoryAssociationsCommand
 */
export const se_DescribeDataRepositoryAssociationsCommand = async (
  input: DescribeDataRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataRepositoryAssociations");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataRepositoryTasksCommand
 */
export const se_DescribeDataRepositoryTasksCommand = async (
  input: DescribeDataRepositoryTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeDataRepositoryTasks");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFileCachesCommand
 */
export const se_DescribeFileCachesCommand = async (
  input: DescribeFileCachesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFileCaches");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFileSystemAliasesCommand
 */
export const se_DescribeFileSystemAliasesCommand = async (
  input: DescribeFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFileSystemAliases");
  let body: any;
  body = JSON.stringify(se_DescribeFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFileSystemsCommand
 */
export const se_DescribeFileSystemsCommand = async (
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeFileSystems");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSnapshotsCommand
 */
export const se_DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeSnapshots");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStorageVirtualMachinesCommand
 */
export const se_DescribeStorageVirtualMachinesCommand = async (
  input: DescribeStorageVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeStorageVirtualMachines");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVolumesCommand
 */
export const se_DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DescribeVolumes");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFileSystemAliasesCommand
 */
export const se_DisassociateFileSystemAliasesCommand = async (
  input: DisassociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("DisassociateFileSystemAliases");
  let body: any;
  body = JSON.stringify(se_DisassociateFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ListTagsForResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReleaseFileSystemNfsV3LocksCommand
 */
export const se_ReleaseFileSystemNfsV3LocksCommand = async (
  input: ReleaseFileSystemNfsV3LocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("ReleaseFileSystemNfsV3Locks");
  let body: any;
  body = JSON.stringify(se_ReleaseFileSystemNfsV3LocksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1RestoreVolumeFromSnapshotCommand
 */
export const se_RestoreVolumeFromSnapshotCommand = async (
  input: RestoreVolumeFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("RestoreVolumeFromSnapshot");
  let body: any;
  body = JSON.stringify(se_RestoreVolumeFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("TagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UntagResource");
  let body: any;
  body = JSON.stringify(_json(input));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataRepositoryAssociationCommand
 */
export const se_UpdateDataRepositoryAssociationCommand = async (
  input: UpdateDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateDataRepositoryAssociation");
  let body: any;
  body = JSON.stringify(se_UpdateDataRepositoryAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFileCacheCommand
 */
export const se_UpdateFileCacheCommand = async (
  input: UpdateFileCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFileCache");
  let body: any;
  body = JSON.stringify(se_UpdateFileCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateFileSystemCommand
 */
export const se_UpdateFileSystemCommand = async (
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateFileSystem");
  let body: any;
  body = JSON.stringify(se_UpdateFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateSnapshotCommand
 */
export const se_UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateSnapshot");
  let body: any;
  body = JSON.stringify(se_UpdateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateStorageVirtualMachineCommand
 */
export const se_UpdateStorageVirtualMachineCommand = async (
  input: UpdateStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateStorageVirtualMachine");
  let body: any;
  body = JSON.stringify(se_UpdateStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateVolumeCommand
 */
export const se_UpdateVolumeCommand = async (
  input: UpdateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = sharedHeaders("UpdateVolume");
  let body: any;
  body = JSON.stringify(se_UpdateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * deserializeAws_json1_1AssociateFileSystemAliasesCommand
 */
export const de_AssociateFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_AssociateFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: AssociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1AssociateFileSystemAliasesCommandError
 */
const de_AssociateFileSystemAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CancelDataRepositoryTaskCommand
 */
export const de_CancelDataRepositoryTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataRepositoryTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CancelDataRepositoryTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: CancelDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CancelDataRepositoryTaskCommandError
 */
const de_CancelDataRepositoryTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataRepositoryTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DataRepositoryTaskEnded":
    case "com.amazonaws.fsx#DataRepositoryTaskEnded":
      throw await de_DataRepositoryTaskEndedRes(parsedOutput, context);
    case "DataRepositoryTaskNotFound":
    case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
      throw await de_DataRepositoryTaskNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CopyBackupCommand
 */
export const de_CopyBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CopyBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CopyBackupResponse(data, context);
  const response: CopyBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CopyBackupCommandError
 */
const de_CopyBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await de_BackupNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "IncompatibleRegionForMultiAZ":
    case "com.amazonaws.fsx#IncompatibleRegionForMultiAZ":
      throw await de_IncompatibleRegionForMultiAZRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDestinationKmsKey":
    case "com.amazonaws.fsx#InvalidDestinationKmsKey":
      throw await de_InvalidDestinationKmsKeyRes(parsedOutput, context);
    case "InvalidRegion":
    case "com.amazonaws.fsx#InvalidRegion":
      throw await de_InvalidRegionRes(parsedOutput, context);
    case "InvalidSourceKmsKey":
    case "com.amazonaws.fsx#InvalidSourceKmsKey":
      throw await de_InvalidSourceKmsKeyRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "SourceBackupUnavailable":
    case "com.amazonaws.fsx#SourceBackupUnavailable":
      throw await de_SourceBackupUnavailableRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateBackupCommand
 */
export const de_CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateBackupResponse(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateBackupCommandError
 */
const de_CreateBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupInProgress":
    case "com.amazonaws.fsx#BackupInProgress":
      throw await de_BackupInProgressRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDataRepositoryAssociationCommand
 */
export const de_CreateDataRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataRepositoryAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataRepositoryAssociationResponse(data, context);
  const response: CreateDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDataRepositoryAssociationCommandError
 */
const de_CreateDataRepositoryAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateDataRepositoryTaskCommand
 */
export const de_CreateDataRepositoryTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateDataRepositoryTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateDataRepositoryTaskResponse(data, context);
  const response: CreateDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateDataRepositoryTaskCommandError
 */
const de_CreateDataRepositoryTaskCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryTaskCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DataRepositoryTaskExecuting":
    case "com.amazonaws.fsx#DataRepositoryTaskExecuting":
      throw await de_DataRepositoryTaskExecutingRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFileCacheCommand
 */
export const de_CreateFileCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFileCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFileCacheResponse(data, context);
  const response: CreateFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFileCacheCommandError
 */
const de_CreateFileCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await de_InvalidNetworkSettingsRes(parsedOutput, context);
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      throw await de_InvalidPerUnitStorageThroughputRes(parsedOutput, context);
    case "MissingFileCacheConfiguration":
    case "com.amazonaws.fsx#MissingFileCacheConfiguration":
      throw await de_MissingFileCacheConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFileSystemCommand
 */
export const de_CreateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFileSystemResponse(data, context);
  const response: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFileSystemCommandError
 */
const de_CreateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.fsx#ActiveDirectoryError":
      throw await de_ActiveDirectoryErrorRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidExportPath":
    case "com.amazonaws.fsx#InvalidExportPath":
      throw await de_InvalidExportPathRes(parsedOutput, context);
    case "InvalidImportPath":
    case "com.amazonaws.fsx#InvalidImportPath":
      throw await de_InvalidImportPathRes(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await de_InvalidNetworkSettingsRes(parsedOutput, context);
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      throw await de_InvalidPerUnitStorageThroughputRes(parsedOutput, context);
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      throw await de_MissingFileSystemConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateFileSystemFromBackupCommand
 */
export const de_CreateFileSystemFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateFileSystemFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateFileSystemFromBackupResponse(data, context);
  const response: CreateFileSystemFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateFileSystemFromBackupCommandError
 */
const de_CreateFileSystemFromBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.fsx#ActiveDirectoryError":
      throw await de_ActiveDirectoryErrorRes(parsedOutput, context);
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await de_BackupNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await de_InvalidNetworkSettingsRes(parsedOutput, context);
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      throw await de_InvalidPerUnitStorageThroughputRes(parsedOutput, context);
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      throw await de_MissingFileSystemConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateSnapshotCommand
 */
export const de_CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateSnapshotResponse(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateSnapshotCommandError
 */
const de_CreateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateStorageVirtualMachineCommand
 */
export const de_CreateStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateStorageVirtualMachineResponse(data, context);
  const response: CreateStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateStorageVirtualMachineCommandError
 */
const de_CreateStorageVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ActiveDirectoryError":
    case "com.amazonaws.fsx#ActiveDirectoryError":
      throw await de_ActiveDirectoryErrorRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateVolumeCommand
 */
export const de_CreateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVolumeResponse(data, context);
  const response: CreateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVolumeCommandError
 */
const de_CreateVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      throw await de_MissingVolumeConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await de_StorageVirtualMachineNotFoundRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1CreateVolumeFromBackupCommand
 */
export const de_CreateVolumeFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_CreateVolumeFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_CreateVolumeFromBackupResponse(data, context);
  const response: CreateVolumeFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1CreateVolumeFromBackupCommandError
 */
const de_CreateVolumeFromBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeFromBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await de_BackupNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      throw await de_MissingVolumeConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await de_StorageVirtualMachineNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteBackupCommand
 */
export const de_DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteBackupCommandError
 */
const de_DeleteBackupCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupBeingCopied":
    case "com.amazonaws.fsx#BackupBeingCopied":
      throw await de_BackupBeingCopiedRes(parsedOutput, context);
    case "BackupInProgress":
    case "com.amazonaws.fsx#BackupInProgress":
      throw await de_BackupInProgressRes(parsedOutput, context);
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await de_BackupNotFoundRes(parsedOutput, context);
    case "BackupRestoring":
    case "com.amazonaws.fsx#BackupRestoring":
      throw await de_BackupRestoringRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteDataRepositoryAssociationCommand
 */
export const de_DeleteDataRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataRepositoryAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteDataRepositoryAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteDataRepositoryAssociationCommandError
 */
const de_DeleteDataRepositoryAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataRepositoryAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DataRepositoryAssociationNotFound":
    case "com.amazonaws.fsx#DataRepositoryAssociationNotFound":
      throw await de_DataRepositoryAssociationNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFileCacheCommand
 */
export const de_DeleteFileCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFileCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFileCacheCommandError
 */
const de_DeleteFileCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileCacheNotFound":
    case "com.amazonaws.fsx#FileCacheNotFound":
      throw await de_FileCacheNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteFileSystemCommand
 */
export const de_DeleteFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteFileSystemCommandError
 */
const de_DeleteFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteSnapshotCommand
 */
export const de_DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteSnapshotCommandError
 */
const de_DeleteSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "SnapshotNotFound":
    case "com.amazonaws.fsx#SnapshotNotFound":
      throw await de_SnapshotNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteStorageVirtualMachineCommand
 */
export const de_DeleteStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteStorageVirtualMachineCommandError
 */
const de_DeleteStorageVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await de_StorageVirtualMachineNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DeleteVolumeCommand
 */
export const de_DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DeleteVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DeleteVolumeCommandError
 */
const de_DeleteVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeBackupsCommand
 */
export const de_DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeBackupsCommandError
 */
const de_DescribeBackupsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await de_BackupNotFoundRes(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryAssociationsCommand
 */
export const de_DescribeDataRepositoryAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataRepositoryAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataRepositoryAssociationsResponse(data, context);
  const response: DescribeDataRepositoryAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryAssociationsCommandError
 */
const de_DescribeDataRepositoryAssociationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryAssociationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DataRepositoryAssociationNotFound":
    case "com.amazonaws.fsx#DataRepositoryAssociationNotFound":
      throw await de_DataRepositoryAssociationNotFoundRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidDataRepositoryType":
    case "com.amazonaws.fsx#InvalidDataRepositoryType":
      throw await de_InvalidDataRepositoryTypeRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryTasksCommand
 */
export const de_DescribeDataRepositoryTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeDataRepositoryTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeDataRepositoryTasksResponse(data, context);
  const response: DescribeDataRepositoryTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryTasksCommandError
 */
const de_DescribeDataRepositoryTasksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DataRepositoryTaskNotFound":
    case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
      throw await de_DataRepositoryTaskNotFoundRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFileCachesCommand
 */
export const de_DescribeFileCachesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileCachesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFileCachesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFileCachesResponse(data, context);
  const response: DescribeFileCachesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFileCachesCommandError
 */
const de_DescribeFileCachesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileCachesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileCacheNotFound":
    case "com.amazonaws.fsx#FileCacheNotFound":
      throw await de_FileCacheNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFileSystemAliasesCommand
 */
export const de_DescribeFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DescribeFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFileSystemAliasesCommandError
 */
const de_DescribeFileSystemAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeFileSystemsCommand
 */
export const de_DescribeFileSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeFileSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeFileSystemsResponse(data, context);
  const response: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeFileSystemsCommandError
 */
const de_DescribeFileSystemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeSnapshotsCommand
 */
export const de_DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeSnapshotsResponse(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsCommandError
 */
const de_DescribeSnapshotsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "SnapshotNotFound":
    case "com.amazonaws.fsx#SnapshotNotFound":
      throw await de_SnapshotNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeStorageVirtualMachinesCommand
 */
export const de_DescribeStorageVirtualMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeStorageVirtualMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeStorageVirtualMachinesResponse(data, context);
  const response: DescribeStorageVirtualMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeStorageVirtualMachinesCommandError
 */
const de_DescribeStorageVirtualMachinesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await de_StorageVirtualMachineNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DescribeVolumesCommand
 */
export const de_DescribeVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DescribeVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_DescribeVolumesResponse(data, context);
  const response: DescribeVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DescribeVolumesCommandError
 */
const de_DescribeVolumesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1DisassociateFileSystemAliasesCommand
 */
export const de_DisassociateFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_DisassociateFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: DisassociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1DisassociateFileSystemAliasesCommandError
 */
const de_DisassociateFileSystemAliasesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemAliasesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ListTagsForResourceCommandError
 */
const de_ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      throw await de_NotServiceResourceErrorRes(parsedOutput, context);
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      throw await de_ResourceDoesNotSupportTaggingRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ReleaseFileSystemNfsV3LocksCommand
 */
export const de_ReleaseFileSystemNfsV3LocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseFileSystemNfsV3LocksCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_ReleaseFileSystemNfsV3LocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_ReleaseFileSystemNfsV3LocksResponse(data, context);
  const response: ReleaseFileSystemNfsV3LocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1ReleaseFileSystemNfsV3LocksCommandError
 */
const de_ReleaseFileSystemNfsV3LocksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseFileSystemNfsV3LocksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1RestoreVolumeFromSnapshotCommand
 */
export const de_RestoreVolumeFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreVolumeFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_RestoreVolumeFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_RestoreVolumeFromSnapshotResponse(data, context);
  const response: RestoreVolumeFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1RestoreVolumeFromSnapshotCommandError
 */
const de_RestoreVolumeFromSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreVolumeFromSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      throw await de_NotServiceResourceErrorRes(parsedOutput, context);
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      throw await de_ResourceDoesNotSupportTaggingRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = _json(data);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      throw await de_NotServiceResourceErrorRes(parsedOutput, context);
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      throw await de_ResourceDoesNotSupportTaggingRes(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      throw await de_ResourceNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateDataRepositoryAssociationCommand
 */
export const de_UpdateDataRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRepositoryAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateDataRepositoryAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateDataRepositoryAssociationResponse(data, context);
  const response: UpdateDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateDataRepositoryAssociationCommandError
 */
const de_UpdateDataRepositoryAssociationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRepositoryAssociationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "DataRepositoryAssociationNotFound":
    case "com.amazonaws.fsx#DataRepositoryAssociationNotFound":
      throw await de_DataRepositoryAssociationNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFileCacheCommand
 */
export const de_UpdateFileCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFileCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFileCacheResponse(data, context);
  const response: UpdateFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFileCacheCommandError
 */
const de_UpdateFileCacheCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileCacheCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileCacheNotFound":
    case "com.amazonaws.fsx#FileCacheNotFound":
      throw await de_FileCacheNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MissingFileCacheConfiguration":
    case "com.amazonaws.fsx#MissingFileCacheConfiguration":
      throw await de_MissingFileCacheConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateFileSystemCommand
 */
export const de_UpdateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateFileSystemResponse(data, context);
  const response: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateFileSystemCommandError
 */
const de_UpdateFileSystemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await de_FileSystemNotFoundRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await de_InvalidNetworkSettingsRes(parsedOutput, context);
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      throw await de_MissingFileSystemConfigurationRes(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await de_ServiceLimitExceededRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateSnapshotCommand
 */
export const de_UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateSnapshotResponse(data, context);
  const response: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateSnapshotCommandError
 */
const de_UpdateSnapshotCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "SnapshotNotFound":
    case "com.amazonaws.fsx#SnapshotNotFound":
      throw await de_SnapshotNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateStorageVirtualMachineCommand
 */
export const de_UpdateStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateStorageVirtualMachineResponse(data, context);
  const response: UpdateStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateStorageVirtualMachineCommandError
 */
const de_UpdateStorageVirtualMachineCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageVirtualMachineCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await de_StorageVirtualMachineNotFoundRes(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await de_UnsupportedOperationRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1UpdateVolumeCommand
 */
export const de_UpdateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return de_UpdateVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = de_UpdateVolumeResponse(data, context);
  const response: UpdateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return response;
};

/**
 * deserializeAws_json1_1UpdateVolumeCommandError
 */
const de_UpdateVolumeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await de_BadRequestRes(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await de_IncompatibleParameterErrorRes(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await de_InternalServerErrorRes(parsedOutput, context);
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      throw await de_MissingVolumeConfigurationRes(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_json1_1ActiveDirectoryErrorRes
 */
const de_ActiveDirectoryErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveDirectoryError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ActiveDirectoryError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BackupBeingCopiedRes
 */
const de_BackupBeingCopiedRes = async (parsedOutput: any, context: __SerdeContext): Promise<BackupBeingCopied> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BackupBeingCopied({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BackupInProgressRes
 */
const de_BackupInProgressRes = async (parsedOutput: any, context: __SerdeContext): Promise<BackupInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BackupInProgress({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BackupNotFoundRes
 */
const de_BackupNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<BackupNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BackupNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BackupRestoringRes
 */
const de_BackupRestoringRes = async (parsedOutput: any, context: __SerdeContext): Promise<BackupRestoring> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BackupRestoring({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1BadRequestRes
 */
const de_BadRequestRes = async (parsedOutput: any, context: __SerdeContext): Promise<BadRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new BadRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DataRepositoryAssociationNotFoundRes
 */
const de_DataRepositoryAssociationNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryAssociationNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DataRepositoryAssociationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DataRepositoryTaskEndedRes
 */
const de_DataRepositoryTaskEndedRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskEnded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DataRepositoryTaskEnded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DataRepositoryTaskExecutingRes
 */
const de_DataRepositoryTaskExecutingRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskExecuting> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DataRepositoryTaskExecuting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1DataRepositoryTaskNotFoundRes
 */
const de_DataRepositoryTaskNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new DataRepositoryTaskNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileCacheNotFoundRes
 */
const de_FileCacheNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<FileCacheNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileCacheNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1FileSystemNotFoundRes
 */
const de_FileSystemNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<FileSystemNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new FileSystemNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncompatibleParameterErrorRes
 */
const de_IncompatibleParameterErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleParameterError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IncompatibleParameterError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1IncompatibleRegionForMultiAZRes
 */
const de_IncompatibleRegionForMultiAZRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleRegionForMultiAZ> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new IncompatibleRegionForMultiAZ({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InternalServerErrorRes
 */
const de_InternalServerErrorRes = async (parsedOutput: any, context: __SerdeContext): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDataRepositoryTypeRes
 */
const de_InvalidDataRepositoryTypeRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDataRepositoryType> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidDataRepositoryType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidDestinationKmsKeyRes
 */
const de_InvalidDestinationKmsKeyRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDestinationKmsKey> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidDestinationKmsKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidExportPathRes
 */
const de_InvalidExportPathRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidExportPath> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidExportPath({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidImportPathRes
 */
const de_InvalidImportPathRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidImportPath> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidImportPath({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidNetworkSettingsRes
 */
const de_InvalidNetworkSettingsRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNetworkSettings> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidNetworkSettings({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidPerUnitStorageThroughputRes
 */
const de_InvalidPerUnitStorageThroughputRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPerUnitStorageThroughput> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidPerUnitStorageThroughput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidRegionRes
 */
const de_InvalidRegionRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidRegion> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidRegion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1InvalidSourceKmsKeyRes
 */
const de_InvalidSourceKmsKeyRes = async (parsedOutput: any, context: __SerdeContext): Promise<InvalidSourceKmsKey> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new InvalidSourceKmsKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MissingFileCacheConfigurationRes
 */
const de_MissingFileCacheConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingFileCacheConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MissingFileCacheConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MissingFileSystemConfigurationRes
 */
const de_MissingFileSystemConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingFileSystemConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MissingFileSystemConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1MissingVolumeConfigurationRes
 */
const de_MissingVolumeConfigurationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingVolumeConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new MissingVolumeConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1NotServiceResourceErrorRes
 */
const de_NotServiceResourceErrorRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotServiceResourceError> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new NotServiceResourceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceDoesNotSupportTaggingRes
 */
const de_ResourceDoesNotSupportTaggingRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDoesNotSupportTagging> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceDoesNotSupportTagging({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ResourceNotFoundRes
 */
const de_ResourceNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1ServiceLimitExceededRes
 */
const de_ServiceLimitExceededRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new ServiceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SnapshotNotFoundRes
 */
const de_SnapshotNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<SnapshotNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SnapshotNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1SourceBackupUnavailableRes
 */
const de_SourceBackupUnavailableRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceBackupUnavailable> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new SourceBackupUnavailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1StorageVirtualMachineNotFoundRes
 */
const de_StorageVirtualMachineNotFoundRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageVirtualMachineNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new StorageVirtualMachineNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1UnsupportedOperationRes
 */
const de_UnsupportedOperationRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new UnsupportedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * deserializeAws_json1_1VolumeNotFoundRes
 */
const de_VolumeNotFoundRes = async (parsedOutput: any, context: __SerdeContext): Promise<VolumeNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = _json(body);
  const exception = new VolumeNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

// se_AlternateDNSNames omitted.

/**
 * serializeAws_json1_1AssociateFileSystemAliasesRequest
 */
const se_AssociateFileSystemAliasesRequest = (
  input: AssociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Aliases: _json,
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
  });
};

// se_AutocommitPeriod omitted.

// se_AutoExportPolicy omitted.

// se_AutoImportPolicy omitted.

// se_BackupIds omitted.

// se_CancelDataRepositoryTaskRequest omitted.

// se_CompletionReport omitted.

/**
 * serializeAws_json1_1CopyBackupRequest
 */
const se_CopyBackupRequest = (input: CopyBackupRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CopyTags: [],
    KmsKeyId: [],
    SourceBackupId: [],
    SourceRegion: [],
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateBackupRequest
 */
const se_CreateBackupRequest = (input: CreateBackupRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
    Tags: _json,
    VolumeId: [],
  });
};

/**
 * serializeAws_json1_1CreateDataRepositoryAssociationRequest
 */
const se_CreateDataRepositoryAssociationRequest = (
  input: CreateDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    BatchImportMetaDataOnCreate: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DataRepositoryPath: [],
    FileSystemId: [],
    FileSystemPath: [],
    ImportedFileChunkSize: [],
    S3: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateDataRepositoryTaskRequest
 */
const se_CreateDataRepositoryTaskRequest = (input: CreateDataRepositoryTaskRequest, context: __SerdeContext): any => {
  return take(input, {
    CapacityToRelease: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
    Paths: _json,
    ReleaseConfiguration: _json,
    Report: _json,
    Tags: _json,
    Type: [],
  });
};

// se_CreateFileCacheDataRepositoryAssociations omitted.

// se_CreateFileCacheLustreConfiguration omitted.

/**
 * serializeAws_json1_1CreateFileCacheRequest
 */
const se_CreateFileCacheRequest = (input: CreateFileCacheRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    CopyTagsToDataRepositoryAssociations: [],
    DataRepositoryAssociations: _json,
    FileCacheType: [],
    FileCacheTypeVersion: [],
    KmsKeyId: [],
    LustreConfiguration: _json,
    SecurityGroupIds: _json,
    StorageCapacity: [],
    SubnetIds: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateFileSystemFromBackupRequest
 */
const se_CreateFileSystemFromBackupRequest = (
  input: CreateFileSystemFromBackupRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    BackupId: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemTypeVersion: [],
    KmsKeyId: [],
    LustreConfiguration: _json,
    OpenZFSConfiguration: _json,
    SecurityGroupIds: _json,
    StorageCapacity: [],
    StorageType: [],
    SubnetIds: _json,
    Tags: _json,
    WindowsConfiguration: _json,
  });
};

// se_CreateFileSystemLustreConfiguration omitted.

// se_CreateFileSystemOntapConfiguration omitted.

// se_CreateFileSystemOpenZFSConfiguration omitted.

/**
 * serializeAws_json1_1CreateFileSystemRequest
 */
const se_CreateFileSystemRequest = (input: CreateFileSystemRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemType: [],
    FileSystemTypeVersion: [],
    KmsKeyId: [],
    LustreConfiguration: _json,
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    SecurityGroupIds: _json,
    StorageCapacity: [],
    StorageType: [],
    SubnetIds: _json,
    Tags: _json,
    WindowsConfiguration: _json,
  });
};

// se_CreateFileSystemWindowsConfiguration omitted.

// se_CreateOntapVolumeConfiguration omitted.

// se_CreateOpenZFSOriginSnapshotConfiguration omitted.

// se_CreateOpenZFSVolumeConfiguration omitted.

// se_CreateSnaplockConfiguration omitted.

/**
 * serializeAws_json1_1CreateSnapshotRequest
 */
const se_CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    Tags: _json,
    VolumeId: [],
  });
};

/**
 * serializeAws_json1_1CreateStorageVirtualMachineRequest
 */
const se_CreateStorageVirtualMachineRequest = (
  input: CreateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ActiveDirectoryConfiguration: _json,
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
    Name: [],
    RootVolumeSecurityStyle: [],
    SvmAdminPassword: [],
    Tags: _json,
  });
};

// se_CreateSvmActiveDirectoryConfiguration omitted.

/**
 * serializeAws_json1_1CreateVolumeFromBackupRequest
 */
const se_CreateVolumeFromBackupRequest = (input: CreateVolumeFromBackupRequest, context: __SerdeContext): any => {
  return take(input, {
    BackupId: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    OntapConfiguration: _json,
    Tags: _json,
  });
};

/**
 * serializeAws_json1_1CreateVolumeRequest
 */
const se_CreateVolumeRequest = (input: CreateVolumeRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    Tags: _json,
    VolumeType: [],
  });
};

// se_DataRepositoryAssociationIds omitted.

// se_DataRepositoryTaskFilter omitted.

// se_DataRepositoryTaskFilters omitted.

// se_DataRepositoryTaskFilterValues omitted.

// se_DataRepositoryTaskPaths omitted.

/**
 * serializeAws_json1_1DeleteBackupRequest
 */
const se_DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return take(input, {
    BackupId: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
  });
};

/**
 * serializeAws_json1_1DeleteDataRepositoryAssociationRequest
 */
const se_DeleteDataRepositoryAssociationRequest = (
  input: DeleteDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AssociationId: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    DeleteDataInFileSystem: [],
  });
};

/**
 * serializeAws_json1_1DeleteFileCacheRequest
 */
const se_DeleteFileCacheRequest = (input: DeleteFileCacheRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileCacheId: [],
  });
};

// se_DeleteFileSystemLustreConfiguration omitted.

// se_DeleteFileSystemOpenZFSConfiguration omitted.

// se_DeleteFileSystemOpenZFSOptions omitted.

/**
 * serializeAws_json1_1DeleteFileSystemRequest
 */
const se_DeleteFileSystemRequest = (input: DeleteFileSystemRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
    LustreConfiguration: _json,
    OpenZFSConfiguration: _json,
    WindowsConfiguration: _json,
  });
};

// se_DeleteFileSystemWindowsConfiguration omitted.

// se_DeleteOpenZFSVolumeOptions omitted.

/**
 * serializeAws_json1_1DeleteSnapshotRequest
 */
const se_DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    SnapshotId: [],
  });
};

/**
 * serializeAws_json1_1DeleteStorageVirtualMachineRequest
 */
const se_DeleteStorageVirtualMachineRequest = (
  input: DeleteStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    StorageVirtualMachineId: [],
  });
};

// se_DeleteVolumeOntapConfiguration omitted.

// se_DeleteVolumeOpenZFSConfiguration omitted.

/**
 * serializeAws_json1_1DeleteVolumeRequest
 */
const se_DeleteVolumeRequest = (input: DeleteVolumeRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    VolumeId: [],
  });
};

// se_DescribeBackupsRequest omitted.

// se_DescribeDataRepositoryAssociationsRequest omitted.

// se_DescribeDataRepositoryTasksRequest omitted.

// se_DescribeFileCachesRequest omitted.

/**
 * serializeAws_json1_1DescribeFileSystemAliasesRequest
 */
const se_DescribeFileSystemAliasesRequest = (input: DescribeFileSystemAliasesRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
    MaxResults: [],
    NextToken: [],
  });
};

// se_DescribeFileSystemsRequest omitted.

// se_DescribeSnapshotsRequest omitted.

// se_DescribeStorageVirtualMachinesRequest omitted.

// se_DescribeVolumesRequest omitted.

/**
 * serializeAws_json1_1DisassociateFileSystemAliasesRequest
 */
const se_DisassociateFileSystemAliasesRequest = (
  input: DisassociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    Aliases: _json,
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
  });
};

// se_DiskIopsConfiguration omitted.

// se_DnsIps omitted.

// se_DurationSinceLastAccess omitted.

// se_EventTypes omitted.

// se_FileCacheDataRepositoryAssociation omitted.

// se_FileCacheIds omitted.

// se_FileCacheLustreMetadataConfiguration omitted.

// se_FileCacheNFSConfiguration omitted.

// se_FileSystemIds omitted.

// se_Filter omitted.

// se_Filters omitted.

// se_FilterValues omitted.

// se_ListTagsForResourceRequest omitted.

// se_LustreLogCreateConfiguration omitted.

// se_LustreNoSquashNids omitted.

// se_LustreRootSquashConfiguration omitted.

// se_OpenZFSClientConfiguration omitted.

// se_OpenZFSClientConfigurations omitted.

// se_OpenZFSCreateRootVolumeConfiguration omitted.

// se_OpenZFSNfsExport omitted.

// se_OpenZFSNfsExportOptions omitted.

// se_OpenZFSNfsExports omitted.

// se_OpenZFSUserAndGroupQuotas omitted.

// se_OpenZFSUserOrGroupQuota omitted.

// se_ReleaseConfiguration omitted.

/**
 * serializeAws_json1_1ReleaseFileSystemNfsV3LocksRequest
 */
const se_ReleaseFileSystemNfsV3LocksRequest = (
  input: ReleaseFileSystemNfsV3LocksRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
  });
};

// se_RepositoryDnsIps omitted.

// se_RestoreOpenZFSVolumeOptions omitted.

/**
 * serializeAws_json1_1RestoreVolumeFromSnapshotRequest
 */
const se_RestoreVolumeFromSnapshotRequest = (input: RestoreVolumeFromSnapshotRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Options: _json,
    SnapshotId: [],
    VolumeId: [],
  });
};

// se_RetentionPeriod omitted.

// se_RouteTableIds omitted.

// se_S3DataRepositoryConfiguration omitted.

// se_SecurityGroupIds omitted.

// se_SelfManagedActiveDirectoryConfiguration omitted.

// se_SelfManagedActiveDirectoryConfigurationUpdates omitted.

// se_SnaplockRetentionPeriod omitted.

// se_SnapshotFilter omitted.

// se_SnapshotFilters omitted.

// se_SnapshotFilterValues omitted.

// se_SnapshotIds omitted.

// se_StorageVirtualMachineFilter omitted.

// se_StorageVirtualMachineFilters omitted.

// se_StorageVirtualMachineFilterValues omitted.

// se_StorageVirtualMachineIds omitted.

// se_SubDirectoriesPaths omitted.

// se_SubnetIds omitted.

// se_Tag omitted.

// se_TagKeys omitted.

// se_TagResourceRequest omitted.

// se_Tags omitted.

// se_TaskIds omitted.

// se_TieringPolicy omitted.

// se_UntagResourceRequest omitted.

/**
 * serializeAws_json1_1UpdateDataRepositoryAssociationRequest
 */
const se_UpdateDataRepositoryAssociationRequest = (
  input: UpdateDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    AssociationId: [],
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    ImportedFileChunkSize: [],
    S3: _json,
  });
};

// se_UpdateFileCacheLustreConfiguration omitted.

/**
 * serializeAws_json1_1UpdateFileCacheRequest
 */
const se_UpdateFileCacheRequest = (input: UpdateFileCacheRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileCacheId: [],
    LustreConfiguration: _json,
  });
};

// se_UpdateFileSystemLustreConfiguration omitted.

// se_UpdateFileSystemOntapConfiguration omitted.

// se_UpdateFileSystemOpenZFSConfiguration omitted.

/**
 * serializeAws_json1_1UpdateFileSystemRequest
 */
const se_UpdateFileSystemRequest = (input: UpdateFileSystemRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    FileSystemId: [],
    LustreConfiguration: _json,
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    StorageCapacity: [],
    StorageType: [],
    WindowsConfiguration: _json,
  });
};

// se_UpdateFileSystemWindowsConfiguration omitted.

// se_UpdateOntapVolumeConfiguration omitted.

// se_UpdateOpenZFSVolumeConfiguration omitted.

// se_UpdateSnaplockConfiguration omitted.

/**
 * serializeAws_json1_1UpdateSnapshotRequest
 */
const se_UpdateSnapshotRequest = (input: UpdateSnapshotRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    SnapshotId: [],
  });
};

/**
 * serializeAws_json1_1UpdateStorageVirtualMachineRequest
 */
const se_UpdateStorageVirtualMachineRequest = (
  input: UpdateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return take(input, {
    ActiveDirectoryConfiguration: _json,
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    StorageVirtualMachineId: [],
    SvmAdminPassword: [],
  });
};

// se_UpdateSvmActiveDirectoryConfiguration omitted.

/**
 * serializeAws_json1_1UpdateVolumeRequest
 */
const se_UpdateVolumeRequest = (input: UpdateVolumeRequest, context: __SerdeContext): any => {
  return take(input, {
    ClientRequestToken: [true, (_) => _ ?? generateIdempotencyToken()],
    Name: [],
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    VolumeId: [],
  });
};

// se_VolumeFilter omitted.

// se_VolumeFilters omitted.

// se_VolumeFilterValues omitted.

// se_VolumeIds omitted.

// se_WindowsAuditLogCreateConfiguration omitted.

// de_ActiveDirectoryBackupAttributes omitted.

// de_ActiveDirectoryError omitted.

/**
 * deserializeAws_json1_1AdministrativeAction
 */
const de_AdministrativeAction = (output: any, context: __SerdeContext): AdministrativeAction => {
  return take(output, {
    AdministrativeActionType: __expectString,
    FailureDetails: _json,
    ProgressPercent: __expectInt32,
    RequestTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    TargetFileSystemValues: (_: any) => de_FileSystem(_, context),
    TargetSnapshotValues: (_: any) => de_Snapshot(_, context),
    TargetVolumeValues: (_: any) => de_Volume(_, context),
  }) as any;
};

// de_AdministrativeActionFailureDetails omitted.

/**
 * deserializeAws_json1_1AdministrativeActions
 */
const de_AdministrativeActions = (output: any, context: __SerdeContext): AdministrativeAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AdministrativeAction(entry, context);
    });
  return retVal;
};

// de_Alias omitted.

// de_Aliases omitted.

// de_AssociateFileSystemAliasesResponse omitted.

// de_AutocommitPeriod omitted.

// de_AutoExportPolicy omitted.

// de_AutoImportPolicy omitted.

/**
 * deserializeAws_json1_1Backup
 */
const de_Backup = (output: any, context: __SerdeContext): Backup => {
  return take(output, {
    BackupId: __expectString,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DirectoryInformation: _json,
    FailureDetails: _json,
    FileSystem: (_: any) => de_FileSystem(_, context),
    KmsKeyId: __expectString,
    Lifecycle: __expectString,
    OwnerId: __expectString,
    ProgressPercent: __expectInt32,
    ResourceARN: __expectString,
    ResourceType: __expectString,
    SourceBackupId: __expectString,
    SourceBackupRegion: __expectString,
    Tags: _json,
    Type: __expectString,
    Volume: (_: any) => de_Volume(_, context),
  }) as any;
};

// de_BackupBeingCopied omitted.

// de_BackupFailureDetails omitted.

// de_BackupInProgress omitted.

// de_BackupNotFound omitted.

// de_BackupRestoring omitted.

/**
 * deserializeAws_json1_1Backups
 */
const de_Backups = (output: any, context: __SerdeContext): Backup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Backup(entry, context);
    });
  return retVal;
};

// de_BadRequest omitted.

// de_CancelDataRepositoryTaskResponse omitted.

// de_CompletionReport omitted.

/**
 * deserializeAws_json1_1CopyBackupResponse
 */
const de_CopyBackupResponse = (output: any, context: __SerdeContext): CopyBackupResponse => {
  return take(output, {
    Backup: (_: any) => de_Backup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateBackupResponse
 */
const de_CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return take(output, {
    Backup: (_: any) => de_Backup(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDataRepositoryAssociationResponse
 */
const de_CreateDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryAssociationResponse => {
  return take(output, {
    Association: (_: any) => de_DataRepositoryAssociation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateDataRepositoryTaskResponse
 */
const de_CreateDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryTaskResponse => {
  return take(output, {
    DataRepositoryTask: (_: any) => de_DataRepositoryTask(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateFileCacheResponse
 */
const de_CreateFileCacheResponse = (output: any, context: __SerdeContext): CreateFileCacheResponse => {
  return take(output, {
    FileCache: (_: any) => de_FileCacheCreating(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateFileSystemFromBackupResponse
 */
const de_CreateFileSystemFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemFromBackupResponse => {
  return take(output, {
    FileSystem: (_: any) => de_FileSystem(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateFileSystemResponse
 */
const de_CreateFileSystemResponse = (output: any, context: __SerdeContext): CreateFileSystemResponse => {
  return take(output, {
    FileSystem: (_: any) => de_FileSystem(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotResponse
 */
const de_CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return take(output, {
    Snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateStorageVirtualMachineResponse
 */
const de_CreateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): CreateStorageVirtualMachineResponse => {
  return take(output, {
    StorageVirtualMachine: (_: any) => de_StorageVirtualMachine(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateVolumeFromBackupResponse
 */
const de_CreateVolumeFromBackupResponse = (output: any, context: __SerdeContext): CreateVolumeFromBackupResponse => {
  return take(output, {
    Volume: (_: any) => de_Volume(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1CreateVolumeResponse
 */
const de_CreateVolumeResponse = (output: any, context: __SerdeContext): CreateVolumeResponse => {
  return take(output, {
    Volume: (_: any) => de_Volume(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DataRepositoryAssociation
 */
const de_DataRepositoryAssociation = (output: any, context: __SerdeContext): DataRepositoryAssociation => {
  return take(output, {
    AssociationId: __expectString,
    BatchImportMetaDataOnCreate: __expectBoolean,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DataRepositoryPath: __expectString,
    DataRepositorySubdirectories: _json,
    FailureDetails: _json,
    FileCacheId: __expectString,
    FileCachePath: __expectString,
    FileSystemId: __expectString,
    FileSystemPath: __expectString,
    ImportedFileChunkSize: __expectInt32,
    Lifecycle: __expectString,
    NFS: _json,
    ResourceARN: __expectString,
    S3: _json,
    Tags: _json,
  }) as any;
};

// de_DataRepositoryAssociationIds omitted.

// de_DataRepositoryAssociationNotFound omitted.

/**
 * deserializeAws_json1_1DataRepositoryAssociations
 */
const de_DataRepositoryAssociations = (output: any, context: __SerdeContext): DataRepositoryAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataRepositoryAssociation(entry, context);
    });
  return retVal;
};

// de_DataRepositoryConfiguration omitted.

// de_DataRepositoryFailureDetails omitted.

/**
 * deserializeAws_json1_1DataRepositoryTask
 */
const de_DataRepositoryTask = (output: any, context: __SerdeContext): DataRepositoryTask => {
  return take(output, {
    CapacityToRelease: __expectLong,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FailureDetails: _json,
    FileCacheId: __expectString,
    FileSystemId: __expectString,
    Lifecycle: __expectString,
    Paths: _json,
    ReleaseConfiguration: _json,
    Report: _json,
    ResourceARN: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: (_: any) => de_DataRepositoryTaskStatus(_, context),
    Tags: _json,
    TaskId: __expectString,
    Type: __expectString,
  }) as any;
};

// de_DataRepositoryTaskEnded omitted.

// de_DataRepositoryTaskExecuting omitted.

// de_DataRepositoryTaskFailureDetails omitted.

// de_DataRepositoryTaskNotFound omitted.

// de_DataRepositoryTaskPaths omitted.

/**
 * deserializeAws_json1_1DataRepositoryTasks
 */
const de_DataRepositoryTasks = (output: any, context: __SerdeContext): DataRepositoryTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DataRepositoryTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskStatus
 */
const de_DataRepositoryTaskStatus = (output: any, context: __SerdeContext): DataRepositoryTaskStatus => {
  return take(output, {
    FailedCount: __expectLong,
    LastUpdatedTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReleasedCapacity: __expectLong,
    SucceededCount: __expectLong,
    TotalCount: __expectLong,
  }) as any;
};

// de_DeleteBackupResponse omitted.

// de_DeleteDataRepositoryAssociationResponse omitted.

// de_DeleteFileCacheResponse omitted.

// de_DeleteFileSystemLustreResponse omitted.

// de_DeleteFileSystemOpenZFSResponse omitted.

// de_DeleteFileSystemResponse omitted.

// de_DeleteFileSystemWindowsResponse omitted.

// de_DeleteSnapshotResponse omitted.

// de_DeleteStorageVirtualMachineResponse omitted.

// de_DeleteVolumeOntapResponse omitted.

// de_DeleteVolumeResponse omitted.

/**
 * deserializeAws_json1_1DescribeBackupsResponse
 */
const de_DescribeBackupsResponse = (output: any, context: __SerdeContext): DescribeBackupsResponse => {
  return take(output, {
    Backups: (_: any) => de_Backups(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryAssociationsResponse
 */
const de_DescribeDataRepositoryAssociationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryAssociationsResponse => {
  return take(output, {
    Associations: (_: any) => de_DataRepositoryAssociations(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryTasksResponse
 */
const de_DescribeDataRepositoryTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryTasksResponse => {
  return take(output, {
    DataRepositoryTasks: (_: any) => de_DataRepositoryTasks(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeFileCachesResponse
 */
const de_DescribeFileCachesResponse = (output: any, context: __SerdeContext): DescribeFileCachesResponse => {
  return take(output, {
    FileCaches: (_: any) => de_FileCaches(_, context),
    NextToken: __expectString,
  }) as any;
};

// de_DescribeFileSystemAliasesResponse omitted.

/**
 * deserializeAws_json1_1DescribeFileSystemsResponse
 */
const de_DescribeFileSystemsResponse = (output: any, context: __SerdeContext): DescribeFileSystemsResponse => {
  return take(output, {
    FileSystems: (_: any) => de_FileSystems(_, context),
    NextToken: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsResponse
 */
const de_DescribeSnapshotsResponse = (output: any, context: __SerdeContext): DescribeSnapshotsResponse => {
  return take(output, {
    NextToken: __expectString,
    Snapshots: (_: any) => de_Snapshots(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeStorageVirtualMachinesResponse
 */
const de_DescribeStorageVirtualMachinesResponse = (
  output: any,
  context: __SerdeContext
): DescribeStorageVirtualMachinesResponse => {
  return take(output, {
    NextToken: __expectString,
    StorageVirtualMachines: (_: any) => de_StorageVirtualMachines(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1DescribeVolumesResponse
 */
const de_DescribeVolumesResponse = (output: any, context: __SerdeContext): DescribeVolumesResponse => {
  return take(output, {
    NextToken: __expectString,
    Volumes: (_: any) => de_Volumes(_, context),
  }) as any;
};

// de_DisassociateFileSystemAliasesResponse omitted.

// de_DiskIopsConfiguration omitted.

// de_DnsIps omitted.

// de_DurationSinceLastAccess omitted.

// de_EventTypes omitted.

/**
 * deserializeAws_json1_1FileCache
 */
const de_FileCache = (output: any, context: __SerdeContext): FileCache => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DNSName: __expectString,
    DataRepositoryAssociationIds: _json,
    FailureDetails: _json,
    FileCacheId: __expectString,
    FileCacheType: __expectString,
    FileCacheTypeVersion: __expectString,
    KmsKeyId: __expectString,
    Lifecycle: __expectString,
    LustreConfiguration: _json,
    NetworkInterfaceIds: _json,
    OwnerId: __expectString,
    ResourceARN: __expectString,
    StorageCapacity: __expectInt32,
    SubnetIds: _json,
    VpcId: __expectString,
  }) as any;
};

/**
 * deserializeAws_json1_1FileCacheCreating
 */
const de_FileCacheCreating = (output: any, context: __SerdeContext): FileCacheCreating => {
  return take(output, {
    CopyTagsToDataRepositoryAssociations: __expectBoolean,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DNSName: __expectString,
    DataRepositoryAssociationIds: _json,
    FailureDetails: _json,
    FileCacheId: __expectString,
    FileCacheType: __expectString,
    FileCacheTypeVersion: __expectString,
    KmsKeyId: __expectString,
    Lifecycle: __expectString,
    LustreConfiguration: _json,
    NetworkInterfaceIds: _json,
    OwnerId: __expectString,
    ResourceARN: __expectString,
    StorageCapacity: __expectInt32,
    SubnetIds: _json,
    Tags: _json,
    VpcId: __expectString,
  }) as any;
};

// de_FileCacheFailureDetails omitted.

// de_FileCacheLustreConfiguration omitted.

// de_FileCacheLustreMetadataConfiguration omitted.

// de_FileCacheNotFound omitted.

/**
 * deserializeAws_json1_1FileCaches
 */
const de_FileCaches = (output: any, context: __SerdeContext): FileCache[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FileCache(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSystem
 */
const de_FileSystem = (output: any, context: __SerdeContext): FileSystem => {
  return take(output, {
    AdministrativeActions: (_: any) => de_AdministrativeActions(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DNSName: __expectString,
    FailureDetails: _json,
    FileSystemId: __expectString,
    FileSystemType: __expectString,
    FileSystemTypeVersion: __expectString,
    KmsKeyId: __expectString,
    Lifecycle: __expectString,
    LustreConfiguration: _json,
    NetworkInterfaceIds: _json,
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    OwnerId: __expectString,
    ResourceARN: __expectString,
    StorageCapacity: __expectInt32,
    StorageType: __expectString,
    SubnetIds: _json,
    Tags: _json,
    VpcId: __expectString,
    WindowsConfiguration: _json,
  }) as any;
};

// de_FileSystemEndpoint omitted.

// de_FileSystemEndpoints omitted.

// de_FileSystemFailureDetails omitted.

// de_FileSystemMaintenanceOperations omitted.

// de_FileSystemNotFound omitted.

/**
 * deserializeAws_json1_1FileSystems
 */
const de_FileSystems = (output: any, context: __SerdeContext): FileSystem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_FileSystem(entry, context);
    });
  return retVal;
};

// de_IncompatibleParameterError omitted.

// de_IncompatibleRegionForMultiAZ omitted.

// de_InternalServerError omitted.

// de_InvalidDataRepositoryType omitted.

// de_InvalidDestinationKmsKey omitted.

// de_InvalidExportPath omitted.

// de_InvalidImportPath omitted.

// de_InvalidNetworkSettings omitted.

// de_InvalidPerUnitStorageThroughput omitted.

// de_InvalidRegion omitted.

// de_InvalidSourceKmsKey omitted.

// de_LifecycleTransitionReason omitted.

// de_ListTagsForResourceResponse omitted.

// de_LustreFileSystemConfiguration omitted.

// de_LustreLogConfiguration omitted.

// de_LustreNoSquashNids omitted.

// de_LustreRootSquashConfiguration omitted.

// de_MissingFileCacheConfiguration omitted.

// de_MissingFileSystemConfiguration omitted.

// de_MissingVolumeConfiguration omitted.

// de_NetworkInterfaceIds omitted.

// de_NFSDataRepositoryConfiguration omitted.

// de_NotServiceResourceError omitted.

// de_OntapEndpointIpAddresses omitted.

// de_OntapFileSystemConfiguration omitted.

// de_OntapVolumeConfiguration omitted.

// de_OpenZFSClientConfiguration omitted.

// de_OpenZFSClientConfigurations omitted.

// de_OpenZFSFileSystemConfiguration omitted.

// de_OpenZFSNfsExport omitted.

// de_OpenZFSNfsExportOptions omitted.

// de_OpenZFSNfsExports omitted.

// de_OpenZFSOriginSnapshotConfiguration omitted.

// de_OpenZFSUserAndGroupQuotas omitted.

// de_OpenZFSUserOrGroupQuota omitted.

// de_OpenZFSVolumeConfiguration omitted.

// de_ReleaseConfiguration omitted.

/**
 * deserializeAws_json1_1ReleaseFileSystemNfsV3LocksResponse
 */
const de_ReleaseFileSystemNfsV3LocksResponse = (
  output: any,
  context: __SerdeContext
): ReleaseFileSystemNfsV3LocksResponse => {
  return take(output, {
    FileSystem: (_: any) => de_FileSystem(_, context),
  }) as any;
};

// de_RepositoryDnsIps omitted.

// de_ResourceDoesNotSupportTagging omitted.

// de_ResourceNotFound omitted.

/**
 * deserializeAws_json1_1RestoreVolumeFromSnapshotResponse
 */
const de_RestoreVolumeFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreVolumeFromSnapshotResponse => {
  return take(output, {
    AdministrativeActions: (_: any) => de_AdministrativeActions(_, context),
    Lifecycle: __expectString,
    VolumeId: __expectString,
  }) as any;
};

// de_RetentionPeriod omitted.

// de_RouteTableIds omitted.

// de_S3DataRepositoryConfiguration omitted.

// de_SelfManagedActiveDirectoryAttributes omitted.

// de_ServiceLimitExceeded omitted.

// de_SnaplockConfiguration omitted.

// de_SnaplockRetentionPeriod omitted.

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return take(output, {
    AdministrativeActions: (_: any) => de_AdministrativeActions(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Lifecycle: __expectString,
    LifecycleTransitionReason: _json,
    Name: __expectString,
    ResourceARN: __expectString,
    SnapshotId: __expectString,
    Tags: _json,
    VolumeId: __expectString,
  }) as any;
};

// de_SnapshotNotFound omitted.

/**
 * deserializeAws_json1_1Snapshots
 */
const de_Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Snapshot(entry, context);
    });
  return retVal;
};

// de_SourceBackupUnavailable omitted.

/**
 * deserializeAws_json1_1StorageVirtualMachine
 */
const de_StorageVirtualMachine = (output: any, context: __SerdeContext): StorageVirtualMachine => {
  return take(output, {
    ActiveDirectoryConfiguration: _json,
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Endpoints: _json,
    FileSystemId: __expectString,
    Lifecycle: __expectString,
    LifecycleTransitionReason: _json,
    Name: __expectString,
    ResourceARN: __expectString,
    RootVolumeSecurityStyle: __expectString,
    StorageVirtualMachineId: __expectString,
    Subtype: __expectString,
    Tags: _json,
    UUID: __expectString,
  }) as any;
};

// de_StorageVirtualMachineNotFound omitted.

/**
 * deserializeAws_json1_1StorageVirtualMachines
 */
const de_StorageVirtualMachines = (output: any, context: __SerdeContext): StorageVirtualMachine[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_StorageVirtualMachine(entry, context);
    });
  return retVal;
};

// de_SubDirectoriesPaths omitted.

// de_SubnetIds omitted.

// de_SvmActiveDirectoryConfiguration omitted.

// de_SvmEndpoint omitted.

// de_SvmEndpoints omitted.

// de_Tag omitted.

// de_TagResourceResponse omitted.

// de_Tags omitted.

// de_TieringPolicy omitted.

// de_UnsupportedOperation omitted.

// de_UntagResourceResponse omitted.

/**
 * deserializeAws_json1_1UpdateDataRepositoryAssociationResponse
 */
const de_UpdateDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): UpdateDataRepositoryAssociationResponse => {
  return take(output, {
    Association: (_: any) => de_DataRepositoryAssociation(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateFileCacheResponse
 */
const de_UpdateFileCacheResponse = (output: any, context: __SerdeContext): UpdateFileCacheResponse => {
  return take(output, {
    FileCache: (_: any) => de_FileCache(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateFileSystemResponse
 */
const de_UpdateFileSystemResponse = (output: any, context: __SerdeContext): UpdateFileSystemResponse => {
  return take(output, {
    FileSystem: (_: any) => de_FileSystem(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateSnapshotResponse
 */
const de_UpdateSnapshotResponse = (output: any, context: __SerdeContext): UpdateSnapshotResponse => {
  return take(output, {
    Snapshot: (_: any) => de_Snapshot(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateStorageVirtualMachineResponse
 */
const de_UpdateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): UpdateStorageVirtualMachineResponse => {
  return take(output, {
    StorageVirtualMachine: (_: any) => de_StorageVirtualMachine(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1UpdateVolumeResponse
 */
const de_UpdateVolumeResponse = (output: any, context: __SerdeContext): UpdateVolumeResponse => {
  return take(output, {
    Volume: (_: any) => de_Volume(_, context),
  }) as any;
};

/**
 * deserializeAws_json1_1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return take(output, {
    AdministrativeActions: (_: any) => de_AdministrativeActions(_, context),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FileSystemId: __expectString,
    Lifecycle: __expectString,
    LifecycleTransitionReason: _json,
    Name: __expectString,
    OntapConfiguration: _json,
    OpenZFSConfiguration: _json,
    ResourceARN: __expectString,
    Tags: _json,
    VolumeId: __expectString,
    VolumeType: __expectString,
  }) as any;
};

// de_VolumeNotFound omitted.

/**
 * deserializeAws_json1_1Volumes
 */
const de_Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Volume(entry, context);
    });
  return retVal;
};

// de_WindowsAuditLogConfiguration omitted.

// de_WindowsFileSystemConfiguration omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const throwDefaultError = withBaseException(__BaseException);
const buildHttpRpcRequest = async (
  context: __SerdeContext,
  headers: __HeaderBag,
  path: string,
  resolvedHostname: string | undefined,
  body: any
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const contents: any = {
    protocol,
    hostname,
    port,
    method: "POST",
    path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
    headers,
  };
  if (resolvedHostname !== undefined) {
    contents.hostname = resolvedHostname;
  }
  if (body !== undefined) {
    contents.body = body;
  }
  return new __HttpRequest(contents);
};
function sharedHeaders(operation: string): __HeaderBag {
  return {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": `AWSSimbaAPIService_v20180301.${operation}`,
  };
}

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
