// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _a,
  _aEC,
  _aPA,
  _bl,
  _cA,
  _CD,
  _cMK,
  _CN,
  _CP,
  _CSC,
  _cSC,
  _CSo,
  _CSoo,
  _cT,
  _CUS,
  _CUSR,
  _CUSRr,
  _d,
  _dA,
  _dLA,
  _dTIM,
  _GUS,
  _GUSR,
  _GUSRe,
  _h,
  _hQ,
  _hTI,
  _iDTIM,
  _LUS,
  _LUSR,
  _LUSRi,
  _mDR,
  _mR,
  _n,
  _nT,
  _p,
  _pAa,
  _pAr,
  _ta,
  _TC,
  _tC,
  _tT,
  _uA,
  _US,
  _uS,
  _uSA,
  _USL,
  _USS,
  _UUS,
  _UUSR,
  _UUSRp,
  _vM,
  n0,
} from "./schemas_0";
import { TagList } from "./schemas_8_Create";

/* eslint no-var: 0 */

export var CookieDomain = sim(n0, _CD, 0, 8);
export var CookieName = sim(n0, _CN, 0, 8);
export var CookiePath = sim(n0, _CP, 0, 8);
export var CookieSpecification = struct(
  n0,
  _CSo,
  0,
  [_d, _n, _p],
  [
    [() => CookieDomain, 0],
    [() => CookieName, 0],
    [() => CookiePath, 0],
  ]
);
export var CookieSynchronizationConfiguration = struct(
  n0,
  _CSC,
  8,
  [_a, _bl],
  [
    [() => CookieSpecifications, 0],
    [() => CookieSpecifications, 0],
  ]
);
export var CreateUserSettingsRequest = struct(
  n0,
  _CUSR,
  0,
  [_cA, _pAa, _dA, _uA, _pAr, _ta, _dTIM, _iDTIM, _cT, _cSC, _cMK, _aEC, _dLA, _tC],
  [
    0,
    0,
    0,
    0,
    0,
    [() => TagList, 0],
    1,
    1,
    [0, 4],
    [() => CookieSynchronizationConfiguration, 0],
    0,
    128 | 0,
    0,
    () => ToolbarConfiguration,
  ]
);
export var CreateUserSettingsResponse = struct(n0, _CUSRr, 0, [_uSA], [0]);
export var GetUserSettingsRequest = struct(n0, _GUSR, 0, [_uSA], [[0, 1]]);
export var GetUserSettingsResponse = struct(n0, _GUSRe, 0, [_uS], [[() => UserSettings, 0]]);
export var ListUserSettingsRequest = struct(
  n0,
  _LUSR,
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
export var ListUserSettingsResponse = struct(n0, _LUSRi, 0, [_uS, _nT], [[() => UserSettingsList, 0], 0]);
export var ToolbarConfiguration = struct(n0, _TC, 0, [_tT, _vM, _hTI, _mDR], [0, 0, 64 | 0, 0]);
export var UpdateUserSettingsRequest = struct(
  n0,
  _UUSR,
  0,
  [_uSA, _cA, _pAa, _dA, _uA, _pAr, _dTIM, _iDTIM, _cT, _cSC, _dLA, _tC],
  [[0, 1], 0, 0, 0, 0, 0, 1, 1, [0, 4], [() => CookieSynchronizationConfiguration, 0], 0, () => ToolbarConfiguration]
);
export var UpdateUserSettingsResponse = struct(n0, _UUSRp, 0, [_uS], [[() => UserSettings, 0]]);
export var UserSettings = struct(
  n0,
  _US,
  0,
  [_uSA, _aPA, _cA, _pAa, _dA, _uA, _pAr, _dTIM, _iDTIM, _cSC, _cMK, _aEC, _dLA, _tC],
  [
    0,
    64 | 0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    [() => CookieSynchronizationConfiguration, 0],
    0,
    128 | 0,
    0,
    () => ToolbarConfiguration,
  ]
);
export var UserSettingsSummary = struct(
  n0,
  _USS,
  0,
  [_uSA, _cA, _pAa, _dA, _uA, _pAr, _dTIM, _iDTIM, _cSC, _dLA, _tC],
  [0, 0, 0, 0, 0, 0, 1, 1, [() => CookieSynchronizationConfiguration, 0], 0, () => ToolbarConfiguration]
);
export var CookieSpecifications = list(n0, _CSoo, 0, [() => CookieSpecification, 0]);
export var HiddenToolbarItemList = 64 | 0;

export var UserSettingsList = list(n0, _USL, 0, [() => UserSettingsSummary, 0]);
export var CreateUserSettings = op(
  n0,
  _CUS,
  {
    [_h]: ["POST", "/userSettings", 200],
  },
  () => CreateUserSettingsRequest,
  () => CreateUserSettingsResponse
);
export var GetUserSettings = op(
  n0,
  _GUS,
  {
    [_h]: ["GET", "/userSettings/{userSettingsArn+}", 200],
  },
  () => GetUserSettingsRequest,
  () => GetUserSettingsResponse
);
export var ListUserSettings = op(
  n0,
  _LUS,
  {
    [_h]: ["GET", "/userSettings", 200],
  },
  () => ListUserSettingsRequest,
  () => ListUserSettingsResponse
);
export var UpdateUserSettings = op(
  n0,
  _UUS,
  {
    [_h]: ["PATCH", "/userSettings/{userSettingsArn+}", 200],
  },
  () => UpdateUserSettingsRequest,
  () => UpdateUserSettingsResponse
);
