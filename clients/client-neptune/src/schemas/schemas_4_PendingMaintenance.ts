// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import { ResourceNotFoundFault as __ResourceNotFoundFault } from "../models/index";
import {
  _AA,
  _AAAD,
  _Ac,
  _APMA,
  _APMAM,
  _APMAR,
  _aQE,
  _c,
  _CAD,
  _D,
  _DPMA,
  _DPMAM,
  _e,
  _F,
  _FAD,
  _hE,
  _M,
  _m,
  _MR,
  _OIS,
  _OIT,
  _PMA,
  _PMAD,
  _PMAe,
  _PMAM,
  _RI,
  _RNFF,
  _RPMA,
  _xN,
  FilterList,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplyPendingMaintenanceActionMessage = struct(n0, _APMAM, 0, [_RI, _AA, _OIT], [0, 0, 0]);
export var ApplyPendingMaintenanceActionResult = struct(
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
  [_RI, _F, _M, _MR],
  [0, [() => FilterList, 0], 0, 1]
);
export var PendingMaintenanceAction = struct(n0, _PMA, 0, [_Ac, _AAAD, _FAD, _OIS, _CAD, _D], [0, 4, 4, 0, 4, 0]);
export var PendingMaintenanceActionsMessage = struct(
  n0,
  _PMAM,
  0,
  [_PMAe, _M],
  [[() => PendingMaintenanceActions, 0], 0]
);
export var ResourceNotFoundFault = error(
  n0,
  _RNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`ResourceNotFoundFault`, 404],
  },
  [_m],
  [0],

  __ResourceNotFoundFault
);
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
    [_xN]: _PMA,
  },
]);
export var PendingMaintenanceActions = list(n0, _PMAe, 0, [
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
  () => ApplyPendingMaintenanceActionResult
);
export var DescribePendingMaintenanceActions = op(
  n0,
  _DPMA,
  0,
  () => DescribePendingMaintenanceActionsMessage,
  () => PendingMaintenanceActionsMessage
);
