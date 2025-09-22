// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CMRE,
  _CMRER,
  _CMRERr,
  _CTr,
  _Det,
  _EIn,
  _EN,
  _GMRE,
  _GMRER,
  _GMRERe,
  _h,
  _hQ,
  _LMRE,
  _LMRER,
  _LMRERi,
  _LUT,
  _MRE,
  _MREu,
  _NT,
  _PS,
  _RDo,
  _RDou,
  _Reg,
  _Regi,
  _Ro,
  _Rou,
  _S,
  _Ta,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateMultiRegionEndpointRequest = struct(
  n0,
  _CMRER,
  0,
  [_EN, _Det, _Ta],
  [0, () => Details, () => TagList]
);
export var CreateMultiRegionEndpointResponse = struct(n0, _CMRERr, 0, [_S, _EIn], [0, 0]);
export var Details = struct(n0, _Det, 0, [_RDo], [() => RoutesDetails]);
export var GetMultiRegionEndpointRequest = struct(n0, _GMRER, 0, [_EN], [[0, 1]]);
export var GetMultiRegionEndpointResponse = struct(
  n0,
  _GMRERe,
  0,
  [_EN, _EIn, _Ro, _S, _CTr, _LUT],
  [0, 0, () => Routes, 0, 4, 4]
);
export var ListMultiRegionEndpointsRequest = struct(
  n0,
  _LMRER,
  0,
  [_NT, _PS],
  [
    [
      0,
      {
        [_hQ]: _NT,
      },
    ],
    [
      1,
      {
        [_hQ]: _PS,
      },
    ],
  ]
);
export var ListMultiRegionEndpointsResponse = struct(n0, _LMRERi, 0, [_MRE, _NT], [() => MultiRegionEndpoints, 0]);
export var MultiRegionEndpoint = struct(n0, _MREu, 0, [_EN, _S, _EIn, _Reg, _CTr, _LUT], [0, 0, 0, 64 | 0, 4, 4]);
export var Route = struct(n0, _Rou, 0, [_Regi], [0]);
export var RouteDetails = struct(n0, _RDou, 0, [_Regi], [0]);
export var MultiRegionEndpoints = list(n0, _MRE, 0, () => MultiRegionEndpoint);
export var Regions = 64 | 0;

export var Routes = list(n0, _Ro, 0, () => Route);
export var RoutesDetails = list(n0, _RDo, 0, () => RouteDetails);
export var CreateMultiRegionEndpoint = op(
  n0,
  _CMRE,
  {
    [_h]: ["POST", "/v2/email/multi-region-endpoints", 200],
  },
  () => CreateMultiRegionEndpointRequest,
  () => CreateMultiRegionEndpointResponse
);
export var GetMultiRegionEndpoint = op(
  n0,
  _GMRE,
  {
    [_h]: ["GET", "/v2/email/multi-region-endpoints/{EndpointName}", 200],
  },
  () => GetMultiRegionEndpointRequest,
  () => GetMultiRegionEndpointResponse
);
export var ListMultiRegionEndpoints = op(
  n0,
  _LMRE,
  {
    [_h]: ["GET", "/v2/email/multi-region-endpoints", 200],
  },
  () => ListMultiRegionEndpointsRequest,
  () => ListMultiRegionEndpointsResponse
);
