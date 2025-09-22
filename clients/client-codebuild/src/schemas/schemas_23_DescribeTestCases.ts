// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _dINS,
  _DTC,
  _DTCI,
  _DTCO,
  _ex,
  _fi,
  _ke,
  _m,
  _mR,
  _na,
  _nT,
  _pre,
  _rAep,
  _st,
  _TC,
  _tC,
  _TCe,
  _TCF,
  _tRDP,
  _tSN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTestCasesInput = struct(n0, _DTCI, 0, [_rAep, _nT, _mR, _fi], [0, 0, 1, () => TestCaseFilter]);
export var DescribeTestCasesOutput = struct(n0, _DTCO, 0, [_nT, _tC], [0, () => TestCases]);
export var TestCase = struct(
  n0,
  _TC,
  0,
  [_rAep, _tRDP, _pre, _na, _st, _dINS, _m, _ex, _tSN],
  [0, 0, 0, 0, 0, 1, 0, 4, 0]
);
export var TestCaseFilter = struct(n0, _TCF, 0, [_st, _ke], [0, 0]);
export var TestCases = list(n0, _TCe, 0, () => TestCase);
export var DescribeTestCases = op(
  n0,
  _DTC,
  0,
  () => DescribeTestCasesInput,
  () => DescribeTestCasesOutput
);
