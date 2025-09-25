export const _CD = "CreateDeployment";
export const _CDI = "CreateDeploymentInput";
export const _CDO = "CreateDeploymentOutput";
export const _DCF = "DeploymentConditionalField";
export const _DD = "DeploymentData";
export const _DDI = "DeleteDeploymentInput";
export const _DDO = "DeleteDeploymentOutput";
export const _DDS = "DeploymentDataSummary";
export const _DDSL = "DeploymentDataSummaryList";
export const _DDe = "DeleteDeployment";
export const _DEDS = "DeploymentEventDataSummary";
export const _DEDSL = "DeploymentEventDataSummaryList";
export const _DF = "DeploymentFilter";
export const _DFL = "DeploymentFilterList";
export const _DS = "DeploymentSpecifications";
export const _DSD = "DeploymentSpecificationsData";
export const _DSF = "DeploymentSpecificationsField";
export const _GD = "GetDeployment";
export const _GDI = "GetDeploymentInput";
export const _GDO = "GetDeploymentOutput";
export const _GW = "GetWorkload";
export const _GWDP = "GetWorkloadDeploymentPattern";
export const _GWDPI = "GetWorkloadDeploymentPatternInput";
export const _GWDPO = "GetWorkloadDeploymentPatternOutput";
export const _GWI = "GetWorkloadInput";
export const _GWO = "GetWorkloadOutput";
export const _ISE = "InternalServerException";
export const _LD = "ListDeployments";
export const _LDE = "ListDeploymentEvents";
export const _LDEI = "ListDeploymentEventsInput";
export const _LDEO = "ListDeploymentEventsOutput";
export const _LDI = "ListDeploymentsInput";
export const _LDO = "ListDeploymentsOutput";
export const _LTFR = "ListTagsForResource";
export const _LTFRI = "ListTagsForResourceInput";
export const _LTFRO = "ListTagsForResourceOutput";
export const _LW = "ListWorkloads";
export const _LWDP = "ListWorkloadDeploymentPatterns";
export const _LWDPI = "ListWorkloadDeploymentPatternsInput";
export const _LWDPO = "ListWorkloadDeploymentPatternsOutput";
export const _LWI = "ListWorkloadsInput";
export const _LWO = "ListWorkloadsOutput";
export const _RLE = "ResourceLimitException";
export const _RNFE = "ResourceNotFoundException";
export const _SCD = "SpecificationsConditionalData";
export const _TR = "TagResource";
export const _TRI = "TagResourceInput";
export const _TRO = "TagResourceOutput";
export const _UR = "UntagResource";
export const _URI = "UntagResourceInput";
export const _URO = "UntagResourceOutput";
export const _VE = "ValidationException";
export const _WD = "WorkloadData";
export const _WDPD = "WorkloadDeploymentPatternData";
export const _WDPDS = "WorkloadDeploymentPatternDataSummary";
export const _WDPDSL = "WorkloadDeploymentPatternDataSummaryList";
export const _WDS = "WorkloadDataSummary";
export const _WDSL = "WorkloadDataSummaryList";
export const _aV = "allowedValues";
export const _c = "comparator";
export const _cA = "createdAt";
export const _cl = "client";
export const _co = "conditionals";
export const _d = "description";
export const _dA = "deletedAt";
export const _dAe = "deploymentArn";
export const _dE = "deploymentEvents";
export const _dI = "deploymentId";
export const _dN = "displayName";
export const _dPN = "deploymentPatternName";
export const _dR = "dryRun";
export const _dU = "documentationUrl";
export const _de = "deployment";
export const _dep = "deployments";
export const _e = "error";
export const _f = "filters";
export const _h = "http";
export const _hE = "httpError";
export const _hQ = "httpQuery";
export const _i = "id";
export const _iU = "iconUrl";
export const _m = "message";
export const _mR = "maxResults";
export const _n = "name";
export const _nT = "nextToken";
export const _pN = "patternName";
export const _r = "required";
export const _rA = "resourceArn";
export const _rG = "resourceGroup";
export const _s = "specifications";
export const _sM = "statusMessage";
export const _sR = "statusReason";
export const _se = "server";
export const _st = "status";
export const _t = "tags";
export const _tK = "tagKeys";
export const _ti = "timestamp";
export const _v = "value";
export const _va = "values";
export const _w = "workload";
export const _wDP = "workloadDeploymentPattern";
export const _wDPo = "workloadDeploymentPatterns";
export const _wN = "workloadName";
export const _wVN = "workloadVersionName";
export const _wo = "workloads";
export const n0 = "com.amazonaws.launchwizard";

// smithy-typescript generated code
import { error } from "@smithy/core/schema";

import { LaunchWizardServiceException as __LaunchWizardServiceException } from "../models/LaunchWizardServiceException";

/* eslint no-var: 0 */

export var LaunchWizardServiceException = error(
  "smithy.ts.sdk.synthetic.com.amazonaws.launchwizard",
  "LaunchWizardServiceException",
  0,
  [],
  [],
  __LaunchWizardServiceException
);
