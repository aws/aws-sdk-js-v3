// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DAas, _DI, _h, _LE, _RI, _St, _UDL, _UDLR, _UDLRp, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDashboardLinksRequest = struct(n0, _UDLR, 0, [_AAI, _DI, _LE], [[0, 1], [0, 1], 64 | 0]);
export var UpdateDashboardLinksResponse = struct(n0, _UDLRp, 0, [_RI, _St, _DAas, _LE], [0, [1, 32], 0, 64 | 0]);
export var LinkEntityArnList = 64 | 0;

export var UpdateDashboardLinks = op(
  n0,
  _UDL,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/linked-entities", 200],
  },
  () => UpdateDashboardLinksRequest,
  () => UpdateDashboardLinksResponse
);
