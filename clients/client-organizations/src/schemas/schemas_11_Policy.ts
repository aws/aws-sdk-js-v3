// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _Ar, _Co, _DRPe, _DRPR, _I, _RP, _RPS, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeResourcePolicyResponse = struct(n0, _DRPR, 0, [_RP], [() => ResourcePolicy]);
export var ResourcePolicy = struct(n0, _RP, 0, [_RPS, _Co], [() => ResourcePolicySummary, 0]);
export var ResourcePolicySummary = struct(n0, _RPS, 0, [_I, _Ar], [0, 0]);
export var DescribeResourcePolicy = op(
  n0,
  _DRPe,
  0,
  () => Unit,
  () => DescribeResourcePolicyResponse
);
