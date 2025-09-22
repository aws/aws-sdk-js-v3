// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _Ac,
  _ASP,
  _ASPD,
  _ASPS,
  _ASPSCR,
  _ATd,
  _C,
  _CA,
  _CD,
  _CI,
  _CO,
  _Co,
  _CWAD,
  _D,
  _De,
  _EP,
  _IGIn,
  _K,
  _M,
  _Ma,
  _MCa,
  _MCi,
  _MD,
  _MDL,
  _MN,
  _N,
  _Na,
  _PASP,
  _PASPI,
  _PASPO,
  _Pe,
  _R,
  _SA,
  _SAc,
  _SCc,
  _SCR,
  _SRc,
  _SRL,
  _SSPC,
  _St,
  _Sta,
  _Stat,
  _STc,
  _Th,
  _Tr,
  _U,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutoScalingPolicy = struct(n0, _ASP, 0, [_C, _R], [() => ScalingConstraints, () => ScalingRuleList]);
export var AutoScalingPolicyDescription = struct(
  n0,
  _ASPD,
  0,
  [_St, _C, _R],
  [() => AutoScalingPolicyStatus, () => ScalingConstraints, () => ScalingRuleList]
);
export var AutoScalingPolicyStateChangeReason = struct(n0, _ASPSCR, 0, [_Co, _M], [0, 0]);
export var AutoScalingPolicyStatus = struct(n0, _ASPS, 0, [_Sta, _SCR], [0, () => AutoScalingPolicyStateChangeReason]);
export var CloudWatchAlarmDefinition = struct(
  n0,
  _CWAD,
  0,
  [_CO, _EP, _MN, _Na, _Pe, _Stat, _Th, _U, _D],
  [0, 1, 0, 0, 1, 0, 1, 0, () => MetricDimensionList]
);
export var MetricDimension = struct(n0, _MD, 0, [_K, _Va], [0, 0]);
export var PutAutoScalingPolicyInput = struct(n0, _PASPI, 0, [_CI, _IGIn, _ASP], [0, 0, () => AutoScalingPolicy]);
export var PutAutoScalingPolicyOutput = struct(
  n0,
  _PASPO,
  0,
  [_CI, _IGIn, _ASP, _CA],
  [0, 0, () => AutoScalingPolicyDescription, 0]
);
export var ScalingAction = struct(n0, _SA, 0, [_Ma, _SSPC], [0, () => SimpleScalingPolicyConfiguration]);
export var ScalingConstraints = struct(n0, _SCc, 0, [_MCi, _MCa], [1, 1]);
export var ScalingRule = struct(n0, _SRc, 0, [_N, _De, _Ac, _Tr], [0, 0, () => ScalingAction, () => ScalingTrigger]);
export var ScalingTrigger = struct(n0, _STc, 0, [_CWAD], [() => CloudWatchAlarmDefinition]);
export var SimpleScalingPolicyConfiguration = struct(n0, _SSPC, 0, [_ATd, _SAc, _CD], [0, 1, 1]);
export var MetricDimensionList = list(n0, _MDL, 0, () => MetricDimension);
export var ScalingRuleList = list(n0, _SRL, 0, () => ScalingRule);
export var PutAutoScalingPolicy = op(
  n0,
  _PASP,
  0,
  () => PutAutoScalingPolicyInput,
  () => PutAutoScalingPolicyOutput
);
