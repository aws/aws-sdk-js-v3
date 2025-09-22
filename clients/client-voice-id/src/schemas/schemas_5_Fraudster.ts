// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _DF, _DFR, _DI, _FI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var FraudsterId = sim(n0, _FI, 0, 8);
export var DeleteFraudsterRequest = struct(n0, _DFR, 0, [_DI, _FI], [0, [() => FraudsterId, 0]]);
export var DeleteFraudster = op(
  n0,
  _DF,
  0,
  () => DeleteFraudsterRequest,
  () => Unit
);
