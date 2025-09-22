// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DFEJ, _DFEJR, _FEJA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteForecastExportJobRequest = struct(n0, _DFEJR, 0, [_FEJA], [0]);
export var DeleteForecastExportJob = op(
  n0,
  _DFEJ,
  2,
  () => DeleteForecastExportJobRequest,
  () => Unit
);
