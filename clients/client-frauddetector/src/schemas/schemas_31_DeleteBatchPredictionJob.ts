// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBPJ, _DBPJR, _DBPJRe, _jI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteBatchPredictionJobRequest = struct(n0, _DBPJR, 0, [_jI], [0]);
export var DeleteBatchPredictionJobResult = struct(n0, _DBPJRe, 0, [], []);
export var DeleteBatchPredictionJob = op(
  n0,
  _DBPJ,
  0,
  () => DeleteBatchPredictionJobRequest,
  () => DeleteBatchPredictionJobResult
);
