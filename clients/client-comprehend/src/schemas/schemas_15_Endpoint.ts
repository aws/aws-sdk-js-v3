// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CIU,
  _CT,
  _CTA,
  _CTB,
  _DARA,
  _DDARA,
  _DE,
  _DEe,
  _DER,
  _DERe,
  _DERes,
  _DEResc,
  _DIU,
  _DMA,
  _EA,
  _EF,
  _EP,
  _EPL,
  _F,
  _FA,
  _LE,
  _LER,
  _LERi,
  _LMT,
  _M,
  _MA,
  _MRa,
  _NT,
  _St,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEndpointRequest = struct(n0, _DER, 0, [_EA], [0]);
export var DeleteEndpointResponse = struct(n0, _DERe, 0, [], []);
export var DescribeEndpointRequest = struct(n0, _DERes, 0, [_EA], [0]);
export var DescribeEndpointResponse = struct(n0, _DEResc, 0, [_EP], [() => EndpointProperties]);
export var EndpointFilter = struct(n0, _EF, 0, [_MA, _St, _CTB, _CTA], [0, 0, 4, 4]);
export var EndpointProperties = struct(
  n0,
  _EP,
  0,
  [_EA, _St, _M, _MA, _DMA, _DIU, _CIU, _CT, _LMT, _DARA, _DDARA, _FA],
  [0, 0, 0, 0, 0, 1, 1, 4, 4, 0, 0, 0]
);
export var ListEndpointsRequest = struct(n0, _LER, 0, [_F, _NT, _MRa], [() => EndpointFilter, 0, 1]);
export var ListEndpointsResponse = struct(n0, _LERi, 0, [_EPL, _NT], [() => EndpointPropertiesList, 0]);
export var EndpointPropertiesList = list(n0, _EPL, 0, () => EndpointProperties);
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
