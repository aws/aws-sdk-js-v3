// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DRPe, _DRPRes, _DRPResc, _Po, _PRP, _PRPR, _PRPRu, _RA, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeResourcePolicyRequest = struct(n0, _DRPRes, 0, [_RA], [0]);
export var DescribeResourcePolicyResponse = struct(n0, _DRPResc, 0, [_Po], [0]);
export var PutResourcePolicyRequest = struct(n0, _PRPR, 0, [_RA, _Po], [0, 0]);
export var PutResourcePolicyResponse = struct(n0, _PRPRu, 0, [], []);
export var DescribeResourcePolicy = op(
  n0,
  _DRPe,
  0,
  () => DescribeResourcePolicyRequest,
  () => DescribeResourcePolicyResponse
);
export var PutResourcePolicy = op(
  n0,
  _PRP,
  0,
  () => PutResourcePolicyRequest,
  () => PutResourcePolicyResponse
);
