// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _DGR,
  _DGRR,
  _dR,
  _GGR,
  _GGRe,
  _GGRR,
  _GGRRe,
  _GR,
  _GRa,
  _hQ,
  _ht,
  _it,
  _ite,
  _jN,
  _li,
  _LOGR,
  _p,
  _PGR,
  _PGRR,
  _pO,
  _rAI,
  _rP,
  _rT,
  _rTe,
  _sC,
  _UGR,
  _UGRR,
  ListOfPatchOperation,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGatewayResponseRequest = struct(
  n0,
  _DGRR,
  0,
  [_rAI, _rT],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GatewayResponse = struct(n0, _GR, 0, [_rT, _sC, _rP, _rTe, _dR], [0, 0, 128 | 0, 128 | 0, 2]);
export var GatewayResponses = struct(
  n0,
  _GRa,
  0,
  [_it, _p],
  [
    [
      () => ListOfGatewayResponse,
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
export var GetGatewayResponseRequest = struct(
  n0,
  _GGRR,
  0,
  [_rAI, _rT],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetGatewayResponsesRequest = struct(
  n0,
  _GGRRe,
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
export var PutGatewayResponseRequest = struct(
  n0,
  _PGRR,
  0,
  [_rAI, _rT, _sC, _rP, _rTe],
  [[0, 1], [0, 1], 0, 128 | 0, 128 | 0]
);
export var UpdateGatewayResponseRequest = struct(
  n0,
  _UGRR,
  0,
  [_rAI, _rT, _pO],
  [[0, 1], [0, 1], () => ListOfPatchOperation]
);
export var ListOfGatewayResponse = list(n0, _LOGR, 0, () => GatewayResponse);
export var DeleteGatewayResponse = op(
  n0,
  _DGR,
  {
    [_ht]: ["DELETE", "/restapis/{restApiId}/gatewayresponses/{responseType}", 202],
  },
  () => DeleteGatewayResponseRequest,
  () => Unit
);
export var GetGatewayResponse = op(
  n0,
  _GGR,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/gatewayresponses/{responseType}", 200],
  },
  () => GetGatewayResponseRequest,
  () => GatewayResponse
);
export var GetGatewayResponses = op(
  n0,
  _GGRe,
  {
    [_ht]: ["GET", "/restapis/{restApiId}/gatewayresponses", 200],
  },
  () => GetGatewayResponsesRequest,
  () => GatewayResponses
);
export var PutGatewayResponse = op(
  n0,
  _PGR,
  {
    [_ht]: ["PUT", "/restapis/{restApiId}/gatewayresponses/{responseType}", 201],
  },
  () => PutGatewayResponseRequest,
  () => GatewayResponse
);
export var UpdateGatewayResponse = op(
  n0,
  _UGR,
  {
    [_ht]: ["PATCH", "/restapis/{restApiId}/gatewayresponses/{responseType}", 200],
  },
  () => UpdateGatewayResponseRequest,
  () => GatewayResponse
);
