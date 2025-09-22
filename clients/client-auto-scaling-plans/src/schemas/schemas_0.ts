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
export const n0 = "com.amazonaws.autoscalingplans";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { AutoScalingPlansServiceException as __AutoScalingPlansServiceException } from "../models/AutoScalingPlansServiceException";

/* eslint no-var: 0 */

export var AutoScalingPlansServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.autoscalingplans",
  "AutoScalingPlansServiceException",
  0,
  [],
  [],
  __AutoScalingPlansServiceException
);
