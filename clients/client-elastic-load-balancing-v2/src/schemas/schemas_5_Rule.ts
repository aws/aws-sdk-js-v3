// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  IncompatibleProtocolsException as __IncompatibleProtocolsException,
  InvalidLoadBalancerActionException as __InvalidLoadBalancerActionException,
  PriorityInUseException as __PriorityInUseException,
  TargetGroupAssociationLimitException as __TargetGroupAssociationLimitException,
  TooManyActionsException as __TooManyActionsException,
  TooManyUniqueTargetGroupsPerLoadBalancerException as __TooManyUniqueTargetGroupsPerLoadBalancerException,
  UnsupportedProtocolException as __UnsupportedProtocolException,
} from "../models/index";
import {
  _A,
  _Ac,
  _ACAC,
  _ACC,
  _AE,
  _AOAC,
  _AOC,
  _aQE,
  _AREP,
  _c,
  _CI,
  _Con,
  _CS,
  _CT,
  _DS,
  _E,
  _e,
  _F,
  _FAC,
  _FC,
  _FRAC,
  _FRC,
  _H,
  _hE,
  _HHC,
  _HHCC,
  _HHCCt,
  _HHCt,
  _HHN,
  _HRMC,
  _HRMCC,
  _I,
  _ID,
  _ILBAE,
  _IPE,
  _K,
  _M,
  _MB,
  _MR,
  _MRI,
  _MRO,
  _O,
  _OUR,
  _P,
  _Pa,
  _PIUE,
  _Po,
  _PPC,
  _PPCC,
  _Pr,
  _Q,
  _QSC,
  _QSCC,
  _QSKVP,
  _QSKVPL,
  _RAC,
  _RAu,
  _RC,
  _RCL,
  _RCu,
  _RP,
  _RPL,
  _RPP,
  _Ru,
  _Rul,
  _SC,
  _Sc,
  _SCN,
  _SIC,
  _SICC,
  _SRP,
  _SRPI,
  _SRPO,
  _ST,
  _T,
  _TE,
  _TG,
  _TGA,
  _TGALE,
  _TGL,
  _TGSC,
  _TGT,
  _TMAE,
  _TMUTGPLBE,
  _UECS,
  _UIE,
  _UPA,
  _UPCI,
  _UPD,
  _UPE,
  _V,
  _Va,
  _W,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Action = struct(
  n0,
  _A,
  0,
  [_T, _TGA, _AOC, _ACC, _O, _RC, _FRC, _FC],
  [
    0,
    0,
    () => AuthenticateOidcActionConfig,
    () => AuthenticateCognitoActionConfig,
    1,
    () => RedirectActionConfig,
    () => FixedResponseActionConfig,
    () => ForwardActionConfig,
  ]
);
export var AuthenticateCognitoActionConfig = struct(
  n0,
  _ACAC,
  0,
  [_UPA, _UPCI, _UPD, _SCN, _Sc, _ST, _AREP, _OUR],
  [0, 0, 0, 0, 0, 1, 128 | 0, 0]
);
export var AuthenticateOidcActionConfig = struct(
  n0,
  _AOAC,
  0,
  [_I, _AE, _TE, _UIE, _CI, _CS, _SCN, _Sc, _ST, _AREP, _OUR, _UECS],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 128 | 0, 0, 2]
);
export var FixedResponseActionConfig = struct(n0, _FRAC, 0, [_MB, _SC, _CT], [0, 0, 0]);
export var ForwardActionConfig = struct(
  n0,
  _FAC,
  0,
  [_TG, _TGSC],
  [() => TargetGroupList, () => TargetGroupStickinessConfig]
);
export var HostHeaderConditionConfig = struct(n0, _HHCC, 0, [_V], [64 | 0]);
export var HttpHeaderConditionConfig = struct(n0, _HHCCt, 0, [_HHN, _V], [0, 64 | 0]);
export var HttpRequestMethodConditionConfig = struct(n0, _HRMCC, 0, [_V], [64 | 0]);
export var IncompatibleProtocolsException = error(
  n0,
  _IPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`IncompatibleProtocols`, 400],
  },
  [_M],
  [0],

  __IncompatibleProtocolsException
);
export var InvalidLoadBalancerActionException = error(
  n0,
  _ILBAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidLoadBalancerAction`, 400],
  },
  [_M],
  [0],

  __InvalidLoadBalancerActionException
);
export var ModifyRuleInput = struct(n0, _MRI, 0, [_RAu, _Con, _Ac], [0, () => RuleConditionList, () => Actions]);
export var ModifyRuleOutput = struct(n0, _MRO, 0, [_Ru], [() => Rules]);
export var PathPatternConditionConfig = struct(n0, _PPCC, 0, [_V], [64 | 0]);
export var PriorityInUseException = error(
  n0,
  _PIUE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`PriorityInUse`, 400],
  },
  [_M],
  [0],

  __PriorityInUseException
);
export var QueryStringConditionConfig = struct(n0, _QSCC, 0, [_V], [() => QueryStringKeyValuePairList]);
export var QueryStringKeyValuePair = struct(n0, _QSKVP, 0, [_K, _Va], [0, 0]);
export var RedirectActionConfig = struct(n0, _RAC, 0, [_Pr, _Po, _H, _Pa, _Q, _SC], [0, 0, 0, 0, 0, 0]);
export var Rule = struct(n0, _Rul, 0, [_RAu, _P, _Con, _Ac, _ID], [0, 0, () => RuleConditionList, () => Actions, 2]);
export var RuleCondition = struct(
  n0,
  _RCu,
  0,
  [_F, _V, _HHC, _PPC, _HHCt, _QSC, _HRMC, _SIC],
  [
    0,
    64 | 0,
    () => HostHeaderConditionConfig,
    () => PathPatternConditionConfig,
    () => HttpHeaderConditionConfig,
    () => QueryStringConditionConfig,
    () => HttpRequestMethodConditionConfig,
    () => SourceIpConditionConfig,
  ]
);
export var RulePriorityPair = struct(n0, _RPP, 0, [_RAu, _P], [0, 1]);
export var SetRulePrioritiesInput = struct(n0, _SRPI, 0, [_RP], [() => RulePriorityList]);
export var SetRulePrioritiesOutput = struct(n0, _SRPO, 0, [_Ru], [() => Rules]);
export var SourceIpConditionConfig = struct(n0, _SICC, 0, [_V], [64 | 0]);
export var TargetGroupAssociationLimitException = error(
  n0,
  _TGALE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TargetGroupAssociationLimit`, 400],
  },
  [_M],
  [0],

  __TargetGroupAssociationLimitException
);
export var TargetGroupStickinessConfig = struct(n0, _TGSC, 0, [_E, _DS], [2, 1]);
export var TargetGroupTuple = struct(n0, _TGT, 0, [_TGA, _W], [0, 1]);
export var TooManyActionsException = error(
  n0,
  _TMAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyActions`, 400],
  },
  [_M],
  [0],

  __TooManyActionsException
);
export var TooManyUniqueTargetGroupsPerLoadBalancerException = error(
  n0,
  _TMUTGPLBE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`TooManyUniqueTargetGroupsPerLoadBalancer`, 400],
  },
  [_M],
  [0],

  __TooManyUniqueTargetGroupsPerLoadBalancerException
);
export var UnsupportedProtocolException = error(
  n0,
  _UPE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`UnsupportedProtocol`, 400],
  },
  [_M],
  [0],

  __UnsupportedProtocolException
);
export var Actions = list(n0, _Ac, 0, () => Action);
export var QueryStringKeyValuePairList = list(n0, _QSKVPL, 0, () => QueryStringKeyValuePair);
export var RuleConditionList = list(n0, _RCL, 0, () => RuleCondition);
export var RulePriorityList = list(n0, _RPL, 0, () => RulePriorityPair);
export var Rules = list(n0, _Ru, 0, () => Rule);
export var TargetGroupList = list(n0, _TGL, 0, () => TargetGroupTuple);
export var AuthenticateCognitoActionAuthenticationRequestExtraParams = 128 | 0;

export var AuthenticateOidcActionAuthenticationRequestExtraParams = 128 | 0;

export var ModifyRule = op(
  n0,
  _MR,
  0,
  () => ModifyRuleInput,
  () => ModifyRuleOutput
);
export var SetRulePriorities = op(
  n0,
  _SRP,
  0,
  () => SetRulePrioritiesInput,
  () => SetRulePrioritiesOutput
);
