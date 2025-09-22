// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _am,
  _aO,
  _aOl,
  _att,
  _cA,
  _cB,
  _com,
  _cR,
  _cU,
  _DC,
  _dC,
  _de,
  _dR,
  _dU,
  _eA,
  _end,
  _fE,
  _fI,
  _GSe,
  _GSRet,
  _GSRett,
  _h,
  _hQ,
  _iO,
  _j,
  _jI,
  _JS,
  _JSo,
  _LJ,
  _LJR,
  _LJRi,
  _lS,
  _LSist,
  _lSM,
  _LSRis,
  _LSRist,
  _m,
  _ma,
  _mFTC,
  _mR,
  _mRPT,
  _mWCa,
  _n,
  _nIO,
  _nT,
  _p,
  _pI,
  _pr,
  _PS,
  _pS,
  _pSa,
  _qI,
  _qIu,
  _rC,
  _SAC,
  _SACt,
  _SACte,
  _SACtep,
  _sAt,
  _SD,
  _sE,
  _sI,
  _sJI,
  _SP,
  _SPL,
  _SRC,
  _SSea,
  _SSR,
  _SSRe,
  _SSS,
  _SSSt,
  _SSt,
  _SSte,
  _ste,
  _t,
  _tFRC,
  _tR,
  _tRS,
  _tRSC,
  _tTRS,
  _uA,
  _uB,
  _va,
  n0,
} from "./schemas_0";
import { SearchGroupedFilterExpressions, SearchSortExpressions } from "./schemas_8_Search";

/* eslint no-var: 0 */

export var StepDescription = sim(n0, _SD, 0, 8);
export var DependencyCounts = struct(n0, _DC, 0, [_dR, _dU, _cR, _cU], [1, 1, 1, 1]);
export var GetStepRequest = struct(
  n0,
  _GSRet,
  0,
  [_fI, _qI, _jI, _sI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetStepResponse = struct(
  n0,
  _GSRett,
  0,
  [_sI, _n, _lS, _lSM, _tRS, _tRSC, _tFRC, _tTRS, _cA, _cB, _uA, _uB, _sAt, _eA, _dC, _rC, _pS, _de],
  [
    0,
    0,
    0,
    0,
    0,
    128 | 1,
    1,
    0,
    5,
    0,
    5,
    0,
    5,
    5,
    () => DependencyCounts,
    () => StepRequiredCapabilities,
    () => ParameterSpace,
    [() => StepDescription, 0],
  ]
);
export var JobSummary = struct(
  n0,
  _JS,
  0,
  [_jI, _n, _lS, _lSM, _pr, _cA, _cB, _uA, _uB, _sAt, _eA, _tRS, _tTRS, _tRSC, _tFRC, _mFTC, _mRPT, _mWCa, _sJI],
  [0, 0, 0, 0, 1, 5, 0, 5, 0, 5, 5, 0, 0, 128 | 1, 1, 1, 1, 1, 0]
);
export var ListJobsRequest = struct(
  n0,
  _LJR,
  0,
  [_fI, _pI, _qI, _nT, _mR],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _pI,
      },
    ],
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
export var ListJobsResponse = struct(n0, _LJRi, 0, [_j, _nT], [() => JobSummaries, 0]);
export var ListStepsRequest = struct(
  n0,
  _LSRis,
  0,
  [_fI, _qI, _jI, _nT, _mR],
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
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListStepsResponse = struct(n0, _LSRist, 0, [_ste, _nT], [() => StepSummaries, 0]);
export var ParameterSpace = struct(n0, _PS, 0, [_p, _com], [() => StepParameterList, 0]);
export var SearchStepsRequest = struct(
  n0,
  _SSR,
  0,
  [_fI, _qIu, _jI, _fE, _sE, _iO, _pSa],
  [[0, 1], 64 | 0, 0, () => SearchGroupedFilterExpressions, () => SearchSortExpressions, 1, 1]
);
export var SearchStepsResponse = struct(n0, _SSRe, 0, [_ste, _nIO, _tR], [() => StepSearchSummaries, 1, 1]);
export var StepAmountCapability = struct(n0, _SAC, 0, [_n, _m, _ma, _va], [0, 1, 1, 1]);
export var StepAttributeCapability = struct(n0, _SACt, 0, [_n, _aO, _aOl], [0, 64 | 0, 64 | 0]);
export var StepParameter = struct(n0, _SP, 0, [_n, _t], [0, 0]);
export var StepRequiredCapabilities = struct(
  n0,
  _SRC,
  0,
  [_att, _am],
  [() => StepAttributeCapabilities, () => StepAmountCapabilities]
);
export var StepSearchSummary = struct(
  n0,
  _SSS,
  0,
  [_sI, _jI, _qI, _n, _lS, _lSM, _tRS, _tTRS, _tRSC, _tFRC, _cA, _cB, _sAt, _eA, _uA, _uB, _pS],
  [0, 0, 0, 0, 0, 0, 0, 0, 128 | 1, 1, 5, 0, 5, 5, 5, 0, () => ParameterSpace]
);
export var StepSummary = struct(
  n0,
  _SSt,
  0,
  [_sI, _n, _lS, _lSM, _tRS, _tRSC, _tFRC, _tTRS, _cA, _cB, _uA, _uB, _sAt, _eA, _dC],
  [0, 0, 0, 0, 0, 128 | 1, 1, 0, 5, 0, 5, 0, 5, 5, () => DependencyCounts]
);
export var JobSummaries = list(n0, _JSo, 0, () => JobSummary);
export var ListAttributeCapabilityValue = 64 | 0;

export var StepAmountCapabilities = list(n0, _SACte, 0, () => StepAmountCapability);
export var StepAttributeCapabilities = list(n0, _SACtep, 0, () => StepAttributeCapability);
export var StepParameterList = list(n0, _SPL, 0, () => StepParameter);
export var StepSearchSummaries = list(n0, _SSSt, 0, () => StepSearchSummary);
export var StepSummaries = list(n0, _SSte, 0, () => StepSummary);
export var TaskRunStatusCounts = 128 | 1;

export var GetStep = op(
  n0,
  _GSe,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}", 200],
    [_end]: ["management."],
  },
  () => GetStepRequest,
  () => GetStepResponse
);
export var ListJobs = op(
  n0,
  _LJ,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs", 200],
  },
  () => ListJobsRequest,
  () => ListJobsResponse
);
export var ListSteps = op(
  n0,
  _LSist,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps", 200],
  },
  () => ListStepsRequest,
  () => ListStepsResponse
);
export var SearchSteps = op(
  n0,
  _SSea,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/search/steps", 200],
  },
  () => SearchStepsRequest,
  () => SearchStepsResponse
);
