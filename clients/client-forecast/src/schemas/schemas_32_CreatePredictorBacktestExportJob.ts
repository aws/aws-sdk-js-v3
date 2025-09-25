// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CPBEJ, _CPBEJR, _CPBEJRr, _De, _F, _PA, _PBEJA, _PBEJN, _Ta, n0, Tags } from "./schemas_0";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var CreatePredictorBacktestExportJobRequest = struct(
  n0,
  _CPBEJR,
  0,
  [_PBEJN, _PA, _De, _Ta, _F],
  [0, 0, () => DataDestination, [() => Tags, 0], 0]
);
export var CreatePredictorBacktestExportJobResponse = struct(n0, _CPBEJRr, 0, [_PBEJA], [0]);
export var CreatePredictorBacktestExportJob = op(
  n0,
  _CPBEJ,
  0,
  () => CreatePredictorBacktestExportJobRequest,
  () => CreatePredictorBacktestExportJobResponse
);
