// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import { MFAMethodNotFoundException as __MFAMethodNotFoundException } from "../models/index";
import {
  _AC,
  _AEI,
  _AF,
  _AIA,
  _AIAR,
  _AIARd,
  _AM,
  _AMT,
  _AP,
  _APT,
  _AR,
  _ARTAC,
  _ARTACR,
  _ARTACRd,
  _c,
  _CC,
  _CD,
  _CDD,
  _CDT,
  _CFP,
  _CFPR,
  _CFPRo,
  _CI,
  _CM,
  _CN,
  _CP,
  _CR,
  _CRTh,
  _CSU,
  _CSUR,
  _CSURo,
  _e,
  _ED,
  _FAC,
  _FP,
  _FPR,
  _FPRo,
  _hE,
  _HH,
  _HHL,
  _HHt,
  _hN,
  _hV,
  _IA,
  _IAn,
  _IAR,
  _IARn,
  _m,
  _MFAMNFE,
  _P,
  _RCC,
  _RCCR,
  _RCCRe,
  _RTAC,
  _RTACR,
  _RTACRe,
  _S,
  _SH,
  _SHT,
  _SN,
  _SP,
  _SUi,
  _SUR,
  _SURi,
  _U,
  _UA,
  _UCDs,
  _UCDT,
  _UCs,
  _UPI,
  _USs,
  _VD,
  ClientIdType,
  n0,
  UsernameType,
} from "./schemas_0";
import { AuthenticationResultType } from "./schemas_20_Auth";
import { AttributeListType } from "./schemas_26_User";
import { CodeDeliveryDetailsType } from "./schemas_27_User";
import { PasswordType } from "./schemas_28_Admin";
import { SessionType } from "./schemas_37_Auth";

/* eslint no-var: 0 */

export var SecretHashType = sim(n0, _SHT, 0, 8);
export var AdminInitiateAuthRequest = struct(
  n0,
  _AIAR,
  0,
  [_UPI, _CI, _AF, _AP, _CM, _AM, _CD, _S],
  [
    0,
    [() => ClientIdType, 0],
    0,
    [() => AuthParametersType, 0],
    128 | 0,
    () => AnalyticsMetadataType,
    () => ContextDataType,
    [() => SessionType, 0],
  ]
);
export var AdminInitiateAuthResponse = struct(
  n0,
  _AIARd,
  0,
  [_CN, _S, _CP, _AR, _AC],
  [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType, 0], 64 | 0]
);
export var AdminRespondToAuthChallengeRequest = struct(
  n0,
  _ARTACR,
  0,
  [_UPI, _CI, _CN, _CR, _S, _AM, _CD, _CM],
  [
    0,
    [() => ClientIdType, 0],
    0,
    [() => ChallengeResponsesType, 0],
    [() => SessionType, 0],
    () => AnalyticsMetadataType,
    () => ContextDataType,
    128 | 0,
  ]
);
export var AdminRespondToAuthChallengeResponse = struct(
  n0,
  _ARTACRd,
  0,
  [_CN, _S, _CP, _AR],
  [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType, 0]]
);
export var AnalyticsMetadataType = struct(n0, _AMT, 0, [_AEI], [0]);
export var ConfirmForgotPasswordRequest = struct(
  n0,
  _CFPR,
  0,
  [_CI, _SH, _U, _CC, _P, _AM, _UCDs, _CM],
  [
    [() => ClientIdType, 0],
    [() => SecretHashType, 0],
    [() => UsernameType, 0],
    0,
    [() => PasswordType, 0],
    () => AnalyticsMetadataType,
    [() => UserContextDataType, 0],
    128 | 0,
  ]
);
export var ConfirmForgotPasswordResponse = struct(n0, _CFPRo, 0, [], []);
export var ConfirmSignUpRequest = struct(
  n0,
  _CSUR,
  0,
  [_CI, _SH, _U, _CC, _FAC, _AM, _UCDs, _CM, _S],
  [
    [() => ClientIdType, 0],
    [() => SecretHashType, 0],
    [() => UsernameType, 0],
    0,
    2,
    () => AnalyticsMetadataType,
    [() => UserContextDataType, 0],
    128 | 0,
    [() => SessionType, 0],
  ]
);
export var ConfirmSignUpResponse = struct(n0, _CSURo, 0, [_S], [[() => SessionType, 0]]);
export var ContextDataType = struct(n0, _CDT, 0, [_IA, _SN, _SP, _HH, _ED], [0, 0, 0, () => HttpHeaderList, 0]);
export var ForgotPasswordRequest = struct(
  n0,
  _FPR,
  0,
  [_CI, _SH, _UCDs, _U, _AM, _CM],
  [
    [() => ClientIdType, 0],
    [() => SecretHashType, 0],
    [() => UserContextDataType, 0],
    [() => UsernameType, 0],
    () => AnalyticsMetadataType,
    128 | 0,
  ]
);
export var ForgotPasswordResponse = struct(n0, _FPRo, 0, [_CDD], [() => CodeDeliveryDetailsType]);
export var HttpHeader = struct(n0, _HHt, 0, [_hN, _hV], [0, 0]);
export var InitiateAuthRequest = struct(
  n0,
  _IAR,
  0,
  [_AF, _AP, _CM, _CI, _AM, _UCDs, _S],
  [
    0,
    [() => AuthParametersType, 0],
    128 | 0,
    [() => ClientIdType, 0],
    () => AnalyticsMetadataType,
    [() => UserContextDataType, 0],
    [() => SessionType, 0],
  ]
);
export var InitiateAuthResponse = struct(
  n0,
  _IARn,
  0,
  [_CN, _S, _CP, _AR, _AC],
  [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType, 0], 64 | 0]
);
export var MFAMethodNotFoundException = error(
  n0,
  _MFAMNFE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __MFAMethodNotFoundException
);
export var ResendConfirmationCodeRequest = struct(
  n0,
  _RCCR,
  0,
  [_CI, _SH, _UCDs, _U, _AM, _CM],
  [
    [() => ClientIdType, 0],
    [() => SecretHashType, 0],
    [() => UserContextDataType, 0],
    [() => UsernameType, 0],
    () => AnalyticsMetadataType,
    128 | 0,
  ]
);
export var ResendConfirmationCodeResponse = struct(n0, _RCCRe, 0, [_CDD], [() => CodeDeliveryDetailsType]);
export var RespondToAuthChallengeRequest = struct(
  n0,
  _RTACR,
  0,
  [_CI, _CN, _S, _CR, _AM, _UCDs, _CM],
  [
    [() => ClientIdType, 0],
    0,
    [() => SessionType, 0],
    [() => ChallengeResponsesType, 0],
    () => AnalyticsMetadataType,
    [() => UserContextDataType, 0],
    128 | 0,
  ]
);
export var RespondToAuthChallengeResponse = struct(
  n0,
  _RTACRe,
  0,
  [_CN, _S, _CP, _AR],
  [0, [() => SessionType, 0], 128 | 0, [() => AuthenticationResultType, 0]]
);
export var SignUpRequest = struct(
  n0,
  _SUR,
  0,
  [_CI, _SH, _U, _P, _UA, _VD, _AM, _UCDs, _CM],
  [
    [() => ClientIdType, 0],
    [() => SecretHashType, 0],
    [() => UsernameType, 0],
    [() => PasswordType, 0],
    [() => AttributeListType, 0],
    [() => AttributeListType, 0],
    () => AnalyticsMetadataType,
    [() => UserContextDataType, 0],
    128 | 0,
  ]
);
export var SignUpResponse = struct(
  n0,
  _SURi,
  0,
  [_UCs, _CDD, _USs, _S],
  [2, () => CodeDeliveryDetailsType, 0, [() => SessionType, 0]]
);
export var UserContextDataType = struct(n0, _UCDT, 8, [_IA, _ED], [0, 0]);
export var AvailableChallengeListType = 64 | 0;

export var HttpHeaderList = list(n0, _HHL, 0, () => HttpHeader);
export var AuthParametersType = map(n0, _APT, 8, 0, 0);
export var ChallengeParametersType = 128 | 0;

export var ChallengeResponsesType = map(n0, _CRTh, 8, 0, 0);
export var AdminInitiateAuth = op(
  n0,
  _AIA,
  0,
  () => AdminInitiateAuthRequest,
  () => AdminInitiateAuthResponse
);
export var AdminRespondToAuthChallenge = op(
  n0,
  _ARTAC,
  0,
  () => AdminRespondToAuthChallengeRequest,
  () => AdminRespondToAuthChallengeResponse
);
export var ConfirmForgotPassword = op(
  n0,
  _CFP,
  0,
  () => ConfirmForgotPasswordRequest,
  () => ConfirmForgotPasswordResponse
);
export var ConfirmSignUp = op(
  n0,
  _CSU,
  0,
  () => ConfirmSignUpRequest,
  () => ConfirmSignUpResponse
);
export var ForgotPassword = op(
  n0,
  _FP,
  0,
  () => ForgotPasswordRequest,
  () => ForgotPasswordResponse
);
export var InitiateAuth = op(
  n0,
  _IAn,
  0,
  () => InitiateAuthRequest,
  () => InitiateAuthResponse
);
export var ResendConfirmationCode = op(
  n0,
  _RCC,
  0,
  () => ResendConfirmationCodeRequest,
  () => ResendConfirmationCodeResponse
);
export var RespondToAuthChallenge = op(
  n0,
  _RTAC,
  0,
  () => RespondToAuthChallengeRequest,
  () => RespondToAuthChallengeResponse
);
export var SignUp = op(
  n0,
  _SUi,
  0,
  () => SignUpRequest,
  () => SignUpResponse
);
