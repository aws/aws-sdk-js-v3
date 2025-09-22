// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  FeatureUnavailableInTierException as __FeatureUnavailableInTierException,
  TierChangeNotAllowedException as __TierChangeNotAllowedException,
} from "../models/index";
import {
  _AAl,
  _ACUC,
  _ARS,
  _AVA,
  _c,
  _CDC,
  _CFD,
  _CUP,
  _CUPD,
  _CUPDR,
  _CUPDRr,
  _CUPR,
  _CUPRr,
  _DC,
  _Do,
  _DP,
  _e,
  _EC,
  _EMC,
  _EVM,
  _EVS,
  _FUITE,
  _hE,
  _LC,
  _LCo,
  _LDC,
  _m,
  _MC,
  _MLV,
  _PNo,
  _Po,
  _SAM,
  _Sch,
  _SCm,
  _SLDC,
  _SLDCR,
  _SLDCRe,
  _SMC,
  _STMC,
  _SUPMC,
  _SUPMCR,
  _SUPMCRe,
  _SVM,
  _TCNAE,
  _UAs,
  _UAUS,
  _UC,
  _UP,
  _UPAO,
  _UPI,
  _UPT,
  _UPTs,
  _UUP,
  _UUPD,
  _UUPDR,
  _UUPDRp,
  _UUPR,
  _UUPRp,
  _VMT,
  _WAC,
  n0,
} from "./schemas_0";
import {
  EmailMfaConfigType,
  SmsConfigurationType,
  SmsMfaConfigType,
  SoftwareTokenMfaConfigType,
  WebAuthnConfigurationType,
} from "./schemas_5_UserPool";
import { CustomDomainConfigType } from "./schemas_8_UserPool";
import { LogConfigurationListType, LogDeliveryConfigurationType } from "./schemas_10_LogDeliveryConfiguration";
import {
  AccountRecoverySettingType,
  AdminCreateUserConfigType,
  DeviceConfigurationType,
  EmailConfigurationType,
  UserAttributeUpdateSettingsType,
  UserPoolAddOnsType,
  UserPoolPolicyType,
  VerificationMessageTemplateType,
} from "./schemas_13_UserPool";
import { LambdaConfigType } from "./schemas_17_User";
import { SchemaAttributesListType, UsernameConfigurationType, UserPoolType } from "./schemas_20_Auth";

/* eslint no-var: 0 */

export var CreateUserPoolDomainRequest = struct(
  n0,
  _CUPDR,
  0,
  [_Do, _UPI, _MLV, _CDC],
  [0, 0, 1, () => CustomDomainConfigType]
);
export var CreateUserPoolDomainResponse = struct(n0, _CUPDRr, 0, [_MLV, _CFD], [1, 0]);
export var CreateUserPoolRequest = struct(
  n0,
  _CUPR,
  0,
  [
    _PNo,
    _Po,
    _DP,
    _LC,
    _AVA,
    _AAl,
    _UAs,
    _SVM,
    _EVM,
    _EVS,
    _VMT,
    _SAM,
    _MC,
    _UAUS,
    _DC,
    _EC,
    _SCm,
    _UPT,
    _ACUC,
    _Sch,
    _UPAO,
    _UC,
    _ARS,
    _UPTs,
  ],
  [
    0,
    () => UserPoolPolicyType,
    0,
    () => LambdaConfigType,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => VerificationMessageTemplateType,
    0,
    0,
    () => UserAttributeUpdateSettingsType,
    () => DeviceConfigurationType,
    () => EmailConfigurationType,
    () => SmsConfigurationType,
    128 | 0,
    () => AdminCreateUserConfigType,
    () => SchemaAttributesListType,
    () => UserPoolAddOnsType,
    () => UsernameConfigurationType,
    () => AccountRecoverySettingType,
    0,
  ]
);
export var CreateUserPoolResponse = struct(n0, _CUPRr, 0, [_UP], [() => UserPoolType]);
export var FeatureUnavailableInTierException = error(
  n0,
  _FUITE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __FeatureUnavailableInTierException
);
export var SetLogDeliveryConfigurationRequest = struct(
  n0,
  _SLDCR,
  0,
  [_UPI, _LCo],
  [0, () => LogConfigurationListType]
);
export var SetLogDeliveryConfigurationResponse = struct(n0, _SLDCRe, 0, [_LDC], [() => LogDeliveryConfigurationType]);
export var SetUserPoolMfaConfigRequest = struct(
  n0,
  _SUPMCR,
  0,
  [_UPI, _SMC, _STMC, _EMC, _MC, _WAC],
  [
    0,
    () => SmsMfaConfigType,
    () => SoftwareTokenMfaConfigType,
    () => EmailMfaConfigType,
    0,
    () => WebAuthnConfigurationType,
  ]
);
export var SetUserPoolMfaConfigResponse = struct(
  n0,
  _SUPMCRe,
  0,
  [_SMC, _STMC, _EMC, _MC, _WAC],
  [
    () => SmsMfaConfigType,
    () => SoftwareTokenMfaConfigType,
    () => EmailMfaConfigType,
    0,
    () => WebAuthnConfigurationType,
  ]
);
export var TierChangeNotAllowedException = error(
  n0,
  _TCNAE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __TierChangeNotAllowedException
);
export var UpdateUserPoolDomainRequest = struct(
  n0,
  _UUPDR,
  0,
  [_Do, _UPI, _MLV, _CDC],
  [0, 0, 1, () => CustomDomainConfigType]
);
export var UpdateUserPoolDomainResponse = struct(n0, _UUPDRp, 0, [_MLV, _CFD], [1, 0]);
export var UpdateUserPoolRequest = struct(
  n0,
  _UUPR,
  0,
  [
    _UPI,
    _Po,
    _DP,
    _LC,
    _AVA,
    _SVM,
    _EVM,
    _EVS,
    _VMT,
    _SAM,
    _UAUS,
    _MC,
    _DC,
    _EC,
    _SCm,
    _UPT,
    _ACUC,
    _UPAO,
    _ARS,
    _PNo,
    _UPTs,
  ],
  [
    0,
    () => UserPoolPolicyType,
    0,
    () => LambdaConfigType,
    64 | 0,
    0,
    0,
    0,
    () => VerificationMessageTemplateType,
    0,
    () => UserAttributeUpdateSettingsType,
    0,
    () => DeviceConfigurationType,
    () => EmailConfigurationType,
    () => SmsConfigurationType,
    128 | 0,
    () => AdminCreateUserConfigType,
    () => UserPoolAddOnsType,
    () => AccountRecoverySettingType,
    0,
    0,
  ]
);
export var UpdateUserPoolResponse = struct(n0, _UUPRp, 0, [], []);
export var CreateUserPool = op(
  n0,
  _CUP,
  0,
  () => CreateUserPoolRequest,
  () => CreateUserPoolResponse
);
export var CreateUserPoolDomain = op(
  n0,
  _CUPD,
  0,
  () => CreateUserPoolDomainRequest,
  () => CreateUserPoolDomainResponse
);
export var SetLogDeliveryConfiguration = op(
  n0,
  _SLDC,
  0,
  () => SetLogDeliveryConfigurationRequest,
  () => SetLogDeliveryConfigurationResponse
);
export var SetUserPoolMfaConfig = op(
  n0,
  _SUPMC,
  0,
  () => SetUserPoolMfaConfigRequest,
  () => SetUserPoolMfaConfigResponse
);
export var UpdateUserPool = op(
  n0,
  _UUP,
  0,
  () => UpdateUserPoolRequest,
  () => UpdateUserPoolResponse
);
export var UpdateUserPoolDomain = op(
  n0,
  _UUPD,
  0,
  () => UpdateUserPoolDomainRequest,
  () => UpdateUserPoolDomainResponse
);
