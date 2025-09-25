// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CM,
  _CMR,
  _cT,
  _d,
  _fl,
  _GMe,
  _GMet,
  _GMRe,
  _GMRet,
  _hQ,
  _ht,
  _i,
  _it,
  _ite,
  _jN,
  _li,
  _LOM,
  _mN,
  _Mo,
  _Mod,
  _n,
  _p,
  _pO,
  _rAI,
  _sc,
  _UMp,
  _UMRp,
  ListOfPatchOperation,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateModelRequest = struct(n0, _CMR, 0, [_rAI, _n, _d, _sc, _cT], [[0, 1], 0, 0, 0, 0]);
export var GetModelRequest = struct(
  n0,
  _GMRe,
  0,
  [_rAI, _mN, _fl],
  [
    [0, 1],
    [0, 1],
    [
      2,
      {
        [_hQ]: _fl,
      },
    ],
  ]
);
export var GetModelsRequest = struct(
  n0,
  _GMRet,
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
export var Model = struct(n0, _Mo, 0, [_i, _n, _d, _sc, _cT], [0, 0, 0, 0, 0]);
export var Models = struct(
  n0,
  _Mod,
  0,
  [_it, _p],
  [
    [
      () => ListOfModel,
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
export var UpdateModelRequest = struct(n0, _UMRp, 0, [_rAI, _mN, _pO], [[0, 1], [0, 1], () => ListOfPatchOperation]);
export var ListOfModel = list(n0, _LOM, 0, () => Model);
export var CreateModel = op(
  n0,
  _CM,
  {
    [_ht]: ["POST", "/restapis/{restApiId}/models", 201],
  },
  () => CreateModelRequest,
  () => Model
);
export var GetModel = op(
  n0,
  _GMe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/models/{modelName}", 200],
  },
  () => GetModelRequest,
  () => Model
);
export var GetModels = op(
  n0,
  _GMet,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/models", 200],
  },
  () => GetModelsRequest,
  () => Models
);
export var UpdateModel = op(
  n0,
  _UMp,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/models/{modelName}", 200],
  },
  () => UpdateModelRequest,
  () => Model
);
