// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _aC,
  _aIu,
  _aRTIS,
  _aT,
  _Au,
  _aU,
  _Aut,
  _CA,
  _CAR,
  _GAe,
  _GAet,
  _GARe,
  _GARet,
  _hQ,
  _ht,
  _i,
  _iS,
  _it,
  _ite,
  _iVE,
  _jN,
  _li,
  _LOA,
  _n,
  _p,
  _pARN,
  _pO,
  _rAI,
  _ty,
  _UAp,
  _UARp,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Authorizer = struct(
  n0,
  _Au,
  0,
  [_i, _n, _ty, _pARN, _aT, _aU, _aC, _iS, _iVE, _aRTIS],
  [0, 0, 0, 64 | 0, 0, 0, 0, 0, 0, 1]
);
export var Authorizers = struct(
  n0,
  _Aut,
  0,
  [_it, _p],
  [
    [
      () => ListOfAuthorizer,
      {
        [_jN]: _ite,
      },
    ],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
  ]
);
export var CreateAuthorizerRequest = struct(
  n0,
  _CAR,
  0,
  [_rAI, _n, _ty, _pARN, _aT, _aU, _aC, _iS, _iVE, _aRTIS],
  [[0, 1], 0, 0, 64 | 0, 0, 0, 0, 0, 0, 1]
);
export var GetAuthorizerRequest = struct(
  n0,
  _GARe,
  0,
  [_rAI, _aIu],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetAuthorizersRequest = struct(
  n0,
  _GARet,
  0,
  [_rAI, _p, _li],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _p,
      },
    ],
    [
      1,
      {
        [_hQ]: _li,
      },
    ],
  ]
);
export var UpdateAuthorizerRequest = struct(
  n0,
  _UARp,
  0,
  [_rAI, _aIu, _pO],
  [[0, 1], [0, 1], () => ListOfPatchOperation]
);
export var ListOfARNs = 64 | 0;

export var ListOfAuthorizer = list(n0, _LOA, 0, () => Authorizer);
export var CreateAuthorizer = op(
  n0,
  _CA,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/authorizers", 201],
  },
  () => CreateAuthorizerRequest,
  () => Authorizer
);
export var GetAuthorizer = op(
  n0,
  _GAe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/authorizers/{authorizerId}", 200],
  },
  () => GetAuthorizerRequest,
  () => Authorizer
);
export var GetAuthorizers = op(
  n0,
  _GAet,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/authorizers", 200],
  },
  () => GetAuthorizersRequest,
  () => Authorizers
);
export var UpdateAuthorizer = op(
  n0,
  _UAp,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/authorizers/{authorizerId}", 200],
  },
  () => UpdateAuthorizerRequest,
  () => Authorizer
);
