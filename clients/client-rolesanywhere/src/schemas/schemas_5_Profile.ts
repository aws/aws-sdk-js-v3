// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AM,
  _aM,
  _AMt,
  _aRSN,
  _cAr,
  _cBr,
  _cF,
  _CP,
  _CPR,
  _DAM,
  _DAMR,
  _DAMRe,
  _DP,
  _DPi,
  _dS,
  _en,
  _EP,
  _GP,
  _h,
  _hQ,
  _LP,
  _LPR,
  _mPA,
  _MR,
  _mR,
  _MRa,
  _n,
  _nT,
  _p,
  _pA,
  _PAM,
  _PAMR,
  _PAMRu,
  _PD,
  _PDR,
  _PDr,
  _pI,
  _pro,
  _rA,
  _rIP,
  _sP,
  _sp,
  _spe,
  _SPR,
  _t,
  _uA,
  _UP,
  _UPR,
  n0,
} from "./schemas_0";
import { ListRequest } from "./schemas_3_List";
import { TagList } from "./schemas_4_Resource";

/* eslint no-var: 0 */

export var AttributeMapping = struct(n0, _AM, 0, [_cF, _mR], [0, () => MappingRules]);
export var CreateProfileRequest = struct(
  n0,
  _CPR,
  0,
  [_n, _rIP, _sP, _rA, _mPA, _dS, _en, _t, _aRSN],
  [0, 2, 0, 64 | 0, 64 | 0, 1, 2, [() => TagList, 0], 2]
);
export var DeleteAttributeMappingRequest = struct(
  n0,
  _DAMR,
  0,
  [_pI, _cF, _sp],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _cF,
      },
    ],
    [
      64 | 0,
      {
        [_hQ]: _sp,
      },
    ],
  ]
);
export var DeleteAttributeMappingResponse = struct(n0, _DAMRe, 0, [_p], [() => ProfileDetail]);
export var ListProfilesResponse = struct(n0, _LPR, 0, [_nT, _pro], [0, () => ProfileDetails]);
export var MappingRule = struct(n0, _MR, 0, [_spe], [0]);
export var ProfileDetail = struct(
  n0,
  _PD,
  0,
  [_pI, _pA, _n, _rIP, _en, _cBr, _sP, _rA, _mPA, _cAr, _uA, _dS, _aRSN, _aM],
  [0, 0, 0, 2, 2, 0, 0, 64 | 0, 64 | 0, 5, 5, 1, 2, () => AttributeMappings]
);
export var ProfileDetailResponse = struct(n0, _PDR, 0, [_p], [() => ProfileDetail]);
export var PutAttributeMappingRequest = struct(n0, _PAMR, 0, [_pI, _cF, _mR], [[0, 1], 0, () => MappingRules]);
export var PutAttributeMappingResponse = struct(n0, _PAMRu, 0, [_p], [() => ProfileDetail]);
export var ScalarProfileRequest = struct(n0, _SPR, 0, [_pI], [[0, 1]]);
export var UpdateProfileRequest = struct(
  n0,
  _UPR,
  0,
  [_pI, _n, _sP, _rA, _mPA, _dS, _aRSN],
  [[0, 1], 0, 0, 64 | 0, 64 | 0, 1, 2]
);
export var AttributeMappings = list(n0, _AMt, 0, () => AttributeMapping);
export var ManagedPolicyList = 64 | 0;

export var MappingRules = list(n0, _MRa, 0, () => MappingRule);
export var ProfileDetails = list(n0, _PDr, 0, () => ProfileDetail);
export var RoleArnList = 64 | 0;

export var SpecifierList = 64 | 0;

export var CreateProfile = op(
  n0,
  _CP,
  {
    [_h]: ["POST", "/profiles", 201],
  },
  () => CreateProfileRequest,
  () => ProfileDetailResponse
);
export var DeleteAttributeMapping = op(
  n0,
  _DAM,
  {
    [_h]: ["DELETE", "/profiles/{profileId}/mappings", 200],
  },
  () => DeleteAttributeMappingRequest,
  () => DeleteAttributeMappingResponse
);
export var DeleteProfile = op(
  n0,
  _DP,
  {
    [_h]: ["DELETE", "/profile/{profileId}", 200],
  },
  () => ScalarProfileRequest,
  () => ProfileDetailResponse
);
export var DisableProfile = op(
  n0,
  _DPi,
  {
    [_h]: ["POST", "/profile/{profileId}/disable", 200],
  },
  () => ScalarProfileRequest,
  () => ProfileDetailResponse
);
export var EnableProfile = op(
  n0,
  _EP,
  {
    [_h]: ["POST", "/profile/{profileId}/enable", 200],
  },
  () => ScalarProfileRequest,
  () => ProfileDetailResponse
);
export var GetProfile = op(
  n0,
  _GP,
  {
    [_h]: ["GET", "/profile/{profileId}", 200],
  },
  () => ScalarProfileRequest,
  () => ProfileDetailResponse
);
export var ListProfiles = op(
  n0,
  _LP,
  {
    [_h]: ["GET", "/profiles", 200],
  },
  () => ListRequest,
  () => ListProfilesResponse
);
export var PutAttributeMapping = op(
  n0,
  _PAM,
  {
    [_h]: ["PUT", "/profiles/{profileId}/mappings", 200],
  },
  () => PutAttributeMappingRequest,
  () => PutAttributeMappingResponse
);
export var UpdateProfile = op(
  n0,
  _UP,
  {
    [_h]: ["PATCH", "/profile/{profileId}", 200],
  },
  () => UpdateProfileRequest,
  () => ProfileDetailResponse
);
