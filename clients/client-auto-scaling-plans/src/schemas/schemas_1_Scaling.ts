// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  ConcurrentUpdateException as __ConcurrentUpdateException,
  InternalServiceException as __InternalServiceException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ObjectNotFoundException as __ObjectNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";
import {
  _aQE,
  _AS,
  _ASp,
  _c,
  _CFSARN,
  _CLMS,
  _CSMS,
  _CSP,
  _CSPR,
  _CSPRr,
  _CT,
  _CUE,
  _D,
  _Da,
  _Dat,
  _DDS,
  _DSI,
  _DSP,
  _DSPe,
  _DSPR,
  _DSPRe,
  _DSPRes,
  _DSPResc,
  _DSPRescr,
  _DSPRR,
  _DSPRRe,
  _e,
  _EIW,
  _ET,
  _FDT,
  _GSPRFD,
  _GSPRFDR,
  _GSPRFDRe,
  _hE,
  _INTE,
  _ISE,
  _K,
  _LEE,
  _M,
  _MC,
  _MCa,
  _MD,
  _MDe,
  _MN,
  _MR,
  _N,
  _Na,
  _NT,
  _ONFE,
  _PLMS,
  _PLMT,
  _PN,
  _PSM,
  _PSMCB,
  _PSMCBr,
  _PSMS,
  _PSMT,
  _PT,
  _RI,
  _RL,
  _S,
  _s,
  _SABT,
  _SC,
  _SD,
  _SI,
  _SIC,
  _SIc,
  _SM,
  _SN,
  _SOC,
  _SP,
  _SPc,
  _SPca,
  _SPcal,
  _SPN,
  _SPNc,
  _SPR,
  _SPRc,
  _SPUB,
  _SPV,
  _SSC,
  _SSM,
  _SST,
  _ST,
  _T,
  _TF,
  _TFa,
  _TTC,
  _TTCa,
  _TV,
  _U,
  _USP,
  _USPR,
  _USPRp,
  _V,
  _Va,
  _VE,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ApplicationSource = struct(n0, _AS, 0, [_CFSARN, _TF], [0, () => TagFilters]);
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
export var CreateScalingPlanRequest = struct(
  n0,
  _CSPR,
  0,
  [_SPN, _AS, _SI],
  [0, () => ApplicationSource, () => ScalingInstructions]
);
export var CreateScalingPlanResponse = struct(n0, _CSPRr, 0, [_SPV], [1]);
export var CustomizedLoadMetricSpecification = struct(
  n0,
  _CLMS,
  0,
  [_MN, _N, _D, _S, _U],
  [0, 0, () => MetricDimensions, 0, 0]
);
export var CustomizedScalingMetricSpecification = struct(
  n0,
  _CSMS,
  0,
  [_MN, _N, _D, _S, _U],
  [0, 0, () => MetricDimensions, 0, 0]
);
export var Datapoint = struct(n0, _Da, 0, [_T, _V], [4, 1]);
export var DeleteScalingPlanRequest = struct(n0, _DSPR, 0, [_SPN, _SPV], [0, 1]);
export var DeleteScalingPlanResponse = struct(n0, _DSPRe, 0, [], []);
export var DescribeScalingPlanResourcesRequest = struct(n0, _DSPRR, 0, [_SPN, _SPV, _MR, _NT], [0, 1, 1, 0]);
export var DescribeScalingPlanResourcesResponse = struct(n0, _DSPRRe, 0, [_SPR, _NT], [() => ScalingPlanResources, 0]);
export var DescribeScalingPlansRequest = struct(
  n0,
  _DSPRes,
  0,
  [_SPNc, _SPV, _ASp, _MR, _NT],
  [64 | 0, 1, () => ApplicationSources, 1, 0]
);
export var DescribeScalingPlansResponse = struct(n0, _DSPResc, 0, [_SP, _NT], [() => ScalingPlans, 0]);
export var GetScalingPlanResourceForecastDataRequest = struct(
  n0,
  _GSPRFDR,
  0,
  [_SPN, _SPV, _SN, _RI, _SD, _FDT, _ST, _ET],
  [0, 1, 0, 0, 0, 0, 4, 4]
);
export var GetScalingPlanResourceForecastDataResponse = struct(n0, _GSPRFDRe, 0, [_Dat], [() => Datapoints]);
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
export var MetricDimension = struct(n0, _MD, 0, [_Na, _V], [0, 0]);
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
export var PredefinedLoadMetricSpecification = struct(n0, _PLMS, 0, [_PLMT, _RL], [0, 0]);
export var PredefinedScalingMetricSpecification = struct(n0, _PSMS, 0, [_PSMT, _RL], [0, 0]);
export var ScalingInstruction = struct(
  n0,
  _SIc,
  0,
  [_SN, _RI, _SD, _MC, _MCa, _TTC, _PLMS, _CLMS, _SABT, _PSMCB, _PSMCBr, _PSM, _SPUB, _DDS],
  [
    0,
    0,
    0,
    1,
    1,
    () => TargetTrackingConfigurations,
    () => PredefinedLoadMetricSpecification,
    () => CustomizedLoadMetricSpecification,
    1,
    0,
    1,
    0,
    0,
    2,
  ]
);
export var ScalingPlan = struct(
  n0,
  _SPc,
  0,
  [_SPN, _SPV, _AS, _SI, _SC, _SM, _SST, _CT],
  [0, 1, () => ApplicationSource, () => ScalingInstructions, 0, 0, 4, 4]
);
export var ScalingPlanResource = struct(
  n0,
  _SPRc,
  0,
  [_SPN, _SPV, _SN, _RI, _SD, _SPca, _SSC, _SSM],
  [0, 1, 0, 0, 0, () => ScalingPolicies, 0, 0]
);
export var ScalingPolicy = struct(n0, _SPcal, 0, [_PN, _PT, _TTCa], [0, 0, () => TargetTrackingConfiguration]);
export var TagFilter = struct(n0, _TFa, 0, [_K, _Va], [0, 64 | 0]);
export var TargetTrackingConfiguration = struct(
  n0,
  _TTCa,
  0,
  [_PSMS, _CSMS, _TV, _DSI, _SOC, _SIC, _EIW],
  [() => PredefinedScalingMetricSpecification, () => CustomizedScalingMetricSpecification, 1, 2, 1, 1, 1]
);
export var UpdateScalingPlanRequest = struct(
  n0,
  _USPR,
  0,
  [_SPN, _SPV, _AS, _SI],
  [0, 1, () => ApplicationSource, () => ScalingInstructions]
);
export var UpdateScalingPlanResponse = struct(n0, _USPRp, 0, [], []);
export var ValidationException = error(
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ValidationException`, 400],
  },
  [_M],
  [0],

  __ValidationException
);
export var Unit = "unit" as const;

export var ApplicationSources = list(n0, _ASp, 0, () => ApplicationSource);
export var Datapoints = list(n0, _Dat, 0, () => Datapoint);
export var MetricDimensions = list(n0, _MDe, 0, () => MetricDimension);
export var ScalingInstructions = list(n0, _SI, 0, () => ScalingInstruction);
export var ScalingPlanNames = 64 | 0;

export var ScalingPlanResources = list(n0, _SPR, 0, () => ScalingPlanResource);
export var ScalingPlans = list(n0, _SP, 0, () => ScalingPlan);
export var ScalingPolicies = list(n0, _SPca, 0, () => ScalingPolicy);
export var TagFilters = list(n0, _TF, 0, () => TagFilter);
export var TagValues = 64 | 0;

export var TargetTrackingConfigurations = list(n0, _TTC, 0, () => TargetTrackingConfiguration);
export var CreateScalingPlan = op(
  n0,
  _CSP,
  0,
  () => CreateScalingPlanRequest,
  () => CreateScalingPlanResponse
);
export var DeleteScalingPlan = op(
  n0,
  _DSP,
  0,
  () => DeleteScalingPlanRequest,
  () => DeleteScalingPlanResponse
);
export var DescribeScalingPlanResources = op(
  n0,
  _DSPRescr,
  0,
  () => DescribeScalingPlanResourcesRequest,
  () => DescribeScalingPlanResourcesResponse
);
export var DescribeScalingPlans = op(
  n0,
  _DSPe,
  0,
  () => DescribeScalingPlansRequest,
  () => DescribeScalingPlansResponse
);
export var GetScalingPlanResourceForecastData = op(
  n0,
  _GSPRFD,
  0,
  () => GetScalingPlanResourceForecastDataRequest,
  () => GetScalingPlanResourceForecastDataResponse
);
export var UpdateScalingPlan = op(
  n0,
  _USP,
  0,
  () => UpdateScalingPlanRequest,
  () => UpdateScalingPlanResponse
);
