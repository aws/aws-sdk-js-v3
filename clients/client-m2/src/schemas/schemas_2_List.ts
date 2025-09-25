// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _a,
  _aA,
  _aI,
  _AS,
  _ASL,
  _aV,
  _aVp,
  _AVSL,
  _BJD,
  _bJD,
  _BJDa,
  _bJE,
  _BJES,
  _BJESL,
  _bJI,
  _cT,
  _d,
  _dep,
  _dI,
  _DL,
  _dS,
  _dSat,
  _DSe,
  _DSET,
  _dSET,
  _DSETL,
  _DSIT,
  _dSIT,
  _DSITL,
  _dSN,
  _dSO,
  _DSS,
  _DSSL,
  _eA,
  _eI,
  _eIx,
  _eIxe,
  _en,
  _ES,
  _ESL,
  _eT,
  _eTn,
  _eV,
  _eVn,
  _EVS,
  _EVSL,
  _FBJD,
  _fBJD,
  _fN,
  _fo,
  _fP,
  _h,
  _hQ,
  _iT,
  _jI,
  _jN,
  _jT,
  _LA,
  _LAR,
  _LARi,
  _LAV,
  _LAVR,
  _LAVRi,
  _LBJD,
  _LBJDR,
  _LBJDRi,
  _LBJE,
  _LBJER,
  _LBJERi,
  _LD,
  _LDR,
  _LDRi,
  _LDS,
  _LDSEH,
  _LDSEHR,
  _LDSEHRi,
  _LDSIH,
  _LDSIHR,
  _LDSIHRi,
  _LDSR,
  _LDSRi,
  _LE,
  _LER,
  _LERi,
  _LEV,
  _LEVR,
  _LEVRi,
  _lRT,
  _lST,
  _lUT,
  _mR,
  _n,
  _na,
  _nF,
  _nT,
  _nTe,
  _pr,
  _rA,
  _rC,
  _s,
  _sA,
  _sB,
  _SBJD,
  _sBJD,
  _sNc,
  _sR,
  _sT,
  _sum,
  _tI,
  _vS,
  n0,
} from "./schemas_0";
import { BatchJobIdentifier } from "./schemas_1_Batch";
import { DataSetExportSummary, DataSetImportSummary } from "./schemas_3_Set";
import { ApplicationVersionSummary } from "./schemas_4_Application";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(
  n0,
  _AS,
  0,
  [_n, _d, _aI, _aA, _aV, _s, _eT, _cT, _eI, _lST, _vS, _dS, _rA],
  [0, 0, 0, 0, 1, 0, 0, 4, 0, 4, 0, 0, 0]
);
export var BatchJobExecutionSummary = struct(
  n0,
  _BJES,
  0,
  [_eIx, _aI, _jI, _jN, _jT, _s, _sT, _eTn, _rC, _bJI],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, () => BatchJobIdentifier]
);
export var DataSetExportTask = struct(n0, _DSET, 0, [_tI, _s, _sum, _sR], [0, 0, () => DataSetExportSummary, 0]);
export var DataSetImportTask = struct(n0, _DSIT, 0, [_tI, _s, _sum, _sR], [0, 0, () => DataSetImportSummary, 0]);
export var DataSetSummary = struct(n0, _DSS, 0, [_dSN, _dSO, _fo, _cT, _lUT, _lRT], [0, 0, 0, 4, 4, 4]);
export var DeploymentSummary = struct(n0, _DSe, 0, [_dI, _aI, _eI, _aV, _s, _cT, _sR], [0, 0, 0, 1, 0, 4, 0]);
export var EngineVersionsSummary = struct(n0, _EVS, 0, [_eT, _eV], [0, 0]);
export var EnvironmentSummary = struct(
  n0,
  _ES,
  0,
  [_n, _eA, _eI, _iT, _s, _eT, _eV, _cT, _nT],
  [0, 0, 0, 0, 0, 0, 0, 4, 0]
);
export var FileBatchJobDefinition = struct(n0, _FBJD, 0, [_fN, _fP], [0, 0]);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_nTe, _mR, _na, _eI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _eI,
      },
    ],
  ]
);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_a, _nTe], [() => ApplicationSummaryList, 0]);
export var ListApplicationVersionsRequest = struct(
  n0,
  _LAVR,
  0,
  [_nTe, _mR, _aI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListApplicationVersionsResponse = struct(
  n0,
  _LAVRi,
  0,
  [_aVp, _nTe],
  [() => ApplicationVersionSummaryList, 0]
);
export var ListBatchJobDefinitionsRequest = struct(
  n0,
  _LBJDR,
  0,
  [_nTe, _mR, _aI, _pr],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_hQ]: _pr,
      },
    ],
  ]
);
export var ListBatchJobDefinitionsResponse = struct(n0, _LBJDRi, 0, [_bJD, _nTe], [() => BatchJobDefinitions, 0]);
export var ListBatchJobExecutionsRequest = struct(
  n0,
  _LBJER,
  0,
  [_nTe, _mR, _aI, _eIxe, _jN, _s, _sA, _sB],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _eIxe,
      },
    ],
    [
      0,
      {
        [_hQ]: _jN,
      },
    ],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      4,
      {
        [_hQ]: _sA,
      },
    ],
    [
      4,
      {
        [_hQ]: _sB,
      },
    ],
  ]
);
export var ListBatchJobExecutionsResponse = struct(
  n0,
  _LBJERi,
  0,
  [_bJE, _nTe],
  [() => BatchJobExecutionSummaryList, 0]
);
export var ListDataSetExportHistoryRequest = struct(
  n0,
  _LDSEHR,
  0,
  [_nTe, _mR, _aI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListDataSetExportHistoryResponse = struct(n0, _LDSEHRi, 0, [_dSET, _nTe], [() => DataSetExportTaskList, 0]);
export var ListDataSetImportHistoryRequest = struct(
  n0,
  _LDSIHR,
  0,
  [_nTe, _mR, _aI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListDataSetImportHistoryResponse = struct(n0, _LDSIHRi, 0, [_dSIT, _nTe], [() => DataSetImportTaskList, 0]);
export var ListDataSetsRequest = struct(
  n0,
  _LDSR,
  0,
  [_aI, _nTe, _mR, _pr, _nF],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _pr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nF,
      },
    ],
  ]
);
export var ListDataSetsResponse = struct(n0, _LDSRi, 0, [_dSat, _nTe], [() => DataSetsSummaryList, 0]);
export var ListDeploymentsRequest = struct(
  n0,
  _LDR,
  0,
  [_nTe, _mR, _aI],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [0, 1],
  ]
);
export var ListDeploymentsResponse = struct(n0, _LDRi, 0, [_dep, _nTe], [() => DeploymentList, 0]);
export var ListEngineVersionsRequest = struct(
  n0,
  _LEVR,
  0,
  [_eT, _nTe, _mR],
  [
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListEngineVersionsResponse = struct(n0, _LEVRi, 0, [_eVn, _nTe], [() => EngineVersionsSummaryList, 0]);
export var ListEnvironmentsRequest = struct(
  n0,
  _LER,
  0,
  [_nTe, _mR, _na, _eT],
  [
    [
      0,
      {
        [_hQ]: _nTe,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _na,
      },
    ],
    [
      0,
      {
        [_hQ]: _eT,
      },
    ],
  ]
);
export var ListEnvironmentsResponse = struct(n0, _LERi, 0, [_en, _nTe], [() => EnvironmentSummaryList, 0]);
export var ScriptBatchJobDefinition = struct(n0, _SBJD, 0, [_sNc], [0]);
export var ApplicationSummaryList = list(n0, _ASL, 0, () => ApplicationSummary);
export var ApplicationVersionSummaryList = list(n0, _AVSL, 0, () => ApplicationVersionSummary);
export var BatchJobDefinitions = list(n0, _BJD, 0, () => BatchJobDefinition);
export var BatchJobExecutionSummaryList = list(n0, _BJESL, 0, () => BatchJobExecutionSummary);
export var DataSetExportTaskList = list(n0, _DSETL, 0, () => DataSetExportTask);
export var DataSetImportTaskList = list(n0, _DSITL, 0, () => DataSetImportTask);
export var DataSetsSummaryList = list(n0, _DSSL, 0, () => DataSetSummary);
export var DeploymentList = list(n0, _DL, 0, () => DeploymentSummary);
export var EngineVersionsSummaryList = list(n0, _EVSL, 0, () => EngineVersionsSummary);
export var EntityNameList = 64 | 0;

export var EnvironmentSummaryList = list(n0, _ESL, 0, () => EnvironmentSummary);
export var IdentifierList = 64 | 0;

export var BatchJobDefinition = uni(
  n0,
  _BJDa,
  0,
  [_fBJD, _sBJD],
  [() => FileBatchJobDefinition, () => ScriptBatchJobDefinition]
);
export var ListApplications = op(
  n0,
  _LA,
  {
    [_h]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListApplicationVersions = op(
  n0,
  _LAV,
  {
    [_h]: ["GET", "/applications/{applicationId}/versions", 200],
  },
  () => ListApplicationVersionsRequest,
  () => ListApplicationVersionsResponse
);
export var ListBatchJobDefinitions = op(
  n0,
  _LBJD,
  {
    [_h]: ["GET", "/applications/{applicationId}/batch-job-definitions", 200],
  },
  () => ListBatchJobDefinitionsRequest,
  () => ListBatchJobDefinitionsResponse
);
export var ListBatchJobExecutions = op(
  n0,
  _LBJE,
  {
    [_h]: ["GET", "/applications/{applicationId}/batch-job-executions", 200],
  },
  () => ListBatchJobExecutionsRequest,
  () => ListBatchJobExecutionsResponse
);
export var ListDataSetExportHistory = op(
  n0,
  _LDSEH,
  {
    [_h]: ["GET", "/applications/{applicationId}/dataset-export-tasks", 200],
  },
  () => ListDataSetExportHistoryRequest,
  () => ListDataSetExportHistoryResponse
);
export var ListDataSetImportHistory = op(
  n0,
  _LDSIH,
  {
    [_h]: ["GET", "/applications/{applicationId}/dataset-import-tasks", 200],
  },
  () => ListDataSetImportHistoryRequest,
  () => ListDataSetImportHistoryResponse
);
export var ListDataSets = op(
  n0,
  _LDS,
  {
    [_h]: ["GET", "/applications/{applicationId}/datasets", 200],
  },
  () => ListDataSetsRequest,
  () => ListDataSetsResponse
);
export var ListDeployments = op(
  n0,
  _LD,
  {
    [_h]: ["GET", "/applications/{applicationId}/deployments", 200],
  },
  () => ListDeploymentsRequest,
  () => ListDeploymentsResponse
);
export var ListEngineVersions = op(
  n0,
  _LEV,
  {
    [_h]: ["GET", "/engine-versions", 200],
  },
  () => ListEngineVersionsRequest,
  () => ListEngineVersionsResponse
);
export var ListEnvironments = op(
  n0,
  _LE,
  {
    [_h]: ["GET", "/environments", 200],
  },
  () => ListEnvironmentsRequest,
  () => ListEnvironmentsResponse
);
