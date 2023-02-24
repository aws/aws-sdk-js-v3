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

export const serializeAws_json1_1AssociateFileSystemAliasesCommand = async (
  input: AssociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.AssociateFileSystemAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1AssociateFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CancelDataRepositoryTaskCommand = async (
  input: CancelDataRepositoryTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CancelDataRepositoryTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CopyBackupCommand = async (
  input: CopyBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CopyBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CopyBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateBackupCommand = async (
  input: CreateBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataRepositoryAssociationCommand = async (
  input: CreateDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataRepositoryAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateDataRepositoryTaskCommand = async (
  input: CreateDataRepositoryTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateDataRepositoryTask",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateDataRepositoryTaskRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFileCacheCommand = async (
  input: CreateFileCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFileCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFileSystemCommand = async (
  input: CreateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateFileSystemFromBackupCommand = async (
  input: CreateFileSystemFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateFileSystemFromBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateSnapshotCommand = async (
  input: CreateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateStorageVirtualMachineCommand = async (
  input: CreateStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateStorageVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVolumeCommand = async (
  input: CreateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1CreateVolumeFromBackupCommand = async (
  input: CreateVolumeFromBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.CreateVolumeFromBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1CreateVolumeFromBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteBackupCommand = async (
  input: DeleteBackupCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteBackup",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteBackupRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteDataRepositoryAssociationCommand = async (
  input: DeleteDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteDataRepositoryAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFileCacheCommand = async (
  input: DeleteFileCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFileCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteFileSystemCommand = async (
  input: DeleteFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteSnapshotCommand = async (
  input: DeleteSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteStorageVirtualMachineCommand = async (
  input: DeleteStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteStorageVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DeleteVolumeCommand = async (
  input: DeleteVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DeleteVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DeleteVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeBackupsCommand = async (
  input: DescribeBackupsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeBackups",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeBackupsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataRepositoryAssociationsCommand = async (
  input: DescribeDataRepositoryAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryAssociations",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDataRepositoryAssociationsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeDataRepositoryTasksCommand = async (
  input: DescribeDataRepositoryTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeDataRepositoryTasks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeDataRepositoryTasksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFileCachesCommand = async (
  input: DescribeFileCachesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileCaches",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFileCachesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFileSystemAliasesCommand = async (
  input: DescribeFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystemAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeFileSystemsCommand = async (
  input: DescribeFileSystemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeFileSystems",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeFileSystemsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeSnapshotsCommand = async (
  input: DescribeSnapshotsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeSnapshots",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeSnapshotsRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeStorageVirtualMachinesCommand = async (
  input: DescribeStorageVirtualMachinesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeStorageVirtualMachines",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeStorageVirtualMachinesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DescribeVolumesCommand = async (
  input: DescribeVolumesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DescribeVolumes",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DescribeVolumesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1DisassociateFileSystemAliasesCommand = async (
  input: DisassociateFileSystemAliasesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.DisassociateFileSystemAliases",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1DisassociateFileSystemAliasesRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.ListTagsForResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ListTagsForResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1ReleaseFileSystemNfsV3LocksCommand = async (
  input: ReleaseFileSystemNfsV3LocksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.ReleaseFileSystemNfsV3Locks",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1ReleaseFileSystemNfsV3LocksRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1RestoreVolumeFromSnapshotCommand = async (
  input: RestoreVolumeFromSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1RestoreVolumeFromSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.TagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1TagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UntagResource",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UntagResourceRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateDataRepositoryAssociationCommand = async (
  input: UpdateDataRepositoryAssociationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateDataRepositoryAssociationRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFileCacheCommand = async (
  input: UpdateFileCacheCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileCache",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFileCacheRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateFileSystemCommand = async (
  input: UpdateFileSystemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateFileSystem",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateFileSystemRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateSnapshotCommand = async (
  input: UpdateSnapshotCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateSnapshot",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateSnapshotRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateStorageVirtualMachineCommand = async (
  input: UpdateStorageVirtualMachineCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateStorageVirtualMachine",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateStorageVirtualMachineRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const serializeAws_json1_1UpdateVolumeCommand = async (
  input: UpdateVolumeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: __HeaderBag = {
    "content-type": "application/x-amz-json-1.1",
    "x-amz-target": "AWSSimbaAPIService_v20180301.UpdateVolume",
  };
  let body: any;
  body = JSON.stringify(serializeAws_json1_1UpdateVolumeRequest(input, context));
  return buildHttpRpcRequest(context, headers, "/", undefined, body);
};

export const deserializeAws_json1_1AssociateFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1AssociateFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1AssociateFileSystemAliasesResponse(data, context);
  const response: AssociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1AssociateFileSystemAliasesCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CancelDataRepositoryTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelDataRepositoryTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CancelDataRepositoryTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CancelDataRepositoryTaskResponse(data, context);
  const response: CancelDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CancelDataRepositoryTaskCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "DataRepositoryTaskEnded":
    case "com.amazonaws.fsx#DataRepositoryTaskEnded":
      throw await deserializeAws_json1_1DataRepositoryTaskEndedResponse(parsedOutput, context);
    case "DataRepositoryTaskNotFound":
    case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
      throw await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CopyBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CopyBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CopyBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CopyBackupResponse(data, context);
  const response: CopyBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CopyBackupCommandError = async (
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
      throw await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "IncompatibleRegionForMultiAZ":
    case "com.amazonaws.fsx#IncompatibleRegionForMultiAZ":
      throw await deserializeAws_json1_1IncompatibleRegionForMultiAZResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDestinationKmsKey":
    case "com.amazonaws.fsx#InvalidDestinationKmsKey":
      throw await deserializeAws_json1_1InvalidDestinationKmsKeyResponse(parsedOutput, context);
    case "InvalidRegion":
    case "com.amazonaws.fsx#InvalidRegion":
      throw await deserializeAws_json1_1InvalidRegionResponse(parsedOutput, context);
    case "InvalidSourceKmsKey":
    case "com.amazonaws.fsx#InvalidSourceKmsKey":
      throw await deserializeAws_json1_1InvalidSourceKmsKeyResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "SourceBackupUnavailable":
    case "com.amazonaws.fsx#SourceBackupUnavailable":
      throw await deserializeAws_json1_1SourceBackupUnavailableResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateBackupResponse(data, context);
  const response: CreateBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateBackupCommandError = async (
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
      throw await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDataRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataRepositoryAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataRepositoryAssociationResponse(data, context);
  const response: CreateDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataRepositoryAssociationCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateDataRepositoryTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataRepositoryTaskCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateDataRepositoryTaskCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateDataRepositoryTaskResponse(data, context);
  const response: CreateDataRepositoryTaskCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateDataRepositoryTaskCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "DataRepositoryTaskExecuting":
    case "com.amazonaws.fsx#DataRepositoryTaskExecuting":
      throw await deserializeAws_json1_1DataRepositoryTaskExecutingResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFileCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFileCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileCacheResponse(data, context);
  const response: CreateFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFileCacheCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context);
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      throw await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context);
    case "MissingFileCacheConfiguration":
    case "com.amazonaws.fsx#MissingFileCacheConfiguration":
      throw await deserializeAws_json1_1MissingFileCacheConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileSystemResponse(data, context);
  const response: CreateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFileSystemCommandError = async (
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
      throw await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidExportPath":
    case "com.amazonaws.fsx#InvalidExportPath":
      throw await deserializeAws_json1_1InvalidExportPathResponse(parsedOutput, context);
    case "InvalidImportPath":
    case "com.amazonaws.fsx#InvalidImportPath":
      throw await deserializeAws_json1_1InvalidImportPathResponse(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context);
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      throw await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context);
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      throw await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateFileSystemFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFileSystemFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateFileSystemFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateFileSystemFromBackupResponse(data, context);
  const response: CreateFileSystemFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateFileSystemFromBackupCommandError = async (
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
      throw await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context);
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context);
    case "InvalidPerUnitStorageThroughput":
    case "com.amazonaws.fsx#InvalidPerUnitStorageThroughput":
      throw await deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse(parsedOutput, context);
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      throw await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateSnapshotResponse(data, context);
  const response: CreateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateStorageVirtualMachineResponse(data, context);
  const response: CreateStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateStorageVirtualMachineCommandError = async (
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
      throw await deserializeAws_json1_1ActiveDirectoryErrorResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVolumeResponse(data, context);
  const response: CreateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVolumeCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      throw await deserializeAws_json1_1MissingVolumeConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1CreateVolumeFromBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVolumeFromBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1CreateVolumeFromBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1CreateVolumeFromBackupResponse(data, context);
  const response: CreateVolumeFromBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1CreateVolumeFromBackupCommandError = async (
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
      throw await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      throw await deserializeAws_json1_1MissingVolumeConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteBackupCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteBackupCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteBackupResponse(data, context);
  const response: DeleteBackupCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteBackupCommandError = async (
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
      throw await deserializeAws_json1_1BackupBeingCopiedResponse(parsedOutput, context);
    case "BackupInProgress":
    case "com.amazonaws.fsx#BackupInProgress":
      throw await deserializeAws_json1_1BackupInProgressResponse(parsedOutput, context);
    case "BackupNotFound":
    case "com.amazonaws.fsx#BackupNotFound":
      throw await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context);
    case "BackupRestoring":
    case "com.amazonaws.fsx#BackupRestoring":
      throw await deserializeAws_json1_1BackupRestoringResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteDataRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataRepositoryAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteDataRepositoryAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteDataRepositoryAssociationResponse(data, context);
  const response: DeleteDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteDataRepositoryAssociationCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "DataRepositoryAssociationNotFound":
    case "com.amazonaws.fsx#DataRepositoryAssociationNotFound":
      throw await deserializeAws_json1_1DataRepositoryAssociationNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFileCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFileCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileCacheResponse(data, context);
  const response: DeleteFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFileCacheCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileCacheNotFound":
    case "com.amazonaws.fsx#FileCacheNotFound":
      throw await deserializeAws_json1_1FileCacheNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteFileSystemResponse(data, context);
  const response: DeleteFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteFileSystemCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteSnapshotResponse(data, context);
  const response: DeleteSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "SnapshotNotFound":
    case "com.amazonaws.fsx#SnapshotNotFound":
      throw await deserializeAws_json1_1SnapshotNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteStorageVirtualMachineResponse(data, context);
  const response: DeleteStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteStorageVirtualMachineCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DeleteVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DeleteVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DeleteVolumeResponse(data, context);
  const response: DeleteVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DeleteVolumeCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeBackupsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeBackupsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeBackupsResponse(data, context);
  const response: DescribeBackupsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeBackupsCommandError = async (
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
      throw await deserializeAws_json1_1BackupNotFoundResponse(parsedOutput, context);
    case "BadRequest":
    case "com.amazonaws.fsx#BadRequest":
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDataRepositoryAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryAssociationsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDataRepositoryAssociationsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataRepositoryAssociationsResponse(data, context);
  const response: DescribeDataRepositoryAssociationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDataRepositoryAssociationsCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "DataRepositoryAssociationNotFound":
    case "com.amazonaws.fsx#DataRepositoryAssociationNotFound":
      throw await deserializeAws_json1_1DataRepositoryAssociationNotFoundResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidDataRepositoryType":
    case "com.amazonaws.fsx#InvalidDataRepositoryType":
      throw await deserializeAws_json1_1InvalidDataRepositoryTypeResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeDataRepositoryTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeDataRepositoryTasksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeDataRepositoryTasksResponse(data, context);
  const response: DescribeDataRepositoryTasksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeDataRepositoryTasksCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "DataRepositoryTaskNotFound":
    case "com.amazonaws.fsx#DataRepositoryTaskNotFound":
      throw await deserializeAws_json1_1DataRepositoryTaskNotFoundResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFileCachesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileCachesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFileCachesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileCachesResponse(data, context);
  const response: DescribeFileCachesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFileCachesCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileCacheNotFound":
    case "com.amazonaws.fsx#FileCacheNotFound":
      throw await deserializeAws_json1_1FileCacheNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileSystemAliasesResponse(data, context);
  const response: DescribeFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFileSystemAliasesCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeFileSystemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFileSystemsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeFileSystemsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeFileSystemsResponse(data, context);
  const response: DescribeFileSystemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeFileSystemsCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeSnapshotsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeSnapshotsCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeSnapshotsCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeSnapshotsResponse(data, context);
  const response: DescribeSnapshotsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeSnapshotsCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "SnapshotNotFound":
    case "com.amazonaws.fsx#SnapshotNotFound":
      throw await deserializeAws_json1_1SnapshotNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeStorageVirtualMachinesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStorageVirtualMachinesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeStorageVirtualMachinesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeStorageVirtualMachinesResponse(data, context);
  const response: DescribeStorageVirtualMachinesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeStorageVirtualMachinesCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DescribeVolumesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVolumesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DescribeVolumesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DescribeVolumesResponse(data, context);
  const response: DescribeVolumesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DescribeVolumesCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1DisassociateFileSystemAliasesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFileSystemAliasesCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1DisassociateFileSystemAliasesCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1DisassociateFileSystemAliasesResponse(data, context);
  const response: DisassociateFileSystemAliasesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1DisassociateFileSystemAliasesCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ListTagsForResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ListTagsForResourceResponse(data, context);
  const response: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ListTagsForResourceCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      throw await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context);
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      throw await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      throw await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1ReleaseFileSystemNfsV3LocksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ReleaseFileSystemNfsV3LocksCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1ReleaseFileSystemNfsV3LocksCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1ReleaseFileSystemNfsV3LocksResponse(data, context);
  const response: ReleaseFileSystemNfsV3LocksCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1ReleaseFileSystemNfsV3LocksCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1RestoreVolumeFromSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreVolumeFromSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1RestoreVolumeFromSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1RestoreVolumeFromSnapshotResponse(data, context);
  const response: RestoreVolumeFromSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1RestoreVolumeFromSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1TagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1TagResourceResponse(data, context);
  const response: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1TagResourceCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      throw await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context);
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      throw await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      throw await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UntagResourceCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UntagResourceResponse(data, context);
  const response: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UntagResourceCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "NotServiceResourceError":
    case "com.amazonaws.fsx#NotServiceResourceError":
      throw await deserializeAws_json1_1NotServiceResourceErrorResponse(parsedOutput, context);
    case "ResourceDoesNotSupportTagging":
    case "com.amazonaws.fsx#ResourceDoesNotSupportTagging":
      throw await deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse(parsedOutput, context);
    case "ResourceNotFound":
    case "com.amazonaws.fsx#ResourceNotFound":
      throw await deserializeAws_json1_1ResourceNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateDataRepositoryAssociationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataRepositoryAssociationCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateDataRepositoryAssociationCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateDataRepositoryAssociationResponse(data, context);
  const response: UpdateDataRepositoryAssociationCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateDataRepositoryAssociationCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "DataRepositoryAssociationNotFound":
    case "com.amazonaws.fsx#DataRepositoryAssociationNotFound":
      throw await deserializeAws_json1_1DataRepositoryAssociationNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateFileCacheCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileCacheCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFileCacheCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFileCacheResponse(data, context);
  const response: UpdateFileCacheCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFileCacheCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileCacheNotFound":
    case "com.amazonaws.fsx#FileCacheNotFound":
      throw await deserializeAws_json1_1FileCacheNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "MissingFileCacheConfiguration":
    case "com.amazonaws.fsx#MissingFileCacheConfiguration":
      throw await deserializeAws_json1_1MissingFileCacheConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateFileSystemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFileSystemCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateFileSystemCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateFileSystemResponse(data, context);
  const response: UpdateFileSystemCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateFileSystemCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "FileSystemNotFound":
    case "com.amazonaws.fsx#FileSystemNotFound":
      throw await deserializeAws_json1_1FileSystemNotFoundResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "InvalidNetworkSettings":
    case "com.amazonaws.fsx#InvalidNetworkSettings":
      throw await deserializeAws_json1_1InvalidNetworkSettingsResponse(parsedOutput, context);
    case "MissingFileSystemConfiguration":
    case "com.amazonaws.fsx#MissingFileSystemConfiguration":
      throw await deserializeAws_json1_1MissingFileSystemConfigurationResponse(parsedOutput, context);
    case "ServiceLimitExceeded":
    case "com.amazonaws.fsx#ServiceLimitExceeded":
      throw await deserializeAws_json1_1ServiceLimitExceededResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateSnapshotCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSnapshotCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateSnapshotCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateSnapshotResponse(data, context);
  const response: UpdateSnapshotCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateSnapshotCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "SnapshotNotFound":
    case "com.amazonaws.fsx#SnapshotNotFound":
      throw await deserializeAws_json1_1SnapshotNotFoundResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateStorageVirtualMachineCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStorageVirtualMachineCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateStorageVirtualMachineCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateStorageVirtualMachineResponse(data, context);
  const response: UpdateStorageVirtualMachineCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateStorageVirtualMachineCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "StorageVirtualMachineNotFound":
    case "com.amazonaws.fsx#StorageVirtualMachineNotFound":
      throw await deserializeAws_json1_1StorageVirtualMachineNotFoundResponse(parsedOutput, context);
    case "UnsupportedOperation":
    case "com.amazonaws.fsx#UnsupportedOperation":
      throw await deserializeAws_json1_1UnsupportedOperationResponse(parsedOutput, context);
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

export const deserializeAws_json1_1UpdateVolumeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVolumeCommandOutput> => {
  if (output.statusCode >= 300) {
    return deserializeAws_json1_1UpdateVolumeCommandError(output, context);
  }
  const data: any = await parseBody(output.body, context);
  let contents: any = {};
  contents = deserializeAws_json1_1UpdateVolumeResponse(data, context);
  const response: UpdateVolumeCommandOutput = {
    $metadata: deserializeMetadata(output),
    ...contents,
  };
  return Promise.resolve(response);
};

const deserializeAws_json1_1UpdateVolumeCommandError = async (
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
      throw await deserializeAws_json1_1BadRequestResponse(parsedOutput, context);
    case "IncompatibleParameterError":
    case "com.amazonaws.fsx#IncompatibleParameterError":
      throw await deserializeAws_json1_1IncompatibleParameterErrorResponse(parsedOutput, context);
    case "InternalServerError":
    case "com.amazonaws.fsx#InternalServerError":
      throw await deserializeAws_json1_1InternalServerErrorResponse(parsedOutput, context);
    case "MissingVolumeConfiguration":
    case "com.amazonaws.fsx#MissingVolumeConfiguration":
      throw await deserializeAws_json1_1MissingVolumeConfigurationResponse(parsedOutput, context);
    case "VolumeNotFound":
    case "com.amazonaws.fsx#VolumeNotFound":
      throw await deserializeAws_json1_1VolumeNotFoundResponse(parsedOutput, context);
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

const deserializeAws_json1_1ActiveDirectoryErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ActiveDirectoryError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ActiveDirectoryError(body, context);
  const exception = new ActiveDirectoryError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BackupBeingCopiedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupBeingCopied> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupBeingCopied(body, context);
  const exception = new BackupBeingCopied({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BackupInProgressResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupInProgress> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupInProgress(body, context);
  const exception = new BackupInProgress({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BackupNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupNotFound(body, context);
  const exception = new BackupNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BackupRestoringResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BackupRestoring> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BackupRestoring(body, context);
  const exception = new BackupRestoring({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1BadRequestResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequest> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1BadRequest(body, context);
  const exception = new BadRequest({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DataRepositoryAssociationNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryAssociationNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryAssociationNotFound(body, context);
  const exception = new DataRepositoryAssociationNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DataRepositoryTaskEndedResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskEnded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryTaskEnded(body, context);
  const exception = new DataRepositoryTaskEnded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DataRepositoryTaskExecutingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskExecuting> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryTaskExecuting(body, context);
  const exception = new DataRepositoryTaskExecuting({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1DataRepositoryTaskNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DataRepositoryTaskNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1DataRepositoryTaskNotFound(body, context);
  const exception = new DataRepositoryTaskNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileCacheNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileCacheNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileCacheNotFound(body, context);
  const exception = new FileCacheNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1FileSystemNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<FileSystemNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1FileSystemNotFound(body, context);
  const exception = new FileSystemNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncompatibleParameterErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleParameterError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatibleParameterError(body, context);
  const exception = new IncompatibleParameterError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1IncompatibleRegionForMultiAZResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<IncompatibleRegionForMultiAZ> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1IncompatibleRegionForMultiAZ(body, context);
  const exception = new IncompatibleRegionForMultiAZ({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InternalServerErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InternalServerError(body, context);
  const exception = new InternalServerError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDataRepositoryTypeResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDataRepositoryType> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDataRepositoryType(body, context);
  const exception = new InvalidDataRepositoryType({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidDestinationKmsKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidDestinationKmsKey> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidDestinationKmsKey(body, context);
  const exception = new InvalidDestinationKmsKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidExportPathResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidExportPath> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidExportPath(body, context);
  const exception = new InvalidExportPath({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidImportPathResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidImportPath> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidImportPath(body, context);
  const exception = new InvalidImportPath({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidNetworkSettingsResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidNetworkSettings> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidNetworkSettings(body, context);
  const exception = new InvalidNetworkSettings({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidPerUnitStorageThroughputResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidPerUnitStorageThroughput> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidPerUnitStorageThroughput(body, context);
  const exception = new InvalidPerUnitStorageThroughput({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidRegionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRegion> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidRegion(body, context);
  const exception = new InvalidRegion({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1InvalidSourceKmsKeyResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidSourceKmsKey> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1InvalidSourceKmsKey(body, context);
  const exception = new InvalidSourceKmsKey({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MissingFileCacheConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingFileCacheConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingFileCacheConfiguration(body, context);
  const exception = new MissingFileCacheConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MissingFileSystemConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingFileSystemConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingFileSystemConfiguration(body, context);
  const exception = new MissingFileSystemConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1MissingVolumeConfigurationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingVolumeConfiguration> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1MissingVolumeConfiguration(body, context);
  const exception = new MissingVolumeConfiguration({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1NotServiceResourceErrorResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotServiceResourceError> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1NotServiceResourceError(body, context);
  const exception = new NotServiceResourceError({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceDoesNotSupportTaggingResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceDoesNotSupportTagging> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceDoesNotSupportTagging(body, context);
  const exception = new ResourceDoesNotSupportTagging({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ResourceNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ResourceNotFound(body, context);
  const exception = new ResourceNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1ServiceLimitExceededResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceLimitExceeded> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1ServiceLimitExceeded(body, context);
  const exception = new ServiceLimitExceeded({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SnapshotNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SnapshotNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SnapshotNotFound(body, context);
  const exception = new SnapshotNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1SourceBackupUnavailableResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<SourceBackupUnavailable> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1SourceBackupUnavailable(body, context);
  const exception = new SourceBackupUnavailable({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1StorageVirtualMachineNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StorageVirtualMachineNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1StorageVirtualMachineNotFound(body, context);
  const exception = new StorageVirtualMachineNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1UnsupportedOperationResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<UnsupportedOperation> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1UnsupportedOperation(body, context);
  const exception = new UnsupportedOperation({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const deserializeAws_json1_1VolumeNotFoundResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<VolumeNotFound> => {
  const body = parsedOutput.body;
  const deserialized: any = deserializeAws_json1_1VolumeNotFound(body, context);
  const exception = new VolumeNotFound({
    $metadata: deserializeMetadata(parsedOutput),
    ...deserialized,
  });
  return __decorateServiceException(exception, body);
};

const serializeAws_json1_1AlternateDNSNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1AssociateFileSystemAliasesRequest = (
  input: AssociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aliases != null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
  };
};

const serializeAws_json1_1AutoExportPolicy = (input: AutoExportPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: serializeAws_json1_1EventTypes(input.Events, context) }),
  };
};

const serializeAws_json1_1AutoImportPolicy = (input: AutoImportPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: serializeAws_json1_1EventTypes(input.Events, context) }),
  };
};

const serializeAws_json1_1BackupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1CancelDataRepositoryTaskRequest = (
  input: CancelDataRepositoryTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.TaskId != null && { TaskId: input.TaskId }),
  };
};

const serializeAws_json1_1CompletionReport = (input: CompletionReport, context: __SerdeContext): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

const serializeAws_json1_1CopyBackupRequest = (input: CopyBackupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CopyTags != null && { CopyTags: input.CopyTags }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.SourceBackupId != null && { SourceBackupId: input.SourceBackupId }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateBackupRequest = (input: CreateBackupRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1CreateDataRepositoryAssociationRequest = (
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
    ...(input.S3 != null && { S3: serializeAws_json1_1S3DataRepositoryConfiguration(input.S3, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateDataRepositoryTaskRequest = (
  input: CreateDataRepositoryTaskRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.CapacityToRelease != null && { CapacityToRelease: input.CapacityToRelease }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Paths != null && { Paths: serializeAws_json1_1DataRepositoryTaskPaths(input.Paths, context) }),
    ...(input.Report != null && { Report: serializeAws_json1_1CompletionReport(input.Report, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1CreateFileCacheDataRepositoryAssociations = (
  input: FileCacheDataRepositoryAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1FileCacheDataRepositoryAssociation(entry, context);
    });
};

const serializeAws_json1_1CreateFileCacheLustreConfiguration = (
  input: CreateFileCacheLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeploymentType != null && { DeploymentType: input.DeploymentType }),
    ...(input.MetadataConfiguration != null && {
      MetadataConfiguration: serializeAws_json1_1FileCacheLustreMetadataConfiguration(
        input.MetadataConfiguration,
        context
      ),
    }),
    ...(input.PerUnitStorageThroughput != null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateFileCacheRequest = (input: CreateFileCacheRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.CopyTagsToDataRepositoryAssociations != null && {
      CopyTagsToDataRepositoryAssociations: input.CopyTagsToDataRepositoryAssociations,
    }),
    ...(input.DataRepositoryAssociations != null && {
      DataRepositoryAssociations: serializeAws_json1_1CreateFileCacheDataRepositoryAssociations(
        input.DataRepositoryAssociations,
        context
      ),
    }),
    ...(input.FileCacheType != null && { FileCacheType: input.FileCacheType }),
    ...(input.FileCacheTypeVersion != null && { FileCacheTypeVersion: input.FileCacheTypeVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: serializeAws_json1_1CreateFileCacheLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateFileSystemFromBackupRequest = (
  input: CreateFileSystemFromBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemTypeVersion != null && { FileSystemTypeVersion: input.FileSystemTypeVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1CreateFileSystemOpenZFSConfiguration(
        input.OpenZFSConfiguration,
        context
      ),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(
        input.WindowsConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateFileSystemLustreConfiguration = (
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
      LogConfiguration: serializeAws_json1_1LustreLogCreateConfiguration(input.LogConfiguration, context),
    }),
    ...(input.PerUnitStorageThroughput != null && { PerUnitStorageThroughput: input.PerUnitStorageThroughput }),
    ...(input.RootSquashConfiguration != null && {
      RootSquashConfiguration: serializeAws_json1_1LustreRootSquashConfiguration(
        input.RootSquashConfiguration,
        context
      ),
    }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateFileSystemOntapConfiguration = (
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
      DiskIopsConfiguration: serializeAws_json1_1DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.EndpointIpAddressRange != null && { EndpointIpAddressRange: input.EndpointIpAddressRange }),
    ...(input.FsxAdminPassword != null && { FsxAdminPassword: input.FsxAdminPassword }),
    ...(input.PreferredSubnetId != null && { PreferredSubnetId: input.PreferredSubnetId }),
    ...(input.RouteTableIds != null && {
      RouteTableIds: serializeAws_json1_1RouteTableIds(input.RouteTableIds, context),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateFileSystemOpenZFSConfiguration = (
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
      DiskIopsConfiguration: serializeAws_json1_1DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.RootVolumeConfiguration != null && {
      RootVolumeConfiguration: serializeAws_json1_1OpenZFSCreateRootVolumeConfiguration(
        input.RootVolumeConfiguration,
        context
      ),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateFileSystemRequest = (input: CreateFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemType != null && { FileSystemType: input.FileSystemType }),
    ...(input.FileSystemTypeVersion != null && { FileSystemTypeVersion: input.FileSystemTypeVersion }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: serializeAws_json1_1CreateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: serializeAws_json1_1CreateFileSystemOntapConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1CreateFileSystemOpenZFSConfiguration(
        input.OpenZFSConfiguration,
        context
      ),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_json1_1SecurityGroupIds(input.SecurityGroupIds, context),
    }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_json1_1SubnetIds(input.SubnetIds, context) }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: serializeAws_json1_1CreateFileSystemWindowsConfiguration(
        input.WindowsConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateFileSystemWindowsConfiguration = (
  input: CreateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryId != null && { ActiveDirectoryId: input.ActiveDirectoryId }),
    ...(input.Aliases != null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
    ...(input.AuditLogConfiguration != null && {
      AuditLogConfiguration: serializeAws_json1_1WindowsAuditLogCreateConfiguration(
        input.AuditLogConfiguration,
        context
      ),
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
      SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1CreateOntapVolumeConfiguration = (
  input: CreateOntapVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.JunctionPath != null && { JunctionPath: input.JunctionPath }),
    ...(input.OntapVolumeType != null && { OntapVolumeType: input.OntapVolumeType }),
    ...(input.SecurityStyle != null && { SecurityStyle: input.SecurityStyle }),
    ...(input.SizeInMegabytes != null && { SizeInMegabytes: input.SizeInMegabytes }),
    ...(input.SnapshotPolicy != null && { SnapshotPolicy: input.SnapshotPolicy }),
    ...(input.StorageEfficiencyEnabled != null && { StorageEfficiencyEnabled: input.StorageEfficiencyEnabled }),
    ...(input.StorageVirtualMachineId != null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
    ...(input.TieringPolicy != null && {
      TieringPolicy: serializeAws_json1_1TieringPolicy(input.TieringPolicy, context),
    }),
  };
};

const serializeAws_json1_1CreateOpenZFSOriginSnapshotConfiguration = (
  input: CreateOpenZFSOriginSnapshotConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyStrategy != null && { CopyStrategy: input.CopyStrategy }),
    ...(input.SnapshotARN != null && { SnapshotARN: input.SnapshotARN }),
  };
};

const serializeAws_json1_1CreateOpenZFSVolumeConfiguration = (
  input: CreateOpenZFSVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTagsToSnapshots != null && { CopyTagsToSnapshots: input.CopyTagsToSnapshots }),
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.NfsExports != null && { NfsExports: serializeAws_json1_1OpenZFSNfsExports(input.NfsExports, context) }),
    ...(input.OriginSnapshot != null && {
      OriginSnapshot: serializeAws_json1_1CreateOpenZFSOriginSnapshotConfiguration(input.OriginSnapshot, context),
    }),
    ...(input.ParentVolumeId != null && { ParentVolumeId: input.ParentVolumeId }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RecordSizeKiB != null && { RecordSizeKiB: input.RecordSizeKiB }),
    ...(input.StorageCapacityQuotaGiB != null && { StorageCapacityQuotaGiB: input.StorageCapacityQuotaGiB }),
    ...(input.StorageCapacityReservationGiB != null && {
      StorageCapacityReservationGiB: input.StorageCapacityReservationGiB,
    }),
    ...(input.UserAndGroupQuotas != null && {
      UserAndGroupQuotas: serializeAws_json1_1OpenZFSUserAndGroupQuotas(input.UserAndGroupQuotas, context),
    }),
  };
};

const serializeAws_json1_1CreateSnapshotRequest = (input: CreateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1CreateStorageVirtualMachineRequest = (
  input: CreateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryConfiguration != null && {
      ActiveDirectoryConfiguration: serializeAws_json1_1CreateSvmActiveDirectoryConfiguration(
        input.ActiveDirectoryConfiguration,
        context
      ),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RootVolumeSecurityStyle != null && { RootVolumeSecurityStyle: input.RootVolumeSecurityStyle }),
    ...(input.SvmAdminPassword != null && { SvmAdminPassword: input.SvmAdminPassword }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateSvmActiveDirectoryConfiguration = (
  input: CreateSvmActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetBiosName != null && { NetBiosName: input.NetBiosName }),
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfiguration(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1CreateVolumeFromBackupRequest = (
  input: CreateVolumeFromBackupRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: serializeAws_json1_1CreateOntapVolumeConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1CreateVolumeRequest = (input: CreateVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: serializeAws_json1_1CreateOntapVolumeConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1CreateOpenZFSVolumeConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_json1_1DataRepositoryAssociationIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DataRepositoryTaskFilter = (
  input: DataRepositoryTaskFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1DataRepositoryTaskFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1DataRepositoryTaskFilters = (
  input: DataRepositoryTaskFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1DataRepositoryTaskFilter(entry, context);
    });
};

const serializeAws_json1_1DataRepositoryTaskFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DataRepositoryTaskPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteBackupRequest = (input: DeleteBackupRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupId != null && { BackupId: input.BackupId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
  };
};

const serializeAws_json1_1DeleteDataRepositoryAssociationRequest = (
  input: DeleteDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.DeleteDataInFileSystem != null && { DeleteDataInFileSystem: input.DeleteDataInFileSystem }),
  };
};

const serializeAws_json1_1DeleteFileCacheRequest = (input: DeleteFileCacheRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileCacheId != null && { FileCacheId: input.FileCacheId }),
  };
};

const serializeAws_json1_1DeleteFileSystemLustreConfiguration = (
  input: DeleteFileSystemLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteFileSystemOpenZFSConfiguration = (
  input: DeleteFileSystemOpenZFSConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.Options != null && {
      Options: serializeAws_json1_1DeleteFileSystemOpenZFSOptions(input.Options, context),
    }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteFileSystemOpenZFSOptions = (
  input: (DeleteFileSystemOpenZFSOption | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteFileSystemRequest = (input: DeleteFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: serializeAws_json1_1DeleteFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1DeleteFileSystemOpenZFSConfiguration(
        input.OpenZFSConfiguration,
        context
      ),
    }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: serializeAws_json1_1DeleteFileSystemWindowsConfiguration(
        input.WindowsConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1DeleteFileSystemWindowsConfiguration = (
  input: DeleteFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteOpenZFSVolumeOptions = (
  input: (DeleteOpenZFSVolumeOption | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1DeleteSnapshotRequest = (input: DeleteSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1DeleteStorageVirtualMachineRequest = (
  input: DeleteStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.StorageVirtualMachineId != null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
  };
};

const serializeAws_json1_1DeleteVolumeOntapConfiguration = (
  input: DeleteVolumeOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.FinalBackupTags != null && { FinalBackupTags: serializeAws_json1_1Tags(input.FinalBackupTags, context) }),
    ...(input.SkipFinalBackup != null && { SkipFinalBackup: input.SkipFinalBackup }),
  };
};

const serializeAws_json1_1DeleteVolumeOpenZFSConfiguration = (
  input: DeleteVolumeOpenZFSConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Options != null && { Options: serializeAws_json1_1DeleteOpenZFSVolumeOptions(input.Options, context) }),
  };
};

const serializeAws_json1_1DeleteVolumeRequest = (input: DeleteVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: serializeAws_json1_1DeleteVolumeOntapConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1DeleteVolumeOpenZFSConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1DescribeBackupsRequest = (input: DescribeBackupsRequest, context: __SerdeContext): any => {
  return {
    ...(input.BackupIds != null && { BackupIds: serializeAws_json1_1BackupIds(input.BackupIds, context) }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDataRepositoryAssociationsRequest = (
  input: DescribeDataRepositoryAssociationsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationIds != null && {
      AssociationIds: serializeAws_json1_1DataRepositoryAssociationIds(input.AssociationIds, context),
    }),
    ...(input.Filters != null && { Filters: serializeAws_json1_1Filters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeDataRepositoryTasksRequest = (
  input: DescribeDataRepositoryTasksRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1DataRepositoryTaskFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.TaskIds != null && { TaskIds: serializeAws_json1_1TaskIds(input.TaskIds, context) }),
  };
};

const serializeAws_json1_1DescribeFileCachesRequest = (
  input: DescribeFileCachesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileCacheIds != null && { FileCacheIds: serializeAws_json1_1FileCacheIds(input.FileCacheIds, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFileSystemAliasesRequest = (
  input: DescribeFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeFileSystemsRequest = (
  input: DescribeFileSystemsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.FileSystemIds != null && {
      FileSystemIds: serializeAws_json1_1FileSystemIds(input.FileSystemIds, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  };
};

const serializeAws_json1_1DescribeSnapshotsRequest = (
  input: DescribeSnapshotsRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1SnapshotFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SnapshotIds != null && { SnapshotIds: serializeAws_json1_1SnapshotIds(input.SnapshotIds, context) }),
  };
};

const serializeAws_json1_1DescribeStorageVirtualMachinesRequest = (
  input: DescribeStorageVirtualMachinesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1StorageVirtualMachineFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StorageVirtualMachineIds != null && {
      StorageVirtualMachineIds: serializeAws_json1_1StorageVirtualMachineIds(input.StorageVirtualMachineIds, context),
    }),
  };
};

const serializeAws_json1_1DescribeVolumesRequest = (input: DescribeVolumesRequest, context: __SerdeContext): any => {
  return {
    ...(input.Filters != null && { Filters: serializeAws_json1_1VolumeFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.VolumeIds != null && { VolumeIds: serializeAws_json1_1VolumeIds(input.VolumeIds, context) }),
  };
};

const serializeAws_json1_1DisassociateFileSystemAliasesRequest = (
  input: DisassociateFileSystemAliasesRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.Aliases != null && { Aliases: serializeAws_json1_1AlternateDNSNames(input.Aliases, context) }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
  };
};

const serializeAws_json1_1DiskIopsConfiguration = (input: DiskIopsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

const serializeAws_json1_1DnsIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1EventTypes = (input: (EventType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FileCacheDataRepositoryAssociation = (
  input: FileCacheDataRepositoryAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataRepositoryPath != null && { DataRepositoryPath: input.DataRepositoryPath }),
    ...(input.DataRepositorySubdirectories != null && {
      DataRepositorySubdirectories: serializeAws_json1_1SubDirectoriesPaths(
        input.DataRepositorySubdirectories,
        context
      ),
    }),
    ...(input.FileCachePath != null && { FileCachePath: input.FileCachePath }),
    ...(input.NFS != null && { NFS: serializeAws_json1_1FileCacheNFSConfiguration(input.NFS, context) }),
  };
};

const serializeAws_json1_1FileCacheIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1FileCacheLustreMetadataConfiguration = (
  input: FileCacheLustreMetadataConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
  };
};

const serializeAws_json1_1FileCacheNFSConfiguration = (
  input: FileCacheNFSConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps != null && { DnsIps: serializeAws_json1_1RepositoryDnsIps(input.DnsIps, context) }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_json1_1FileSystemIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Filter = (input: Filter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1FilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1Filters = (input: Filter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Filter(entry, context);
    });
};

const serializeAws_json1_1FilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1ListTagsForResourceRequest = (
  input: ListTagsForResourceRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
  };
};

const serializeAws_json1_1LustreLogCreateConfiguration = (
  input: LustreLogCreateConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.Level != null && { Level: input.Level }),
  };
};

const serializeAws_json1_1LustreNoSquashNids = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1LustreRootSquashConfiguration = (
  input: LustreRootSquashConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.NoSquashNids != null && {
      NoSquashNids: serializeAws_json1_1LustreNoSquashNids(input.NoSquashNids, context),
    }),
    ...(input.RootSquash != null && { RootSquash: input.RootSquash }),
  };
};

const serializeAws_json1_1OpenZFSClientConfiguration = (
  input: OpenZFSClientConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Clients != null && { Clients: input.Clients }),
    ...(input.Options != null && { Options: serializeAws_json1_1OpenZFSNfsExportOptions(input.Options, context) }),
  };
};

const serializeAws_json1_1OpenZFSClientConfigurations = (
  input: OpenZFSClientConfiguration[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpenZFSClientConfiguration(entry, context);
    });
};

const serializeAws_json1_1OpenZFSCreateRootVolumeConfiguration = (
  input: OpenZFSCreateRootVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTagsToSnapshots != null && { CopyTagsToSnapshots: input.CopyTagsToSnapshots }),
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.NfsExports != null && { NfsExports: serializeAws_json1_1OpenZFSNfsExports(input.NfsExports, context) }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RecordSizeKiB != null && { RecordSizeKiB: input.RecordSizeKiB }),
    ...(input.UserAndGroupQuotas != null && {
      UserAndGroupQuotas: serializeAws_json1_1OpenZFSUserAndGroupQuotas(input.UserAndGroupQuotas, context),
    }),
  };
};

const serializeAws_json1_1OpenZFSNfsExport = (input: OpenZFSNfsExport, context: __SerdeContext): any => {
  return {
    ...(input.ClientConfigurations != null && {
      ClientConfigurations: serializeAws_json1_1OpenZFSClientConfigurations(input.ClientConfigurations, context),
    }),
  };
};

const serializeAws_json1_1OpenZFSNfsExportOptions = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1OpenZFSNfsExports = (input: OpenZFSNfsExport[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpenZFSNfsExport(entry, context);
    });
};

const serializeAws_json1_1OpenZFSUserAndGroupQuotas = (
  input: OpenZFSUserOrGroupQuota[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1OpenZFSUserOrGroupQuota(entry, context);
    });
};

const serializeAws_json1_1OpenZFSUserOrGroupQuota = (input: OpenZFSUserOrGroupQuota, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.StorageCapacityQuotaGiB != null && { StorageCapacityQuotaGiB: input.StorageCapacityQuotaGiB }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_json1_1ReleaseFileSystemNfsV3LocksRequest = (
  input: ReleaseFileSystemNfsV3LocksRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
  };
};

const serializeAws_json1_1RepositoryDnsIps = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RestoreOpenZFSVolumeOptions = (
  input: (RestoreOpenZFSVolumeOption | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1RestoreVolumeFromSnapshotRequest = (
  input: RestoreVolumeFromSnapshotRequest,
  context: __SerdeContext
): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Options != null && { Options: serializeAws_json1_1RestoreOpenZFSVolumeOptions(input.Options, context) }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1RouteTableIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1S3DataRepositoryConfiguration = (
  input: S3DataRepositoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutoExportPolicy != null && {
      AutoExportPolicy: serializeAws_json1_1AutoExportPolicy(input.AutoExportPolicy, context),
    }),
    ...(input.AutoImportPolicy != null && {
      AutoImportPolicy: serializeAws_json1_1AutoImportPolicy(input.AutoImportPolicy, context),
    }),
  };
};

const serializeAws_json1_1SecurityGroupIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SelfManagedActiveDirectoryConfiguration = (
  input: SelfManagedActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps != null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) }),
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

const serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates = (
  input: SelfManagedActiveDirectoryConfigurationUpdates,
  context: __SerdeContext
): any => {
  return {
    ...(input.DnsIps != null && { DnsIps: serializeAws_json1_1DnsIps(input.DnsIps, context) }),
    ...(input.Password != null && { Password: input.Password }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_json1_1SnapshotFilter = (input: SnapshotFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1SnapshotFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1SnapshotFilters = (input: SnapshotFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1SnapshotFilter(entry, context);
    });
};

const serializeAws_json1_1SnapshotFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SnapshotIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StorageVirtualMachineFilter = (
  input: StorageVirtualMachineFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && {
      Values: serializeAws_json1_1StorageVirtualMachineFilterValues(input.Values, context),
    }),
  };
};

const serializeAws_json1_1StorageVirtualMachineFilters = (
  input: StorageVirtualMachineFilter[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1StorageVirtualMachineFilter(entry, context);
    });
};

const serializeAws_json1_1StorageVirtualMachineFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1StorageVirtualMachineIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubDirectoriesPaths = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1SubnetIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1Tag = (input: Tag, context: __SerdeContext): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_json1_1TagKeys = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TagResourceRequest = (input: TagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.Tags != null && { Tags: serializeAws_json1_1Tags(input.Tags, context) }),
  };
};

const serializeAws_json1_1Tags = (input: Tag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1Tag(entry, context);
    });
};

const serializeAws_json1_1TaskIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1TieringPolicy = (input: TieringPolicy, context: __SerdeContext): any => {
  return {
    ...(input.CoolingPeriod != null && { CoolingPeriod: input.CoolingPeriod }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_json1_1UntagResourceRequest = (input: UntagResourceRequest, context: __SerdeContext): any => {
  return {
    ...(input.ResourceARN != null && { ResourceARN: input.ResourceARN }),
    ...(input.TagKeys != null && { TagKeys: serializeAws_json1_1TagKeys(input.TagKeys, context) }),
  };
};

const serializeAws_json1_1UpdateDataRepositoryAssociationRequest = (
  input: UpdateDataRepositoryAssociationRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.ImportedFileChunkSize != null && { ImportedFileChunkSize: input.ImportedFileChunkSize }),
    ...(input.S3 != null && { S3: serializeAws_json1_1S3DataRepositoryConfiguration(input.S3, context) }),
  };
};

const serializeAws_json1_1UpdateFileCacheLustreConfiguration = (
  input: UpdateFileCacheLustreConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateFileCacheRequest = (input: UpdateFileCacheRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileCacheId != null && { FileCacheId: input.FileCacheId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: serializeAws_json1_1UpdateFileCacheLustreConfiguration(input.LustreConfiguration, context),
    }),
  };
};

const serializeAws_json1_1UpdateFileSystemLustreConfiguration = (
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
      LogConfiguration: serializeAws_json1_1LustreLogCreateConfiguration(input.LogConfiguration, context),
    }),
    ...(input.RootSquashConfiguration != null && {
      RootSquashConfiguration: serializeAws_json1_1LustreRootSquashConfiguration(
        input.RootSquashConfiguration,
        context
      ),
    }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateFileSystemOntapConfiguration = (
  input: UpdateFileSystemOntapConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddRouteTableIds != null && {
      AddRouteTableIds: serializeAws_json1_1RouteTableIds(input.AddRouteTableIds, context),
    }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.DiskIopsConfiguration != null && {
      DiskIopsConfiguration: serializeAws_json1_1DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.FsxAdminPassword != null && { FsxAdminPassword: input.FsxAdminPassword }),
    ...(input.RemoveRouteTableIds != null && {
      RemoveRouteTableIds: serializeAws_json1_1RouteTableIds(input.RemoveRouteTableIds, context),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateFileSystemOpenZFSConfiguration = (
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
      DiskIopsConfiguration: serializeAws_json1_1DiskIopsConfiguration(input.DiskIopsConfiguration, context),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateFileSystemRequest = (input: UpdateFileSystemRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.LustreConfiguration != null && {
      LustreConfiguration: serializeAws_json1_1UpdateFileSystemLustreConfiguration(input.LustreConfiguration, context),
    }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: serializeAws_json1_1UpdateFileSystemOntapConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1UpdateFileSystemOpenZFSConfiguration(
        input.OpenZFSConfiguration,
        context
      ),
    }),
    ...(input.StorageCapacity != null && { StorageCapacity: input.StorageCapacity }),
    ...(input.WindowsConfiguration != null && {
      WindowsConfiguration: serializeAws_json1_1UpdateFileSystemWindowsConfiguration(
        input.WindowsConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateFileSystemWindowsConfiguration = (
  input: UpdateFileSystemWindowsConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogConfiguration != null && {
      AuditLogConfiguration: serializeAws_json1_1WindowsAuditLogCreateConfiguration(
        input.AuditLogConfiguration,
        context
      ),
    }),
    ...(input.AutomaticBackupRetentionDays != null && {
      AutomaticBackupRetentionDays: input.AutomaticBackupRetentionDays,
    }),
    ...(input.DailyAutomaticBackupStartTime != null && {
      DailyAutomaticBackupStartTime: input.DailyAutomaticBackupStartTime,
    }),
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
    ...(input.ThroughputCapacity != null && { ThroughputCapacity: input.ThroughputCapacity }),
    ...(input.WeeklyMaintenanceStartTime != null && { WeeklyMaintenanceStartTime: input.WeeklyMaintenanceStartTime }),
  };
};

const serializeAws_json1_1UpdateOntapVolumeConfiguration = (
  input: UpdateOntapVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.CopyTagsToBackups != null && { CopyTagsToBackups: input.CopyTagsToBackups }),
    ...(input.JunctionPath != null && { JunctionPath: input.JunctionPath }),
    ...(input.SecurityStyle != null && { SecurityStyle: input.SecurityStyle }),
    ...(input.SizeInMegabytes != null && { SizeInMegabytes: input.SizeInMegabytes }),
    ...(input.SnapshotPolicy != null && { SnapshotPolicy: input.SnapshotPolicy }),
    ...(input.StorageEfficiencyEnabled != null && { StorageEfficiencyEnabled: input.StorageEfficiencyEnabled }),
    ...(input.TieringPolicy != null && {
      TieringPolicy: serializeAws_json1_1TieringPolicy(input.TieringPolicy, context),
    }),
  };
};

const serializeAws_json1_1UpdateOpenZFSVolumeConfiguration = (
  input: UpdateOpenZFSVolumeConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataCompressionType != null && { DataCompressionType: input.DataCompressionType }),
    ...(input.NfsExports != null && { NfsExports: serializeAws_json1_1OpenZFSNfsExports(input.NfsExports, context) }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.RecordSizeKiB != null && { RecordSizeKiB: input.RecordSizeKiB }),
    ...(input.StorageCapacityQuotaGiB != null && { StorageCapacityQuotaGiB: input.StorageCapacityQuotaGiB }),
    ...(input.StorageCapacityReservationGiB != null && {
      StorageCapacityReservationGiB: input.StorageCapacityReservationGiB,
    }),
    ...(input.UserAndGroupQuotas != null && {
      UserAndGroupQuotas: serializeAws_json1_1OpenZFSUserAndGroupQuotas(input.UserAndGroupQuotas, context),
    }),
  };
};

const serializeAws_json1_1UpdateSnapshotRequest = (input: UpdateSnapshotRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
  };
};

const serializeAws_json1_1UpdateStorageVirtualMachineRequest = (
  input: UpdateStorageVirtualMachineRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActiveDirectoryConfiguration != null && {
      ActiveDirectoryConfiguration: serializeAws_json1_1UpdateSvmActiveDirectoryConfiguration(
        input.ActiveDirectoryConfiguration,
        context
      ),
    }),
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.StorageVirtualMachineId != null && { StorageVirtualMachineId: input.StorageVirtualMachineId }),
    ...(input.SvmAdminPassword != null && { SvmAdminPassword: input.SvmAdminPassword }),
  };
};

const serializeAws_json1_1UpdateSvmActiveDirectoryConfiguration = (
  input: UpdateSvmActiveDirectoryConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.SelfManagedActiveDirectoryConfiguration != null && {
      SelfManagedActiveDirectoryConfiguration: serializeAws_json1_1SelfManagedActiveDirectoryConfigurationUpdates(
        input.SelfManagedActiveDirectoryConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_json1_1UpdateVolumeRequest = (input: UpdateVolumeRequest, context: __SerdeContext): any => {
  return {
    ClientRequestToken: input.ClientRequestToken ?? generateIdempotencyToken(),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OntapConfiguration != null && {
      OntapConfiguration: serializeAws_json1_1UpdateOntapVolumeConfiguration(input.OntapConfiguration, context),
    }),
    ...(input.OpenZFSConfiguration != null && {
      OpenZFSConfiguration: serializeAws_json1_1UpdateOpenZFSVolumeConfiguration(input.OpenZFSConfiguration, context),
    }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
  };
};

const serializeAws_json1_1VolumeFilter = (input: VolumeFilter, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Values != null && { Values: serializeAws_json1_1VolumeFilterValues(input.Values, context) }),
  };
};

const serializeAws_json1_1VolumeFilters = (input: VolumeFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_json1_1VolumeFilter(entry, context);
    });
};

const serializeAws_json1_1VolumeFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1VolumeIds = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_json1_1WindowsAuditLogCreateConfiguration = (
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

const deserializeAws_json1_1ActiveDirectoryBackupAttributes = (
  output: any,
  context: __SerdeContext
): ActiveDirectoryBackupAttributes => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    DomainName: __expectString(output.DomainName),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1ActiveDirectoryError = (output: any, context: __SerdeContext): ActiveDirectoryError => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    Message: __expectString(output.Message),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1AdministrativeAction = (output: any, context: __SerdeContext): AdministrativeAction => {
  return {
    AdministrativeActionType: __expectString(output.AdministrativeActionType),
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1AdministrativeActionFailureDetails(output.FailureDetails, context)
        : undefined,
    ProgressPercent: __expectInt32(output.ProgressPercent),
    RequestTime:
      output.RequestTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.RequestTime)))
        : undefined,
    Status: __expectString(output.Status),
    TargetFileSystemValues:
      output.TargetFileSystemValues != null
        ? deserializeAws_json1_1FileSystem(output.TargetFileSystemValues, context)
        : undefined,
    TargetSnapshotValues:
      output.TargetSnapshotValues != null
        ? deserializeAws_json1_1Snapshot(output.TargetSnapshotValues, context)
        : undefined,
    TargetVolumeValues:
      output.TargetVolumeValues != null ? deserializeAws_json1_1Volume(output.TargetVolumeValues, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AdministrativeActionFailureDetails = (
  output: any,
  context: __SerdeContext
): AdministrativeActionFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1AdministrativeActions = (output: any, context: __SerdeContext): AdministrativeAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1AdministrativeAction(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1Alias = (output: any, context: __SerdeContext): Alias => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1Aliases = (output: any, context: __SerdeContext): Alias[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Alias(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1AssociateFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): AssociateFileSystemAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1Aliases(output.Aliases, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AutoExportPolicy = (output: any, context: __SerdeContext): AutoExportPolicy => {
  return {
    Events: output.Events != null ? deserializeAws_json1_1EventTypes(output.Events, context) : undefined,
  } as any;
};

const deserializeAws_json1_1AutoImportPolicy = (output: any, context: __SerdeContext): AutoImportPolicy => {
  return {
    Events: output.Events != null ? deserializeAws_json1_1EventTypes(output.Events, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Backup = (output: any, context: __SerdeContext): Backup => {
  return {
    BackupId: __expectString(output.BackupId),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DirectoryInformation:
      output.DirectoryInformation != null
        ? deserializeAws_json1_1ActiveDirectoryBackupAttributes(output.DirectoryInformation, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1BackupFailureDetails(output.FailureDetails, context)
        : undefined,
    FileSystem: output.FileSystem != null ? deserializeAws_json1_1FileSystem(output.FileSystem, context) : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    OwnerId: __expectString(output.OwnerId),
    ProgressPercent: __expectInt32(output.ProgressPercent),
    ResourceARN: __expectString(output.ResourceARN),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupId: __expectString(output.SourceBackupId),
    SourceBackupRegion: __expectString(output.SourceBackupRegion),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
    Volume: output.Volume != null ? deserializeAws_json1_1Volume(output.Volume, context) : undefined,
  } as any;
};

const deserializeAws_json1_1BackupBeingCopied = (output: any, context: __SerdeContext): BackupBeingCopied => {
  return {
    BackupId: __expectString(output.BackupId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupFailureDetails = (output: any, context: __SerdeContext): BackupFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupInProgress = (output: any, context: __SerdeContext): BackupInProgress => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupNotFound = (output: any, context: __SerdeContext): BackupNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1BackupRestoring = (output: any, context: __SerdeContext): BackupRestoring => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Backups = (output: any, context: __SerdeContext): Backup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Backup(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1BadRequest = (output: any, context: __SerdeContext): BadRequest => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1CancelDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CancelDataRepositoryTaskResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    TaskId: __expectString(output.TaskId),
  } as any;
};

const deserializeAws_json1_1CompletionReport = (output: any, context: __SerdeContext): CompletionReport => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Format: __expectString(output.Format),
    Path: __expectString(output.Path),
    Scope: __expectString(output.Scope),
  } as any;
};

const deserializeAws_json1_1CopyBackupResponse = (output: any, context: __SerdeContext): CopyBackupResponse => {
  return {
    Backup: output.Backup != null ? deserializeAws_json1_1Backup(output.Backup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateBackupResponse = (output: any, context: __SerdeContext): CreateBackupResponse => {
  return {
    Backup: output.Backup != null ? deserializeAws_json1_1Backup(output.Backup, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryAssociationResponse => {
  return {
    Association:
      output.Association != null
        ? deserializeAws_json1_1DataRepositoryAssociation(output.Association, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateDataRepositoryTaskResponse = (
  output: any,
  context: __SerdeContext
): CreateDataRepositoryTaskResponse => {
  return {
    DataRepositoryTask:
      output.DataRepositoryTask != null
        ? deserializeAws_json1_1DataRepositoryTask(output.DataRepositoryTask, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFileCacheResponse = (
  output: any,
  context: __SerdeContext
): CreateFileCacheResponse => {
  return {
    FileCache:
      output.FileCache != null ? deserializeAws_json1_1FileCacheCreating(output.FileCache, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFileSystemFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemFromBackupResponse => {
  return {
    FileSystem: output.FileSystem != null ? deserializeAws_json1_1FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateFileSystemResponse = (
  output: any,
  context: __SerdeContext
): CreateFileSystemResponse => {
  return {
    FileSystem: output.FileSystem != null ? deserializeAws_json1_1FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateSnapshotResponse = (output: any, context: __SerdeContext): CreateSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? deserializeAws_json1_1Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): CreateStorageVirtualMachineResponse => {
  return {
    StorageVirtualMachine:
      output.StorageVirtualMachine != null
        ? deserializeAws_json1_1StorageVirtualMachine(output.StorageVirtualMachine, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVolumeFromBackupResponse = (
  output: any,
  context: __SerdeContext
): CreateVolumeFromBackupResponse => {
  return {
    Volume: output.Volume != null ? deserializeAws_json1_1Volume(output.Volume, context) : undefined,
  } as any;
};

const deserializeAws_json1_1CreateVolumeResponse = (output: any, context: __SerdeContext): CreateVolumeResponse => {
  return {
    Volume: output.Volume != null ? deserializeAws_json1_1Volume(output.Volume, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DataRepositoryAssociation = (
  output: any,
  context: __SerdeContext
): DataRepositoryAssociation => {
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
        ? deserializeAws_json1_1SubDirectoriesPaths(output.DataRepositorySubdirectories, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1DataRepositoryFailureDetails(output.FailureDetails, context)
        : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileCachePath: __expectString(output.FileCachePath),
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemPath: __expectString(output.FileSystemPath),
    ImportedFileChunkSize: __expectInt32(output.ImportedFileChunkSize),
    Lifecycle: __expectString(output.Lifecycle),
    NFS: output.NFS != null ? deserializeAws_json1_1NFSDataRepositoryConfiguration(output.NFS, context) : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    S3: output.S3 != null ? deserializeAws_json1_1S3DataRepositoryConfiguration(output.S3, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DataRepositoryAssociationIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DataRepositoryAssociationNotFound = (
  output: any,
  context: __SerdeContext
): DataRepositoryAssociationNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryAssociations = (
  output: any,
  context: __SerdeContext
): DataRepositoryAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataRepositoryAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataRepositoryConfiguration = (
  output: any,
  context: __SerdeContext
): DataRepositoryConfiguration => {
  return {
    AutoImportPolicy: __expectString(output.AutoImportPolicy),
    ExportPath: __expectString(output.ExportPath),
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1DataRepositoryFailureDetails(output.FailureDetails, context)
        : undefined,
    ImportPath: __expectString(output.ImportPath),
    ImportedFileChunkSize: __expectInt32(output.ImportedFileChunkSize),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

const deserializeAws_json1_1DataRepositoryFailureDetails = (
  output: any,
  context: __SerdeContext
): DataRepositoryFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTask = (output: any, context: __SerdeContext): DataRepositoryTask => {
  return {
    CapacityToRelease: __expectLong(output.CapacityToRelease),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    EndTime:
      output.EndTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.EndTime))) : undefined,
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1DataRepositoryTaskFailureDetails(output.FailureDetails, context)
        : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    Paths: output.Paths != null ? deserializeAws_json1_1DataRepositoryTaskPaths(output.Paths, context) : undefined,
    Report: output.Report != null ? deserializeAws_json1_1CompletionReport(output.Report, context) : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    StartTime:
      output.StartTime != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartTime))) : undefined,
    Status: output.Status != null ? deserializeAws_json1_1DataRepositoryTaskStatus(output.Status, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    TaskId: __expectString(output.TaskId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskEnded = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskEnded => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskExecuting = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskExecuting => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskFailureDetails = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskNotFound = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1DataRepositoryTaskPaths = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1DataRepositoryTasks = (output: any, context: __SerdeContext): DataRepositoryTask[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1DataRepositoryTask(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1DataRepositoryTaskStatus = (
  output: any,
  context: __SerdeContext
): DataRepositoryTaskStatus => {
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

const deserializeAws_json1_1DeleteBackupResponse = (output: any, context: __SerdeContext): DeleteBackupResponse => {
  return {
    BackupId: __expectString(output.BackupId),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

const deserializeAws_json1_1DeleteDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): DeleteDataRepositoryAssociationResponse => {
  return {
    AssociationId: __expectString(output.AssociationId),
    DeleteDataInFileSystem: __expectBoolean(output.DeleteDataInFileSystem),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

const deserializeAws_json1_1DeleteFileCacheResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileCacheResponse => {
  return {
    FileCacheId: __expectString(output.FileCacheId),
    Lifecycle: __expectString(output.Lifecycle),
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemLustreResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemLustreResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags != null ? deserializeAws_json1_1Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemOpenZFSResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemOpenZFSResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags != null ? deserializeAws_json1_1Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemResponse => {
  return {
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreResponse:
      output.LustreResponse != null
        ? deserializeAws_json1_1DeleteFileSystemLustreResponse(output.LustreResponse, context)
        : undefined,
    OpenZFSResponse:
      output.OpenZFSResponse != null
        ? deserializeAws_json1_1DeleteFileSystemOpenZFSResponse(output.OpenZFSResponse, context)
        : undefined,
    WindowsResponse:
      output.WindowsResponse != null
        ? deserializeAws_json1_1DeleteFileSystemWindowsResponse(output.WindowsResponse, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteFileSystemWindowsResponse = (
  output: any,
  context: __SerdeContext
): DeleteFileSystemWindowsResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags != null ? deserializeAws_json1_1Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteSnapshotResponse = (output: any, context: __SerdeContext): DeleteSnapshotResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    SnapshotId: __expectString(output.SnapshotId),
  } as any;
};

const deserializeAws_json1_1DeleteStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): DeleteStorageVirtualMachineResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
  } as any;
};

const deserializeAws_json1_1DeleteVolumeOntapResponse = (
  output: any,
  context: __SerdeContext
): DeleteVolumeOntapResponse => {
  return {
    FinalBackupId: __expectString(output.FinalBackupId),
    FinalBackupTags:
      output.FinalBackupTags != null ? deserializeAws_json1_1Tags(output.FinalBackupTags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DeleteVolumeResponse = (output: any, context: __SerdeContext): DeleteVolumeResponse => {
  return {
    Lifecycle: __expectString(output.Lifecycle),
    OntapResponse:
      output.OntapResponse != null
        ? deserializeAws_json1_1DeleteVolumeOntapResponse(output.OntapResponse, context)
        : undefined,
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

const deserializeAws_json1_1DescribeBackupsResponse = (
  output: any,
  context: __SerdeContext
): DescribeBackupsResponse => {
  return {
    Backups: output.Backups != null ? deserializeAws_json1_1Backups(output.Backups, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDataRepositoryAssociationsResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryAssociationsResponse => {
  return {
    Associations:
      output.Associations != null
        ? deserializeAws_json1_1DataRepositoryAssociations(output.Associations, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeDataRepositoryTasksResponse = (
  output: any,
  context: __SerdeContext
): DescribeDataRepositoryTasksResponse => {
  return {
    DataRepositoryTasks:
      output.DataRepositoryTasks != null
        ? deserializeAws_json1_1DataRepositoryTasks(output.DataRepositoryTasks, context)
        : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFileCachesResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileCachesResponse => {
  return {
    FileCaches: output.FileCaches != null ? deserializeAws_json1_1FileCaches(output.FileCaches, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1Aliases(output.Aliases, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeFileSystemsResponse = (
  output: any,
  context: __SerdeContext
): DescribeFileSystemsResponse => {
  return {
    FileSystems:
      output.FileSystems != null ? deserializeAws_json1_1FileSystems(output.FileSystems, context) : undefined,
    NextToken: __expectString(output.NextToken),
  } as any;
};

const deserializeAws_json1_1DescribeSnapshotsResponse = (
  output: any,
  context: __SerdeContext
): DescribeSnapshotsResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Snapshots: output.Snapshots != null ? deserializeAws_json1_1Snapshots(output.Snapshots, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeStorageVirtualMachinesResponse = (
  output: any,
  context: __SerdeContext
): DescribeStorageVirtualMachinesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    StorageVirtualMachines:
      output.StorageVirtualMachines != null
        ? deserializeAws_json1_1StorageVirtualMachines(output.StorageVirtualMachines, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1DescribeVolumesResponse = (
  output: any,
  context: __SerdeContext
): DescribeVolumesResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Volumes: output.Volumes != null ? deserializeAws_json1_1Volumes(output.Volumes, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DisassociateFileSystemAliasesResponse = (
  output: any,
  context: __SerdeContext
): DisassociateFileSystemAliasesResponse => {
  return {
    Aliases: output.Aliases != null ? deserializeAws_json1_1Aliases(output.Aliases, context) : undefined,
  } as any;
};

const deserializeAws_json1_1DiskIopsConfiguration = (output: any, context: __SerdeContext): DiskIopsConfiguration => {
  return {
    Iops: __expectLong(output.Iops),
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_json1_1DnsIps = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1EventTypes = (output: any, context: __SerdeContext): (EventType | string)[] => {
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

const deserializeAws_json1_1FileCache = (output: any, context: __SerdeContext): FileCache => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    DataRepositoryAssociationIds:
      output.DataRepositoryAssociationIds != null
        ? deserializeAws_json1_1DataRepositoryAssociationIds(output.DataRepositoryAssociationIds, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1FileCacheFailureDetails(output.FailureDetails, context)
        : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileCacheType: __expectString(output.FileCacheType),
    FileCacheTypeVersion: __expectString(output.FileCacheTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration != null
        ? deserializeAws_json1_1FileCacheLustreConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds != null
        ? deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1FileCacheCreating = (output: any, context: __SerdeContext): FileCacheCreating => {
  return {
    CopyTagsToDataRepositoryAssociations: __expectBoolean(output.CopyTagsToDataRepositoryAssociations),
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    DataRepositoryAssociationIds:
      output.DataRepositoryAssociationIds != null
        ? deserializeAws_json1_1DataRepositoryAssociationIds(output.DataRepositoryAssociationIds, context)
        : undefined,
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1FileCacheFailureDetails(output.FailureDetails, context)
        : undefined,
    FileCacheId: __expectString(output.FileCacheId),
    FileCacheType: __expectString(output.FileCacheType),
    FileCacheTypeVersion: __expectString(output.FileCacheTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration != null
        ? deserializeAws_json1_1FileCacheLustreConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds != null
        ? deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_json1_1FileCacheFailureDetails = (
  output: any,
  context: __SerdeContext
): FileCacheFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FileCacheLustreConfiguration = (
  output: any,
  context: __SerdeContext
): FileCacheLustreConfiguration => {
  return {
    DeploymentType: __expectString(output.DeploymentType),
    LogConfiguration:
      output.LogConfiguration != null
        ? deserializeAws_json1_1LustreLogConfiguration(output.LogConfiguration, context)
        : undefined,
    MetadataConfiguration:
      output.MetadataConfiguration != null
        ? deserializeAws_json1_1FileCacheLustreMetadataConfiguration(output.MetadataConfiguration, context)
        : undefined,
    MountName: __expectString(output.MountName),
    PerUnitStorageThroughput: __expectInt32(output.PerUnitStorageThroughput),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeAws_json1_1FileCacheLustreMetadataConfiguration = (
  output: any,
  context: __SerdeContext
): FileCacheLustreMetadataConfiguration => {
  return {
    StorageCapacity: __expectInt32(output.StorageCapacity),
  } as any;
};

const deserializeAws_json1_1FileCacheNotFound = (output: any, context: __SerdeContext): FileCacheNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FileCaches = (output: any, context: __SerdeContext): FileCache[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileCache(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1FileSystem = (output: any, context: __SerdeContext): FileSystem => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DNSName: __expectString(output.DNSName),
    FailureDetails:
      output.FailureDetails != null
        ? deserializeAws_json1_1FileSystemFailureDetails(output.FailureDetails, context)
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    FileSystemType: __expectString(output.FileSystemType),
    FileSystemTypeVersion: __expectString(output.FileSystemTypeVersion),
    KmsKeyId: __expectString(output.KmsKeyId),
    Lifecycle: __expectString(output.Lifecycle),
    LustreConfiguration:
      output.LustreConfiguration != null
        ? deserializeAws_json1_1LustreFileSystemConfiguration(output.LustreConfiguration, context)
        : undefined,
    NetworkInterfaceIds:
      output.NetworkInterfaceIds != null
        ? deserializeAws_json1_1NetworkInterfaceIds(output.NetworkInterfaceIds, context)
        : undefined,
    OntapConfiguration:
      output.OntapConfiguration != null
        ? deserializeAws_json1_1OntapFileSystemConfiguration(output.OntapConfiguration, context)
        : undefined,
    OpenZFSConfiguration:
      output.OpenZFSConfiguration != null
        ? deserializeAws_json1_1OpenZFSFileSystemConfiguration(output.OpenZFSConfiguration, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    ResourceARN: __expectString(output.ResourceARN),
    StorageCapacity: __expectInt32(output.StorageCapacity),
    StorageType: __expectString(output.StorageType),
    SubnetIds: output.SubnetIds != null ? deserializeAws_json1_1SubnetIds(output.SubnetIds, context) : undefined,
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VpcId: __expectString(output.VpcId),
    WindowsConfiguration:
      output.WindowsConfiguration != null
        ? deserializeAws_json1_1WindowsFileSystemConfiguration(output.WindowsConfiguration, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemEndpoint = (output: any, context: __SerdeContext): FileSystemEndpoint => {
  return {
    DNSName: __expectString(output.DNSName),
    IpAddresses:
      output.IpAddresses != null
        ? deserializeAws_json1_1OntapEndpointIpAddresses(output.IpAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemEndpoints = (output: any, context: __SerdeContext): FileSystemEndpoints => {
  return {
    Intercluster:
      output.Intercluster != null ? deserializeAws_json1_1FileSystemEndpoint(output.Intercluster, context) : undefined,
    Management:
      output.Management != null ? deserializeAws_json1_1FileSystemEndpoint(output.Management, context) : undefined,
  } as any;
};

const deserializeAws_json1_1FileSystemFailureDetails = (
  output: any,
  context: __SerdeContext
): FileSystemFailureDetails => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FileSystemMaintenanceOperations = (
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

const deserializeAws_json1_1FileSystemNotFound = (output: any, context: __SerdeContext): FileSystemNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1FileSystems = (output: any, context: __SerdeContext): FileSystem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1FileSystem(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1IncompatibleParameterError = (
  output: any,
  context: __SerdeContext
): IncompatibleParameterError => {
  return {
    Message: __expectString(output.Message),
    Parameter: __expectString(output.Parameter),
  } as any;
};

const deserializeAws_json1_1IncompatibleRegionForMultiAZ = (
  output: any,
  context: __SerdeContext
): IncompatibleRegionForMultiAZ => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InternalServerError = (output: any, context: __SerdeContext): InternalServerError => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDataRepositoryType = (
  output: any,
  context: __SerdeContext
): InvalidDataRepositoryType => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidDestinationKmsKey = (
  output: any,
  context: __SerdeContext
): InvalidDestinationKmsKey => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidExportPath = (output: any, context: __SerdeContext): InvalidExportPath => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidImportPath = (output: any, context: __SerdeContext): InvalidImportPath => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidNetworkSettings = (output: any, context: __SerdeContext): InvalidNetworkSettings => {
  return {
    InvalidRouteTableId: __expectString(output.InvalidRouteTableId),
    InvalidSecurityGroupId: __expectString(output.InvalidSecurityGroupId),
    InvalidSubnetId: __expectString(output.InvalidSubnetId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidPerUnitStorageThroughput = (
  output: any,
  context: __SerdeContext
): InvalidPerUnitStorageThroughput => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidRegion = (output: any, context: __SerdeContext): InvalidRegion => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1InvalidSourceKmsKey = (output: any, context: __SerdeContext): InvalidSourceKmsKey => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1LifecycleTransitionReason = (
  output: any,
  context: __SerdeContext
): LifecycleTransitionReason => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1ListTagsForResourceResponse = (
  output: any,
  context: __SerdeContext
): ListTagsForResourceResponse => {
  return {
    NextToken: __expectString(output.NextToken),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_json1_1LustreFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): LustreFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DataCompressionType: __expectString(output.DataCompressionType),
    DataRepositoryConfiguration:
      output.DataRepositoryConfiguration != null
        ? deserializeAws_json1_1DataRepositoryConfiguration(output.DataRepositoryConfiguration, context)
        : undefined,
    DeploymentType: __expectString(output.DeploymentType),
    DriveCacheType: __expectString(output.DriveCacheType),
    LogConfiguration:
      output.LogConfiguration != null
        ? deserializeAws_json1_1LustreLogConfiguration(output.LogConfiguration, context)
        : undefined,
    MountName: __expectString(output.MountName),
    PerUnitStorageThroughput: __expectInt32(output.PerUnitStorageThroughput),
    RootSquashConfiguration:
      output.RootSquashConfiguration != null
        ? deserializeAws_json1_1LustreRootSquashConfiguration(output.RootSquashConfiguration, context)
        : undefined,
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeAws_json1_1LustreLogConfiguration = (output: any, context: __SerdeContext): LustreLogConfiguration => {
  return {
    Destination: __expectString(output.Destination),
    Level: __expectString(output.Level),
  } as any;
};

const deserializeAws_json1_1LustreNoSquashNids = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1LustreRootSquashConfiguration = (
  output: any,
  context: __SerdeContext
): LustreRootSquashConfiguration => {
  return {
    NoSquashNids:
      output.NoSquashNids != null ? deserializeAws_json1_1LustreNoSquashNids(output.NoSquashNids, context) : undefined,
    RootSquash: __expectString(output.RootSquash),
  } as any;
};

const deserializeAws_json1_1MissingFileCacheConfiguration = (
  output: any,
  context: __SerdeContext
): MissingFileCacheConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MissingFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): MissingFileSystemConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1MissingVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): MissingVolumeConfiguration => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1NetworkInterfaceIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1NFSDataRepositoryConfiguration = (
  output: any,
  context: __SerdeContext
): NFSDataRepositoryConfiguration => {
  return {
    AutoExportPolicy:
      output.AutoExportPolicy != null
        ? deserializeAws_json1_1AutoExportPolicy(output.AutoExportPolicy, context)
        : undefined,
    DnsIps: output.DnsIps != null ? deserializeAws_json1_1RepositoryDnsIps(output.DnsIps, context) : undefined,
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_json1_1NotServiceResourceError = (
  output: any,
  context: __SerdeContext
): NotServiceResourceError => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1OntapEndpointIpAddresses = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OntapFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): OntapFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    DiskIopsConfiguration:
      output.DiskIopsConfiguration != null
        ? deserializeAws_json1_1DiskIopsConfiguration(output.DiskIopsConfiguration, context)
        : undefined,
    EndpointIpAddressRange: __expectString(output.EndpointIpAddressRange),
    Endpoints:
      output.Endpoints != null ? deserializeAws_json1_1FileSystemEndpoints(output.Endpoints, context) : undefined,
    PreferredSubnetId: __expectString(output.PreferredSubnetId),
    RouteTableIds:
      output.RouteTableIds != null ? deserializeAws_json1_1RouteTableIds(output.RouteTableIds, context) : undefined,
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeAws_json1_1OntapVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): OntapVolumeConfiguration => {
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
    TieringPolicy:
      output.TieringPolicy != null ? deserializeAws_json1_1TieringPolicy(output.TieringPolicy, context) : undefined,
    UUID: __expectString(output.UUID),
  } as any;
};

const deserializeAws_json1_1OpenZFSClientConfiguration = (
  output: any,
  context: __SerdeContext
): OpenZFSClientConfiguration => {
  return {
    Clients: __expectString(output.Clients),
    Options:
      output.Options != null ? deserializeAws_json1_1OpenZFSNfsExportOptions(output.Options, context) : undefined,
  } as any;
};

const deserializeAws_json1_1OpenZFSClientConfigurations = (
  output: any,
  context: __SerdeContext
): OpenZFSClientConfiguration[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpenZFSClientConfiguration(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpenZFSFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): OpenZFSFileSystemConfiguration => {
  return {
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    CopyTagsToVolumes: __expectBoolean(output.CopyTagsToVolumes),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    DiskIopsConfiguration:
      output.DiskIopsConfiguration != null
        ? deserializeAws_json1_1DiskIopsConfiguration(output.DiskIopsConfiguration, context)
        : undefined,
    RootVolumeId: __expectString(output.RootVolumeId),
    ThroughputCapacity: __expectInt32(output.ThroughputCapacity),
    WeeklyMaintenanceStartTime: __expectString(output.WeeklyMaintenanceStartTime),
  } as any;
};

const deserializeAws_json1_1OpenZFSNfsExport = (output: any, context: __SerdeContext): OpenZFSNfsExport => {
  return {
    ClientConfigurations:
      output.ClientConfigurations != null
        ? deserializeAws_json1_1OpenZFSClientConfigurations(output.ClientConfigurations, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1OpenZFSNfsExportOptions = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1OpenZFSNfsExports = (output: any, context: __SerdeContext): OpenZFSNfsExport[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpenZFSNfsExport(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpenZFSOriginSnapshotConfiguration = (
  output: any,
  context: __SerdeContext
): OpenZFSOriginSnapshotConfiguration => {
  return {
    CopyStrategy: __expectString(output.CopyStrategy),
    SnapshotARN: __expectString(output.SnapshotARN),
  } as any;
};

const deserializeAws_json1_1OpenZFSUserAndGroupQuotas = (
  output: any,
  context: __SerdeContext
): OpenZFSUserOrGroupQuota[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1OpenZFSUserOrGroupQuota(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1OpenZFSUserOrGroupQuota = (
  output: any,
  context: __SerdeContext
): OpenZFSUserOrGroupQuota => {
  return {
    Id: __expectInt32(output.Id),
    StorageCapacityQuotaGiB: __expectInt32(output.StorageCapacityQuotaGiB),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_json1_1OpenZFSVolumeConfiguration = (
  output: any,
  context: __SerdeContext
): OpenZFSVolumeConfiguration => {
  return {
    CopyTagsToSnapshots: __expectBoolean(output.CopyTagsToSnapshots),
    DataCompressionType: __expectString(output.DataCompressionType),
    DeleteClonedVolumes: __expectBoolean(output.DeleteClonedVolumes),
    DeleteIntermediateSnaphots: __expectBoolean(output.DeleteIntermediateSnaphots),
    NfsExports:
      output.NfsExports != null ? deserializeAws_json1_1OpenZFSNfsExports(output.NfsExports, context) : undefined,
    OriginSnapshot:
      output.OriginSnapshot != null
        ? deserializeAws_json1_1OpenZFSOriginSnapshotConfiguration(output.OriginSnapshot, context)
        : undefined,
    ParentVolumeId: __expectString(output.ParentVolumeId),
    ReadOnly: __expectBoolean(output.ReadOnly),
    RecordSizeKiB: __expectInt32(output.RecordSizeKiB),
    RestoreToSnapshot: __expectString(output.RestoreToSnapshot),
    StorageCapacityQuotaGiB: __expectInt32(output.StorageCapacityQuotaGiB),
    StorageCapacityReservationGiB: __expectInt32(output.StorageCapacityReservationGiB),
    UserAndGroupQuotas:
      output.UserAndGroupQuotas != null
        ? deserializeAws_json1_1OpenZFSUserAndGroupQuotas(output.UserAndGroupQuotas, context)
        : undefined,
    VolumePath: __expectString(output.VolumePath),
  } as any;
};

const deserializeAws_json1_1ReleaseFileSystemNfsV3LocksResponse = (
  output: any,
  context: __SerdeContext
): ReleaseFileSystemNfsV3LocksResponse => {
  return {
    FileSystem: output.FileSystem != null ? deserializeAws_json1_1FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1RepositoryDnsIps = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1ResourceDoesNotSupportTagging = (
  output: any,
  context: __SerdeContext
): ResourceDoesNotSupportTagging => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1ResourceNotFound = (output: any, context: __SerdeContext): ResourceNotFound => {
  return {
    Message: __expectString(output.Message),
    ResourceARN: __expectString(output.ResourceARN),
  } as any;
};

const deserializeAws_json1_1RestoreVolumeFromSnapshotResponse = (
  output: any,
  context: __SerdeContext
): RestoreVolumeFromSnapshotResponse => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    Lifecycle: __expectString(output.Lifecycle),
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

const deserializeAws_json1_1RouteTableIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1S3DataRepositoryConfiguration = (
  output: any,
  context: __SerdeContext
): S3DataRepositoryConfiguration => {
  return {
    AutoExportPolicy:
      output.AutoExportPolicy != null
        ? deserializeAws_json1_1AutoExportPolicy(output.AutoExportPolicy, context)
        : undefined,
    AutoImportPolicy:
      output.AutoImportPolicy != null
        ? deserializeAws_json1_1AutoImportPolicy(output.AutoImportPolicy, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SelfManagedActiveDirectoryAttributes = (
  output: any,
  context: __SerdeContext
): SelfManagedActiveDirectoryAttributes => {
  return {
    DnsIps: output.DnsIps != null ? deserializeAws_json1_1DnsIps(output.DnsIps, context) : undefined,
    DomainName: __expectString(output.DomainName),
    FileSystemAdministratorsGroup: __expectString(output.FileSystemAdministratorsGroup),
    OrganizationalUnitDistinguishedName: __expectString(output.OrganizationalUnitDistinguishedName),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_json1_1ServiceLimitExceeded = (output: any, context: __SerdeContext): ServiceLimitExceeded => {
  return {
    Limit: __expectString(output.Limit),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Snapshot = (output: any, context: __SerdeContext): Snapshot => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason != null
        ? deserializeAws_json1_1LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceARN: __expectString(output.ResourceARN),
    SnapshotId: __expectString(output.SnapshotId),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VolumeId: __expectString(output.VolumeId),
  } as any;
};

const deserializeAws_json1_1SnapshotNotFound = (output: any, context: __SerdeContext): SnapshotNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Snapshots = (output: any, context: __SerdeContext): Snapshot[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Snapshot(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SourceBackupUnavailable = (
  output: any,
  context: __SerdeContext
): SourceBackupUnavailable => {
  return {
    BackupId: __expectString(output.BackupId),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StorageVirtualMachine = (output: any, context: __SerdeContext): StorageVirtualMachine => {
  return {
    ActiveDirectoryConfiguration:
      output.ActiveDirectoryConfiguration != null
        ? deserializeAws_json1_1SvmActiveDirectoryConfiguration(output.ActiveDirectoryConfiguration, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    Endpoints: output.Endpoints != null ? deserializeAws_json1_1SvmEndpoints(output.Endpoints, context) : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason != null
        ? deserializeAws_json1_1LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    ResourceARN: __expectString(output.ResourceARN),
    RootVolumeSecurityStyle: __expectString(output.RootVolumeSecurityStyle),
    StorageVirtualMachineId: __expectString(output.StorageVirtualMachineId),
    Subtype: __expectString(output.Subtype),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    UUID: __expectString(output.UUID),
  } as any;
};

const deserializeAws_json1_1StorageVirtualMachineNotFound = (
  output: any,
  context: __SerdeContext
): StorageVirtualMachineNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1StorageVirtualMachines = (
  output: any,
  context: __SerdeContext
): StorageVirtualMachine[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1StorageVirtualMachine(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1SubDirectoriesPaths = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SubnetIds = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_json1_1SvmActiveDirectoryConfiguration = (
  output: any,
  context: __SerdeContext
): SvmActiveDirectoryConfiguration => {
  return {
    NetBiosName: __expectString(output.NetBiosName),
    SelfManagedActiveDirectoryConfiguration:
      output.SelfManagedActiveDirectoryConfiguration != null
        ? deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(
            output.SelfManagedActiveDirectoryConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_json1_1SvmEndpoint = (output: any, context: __SerdeContext): SvmEndpoint => {
  return {
    DNSName: __expectString(output.DNSName),
    IpAddresses:
      output.IpAddresses != null
        ? deserializeAws_json1_1OntapEndpointIpAddresses(output.IpAddresses, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1SvmEndpoints = (output: any, context: __SerdeContext): SvmEndpoints => {
  return {
    Iscsi: output.Iscsi != null ? deserializeAws_json1_1SvmEndpoint(output.Iscsi, context) : undefined,
    Management: output.Management != null ? deserializeAws_json1_1SvmEndpoint(output.Management, context) : undefined,
    Nfs: output.Nfs != null ? deserializeAws_json1_1SvmEndpoint(output.Nfs, context) : undefined,
    Smb: output.Smb != null ? deserializeAws_json1_1SvmEndpoint(output.Smb, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_json1_1TagResourceResponse = (output: any, context: __SerdeContext): TagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1Tags = (output: any, context: __SerdeContext): Tag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Tag(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1TieringPolicy = (output: any, context: __SerdeContext): TieringPolicy => {
  return {
    CoolingPeriod: __expectInt32(output.CoolingPeriod),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_json1_1UnsupportedOperation = (output: any, context: __SerdeContext): UnsupportedOperation => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1UntagResourceResponse = (output: any, context: __SerdeContext): UntagResourceResponse => {
  return {} as any;
};

const deserializeAws_json1_1UpdateDataRepositoryAssociationResponse = (
  output: any,
  context: __SerdeContext
): UpdateDataRepositoryAssociationResponse => {
  return {
    Association:
      output.Association != null
        ? deserializeAws_json1_1DataRepositoryAssociation(output.Association, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateFileCacheResponse = (
  output: any,
  context: __SerdeContext
): UpdateFileCacheResponse => {
  return {
    FileCache: output.FileCache != null ? deserializeAws_json1_1FileCache(output.FileCache, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateFileSystemResponse = (
  output: any,
  context: __SerdeContext
): UpdateFileSystemResponse => {
  return {
    FileSystem: output.FileSystem != null ? deserializeAws_json1_1FileSystem(output.FileSystem, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateSnapshotResponse = (output: any, context: __SerdeContext): UpdateSnapshotResponse => {
  return {
    Snapshot: output.Snapshot != null ? deserializeAws_json1_1Snapshot(output.Snapshot, context) : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateStorageVirtualMachineResponse = (
  output: any,
  context: __SerdeContext
): UpdateStorageVirtualMachineResponse => {
  return {
    StorageVirtualMachine:
      output.StorageVirtualMachine != null
        ? deserializeAws_json1_1StorageVirtualMachine(output.StorageVirtualMachine, context)
        : undefined,
  } as any;
};

const deserializeAws_json1_1UpdateVolumeResponse = (output: any, context: __SerdeContext): UpdateVolumeResponse => {
  return {
    Volume: output.Volume != null ? deserializeAws_json1_1Volume(output.Volume, context) : undefined,
  } as any;
};

const deserializeAws_json1_1Volume = (output: any, context: __SerdeContext): Volume => {
  return {
    AdministrativeActions:
      output.AdministrativeActions != null
        ? deserializeAws_json1_1AdministrativeActions(output.AdministrativeActions, context)
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    FileSystemId: __expectString(output.FileSystemId),
    Lifecycle: __expectString(output.Lifecycle),
    LifecycleTransitionReason:
      output.LifecycleTransitionReason != null
        ? deserializeAws_json1_1LifecycleTransitionReason(output.LifecycleTransitionReason, context)
        : undefined,
    Name: __expectString(output.Name),
    OntapConfiguration:
      output.OntapConfiguration != null
        ? deserializeAws_json1_1OntapVolumeConfiguration(output.OntapConfiguration, context)
        : undefined,
    OpenZFSConfiguration:
      output.OpenZFSConfiguration != null
        ? deserializeAws_json1_1OpenZFSVolumeConfiguration(output.OpenZFSConfiguration, context)
        : undefined,
    ResourceARN: __expectString(output.ResourceARN),
    Tags: output.Tags != null ? deserializeAws_json1_1Tags(output.Tags, context) : undefined,
    VolumeId: __expectString(output.VolumeId),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_json1_1VolumeNotFound = (output: any, context: __SerdeContext): VolumeNotFound => {
  return {
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_json1_1Volumes = (output: any, context: __SerdeContext): Volume[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_json1_1Volume(entry, context);
    });
  return retVal;
};

const deserializeAws_json1_1WindowsAuditLogConfiguration = (
  output: any,
  context: __SerdeContext
): WindowsAuditLogConfiguration => {
  return {
    AuditLogDestination: __expectString(output.AuditLogDestination),
    FileAccessAuditLogLevel: __expectString(output.FileAccessAuditLogLevel),
    FileShareAccessAuditLogLevel: __expectString(output.FileShareAccessAuditLogLevel),
  } as any;
};

const deserializeAws_json1_1WindowsFileSystemConfiguration = (
  output: any,
  context: __SerdeContext
): WindowsFileSystemConfiguration => {
  return {
    ActiveDirectoryId: __expectString(output.ActiveDirectoryId),
    Aliases: output.Aliases != null ? deserializeAws_json1_1Aliases(output.Aliases, context) : undefined,
    AuditLogConfiguration:
      output.AuditLogConfiguration != null
        ? deserializeAws_json1_1WindowsAuditLogConfiguration(output.AuditLogConfiguration, context)
        : undefined,
    AutomaticBackupRetentionDays: __expectInt32(output.AutomaticBackupRetentionDays),
    CopyTagsToBackups: __expectBoolean(output.CopyTagsToBackups),
    DailyAutomaticBackupStartTime: __expectString(output.DailyAutomaticBackupStartTime),
    DeploymentType: __expectString(output.DeploymentType),
    MaintenanceOperationsInProgress:
      output.MaintenanceOperationsInProgress != null
        ? deserializeAws_json1_1FileSystemMaintenanceOperations(output.MaintenanceOperationsInProgress, context)
        : undefined,
    PreferredFileServerIp: __expectString(output.PreferredFileServerIp),
    PreferredSubnetId: __expectString(output.PreferredSubnetId),
    RemoteAdministrationEndpoint: __expectString(output.RemoteAdministrationEndpoint),
    SelfManagedActiveDirectoryConfiguration:
      output.SelfManagedActiveDirectoryConfiguration != null
        ? deserializeAws_json1_1SelfManagedActiveDirectoryAttributes(
            output.SelfManagedActiveDirectoryConfiguration,
            context
          )
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
