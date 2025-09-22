// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _DGRe, _GA, _gA, _h, _jN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGatewayRequest = struct(n0, _DGR, 0, [_GA], [[0, 1]]);
export var DeleteGatewayResponse = struct(
  n0,
  _DGRe,
  0,
  [_GA],
  [
    [
      0,
      {
        [_jN]: _gA,
      },
    ],
  ]
);
export var DeleteGateway = op(
  n0,
  _DG,
  {
    [_h]: ["DELETE", "/v1/gateways/{GatewayArn}", 200],
  },
  () => DeleteGatewayRequest,
  () => DeleteGatewayResponse
);
