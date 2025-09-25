// smithy-typescript generated code
import { error, op, sim, struct } from "@smithy/core/schema";

import {
  InvalidRequestException as __InvalidRequestException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
} from "../models/index";
import {
  _aZI,
  _c,
  _CER,
  _CEr,
  _CERr,
  _CKD,
  _CKDR,
  _CKDRr,
  _CKE,
  _CKER,
  _CKERr,
  _CKSG,
  _CKSGR,
  _CKSGRr,
  _CKU,
  _CKUR,
  _CKURr,
  _cTl,
  _cTr,
  _cTre,
  _d,
  _dA,
  _dB,
  _dN,
  _e,
  _eA,
  _eAm,
  _EI,
  _eI,
  _eU,
  _fM,
  _fN,
  _fP,
  _h,
  _hE,
  _hQ,
  _hT,
  _iR,
  _IRE,
  _kKI,
  _lMT,
  _lN,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _m,
  _n,
  _rA,
  _s,
  _sGN,
  _SP,
  _sPu,
  _SQEE,
  _t,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _uA,
  _uN,
  _UR,
  _URR,
  _URRn,
  n0,
} from "./schemas_0";
import { FederationParameters } from "./schemas_4_Environment";

/* eslint no-var: 0 */

export var EmailId = sim(n0, _EI, 0, 8);
export var CreateEnvironmentRequest = struct(
  n0,
  _CER,
  0,
  [_n, _d, _kKI, _t, _fM, _fP, _sPu, _dB],
  [0, 0, 0, 128 | 0, 0, () => FederationParameters, [() => SuperuserParameters, 0], 64 | 0]
);
export var CreateEnvironmentResponse = struct(n0, _CERr, 0, [_eI, _eA, _eU], [0, 0, 0]);
export var CreateKxDatabaseRequest = struct(n0, _CKDR, 0, [_eI, _dN, _d, _t, _cTl], [[0, 1], 0, 0, 128 | 0, [0, 4]]);
export var CreateKxDatabaseResponse = struct(n0, _CKDRr, 0, [_dN, _dA, _eI, _d, _cTr, _lMT], [0, 0, 0, 0, 4, 4]);
export var CreateKxEnvironmentRequest = struct(n0, _CKER, 0, [_n, _d, _kKI, _t, _cTl], [0, 0, 0, 128 | 0, [0, 4]]);
export var CreateKxEnvironmentResponse = struct(
  n0,
  _CKERr,
  0,
  [_n, _s, _eI, _d, _eA, _kKI, _cTre],
  [0, 0, 0, 0, 0, 0, 4]
);
export var CreateKxScalingGroupRequest = struct(
  n0,
  _CKSGR,
  0,
  [_cTl, _eI, _sGN, _hT, _aZI, _t],
  [[0, 4], [0, 1], 0, 0, 0, 128 | 0]
);
export var CreateKxScalingGroupResponse = struct(
  n0,
  _CKSGRr,
  0,
  [_eI, _sGN, _hT, _aZI, _s, _lMT, _cTr],
  [0, 0, 0, 0, 0, 4, 4]
);
export var CreateKxUserRequest = struct(n0, _CKUR, 0, [_eI, _uN, _iR, _t, _cTl], [[0, 1], 0, 0, 128 | 0, [0, 4]]);
export var CreateKxUserResponse = struct(n0, _CKURr, 0, [_uN, _uA, _eI, _iR], [0, 0, 0, 0]);
export var InvalidRequestException = error(
  n0,
  _IRE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidRequestException
);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_t], [128 | 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var SuperuserParameters = struct(n0, _SP, 0, [_eAm, _fN, _lN], [[() => EmailId, 0], 0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _t], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var UntagResourceRequest = struct(
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var DataBundleArns = 64 | 0;

export var TagKeyList = 64 | 0;

export var TagMap = 128 | 0;

export var CreateEnvironment = op(
  n0,
  _CEr,
  {
    [_h]: ["POST", "/environment", 200],
  },
  () => CreateEnvironmentRequest,
  () => CreateEnvironmentResponse
);
export var CreateKxDatabase = op(
  n0,
  _CKD,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/databases", 200],
  },
  () => CreateKxDatabaseRequest,
  () => CreateKxDatabaseResponse
);
export var CreateKxEnvironment = op(
  n0,
  _CKE,
  {
    [_h]: ["POST", "/kx/environments", 200],
  },
  () => CreateKxEnvironmentRequest,
  () => CreateKxEnvironmentResponse
);
export var CreateKxScalingGroup = op(
  n0,
  _CKSG,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/scalingGroups", 200],
  },
  () => CreateKxScalingGroupRequest,
  () => CreateKxScalingGroupResponse
);
export var CreateKxUser = op(
  n0,
  _CKU,
  {
    [_h]: ["POST", "/kx/environments/{environmentId}/users", 200],
  },
  () => CreateKxUserRequest,
  () => CreateKxUserResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
