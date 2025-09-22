// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  ActiveDirectoryError as __ActiveDirectoryError,
  InvalidExportPath as __InvalidExportPath,
  InvalidImportPath as __InvalidImportPath,
  MissingFileSystemConfiguration as __MissingFileSystemConfiguration,
} from "../models/index";
import {
  _ABRD,
  _ADC,
  _ADE,
  _ADI,
  _AIP,
  _ALC,
  _ALD,
  _Ali,
  _ARTI,
  _c,
  _CFS,
  _CFSLC,
  _CFSLMC,
  _CFSOC,
  _CFSOZFSC,
  _CFSR,
  _CFSRr,
  _CFSWC,
  _CRT,
  _CSADC,
  _CSVM,
  _CSVMR,
  _CSVMRr,
  _CTTB,
  _CTTS,
  _CTTV,
  _D,
  _DABST,
  _DCT,
  _DCTa,
  _DIC,
  _DIn,
  _DN,
  _DP,
  _DRCC,
  _DT,
  _e,
  _EE,
  _EIAR,
  _EIARn,
  _EP,
  _FAALL,
  _FAP,
  _FS,
  _FSAALL,
  _FSAG,
  _FSI,
  _FST,
  _FSTV,
  _HAP,
  _I,
  _IEP,
  _IFCS,
  _IIP,
  _IP,
  _KKI,
  _LC,
  _LCo,
  _Le,
  _LLCC,
  _M,
  _MC,
  _MFSC,
  _Mo,
  _N,
  _NBN,
  _NE,
  _NT,
  _OC,
  _OUDN,
  _OZFSC,
  _OZFSCRVC,
  _Pas,
  _PSI,
  _PUST,
  _RCC,
  _RO,
  _RRTI,
  _RSC,
  _RSKB,
  _RTI,
  _RVC,
  _RVSS,
  _SAPv,
  _SC,
  _SGI,
  _SI,
  _SMADC,
  _SMADCU,
  _ST,
  _SVM,
  _T,
  _Ta,
  _TCh,
  _TCPHAP,
  _UAGQ,
  _UFS,
  _UFSLC,
  _UFSLMC,
  _UFSOC,
  _UFSOZFSC,
  _UFSR,
  _UFSRp,
  _UFSWC,
  _UN,
  _WALCC,
  _WC,
  _WMST,
  AdminPassword,
  DiskIopsConfiguration,
  FileSystem,
  LustreReadCacheConfiguration,
  LustreRootSquashConfiguration,
  n0,
  OpenZFSNfsExports,
  OpenZFSReadCacheConfiguration,
  OpenZFSUserAndGroupQuotas,
  Tags,
} from "./schemas_0";
import { StorageVirtualMachine } from "./schemas_17_Storage";

/* eslint no-var: 0 */

export var DirectoryPassword = sim(n0, _DP, 0, 8);
export var ActiveDirectoryError = error(
  n0,
  _ADE,
  {
    [_e]: _c,
  },
  [_ADI, _T, _M],
  [0, 0, 0],

  __ActiveDirectoryError
);
export var CreateFileSystemLustreConfiguration = struct(
  n0,
  _CFSLC,
  0,
  [_WMST, _IP, _EP, _IFCS, _DT, _AIP, _PUST, _DABST, _ABRD, _CTTB, _DCT, _DCTa, _EE, _LCo, _RSC, _MC, _TCh, _DRCC],
  [
    0,
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    2,
    0,
    0,
    2,
    () => LustreLogCreateConfiguration,
    () => LustreRootSquashConfiguration,
    () => CreateFileSystemLustreMetadataConfiguration,
    1,
    () => LustreReadCacheConfiguration,
  ]
);
export var CreateFileSystemLustreMetadataConfiguration = struct(n0, _CFSLMC, 0, [_I, _Mo], [1, 0]);
export var CreateFileSystemOntapConfiguration = struct(
  n0,
  _CFSOC,
  0,
  [_ABRD, _DABST, _DT, _EIAR, _FAP, _DIC, _PSI, _RTI, _TCh, _WMST, _HAP, _TCPHAP],
  [1, 0, 0, 0, [() => AdminPassword, 0], () => DiskIopsConfiguration, 0, 64 | 0, 1, 0, 1, 1]
);
export var CreateFileSystemOpenZFSConfiguration = struct(
  n0,
  _CFSOZFSC,
  0,
  [_ABRD, _CTTB, _CTTV, _DABST, _DT, _TCh, _WMST, _DIC, _RVC, _PSI, _EIAR, _EIARn, _RTI, _RCC],
  [
    1,
    2,
    2,
    0,
    0,
    1,
    0,
    () => DiskIopsConfiguration,
    () => OpenZFSCreateRootVolumeConfiguration,
    0,
    0,
    0,
    64 | 0,
    () => OpenZFSReadCacheConfiguration,
  ]
);
export var CreateFileSystemRequest = struct(
  n0,
  _CFSR,
  0,
  [_CRT, _FST, _SC, _ST, _SI, _SGI, _Ta, _KKI, _WC, _LC, _OC, _FSTV, _OZFSC, _NT],
  [
    [0, 4],
    0,
    1,
    0,
    64 | 0,
    64 | 0,
    () => Tags,
    0,
    [() => CreateFileSystemWindowsConfiguration, 0],
    () => CreateFileSystemLustreConfiguration,
    [() => CreateFileSystemOntapConfiguration, 0],
    0,
    () => CreateFileSystemOpenZFSConfiguration,
    0,
  ]
);
export var CreateFileSystemResponse = struct(n0, _CFSRr, 0, [_FS], [[() => FileSystem, 0]]);
export var CreateFileSystemWindowsConfiguration = struct(
  n0,
  _CFSWC,
  0,
  [_ADI, _SMADC, _DT, _PSI, _TCh, _WMST, _DABST, _ABRD, _CTTB, _Ali, _ALC, _DIC],
  [
    0,
    [() => SelfManagedActiveDirectoryConfiguration, 0],
    0,
    0,
    1,
    0,
    0,
    1,
    2,
    64 | 0,
    () => WindowsAuditLogCreateConfiguration,
    () => DiskIopsConfiguration,
  ]
);
export var CreateStorageVirtualMachineRequest = struct(
  n0,
  _CSVMR,
  0,
  [_ADC, _CRT, _FSI, _N, _SAPv, _Ta, _RVSS],
  [[() => CreateSvmActiveDirectoryConfiguration, 0], [0, 4], 0, 0, [() => AdminPassword, 0], () => Tags, 0]
);
export var CreateStorageVirtualMachineResponse = struct(n0, _CSVMRr, 0, [_SVM], [() => StorageVirtualMachine]);
export var CreateSvmActiveDirectoryConfiguration = struct(
  n0,
  _CSADC,
  0,
  [_NBN, _SMADC],
  [0, [() => SelfManagedActiveDirectoryConfiguration, 0]]
);
export var InvalidExportPath = error(
  n0,
  _IEP,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidExportPath
);
export var InvalidImportPath = error(
  n0,
  _IIP,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __InvalidImportPath
);
export var LustreLogCreateConfiguration = struct(n0, _LLCC, 0, [_Le, _D], [0, 0]);
export var MissingFileSystemConfiguration = error(
  n0,
  _MFSC,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MissingFileSystemConfiguration
);
export var OpenZFSCreateRootVolumeConfiguration = struct(
  n0,
  _OZFSCRVC,
  0,
  [_RSKB, _DCTa, _NE, _UAGQ, _CTTS, _RO],
  [1, 0, () => OpenZFSNfsExports, () => OpenZFSUserAndGroupQuotas, 2, 2]
);
export var SelfManagedActiveDirectoryConfiguration = struct(
  n0,
  _SMADC,
  0,
  [_DN, _OUDN, _FSAG, _UN, _Pas, _DIn],
  [0, 0, 0, 0, [() => DirectoryPassword, 0], 64 | 0]
);
export var SelfManagedActiveDirectoryConfigurationUpdates = struct(
  n0,
  _SMADCU,
  0,
  [_UN, _Pas, _DIn, _DN, _OUDN, _FSAG],
  [0, [() => DirectoryPassword, 0], 64 | 0, 0, 0, 0]
);
export var UpdateFileSystemLustreConfiguration = struct(
  n0,
  _UFSLC,
  0,
  [_WMST, _DABST, _ABRD, _AIP, _DCTa, _LCo, _RSC, _PUST, _MC, _TCh, _DRCC],
  [
    0,
    0,
    1,
    0,
    0,
    () => LustreLogCreateConfiguration,
    () => LustreRootSquashConfiguration,
    1,
    () => UpdateFileSystemLustreMetadataConfiguration,
    1,
    () => LustreReadCacheConfiguration,
  ]
);
export var UpdateFileSystemLustreMetadataConfiguration = struct(n0, _UFSLMC, 0, [_I, _Mo], [1, 0]);
export var UpdateFileSystemOntapConfiguration = struct(
  n0,
  _UFSOC,
  0,
  [_ABRD, _DABST, _FAP, _WMST, _DIC, _TCh, _ARTI, _RRTI, _TCPHAP, _HAP],
  [1, 0, [() => AdminPassword, 0], 0, () => DiskIopsConfiguration, 1, 64 | 0, 64 | 0, 1, 1]
);
export var UpdateFileSystemOpenZFSConfiguration = struct(
  n0,
  _UFSOZFSC,
  0,
  [_ABRD, _CTTB, _CTTV, _DABST, _TCh, _WMST, _DIC, _ARTI, _RRTI, _RCC, _EIARn],
  [1, 2, 2, 0, 1, 0, () => DiskIopsConfiguration, 64 | 0, 64 | 0, () => OpenZFSReadCacheConfiguration, 0]
);
export var UpdateFileSystemRequest = struct(
  n0,
  _UFSR,
  0,
  [_FSI, _CRT, _SC, _WC, _LC, _OC, _OZFSC, _ST, _FSTV, _NT],
  [
    0,
    [0, 4],
    1,
    [() => UpdateFileSystemWindowsConfiguration, 0],
    () => UpdateFileSystemLustreConfiguration,
    [() => UpdateFileSystemOntapConfiguration, 0],
    () => UpdateFileSystemOpenZFSConfiguration,
    0,
    0,
    0,
  ]
);
export var UpdateFileSystemResponse = struct(n0, _UFSRp, 0, [_FS], [[() => FileSystem, 0]]);
export var UpdateFileSystemWindowsConfiguration = struct(
  n0,
  _UFSWC,
  0,
  [_WMST, _DABST, _ABRD, _TCh, _SMADC, _ALC, _DIC],
  [
    0,
    0,
    1,
    1,
    [() => SelfManagedActiveDirectoryConfigurationUpdates, 0],
    () => WindowsAuditLogCreateConfiguration,
    () => DiskIopsConfiguration,
  ]
);
export var WindowsAuditLogCreateConfiguration = struct(n0, _WALCC, 0, [_FAALL, _FSAALL, _ALD], [0, 0, 0]);
export var CreateFileSystem = op(
  n0,
  _CFS,
  0,
  () => CreateFileSystemRequest,
  () => CreateFileSystemResponse
);
export var CreateStorageVirtualMachine = op(
  n0,
  _CSVM,
  0,
  () => CreateStorageVirtualMachineRequest,
  () => CreateStorageVirtualMachineResponse
);
export var UpdateFileSystem = op(
  n0,
  _UFS,
  0,
  () => UpdateFileSystemRequest,
  () => UpdateFileSystemResponse
);
