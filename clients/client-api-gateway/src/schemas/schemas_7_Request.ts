// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CRV,
  _CRVR,
  _GRV,
  _GRVe,
  _GRVR,
  _GRVRe,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _li,
  _LORV,
  _n,
  _p,
  _pO,
  _rAI,
  _RV,
  _RVe,
  _rVI,
  _URV,
  _URVR,
  _vRB,
  _vRP,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRequestValidatorRequest = struct(n0, _CRVR, 0, [_rAI, _n, _vRB, _vRP], [[0, 1], 0, 2, 2]);
export var GetRequestValidatorRequest = struct(
  n0,
  _GRVR,
  0,
  [_rAI, _rVI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRequestValidatorsRequest = struct(
  n0,
  _GRVRe,
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
export var RequestValidator = struct(n0, _RV, 0, [_i, _n, _vRB, _vRP], [0, 0, 2, 2]);
export var RequestValidators = struct(
  n0,
  _RVe,
  0,
  [_it, _p],
  [
    [
      () => ListOfRequestValidator,
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
export var UpdateRequestValidatorRequest = struct(
  n0,
  _URVR,
  0,
  [_rAI, _rVI, _pO],
  [[0, 1], [0, 1], () => ListOfPatchOperation]
);
export var ListOfRequestValidator = list(n0, _LORV, 0, () => RequestValidator);
export var CreateRequestValidator = op(
  n0,
  _CRV,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/requestvalidators", 201],
  },
  () => CreateRequestValidatorRequest,
  () => RequestValidator
);
export var GetRequestValidator = op(
  n0,
  _GRV,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/requestvalidators/{requestValidatorId}", 200],
  },
  () => GetRequestValidatorRequest,
  () => RequestValidator
);
export var GetRequestValidators = op(
  n0,
  _GRVe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/requestvalidators", 200],
  },
  () => GetRequestValidatorsRequest,
  () => RequestValidators
);
export var UpdateRequestValidator = op(
  n0,
  _URV,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/requestvalidators/{requestValidatorId}", 200],
  },
  () => UpdateRequestValidatorRequest,
  () => RequestValidator
);
