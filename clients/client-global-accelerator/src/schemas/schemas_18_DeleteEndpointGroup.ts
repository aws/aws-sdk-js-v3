// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEG, _DEGR, _EGA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEndpointGroupRequest = struct(n0, _DEGR, 0, [_EGA], [0]);
export var DeleteEndpointGroup = op(
  n0,
  _DEG,
  0,
  () => DeleteEndpointGroupRequest,
  () => Unit
);
