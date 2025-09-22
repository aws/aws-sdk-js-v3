// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DSe, _DSI, _SI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteScriptInput = struct(n0, _DSI, 0, [_SI], [0]);
export var DeleteScript = op(
  n0,
  _DSe,
  0,
  () => DeleteScriptInput,
  () => Unit
);
