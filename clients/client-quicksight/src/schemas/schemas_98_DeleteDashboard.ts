// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _Ar, _DDe, _DDR, _DDRe, _DI, _h, _hQ, _RI, _St, _VN, _vn, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteDashboardRequest = struct(
  n0,
  _DDR,
  0,
  [_AAI, _DI, _VN],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _vn,
      },
    ],
  ]
);
export var DeleteDashboardResponse = struct(n0, _DDRe, 0, [_St, _Ar, _DI, _RI], [[1, 32], 0, 0, 0]);
export var DeleteDashboard = op(
  n0,
  _DDe,
  {
    [_h]: ["DELETE", "/accounts/{AwsAccountId}/dashboards/{DashboardId}", 200],
  },
  () => DeleteDashboardRequest,
  () => DeleteDashboardResponse
);
