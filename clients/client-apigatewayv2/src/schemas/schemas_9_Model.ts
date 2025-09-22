// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AI,
  _CM,
  _CMR,
  _CMRr,
  _CTo,
  _cTo,
  _D,
  _d,
  _GM,
  _GMe,
  _GMR,
  _GMRe,
  _GMRet,
  _GMReto,
  _hQ,
  _ht,
  _I,
  _i,
  _jN,
  _lOM,
  _MI,
  _mI,
  _Mo,
  _MR,
  _mR,
  _N,
  _n,
  _NT,
  _nT,
  _Sc,
  _sc,
  _UM,
  _UMR,
  _UMRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateModelRequest = struct(
  n0,
  _CMR,
  0,
  [_AI, _CTo, _D, _N, _Sc],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var CreateModelResponse = struct(
  n0,
  _CMRr,
  0,
  [_CTo, _D, _MI, _N, _Sc],
  [
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var GetModelRequest = struct(
  n0,
  _GMR,
  0,
  [_AI, _MI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetModelResponse = struct(
  n0,
  _GMRe,
  0,
  [_CTo, _D, _MI, _N, _Sc],
  [
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var GetModelsRequest = struct(
  n0,
  _GMRet,
  0,
  [_AI, _MR, _NT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var GetModelsResponse = struct(
  n0,
  _GMReto,
  0,
  [_I, _NT],
  [
    [
      () => __listOfModel,
      {
        [_jN]: _i,
      },
    ],
    [
      0,
      {
        [_jN]: _nT,
      },
    ],
  ]
);
export var Model = struct(
  n0,
  _Mo,
  0,
  [_CTo, _D, _MI, _N, _Sc],
  [
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var UpdateModelRequest = struct(
  n0,
  _UMR,
  0,
  [_AI, _CTo, _D, _MI, _N, _Sc],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var UpdateModelResponse = struct(
  n0,
  _UMRp,
  0,
  [_CTo, _D, _MI, _N, _Sc],
  [
    [
      0,
      {
        [_jN]: _cTo,
      },
    ],
    [
      0,
      {
        [_jN]: _d,
      },
    ],
    [
      0,
      {
        [_jN]: _mI,
      },
    ],
    [
      0,
      {
        [_jN]: _n,
      },
    ],
    [
      0,
      {
        [_jN]: _sc,
      },
    ],
  ]
);
export var __listOfModel = list(n0, _lOM, 0, [() => Model, 0]);
export var CreateModel = op(
  n0,
  _CM,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/models", 201],
  },
  () => CreateModelRequest,
  () => CreateModelResponse
);
export var GetModel = op(
  n0,
  _GM,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/models/{ModelId}", 200],
  },
  () => GetModelRequest,
  () => GetModelResponse
);
export var GetModels = op(
  n0,
  _GMe,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/models", 200],
  },
  () => GetModelsRequest,
  () => GetModelsResponse
);
export var UpdateModel = op(
  n0,
  _UM,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/models/{ModelId}", 200],
  },
  () => UpdateModelRequest,
  () => UpdateModelResponse
);
