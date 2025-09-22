// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  BackupBeingCopied as __BackupBeingCopied,
  BackupInProgress as __BackupInProgress,
  BackupNotFound as __BackupNotFound,
  BackupRestoring as __BackupRestoring,
  IncompatibleRegionForMultiAZ as __IncompatibleRegionForMultiAZ,
  InvalidDestinationKmsKey as __InvalidDestinationKmsKey,
  InvalidRegion as __InvalidRegion,
  InvalidSourceKmsKey as __InvalidSourceKmsKey,
  SourceBackupUnavailable as __SourceBackupUnavailable,
} from "../models/index";
import {
  _ADBA,
  _ADI,
  _B,
  _BBC,
  _BFD,
  _BI,
  _BIP,
  _BNF,
  _BR,
  _c,
  _CB,
  _CBR,
  _CBRo,
  _CFSFB,
  _CFSFBR,
  _CFSFBRr,
  _CRT,
  _CT,
  _CTo,
  _CVFB,
  _CVFBR,
  _CVFBRr,
  _DB,
  _DBR,
  _DBRe,
  _DFS,
  _DFSLC,
  _DFSLR,
  _DFSOZFSC,
  _DFSOZFSR,
  _DFSR,
  _DFSRe,
  _DFSWC,
  _DFSWR,
  _DI,
  _DN,
  _e,
  _FBI,
  _FBT,
  _FD,
  _FS,
  _FSI,
  _FSTV,
  _IDKK,
  _IR,
  _IRFMAZ,
  _ISKK,
  _KKI,
  _L,
  _LC,
  _LR,
  _M,
  _N,
  _NT,
  _O,
  _OC,
  _OI,
  _OZFSC,
  _OZFSR,
  _PP,
  _RARN,
  _RTe,
  _SBI,
  _SBR,
  _SBU,
  _SC,
  _SFB,
  _SGI,
  _SI,
  _SIB,
  _SR,
  _ST,
  _T,
  _Ta,
  _Vo,
  _WC,
  _WR,
  FileSystem,
  n0,
  Tags,
  Volume,
} from "./schemas_0";
import { CreateOntapVolumeConfiguration } from "./schemas_9_Storage";
import {
  CreateFileSystemLustreConfiguration,
  CreateFileSystemOpenZFSConfiguration,
  CreateFileSystemWindowsConfiguration,
} from "./schemas_13_System";

/* eslint no-var: 0 */

export var ActiveDirectoryBackupAttributes = struct(n0, _ADBA, 0, [_DN, _ADI, _RARN], [0, 0, 0]);
export var Backup = struct(
  n0,
  _B,
  0,
  [_BI, _L, _FD, _T, _PP, _CT, _KKI, _RARN, _Ta, _FS, _DI, _OI, _SBI, _SBR, _RTe, _Vo, _SIB],
  [
    0,
    0,
    () => BackupFailureDetails,
    0,
    1,
    4,
    0,
    0,
    () => Tags,
    [() => FileSystem, 0],
    () => ActiveDirectoryBackupAttributes,
    0,
    0,
    0,
    0,
    () => Volume,
    1,
  ]
);
export var BackupBeingCopied = error(
  n0,
  _BBC,
  {
    [_e]: _c,
  },
  [_M, _BI],
  [0, 0],

  __BackupBeingCopied
);
export var BackupFailureDetails = struct(n0, _BFD, 0, [_M], [0]);
export var BackupInProgress = error(
  n0,
  _BIP,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __BackupInProgress
);
export var BackupNotFound = error(
  n0,
  _BNF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __BackupNotFound
);
export var BackupRestoring = error(
  n0,
  _BR,
  {
    [_e]: _c,
  },
  [_M, _FSI],
  [0, 0],

  __BackupRestoring
);
export var CopyBackupRequest = struct(
  n0,
  _CBR,
  0,
  [_CRT, _SBI, _SR, _KKI, _CTo, _Ta],
  [[0, 4], 0, 0, 0, 2, () => Tags]
);
export var CopyBackupResponse = struct(n0, _CBRo, 0, [_B], [[() => Backup, 0]]);
export var CreateFileSystemFromBackupRequest = struct(
  n0,
  _CFSFBR,
  0,
  [_BI, _CRT, _SI, _SGI, _Ta, _WC, _LC, _ST, _KKI, _FSTV, _OZFSC, _SC, _NT],
  [
    0,
    [0, 4],
    64 | 0,
    64 | 0,
    () => Tags,
    [() => CreateFileSystemWindowsConfiguration, 0],
    () => CreateFileSystemLustreConfiguration,
    0,
    0,
    0,
    () => CreateFileSystemOpenZFSConfiguration,
    1,
    0,
  ]
);
export var CreateFileSystemFromBackupResponse = struct(n0, _CFSFBRr, 0, [_FS], [[() => FileSystem, 0]]);
export var CreateVolumeFromBackupRequest = struct(
  n0,
  _CVFBR,
  0,
  [_BI, _CRT, _N, _OC, _Ta],
  [0, [0, 4], 0, () => CreateOntapVolumeConfiguration, () => Tags]
);
export var CreateVolumeFromBackupResponse = struct(n0, _CVFBRr, 0, [_Vo], [() => Volume]);
export var DeleteBackupRequest = struct(n0, _DBR, 0, [_BI, _CRT], [0, [0, 4]]);
export var DeleteBackupResponse = struct(n0, _DBRe, 0, [_BI, _L], [0, 0]);
export var DeleteFileSystemLustreConfiguration = struct(n0, _DFSLC, 0, [_SFB, _FBT], [2, () => Tags]);
export var DeleteFileSystemLustreResponse = struct(n0, _DFSLR, 0, [_FBI, _FBT], [0, () => Tags]);
export var DeleteFileSystemOpenZFSConfiguration = struct(n0, _DFSOZFSC, 0, [_SFB, _FBT, _O], [2, () => Tags, 64 | 0]);
export var DeleteFileSystemOpenZFSResponse = struct(n0, _DFSOZFSR, 0, [_FBI, _FBT], [0, () => Tags]);
export var DeleteFileSystemRequest = struct(
  n0,
  _DFSR,
  0,
  [_FSI, _CRT, _WC, _LC, _OZFSC],
  [
    0,
    [0, 4],
    () => DeleteFileSystemWindowsConfiguration,
    () => DeleteFileSystemLustreConfiguration,
    () => DeleteFileSystemOpenZFSConfiguration,
  ]
);
export var DeleteFileSystemResponse = struct(
  n0,
  _DFSRe,
  0,
  [_FSI, _L, _WR, _LR, _OZFSR],
  [
    0,
    0,
    () => DeleteFileSystemWindowsResponse,
    () => DeleteFileSystemLustreResponse,
    () => DeleteFileSystemOpenZFSResponse,
  ]
);
export var DeleteFileSystemWindowsConfiguration = struct(n0, _DFSWC, 0, [_SFB, _FBT], [2, () => Tags]);
export var DeleteFileSystemWindowsResponse = struct(n0, _DFSWR, 0, [_FBI, _FBT], [0, () => Tags]);
export var IncompatibleRegionForMultiAZ = error(
  n0,
  _IRFMAZ,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __IncompatibleRegionForMultiAZ
);
export var InvalidDestinationKmsKey = error(
  n0,
  _IDKK,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidDestinationKmsKey
);
export var InvalidRegion = error(
  n0,
  _IR,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidRegion
);
export var InvalidSourceKmsKey = error(
  n0,
  _ISKK,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidSourceKmsKey
);
export var SourceBackupUnavailable = error(
  n0,
  _SBU,
  {
    [_e]: _c,
  },
  [_M, _BI],
  [0, 0],

  __SourceBackupUnavailable
);
export var DeleteFileSystemOpenZFSOptions = 64 | 0;

export var CopyBackup = op(
  n0,
  _CB,
  2,
  () => CopyBackupRequest,
  () => CopyBackupResponse
);
export var CreateFileSystemFromBackup = op(
  n0,
  _CFSFB,
  0,
  () => CreateFileSystemFromBackupRequest,
  () => CreateFileSystemFromBackupResponse
);
export var CreateVolumeFromBackup = op(
  n0,
  _CVFB,
  0,
  () => CreateVolumeFromBackupRequest,
  () => CreateVolumeFromBackupResponse
);
export var DeleteBackup = op(
  n0,
  _DB,
  2,
  () => DeleteBackupRequest,
  () => DeleteBackupResponse
);
export var DeleteFileSystem = op(
  n0,
  _DFS,
  2,
  () => DeleteFileSystemRequest,
  () => DeleteFileSystemResponse
);
