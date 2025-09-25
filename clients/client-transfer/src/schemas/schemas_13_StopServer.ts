// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _SI, _SSRt, _SSt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopServerRequest = struct(n0, _SSRt, 0, [_SI], [0]);
export var StopServer = op(
  n0,
  _SSt,
  0,
  () => StopServerRequest,
  () => Unit
);
