// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DE, _DER, _DERe, _eA, _eTnd, _h, _hQ, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeEndpointRequest = struct(
  n0,
  _DER,
  0,
  [_eTnd],
  [
    [
      0,
      {
        [_hQ]: _eTnd,
      },
    ],
  ]
);
export var DescribeEndpointResponse = struct(n0, _DERe, 0, [_eA], [0]);
export var DescribeEndpoint = op(
  n0,
  _DE,
  {
    [_h]: ["GET", "/endpoint", 200],
  },
  () => DescribeEndpointRequest,
  () => DescribeEndpointResponse
);
