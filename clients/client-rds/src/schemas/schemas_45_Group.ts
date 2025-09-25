// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidDBShardGroupStateFault as __InvalidDBShardGroupStateFault } from "../models/index";
import {
  _aQE,
  _c,
  _DBC,
  _DBCI,
  _e,
  _hE,
  _IDBSGSFn,
  _m,
  _SDBC,
  _SDBCM,
  _SDBCMt,
  _SDBCR,
  _SDBCRt,
  _SDBCt,
  n0,
} from "./schemas_0";
import { DBCluster } from "./schemas_18_Cluster";

/* eslint no-var: 0 */

export var InvalidDBShardGroupStateFault = error(
  n0,
  _IDBSGSFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBShardGroupState`, 400],
  },
  [_m],
  [0],

  __InvalidDBShardGroupStateFault
);
export var StartDBClusterMessage = struct(n0, _SDBCM, 0, [_DBCI], [0]);
export var StartDBClusterResult = struct(n0, _SDBCR, 0, [_DBC], [[() => DBCluster, 0]]);
export var StopDBClusterMessage = struct(n0, _SDBCMt, 0, [_DBCI], [0]);
export var StopDBClusterResult = struct(n0, _SDBCRt, 0, [_DBC], [[() => DBCluster, 0]]);
export var StartDBCluster = op(
  n0,
  _SDBC,
  0,
  () => StartDBClusterMessage,
  () => StartDBClusterResult
);
export var StopDBCluster = op(
  n0,
  _SDBCt,
  0,
  () => StopDBClusterMessage,
  () => StopDBClusterResult
);
