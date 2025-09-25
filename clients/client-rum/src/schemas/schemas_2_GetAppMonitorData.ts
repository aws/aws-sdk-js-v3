// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _Af, _B, _Ev, _F, _GAMD, _GAMDR, _GAMDRe, _h, _MR, _N, _NT, _QF, _QFu, _TR, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetAppMonitorDataRequest = struct(
  n0,
  _GAMDR,
  0,
  [_N, _TR, _F, _MR, _NT],
  [[0, 1], () => TimeRange, () => QueryFilters, 1, 0]
);
export var GetAppMonitorDataResponse = struct(n0, _GAMDRe, 0, [_Ev, _NT], [64 | 0, 0]);
export var QueryFilter = struct(n0, _QF, 0, [_N, _V], [0, 64 | 0]);
export var TimeRange = struct(n0, _TR, 0, [_Af, _B], [1, 1]);
export var EventDataList = 64 | 0;

export var QueryFilters = list(n0, _QFu, 0, () => QueryFilter);
export var QueryFilterValueList = 64 | 0;

export var GetAppMonitorData = op(
  n0,
  _GAMD,
  {
    [_h]: ["POST", "/appmonitor/{Name}/data", 200],
  },
  () => GetAppMonitorDataRequest,
  () => GetAppMonitorDataResponse
);
