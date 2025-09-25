// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CBPJ, _CBPJR, _CBPJRa, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var CancelBatchPredictionJobRequest = struct(n0, _CBPJR, 0, [_jI], [0]);
export var CancelBatchPredictionJobResult = struct(n0, _CBPJRa, 0, [], []);
export var CancelBatchPredictionJob = op(
  n0,
  _CBPJ,
  0,
  () => CancelBatchPredictionJobRequest,
  () => CancelBatchPredictionJobResult
);
