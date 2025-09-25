// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConcurrentUpdateException as __ConcurrentUpdateException,
  FailedResourceAccessException as __FailedResourceAccessException,
  InternalServiceException as __InternalServiceException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ObjectNotFoundException as __ObjectNotFoundException,
} from "../models/index";
import {
  _A,
  _AARN,
  _AI,
  _Al,
  _AN,
  _aQE,
  _AT,
  _C,
  _c,
  _Ca,
  _CC,
  _CCMS,
  _CF,
  _CLMS,
  _CMS,
  _Co,
  _CSMS,
  _CT,
  _CUE,
  _D,
  _De,
  _Det,
  _DSA,
  _DSAe,
  _DSAes,
  _DSAR,
  _DSARe,
  _DSARes,
  _DSAResc,
  _DSARescr,
  _DSARescri,
  _DSI,
  _DSIS,
  _DSOS,
  _DSP,
  _DSPe,
  _DSPR,
  _DSPRe,
  _DSPRes,
  _DSPResc,
  _DST,
  _DSTe,
  _DSTR,
  _DSTRe,
  _DSTRes,
  _DSTResc,
  _E,
  _e,
  _ET,
  _FRAE,
  _GPSF,
  _GPSFR,
  _GPSFRe,
  _hE,
  _I,
  _INSA,
  _INTE,
  _ISE,
  _L,
  _LEE,
  _LF,
  _LFo,
  _M,
  _MAM,
  _MAT,
  _MC,
  _MCB,
  _MCBB,
  _MCi,
  _MD,
  _MDe,
  _MDQ,
  _Me,
  _Met,
  _MILB,
  _MIUB,
  _MN,
  _Mo,
  _MR,
  _MS,
  _MSe,
  _MSet,
  _N,
  _Na,
  _NSR,
  _NSRo,
  _NT,
  _ONFE,
  _PARN,
  _PC,
  _PLMS,
  _PMPS,
  _PMS,
  _PMT,
  _PN,
  _PNo,
  _PSA,
  _PSAR,
  _PSARu,
  _PSCMS,
  _PSM,
  _PSMD,
  _PSMDQ,
  _PSMDQr,
  _PSMDr,
  _PSMS,
  _PSMSr,
  _PSMSre,
  _PSMSred,
  _PSP,
  _PSPC,
  _PSPLMS,
  _PSPMPS,
  _PSPR,
  _PSPRu,
  _PSPSMS,
  _PT,
  _RARNo,
  _RD,
  _RI,
  _RIe,
  _RL,
  _RST,
  _RSTR,
  _RSTRe,
  _S,
  _s,
  _SA,
  _SAARN,
  _SAc,
  _SAca,
  _SAcal,
  _SAch,
  _SAN,
  _SANc,
  _SAt,
  _SAte,
  _SBT,
  _SC,
  _Sc,
  _SD,
  _SIC,
  _SM,
  _SN,
  _SOC,
  _SP,
  _SPc,
  _SS,
  _SSPC,
  _SSS,
  _ST,
  _St,
  _STA,
  _STARN,
  _STc,
  _STt,
  _T,
  _Ta,
  _Ti,
  _TTM,
  _TTMD,
  _TTMDa,
  _TTMDQ,
  _TTMDQa,
  _TTMS,
  _TTSPC,
  _TV,
  _U,
  _UT,
  _V,
  _Va,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Alarm = struct(n0, _A, 0, [_AN, _AARN], [0, 0]);
export var CapacityForecast = struct(n0, _CF, 0, [_T, _V], [64 | 4, 64 | 1]);
export var ConcurrentUpdateException = error(
  n0,
  _CUE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`ConcurrentUpdateException`, 500],
  },
  [_M],
  [0],

  __ConcurrentUpdateException
);
export var CustomizedMetricSpecification = struct(
  n0,
  _CMS,
  0,
  [_MN, _N, _D, _S, _U, _Me],
  [0, 0, () => MetricDimensions, 0, 0, () => TargetTrackingMetricDataQueries]
);
export var DeleteScalingPolicyRequest = struct(n0, _DSPR, 0, [_PN, _SN, _RI, _SD], [0, 0, 0, 0]);
export var DeleteScalingPolicyResponse = struct(n0, _DSPRe, 0, [], []);
export var DeleteScheduledActionRequest = struct(n0, _DSAR, 0, [_SN, _SAN, _RI, _SD], [0, 0, 0, 0]);
export var DeleteScheduledActionResponse = struct(n0, _DSARe, 0, [], []);
export var DeregisterScalableTargetRequest = struct(n0, _DSTR, 0, [_SN, _RI, _SD], [0, 0, 0]);
export var DeregisterScalableTargetResponse = struct(n0, _DSTRe, 0, [], []);
export var DescribeScalableTargetsRequest = struct(n0, _DSTRes, 0, [_SN, _RIe, _SD, _MR, _NT], [0, 64 | 0, 0, 1, 0]);
export var DescribeScalableTargetsResponse = struct(n0, _DSTResc, 0, [_ST, _NT], [() => ScalableTargets, 0]);
export var DescribeScalingActivitiesRequest = struct(
  n0,
  _DSARes,
  0,
  [_SN, _RI, _SD, _MR, _NT, _INSA],
  [0, 0, 0, 1, 0, 2]
);
export var DescribeScalingActivitiesResponse = struct(n0, _DSAResc, 0, [_SA, _NT], [() => ScalingActivities, 0]);
export var DescribeScalingPoliciesRequest = struct(
  n0,
  _DSPRes,
  0,
  [_PNo, _SN, _RI, _SD, _MR, _NT],
  [64 | 0, 0, 0, 0, 1, 0]
);
export var DescribeScalingPoliciesResponse = struct(n0, _DSPResc, 0, [_SP, _NT], [() => ScalingPolicies, 0]);
export var DescribeScheduledActionsRequest = struct(
  n0,
  _DSARescr,
  0,
  [_SANc, _SN, _RI, _SD, _MR, _NT],
  [64 | 0, 0, 0, 0, 1, 0]
);
export var DescribeScheduledActionsResponse = struct(n0, _DSARescri, 0, [_SAc, _NT], [() => ScheduledActions, 0]);
export var FailedResourceAccessException = error(
  n0,
  _FRAE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`FailedResourceAccessException`, 400],
  },
  [_M],
  [0],

  __FailedResourceAccessException
);
export var GetPredictiveScalingForecastRequest = struct(
  n0,
  _GPSFR,
  0,
  [_SN, _RI, _SD, _PN, _STt, _ET],
  [0, 0, 0, 0, 4, 4]
);
export var GetPredictiveScalingForecastResponse = struct(
  n0,
  _GPSFRe,
  0,
  [_LF, _CF, _UT],
  [() => LoadForecasts, () => CapacityForecast, 4]
);
export var InternalServiceException = error(
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`InternalServiceException`, 500],
  },
  [_M],
  [0],

  __InternalServiceException
);
export var InvalidNextTokenException = error(
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNextTokenException`, 400],
  },
  [_M],
  [0],

  __InvalidNextTokenException
);
export var LimitExceededException = error(
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceededException`, 400],
  },
  [_M],
  [0],

  __LimitExceededException
);
export var LoadForecast = struct(
  n0,
  _LF,
  0,
  [_T, _V, _MS],
  [64 | 4, 64 | 1, () => PredictiveScalingMetricSpecification]
);
export var MetricDimension = struct(n0, _MD, 0, [_Na, _Va], [0, 0]);
export var NotScaledReason = struct(n0, _NSR, 0, [_C, _MC, _MCi, _CC], [0, 1, 1, 1]);
export var ObjectNotFoundException = error(
  n0,
  _ONFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ObjectNotFoundException`, 400],
  },
  [_M],
  [0],

  __ObjectNotFoundException
);
export var PredefinedMetricSpecification = struct(n0, _PMS, 0, [_PMT, _RL], [0, 0]);
export var PredictiveScalingCustomizedMetricSpecification = struct(
  n0,
  _PSCMS,
  0,
  [_MDQ],
  [() => PredictiveScalingMetricDataQueries]
);
export var PredictiveScalingMetric = struct(
  n0,
  _PSM,
  0,
  [_D, _MN, _N],
  [() => PredictiveScalingMetricDimensions, 0, 0]
);
export var PredictiveScalingMetricDataQuery = struct(
  n0,
  _PSMDQ,
  0,
  [_I, _E, _MSe, _L, _RD],
  [0, 0, () => PredictiveScalingMetricStat, 0, 2]
);
export var PredictiveScalingMetricDimension = struct(n0, _PSMD, 0, [_Na, _Va], [0, 0]);
export var PredictiveScalingMetricSpecification = struct(
  n0,
  _PSMS,
  0,
  [_TV, _PMPS, _PSMSr, _PLMS, _CSMS, _CLMS, _CCMS],
  [
    1,
    () => PredictiveScalingPredefinedMetricPairSpecification,
    () => PredictiveScalingPredefinedScalingMetricSpecification,
    () => PredictiveScalingPredefinedLoadMetricSpecification,
    () => PredictiveScalingCustomizedMetricSpecification,
    () => PredictiveScalingCustomizedMetricSpecification,
    () => PredictiveScalingCustomizedMetricSpecification,
  ]
);
export var PredictiveScalingMetricStat = struct(n0, _PSMSre, 0, [_Met, _St, _U], [() => PredictiveScalingMetric, 0, 0]);
export var PredictiveScalingPolicyConfiguration = struct(
  n0,
  _PSPC,
  0,
  [_MSet, _Mo, _SBT, _MCBB, _MCB],
  [() => PredictiveScalingMetricSpecifications, 0, 1, 0, 1]
);
export var PredictiveScalingPredefinedLoadMetricSpecification = struct(n0, _PSPLMS, 0, [_PMT, _RL], [0, 0]);
export var PredictiveScalingPredefinedMetricPairSpecification = struct(n0, _PSPMPS, 0, [_PMT, _RL], [0, 0]);
export var PredictiveScalingPredefinedScalingMetricSpecification = struct(n0, _PSPSMS, 0, [_PMT, _RL], [0, 0]);
export var PutScalingPolicyRequest = struct(
  n0,
  _PSPR,
  0,
  [_PN, _SN, _RI, _SD, _PT, _SSPC, _TTSPC, _PSPC],
  [
    0,
    0,
    0,
    0,
    0,
    () => StepScalingPolicyConfiguration,
    () => TargetTrackingScalingPolicyConfiguration,
    () => PredictiveScalingPolicyConfiguration,
  ]
);
export var PutScalingPolicyResponse = struct(n0, _PSPRu, 0, [_PARN, _Al], [0, () => Alarms]);
export var PutScheduledActionRequest = struct(
  n0,
  _PSAR,
  0,
  [_SN, _Sc, _Ti, _SAN, _RI, _SD, _STt, _ET, _STA],
  [0, 0, 0, 0, 0, 0, 4, 4, () => ScalableTargetAction]
);
export var PutScheduledActionResponse = struct(n0, _PSARu, 0, [], []);
export var RegisterScalableTargetRequest = struct(
  n0,
  _RSTR,
  0,
  [_SN, _RI, _SD, _MCi, _MC, _RARNo, _SS, _Ta],
  [0, 0, 0, 1, 1, 0, () => SuspendedState, 128 | 0]
);
export var RegisterScalableTargetResponse = struct(n0, _RSTRe, 0, [_STARN], [0]);
export var ScalableTarget = struct(
  n0,
  _STc,
  0,
  [_SN, _RI, _SD, _MCi, _MC, _PC, _RARNo, _CT, _SS, _STARN],
  [0, 0, 0, 1, 1, 1, 0, 4, () => SuspendedState, 0]
);
export var ScalableTargetAction = struct(n0, _STA, 0, [_MCi, _MC], [1, 1]);
export var ScalingActivity = struct(
  n0,
  _SAca,
  0,
  [_AI, _SN, _RI, _SD, _De, _Ca, _STt, _ET, _SC, _SM, _Det, _NSRo],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, () => NotScaledReasons]
);
export var ScalingPolicy = struct(
  n0,
  _SPc,
  0,
  [_PARN, _PN, _SN, _RI, _SD, _PT, _SSPC, _TTSPC, _PSPC, _Al, _CT],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    () => StepScalingPolicyConfiguration,
    () => TargetTrackingScalingPolicyConfiguration,
    () => PredictiveScalingPolicyConfiguration,
    () => Alarms,
    4,
  ]
);
export var ScheduledAction = struct(
  n0,
  _SAch,
  0,
  [_SAN, _SAARN, _SN, _Sc, _Ti, _RI, _SD, _STt, _ET, _STA, _CT],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, () => ScalableTargetAction, 4]
);
export var StepAdjustment = struct(n0, _SAt, 0, [_MILB, _MIUB, _SAcal], [1, 1, 1]);
export var StepScalingPolicyConfiguration = struct(
  n0,
  _SSPC,
  0,
  [_AT, _SAte, _MAM, _Co, _MAT],
  [0, () => StepAdjustments, 1, 1, 0]
);
export var SuspendedState = struct(n0, _SS, 0, [_DSIS, _DSOS, _SSS], [2, 2, 2]);
export var TargetTrackingMetric = struct(n0, _TTM, 0, [_D, _MN, _N], [() => TargetTrackingMetricDimensions, 0, 0]);
export var TargetTrackingMetricDataQuery = struct(
  n0,
  _TTMDQ,
  0,
  [_E, _I, _L, _MSe, _RD],
  [0, 0, 0, () => TargetTrackingMetricStat, 2]
);
export var TargetTrackingMetricDimension = struct(n0, _TTMD, 0, [_Na, _Va], [0, 0]);
export var TargetTrackingMetricStat = struct(n0, _TTMS, 0, [_Met, _St, _U], [() => TargetTrackingMetric, 0, 0]);
export var TargetTrackingScalingPolicyConfiguration = struct(
  n0,
  _TTSPC,
  0,
  [_TV, _PMS, _CMS, _SOC, _SIC, _DSI],
  [1, () => PredefinedMetricSpecification, () => CustomizedMetricSpecification, 1, 1, 2]
);
export var Unit = "unit" as const;

export var Alarms = list(n0, _Al, 0, () => Alarm);
export var LoadForecasts = list(n0, _LFo, 0, () => LoadForecast);
export var MetricDimensions = list(n0, _MDe, 0, () => MetricDimension);
export var NotScaledReasons = list(n0, _NSRo, 0, () => NotScaledReason);
export var PredictiveScalingForecastTimestamps = 64 | 4;

export var PredictiveScalingForecastValues = 64 | 1;

export var PredictiveScalingMetricDataQueries = list(n0, _PSMDQr, 0, () => PredictiveScalingMetricDataQuery);
export var PredictiveScalingMetricDimensions = list(n0, _PSMDr, 0, () => PredictiveScalingMetricDimension);
export var PredictiveScalingMetricSpecifications = list(n0, _PSMSred, 0, () => PredictiveScalingMetricSpecification);
export var ResourceIdsMaxLen1600 = 64 | 0;

export var ScalableTargets = list(n0, _ST, 0, () => ScalableTarget);
export var ScalingActivities = list(n0, _SA, 0, () => ScalingActivity);
export var ScalingPolicies = list(n0, _SP, 0, () => ScalingPolicy);
export var ScheduledActions = list(n0, _SAc, 0, () => ScheduledAction);
export var StepAdjustments = list(n0, _SAte, 0, () => StepAdjustment);
export var TargetTrackingMetricDataQueries = list(n0, _TTMDQa, 0, () => TargetTrackingMetricDataQuery);
export var TargetTrackingMetricDimensions = list(n0, _TTMDa, 0, () => TargetTrackingMetricDimension);
export var DeleteScalingPolicy = op(
  n0,
  _DSP,
  0,
  () => DeleteScalingPolicyRequest,
  () => DeleteScalingPolicyResponse
);
export var DeleteScheduledAction = op(
  n0,
  _DSA,
  0,
  () => DeleteScheduledActionRequest,
  () => DeleteScheduledActionResponse
);
export var DeregisterScalableTarget = op(
  n0,
  _DST,
  0,
  () => DeregisterScalableTargetRequest,
  () => DeregisterScalableTargetResponse
);
export var DescribeScalableTargets = op(
  n0,
  _DSTe,
  0,
  () => DescribeScalableTargetsRequest,
  () => DescribeScalableTargetsResponse
);
export var DescribeScalingActivities = op(
  n0,
  _DSAe,
  0,
  () => DescribeScalingActivitiesRequest,
  () => DescribeScalingActivitiesResponse
);
export var DescribeScalingPolicies = op(
  n0,
  _DSPe,
  0,
  () => DescribeScalingPoliciesRequest,
  () => DescribeScalingPoliciesResponse
);
export var DescribeScheduledActions = op(
  n0,
  _DSAes,
  0,
  () => DescribeScheduledActionsRequest,
  () => DescribeScheduledActionsResponse
);
export var GetPredictiveScalingForecast = op(
  n0,
  _GPSF,
  0,
  () => GetPredictiveScalingForecastRequest,
  () => GetPredictiveScalingForecastResponse
);
export var PutScalingPolicy = op(
  n0,
  _PSP,
  0,
  () => PutScalingPolicyRequest,
  () => PutScalingPolicyResponse
);
export var PutScheduledAction = op(
  n0,
  _PSA,
  0,
  () => PutScheduledActionRequest,
  () => PutScheduledActionResponse
);
export var RegisterScalableTarget = op(
  n0,
  _RST,
  0,
  () => RegisterScalableTargetRequest,
  () => RegisterScalableTargetResponse
);
