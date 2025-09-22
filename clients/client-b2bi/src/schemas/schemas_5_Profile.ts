// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _bN,
  _cA,
  _CPr,
  _CPRre,
  _CPRrea,
  _cT,
  _DPe,
  _DPRe,
  _E,
  _em,
  _GPe,
  _GPRet,
  _GPRetr,
  _h,
  _hQ,
  _l,
  _lGN,
  _LPi,
  _LPRis,
  _LPRist,
  _mA,
  _mR,
  _n,
  _nT,
  _P,
  _p,
  _pAr,
  _pI,
  _PLr,
  _pr,
  _PSr,
  _ta,
  _UPp,
  _UPRpd,
  _UPRpda,
  n0,
  Unit,
} from "./schemas_0";
import { TagList } from "./schemas_6_Create";

/* eslint no-var: 0 */

export var Email = sim(n0, _E, 0, 8);
export var Phone = sim(n0, _P, 0, 8);
export var CreateProfileRequest = struct(
  n0,
  _CPRre,
  0,
  [_n, _em, _p, _bN, _l, _cT, _ta],
  [0, [() => Email, 0], [() => Phone, 0], 0, 0, [0, 4], () => TagList]
);
export var CreateProfileResponse = struct(
  n0,
  _CPRrea,
  0,
  [_pI, _pAr, _n, _bN, _p, _em, _l, _lGN, _cA],
  [0, 0, 0, 0, [() => Phone, 0], [() => Email, 0], 0, 0, 5]
);
export var DeleteProfileRequest = struct(n0, _DPRe, 0, [_pI], [[0, 1]]);
export var GetProfileRequest = struct(n0, _GPRet, 0, [_pI], [[0, 1]]);
export var GetProfileResponse = struct(
  n0,
  _GPRetr,
  0,
  [_pI, _pAr, _n, _em, _p, _bN, _l, _lGN, _cA, _mA],
  [0, 0, 0, [() => Email, 0], [() => Phone, 0], 0, 0, 0, 5, 5]
);
export var ListProfilesRequest = struct(
  n0,
  _LPRis,
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
export var ListProfilesResponse = struct(n0, _LPRist, 0, [_pr, _nT], [() => ProfileList, 0]);
export var ProfileSummary = struct(n0, _PSr, 0, [_pI, _n, _bN, _l, _lGN, _cA, _mA], [0, 0, 0, 0, 0, 5, 5]);
export var UpdateProfileRequest = struct(
  n0,
  _UPRpd,
  0,
  [_pI, _n, _em, _p, _bN],
  [[0, 1], 0, [() => Email, 0], [() => Phone, 0], 0]
);
export var UpdateProfileResponse = struct(
  n0,
  _UPRpda,
  0,
  [_pI, _pAr, _n, _em, _p, _bN, _l, _lGN, _cA, _mA],
  [0, 0, 0, [() => Email, 0], [() => Phone, 0], 0, 0, 0, 5, 5]
);
export var ProfileList = list(n0, _PLr, 0, () => ProfileSummary);
export var CreateProfile = op(
  n0,
  _CPr,
  {
    [_h]: ["POST", "/profiles", 201],
  },
  () => CreateProfileRequest,
  () => CreateProfileResponse
);
export var DeleteProfile = op(
  n0,
  _DPe,
  {
    [_h]: ["DELETE", "/profiles/{profileId}", 200],
  },
  () => DeleteProfileRequest,
  () => Unit
);
export var GetProfile = op(
  n0,
  _GPe,
  {
    [_h]: ["GET", "/profiles/{profileId}", 200],
  },
  () => GetProfileRequest,
  () => GetProfileResponse
);
export var ListProfiles = op(
  n0,
  _LPi,
  {
    [_h]: ["GET", "/profiles", 200],
  },
  () => ListProfilesRequest,
  () => ListProfilesResponse
);
export var UpdateProfile = op(
  n0,
  _UPp,
  {
    [_h]: ["PATCH", "/profiles/{profileId}", 200],
  },
  () => UpdateProfileRequest,
  () => UpdateProfileResponse
);
