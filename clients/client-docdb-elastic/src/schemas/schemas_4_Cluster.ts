// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _aA,
  _aO,
  _APMA,
  _APMAI,
  _APMAO,
  _c,
  _CE,
  _e,
  _GPMA,
  _GPMAI,
  _GPMAO,
  _h,
  _hE,
  _m,
  _oIT,
  _rA,
  _rI,
  _rPMA,
  _rT,
  n0,
} from "./schemas_0";
import { ResourcePendingMaintenanceAction } from "./schemas_3_PendingMaintenance";

/* eslint no-var: 0 */

export var ApplyPendingMaintenanceActionInput = struct(n0, _APMAI, 0, [_rA, _aA, _oIT, _aO], [0, 0, 0, 0]);
export var ApplyPendingMaintenanceActionOutput = struct(
  n0,
  _APMAO,
  0,
  [_rPMA],
  [() => ResourcePendingMaintenanceAction]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m, _rI, _rT],
  [0, 0, 0],

  __ConflictException
);
export var GetPendingMaintenanceActionInput = struct(n0, _GPMAI, 0, [_rA], [[0, 1]]);
export var GetPendingMaintenanceActionOutput = struct(n0, _GPMAO, 0, [_rPMA], [() => ResourcePendingMaintenanceAction]);
export var ApplyPendingMaintenanceAction = op(
  n0,
  _APMA,
  {
    [_h]: ["POST", "/pending-action", 200],
  },
  () => ApplyPendingMaintenanceActionInput,
  () => ApplyPendingMaintenanceActionOutput
);
export var GetPendingMaintenanceAction = op(
  n0,
  _GPMA,
  {
    [_h]: ["GET", "/pending-action/{resourceArn}", 200],
  },
  () => GetPendingMaintenanceActionInput,
  () => GetPendingMaintenanceActionOutput
);
