// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSe, _DSR, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteServerRequest = struct(n0, _DSR, 0, [_SI], [0]);
export var DeleteServer = op(
  n0,
  _DSe,
  2,
  () => DeleteServerRequest,
  () => Unit
);
