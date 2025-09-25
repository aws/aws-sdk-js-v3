// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DCREG, _DCREGR, _EGA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteCustomRoutingEndpointGroupRequest = struct(n0, _DCREGR, 0, [_EGA], [0]);
export var DeleteCustomRoutingEndpointGroup = op(
  n0,
  _DCREG,
  0,
  () => DeleteCustomRoutingEndpointGroupRequest,
  () => Unit
);
