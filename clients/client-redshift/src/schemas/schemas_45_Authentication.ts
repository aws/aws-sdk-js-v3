// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  AuthenticationProfileAlreadyExistsFault as __AuthenticationProfileAlreadyExistsFault,
  AuthenticationProfileNotFoundFault as __AuthenticationProfileNotFoundFault,
  AuthenticationProfileQuotaExceededFault as __AuthenticationProfileQuotaExceededFault,
  InvalidAuthenticationProfileRequestFault as __InvalidAuthenticationProfileRequestFault,
} from "../models/index";
import {
  _AP,
  _APAEF,
  _APC,
  _APL,
  _APN,
  _APNFF,
  _APQEF,
  _APu,
  _aQE,
  _c,
  _CAP,
  _CAPM,
  _CAPR,
  _DAP,
  _DAPe,
  _DAPM,
  _DAPMe,
  _DAPR,
  _DAPRe,
  _e,
  _hE,
  _IAPRF,
  _m,
  _MAP,
  _MAPM,
  _MAPR,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AuthenticationProfile = struct(n0, _AP, 0, [_APN, _APC], [0, 0]);
export var AuthenticationProfileAlreadyExistsFault = error(
  n0,
  _APAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthenticationProfileAlreadyExistsFault`, 400],
  },
  [_m],
  [0],

  __AuthenticationProfileAlreadyExistsFault
);
export var AuthenticationProfileNotFoundFault = error(
  n0,
  _APNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`AuthenticationProfileNotFoundFault`, 404],
  },
  [_m],
  [0],

  __AuthenticationProfileNotFoundFault
);
export var AuthenticationProfileQuotaExceededFault = error(
  n0,
  _APQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`AuthenticationProfileQuotaExceededFault`, 400],
  },
  [_m],
  [0],

  __AuthenticationProfileQuotaExceededFault
);
export var CreateAuthenticationProfileMessage = struct(n0, _CAPM, 0, [_APN, _APC], [0, 0]);
export var CreateAuthenticationProfileResult = struct(n0, _CAPR, 0, [_APN, _APC], [0, 0]);
export var DeleteAuthenticationProfileMessage = struct(n0, _DAPM, 0, [_APN], [0]);
export var DeleteAuthenticationProfileResult = struct(n0, _DAPR, 0, [_APN], [0]);
export var DescribeAuthenticationProfilesMessage = struct(n0, _DAPMe, 0, [_APN], [0]);
export var DescribeAuthenticationProfilesResult = struct(n0, _DAPRe, 0, [_APu], [() => AuthenticationProfileList]);
export var InvalidAuthenticationProfileRequestFault = error(
  n0,
  _IAPRF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidAuthenticationProfileRequestFault`, 400],
  },
  [_m],
  [0],

  __InvalidAuthenticationProfileRequestFault
);
export var ModifyAuthenticationProfileMessage = struct(n0, _MAPM, 0, [_APN, _APC], [0, 0]);
export var ModifyAuthenticationProfileResult = struct(n0, _MAPR, 0, [_APN, _APC], [0, 0]);
export var AuthenticationProfileList = list(n0, _APL, 0, () => AuthenticationProfile);
export var CreateAuthenticationProfile = op(
  n0,
  _CAP,
  0,
  () => CreateAuthenticationProfileMessage,
  () => CreateAuthenticationProfileResult
);
export var DeleteAuthenticationProfile = op(
  n0,
  _DAP,
  0,
  () => DeleteAuthenticationProfileMessage,
  () => DeleteAuthenticationProfileResult
);
export var DescribeAuthenticationProfiles = op(
  n0,
  _DAPe,
  0,
  () => DescribeAuthenticationProfilesMessage,
  () => DescribeAuthenticationProfilesResult
);
export var ModifyAuthenticationProfile = op(
  n0,
  _MAP,
  0,
  () => ModifyAuthenticationProfileMessage,
  () => ModifyAuthenticationProfileResult
);
