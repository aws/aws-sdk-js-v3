// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { RefreshTokenReuseException as __RefreshTokenReuseException } from "../models/index";
import {
  _AAl,
  _ACUC,
  _AR,
  _Ar,
  _ARS,
  _ART,
  _ATc,
  _AVA,
  _c,
  _CDr,
  _CDu,
  _CI,
  _CM,
  _CSa,
  _CSl,
  _DC,
  _DGK,
  _DK,
  _Do,
  _DP,
  _DUPe,
  _DUPRe,
  _DUPRes,
  _e,
  _EC,
  _ECF,
  _EIxp,
  _ENOU,
  _EVM,
  _EVS,
  _GTFRT,
  _GTFRTR,
  _GTFRTRe,
  _hE,
  _Id,
  _IT,
  _LC,
  _LMD,
  _m,
  _MC,
  _Na,
  _NDM,
  _NDMT,
  _Po,
  _RT,
  _RTRE,
  _SAc,
  _SALT,
  _SAM,
  _SCF,
  _SCm,
  _St,
  _SVM,
  _TT,
  _UAs,
  _UAUS,
  _UC,
  _UCT,
  _UP,
  _UPAO,
  _UPI,
  _UPT,
  _UPTs,
  _UPTse,
  _VMT,
  ClientIdType,
  n0,
  TokenModelType,
} from "./schemas_0";
import { SmsConfigurationType } from "./schemas_5_UserPool";
import { ClientSecretType } from "./schemas_9_UserPool";
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
import { SchemaAttributeType } from "./schemas_45_UserPool";

/* eslint no-var: 0 */

export var AuthenticationResultType = struct(
  n0,
  _ART,
  0,
  [_ATc, _EIxp, _TT, _RT, _IT, _NDM],
  [[() => TokenModelType, 0], 1, 0, [() => TokenModelType, 0], [() => TokenModelType, 0], () => NewDeviceMetadataType]
);
export var DescribeUserPoolRequest = struct(n0, _DUPRe, 0, [_UPI], [0]);
export var DescribeUserPoolResponse = struct(n0, _DUPRes, 0, [_UP], [() => UserPoolType]);
export var GetTokensFromRefreshTokenRequest = struct(
  n0,
  _GTFRTR,
  0,
  [_RT, _CI, _CSl, _DK, _CM],
  [[() => TokenModelType, 0], [() => ClientIdType, 0], [() => ClientSecretType, 0], 0, 128 | 0]
);
export var GetTokensFromRefreshTokenResponse = struct(n0, _GTFRTRe, 0, [_AR], [[() => AuthenticationResultType, 0]]);
export var NewDeviceMetadataType = struct(n0, _NDMT, 0, [_DK, _DGK], [0, 0]);
export var RefreshTokenReuseException = error(
  n0,
  _RTRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __RefreshTokenReuseException
);
export var UsernameConfigurationType = struct(n0, _UCT, 0, [_CSa], [2]);
export var UserPoolType = struct(
  n0,
  _UPTse,
  0,
  [
    _Id,
    _Na,
    _Po,
    _DP,
    _LC,
    _St,
    _LMD,
    _CDr,
    _SAc,
    _AVA,
    _AAl,
    _UAs,
    _SVM,
    _EVM,
    _EVS,
    _VMT,
    _SAM,
    _UAUS,
    _MC,
    _DC,
    _ENOU,
    _EC,
    _SCm,
    _UPT,
    _SCF,
    _ECF,
    _Do,
    _CDu,
    _ACUC,
    _UPAO,
    _UC,
    _Ar,
    _ARS,
    _UPTs,
  ],
  [
    0,
    0,
    () => UserPoolPolicyType,
    0,
    () => LambdaConfigType,
    0,
    4,
    4,
    () => SchemaAttributesListType,
    64 | 0,
    64 | 0,
    64 | 0,
    0,
    0,
    0,
    () => VerificationMessageTemplateType,
    0,
    () => UserAttributeUpdateSettingsType,
    0,
    () => DeviceConfigurationType,
    1,
    () => EmailConfigurationType,
    () => SmsConfigurationType,
    128 | 0,
    0,
    0,
    0,
    0,
    () => AdminCreateUserConfigType,
    () => UserPoolAddOnsType,
    () => UsernameConfigurationType,
    0,
    () => AccountRecoverySettingType,
    0,
  ]
);
export var AliasAttributesListType = 64 | 0;

export var SchemaAttributesListType = list(n0, _SALT, 0, () => SchemaAttributeType);
export var UsernameAttributesListType = 64 | 0;

export var DescribeUserPool = op(
  n0,
  _DUPe,
  0,
  () => DescribeUserPoolRequest,
  () => DescribeUserPoolResponse
);
export var GetTokensFromRefreshToken = op(
  n0,
  _GTFRT,
  0,
  () => GetTokensFromRefreshTokenRequest,
  () => GetTokensFromRefreshTokenResponse
);
