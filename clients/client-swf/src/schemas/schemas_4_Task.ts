// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DefaultUndefinedFault as __DefaultUndefinedFault,
  WorkflowExecutionAlreadyStartedFault as __WorkflowExecutionAlreadyStartedFault,
} from "../models/index";
import {
  _aI,
  _AT,
  _aT,
  _ATCEA,
  _aTCEA,
  _ATCEAc,
  _aTCEAc,
  _ATCREA,
  _aTCREA,
  _ATFEA,
  _aTFEA,
  _ATSEA,
  _aTSEA,
  _ATSEAc,
  _aTSEAc,
  _ATTOEA,
  _aTTOEA,
  _c,
  _ca,
  _CANWEDA,
  _cANWEDA,
  _CANWEFEA,
  _cANWEFEA,
  _cERI,
  _cl,
  _cP,
  _CTDA,
  _cTDA,
  _CTFEA,
  _cTFEA,
  _CWECEA,
  _cWECEA,
  _CWECEAh,
  _cWECEAh,
  _CWEDA,
  _cWEDA,
  _cWEDAa,
  _CWEDAo,
  _CWEFEA,
  _cWEFEA,
  _cWEFEAa,
  _CWEFEAh,
  _cWEFEAh,
  _CWEFEAo,
  _CWESEA,
  _cWESEA,
  _CWETEA,
  _cWETEA,
  _CWETOEA,
  _cWETOEA,
  _D,
  _d,
  _dec,
  _DL,
  _do,
  _DT,
  _dT,
  _DTCEA,
  _dTCEA,
  _dTCEI,
  _DTSEA,
  _dTSEA,
  _DTSEAe,
  _dTSEAe,
  _DTTOEA,
  _dTTOEA,
  _DUF,
  _DWE,
  _DWEI,
  _e,
  _eC,
  _eCx,
  _eI,
  _eIEI,
  _eIx,
  _er,
  _eSTCT,
  _eT,
  _eTv,
  _eWE,
  _EWECREA,
  _eWECREA,
  _EWESEA,
  _eWESEA,
  _ex,
  _FWEDA,
  _fWEDA,
  _FWEFEA,
  _fWEFEA,
  _GWEH,
  _GWEHI,
  _H,
  _HE,
  _HEL,
  _hT,
  _i,
  _id,
  _id_,
  _iEI,
  _lATT,
  _lCREI,
  _lEC,
  _LFCEA,
  _lFCEA,
  _LFFEA,
  _lFFEA,
  _LFSEA,
  _lFSEA,
  _LFSEAa,
  _lFSEAa,
  _LFTOEA,
  _lFTOEA,
  _lR,
  _m,
  _mN,
  _mPS,
  _MREA,
  _mREA,
  _n,
  _nERI,
  _nPT,
  _oAT,
  _oC,
  _oCWE,
  _oDT,
  _oLF,
  _oT,
  _PFAT,
  _PFATI,
  _PFDT,
  _PFDTI,
  _pIEI,
  _pSEI,
  _pWE,
  _R,
  _r,
  _RATC,
  _RATCe,
  _RATCI,
  _RATCIe,
  _RATF,
  _RATFI,
  _RCATDA,
  _rCATDA,
  _RCATFEA,
  _rCATFEA,
  _RCEWEDA,
  _rCEWEDA,
  _RCEWEFEA,
  _rCEWEFEA,
  _RCEWEIEA,
  _rCEWEIEA,
  _RDTC,
  _RDTCI,
  _re,
  _rI,
  _RMDA,
  _rMDA,
  _RMFEA,
  _rMFEA,
  _rO,
  _sAPSE,
  _SATDA,
  _sATDA,
  _SATFEA,
  _sATFEA,
  _SCWEDA,
  _sCWEDA,
  _SCWEFEA,
  _sCWEFEA,
  _SCWEIEA,
  _sCWEIEA,
  _sEI,
  _sEIc,
  _SEWEDA,
  _sEWEDA,
  _SEWEFEA,
  _sEWEFEA,
  _SEWEIEA,
  _sEWEIEA,
  _SLFDA,
  _sLFDA,
  _SLFFEA,
  _sLFFEA,
  _SLFFEAt,
  _sLFFEAt,
  _sN,
  _sTCT,
  _sTCTt,
  _STDA,
  _sTDA,
  _STFEA,
  _sTFEA,
  _sTFT,
  _sTST,
  _SWE,
  _SWEI,
  _SWEIt,
  _SWEt,
  _TCEA,
  _tCEA,
  _TFEA,
  _tFEA,
  _tIi,
  _tL,
  _tLa,
  _tLSTST,
  _tP,
  _TSEA,
  _tSEA,
  _tSTCT,
  _tT,
  _tTi,
  _TWE,
  _TWEI,
  _wE,
  _WEASF,
  _WEC,
  _WECANEA,
  _wECANEA,
  _WECEA,
  _wECEA,
  _WECEAo,
  _wECEAo,
  _WECREA,
  _wECREA,
  _WED,
  _WEFEA,
  _wEFEA,
  _WEOC,
  _WESEA,
  _wESEA,
  _WESEAo,
  _wESEAo,
  _WETEA,
  _wETEA,
  _WETOEA,
  _wETOEA,
  _wI,
  _wT,
  _wTV,
  n0,
  Unit,
} from "./schemas_0";
import { WorkflowExecutionInfo } from "./schemas_3_Workflow";
import { ActivityType } from "./schemas_5_Activity";
import { WorkflowType } from "./schemas_7_Workflow";
import { WorkflowExecution } from "./schemas_19_Workflow";
import { TaskList } from "./schemas_20_Workflow";

/* eslint no-var: 0 */

export var ActivityTask = struct(
  n0,
  _AT,
  0,
  [_tT, _aI, _sEI, _wE, _aT, _i],
  [0, 0, 1, () => WorkflowExecution, () => ActivityType, 0]
);
export var ActivityTaskCanceledEventAttributes = struct(n0, _ATCEA, 0, [_d, _sEIc, _sEI, _lCREI], [0, 1, 1, 1]);
export var ActivityTaskCancelRequestedEventAttributes = struct(n0, _ATCREA, 0, [_dTCEI, _aI], [1, 0]);
export var ActivityTaskCompletedEventAttributes = struct(n0, _ATCEAc, 0, [_r, _sEIc, _sEI], [0, 1, 1]);
export var ActivityTaskFailedEventAttributes = struct(n0, _ATFEA, 0, [_re, _d, _sEIc, _sEI], [0, 0, 1, 1]);
export var ActivityTaskScheduledEventAttributes = struct(
  n0,
  _ATSEA,
  0,
  [_aT, _aI, _i, _c, _sTST, _sTCT, _sTCTt, _tL, _tP, _dTCEI, _hT],
  [() => ActivityType, 0, 0, 0, 0, 0, 0, () => TaskList, 0, 1, 0]
);
export var ActivityTaskStartedEventAttributes = struct(n0, _ATSEAc, 0, [_id, _sEIc], [0, 1]);
export var ActivityTaskTimedOutEventAttributes = struct(n0, _ATTOEA, 0, [_tTi, _sEIc, _sEI, _d], [0, 1, 1, 0]);
export var CancelTimerDecisionAttributes = struct(n0, _CTDA, 0, [_tIi], [0]);
export var CancelTimerFailedEventAttributes = struct(n0, _CTFEA, 0, [_tIi, _ca, _dTCEI], [0, 0, 1]);
export var CancelWorkflowExecutionDecisionAttributes = struct(n0, _CWEDA, 0, [_d], [0]);
export var CancelWorkflowExecutionFailedEventAttributes = struct(n0, _CWEFEA, 0, [_ca, _dTCEI], [0, 1]);
export var ChildWorkflowExecutionCanceledEventAttributes = struct(
  n0,
  _CWECEA,
  0,
  [_wE, _wT, _d, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 1, 1]
);
export var ChildWorkflowExecutionCompletedEventAttributes = struct(
  n0,
  _CWECEAh,
  0,
  [_wE, _wT, _r, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 1, 1]
);
export var ChildWorkflowExecutionFailedEventAttributes = struct(
  n0,
  _CWEFEAh,
  0,
  [_wE, _wT, _re, _d, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 0, 1, 1]
);
export var ChildWorkflowExecutionStartedEventAttributes = struct(
  n0,
  _CWESEA,
  0,
  [_wE, _wT, _iEI],
  [() => WorkflowExecution, () => WorkflowType, 1]
);
export var ChildWorkflowExecutionTerminatedEventAttributes = struct(
  n0,
  _CWETEA,
  0,
  [_wE, _wT, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 1, 1]
);
export var ChildWorkflowExecutionTimedOutEventAttributes = struct(
  n0,
  _CWETOEA,
  0,
  [_wE, _wT, _tTi, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 1, 1]
);
export var CompleteWorkflowExecutionDecisionAttributes = struct(n0, _CWEDAo, 0, [_r], [0]);
export var CompleteWorkflowExecutionFailedEventAttributes = struct(n0, _CWEFEAo, 0, [_ca, _dTCEI], [0, 1]);
export var ContinueAsNewWorkflowExecutionDecisionAttributes = struct(
  n0,
  _CANWEDA,
  0,
  [_i, _eSTCT, _tL, _tP, _tSTCT, _cP, _tLa, _wTV, _lR],
  [0, 0, () => TaskList, 0, 0, 0, 64 | 0, 0, 0]
);
export var ContinueAsNewWorkflowExecutionFailedEventAttributes = struct(n0, _CANWEFEA, 0, [_ca, _dTCEI], [0, 1]);
export var Decision = struct(
  n0,
  _D,
  0,
  [_dT, _sATDA, _rCATDA, _cWEDA, _fWEDA, _cWEDAa, _cANWEDA, _rMDA, _sTDA, _cTDA, _sEWEDA, _rCEWEDA, _sCWEDA, _sLFDA],
  [
    0,
    () => ScheduleActivityTaskDecisionAttributes,
    () => RequestCancelActivityTaskDecisionAttributes,
    () => CompleteWorkflowExecutionDecisionAttributes,
    () => FailWorkflowExecutionDecisionAttributes,
    () => CancelWorkflowExecutionDecisionAttributes,
    () => ContinueAsNewWorkflowExecutionDecisionAttributes,
    () => RecordMarkerDecisionAttributes,
    () => StartTimerDecisionAttributes,
    () => CancelTimerDecisionAttributes,
    () => SignalExternalWorkflowExecutionDecisionAttributes,
    () => RequestCancelExternalWorkflowExecutionDecisionAttributes,
    () => StartChildWorkflowExecutionDecisionAttributes,
    () => ScheduleLambdaFunctionDecisionAttributes,
  ]
);
export var DecisionTask = struct(
  n0,
  _DT,
  0,
  [_tT, _sEI, _wE, _wT, _e, _nPT, _pSEI],
  [0, 1, () => WorkflowExecution, () => WorkflowType, () => HistoryEventList, 0, 1]
);
export var DecisionTaskCompletedEventAttributes = struct(
  n0,
  _DTCEA,
  0,
  [_eC, _sEIc, _sEI, _tL, _tLSTST],
  [0, 1, 1, () => TaskList, 0]
);
export var DecisionTaskScheduledEventAttributes = struct(
  n0,
  _DTSEA,
  0,
  [_tL, _tP, _sTCTt, _sTST],
  [() => TaskList, 0, 0, 0]
);
export var DecisionTaskStartedEventAttributes = struct(n0, _DTSEAe, 0, [_id, _sEIc], [0, 1]);
export var DecisionTaskTimedOutEventAttributes = struct(n0, _DTTOEA, 0, [_tTi, _sEIc, _sEI], [0, 1, 1]);
export var DefaultUndefinedFault = error(
  n0,
  _DUF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __DefaultUndefinedFault
);
export var DescribeWorkflowExecutionInput = struct(n0, _DWEI, 0, [_do, _ex], [0, () => WorkflowExecution]);
export var ExternalWorkflowExecutionCancelRequestedEventAttributes = struct(
  n0,
  _EWECREA,
  0,
  [_wE, _iEI],
  [() => WorkflowExecution, 1]
);
export var ExternalWorkflowExecutionSignaledEventAttributes = struct(
  n0,
  _EWESEA,
  0,
  [_wE, _iEI],
  [() => WorkflowExecution, 1]
);
export var FailWorkflowExecutionDecisionAttributes = struct(n0, _FWEDA, 0, [_re, _d], [0, 0]);
export var FailWorkflowExecutionFailedEventAttributes = struct(n0, _FWEFEA, 0, [_ca, _dTCEI], [0, 1]);
export var GetWorkflowExecutionHistoryInput = struct(
  n0,
  _GWEHI,
  0,
  [_do, _ex, _nPT, _mPS, _rO],
  [0, () => WorkflowExecution, 0, 1, 2]
);
export var History = struct(n0, _H, 0, [_e, _nPT], [() => HistoryEventList, 0]);
export var HistoryEvent = struct(
  n0,
  _HE,
  0,
  [
    _eT,
    _eTv,
    _eI,
    _wESEA,
    _wECEA,
    _cWEFEA,
    _wEFEA,
    _fWEFEA,
    _wETOEA,
    _wECEAo,
    _cWEFEAa,
    _wECANEA,
    _cANWEFEA,
    _wETEA,
    _wECREA,
    _dTSEA,
    _dTSEAe,
    _dTCEA,
    _dTTOEA,
    _aTSEA,
    _aTSEAc,
    _aTCEA,
    _aTFEA,
    _aTTOEA,
    _aTCEAc,
    _aTCREA,
    _wESEAo,
    _mREA,
    _rMFEA,
    _tSEA,
    _tFEA,
    _tCEA,
    _sCWEIEA,
    _cWESEA,
    _cWECEA,
    _cWEFEAh,
    _cWETOEA,
    _cWECEAh,
    _cWETEA,
    _sEWEIEA,
    _eWESEA,
    _sEWEFEA,
    _eWECREA,
    _rCEWEIEA,
    _rCEWEFEA,
    _sATFEA,
    _rCATFEA,
    _sTFEA,
    _cTFEA,
    _sCWEFEA,
    _lFSEA,
    _lFSEAa,
    _lFCEA,
    _lFFEA,
    _lFTOEA,
    _sLFFEA,
    _sLFFEAt,
  ],
  [
    4,
    0,
    1,
    () => WorkflowExecutionStartedEventAttributes,
    () => WorkflowExecutionCompletedEventAttributes,
    () => CompleteWorkflowExecutionFailedEventAttributes,
    () => WorkflowExecutionFailedEventAttributes,
    () => FailWorkflowExecutionFailedEventAttributes,
    () => WorkflowExecutionTimedOutEventAttributes,
    () => WorkflowExecutionCanceledEventAttributes,
    () => CancelWorkflowExecutionFailedEventAttributes,
    () => WorkflowExecutionContinuedAsNewEventAttributes,
    () => ContinueAsNewWorkflowExecutionFailedEventAttributes,
    () => WorkflowExecutionTerminatedEventAttributes,
    () => WorkflowExecutionCancelRequestedEventAttributes,
    () => DecisionTaskScheduledEventAttributes,
    () => DecisionTaskStartedEventAttributes,
    () => DecisionTaskCompletedEventAttributes,
    () => DecisionTaskTimedOutEventAttributes,
    () => ActivityTaskScheduledEventAttributes,
    () => ActivityTaskStartedEventAttributes,
    () => ActivityTaskCompletedEventAttributes,
    () => ActivityTaskFailedEventAttributes,
    () => ActivityTaskTimedOutEventAttributes,
    () => ActivityTaskCanceledEventAttributes,
    () => ActivityTaskCancelRequestedEventAttributes,
    () => WorkflowExecutionSignaledEventAttributes,
    () => MarkerRecordedEventAttributes,
    () => RecordMarkerFailedEventAttributes,
    () => TimerStartedEventAttributes,
    () => TimerFiredEventAttributes,
    () => TimerCanceledEventAttributes,
    () => StartChildWorkflowExecutionInitiatedEventAttributes,
    () => ChildWorkflowExecutionStartedEventAttributes,
    () => ChildWorkflowExecutionCompletedEventAttributes,
    () => ChildWorkflowExecutionFailedEventAttributes,
    () => ChildWorkflowExecutionTimedOutEventAttributes,
    () => ChildWorkflowExecutionCanceledEventAttributes,
    () => ChildWorkflowExecutionTerminatedEventAttributes,
    () => SignalExternalWorkflowExecutionInitiatedEventAttributes,
    () => ExternalWorkflowExecutionSignaledEventAttributes,
    () => SignalExternalWorkflowExecutionFailedEventAttributes,
    () => ExternalWorkflowExecutionCancelRequestedEventAttributes,
    () => RequestCancelExternalWorkflowExecutionInitiatedEventAttributes,
    () => RequestCancelExternalWorkflowExecutionFailedEventAttributes,
    () => ScheduleActivityTaskFailedEventAttributes,
    () => RequestCancelActivityTaskFailedEventAttributes,
    () => StartTimerFailedEventAttributes,
    () => CancelTimerFailedEventAttributes,
    () => StartChildWorkflowExecutionFailedEventAttributes,
    () => LambdaFunctionScheduledEventAttributes,
    () => LambdaFunctionStartedEventAttributes,
    () => LambdaFunctionCompletedEventAttributes,
    () => LambdaFunctionFailedEventAttributes,
    () => LambdaFunctionTimedOutEventAttributes,
    () => ScheduleLambdaFunctionFailedEventAttributes,
    () => StartLambdaFunctionFailedEventAttributes,
  ]
);
export var LambdaFunctionCompletedEventAttributes = struct(n0, _LFCEA, 0, [_sEIc, _sEI, _r], [1, 1, 0]);
export var LambdaFunctionFailedEventAttributes = struct(n0, _LFFEA, 0, [_sEIc, _sEI, _re, _d], [1, 1, 0, 0]);
export var LambdaFunctionScheduledEventAttributes = struct(
  n0,
  _LFSEA,
  0,
  [_id_, _n, _c, _i, _sTCTt, _dTCEI],
  [0, 0, 0, 0, 0, 1]
);
export var LambdaFunctionStartedEventAttributes = struct(n0, _LFSEAa, 0, [_sEIc], [1]);
export var LambdaFunctionTimedOutEventAttributes = struct(n0, _LFTOEA, 0, [_sEIc, _sEI, _tTi], [1, 1, 0]);
export var MarkerRecordedEventAttributes = struct(n0, _MREA, 0, [_mN, _d, _dTCEI], [0, 0, 1]);
export var PollForActivityTaskInput = struct(n0, _PFATI, 0, [_do, _tL, _id], [0, () => TaskList, 0]);
export var PollForDecisionTaskInput = struct(
  n0,
  _PFDTI,
  0,
  [_do, _tL, _id, _nPT, _mPS, _rO, _sAPSE],
  [0, () => TaskList, 0, 0, 1, 2, 2]
);
export var RecordMarkerDecisionAttributes = struct(n0, _RMDA, 0, [_mN, _d], [0, 0]);
export var RecordMarkerFailedEventAttributes = struct(n0, _RMFEA, 0, [_mN, _ca, _dTCEI], [0, 0, 1]);
export var RequestCancelActivityTaskDecisionAttributes = struct(n0, _RCATDA, 0, [_aI], [0]);
export var RequestCancelActivityTaskFailedEventAttributes = struct(n0, _RCATFEA, 0, [_aI, _ca, _dTCEI], [0, 0, 1]);
export var RequestCancelExternalWorkflowExecutionDecisionAttributes = struct(
  n0,
  _RCEWEDA,
  0,
  [_wI, _rI, _c],
  [0, 0, 0]
);
export var RequestCancelExternalWorkflowExecutionFailedEventAttributes = struct(
  n0,
  _RCEWEFEA,
  0,
  [_wI, _rI, _ca, _iEI, _dTCEI, _c],
  [0, 0, 0, 1, 1, 0]
);
export var RequestCancelExternalWorkflowExecutionInitiatedEventAttributes = struct(
  n0,
  _RCEWEIEA,
  0,
  [_wI, _rI, _dTCEI, _c],
  [0, 0, 1, 0]
);
export var RespondActivityTaskCanceledInput = struct(n0, _RATCI, 0, [_tT, _d], [0, 0]);
export var RespondActivityTaskCompletedInput = struct(n0, _RATCIe, 0, [_tT, _r], [0, 0]);
export var RespondActivityTaskFailedInput = struct(n0, _RATFI, 0, [_tT, _re, _d], [0, 0, 0]);
export var RespondDecisionTaskCompletedInput = struct(
  n0,
  _RDTCI,
  0,
  [_tT, _dec, _eC, _tL, _tLSTST],
  [0, () => DecisionList, 0, () => TaskList, 0]
);
export var Run = struct(n0, _R, 0, [_rI], [0]);
export var ScheduleActivityTaskDecisionAttributes = struct(
  n0,
  _SATDA,
  0,
  [_aT, _aI, _c, _i, _sTCT, _tL, _tP, _sTST, _sTCTt, _hT],
  [() => ActivityType, 0, 0, 0, 0, () => TaskList, 0, 0, 0, 0]
);
export var ScheduleActivityTaskFailedEventAttributes = struct(
  n0,
  _SATFEA,
  0,
  [_aT, _aI, _ca, _dTCEI],
  [() => ActivityType, 0, 0, 1]
);
export var ScheduleLambdaFunctionDecisionAttributes = struct(
  n0,
  _SLFDA,
  0,
  [_id_, _n, _c, _i, _sTCTt],
  [0, 0, 0, 0, 0]
);
export var ScheduleLambdaFunctionFailedEventAttributes = struct(n0, _SLFFEA, 0, [_id_, _n, _ca, _dTCEI], [0, 0, 0, 1]);
export var SignalExternalWorkflowExecutionDecisionAttributes = struct(
  n0,
  _SEWEDA,
  0,
  [_wI, _rI, _sN, _i, _c],
  [0, 0, 0, 0, 0]
);
export var SignalExternalWorkflowExecutionFailedEventAttributes = struct(
  n0,
  _SEWEFEA,
  0,
  [_wI, _rI, _ca, _iEI, _dTCEI, _c],
  [0, 0, 0, 1, 1, 0]
);
export var SignalExternalWorkflowExecutionInitiatedEventAttributes = struct(
  n0,
  _SEWEIEA,
  0,
  [_wI, _rI, _sN, _i, _dTCEI, _c],
  [0, 0, 0, 0, 1, 0]
);
export var SignalWorkflowExecutionInput = struct(n0, _SWEI, 0, [_do, _wI, _rI, _sN, _i], [0, 0, 0, 0, 0]);
export var StartChildWorkflowExecutionDecisionAttributes = struct(
  n0,
  _SCWEDA,
  0,
  [_wT, _wI, _c, _i, _eSTCT, _tL, _tP, _tSTCT, _cP, _tLa, _lR],
  [() => WorkflowType, 0, 0, 0, 0, () => TaskList, 0, 0, 0, 64 | 0, 0]
);
export var StartChildWorkflowExecutionFailedEventAttributes = struct(
  n0,
  _SCWEFEA,
  0,
  [_wT, _ca, _wI, _iEI, _dTCEI, _c],
  [() => WorkflowType, 0, 0, 1, 1, 0]
);
export var StartChildWorkflowExecutionInitiatedEventAttributes = struct(
  n0,
  _SCWEIEA,
  0,
  [_wI, _wT, _c, _i, _eSTCT, _tL, _tP, _dTCEI, _cP, _tSTCT, _tLa, _lR],
  [0, () => WorkflowType, 0, 0, 0, () => TaskList, 0, 1, 0, 0, 64 | 0, 0]
);
export var StartLambdaFunctionFailedEventAttributes = struct(n0, _SLFFEAt, 0, [_sEIc, _ca, _m], [1, 0, 0]);
export var StartTimerDecisionAttributes = struct(n0, _STDA, 0, [_tIi, _c, _sTFT], [0, 0, 0]);
export var StartTimerFailedEventAttributes = struct(n0, _STFEA, 0, [_tIi, _ca, _dTCEI], [0, 0, 1]);
export var StartWorkflowExecutionInput = struct(
  n0,
  _SWEIt,
  0,
  [_do, _wI, _wT, _tL, _tP, _i, _eSTCT, _tLa, _tSTCT, _cP, _lR],
  [0, 0, () => WorkflowType, () => TaskList, 0, 0, 0, 64 | 0, 0, 0, 0]
);
export var TerminateWorkflowExecutionInput = struct(n0, _TWEI, 0, [_do, _wI, _rI, _re, _d, _cP], [0, 0, 0, 0, 0, 0]);
export var TimerCanceledEventAttributes = struct(n0, _TCEA, 0, [_tIi, _sEI, _dTCEI], [0, 1, 1]);
export var TimerFiredEventAttributes = struct(n0, _TFEA, 0, [_tIi, _sEI], [0, 1]);
export var TimerStartedEventAttributes = struct(n0, _TSEA, 0, [_tIi, _c, _sTFT, _dTCEI], [0, 0, 0, 1]);
export var WorkflowExecutionAlreadyStartedFault = error(
  n0,
  _WEASF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],

  __WorkflowExecutionAlreadyStartedFault
);
export var WorkflowExecutionCanceledEventAttributes = struct(n0, _WECEA, 0, [_d, _dTCEI], [0, 1]);
export var WorkflowExecutionCancelRequestedEventAttributes = struct(
  n0,
  _WECREA,
  0,
  [_eWE, _eIEI, _ca],
  [() => WorkflowExecution, 1, 0]
);
export var WorkflowExecutionCompletedEventAttributes = struct(n0, _WECEAo, 0, [_r, _dTCEI], [0, 1]);
export var WorkflowExecutionConfiguration = struct(
  n0,
  _WEC,
  0,
  [_tSTCT, _eSTCT, _tL, _tP, _cP, _lR],
  [0, 0, () => TaskList, 0, 0, 0]
);
export var WorkflowExecutionContinuedAsNewEventAttributes = struct(
  n0,
  _WECANEA,
  0,
  [_i, _dTCEI, _nERI, _eSTCT, _tL, _tP, _tSTCT, _cP, _tLa, _wT, _lR],
  [0, 1, 0, 0, () => TaskList, 0, 0, 0, 64 | 0, () => WorkflowType, 0]
);
export var WorkflowExecutionDetail = struct(
  n0,
  _WED,
  0,
  [_eIx, _eCx, _oC, _lATT, _lEC],
  [() => WorkflowExecutionInfo, () => WorkflowExecutionConfiguration, () => WorkflowExecutionOpenCounts, 4, 0]
);
export var WorkflowExecutionFailedEventAttributes = struct(n0, _WEFEA, 0, [_re, _d, _dTCEI], [0, 0, 1]);
export var WorkflowExecutionOpenCounts = struct(n0, _WEOC, 0, [_oAT, _oDT, _oT, _oCWE, _oLF], [1, 1, 1, 1, 1]);
export var WorkflowExecutionSignaledEventAttributes = struct(
  n0,
  _WESEA,
  0,
  [_sN, _i, _eWE, _eIEI],
  [0, 0, () => WorkflowExecution, 1]
);
export var WorkflowExecutionStartedEventAttributes = struct(
  n0,
  _WESEAo,
  0,
  [_i, _eSTCT, _tSTCT, _cP, _tL, _tP, _wT, _tLa, _cERI, _pWE, _pIEI, _lR],
  [0, 0, 0, 0, () => TaskList, 0, () => WorkflowType, 64 | 0, 0, () => WorkflowExecution, 1, 0]
);
export var WorkflowExecutionTerminatedEventAttributes = struct(n0, _WETEA, 0, [_re, _d, _cP, _ca], [0, 0, 0, 0]);
export var WorkflowExecutionTimedOutEventAttributes = struct(n0, _WETOEA, 0, [_tTi, _cP], [0, 0]);
export var DecisionList = list(n0, _DL, 0, () => Decision);
export var HistoryEventList = list(n0, _HEL, 0, () => HistoryEvent);
export var DescribeWorkflowExecution = op(
  n0,
  _DWE,
  0,
  () => DescribeWorkflowExecutionInput,
  () => WorkflowExecutionDetail
);
export var GetWorkflowExecutionHistory = op(
  n0,
  _GWEH,
  0,
  () => GetWorkflowExecutionHistoryInput,
  () => History
);
export var PollForActivityTask = op(
  n0,
  _PFAT,
  0,
  () => PollForActivityTaskInput,
  () => ActivityTask
);
export var PollForDecisionTask = op(
  n0,
  _PFDT,
  0,
  () => PollForDecisionTaskInput,
  () => DecisionTask
);
export var RespondActivityTaskCanceled = op(
  n0,
  _RATC,
  0,
  () => RespondActivityTaskCanceledInput,
  () => Unit
);
export var RespondActivityTaskCompleted = op(
  n0,
  _RATCe,
  0,
  () => RespondActivityTaskCompletedInput,
  () => Unit
);
export var RespondActivityTaskFailed = op(
  n0,
  _RATF,
  0,
  () => RespondActivityTaskFailedInput,
  () => Unit
);
export var RespondDecisionTaskCompleted = op(
  n0,
  _RDTC,
  0,
  () => RespondDecisionTaskCompletedInput,
  () => Unit
);
export var SignalWorkflowExecution = op(
  n0,
  _SWE,
  0,
  () => SignalWorkflowExecutionInput,
  () => Unit
);
export var StartWorkflowExecution = op(
  n0,
  _SWEt,
  0,
  () => StartWorkflowExecutionInput,
  () => Run
);
export var TerminateWorkflowExecution = op(
  n0,
  _TWE,
  0,
  () => TerminateWorkflowExecutionInput,
  () => Unit
);
