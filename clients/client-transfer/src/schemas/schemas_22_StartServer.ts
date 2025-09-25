// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _SI, _SS, _SSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartServerRequest = struct(n0, _SSR, 0, [_SI], [0]);
export var StartServer = op(
  n0,
  _SS,
  0,
  () => StartServerRequest,
  () => Unit
);
