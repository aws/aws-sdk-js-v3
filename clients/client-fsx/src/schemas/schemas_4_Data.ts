// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DataRepositoryTaskExecuting as __DataRepositoryTaskExecuting,
  FileCacheNotFound as __FileCacheNotFound,
  MissingFileCacheConfiguration as __MissingFileCacheConfiguration,
} from "../models/index";
import {
  _AEP,
  _AI,
  _AIP,
  _As,
  _BIMDOC,
  _c,
  _CDRA,
  _CDRAR,
  _CDRARr,
  _CDRTr,
  _CDRTRr,
  _CDRTRre,
  _CFC,
  _CFCDRA,
  _CFCLC,
  _CFCR,
  _CFCRr,
  _CR,
  _CRT,
  _CT,
  _CTR,
  _CTTDRA,
  _DFC,
  _DFCR,
  _DFCRe,
  _DIn,
  _DNSN,
  _DRA,
  _DRAa,
  _DRAI,
  _DRP,
  _DRS,
  _DRT,
  _DRTEa,
  _DRTFD,
  _DRTS,
  _DSLA,
  _DT,
  _e,
  _En,
  _ET,
  _Ev,
  _F,
  _FC,
  _FCa,
  _FCC,
  _FCDRA,
  _FCFD,
  _FCI,
  _FCLC,
  _FCLMC,
  _FCNF,
  _FCNFSC,
  _FCP,
  _FCT,
  _FCTV,
  _FD,
  _FSI,
  _FSP,
  _IFCS,
  _KKI,
  _L,
  _LC,
  _LCo,
  _LUT,
  _M,
  _MC,
  _MFCC,
  _MN,
  _NFS,
  _NFSDRC,
  _NII,
  _OI,
  _P,
  _Pa,
  _PUST,
  _R,
  _RARN,
  _RC,
  _RCe,
  _S,
  _S_,
  _SC,
  _Sc,
  _SCu,
  _SDRC,
  _SGI,
  _SI,
  _STt,
  _T,
  _Ta,
  _TCo,
  _TI,
  _U,
  _UDRA,
  _UDRAR,
  _UDRARp,
  _UFC,
  _UFCLC,
  _UFCR,
  _UFCRp,
  _V,
  _Ve,
  _VIp,
  _WMST,
  DataRepositoryFailureDetails,
  LustreLogConfiguration,
  n0,
  Tags,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoExportPolicy = struct(n0, _AEP, 0, [_Ev], [64 | 0]);
export var AutoImportPolicy = struct(n0, _AIP, 0, [_Ev], [64 | 0]);
export var CompletionReport = struct(n0, _CR, 0, [_En, _P, _F, _Sc], [2, 0, 0, 0]);
export var CreateDataRepositoryAssociationRequest = struct(
  n0,
  _CDRAR,
  0,
  [_FSI, _FSP, _DRP, _BIMDOC, _IFCS, _S_, _CRT, _Ta],
  [0, 0, 0, 2, 1, () => S3DataRepositoryConfiguration, [0, 4], () => Tags]
);
export var CreateDataRepositoryAssociationResponse = struct(n0, _CDRARr, 0, [_As], [() => DataRepositoryAssociation]);
export var CreateDataRepositoryTaskRequest = struct(
  n0,
  _CDRTRr,
  0,
  [_T, _Pa, _FSI, _R, _CRT, _Ta, _CTR, _RC],
  [0, 64 | 0, 0, () => CompletionReport, [0, 4], () => Tags, 1, () => ReleaseConfiguration]
);
export var CreateDataRepositoryTaskResponse = struct(n0, _CDRTRre, 0, [_DRT], [() => DataRepositoryTask]);
export var CreateFileCacheLustreConfiguration = struct(
  n0,
  _CFCLC,
  0,
  [_PUST, _DT, _WMST, _MC],
  [1, 0, 0, () => FileCacheLustreMetadataConfiguration]
);
export var CreateFileCacheRequest = struct(
  n0,
  _CFCR,
  0,
  [_CRT, _FCT, _FCTV, _SC, _SI, _SGI, _Ta, _CTTDRA, _KKI, _LC, _DRA],
  [
    [0, 4],
    0,
    0,
    1,
    64 | 0,
    64 | 0,
    () => Tags,
    2,
    0,
    () => CreateFileCacheLustreConfiguration,
    () => CreateFileCacheDataRepositoryAssociations,
  ]
);
export var CreateFileCacheResponse = struct(n0, _CFCRr, 0, [_FC], [() => FileCacheCreating]);
export var DataRepositoryAssociation = struct(
  n0,
  _DRAa,
  0,
  [_AI, _RARN, _FSI, _L, _FD, _FSP, _DRP, _BIMDOC, _IFCS, _S_, _Ta, _CT, _FCI, _FCP, _DRS, _NFS],
  [
    0,
    0,
    0,
    0,
    () => DataRepositoryFailureDetails,
    0,
    0,
    2,
    1,
    () => S3DataRepositoryConfiguration,
    () => Tags,
    4,
    0,
    0,
    64 | 0,
    () => NFSDataRepositoryConfiguration,
  ]
);
export var DataRepositoryTask = struct(
  n0,
  _DRT,
  0,
  [_TI, _L, _T, _CT, _STt, _ET, _RARN, _Ta, _FSI, _Pa, _FD, _S, _R, _CTR, _FCI, _RC],
  [
    0,
    0,
    0,
    4,
    4,
    4,
    0,
    () => Tags,
    0,
    64 | 0,
    () => DataRepositoryTaskFailureDetails,
    () => DataRepositoryTaskStatus,
    () => CompletionReport,
    1,
    0,
    () => ReleaseConfiguration,
  ]
);
export var DataRepositoryTaskExecuting = error(
  n0,
  _DRTEa,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __DataRepositoryTaskExecuting
);
export var DataRepositoryTaskFailureDetails = struct(n0, _DRTFD, 0, [_M], [0]);
export var DataRepositoryTaskStatus = struct(n0, _DRTS, 0, [_TCo, _SCu, _FCa, _LUT, _RCe], [1, 1, 1, 4, 1]);
export var DeleteFileCacheRequest = struct(n0, _DFCR, 0, [_FCI, _CRT], [0, [0, 4]]);
export var DeleteFileCacheResponse = struct(n0, _DFCRe, 0, [_FCI, _L], [0, 0]);
export var DurationSinceLastAccess = struct(n0, _DSLA, 0, [_U, _V], [0, 1]);
export var FileCache = struct(
  n0,
  _FC,
  0,
  [_OI, _CT, _FCI, _FCT, _FCTV, _L, _FD, _SC, _VIp, _SI, _NII, _DNSN, _KKI, _RARN, _LC, _DRAI],
  [
    0,
    4,
    0,
    0,
    0,
    0,
    () => FileCacheFailureDetails,
    1,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => FileCacheLustreConfiguration,
    64 | 0,
  ]
);
export var FileCacheCreating = struct(
  n0,
  _FCC,
  0,
  [_OI, _CT, _FCI, _FCT, _FCTV, _L, _FD, _SC, _VIp, _SI, _NII, _DNSN, _KKI, _RARN, _Ta, _CTTDRA, _LC, _DRAI],
  [
    0,
    4,
    0,
    0,
    0,
    0,
    () => FileCacheFailureDetails,
    1,
    0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => Tags,
    2,
    () => FileCacheLustreConfiguration,
    64 | 0,
  ]
);
export var FileCacheDataRepositoryAssociation = struct(
  n0,
  _FCDRA,
  0,
  [_FCP, _DRP, _DRS, _NFS],
  [0, 0, 64 | 0, () => FileCacheNFSConfiguration]
);
export var FileCacheFailureDetails = struct(n0, _FCFD, 0, [_M], [0]);
export var FileCacheLustreConfiguration = struct(
  n0,
  _FCLC,
  0,
  [_PUST, _DT, _MN, _WMST, _MC, _LCo],
  [1, 0, 0, 0, () => FileCacheLustreMetadataConfiguration, () => LustreLogConfiguration]
);
export var FileCacheLustreMetadataConfiguration = struct(n0, _FCLMC, 0, [_SC], [1]);
export var FileCacheNFSConfiguration = struct(n0, _FCNFSC, 0, [_Ve, _DIn], [0, 64 | 0]);
export var FileCacheNotFound = error(
  n0,
  _FCNF,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __FileCacheNotFound
);
export var MissingFileCacheConfiguration = error(
  n0,
  _MFCC,
  {
    [_e]: _c,
  },
  [_M],
  [0],

  __MissingFileCacheConfiguration
);
export var NFSDataRepositoryConfiguration = struct(
  n0,
  _NFSDRC,
  0,
  [_Ve, _DIn, _AEP],
  [0, 64 | 0, () => AutoExportPolicy]
);
export var ReleaseConfiguration = struct(n0, _RC, 0, [_DSLA], [() => DurationSinceLastAccess]);
export var S3DataRepositoryConfiguration = struct(
  n0,
  _SDRC,
  0,
  [_AIP, _AEP],
  [() => AutoImportPolicy, () => AutoExportPolicy]
);
export var UpdateDataRepositoryAssociationRequest = struct(
  n0,
  _UDRAR,
  0,
  [_AI, _CRT, _IFCS, _S_],
  [0, [0, 4], 1, () => S3DataRepositoryConfiguration]
);
export var UpdateDataRepositoryAssociationResponse = struct(n0, _UDRARp, 0, [_As], [() => DataRepositoryAssociation]);
export var UpdateFileCacheLustreConfiguration = struct(n0, _UFCLC, 0, [_WMST], [0]);
export var UpdateFileCacheRequest = struct(
  n0,
  _UFCR,
  0,
  [_FCI, _CRT, _LC],
  [0, [0, 4], () => UpdateFileCacheLustreConfiguration]
);
export var UpdateFileCacheResponse = struct(n0, _UFCRp, 0, [_FC], [() => FileCache]);
export var CreateFileCacheDataRepositoryAssociations = list(n0, _CFCDRA, 0, () => FileCacheDataRepositoryAssociation);
export var DataRepositoryAssociationIds = 64 | 0;

export var DataRepositoryTaskPaths = 64 | 0;

export var EventTypes = 64 | 0;

export var RepositoryDnsIps = 64 | 0;

export var SubDirectoriesPaths = 64 | 0;

export var CreateDataRepositoryAssociation = op(
  n0,
  _CDRA,
  2,
  () => CreateDataRepositoryAssociationRequest,
  () => CreateDataRepositoryAssociationResponse
);
export var CreateDataRepositoryTask = op(
  n0,
  _CDRTr,
  2,
  () => CreateDataRepositoryTaskRequest,
  () => CreateDataRepositoryTaskResponse
);
export var CreateFileCache = op(
  n0,
  _CFC,
  2,
  () => CreateFileCacheRequest,
  () => CreateFileCacheResponse
);
export var DeleteFileCache = op(
  n0,
  _DFC,
  2,
  () => DeleteFileCacheRequest,
  () => DeleteFileCacheResponse
);
export var UpdateDataRepositoryAssociation = op(
  n0,
  _UDRA,
  2,
  () => UpdateDataRepositoryAssociationRequest,
  () => UpdateDataRepositoryAssociationResponse
);
export var UpdateFileCache = op(
  n0,
  _UFC,
  2,
  () => UpdateFileCacheRequest,
  () => UpdateFileCacheResponse
);
