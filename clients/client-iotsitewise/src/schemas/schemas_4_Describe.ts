// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aT,
  _DEes,
  _DER,
  _DERe,
  _eDx,
  _eET,
  _eEV,
  _eIx,
  _end,
  _eR,
  _ES,
  _eS,
  _eST,
  _ESx,
  _eSx,
  _ESxe,
  _hQ,
  _ht,
  _LE,
  _LER,
  _LERi,
  _mR,
  _nT,
  _rT,
  _rTRI,
  _rTRT,
  _st,
  _tR,
  _tRI,
  _tRT,
  _tRV,
  n0,
} from "./schemas_0";
import { ResolveTo, TargetResource } from "./schemas_17_Describe";

/* eslint no-var: 0 */

export var DescribeExecutionRequest = struct(n0, _DER, 0, [_eIx], [[0, 1]]);
export var DescribeExecutionResponse = struct(
  n0,
  _DERe,
  0,
  [_eIx, _aT, _tR, _tRV, _rT, _eST, _eET, _eS, _eR, _eDx, _eEV],
  [0, 0, () => TargetResource, 0, () => ResolveTo, 4, 4, () => ExecutionStatus, 128 | 0, 128 | 0, 0]
);
export var ExecutionStatus = struct(n0, _ES, 0, [_st], [0]);
export var ExecutionSummary = struct(
  n0,
  _ESx,
  0,
  [_eIx, _aT, _tR, _tRV, _rT, _eST, _eET, _eS, _eEV],
  [0, 0, () => TargetResource, 0, () => ResolveTo, 4, 4, () => ExecutionStatus, 0]
);
export var ListExecutionsRequest = struct(
  n0,
  _LER,
  0,
  [_tRT, _tRI, _rTRT, _rTRI, _nT, _mR, _aT],
  [
    [
      0,
      {
        [_hQ]: _tRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _tRI,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTRT,
      },
    ],
    [
      0,
      {
        [_hQ]: _rTRI,
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
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _aT,
      },
    ],
  ]
);
export var ListExecutionsResponse = struct(n0, _LERi, 0, [_eSx, _nT], [() => ExecutionSummaries, 0]);
export var ExecutionSummaries = list(n0, _ESxe, 0, () => ExecutionSummary);
export var ExecutionDetails = 128 | 0;

export var ExecutionResult = 128 | 0;

export var DescribeExecution = op(
  n0,
  _DEes,
  {
    [_ht]: ["GET", "/executions/{executionId}", 200],
    [_end]: ["api."],
  },
  () => DescribeExecutionRequest,
  () => DescribeExecutionResponse
);
export var ListExecutions = op(
  n0,
  _LE,
  {
    [_ht]: ["GET", "/executions", 200],
    [_end]: ["api."],
  },
  () => ListExecutionsRequest,
  () => ListExecutionsResponse
);
