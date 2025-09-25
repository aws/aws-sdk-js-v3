// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRC, _DRCR, _DRCRe, _h, _RCA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRoutingControlRequest = struct(n0, _DRCR, 0, [_RCA], [[0, 1]]);
export var DeleteRoutingControlResponse = struct(n0, _DRCRe, 0, [], []);
export var DeleteRoutingControl = op(
  n0,
  _DRC,
  {
    [_h]: ["DELETE", "/routingcontrol/{RoutingControlArn}", 200],
  },
  () => DeleteRoutingControlRequest,
  () => DeleteRoutingControlResponse
);
