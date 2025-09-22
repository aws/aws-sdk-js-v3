// smithy-typescript generated code
import { list, map, op, sim, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _AIp,
  _AL,
  _AM,
  _Ar,
  _CCP,
  _CCPR,
  _CEre,
  _CERr,
  _Co,
  _CP,
  _CPI,
  _CPo,
  _CPS,
  _CPSL,
  _D,
  _Dy,
  _Ex,
  _GCP,
  _GCPR,
  _h,
  _hH,
  _hQ,
  _I,
  _It,
  _KKA,
  _KKI,
  _LCP,
  _LCPR,
  _LU,
  _LVN,
  _LVN_,
  _MR,
  _mr,
  _N,
  _NT,
  _nt,
  _P,
  _Pa,
  _PM,
  _RA,
  _Re,
  _RRA,
  _SWLBA,
  _T,
  _t,
  _Ta,
  _U,
  _UCP,
  _UCPR,
  _V,
  _Val,
  _VLa,
  _VN,
  _VT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var StringWithLengthBetween0And32768 = sim(n0, _SWLBA, 0, 8);
export var Action = struct(n0, _A, 0, [_N, _D, _U, _RA], [0, 0, 0, 0]);
export var ConfigurationProfile = struct(
  n0,
  _CP,
  0,
  [_AIp, _I, _N, _D, _LU, _RRA, _V, _T, _KKA, _KKI],
  [0, 0, 0, 0, 0, 0, [() => ValidatorList, 0], 0, 0, 0]
);
export var ConfigurationProfiles = struct(n0, _CPo, 0, [_It, _NT], [() => ConfigurationProfileSummaryList, 0]);
export var ConfigurationProfileSummary = struct(n0, _CPS, 0, [_AIp, _I, _N, _LU, _VT, _T], [0, 0, 0, 0, 64 | 0, 0]);
export var CreateConfigurationProfileRequest = struct(
  n0,
  _CCPR,
  0,
  [_AIp, _N, _D, _LU, _RRA, _V, _Ta, _T, _KKI],
  [[0, 1], 0, 0, 0, 0, [() => ValidatorList, 0], 128 | 0, 0, 0]
);
export var CreateExtensionRequest = struct(
  n0,
  _CERr,
  0,
  [_N, _D, _Ac, _P, _Ta, _LVN],
  [
    0,
    0,
    () => ActionsMap,
    () => ParameterMap,
    128 | 0,
    [
      1,
      {
        [_hH]: _LVN_,
      },
    ],
  ]
);
export var Extension = struct(
  n0,
  _Ex,
  0,
  [_I, _N, _VN, _Ar, _D, _Ac, _P],
  [0, 0, 1, 0, 0, () => ActionsMap, () => ParameterMap]
);
export var GetConfigurationProfileRequest = struct(
  n0,
  _GCPR,
  0,
  [_AIp, _CPI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var ListConfigurationProfilesRequest = struct(
  n0,
  _LCPR,
  0,
  [_AIp, _MR, _NT, _T],
  [
    [0, 1],
    [
      1,
      {
        [_hQ]: _mr,
      },
    ],
    [
      0,
      {
        [_hQ]: _nt,
      },
    ],
    [
      0,
      {
        [_hQ]: _t,
      },
    ],
  ]
);
export var Parameter = struct(n0, _Pa, 0, [_D, _Re, _Dy], [0, 2, 2]);
export var UpdateConfigurationProfileRequest = struct(
  n0,
  _UCPR,
  0,
  [_AIp, _CPI, _N, _D, _RRA, _V, _KKI],
  [[0, 1], [0, 1], 0, 0, 0, [() => ValidatorList, 0], 0]
);
export var Validator = struct(n0, _Val, 0, [_T, _Co], [0, [() => StringWithLengthBetween0And32768, 0]]);
export var ActionList = list(n0, _AL, 0, () => Action);
export var ConfigurationProfileSummaryList = list(n0, _CPSL, 0, () => ConfigurationProfileSummary);
export var ValidatorList = list(n0, _VLa, 0, [() => Validator, 0]);
export var ValidatorTypeList = 64 | 0;

export var ActionsMap = map(n0, _AM, 0, 0, () => ActionList);
export var ParameterMap = map(n0, _PM, 0, 0, () => Parameter);
export var CreateConfigurationProfile = op(
  n0,
  _CCP,
  {
    [_h]: ["POST", "/applications/{ApplicationId}/configurationprofiles", 201],
  },
  () => CreateConfigurationProfileRequest,
  () => ConfigurationProfile
);
export var CreateExtension = op(
  n0,
  _CEre,
  {
    [_h]: ["POST", "/extensions", 201],
  },
  () => CreateExtensionRequest,
  () => Extension
);
export var GetConfigurationProfile = op(
  n0,
  _GCP,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}", 200],
  },
  () => GetConfigurationProfileRequest,
  () => ConfigurationProfile
);
export var ListConfigurationProfiles = op(
  n0,
  _LCP,
  {
    [_h]: ["GET", "/applications/{ApplicationId}/configurationprofiles", 200],
  },
  () => ListConfigurationProfilesRequest,
  () => ConfigurationProfiles
);
export var UpdateConfigurationProfile = op(
  n0,
  _UCP,
  {
    [_h]: ["PATCH", "/applications/{ApplicationId}/configurationprofiles/{ConfigurationProfileId}", 200],
  },
  () => UpdateConfigurationProfileRequest,
  () => ConfigurationProfile
);
