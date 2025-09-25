// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _DAL, _DALI, _DALO, _Li, _Lim, _Ma, _Max, _N, _NM, _PS, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAccountLimitsInput = struct(n0, _DALI, 0, [_Ma, _PS], [0, 1]);
export var DescribeAccountLimitsOutput = struct(n0, _DALO, 0, [_Li, _NM], [() => Limits, 0]);
export var Limit = struct(n0, _Lim, 0, [_N, _Max], [0, 0]);
export var Limits = list(n0, _Li, 0, () => Limit);
export var DescribeAccountLimits = op(
  n0,
  _DAL,
  0,
  () => DescribeAccountLimitsInput,
  () => DescribeAccountLimitsOutput
);
