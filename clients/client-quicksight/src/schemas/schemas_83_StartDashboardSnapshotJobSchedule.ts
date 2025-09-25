// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DI, _h, _RI, _SDSJS, _SDSJSR, _SDSJSRt, _SI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var StartDashboardSnapshotJobScheduleRequest = struct(
  n0,
  _SDSJSR,
  0,
  [_AAI, _DI, _SI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var StartDashboardSnapshotJobScheduleResponse = struct(n0, _SDSJSRt, 0, [_RI, _St], [0, [1, 32]]);
export var StartDashboardSnapshotJobSchedule = op(
  n0,
  _SDSJS,
  {
    [_h]: ["POST", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/schedules/{ScheduleId}", 200],
  },
  () => StartDashboardSnapshotJobScheduleRequest,
  () => StartDashboardSnapshotJobScheduleResponse
);
