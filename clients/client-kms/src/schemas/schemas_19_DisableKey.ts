// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKi, _DKRi, _KI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableKeyRequest = struct(n0, _DKRi, 0, [_KI], [0]);
export var DisableKey = op(
  n0,
  _DKi,
  0,
  () => DisableKeyRequest,
  () => Unit
);
