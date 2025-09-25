// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _D, _h, _I, _JEF, _ME, _N, _NIF, _UWG, _UWGR, _UWGRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateWirelessGatewayRequest = struct(
  n0,
  _UWGR,
  0,
  [_I, _N, _D, _JEF, _NIF, _ME],
  [[0, 1], 0, 0, list(n0, _JEF, 0, 64 | 0), 64 | 0, 1]
);
export var UpdateWirelessGatewayResponse = struct(n0, _UWGRp, 0, [], []);
export var JoinEuiFilters = list(n0, _JEF, 0, 64 | 0);
export var JoinEuiRange = 64 | 0;

export var NetIdFilters = 64 | 0;

export var UpdateWirelessGateway = op(
  n0,
  _UWG,
  {
    [_h]: ["PATCH", "/wireless-gateways/{Id}", 204],
  },
  () => UpdateWirelessGatewayRequest,
  () => UpdateWirelessGatewayResponse
);
