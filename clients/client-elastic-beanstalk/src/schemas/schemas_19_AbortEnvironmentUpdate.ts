// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AEU, _AEUM, _EI, _EN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AbortEnvironmentUpdateMessage = struct(n0, _AEUM, 0, [_EI, _EN], [0, 0]);
export var AbortEnvironmentUpdate = op(
  n0,
  _AEU,
  0,
  () => AbortEnvironmentUpdateMessage,
  () => Unit
);
