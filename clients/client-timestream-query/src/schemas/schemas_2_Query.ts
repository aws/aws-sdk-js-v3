// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Ad, _CPIM, _DE, _DER, _DERe, _E, _En, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEndpointsRequest = struct(n0, _DER, 0, [], []);
export var DescribeEndpointsResponse = struct(n0, _DERe, 0, [_E], [() => Endpoints]);
export var Endpoint = struct(n0, _En, 0, [_Ad, _CPIM], [0, 1]);
export var Endpoints = list(n0, _E, 0, () => Endpoint);
export var DescribeEndpoints = op(
  n0,
  _DE,
  0,
  () => DescribeEndpointsRequest,
  () => DescribeEndpointsResponse
);
