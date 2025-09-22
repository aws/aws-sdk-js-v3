// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { WAFSubscriptionNotFoundException as __WAFSubscriptionNotFoundException } from "../models/index";
import {
  _A,
  _AR,
  _ARc,
  _c,
  _CT,
  _DA,
  _e,
  _ER,
  _ERx,
  _L,
  _LARIRG,
  _LARIRGR,
  _LARIRGRi,
  _m,
  _NM,
  _OA,
  _P,
  _RGI,
  _RGU,
  _RGUu,
  _RI,
  _T,
  _U,
  _URG,
  _URGR,
  _URGRp,
  _UWACL,
  _UWACLR,
  _UWACLRp,
  _WA,
  _WACLI,
  _WACLU,
  _WACLUe,
  _WAFSNFE,
  _WOA,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivatedRule = struct(
  n0,
  _AR,
  0,
  [_P, _RI, _A, _OA, _T, _ER],
  [1, 0, () => WafAction, () => WafOverrideAction, 0, () => ExcludedRules]
);
export var ExcludedRule = struct(n0, _ERx, 0, [_RI], [0]);
export var ListActivatedRulesInRuleGroupRequest = struct(n0, _LARIRGR, 0, [_RGI, _NM, _L], [0, 0, 1]);
export var ListActivatedRulesInRuleGroupResponse = struct(n0, _LARIRGRi, 0, [_NM, _ARc], [0, () => ActivatedRules]);
export var RuleGroupUpdate = struct(n0, _RGU, 0, [_A, _AR], [0, () => ActivatedRule]);
export var UpdateRuleGroupRequest = struct(n0, _URGR, 0, [_RGI, _U, _CT], [0, () => RuleGroupUpdates, 0]);
export var UpdateRuleGroupResponse = struct(n0, _URGRp, 0, [_CT], [0]);
export var UpdateWebACLRequest = struct(
  n0,
  _UWACLR,
  0,
  [_WACLI, _CT, _U, _DA],
  [0, 0, () => WebACLUpdates, () => WafAction]
);
export var UpdateWebACLResponse = struct(n0, _UWACLRp, 0, [_CT], [0]);
export var WafAction = struct(n0, _WA, 0, [_T], [0]);
export var WafOverrideAction = struct(n0, _WOA, 0, [_T], [0]);
export var WAFSubscriptionNotFoundException = error(
  n0,
  _WAFSNFE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __WAFSubscriptionNotFoundException
);
export var WebACLUpdate = struct(n0, _WACLU, 0, [_A, _AR], [0, () => ActivatedRule]);
export var ActivatedRules = list(n0, _ARc, 0, () => ActivatedRule);
export var ExcludedRules = list(n0, _ER, 0, () => ExcludedRule);
export var RuleGroupUpdates = list(n0, _RGUu, 0, () => RuleGroupUpdate);
export var WebACLUpdates = list(n0, _WACLUe, 0, () => WebACLUpdate);
export var ListActivatedRulesInRuleGroup = op(
  n0,
  _LARIRG,
  0,
  () => ListActivatedRulesInRuleGroupRequest,
  () => ListActivatedRulesInRuleGroupResponse
);
export var UpdateRuleGroup = op(
  n0,
  _URG,
  0,
  () => UpdateRuleGroupRequest,
  () => UpdateRuleGroupResponse
);
export var UpdateWebACL = op(
  n0,
  _UWACL,
  0,
  () => UpdateWebACLRequest,
  () => UpdateWebACLResponse
);
