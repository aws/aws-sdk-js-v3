// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DTPT, _DTPTA, _TPT, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DescribeTerminationPolicyTypesAnswer = struct(n0, _DTPTA, 0, [_TPT], [64 | 0]);
export var TerminationPolicies = 64 | 0;

export var DescribeTerminationPolicyTypes = op(
  n0,
  _DTPT,
  0,
  () => Unit,
  () => DescribeTerminationPolicyTypesAnswer
);
