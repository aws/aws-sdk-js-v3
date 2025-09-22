// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AK,
  _aK,
  _AKp,
  _CAK,
  _CAKR,
  _cD,
  _cI,
  _d,
  _e,
  _GAK,
  _GAKe,
  _GAKR,
  _GAKRe,
  _gDI,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _iV,
  _iVn,
  _jN,
  _li,
  _LOAK,
  _LOSK,
  _lUD,
  _n,
  _nQ,
  _p,
  _pO,
  _rAI,
  _SK,
  _sK,
  _sN,
  _t,
  _UAK,
  _UAKR,
  _v,
  _w,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApiKey = struct(
  n0,
  _AK,
  0,
  [_i, _v, _n, _cI, _d, _e, _cD, _lUD, _sK, _t],
  [0, 0, 0, 0, 0, 2, 4, 4, 64 | 0, 128 | 0]
);
export var ApiKeys = struct(
  n0,
  _AKp,
  0,
  [_w, _it, _p],
  [
    64 | 0,
    [
      () => ListOfApiKey,
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
export var CreateApiKeyRequest = struct(
  n0,
  _CAKR,
  0,
  [_n, _d, _e, _gDI, _v, _sK, _cI, _t],
  [0, 0, 2, 2, 0, () => ListOfStageKeys, 0, 128 | 0]
);
export var GetApiKeyRequest = struct(
  n0,
  _GAKR,
  0,
  [_aK, _iV],
  [
    [0, 1],
    [
      2,
      {
        [_hQ]: _iV,
      },
    ],
  ]
);
export var GetApiKeysRequest = struct(
  n0,
  _GAKRe,
  0,
  [_p, _li, _nQ, _cI, _iVn],
  [
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
    [
      0,
      {
        [_hQ]: _n,
      },
    ],
    [
      0,
      {
        [_hQ]: _cI,
      },
    ],
    [
      2,
      {
        [_hQ]: _iVn,
      },
    ],
  ]
);
export var StageKey = struct(n0, _SK, 0, [_rAI, _sN], [0, 0]);
export var UpdateApiKeyRequest = struct(n0, _UAKR, 0, [_aK, _pO], [[0, 1], () => ListOfPatchOperation]);
export var ListOfApiKey = list(n0, _LOAK, 0, () => ApiKey);
export var ListOfStageKeys = list(n0, _LOSK, 0, () => StageKey);
export var CreateApiKey = op(
  n0,
  _CAK,
  {
    [_ht]: ["POST", "/apikeys", 201],
  },
  () => CreateApiKeyRequest,
  () => ApiKey
);
export var GetApiKey = op(
  n0,
  _GAK,
  {
    [_ht]: ["GET", "/apikeys/{apiKey}", 200],
  },
  () => GetApiKeyRequest,
  () => ApiKey
);
export var GetApiKeys = op(
  n0,
  _GAKe,
  {
    [_ht]: ["GET", "/apikeys", 200],
  },
  () => GetApiKeysRequest,
  () => ApiKeys
);
export var UpdateApiKey = op(
  n0,
  _UAK,
  {
    [_ht]: ["PATCH", "/apikeys/{apiKey}", 200],
  },
  () => UpdateApiKeyRequest,
  () => ApiKey
);
