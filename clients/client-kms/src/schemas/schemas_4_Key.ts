// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _KI, _PR, _UPR, _UPRR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdatePrimaryRegionRequest = struct(n0, _UPRR, 0, [_KI, _PR], [0, 0]);
export var UpdatePrimaryRegion = op(
  n0,
  _UPR,
  0,
  () => UpdatePrimaryRegionRequest,
  () => Unit
);
