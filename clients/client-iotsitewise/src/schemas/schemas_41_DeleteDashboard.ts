// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _cT, _DD, _DDR, _DDRe, _dI, _end, _hQ, _ht, _iT, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDashboardRequest = struct(
  n0,
  _DDR,
  0,
  [_dI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_iT]: 1,
        [_hQ]: _cT,
      },
    ],
  ]
);
export var DeleteDashboardResponse = struct(n0, _DDRe, 0, [], []);
export var DeleteDashboard = op(
  n0,
  _DD,
  {
    [_ht]: ["DELETE", "/dashboards/{dashboardId}", 204],
    [_end]: ["monitor."],
  },
  () => DeleteDashboardRequest,
  () => DeleteDashboardResponse
);
