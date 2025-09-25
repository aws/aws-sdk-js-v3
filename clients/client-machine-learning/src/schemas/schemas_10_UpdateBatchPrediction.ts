// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BPI, _BPN, _UBP, _UBPI, _UBPO, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateBatchPredictionInput = struct(n0, _UBPI, 0, [_BPI, _BPN], [0, 0]);
export var UpdateBatchPredictionOutput = struct(n0, _UBPO, 0, [_BPI], [0]);
export var UpdateBatchPrediction = op(
  n0,
  _UBP,
  0,
  () => UpdateBatchPredictionInput,
  () => UpdateBatchPredictionOutput
);
