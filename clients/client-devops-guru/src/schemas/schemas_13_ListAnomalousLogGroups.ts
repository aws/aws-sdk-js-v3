// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ALG,
  _ALGn,
  _Ex,
  _h,
  _IET,
  _II,
  _IST,
  _LAC,
  _LACo,
  _LALG,
  _LALGR,
  _LALGRi,
  _LAS,
  _LASo,
  _LAT,
  _LATo,
  _LEI,
  _LET,
  _LGN,
  _LSN,
  _MR,
  _NOLLO,
  _NOLLS,
  _NT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AnomalousLogGroup = struct(
  n0,
  _ALG,
  0,
  [_LGN, _IST, _IET, _NOLLS, _LAS],
  [0, 4, 4, 1, () => LogAnomalyShowcases]
);
export var ListAnomalousLogGroupsRequest = struct(n0, _LALGR, 0, [_II, _MR, _NT], [0, 1, 0]);
export var ListAnomalousLogGroupsResponse = struct(n0, _LALGRi, 0, [_II, _ALGn, _NT], [0, () => AnomalousLogGroups, 0]);
export var LogAnomalyClass = struct(n0, _LAC, 0, [_LSN, _LAT, _LATo, _LEI, _Ex, _NOLLO, _LET], [0, 0, 0, 0, 0, 1, 4]);
export var LogAnomalyShowcase = struct(n0, _LASo, 0, [_LACo], [() => LogAnomalyClasses]);
export var AnomalousLogGroups = list(n0, _ALGn, 0, () => AnomalousLogGroup);
export var LogAnomalyClasses = list(n0, _LACo, 0, () => LogAnomalyClass);
export var LogAnomalyShowcases = list(n0, _LAS, 0, () => LogAnomalyShowcase);
export var ListAnomalousLogGroups = op(
  n0,
  _LALG,
  {
    [_h]: ["POST", "/list-log-anomalies", 200],
  },
  () => ListAnomalousLogGroupsRequest,
  () => ListAnomalousLogGroupsResponse
);
