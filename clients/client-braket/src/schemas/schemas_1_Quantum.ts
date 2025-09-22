// smithy-typescript generated code
import { error, list, op, sim, struct } from "@smithy/core/schema";

import {
  AccessDeniedException as __AccessDeniedException,
  ConflictException as __ConflictException,
  DeviceOfflineException as __DeviceOfflineException,
  DeviceRetiredException as __DeviceRetiredException,
  ServiceQuotaExceededException as __ServiceQuotaExceededException,
  ThrottlingException as __ThrottlingException,
} from "../models/index";
import {
  _A,
  _a,
  _aAN,
  _ac,
  _ADE,
  _AM,
  _aM,
  _ar,
  _AS,
  _As,
  _aS,
  _as,
  _aT,
  _bD,
  _c,
  _cA,
  _cC,
  _CE,
  _CI,
  _cI,
  _CJ,
  _CJR,
  _CJr,
  _CJRa,
  _CJRr,
  _CJRre,
  _cN,
  _CQT,
  _CQTR,
  _CQTr,
  _CQTRa,
  _CQTRr,
  _CQTRre,
  _cS,
  _cT,
  _cTo,
  _cTom,
  _d,
  _dA,
  _DC,
  _dC,
  _dCe,
  _de,
  _dN,
  _DOE,
  _dP,
  _DQI,
  _dQI,
  _DQIL,
  _DRE,
  _DS,
  _dS,
  _dSa,
  _DSe,
  _DSL,
  _dT,
  _e,
  _eA,
  _eC,
  _eP,
  _eT,
  _ev,
  _f,
  _fR,
  _GD,
  _GDR,
  _GDRe,
  _GJ,
  _GJR,
  _GJRe,
  _GQT,
  _GQTR,
  _GQTRe,
  _h,
  _hE,
  _HJQI,
  _hP,
  _hQ,
  _IC,
  _iC,
  _ICL,
  _iCn,
  _iDC,
  _IFC,
  _iT,
  _j,
  _jA,
  _JCC,
  _JE,
  _JED,
  _jN,
  _JODC,
  _JS,
  _JSC,
  _JSL,
  _jT,
  _JV,
  _kKI,
  _lP,
  _m,
  _mR,
  _mRIS,
  _mT,
  _n,
  _nSS,
  _nT,
  _o,
  _oDC,
  _oSB,
  _oSD,
  _oSKP,
  _p,
  _pC,
  _pN,
  _q,
  _qI,
  _qP,
  _qS,
  _qT,
  _qTA,
  _QTQI,
  _QTS,
  _QTSL,
  _rA,
  _s,
  _sA,
  _sC,
  _SD,
  _SDF,
  _SDFL,
  _SDR,
  _SDRe,
  _SDS,
  _sDS,
  _SJ,
  _SJF,
  _SJFL,
  _SJR,
  _SJRe,
  _SMC,
  _sMC,
  _sP,
  _SQEE,
  _SQT,
  _SQTF,
  _SQTFL,
  _SQTR,
  _SQTRe,
  _st,
  _sU,
  _t,
  _ta,
  _TE,
  _tOE,
  _u,
  _v,
  _vSIG,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var JsonValue = sim(n0, _JV, 0, {
  [_mT]: _a,
});
export var AccessDeniedException = error(
  n0,
  _ADE,
  {
    [_e]: _c,
    [_hE]: 403,
  },
  [_m],
  [0],

  __AccessDeniedException
);
export var ActionMetadata = struct(n0, _AM, 0, [_aT, _pC, _eC], [0, 1, 1]);
export var AlgorithmSpecification = struct(n0, _AS, 0, [_sMC, _cI], [() => ScriptModeConfig, () => ContainerImage]);
export var Association = struct(n0, _A, 0, [_ar, _t], [0, 0]);
export var CancelJobRequest = struct(n0, _CJR, 0, [_jA], [[0, 1]]);
export var CancelJobResponse = struct(n0, _CJRa, 0, [_jA, _cS], [0, 0]);
export var CancelQuantumTaskRequest = struct(
  n0,
  _CQTR,
  0,
  [_qTA, _cT],
  [
    [0, 1],
    [0, 4],
  ]
);
export var CancelQuantumTaskResponse = struct(n0, _CQTRa, 0, [_qTA, _cS], [0, 0]);
export var ConflictException = error(
  n0,
  _CE,
  {
    [_e]: _c,
    [_hE]: 409,
  },
  [_m],
  [0],

  __ConflictException
);
export var ContainerImage = struct(n0, _CI, 0, [_u], [0]);
export var CreateJobRequest = struct(
  n0,
  _CJRr,
  0,
  [_cT, _aS, _iDC, _oDC, _cC, _jN, _rA, _sC, _iC, _hP, _dC, _ta, _as],
  [
    [0, 4],
    () => AlgorithmSpecification,
    () => InputConfigList,
    () => JobOutputDataConfig,
    () => JobCheckpointConfig,
    0,
    0,
    () => JobStoppingCondition,
    () => InstanceConfig,
    128 | 0,
    () => DeviceConfig,
    128 | 0,
    () => Associations,
  ]
);
export var CreateJobResponse = struct(n0, _CJRre, 0, [_jA], [0]);
export var CreateQuantumTaskRequest = struct(
  n0,
  _CQTRr,
  0,
  [_cT, _dA, _dP, _s, _oSB, _oSKP, _ac, _ta, _jT, _as],
  [[0, 4], 0, [() => JsonValue, 0], 1, 0, 0, [() => JsonValue, 0], 128 | 0, 0, () => Associations]
);
export var CreateQuantumTaskResponse = struct(n0, _CQTRre, 0, [_qTA], [0]);
export var DataSource = struct(n0, _DS, 0, [_sDS], [() => S3DataSource]);
export var DeviceConfig = struct(n0, _DC, 0, [_d], [0]);
export var DeviceOfflineException = error(
  n0,
  _DOE,
  {
    [_e]: _c,
    [_hE]: 424,
  },
  [_m],
  [0],

  __DeviceOfflineException
);
export var DeviceQueueInfo = struct(n0, _DQI, 0, [_q, _qS, _qP], [0, 0, 0]);
export var DeviceRetiredException = error(
  n0,
  _DRE,
  {
    [_e]: _c,
    [_hE]: 410,
  },
  [_m],
  [0],

  __DeviceRetiredException
);
export var DeviceSummary = struct(n0, _DSe, 0, [_dA, _dN, _pN, _dT, _dS], [0, 0, 0, 0, 0]);
export var GetDeviceRequest = struct(n0, _GDR, 0, [_dA], [[0, 1]]);
export var GetDeviceResponse = struct(
  n0,
  _GDRe,
  0,
  [_dA, _dN, _pN, _dT, _dS, _dCe, _dQI],
  [0, 0, 0, 0, 0, [() => JsonValue, 0], () => DeviceQueueInfoList]
);
export var GetJobRequest = struct(
  n0,
  _GJR,
  0,
  [_jA, _aAN],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _aAN,
      },
    ],
  ]
);
export var GetJobResponse = struct(
  n0,
  _GJRe,
  0,
  [_st, _jA, _rA, _fR, _jN, _hP, _iDC, _oDC, _sC, _cC, _aS, _iC, _cA, _sA, _eA, _bD, _dC, _ev, _ta, _qI, _as],
  [
    0,
    0,
    0,
    0,
    0,
    128 | 0,
    () => InputConfigList,
    () => JobOutputDataConfig,
    () => JobStoppingCondition,
    () => JobCheckpointConfig,
    () => AlgorithmSpecification,
    () => InstanceConfig,
    5,
    5,
    5,
    1,
    () => DeviceConfig,
    () => JobEvents,
    128 | 0,
    () => HybridJobQueueInfo,
    () => Associations,
  ]
);
export var GetQuantumTaskRequest = struct(
  n0,
  _GQTR,
  0,
  [_qTA, _aAN],
  [
    [0, 1],
    [
      64 | 0,
      {
        [_hQ]: _aAN,
      },
    ],
  ]
);
export var GetQuantumTaskResponse = struct(
  n0,
  _GQTRe,
  0,
  [_qTA, _st, _fR, _dA, _dP, _s, _oSB, _oSD, _cA, _eA, _ta, _jA, _qI, _as, _nSS, _aM],
  [
    0,
    0,
    0,
    0,
    [() => JsonValue, 0],
    1,
    0,
    0,
    5,
    5,
    128 | 0,
    0,
    () => QuantumTaskQueueInfo,
    () => Associations,
    1,
    () => ActionMetadata,
  ]
);
export var HybridJobQueueInfo = struct(n0, _HJQI, 0, [_q, _p, _m], [0, 0, 0]);
export var InputFileConfig = struct(n0, _IFC, 0, [_cN, _cTo, _dSa], [0, 0, () => DataSource]);
export var InstanceConfig = struct(n0, _IC, 0, [_iT, _vSIG, _iCn], [0, 1, 1]);
export var JobCheckpointConfig = struct(n0, _JCC, 0, [_lP, _sU], [0, 0]);
export var JobEventDetails = struct(n0, _JED, 0, [_eT, _tOE, _m], [0, 5, 0]);
export var JobOutputDataConfig = struct(n0, _JODC, 0, [_kKI, _sP], [0, 0]);
export var JobStoppingCondition = struct(n0, _JSC, 0, [_mRIS], [1]);
export var JobSummary = struct(n0, _JS, 0, [_st, _jA, _jN, _d, _cA, _sA, _eA, _ta], [0, 0, 0, 0, 5, 5, 5, 128 | 0]);
export var QuantumTaskQueueInfo = struct(n0, _QTQI, 0, [_q, _p, _qP, _m], [0, 0, 0, 0]);
export var QuantumTaskSummary = struct(
  n0,
  _QTS,
  0,
  [_qTA, _st, _dA, _s, _oSB, _oSD, _cA, _eA, _ta],
  [0, 0, 0, 1, 0, 0, 5, 5, 128 | 0]
);
export var S3DataSource = struct(n0, _SDS, 0, [_sU], [0]);
export var ScriptModeConfig = struct(n0, _SMC, 0, [_eP, _sU, _cTom], [0, 0, 0]);
export var SearchDevicesFilter = struct(n0, _SDF, 0, [_n, _v], [0, 64 | 0]);
export var SearchDevicesRequest = struct(n0, _SDR, 0, [_nT, _mR, _f], [0, 1, () => SearchDevicesFilterList]);
export var SearchDevicesResponse = struct(n0, _SDRe, 0, [_de, _nT], [() => DeviceSummaryList, 0]);
export var SearchJobsFilter = struct(n0, _SJF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var SearchJobsRequest = struct(n0, _SJR, 0, [_nT, _mR, _f], [0, 1, () => SearchJobsFilterList]);
export var SearchJobsResponse = struct(n0, _SJRe, 0, [_j, _nT], [() => JobSummaryList, 0]);
export var SearchQuantumTasksFilter = struct(n0, _SQTF, 0, [_n, _v, _o], [0, 64 | 0, 0]);
export var SearchQuantumTasksRequest = struct(n0, _SQTR, 0, [_nT, _mR, _f], [0, 1, () => SearchQuantumTasksFilterList]);
export var SearchQuantumTasksResponse = struct(n0, _SQTRe, 0, [_qT, _nT], [() => QuantumTaskSummaryList, 0]);
export var ServiceQuotaExceededException = error(
  n0,
  _SQEE,
  {
    [_e]: _c,
    [_hE]: 402,
  },
  [_m],
  [0],

  __ServiceQuotaExceededException
);
export var ThrottlingException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottlingException
);
export var Associations = list(n0, _As, 0, () => Association);
export var DeviceQueueInfoList = list(n0, _DQIL, 0, () => DeviceQueueInfo);
export var DeviceSummaryList = list(n0, _DSL, 0, () => DeviceSummary);
export var HybridJobAdditionalAttributeNamesList = 64 | 0;

export var InputConfigList = list(n0, _ICL, 0, () => InputFileConfig);
export var JobEvents = list(n0, _JE, 0, () => JobEventDetails);
export var JobSummaryList = list(n0, _JSL, 0, () => JobSummary);
export var QuantumTaskAdditionalAttributeNamesList = 64 | 0;

export var QuantumTaskSummaryList = list(n0, _QTSL, 0, () => QuantumTaskSummary);
export var SearchDevicesFilterList = list(n0, _SDFL, 0, () => SearchDevicesFilter);
export var SearchJobsFilterList = list(n0, _SJFL, 0, () => SearchJobsFilter);
export var SearchQuantumTasksFilterList = list(n0, _SQTFL, 0, () => SearchQuantumTasksFilter);
export var String256List = 64 | 0;

export var HyperParameters = 128 | 0;

export var CancelJob = op(
  n0,
  _CJ,
  {
    [_h]: ["PUT", "/job/{jobArn}/cancel", 200],
  },
  () => CancelJobRequest,
  () => CancelJobResponse
);
export var CancelQuantumTask = op(
  n0,
  _CQT,
  {
    [_h]: ["PUT", "/quantum-task/{quantumTaskArn}/cancel", 200],
  },
  () => CancelQuantumTaskRequest,
  () => CancelQuantumTaskResponse
);
export var CreateJob = op(
  n0,
  _CJr,
  {
    [_h]: ["POST", "/job", 201],
  },
  () => CreateJobRequest,
  () => CreateJobResponse
);
export var CreateQuantumTask = op(
  n0,
  _CQTr,
  {
    [_h]: ["POST", "/quantum-task", 201],
  },
  () => CreateQuantumTaskRequest,
  () => CreateQuantumTaskResponse
);
export var GetDevice = op(
  n0,
  _GD,
  {
    [_h]: ["GET", "/device/{deviceArn}", 200],
  },
  () => GetDeviceRequest,
  () => GetDeviceResponse
);
export var GetJob = op(
  n0,
  _GJ,
  {
    [_h]: ["GET", "/job/{jobArn}", 200],
  },
  () => GetJobRequest,
  () => GetJobResponse
);
export var GetQuantumTask = op(
  n0,
  _GQT,
  {
    [_h]: ["GET", "/quantum-task/{quantumTaskArn}", 200],
  },
  () => GetQuantumTaskRequest,
  () => GetQuantumTaskResponse
);
export var SearchDevices = op(
  n0,
  _SD,
  {
    [_h]: ["POST", "/devices", 200],
  },
  () => SearchDevicesRequest,
  () => SearchDevicesResponse
);
export var SearchJobs = op(
  n0,
  _SJ,
  {
    [_h]: ["POST", "/jobs", 200],
  },
  () => SearchJobsRequest,
  () => SearchJobsResponse
);
export var SearchQuantumTasks = op(
  n0,
  _SQT,
  {
    [_h]: ["POST", "/quantum-tasks", 200],
  },
  () => SearchQuantumTasksRequest,
  () => SearchQuantumTasksResponse
);
