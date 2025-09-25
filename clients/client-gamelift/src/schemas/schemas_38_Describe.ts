// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CO,
  _DSPe,
  _DSPIe,
  _DSPO,
  _EP,
  _FA,
  _FI,
  _L,
  _Li,
  _MN,
  _N,
  _NTe,
  _PT,
  _SAc,
  _SAT,
  _SF,
  _SPc,
  _SPca,
  _SPL,
  _St,
  _TC,
  _Th,
  _US,
  n0,
} from "./schemas_0";
import { TargetConfiguration } from "./schemas_27_Scaling";

/* eslint no-var: 0 */

export var DescribeScalingPoliciesInput = struct(n0, _DSPIe, 0, [_FI, _SF, _Li, _NTe, _L], [0, 0, 1, 0, 0]);
export var DescribeScalingPoliciesOutput = struct(n0, _DSPO, 0, [_SPc, _NTe], [() => ScalingPolicyList, 0]);
export var ScalingPolicy = struct(
  n0,
  _SPca,
  0,
  [_FI, _FA, _N, _St, _SAc, _SAT, _CO, _Th, _EP, _MN, _PT, _TC, _US, _L],
  [0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, () => TargetConfiguration, 0, 0]
);
export var ScalingPolicyList = list(n0, _SPL, 0, () => ScalingPolicy);
export var DescribeScalingPolicies = op(
  n0,
  _DSPe,
  0,
  () => DescribeScalingPoliciesInput,
  () => DescribeScalingPoliciesOutput
);
