// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ResourceAlreadyExistsException as __ResourceAlreadyExistsException } from "../models/index";
import {
  _Ar,
  _c,
  _CE,
  _CER,
  _CERr,
  _D,
  _De,
  _e,
  _EB,
  _EET,
  _ESA,
  _EST,
  _m,
  _N,
  _RA,
  _RAEE,
  _RAo,
  _RC,
  _RCe,
  _RN,
  _RST,
  _SR,
  _SRR,
  _SRRt,
  _SRt,
  _St,
  n0,
} from "./schemas_0";
import { EndpointEventBusList, ReplicationConfig, RoutingConfig } from "./schemas_3_Endpoint";
import { ReplayDestination } from "./schemas_23_Resource";

/* eslint no-var: 0 */

export var CreateEndpointRequest = struct(
  n0,
  _CER,
  0,
  [_N, _D, _RC, _RCe, _EB, _RAo],
  [0, 0, () => RoutingConfig, () => ReplicationConfig, () => EndpointEventBusList, 0]
);
export var CreateEndpointResponse = struct(
  n0,
  _CERr,
  0,
  [_N, _Ar, _RC, _RCe, _EB, _RAo, _St],
  [0, 0, () => RoutingConfig, () => ReplicationConfig, () => EndpointEventBusList, 0, 0]
);
export var ResourceAlreadyExistsException = error(
  n0,
  _RAEE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ResourceAlreadyExistsException
);
export var StartReplayRequest = struct(
  n0,
  _SRR,
  0,
  [_RN, _D, _ESA, _EST, _EET, _De],
  [0, 0, 0, 4, 4, () => ReplayDestination]
);
export var StartReplayResponse = struct(n0, _SRRt, 0, [_RA, _St, _SR, _RST], [0, 0, 0, 4]);
export var CreateEndpoint = op(
  n0,
  _CE,
  0,
  () => CreateEndpointRequest,
  () => CreateEndpointResponse
);
export var StartReplay = op(
  n0,
  _SRt,
  0,
  () => StartReplayRequest,
  () => StartReplayResponse
);
