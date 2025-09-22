// smithy-typescript generated code
import { error, op, struct } from "@smithy/core/schema";

import { ClusterOnLatestRevisionFault as __ClusterOnLatestRevisionFault } from "../models/index";
import { _aQE, _C, _c, _CIl, _COLRF, _e, _hE, _m, _MCDR, _MCDRM, _MCDRR, _RTev, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ClusterOnLatestRevisionFault = error(
  n0,
  _COLRF,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ClusterOnLatestRevision`, 400],
  },
  [_m],
  [0],

  __ClusterOnLatestRevisionFault
);
export var ModifyClusterDbRevisionMessage = struct(n0, _MCDRM, 0, [_CIl, _RTev], [0, 0]);
export var ModifyClusterDbRevisionResult = struct(n0, _MCDRR, 0, [_C], [[() => Cluster, 0]]);
export var ModifyClusterDbRevision = op(
  n0,
  _MCDR,
  0,
  () => ModifyClusterDbRevisionMessage,
  () => ModifyClusterDbRevisionResult
);
