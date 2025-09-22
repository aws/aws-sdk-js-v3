// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DWIA, _DWIAR, _WIAA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWhatIfAnalysisRequest = struct(n0, _DWIAR, 0, [_WIAA], [0]);
export var DeleteWhatIfAnalysis = op(
  n0,
  _DWIA,
  2,
  () => DeleteWhatIfAnalysisRequest,
  () => Unit
);
