// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _APR,
  _APRI,
  _APRO,
  _CPP,
  _CPPI,
  _CPPO,
  _CTl,
  _D,
  _DPP,
  _DPPI,
  _DPPO,
  _DPRi,
  _DPRIi,
  _DPROi,
  _h,
  _hH,
  _iT,
  _N,
  _PPD,
  _PPN,
  _PRA,
  _T,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var PricingPlanDescription = sim(n0, _PPD, 0, 8);
export var PricingPlanName = sim(n0, _PPN, 0, 8);
export var AssociatePricingRulesInput = struct(n0, _APRI, 0, [_A, _PRA], [0, 64 | 0]);
export var AssociatePricingRulesOutput = struct(n0, _APRO, 0, [_A], [0]);
export var CreatePricingPlanInput = struct(
  n0,
  _CPPI,
  0,
  [_CTl, _N, _D, _PRA, _T],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [() => PricingPlanName, 0],
    [() => PricingPlanDescription, 0],
    64 | 0,
    128 | 0,
  ]
);
export var CreatePricingPlanOutput = struct(n0, _CPPO, 0, [_A], [0]);
export var DeletePricingPlanInput = struct(n0, _DPPI, 0, [_A], [0]);
export var DeletePricingPlanOutput = struct(n0, _DPPO, 0, [_A], [0]);
export var DisassociatePricingRulesInput = struct(n0, _DPRIi, 0, [_A, _PRA], [0, 64 | 0]);
export var DisassociatePricingRulesOutput = struct(n0, _DPROi, 0, [_A], [0]);
export var PricingRuleArnsInput = 64 | 0;

export var PricingRuleArnsNonEmptyInput = 64 | 0;

export var AssociatePricingRules = op(
  n0,
  _APR,
  {
    [_h]: ["PUT", "/associate-pricing-rules", 200],
  },
  () => AssociatePricingRulesInput,
  () => AssociatePricingRulesOutput
);
export var CreatePricingPlan = op(
  n0,
  _CPP,
  {
    [_h]: ["POST", "/create-pricing-plan", 200],
  },
  () => CreatePricingPlanInput,
  () => CreatePricingPlanOutput
);
export var DeletePricingPlan = op(
  n0,
  _DPP,
  {
    [_h]: ["POST", "/delete-pricing-plan", 200],
  },
  () => DeletePricingPlanInput,
  () => DeletePricingPlanOutput
);
export var DisassociatePricingRules = op(
  n0,
  _DPRi,
  {
    [_h]: ["PUT", "/disassociate-pricing-rules", 200],
  },
  () => DisassociatePricingRulesInput,
  () => DisassociatePricingRulesOutput
);
