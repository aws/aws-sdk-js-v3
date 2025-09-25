// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { DBClusterRoleNotFoundFault as __DBClusterRoleNotFoundFault } from "../models/index";
import { _aQE, _c, _DBCI, _DBCRNFF, _e, _FN, _hE, _m, _RA, _RRFDBC, _RRFDBCM, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterRoleNotFoundFault = error(
  n0,
  _DBCRNFF,
  {
    [_e]: _c,
    [_hE]: 404,
    [_aQE]: [`DBClusterRoleNotFound`, 404],
  },
  [_m],
  [0],

  __DBClusterRoleNotFoundFault
);
export var RemoveRoleFromDBClusterMessage = struct(n0, _RRFDBCM, 0, [_DBCI, _RA, _FN], [0, 0, 0]);
export var RemoveRoleFromDBCluster = op(
  n0,
  _RRFDBC,
  0,
  () => RemoveRoleFromDBClusterMessage,
  () => Unit
);
