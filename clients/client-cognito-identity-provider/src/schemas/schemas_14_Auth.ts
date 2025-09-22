// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { UserPoolAddOnNotEnabledException as __UserPoolAddOnNotEnabledException } from "../models/index";
import {
  _A,
  _ATAT,
  _ATATc,
  _ATRC,
  _ATRCT,
  _AUAEF,
  _AUAEFR,
  _AUAEFRd,
  _BE,
  _BIPRL,
  _c,
  _CCAT,
  _CCRC,
  _CCRCT,
  _CI,
  _DRC,
  _DRCR,
  _DRCRe,
  _e,
  _EA,
  _EFv,
  _EI,
  _F,
  _FT,
  _FV,
  _HA,
  _HB,
  _hE,
  _LA,
  _LMD,
  _m,
  _MA,
  _ME,
  _N,
  _NAEo,
  _NC,
  _NCT,
  _NET,
  _RC,
  _RCT,
  _REC,
  _RECT,
  _RTe,
  _SA,
  _SIPRL,
  _Su,
  _TB,
  _U,
  _UAEF,
  _UAEFR,
  _UAEFRp,
  _UPAONEE,
  _UPI,
  ClientIdType,
  n0,
  TokenModelType,
  UsernameType,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AccountTakeoverActionsType = struct(
  n0,
  _ATAT,
  0,
  [_LA, _MA, _HA],
  [() => AccountTakeoverActionType, () => AccountTakeoverActionType, () => AccountTakeoverActionType]
);
export var AccountTakeoverActionType = struct(n0, _ATATc, 0, [_N, _EA], [2, 0]);
export var AccountTakeoverRiskConfigurationType = struct(
  n0,
  _ATRCT,
  0,
  [_NC, _A],
  [() => NotifyConfigurationType, () => AccountTakeoverActionsType]
);
export var AdminUpdateAuthEventFeedbackRequest = struct(
  n0,
  _AUAEFR,
  0,
  [_UPI, _U, _EI, _FV],
  [0, [() => UsernameType, 0], 0, 0]
);
export var AdminUpdateAuthEventFeedbackResponse = struct(n0, _AUAEFRd, 0, [], []);
export var CompromisedCredentialsActionsType = struct(n0, _CCAT, 0, [_EA], [0]);
export var CompromisedCredentialsRiskConfigurationType = struct(
  n0,
  _CCRCT,
  0,
  [_EFv, _A],
  [64 | 0, () => CompromisedCredentialsActionsType]
);
export var DescribeRiskConfigurationRequest = struct(n0, _DRCR, 0, [_UPI, _CI], [0, [() => ClientIdType, 0]]);
export var DescribeRiskConfigurationResponse = struct(n0, _DRCRe, 0, [_RC], [[() => RiskConfigurationType, 0]]);
export var NotifyConfigurationType = struct(
  n0,
  _NCT,
  0,
  [_F, _RTe, _SA, _BE, _NAEo, _ME],
  [0, 0, 0, () => NotifyEmailType, () => NotifyEmailType, () => NotifyEmailType]
);
export var NotifyEmailType = struct(n0, _NET, 0, [_Su, _HB, _TB], [0, 0, 0]);
export var RiskConfigurationType = struct(
  n0,
  _RCT,
  0,
  [_UPI, _CI, _CCRC, _ATRC, _REC, _LMD],
  [
    0,
    [() => ClientIdType, 0],
    () => CompromisedCredentialsRiskConfigurationType,
    () => AccountTakeoverRiskConfigurationType,
    () => RiskExceptionConfigurationType,
    4,
  ]
);
export var RiskExceptionConfigurationType = struct(n0, _RECT, 0, [_BIPRL, _SIPRL], [64 | 0, 64 | 0]);
export var UpdateAuthEventFeedbackRequest = struct(
  n0,
  _UAEFR,
  0,
  [_UPI, _U, _EI, _FT, _FV],
  [0, [() => UsernameType, 0], 0, [() => TokenModelType, 0], 0]
);
export var UpdateAuthEventFeedbackResponse = struct(n0, _UAEFRp, 0, [], []);
export var UserPoolAddOnNotEnabledException = error(
  n0,
  _UPAONEE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __UserPoolAddOnNotEnabledException
);
export var BlockedIPRangeListType = 64 | 0;

export var EventFiltersType = 64 | 0;

export var SkippedIPRangeListType = 64 | 0;

export var AdminUpdateAuthEventFeedback = op(
  n0,
  _AUAEF,
  0,
  () => AdminUpdateAuthEventFeedbackRequest,
  () => AdminUpdateAuthEventFeedbackResponse
);
export var DescribeRiskConfiguration = op(
  n0,
  _DRC,
  0,
  () => DescribeRiskConfigurationRequest,
  () => DescribeRiskConfigurationResponse
);
export var UpdateAuthEventFeedback = op(
  n0,
  _UAEF,
  0,
  () => UpdateAuthEventFeedbackRequest,
  () => UpdateAuthEventFeedbackResponse
);
