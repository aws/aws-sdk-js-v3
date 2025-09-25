// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DMS, _DMSR, _MSN, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMonitoringScheduleRequest = struct(n0, _DMSR, 0, [_MSN], [0]);
export var DeleteMonitoringSchedule = op(
  n0,
  _DMS,
  0,
  () => DeleteMonitoringScheduleRequest,
  () => Unit
);
