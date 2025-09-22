// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DPSe, _DPSR, _DPSRe, _h, _N, _PCN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeletePrefetchScheduleRequest = struct(
  n0,
  _DPSR,
  0,
  [_N, _PCN],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeletePrefetchScheduleResponse = struct(n0, _DPSRe, 0, [], []);
export var DeletePrefetchSchedule = op(
  n0,
  _DPSe,
  {
    [_h]: ["DELETE", "/prefetchSchedule/{PlaybackConfigurationName}/{Name}", 204],
  },
  () => DeletePrefetchScheduleRequest,
  () => DeletePrefetchScheduleResponse
);
