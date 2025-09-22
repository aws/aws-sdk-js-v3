// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aPA,
  _cT,
  _CUALS,
  _CUALSR,
  _CUALSRr,
  _GUALS,
  _GUALSR,
  _GUALSRe,
  _h,
  _hQ,
  _kSA,
  _LUALS,
  _LUALSR,
  _LUALSRi,
  _mR,
  _nT,
  _ta,
  _UALS,
  _uALS,
  _uALSA,
  _UALSL,
  _UALSS,
  _UUALS,
  _UUALSR,
  _UUALSRp,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var CreateUserAccessLoggingSettingsRequest = struct(
  n0,
  _CUALSR,
  0,
  [_kSA, _ta, _cT],
  [0, [() => TagList, 0], [0, 4]]
);
export var CreateUserAccessLoggingSettingsResponse = struct(n0, _CUALSRr, 0, [_uALSA], [0]);
export var GetUserAccessLoggingSettingsRequest = struct(n0, _GUALSR, 0, [_uALSA], [[0, 1]]);
export var GetUserAccessLoggingSettingsResponse = struct(n0, _GUALSRe, 0, [_uALS], [() => UserAccessLoggingSettings]);
export var ListUserAccessLoggingSettingsRequest = struct(
  n0,
  _LUALSR,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListUserAccessLoggingSettingsResponse = struct(
  n0,
  _LUALSRi,
  0,
  [_uALS, _nT],
  [() => UserAccessLoggingSettingsList, 0]
);
export var UpdateUserAccessLoggingSettingsRequest = struct(n0, _UUALSR, 0, [_uALSA, _kSA, _cT], [[0, 1], 0, [0, 4]]);
export var UpdateUserAccessLoggingSettingsResponse = struct(
  n0,
  _UUALSRp,
  0,
  [_uALS],
  [() => UserAccessLoggingSettings]
);
export var UserAccessLoggingSettings = struct(n0, _UALS, 0, [_uALSA, _aPA, _kSA], [0, 64 | 0, 0]);
export var UserAccessLoggingSettingsSummary = struct(n0, _UALSS, 0, [_uALSA, _kSA], [0, 0]);
export var UserAccessLoggingSettingsList = list(n0, _UALSL, 0, () => UserAccessLoggingSettingsSummary);
export var CreateUserAccessLoggingSettings = op(
  n0,
  _CUALS,
  {
    [_h]: ["POST", "/userAccessLoggingSettings", 200],
  },
  () => CreateUserAccessLoggingSettingsRequest,
  () => CreateUserAccessLoggingSettingsResponse
);
export var GetUserAccessLoggingSettings = op(
  n0,
  _GUALS,
  {
    [_h]: ["GET", "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}", 200],
  },
  () => GetUserAccessLoggingSettingsRequest,
  () => GetUserAccessLoggingSettingsResponse
);
export var ListUserAccessLoggingSettings = op(
  n0,
  _LUALS,
  {
    [_h]: ["GET", "/userAccessLoggingSettings", 200],
  },
  () => ListUserAccessLoggingSettingsRequest,
  () => ListUserAccessLoggingSettingsResponse
);
export var UpdateUserAccessLoggingSettings = op(
  n0,
  _UUALS,
  {
    [_h]: ["PATCH", "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}", 200],
  },
  () => UpdateUserAccessLoggingSettingsRequest,
  () => UpdateUserAccessLoggingSettingsResponse
);
