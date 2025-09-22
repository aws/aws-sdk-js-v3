// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DFU, _DFUI, _DFUO, _FIl, _FU, _FUL, _Li, _NTe, n0 } from "./schemas_0";
import { FleetUtilization } from "./schemas_32_Describe";

/* eslint no-var: 0 */

export var DescribeFleetUtilizationInput = struct(n0, _DFUI, 0, [_FIl, _Li, _NTe], [64 | 0, 1, 0]);
export var DescribeFleetUtilizationOutput = struct(n0, _DFUO, 0, [_FU, _NTe], [() => FleetUtilizationList, 0]);
export var FleetIdOrArnList = 64 | 0;

export var FleetUtilizationList = list(n0, _FUL, 0, () => FleetUtilization);
export var DescribeFleetUtilization = op(
  n0,
  _DFU,
  0,
  () => DescribeFleetUtilizationInput,
  () => DescribeFleetUtilizationOutput
);
