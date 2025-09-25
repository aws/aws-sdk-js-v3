// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _aAAD,
  _cAD,
  _d,
  _fAD,
  _h,
  _hQ,
  _LPMA,
  _LPMAI,
  _LPMAO,
  _mR,
  _nT,
  _oIS,
  _PMAD,
  _pMAD,
  _PMADL,
  _rA,
  _RPMA,
  _rPMAe,
  _RPMAL,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPendingMaintenanceActionsInput = struct(
  n0,
  _LPMAI,
  0,
  [_nT, _mR],
  [
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListPendingMaintenanceActionsOutput = struct(
  n0,
  _LPMAO,
  0,
  [_rPMAe, _nT],
  [() => ResourcePendingMaintenanceActionList, 0]
);
export var PendingMaintenanceActionDetails = struct(
  n0,
  _PMAD,
  0,
  [_a, _aAAD, _fAD, _oIS, _cAD, _d],
  [0, 0, 0, 0, 0, 0]
);
export var ResourcePendingMaintenanceAction = struct(
  n0,
  _RPMA,
  0,
  [_rA, _pMAD],
  [0, () => PendingMaintenanceActionDetailsList]
);
export var PendingMaintenanceActionDetailsList = list(n0, _PMADL, 0, () => PendingMaintenanceActionDetails);
export var ResourcePendingMaintenanceActionList = list(n0, _RPMAL, 0, () => ResourcePendingMaintenanceAction);
export var ListPendingMaintenanceActions = op(
  n0,
  _LPMA,
  {
    [_h]: ["GET", "/pending-actions", 200],
  },
  () => ListPendingMaintenanceActionsInput,
  () => ListPendingMaintenanceActionsOutput
);
