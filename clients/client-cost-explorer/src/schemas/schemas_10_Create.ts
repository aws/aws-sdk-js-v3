// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { TooManyTagsException as __TooManyTagsException } from "../models/index";
import {
  _ASnom,
  _c,
  _CAS,
  _CASR,
  _CASRr,
  _CCA,
  _CCCD,
  _CCCDR,
  _CCCDRr,
  _DVe,
  _e,
  _ES,
  _hE,
  _K,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _M,
  _N,
  _R,
  _RAe,
  _RN,
  _RT,
  _RTe,
  _RTK,
  _RTL,
  _RV,
  _SA,
  _SCR,
  _TMTE,
  _TRa,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _Va,
  n0,
} from "./schemas_0";
import { AnomalySubscription } from "./schemas_6_Anomaly";
import { CostCategoryRulesList, CostCategorySplitChargeRulesList } from "./schemas_7_Cost";

/* eslint no-var: 0 */

export var CreateAnomalySubscriptionRequest = struct(
  n0,
  _CASR,
  0,
  [_ASnom, _RT],
  [() => AnomalySubscription, () => ResourceTagList]
);
export var CreateAnomalySubscriptionResponse = struct(n0, _CASRr, 0, [_SA], [0]);
export var CreateCostCategoryDefinitionRequest = struct(
  n0,
  _CCCDR,
  0,
  [_N, _ES, _RV, _R, _DVe, _SCR, _RT],
  [0, 0, 0, () => CostCategoryRulesList, 0, () => CostCategorySplitChargeRulesList, () => ResourceTagList]
);
export var CreateCostCategoryDefinitionResponse = struct(n0, _CCCDRr, 0, [_CCA, _ES], [0, 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_RAe], [0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_RT], [() => ResourceTagList]);
export var ResourceTag = struct(n0, _RTe, 0, [_K, _Va], [0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RAe, _RT], [0, () => ResourceTagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TooManyTagsException = error(
  n0,
  _TMTE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_M, _RN],
  [0, 0],

  __TooManyTagsException
);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RAe, _RTK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList = list(n0, _RTL, 0, () => ResourceTag);
export var CreateAnomalySubscription = op(
  n0,
  _CAS,
  0,
  () => CreateAnomalySubscriptionRequest,
  () => CreateAnomalySubscriptionResponse
);
export var CreateCostCategoryDefinition = op(
  n0,
  _CCCD,
  0,
  () => CreateCostCategoryDefinitionRequest,
  () => CreateCostCategoryDefinitionResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TRa,
  0,
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  0,
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
