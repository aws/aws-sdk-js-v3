// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bI,
  _bSI,
  _cAr,
  _CBE,
  _CBER,
  _CBERr,
  _cS,
  _cT,
  _eA,
  _fM,
  _hH,
  _i,
  _iT,
  _n,
  _s,
  _t,
  _XACT,
  BillInterval,
  n0,
} from "./schemas_0";
import { BillEstimateCostSummary } from "./schemas_5_BillEstimate";

/* eslint no-var: 0 */

export var CreateBillEstimateRequest = struct(
  n0,
  _CBER,
  0,
  [_bSI, _n, _cT, _t],
  [
    0,
    0,
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    128 | 0,
  ]
);
export var CreateBillEstimateResponse = struct(
  n0,
  _CBERr,
  0,
  [_i, _n, _s, _fM, _bI, _cS, _cAr, _eA],
  [0, 0, 0, 0, () => BillInterval, () => BillEstimateCostSummary, 4, 4]
);
export var CreateBillEstimate = op(
  n0,
  _CBE,
  2,
  () => CreateBillEstimateRequest,
  () => CreateBillEstimateResponse
);
