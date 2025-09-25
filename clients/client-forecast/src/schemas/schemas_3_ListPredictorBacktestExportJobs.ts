// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CT,
  _De,
  _Fil,
  _LMT,
  _LPBEJ,
  _LPBEJR,
  _LPBEJRi,
  _M,
  _MR,
  _NT,
  _PBEJ,
  _PBEJA,
  _PBEJN,
  _PBEJS,
  _St,
  n0,
} from "./schemas_0";
import { Filters } from "./schemas_30_List";
import { DataDestination } from "./schemas_44_Export";

/* eslint no-var: 0 */

export var ListPredictorBacktestExportJobsRequest = struct(n0, _LPBEJR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListPredictorBacktestExportJobsResponse = struct(
  n0,
  _LPBEJRi,
  0,
  [_PBEJ, _NT],
  [() => PredictorBacktestExportJobs, 0]
);
export var PredictorBacktestExportJobSummary = struct(
  n0,
  _PBEJS,
  0,
  [_PBEJA, _PBEJN, _De, _St, _M, _CT, _LMT],
  [0, 0, () => DataDestination, 0, 0, 4, 4]
);
export var PredictorBacktestExportJobs = list(n0, _PBEJ, 0, () => PredictorBacktestExportJobSummary);
export var ListPredictorBacktestExportJobs = op(
  n0,
  _LPBEJ,
  2,
  () => ListPredictorBacktestExportJobsRequest,
  () => ListPredictorBacktestExportJobsResponse
);
