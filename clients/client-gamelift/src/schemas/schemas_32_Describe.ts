// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _AGSC, _ASPC, _CPSC, _DFLU, _DFLUI, _DFLUO, _FA, _FI, _FU, _L, _MPSC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeFleetLocationUtilizationInput = struct(n0, _DFLUI, 0, [_FI, _L], [0, 0]);
export var DescribeFleetLocationUtilizationOutput = struct(n0, _DFLUO, 0, [_FU], [() => FleetUtilization]);
export var FleetUtilization = struct(n0, _FU, 0, [_FI, _FA, _ASPC, _AGSC, _CPSC, _MPSC, _L], [0, 0, 1, 1, 1, 1, 0]);
export var DescribeFleetLocationUtilization = op(
  n0,
  _DFLU,
  0,
  () => DescribeFleetLocationUtilizationInput,
  () => DescribeFleetLocationUtilizationOutput
);
