// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aC,
  _aD,
  _aDMW,
  _aI,
  _AK,
  _aK,
  _AKL,
  _aSMA,
  _b,
  _BJI,
  _bJI,
  _bJS,
  _BJSL,
  _bu,
  _cAS,
  _CDSIT,
  _CDSITR,
  _CDSITRr,
  _CER,
  _CEr,
  _CERr,
  _co,
  _cT,
  _cTl,
  _d,
  _dCe,
  _DDOA,
  _dN,
  _dO,
  _DOA,
  _DS,
  _dSa,
  _dSat,
  _DSIC,
  _DSII,
  _DSIL,
  _dSN,
  _dSO,
  _eA,
  _ef,
  _eI,
  _eIx,
  _eL,
  _enc,
  _ESC,
  _eT,
  _eTn,
  _eV,
  _FBJI,
  _fBJI,
  _fN,
  _fo,
  _fP,
  _fPS,
  _fS,
  _fs,
  _FSC,
  _fSI,
  _fsi,
  _fSo,
  _fSr,
  _fU,
  _g,
  _GA,
  _GBJE,
  _GBJER,
  _GBJERe,
  _GDA,
  _GDSD,
  _GDSDR,
  _GDSDRe,
  _GE,
  _GER,
  _GERe,
  _h,
  _HAC,
  _hAC,
  _hQ,
  _i,
  _iC,
  _iT,
  _JI,
  _jI,
  _jN,
  _jNs,
  _jP,
  _JS,
  _JSRM,
  _jSRM,
  _jT,
  _jU,
  _kKI,
  _kP,
  _l,
  _lBA,
  _LBJRP,
  _LBJRPR,
  _LBJRPRi,
  _li,
  _lo,
  _lRT,
  _lUT,
  _ma,
  _mFE,
  _mi,
  _mP,
  _mp,
  _MS,
  _n,
  _nT,
  _o,
  _PA,
  _pA,
  _PAs,
  _PDA,
  _PDAs,
  _PK,
  _pK,
  _PM,
  _pM,
  _pMW,
  _po,
  _ps,
  _pSN,
  _pSNr,
  _RBJI,
  _rBJI,
  _rC,
  _rD,
  _rF,
  _RL,
  _rL,
  _rP,
  _s,
  _SARto,
  _SARtop,
  _SAt,
  _SBJ,
  _SBJI,
  _sBJI,
  _sBJIa,
  _SBJIc,
  _SBJR,
  _SBJRt,
  _SC,
  _sC,
  _sc,
  _sCC,
  _SCL,
  _sCS,
  _sCT,
  _sCt,
  _sGI,
  _sI,
  _sk,
  _sL,
  _sN,
  _sNc,
  _sNt,
  _sR,
  _sRt,
  _sT,
  _sTt,
  _t,
  _tI,
  _tPS,
  _tS,
  _UE,
  _UER,
  _UERp,
  _v,
  _VA,
  _VDA,
  _vI,
  n0,
} from "./schemas_0";
import { ExternalLocation } from "./schemas_6_Create";

/* eslint no-var: 0 */

export var AlternateKey = struct(n0, _AK, 0, [_n, _o, _l, _aD], [0, 1, 1, 2]);
export var CreateDataSetImportTaskRequest = struct(
  n0,
  _CDSITR,
  0,
  [_aI, _iC, _cTl],
  [[0, 1], () => DataSetImportConfig, [0, 4]]
);
export var CreateDataSetImportTaskResponse = struct(n0, _CDSITRr, 0, [_tI], [0]);
export var CreateEnvironmentRequest = struct(
  n0,
  _CER,
  0,
  [_n, _iT, _d, _eT, _eV, _sI, _sGI, _sC, _pA, _hAC, _t, _pMW, _nT, _cTl, _kKI],
  [
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    [() => StorageConfigurationList, 0],
    2,
    () => HighAvailabilityConfig,
    128 | 0,
    0,
    0,
    [0, 4],
    0,
  ]
);
export var CreateEnvironmentResponse = struct(n0, _CERr, 0, [_eI], [0]);
export var DataSet = struct(
  n0,
  _DS,
  0,
  [_sTt, _dN, _dO, _rP, _rL],
  [0, 0, () => DatasetOrgAttributes, 0, () => RecordLength]
);
export var DataSetImportItem = struct(n0, _DSII, 0, [_dSa, _eL], [() => DataSet, () => ExternalLocation]);
export var EfsStorageConfiguration = struct(
  n0,
  _ESC,
  0,
  [_fSI, _mP],
  [
    [
      0,
      {
        [_jNs]: _fsi,
      },
    ],
    [
      0,
      {
        [_jNs]: _mp,
      },
    ],
  ]
);
export var FileBatchJobIdentifier = struct(n0, _FBJI, 0, [_fN, _fP], [0, 0]);
export var FsxStorageConfiguration = struct(
  n0,
  _FSC,
  0,
  [_fSI, _mP],
  [
    [
      0,
      {
        [_jNs]: _fsi,
      },
    ],
    [
      0,
      {
        [_jNs]: _mp,
      },
    ],
  ]
);
export var GdgAttributes = struct(n0, _GA, 0, [_li, _rD], [1, 0]);
export var GdgDetailAttributes = struct(n0, _GDA, 0, [_li, _rD], [1, 0]);
export var GetBatchJobExecutionRequest = struct(
  n0,
  _GBJER,
  0,
  [_aI, _eIx],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetBatchJobExecutionResponse = struct(
  n0,
  _GBJERe,
  0,
  [_eIx, _aI, _jI, _jN, _jU, _jT, _s, _sT, _eTn, _sR, _rC, _bJI, _jSRM],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, () => BatchJobIdentifier, () => JobStepRestartMarker]
);
export var GetDataSetDetailsRequest = struct(
  n0,
  _GDSDR,
  0,
  [_aI, _dSN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetDataSetDetailsResponse = struct(
  n0,
  _GDSDRe,
  0,
  [_dSN, _dSO, _rL, _lo, _b, _cT, _lUT, _lRT, _fS],
  [0, () => DatasetDetailOrgAttributes, 1, 0, 1, 4, 4, 4, 1]
);
export var GetEnvironmentRequest = struct(n0, _GER, 0, [_eI], [[0, 1]]);
export var GetEnvironmentResponse = struct(
  n0,
  _GERe,
  0,
  [_n, _d, _eA, _eI, _iT, _s, _eT, _eV, _vI, _sI, _sGI, _cT, _sC, _t, _hAC, _pA, _aC, _lBA, _sR, _pMW, _pM, _kKI, _nT],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    64 | 0,
    64 | 0,
    4,
    [() => StorageConfigurationList, 0],
    128 | 0,
    () => HighAvailabilityConfig,
    2,
    1,
    0,
    0,
    0,
    () => PendingMaintenance,
    0,
    0,
  ]
);
export var HighAvailabilityConfig = struct(n0, _HAC, 0, [_dCe], [1]);
export var JobStep = struct(
  n0,
  _JS,
  0,
  [_sN, _sNt, _pSN, _pSNr, _sCC, _sRt, _sCt, _sCS, _sCT],
  [1, 0, 1, 0, 0, 2, 1, 0, 4]
);
export var JobStepRestartMarker = struct(n0, _JSRM, 0, [_fSr, _fPS, _tS, _tPS, _sCt, _sk], [0, 0, 0, 0, 1, 2]);
export var ListBatchJobRestartPointsRequest = struct(
  n0,
  _LBJRPR,
  0,
  [_aI, _eIx, _aSMA],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _aSMA,
      },
    ],
  ]
);
export var ListBatchJobRestartPointsResponse = struct(n0, _LBJRPRi, 0, [_bJS], [() => BatchJobStepList]);
export var MaintenanceSchedule = struct(n0, _MS, 0, [_sT, _eTn], [4, 4]);
export var PendingMaintenance = struct(n0, _PM, 0, [_sc, _eV], [() => MaintenanceSchedule, 0]);
export var PoAttributes = struct(n0, _PA, 0, [_fo, _enc, _mFE], [0, 0, 64 | 0]);
export var PoDetailAttributes = struct(n0, _PDA, 0, [_fo, _enc], [0, 0]);
export var PrimaryKey = struct(n0, _PK, 0, [_n, _o, _l], [0, 1, 1]);
export var PsAttributes = struct(n0, _PAs, 0, [_fo, _enc], [0, 0]);
export var PsDetailAttributes = struct(n0, _PDAs, 0, [_fo, _enc], [0, 0]);
export var RecordLength = struct(n0, _RL, 0, [_mi, _ma], [1, 1]);
export var RestartBatchJobIdentifier = struct(n0, _RBJI, 0, [_eIx, _jSRM], [0, () => JobStepRestartMarker]);
export var S3BatchJobIdentifier = struct(n0, _SBJI, 0, [_bu, _kP, _i], [0, 0, () => JobIdentifier]);
export var ScriptBatchJobIdentifier = struct(n0, _SBJIc, 0, [_sNc], [0]);
export var StartBatchJobRequest = struct(
  n0,
  _SBJR,
  0,
  [_aI, _bJI, _jP, _aSMA],
  [[0, 1], () => BatchJobIdentifier, 128 | 0, 0]
);
export var StartBatchJobResponse = struct(n0, _SBJRt, 0, [_eIx], [0]);
export var StopApplicationRequest = struct(n0, _SARto, 0, [_aI, _fSo], [[0, 1], 2]);
export var StopApplicationResponse = struct(n0, _SARtop, 0, [], []);
export var UpdateEnvironmentRequest = struct(
  n0,
  _UER,
  0,
  [_eI, _dCe, _iT, _eV, _pMW, _aDMW, _fU],
  [[0, 1], 1, 0, 0, 0, 2, 2]
);
export var UpdateEnvironmentResponse = struct(n0, _UERp, 0, [_eI], [0]);
export var VsamAttributes = struct(
  n0,
  _VA,
  0,
  [_fo, _enc, _co, _pK, _aK],
  [0, 0, 2, () => PrimaryKey, () => AlternateKeyList]
);
export var VsamDetailAttributes = struct(
  n0,
  _VDA,
  0,
  [_enc, _rF, _co, _cAS, _pK, _aK],
  [0, 0, 2, 2, () => PrimaryKey, () => AlternateKeyList]
);
export var AlternateKeyList = list(n0, _AKL, 0, () => AlternateKey);
export var BatchJobStepList = list(n0, _BJSL, 0, () => JobStep);
export var DataSetImportList = list(n0, _DSIL, 0, () => DataSetImportItem);
export var StorageConfigurationList = list(n0, _SCL, 0, [() => StorageConfiguration, 0]);
export var String20List = 64 | 0;

export var String50List = 64 | 0;

export var BatchJobParametersMap = 128 | 0;

export var BatchJobIdentifier = uni(
  n0,
  _BJI,
  0,
  [_fBJI, _sBJI, _sBJIa, _rBJI],
  [
    () => FileBatchJobIdentifier,
    () => ScriptBatchJobIdentifier,
    () => S3BatchJobIdentifier,
    () => RestartBatchJobIdentifier,
  ]
);
export var DatasetDetailOrgAttributes = uni(
  n0,
  _DDOA,
  0,
  [_v, _g, _po, _ps],
  [() => VsamDetailAttributes, () => GdgDetailAttributes, () => PoDetailAttributes, () => PsDetailAttributes]
);
export var DataSetImportConfig = uni(n0, _DSIC, 0, [_sL, _dSat], [0, () => DataSetImportList]);
export var DatasetOrgAttributes = uni(
  n0,
  _DOA,
  0,
  [_v, _g, _po, _ps],
  [() => VsamAttributes, () => GdgAttributes, () => PoAttributes, () => PsAttributes]
);
export var JobIdentifier = uni(n0, _JI, 0, [_fN, _sNc], [0, 0]);
export var StorageConfiguration = uni(
  n0,
  _SC,
  0,
  [_ef, _fs],
  [
    [() => EfsStorageConfiguration, 0],
    [() => FsxStorageConfiguration, 0],
  ]
);
export var CreateDataSetImportTask = op(
  n0,
  _CDSIT,
  {
    [_h]: ["POST", "/applications/{applicationId}/dataset-import-task", 200],
  },
  () => CreateDataSetImportTaskRequest,
  () => CreateDataSetImportTaskResponse
);
export var CreateEnvironment = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/environments", 200],
  },
  () => CreateEnvironmentRequest,
  () => CreateEnvironmentResponse
);
export var GetBatchJobExecution = op(
  n0,
  _GBJE,
  {
    [_h]: ["GET", "/applications/{applicationId}/batch-job-executions/{executionId}", 200],
  },
  () => GetBatchJobExecutionRequest,
  () => GetBatchJobExecutionResponse
);
export var GetDataSetDetails = op(
  n0,
  _GDSD,
  {
    [_h]: ["GET", "/applications/{applicationId}/datasets/{dataSetName}", 200],
  },
  () => GetDataSetDetailsRequest,
  () => GetDataSetDetailsResponse
);
export var GetEnvironment = op(
  n0,
  _GE,
  {
    [_h]: ["GET", "/environments/{environmentId}", 200],
  },
  () => GetEnvironmentRequest,
  () => GetEnvironmentResponse
);
export var ListBatchJobRestartPoints = op(
  n0,
  _LBJRP,
  {
    [_h]: ["GET", "/applications/{applicationId}/batch-job-executions/{executionId}/steps", 200],
  },
  () => ListBatchJobRestartPointsRequest,
  () => ListBatchJobRestartPointsResponse
);
export var StartBatchJob = op(
  n0,
  _SBJ,
  {
    [_h]: ["POST", "/applications/{applicationId}/batch-job", 200],
  },
  () => StartBatchJobRequest,
  () => StartBatchJobResponse
);
export var StopApplication = op(
  n0,
  _SAt,
  {
    [_h]: ["POST", "/applications/{applicationId}/stop", 200],
  },
  () => StopApplicationRequest,
  () => StopApplicationResponse
);
export var UpdateEnvironment = op(
  n0,
  _UE,
  {
    [_h]: ["PATCH", "/environments/{environmentId}", 200],
  },
  () => UpdateEnvironmentRequest,
  () => UpdateEnvironmentResponse
);
