// smithy-typescript generated code
import { map, op, struct } from "@smithy/core/schema";

import {
  _am,
  _BECSi,
  _bI,
  _CA,
  _cAr,
  _CD,
  _cS,
  _cu,
  _eA,
  _eCs,
  _fM,
  _GBE,
  _GBER,
  _GBERe,
  _hC,
  _i,
  _ide,
  _n,
  _s,
  _sCD,
  _SCDM,
  _tCD,
  _UBE,
  _UBER,
  _UBERp,
  BillInterval,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BillEstimateCostSummary = struct(
  n0,
  _BECSi,
  0,
  [_tCD, _sCD],
  [() => CostDifference, () => ServiceCostDifferenceMap]
);
export var CostAmount = struct(n0, _CA, 0, [_am, _cu], [1, 0]);
export var CostDifference = struct(n0, _CD, 0, [_hC, _eCs], [() => CostAmount, () => CostAmount]);
export var GetBillEstimateRequest = struct(n0, _GBER, 0, [_ide], [0]);
export var GetBillEstimateResponse = struct(
  n0,
  _GBERe,
  0,
  [_i, _n, _s, _fM, _bI, _cS, _cAr, _eA],
  [0, 0, 0, 0, () => BillInterval, () => BillEstimateCostSummary, 4, 4]
);
export var UpdateBillEstimateRequest = struct(n0, _UBER, 0, [_ide, _n, _eA], [0, 0, 4]);
export var UpdateBillEstimateResponse = struct(
  n0,
  _UBERp,
  0,
  [_i, _n, _s, _fM, _bI, _cS, _cAr, _eA],
  [0, 0, 0, 0, () => BillInterval, () => BillEstimateCostSummary, 4, 4]
);
export var ServiceCostDifferenceMap = map(n0, _SCDM, 0, 0, () => CostDifference);
export var GetBillEstimate = op(
  n0,
  _GBE,
  0,
  () => GetBillEstimateRequest,
  () => GetBillEstimateResponse
);
export var UpdateBillEstimate = op(
  n0,
  _UBE,
  2,
  () => UpdateBillEstimateRequest,
  () => UpdateBillEstimateResponse
);
