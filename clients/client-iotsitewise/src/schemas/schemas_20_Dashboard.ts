// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import {
  _cT,
  _dA,
  _dCD,
  _dD,
  _dDa,
  _DDes,
  _DDRes,
  _DDResc,
  _dI,
  _dLUD,
  _dN,
  _end,
  _ht,
  _pIr,
  _UD,
  _UDR,
  _UDRp,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeDashboardRequest = struct(n0, _DDRes, 0, [_dI], [[0, 1]]);
export var DescribeDashboardResponse = struct(
  n0,
  _DDResc,
  0,
  [_dI, _dA, _dN, _pIr, _dD, _dDa, _dCD, _dLUD],
  [0, 0, 0, 0, 0, 0, 4, 4]
);
export var UpdateDashboardRequest = struct(n0, _UDR, 0, [_dI, _dN, _dD, _dDa, _cT], [[0, 1], 0, 0, 0, [0, 4]]);
export var UpdateDashboardResponse = struct(n0, _UDRp, 0, [], []);
export var DescribeDashboard = op(
  n0,
  _DDes,
  {
    [_ht]: ["GET", "/dashboards/{dashboardId}", 200],
    [_end]: ["monitor."],
  },
  () => DescribeDashboardRequest,
  () => DescribeDashboardResponse
);
export var UpdateDashboard = op(
  n0,
  _UD,
  {
    [_ht]: ["PUT", "/dashboards/{dashboardId}", 200],
    [_end]: ["monitor."],
  },
  () => UpdateDashboardRequest,
  () => UpdateDashboardResponse
);
