// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DG, _DGR, _end, _gI, _ht, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteGatewayRequest = struct(n0, _DGR, 0, [_gI], [[0, 1]]);
export var DeleteGateway = op(
  n0,
  _DG,
  {
    [_ht]: ["DELETE", "/20200301/gateways/{gatewayId}", 200],
    [_end]: ["api."],
  },
  () => DeleteGatewayRequest,
  () => Unit
);
