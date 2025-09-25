// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CVCRR, _CVCRre, _DCB, _VCI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var CreateVpnConnectionRouteRequest = struct(n0, _CVCRR, 0, [_DCB, _VCI], [0, 0]);
export var CreateVpnConnectionRoute = op(
  n0,
  _CVCRre,
  0,
  () => CreateVpnConnectionRouteRequest,
  () => Unit
);
