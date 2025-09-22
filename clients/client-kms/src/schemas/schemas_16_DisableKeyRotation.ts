// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DKRis, _DKRR, _KI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DisableKeyRotationRequest = struct(n0, _DKRR, 0, [_KI], [0]);
export var DisableKeyRotation = op(
  n0,
  _DKRis,
  0,
  () => DisableKeyRotationRequest,
  () => Unit
);
