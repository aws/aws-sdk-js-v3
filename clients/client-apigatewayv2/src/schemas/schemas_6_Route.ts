// smithy-typescript generated code
import { list, map, op, struct } from "@smithy/core/schema";

import {
  _AGM,
  _aGM,
  _AI,
  _AIu,
  _aIu,
  _AKR,
  _aKR,
  _AS,
  _aS,
  _ATu,
  _aTu,
  _CR,
  _CRR,
  _CRRR,
  _CRRr,
  _CRRre,
  _CRRRr,
  _GR,
  _GRe,
  _GRR,
  _GRRe,
  _GRRet,
  _GRReto,
  _GRRetou,
  _GRRetout,
  _GRRR,
  _GRRRe,
  _GRRRet,
  _GRRReto,
  _hQ,
  _ht,
  _I,
  _i,
  _jN,
  _lOR,
  _lORR,
  _MR,
  _mR,
  _MSE,
  _mSE,
  _NT,
  _nT,
  _ON,
  _oN,
  _PC,
  _R,
  _r,
  _RI,
  _rI,
  _RK,
  _rK,
  _RMe,
  _rMe,
  _RMes,
  _rMes,
  _Ro,
  _RP,
  _rP,
  _RPe,
  _rPe,
  _RPo,
  _RRI,
  _rRI,
  _RRK,
  _rRK,
  _RRo,
  _RRSE,
  _rRSE,
  _Ta,
  _ta,
  _URp,
  _URRp,
  _URRpd,
  _URRpda,
  _URRR,
  _URRRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateRouteRequest = struct(
  n0,
  _CRR,
  0,
  [_AI, _AKR, _AS, _ATu, _AIu, _MSE, _ON, _RMe, _RP, _RK, _RRSE, _Ta],
  [
    [0, 1],
    [
      2,
      {
        [_jN]: _aKR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMe,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rP,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var CreateRouteResponseRequest = struct(
  n0,
  _CRRR,
  0,
  [_AI, _MSE, _RMes, _RPe, _RI, _RRK],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMes,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rPe,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var CreateRouteResponseResponse = struct(
  n0,
  _CRRRr,
  0,
  [_MSE, _RMes, _RPe, _RRI, _RRK],
  [
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMes,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _rRI,
      },
    ],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var CreateRouteResult = struct(
  n0,
  _CRRr,
  0,
  [_AGM, _AKR, _AS, _ATu, _AIu, _MSE, _ON, _RMe, _RP, _RI, _RK, _RRSE, _Ta],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aKR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMe,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rP,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var GetRouteRequest = struct(
  n0,
  _GRR,
  0,
  [_AI, _RI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetRouteResponseRequest = struct(
  n0,
  _GRRR,
  0,
  [_AI, _RI, _RRI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetRouteResponseResponse = struct(
  n0,
  _GRRRe,
  0,
  [_MSE, _RMes, _RPe, _RRI, _RRK],
  [
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMes,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _rRI,
      },
    ],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var GetRouteResponsesRequest = struct(
  n0,
  _GRRRet,
  0,
  [_AI, _MR, _NT, _RI],
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
    [0, 1],
  ]
);
export var GetRouteResponsesResponse = struct(
  n0,
  _GRRReto,
  0,
  [_I, _NT],
  [
    [
      () => __listOfRouteResponse,
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
export var GetRouteResult = struct(
  n0,
  _GRRe,
  0,
  [_AGM, _AKR, _AS, _ATu, _AIu, _MSE, _ON, _RMe, _RP, _RI, _RK, _RRSE, _Ta],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aKR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMe,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rP,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var GetRoutesRequest = struct(
  n0,
  _GRRet,
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
export var GetRoutesResponse = struct(
  n0,
  _GRReto,
  0,
  [_I, _NT],
  [
    [
      () => __listOfRoute,
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
export var ParameterConstraints = struct(
  n0,
  _PC,
  0,
  [_R],
  [
    [
      2,
      {
        [_jN]: _r,
      },
    ],
  ]
);
export var Route = struct(
  n0,
  _Ro,
  0,
  [_AGM, _AKR, _AS, _ATu, _AIu, _MSE, _ON, _RMe, _RP, _RI, _RK, _RRSE, _Ta],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aKR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMe,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rP,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var RouteResponse = struct(
  n0,
  _RRo,
  0,
  [_MSE, _RMes, _RPe, _RRI, _RRK],
  [
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMes,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _rRI,
      },
    ],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var UpdateRouteRequest = struct(
  n0,
  _URRp,
  0,
  [_AI, _AKR, _AS, _ATu, _AIu, _MSE, _ON, _RMe, _RP, _RI, _RK, _RRSE, _Ta],
  [
    [0, 1],
    [
      2,
      {
        [_jN]: _aKR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMe,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rP,
      },
    ],
    [0, 1],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var UpdateRouteResponseRequest = struct(
  n0,
  _URRR,
  0,
  [_AI, _MSE, _RMes, _RPe, _RI, _RRI, _RRK],
  [
    [0, 1],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMes,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rPe,
      },
    ],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var UpdateRouteResponseResponse = struct(
  n0,
  _URRRp,
  0,
  [_MSE, _RMes, _RPe, _RRI, _RRK],
  [
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMes,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rPe,
      },
    ],
    [
      0,
      {
        [_jN]: _rRI,
      },
    ],
    [
      0,
      {
        [_jN]: _rRK,
      },
    ],
  ]
);
export var UpdateRouteResult = struct(
  n0,
  _URRpd,
  0,
  [_AGM, _AKR, _AS, _ATu, _AIu, _MSE, _ON, _RMe, _RP, _RI, _RK, _RRSE, _Ta],
  [
    [
      2,
      {
        [_jN]: _aGM,
      },
    ],
    [
      2,
      {
        [_jN]: _aKR,
      },
    ],
    [
      64 | 0,
      {
        [_jN]: _aS,
      },
    ],
    [
      0,
      {
        [_jN]: _aTu,
      },
    ],
    [
      0,
      {
        [_jN]: _aIu,
      },
    ],
    [
      0,
      {
        [_jN]: _mSE,
      },
    ],
    [
      0,
      {
        [_jN]: _oN,
      },
    ],
    [
      128 | 0,
      {
        [_jN]: _rMe,
      },
    ],
    [
      () => RouteParameters,
      {
        [_jN]: _rP,
      },
    ],
    [
      0,
      {
        [_jN]: _rI,
      },
    ],
    [
      0,
      {
        [_jN]: _rK,
      },
    ],
    [
      0,
      {
        [_jN]: _rRSE,
      },
    ],
    [
      0,
      {
        [_jN]: _ta,
      },
    ],
  ]
);
export var __listOfRoute = list(n0, _lOR, 0, [() => Route, 0]);
export var __listOfRouteResponse = list(n0, _lORR, 0, [() => RouteResponse, 0]);
export var AuthorizationScopes = 64 | 0;

export var RouteModels = 128 | 0;

export var RouteParameters = map(n0, _RPo, 0, [0, 0], [() => ParameterConstraints, 0]);
export var CreateRoute = op(
  n0,
  _CR,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/routes", 201],
  },
  () => CreateRouteRequest,
  () => CreateRouteResult
);
export var CreateRouteResponse = op(
  n0,
  _CRRre,
  {
    [_ht]: ["POST", "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses", 201],
  },
  () => CreateRouteResponseRequest,
  () => CreateRouteResponseResponse
);
export var GetRoute = op(
  n0,
  _GR,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/routes/{RouteId}", 200],
  },
  () => GetRouteRequest,
  () => GetRouteResult
);
export var GetRouteResponse = op(
  n0,
  _GRRetou,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}", 200],
  },
  () => GetRouteResponseRequest,
  () => GetRouteResponseResponse
);
export var GetRouteResponses = op(
  n0,
  _GRRetout,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses", 200],
  },
  () => GetRouteResponsesRequest,
  () => GetRouteResponsesResponse
);
export var GetRoutes = op(
  n0,
  _GRe,
  {
    [_ht]: ["GET", "/v2/apis/{ApiId}/routes", 200],
  },
  () => GetRoutesRequest,
  () => GetRoutesResponse
);
export var UpdateRoute = op(
  n0,
  _URp,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/routes/{RouteId}", 200],
  },
  () => UpdateRouteRequest,
  () => UpdateRouteResult
);
export var UpdateRouteResponse = op(
  n0,
  _URRpda,
  {
    [_ht]: ["PATCH", "/v2/apis/{ApiId}/routes/{RouteId}/routeresponses/{RouteResponseId}", 200],
  },
  () => UpdateRouteResponseRequest,
  () => UpdateRouteResponseResponse
);
