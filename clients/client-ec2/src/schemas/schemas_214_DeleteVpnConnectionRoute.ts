// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCB, _DVCRel, _DVCRR, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteVpnConnectionRouteRequest = struct(n0, _DVCRR, 0, [_DCB, _VCI], [0, 0]);
export var DeleteVpnConnectionRoute = op(
  n0,
  _DVCRel,
  0,
  () => DeleteVpnConnectionRouteRequest,
  () => Unit
);
