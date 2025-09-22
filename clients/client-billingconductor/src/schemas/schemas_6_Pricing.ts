// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _BE,
  _CFTC,
  _CPR,
  _CPRI,
  _CPRO,
  _CTI,
  _CTl,
  _D,
  _DPR,
  _DPRI,
  _DPRO,
  _FT,
  _h,
  _hH,
  _iT,
  _MPo,
  _N,
  _O,
  _PRD,
  _PRN,
  _Sc,
  _Se,
  _T,
  _Ti,
  _Ty,
  _UT,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PricingRuleDescription = sim(n0, _PRD, 0, 8);
export var PricingRuleName = sim(n0, _PRN, 0, 8);
export var CreateFreeTierConfig = struct(n0, _CFTC, 0, [_Ac], [2]);
export var CreatePricingRuleInput = struct(
  n0,
  _CPRI,
  0,
  [_CTl, _N, _D, _Sc, _Ty, _MPo, _Se, _T, _BE, _Ti, _UT, _O],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [() => PricingRuleName, 0],
    [() => PricingRuleDescription, 0],
    0,
    0,
    1,
    0,
    128 | 0,
    0,
    () => CreateTieringInput,
    0,
    0,
  ]
);
export var CreatePricingRuleOutput = struct(n0, _CPRO, 0, [_A], [0]);
export var CreateTieringInput = struct(n0, _CTI, 0, [_FT], [() => CreateFreeTierConfig]);
export var DeletePricingRuleInput = struct(n0, _DPRI, 0, [_A], [0]);
export var DeletePricingRuleOutput = struct(n0, _DPRO, 0, [_A], [0]);
export var CreatePricingRule = op(
  n0,
  _CPR,
  {
    [_h]: ["POST", "/create-pricing-rule", 200],
  },
  () => CreatePricingRuleInput,
  () => CreatePricingRuleOutput
);
export var DeletePricingRule = op(
  n0,
  _DPR,
  {
    [_h]: ["POST", "/delete-pricing-rule", 200],
  },
  () => DeletePricingRuleInput,
  () => DeletePricingRuleOutput
);
