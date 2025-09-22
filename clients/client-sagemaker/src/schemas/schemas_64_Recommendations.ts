// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _CMS,
  _Cu,
  _DSCy,
  _EN,
  _GSCR,
  _GSCRR,
  _GSCRRe,
  _IPI,
  _IRJN,
  _JN,
  _MCax,
  _MCi,
  _Metr,
  _MIPM,
  _MIPMa,
  _ML,
  _MN,
  _MSet,
  _Na,
  _PMS,
  _PMT,
  _Pre,
  _RIe,
  _SICc,
  _SIRJ,
  _SIRJR,
  _SOC,
  _SP,
  _SPc,
  _SPM,
  _SPO,
  _Stat,
  _TCUPC,
  _TTa,
  _TTSPC,
  _TVa,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CustomizedMetricSpecification = struct(n0, _CMS, 0, [_MN, _Na, _Stat], [0, 0, 0]);
export var DynamicScalingConfiguration = struct(
  n0,
  _DSCy,
  0,
  [_MCi, _MCax, _SICc, _SOC, _SP],
  [1, 1, 1, 1, () => ScalingPolicies]
);
export var GetScalingConfigurationRecommendationRequest = struct(
  n0,
  _GSCRR,
  0,
  [_IRJN, _RIe, _EN, _TCUPC, _SPO],
  [0, 0, 0, 1, () => ScalingPolicyObjective]
);
export var GetScalingConfigurationRecommendationResponse = struct(
  n0,
  _GSCRRe,
  0,
  [_IRJN, _RIe, _EN, _TCUPC, _SPO, _Metr, _DSCy],
  [0, 0, 0, 1, () => ScalingPolicyObjective, () => ScalingPolicyMetric, () => DynamicScalingConfiguration]
);
export var PredefinedMetricSpecification = struct(n0, _PMS, 0, [_PMT], [0]);
export var ScalingPolicyMetric = struct(n0, _SPM, 0, [_IPI, _ML], [1, 1]);
export var ScalingPolicyObjective = struct(n0, _SPO, 0, [_MIPM, _MIPMa], [1, 1]);
export var StopInferenceRecommendationsJobRequest = struct(n0, _SIRJR, 0, [_JN], [0]);
export var TargetTrackingScalingPolicyConfiguration = struct(
  n0,
  _TTSPC,
  0,
  [_MSet, _TVa],
  [() => MetricSpecification, 1]
);
export var ScalingPolicies = list(n0, _SP, 0, () => ScalingPolicy);
export var MetricSpecification = uni(
  n0,
  _MSet,
  0,
  [_Pre, _Cu],
  [() => PredefinedMetricSpecification, () => CustomizedMetricSpecification]
);
export var ScalingPolicy = uni(n0, _SPc, 0, [_TTa], [() => TargetTrackingScalingPolicyConfiguration]);
export var GetScalingConfigurationRecommendation = op(
  n0,
  _GSCR,
  0,
  () => GetScalingConfigurationRecommendationRequest,
  () => GetScalingConfigurationRecommendationResponse
);
export var StopInferenceRecommendationsJob = op(
  n0,
  _SIRJ,
  0,
  () => StopInferenceRecommendationsJobRequest,
  () => Unit
);
