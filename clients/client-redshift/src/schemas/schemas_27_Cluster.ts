// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { InsufficientClusterCapacityFault as __InsufficientClusterCapacityFault } from "../models/index";
import { _aQE, _C, _c, _e, _hE, _ICCF, _m, _RCesu, _RCRes, Cluster, n0 } from "./schemas_0";
import { ResumeClusterMessage } from "./schemas_72_Scheduled";

/* eslint no-var: 0 */

export var InsufficientClusterCapacityFault = error(
  n0,
  _ICCF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InsufficientClusterCapacity`, 400],
  },
  [_m],
  [0],

  __InsufficientClusterCapacityFault
);
export var ResumeClusterResult = struct(n0, _RCRes, 0, [_C], [[() => Cluster, 0]]);
export var ResumeCluster = op(
  n0,
  _RCesu,
  0,
  () => ResumeClusterMessage,
  () => ResumeClusterResult
);
