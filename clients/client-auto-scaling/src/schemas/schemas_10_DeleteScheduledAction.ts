// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ASGN, _DSA, _DSAT, _SANc, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteScheduledActionType = struct(n0, _DSAT, 0, [_ASGN, _SANc], [0, 0]);
export var DeleteScheduledAction = op(
  n0,
  _DSA,
  0,
  () => DeleteScheduledActionType,
  () => Unit
);
