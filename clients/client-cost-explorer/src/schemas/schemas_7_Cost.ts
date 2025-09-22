// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _C,
  _CC,
  _CCA,
  _CCIVD,
  _CCPS,
  _CCPSL,
  _CCRLo,
  _CCRo,
  _CCSCR,
  _CCSCRL,
  _CCSCRP,
  _CCSCRPL,
  _DCCDe,
  _DCCDRes,
  _DCCDResc,
  _DK,
  _DN,
  _DVe,
  _EE,
  _EO,
  _ES,
  _IV,
  _Met,
  _N,
  _P,
  _PS,
  _R,
  _Ru,
  _RV,
  _SCR,
  _So,
  _St,
  _Ta,
  _Ty,
  _UCCD,
  _UCCDR,
  _UCCDRp,
  _V,
  _Va,
  Expression,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CostCategory = struct(
  n0,
  _CC,
  0,
  [_CCA, _ES, _EE, _N, _RV, _R, _SCR, _PS, _DVe],
  [
    0,
    0,
    0,
    0,
    0,
    () => CostCategoryRulesList,
    () => CostCategorySplitChargeRulesList,
    () => CostCategoryProcessingStatusList,
    0,
  ]
);
export var CostCategoryInheritedValueDimension = struct(n0, _CCIVD, 0, [_DN, _DK], [0, 0]);
export var CostCategoryProcessingStatus = struct(n0, _CCPS, 0, [_C, _St], [0, 0]);
export var CostCategoryRule = struct(
  n0,
  _CCRo,
  0,
  [_Va, _Ru, _IV, _Ty],
  [0, () => Expression, () => CostCategoryInheritedValueDimension, 0]
);
export var CostCategorySplitChargeRule = struct(
  n0,
  _CCSCR,
  0,
  [_So, _Ta, _Met, _P],
  [0, 64 | 0, 0, () => CostCategorySplitChargeRuleParametersList]
);
export var CostCategorySplitChargeRuleParameter = struct(n0, _CCSCRP, 0, [_Ty, _V], [0, 64 | 0]);
export var DescribeCostCategoryDefinitionRequest = struct(n0, _DCCDRes, 0, [_CCA, _EO], [0, 0]);
export var DescribeCostCategoryDefinitionResponse = struct(n0, _DCCDResc, 0, [_CC], [() => CostCategory]);
export var UpdateCostCategoryDefinitionRequest = struct(
  n0,
  _UCCDR,
  0,
  [_CCA, _ES, _RV, _R, _DVe, _SCR],
  [0, 0, 0, () => CostCategoryRulesList, 0, () => CostCategorySplitChargeRulesList]
);
export var UpdateCostCategoryDefinitionResponse = struct(n0, _UCCDRp, 0, [_CCA, _ES], [0, 0]);
export var CostCategoryProcessingStatusList = list(n0, _CCPSL, 0, () => CostCategoryProcessingStatus);
export var CostCategoryRulesList = list(n0, _CCRLo, 0, () => CostCategoryRule);
export var CostCategorySplitChargeRuleParametersList = list(
  n0,
  _CCSCRPL,
  0,
  () => CostCategorySplitChargeRuleParameter
);
export var CostCategorySplitChargeRuleParameterValuesList = 64 | 0;

export var CostCategorySplitChargeRulesList = list(n0, _CCSCRL, 0, () => CostCategorySplitChargeRule);
export var CostCategorySplitChargeRuleTargetsList = 64 | 0;

export var CostCategoryValuesList = 64 | 0;

export var DescribeCostCategoryDefinition = op(
  n0,
  _DCCDe,
  0,
  () => DescribeCostCategoryDefinitionRequest,
  () => DescribeCostCategoryDefinitionResponse
);
export var UpdateCostCategoryDefinition = op(
  n0,
  _UCCD,
  0,
  () => UpdateCostCategoryDefinitionRequest,
  () => UpdateCostCategoryDefinitionResponse
);
