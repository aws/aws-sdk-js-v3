// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DO, _DOR, _DORe, _n, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteOutcomeRequest = struct(n0, _DOR, 0, [_n], [0]);
export var DeleteOutcomeResult = struct(n0, _DORe, 0, [], []);
export var DeleteOutcome = op(
  n0,
  _DO,
  0,
  () => DeleteOutcomeRequest,
  () => DeleteOutcomeResult
);
