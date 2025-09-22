// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CSTRIo, _LCSTR, _LCSTRR, _LCSTRRi, _MRax, _NTe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ListColumnStatisticsTaskRunsRequest = struct(n0, _LCSTRR, 0, [_MRax, _NTe], [1, 0]);
export var ListColumnStatisticsTaskRunsResponse = struct(n0, _LCSTRRi, 0, [_CSTRIo, _NTe], [64 | 0, 0]);
export var ColumnStatisticsTaskRunIdList = 64 | 0;

export var ListColumnStatisticsTaskRuns = op(
  n0,
  _LCSTR,
  0,
  () => ListColumnStatisticsTaskRunsRequest,
  () => ListColumnStatisticsTaskRunsResponse
);
