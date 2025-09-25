// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ARC, _DAH, _DAHR, _DAHRe, _h, _MA, _OPI, _ORI, _RH, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeAccountHealthRequest = struct(n0, _DAHR, 0, [], []);
export var DescribeAccountHealthResponse = struct(n0, _DAHRe, 0, [_ORI, _OPI, _MA, _RH, _ARC], [1, 1, 1, 1, 1]);
export var DescribeAccountHealth = op(
  n0,
  _DAH,
  {
    [_h]: ["GET", "/accounts/health", 200],
  },
  () => DescribeAccountHealthRequest,
  () => DescribeAccountHealthResponse
);
