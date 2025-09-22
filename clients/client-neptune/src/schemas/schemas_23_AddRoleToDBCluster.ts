// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import {
  DBClusterRoleAlreadyExistsFault as __DBClusterRoleAlreadyExistsFault,
  DBClusterRoleQuotaExceededFault as __DBClusterRoleQuotaExceededFault,
} from "../models/index";
import { _aQE, _ARTDBC, _ARTDBCM, _c, _DBCI, _DBCRAEF, _DBCRQEF, _e, _FN, _hE, _m, _RA, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var AddRoleToDBClusterMessage = struct(n0, _ARTDBCM, 0, [_DBCI, _RA, _FN], [0, 0, 0]);
export var DBClusterRoleAlreadyExistsFault = error(
  n0,
  _DBCRAEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterRoleAlreadyExists`, 400],
  },
  [_m],
  [0],

  __DBClusterRoleAlreadyExistsFault
);
export var DBClusterRoleQuotaExceededFault = error(
  n0,
  _DBCRQEF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`DBClusterRoleQuotaExceeded`, 400],
  },
  [_m],
  [0],

  __DBClusterRoleQuotaExceededFault
);
export var AddRoleToDBCluster = op(
  n0,
  _ARTDBC,
  0,
  () => AddRoleToDBClusterMessage,
  () => Unit
);
