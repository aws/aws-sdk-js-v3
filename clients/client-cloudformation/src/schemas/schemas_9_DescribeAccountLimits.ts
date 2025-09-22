// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _AL, _ALc, _ALL, _DAL, _DALI, _DALO, _N, _NT, _V, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var AccountLimit = struct(n0, _AL, 0, [_N, _V], [0, 1]);
export var DescribeAccountLimitsInput = struct(n0, _DALI, 0, [_NT], [0]);
export var DescribeAccountLimitsOutput = struct(n0, _DALO, 0, [_ALc, _NT], [() => AccountLimitList, 0]);
export var AccountLimitList = list(n0, _ALL, 0, () => AccountLimit);
export var DescribeAccountLimits = op(
  n0,
  _DAL,
  0,
  () => DescribeAccountLimitsInput,
  () => DescribeAccountLimitsOutput
);
