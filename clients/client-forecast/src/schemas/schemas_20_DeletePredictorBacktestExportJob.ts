// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPBEJ, _DPBEJR, _PBEJA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePredictorBacktestExportJobRequest = struct(n0, _DPBEJR, 0, [_PBEJA], [0]);
export var DeletePredictorBacktestExportJob = op(
  n0,
  _DPBEJ,
  2,
  () => DeletePredictorBacktestExportJobRequest,
  () => Unit
);
