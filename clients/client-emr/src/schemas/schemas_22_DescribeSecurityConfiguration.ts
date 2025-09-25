// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CDT, _DSCe, _DSCIe, _DSCOe, _N, _SC, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeSecurityConfigurationInput = struct(n0, _DSCIe, 0, [_N], [0]);
export var DescribeSecurityConfigurationOutput = struct(n0, _DSCOe, 0, [_N, _SC, _CDT], [0, 0, 4]);
export var DescribeSecurityConfiguration = op(
  n0,
  _DSCe,
  0,
  () => DescribeSecurityConfigurationInput,
  () => DescribeSecurityConfigurationOutput
);
