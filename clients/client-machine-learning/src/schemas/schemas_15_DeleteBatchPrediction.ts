// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BPI, _DBP, _DBPI, _DBPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBatchPredictionInput = struct(n0, _DBPI, 0, [_BPI], [0]);
export var DeleteBatchPredictionOutput = struct(n0, _DBPO, 0, [_BPI], [0]);
export var DeleteBatchPrediction = op(
  n0,
  _DBP,
  0,
  () => DeleteBatchPredictionInput,
  () => DeleteBatchPredictionOutput
);
