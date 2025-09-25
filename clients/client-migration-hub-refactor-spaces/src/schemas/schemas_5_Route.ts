// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _A,
  _AI,
  _AIp,
  _ASc,
  _ASP,
  _CBAI,
  _CT,
  _D,
  _E,
  _EI,
  _EIn,
  _ET,
  _GR,
  _GRR,
  _GRRe,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _HU,
  _ICP,
  _LE,
  _LEC,
  _LUT,
  _Me,
  _N,
  _OAI,
  _PRTI,
  _RIo,
  _RIou,
  _RTo,
  _S,
  _SI,
  _SIe,
  _SP,
  _T,
  _U,
  _UE,
  _UEC,
  _URp,
  _URRp,
  _URRpd,
  _VI,
  n0,
  TagMap,
} from "./schemas_0";
import { ErrorResponse } from "./schemas_6_Get";

/* eslint no-var: 0 */

export var GetRouteRequest = struct(
  n0,
  _GRR,
  0,
  [_EIn, _AIp, _RIou],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetRouteResponse = struct(
  n0,
  _GRRe,
  0,
  [_RIo, _A, _OAI, _CBAI, _RTo, _SIe, _AI, _EI, _SP, _Me, _ICP, _PRTI, _S, _T, _E, _LUT, _CT, _ASP],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0, 2, 128 | 0, 0, [() => TagMap, 0], () => ErrorResponse, 4, 4, 2]
);
export var GetServiceRequest = struct(
  n0,
  _GSR,
  0,
  [_EIn, _AIp, _SI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetServiceResponse = struct(
  n0,
  _GSRe,
  0,
  [_SIe, _N, _A, _OAI, _CBAI, _D, _EI, _AI, _VI, _ET, _UE, _LE, _S, _T, _E, _LUT, _CT],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => UrlEndpointConfig,
    () => LambdaEndpointConfig,
    0,
    [() => TagMap, 0],
    () => ErrorResponse,
    4,
    4,
  ]
);
export var LambdaEndpointConfig = struct(n0, _LEC, 0, [_A], [0]);
export var UpdateRouteRequest = struct(n0, _URRp, 0, [_EIn, _AIp, _RIou, _ASc], [[0, 1], [0, 1], [0, 1], 0]);
export var UpdateRouteResponse = struct(n0, _URRpd, 0, [_RIo, _A, _SIe, _AI, _S, _LUT], [0, 0, 0, 0, 0, 4]);
export var UrlEndpointConfig = struct(n0, _UEC, 0, [_U, _HU], [0, 0]);
export var HttpMethods = 64 | 0;

export var PathResourceToId = 128 | 0;

export var GetRoute = op(
  n0,
  _GR,
  {
    [_h]: [
      "GET",
      "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
      200,
    ],
  },
  () => GetRouteRequest,
  () => GetRouteResponse
);
export var GetService = op(
  n0,
  _GS,
  {
    [_h]: [
      "GET",
      "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/services/{ServiceIdentifier}",
      200,
    ],
  },
  () => GetServiceRequest,
  () => GetServiceResponse
);
export var UpdateRoute = op(
  n0,
  _URp,
  {
    [_h]: [
      "PATCH",
      "/environments/{EnvironmentIdentifier}/applications/{ApplicationIdentifier}/routes/{RouteIdentifier}",
      200,
    ],
  },
  () => UpdateRouteRequest,
  () => UpdateRouteResponse
);
