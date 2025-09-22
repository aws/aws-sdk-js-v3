// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CT, _Fil, _LM, _LMR, _LMRi, _LMT, _MA, _MN, _Mo, _MR, _MS, _NT, _RA, _St, n0 } from "./schemas_0";
import { Filters } from "./schemas_30_List";

/* eslint no-var: 0 */

export var ListMonitorsRequest = struct(n0, _LMR, 0, [_NT, _MR, _Fil], [0, 1, () => Filters]);
export var ListMonitorsResponse = struct(n0, _LMRi, 0, [_Mo, _NT], [() => Monitors, 0]);
export var MonitorSummary = struct(n0, _MS, 0, [_MA, _MN, _RA, _St, _CT, _LMT], [0, 0, 0, 0, 4, 4]);
export var Monitors = list(n0, _Mo, 0, () => MonitorSummary);
export var ListMonitors = op(
  n0,
  _LM,
  2,
  () => ListMonitorsRequest,
  () => ListMonitorsResponse
);
