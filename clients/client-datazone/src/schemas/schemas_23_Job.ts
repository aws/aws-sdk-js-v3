// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _cA,
  _cB,
  _det,
  _dI,
  _dIo,
  _e,
  _eMr,
  _eTn,
  _GJR,
  _GJRI,
  _GJRO,
  _hQ,
  _ht,
  _i,
  _id,
  _it,
  _jI,
  _jIo,
  _JRD,
  _JRE,
  _JRS,
  _JRSo,
  _jT,
  _LJR,
  _LJRI,
  _LJRO,
  _LRD,
  _lRD,
  _LSQRD,
  _m,
  _mRa,
  _nQF,
  _nT,
  _qET,
  _qST,
  _rIu,
  _rM,
  _s,
  _sO,
  _sQRD,
  _sTt,
  _tQP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetJobRunInput = struct(
  n0,
  _GJRI,
  0,
  [_dI, _i],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetJobRunOutput = struct(
  n0,
  _GJRO,
  0,
  [_dIo, _id, _jI, _jT, _rM, _det, _s, _e, _cB, _cA, _sTt, _eTn],
  [0, 0, 0, 0, 0, () => JobRunDetails, 0, () => JobRunError, 0, 4, 4, 4]
);
export var JobRunError = struct(n0, _JRE, 0, [_m], [0]);
export var JobRunSummary = struct(
  n0,
  _JRS,
  0,
  [_dIo, _jI, _jT, _rIu, _rM, _s, _e, _cB, _cA, _sTt, _eTn],
  [0, 0, 0, 0, 0, 0, () => JobRunError, 0, 4, 4, 4]
);
export var LineageRunDetails = struct(n0, _LRD, 0, [_sQRD], [() => LineageSqlQueryRunDetails]);
export var LineageSqlQueryRunDetails = struct(n0, _LSQRD, 0, [_qST, _qET, _tQP, _nQF, _eMr], [4, 4, 1, 1, 64 | 0]);
export var ListJobRunsInput = struct(
  n0,
  _LJRI,
  0,
  [_dI, _jIo, _s, _sO, _nT, _mRa],
  [
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _s,
      },
    ],
    [
      0,
      {
        [_hQ]: _sO,
      },
    ],
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
  ]
);
export var ListJobRunsOutput = struct(n0, _LJRO, 0, [_it, _nT], [() => JobRunSummaries, 0]);
export var FailedQueryProcessingErrorMessages = 64 | 0;

export var JobRunSummaries = list(n0, _JRSo, 0, () => JobRunSummary);
export var JobRunDetails = uni(n0, _JRD, 0, [_lRD], [() => LineageRunDetails]);
export var GetJobRun = op(
  n0,
  _GJR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/jobRuns/{identifier}", 200],
  },
  () => GetJobRunInput,
  () => GetJobRunOutput
);
export var ListJobRuns = op(
  n0,
  _LJR,
  {
    [_ht]: ["GET", "/v2/domains/{domainIdentifier}/jobs/{jobIdentifier}/runs", 200],
  },
  () => ListJobRunsInput,
  () => ListJobRunsOutput
);
