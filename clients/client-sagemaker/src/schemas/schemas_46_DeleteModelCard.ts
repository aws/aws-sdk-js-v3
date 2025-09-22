// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMC, _DMCR, _MCN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteModelCardRequest = struct(n0, _DMCR, 0, [_MCN], [0]);
export var DeleteModelCard = op(
  n0,
  _DMC,
  0,
  () => DeleteModelCardRequest,
  () => Unit
);
