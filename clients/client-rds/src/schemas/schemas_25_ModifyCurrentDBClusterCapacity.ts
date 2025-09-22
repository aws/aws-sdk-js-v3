// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InvalidDBClusterCapacityFault as __InvalidDBClusterCapacityFault } from "../models/index";
import {
  _aQE,
  _c,
  _Ca,
  _CC,
  _DBCCI,
  _DBCI,
  _e,
  _hE,
  _IDBCCFn,
  _m,
  _MCDBCC,
  _MCDBCCM,
  _PC,
  _SBT,
  _TAi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var DBClusterCapacityInfo = struct(n0, _DBCCI, 0, [_DBCI, _PC, _CC, _SBT, _TAi], [0, 1, 1, 1, 0]);
export var InvalidDBClusterCapacityFault = error(
  n0,
  _IDBCCFn,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidDBClusterCapacityFault`, 400],
  },
  [_m],
  [0],

  __InvalidDBClusterCapacityFault
);
export var ModifyCurrentDBClusterCapacityMessage = struct(n0, _MCDBCCM, 0, [_DBCI, _Ca, _SBT, _TAi], [0, 1, 1, 0]);
export var ModifyCurrentDBClusterCapacity = op(
  n0,
  _MCDBCC,
  0,
  () => ModifyCurrentDBClusterCapacityMessage,
  () => DBClusterCapacityInfo
);
