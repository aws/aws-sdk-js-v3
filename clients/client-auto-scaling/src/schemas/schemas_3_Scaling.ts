// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _A,
  _Ac,
  _AI,
  _AIc,
  _ASGARN,
  _ASGN,
  _ASGS,
  _AT,
  _ATc,
  _C,
  _CCMS,
  _CF,
  _CLMS,
  _CSMS,
  _D,
  _De,
  _DI,
  _Di,
  _DIA,
  _DIQ,
  _DSAe,
  _DSATe,
  _ES,
  _ESA,
  _ESAx,
  _ESQ,
  _ESQx,
  _ESx,
  _ET,
  _Ex,
  _GPSF,
  _GPSFA,
  _GPSFT,
  _Id,
  _IDG,
  _II,
  _IIns,
  _L,
  _LF,
  _LFo,
  _MD,
  _MDe,
  _MDQ,
  _MDQe,
  _Met,
  _MN,
  _MR,
  _MSe,
  _MSet,
  _N,
  _Na,
  _NT,
  _P,
  _PLMS,
  _PMPS,
  _PMT,
  _PN,
  _PSCCM,
  _PSCLM,
  _PSCSM,
  _PSMS,
  _PSMSr,
  _PSPLM,
  _PSPMP,
  _PSPSM,
  _RDe,
  _RL,
  _SC,
  _SDDC,
  _SM,
  _ST,
  _Stat,
  _Ti,
  _TIIASG,
  _TIIASGT,
  _TV,
  _U,
  _UT,
  _V,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ActivitiesType = struct(n0, _AT, 0, [_A, _NT], [() => Activities, 0]);
export var Activity = struct(
  n0,
  _Ac,
  0,
  [_AI, _ASGN, _D, _C, _ST, _ET, _SC, _SM, _P, _De, _ASGS, _ASGARN],
  [0, 0, 0, 0, 4, 4, 0, 0, 1, 0, 0, 0]
);
export var ActivityType = struct(n0, _ATc, 0, [_Ac], [() => Activity]);
export var CapacityForecast = struct(n0, _CF, 0, [_Ti, _V], [64 | 4, 64 | 1]);
export var DescribeScalingActivitiesType = struct(n0, _DSATe, 0, [_AIc, _ASGN, _IDG, _MR, _NT], [64 | 0, 0, 2, 1, 0]);
export var DetachInstancesAnswer = struct(n0, _DIA, 0, [_A], [() => Activities]);
export var DetachInstancesQuery = struct(n0, _DIQ, 0, [_II, _ASGN, _SDDC], [64 | 0, 0, 2]);
export var EnterStandbyAnswer = struct(n0, _ESA, 0, [_A], [() => Activities]);
export var EnterStandbyQuery = struct(n0, _ESQ, 0, [_II, _ASGN, _SDDC], [64 | 0, 0, 2]);
export var ExitStandbyAnswer = struct(n0, _ESAx, 0, [_A], [() => Activities]);
export var ExitStandbyQuery = struct(n0, _ESQx, 0, [_II, _ASGN], [64 | 0, 0]);
export var GetPredictiveScalingForecastAnswer = struct(
  n0,
  _GPSFA,
  0,
  [_LF, _CF, _UT],
  [() => LoadForecasts, () => CapacityForecast, 4]
);
export var GetPredictiveScalingForecastType = struct(n0, _GPSFT, 0, [_ASGN, _PN, _ST, _ET], [0, 0, 4, 4]);
export var LoadForecast = struct(
  n0,
  _LF,
  0,
  [_Ti, _V, _MSe],
  [64 | 4, 64 | 1, () => PredictiveScalingMetricSpecification]
);
export var Metric = struct(n0, _Met, 0, [_N, _MN, _Di], [0, 0, () => MetricDimensions]);
export var MetricDataQuery = struct(n0, _MDQ, 0, [_Id, _Ex, _MSet, _L, _RDe], [0, 0, () => MetricStat, 0, 2]);
export var MetricDimension = struct(n0, _MD, 0, [_Na, _Va], [0, 0]);
export var MetricStat = struct(n0, _MSet, 0, [_Met, _Stat, _U], [() => Metric, 0, 0]);
export var PredictiveScalingCustomizedCapacityMetric = struct(n0, _PSCCM, 0, [_MDQe], [() => MetricDataQueries]);
export var PredictiveScalingCustomizedLoadMetric = struct(n0, _PSCLM, 0, [_MDQe], [() => MetricDataQueries]);
export var PredictiveScalingCustomizedScalingMetric = struct(n0, _PSCSM, 0, [_MDQe], [() => MetricDataQueries]);
export var PredictiveScalingMetricSpecification = struct(
  n0,
  _PSMS,
  0,
  [_TV, _PMPS, _PSMSr, _PLMS, _CSMS, _CLMS, _CCMS],
  [
    1,
    () => PredictiveScalingPredefinedMetricPair,
    () => PredictiveScalingPredefinedScalingMetric,
    () => PredictiveScalingPredefinedLoadMetric,
    () => PredictiveScalingCustomizedScalingMetric,
    () => PredictiveScalingCustomizedLoadMetric,
    () => PredictiveScalingCustomizedCapacityMetric,
  ]
);
export var PredictiveScalingPredefinedLoadMetric = struct(n0, _PSPLM, 0, [_PMT, _RL], [0, 0]);
export var PredictiveScalingPredefinedMetricPair = struct(n0, _PSPMP, 0, [_PMT, _RL], [0, 0]);
export var PredictiveScalingPredefinedScalingMetric = struct(n0, _PSPSM, 0, [_PMT, _RL], [0, 0]);
export var TerminateInstanceInAutoScalingGroupType = struct(n0, _TIIASGT, 0, [_IIns, _SDDC], [0, 2]);
export var Activities = list(n0, _A, 0, () => Activity);
export var ActivityIds = 64 | 0;

export var LoadForecasts = list(n0, _LFo, 0, () => LoadForecast);
export var MetricDataQueries = list(n0, _MDQe, 0, () => MetricDataQuery);
export var MetricDimensions = list(n0, _MDe, 0, () => MetricDimension);
export var PredictiveScalingForecastTimestamps = 64 | 4;

export var PredictiveScalingForecastValues = 64 | 1;

export var DescribeScalingActivities = op(
  n0,
  _DSAe,
  0,
  () => DescribeScalingActivitiesType,
  () => ActivitiesType
);
export var DetachInstances = op(
  n0,
  _DI,
  0,
  () => DetachInstancesQuery,
  () => DetachInstancesAnswer
);
export var EnterStandby = op(
  n0,
  _ES,
  0,
  () => EnterStandbyQuery,
  () => EnterStandbyAnswer
);
export var ExitStandby = op(
  n0,
  _ESx,
  0,
  () => ExitStandbyQuery,
  () => ExitStandbyAnswer
);
export var GetPredictiveScalingForecast = op(
  n0,
  _GPSF,
  0,
  () => GetPredictiveScalingForecastType,
  () => GetPredictiveScalingForecastAnswer
);
export var TerminateInstanceInAutoScalingGroup = op(
  n0,
  _TIIASG,
  0,
  () => TerminateInstanceInAutoScalingGroupType,
  () => ActivityType
);
