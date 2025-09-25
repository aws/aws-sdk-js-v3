// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _APPC,
  _AS,
  _BE,
  _BGA,
  _BPR,
  _CD,
  _CV,
  _D,
  _F,
  _FT,
  _h,
  _LCLICD,
  _LCLIFCD,
  _LCLIPCD,
  _LIF,
  _LMT,
  _MPo,
  _N,
  _O,
  _P,
  _PV,
  _S,
  _Sc,
  _Se,
  _Ti,
  _Ty,
  _UCLI,
  _UCLICD,
  _UCLIFCD,
  _UCLII,
  _UCLIO,
  _UCLIPCD,
  _UFTC,
  _UPP,
  _UPPI,
  _UPPO,
  _UPR,
  _UPRI,
  _UPRO,
  _UT,
  _UTI,
  n0,
} from "./schemas_0";
import {
  CustomLineItemBillingPeriodRange,
  CustomLineItemDescription,
  CustomLineItemName,
  LineItemFiltersList,
} from "./schemas_2_CustomLine";
import { PricingRuleDescription, PricingRuleName } from "./schemas_6_Pricing";
import { PricingPlanDescription, PricingPlanName } from "./schemas_9_Pricing";

/* eslint no-var: 0 */

export var ListCustomLineItemChargeDetails = struct(
  n0,
  _LCLICD,
  0,
  [_F, _P, _Ty, _LIF],
  [
    () => ListCustomLineItemFlatChargeDetails,
    () => ListCustomLineItemPercentageChargeDetails,
    0,
    () => LineItemFiltersList,
  ]
);
export var ListCustomLineItemFlatChargeDetails = struct(n0, _LCLIFCD, 0, [_CV], [1]);
export var ListCustomLineItemPercentageChargeDetails = struct(n0, _LCLIPCD, 0, [_PV], [1]);
export var UpdateCustomLineItemChargeDetails = struct(
  n0,
  _UCLICD,
  0,
  [_F, _P, _LIF],
  [
    () => UpdateCustomLineItemFlatChargeDetails,
    () => UpdateCustomLineItemPercentageChargeDetails,
    () => LineItemFiltersList,
  ]
);
export var UpdateCustomLineItemFlatChargeDetails = struct(n0, _UCLIFCD, 0, [_CV], [1]);
export var UpdateCustomLineItemInput = struct(
  n0,
  _UCLII,
  0,
  [_A, _N, _D, _CD, _BPR],
  [
    0,
    [() => CustomLineItemName, 0],
    [() => CustomLineItemDescription, 0],
    () => UpdateCustomLineItemChargeDetails,
    () => CustomLineItemBillingPeriodRange,
  ]
);
export var UpdateCustomLineItemOutput = struct(
  n0,
  _UCLIO,
  0,
  [_A, _BGA, _N, _D, _CD, _LMT, _AS],
  [
    0,
    0,
    [() => CustomLineItemName, 0],
    [() => CustomLineItemDescription, 0],
    () => ListCustomLineItemChargeDetails,
    1,
    1,
  ]
);
export var UpdateCustomLineItemPercentageChargeDetails = struct(n0, _UCLIPCD, 0, [_PV], [1]);
export var UpdateFreeTierConfig = struct(n0, _UFTC, 0, [_Ac], [2]);
export var UpdatePricingPlanInput = struct(
  n0,
  _UPPI,
  0,
  [_A, _N, _D],
  [0, [() => PricingPlanName, 0], [() => PricingPlanDescription, 0]]
);
export var UpdatePricingPlanOutput = struct(
  n0,
  _UPPO,
  0,
  [_A, _N, _D, _S, _LMT],
  [0, [() => PricingPlanName, 0], [() => PricingPlanDescription, 0], 1, 1]
);
export var UpdatePricingRuleInput = struct(
  n0,
  _UPRI,
  0,
  [_A, _N, _D, _Ty, _MPo, _Ti],
  [0, [() => PricingRuleName, 0], [() => PricingRuleDescription, 0], 0, 1, () => UpdateTieringInput]
);
export var UpdatePricingRuleOutput = struct(
  n0,
  _UPRO,
  0,
  [_A, _N, _D, _Sc, _Ty, _MPo, _Se, _APPC, _LMT, _BE, _Ti, _UT, _O],
  [
    0,
    [() => PricingRuleName, 0],
    [() => PricingRuleDescription, 0],
    0,
    0,
    1,
    0,
    1,
    1,
    0,
    () => UpdateTieringInput,
    0,
    0,
  ]
);
export var UpdateTieringInput = struct(n0, _UTI, 0, [_FT], [() => UpdateFreeTierConfig]);
export var UpdateCustomLineItem = op(
  n0,
  _UCLI,
  {
    [_h]: ["POST", "/update-custom-line-item", 200],
  },
  () => UpdateCustomLineItemInput,
  () => UpdateCustomLineItemOutput
);
export var UpdatePricingPlan = op(
  n0,
  _UPP,
  {
    [_h]: ["PUT", "/update-pricing-plan", 200],
  },
  () => UpdatePricingPlanInput,
  () => UpdatePricingPlanOutput
);
export var UpdatePricingRule = op(
  n0,
  _UPR,
  {
    [_h]: ["PUT", "/update-pricing-rule", 200],
  },
  () => UpdatePricingRuleInput,
  () => UpdatePricingRuleOutput
);
