// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _AZ,
  _BGDE,
  _BGDER,
  _BGDERa,
  _CTrea,
  _DE,
  _DEe,
  _DEL,
  _DEN,
  _DENF,
  _EJSP,
  _EN,
  _EPLSP,
  _FR,
  _GDE,
  _GDEe,
  _GDER,
  _GDERe,
  _GDERet,
  _GDERete,
  _GV,
  _LMT,
  _LUS,
  _MRax,
  _NONu,
  _NOW,
  _NTe,
  _PAr,
  _PAu,
  _PKu,
  _PKub,
  _RA,
  _SC,
  _SGI,
  _SIu,
  _St,
  _VIp,
  _WT,
  _YEA,
  _ZRSIP,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var BatchGetDevEndpointsRequest = struct(n0, _BGDER, 0, [_DEN], [64 | 0]);
export var BatchGetDevEndpointsResponse = struct(n0, _BGDERa, 0, [_DE, _DENF], [() => DevEndpointList, 64 | 0]);
export var DevEndpoint = struct(
  n0,
  _DEe,
  0,
  [
    _EN,
    _RA,
    _SGI,
    _SIu,
    _YEA,
    _PAr,
    _ZRSIP,
    _PAu,
    _St,
    _WT,
    _GV,
    _NOW,
    _NONu,
    _AZ,
    _VIp,
    _EPLSP,
    _EJSP,
    _FR,
    _LUS,
    _CTrea,
    _LMT,
    _PKu,
    _PKub,
    _SC,
    _Ar,
  ],
  [0, 0, 64 | 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 4, 4, 0, 64 | 0, 0, 128 | 0]
);
export var GetDevEndpointRequest = struct(n0, _GDER, 0, [_EN], [0]);
export var GetDevEndpointResponse = struct(n0, _GDERe, 0, [_DEe], [() => DevEndpoint]);
export var GetDevEndpointsRequest = struct(n0, _GDERet, 0, [_MRax, _NTe], [1, 0]);
export var GetDevEndpointsResponse = struct(n0, _GDERete, 0, [_DE, _NTe], [() => DevEndpointList, 0]);
export var DevEndpointList = list(n0, _DEL, 0, () => DevEndpoint);
export var DevEndpointNames = 64 | 0;

export var PublicKeysList = 64 | 0;

export var StringList = 64 | 0;

export var MapValue = 128 | 0;

export var BatchGetDevEndpoints = op(
  n0,
  _BGDE,
  0,
  () => BatchGetDevEndpointsRequest,
  () => BatchGetDevEndpointsResponse
);
export var GetDevEndpoint = op(
  n0,
  _GDE,
  0,
  () => GetDevEndpointRequest,
  () => GetDevEndpointResponse
);
export var GetDevEndpoints = op(
  n0,
  _GDEe,
  0,
  () => GetDevEndpointsRequest,
  () => GetDevEndpointsResponse
);
