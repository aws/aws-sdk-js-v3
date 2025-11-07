export const _AS = "ApplicationSource";
export const _ASp = "ApplicationSources";
export const _CFSARN = "CloudFormationStackARN";
export const _CLMS = "CustomizedLoadMetricSpecification";
export const _CSMS = "CustomizedScalingMetricSpecification";
export const _CSP = "CreateScalingPlan";
export const _CSPR = "CreateScalingPlanRequest";
export const _CSPRr = "CreateScalingPlanResponse";
export const _CT = "CreationTime";
export const _CUE = "ConcurrentUpdateException";
export const _D = "Dimensions";
export const _DDS = "DisableDynamicScaling";
export const _DSI = "DisableScaleIn";
export const _DSP = "DeleteScalingPlan";
export const _DSPR = "DeleteScalingPlanRequest";
export const _DSPRR = "DescribeScalingPlanResourcesRequest";
export const _DSPRRe = "DescribeScalingPlanResourcesResponse";
export const _DSPRe = "DeleteScalingPlanResponse";
export const _DSPRes = "DescribeScalingPlansRequest";
export const _DSPResc = "DescribeScalingPlansResponse";
export const _DSPRescr = "DescribeScalingPlanResources";
export const _DSPe = "DescribeScalingPlans";
export const _Da = "Datapoint";
export const _Dat = "Datapoints";
export const _EIW = "EstimatedInstanceWarmup";
export const _ET = "EndTime";
export const _FDT = "ForecastDataType";
export const _GSPRFD = "GetScalingPlanResourceForecastData";
export const _GSPRFDR = "GetScalingPlanResourceForecastDataRequest";
export const _GSPRFDRe = "GetScalingPlanResourceForecastDataResponse";
export const _INTE = "InvalidNextTokenException";
export const _ISE = "InternalServiceException";
export const _K = "Key";
export const _LEE = "LimitExceededException";
export const _M = "Message";
export const _MC = "MinCapacity";
export const _MCa = "MaxCapacity";
export const _MD = "MetricDimension";
export const _MDe = "MetricDimensions";
export const _MN = "MetricName";
export const _MR = "MaxResults";
export const _N = "Namespace";
export const _NT = "NextToken";
export const _Na = "Name";
export const _ONFE = "ObjectNotFoundException";
export const _PLMS = "PredefinedLoadMetricSpecification";
export const _PLMT = "PredefinedLoadMetricType";
export const _PN = "PolicyName";
export const _PSM = "PredictiveScalingMode";
export const _PSMCB = "PredictiveScalingMaxCapacityBehavior";
export const _PSMCBr = "PredictiveScalingMaxCapacityBuffer";
export const _PSMS = "PredefinedScalingMetricSpecification";
export const _PSMT = "PredefinedScalingMetricType";
export const _PT = "PolicyType";
export const _RI = "ResourceId";
export const _RL = "ResourceLabel";
export const _S = "Statistic";
export const _SABT = "ScheduledActionBufferTime";
export const _SC = "StatusCode";
export const _SD = "ScalableDimension";
export const _SI = "ScalingInstructions";
export const _SIC = "ScaleInCooldown";
export const _SIc = "ScalingInstruction";
export const _SM = "StatusMessage";
export const _SN = "ServiceNamespace";
export const _SOC = "ScaleOutCooldown";
export const _SP = "ScalingPlans";
export const _SPN = "ScalingPlanName";
export const _SPNc = "ScalingPlanNames";
export const _SPR = "ScalingPlanResources";
export const _SPRc = "ScalingPlanResource";
export const _SPUB = "ScalingPolicyUpdateBehavior";
export const _SPV = "ScalingPlanVersion";
export const _SPc = "ScalingPlan";
export const _SPca = "ScalingPolicies";
export const _SPcal = "ScalingPolicy";
export const _SSC = "ScalingStatusCode";
export const _SSM = "ScalingStatusMessage";
export const _SST = "StatusStartTime";
export const _ST = "StartTime";
export const _T = "Timestamp";
export const _TF = "TagFilters";
export const _TFa = "TagFilter";
export const _TTC = "TargetTrackingConfigurations";
export const _TTCa = "TargetTrackingConfiguration";
export const _TV = "TargetValue";
export const _U = "Unit";
export const _USP = "UpdateScalingPlan";
export const _USPR = "UpdateScalingPlanRequest";
export const _USPRp = "UpdateScalingPlanResponse";
export const _V = "Value";
export const _VE = "ValidationException";
export const _Va = "Values";
export const _aQE = "awsQueryError";
export const _c = "client";
export const _e = "error";
export const _hE = "httpError";
export const _s = "server";
export const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.autoscalingplans";
export const n0 = "com.amazonaws.autoscalingplans";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { AutoScalingPlansServiceException as __AutoScalingPlansServiceException } from "../models/AutoScalingPlansServiceException";
import {
  ConcurrentUpdateException as __ConcurrentUpdateException,
  InternalServiceException as __InternalServiceException,
  InvalidNextTokenException as __InvalidNextTokenException,
  LimitExceededException as __LimitExceededException,
  ObjectNotFoundException as __ObjectNotFoundException,
  ValidationException as __ValidationException,
} from "../models/index";

/* eslint no-var: 0 */

export var ApplicationSource: StaticStructureSchema = [3, n0, _AS, 0, [_CFSARN, _TF], [0, () => TagFilters]];
export var ConcurrentUpdateException: StaticErrorSchema = [
  -3,
  n0,
  _CUE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`ConcurrentUpdateException`, 500],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ConcurrentUpdateException, __ConcurrentUpdateException);

export var CreateScalingPlanRequest: StaticStructureSchema = [
  3,
  n0,
  _CSPR,
  0,
  [_SPN, _AS, _SI],
  [0, () => ApplicationSource, () => ScalingInstructions],
];
export var CreateScalingPlanResponse: StaticStructureSchema = [3, n0, _CSPRr, 0, [_SPV], [1]];
export var CustomizedLoadMetricSpecification: StaticStructureSchema = [
  3,
  n0,
  _CLMS,
  0,
  [_MN, _N, _D, _S, _U],
  [0, 0, () => MetricDimensions, 0, 0],
];
export var CustomizedScalingMetricSpecification: StaticStructureSchema = [
  3,
  n0,
  _CSMS,
  0,
  [_MN, _N, _D, _S, _U],
  [0, 0, () => MetricDimensions, 0, 0],
];
export var Datapoint: StaticStructureSchema = [3, n0, _Da, 0, [_T, _V], [4, 1]];
export var DeleteScalingPlanRequest: StaticStructureSchema = [3, n0, _DSPR, 0, [_SPN, _SPV], [0, 1]];
export var DeleteScalingPlanResponse: StaticStructureSchema = [3, n0, _DSPRe, 0, [], []];
export var DescribeScalingPlanResourcesRequest: StaticStructureSchema = [
  3,
  n0,
  _DSPRR,
  0,
  [_SPN, _SPV, _MR, _NT],
  [0, 1, 1, 0],
];
export var DescribeScalingPlanResourcesResponse: StaticStructureSchema = [
  3,
  n0,
  _DSPRRe,
  0,
  [_SPR, _NT],
  [() => ScalingPlanResources, 0],
];
export var DescribeScalingPlansRequest: StaticStructureSchema = [
  3,
  n0,
  _DSPRes,
  0,
  [_SPNc, _SPV, _ASp, _MR, _NT],
  [64 | 0, 1, () => ApplicationSources, 1, 0],
];
export var DescribeScalingPlansResponse: StaticStructureSchema = [
  3,
  n0,
  _DSPResc,
  0,
  [_SP, _NT],
  [() => ScalingPlans, 0],
];
export var GetScalingPlanResourceForecastDataRequest: StaticStructureSchema = [
  3,
  n0,
  _GSPRFDR,
  0,
  [_SPN, _SPV, _SN, _RI, _SD, _FDT, _ST, _ET],
  [0, 1, 0, 0, 0, 0, 4, 4],
];
export var GetScalingPlanResourceForecastDataResponse: StaticStructureSchema = [
  3,
  n0,
  _GSPRFDRe,
  0,
  [_Dat],
  [() => Datapoints],
];
export var InternalServiceException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _s,
    [_hE]: 500,
    [_aQE]: [`InternalServiceException`, 500],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServiceException, __InternalServiceException);

export var InvalidNextTokenException: StaticErrorSchema = [
  -3,
  n0,
  _INTE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`InvalidNextTokenException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException, __InvalidNextTokenException);

export var LimitExceededException: StaticErrorSchema = [
  -3,
  n0,
  _LEE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`LimitExceededException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededException, __LimitExceededException);

export var MetricDimension: StaticStructureSchema = [3, n0, _MD, 0, [_Na, _V], [0, 0]];
export var ObjectNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _ONFE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ObjectNotFoundException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ObjectNotFoundException, __ObjectNotFoundException);

export var PredefinedLoadMetricSpecification: StaticStructureSchema = [3, n0, _PLMS, 0, [_PLMT, _RL], [0, 0]];
export var PredefinedScalingMetricSpecification: StaticStructureSchema = [3, n0, _PSMS, 0, [_PSMT, _RL], [0, 0]];
export var ScalingInstruction: StaticStructureSchema = [
  3,
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
  ],
];
export var ScalingPlan: StaticStructureSchema = [
  3,
  n0,
  _SPc,
  0,
  [_SPN, _SPV, _AS, _SI, _SC, _SM, _SST, _CT],
  [0, 1, () => ApplicationSource, () => ScalingInstructions, 0, 0, 4, 4],
];
export var ScalingPlanResource: StaticStructureSchema = [
  3,
  n0,
  _SPRc,
  0,
  [_SPN, _SPV, _SN, _RI, _SD, _SPca, _SSC, _SSM],
  [0, 1, 0, 0, 0, () => ScalingPolicies, 0, 0],
];
export var ScalingPolicy: StaticStructureSchema = [
  3,
  n0,
  _SPcal,
  0,
  [_PN, _PT, _TTCa],
  [0, 0, () => TargetTrackingConfiguration],
];
export var TagFilter: StaticStructureSchema = [3, n0, _TFa, 0, [_K, _Va], [0, 64 | 0]];
export var TargetTrackingConfiguration: StaticStructureSchema = [
  3,
  n0,
  _TTCa,
  0,
  [_PSMS, _CSMS, _TV, _DSI, _SOC, _SIC, _EIW],
  [() => PredefinedScalingMetricSpecification, () => CustomizedScalingMetricSpecification, 1, 2, 1, 1, 1],
];
export var UpdateScalingPlanRequest: StaticStructureSchema = [
  3,
  n0,
  _USPR,
  0,
  [_SPN, _SPV, _AS, _SI],
  [0, 1, () => ApplicationSource, () => ScalingInstructions],
];
export var UpdateScalingPlanResponse: StaticStructureSchema = [3, n0, _USPRp, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _c,
    [_hE]: 400,
    [_aQE]: [`ValidationException`, 400],
  },
  [_M],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var __Unit = "unit" as const;

export var AutoScalingPlansServiceException: StaticErrorSchema = [
  -3,
  _sm,
  "AutoScalingPlansServiceException",
  0,
  [],
  [],
];
TypeRegistry.for(_sm).registerError(AutoScalingPlansServiceException, __AutoScalingPlansServiceException);

export var ApplicationSources: StaticListSchema = [1, n0, _ASp, 0, () => ApplicationSource];
export var Datapoints: StaticListSchema = [1, n0, _Dat, 0, () => Datapoint];
export var MetricDimensions: StaticListSchema = [1, n0, _MDe, 0, () => MetricDimension];
export var ScalingInstructions: StaticListSchema = [1, n0, _SI, 0, () => ScalingInstruction];
export var ScalingPlanNames = 64 | 0;

export var ScalingPlanResources: StaticListSchema = [1, n0, _SPR, 0, () => ScalingPlanResource];
export var ScalingPlans: StaticListSchema = [1, n0, _SP, 0, () => ScalingPlan];
export var ScalingPolicies: StaticListSchema = [1, n0, _SPca, 0, () => ScalingPolicy];
export var TagFilters: StaticListSchema = [1, n0, _TF, 0, () => TagFilter];
export var TagValues = 64 | 0;

export var TargetTrackingConfigurations: StaticListSchema = [1, n0, _TTC, 0, () => TargetTrackingConfiguration];
export var CreateScalingPlan: StaticOperationSchema = [
  9,
  n0,
  _CSP,
  0,
  () => CreateScalingPlanRequest,
  () => CreateScalingPlanResponse,
];
export var DeleteScalingPlan: StaticOperationSchema = [
  9,
  n0,
  _DSP,
  0,
  () => DeleteScalingPlanRequest,
  () => DeleteScalingPlanResponse,
];
export var DescribeScalingPlanResources: StaticOperationSchema = [
  9,
  n0,
  _DSPRescr,
  0,
  () => DescribeScalingPlanResourcesRequest,
  () => DescribeScalingPlanResourcesResponse,
];
export var DescribeScalingPlans: StaticOperationSchema = [
  9,
  n0,
  _DSPe,
  0,
  () => DescribeScalingPlansRequest,
  () => DescribeScalingPlansResponse,
];
export var GetScalingPlanResourceForecastData: StaticOperationSchema = [
  9,
  n0,
  _GSPRFD,
  0,
  () => GetScalingPlanResourceForecastDataRequest,
  () => GetScalingPlanResourceForecastDataResponse,
];
export var UpdateScalingPlan: StaticOperationSchema = [
  9,
  n0,
  _USP,
  0,
  () => UpdateScalingPlanRequest,
  () => UpdateScalingPlanResponse,
];
