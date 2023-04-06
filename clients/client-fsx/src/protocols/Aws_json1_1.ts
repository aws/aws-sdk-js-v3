// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectString as __expectString,
  parseEpochTimestamp as __parseEpochTimestamp,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  HeaderBag as __HeaderBag,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  ActiveDirectoryBackupAttributes,
  ActiveDirectoryError,
  AdministrativeAction,
  AdministrativeActionFailureDetails,
  Alias,
  AssociateFileSystemAliasesRequest,
  AssociateFileSystemAliasesResponse,
  AutoExportPolicy,
  AutoImportPolicy,
  Backup,
  BackupBeingCopied,
  BackupFailureDetails,
  BackupInProgress,
  BackupNotFound,
  BackupRestoring,
  BadRequest,
  CancelDataRepositoryTaskRequest,
  CancelDataRepositoryTaskResponse,
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
  DataRepositoryConfiguration,
  DataRepositoryFailureDetails,
  DataRepositoryTask,
  DataRepositoryTaskEnded,
  DataRepositoryTaskExecuting,
  DataRepositoryTaskFailureDetails,
  DataRepositoryTaskFilter,
  DataRepositoryTaskNotFound,
  DataRepositoryTaskStatus,
  DeleteBackupRequest,
  DeleteBackupResponse,
  DeleteDataRepositoryAssociationRequest,
  DeleteDataRepositoryAssociationResponse,
  DeleteFileCacheRequest,
  DeleteFileCacheResponse,
  DeleteFileSystemLustreConfiguration,
  DeleteFileSystemLustreResponse,
  DeleteFileSystemOpenZFSConfiguration,
  DeleteFileSystemOpenZFSOption,
  DeleteFileSystemOpenZFSResponse,
  DeleteFileSystemRequest,
  DeleteFileSystemResponse,
  DeleteFileSystemWindowsConfiguration,
  DeleteFileSystemWindowsResponse,
  DeleteOpenZFSVolumeOption,
  DeleteSnapshotRequest,
  DeleteSnapshotResponse,
  DeleteStorageVirtualMachineRequest,
  DeleteStorageVirtualMachineResponse,
  DeleteVolumeOntapConfiguration,
  DeleteVolumeOntapResponse,
  DeleteVolumeOpenZFSConfiguration,
  DeleteVolumeRequest,
  DeleteVolumeResponse,
  DescribeBackupsRequest,
  DescribeBackupsResponse,
  DescribeDataRepositoryAssociationsRequest,
  DescribeDataRepositoryAssociationsResponse,
  DescribeDataRepositoryTasksRequest,
  DescribeDataRepositoryTasksResponse,
  DescribeFileCachesRequest,
  DescribeFileCachesResponse,
  DescribeFileSystemAliasesRequest,
  DescribeFileSystemAliasesResponse,
  DescribeFileSystemsRequest,
  DescribeFileSystemsResponse,
  DescribeSnapshotsRequest,
  DescribeSnapshotsResponse,
  DescribeStorageVirtualMachinesRequest,
  DescribeStorageVirtualMachinesResponse,
  DescribeVolumesRequest,
  DescribeVolumesResponse,
  DisassociateFileSystemAliasesRequest,
  DisassociateFileSystemAliasesResponse,
  DiskIopsConfiguration,
  EventType,
  FileCache,
  FileCacheCreating,
  FileCacheDataRepositoryAssociation,
  FileCacheFailureDetails,
  FileCacheLustreConfiguration,
  FileCacheLustreMetadataConfiguration,
  FileCacheNFSConfiguration,
  FileCacheNotFound,
  FileSystem,
  FileSystemEndpoint,
  FileSystemEndpoints,
  FileSystemFailureDetails,
  FileSystemMaintenanceOperation,
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
  LifecycleTransitionReason,
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  LustreFileSystemConfiguration,
  LustreLogConfiguration,
  LustreLogCreateConfiguration,
  LustreRootSquashConfiguration,
  MissingFileCacheConfiguration,
  MissingFileSystemConfiguration,
  MissingVolumeConfiguration,
  NFSDataRepositoryConfiguration,
  NotServiceResourceError,
  OntapFileSystemConfiguration,
  OntapVolumeConfiguration,
  OpenZFSClientConfiguration,
  OpenZFSCreateRootVolumeConfiguration,
  OpenZFSFileSystemConfiguration,
  OpenZFSNfsExport,
  OpenZFSOriginSnapshotConfiguration,
  OpenZFSUserOrGroupQuota,
  OpenZFSVolumeConfiguration,
  ReleaseFileSystemNfsV3LocksRequest,
  ReleaseFileSystemNfsV3LocksResponse,
  ResourceDoesNotSupportTagging,
  ResourceNotFound,
  RestoreOpenZFSVolumeOption,
  RestoreVolumeFromSnapshotRequest,
  RestoreVolumeFromSnapshotResponse,
  S3DataRepositoryConfiguration,
  SelfManagedActiveDirectoryAttributes,
  SelfManagedActiveDirectoryConfiguration,
  SelfManagedActiveDirectoryConfigurationUpdates,
  ServiceLimitExceeded,
  Snapshot,
  SnapshotFilter,
  SnapshotNotFound,
  SourceBackupUnavailable,
  StorageVirtualMachine,
  StorageVirtualMachineFilter,
  StorageVirtualMachineNotFound,
  SvmActiveDirectoryConfiguration,
  SvmEndpoint,
  SvmEndpoints,
  Tag,
  TagResourceRequest,
  TagResourceResponse,
  TieringPolicy,
  UnsupportedOperation,
  UntagResourceRequest,
  UntagResourceResponse,
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
  WindowsAuditLogConfiguration,
  WindowsAuditLogCreateConfiguration,
  WindowsFileSystemConfiguration,
} from "../models/models_0";

/**
 * serializeAws_json1_1AssociateFileSystemAliasesCommand
 */
export const se_AssociateFileSystemAliasesCommand = async (
  input: AssociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask",
  };
  let body: any;
  body = JSON.stringify(se_CancelDataRepositoryTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1CopyBackupCommand
 */
export const se_CopyBackupCommand = async (
  input: CopyBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CopyBackup",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateBackup",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileCache",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystem",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateSnapshot",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateVolume",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteBackup",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileCache",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileSystem",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteSnapshot",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteVolume",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeBackups",
  };
  let body: any;
  body = JSON.stringify(se_DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataRepositoryAssociationsCommand
 */
export const se_DescribeDataRepositoryAssociationsCommand = async (
  input: DescribeDataRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDataRepositoryAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeDataRepositoryTasksCommand
 */
export const se_DescribeDataRepositoryTasksCommand = async (
  input: DescribeDataRepositoryTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks",
  };
  let body: any;
  body = JSON.stringify(se_DescribeDataRepositoryTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFileCachesCommand
 */
export const se_DescribeFileCachesCommand = async (
  input: DescribeFileCachesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileCaches",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFileCachesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeFileSystemAliasesCommand
 */
export const se_DescribeFileSystemAliasesCommand = async (
  input: DescribeFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystems",
  };
  let body: any;
  body = JSON.stringify(se_DescribeFileSystemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeSnapshotsCommand
 */
export const se_DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeSnapshots",
  };
  let body: any;
  body = JSON.stringify(se_DescribeSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeStorageVirtualMachinesCommand
 */
export const se_DescribeStorageVirtualMachinesCommand = async (
  input: DescribeStorageVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines",
  };
  let body: any;
  body = JSON.stringify(se_DescribeStorageVirtualMachinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DescribeVolumesCommand
 */
export const se_DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeVolumes",
  };
  let body: any;
  body = JSON.stringify(se_DescribeVolumesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1DisassociateFileSystemAliasesCommand
 */
export const se_DisassociateFileSystemAliasesCommand = async (
  input: DisassociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(se_ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1ReleaseFileSystemNfsV3LocksCommand
 */
export const se_ReleaseFileSystemNfsV3LocksCommand = async (
  input: ReleaseFileSystemNfsV3LocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.TagResource",
  };
  let body: any;
  body = JSON.stringify(se_TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UntagResource",
  };
  let body: any;
  body = JSON.stringify(se_UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

/**
 * serializeAws_json1_1UpdateDataRepositoryAssociationCommand
 */
export const se_UpdateDataRepositoryAssociationCommand = async (
  input: UpdateDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileCache",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileSystem",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateSnapshot",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine",
  };
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
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateVolume",
  };
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
  contents = de_AssociateFileSystemAliasesResponse(data, context);
  const response: AssociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_CancelDataRepositoryTaskResponse(data, context);
  const response: CancelDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteDataRepositoryAssociationResponse(data, context);
  const response: DeleteDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteFileCacheResponse(data, context);
  const response: DeleteFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteFileSystemResponse(data, context);
  const response: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteSnapshotResponse(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteStorageVirtualMachineResponse(data, context);
  const response: DeleteStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DeleteVolumeResponse(data, context);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await de_VolumeNotFoundRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DescribeFileSystemAliasesResponse(data, context);
  const response: DescribeFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_DisassociateFileSystemAliasesResponse(data, context);
  const response: DisassociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents = de_UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  return Promise.resolve(response);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  const deserialized: any = de_ActiveDirectoryError(body, context);
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
  const deserialized: any = de_BackupBeingCopied(body, context);
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
  const deserialized: any = de_BackupInProgress(body, context);
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
  const deserialized: any = de_BackupNotFound(body, context);
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
  const deserialized: any = de_BackupRestoring(body, context);
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
  const deserialized: any = de_BadRequest(body, context);
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
  const deserialized: any = de_DataRepositoryAssociationNotFound(body, context);
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
  const deserialized: any = de_DataRepositoryTaskEnded(body, context);
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
  const deserialized: any = de_DataRepositoryTaskExecuting(body, context);
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
  const deserialized: any = de_DataRepositoryTaskNotFound(body, context);
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
  const deserialized: any = de_FileCacheNotFound(body, context);
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
  const deserialized: any = de_FileSystemNotFound(body, context);
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
  const deserialized: any = de_IncompatibleParameterError(body, context);
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
  const deserialized: any = de_IncompatibleRegionForMultiAZ(body, context);
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
  const deserialized: any = de_InternalServerError(body, context);
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
  const deserialized: any = de_InvalidDataRepositoryType(body, context);
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
  const deserialized: any = de_InvalidDestinationKmsKey(body, context);
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
  const deserialized: any = de_InvalidExportPath(body, context);
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
  const deserialized: any = de_InvalidImportPath(body, context);
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
  const deserialized: any = de_InvalidNetworkSettings(body, context);
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
  const deserialized: any = de_InvalidPerUnitStorageThroughput(body, context);
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
  const deserialized: any = de_InvalidRegion(body, context);
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
  const deserialized: any = de_InvalidSourceKmsKey(body, context);
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
  const deserialized: any = de_MissingFileCacheConfiguration(body, context);
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
  const deserialized: any = de_MissingFileSystemConfiguration(body, context);
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
  const deserialized: any = de_MissingVolumeConfiguration(body, context);
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
  const deserialized: any = de_NotServiceResourceError(body, context);
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
  const deserialized: any = de_ResourceDoesNotSupportTagging(body, context);
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
  const deserialized: any = de_ResourceNotFound(body, context);
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
  const deserialized: any = de_ServiceLimitExceeded(body, context);
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
  const deserialized: any = de_SnapshotNotFound(body, context);
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
  const deserialized: any = de_SourceBackupUnavailable(body, context);
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
  const deserialized: any = de_StorageVirtualMachineNotFound(body, context);
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
  const deserialized: any = de_UnsupportedOperation(body, context);
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
  const deserialized: any = de_VolumeNotFound(body, context);
  const exception = new VolumeNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

/**
 * serializeAws_json1_1AlternateDNSNames
 */
const se_AlternateDNSNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1AssociateFileSystemAliasesRequest
 */
const se_AssociateFileSystemAliasesRequest = (
  input: AssociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aliases != null && { Aliases: se_AlternateDNSNames(input.Aliases, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
  };
};

/**
 * serializeAws_json1_1AutoExportPolicy
 */
const se_AutoExportPolicy = (input: AutoExportPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: se_EventTypes(input.Events, context) }),
  };
};

/**
 * serializeAws_json1_1AutoImportPolicy
 */
const se_AutoImportPolicy = (input: AutoImportPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: se_EventTypes(input.Events, context) }),
  };
};

/**
 * serializeAws_json1_1BackupIds
 */
const se_BackupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1CancelDataRepositoryTaskRequest
 */
const se_CancelDataRepositoryTaskRequest = (input: CancelDataRepositoryTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.TaskId != null && { TaskId: input.TaskId }),
  };
};

/**
 * serializeAws_json1_1CompletionReport
 */
const se_CompletionReport = (input: CompletionReport, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

/**
 * serializeAws_json1_1CopyBackupRequest
 */
const se_CopyBackupRequest = (input: CopyBackupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CopyTags != null && { CopyTags: input.CopyTags }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SourceBackupId != null && { SourceBackupId: input.SourceBackupId }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateBackupRequest
 */
const se_CreateBackupRequest = (input: CreateBackupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1CreateDataRepositoryAssociationRequest
 */
const se_CreateDataRepositoryAssociationRequest = (
  input: CreateDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BatchImportMetaDataOnCreate != null && {
      BatchImportMetaDataOnCreate: input.BatchImportMetaDataOnCreate,
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DataRepositoryPath != null && { DataRepositoryPath: input.DataRepositoryPath }),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.FileSystemPath != null && { FileSystemPath: input.FileSystemPath }),
    ...(input.ImportedFileChunkSize != null && { ImportedFileChunkSize: input.ImportedFileChunkSize }),
    ...(input.S3 != null && { S3: se_S3DataRepositoryConfiguration(input.S3, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateDataRepositoryTaskRequest
 */
const se_CreateDataRepositoryTaskRequest = (input: CreateDataRepositoryTaskRequest, context: __SerdeContext): any => {
  return {
    ...(input.CapacityToRelease != null && { CapacityToRelease: input.CapacityToRelease }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Paths != null && { Paths: se_DataRepositoryTaskPaths(input.Paths, context) }),
    ...(input.Report != null && { Report: se_CompletionReport(input.Report, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1CreateFileCacheDataRepositoryAssociations
 */
const se_CreateFileCacheDataRepositoryAssociations = (
  input: FileCacheDataRepositoryAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FileCacheDataRepositoryAssociation(entry, context);
    });
};

/**
 * serializeAws_json1_1CreateFileCacheLustreConfiguration
 */
const se_CreateFileCacheLustreConfiguration = (
  input: CreateFileCacheLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.MetadataConfiguration != null && {
      MetadataConfiguration: se_FileCacheLustreMetadataConfiguration(input.MetadataConfiguration, context),
    }),
    ...(input.PerUnitStorageThroughput != null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1CreateFileCacheRequest
 */
const se_CreateFileCacheRequest = (input: CreateFileCacheRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CopyTagsToDataRepositoryAssociations != null && {
      CopyTagsToDataRepositoryAssociations: input.CopyTagsToDataRepositoryAssociations,
    }),
    ...(input.DataRepositoryAssociations != null && {
      DataRepositoryAssociations: se_CreateFileCacheDataRepositoryAssociations(
        input.DataRepositoryAssociations,
        context
      ),
    }),
    ...(input.FileCacheType != null && { FileCacheType: input.FileCacheType }),
    ...(input.FileCacheTypeVersion != null && { FileCacheTypeVersion: input.FileCacheTypeVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: se_CreateFileCacheLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateFileSystemFromBackupRequest
 */
const se_CreateFileSystemFromBackupRequest = (
  input: CreateFileSystemFromBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemTypeVersion != null && { FileSystemTypeVersion: input.FileSystemTypeVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: se_CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_CreateFileSystemOpenZFSConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: se_CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateFileSystemLustreConfiguration
 */
const se_CreateFileSystemLustreConfiguration = (
  input: CreateFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoImportPolicy != null && { AutoImportPolicy: input.AutoImportPolicy }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.DriveCacheType != null && { DriveCacheType: input.DriveCacheType }),
    ...(input.ExportPath != null && { ExportPath: input.ExportPath }),
    ...(input.ImportPath != null && { ImportPath: input.ImportPath }),
    ...(input.ImportedFileChunkSize != null && { ImportedFileChunkSize: input.ImportedFileChunkSize }),
    ...(input.LogConfiguration != null && {
      LogConfiguration: se_LustreLogCreateConfiguration(input.LogConfiguration, context),
    }),
    ...(input.PerUnitStorageThroughput != null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput }),
    ...(input.RootSquashConfiguration != null && {
      RootSquashConfiguration: se_LustreRootSquashConfiguration(input.RootSquashConfiguration, context),
    }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1CreateFileSystemOntapConfiguration
 */
const se_CreateFileSystemOntapConfiguration = (
  input: CreateFileSystemOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.DiskIopsConfiguration != null && {
      DiskIopsConfiguration: se_DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.EndpointIpAddressRange != null && { EndpointIpAddressRange: input.EndpointIpAddressRange }),
    ...(input.FsxAdminPassword != null && { FsxAdminPassword: input.FsxAdminPassword }),
    ...(input.PreferredSubnetId != null && { PreferredSubnetId: input.PreferredSubnetId }),
    ...(input.RouteTableIds != null && { RouteTableIds: se_RouteTableIds(input.RouteTableIds, context) }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1CreateFileSystemOpenZFSConfiguration
 */
const se_CreateFileSystemOpenZFSConfiguration = (
  input: CreateFileSystemOpenZFSConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.CopyTagsToVolumes != null && { CopyTagsToVolumes: input.CopyTagsToVolumes }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.DiskIopsConfiguration != null && {
      DiskIopsConfiguration: se_DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.RootVolumeConfiguration != null && {
      RootVolumeConfiguration: se_OpenZFSCreateRootVolumeConfiguration(input.RootVolumeConfiguration, context),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1CreateFileSystemRequest
 */
const se_CreateFileSystemRequest = (input: CreateFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemType != null && { FileSystemType: input.FileSystemType }),
    ...(input.FileSystemTypeVersion != null && { FileSystemTypeVersion: input.FileSystemTypeVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: se_CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: se_CreateFileSystemOntapConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_CreateFileSystemOpenZFSConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.SecurityGroupIds != null && { SecurityGroupIds: se_SecurityGroupIds(input.SecurityGroupIds, context) }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
    ...(input.SubnetIds != null && { SubnetIds: se_SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: se_CreateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateFileSystemWindowsConfiguration
 */
const se_CreateFileSystemWindowsConfiguration = (
  input: CreateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryId != null && { ActiveDirectoryId: input.ActiveDirectoryId }),
    ...(input.Aliases != null && { Aliases: se_AlternateDNSNames(input.Aliases, context) }),
    ...(input.AuditLogConfiguration != null && {
      AuditLogConfiguration: se_WindowsAuditLogCreateConfiguration(input.AuditLogConfiguration, context),
    }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.PreferredSubnetId != null && { PreferredSubnetId: input.PreferredSubnetId }),
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: se_SelfManagedActiveDirectoryConfiguration(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1CreateOntapVolumeConfiguration
 */
const se_CreateOntapVolumeConfiguration = (input: CreateOntapVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.JunctionPath != null && { JunctionPath: input.JunctionPath }),
    ...(input.OntapVolumeType != null && { OntapVolumeType: input.OntapVolumeType }),
    ...(input.SecurityStyle != null && { SecurityStyle: input.SecurityStyle }),
    ...(input.SizeInMegabytes != null && { SizeInMegabytes: input.SizeInMegabytes }),
    ...(input.SnapshotPolicy != null && { SnapshotPolicy: input.SnapshotPolicy }),
    ...(input.StorageEfficiencyEnabled != null && { StorageEfficiencyEnabled: input.StorageEfficiencyEnabled }),
    ...(input.StorageVirtualMachineId != null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
    ...(input.TieringPolicy != null && { TieringPolicy: se_TieringPolicy(input.TieringPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1CreateOpenZFSOriginSnapshotConfiguration
 */
const se_CreateOpenZFSOriginSnapshotConfiguration = (
  input: CreateOpenZFSOriginSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyStrategy != null && { CopyStrategy: input.CopyStrategy }),
    ...(input.SnapshotARN != null && { SnapshotARN: input.SnapshotARN }),
  };
};

/**
 * serializeAws_json1_1CreateOpenZFSVolumeConfiguration
 */
const se_CreateOpenZFSVolumeConfiguration = (input: CreateOpenZFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CopyTagsToSnapshots != null && { CopyTagsToSnapshots: input.CopyTagsToSnapshots }),
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.NfsExports != null && { NfsExports: se_OpenZFSNfsExports(input.NfsExports, context) }),
    ...(input.OriginSnapshot != null && {
      OriginSnapshot: se_CreateOpenZFSOriginSnapshotConfiguration(input.OriginSnapshot, context),
    }),
    ...(input.ParentVolumeId != null && { ParentVolumeId: input.ParentVolumeId }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RecordSizeKiB != null && { RecordSizeKiB: input.RecordSizeKiB }),
    ...(input.StorageCapacityQuotaGiB != null && { StorageCapacityQuotaGiB: input.StorageCapacityQuotaGiB }),
    ...(input.StorageCapacityReservationGiB != null && {
      StorageCapacityReservationGiB: input.StorageCapacityReservationGiB,
    }),
    ...(input.UserAndGroupQuotas != null && {
      UserAndGroupQuotas: se_OpenZFSUserAndGroupQuotas(input.UserAndGroupQuotas, context),
    }),
  };
};

/**
 * serializeAws_json1_1CreateSnapshotRequest
 */
const se_CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1CreateStorageVirtualMachineRequest
 */
const se_CreateStorageVirtualMachineRequest = (
  input: CreateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryConfiguration != null && {
      ActiveDirectoryConfiguration: se_CreateSvmActiveDirectoryConfiguration(
        input.ActiveDirectoryConfiguration,
        context
      ),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RootVolumeSecurityStyle != null && { RootVolumeSecurityStyle: input.RootVolumeSecurityStyle }),
    ...(input.SvmAdminPassword != null && { SvmAdminPassword: input.SvmAdminPassword }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateSvmActiveDirectoryConfiguration
 */
const se_CreateSvmActiveDirectoryConfiguration = (
  input: CreateSvmActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetBiosName != null && { NetBiosName: input.NetBiosName }),
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: se_SelfManagedActiveDirectoryConfiguration(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1CreateVolumeFromBackupRequest
 */
const se_CreateVolumeFromBackupRequest = (input: CreateVolumeFromBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: se_CreateOntapVolumeConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1CreateVolumeRequest
 */
const se_CreateVolumeRequest = (input: CreateVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: se_CreateOntapVolumeConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_CreateOpenZFSVolumeConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

/**
 * serializeAws_json1_1DataRepositoryAssociationIds
 */
const se_DataRepositoryAssociationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DataRepositoryTaskFilter
 */
const se_DataRepositoryTaskFilter = (input: DataRepositoryTaskFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_DataRepositoryTaskFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1DataRepositoryTaskFilters
 */
const se_DataRepositoryTaskFilters = (input: DataRepositoryTaskFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataRepositoryTaskFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1DataRepositoryTaskFilterValues
 */
const se_DataRepositoryTaskFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DataRepositoryTaskPaths
 */
const se_DataRepositoryTaskPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteBackupRequest
 */
const se_DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
  };
};

/**
 * serializeAws_json1_1DeleteDataRepositoryAssociationRequest
 */
const se_DeleteDataRepositoryAssociationRequest = (
  input: DeleteDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DeleteDataInFileSystem != null && { DeleteDataInFileSystem: input.DeleteDataInFileSystem }),
  };
};

/**
 * serializeAws_json1_1DeleteFileCacheRequest
 */
const se_DeleteFileCacheRequest = (input: DeleteFileCacheRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileCacheId != null && { FileCacheId: input.FileCacheId }),
  };
};

/**
 * serializeAws_json1_1DeleteFileSystemLustreConfiguration
 */
const se_DeleteFileSystemLustreConfiguration = (
  input: DeleteFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: se_Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

/**
 * serializeAws_json1_1DeleteFileSystemOpenZFSConfiguration
 */
const se_DeleteFileSystemOpenZFSConfiguration = (
  input: DeleteFileSystemOpenZFSConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: se_Tags(input.FinalBackupTags, context) }),
    ...(input.Options != null && { Options: se_DeleteFileSystemOpenZFSOptions(input.Options, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

/**
 * serializeAws_json1_1DeleteFileSystemOpenZFSOptions
 */
const se_DeleteFileSystemOpenZFSOptions = (
  input: (DeleteFileSystemOpenZFSOption | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteFileSystemRequest
 */
const se_DeleteFileSystemRequest = (input: DeleteFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: se_DeleteFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_DeleteFileSystemOpenZFSConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: se_DeleteFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1DeleteFileSystemWindowsConfiguration
 */
const se_DeleteFileSystemWindowsConfiguration = (
  input: DeleteFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: se_Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

/**
 * serializeAws_json1_1DeleteOpenZFSVolumeOptions
 */
const se_DeleteOpenZFSVolumeOptions = (input: (DeleteOpenZFSVolumeOption | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1DeleteSnapshotRequest
 */
const se_DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

/**
 * serializeAws_json1_1DeleteStorageVirtualMachineRequest
 */
const se_DeleteStorageVirtualMachineRequest = (
  input: DeleteStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.StorageVirtualMachineId != null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
  };
};

/**
 * serializeAws_json1_1DeleteVolumeOntapConfiguration
 */
const se_DeleteVolumeOntapConfiguration = (input: DeleteVolumeOntapConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: se_Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

/**
 * serializeAws_json1_1DeleteVolumeOpenZFSConfiguration
 */
const se_DeleteVolumeOpenZFSConfiguration = (input: DeleteVolumeOpenZFSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Options != null && { Options: se_DeleteOpenZFSVolumeOptions(input.Options, context) }),
  };
};

/**
 * serializeAws_json1_1DeleteVolumeRequest
 */
const se_DeleteVolumeRequest = (input: DeleteVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: se_DeleteVolumeOntapConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_DeleteVolumeOpenZFSConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1DescribeBackupsRequest
 */
const se_DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupIds != null && { BackupIds: se_BackupIds(input.BackupIds, context) }),
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDataRepositoryAssociationsRequest
 */
const se_DescribeDataRepositoryAssociationsRequest = (
  input: DescribeDataRepositoryAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationIds != null && {
      AssociationIds: se_DataRepositoryAssociationIds(input.AssociationIds, context),
    }),
    ...(input.Filters != null && { Filters: se_Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeDataRepositoryTasksRequest
 */
const se_DescribeDataRepositoryTasksRequest = (
  input: DescribeDataRepositoryTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_DataRepositoryTaskFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskIds != null && { TaskIds: se_TaskIds(input.TaskIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeFileCachesRequest
 */
const se_DescribeFileCachesRequest = (input: DescribeFileCachesRequest, context: __SerdeContext): any => {
  return {
    ...(input.FileCacheIds != null && { FileCacheIds: se_FileCacheIds(input.FileCacheIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFileSystemAliasesRequest
 */
const se_DescribeFileSystemAliasesRequest = (input: DescribeFileSystemAliasesRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeFileSystemsRequest
 */
const se_DescribeFileSystemsRequest = (input: DescribeFileSystemsRequest, context: __SerdeContext): any => {
  return {
    ...(input.FileSystemIds != null && { FileSystemIds: se_FileSystemIds(input.FileSystemIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

/**
 * serializeAws_json1_1DescribeSnapshotsRequest
 */
const se_DescribeSnapshotsRequest = (input: DescribeSnapshotsRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_SnapshotFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SnapshotIds != null && { SnapshotIds: se_SnapshotIds(input.SnapshotIds, context) }),
  };
};

/**
 * serializeAws_json1_1DescribeStorageVirtualMachinesRequest
 */
const se_DescribeStorageVirtualMachinesRequest = (
  input: DescribeStorageVirtualMachinesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: se_StorageVirtualMachineFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StorageVirtualMachineIds != null && {
      StorageVirtualMachineIds: se_StorageVirtualMachineIds(input.StorageVirtualMachineIds, context),
    }),
  };
};

/**
 * serializeAws_json1_1DescribeVolumesRequest
 */
const se_DescribeVolumesRequest = (input: DescribeVolumesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: se_VolumeFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.VolumeIds != null && { VolumeIds: se_VolumeIds(input.VolumeIds, context) }),
  };
};

/**
 * serializeAws_json1_1DisassociateFileSystemAliasesRequest
 */
const se_DisassociateFileSystemAliasesRequest = (
  input: DisassociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aliases != null && { Aliases: se_AlternateDNSNames(input.Aliases, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
  };
};

/**
 * serializeAws_json1_1DiskIopsConfiguration
 */
const se_DiskIopsConfiguration = (input: DiskIopsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

/**
 * serializeAws_json1_1DnsIps
 */
const se_DnsIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1EventTypes
 */
const se_EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FileCacheDataRepositoryAssociation
 */
const se_FileCacheDataRepositoryAssociation = (
  input: FileCacheDataRepositoryAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataRepositoryPath != null && { DataRepositoryPath: input.DataRepositoryPath }),
    ...(input.DataRepositorySubdirectories != null && {
      DataRepositorySubdirectories: se_SubDirectoriesPaths(input.DataRepositorySubdirectories, context),
    }),
    ...(input.FileCachePath != null && { FileCachePath: input.FileCachePath }),
    ...(input.NFS != null && { NFS: se_FileCacheNFSConfiguration(input.NFS, context) }),
  };
};

/**
 * serializeAws_json1_1FileCacheIds
 */
const se_FileCacheIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1FileCacheLustreMetadataConfiguration
 */
const se_FileCacheLustreMetadataConfiguration = (
  input: FileCacheLustreMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
  };
};

/**
 * serializeAws_json1_1FileCacheNFSConfiguration
 */
const se_FileCacheNFSConfiguration = (input: FileCacheNFSConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DnsIps != null && { DnsIps: se_RepositoryDnsIps(input.DnsIps, context) }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

/**
 * serializeAws_json1_1FileSystemIds
 */
const se_FileSystemIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Filter
 */
const se_Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_FilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1Filters
 */
const se_Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Filter(entry, context);
    });
};

/**
 * serializeAws_json1_1FilterValues
 */
const se_FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1ListTagsForResourceRequest
 */
const se_ListTagsForResourceRequest = (input: ListTagsForResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

/**
 * serializeAws_json1_1LustreLogCreateConfiguration
 */
const se_LustreLogCreateConfiguration = (input: LustreLogCreateConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.Level != null && { Level: input.Level }),
  };
};

/**
 * serializeAws_json1_1LustreNoSquashNids
 */
const se_LustreNoSquashNids = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1LustreRootSquashConfiguration
 */
const se_LustreRootSquashConfiguration = (input: LustreRootSquashConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.NoSquashNids != null && { NoSquashNids: se_LustreNoSquashNids(input.NoSquashNids, context) }),
    ...(input.RootSquash != null && { RootSquash: input.RootSquash }),
  };
};

/**
 * serializeAws_json1_1OpenZFSClientConfiguration
 */
const se_OpenZFSClientConfiguration = (input: OpenZFSClientConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Clients != null && { Clients: input.Clients }),
    ...(input.Options != null && { Options: se_OpenZFSNfsExportOptions(input.Options, context) }),
  };
};

/**
 * serializeAws_json1_1OpenZFSClientConfigurations
 */
const se_OpenZFSClientConfigurations = (input: OpenZFSClientConfiguration[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpenZFSClientConfiguration(entry, context);
    });
};

/**
 * serializeAws_json1_1OpenZFSCreateRootVolumeConfiguration
 */
const se_OpenZFSCreateRootVolumeConfiguration = (
  input: OpenZFSCreateRootVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTagsToSnapshots != null && { CopyTagsToSnapshots: input.CopyTagsToSnapshots }),
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.NfsExports != null && { NfsExports: se_OpenZFSNfsExports(input.NfsExports, context) }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RecordSizeKiB != null && { RecordSizeKiB: input.RecordSizeKiB }),
    ...(input.UserAndGroupQuotas != null && {
      UserAndGroupQuotas: se_OpenZFSUserAndGroupQuotas(input.UserAndGroupQuotas, context),
    }),
  };
};

/**
 * serializeAws_json1_1OpenZFSNfsExport
 */
const se_OpenZFSNfsExport = (input: OpenZFSNfsExport, context: __SerdeContext): any => {
  return {
    ...(input.ClientConfigurations != null && {
      ClientConfigurations: se_OpenZFSClientConfigurations(input.ClientConfigurations, context),
    }),
  };
};

/**
 * serializeAws_json1_1OpenZFSNfsExportOptions
 */
const se_OpenZFSNfsExportOptions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1OpenZFSNfsExports
 */
const se_OpenZFSNfsExports = (input: OpenZFSNfsExport[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpenZFSNfsExport(entry, context);
    });
};

/**
 * serializeAws_json1_1OpenZFSUserAndGroupQuotas
 */
const se_OpenZFSUserAndGroupQuotas = (input: OpenZFSUserOrGroupQuota[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_OpenZFSUserOrGroupQuota(entry, context);
    });
};

/**
 * serializeAws_json1_1OpenZFSUserOrGroupQuota
 */
const se_OpenZFSUserOrGroupQuota = (input: OpenZFSUserOrGroupQuota, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.StorageCapacityQuotaGiB != null && { StorageCapacityQuotaGiB: input.StorageCapacityQuotaGiB }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_json1_1ReleaseFileSystemNfsV3LocksRequest
 */
const se_ReleaseFileSystemNfsV3LocksRequest = (
  input: ReleaseFileSystemNfsV3LocksRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
  };
};

/**
 * serializeAws_json1_1RepositoryDnsIps
 */
const se_RepositoryDnsIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RestoreOpenZFSVolumeOptions
 */
const se_RestoreOpenZFSVolumeOptions = (
  input: (RestoreOpenZFSVolumeOption | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1RestoreVolumeFromSnapshotRequest
 */
const se_RestoreVolumeFromSnapshotRequest = (input: RestoreVolumeFromSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Options != null && { Options: se_RestoreOpenZFSVolumeOptions(input.Options, context) }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1RouteTableIds
 */
const se_RouteTableIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1S3DataRepositoryConfiguration
 */
const se_S3DataRepositoryConfiguration = (input: S3DataRepositoryConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AutoExportPolicy != null && { AutoExportPolicy: se_AutoExportPolicy(input.AutoExportPolicy, context) }),
    ...(input.AutoImportPolicy != null && { AutoImportPolicy: se_AutoImportPolicy(input.AutoImportPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1SecurityGroupIds
 */
const se_SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SelfManagedActiveDirectoryConfiguration
 */
const se_SelfManagedActiveDirectoryConfiguration = (
  input: SelfManagedActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps != null && { DnsIps: se_DnsIps(input.DnsIps, context) }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.FileSystemAdministratorsGroup != null && {
      FileSystemAdministratorsGroup: input.FileSystemAdministratorsGroup,
    }),
    ...(input.OrganizationalUnitDistinguishedName != null && {
      OrganizationalUnitDistinguishedName: input.OrganizationalUnitDistinguishedName,
    }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates
 */
const se_SelfManagedActiveDirectoryConfigurationUpdates = (
  input: SelfManagedActiveDirectoryConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps != null && { DnsIps: se_DnsIps(input.DnsIps, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

/**
 * serializeAws_json1_1SnapshotFilter
 */
const se_SnapshotFilter = (input: SnapshotFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_SnapshotFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1SnapshotFilters
 */
const se_SnapshotFilters = (input: SnapshotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_SnapshotFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1SnapshotFilterValues
 */
const se_SnapshotFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SnapshotIds
 */
const se_SnapshotIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StorageVirtualMachineFilter
 */
const se_StorageVirtualMachineFilter = (input: StorageVirtualMachineFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_StorageVirtualMachineFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1StorageVirtualMachineFilters
 */
const se_StorageVirtualMachineFilters = (input: StorageVirtualMachineFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_StorageVirtualMachineFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1StorageVirtualMachineFilterValues
 */
const se_StorageVirtualMachineFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1StorageVirtualMachineIds
 */
const se_StorageVirtualMachineIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubDirectoriesPaths
 */
const se_SubDirectoriesPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1SubnetIds
 */
const se_SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1Tag
 */
const se_Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

/**
 * serializeAws_json1_1TagKeys
 */
const se_TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TagResourceRequest
 */
const se_TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
  };
};

/**
 * serializeAws_json1_1Tags
 */
const se_Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Tag(entry, context);
    });
};

/**
 * serializeAws_json1_1TaskIds
 */
const se_TaskIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1TieringPolicy
 */
const se_TieringPolicy = (input: TieringPolicy, context: __SerdeContext): any => {
  return {
    ...(input.CoolingPeriod != null && { CoolingPeriod: input.CoolingPeriod }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_json1_1UntagResourceRequest
 */
const se_UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: se_TagKeys(input.TagKeys, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateDataRepositoryAssociationRequest
 */
const se_UpdateDataRepositoryAssociationRequest = (
  input: UpdateDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ImportedFileChunkSize != null && { ImportedFileChunkSize: input.ImportedFileChunkSize }),
    ...(input.S3 != null && { S3: se_S3DataRepositoryConfiguration(input.S3, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateFileCacheLustreConfiguration
 */
const se_UpdateFileCacheLustreConfiguration = (
  input: UpdateFileCacheLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1UpdateFileCacheRequest
 */
const se_UpdateFileCacheRequest = (input: UpdateFileCacheRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileCacheId != null && { FileCacheId: input.FileCacheId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: se_UpdateFileCacheLustreConfiguration(input.LustreConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateFileSystemLustreConfiguration
 */
const se_UpdateFileSystemLustreConfiguration = (
  input: UpdateFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoImportPolicy != null && { AutoImportPolicy: input.AutoImportPolicy }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.LogConfiguration != null && {
      LogConfiguration: se_LustreLogCreateConfiguration(input.LogConfiguration, context),
    }),
    ...(input.RootSquashConfiguration != null && {
      RootSquashConfiguration: se_LustreRootSquashConfiguration(input.RootSquashConfiguration, context),
    }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1UpdateFileSystemOntapConfiguration
 */
const se_UpdateFileSystemOntapConfiguration = (
  input: UpdateFileSystemOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddRouteTableIds != null && { AddRouteTableIds: se_RouteTableIds(input.AddRouteTableIds, context) }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DiskIopsConfiguration != null && {
      DiskIopsConfiguration: se_DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.FsxAdminPassword != null && { FsxAdminPassword: input.FsxAdminPassword }),
    ...(input.RemoveRouteTableIds != null && {
      RemoveRouteTableIds: se_RouteTableIds(input.RemoveRouteTableIds, context),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1UpdateFileSystemOpenZFSConfiguration
 */
const se_UpdateFileSystemOpenZFSConfiguration = (
  input: UpdateFileSystemOpenZFSConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.CopyTagsToVolumes != null && { CopyTagsToVolumes: input.CopyTagsToVolumes }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DiskIopsConfiguration != null && {
      DiskIopsConfiguration: se_DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1UpdateFileSystemRequest
 */
const se_UpdateFileSystemRequest = (input: UpdateFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: se_UpdateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: se_UpdateFileSystemOntapConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_UpdateFileSystemOpenZFSConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: se_UpdateFileSystemWindowsConfiguration(input.WindowsConfiguration, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateFileSystemWindowsConfiguration
 */
const se_UpdateFileSystemWindowsConfiguration = (
  input: UpdateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogConfiguration != null && {
      AuditLogConfiguration: se_WindowsAuditLogCreateConfiguration(input.AuditLogConfiguration, context),
    }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: se_SelfManagedActiveDirectoryConfigurationUpdates(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

/**
 * serializeAws_json1_1UpdateOntapVolumeConfiguration
 */
const se_UpdateOntapVolumeConfiguration = (input: UpdateOntapVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.JunctionPath != null && { JunctionPath: input.JunctionPath }),
    ...(input.SecurityStyle != null && { SecurityStyle: input.SecurityStyle }),
    ...(input.SizeInMegabytes != null && { SizeInMegabytes: input.SizeInMegabytes }),
    ...(input.SnapshotPolicy != null && { SnapshotPolicy: input.SnapshotPolicy }),
    ...(input.StorageEfficiencyEnabled != null && { StorageEfficiencyEnabled: input.StorageEfficiencyEnabled }),
    ...(input.TieringPolicy != null && { TieringPolicy: se_TieringPolicy(input.TieringPolicy, context) }),
  };
};

/**
 * serializeAws_json1_1UpdateOpenZFSVolumeConfiguration
 */
const se_UpdateOpenZFSVolumeConfiguration = (input: UpdateOpenZFSVolumeConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.NfsExports != null && { NfsExports: se_OpenZFSNfsExports(input.NfsExports, context) }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RecordSizeKiB != null && { RecordSizeKiB: input.RecordSizeKiB }),
    ...(input.StorageCapacityQuotaGiB != null && { StorageCapacityQuotaGiB: input.StorageCapacityQuotaGiB }),
    ...(input.StorageCapacityReservationGiB != null && {
      StorageCapacityReservationGiB: input.StorageCapacityReservationGiB,
    }),
    ...(input.UserAndGroupQuotas != null && {
      UserAndGroupQuotas: se_OpenZFSUserAndGroupQuotas(input.UserAndGroupQuotas, context),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateSnapshotRequest
 */
const se_UpdateSnapshotRequest = (input: UpdateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

/**
 * serializeAws_json1_1UpdateStorageVirtualMachineRequest
 */
const se_UpdateStorageVirtualMachineRequest = (
  input: UpdateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryConfiguration != null && {
      ActiveDirectoryConfiguration: se_UpdateSvmActiveDirectoryConfiguration(
        input.ActiveDirectoryConfiguration,
        context
      ),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.StorageVirtualMachineId != null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
    ...(input.SvmAdminPassword != null && { SvmAdminPassword: input.SvmAdminPassword }),
  };
};

/**
 * serializeAws_json1_1UpdateSvmActiveDirectoryConfiguration
 */
const se_UpdateSvmActiveDirectoryConfiguration = (
  input: UpdateSvmActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: se_SelfManagedActiveDirectoryConfigurationUpdates(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
  };
};

/**
 * serializeAws_json1_1UpdateVolumeRequest
 */
const se_UpdateVolumeRequest = (input: UpdateVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: se_UpdateOntapVolumeConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: se_UpdateOpenZFSVolumeConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

/**
 * serializeAws_json1_1VolumeFilter
 */
const se_VolumeFilter = (input: VolumeFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: se_VolumeFilterValues(input.Values, context) }),
  };
};

/**
 * serializeAws_json1_1VolumeFilters
 */
const se_VolumeFilters = (input: VolumeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VolumeFilter(entry, context);
    });
};

/**
 * serializeAws_json1_1VolumeFilterValues
 */
const se_VolumeFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1VolumeIds
 */
const se_VolumeIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_json1_1WindowsAuditLogCreateConfiguration
 */
const se_WindowsAuditLogCreateConfiguration = (
  input: WindowsAuditLogCreateConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogDestination != null && { AuditLogDestination: input.AuditLogDestination }),
    ...(input.FileAccessAuditLogLevel != null && { FileAccessAuditLogLevel: input.FileAccessAuditLogLevel }),
    ...(input.FileShareAccessAuditLogLevel != null && {
      FileShareAccessAuditLogLevel: input.FileShareAccessAuditLogLevel,
    }),
  };
};

/**
 * deserializeAws_json1_1ActiveDirectoryBackupAttributes
 */
const de_ActiveDirectoryBackupAttributes = (output: any, context: __SerdeContext): ActiveDirectoryBackupAttributes => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    DomainName: __expectString(output.DomainName),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1ActiveDirectoryError
 */
const de_ActiveDirectoryError = (output: any, context: __SerdeContext): ActiveDirectoryError => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1AdministrativeAction
 */
const de_AdministrativeAction = (output: any, context: __SerdeContext): AdministrativeAction => {
  return {
    AdministrativeActionType: __expectString(output.AdministrativeActionType),
    FailureDetails:
      output.FailureDetails != null ? de_AdministrativeActionFailureDetails(output.FailureDetails, context) : undefined,
    ProgressPercent: __expectInt32(output.ProgressPercent),
    RequestTime:
      output.RequestTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestTime)))
        : undefined,
    Status: __expectString(output.Status),
    TargetFileSystemValues:
      output.TargetFileSystemValues != null ? de_FileSystem(output.TargetFileSystemValues, context) : undefined,
    TargetSnapshotValues:
      output.TargetSnapshotValues != null ? de_Snapshot(output.TargetSnapshotValues, context) : undefined,
    TargetVolumeValues: output.TargetVolumeValues != null ? de_Volume(output.TargetVolumeValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AdministrativeActionFailureDetails
 */
const de_AdministrativeActionFailureDetails = (
  output: any,
  context: __SerdeContext
): AdministrativeActionFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1AdministrativeActions
 */
const de_AdministrativeActions = (output: any, context: __SerdeContext): AdministrativeAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdministrativeAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1Alias
 */
const de_Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1Aliases
 */
const de_Aliases = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Alias(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1AssociateFileSystemAliasesResponse
 */
const de_AssociateFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): AssociateFileSystemAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? de_Aliases(output.Aliases, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoExportPolicy
 */
const de_AutoExportPolicy = (output: any, context: __SerdeContext): AutoExportPolicy => {
  return {
    Events: output.Events != null ? de_EventTypes(output.Events, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1AutoImportPolicy
 */
const de_AutoImportPolicy = (output: any, context: __SerdeContext): AutoImportPolicy => {
  return {
    Events: output.Events != null ? de_EventTypes(output.Events, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Backup
 */
const de_Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupId: __expectString(output.BackupId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DirectoryInformation:
      output.DirectoryInformation != null
        ? de_ActiveDirectoryBackupAttributes(output.DirectoryInformation, context)
        : undefined,
    FailureDetails: output.FailureDetails != null ? de_BackupFailureDetails(output.FailureDetails, context) : undefined,
    FileSystem: output.FileSystem != null ? de_FileSystem(output.FileSystem, context) : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    OwnerId: __expectString(output.OwnerId),
    ProgressPercent: __expectInt32(output.ProgressPercent),
    ResourceARN: __expectString(output.ResourceARN),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupId: __expectString(output.SourceBackupId),
    SourceBackupRegion: __expectString(output.SourceBackupRegion),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Volume: output.Volume != null ? de_Volume(output.Volume, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1BackupBeingCopied
 */
const de_BackupBeingCopied = (output: any, context: __SerdeContext): BackupBeingCopied => {
  return {
    BackupId: __expectString(output.BackupId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1BackupFailureDetails
 */
const de_BackupFailureDetails = (output: any, context: __SerdeContext): BackupFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1BackupInProgress
 */
const de_BackupInProgress = (output: any, context: __SerdeContext): BackupInProgress => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1BackupNotFound
 */
const de_BackupNotFound = (output: any, context: __SerdeContext): BackupNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1BackupRestoring
 */
const de_BackupRestoring = (output: any, context: __SerdeContext): BackupRestoring => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Backups
 */
const de_Backups = (output: any, context: __SerdeContext): Backup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Backup(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1BadRequest
 */
const de_BadRequest = (output: any, context: __SerdeContext): BadRequest => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1CancelDataRepositoryTaskResponse
 */
const de_CancelDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CancelDataRepositoryTaskResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    TaskId: __expectString(output.TaskId),
  } as any;
};

/**
 * deserializeAws_json1_1CompletionReport
 */
const de_CompletionReport = (output: any, context: __SerdeContext): CompletionReport => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Format: __expectString(output.Format),
    Path: __expectString(output.Path),
    Scope: __expectString(output.Scope),
  } as any;
};

/**
 * deserializeAws_json1_1CopyBackupResponse
 */
const de_CopyBackupResponse = (output: any, context: __SerdeContext): CopyBackupResponse => {
  return {
    Backup: output.Backup != null ? de_Backup(output.Backup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateBackupResponse
 */
const de_CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return {
    Backup: output.Backup != null ? de_Backup(output.Backup, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDataRepositoryAssociationResponse
 */
const de_CreateDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryAssociationResponse => {
  return {
    Association: output.Association != null ? de_DataRepositoryAssociation(output.Association, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateDataRepositoryTaskResponse
 */
const de_CreateDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryTaskResponse => {
  return {
    DataRepositoryTask:
      output.DataRepositoryTask != null ? de_DataRepositoryTask(output.DataRepositoryTask, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFileCacheResponse
 */
const de_CreateFileCacheResponse = (output: any, context: __SerdeContext): CreateFileCacheResponse => {
  return {
    FileCache: output.FileCache != null ? de_FileCacheCreating(output.FileCache, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFileSystemFromBackupResponse
 */
const de_CreateFileSystemFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemFromBackupResponse => {
  return {
    FileSystem: output.FileSystem != null ? de_FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateFileSystemResponse
 */
const de_CreateFileSystemResponse = (output: any, context: __SerdeContext): CreateFileSystemResponse => {
  return {
    FileSystem: output.FileSystem != null ? de_FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateSnapshotResponse
 */
const de_CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? de_Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateStorageVirtualMachineResponse
 */
const de_CreateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): CreateStorageVirtualMachineResponse => {
  return {
    StorageVirtualMachine:
      output.StorageVirtualMachine != null
        ? de_StorageVirtualMachine(output.StorageVirtualMachine, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateVolumeFromBackupResponse
 */
const de_CreateVolumeFromBackupResponse = (output: any, context: __SerdeContext): CreateVolumeFromBackupResponse => {
  return {
    Volume: output.Volume != null ? de_Volume(output.Volume, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1CreateVolumeResponse
 */
const de_CreateVolumeResponse = (output: any, context: __SerdeContext): CreateVolumeResponse => {
  return {
    Volume: output.Volume != null ? de_Volume(output.Volume, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryAssociation
 */
const de_DataRepositoryAssociation = (output: any, context: __SerdeContext): DataRepositoryAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    BatchImportMetaDataOnCreate: __expectBoolean(output.BatchImportMetaDataOnCreate),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DataRepositoryPath: __expectString(output.DataRepositoryPath),
    DataRepositorySubdirectories:
      output.DataRepositorySubdirectories != null
        ? de_SubDirectoriesPaths(output.DataRepositorySubdirectories, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null ? de_DataRepositoryFailureDetails(output.FailureDetails, context) : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileCachePath: __expectString(output.FileCachePath),
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemPath: __expectString(output.FileSystemPath),
    ImportedFileChunkSize: __expectInt32(output.ImportedFileChunkSize),
    Lifecycle: __expectString(output.Lifecycle),
    NFS: output.NFS != null ? de_NFSDataRepositoryConfiguration(output.NFS, context) : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    S3: output.S3 != null ? de_S3DataRepositoryConfiguration(output.S3, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryAssociationIds
 */
const de_DataRepositoryAssociationIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataRepositoryAssociationNotFound
 */
const de_DataRepositoryAssociationNotFound = (
  output: any,
  context: __SerdeContext
): DataRepositoryAssociationNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryAssociations
 */
const de_DataRepositoryAssociations = (output: any, context: __SerdeContext): DataRepositoryAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataRepositoryAssociation(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataRepositoryConfiguration
 */
const de_DataRepositoryConfiguration = (output: any, context: __SerdeContext): DataRepositoryConfiguration => {
  return {
    AutoImportPolicy: __expectString(output.AutoImportPolicy),
    ExportPath: __expectString(output.ExportPath),
    FailureDetails:
      output.FailureDetails != null ? de_DataRepositoryFailureDetails(output.FailureDetails, context) : undefined,
    ImportPath: __expectString(output.ImportPath),
    ImportedFileChunkSize: __expectInt32(output.ImportedFileChunkSize),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryFailureDetails
 */
const de_DataRepositoryFailureDetails = (output: any, context: __SerdeContext): DataRepositoryFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryTask
 */
const de_DataRepositoryTask = (output: any, context: __SerdeContext): DataRepositoryTask => {
  return {
    CapacityToRelease: __expectLong(output.CapacityToRelease),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    FailureDetails:
      output.FailureDetails != null ? de_DataRepositoryTaskFailureDetails(output.FailureDetails, context) : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    Paths: output.Paths != null ? de_DataRepositoryTaskPaths(output.Paths, context) : undefined,
    Report: output.Report != null ? de_CompletionReport(output.Report, context) : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: output.Status != null ? de_DataRepositoryTaskStatus(output.Status, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    TaskId: __expectString(output.TaskId),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskEnded
 */
const de_DataRepositoryTaskEnded = (output: any, context: __SerdeContext): DataRepositoryTaskEnded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskExecuting
 */
const de_DataRepositoryTaskExecuting = (output: any, context: __SerdeContext): DataRepositoryTaskExecuting => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskFailureDetails
 */
const de_DataRepositoryTaskFailureDetails = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskNotFound
 */
const de_DataRepositoryTaskNotFound = (output: any, context: __SerdeContext): DataRepositoryTaskNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskPaths
 */
const de_DataRepositoryTaskPaths = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataRepositoryTasks
 */
const de_DataRepositoryTasks = (output: any, context: __SerdeContext): DataRepositoryTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataRepositoryTask(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1DataRepositoryTaskStatus
 */
const de_DataRepositoryTaskStatus = (output: any, context: __SerdeContext): DataRepositoryTaskStatus => {
  return {
    FailedCount: __expectLong(output.FailedCount),
    LastUpdatedTime:
      output.LastUpdatedTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastUpdatedTime)))
        : undefined,
    ReleasedCapacity: __expectLong(output.ReleasedCapacity),
    SucceededCount: __expectLong(output.SucceededCount),
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteBackupResponse
 */
const de_DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {
    BackupId: __expectString(output.BackupId),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteDataRepositoryAssociationResponse
 */
const de_DeleteDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): DeleteDataRepositoryAssociationResponse => {
  return {
    AssociationId: __expectString(output.AssociationId),
    DeleteDataInFileSystem: __expectBoolean(output.DeleteDataInFileSystem),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileCacheResponse
 */
const de_DeleteFileCacheResponse = (output: any, context: __SerdeContext): DeleteFileCacheResponse => {
  return {
    FileCacheId: __expectString(output.FileCacheId),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileSystemLustreResponse
 */
const de_DeleteFileSystemLustreResponse = (output: any, context: __SerdeContext): DeleteFileSystemLustreResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags: output.FinalBackupTags != null ? de_Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileSystemOpenZFSResponse
 */
const de_DeleteFileSystemOpenZFSResponse = (output: any, context: __SerdeContext): DeleteFileSystemOpenZFSResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags: output.FinalBackupTags != null ? de_Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileSystemResponse
 */
const de_DeleteFileSystemResponse = (output: any, context: __SerdeContext): DeleteFileSystemResponse => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreResponse:
      output.LustreResponse != null ? de_DeleteFileSystemLustreResponse(output.LustreResponse, context) : undefined,
    OpenZFSResponse:
      output.OpenZFSResponse != null ? de_DeleteFileSystemOpenZFSResponse(output.OpenZFSResponse, context) : undefined,
    WindowsResponse:
      output.WindowsResponse != null ? de_DeleteFileSystemWindowsResponse(output.WindowsResponse, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteFileSystemWindowsResponse
 */
const de_DeleteFileSystemWindowsResponse = (output: any, context: __SerdeContext): DeleteFileSystemWindowsResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags: output.FinalBackupTags != null ? de_Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteSnapshotResponse
 */
const de_DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteStorageVirtualMachineResponse
 */
const de_DeleteStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): DeleteStorageVirtualMachineResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
  } as any;
};

/**
 * deserializeAws_json1_1DeleteVolumeOntapResponse
 */
const de_DeleteVolumeOntapResponse = (output: any, context: __SerdeContext): DeleteVolumeOntapResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags: output.FinalBackupTags != null ? de_Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DeleteVolumeResponse
 */
const de_DeleteVolumeResponse = (output: any, context: __SerdeContext): DeleteVolumeResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    OntapResponse:
      output.OntapResponse != null ? de_DeleteVolumeOntapResponse(output.OntapResponse, context) : undefined,
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeBackupsResponse
 */
const de_DescribeBackupsResponse = (output: any, context: __SerdeContext): DescribeBackupsResponse => {
  return {
    Backups: output.Backups != null ? de_Backups(output.Backups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryAssociationsResponse
 */
const de_DescribeDataRepositoryAssociationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryAssociationsResponse => {
  return {
    Associations: output.Associations != null ? de_DataRepositoryAssociations(output.Associations, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeDataRepositoryTasksResponse
 */
const de_DescribeDataRepositoryTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryTasksResponse => {
  return {
    DataRepositoryTasks:
      output.DataRepositoryTasks != null ? de_DataRepositoryTasks(output.DataRepositoryTasks, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFileCachesResponse
 */
const de_DescribeFileCachesResponse = (output: any, context: __SerdeContext): DescribeFileCachesResponse => {
  return {
    FileCaches: output.FileCaches != null ? de_FileCaches(output.FileCaches, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFileSystemAliasesResponse
 */
const de_DescribeFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? de_Aliases(output.Aliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeFileSystemsResponse
 */
const de_DescribeFileSystemsResponse = (output: any, context: __SerdeContext): DescribeFileSystemsResponse => {
  return {
    FileSystems: output.FileSystems != null ? de_FileSystems(output.FileSystems, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

/**
 * deserializeAws_json1_1DescribeSnapshotsResponse
 */
const de_DescribeSnapshotsResponse = (output: any, context: __SerdeContext): DescribeSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Snapshots: output.Snapshots != null ? de_Snapshots(output.Snapshots, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeStorageVirtualMachinesResponse
 */
const de_DescribeStorageVirtualMachinesResponse = (
  output: any,
  context: __SerdeContext
): DescribeStorageVirtualMachinesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StorageVirtualMachines:
      output.StorageVirtualMachines != null
        ? de_StorageVirtualMachines(output.StorageVirtualMachines, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DescribeVolumesResponse
 */
const de_DescribeVolumesResponse = (output: any, context: __SerdeContext): DescribeVolumesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Volumes: output.Volumes != null ? de_Volumes(output.Volumes, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DisassociateFileSystemAliasesResponse
 */
const de_DisassociateFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): DisassociateFileSystemAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? de_Aliases(output.Aliases, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1DiskIopsConfiguration
 */
const de_DiskIopsConfiguration = (output: any, context: __SerdeContext): DiskIopsConfiguration => {
  return {
    Iops: __expectLong(output.Iops),
    Mode: __expectString(output.Mode),
  } as any;
};

/**
 * deserializeAws_json1_1DnsIps
 */
const de_DnsIps = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1EventTypes
 */
const de_EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileCache
 */
const de_FileCache = (output: any, context: __SerdeContext): FileCache => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    DataRepositoryAssociationIds:
      output.DataRepositoryAssociationIds != null
        ? de_DataRepositoryAssociationIds(output.DataRepositoryAssociationIds, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null ? de_FileCacheFailureDetails(output.FailureDetails, context) : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileCacheType: __expectString(output.FileCacheType),
    FileCacheTypeVersion: __expectString(output.FileCacheTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration != null
        ? de_FileCacheLustreConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds != null ? de_NetworkInterfaceIds(output.NetworkInterfaceIds, context) : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1FileCacheCreating
 */
const de_FileCacheCreating = (output: any, context: __SerdeContext): FileCacheCreating => {
  return {
    CopyTagsToDataRepositoryAssociations: __expectBoolean(output.CopyTagsToDataRepositoryAssociations),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    DataRepositoryAssociationIds:
      output.DataRepositoryAssociationIds != null
        ? de_DataRepositoryAssociationIds(output.DataRepositoryAssociationIds, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null ? de_FileCacheFailureDetails(output.FailureDetails, context) : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileCacheType: __expectString(output.FileCacheType),
    FileCacheTypeVersion: __expectString(output.FileCacheTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration != null
        ? de_FileCacheLustreConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds != null ? de_NetworkInterfaceIds(output.NetworkInterfaceIds, context) : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

/**
 * deserializeAws_json1_1FileCacheFailureDetails
 */
const de_FileCacheFailureDetails = (output: any, context: __SerdeContext): FileCacheFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FileCacheLustreConfiguration
 */
const de_FileCacheLustreConfiguration = (output: any, context: __SerdeContext): FileCacheLustreConfiguration => {
  return {
    DeploymentType: __expectString(output.DeploymentType),
    LogConfiguration:
      output.LogConfiguration != null ? de_LustreLogConfiguration(output.LogConfiguration, context) : undefined,
    MetadataConfiguration:
      output.MetadataConfiguration != null
        ? de_FileCacheLustreMetadataConfiguration(output.MetadataConfiguration, context)
        : undefined,
    MountName: __expectString(output.MountName),
    PerUnitStorageThroughput: __expectInt32(output.PerUnitStorageThroughput),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

/**
 * deserializeAws_json1_1FileCacheLustreMetadataConfiguration
 */
const de_FileCacheLustreMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): FileCacheLustreMetadataConfiguration => {
  return {
    StorageCapacity: __expectInt32(output.StorageCapacity),
  } as any;
};

/**
 * deserializeAws_json1_1FileCacheNotFound
 */
const de_FileCacheNotFound = (output: any, context: __SerdeContext): FileCacheNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FileCaches
 */
const de_FileCaches = (output: any, context: __SerdeContext): FileCache[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileCache(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSystem
 */
const de_FileSystem = (output: any, context: __SerdeContext): FileSystem => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? de_AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    FailureDetails:
      output.FailureDetails != null ? de_FileSystemFailureDetails(output.FailureDetails, context) : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemType: __expectString(output.FileSystemType),
    FileSystemTypeVersion: __expectString(output.FileSystemTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration != null
        ? de_LustreFileSystemConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds != null ? de_NetworkInterfaceIds(output.NetworkInterfaceIds, context) : undefined,
    OntapConfiguration:
      output.OntapConfiguration != null
        ? de_OntapFileSystemConfiguration(output.OntapConfiguration, context)
        : undefined,
    OpenZFSConfiguration:
      output.OpenZFSConfiguration != null
        ? de_OpenZFSFileSystemConfiguration(output.OpenZFSConfiguration, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    StorageType: __expectString(output.StorageType),
    SubnetIds: output.SubnetIds != null ? de_SubnetIds(output.SubnetIds, context) : undefined,
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
    WindowsConfiguration:
      output.WindowsConfiguration != null
        ? de_WindowsFileSystemConfiguration(output.WindowsConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemEndpoint
 */
const de_FileSystemEndpoint = (output: any, context: __SerdeContext): FileSystemEndpoint => {
  return {
    DNSName: __expectString(output.DNSName),
    IpAddresses: output.IpAddresses != null ? de_OntapEndpointIpAddresses(output.IpAddresses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemEndpoints
 */
const de_FileSystemEndpoints = (output: any, context: __SerdeContext): FileSystemEndpoints => {
  return {
    Intercluster: output.Intercluster != null ? de_FileSystemEndpoint(output.Intercluster, context) : undefined,
    Management: output.Management != null ? de_FileSystemEndpoint(output.Management, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemFailureDetails
 */
const de_FileSystemFailureDetails = (output: any, context: __SerdeContext): FileSystemFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FileSystemMaintenanceOperations
 */
const de_FileSystemMaintenanceOperations = (
  output: any,
  context: __SerdeContext
): (FileSystemMaintenanceOperation | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1FileSystemNotFound
 */
const de_FileSystemNotFound = (output: any, context: __SerdeContext): FileSystemNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1FileSystems
 */
const de_FileSystems = (output: any, context: __SerdeContext): FileSystem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FileSystem(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1IncompatibleParameterError
 */
const de_IncompatibleParameterError = (output: any, context: __SerdeContext): IncompatibleParameterError => {
  return {
    Message: __expectString(output.Message),
    Parameter: __expectString(output.Parameter),
  } as any;
};

/**
 * deserializeAws_json1_1IncompatibleRegionForMultiAZ
 */
const de_IncompatibleRegionForMultiAZ = (output: any, context: __SerdeContext): IncompatibleRegionForMultiAZ => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InternalServerError
 */
const de_InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDataRepositoryType
 */
const de_InvalidDataRepositoryType = (output: any, context: __SerdeContext): InvalidDataRepositoryType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidDestinationKmsKey
 */
const de_InvalidDestinationKmsKey = (output: any, context: __SerdeContext): InvalidDestinationKmsKey => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidExportPath
 */
const de_InvalidExportPath = (output: any, context: __SerdeContext): InvalidExportPath => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidImportPath
 */
const de_InvalidImportPath = (output: any, context: __SerdeContext): InvalidImportPath => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidNetworkSettings
 */
const de_InvalidNetworkSettings = (output: any, context: __SerdeContext): InvalidNetworkSettings => {
  return {
    InvalidRouteTableId: __expectString(output.InvalidRouteTableId),
    InvalidSecurityGroupId: __expectString(output.InvalidSecurityGroupId),
    InvalidSubnetId: __expectString(output.InvalidSubnetId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidPerUnitStorageThroughput
 */
const de_InvalidPerUnitStorageThroughput = (output: any, context: __SerdeContext): InvalidPerUnitStorageThroughput => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidRegion
 */
const de_InvalidRegion = (output: any, context: __SerdeContext): InvalidRegion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1InvalidSourceKmsKey
 */
const de_InvalidSourceKmsKey = (output: any, context: __SerdeContext): InvalidSourceKmsKey => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1LifecycleTransitionReason
 */
const de_LifecycleTransitionReason = (output: any, context: __SerdeContext): LifecycleTransitionReason => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1ListTagsForResourceResponse
 */
const de_ListTagsForResourceResponse = (output: any, context: __SerdeContext): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1LustreFileSystemConfiguration
 */
const de_LustreFileSystemConfiguration = (output: any, context: __SerdeContext): LustreFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DataCompressionType: __expectString(output.DataCompressionType),
    DataRepositoryConfiguration:
      output.DataRepositoryConfiguration != null
        ? de_DataRepositoryConfiguration(output.DataRepositoryConfiguration, context)
        : undefined,
    DeploymentType: __expectString(output.DeploymentType),
    DriveCacheType: __expectString(output.DriveCacheType),
    LogConfiguration:
      output.LogConfiguration != null ? de_LustreLogConfiguration(output.LogConfiguration, context) : undefined,
    MountName: __expectString(output.MountName),
    PerUnitStorageThroughput: __expectInt32(output.PerUnitStorageThroughput),
    RootSquashConfiguration:
      output.RootSquashConfiguration != null
        ? de_LustreRootSquashConfiguration(output.RootSquashConfiguration, context)
        : undefined,
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

/**
 * deserializeAws_json1_1LustreLogConfiguration
 */
const de_LustreLogConfiguration = (output: any, context: __SerdeContext): LustreLogConfiguration => {
  return {
    Destination: __expectString(output.Destination),
    Level: __expectString(output.Level),
  } as any;
};

/**
 * deserializeAws_json1_1LustreNoSquashNids
 */
const de_LustreNoSquashNids = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1LustreRootSquashConfiguration
 */
const de_LustreRootSquashConfiguration = (output: any, context: __SerdeContext): LustreRootSquashConfiguration => {
  return {
    NoSquashNids: output.NoSquashNids != null ? de_LustreNoSquashNids(output.NoSquashNids, context) : undefined,
    RootSquash: __expectString(output.RootSquash),
  } as any;
};

/**
 * deserializeAws_json1_1MissingFileCacheConfiguration
 */
const de_MissingFileCacheConfiguration = (output: any, context: __SerdeContext): MissingFileCacheConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MissingFileSystemConfiguration
 */
const de_MissingFileSystemConfiguration = (output: any, context: __SerdeContext): MissingFileSystemConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1MissingVolumeConfiguration
 */
const de_MissingVolumeConfiguration = (output: any, context: __SerdeContext): MissingVolumeConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1NetworkInterfaceIds
 */
const de_NetworkInterfaceIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1NFSDataRepositoryConfiguration
 */
const de_NFSDataRepositoryConfiguration = (output: any, context: __SerdeContext): NFSDataRepositoryConfiguration => {
  return {
    AutoExportPolicy:
      output.AutoExportPolicy != null ? de_AutoExportPolicy(output.AutoExportPolicy, context) : undefined,
    DnsIps: output.DnsIps != null ? de_RepositoryDnsIps(output.DnsIps, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

/**
 * deserializeAws_json1_1NotServiceResourceError
 */
const de_NotServiceResourceError = (output: any, context: __SerdeContext): NotServiceResourceError => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1OntapEndpointIpAddresses
 */
const de_OntapEndpointIpAddresses = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OntapFileSystemConfiguration
 */
const de_OntapFileSystemConfiguration = (output: any, context: __SerdeContext): OntapFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    DiskIopsConfiguration:
      output.DiskIopsConfiguration != null
        ? de_DiskIopsConfiguration(output.DiskIopsConfiguration, context)
        : undefined,
    EndpointIpAddressRange: __expectString(output.EndpointIpAddressRange),
    Endpoints: output.Endpoints != null ? de_FileSystemEndpoints(output.Endpoints, context) : undefined,
    PreferredSubnetId: __expectString(output.PreferredSubnetId),
    RouteTableIds: output.RouteTableIds != null ? de_RouteTableIds(output.RouteTableIds, context) : undefined,
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

/**
 * deserializeAws_json1_1OntapVolumeConfiguration
 */
const de_OntapVolumeConfiguration = (output: any, context: __SerdeContext): OntapVolumeConfiguration => {
  return {
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    FlexCacheEndpointType: __expectString(output.FlexCacheEndpointType),
    JunctionPath: __expectString(output.JunctionPath),
    OntapVolumeType: __expectString(output.OntapVolumeType),
    SecurityStyle: __expectString(output.SecurityStyle),
    SizeInMegabytes: __expectInt32(output.SizeInMegabytes),
    SnapshotPolicy: __expectString(output.SnapshotPolicy),
    StorageEfficiencyEnabled: __expectBoolean(output.StorageEfficiencyEnabled),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
    StorageVirtualMachineRoot: __expectBoolean(output.StorageVirtualMachineRoot),
    TieringPolicy: output.TieringPolicy != null ? de_TieringPolicy(output.TieringPolicy, context) : undefined,
    UUID: __expectString(output.UUID),
  } as any;
};

/**
 * deserializeAws_json1_1OpenZFSClientConfiguration
 */
const de_OpenZFSClientConfiguration = (output: any, context: __SerdeContext): OpenZFSClientConfiguration => {
  return {
    Clients: __expectString(output.Clients),
    Options: output.Options != null ? de_OpenZFSNfsExportOptions(output.Options, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OpenZFSClientConfigurations
 */
const de_OpenZFSClientConfigurations = (output: any, context: __SerdeContext): OpenZFSClientConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpenZFSClientConfiguration(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpenZFSFileSystemConfiguration
 */
const de_OpenZFSFileSystemConfiguration = (output: any, context: __SerdeContext): OpenZFSFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    CopyTagsToVolumes: __expectBoolean(output.CopyTagsToVolumes),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    DiskIopsConfiguration:
      output.DiskIopsConfiguration != null
        ? de_DiskIopsConfiguration(output.DiskIopsConfiguration, context)
        : undefined,
    RootVolumeId: __expectString(output.RootVolumeId),
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

/**
 * deserializeAws_json1_1OpenZFSNfsExport
 */
const de_OpenZFSNfsExport = (output: any, context: __SerdeContext): OpenZFSNfsExport => {
  return {
    ClientConfigurations:
      output.ClientConfigurations != null
        ? de_OpenZFSClientConfigurations(output.ClientConfigurations, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1OpenZFSNfsExportOptions
 */
const de_OpenZFSNfsExportOptions = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpenZFSNfsExports
 */
const de_OpenZFSNfsExports = (output: any, context: __SerdeContext): OpenZFSNfsExport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpenZFSNfsExport(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpenZFSOriginSnapshotConfiguration
 */
const de_OpenZFSOriginSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): OpenZFSOriginSnapshotConfiguration => {
  return {
    CopyStrategy: __expectString(output.CopyStrategy),
    SnapshotARN: __expectString(output.SnapshotARN),
  } as any;
};

/**
 * deserializeAws_json1_1OpenZFSUserAndGroupQuotas
 */
const de_OpenZFSUserAndGroupQuotas = (output: any, context: __SerdeContext): OpenZFSUserOrGroupQuota[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_OpenZFSUserOrGroupQuota(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1OpenZFSUserOrGroupQuota
 */
const de_OpenZFSUserOrGroupQuota = (output: any, context: __SerdeContext): OpenZFSUserOrGroupQuota => {
  return {
    Id: __expectInt32(output.Id),
    StorageCapacityQuotaGiB: __expectInt32(output.StorageCapacityQuotaGiB),
    Type: __expectString(output.Type),
  } as any;
};

/**
 * deserializeAws_json1_1OpenZFSVolumeConfiguration
 */
const de_OpenZFSVolumeConfiguration = (output: any, context: __SerdeContext): OpenZFSVolumeConfiguration => {
  return {
    CopyTagsToSnapshots: __expectBoolean(output.CopyTagsToSnapshots),
    DataCompressionType: __expectString(output.DataCompressionType),
    DeleteClonedVolumes: __expectBoolean(output.DeleteClonedVolumes),
    DeleteIntermediateSnaphots: __expectBoolean(output.DeleteIntermediateSnaphots),
    NfsExports: output.NfsExports != null ? de_OpenZFSNfsExports(output.NfsExports, context) : undefined,
    OriginSnapshot:
      output.OriginSnapshot != null ? de_OpenZFSOriginSnapshotConfiguration(output.OriginSnapshot, context) : undefined,
    ParentVolumeId: __expectString(output.ParentVolumeId),
    ReadOnly: __expectBoolean(output.ReadOnly),
    RecordSizeKiB: __expectInt32(output.RecordSizeKiB),
    RestoreToSnapshot: __expectString(output.RestoreToSnapshot),
    StorageCapacityQuotaGiB: __expectInt32(output.StorageCapacityQuotaGiB),
    StorageCapacityReservationGiB: __expectInt32(output.StorageCapacityReservationGiB),
    UserAndGroupQuotas:
      output.UserAndGroupQuotas != null ? de_OpenZFSUserAndGroupQuotas(output.UserAndGroupQuotas, context) : undefined,
    VolumePath: __expectString(output.VolumePath),
  } as any;
};

/**
 * deserializeAws_json1_1ReleaseFileSystemNfsV3LocksResponse
 */
const de_ReleaseFileSystemNfsV3LocksResponse = (
  output: any,
  context: __SerdeContext
): ReleaseFileSystemNfsV3LocksResponse => {
  return {
    FileSystem: output.FileSystem != null ? de_FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1RepositoryDnsIps
 */
const de_RepositoryDnsIps = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1ResourceDoesNotSupportTagging
 */
const de_ResourceDoesNotSupportTagging = (output: any, context: __SerdeContext): ResourceDoesNotSupportTagging => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1ResourceNotFound
 */
const de_ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

/**
 * deserializeAws_json1_1RestoreVolumeFromSnapshotResponse
 */
const de_RestoreVolumeFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreVolumeFromSnapshotResponse => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? de_AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    Lifecycle: __expectString(output.Lifecycle),
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

/**
 * deserializeAws_json1_1RouteTableIds
 */
const de_RouteTableIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1S3DataRepositoryConfiguration
 */
const de_S3DataRepositoryConfiguration = (output: any, context: __SerdeContext): S3DataRepositoryConfiguration => {
  return {
    AutoExportPolicy:
      output.AutoExportPolicy != null ? de_AutoExportPolicy(output.AutoExportPolicy, context) : undefined,
    AutoImportPolicy:
      output.AutoImportPolicy != null ? de_AutoImportPolicy(output.AutoImportPolicy, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SelfManagedActiveDirectoryAttributes
 */
const de_SelfManagedActiveDirectoryAttributes = (
  output: any,
  context: __SerdeContext
): SelfManagedActiveDirectoryAttributes => {
  return {
    DnsIps: output.DnsIps != null ? de_DnsIps(output.DnsIps, context) : undefined,
    DomainName: __expectString(output.DomainName),
    FileSystemAdministratorsGroup: __expectString(output.FileSystemAdministratorsGroup),
    OrganizationalUnitDistinguishedName: __expectString(output.OrganizationalUnitDistinguishedName),
    UserName: __expectString(output.UserName),
  } as any;
};

/**
 * deserializeAws_json1_1ServiceLimitExceeded
 */
const de_ServiceLimitExceeded = (output: any, context: __SerdeContext): ServiceLimitExceeded => {
  return {
    Limit: __expectString(output.Limit),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshot
 */
const de_Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? de_AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason != null
        ? de_LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceARN: __expectString(output.ResourceARN),
    SnapshotId: __expectString(output.SnapshotId),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

/**
 * deserializeAws_json1_1SnapshotNotFound
 */
const de_SnapshotNotFound = (output: any, context: __SerdeContext): SnapshotNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Snapshots
 */
const de_Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Snapshot(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SourceBackupUnavailable
 */
const de_SourceBackupUnavailable = (output: any, context: __SerdeContext): SourceBackupUnavailable => {
  return {
    BackupId: __expectString(output.BackupId),
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1StorageVirtualMachine
 */
const de_StorageVirtualMachine = (output: any, context: __SerdeContext): StorageVirtualMachine => {
  return {
    ActiveDirectoryConfiguration:
      output.ActiveDirectoryConfiguration != null
        ? de_SvmActiveDirectoryConfiguration(output.ActiveDirectoryConfiguration, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Endpoints: output.Endpoints != null ? de_SvmEndpoints(output.Endpoints, context) : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason != null
        ? de_LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceARN: __expectString(output.ResourceARN),
    RootVolumeSecurityStyle: __expectString(output.RootVolumeSecurityStyle),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
    Subtype: __expectString(output.Subtype),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    UUID: __expectString(output.UUID),
  } as any;
};

/**
 * deserializeAws_json1_1StorageVirtualMachineNotFound
 */
const de_StorageVirtualMachineNotFound = (output: any, context: __SerdeContext): StorageVirtualMachineNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1StorageVirtualMachines
 */
const de_StorageVirtualMachines = (output: any, context: __SerdeContext): StorageVirtualMachine[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StorageVirtualMachine(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubDirectoriesPaths
 */
const de_SubDirectoriesPaths = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SubnetIds
 */
const de_SubnetIds = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_json1_1SvmActiveDirectoryConfiguration
 */
const de_SvmActiveDirectoryConfiguration = (output: any, context: __SerdeContext): SvmActiveDirectoryConfiguration => {
  return {
    NetBiosName: __expectString(output.NetBiosName),
    SelfManagedActiveDirectoryConfiguration:
      output.SelfManagedActiveDirectoryConfiguration != null
        ? de_SelfManagedActiveDirectoryAttributes(output.SelfManagedActiveDirectoryConfiguration, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SvmEndpoint
 */
const de_SvmEndpoint = (output: any, context: __SerdeContext): SvmEndpoint => {
  return {
    DNSName: __expectString(output.DNSName),
    IpAddresses: output.IpAddresses != null ? de_OntapEndpointIpAddresses(output.IpAddresses, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1SvmEndpoints
 */
const de_SvmEndpoints = (output: any, context: __SerdeContext): SvmEndpoints => {
  return {
    Iscsi: output.Iscsi != null ? de_SvmEndpoint(output.Iscsi, context) : undefined,
    Management: output.Management != null ? de_SvmEndpoint(output.Management, context) : undefined,
    Nfs: output.Nfs != null ? de_SvmEndpoint(output.Nfs, context) : undefined,
    Smb: output.Smb != null ? de_SvmEndpoint(output.Smb, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Tag
 */
const de_Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

/**
 * deserializeAws_json1_1TagResourceResponse
 */
const de_TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Tag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1TieringPolicy
 */
const de_TieringPolicy = (output: any, context: __SerdeContext): TieringPolicy => {
  return {
    CoolingPeriod: __expectInt32(output.CoolingPeriod),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_json1_1UnsupportedOperation
 */
const de_UnsupportedOperation = (output: any, context: __SerdeContext): UnsupportedOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1UntagResourceResponse
 */
const de_UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

/**
 * deserializeAws_json1_1UpdateDataRepositoryAssociationResponse
 */
const de_UpdateDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): UpdateDataRepositoryAssociationResponse => {
  return {
    Association: output.Association != null ? de_DataRepositoryAssociation(output.Association, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFileCacheResponse
 */
const de_UpdateFileCacheResponse = (output: any, context: __SerdeContext): UpdateFileCacheResponse => {
  return {
    FileCache: output.FileCache != null ? de_FileCache(output.FileCache, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateFileSystemResponse
 */
const de_UpdateFileSystemResponse = (output: any, context: __SerdeContext): UpdateFileSystemResponse => {
  return {
    FileSystem: output.FileSystem != null ? de_FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateSnapshotResponse
 */
const de_UpdateSnapshotResponse = (output: any, context: __SerdeContext): UpdateSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? de_Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateStorageVirtualMachineResponse
 */
const de_UpdateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): UpdateStorageVirtualMachineResponse => {
  return {
    StorageVirtualMachine:
      output.StorageVirtualMachine != null
        ? de_StorageVirtualMachine(output.StorageVirtualMachine, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1UpdateVolumeResponse
 */
const de_UpdateVolumeResponse = (output: any, context: __SerdeContext): UpdateVolumeResponse => {
  return {
    Volume: output.Volume != null ? de_Volume(output.Volume, context) : undefined,
  } as any;
};

/**
 * deserializeAws_json1_1Volume
 */
const de_Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? de_AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason != null
        ? de_LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    OntapConfiguration:
      output.OntapConfiguration != null ? de_OntapVolumeConfiguration(output.OntapConfiguration, context) : undefined,
    OpenZFSConfiguration:
      output.OpenZFSConfiguration != null
        ? de_OpenZFSVolumeConfiguration(output.OpenZFSConfiguration, context)
        : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    Tags: output.Tags != null ? de_Tags(output.Tags, context) : undefined,
    VolumeId: __expectString(output.VolumeId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

/**
 * deserializeAws_json1_1VolumeNotFound
 */
const de_VolumeNotFound = (output: any, context: __SerdeContext): VolumeNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

/**
 * deserializeAws_json1_1Volumes
 */
const de_Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Volume(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_json1_1WindowsAuditLogConfiguration
 */
const de_WindowsAuditLogConfiguration = (output: any, context: __SerdeContext): WindowsAuditLogConfiguration => {
  return {
    AuditLogDestination: __expectString(output.AuditLogDestination),
    FileAccessAuditLogLevel: __expectString(output.FileAccessAuditLogLevel),
    FileShareAccessAuditLogLevel: __expectString(output.FileShareAccessAuditLogLevel),
  } as any;
};

/**
 * deserializeAws_json1_1WindowsFileSystemConfiguration
 */
const de_WindowsFileSystemConfiguration = (output: any, context: __SerdeContext): WindowsFileSystemConfiguration => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    Aliases: output.Aliases != null ? de_Aliases(output.Aliases, context) : undefined,
    AuditLogConfiguration:
      output.AuditLogConfiguration != null
        ? de_WindowsAuditLogConfiguration(output.AuditLogConfiguration, context)
        : undefined,
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    MaintenanceOperationsInProgress:
      output.MaintenanceOperationsInProgress != null
        ? de_FileSystemMaintenanceOperations(output.MaintenanceOperationsInProgress, context)
        : undefined,
    PreferredFileServerIp: __expectString(output.PreferredFileServerIp),
    PreferredSubnetId: __expectString(output.PreferredSubnetId),
    RemoteAdministrationEndpoint: __expectString(output.RemoteAdministrationEndpoint),
    SelfManagedActiveDirectoryConfiguration:
      output.SelfManagedActiveDirectoryConfiguration != null
        ? de_SelfManagedActiveDirectoryAttributes(output.SelfManagedActiveDirectoryConfiguration, context)
        : undefined,
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

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
