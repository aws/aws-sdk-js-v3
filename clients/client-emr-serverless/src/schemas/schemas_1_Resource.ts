// smithy-typescript generated code
import { error, list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import { ConflictException as __ConflictException } from "../models/index";
import {
  _A,
  _a,
  _aC,
  _aCA,
  _aI,
  _ap,
  _ar,
  _ASC,
  _aSC,
  _ASCu,
  _aSCu,
  _at,
  _aUA,
  _bRU,
  _C,
  _c,
  _CA,
  _cA,
  _CAR,
  _CARr,
  _cB,
  _CE,
  _CL,
  _cl,
  _CO,
  _cO,
  _co,
  _cp,
  _cT,
  _CWLC,
  _cWLC,
  _d,
  _dT,
  _e,
  _eA,
  _eIP,
  _eKA,
  _eP,
  _EPA,
  _ePA,
  _EPAn,
  _EPP,
  _eR,
  _er,
  _eRA,
  _eTM,
  _GA,
  _GAR,
  _GARe,
  _GJR,
  _GJRR,
  _GJRRe,
  _H,
  _h,
  _HCP,
  _hE,
  _hQ,
  _ht,
  _IC,
  _iC,
  _iCAA,
  _ICC,
  _iCC,
  _ICCI,
  _ICCM,
  _ICCn,
  _ICI,
  _iCIA,
  _iCm,
  _ICn,
  _iCn,
  _iQF,
  _ISP,
  _iTM,
  _iU,
  _JD,
  _jD,
  _JR,
  _jR,
  _JREIP,
  _jRI,
  _lEE,
  _lGN,
  _lSNP,
  _lT,
  _LTFR,
  _LTFRR,
  _LTFRRi,
  _LTM,
  _lU,
  _m,
  _mA,
  _MAR,
  _MC,
  _mC,
  _mCo,
  _mCR,
  _me,
  _mFAPH,
  _mGBH,
  _mo,
  _MPMC,
  _mPMC,
  _n,
  _NC,
  _nC,
  _p,
  _pA,
  _pa,
  _PMC,
  _pMC,
  _po,
  _Q,
  _q,
  _qDM,
  _qTM,
  _rA,
  _rC,
  _rID,
  _rL,
  _RP,
  _rP,
  _RU,
  _rWU,
  _s,
  _sA,
  _SC,
  _sC,
  _sD,
  _sE,
  _sGBH,
  _sGI,
  _sI,
  _SJR,
  _SJRR,
  _SJRRt,
  _SMC,
  _sMC,
  _SPM,
  _SS,
  _sS,
  _SSP,
  _sSP,
  _t,
  _ta,
  _tEDS,
  _tK,
  _TR,
  _TRR,
  _TRRa,
  _TRU,
  _tRU,
  _UA,
  _uA,
  _UAR,
  _UARp,
  _UR,
  _URR,
  _URRn,
  _vCPUH,
  _wC,
  _wCo,
  _WRC,
  _WTS,
  _wTS,
  _WTSI,
  _WTSIM,
  _WTSM,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var EntryPointArgument = sim(n0, _EPA, 0, 8);
export var EntryPointPath = sim(n0, _EPP, 0, 8);
export var HiveCliParameters = sim(n0, _HCP, 0, 8);
export var InitScriptPath = sim(n0, _ISP, 0, 8);
export var Query = sim(n0, _Q, 0, 8);
export var SparkSubmitParameters = sim(n0, _SSP, 0, 8);
export var Application = struct(
  n0,
  _A,
  0,
  [
    _aI,
    _n,
    _a,
    _rL,
    _t,
    _s,
    _sD,
    _iC,
    _mC,
    _cA,
    _uA,
    _ta,
    _aSC,
    _aSCu,
    _nC,
    _ar,
    _iCm,
    _wTS,
    _rC,
    _mCo,
    _iCn,
    _sC,
    _iCC,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    () => InitialCapacityConfigMap,
    () => MaximumAllowedResources,
    4,
    4,
    128 | 0,
    () => AutoStartConfig,
    () => AutoStopConfig,
    () => NetworkConfiguration,
    0,
    () => ImageConfiguration,
    () => WorkerTypeSpecificationMap,
    [() => ConfigurationList, 0],
    () => MonitoringConfiguration,
    () => InteractiveConfiguration,
    () => SchedulerConfiguration,
    () => IdentityCenterConfiguration,
  ]
);
export var AutoStartConfig = struct(n0, _ASC, 0, [_e], [2]);
export var AutoStopConfig = struct(n0, _ASCu, 0, [_e, _iTM], [2, 1]);
export var CloudWatchLoggingConfiguration = struct(
  n0,
  _CWLC,
  0,
  [_e, _lGN, _lSNP, _eKA, _lT],
  [2, 0, 0, 0, map(n0, _LTM, 0, 0, 64 | 0)]
);
export var Configuration = struct(
  n0,
  _C,
  0,
  [_c, _p, _co],
  [0, [() => SensitivePropertiesMap, 0], [() => ConfigurationList, 0]]
);
export var ConfigurationOverrides = struct(
  n0,
  _CO,
  0,
  [_aC, _mCo],
  [[() => ConfigurationList, 0], () => MonitoringConfiguration]
);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_er]: _cl,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var CreateApplicationRequest = struct(
  n0,
  _CAR,
  0,
  [_n, _rL, _t, _cT, _iC, _mC, _ta, _aSC, _aSCu, _nC, _ar, _iCm, _wTS, _rC, _mCo, _iCn, _sC, _iCC],
  [
    0,
    0,
    0,
    [0, 4],
    () => InitialCapacityConfigMap,
    () => MaximumAllowedResources,
    128 | 0,
    () => AutoStartConfig,
    () => AutoStopConfig,
    () => NetworkConfiguration,
    0,
    () => ImageConfigurationInput,
    () => WorkerTypeSpecificationInputMap,
    [() => ConfigurationList, 0],
    () => MonitoringConfiguration,
    () => InteractiveConfiguration,
    () => SchedulerConfiguration,
    () => IdentityCenterConfigurationInput,
  ]
);
export var CreateApplicationResponse = struct(n0, _CARr, 0, [_aI, _n, _a], [0, 0, 0]);
export var GetApplicationRequest = struct(n0, _GAR, 0, [_aI], [[0, 1]]);
export var GetApplicationResponse = struct(n0, _GARe, 0, [_ap], [[() => Application, 0]]);
export var GetJobRunRequest = struct(
  n0,
  _GJRR,
  0,
  [_aI, _jRI, _at],
  [
    [0, 1],
    [0, 1],
    [
      1,
      {
        [_hQ]: _at,
      },
    ],
  ]
);
export var GetJobRunResponse = struct(n0, _GJRRe, 0, [_jR], [[() => JobRun, 0]]);
export var Hive = struct(
  n0,
  _H,
  0,
  [_q, _iQF, _pa],
  [
    [() => Query, 0],
    [() => InitScriptPath, 0],
    [() => HiveCliParameters, 0],
  ]
);
export var IdentityCenterConfiguration = struct(n0, _ICC, 0, [_iCIA, _iCAA], [0, 0]);
export var IdentityCenterConfigurationInput = struct(n0, _ICCI, 0, [_iCIA], [0]);
export var ImageConfiguration = struct(n0, _IC, 0, [_iU, _rID], [0, 0]);
export var ImageConfigurationInput = struct(n0, _ICI, 0, [_iU], [0]);
export var InitialCapacityConfig = struct(n0, _ICCn, 0, [_wC, _wCo], [1, () => WorkerResourceConfig]);
export var InteractiveConfiguration = struct(n0, _ICn, 0, [_sE, _lEE], [2, 2]);
export var JobRun = struct(
  n0,
  _JR,
  0,
  [
    _aI,
    _jRI,
    _n,
    _a,
    _cB,
    _cA,
    _uA,
    _eR,
    _eIP,
    _s,
    _sD,
    _rL,
    _cO,
    _jD,
    _ta,
    _tRU,
    _nC,
    _tEDS,
    _eTM,
    _bRU,
    _mo,
    _rP,
    _at,
    _aCA,
    _aUA,
    _sA,
    _eA,
    _qDM,
  ],
  [
    0,
    0,
    0,
    0,
    0,
    4,
    4,
    0,
    () => JobRunExecutionIamPolicy,
    0,
    0,
    0,
    [() => ConfigurationOverrides, 0],
    [() => JobDriver, 0],
    128 | 0,
    () => TotalResourceUtilization,
    () => NetworkConfiguration,
    1,
    1,
    () => ResourceUtilization,
    0,
    () => RetryPolicy,
    1,
    4,
    4,
    4,
    4,
    1,
  ]
);
export var JobRunExecutionIamPolicy = struct(n0, _JREIP, 0, [_po, _pA], [0, 64 | 0]);
export var ListTagsForResourceRequest = struct(n0, _LTFRR, 0, [_rA], [[0, 1]]);
export var ListTagsForResourceResponse = struct(n0, _LTFRRi, 0, [_ta], [128 | 0]);
export var ManagedPersistenceMonitoringConfiguration = struct(n0, _MPMC, 0, [_e, _eKA], [2, 0]);
export var MaximumAllowedResources = struct(n0, _MAR, 0, [_cp, _me, _d], [0, 0, 0]);
export var MonitoringConfiguration = struct(
  n0,
  _MC,
  0,
  [_sMC, _mPMC, _cWLC, _pMC],
  [
    () => S3MonitoringConfiguration,
    () => ManagedPersistenceMonitoringConfiguration,
    () => CloudWatchLoggingConfiguration,
    () => PrometheusMonitoringConfiguration,
  ]
);
export var NetworkConfiguration = struct(n0, _NC, 0, [_sI, _sGI], [64 | 0, 64 | 0]);
export var PrometheusMonitoringConfiguration = struct(n0, _PMC, 0, [_rWU], [0]);
export var ResourceUtilization = struct(n0, _RU, 0, [_vCPUH, _mGBH, _sGBH], [1, 1, 1]);
export var RetryPolicy = struct(n0, _RP, 0, [_mA, _mFAPH], [1, 1]);
export var S3MonitoringConfiguration = struct(n0, _SMC, 0, [_lU, _eKA], [0, 0]);
export var SchedulerConfiguration = struct(n0, _SC, 0, [_qTM, _mCR], [1, 1]);
export var SparkSubmit = struct(
  n0,
  _SS,
  0,
  [_eP, _ePA, _sSP],
  [
    [() => EntryPointPath, 0],
    [() => EntryPointArguments, 0],
    [() => SparkSubmitParameters, 0],
  ]
);
export var StartJobRunRequest = struct(
  n0,
  _SJRR,
  0,
  [_aI, _cT, _eRA, _eIP, _jD, _cO, _ta, _eTM, _n, _mo, _rP],
  [
    [0, 1],
    [0, 4],
    0,
    () => JobRunExecutionIamPolicy,
    [() => JobDriver, 0],
    [() => ConfigurationOverrides, 0],
    128 | 0,
    1,
    0,
    0,
    () => RetryPolicy,
  ]
);
export var StartJobRunResponse = struct(n0, _SJRRt, 0, [_aI, _jRI, _a], [0, 0, 0]);
export var TagResourceRequest = struct(n0, _TRR, 0, [_rA, _ta], [[0, 1], 128 | 0]);
export var TagResourceResponse = struct(n0, _TRRa, 0, [], []);
export var TotalResourceUtilization = struct(n0, _TRU, 0, [_vCPUH, _mGBH, _sGBH], [1, 1, 1]);
export var UntagResourceRequest = struct(
  n0,
  _URR,
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
  ]
);
export var UntagResourceResponse = struct(n0, _URRn, 0, [], []);
export var UpdateApplicationRequest = struct(
  n0,
  _UAR,
  0,
  [_aI, _cT, _iC, _mC, _aSC, _aSCu, _nC, _ar, _iCm, _wTS, _iCn, _rL, _rC, _mCo, _sC, _iCC],
  [
    [0, 1],
    [0, 4],
    () => InitialCapacityConfigMap,
    () => MaximumAllowedResources,
    () => AutoStartConfig,
    () => AutoStopConfig,
    () => NetworkConfiguration,
    0,
    () => ImageConfigurationInput,
    () => WorkerTypeSpecificationInputMap,
    () => InteractiveConfiguration,
    0,
    [() => ConfigurationList, 0],
    () => MonitoringConfiguration,
    () => SchedulerConfiguration,
    () => IdentityCenterConfigurationInput,
  ]
);
export var UpdateApplicationResponse = struct(n0, _UARp, 0, [_ap], [[() => Application, 0]]);
export var WorkerResourceConfig = struct(n0, _WRC, 0, [_cp, _me, _d, _dT], [0, 0, 0, 0]);
export var WorkerTypeSpecification = struct(n0, _WTS, 0, [_iCm], [() => ImageConfiguration]);
export var WorkerTypeSpecificationInput = struct(n0, _WTSI, 0, [_iCm], [() => ImageConfigurationInput]);
export var ConfigurationList = list(n0, _CL, 0, [() => Configuration, 0]);
export var EntryPointArguments = list(n0, _EPAn, 0, [() => EntryPointArgument, 0]);
export var LogTypeList = 64 | 0;

export var PolicyArnList = 64 | 0;

export var SecurityGroupIds = 64 | 0;

export var SubnetIds = 64 | 0;

export var TagKeyList = 64 | 0;

export var InitialCapacityConfigMap = map(n0, _ICCM, 0, 0, () => InitialCapacityConfig);
export var LogTypeMap = map(n0, _LTM, 0, 0, 64 | 0);
export var SensitivePropertiesMap = map(n0, _SPM, 8, 0, 0);
export var TagMap = 128 | 0;

export var WorkerTypeSpecificationInputMap = map(n0, _WTSIM, 0, 0, () => WorkerTypeSpecificationInput);
export var WorkerTypeSpecificationMap = map(n0, _WTSM, 0, 0, () => WorkerTypeSpecification);
export var JobDriver = uni(
  n0,
  _JD,
  0,
  [_sS, _h],
  [
    [() => SparkSubmit, 0],
    [() => Hive, 0],
  ]
);
export var CreateApplication = op(
  n0,
  _CA,
  {
    [_ht]: ["POST", "/applications", 200],
  },
  () => CreateApplicationRequest,
  () => CreateApplicationResponse
);
export var GetApplication = op(
  n0,
  _GA,
  {
    [_ht]: ["GET", "/applications/{applicationId}", 200],
  },
  () => GetApplicationRequest,
  () => GetApplicationResponse
);
export var GetJobRun = op(
  n0,
  _GJR,
  {
    [_ht]: ["GET", "/applications/{applicationId}/jobruns/{jobRunId}", 200],
  },
  () => GetJobRunRequest,
  () => GetJobRunResponse
);
export var ListTagsForResource = op(
  n0,
  _LTFR,
  {
    [_ht]: ["GET", "/tags/{resourceArn}", 200],
  },
  () => ListTagsForResourceRequest,
  () => ListTagsForResourceResponse
);
export var StartJobRun = op(
  n0,
  _SJR,
  {
    [_ht]: ["POST", "/applications/{applicationId}/jobruns", 200],
  },
  () => StartJobRunRequest,
  () => StartJobRunResponse
);
export var TagResource = op(
  n0,
  _TR,
  {
    [_ht]: ["POST", "/tags/{resourceArn}", 200],
  },
  () => TagResourceRequest,
  () => TagResourceResponse
);
export var UntagResource = op(
  n0,
  _UR,
  {
    [_ht]: ["DELETE", "/tags/{resourceArn}", 200],
  },
  () => UntagResourceRequest,
  () => UntagResourceResponse
);
export var UpdateApplication = op(
  n0,
  _UA,
  {
    [_ht]: ["PATCH", "/applications/{applicationId}", 200],
  },
  () => UpdateApplicationRequest,
  () => UpdateApplicationResponse
);
