const _A = "Application";
const _AL = "ApplicationList";
const _AS = "ApplicationSummary";
const _ASC = "AutoStartConfig";
const _ASCu = "AutoStopConfig";
const _C = "Configuration";
const _CA = "CreateApplication";
const _CAR = "CreateApplicationRequest";
const _CARr = "CreateApplicationResponse";
const _CE = "ConflictException";
const _CJR = "CancelJobRun";
const _CJRR = "CancelJobRunRequest";
const _CJRRa = "CancelJobRunResponse";
const _CL = "ConfigurationList";
const _CO = "ConfigurationOverrides";
const _CWLC = "CloudWatchLoggingConfiguration";
const _DA = "DeleteApplication";
const _DAR = "DeleteApplicationRequest";
const _DARe = "DeleteApplicationResponse";
const _EPA = "EntryPointArgument";
const _EPAn = "EntryPointArguments";
const _EPP = "EntryPointPath";
const _GA = "GetApplication";
const _GAR = "GetApplicationRequest";
const _GARe = "GetApplicationResponse";
const _GDFJR = "GetDashboardForJobRun";
const _GDFJRR = "GetDashboardForJobRunRequest";
const _GDFJRRe = "GetDashboardForJobRunResponse";
const _GJR = "GetJobRun";
const _GJRR = "GetJobRunRequest";
const _GJRRe = "GetJobRunResponse";
const _H = "Hive";
const _HCP = "HiveCliParameters";
const _IC = "ImageConfiguration";
const _ICC = "IdentityCenterConfiguration";
const _ICCI = "IdentityCenterConfigurationInput";
const _ICCM = "InitialCapacityConfigMap";
const _ICCn = "InitialCapacityConfig";
const _ICI = "ImageConfigurationInput";
const _ICn = "InteractiveConfiguration";
const _ISE = "InternalServerException";
const _ISP = "InitScriptPath";
const _JD = "JobDriver";
const _JR = "JobRun";
const _JRA = "JobRunAttempts";
const _JRAS = "JobRunAttemptSummary";
const _JREIP = "JobRunExecutionIamPolicy";
const _JRS = "JobRunSummary";
const _JRo = "JobRuns";
const _LA = "ListApplications";
const _LAR = "ListApplicationsRequest";
const _LARi = "ListApplicationsResponse";
const _LJR = "ListJobRuns";
const _LJRA = "ListJobRunAttempts";
const _LJRAR = "ListJobRunAttemptsRequest";
const _LJRARi = "ListJobRunAttemptsResponse";
const _LJRR = "ListJobRunsRequest";
const _LJRRi = "ListJobRunsResponse";
const _LTFR = "ListTagsForResource";
const _LTFRR = "ListTagsForResourceRequest";
const _LTFRRi = "ListTagsForResourceResponse";
const _LTM = "LogTypeMap";
const _MAR = "MaximumAllowedResources";
const _MC = "MonitoringConfiguration";
const _MPMC = "ManagedPersistenceMonitoringConfiguration";
const _NC = "NetworkConfiguration";
const _PMC = "PrometheusMonitoringConfiguration";
const _Q = "Query";
const _RNFE = "ResourceNotFoundException";
const _RP = "RetryPolicy";
const _RU = "ResourceUtilization";
const _SA = "StartApplication";
const _SAR = "StartApplicationRequest";
const _SARt = "StartApplicationResponse";
const _SARto = "StopApplicationRequest";
const _SARtop = "StopApplicationResponse";
const _SAt = "StopApplication";
const _SC = "SchedulerConfiguration";
const _SJR = "StartJobRun";
const _SJRR = "StartJobRunRequest";
const _SJRRt = "StartJobRunResponse";
const _SMC = "S3MonitoringConfiguration";
const _SPM = "SensitivePropertiesMap";
const _SQEE = "ServiceQuotaExceededException";
const _SS = "SparkSubmit";
const _SSP = "SparkSubmitParameters";
const _TR = "TagResource";
const _TRR = "TagResourceRequest";
const _TRRa = "TagResourceResponse";
const _TRU = "TotalResourceUtilization";
const _UA = "UpdateApplication";
const _UAR = "UpdateApplicationRequest";
const _UARp = "UpdateApplicationResponse";
const _UR = "UntagResource";
const _URR = "UntagResourceRequest";
const _URRn = "UntagResourceResponse";
const _VE = "ValidationException";
const _WRC = "WorkerResourceConfig";
const _WTS = "WorkerTypeSpecification";
const _WTSI = "WorkerTypeSpecificationInput";
const _WTSIM = "WorkerTypeSpecificationInputMap";
const _WTSM = "WorkerTypeSpecificationMap";
const _a = "arn";
const _aC = "applicationConfiguration";
const _aCA = "attemptCreatedAt";
const _aI = "applicationId";
const _aSC = "autoStartConfiguration";
const _aSCu = "autoStopConfiguration";
const _aSPL = "accessSystemProfileLogs";
const _aUA = "attemptUpdatedAt";
const _ap = "application";
const _app = "applications";
const _ar = "architecture";
const _at = "attempt";
const _bRU = "billedResourceUtilization";
const _c = "classification";
const _cA = "createdAt";
const _cAA = "createdAtAfter";
const _cAB = "createdAtBefore";
const _cB = "createdBy";
const _cO = "configurationOverrides";
const _cT = "clientToken";
const _cWLC = "cloudWatchLoggingConfiguration";
const _cl = "client";
const _co = "configurations";
const _cp = "cpu";
const _d = "disk";
const _dT = "diskType";
const _e = "enabled";
const _eA = "endedAt";
const _eIP = "executionIamPolicy";
const _eKA = "encryptionKeyArn";
const _eP = "entryPoint";
const _ePA = "entryPointArguments";
const _eR = "executionRole";
const _eRA = "executionRoleArn";
const _eTM = "executionTimeoutMinutes";
const _er = "error";
const _h = "hive";
const _hE = "httpError";
const _hQ = "httpQuery";
const _ht = "http";
const _i = "id";
const _iC = "initialCapacity";
const _iCAA = "identityCenterApplicationArn";
const _iCC = "identityCenterConfiguration";
const _iCIA = "identityCenterInstanceArn";
const _iCm = "imageConfiguration";
const _iCn = "interactiveConfiguration";
const _iQF = "initQueryFile";
const _iTM = "idleTimeoutMinutes";
const _iU = "imageUri";
const _jCA = "jobCreatedAt";
const _jD = "jobDriver";
const _jR = "jobRun";
const _jRA = "jobRunAttempts";
const _jRI = "jobRunId";
const _jRo = "jobRuns";
const _lEE = "livyEndpointEnabled";
const _lGN = "logGroupName";
const _lSNP = "logStreamNamePrefix";
const _lT = "logTypes";
const _lU = "logUri";
const _m = "message";
const _mA = "maxAttempts";
const _mC = "maximumCapacity";
const _mCR = "maxConcurrentRuns";
const _mCo = "monitoringConfiguration";
const _mFAPH = "maxFailedAttemptsPerHour";
const _mGBH = "memoryGBHour";
const _mPMC = "managedPersistenceMonitoringConfiguration";
const _mR = "maxResults";
const _me = "memory";
const _mo = "mode";
const _n = "name";
const _nC = "networkConfiguration";
const _nT = "nextToken";
const _p = "properties";
const _pA = "policyArns";
const _pMC = "prometheusMonitoringConfiguration";
const _pa = "parameters";
const _po = "policy";
const _q = "query";
const _qDM = "queuedDurationMilliseconds";
const _qTM = "queueTimeoutMinutes";
const _rA = "resourceArn";
const _rC = "runtimeConfiguration";
const _rID = "resolvedImageDigest";
const _rL = "releaseLabel";
const _rP = "retryPolicy";
const _rWU = "remoteWriteUrl";
const _s = "state";
const _sA = "startedAt";
const _sC = "schedulerConfiguration";
const _sD = "stateDetails";
const _sE = "studioEnabled";
const _sGBH = "storageGBHour";
const _sGI = "securityGroupIds";
const _sGPIS = "shutdownGracePeriodInSeconds";
const _sI = "subnetIds";
const _sMC = "s3MonitoringConfiguration";
const _sS = "sparkSubmit";
const _sSP = "sparkSubmitParameters";
const _se = "server";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.emrserverless";
const _st = "states";
const _t = "type";
const _tEDS = "totalExecutionDurationSeconds";
const _tK = "tagKeys";
const _tRU = "totalResourceUtilization";
const _ta = "tags";
const _u = "url";
const _uA = "updatedAt";
const _uBSE = "userBackgroundSessionsEnabled";
const _vCPUH = "vCPUHour";
const _wC = "workerCount";
const _wCo = "workerConfiguration";
const _wTS = "workerTypeSpecifications";
const n0 = "com.amazonaws.emrserverless";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type {
  StaticErrorSchema,
  StaticListSchema,
  StaticMapSchema,
  StaticOperationSchema,
  StaticSimpleSchema,
  StaticStructureSchema,
} from "@smithy/types";

import { EMRServerlessServiceException } from "../models/EMRServerlessServiceException";
import {
  ConflictException,
  InternalServerException,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  ValidationException,
} from "../models/errors";

/* eslint no-var: 0 */
var EntryPointArgument: StaticSimpleSchema = [0, n0, _EPA, 8, 0];
var EntryPointPath: StaticSimpleSchema = [0, n0, _EPP, 8, 0];
var HiveCliParameters: StaticSimpleSchema = [0, n0, _HCP, 8, 0];
var InitScriptPath: StaticSimpleSchema = [0, n0, _ISP, 8, 0];
var Query: StaticSimpleSchema = [0, n0, _Q, 8, 0];
var SparkSubmitParameters: StaticSimpleSchema = [0, n0, _SSP, 8, 0];
export var Application$: StaticStructureSchema = [
  3,
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
    () => MaximumAllowedResources$,
    4,
    4,
    128 | 0,
    () => AutoStartConfig$,
    () => AutoStopConfig$,
    () => NetworkConfiguration$,
    0,
    () => ImageConfiguration$,
    () => WorkerTypeSpecificationMap,
    [() => ConfigurationList, 0],
    () => MonitoringConfiguration$,
    () => InteractiveConfiguration$,
    () => SchedulerConfiguration$,
    () => IdentityCenterConfiguration$,
  ],
];
export var ApplicationSummary$: StaticStructureSchema = [
  3,
  n0,
  _AS,
  0,
  [_i, _n, _a, _rL, _t, _s, _sD, _cA, _uA, _ar],
  [0, 0, 0, 0, 0, 0, 0, 4, 4, 0],
];
export var AutoStartConfig$: StaticStructureSchema = [3, n0, _ASC, 0, [_e], [2]];
export var AutoStopConfig$: StaticStructureSchema = [3, n0, _ASCu, 0, [_e, _iTM], [2, 1]];
export var CancelJobRunRequest$: StaticStructureSchema = [
  3,
  n0,
  _CJRR,
  0,
  [_aI, _jRI, _sGPIS],
  [
    [0, 1],
    [0, 1],
    [1, { [_hQ]: _sGPIS }],
  ],
];
export var CancelJobRunResponse$: StaticStructureSchema = [3, n0, _CJRRa, 0, [_aI, _jRI], [0, 0]];
export var CloudWatchLoggingConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _CWLC,
  0,
  [_e, _lGN, _lSNP, _eKA, _lT],
  [2, 0, 0, 0, [2, n0, _LTM, 0, 0, 64 | 0]],
];
export var Configuration$: StaticStructureSchema = [
  3,
  n0,
  _C,
  0,
  [_c, _p, _co],
  [0, [() => SensitivePropertiesMap, 0], [() => ConfigurationList, 0]],
];
export var ConfigurationOverrides$: StaticStructureSchema = [
  3,
  n0,
  _CO,
  0,
  [_aC, _mCo],
  [[() => ConfigurationList, 0], () => MonitoringConfiguration$],
];
export var ConflictException$: StaticErrorSchema = [-3, n0, _CE, { [_er]: _cl, [_hE]: 409 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ConflictException$, ConflictException);
export var CreateApplicationRequest$: StaticStructureSchema = [
  3,
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
    () => MaximumAllowedResources$,
    128 | 0,
    () => AutoStartConfig$,
    () => AutoStopConfig$,
    () => NetworkConfiguration$,
    0,
    () => ImageConfigurationInput$,
    () => WorkerTypeSpecificationInputMap,
    [() => ConfigurationList, 0],
    () => MonitoringConfiguration$,
    () => InteractiveConfiguration$,
    () => SchedulerConfiguration$,
    () => IdentityCenterConfigurationInput$,
  ],
];
export var CreateApplicationResponse$: StaticStructureSchema = [3, n0, _CARr, 0, [_aI, _n, _a], [0, 0, 0]];
export var DeleteApplicationRequest$: StaticStructureSchema = [3, n0, _DAR, 0, [_aI], [[0, 1]]];
export var DeleteApplicationResponse$: StaticStructureSchema = [3, n0, _DARe, 0, [], []];
export var GetApplicationRequest$: StaticStructureSchema = [3, n0, _GAR, 0, [_aI], [[0, 1]]];
export var GetApplicationResponse$: StaticStructureSchema = [3, n0, _GARe, 0, [_ap], [[() => Application$, 0]]];
export var GetDashboardForJobRunRequest$: StaticStructureSchema = [
  3,
  n0,
  _GDFJRR,
  0,
  [_aI, _jRI, _at, _aSPL],
  [
    [0, 1],
    [0, 1],
    [1, { [_hQ]: _at }],
    [2, { [_hQ]: _aSPL }],
  ],
];
export var GetDashboardForJobRunResponse$: StaticStructureSchema = [3, n0, _GDFJRRe, 0, [_u], [0]];
export var GetJobRunRequest$: StaticStructureSchema = [
  3,
  n0,
  _GJRR,
  0,
  [_aI, _jRI, _at],
  [
    [0, 1],
    [0, 1],
    [1, { [_hQ]: _at }],
  ],
];
export var GetJobRunResponse$: StaticStructureSchema = [3, n0, _GJRRe, 0, [_jR], [[() => JobRun$, 0]]];
export var Hive$: StaticStructureSchema = [
  3,
  n0,
  _H,
  0,
  [_q, _iQF, _pa],
  [
    [() => Query, 0],
    [() => InitScriptPath, 0],
    [() => HiveCliParameters, 0],
  ],
];
export var IdentityCenterConfiguration$: StaticStructureSchema = [3, n0, _ICC, 0, [_iCIA, _iCAA, _uBSE], [0, 0, 2]];
export var IdentityCenterConfigurationInput$: StaticStructureSchema = [3, n0, _ICCI, 0, [_iCIA, _uBSE], [0, 2]];
export var ImageConfiguration$: StaticStructureSchema = [3, n0, _IC, 0, [_iU, _rID], [0, 0]];
export var ImageConfigurationInput$: StaticStructureSchema = [3, n0, _ICI, 0, [_iU], [0]];
export var InitialCapacityConfig$: StaticStructureSchema = [
  3,
  n0,
  _ICCn,
  0,
  [_wC, _wCo],
  [1, () => WorkerResourceConfig$],
];
export var InteractiveConfiguration$: StaticStructureSchema = [3, n0, _ICn, 0, [_sE, _lEE], [2, 2]];
export var InternalServerException$: StaticErrorSchema = [-3, n0, _ISE, { [_er]: _se, [_hE]: 500 }, [_m], [0]];
TypeRegistry.for(n0).registerError(InternalServerException$, InternalServerException);
export var JobRun$: StaticStructureSchema = [
  3,
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
    () => JobRunExecutionIamPolicy$,
    0,
    0,
    0,
    [() => ConfigurationOverrides$, 0],
    [() => JobDriver$, 0],
    128 | 0,
    () => TotalResourceUtilization$,
    () => NetworkConfiguration$,
    1,
    1,
    () => ResourceUtilization$,
    0,
    () => RetryPolicy$,
    1,
    4,
    4,
    4,
    4,
    1,
  ],
];
export var JobRunAttemptSummary$: StaticStructureSchema = [
  3,
  n0,
  _JRAS,
  0,
  [_aI, _i, _n, _mo, _a, _cB, _jCA, _cA, _uA, _eR, _s, _sD, _rL, _t, _at],
  [0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 1],
];
export var JobRunExecutionIamPolicy$: StaticStructureSchema = [3, n0, _JREIP, 0, [_po, _pA], [0, 64 | 0]];
export var JobRunSummary$: StaticStructureSchema = [
  3,
  n0,
  _JRS,
  0,
  [_aI, _i, _n, _mo, _a, _cB, _cA, _uA, _eR, _s, _sD, _rL, _t, _at, _aCA, _aUA],
  [0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 1, 4, 4],
];
export var ListApplicationsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LAR,
  0,
  [_nT, _mR, _st],
  [
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
    [64 | 0, { [_hQ]: _st }],
  ],
];
export var ListApplicationsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LARi,
  0,
  [_app, _nT],
  [() => ApplicationList, 0],
];
export var ListJobRunAttemptsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LJRAR,
  0,
  [_aI, _jRI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
  ],
];
export var ListJobRunAttemptsResponse$: StaticStructureSchema = [
  3,
  n0,
  _LJRARi,
  0,
  [_jRA, _nT],
  [() => JobRunAttempts, 0],
];
export var ListJobRunsRequest$: StaticStructureSchema = [
  3,
  n0,
  _LJRR,
  0,
  [_aI, _nT, _mR, _cAA, _cAB, _st, _mo],
  [
    [0, 1],
    [0, { [_hQ]: _nT }],
    [1, { [_hQ]: _mR }],
    [4, { [_hQ]: _cAA }],
    [4, { [_hQ]: _cAB }],
    [64 | 0, { [_hQ]: _st }],
    [0, { [_hQ]: _mo }],
  ],
];
export var ListJobRunsResponse$: StaticStructureSchema = [3, n0, _LJRRi, 0, [_jRo, _nT], [() => JobRuns, 0]];
export var ListTagsForResourceRequest$: StaticStructureSchema = [3, n0, _LTFRR, 0, [_rA], [[0, 1]]];
export var ListTagsForResourceResponse$: StaticStructureSchema = [3, n0, _LTFRRi, 0, [_ta], [128 | 0]];
export var ManagedPersistenceMonitoringConfiguration$: StaticStructureSchema = [3, n0, _MPMC, 0, [_e, _eKA], [2, 0]];
export var MaximumAllowedResources$: StaticStructureSchema = [3, n0, _MAR, 0, [_cp, _me, _d], [0, 0, 0]];
export var MonitoringConfiguration$: StaticStructureSchema = [
  3,
  n0,
  _MC,
  0,
  [_sMC, _mPMC, _cWLC, _pMC],
  [
    () => S3MonitoringConfiguration$,
    () => ManagedPersistenceMonitoringConfiguration$,
    () => CloudWatchLoggingConfiguration$,
    () => PrometheusMonitoringConfiguration$,
  ],
];
export var NetworkConfiguration$: StaticStructureSchema = [3, n0, _NC, 0, [_sI, _sGI], [64 | 0, 64 | 0]];
export var PrometheusMonitoringConfiguration$: StaticStructureSchema = [3, n0, _PMC, 0, [_rWU], [0]];
export var ResourceNotFoundException$: StaticErrorSchema = [-3, n0, _RNFE, { [_er]: _cl, [_hE]: 404 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ResourceNotFoundException$, ResourceNotFoundException);
export var ResourceUtilization$: StaticStructureSchema = [3, n0, _RU, 0, [_vCPUH, _mGBH, _sGBH], [1, 1, 1]];
export var RetryPolicy$: StaticStructureSchema = [3, n0, _RP, 0, [_mA, _mFAPH], [1, 1]];
export var S3MonitoringConfiguration$: StaticStructureSchema = [3, n0, _SMC, 0, [_lU, _eKA], [0, 0]];
export var SchedulerConfiguration$: StaticStructureSchema = [3, n0, _SC, 0, [_qTM, _mCR], [1, 1]];
export var ServiceQuotaExceededException$: StaticErrorSchema = [-3, n0, _SQEE, { [_er]: _cl, [_hE]: 402 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ServiceQuotaExceededException$, ServiceQuotaExceededException);
export var SparkSubmit$: StaticStructureSchema = [
  3,
  n0,
  _SS,
  0,
  [_eP, _ePA, _sSP],
  [
    [() => EntryPointPath, 0],
    [() => EntryPointArguments, 0],
    [() => SparkSubmitParameters, 0],
  ],
];
export var StartApplicationRequest$: StaticStructureSchema = [3, n0, _SAR, 0, [_aI], [[0, 1]]];
export var StartApplicationResponse$: StaticStructureSchema = [3, n0, _SARt, 0, [], []];
export var StartJobRunRequest$: StaticStructureSchema = [
  3,
  n0,
  _SJRR,
  0,
  [_aI, _cT, _eRA, _eIP, _jD, _cO, _ta, _eTM, _n, _mo, _rP],
  [
    [0, 1],
    [0, 4],
    0,
    () => JobRunExecutionIamPolicy$,
    [() => JobDriver$, 0],
    [() => ConfigurationOverrides$, 0],
    128 | 0,
    1,
    0,
    0,
    () => RetryPolicy$,
  ],
];
export var StartJobRunResponse$: StaticStructureSchema = [3, n0, _SJRRt, 0, [_aI, _jRI, _a], [0, 0, 0]];
export var StopApplicationRequest$: StaticStructureSchema = [3, n0, _SARto, 0, [_aI], [[0, 1]]];
export var StopApplicationResponse$: StaticStructureSchema = [3, n0, _SARtop, 0, [], []];
export var TagResourceRequest$: StaticStructureSchema = [3, n0, _TRR, 0, [_rA, _ta], [[0, 1], 128 | 0]];
export var TagResourceResponse$: StaticStructureSchema = [3, n0, _TRRa, 0, [], []];
export var TotalResourceUtilization$: StaticStructureSchema = [3, n0, _TRU, 0, [_vCPUH, _mGBH, _sGBH], [1, 1, 1]];
export var UntagResourceRequest$: StaticStructureSchema = [
  3,
  n0,
  _URR,
  0,
  [_rA, _tK],
  [
    [0, 1],
    [64 | 0, { [_hQ]: _tK }],
  ],
];
export var UntagResourceResponse$: StaticStructureSchema = [3, n0, _URRn, 0, [], []];
export var UpdateApplicationRequest$: StaticStructureSchema = [
  3,
  n0,
  _UAR,
  0,
  [_aI, _cT, _iC, _mC, _aSC, _aSCu, _nC, _ar, _iCm, _wTS, _iCn, _rL, _rC, _mCo, _sC, _iCC],
  [
    [0, 1],
    [0, 4],
    () => InitialCapacityConfigMap,
    () => MaximumAllowedResources$,
    () => AutoStartConfig$,
    () => AutoStopConfig$,
    () => NetworkConfiguration$,
    0,
    () => ImageConfigurationInput$,
    () => WorkerTypeSpecificationInputMap,
    () => InteractiveConfiguration$,
    0,
    [() => ConfigurationList, 0],
    () => MonitoringConfiguration$,
    () => SchedulerConfiguration$,
    () => IdentityCenterConfigurationInput$,
  ],
];
export var UpdateApplicationResponse$: StaticStructureSchema = [3, n0, _UARp, 0, [_ap], [[() => Application$, 0]]];
export var ValidationException$: StaticErrorSchema = [-3, n0, _VE, { [_er]: _cl, [_hE]: 400 }, [_m], [0]];
TypeRegistry.for(n0).registerError(ValidationException$, ValidationException);
export var WorkerResourceConfig$: StaticStructureSchema = [3, n0, _WRC, 0, [_cp, _me, _d, _dT], [0, 0, 0, 0]];
export var WorkerTypeSpecification$: StaticStructureSchema = [3, n0, _WTS, 0, [_iCm], [() => ImageConfiguration$]];
export var WorkerTypeSpecificationInput$: StaticStructureSchema = [
  3,
  n0,
  _WTSI,
  0,
  [_iCm],
  [() => ImageConfigurationInput$],
];
export var EMRServerlessServiceException$: StaticErrorSchema = [-3, _sm, "EMRServerlessServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(EMRServerlessServiceException$, EMRServerlessServiceException);
var ApplicationList: StaticListSchema = [1, n0, _AL, 0, () => ApplicationSummary$];
var ApplicationStateSet = 64 | 0;
var ConfigurationList: StaticListSchema = [1, n0, _CL, 0, [() => Configuration$, 0]];
var EntryPointArguments: StaticListSchema = [1, n0, _EPAn, 0, [() => EntryPointArgument, 0]];
var JobRunAttempts: StaticListSchema = [1, n0, _JRA, 0, () => JobRunAttemptSummary$];
var JobRuns: StaticListSchema = [1, n0, _JRo, 0, () => JobRunSummary$];
var JobRunStateSet = 64 | 0;
var LogTypeList = 64 | 0;
var PolicyArnList = 64 | 0;
var SecurityGroupIds = 64 | 0;
var SubnetIds = 64 | 0;
var TagKeyList = 64 | 0;
var InitialCapacityConfigMap: StaticMapSchema = [2, n0, _ICCM, 0, 0, () => InitialCapacityConfig$];
var LogTypeMap: StaticMapSchema = [2, n0, _LTM, 0, 0, 64 | 0];
var SensitivePropertiesMap: StaticMapSchema = [2, n0, _SPM, 8, 0, 0];
var TagMap = 128 | 0;
var WorkerTypeSpecificationInputMap: StaticMapSchema = [2, n0, _WTSIM, 0, 0, () => WorkerTypeSpecificationInput$];
var WorkerTypeSpecificationMap: StaticMapSchema = [2, n0, _WTSM, 0, 0, () => WorkerTypeSpecification$];
export var JobDriver$: StaticStructureSchema = [
  3,
  n0,
  _JD,
  0,
  [_sS, _h],
  [
    [() => SparkSubmit$, 0],
    [() => Hive$, 0],
  ],
];
export var CancelJobRun$: StaticOperationSchema = [
  9,
  n0,
  _CJR,
  { [_ht]: ["DELETE", "/applications/{applicationId}/jobruns/{jobRunId}", 200] },
  () => CancelJobRunRequest$,
  () => CancelJobRunResponse$,
];
export var CreateApplication$: StaticOperationSchema = [
  9,
  n0,
  _CA,
  { [_ht]: ["POST", "/applications", 200] },
  () => CreateApplicationRequest$,
  () => CreateApplicationResponse$,
];
export var DeleteApplication$: StaticOperationSchema = [
  9,
  n0,
  _DA,
  { [_ht]: ["DELETE", "/applications/{applicationId}", 200] },
  () => DeleteApplicationRequest$,
  () => DeleteApplicationResponse$,
];
export var GetApplication$: StaticOperationSchema = [
  9,
  n0,
  _GA,
  { [_ht]: ["GET", "/applications/{applicationId}", 200] },
  () => GetApplicationRequest$,
  () => GetApplicationResponse$,
];
export var GetDashboardForJobRun$: StaticOperationSchema = [
  9,
  n0,
  _GDFJR,
  { [_ht]: ["GET", "/applications/{applicationId}/jobruns/{jobRunId}/dashboard", 200] },
  () => GetDashboardForJobRunRequest$,
  () => GetDashboardForJobRunResponse$,
];
export var GetJobRun$: StaticOperationSchema = [
  9,
  n0,
  _GJR,
  { [_ht]: ["GET", "/applications/{applicationId}/jobruns/{jobRunId}", 200] },
  () => GetJobRunRequest$,
  () => GetJobRunResponse$,
];
export var ListApplications$: StaticOperationSchema = [
  9,
  n0,
  _LA,
  { [_ht]: ["GET", "/applications", 200] },
  () => ListApplicationsRequest$,
  () => ListApplicationsResponse$,
];
export var ListJobRunAttempts$: StaticOperationSchema = [
  9,
  n0,
  _LJRA,
  { [_ht]: ["GET", "/applications/{applicationId}/jobruns/{jobRunId}/attempts", 200] },
  () => ListJobRunAttemptsRequest$,
  () => ListJobRunAttemptsResponse$,
];
export var ListJobRuns$: StaticOperationSchema = [
  9,
  n0,
  _LJR,
  { [_ht]: ["GET", "/applications/{applicationId}/jobruns", 200] },
  () => ListJobRunsRequest$,
  () => ListJobRunsResponse$,
];
export var ListTagsForResource$: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  { [_ht]: ["GET", "/tags/{resourceArn}", 200] },
  () => ListTagsForResourceRequest$,
  () => ListTagsForResourceResponse$,
];
export var StartApplication$: StaticOperationSchema = [
  9,
  n0,
  _SA,
  { [_ht]: ["POST", "/applications/{applicationId}/start", 200] },
  () => StartApplicationRequest$,
  () => StartApplicationResponse$,
];
export var StartJobRun$: StaticOperationSchema = [
  9,
  n0,
  _SJR,
  { [_ht]: ["POST", "/applications/{applicationId}/jobruns", 200] },
  () => StartJobRunRequest$,
  () => StartJobRunResponse$,
];
export var StopApplication$: StaticOperationSchema = [
  9,
  n0,
  _SAt,
  { [_ht]: ["POST", "/applications/{applicationId}/stop", 200] },
  () => StopApplicationRequest$,
  () => StopApplicationResponse$,
];
export var TagResource$: StaticOperationSchema = [
  9,
  n0,
  _TR,
  { [_ht]: ["POST", "/tags/{resourceArn}", 200] },
  () => TagResourceRequest$,
  () => TagResourceResponse$,
];
export var UntagResource$: StaticOperationSchema = [
  9,
  n0,
  _UR,
  { [_ht]: ["DELETE", "/tags/{resourceArn}", 200] },
  () => UntagResourceRequest$,
  () => UntagResourceResponse$,
];
export var UpdateApplication$: StaticOperationSchema = [
  9,
  n0,
  _UA,
  { [_ht]: ["PATCH", "/applications/{applicationId}", 200] },
  () => UpdateApplicationRequest$,
  () => UpdateApplicationResponse$,
];
