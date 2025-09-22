// smithy-typescript generated code
import { error, list, map, op, sim, struct } from "@smithy/core/schema";

import {
  ActivityWorkerLimitExceeded as __ActivityWorkerLimitExceeded,
  ExecutionAlreadyExists as __ExecutionAlreadyExists,
  InvalidOutput as __InvalidOutput,
  KmsInvalidStateException as __KmsInvalidStateException,
} from "../models/index";
import {
  _aA,
  _AFED,
  _aFED,
  _ASED,
  _aSED,
  _ASEDc,
  _aSEDc,
  _ASEDct,
  _aSEDct,
  _ASFED,
  _aSFED,
  _ATOED,
  _aTOED,
  _AV,
  _aV,
  _AVD,
  _aVD,
  _AWLE,
  _BD,
  _bD,
  _bDIM,
  _bMUIMB,
  _c,
  _ca,
  _cD,
  _CP,
  _CWEEDD,
  _d,
  _DE,
  _de,
  _DEI,
  _DEO,
  _DSMe,
  _DSMFE,
  _DSMFEI,
  _DSMFEO,
  _DSMIe,
  _DSMOe,
  _e,
  _eA,
  _EAE,
  _EAED,
  _eAED,
  _eC,
  _EFED,
  _eFED,
  _eFEDv,
  _EFEDx,
  _EFL,
  _end,
  _ERED,
  _eRED,
  _ESED,
  _eSED,
  _ESEDx,
  _eSEDx,
  _ETOED,
  _eTOED,
  _ev,
  _GAT,
  _GATI,
  _GATO,
  _GEH,
  _GEHI,
  _GEHO,
  _HE,
  _HEEDD,
  _HEL,
  _hIS,
  _i,
  _iD,
  _id,
  _iDn,
  _iED,
  _in,
  _ind,
  _IO,
  _KISE,
  _kKS,
  _l,
  _lC,
  _len,
  _LFFED,
  _lFFED,
  _LFSED,
  _lFSED,
  _LFSEDa,
  _lFSEDa,
  _LFSFED,
  _lFSFED,
  _LFSFEDa,
  _lFSFEDa,
  _LFTOED,
  _lFTOED,
  _lo,
  _m,
  _mIAED,
  _MIED,
  _mIFED,
  _mISED,
  _mISEDa,
  _mR,
  _mRA,
  _MRFED,
  _mRFED,
  _MRRED,
  _mRRED,
  _MRSED,
  _mRSED,
  _MSSED,
  _mSSED,
  _n,
  _nT,
  _o,
  _oD,
  _pa,
  _pEI,
  _r,
  _rA,
  _rCe,
  _rD,
  _reg,
  _rI,
  _rO,
  _rS,
  _rSR,
  _rT,
  _s,
  _sD,
  _SDJI,
  _sDt,
  _SEED,
  _sEED,
  _SEEDt,
  _sEEDt,
  _SEI,
  _SEIt,
  _SEO,
  _SEOt,
  _SEt,
  _SEto,
  _sMA,
  _sMAA,
  _sMVA,
  _SSE,
  _SSEI,
  _SSEO,
  _st,
  _STF,
  _STFI,
  _STFO,
  _STS,
  _STSI,
  _STSO,
  _t,
  _TC,
  _tC,
  _tCa,
  _TFED,
  _tFED,
  _tH,
  _ti,
  _tIS,
  _TSED,
  _tSED,
  _TSEDa,
  _tSEDa,
  _TSEDas,
  _tSEDas,
  _TSEDask,
  _tSEDask,
  _TSFED,
  _tSFED,
  _TSFEDa,
  _tSFEDa,
  _tT,
  _TTOED,
  _tTOED,
  _ty,
  _uD,
  _VN,
  _VNL,
  _VR,
  _vR,
  _VV,
  _wN,
  n0,
} from "./schemas_0";
import { Definition } from "./schemas_4_State";
import { VersionDescription } from "./schemas_5_StateMachine";
import { SensitiveData } from "./schemas_10_Execution";
import { EncryptionConfiguration, LoggingConfiguration, TracingConfiguration } from "./schemas_12_StateMachine";
import { SensitiveCause, SensitiveError } from "./schemas_22_Execution";

/* eslint no-var: 0 */

export var ConnectorParameters = sim(n0, _CP, 0, 8);
export var EvaluationFailureLocation = sim(n0, _EFL, 0, 8);
export var SensitiveDataJobInput = sim(n0, _SDJI, 0, 8);
export var VariableName = sim(n0, _VN, 0, 8);
export var VariableValue = sim(n0, _VV, 0, 8);
export var ActivityFailedEventDetails = struct(
  n0,
  _AFED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var ActivityScheduledEventDetails = struct(
  n0,
  _ASED,
  0,
  [_r, _i, _iD, _tIS, _hIS],
  [0, [() => SensitiveData, 0], () => HistoryEventExecutionDataDetails, 1, 1]
);
export var ActivityScheduleFailedEventDetails = struct(
  n0,
  _ASFED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var ActivityStartedEventDetails = struct(n0, _ASEDc, 0, [_wN], [0]);
export var ActivitySucceededEventDetails = struct(
  n0,
  _ASEDct,
  0,
  [_o, _oD],
  [[() => SensitiveData, 0], () => HistoryEventExecutionDataDetails]
);
export var ActivityTimedOutEventDetails = struct(
  n0,
  _ATOED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var ActivityWorkerLimitExceeded = error(
  n0,
  _AWLE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ActivityWorkerLimitExceeded
);
export var AssignedVariablesDetails = struct(n0, _AVD, 0, [_t], [2]);
export var BillingDetails = struct(n0, _BD, 0, [_bMUIMB, _bDIM], [1, 1]);
export var CloudWatchEventsExecutionDataDetails = struct(n0, _CWEEDD, 0, [_in], [2]);
export var DescribeExecutionInput = struct(n0, _DEI, 0, [_eA, _iDn], [0, 0]);
export var DescribeExecutionOutput = struct(
  n0,
  _DEO,
  0,
  [_eA, _sMA, _n, _s, _sD, _sDt, _i, _iD, _o, _oD, _tH, _mRA, _e, _ca, _sMVA, _sMAA, _rCe, _rD, _rS, _rSR],
  [
    0,
    0,
    0,
    0,
    4,
    4,
    [() => SensitiveData, 0],
    () => CloudWatchEventsExecutionDataDetails,
    [() => SensitiveData, 0],
    () => CloudWatchEventsExecutionDataDetails,
    0,
    0,
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
    0,
    0,
    1,
    4,
    0,
    [() => SensitiveData, 0],
  ]
);
export var DescribeStateMachineForExecutionInput = struct(n0, _DSMFEI, 0, [_eA, _iDn], [0, 0]);
export var DescribeStateMachineForExecutionOutput = struct(
  n0,
  _DSMFEO,
  0,
  [_sMA, _n, _de, _rA, _uD, _lC, _tC, _mRA, _l, _rI, _eC, _vR],
  [
    0,
    0,
    [() => Definition, 0],
    0,
    4,
    () => LoggingConfiguration,
    () => TracingConfiguration,
    0,
    0,
    0,
    () => EncryptionConfiguration,
    [() => VariableReferences, 0],
  ]
);
export var DescribeStateMachineInput = struct(n0, _DSMIe, 0, [_sMA, _iDn], [0, 0]);
export var DescribeStateMachineOutput = struct(
  n0,
  _DSMOe,
  0,
  [_sMA, _n, _s, _de, _rA, _ty, _cD, _lC, _tC, _l, _rI, _d, _eC, _vR],
  [
    0,
    0,
    0,
    [() => Definition, 0],
    0,
    0,
    4,
    () => LoggingConfiguration,
    () => TracingConfiguration,
    0,
    0,
    [() => VersionDescription, 0],
    () => EncryptionConfiguration,
    [() => VariableReferences, 0],
  ]
);
export var EvaluationFailedEventDetails = struct(
  n0,
  _EFED,
  0,
  [_e, _ca, _lo, _st],
  [[() => SensitiveError, 0], [() => SensitiveCause, 0], [() => EvaluationFailureLocation, 0], 0]
);
export var ExecutionAbortedEventDetails = struct(
  n0,
  _EAED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var ExecutionAlreadyExists = error(
  n0,
  _EAE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __ExecutionAlreadyExists
);
export var ExecutionFailedEventDetails = struct(
  n0,
  _EFEDx,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var ExecutionRedrivenEventDetails = struct(n0, _ERED, 0, [_rCe], [1]);
export var ExecutionStartedEventDetails = struct(
  n0,
  _ESED,
  0,
  [_i, _iD, _rA, _sMAA, _sMVA],
  [[() => SensitiveData, 0], () => HistoryEventExecutionDataDetails, 0, 0, 0]
);
export var ExecutionSucceededEventDetails = struct(
  n0,
  _ESEDx,
  0,
  [_o, _oD],
  [[() => SensitiveData, 0], () => HistoryEventExecutionDataDetails]
);
export var ExecutionTimedOutEventDetails = struct(
  n0,
  _ETOED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var GetActivityTaskInput = struct(n0, _GATI, 0, [_aA, _wN], [0, 0]);
export var GetActivityTaskOutput = struct(n0, _GATO, 0, [_tT, _i], [0, [() => SensitiveDataJobInput, 0]]);
export var GetExecutionHistoryInput = struct(n0, _GEHI, 0, [_eA, _mR, _rO, _nT, _iED], [0, 1, 2, 0, 2]);
export var GetExecutionHistoryOutput = struct(n0, _GEHO, 0, [_ev, _nT], [[() => HistoryEventList, 0], 0]);
export var HistoryEvent = struct(
  n0,
  _HE,
  0,
  [
    _ti,
    _ty,
    _id,
    _pEI,
    _aFED,
    _aSFED,
    _aSED,
    _aSEDc,
    _aSEDct,
    _aTOED,
    _tFED,
    _tSED,
    _tSFED,
    _tSEDa,
    _tSFEDa,
    _tSEDas,
    _tSEDask,
    _tTOED,
    _eFED,
    _eSED,
    _eSEDx,
    _eAED,
    _eTOED,
    _eRED,
    _mSSED,
    _mISED,
    _mISEDa,
    _mIFED,
    _mIAED,
    _lFFED,
    _lFSFED,
    _lFSED,
    _lFSFEDa,
    _lFSEDa,
    _lFTOED,
    _sEED,
    _sEEDt,
    _mRSED,
    _mRFED,
    _mRRED,
    _eFEDv,
  ],
  [
    4,
    0,
    1,
    1,
    [() => ActivityFailedEventDetails, 0],
    [() => ActivityScheduleFailedEventDetails, 0],
    [() => ActivityScheduledEventDetails, 0],
    () => ActivityStartedEventDetails,
    [() => ActivitySucceededEventDetails, 0],
    [() => ActivityTimedOutEventDetails, 0],
    [() => TaskFailedEventDetails, 0],
    [() => TaskScheduledEventDetails, 0],
    [() => TaskStartFailedEventDetails, 0],
    () => TaskStartedEventDetails,
    [() => TaskSubmitFailedEventDetails, 0],
    [() => TaskSubmittedEventDetails, 0],
    [() => TaskSucceededEventDetails, 0],
    [() => TaskTimedOutEventDetails, 0],
    [() => ExecutionFailedEventDetails, 0],
    [() => ExecutionStartedEventDetails, 0],
    [() => ExecutionSucceededEventDetails, 0],
    [() => ExecutionAbortedEventDetails, 0],
    [() => ExecutionTimedOutEventDetails, 0],
    () => ExecutionRedrivenEventDetails,
    () => MapStateStartedEventDetails,
    () => MapIterationEventDetails,
    () => MapIterationEventDetails,
    () => MapIterationEventDetails,
    () => MapIterationEventDetails,
    [() => LambdaFunctionFailedEventDetails, 0],
    [() => LambdaFunctionScheduleFailedEventDetails, 0],
    [() => LambdaFunctionScheduledEventDetails, 0],
    [() => LambdaFunctionStartFailedEventDetails, 0],
    [() => LambdaFunctionSucceededEventDetails, 0],
    [() => LambdaFunctionTimedOutEventDetails, 0],
    [() => StateEnteredEventDetails, 0],
    [() => StateExitedEventDetails, 0],
    () => MapRunStartedEventDetails,
    [() => MapRunFailedEventDetails, 0],
    () => MapRunRedrivenEventDetails,
    [() => EvaluationFailedEventDetails, 0],
  ]
);
export var HistoryEventExecutionDataDetails = struct(n0, _HEEDD, 0, [_t], [2]);
export var InvalidOutput = error(
  n0,
  _IO,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __InvalidOutput
);
export var KmsInvalidStateException = error(
  n0,
  _KISE,
  {
    [_e]: _c,
  },
  [_kKS, _m],
  [0, 0],

  __KmsInvalidStateException
);
export var LambdaFunctionFailedEventDetails = struct(
  n0,
  _LFFED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var LambdaFunctionScheduledEventDetails = struct(
  n0,
  _LFSED,
  0,
  [_r, _i, _iD, _tIS, _tCa],
  [0, [() => SensitiveData, 0], () => HistoryEventExecutionDataDetails, 1, () => TaskCredentials]
);
export var LambdaFunctionScheduleFailedEventDetails = struct(
  n0,
  _LFSFED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var LambdaFunctionStartFailedEventDetails = struct(
  n0,
  _LFSFEDa,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var LambdaFunctionSucceededEventDetails = struct(
  n0,
  _LFSEDa,
  0,
  [_o, _oD],
  [[() => SensitiveData, 0], () => HistoryEventExecutionDataDetails]
);
export var LambdaFunctionTimedOutEventDetails = struct(
  n0,
  _LFTOED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var MapIterationEventDetails = struct(n0, _MIED, 0, [_n, _ind], [0, 1]);
export var MapRunFailedEventDetails = struct(
  n0,
  _MRFED,
  0,
  [_e, _ca],
  [
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
  ]
);
export var MapRunRedrivenEventDetails = struct(n0, _MRRED, 0, [_mRA, _rCe], [0, 1]);
export var MapRunStartedEventDetails = struct(n0, _MRSED, 0, [_mRA], [0]);
export var MapStateStartedEventDetails = struct(n0, _MSSED, 0, [_len], [1]);
export var SendTaskFailureInput = struct(
  n0,
  _STFI,
  0,
  [_tT, _e, _ca],
  [0, [() => SensitiveError, 0], [() => SensitiveCause, 0]]
);
export var SendTaskFailureOutput = struct(n0, _STFO, 0, [], []);
export var SendTaskSuccessInput = struct(n0, _STSI, 0, [_tT, _o], [0, [() => SensitiveData, 0]]);
export var SendTaskSuccessOutput = struct(n0, _STSO, 0, [], []);
export var StartExecutionInput = struct(n0, _SEI, 0, [_sMA, _n, _i, _tH], [0, 0, [() => SensitiveData, 0], 0]);
export var StartExecutionOutput = struct(n0, _SEO, 0, [_eA, _sD], [0, 4]);
export var StartSyncExecutionInput = struct(
  n0,
  _SSEI,
  0,
  [_sMA, _n, _i, _tH, _iDn],
  [0, 0, [() => SensitiveData, 0], 0, 0]
);
export var StartSyncExecutionOutput = struct(
  n0,
  _SSEO,
  0,
  [_eA, _sMA, _n, _sD, _sDt, _s, _e, _ca, _i, _iD, _o, _oD, _tH, _bD],
  [
    0,
    0,
    0,
    4,
    4,
    0,
    [() => SensitiveError, 0],
    [() => SensitiveCause, 0],
    [() => SensitiveData, 0],
    () => CloudWatchEventsExecutionDataDetails,
    [() => SensitiveData, 0],
    () => CloudWatchEventsExecutionDataDetails,
    0,
    () => BillingDetails,
  ]
);
export var StateEnteredEventDetails = struct(
  n0,
  _SEED,
  0,
  [_n, _i, _iD],
  [0, [() => SensitiveData, 0], () => HistoryEventExecutionDataDetails]
);
export var StateExitedEventDetails = struct(
  n0,
  _SEEDt,
  0,
  [_n, _o, _oD, _aV, _aVD],
  [
    0,
    [() => SensitiveData, 0],
    () => HistoryEventExecutionDataDetails,
    [() => AssignedVariables, 0],
    () => AssignedVariablesDetails,
  ]
);
export var StopExecutionInput = struct(
  n0,
  _SEIt,
  0,
  [_eA, _e, _ca],
  [0, [() => SensitiveError, 0], [() => SensitiveCause, 0]]
);
export var StopExecutionOutput = struct(n0, _SEOt, 0, [_sDt], [4]);
export var TaskCredentials = struct(n0, _TC, 0, [_rA], [0]);
export var TaskFailedEventDetails = struct(
  n0,
  _TFED,
  0,
  [_rT, _r, _e, _ca],
  [0, 0, [() => SensitiveError, 0], [() => SensitiveCause, 0]]
);
export var TaskScheduledEventDetails = struct(
  n0,
  _TSED,
  0,
  [_rT, _r, _reg, _pa, _tIS, _hIS, _tCa],
  [0, 0, 0, [() => ConnectorParameters, 0], 1, 1, () => TaskCredentials]
);
export var TaskStartedEventDetails = struct(n0, _TSEDa, 0, [_rT, _r], [0, 0]);
export var TaskStartFailedEventDetails = struct(
  n0,
  _TSFED,
  0,
  [_rT, _r, _e, _ca],
  [0, 0, [() => SensitiveError, 0], [() => SensitiveCause, 0]]
);
export var TaskSubmitFailedEventDetails = struct(
  n0,
  _TSFEDa,
  0,
  [_rT, _r, _e, _ca],
  [0, 0, [() => SensitiveError, 0], [() => SensitiveCause, 0]]
);
export var TaskSubmittedEventDetails = struct(
  n0,
  _TSEDas,
  0,
  [_rT, _r, _o, _oD],
  [0, 0, [() => SensitiveData, 0], () => HistoryEventExecutionDataDetails]
);
export var TaskSucceededEventDetails = struct(
  n0,
  _TSEDask,
  0,
  [_rT, _r, _o, _oD],
  [0, 0, [() => SensitiveData, 0], () => HistoryEventExecutionDataDetails]
);
export var TaskTimedOutEventDetails = struct(
  n0,
  _TTOED,
  0,
  [_rT, _r, _e, _ca],
  [0, 0, [() => SensitiveError, 0], [() => SensitiveCause, 0]]
);
export var HistoryEventList = list(n0, _HEL, 0, [() => HistoryEvent, 0]);
export var VariableNameList = list(n0, _VNL, 0, [() => VariableName, 0]);
export var AssignedVariables = map(n0, _AV, 0, [() => VariableName, 0], [() => VariableValue, 0]);
export var VariableReferences = map(n0, _VR, 8, [0, 0], [() => VariableNameList, 0]);
export var DescribeExecution = op(
  n0,
  _DE,
  0,
  () => DescribeExecutionInput,
  () => DescribeExecutionOutput
);
export var DescribeStateMachine = op(
  n0,
  _DSMe,
  0,
  () => DescribeStateMachineInput,
  () => DescribeStateMachineOutput
);
export var DescribeStateMachineForExecution = op(
  n0,
  _DSMFE,
  0,
  () => DescribeStateMachineForExecutionInput,
  () => DescribeStateMachineForExecutionOutput
);
export var GetActivityTask = op(
  n0,
  _GAT,
  0,
  () => GetActivityTaskInput,
  () => GetActivityTaskOutput
);
export var GetExecutionHistory = op(
  n0,
  _GEH,
  0,
  () => GetExecutionHistoryInput,
  () => GetExecutionHistoryOutput
);
export var SendTaskFailure = op(
  n0,
  _STF,
  0,
  () => SendTaskFailureInput,
  () => SendTaskFailureOutput
);
export var SendTaskSuccess = op(
  n0,
  _STS,
  0,
  () => SendTaskSuccessInput,
  () => SendTaskSuccessOutput
);
export var StartExecution = op(
  n0,
  _SEt,
  2,
  () => StartExecutionInput,
  () => StartExecutionOutput
);
export var StartSyncExecution = op(
  n0,
  _SSE,
  {
    [_end]: ["sync-"],
  },
  () => StartSyncExecutionInput,
  () => StartSyncExecutionOutput
);
export var StopExecution = op(
  n0,
  _SEto,
  0,
  () => StopExecutionInput,
  () => StopExecutionOutput
);
