// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBInstanceRoleAlreadyExistsFault as __DBInstanceRoleAlreadyExistsFault,
  DBInstanceRoleQuotaExceededFault as __DBInstanceRoleQuotaExceededFault,
} from "../models/index";
import { _aQE, _ARTDBI, _ARTDBIM, _c, _DBII, _DBIRAEF, _DBIRQEF, _e, _FN, _hE, _m, _RA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AddRoleToDBInstanceMessage = struct(n0, _ARTDBIM, 0, [_DBII, _RA, _FN], [0, 0, 0]);
export var DBInstanceRoleAlreadyExistsFault = error(
  n0,
  _DBIRAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBInstanceRoleAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBInstanceRoleAlreadyExistsFault
);
export var DBInstanceRoleQuotaExceededFault = error(
  n0,
  _DBIRQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBInstanceRoleQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __DBInstanceRoleQuotaExceededFault
);
export var AddRoleToDBInstance = op(
  n0,
  _ARTDBI,
  0,
  () => AddRoleToDBInstanceMessage,
  () => Unit
);
