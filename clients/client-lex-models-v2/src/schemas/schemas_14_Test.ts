// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aM,
  _bAI,
  _bAT,
  _BATET,
  _bI,
  _cDT,
  _DTE,
  _DTER,
  _DTERe,
  _fR,
  _h,
  _lI,
  _LTE,
  _LTER,
  _LTERi,
  _lUDT,
  _mRax,
  _nTe,
  _or,
  _sBo,
  _STE,
  _STER,
  _STERt,
  _tar,
  _tE,
  _tEI,
  _tEM,
  _TES,
  _tES,
  _TESB,
  _TESL,
  _TET,
  _tSI,
  _tSN,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BotAliasTestExecutionTarget = struct(n0, _BATET, 0, [_bI, _bAI, _lI], [0, 0, 0]);
export var DescribeTestExecutionRequest = struct(n0, _DTER, 0, [_tEI], [[0, 1]]);
export var DescribeTestExecutionResponse = struct(
  n0,
  _DTERe,
  0,
  [_tEI, _cDT, _lUDT, _tES, _tSI, _tSN, _tar, _aM, _tEM, _fR],
  [0, 4, 4, 0, 0, 0, () => TestExecutionTarget, 0, 0, 64 | 0]
);
export var ListTestExecutionsRequest = struct(n0, _LTER, 0, [_sBo, _mRax, _nTe], [() => TestExecutionSortBy, 1, 0]);
export var ListTestExecutionsResponse = struct(n0, _LTERi, 0, [_tE, _nTe], [() => TestExecutionSummaryList, 0]);
export var StartTestExecutionRequest = struct(
  n0,
  _STER,
  0,
  [_tSI, _tar, _aM, _tEM],
  [[0, 1], () => TestExecutionTarget, 0, 0]
);
export var StartTestExecutionResponse = struct(
  n0,
  _STERt,
  0,
  [_tEI, _cDT, _tSI, _tar, _aM, _tEM],
  [0, 4, 0, () => TestExecutionTarget, 0, 0]
);
export var TestExecutionSortBy = struct(n0, _TESB, 0, [_a, _or], [0, 0]);
export var TestExecutionSummary = struct(
  n0,
  _TES,
  0,
  [_tEI, _cDT, _lUDT, _tES, _tSI, _tSN, _tar, _aM, _tEM],
  [0, 4, 4, 0, 0, 0, () => TestExecutionTarget, 0, 0]
);
export var TestExecutionTarget = struct(n0, _TET, 0, [_bAT], [() => BotAliasTestExecutionTarget]);
export var TestExecutionSummaryList = list(n0, _TESL, 0, () => TestExecutionSummary);
export var DescribeTestExecution = op(
  n0,
  _DTE,
  {
    [_h]: ["GET", "/testexecutions/{testExecutionId}", 200],
  },
  () => DescribeTestExecutionRequest,
  () => DescribeTestExecutionResponse
);
export var ListTestExecutions = op(
  n0,
  _LTE,
  {
    [_h]: ["POST", "/testexecutions", 200],
  },
  () => ListTestExecutionsRequest,
  () => ListTestExecutionsResponse
);
export var StartTestExecution = op(
  n0,
  _STE,
  {
    [_h]: ["POST", "/testsets/{testSetId}/testexecutions", 202],
  },
  () => StartTestExecutionRequest,
  () => StartTestExecutionResponse
);
