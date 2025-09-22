// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ar,
  _CT,
  _D,
  _DE,
  _DEe,
  _DER,
  _DERe,
  _DERes,
  _DEResc,
  _E,
  _EB,
  _EBA,
  _EEB,
  _EEBL,
  _EI,
  _EL,
  _En,
  _EU,
  _FC,
  _HC,
  _HR,
  _LE,
  _LER,
  _LERi,
  _LMT,
  _MR,
  _N,
  _NP,
  _NT,
  _Pr,
  _RAo,
  _RC,
  _RCe,
  _Ro,
  _Se,
  _SR,
  _St,
  _UE,
  _UER,
  _UERp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEndpointRequest = struct(n0, _DER, 0, [_N], [0]);
export var DeleteEndpointResponse = struct(n0, _DERe, 0, [], []);
export var DescribeEndpointRequest = struct(n0, _DERes, 0, [_N, _HR], [0, 0]);
export var DescribeEndpointResponse = struct(
  n0,
  _DEResc,
  0,
  [_N, _D, _Ar, _RC, _RCe, _EB, _RAo, _EI, _EU, _St, _SR, _CT, _LMT],
  [0, 0, 0, () => RoutingConfig, () => ReplicationConfig, () => EndpointEventBusList, 0, 0, 0, 0, 0, 4, 4]
);
export var Endpoint = struct(
  n0,
  _E,
  0,
  [_N, _D, _Ar, _RC, _RCe, _EB, _RAo, _EI, _EU, _St, _SR, _CT, _LMT],
  [0, 0, 0, () => RoutingConfig, () => ReplicationConfig, () => EndpointEventBusList, 0, 0, 0, 0, 0, 4, 4]
);
export var EndpointEventBus = struct(n0, _EEB, 0, [_EBA], [0]);
export var FailoverConfig = struct(n0, _FC, 0, [_Pr, _Se], [() => Primary, () => Secondary]);
export var ListEndpointsRequest = struct(n0, _LER, 0, [_NP, _HR, _NT, _MR], [0, 0, 0, 1]);
export var ListEndpointsResponse = struct(n0, _LERi, 0, [_En, _NT], [() => EndpointList, 0]);
export var Primary = struct(n0, _Pr, 0, [_HC], [0]);
export var ReplicationConfig = struct(n0, _RCe, 0, [_St], [0]);
export var RoutingConfig = struct(n0, _RC, 0, [_FC], [() => FailoverConfig]);
export var Secondary = struct(n0, _Se, 0, [_Ro], [0]);
export var UpdateEndpointRequest = struct(
  n0,
  _UER,
  0,
  [_N, _D, _RC, _RCe, _EB, _RAo],
  [0, 0, () => RoutingConfig, () => ReplicationConfig, () => EndpointEventBusList, 0]
);
export var UpdateEndpointResponse = struct(
  n0,
  _UERp,
  0,
  [_N, _Ar, _RC, _RCe, _EB, _RAo, _EI, _EU, _St],
  [0, 0, () => RoutingConfig, () => ReplicationConfig, () => EndpointEventBusList, 0, 0, 0, 0]
);
export var EndpointEventBusList = list(n0, _EEBL, 0, () => EndpointEventBus);
export var EndpointList = list(n0, _EL, 0, () => Endpoint);
export var DeleteEndpoint = op(
  n0,
  _DE,
  0,
  () => DeleteEndpointRequest,
  () => DeleteEndpointResponse
);
export var DescribeEndpoint = op(
  n0,
  _DEe,
  0,
  () => DescribeEndpointRequest,
  () => DescribeEndpointResponse
);
export var ListEndpoints = op(
  n0,
  _LE,
  0,
  () => ListEndpointsRequest,
  () => ListEndpointsResponse
);
export var UpdateEndpoint = op(
  n0,
  _UE,
  0,
  () => UpdateEndpointRequest,
  () => UpdateEndpointResponse
);
