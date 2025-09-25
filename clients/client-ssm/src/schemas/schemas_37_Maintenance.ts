// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DMWFT, _DMWFTR, _DMWFTRe, _MR, _MWFTL, _MWIFT, _N, _NT, _RT, _Ta, _WI, _WIi, n0, Targets } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeMaintenanceWindowsForTargetRequest = struct(
  n0,
  _DMWFTR,
  0,
  [_Ta, _RT, _MR, _NT],
  [() => Targets, 0, 1, 0]
);
export var DescribeMaintenanceWindowsForTargetResult = struct(
  n0,
  _DMWFTRe,
  0,
  [_WIi, _NT],
  [() => MaintenanceWindowsForTargetList, 0]
);
export var MaintenanceWindowIdentityForTarget = struct(n0, _MWIFT, 0, [_WI, _N], [0, 0]);
export var MaintenanceWindowsForTargetList = list(n0, _MWFTL, 0, () => MaintenanceWindowIdentityForTarget);
export var DescribeMaintenanceWindowsForTarget = op(
  n0,
  _DMWFT,
  0,
  () => DescribeMaintenanceWindowsForTargetRequest,
  () => DescribeMaintenanceWindowsForTargetResult
);
