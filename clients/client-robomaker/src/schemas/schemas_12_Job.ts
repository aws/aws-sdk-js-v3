// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _BDW,
  _BDWR,
  _BDWRa,
  _cA,
  _cRT,
  _DWGJ,
  _DWGJR,
  _DWGJRe,
  _fa,
  _fC,
  _fCa,
  _fCi,
  _fR,
  _FS,
  _fS,
  _FWS,
  _fWS,
  _h,
  _jo,
  _s,
  _sFR,
  _sW,
  _t,
  _te,
  _tFC,
  _uW,
  _w,
  _wC,
  _WF,
  _WFo,
  _wT,
  n0,
} from "./schemas_0";
import { WorldCount } from "./schemas_7_Generation";

/* eslint no-var: 0 */

export var BatchDeleteWorldsRequest = struct(n0, _BDWR, 0, [_w], [64 | 0]);
export var BatchDeleteWorldsResponse = struct(n0, _BDWRa, 0, [_uW], [64 | 0]);
export var DescribeWorldGenerationJobRequest = struct(n0, _DWGJR, 0, [_jo], [0]);
export var DescribeWorldGenerationJobResponse = struct(
  n0,
  _DWGJRe,
  0,
  [_a, _s, _cA, _fC, _fR, _cRT, _te, _wC, _fWS, _t, _wT],
  [0, 0, 4, 0, 0, 0, 0, () => WorldCount, () => FinishedWorldsSummary, 128 | 0, 128 | 0]
);
export var FailureSummary = struct(n0, _FS, 0, [_tFC, _fa], [1, () => WorldFailures]);
export var FinishedWorldsSummary = struct(n0, _FWS, 0, [_fCi, _sW, _fS], [1, 64 | 0, () => FailureSummary]);
export var WorldFailure = struct(n0, _WF, 0, [_fC, _sFR, _fCa], [0, 0, 1]);
export var Arns = 64 | 0;

export var WorldFailures = list(n0, _WFo, 0, () => WorldFailure);
export var BatchDeleteWorlds = op(
  n0,
  _BDW,
  {
    [_h]: ["POST", "/batchDeleteWorlds", 200],
  },
  () => BatchDeleteWorldsRequest,
  () => BatchDeleteWorldsResponse
);
export var DescribeWorldGenerationJob = op(
  n0,
  _DWGJ,
  {
    [_h]: ["POST", "/describeWorldGenerationJob", 200],
  },
  () => DescribeWorldGenerationJobRequest,
  () => DescribeWorldGenerationJobResponse
);
