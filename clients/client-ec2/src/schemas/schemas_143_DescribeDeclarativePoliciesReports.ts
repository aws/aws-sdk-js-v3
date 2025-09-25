// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DDPR,
  _DDPRR,
  _DDPRRe,
  _DPRec,
  _DPRL,
  _DR,
  _eQN,
  _eTn,
  _ETnd,
  _it,
  _MR,
  _NTe,
  _nTe,
  _Rep,
  _RI,
  _rI,
  _RIep,
  _rSe,
  _SB,
  _sB,
  _SP,
  _sP,
  _ST,
  _sT,
  _Sta,
  _sta,
  _T,
  _TIa,
  _tIa,
  _tS,
  _xN,
  n0,
  TagList,
  ValueStringList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeclarativePoliciesReport = struct(
  n0,
  _DPRec,
  0,
  [_RI, _SB, _SP, _TIa, _ST, _ETnd, _Sta, _T],
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
      0,
      {
        [_eQN]: `Status`,
        [_xN]: _sta,
      },
    ],
    [
      () => TagList,
      {
        [_eQN]: `TagSet`,
        [_xN]: _tS,
      },
    ],
  ]
);
export var DescribeDeclarativePoliciesReportsRequest = struct(
  n0,
  _DDPRR,
  0,
  [_DR, _NTe, _MR, _RIep],
  [
    2,
    0,
    1,
    [
      () => ValueStringList,
      {
        [_xN]: _RI,
      },
    ],
  ]
);
export var DescribeDeclarativePoliciesReportsResult = struct(
  n0,
  _DDPRRe,
  0,
  [_NTe, _Rep],
  [
    [
      0,
      {
        [_eQN]: `NextToken`,
        [_xN]: _nTe,
      },
    ],
    [
      () => DeclarativePoliciesReportList,
      {
        [_eQN]: `ReportSet`,
        [_xN]: _rSe,
      },
    ],
  ]
);
export var DeclarativePoliciesReportList = list(n0, _DPRL, 0, [
  () => DeclarativePoliciesReport,
  {
    [_xN]: _it,
  },
]);
export var DescribeDeclarativePoliciesReports = op(
  n0,
  _DDPR,
  0,
  () => DescribeDeclarativePoliciesReportsRequest,
  () => DescribeDeclarativePoliciesReportsResult
);
