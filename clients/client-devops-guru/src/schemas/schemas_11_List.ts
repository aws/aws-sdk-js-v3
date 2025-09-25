// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CETR,
  _Co,
  _Cos,
  _Cou,
  _ET,
  _GCE,
  _GCER,
  _GCERe,
  _h,
  _hQ,
  _NT,
  _RC,
  _S,
  _SRC,
  _SRCe,
  _ST,
  _Stat,
  _T,
  _TC,
  _TR,
  _UC,
  n0,
} from "./schemas_0";
import { CostEstimationResourceCollectionFilter } from "./schemas_15_Estimation";

/* eslint no-var: 0 */

export var CostEstimationTimeRange = struct(n0, _CETR, 0, [_ST, _ET], [4, 4]);
export var GetCostEstimationRequest = struct(
  n0,
  _GCER,
  0,
  [_NT],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
  ]
);
export var GetCostEstimationResponse = struct(
  n0,
  _GCERe,
  0,
  [_RC, _S, _Co, _TR, _TC, _NT],
  [() => CostEstimationResourceCollectionFilter, 0, () => ServiceResourceCosts, () => CostEstimationTimeRange, 1, 0]
);
export var ServiceResourceCost = struct(n0, _SRC, 0, [_T, _Stat, _Cou, _UC, _Cos], [0, 0, 1, 1, 1]);
export var ServiceResourceCosts = list(n0, _SRCe, 0, () => ServiceResourceCost);
export var GetCostEstimation = op(
  n0,
  _GCE,
  {
    [_h]: ["GET", "/cost-estimation", 200],
  },
  () => GetCostEstimationRequest,
  () => GetCostEstimationResponse
);
