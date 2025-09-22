// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AN,
  _aN,
  _ASLt,
  _aSSt,
  _ASt,
  _AStt,
  _CDPR,
  _CDPRR,
  _CDPRRa,
  _DR,
  _eQN,
  _eTn,
  _ETnd,
  _GDPRS,
  _GDPRSR,
  _GDPRSRe,
  _it,
  _MFV,
  _mFV,
  _NOA,
  _nOA,
  _NOFA,
  _nOFA,
  _NOMA,
  _nOMA,
  _NOUA,
  _nOUA,
  _R,
  _r,
  _RI,
  _rI,
  _RN,
  _rNe,
  _RS,
  _RSeg,
  _RSL,
  _rSS,
  _SB,
  _sB,
  _SP,
  _sP,
  _ST,
  _sT,
  _TIa,
  _tIa,
  _xN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AttributeSummary = struct(
  n0,
  _ASt,
  0,
  [_AN, _MFV, _NOMA, _NOUA, _RS],
  [
    [
      0,
      {
        [_eQN]: `AttributeName`,
        [_xN]: _aN,
      },
    ],
    [
      0,
      {
        [_eQN]: `MostFrequentValue`,
        [_xN]: _mFV,
      },
    ],
    [
      1,
      {
        [_eQN]: `NumberOfMatchedAccounts`,
        [_xN]: _nOMA,
      },
    ],
    [
      1,
      {
        [_eQN]: `NumberOfUnmatchedAccounts`,
        [_xN]: _nOUA,
      },
    ],
    [
      () => RegionalSummaryList,
      {
        [_eQN]: `RegionalSummarySet`,
        [_xN]: _rSS,
      },
    ],
  ]
);
export var CancelDeclarativePoliciesReportRequest = struct(n0, _CDPRR, 0, [_DR, _RI], [2, 0]);
export var CancelDeclarativePoliciesReportResult = struct(
  n0,
  _CDPRRa,
  0,
  [_R],
  [
    [
      2,
      {
        [_eQN]: `Return`,
        [_xN]: _r,
      },
    ],
  ]
);
export var GetDeclarativePoliciesReportSummaryRequest = struct(n0, _GDPRSR, 0, [_DR, _RI], [2, 0]);
export var GetDeclarativePoliciesReportSummaryResult = struct(
  n0,
  _GDPRSRe,
  0,
  [_RI, _SB, _SP, _TIa, _ST, _ETnd, _NOA, _NOFA, _AStt],
  [
    [
      0,
      {
        [_eQN]: `ReportId`,
        [_xN]: _rI,
      },
    ],
    [
      0,
      {
        [_eQN]: `S3Bucket`,
        [_xN]: _sB,
      },
    ],
    [
      0,
      {
        [_eQN]: `S3Prefix`,
        [_xN]: _sP,
      },
    ],
    [
      0,
      {
        [_eQN]: `TargetId`,
        [_xN]: _tIa,
      },
    ],
    [
      4,
      {
        [_eQN]: `StartTime`,
        [_xN]: _sT,
      },
    ],
    [
      4,
      {
        [_eQN]: `EndTime`,
        [_xN]: _eTn,
      },
    ],
    [
      1,
      {
        [_eQN]: `NumberOfAccounts`,
        [_xN]: _nOA,
      },
    ],
    [
      1,
      {
        [_eQN]: `NumberOfFailedAccounts`,
        [_xN]: _nOFA,
      },
    ],
    [
      () => AttributeSummaryList,
      {
        [_eQN]: `AttributeSummarySet`,
        [_xN]: _aSSt,
      },
    ],
  ]
);
export var RegionalSummary = struct(
  n0,
  _RSeg,
  0,
  [_RN, _NOMA, _NOUA],
  [
    [
      0,
      {
        [_eQN]: `RegionName`,
        [_xN]: _rNe,
      },
    ],
    [
      1,
      {
        [_eQN]: `NumberOfMatchedAccounts`,
        [_xN]: _nOMA,
      },
    ],
    [
      1,
      {
        [_eQN]: `NumberOfUnmatchedAccounts`,
        [_xN]: _nOUA,
      },
    ],
  ]
);
export var AttributeSummaryList = list(n0, _ASLt, 0, [
  () => AttributeSummary,
  {
    [_xN]: _it,
  },
]);
export var RegionalSummaryList = list(n0, _RSL, 0, [
  () => RegionalSummary,
  {
    [_xN]: _it,
  },
]);
export var CancelDeclarativePoliciesReport = op(
  n0,
  _CDPR,
  0,
  () => CancelDeclarativePoliciesReportRequest,
  () => CancelDeclarativePoliciesReportResult
);
export var GetDeclarativePoliciesReportSummary = op(
  n0,
  _GDPRS,
  0,
  () => GetDeclarativePoliciesReportSummaryRequest,
  () => GetDeclarativePoliciesReportSummaryResult
);
