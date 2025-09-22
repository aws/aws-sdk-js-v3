// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CRI,
  _CTr,
  _D,
  _DRE,
  _DRER,
  _DRERe,
  _GRE,
  _GRER,
  _GRERe,
  _HVPCI,
  _I,
  _IAC,
  _MT,
  _N,
  _OA,
  _PIT,
  _Pr,
  _RE,
  _REI,
  _RET,
  _S,
  _SGI,
  _SM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResolverEndpointRequest = struct(n0, _DRER, 0, [_REI], [0]);
export var DeleteResolverEndpointResponse = struct(n0, _DRERe, 0, [_RE], [() => ResolverEndpoint]);
export var GetResolverEndpointRequest = struct(n0, _GRER, 0, [_REI], [0]);
export var GetResolverEndpointResponse = struct(n0, _GRERe, 0, [_RE], [() => ResolverEndpoint]);
export var ResolverEndpoint = struct(
  n0,
  _RE,
  0,
  [_I, _CRI, _Ar, _N, _SGI, _D, _IAC, _HVPCI, _S, _SM, _CTr, _MT, _OA, _PIT, _RET, _Pr],
  [0, 0, 0, 0, 64 | 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 64 | 0]
);
export var ProtocolList = 64 | 0;

export var SecurityGroupIds = 64 | 0;

export var DeleteResolverEndpoint = op(
  n0,
  _DRE,
  0,
  () => DeleteResolverEndpointRequest,
  () => DeleteResolverEndpointResponse
);
export var GetResolverEndpoint = op(
  n0,
  _GRE,
  0,
  () => GetResolverEndpointRequest,
  () => GetResolverEndpointResponse
);
