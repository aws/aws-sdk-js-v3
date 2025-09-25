// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CFEJ, _CFEJR, _CFEJRr, _De, _F, _FA, _FEJA, _FEJN, _Ta, n0, Tags } from "./schemas_0";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var CreateForecastExportJobRequest = struct(
  n0,
  _CFEJR,
  0,
  [_FEJN, _FA, _De, _Ta, _F],
  [0, 0, () => DataDestination, [() => Tags, 0], 0]
);
export var CreateForecastExportJobResponse = struct(n0, _CFEJRr, 0, [_FEJA], [0]);
export var CreateForecastExportJob = op(
  n0,
  _CFEJ,
  0,
  () => CreateForecastExportJobRequest,
  () => CreateForecastExportJobResponse
);
