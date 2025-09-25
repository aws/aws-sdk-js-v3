// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aCA,
  _aI,
  _AL,
  _app,
  _ar,
  _AS,
  _at,
  _aUA,
  _cA,
  _cAA,
  _cAB,
  _cB,
  _eR,
  _hQ,
  _ht,
  _i,
  _jCA,
  _JRA,
  _jRA,
  _JRAS,
  _jRI,
  _JRo,
  _jRo,
  _JRS,
  _LA,
  _LAR,
  _LARi,
  _LJR,
  _LJRA,
  _LJRAR,
  _LJRARi,
  _LJRR,
  _LJRRi,
  _mo,
  _mR,
  _n,
  _nT,
  _rL,
  _s,
  _sD,
  _st,
  _t,
  _uA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSummary = struct(
  n0,
  _AS,
  0,
  [_i, _n, _a, _rL, _t, _s, _sD, _cA, _uA, _ar],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0]
);
export var JobRunAttemptSummary = struct(
  n0,
  _JRAS,
  0,
  [_aI, _i, _n, _mo, _a, _cB, _jCA, _cA, _uA, _eR, _s, _sD, _rL, _t, _at],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 1]
);
export var JobRunSummary = struct(
  n0,
  _JRS,
  0,
  [_aI, _i, _n, _mo, _a, _cB, _cA, _uA, _eR, _s, _sD, _rL, _t, _at, _aCA, _aUA],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 1, 4, 4]
);
export var ListApplicationsRequest = struct(
  n0,
  _LAR,
  0,
  [_nT, _mR, _st],
  [
    [
      0,
      {
        [_hQ]: _nT,
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
        [_hQ]: _st,
      },
    ],
  ]
);
export var ListApplicationsResponse = struct(n0, _LARi, 0, [_app, _nT], [() => ApplicationList, 0]);
export var ListJobRunAttemptsRequest = struct(
  n0,
  _LJRAR,
  0,
  [_aI, _jRI, _nT, _mR],
  [
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListJobRunAttemptsResponse = struct(n0, _LJRARi, 0, [_jRA, _nT], [() => JobRunAttempts, 0]);
export var ListJobRunsRequest = struct(
  n0,
  _LJRR,
  0,
  [_aI, _nT, _mR, _cAA, _cAB, _st, _mo],
  [
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
        [_hQ]: _mR,
      },
    ],
    [
      4,
      {
        [_hQ]: _cAA,
      },
    ],
    [
      4,
      {
        [_hQ]: _cAB,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _st,
      },
    ],
    [
      0,
      {
        [_hQ]: _mo,
      },
    ],
  ]
);
export var ListJobRunsResponse = struct(n0, _LJRRi, 0, [_jRo, _nT], [() => JobRuns, 0]);
export var ApplicationList = list(n0, _AL, 0, () => ApplicationSummary);
export var ApplicationStateSet = 64 | 0;

export var JobRunAttempts = list(n0, _JRA, 0, () => JobRunAttemptSummary);
export var JobRuns = list(n0, _JRo, 0, () => JobRunSummary);
export var JobRunStateSet = 64 | 0;

export var ListApplications = op(
  n0,
  _LA,
  {
    [_ht]: ["GET", "/applications", 200],
  },
  () => ListApplicationsRequest,
  () => ListApplicationsResponse
);
export var ListJobRunAttempts = op(
  n0,
  _LJRA,
  {
    [_ht]: ["GET", "/applications/{applicationId}/jobruns/{jobRunId}/attempts", 200],
  },
  () => ListJobRunAttemptsRequest,
  () => ListJobRunAttemptsResponse
);
export var ListJobRuns = op(
  n0,
  _LJR,
  {
    [_ht]: ["GET", "/applications/{applicationId}/jobruns", 200],
  },
  () => ListJobRunsRequest,
  () => ListJobRunsResponse
);
