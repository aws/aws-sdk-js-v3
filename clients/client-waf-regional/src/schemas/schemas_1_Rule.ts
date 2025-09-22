// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DA,
  _GR,
  _GRBR,
  _GRBRR,
  _GRBRRe,
  _GRG,
  _GRGR,
  _GRGRe,
  _GRR,
  _GRRe,
  _GWACL,
  _GWACLR,
  _GWACLRe,
  _L,
  _LSRG,
  _LSRGR,
  _LSRGRi,
  _MN,
  _MP,
  _N,
  _NM,
  _Pre,
  _R,
  _RBR,
  _RG,
  _RGI,
  _RGu,
  _RI,
  _RK,
  _RL,
  _Ru,
  _SRGS,
  _SRGSu,
  _WACL,
  _WACLA,
  _WACLI,
  n0,
} from "./schemas_0";
import { ActivatedRules, WafAction } from "./schemas_14_WebACL";
import { Predicate } from "./schemas_31_Rule";

/* eslint no-var: 0 */

export var GetRateBasedRuleRequest = struct(n0, _GRBRR, 0, [_RI], [0]);
export var GetRateBasedRuleResponse = struct(n0, _GRBRRe, 0, [_R], [() => RateBasedRule]);
export var GetRuleGroupRequest = struct(n0, _GRGR, 0, [_RGI], [0]);
export var GetRuleGroupResponse = struct(n0, _GRGRe, 0, [_RG], [() => RuleGroup]);
export var GetRuleRequest = struct(n0, _GRR, 0, [_RI], [0]);
export var GetRuleResponse = struct(n0, _GRRe, 0, [_R], [() => Rule]);
export var GetWebACLRequest = struct(n0, _GWACLR, 0, [_WACLI], [0]);
export var GetWebACLResponse = struct(n0, _GWACLRe, 0, [_WACL], [() => WebACL]);
export var ListSubscribedRuleGroupsRequest = struct(n0, _LSRGR, 0, [_NM, _L], [0, 1]);
export var ListSubscribedRuleGroupsResponse = struct(
  n0,
  _LSRGRi,
  0,
  [_NM, _RGu],
  [0, () => SubscribedRuleGroupSummaries]
);
export var RateBasedRule = struct(n0, _RBR, 0, [_RI, _N, _MN, _MP, _RK, _RL], [0, 0, 0, () => Predicates, 0, 1]);
export var Rule = struct(n0, _R, 0, [_RI, _N, _MN, _Pre], [0, 0, 0, () => Predicates]);
export var RuleGroup = struct(n0, _RG, 0, [_RGI, _N, _MN], [0, 0, 0]);
export var SubscribedRuleGroupSummary = struct(n0, _SRGS, 0, [_RGI, _N, _MN], [0, 0, 0]);
export var WebACL = struct(
  n0,
  _WACL,
  0,
  [_WACLI, _N, _MN, _DA, _Ru, _WACLA],
  [0, 0, 0, () => WafAction, () => ActivatedRules, 0]
);
export var Predicates = list(n0, _Pre, 0, () => Predicate);
export var SubscribedRuleGroupSummaries = list(n0, _SRGSu, 0, () => SubscribedRuleGroupSummary);
export var GetRateBasedRule = op(
  n0,
  _GRBR,
  0,
  () => GetRateBasedRuleRequest,
  () => GetRateBasedRuleResponse
);
export var GetRule = op(
  n0,
  _GR,
  0,
  () => GetRuleRequest,
  () => GetRuleResponse
);
export var GetRuleGroup = op(
  n0,
  _GRG,
  0,
  () => GetRuleGroupRequest,
  () => GetRuleGroupResponse
);
export var GetWebACL = op(
  n0,
  _GWACL,
  0,
  () => GetWebACLRequest,
  () => GetWebACLResponse
);
export var ListSubscribedRuleGroups = op(
  n0,
  _LSRG,
  0,
  () => ListSubscribedRuleGroupsRequest,
  () => ListSubscribedRuleGroupsResponse
);
