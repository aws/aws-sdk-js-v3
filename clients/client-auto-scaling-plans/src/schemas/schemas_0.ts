const _AS = "ApplicationSource";
const _ASp = "ApplicationSources";
const _CFSARN = "CloudFormationStackARN";
const _CLMS = "CustomizedLoadMetricSpecification";
const _CSMS = "CustomizedScalingMetricSpecification";
const _CSP = "CreateScalingPlan";
const _CSPR = "CreateScalingPlanRequest";
const _CSPRr = "CreateScalingPlanResponse";
const _CT = "CreationTime";
const _CUE = "ConcurrentUpdateException";
const _D = "Dimensions";
const _DDS = "DisableDynamicScaling";
const _DSI = "DisableScaleIn";
const _DSP = "DeleteScalingPlan";
const _DSPR = "DeleteScalingPlanRequest";
const _DSPRR = "DescribeScalingPlanResourcesRequest";
const _DSPRRe = "DescribeScalingPlanResourcesResponse";
const _DSPRe = "DeleteScalingPlanResponse";
const _DSPRes = "DescribeScalingPlansRequest";
const _DSPResc = "DescribeScalingPlansResponse";
const _DSPRescr = "DescribeScalingPlanResources";
const _DSPe = "DescribeScalingPlans";
const _Da = "Datapoint";
const _Dat = "Datapoints";
const _EIW = "EstimatedInstanceWarmup";
const _ET = "EndTime";
const _FDT = "ForecastDataType";
const _GSPRFD = "GetScalingPlanResourceForecastData";
const _GSPRFDR = "GetScalingPlanResourceForecastDataRequest";
const _GSPRFDRe = "GetScalingPlanResourceForecastDataResponse";
const _INTE = "InvalidNextTokenException";
const _ISE = "InternalServiceException";
const _K = "Key";
const _LEE = "LimitExceededException";
const _M = "Message";
const _MC = "MinCapacity";
const _MCa = "MaxCapacity";
const _MD = "MetricDimension";
const _MDe = "MetricDimensions";
const _MN = "MetricName";
const _MR = "MaxResults";
const _N = "Namespace";
const _NT = "NextToken";
const _Na = "Name";
const _ONFE = "ObjectNotFoundException";
const _PLMS = "PredefinedLoadMetricSpecification";
const _PLMT = "PredefinedLoadMetricType";
const _PN = "PolicyName";
const _PSM = "PredictiveScalingMode";
const _PSMCB = "PredictiveScalingMaxCapacityBehavior";
const _PSMCBr = "PredictiveScalingMaxCapacityBuffer";
const _PSMS = "PredefinedScalingMetricSpecification";
const _PSMT = "PredefinedScalingMetricType";
const _PT = "PolicyType";
const _RI = "ResourceId";
const _RL = "ResourceLabel";
const _S = "Statistic";
const _SABT = "ScheduledActionBufferTime";
const _SC = "StatusCode";
const _SD = "ScalableDimension";
const _SI = "ScalingInstructions";
const _SIC = "ScaleInCooldown";
const _SIc = "ScalingInstruction";
const _SM = "StatusMessage";
const _SN = "ServiceNamespace";
const _SOC = "ScaleOutCooldown";
const _SP = "ScalingPlans";
const _SPN = "ScalingPlanName";
const _SPNc = "ScalingPlanNames";
const _SPR = "ScalingPlanResources";
const _SPRc = "ScalingPlanResource";
const _SPUB = "ScalingPolicyUpdateBehavior";
const _SPV = "ScalingPlanVersion";
const _SPc = "ScalingPlan";
const _SPca = "ScalingPolicies";
const _SPcal = "ScalingPolicy";
const _SSC = "ScalingStatusCode";
const _SSM = "ScalingStatusMessage";
const _SST = "StatusStartTime";
const _ST = "StartTime";
const _T = "Timestamp";
const _TF = "TagFilters";
const _TFa = "TagFilter";
const _TTC = "TargetTrackingConfigurations";
const _TTCa = "TargetTrackingConfiguration";
const _TV = "TargetValue";
const _U = "Unit";
const _USP = "UpdateScalingPlan";
const _USPR = "UpdateScalingPlanRequest";
const _USPRp = "UpdateScalingPlanResponse";
const _V = "Value";
const _VE = "ValidationException";
const _Va = "Values";
const _aQE = "awsQueryError";
const _c = "client";
const _e = "error";
const _hE = "httpError";
const _s = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.autoscalingplans";
const n0 = "com.amazonaws.autoscalingplans";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import { AutoScalingPlansServiceException } from "../models/AutoScalingPlansServiceException";
import {
  ConcurrentUpdateException,
  InternalServiceException,
  InvalidNextTokenException,
  LimitExceededException,
  ObjectNotFoundException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
export var ApplicationSource$: StaticStructureSchema = [3, n0, _AS,
  0,
  [_CFSARN, _TF],
  [0, () => TagFilters]
];
export var ConcurrentUpdateException$: StaticErrorSchema = [-3, n0, _CUE,
  { [_aQE]: [`ConcurrentUpdateException`, 500], [_e]: _s, [_hE]: 500 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ConcurrentUpdateException$, ConcurrentUpdateException);
export var CreateScalingPlanRequest$: StaticStructureSchema = [3, n0, _CSPR,
  0,
  [_SPN, _AS, _SI],
  [0, () => ApplicationSource$, () => ScalingInstructions]
];
export var CreateScalingPlanResponse$: StaticStructureSchema = [3, n0, _CSPRr,
  0,
  [_SPV],
  [1]
];
export var CustomizedLoadMetricSpecification$: StaticStructureSchema = [3, n0, _CLMS,
  0,
  [_MN, _N, _D, _S, _U],
  [0, 0, () => MetricDimensions, 0, 0]
];
export var CustomizedScalingMetricSpecification$: StaticStructureSchema = [3, n0, _CSMS,
  0,
  [_MN, _N, _D, _S, _U],
  [0, 0, () => MetricDimensions, 0, 0]
];
export var Datapoint$: StaticStructureSchema = [3, n0, _Da,
  0,
  [_T, _V],
  [4, 1]
];
export var DeleteScalingPlanRequest$: StaticStructureSchema = [3, n0, _DSPR,
  0,
  [_SPN, _SPV],
  [0, 1]
];
export var DeleteScalingPlanResponse$: StaticStructureSchema = [3, n0, _DSPRe,
  0,
  [],
  []
];
export var DescribeScalingPlanResourcesRequest$: StaticStructureSchema = [3, n0, _DSPRR,
  0,
  [_SPN, _SPV, _MR, _NT],
  [0, 1, 1, 0]
];
export var DescribeScalingPlanResourcesResponse$: StaticStructureSchema = [3, n0, _DSPRRe,
  0,
  [_SPR, _NT],
  [() => ScalingPlanResources, 0]
];
export var DescribeScalingPlansRequest$: StaticStructureSchema = [3, n0, _DSPRes,
  0,
  [_SPNc, _SPV, _ASp, _MR, _NT],
  [64 | 0, 1, () => ApplicationSources, 1, 0]
];
export var DescribeScalingPlansResponse$: StaticStructureSchema = [3, n0, _DSPResc,
  0,
  [_SP, _NT],
  [() => ScalingPlans, 0]
];
export var GetScalingPlanResourceForecastDataRequest$: StaticStructureSchema = [3, n0, _GSPRFDR,
  0,
  [_SPN, _SPV, _SN, _RI, _SD, _FDT, _ST, _ET],
  [0, 1, 0, 0, 0, 0, 4, 4]
];
export var GetScalingPlanResourceForecastDataResponse$: StaticStructureSchema = [3, n0, _GSPRFDRe,
  0,
  [_Dat],
  [() => Datapoints]
];
export var InternalServiceException$: StaticErrorSchema = [-3, n0, _ISE,
  { [_aQE]: [`InternalServiceException`, 500], [_e]: _s, [_hE]: 500 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InternalServiceException$, InternalServiceException);
export var InvalidNextTokenException$: StaticErrorSchema = [-3, n0, _INTE,
  { [_aQE]: [`InvalidNextTokenException`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(InvalidNextTokenException$, InvalidNextTokenException);
export var LimitExceededException$: StaticErrorSchema = [-3, n0, _LEE,
  { [_aQE]: [`LimitExceededException`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(LimitExceededException$, LimitExceededException);
export var MetricDimension$: StaticStructureSchema = [3, n0, _MD,
  0,
  [_Na, _V],
  [0, 0]
];
export var ObjectNotFoundException$: StaticErrorSchema = [-3, n0, _ONFE,
  { [_aQE]: [`ObjectNotFoundException`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ObjectNotFoundException$, ObjectNotFoundException);
export var PredefinedLoadMetricSpecification$: StaticStructureSchema = [3, n0, _PLMS,
  0,
  [_PLMT, _RL],
  [0, 0]
];
export var PredefinedScalingMetricSpecification$: StaticStructureSchema = [3, n0, _PSMS,
  0,
  [_PSMT, _RL],
  [0, 0]
];
export var ScalingInstruction$: StaticStructureSchema = [3, n0, _SIc,
  0,
  [_SN, _RI, _SD, _MC, _MCa, _TTC, _PLMS, _CLMS, _SABT, _PSMCB, _PSMCBr, _PSM, _SPUB, _DDS],
  [0, 0, 0, 1, 1, () => TargetTrackingConfigurations, () => PredefinedLoadMetricSpecification$, () => CustomizedLoadMetricSpecification$, 1, 0, 1, 0, 0, 2]
];
export var ScalingPlan$: StaticStructureSchema = [3, n0, _SPc,
  0,
  [_SPN, _SPV, _AS, _SI, _SC, _SM, _SST, _CT],
  [0, 1, () => ApplicationSource$, () => ScalingInstructions, 0, 0, 4, 4]
];
export var ScalingPlanResource$: StaticStructureSchema = [3, n0, _SPRc,
  0,
  [_SPN, _SPV, _SN, _RI, _SD, _SPca, _SSC, _SSM],
  [0, 1, 0, 0, 0, () => ScalingPolicies, 0, 0]
];
export var ScalingPolicy$: StaticStructureSchema = [3, n0, _SPcal,
  0,
  [_PN, _PT, _TTCa],
  [0, 0, () => TargetTrackingConfiguration$]
];
export var TagFilter$: StaticStructureSchema = [3, n0, _TFa,
  0,
  [_K, _Va],
  [0, 64 | 0]
];
export var TargetTrackingConfiguration$: StaticStructureSchema = [3, n0, _TTCa,
  0,
  [_PSMS, _CSMS, _TV, _DSI, _SOC, _SIC, _EIW],
  [() => PredefinedScalingMetricSpecification$, () => CustomizedScalingMetricSpecification$, 1, 2, 1, 1, 1]
];
export var UpdateScalingPlanRequest$: StaticStructureSchema = [3, n0, _USPR,
  0,
  [_SPN, _SPV, _AS, _SI],
  [0, 1, () => ApplicationSource$, () => ScalingInstructions]
];
export var UpdateScalingPlanResponse$: StaticStructureSchema = [3, n0, _USPRp,
  0,
  [],
  []
];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE,
  { [_aQE]: [`ValidationException`, 400], [_e]: _c, [_hE]: 400 },
  [_M],
  [0]
];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var AutoScalingPlansServiceException$: StaticErrorSchema = [-3, _sm, "AutoScalingPlansServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(AutoScalingPlansServiceException$, AutoScalingPlansServiceException);
var ApplicationSources: StaticListSchema = [1, n0, _ASp,
  0, () => ApplicationSource$
];
var Datapoints: StaticListSchema = [1, n0, _Dat,
  0, () => Datapoint$
];
var MetricDimensions: StaticListSchema = [1, n0, _MDe,
  0, () => MetricDimension$
];
var ScalingInstructions: StaticListSchema = [1, n0, _SI,
  0, () => ScalingInstruction$
];
var ScalingPlanNames = 64 | 0;
var ScalingPlanResources: StaticListSchema = [1, n0, _SPR,
  0, () => ScalingPlanResource$
];
var ScalingPlans: StaticListSchema = [1, n0, _SP,
  0, () => ScalingPlan$
];
var ScalingPolicies: StaticListSchema = [1, n0, _SPca,
  0, () => ScalingPolicy$
];
var TagFilters: StaticListSchema = [1, n0, _TF,
  0, () => TagFilter$
];
var TagValues = 64 | 0;
var TargetTrackingConfigurations: StaticListSchema = [1, n0, _TTC,
  0, () => TargetTrackingConfiguration$
];
export var CreateScalingPlan$: StaticOperationSchema = [9, n0, _CSP,
  0, () => CreateScalingPlanRequest$, () => CreateScalingPlanResponse$
];
export var DeleteScalingPlan$: StaticOperationSchema = [9, n0, _DSP,
  0, () => DeleteScalingPlanRequest$, () => DeleteScalingPlanResponse$
];
export var DescribeScalingPlanResources$: StaticOperationSchema = [9, n0, _DSPRescr,
  0, () => DescribeScalingPlanResourcesRequest$, () => DescribeScalingPlanResourcesResponse$
];
export var DescribeScalingPlans$: StaticOperationSchema = [9, n0, _DSPe,
  0, () => DescribeScalingPlansRequest$, () => DescribeScalingPlansResponse$
];
export var GetScalingPlanResourceForecastData$: StaticOperationSchema = [9, n0, _GSPRFD,
  0, () => GetScalingPlanResourceForecastDataRequest$, () => GetScalingPlanResourceForecastDataResponse$
];
export var UpdateScalingPlan$: StaticOperationSchema = [9, n0, _USP,
  0, () => UpdateScalingPlanRequest$, () => UpdateScalingPlanResponse$
];
