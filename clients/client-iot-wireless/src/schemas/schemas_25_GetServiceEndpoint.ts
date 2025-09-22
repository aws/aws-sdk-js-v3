// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GSE, _GSER, _GSERe, _h, _hQ, _SE, _sT, _STe, _STer, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetServiceEndpointRequest = struct(
  n0,
  _GSER,
  0,
  [_STe],
  [
    [
      0,
      {
        [_hQ]: _sT,
      },
    ],
  ]
);
export var GetServiceEndpointResponse = struct(n0, _GSERe, 0, [_STe, _SE, _STer], [0, 0, 0]);
export var GetServiceEndpoint = op(
  n0,
  _GSE,
  {
    [_h]: ["GET", "/service-endpoint", 200],
  },
  () => GetServiceEndpointRequest,
  () => GetServiceEndpointResponse
);
