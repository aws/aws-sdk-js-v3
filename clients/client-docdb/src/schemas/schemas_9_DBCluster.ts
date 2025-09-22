// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  InvalidDBInstanceStateFault as __InvalidDBInstanceStateFault,
  InvalidDBSecurityGroupStateFault as __InvalidDBSecurityGroupStateFault,
} from "../models/index";
import {
  _AA,
  _APMA,
  _APMAM,
  _APMAR,
  _aQE,
  _c,
  _e,
  _hE,
  _IDBISF,
  _IDBSGSF,
  _m,
  _OIT,
  _RI,
  _RPMA,
  n0,
} from "./schemas_0";
import { ResourcePendingMaintenanceActions } from "./schemas_6_PendingMaintenance";

/* eslint no-var: 0 */

export var ApplyPendingMaintenanceActionMessage = struct(n0, _APMAM, 0, [_RI, _AA, _OIT], [0, 0, 0]);
export var ApplyPendingMaintenanceActionResult = struct(
  n0,
  _APMAR,
  0,
  [_RPMA],
  [[() => ResourcePendingMaintenanceActions, 0]]
);
export var InvalidDBInstanceStateFault = error(
  n0,
  _IDBISF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBInstanceState`, 400],
  },
  [_m],
  [0],

  __InvalidDBInstanceStateFault
);
export var InvalidDBSecurityGroupStateFault = error(
  n0,
  _IDBSGSF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBSecurityGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidDBSecurityGroupStateFault
);
export var ApplyPendingMaintenanceAction = op(
  n0,
  _APMA,
  0,
  () => ApplyPendingMaintenanceActionMessage,
  () => ApplyPendingMaintenanceActionResult
);
