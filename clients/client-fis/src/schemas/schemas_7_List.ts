// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _d, _h, _hQ, _LTRT, _LTRTR, _LTRTRi, _mR, _nT, _rT, _tRTa, _TRTS, _TRTSL, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListTargetResourceTypesRequest = struct(
  n0,
  _LTRTR,
  0,
  [_mR, _nT],
  [
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListTargetResourceTypesResponse = struct(
  n0,
  _LTRTRi,
  0,
  [_tRTa, _nT],
  [() => TargetResourceTypeSummaryList, 0]
);
export var TargetResourceTypeSummary = struct(n0, _TRTS, 0, [_rT, _d], [0, 0]);
export var TargetResourceTypeSummaryList = list(n0, _TRTSL, 0, () => TargetResourceTypeSummary);
export var ListTargetResourceTypes = op(
  n0,
  _LTRT,
  {
    [_h]: ["GET", "/targetResourceTypes", 200],
  },
  () => ListTargetResourceTypesRequest,
  () => ListTargetResourceTypesResponse
);
