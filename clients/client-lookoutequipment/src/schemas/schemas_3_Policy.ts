// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CTr, _DRP, _DRPe, _DRPR, _DRPRe, _DRPRes, _LMT, _PRI, _RAe, _RP, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteResourcePolicyRequest = struct(n0, _DRPR, 0, [_RAe], [0]);
export var DescribeResourcePolicyRequest = struct(n0, _DRPRe, 0, [_RAe], [0]);
export var DescribeResourcePolicyResponse = struct(n0, _DRPRes, 0, [_PRI, _RP, _CTr, _LMT], [0, 0, 4, 4]);
export var DeleteResourcePolicy = op(
  n0,
  _DRP,
  0,
  () => DeleteResourcePolicyRequest,
  () => Unit
);
export var DescribeResourcePolicy = op(
  n0,
  _DRPe,
  0,
  () => DescribeResourcePolicyRequest,
  () => DescribeResourcePolicyResponse
);
