// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cAr,
  _cC,
  _eA,
  _fM,
  _GWE,
  _GWER,
  _GWERe,
  _i,
  _ide,
  _n,
  _rTa,
  _rTat,
  _s,
  _tC,
  _UWE,
  _UWER,
  _UWERp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetWorkloadEstimateRequest = struct(n0, _GWER, 0, [_ide], [0]);
export var GetWorkloadEstimateResponse = struct(
  n0,
  _GWERe,
  0,
  [_i, _n, _cAr, _eA, _rTa, _rTat, _s, _tC, _cC, _fM],
  [0, 0, 4, 4, 0, 4, 0, 1, 0, 0]
);
export var UpdateWorkloadEstimateRequest = struct(n0, _UWER, 0, [_ide, _n, _eA], [0, 0, 4]);
export var UpdateWorkloadEstimateResponse = struct(
  n0,
  _UWERp,
  0,
  [_i, _n, _cAr, _eA, _rTa, _rTat, _s, _tC, _cC, _fM],
  [0, 0, 4, 4, 0, 4, 0, 1, 0, 0]
);
export var GetWorkloadEstimate = op(
  n0,
  _GWE,
  0,
  () => GetWorkloadEstimateRequest,
  () => GetWorkloadEstimateResponse
);
export var UpdateWorkloadEstimate = op(
  n0,
  _UWE,
  2,
  () => UpdateWorkloadEstimateRequest,
  () => UpdateWorkloadEstimateResponse
);
