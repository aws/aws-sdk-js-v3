// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DEB, _DEBR, _N, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteEventBusRequest = struct(n0, _DEBR, 0, [_N], [0]);
export var DeleteEventBus = op(
  n0,
  _DEB,
  0,
  () => DeleteEventBusRequest,
  () => Unit
);
