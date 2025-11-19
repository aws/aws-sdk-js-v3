const _CD = "CreateDeployment";
const _CDI = "CreateDeploymentInput";
const _CDO = "CreateDeploymentOutput";
const _DCF = "DeploymentConditionalField";
const _DD = "DeploymentData";
const _DDI = "DeleteDeploymentInput";
const _DDO = "DeleteDeploymentOutput";
const _DDS = "DeploymentDataSummary";
const _DDSL = "DeploymentDataSummaryList";
const _DDe = "DeleteDeployment";
const _DEDS = "DeploymentEventDataSummary";
const _DEDSL = "DeploymentEventDataSummaryList";
const _DF = "DeploymentFilter";
const _DFL = "DeploymentFilterList";
const _DS = "DeploymentSpecifications";
const _DSD = "DeploymentSpecificationsData";
const _DSF = "DeploymentSpecificationsField";
const _GD = "GetDeployment";
const _GDI = "GetDeploymentInput";
const _GDO = "GetDeploymentOutput";
const _GW = "GetWorkload";
const _GWDP = "GetWorkloadDeploymentPattern";
const _GWDPI = "GetWorkloadDeploymentPatternInput";
const _GWDPO = "GetWorkloadDeploymentPatternOutput";
const _GWI = "GetWorkloadInput";
const _GWO = "GetWorkloadOutput";
const _ISE = "InternalServerException";
const _LD = "ListDeployments";
const _LDE = "ListDeploymentEvents";
const _LDEI = "ListDeploymentEventsInput";
const _LDEO = "ListDeploymentEventsOutput";
const _LDI = "ListDeploymentsInput";
const _LDO = "ListDeploymentsOutput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _LW = "ListWorkloads";
const _LWDP = "ListWorkloadDeploymentPatterns";
const _LWDPI = "ListWorkloadDeploymentPatternsInput";
const _LWDPO = "ListWorkloadDeploymentPatternsOutput";
const _LWI = "ListWorkloadsInput";
const _LWO = "ListWorkloadsOutput";
const _RLE = "ResourceLimitException";
const _RNFE = "ResourceNotFoundException";
const _SCD = "SpecificationsConditionalData";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TRO = "TagResourceOutput";
const _UR = "UntagResource";
const _URI = "UntagResourceInput";
const _URO = "UntagResourceOutput";
const _VE = "ValidationException";
const _WD = "WorkloadData";
const _WDPD = "WorkloadDeploymentPatternData";
const _WDPDS = "WorkloadDeploymentPatternDataSummary";
const _WDPDSL = "WorkloadDeploymentPatternDataSummaryList";
const _WDS = "WorkloadDataSummary";
const _WDSL = "WorkloadDataSummaryList";
const _aV = "allowedValues";
const _c = "comparator";
const _cA = "createdAt";
const _cl = "client";
const _co = "conditionals";
const _d = "description";
const _dA = "deletedAt";
const _dAe = "deploymentArn";
const _dE = "deploymentEvents";
const _dI = "deploymentId";
const _dN = "displayName";
const _dPN = "deploymentPatternName";
const _dR = "dryRun";
const _dU = "documentationUrl";
const _de = "deployment";
const _dep = "deployments";
const _e = "error";
const _f = "filters";
const _h = "http";
const _hE = "httpError";
const _hQ = "httpQuery";
const _i = "id";
const _iU = "iconUrl";
const _m = "message";
const _mR = "maxResults";
const _n = "name";
const _nT = "nextToken";
const _pN = "patternName";
const _r = "required";
const _rA = "resourceArn";
const _rG = "resourceGroup";
const _s = "specifications";
const _sM = "statusMessage";
const _sR = "statusReason";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.launchwizard";
const _st = "status";
const _t = "tags";
const _tK = "tagKeys";
const _ti = "timestamp";
const _v = "value";
const _va = "values";
const _w = "workload";
const _wDP = "workloadDeploymentPattern";
const _wDPo = "workloadDeploymentPatterns";
const _wN = "workloadName";
const _wVN = "workloadVersionName";
const _wo = "workloads";
const n0 = "com.amazonaws.launchwizard";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticStructureSchema,
} from "@smithy/types";

import {
  InternalServerException as __InternalServerException,
  ResourceLimitException as __ResourceLimitException,
  ResourceNotFoundException as __ResourceNotFoundException,
  ValidationException as __ValidationException,
} from "../models/errors";
import { LaunchWizardServiceException as __LaunchWizardServiceException } from "../models/LaunchWizardServiceException";

/* eslint no-var: 0 */

export var CreateDeploymentInput: StaticStructureSchema = [
  3,
  n0,
  _CDI,
  0,
  [_wN, _dPN, _n, _s, _dR, _t],
  [0, 0, 0, [() => DeploymentSpecifications, 0], 2, 128 | 0],
];
export var CreateDeploymentOutput: StaticStructureSchema = [3, n0, _CDO, 0, [_dI], [0]];
export var DeleteDeploymentInput: StaticStructureSchema = [3, n0, _DDI, 0, [_dI], [0]];
export var DeleteDeploymentOutput: StaticStructureSchema = [3, n0, _DDO, 0, [_st, _sR], [0, 0]];
export var DeploymentConditionalField: StaticStructureSchema = [3, n0, _DCF, 0, [_n, _v, _c], [0, 0, 0]];
export var DeploymentData: StaticStructureSchema = [
  3,
  n0,
  _DD,
  0,
  [_n, _i, _wN, _pN, _st, _cA, _s, _rG, _dA, _t, _dAe],
  [0, 0, 0, 0, 0, 4, [() => DeploymentSpecifications, 0], 0, 4, 128 | 0, 0],
];
export var DeploymentDataSummary: StaticStructureSchema = [
  3,
  n0,
  _DDS,
  0,
  [_n, _i, _wN, _pN, _st, _cA],
  [0, 0, 0, 0, 0, 4],
];
export var DeploymentEventDataSummary: StaticStructureSchema = [
  3,
  n0,
  _DEDS,
  0,
  [_n, _d, _st, _sR, _ti],
  [0, 0, 0, 0, 4],
];
export var DeploymentFilter: StaticStructureSchema = [3, n0, _DF, 0, [_n, _va], [0, 64 | 0]];
export var DeploymentSpecificationsField: StaticStructureSchema = [
  3,
  n0,
  _DSF,
  0,
  [_n, _d, _aV, _r, _co],
  [0, 0, 64 | 0, 0, () => SpecificationsConditionalData],
];
export var GetDeploymentInput: StaticStructureSchema = [3, n0, _GDI, 0, [_dI], [0]];
export var GetDeploymentOutput: StaticStructureSchema = [3, n0, _GDO, 0, [_de], [[() => DeploymentData, 0]]];
export var GetWorkloadDeploymentPatternInput: StaticStructureSchema = [3, n0, _GWDPI, 0, [_wN, _dPN], [0, 0]];
export var GetWorkloadDeploymentPatternOutput: StaticStructureSchema = [
  3,
  n0,
  _GWDPO,
  0,
  [_wDP],
  [() => WorkloadDeploymentPatternData],
];
export var GetWorkloadInput: StaticStructureSchema = [3, n0, _GWI, 0, [_wN], [0]];
export var GetWorkloadOutput: StaticStructureSchema = [3, n0, _GWO, 0, [_w], [() => WorkloadData]];
export var InternalServerException: StaticErrorSchema = [
  -3,
  n0,
  _ISE,
  {
    [_e]: _se,
    [_hE]: 500,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(InternalServerException, __InternalServerException);

export var ListDeploymentEventsInput: StaticStructureSchema = [3, n0, _LDEI, 0, [_dI, _mR, _nT], [0, 1, 0]];
export var ListDeploymentEventsOutput: StaticStructureSchema = [
  3,
  n0,
  _LDEO,
  0,
  [_dE, _nT],
  [() => DeploymentEventDataSummaryList, 0],
];
export var ListDeploymentsInput: StaticStructureSchema = [
  3,
  n0,
  _LDI,
  0,
  [_f, _mR, _nT],
  [() => DeploymentFilterList, 1, 0],
];
export var ListDeploymentsOutput: StaticStructureSchema = [
  3,
  n0,
  _LDO,
  0,
  [_dep, _nT],
  [() => DeploymentDataSummaryList, 0],
];
export var ListTagsForResourceInput: StaticStructureSchema = [3, n0, _LTFRI, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceOutput: StaticStructureSchema = [3, n0, _LTFRO, 0, [_t], [128 | 0]];
export var ListWorkloadDeploymentPatternsInput: StaticStructureSchema = [3, n0, _LWDPI, 0, [_wN, _mR, _nT], [0, 1, 0]];
export var ListWorkloadDeploymentPatternsOutput: StaticStructureSchema = [
  3,
  n0,
  _LWDPO,
  0,
  [_wDPo, _nT],
  [() => WorkloadDeploymentPatternDataSummaryList, 0],
];
export var ListWorkloadsInput: StaticStructureSchema = [3, n0, _LWI, 0, [_mR, _nT], [1, 0]];
export var ListWorkloadsOutput: StaticStructureSchema = [
  3,
  n0,
  _LWO,
  0,
  [_wo, _nT],
  [() => WorkloadDataSummaryList, 0],
];
export var ResourceLimitException: StaticErrorSchema = [
  -3,
  n0,
  _RLE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceLimitException, __ResourceLimitException);

export var ResourceNotFoundException: StaticErrorSchema = [
  -3,
  n0,
  _RNFE,
  {
    [_e]: _cl,
    [_hE]: 404,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ResourceNotFoundException, __ResourceNotFoundException);

export var TagResourceInput: StaticStructureSchema = [3, n0, _TRI, 0, [_rA, _t], [[0, 1], 128 | 0]];
export var TagResourceOutput: StaticStructureSchema = [3, n0, _TRO, 0, [], []];
export var UntagResourceInput: StaticStructureSchema = [
  3,
  n0,
  _URI,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _tK,
      },
    ],
  ],
];
export var UntagResourceOutput: StaticStructureSchema = [3, n0, _URO, 0, [], []];
export var ValidationException: StaticErrorSchema = [
  -3,
  n0,
  _VE,
  {
    [_e]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(ValidationException, __ValidationException);

export var WorkloadData: StaticStructureSchema = [
  3,
  n0,
  _WD,
  0,
  [_wN, _dN, _d, _dU, _iU, _st, _sM],
  [0, 0, 0, 0, 0, 0, 0],
];
export var WorkloadDataSummary: StaticStructureSchema = [3, n0, _WDS, 0, [_wN, _dN], [0, 0]];
export var WorkloadDeploymentPatternData: StaticStructureSchema = [
  3,
  n0,
  _WDPD,
  0,
  [_wN, _dPN, _wVN, _dN, _d, _st, _sM, _s],
  [0, 0, 0, 0, 0, 0, 0, () => DeploymentSpecificationsData],
];
export var WorkloadDeploymentPatternDataSummary: StaticStructureSchema = [
  3,
  n0,
  _WDPDS,
  0,
  [_wN, _dPN, _wVN, _dN, _d, _st, _sM],
  [0, 0, 0, 0, 0, 0, 0],
];
export var __Unit = "unit" as const;

export var LaunchWizardServiceException: StaticErrorSchema = [-3, _sm, "LaunchWizardServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(LaunchWizardServiceException, __LaunchWizardServiceException);

export var AllowedValues = 64 | 0;

export var DeploymentDataSummaryList: StaticListSchema = [1, n0, _DDSL, 0, () => DeploymentDataSummary];
export var DeploymentEventDataSummaryList: StaticListSchema = [1, n0, _DEDSL, 0, () => DeploymentEventDataSummary];
export var DeploymentFilterList: StaticListSchema = [1, n0, _DFL, 0, () => DeploymentFilter];
export var DeploymentFilterValues = 64 | 0;

export var DeploymentSpecificationsData: StaticListSchema = [1, n0, _DSD, 0, () => DeploymentSpecificationsField];
export var SpecificationsConditionalData: StaticListSchema = [1, n0, _SCD, 0, () => DeploymentConditionalField];
export var TagKeyList = 64 | 0;

export var WorkloadDataSummaryList: StaticListSchema = [1, n0, _WDSL, 0, () => WorkloadDataSummary];
export var WorkloadDeploymentPatternDataSummaryList: StaticListSchema = [
  1,
  n0,
  _WDPDSL,
  0,
  () => WorkloadDeploymentPatternDataSummary,
];
export var DeploymentSpecifications: StaticMapSchema = [2, n0, _DS, 8, 0, 0];
export var Tags = 128 | 0;

export var CreateDeployment: StaticOperationSchema = [
  9,
  n0,
  _CD,
  {
    [_h]: ["POST", "/createDeployment", 200],
  },
  () => CreateDeploymentInput,
  () => CreateDeploymentOutput,
];
export var DeleteDeployment: StaticOperationSchema = [
  9,
  n0,
  _DDe,
  {
    [_h]: ["POST", "/deleteDeployment", 200],
  },
  () => DeleteDeploymentInput,
  () => DeleteDeploymentOutput,
];
export var GetDeployment: StaticOperationSchema = [
  9,
  n0,
  _GD,
  {
    [_h]: ["POST", "/getDeployment", 200],
  },
  () => GetDeploymentInput,
  () => GetDeploymentOutput,
];
export var GetWorkload: StaticOperationSchema = [
  9,
  n0,
  _GW,
  {
    [_h]: ["POST", "/getWorkload", 200],
  },
  () => GetWorkloadInput,
  () => GetWorkloadOutput,
];
export var GetWorkloadDeploymentPattern: StaticOperationSchema = [
  9,
  n0,
  _GWDP,
  {
    [_h]: ["POST", "/getWorkloadDeploymentPattern", 200],
  },
  () => GetWorkloadDeploymentPatternInput,
  () => GetWorkloadDeploymentPatternOutput,
];
export var ListDeploymentEvents: StaticOperationSchema = [
  9,
  n0,
  _LDE,
  {
    [_h]: ["POST", "/listDeploymentEvents", 200],
  },
  () => ListDeploymentEventsInput,
  () => ListDeploymentEventsOutput,
];
export var ListDeployments: StaticOperationSchema = [
  9,
  n0,
  _LD,
  {
    [_h]: ["POST", "/listDeployments", 200],
  },
  () => ListDeploymentsInput,
  () => ListDeploymentsOutput,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  {
    [_h]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput,
];
export var ListWorkloadDeploymentPatterns: StaticOperationSchema = [
  9,
  n0,
  _LWDP,
  {
    [_h]: ["POST", "/listWorkloadDeploymentPatterns", 200],
  },
  () => ListWorkloadDeploymentPatternsInput,
  () => ListWorkloadDeploymentPatternsOutput,
];
export var ListWorkloads: StaticOperationSchema = [
  9,
  n0,
  _LW,
  {
    [_h]: ["POST", "/listWorkloads", 200],
  },
  () => ListWorkloadsInput,
  () => ListWorkloadsOutput,
];
export var TagResource: StaticOperationSchema = [
  9,
  n0,
  _TR,
  {
    [_h]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceInput,
  () => TagResourceOutput,
];
export var UntagResource: StaticOperationSchema = [
  9,
  n0,
  _UR,
  {
    [_h]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceInput,
  () => UntagResourceOutput,
];
