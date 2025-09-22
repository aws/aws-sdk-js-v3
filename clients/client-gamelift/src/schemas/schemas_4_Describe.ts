// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _CEon, _DRC, _DRCI, _DRCO, _FI, _GSATS, _LPa, _MCGSA, _Pa, _RC, _SPe, _SPer, _SPLe, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeRuntimeConfigurationInput = struct(n0, _DRCI, 0, [_FI], [0]);
export var DescribeRuntimeConfigurationOutput = struct(n0, _DRCO, 0, [_RC], [() => RuntimeConfiguration]);
export var RuntimeConfiguration = struct(n0, _RC, 0, [_SPe, _MCGSA, _GSATS], [() => ServerProcessList, 1, 1]);
export var ServerProcess = struct(n0, _SPer, 0, [_LPa, _Pa, _CEon], [0, 0, 1]);
export var ServerProcessList = list(n0, _SPLe, 0, () => ServerProcess);
export var DescribeRuntimeConfiguration = op(
  n0,
  _DRC,
  0,
  () => DescribeRuntimeConfigurationInput,
  () => DescribeRuntimeConfigurationOutput
);
