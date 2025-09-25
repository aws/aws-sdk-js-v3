// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWG, _DWGR, _DWGRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWirelessGatewayRequest = struct(n0, _DWGR, 0, [_I], [[0, 1]]);
export var DeleteWirelessGatewayResponse = struct(n0, _DWGRe, 0, [], []);
export var DeleteWirelessGateway = op(
  n0,
  _DWG,
  {
    [_h]: ["DELETE", "/wireless-gateways/{Id}", 204],
  },
  () => DeleteWirelessGatewayRequest,
  () => DeleteWirelessGatewayResponse
);
