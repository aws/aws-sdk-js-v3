// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DRS, _DRSR, _DRSRe, _DSI, _h, _RI, _SI, _St, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteRefreshScheduleRequest = struct(
  n0,
  _DRSR,
  0,
  [_DSI, _AAI, _SI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteRefreshScheduleResponse = struct(n0, _DRSRe, 0, [_St, _RI, _SI, _Ar], [[1, 32], 0, 0, 0]);
export var DeleteRefreshSchedule = op(
  n0,
  _DRS,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/data-sets/{DataSetId}/refresh-schedules/{ScheduleId}", 200],
  },
  () => DeleteRefreshScheduleRequest,
  () => DeleteRefreshScheduleResponse
);
