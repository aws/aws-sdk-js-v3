// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _De,
  _FEJ,
  _FEJA,
  _FEJN,
  _FEJS,
  _Fil,
  _LFEJ,
  _LFEJR,
  _LFEJRi,
  _LMT,
  _M,
  _MR,
  _NT,
  _St,
  n0,
} from "./schemas_0";
import { Filters } from "./schemas_30_List";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var ForecastExportJobSummary = struct(
  n0,
  _FEJS,
  0,
  [_FEJA, _FEJN, _De, _St, _M, _CT, _LMT],
  [0, 0, () => DataDestination, 0, 0, 4, 4]
);
export var ListForecastExportJobsRequest = struct(n0, _LFEJR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListForecastExportJobsResponse = struct(n0, _LFEJRi, 0, [_FEJ, _NT], [() => ForecastExportJobs, 0]);
export var ForecastExportJobs = list(n0, _FEJ, 0, () => ForecastExportJobSummary);
export var ListForecastExportJobs = op(
  n0,
  _LFEJ,
  2,
  () => ListForecastExportJobsRequest,
  () => ListForecastExportJobsResponse
);
