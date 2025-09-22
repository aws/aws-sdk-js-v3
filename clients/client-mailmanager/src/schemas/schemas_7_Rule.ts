// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AA,
  _Act,
  _AFP,
  _AH,
  _AHA,
  _AIp,
  _ALd,
  _An,
  _Ana,
  _Ar,
  _At,
  _BE,
  _C,
  _CD,
  _DAr,
  _DE,
  _Dr,
  _DRS,
  _DRSR,
  _DRSRe,
  _DTM,
  _DTMA,
  _DTQB,
  _DTQBA,
  _E,
  _EA,
  _Enc,
  _GRS,
  _GRSR,
  _GRSRe,
  _HN,
  _HV,
  _IE,
  _II,
  _IIAL,
  _LMD,
  _MA,
  _MF,
  _MHA,
  _N,
  _NE,
  _O,
  _PT,
  _PTS,
  _RA,
  _RAel,
  _RAu,
  _RAul,
  _RBE,
  _RBTE,
  _RC,
  _RCu,
  _RDE,
  _Rec,
  _Rel,
  _RF,
  _RIE,
  _RIIAL,
  _RITE,
  _RNE,
  _RNTE,
  _RR,
  _RRA,
  _RSA,
  _RSE,
  _RSI,
  _RSN,
  _RSTE,
  _Ru,
  _Rul,
  _RVE,
  _RVTE,
  _RW,
  _SAc,
  _SAe,
  _SAn,
  _SB,
  _SE,
  _Sen,
  _SPr,
  _SSKKI,
  _TA,
  _TAo,
  _U,
  _URS,
  _URSR,
  _URSRp,
  _V,
  _Va,
  _VEe,
  _WTS,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EmailAddress = sim(n0, _EA, 0, 8);
export var AddHeaderAction = struct(n0, _AHA, 0, [_HN, _HV], [0, 0]);
export var Analysis = struct(n0, _An, 0, [_Ana, _RF], [0, 0]);
export var ArchiveAction = struct(n0, _AA, 0, [_AFP, _TA], [0, 0]);
export var DeleteRuleSetRequest = struct(n0, _DRSR, 0, [_RSI], [0]);
export var DeleteRuleSetResponse = struct(n0, _DRSRe, 0, [], []);
export var DeliverToMailboxAction = struct(n0, _DTMA, 0, [_AFP, _MA, _RA], [0, 0, 0]);
export var DeliverToQBusinessAction = struct(n0, _DTQBA, 0, [_AFP, _AIp, _II, _RA], [0, 0, 0, 0]);
export var DropAction = struct(n0, _DAr, 0, [], []);
export var GetRuleSetRequest = struct(n0, _GRSR, 0, [_RSI], [0]);
export var GetRuleSetResponse = struct(
  n0,
  _GRSRe,
  0,
  [_RSI, _RSA, _RSN, _CD, _LMD, _Ru],
  [0, 0, 0, 4, 4, [() => Rules, 0]]
);
export var RelayAction = struct(n0, _RAel, 0, [_AFP, _Rel, _MF], [0, 0, 0]);
export var ReplaceRecipientAction = struct(n0, _RRA, 0, [_RW], [[() => Recipients, 0]]);
export var Rule = struct(
  n0,
  _Rul,
  0,
  [_N, _C, _U, _Act],
  [0, () => RuleConditions, () => RuleConditions, [() => RuleActions, 0]]
);
export var RuleBooleanExpression = struct(n0, _RBE, 0, [_E, _O], [() => RuleBooleanToEvaluate, 0]);
export var RuleDmarcExpression = struct(n0, _RDE, 0, [_O, _V], [0, 64 | 0]);
export var RuleIpExpression = struct(n0, _RIE, 0, [_E, _O, _V], [() => RuleIpToEvaluate, 0, 64 | 0]);
export var RuleIsInAddressList = struct(n0, _RIIAL, 0, [_At, _ALd], [0, 64 | 0]);
export var RuleNumberExpression = struct(n0, _RNE, 0, [_E, _O, _Va], [() => RuleNumberToEvaluate, 0, 1]);
export var RuleStringExpression = struct(n0, _RSE, 0, [_E, _O, _V], [() => RuleStringToEvaluate, 0, 64 | 0]);
export var RuleVerdictExpression = struct(n0, _RVE, 0, [_E, _O, _V], [() => RuleVerdictToEvaluate, 0, 64 | 0]);
export var S3Action = struct(n0, _SAc, 0, [_AFP, _RA, _SB, _SPr, _SSKKI], [0, 0, 0, 0, 0]);
export var SendAction = struct(n0, _SAe, 0, [_AFP, _RA], [0, 0]);
export var SnsAction = struct(n0, _SAn, 0, [_AFP, _TAo, _RA, _Enc, _PT], [0, 0, 0, 0, 0]);
export var UpdateRuleSetRequest = struct(n0, _URSR, 0, [_RSI, _RSN, _Ru], [0, 0, [() => Rules, 0]]);
export var UpdateRuleSetResponse = struct(n0, _URSRp, 0, [], []);
export var Recipients = list(n0, _Rec, 0, [() => EmailAddress, 0]);
export var RuleActions = list(n0, _RAu, 0, [() => RuleAction, 0]);
export var RuleAddressListArnList = 64 | 0;

export var RuleConditions = list(n0, _RC, 0, () => RuleCondition);
export var RuleDmarcValueList = 64 | 0;

export var RuleIpValueList = 64 | 0;

export var Rules = list(n0, _Ru, 0, [() => Rule, 0]);
export var RuleStringList = 64 | 0;

export var RuleVerdictValueList = 64 | 0;

export var RuleAction = uni(
  n0,
  _RAul,
  0,
  [_Dr, _Rel, _Ar, _WTS, _Sen, _AH, _RR, _DTM, _DTQB, _PTS],
  [
    () => DropAction,
    () => RelayAction,
    () => ArchiveAction,
    () => S3Action,
    () => SendAction,
    () => AddHeaderAction,
    [() => ReplaceRecipientAction, 0],
    () => DeliverToMailboxAction,
    () => DeliverToQBusinessAction,
    () => SnsAction,
  ]
);
export var RuleBooleanToEvaluate = uni(n0, _RBTE, 0, [_At, _An, _IIAL], [0, () => Analysis, () => RuleIsInAddressList]);
export var RuleCondition = uni(
  n0,
  _RCu,
  0,
  [_BE, _SE, _NE, _IE, _VEe, _DE],
  [
    () => RuleBooleanExpression,
    () => RuleStringExpression,
    () => RuleNumberExpression,
    () => RuleIpExpression,
    () => RuleVerdictExpression,
    () => RuleDmarcExpression,
  ]
);
export var RuleIpToEvaluate = uni(n0, _RITE, 0, [_At], [0]);
export var RuleNumberToEvaluate = uni(n0, _RNTE, 0, [_At], [0]);
export var RuleStringToEvaluate = uni(n0, _RSTE, 0, [_At, _MHA, _An], [0, 0, () => Analysis]);
export var RuleVerdictToEvaluate = uni(n0, _RVTE, 0, [_At, _An], [0, () => Analysis]);
export var DeleteRuleSet = op(
  n0,
  _DRS,
  2,
  () => DeleteRuleSetRequest,
  () => DeleteRuleSetResponse
);
export var GetRuleSet = op(
  n0,
  _GRS,
  0,
  () => GetRuleSetRequest,
  () => GetRuleSetResponse
);
export var UpdateRuleSet = op(
  n0,
  _URS,
  2,
  () => UpdateRuleSetRequest,
  () => UpdateRuleSetResponse
);
