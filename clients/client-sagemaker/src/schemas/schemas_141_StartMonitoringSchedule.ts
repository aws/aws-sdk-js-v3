// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MSN, _SMS, _SMSR, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StartMonitoringScheduleRequest = struct(n0, _SMSR, 0, [_MSN], [0]);
export var StartMonitoringSchedule = op(
  n0,
  _SMS,
  0,
  () => StartMonitoringScheduleRequest,
  () => Unit
);
