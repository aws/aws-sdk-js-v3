// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _bEC,
  _BI,
  _bI,
  _bN,
  _cPP,
  _eDTf,
  _end,
  _GPP,
  _GPPR,
  _GPPRe,
  _h,
  _pM,
  _PP,
  _pPP,
  _pT,
  _uDT,
  _UPP,
  _UPPR,
  _UPPRp,
  _uR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BundleInformation = struct(n0, _BI, 0, [_bN, _pT], [64 | 0, 0]);
export var GetPricingPlanRequest = struct(n0, _GPPR, 0, [], []);
export var GetPricingPlanResponse = struct(n0, _GPPRe, 0, [_cPP, _pPP], [() => PricingPlan, () => PricingPlan]);
export var PricingPlan = struct(
  n0,
  _PP,
  0,
  [_bEC, _bI, _eDTf, _pM, _uDT, _uR],
  [1, () => BundleInformation, 4, 0, 4, 0]
);
export var UpdatePricingPlanRequest = struct(n0, _UPPR, 0, [_pM, _bN], [0, 64 | 0]);
export var UpdatePricingPlanResponse = struct(n0, _UPPRp, 0, [_cPP, _pPP], [() => PricingPlan, () => PricingPlan]);
export var PricingBundles = 64 | 0;

export var GetPricingPlan = op(
  n0,
  _GPP,
  {
    [_h]: ["GET", "/pricingplan", 200],
    [_end]: ["api."],
  },
  () => GetPricingPlanRequest,
  () => GetPricingPlanResponse
);
export var UpdatePricingPlan = op(
  n0,
  _UPP,
  {
    [_h]: ["POST", "/pricingplan", 200],
    [_end]: ["api."],
  },
  () => UpdatePricingPlanRequest,
  () => UpdatePricingPlanResponse
);
