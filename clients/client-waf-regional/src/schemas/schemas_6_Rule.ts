// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  WAFBadRequestException as __WAFBadRequestException,
  WAFTagOperationException as __WAFTagOperationException,
  WAFTagOperationInternalErrorException as __WAFTagOperationInternalErrorException,
} from "../models/index";
import {
  _c,
  _CR,
  _CRBR,
  _CRBRR,
  _CRBRRr,
  _CRG,
  _CRGR,
  _CRGRr,
  _CRR,
  _CRRr,
  _CT,
  _CWACL,
  _CWACLR,
  _CWACLRr,
  _DA,
  _DR,
  _DRBR,
  _DRBRR,
  _DRBRRe,
  _DRG,
  _DRGR,
  _DRGRe,
  _DRR,
  _DRRe,
  _DWACL,
  _DWACLR,
  _DWACLRe,
  _e,
  _K,
  _L,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _MN,
  _N,
  _NM,
  _R,
  _RARN,
  _RG,
  _RGI,
  _RI,
  _RK,
  _RL,
  _s,
  _Ta,
  _Tag,
  _TIFR,
  _TK,
  _TL,
  _TR,
  _TRR,
  _TRRa,
  _UR,
  _URR,
  _URRn,
  _V,
  _WACL,
  _WACLI,
  _WAFBRE,
  _WAFTOE,
  _WAFTOIEE,
  n0,
} from "./schemas_0";
import { RateBasedRule, Rule, RuleGroup, WebACL } from "./schemas_1_Rule";
import { WafAction } from "./schemas_14_WebACL";

/* eslint no-var: 0 */

export var CreateRateBasedRuleRequest = struct(
  n0,
  _CRBRR,
  0,
  [_N, _MN, _RK, _RL, _CT, _Ta],
  [0, 0, 0, 1, 0, () => TagList]
);
export var CreateRateBasedRuleResponse = struct(n0, _CRBRRr, 0, [_R, _CT], [() => RateBasedRule, 0]);
export var CreateRuleGroupRequest = struct(n0, _CRGR, 0, [_N, _MN, _CT, _Ta], [0, 0, 0, () => TagList]);
export var CreateRuleGroupResponse = struct(n0, _CRGRr, 0, [_RG, _CT], [() => RuleGroup, 0]);
export var CreateRuleRequest = struct(n0, _CRR, 0, [_N, _MN, _CT, _Ta], [0, 0, 0, () => TagList]);
export var CreateRuleResponse = struct(n0, _CRRr, 0, [_R, _CT], [() => Rule, 0]);
export var CreateWebACLRequest = struct(
  n0,
  _CWACLR,
  0,
  [_N, _MN, _DA, _CT, _Ta],
  [0, 0, () => WafAction, 0, () => TagList]
);
export var CreateWebACLResponse = struct(n0, _CWACLRr, 0, [_WACL, _CT], [() => WebACL, 0]);
export var DeleteRateBasedRuleRequest = struct(n0, _DRBRR, 0, [_RI, _CT], [0, 0]);
export var DeleteRateBasedRuleResponse = struct(n0, _DRBRRe, 0, [_CT], [0]);
export var DeleteRuleGroupRequest = struct(n0, _DRGR, 0, [_RGI, _CT], [0, 0]);
export var DeleteRuleGroupResponse = struct(n0, _DRGRe, 0, [_CT], [0]);
export var DeleteRuleRequest = struct(n0, _DRR, 0, [_RI, _CT], [0, 0]);
export var DeleteRuleResponse = struct(n0, _DRRe, 0, [_CT], [0]);
export var DeleteWebACLRequest = struct(n0, _DWACLR, 0, [_WACLI, _CT], [0, 0]);
export var DeleteWebACLResponse = struct(n0, _DWACLRe, 0, [_CT], [0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_NM, _L, _RARN], [0, 1, 0]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_NM, _TIFR], [0, () => TagInfoForResource]);
export var Tag = struct(n0, _Tag, 0, [_K, _V], [0, 0]);
export var TagInfoForResource = struct(n0, _TIFR, 0, [_RARN, _TL], [0, () => TagList]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_RARN, _Ta], [0, () => TagList]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(n0, _URR, 0, [_RARN, _TK], [0, 64 | 0]);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var WAFBadRequestException = error(
  n0,
  _WAFBRE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WAFBadRequestException
);
export var WAFTagOperationException = error(
  n0,
  _WAFTOE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WAFTagOperationException
);
export var WAFTagOperationInternalErrorException = error(
  n0,
  _WAFTOIEE,
  {
    [_e]: _s,
  },
  [_m],
  [0],

  __WAFTagOperationInternalErrorException
);
export var TagKeyList = 64 | 0;

export var TagList = list(n0, _TL, 0, () => Tag);
export var CreateRateBasedRule = op(
  n0,
  _CRBR,
  0,
  () => CreateRateBasedRuleRequest,
  () => CreateRateBasedRuleResponse
);
export var CreateRule = op(
  n0,
  _CR,
  0,
  () => CreateRuleRequest,
  () => CreateRuleResponse
);
export var CreateRuleGroup = op(
  n0,
  _CRG,
  0,
  () => CreateRuleGroupRequest,
  () => CreateRuleGroupResponse
);
export var CreateWebACL = op(
  n0,
  _CWACL,
  0,
  () => CreateWebACLRequest,
  () => CreateWebACLResponse
);
export var DeleteRateBasedRule = op(
  n0,
  _DRBR,
  0,
  () => DeleteRateBasedRuleRequest,
  () => DeleteRateBasedRuleResponse
);
export var DeleteRule = op(
  n0,
  _DR,
  0,
  () => DeleteRuleRequest,
  () => DeleteRuleResponse
);
export var DeleteRuleGroup = op(
  n0,
  _DRG,
  0,
  () => DeleteRuleGroupRequest,
  () => DeleteRuleGroupResponse
);
export var DeleteWebACL = op(
  n0,
  _DWACL,
  0,
  () => DeleteWebACLRequest,
  () => DeleteWebACLResponse
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
  _TR,
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
