// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aIp,
  _dAo,
  _dDo,
  _dF,
  _dM,
  _dS,
  _dSEC,
  _dSI,
  _DSSJ,
  _DSSJa,
  _DSSJM,
  _e,
  _eIx,
  _eTn,
  _h,
  _hQ,
  _ht,
  _iI,
  _LDSSJ,
  _LDSSJR,
  _LDSSJRi,
  _me,
  _mRa,
  _nT,
  _s,
  _SDSSJ,
  _SDSSJR,
  _SDSSJRt,
  _sF,
  _sSy,
  _sT,
  ErrorDetail,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DataSourceSyncJob = struct(
  n0,
  _DSSJ,
  0,
  [_eIx, _sT, _eTn, _s, _e, _dSEC, _me],
  [0, 4, 4, 0, () => ErrorDetail, 0, () => DataSourceSyncJobMetrics]
);
export var DataSourceSyncJobMetrics = struct(n0, _DSSJM, 0, [_dAo, _dM, _dDo, _dF, _dS], [0, 0, 0, 0, 0]);
export var ListDataSourceSyncJobsRequest = struct(
  n0,
  _LDSSJR,
  0,
  [_dSI, _aIp, _iI, _nT, _mRa, _sT, _eTn, _sF],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mRa,
      },
    ],
    [
      4,
      {
        [_hQ]: _sT,
      },
    ],
    [
      4,
      {
        [_hQ]: _eTn,
      },
    ],
    [
      0,
      {
        [_hQ]: _sSy,
      },
    ],
  ]
);
export var ListDataSourceSyncJobsResponse = struct(n0, _LDSSJRi, 0, [_h, _nT], [() => DataSourceSyncJobs, 0]);
export var StartDataSourceSyncJobRequest = struct(
  n0,
  _SDSSJR,
  0,
  [_dSI, _aIp, _iI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StartDataSourceSyncJobResponse = struct(n0, _SDSSJRt, 0, [_eIx], [0]);
export var DataSourceSyncJobs = list(n0, _DSSJa, 0, () => DataSourceSyncJob);
export var ListDataSourceSyncJobs = op(
  n0,
  _LDSSJ,
  {
    [_ht]: ["GET", "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/syncjobs", 200],
  },
  () => ListDataSourceSyncJobsRequest,
  () => ListDataSourceSyncJobsResponse
);
export var StartDataSourceSyncJob = op(
  n0,
  _SDSSJ,
  {
    [_ht]: ["POST", "/applications/{applicationId}/indices/{indexId}/datasources/{dataSourceId}/startsync", 200],
  },
  () => StartDataSourceSyncJobRequest,
  () => StartDataSourceSyncJobResponse
);
