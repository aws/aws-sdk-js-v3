// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _CO, _EP, _FI, _MN, _N, _PSP, _PSPI, _PSPO, _PT, _SAc, _SAT, _TC, _Th, _TV, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PutScalingPolicyInput = struct(
  n0,
  _PSPI,
  0,
  [_N, _FI, _SAc, _SAT, _Th, _CO, _EP, _MN, _PT, _TC],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, () => TargetConfiguration]
);
export var PutScalingPolicyOutput = struct(n0, _PSPO, 0, [_N], [0]);
export var TargetConfiguration = struct(n0, _TC, 0, [_TV], [1]);
export var PutScalingPolicy = op(
  n0,
  _PSP,
  0,
  () => PutScalingPolicyInput,
  () => PutScalingPolicyOutput
);
