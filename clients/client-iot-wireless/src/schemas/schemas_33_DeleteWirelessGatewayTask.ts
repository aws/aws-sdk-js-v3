// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWGT, _DWGTR, _DWGTRe, _h, _I, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWirelessGatewayTaskRequest = struct(n0, _DWGTR, 0, [_I], [[0, 1]]);
export var DeleteWirelessGatewayTaskResponse = struct(n0, _DWGTRe, 0, [], []);
export var DeleteWirelessGatewayTask = op(
  n0,
  _DWGT,
  {
    [_h]: ["DELETE", "/wireless-gateways/{Id}/tasks", 204],
  },
  () => DeleteWirelessGatewayTaskRequest,
  () => DeleteWirelessGatewayTaskResponse
);
