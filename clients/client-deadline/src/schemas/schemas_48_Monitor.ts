// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DM, _DMR, _DMRe, _end, _h, _mI, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteMonitorRequest = struct(n0, _DMR, 0, [_mI], [[0, 1]]);
export var DeleteMonitorResponse = struct(n0, _DMRe, 0, [], []);
export var DeleteMonitor = op(
  n0,
  _DM,
  {
    [_end]: ["management."],
    [_h]: ["DELETE", "/2023-10-12/monitors/{monitorId}", 200],
  },
  () => DeleteMonitorRequest,
  () => DeleteMonitorResponse
);
