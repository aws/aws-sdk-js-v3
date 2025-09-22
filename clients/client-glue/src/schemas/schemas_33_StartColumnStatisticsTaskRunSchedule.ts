// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _SCSTRS, _SCSTRSR, _SCSTRSRt, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartColumnStatisticsTaskRunScheduleRequest = struct(n0, _SCSTRSR, 0, [_DN, _TN], [0, 0]);
export var StartColumnStatisticsTaskRunScheduleResponse = struct(n0, _SCSTRSRt, 0, [], []);
export var StartColumnStatisticsTaskRunSchedule = op(
  n0,
  _SCSTRS,
  0,
  () => StartColumnStatisticsTaskRunScheduleRequest,
  () => StartColumnStatisticsTaskRunScheduleResponse
);
