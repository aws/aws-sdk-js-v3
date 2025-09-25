// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DN, _SCSTRSRto, _SCSTRSRtop, _SCSTRSt, _TN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StopColumnStatisticsTaskRunScheduleRequest = struct(n0, _SCSTRSRto, 0, [_DN, _TN], [0, 0]);
export var StopColumnStatisticsTaskRunScheduleResponse = struct(n0, _SCSTRSRtop, 0, [], []);
export var StopColumnStatisticsTaskRunSchedule = op(
  n0,
  _SCSTRSt,
  0,
  () => StopColumnStatisticsTaskRunScheduleRequest,
  () => StopColumnStatisticsTaskRunScheduleResponse
);
