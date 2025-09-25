// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _EI, _EN, _RAS, _RASM, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var RestartAppServerMessage = struct(n0, _RASM, 0, [_EI, _EN], [0, 0]);
export var RestartAppServer = op(
  n0,
  _RAS,
  0,
  () => RestartAppServerMessage,
  () => Unit
);
