// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _C, _CIl, _DM, _DMD, _DMET, _DMI, _DMST, _MCMM, _MCMo, _MCMR, Cluster, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var ModifyClusterMaintenanceMessage = struct(
  n0,
  _MCMM,
  0,
  [_CIl, _DM, _DMI, _DMST, _DMET, _DMD],
  [0, 2, 0, 4, 4, 1]
);
export var ModifyClusterMaintenanceResult = struct(n0, _MCMR, 0, [_C], [[() => Cluster, 0]]);
export var ModifyClusterMaintenance = op(
  n0,
  _MCMo,
  0,
  () => ModifyClusterMaintenanceMessage,
  () => ModifyClusterMaintenanceResult
);
