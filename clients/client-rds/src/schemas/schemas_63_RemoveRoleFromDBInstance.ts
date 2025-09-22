// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DBInstanceRoleNotFoundFault as __DBInstanceRoleNotFoundFault } from "../models/index";
import { _aQE, _c, _DBII, _DBIRNFF, _e, _FN, _hE, _m, _RA, _RRFDBI, _RRFDBIM, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DBInstanceRoleNotFoundFault = error(
  n0,
  _DBIRNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBInstanceRoleNotFound`, 404],
  },
  [_m],
  [0],

  __DBInstanceRoleNotFoundFault
);
export var RemoveRoleFromDBInstanceMessage = struct(n0, _RRFDBIM, 0, [_DBII, _RA, _FN], [0, 0, 0]);
export var RemoveRoleFromDBInstance = op(
  n0,
  _RRFDBI,
  0,
  () => RemoveRoleFromDBInstanceMessage,
  () => Unit
);
