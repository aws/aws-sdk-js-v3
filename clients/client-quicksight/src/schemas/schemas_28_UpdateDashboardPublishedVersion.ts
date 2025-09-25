// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AAI, _DAas, _DI, _h, _RI, _St, _UDPV, _UDPVR, _UDPVRp, _VN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var UpdateDashboardPublishedVersionRequest = struct(
  n0,
  _UDPVR,
  0,
  [_AAI, _DI, _VN],
  [
    [0, 1],
    [0, 1],
    [1, 1],
  ]
);
export var UpdateDashboardPublishedVersionResponse = struct(n0, _UDPVRp, 0, [_DI, _DAas, _St, _RI], [0, 0, [1, 32], 0]);
export var UpdateDashboardPublishedVersion = op(
  n0,
  _UDPV,
  {
    [_h]: ["PUT", "/accounts/{AwsAccountId}/dashboards/{DashboardId}/versions/{VersionNumber}", 200],
  },
  () => UpdateDashboardPublishedVersionRequest,
  () => UpdateDashboardPublishedVersionResponse
);
