// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { InvalidDataRepositoryType as __InvalidDataRepositoryType } from "../models/index";
import {
  _AIs,
  _Ali,
  _Ass,
  _Ba,
  _BIa,
  _c,
  _CRT,
  _DBe,
  _DBRes,
  _DBResc,
  _DDRAe,
  _DDRARes,
  _DDRAResc,
  _DDRT,
  _DDRTR,
  _DDRTRe,
  _DFCe,
  _DFCRes,
  _DFCResc,
  _DFSA,
  _DFSAR,
  _DFSARe,
  _DFSe,
  _DFSRes,
  _DFSResc,
  _DRA,
  _DRTa,
  _DRTF,
  _DRTFa,
  _DSAPA,
  _DSAPAR,
  _DSAPARe,
  _DSes,
  _DSRes,
  _DSResc,
  _DSVMe,
  _DSVMRes,
  _DSVMResc,
  _DVe,
  _DVRes,
  _DVResc,
  _e,
  _FCi,
  _FCIi,
  _Fi,
  _Fil,
  _FSI,
  _FSi,
  _FSIil,
  _IDRT,
  _IS,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _MR,
  _N,
  _Na,
  _NTe,
  _RARN,
  _SAPAc,
  _SAPAF,
  _SAPAFc,
  _SF,
  _SFn,
  _SIna,
  _Sna,
  _SVMF,
  _SVMFt,
  _SVMIt,
  _SVMt,
  _Ta,
  _TIa,
  _Va,
  _VF,
  _VFo,
  _VIo,
  _Vol,
  Aliases,
  FileSystem,
  n0,
  Snapshot,
  Tags,
  Volume,
} from "./schemas_0";
import { Backup } from "./schemas_2_Backup";
import { S3AccessPointAttachment } from "./schemas_3_S3AccessPoint";
import { DataRepositoryAssociation, DataRepositoryTask, FileCache } from "./schemas_4_Data";
import { StorageVirtualMachine } from "./schemas_17_Storage";

/* eslint no-var: 0 */

export var DataRepositoryTaskFilter = struct(n0, _DRTF, 0, [_N, _Va], [0, 64 | 0]);
export var DescribeBackupsRequest = struct(n0, _DBRes, 0, [_BIa, _Fi, _MR, _NTe], [64 | 0, () => Filters, 1, 0]);
export var DescribeBackupsResponse = struct(n0, _DBResc, 0, [_Ba, _NTe], [[() => Backups, 0], 0]);
export var DescribeDataRepositoryAssociationsRequest = struct(
  n0,
  _DDRARes,
  0,
  [_AIs, _Fi, _MR, _NTe],
  [64 | 0, () => Filters, 1, 0]
);
export var DescribeDataRepositoryAssociationsResponse = struct(
  n0,
  _DDRAResc,
  0,
  [_Ass, _NTe],
  [() => DataRepositoryAssociations, 0]
);
export var DescribeDataRepositoryTasksRequest = struct(
  n0,
  _DDRTR,
  0,
  [_TIa, _Fi, _MR, _NTe],
  [64 | 0, () => DataRepositoryTaskFilters, 1, 0]
);
export var DescribeDataRepositoryTasksResponse = struct(n0, _DDRTRe, 0, [_DRTa, _NTe], [() => DataRepositoryTasks, 0]);
export var DescribeFileCachesRequest = struct(n0, _DFCRes, 0, [_FCIi, _MR, _NTe], [64 | 0, 1, 0]);
export var DescribeFileCachesResponse = struct(n0, _DFCResc, 0, [_FCi, _NTe], [() => FileCaches, 0]);
export var DescribeFileSystemAliasesRequest = struct(n0, _DFSAR, 0, [_CRT, _FSI, _MR, _NTe], [[0, 4], 0, 1, 0]);
export var DescribeFileSystemAliasesResponse = struct(n0, _DFSARe, 0, [_Ali, _NTe], [() => Aliases, 0]);
export var DescribeFileSystemsRequest = struct(n0, _DFSRes, 0, [_FSIil, _MR, _NTe], [64 | 0, 1, 0]);
export var DescribeFileSystemsResponse = struct(n0, _DFSResc, 0, [_FSi, _NTe], [[() => FileSystems, 0], 0]);
export var DescribeS3AccessPointAttachmentsRequest = struct(
  n0,
  _DSAPAR,
  0,
  [_Na, _Fi, _MR, _NTe],
  [64 | 0, () => S3AccessPointAttachmentsFilters, 1, 0]
);
export var DescribeS3AccessPointAttachmentsResponse = struct(
  n0,
  _DSAPARe,
  0,
  [_SAPAc, _NTe],
  [() => S3AccessPointAttachments, 0]
);
export var DescribeSnapshotsRequest = struct(
  n0,
  _DSRes,
  0,
  [_SIna, _Fi, _MR, _NTe, _IS],
  [64 | 0, () => SnapshotFilters, 1, 0, 2]
);
export var DescribeSnapshotsResponse = struct(n0, _DSResc, 0, [_Sna, _NTe], [() => Snapshots, 0]);
export var DescribeStorageVirtualMachinesRequest = struct(
  n0,
  _DSVMRes,
  0,
  [_SVMIt, _Fi, _MR, _NTe],
  [64 | 0, () => StorageVirtualMachineFilters, 1, 0]
);
export var DescribeStorageVirtualMachinesResponse = struct(
  n0,
  _DSVMResc,
  0,
  [_SVMt, _NTe],
  [() => StorageVirtualMachines, 0]
);
export var DescribeVolumesRequest = struct(n0, _DVRes, 0, [_VIo, _Fi, _MR, _NTe], [64 | 0, () => VolumeFilters, 1, 0]);
export var DescribeVolumesResponse = struct(n0, _DVResc, 0, [_Vol, _NTe], [() => Volumes, 0]);
export var Filter = struct(n0, _Fil, 0, [_N, _Va], [0, 64 | 0]);
export var InvalidDataRepositoryType = error(
  n0,
  _IDRT,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidDataRepositoryType
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RARN, _MR, _NTe], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_Ta, _NTe], [() => Tags, 0]);
export var S3AccessPointAttachmentsFilter = struct(n0, _SAPAF, 0, [_N, _Va], [0, 64 | 0]);
export var SnapshotFilter = struct(n0, _SF, 0, [_N, _Va], [0, 64 | 0]);
export var StorageVirtualMachineFilter = struct(n0, _SVMF, 0, [_N, _Va], [0, 64 | 0]);
export var VolumeFilter = struct(n0, _VF, 0, [_N, _Va], [0, 64 | 0]);
export var BackupIds = 64 | 0;

export var Backups = list(n0, _Ba, 0, [() => Backup, 0]);
export var DataRepositoryAssociations = list(n0, _DRA, 0, () => DataRepositoryAssociation);
export var DataRepositoryTaskFilters = list(n0, _DRTFa, 0, () => DataRepositoryTaskFilter);
export var DataRepositoryTaskFilterValues = 64 | 0;

export var DataRepositoryTasks = list(n0, _DRTa, 0, () => DataRepositoryTask);
export var FileCacheIds = 64 | 0;

export var FileCaches = list(n0, _FCi, 0, () => FileCache);
export var FileSystemIds = 64 | 0;

export var FileSystems = list(n0, _FSi, 0, [() => FileSystem, 0]);
export var Filters = list(n0, _Fi, 0, () => Filter);
export var FilterValues = 64 | 0;

export var S3AccessPointAttachmentNames = 64 | 0;

export var S3AccessPointAttachments = list(n0, _SAPAc, 0, () => S3AccessPointAttachment);
export var S3AccessPointAttachmentsFilters = list(n0, _SAPAFc, 0, () => S3AccessPointAttachmentsFilter);
export var S3AccessPointAttachmentsFilterValues = 64 | 0;

export var SnapshotFilters = list(n0, _SFn, 0, () => SnapshotFilter);
export var SnapshotFilterValues = 64 | 0;

export var SnapshotIds = 64 | 0;

export var Snapshots = list(n0, _Sna, 0, () => Snapshot);
export var StorageVirtualMachineFilters = list(n0, _SVMFt, 0, () => StorageVirtualMachineFilter);
export var StorageVirtualMachineFilterValues = 64 | 0;

export var StorageVirtualMachineIds = 64 | 0;

export var StorageVirtualMachines = list(n0, _SVMt, 0, () => StorageVirtualMachine);
export var TaskIds = 64 | 0;

export var VolumeFilters = list(n0, _VFo, 0, () => VolumeFilter);
export var VolumeFilterValues = 64 | 0;

export var VolumeIds = 64 | 0;

export var Volumes = list(n0, _Vol, 0, () => Volume);
export var DescribeBackups = op(
  n0,
  _DBe,
  0,
  () => DescribeBackupsRequest,
  () => DescribeBackupsResponse
);
export var DescribeDataRepositoryAssociations = op(
  n0,
  _DDRAe,
  2,
  () => DescribeDataRepositoryAssociationsRequest,
  () => DescribeDataRepositoryAssociationsResponse
);
export var DescribeDataRepositoryTasks = op(
  n0,
  _DDRT,
  0,
  () => DescribeDataRepositoryTasksRequest,
  () => DescribeDataRepositoryTasksResponse
);
export var DescribeFileCaches = op(
  n0,
  _DFCe,
  2,
  () => DescribeFileCachesRequest,
  () => DescribeFileCachesResponse
);
export var DescribeFileSystemAliases = op(
  n0,
  _DFSA,
  0,
  () => DescribeFileSystemAliasesRequest,
  () => DescribeFileSystemAliasesResponse
);
export var DescribeFileSystems = op(
  n0,
  _DFSe,
  0,
  () => DescribeFileSystemsRequest,
  () => DescribeFileSystemsResponse
);
export var DescribeS3AccessPointAttachments = op(
  n0,
  _DSAPA,
  0,
  () => DescribeS3AccessPointAttachmentsRequest,
  () => DescribeS3AccessPointAttachmentsResponse
);
export var DescribeSnapshots = op(
  n0,
  _DSes,
  0,
  () => DescribeSnapshotsRequest,
  () => DescribeSnapshotsResponse
);
export var DescribeStorageVirtualMachines = op(
  n0,
  _DSVMe,
  0,
  () => DescribeStorageVirtualMachinesRequest,
  () => DescribeStorageVirtualMachinesResponse
);
export var DescribeVolumes = op(
  n0,
  _DVe,
  0,
  () => DescribeVolumesRequest,
  () => DescribeVolumesResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
