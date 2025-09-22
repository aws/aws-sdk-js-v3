// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _AA,
  _AAAD,
  _Ac,
  _APMA,
  _APMAM,
  _APMAR,
  _CAD,
  _De,
  _DPMA,
  _DPMAM,
  _DPMAR,
  _F,
  _FAD,
  _Ma,
  _MR,
  _OIS,
  _OIT,
  _PMA,
  _PMAD,
  _PMAe,
  _RI,
  _RIA,
  _RPMA,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplyPendingMaintenanceActionMessage = struct(n0, _APMAM, 0, [_RIA, _AA, _OIT], [0, 0, 0]);
export var ApplyPendingMaintenanceActionResponse = struct(
  n0,
  _APMAR,
  0,
  [_RPMA],
  [[() => ResourcePendingMaintenanceActions, 0]]
);
export var DescribePendingMaintenanceActionsMessage = struct(
  n0,
  _DPMAM,
  0,
  [_RIA, _F, _Ma, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var DescribePendingMaintenanceActionsResponse = struct(
  n0,
  _DPMAR,
  0,
  [_PMA, _Ma],
  [[() => PendingMaintenanceActions, 0], 0]
);
export var PendingMaintenanceAction = struct(n0, _PMAe, 0, [_Ac, _AAAD, _FAD, _OIS, _CAD, _De], [0, 4, 4, 0, 4, 0]);
export var ResourcePendingMaintenanceActions = struct(
  n0,
  _RPMA,
  0,
  [_RI, _PMAD],
  [0, [() => PendingMaintenanceActionDetails, 0]]
);
export var PendingMaintenanceActionDetails = list(n0, _PMAD, 0, [
  () => PendingMaintenanceAction,
  {
    [_xN]: _PMAe,
  },
]);
export var PendingMaintenanceActions = list(n0, _PMA, 0, [
  () => ResourcePendingMaintenanceActions,
  {
    [_xN]: _RPMA,
  },
]);
export var ApplyPendingMaintenanceAction = op(
  n0,
  _APMA,
  0,
  () => ApplyPendingMaintenanceActionMessage,
  () => ApplyPendingMaintenanceActionResponse
);
export var DescribePendingMaintenanceActions = op(
  n0,
  _DPMA,
  0,
  () => DescribePendingMaintenanceActionsMessage,
  () => DescribePendingMaintenanceActionsResponse
);
