// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { CodeDeliveryFailureException as __CodeDeliveryFailureException } from "../models/index";
import {
  _AN,
  _ATc,
  _ATRC,
  _c,
  _CCRC,
  _CDD,
  _CDDT,
  _CDFE,
  _CI,
  _CM,
  _Des,
  _DM,
  _e,
  _GUAVC,
  _GUAVCR,
  _GUAVCRe,
  _hE,
  _m,
  _RC,
  _REC,
  _SRC,
  _SRCR,
  _SRCRe,
  _UPI,
  ClientIdType,
  n0,
  TokenModelType,
} from "./schemas_0";
import {
  AccountTakeoverRiskConfigurationType,
  CompromisedCredentialsRiskConfigurationType,
  RiskConfigurationType,
  RiskExceptionConfigurationType,
} from "./schemas_14_Auth";

/* eslint no-var: 0 */

export var CodeDeliveryDetailsType = struct(n0, _CDDT, 0, [_Des, _DM, _AN], [0, 0, 0]);
export var CodeDeliveryFailureException = error(
  n0,
  _CDFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __CodeDeliveryFailureException
);
export var GetUserAttributeVerificationCodeRequest = struct(
  n0,
  _GUAVCR,
  0,
  [_ATc, _AN, _CM],
  [[() => TokenModelType, 0], 0, 128 | 0]
);
export var GetUserAttributeVerificationCodeResponse = struct(n0, _GUAVCRe, 0, [_CDD], [() => CodeDeliveryDetailsType]);
export var SetRiskConfigurationRequest = struct(
  n0,
  _SRCR,
  0,
  [_UPI, _CI, _CCRC, _ATRC, _REC],
  [
    0,
    [() => ClientIdType, 0],
    () => CompromisedCredentialsRiskConfigurationType,
    () => AccountTakeoverRiskConfigurationType,
    () => RiskExceptionConfigurationType,
  ]
);
export var SetRiskConfigurationResponse = struct(n0, _SRCRe, 0, [_RC], [[() => RiskConfigurationType, 0]]);
export var GetUserAttributeVerificationCode = op(
  n0,
  _GUAVC,
  0,
  () => GetUserAttributeVerificationCodeRequest,
  () => GetUserAttributeVerificationCodeResponse
);
export var SetRiskConfiguration = op(
  n0,
  _SRC,
  0,
  () => SetRiskConfigurationRequest,
  () => SetRiskConfigurationResponse
);
