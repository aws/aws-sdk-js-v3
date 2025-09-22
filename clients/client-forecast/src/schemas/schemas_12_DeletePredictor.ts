// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DP, _DPR, _PA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePredictorRequest = struct(n0, _DPR, 0, [_PA], [0]);
export var DeletePredictor = op(
  n0,
  _DP,
  2,
  () => DeletePredictorRequest,
  () => Unit
);
