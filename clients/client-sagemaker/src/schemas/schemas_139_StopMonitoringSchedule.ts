// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _MSN, _SMSRt, _SMSt, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var StopMonitoringScheduleRequest = struct(n0, _SMSRt, 0, [_MSN], [0]);
export var StopMonitoringSchedule = op(
  n0,
  _SMSt,
  0,
  () => StopMonitoringScheduleRequest,
  () => Unit
);
