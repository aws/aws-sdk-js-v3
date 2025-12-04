const _AT = "ActivityTask";
const _ATC = "ActivityTypeConfiguration";
const _ATCEA = "ActivityTaskCanceledEventAttributes";
const _ATCEAc = "ActivityTaskCompletedEventAttributes";
const _ATCREA = "ActivityTaskCancelRequestedEventAttributes";
const _ATD = "ActivityTypeDetail";
const _ATFEA = "ActivityTaskFailedEventAttributes";
const _ATI = "ActivityTypeInfo";
const _ATIL = "ActivityTypeInfoList";
const _ATIc = "ActivityTypeInfos";
const _ATS = "ActivityTaskStatus";
const _ATSEA = "ActivityTaskScheduledEventAttributes";
const _ATSEAc = "ActivityTaskStartedEventAttributes";
const _ATTOEA = "ActivityTaskTimedOutEventAttributes";
const _ATc = "ActivityType";
const _CANWEDA = "ContinueAsNewWorkflowExecutionDecisionAttributes";
const _CANWEFEA = "ContinueAsNewWorkflowExecutionFailedEventAttributes";
const _CCWE = "CountClosedWorkflowExecutions";
const _CCWEI = "CountClosedWorkflowExecutionsInput";
const _COWE = "CountOpenWorkflowExecutions";
const _COWEI = "CountOpenWorkflowExecutionsInput";
const _CPAT = "CountPendingActivityTasks";
const _CPATI = "CountPendingActivityTasksInput";
const _CPDT = "CountPendingDecisionTasks";
const _CPDTI = "CountPendingDecisionTasksInput";
const _CSF = "CloseStatusFilter";
const _CTDA = "CancelTimerDecisionAttributes";
const _CTFEA = "CancelTimerFailedEventAttributes";
const _CWECEA = "ChildWorkflowExecutionCanceledEventAttributes";
const _CWECEAh = "ChildWorkflowExecutionCompletedEventAttributes";
const _CWEDA = "CancelWorkflowExecutionDecisionAttributes";
const _CWEDAo = "CompleteWorkflowExecutionDecisionAttributes";
const _CWEFEA = "CancelWorkflowExecutionFailedEventAttributes";
const _CWEFEAh = "ChildWorkflowExecutionFailedEventAttributes";
const _CWEFEAo = "CompleteWorkflowExecutionFailedEventAttributes";
const _CWESEA = "ChildWorkflowExecutionStartedEventAttributes";
const _CWETEA = "ChildWorkflowExecutionTerminatedEventAttributes";
const _CWETOEA = "ChildWorkflowExecutionTimedOutEventAttributes";
const _D = "Decision";
const _DAEF = "DomainAlreadyExistsFault";
const _DAT = "DeleteActivityType";
const _DATI = "DeleteActivityTypeInput";
const _DATIe = "DeprecateActivityTypeInput";
const _DATIes = "DescribeActivityTypeInput";
const _DATe = "DeprecateActivityType";
const _DATes = "DescribeActivityType";
const _DC = "DomainConfiguration";
const _DD = "DomainDetail";
const _DDF = "DomainDeprecatedFault";
const _DDI = "DeprecateDomainInput";
const _DDIe = "DescribeDomainInput";
const _DDe = "DeprecateDomain";
const _DDes = "DescribeDomain";
const _DI = "DomainInfo";
const _DIL = "DomainInfoList";
const _DIo = "DomainInfos";
const _DL = "DecisionList";
const _DT = "DecisionTask";
const _DTCEA = "DecisionTaskCompletedEventAttributes";
const _DTSEA = "DecisionTaskScheduledEventAttributes";
const _DTSEAe = "DecisionTaskStartedEventAttributes";
const _DTTOEA = "DecisionTaskTimedOutEventAttributes";
const _DUF = "DefaultUndefinedFault";
const _DWE = "DescribeWorkflowExecution";
const _DWEI = "DescribeWorkflowExecutionInput";
const _DWT = "DeleteWorkflowType";
const _DWTI = "DeleteWorkflowTypeInput";
const _DWTIe = "DeprecateWorkflowTypeInput";
const _DWTIes = "DescribeWorkflowTypeInput";
const _DWTe = "DeprecateWorkflowType";
const _DWTes = "DescribeWorkflowType";
const _ETF = "ExecutionTimeFilter";
const _EWECREA = "ExternalWorkflowExecutionCancelRequestedEventAttributes";
const _EWESEA = "ExternalWorkflowExecutionSignaledEventAttributes";
const _FWEDA = "FailWorkflowExecutionDecisionAttributes";
const _FWEFEA = "FailWorkflowExecutionFailedEventAttributes";
const _GWEH = "GetWorkflowExecutionHistory";
const _GWEHI = "GetWorkflowExecutionHistoryInput";
const _H = "History";
const _HE = "HistoryEvent";
const _HEL = "HistoryEventList";
const _LAT = "ListActivityTypes";
const _LATI = "ListActivityTypesInput";
const _LCWE = "ListClosedWorkflowExecutions";
const _LCWEI = "ListClosedWorkflowExecutionsInput";
const _LD = "ListDomains";
const _LDI = "ListDomainsInput";
const _LEF = "LimitExceededFault";
const _LFCEA = "LambdaFunctionCompletedEventAttributes";
const _LFFEA = "LambdaFunctionFailedEventAttributes";
const _LFSEA = "LambdaFunctionScheduledEventAttributes";
const _LFSEAa = "LambdaFunctionStartedEventAttributes";
const _LFTOEA = "LambdaFunctionTimedOutEventAttributes";
const _LOWE = "ListOpenWorkflowExecutions";
const _LOWEI = "ListOpenWorkflowExecutionsInput";
const _LTFR = "ListTagsForResource";
const _LTFRI = "ListTagsForResourceInput";
const _LTFRO = "ListTagsForResourceOutput";
const _LWT = "ListWorkflowTypes";
const _LWTI = "ListWorkflowTypesInput";
const _MREA = "MarkerRecordedEventAttributes";
const _ONPF = "OperationNotPermittedFault";
const _PFAT = "PollForActivityTask";
const _PFATI = "PollForActivityTaskInput";
const _PFDT = "PollForDecisionTask";
const _PFDTI = "PollForDecisionTaskInput";
const _PTC = "PendingTaskCount";
const _R = "Run";
const _RAT = "RegisterActivityType";
const _RATC = "RespondActivityTaskCanceled";
const _RATCI = "RespondActivityTaskCanceledInput";
const _RATCIe = "RespondActivityTaskCompletedInput";
const _RATCe = "RespondActivityTaskCompleted";
const _RATF = "RespondActivityTaskFailed";
const _RATFI = "RespondActivityTaskFailedInput";
const _RATH = "RecordActivityTaskHeartbeat";
const _RATHI = "RecordActivityTaskHeartbeatInput";
const _RATI = "RegisterActivityTypeInput";
const _RCATDA = "RequestCancelActivityTaskDecisionAttributes";
const _RCATFEA = "RequestCancelActivityTaskFailedEventAttributes";
const _RCEWEDA = "RequestCancelExternalWorkflowExecutionDecisionAttributes";
const _RCEWEFEA = "RequestCancelExternalWorkflowExecutionFailedEventAttributes";
const _RCEWEIEA = "RequestCancelExternalWorkflowExecutionInitiatedEventAttributes";
const _RCWE = "RequestCancelWorkflowExecution";
const _RCWEI = "RequestCancelWorkflowExecutionInput";
const _RD = "RegisterDomain";
const _RDI = "RegisterDomainInput";
const _RDTC = "RespondDecisionTaskCompleted";
const _RDTCI = "RespondDecisionTaskCompletedInput";
const _RMDA = "RecordMarkerDecisionAttributes";
const _RMFEA = "RecordMarkerFailedEventAttributes";
const _RT = "ResourceTag";
const _RTL = "ResourceTagList";
const _RWT = "RegisterWorkflowType";
const _RWTI = "RegisterWorkflowTypeInput";
const _SATDA = "ScheduleActivityTaskDecisionAttributes";
const _SATFEA = "ScheduleActivityTaskFailedEventAttributes";
const _SCWEDA = "StartChildWorkflowExecutionDecisionAttributes";
const _SCWEFEA = "StartChildWorkflowExecutionFailedEventAttributes";
const _SCWEIEA = "StartChildWorkflowExecutionInitiatedEventAttributes";
const _SEWEDA = "SignalExternalWorkflowExecutionDecisionAttributes";
const _SEWEFEA = "SignalExternalWorkflowExecutionFailedEventAttributes";
const _SEWEIEA = "SignalExternalWorkflowExecutionInitiatedEventAttributes";
const _SLFDA = "ScheduleLambdaFunctionDecisionAttributes";
const _SLFFEA = "ScheduleLambdaFunctionFailedEventAttributes";
const _SLFFEAt = "StartLambdaFunctionFailedEventAttributes";
const _STDA = "StartTimerDecisionAttributes";
const _STFEA = "StartTimerFailedEventAttributes";
const _SWE = "SignalWorkflowExecution";
const _SWEI = "SignalWorkflowExecutionInput";
const _SWEIt = "StartWorkflowExecutionInput";
const _SWEt = "StartWorkflowExecution";
const _TAEF = "TypeAlreadyExistsFault";
const _TCEA = "TimerCanceledEventAttributes";
const _TDF = "TypeDeprecatedFault";
const _TF = "TagFilter";
const _TFEA = "TimerFiredEventAttributes";
const _TL = "TaskList";
const _TMTF = "TooManyTagsFault";
const _TNDF = "TypeNotDeprecatedFault";
const _TR = "TagResource";
const _TRI = "TagResourceInput";
const _TSEA = "TimerStartedEventAttributes";
const _TWE = "TerminateWorkflowExecution";
const _TWEI = "TerminateWorkflowExecutionInput";
const _UAT = "UndeprecateActivityType";
const _UATI = "UndeprecateActivityTypeInput";
const _UD = "UndeprecateDomain";
const _UDI = "UndeprecateDomainInput";
const _UR = "UntagResource";
const _URF = "UnknownResourceFault";
const _URI = "UntagResourceInput";
const _UWT = "UndeprecateWorkflowType";
const _UWTI = "UndeprecateWorkflowTypeInput";
const _WE = "WorkflowExecution";
const _WEASF = "WorkflowExecutionAlreadyStartedFault";
const _WEC = "WorkflowExecutionConfiguration";
const _WECANEA = "WorkflowExecutionContinuedAsNewEventAttributes";
const _WECEA = "WorkflowExecutionCanceledEventAttributes";
const _WECEAo = "WorkflowExecutionCompletedEventAttributes";
const _WECREA = "WorkflowExecutionCancelRequestedEventAttributes";
const _WECo = "WorkflowExecutionCount";
const _WED = "WorkflowExecutionDetail";
const _WEF = "WorkflowExecutionFilter";
const _WEFEA = "WorkflowExecutionFailedEventAttributes";
const _WEI = "WorkflowExecutionInfo";
const _WEIL = "WorkflowExecutionInfoList";
const _WEIo = "WorkflowExecutionInfos";
const _WEOC = "WorkflowExecutionOpenCounts";
const _WESEA = "WorkflowExecutionSignaledEventAttributes";
const _WESEAo = "WorkflowExecutionStartedEventAttributes";
const _WETEA = "WorkflowExecutionTerminatedEventAttributes";
const _WETOEA = "WorkflowExecutionTimedOutEventAttributes";
const _WT = "WorkflowType";
const _WTC = "WorkflowTypeConfiguration";
const _WTD = "WorkflowTypeDetail";
const _WTF = "WorkflowTypeFilter";
const _WTI = "WorkflowTypeInfo";
const _WTIL = "WorkflowTypeInfoList";
const _WTIo = "WorkflowTypeInfos";
const _a = "arn";
const _aI = "activityId";
const _aT = "activityType";
const _aTCEA = "activityTaskCompletedEventAttributes";
const _aTCEAc = "activityTaskCanceledEventAttributes";
const _aTCREA = "activityTaskCancelRequestedEventAttributes";
const _aTFEA = "activityTaskFailedEventAttributes";
const _aTSEA = "activityTaskScheduledEventAttributes";
const _aTSEAc = "activityTaskStartedEventAttributes";
const _aTTOEA = "activityTaskTimedOutEventAttributes";
const _c = "control";
const _cANWEDA = "continueAsNewWorkflowExecutionDecisionAttributes";
const _cANWEFEA = "continueAsNewWorkflowExecutionFailedEventAttributes";
const _cD = "creationDate";
const _cERI = "continuedExecutionRunId";
const _cP = "childPolicy";
const _cR = "cancelRequested";
const _cS = "closeStatus";
const _cSF = "closeStatusFilter";
const _cT = "closeTimestamp";
const _cTDA = "cancelTimerDecisionAttributes";
const _cTF = "closeTimeFilter";
const _cTFEA = "cancelTimerFailedEventAttributes";
const _cWECEA = "childWorkflowExecutionCompletedEventAttributes";
const _cWECEAh = "childWorkflowExecutionCanceledEventAttributes";
const _cWEDA = "completeWorkflowExecutionDecisionAttributes";
const _cWEDAa = "cancelWorkflowExecutionDecisionAttributes";
const _cWEFEA = "completeWorkflowExecutionFailedEventAttributes";
const _cWEFEAa = "cancelWorkflowExecutionFailedEventAttributes";
const _cWEFEAh = "childWorkflowExecutionFailedEventAttributes";
const _cWESEA = "childWorkflowExecutionStartedEventAttributes";
const _cWETEA = "childWorkflowExecutionTerminatedEventAttributes";
const _cWETOEA = "childWorkflowExecutionTimedOutEventAttributes";
const _ca = "cause";
const _cl = "client";
const _co = "configuration";
const _cou = "count";
const _d = "details";
const _dCP = "defaultChildPolicy";
const _dD = "deprecationDate";
const _dESTCT = "defaultExecutionStartToCloseTimeout";
const _dI = "domainInfo";
const _dIo = "domainInfos";
const _dLR = "defaultLambdaRole";
const _dT = "decisionType";
const _dTCEA = "decisionTaskCompletedEventAttributes";
const _dTCEI = "decisionTaskCompletedEventId";
const _dTHT = "defaultTaskHeartbeatTimeout";
const _dTL = "defaultTaskList";
const _dTP = "defaultTaskPriority";
const _dTSEA = "decisionTaskScheduledEventAttributes";
const _dTSEAe = "decisionTaskStartedEventAttributes";
const _dTSTCT = "defaultTaskStartToCloseTimeout";
const _dTSTCTe = "defaultTaskScheduleToCloseTimeout";
const _dTSTST = "defaultTaskScheduleToStartTimeout";
const _dTTOEA = "decisionTaskTimedOutEventAttributes";
const _de = "description";
const _dec = "decisions";
const _do = "domain";
const _e = "events";
const _eC = "executionContext";
const _eCx = "executionConfiguration";
const _eF = "executionFilter";
const _eI = "eventId";
const _eIEI = "externalInitiatedEventId";
const _eIx = "executionInfo";
const _eIxe = "executionInfos";
const _eS = "executionStatus";
const _eSTCT = "executionStartToCloseTimeout";
const _eT = "eventTimestamp";
const _eTv = "eventType";
const _eWE = "externalWorkflowExecution";
const _eWECREA = "externalWorkflowExecutionCancelRequestedEventAttributes";
const _eWESEA = "externalWorkflowExecutionSignaledEventAttributes";
const _er = "error";
const _ex = "execution";
const _fWEDA = "failWorkflowExecutionDecisionAttributes";
const _fWEFEA = "failWorkflowExecutionFailedEventAttributes";
const _hE = "httpError";
const _hT = "heartbeatTimeout";
const _i = "input";
const _iEI = "initiatedEventId";
const _id = "identity";
const _id_ = "id";
const _k = "key";
const _lATT = "latestActivityTaskTimestamp";
const _lCREI = "latestCancelRequestedEventId";
const _lD = "latestDate";
const _lEC = "latestExecutionContext";
const _lFCEA = "lambdaFunctionCompletedEventAttributes";
const _lFFEA = "lambdaFunctionFailedEventAttributes";
const _lFSEA = "lambdaFunctionScheduledEventAttributes";
const _lFSEAa = "lambdaFunctionStartedEventAttributes";
const _lFTOEA = "lambdaFunctionTimedOutEventAttributes";
const _lR = "lambdaRole";
const _m = "message";
const _mN = "markerName";
const _mPS = "maximumPageSize";
const _mREA = "markerRecordedEventAttributes";
const _n = "name";
const _nERI = "newExecutionRunId";
const _nPT = "nextPageToken";
const _oAT = "openActivityTasks";
const _oC = "openCounts";
const _oCWE = "openChildWorkflowExecutions";
const _oD = "oldestDate";
const _oDT = "openDecisionTasks";
const _oLF = "openLambdaFunctions";
const _oT = "openTimers";
const _p = "parent";
const _pIEI = "parentInitiatedEventId";
const _pSEI = "previousStartedEventId";
const _pWE = "parentWorkflowExecution";
const _r = "result";
const _rA = "resourceArn";
const _rCATDA = "requestCancelActivityTaskDecisionAttributes";
const _rCATFEA = "requestCancelActivityTaskFailedEventAttributes";
const _rCEWEDA = "requestCancelExternalWorkflowExecutionDecisionAttributes";
const _rCEWEFEA = "requestCancelExternalWorkflowExecutionFailedEventAttributes";
const _rCEWEIEA = "requestCancelExternalWorkflowExecutionInitiatedEventAttributes";
const _rI = "runId";
const _rMDA = "recordMarkerDecisionAttributes";
const _rMFEA = "recordMarkerFailedEventAttributes";
const _rO = "reverseOrder";
const _rS = "registrationStatus";
const _re = "reason";
const _s = "status";
const _sAPSE = "startAtPreviousStartedEvent";
const _sATDA = "scheduleActivityTaskDecisionAttributes";
const _sATFEA = "scheduleActivityTaskFailedEventAttributes";
const _sCWEDA = "startChildWorkflowExecutionDecisionAttributes";
const _sCWEFEA = "startChildWorkflowExecutionFailedEventAttributes";
const _sCWEIEA = "startChildWorkflowExecutionInitiatedEventAttributes";
const _sEI = "startedEventId";
const _sEIc = "scheduledEventId";
const _sEWEDA = "signalExternalWorkflowExecutionDecisionAttributes";
const _sEWEFEA = "signalExternalWorkflowExecutionFailedEventAttributes";
const _sEWEIEA = "signalExternalWorkflowExecutionInitiatedEventAttributes";
const _sLFDA = "scheduleLambdaFunctionDecisionAttributes";
const _sLFFEA = "scheduleLambdaFunctionFailedEventAttributes";
const _sLFFEAt = "startLambdaFunctionFailedEventAttributes";
const _sN = "signalName";
const _sT = "startTimestamp";
const _sTCT = "scheduleToCloseTimeout";
const _sTCTt = "startToCloseTimeout";
const _sTDA = "startTimerDecisionAttributes";
const _sTF = "startTimeFilter";
const _sTFEA = "startTimerFailedEventAttributes";
const _sTFT = "startToFireTimeout";
const _sTST = "scheduleToStartTimeout";
const _sm = "smithy.ts.sdk.synthetic.com.amazonaws.swf";
const _t = "tags";
const _tCEA = "timerCanceledEventAttributes";
const _tF = "typeFilter";
const _tFEA = "timerFiredEventAttributes";
const _tFa = "tagFilter";
const _tI = "typeInfo";
const _tIi = "timerId";
const _tIy = "typeInfos";
const _tK = "tagKeys";
const _tL = "taskList";
const _tLSTST = "taskListScheduleToStartTimeout";
const _tLa = "tagList";
const _tP = "taskPriority";
const _tSEA = "timerStartedEventAttributes";
const _tSTCT = "taskStartToCloseTimeout";
const _tT = "taskToken";
const _tTi = "timeoutType";
const _ta = "tag";
const _tr = "truncated";
const _v = "version";
const _va = "value";
const _wE = "workflowExecution";
const _wECANEA = "workflowExecutionContinuedAsNewEventAttributes";
const _wECEA = "workflowExecutionCompletedEventAttributes";
const _wECEAo = "workflowExecutionCanceledEventAttributes";
const _wECREA = "workflowExecutionCancelRequestedEventAttributes";
const _wEFEA = "workflowExecutionFailedEventAttributes";
const _wERPID = "workflowExecutionRetentionPeriodInDays";
const _wESEA = "workflowExecutionStartedEventAttributes";
const _wESEAo = "workflowExecutionSignaledEventAttributes";
const _wETEA = "workflowExecutionTerminatedEventAttributes";
const _wETOEA = "workflowExecutionTimedOutEventAttributes";
const _wI = "workflowId";
const _wT = "workflowType";
const _wTV = "workflowTypeVersion";
const n0 = "com.amazonaws.swf";

// smithy-typescript generated code
import { TypeRegistry } from "@smithy/core/schema";
import type { StaticErrorSchema, StaticListSchema, StaticOperationSchema, StaticStructureSchema } from "@smithy/types";

import {
  DefaultUndefinedFault as __DefaultUndefinedFault,
  DomainAlreadyExistsFault as __DomainAlreadyExistsFault,
  DomainDeprecatedFault as __DomainDeprecatedFault,
  LimitExceededFault as __LimitExceededFault,
  OperationNotPermittedFault as __OperationNotPermittedFault,
  TooManyTagsFault as __TooManyTagsFault,
  TypeAlreadyExistsFault as __TypeAlreadyExistsFault,
  TypeDeprecatedFault as __TypeDeprecatedFault,
  TypeNotDeprecatedFault as __TypeNotDeprecatedFault,
  UnknownResourceFault as __UnknownResourceFault,
  WorkflowExecutionAlreadyStartedFault as __WorkflowExecutionAlreadyStartedFault,
} from "../models/errors";
import { SWFServiceException as __SWFServiceException } from "../models/SWFServiceException";

/* eslint no-var: 0 */

export var ActivityTask: StaticStructureSchema = [
  3,
  n0,
  _AT,
  0,
  [_tT, _aI, _sEI, _wE, _aT, _i],
  [0, 0, 1, () => WorkflowExecution, () => ActivityType, 0],
];
export var ActivityTaskCanceledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _ATCEA,
  0,
  [_d, _sEIc, _sEI, _lCREI],
  [0, 1, 1, 1],
];
export var ActivityTaskCancelRequestedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _ATCREA,
  0,
  [_dTCEI, _aI],
  [1, 0],
];
export var ActivityTaskCompletedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _ATCEAc,
  0,
  [_r, _sEIc, _sEI],
  [0, 1, 1],
];
export var ActivityTaskFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _ATFEA,
  0,
  [_re, _d, _sEIc, _sEI],
  [0, 0, 1, 1],
];
export var ActivityTaskScheduledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _ATSEA,
  0,
  [_aT, _aI, _i, _c, _sTST, _sTCT, _sTCTt, _tL, _tP, _dTCEI, _hT],
  [() => ActivityType, 0, 0, 0, 0, 0, 0, () => TaskList, 0, 1, 0],
];
export var ActivityTaskStartedEventAttributes: StaticStructureSchema = [3, n0, _ATSEAc, 0, [_id, _sEIc], [0, 1]];
export var ActivityTaskStatus: StaticStructureSchema = [3, n0, _ATS, 0, [_cR], [2]];
export var ActivityTaskTimedOutEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _ATTOEA,
  0,
  [_tTi, _sEIc, _sEI, _d],
  [0, 1, 1, 0],
];
export var ActivityType: StaticStructureSchema = [3, n0, _ATc, 0, [_n, _v], [0, 0]];
export var ActivityTypeConfiguration: StaticStructureSchema = [
  3,
  n0,
  _ATC,
  0,
  [_dTSTCT, _dTHT, _dTL, _dTP, _dTSTST, _dTSTCTe],
  [0, 0, () => TaskList, 0, 0, 0],
];
export var ActivityTypeDetail: StaticStructureSchema = [
  3,
  n0,
  _ATD,
  0,
  [_tI, _co],
  [() => ActivityTypeInfo, () => ActivityTypeConfiguration],
];
export var ActivityTypeInfo: StaticStructureSchema = [
  3,
  n0,
  _ATI,
  0,
  [_aT, _s, _de, _cD, _dD],
  [() => ActivityType, 0, 0, 4, 4],
];
export var ActivityTypeInfos: StaticStructureSchema = [3, n0, _ATIc, 0, [_tIy, _nPT], [() => ActivityTypeInfoList, 0]];
export var CancelTimerDecisionAttributes: StaticStructureSchema = [3, n0, _CTDA, 0, [_tIi], [0]];
export var CancelTimerFailedEventAttributes: StaticStructureSchema = [3, n0, _CTFEA, 0, [_tIi, _ca, _dTCEI], [0, 0, 1]];
export var CancelWorkflowExecutionDecisionAttributes: StaticStructureSchema = [3, n0, _CWEDA, 0, [_d], [0]];
export var CancelWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWEFEA,
  0,
  [_ca, _dTCEI],
  [0, 1],
];
export var ChildWorkflowExecutionCanceledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWECEA,
  0,
  [_wE, _wT, _d, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 1, 1],
];
export var ChildWorkflowExecutionCompletedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWECEAh,
  0,
  [_wE, _wT, _r, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 1, 1],
];
export var ChildWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWEFEAh,
  0,
  [_wE, _wT, _re, _d, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 0, 1, 1],
];
export var ChildWorkflowExecutionStartedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWESEA,
  0,
  [_wE, _wT, _iEI],
  [() => WorkflowExecution, () => WorkflowType, 1],
];
export var ChildWorkflowExecutionTerminatedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWETEA,
  0,
  [_wE, _wT, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 1, 1],
];
export var ChildWorkflowExecutionTimedOutEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWETOEA,
  0,
  [_wE, _wT, _tTi, _iEI, _sEI],
  [() => WorkflowExecution, () => WorkflowType, 0, 1, 1],
];
export var CloseStatusFilter: StaticStructureSchema = [3, n0, _CSF, 0, [_s], [0]];
export var CompleteWorkflowExecutionDecisionAttributes: StaticStructureSchema = [3, n0, _CWEDAo, 0, [_r], [0]];
export var CompleteWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CWEFEAo,
  0,
  [_ca, _dTCEI],
  [0, 1],
];
export var ContinueAsNewWorkflowExecutionDecisionAttributes: StaticStructureSchema = [
  3,
  n0,
  _CANWEDA,
  0,
  [_i, _eSTCT, _tL, _tP, _tSTCT, _cP, _tLa, _wTV, _lR],
  [0, 0, () => TaskList, 0, 0, 0, 64 | 0, 0, 0],
];
export var ContinueAsNewWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _CANWEFEA,
  0,
  [_ca, _dTCEI],
  [0, 1],
];
export var CountClosedWorkflowExecutionsInput: StaticStructureSchema = [
  3,
  n0,
  _CCWEI,
  0,
  [_do, _sTF, _cTF, _eF, _tF, _tFa, _cSF],
  [
    0,
    () => ExecutionTimeFilter,
    () => ExecutionTimeFilter,
    () => WorkflowExecutionFilter,
    () => WorkflowTypeFilter,
    () => TagFilter,
    () => CloseStatusFilter,
  ],
];
export var CountOpenWorkflowExecutionsInput: StaticStructureSchema = [
  3,
  n0,
  _COWEI,
  0,
  [_do, _sTF, _tF, _tFa, _eF],
  [0, () => ExecutionTimeFilter, () => WorkflowTypeFilter, () => TagFilter, () => WorkflowExecutionFilter],
];
export var CountPendingActivityTasksInput: StaticStructureSchema = [3, n0, _CPATI, 0, [_do, _tL], [0, () => TaskList]];
export var CountPendingDecisionTasksInput: StaticStructureSchema = [3, n0, _CPDTI, 0, [_do, _tL], [0, () => TaskList]];
export var Decision: StaticStructureSchema = [
  3,
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
  ],
];
export var DecisionTask: StaticStructureSchema = [
  3,
  n0,
  _DT,
  0,
  [_tT, _sEI, _wE, _wT, _e, _nPT, _pSEI],
  [0, 1, () => WorkflowExecution, () => WorkflowType, () => HistoryEventList, 0, 1],
];
export var DecisionTaskCompletedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _DTCEA,
  0,
  [_eC, _sEIc, _sEI, _tL, _tLSTST],
  [0, 1, 1, () => TaskList, 0],
];
export var DecisionTaskScheduledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _DTSEA,
  0,
  [_tL, _tP, _sTCTt, _sTST],
  [() => TaskList, 0, 0, 0],
];
export var DecisionTaskStartedEventAttributes: StaticStructureSchema = [3, n0, _DTSEAe, 0, [_id, _sEIc], [0, 1]];
export var DecisionTaskTimedOutEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _DTTOEA,
  0,
  [_tTi, _sEIc, _sEI],
  [0, 1, 1],
];
export var DefaultUndefinedFault: StaticErrorSchema = [
  -3,
  n0,
  _DUF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DefaultUndefinedFault, __DefaultUndefinedFault);

export var DeleteActivityTypeInput: StaticStructureSchema = [3, n0, _DATI, 0, [_do, _aT], [0, () => ActivityType]];
export var DeleteWorkflowTypeInput: StaticStructureSchema = [3, n0, _DWTI, 0, [_do, _wT], [0, () => WorkflowType]];
export var DeprecateActivityTypeInput: StaticStructureSchema = [3, n0, _DATIe, 0, [_do, _aT], [0, () => ActivityType]];
export var DeprecateDomainInput: StaticStructureSchema = [3, n0, _DDI, 0, [_n], [0]];
export var DeprecateWorkflowTypeInput: StaticStructureSchema = [3, n0, _DWTIe, 0, [_do, _wT], [0, () => WorkflowType]];
export var DescribeActivityTypeInput: StaticStructureSchema = [3, n0, _DATIes, 0, [_do, _aT], [0, () => ActivityType]];
export var DescribeDomainInput: StaticStructureSchema = [3, n0, _DDIe, 0, [_n], [0]];
export var DescribeWorkflowExecutionInput: StaticStructureSchema = [
  3,
  n0,
  _DWEI,
  0,
  [_do, _ex],
  [0, () => WorkflowExecution],
];
export var DescribeWorkflowTypeInput: StaticStructureSchema = [3, n0, _DWTIes, 0, [_do, _wT], [0, () => WorkflowType]];
export var DomainAlreadyExistsFault: StaticErrorSchema = [
  -3,
  n0,
  _DAEF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DomainAlreadyExistsFault, __DomainAlreadyExistsFault);

export var DomainConfiguration: StaticStructureSchema = [3, n0, _DC, 0, [_wERPID], [0]];
export var DomainDeprecatedFault: StaticErrorSchema = [
  -3,
  n0,
  _DDF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(DomainDeprecatedFault, __DomainDeprecatedFault);

export var DomainDetail: StaticStructureSchema = [
  3,
  n0,
  _DD,
  0,
  [_dI, _co],
  [() => DomainInfo, () => DomainConfiguration],
];
export var DomainInfo: StaticStructureSchema = [3, n0, _DI, 0, [_n, _s, _de, _a], [0, 0, 0, 0]];
export var DomainInfos: StaticStructureSchema = [3, n0, _DIo, 0, [_dIo, _nPT], [() => DomainInfoList, 0]];
export var ExecutionTimeFilter: StaticStructureSchema = [3, n0, _ETF, 0, [_oD, _lD], [4, 4]];
export var ExternalWorkflowExecutionCancelRequestedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _EWECREA,
  0,
  [_wE, _iEI],
  [() => WorkflowExecution, 1],
];
export var ExternalWorkflowExecutionSignaledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _EWESEA,
  0,
  [_wE, _iEI],
  [() => WorkflowExecution, 1],
];
export var FailWorkflowExecutionDecisionAttributes: StaticStructureSchema = [3, n0, _FWEDA, 0, [_re, _d], [0, 0]];
export var FailWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _FWEFEA,
  0,
  [_ca, _dTCEI],
  [0, 1],
];
export var GetWorkflowExecutionHistoryInput: StaticStructureSchema = [
  3,
  n0,
  _GWEHI,
  0,
  [_do, _ex, _nPT, _mPS, _rO],
  [0, () => WorkflowExecution, 0, 1, 2],
];
export var History: StaticStructureSchema = [3, n0, _H, 0, [_e, _nPT], [() => HistoryEventList, 0]];
export var HistoryEvent: StaticStructureSchema = [
  3,
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
  ],
];
export var LambdaFunctionCompletedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _LFCEA,
  0,
  [_sEIc, _sEI, _r],
  [1, 1, 0],
];
export var LambdaFunctionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _LFFEA,
  0,
  [_sEIc, _sEI, _re, _d],
  [1, 1, 0, 0],
];
export var LambdaFunctionScheduledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _LFSEA,
  0,
  [_id_, _n, _c, _i, _sTCTt, _dTCEI],
  [0, 0, 0, 0, 0, 1],
];
export var LambdaFunctionStartedEventAttributes: StaticStructureSchema = [3, n0, _LFSEAa, 0, [_sEIc], [1]];
export var LambdaFunctionTimedOutEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _LFTOEA,
  0,
  [_sEIc, _sEI, _tTi],
  [1, 1, 0],
];
export var LimitExceededFault: StaticErrorSchema = [
  -3,
  n0,
  _LEF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(LimitExceededFault, __LimitExceededFault);

export var ListActivityTypesInput: StaticStructureSchema = [
  3,
  n0,
  _LATI,
  0,
  [_do, _n, _rS, _nPT, _mPS, _rO],
  [0, 0, 0, 0, 1, 2],
];
export var ListClosedWorkflowExecutionsInput: StaticStructureSchema = [
  3,
  n0,
  _LCWEI,
  0,
  [_do, _sTF, _cTF, _eF, _cSF, _tF, _tFa, _nPT, _mPS, _rO],
  [
    0,
    () => ExecutionTimeFilter,
    () => ExecutionTimeFilter,
    () => WorkflowExecutionFilter,
    () => CloseStatusFilter,
    () => WorkflowTypeFilter,
    () => TagFilter,
    0,
    1,
    2,
  ],
];
export var ListDomainsInput: StaticStructureSchema = [3, n0, _LDI, 0, [_nPT, _rS, _mPS, _rO], [0, 0, 1, 2]];
export var ListOpenWorkflowExecutionsInput: StaticStructureSchema = [
  3,
  n0,
  _LOWEI,
  0,
  [_do, _sTF, _tF, _tFa, _nPT, _mPS, _rO, _eF],
  [0, () => ExecutionTimeFilter, () => WorkflowTypeFilter, () => TagFilter, 0, 1, 2, () => WorkflowExecutionFilter],
];
export var ListTagsForResourceInput: StaticStructureSchema = [3, n0, _LTFRI, 0, [_rA], [0]];
export var ListTagsForResourceOutput: StaticStructureSchema = [3, n0, _LTFRO, 0, [_t], [() => ResourceTagList]];
export var ListWorkflowTypesInput: StaticStructureSchema = [
  3,
  n0,
  _LWTI,
  0,
  [_do, _n, _rS, _nPT, _mPS, _rO],
  [0, 0, 0, 0, 1, 2],
];
export var MarkerRecordedEventAttributes: StaticStructureSchema = [3, n0, _MREA, 0, [_mN, _d, _dTCEI], [0, 0, 1]];
export var OperationNotPermittedFault: StaticErrorSchema = [
  -3,
  n0,
  _ONPF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(OperationNotPermittedFault, __OperationNotPermittedFault);

export var PendingTaskCount: StaticStructureSchema = [3, n0, _PTC, 0, [_cou, _tr], [1, 2]];
export var PollForActivityTaskInput: StaticStructureSchema = [
  3,
  n0,
  _PFATI,
  0,
  [_do, _tL, _id],
  [0, () => TaskList, 0],
];
export var PollForDecisionTaskInput: StaticStructureSchema = [
  3,
  n0,
  _PFDTI,
  0,
  [_do, _tL, _id, _nPT, _mPS, _rO, _sAPSE],
  [0, () => TaskList, 0, 0, 1, 2, 2],
];
export var RecordActivityTaskHeartbeatInput: StaticStructureSchema = [3, n0, _RATHI, 0, [_tT, _d], [0, 0]];
export var RecordMarkerDecisionAttributes: StaticStructureSchema = [3, n0, _RMDA, 0, [_mN, _d], [0, 0]];
export var RecordMarkerFailedEventAttributes: StaticStructureSchema = [3, n0, _RMFEA, 0, [_mN, _ca, _dTCEI], [0, 0, 1]];
export var RegisterActivityTypeInput: StaticStructureSchema = [
  3,
  n0,
  _RATI,
  0,
  [_do, _n, _v, _de, _dTSTCT, _dTHT, _dTL, _dTP, _dTSTST, _dTSTCTe],
  [0, 0, 0, 0, 0, 0, () => TaskList, 0, 0, 0],
];
export var RegisterDomainInput: StaticStructureSchema = [
  3,
  n0,
  _RDI,
  0,
  [_n, _de, _wERPID, _t],
  [0, 0, 0, () => ResourceTagList],
];
export var RegisterWorkflowTypeInput: StaticStructureSchema = [
  3,
  n0,
  _RWTI,
  0,
  [_do, _n, _v, _de, _dTSTCT, _dESTCT, _dTL, _dTP, _dCP, _dLR],
  [0, 0, 0, 0, 0, 0, () => TaskList, 0, 0, 0],
];
export var RequestCancelActivityTaskDecisionAttributes: StaticStructureSchema = [3, n0, _RCATDA, 0, [_aI], [0]];
export var RequestCancelActivityTaskFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _RCATFEA,
  0,
  [_aI, _ca, _dTCEI],
  [0, 0, 1],
];
export var RequestCancelExternalWorkflowExecutionDecisionAttributes: StaticStructureSchema = [
  3,
  n0,
  _RCEWEDA,
  0,
  [_wI, _rI, _c],
  [0, 0, 0],
];
export var RequestCancelExternalWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _RCEWEFEA,
  0,
  [_wI, _rI, _ca, _iEI, _dTCEI, _c],
  [0, 0, 0, 1, 1, 0],
];
export var RequestCancelExternalWorkflowExecutionInitiatedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _RCEWEIEA,
  0,
  [_wI, _rI, _dTCEI, _c],
  [0, 0, 1, 0],
];
export var RequestCancelWorkflowExecutionInput: StaticStructureSchema = [3, n0, _RCWEI, 0, [_do, _wI, _rI], [0, 0, 0]];
export var ResourceTag: StaticStructureSchema = [3, n0, _RT, 0, [_k, _va], [0, 0]];
export var RespondActivityTaskCanceledInput: StaticStructureSchema = [3, n0, _RATCI, 0, [_tT, _d], [0, 0]];
export var RespondActivityTaskCompletedInput: StaticStructureSchema = [3, n0, _RATCIe, 0, [_tT, _r], [0, 0]];
export var RespondActivityTaskFailedInput: StaticStructureSchema = [3, n0, _RATFI, 0, [_tT, _re, _d], [0, 0, 0]];
export var RespondDecisionTaskCompletedInput: StaticStructureSchema = [
  3,
  n0,
  _RDTCI,
  0,
  [_tT, _dec, _eC, _tL, _tLSTST],
  [0, () => DecisionList, 0, () => TaskList, 0],
];
export var Run: StaticStructureSchema = [3, n0, _R, 0, [_rI], [0]];
export var ScheduleActivityTaskDecisionAttributes: StaticStructureSchema = [
  3,
  n0,
  _SATDA,
  0,
  [_aT, _aI, _c, _i, _sTCT, _tL, _tP, _sTST, _sTCTt, _hT],
  [() => ActivityType, 0, 0, 0, 0, () => TaskList, 0, 0, 0, 0],
];
export var ScheduleActivityTaskFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SATFEA,
  0,
  [_aT, _aI, _ca, _dTCEI],
  [() => ActivityType, 0, 0, 1],
];
export var ScheduleLambdaFunctionDecisionAttributes: StaticStructureSchema = [
  3,
  n0,
  _SLFDA,
  0,
  [_id_, _n, _c, _i, _sTCTt],
  [0, 0, 0, 0, 0],
];
export var ScheduleLambdaFunctionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SLFFEA,
  0,
  [_id_, _n, _ca, _dTCEI],
  [0, 0, 0, 1],
];
export var SignalExternalWorkflowExecutionDecisionAttributes: StaticStructureSchema = [
  3,
  n0,
  _SEWEDA,
  0,
  [_wI, _rI, _sN, _i, _c],
  [0, 0, 0, 0, 0],
];
export var SignalExternalWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SEWEFEA,
  0,
  [_wI, _rI, _ca, _iEI, _dTCEI, _c],
  [0, 0, 0, 1, 1, 0],
];
export var SignalExternalWorkflowExecutionInitiatedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SEWEIEA,
  0,
  [_wI, _rI, _sN, _i, _dTCEI, _c],
  [0, 0, 0, 0, 1, 0],
];
export var SignalWorkflowExecutionInput: StaticStructureSchema = [
  3,
  n0,
  _SWEI,
  0,
  [_do, _wI, _rI, _sN, _i],
  [0, 0, 0, 0, 0],
];
export var StartChildWorkflowExecutionDecisionAttributes: StaticStructureSchema = [
  3,
  n0,
  _SCWEDA,
  0,
  [_wT, _wI, _c, _i, _eSTCT, _tL, _tP, _tSTCT, _cP, _tLa, _lR],
  [() => WorkflowType, 0, 0, 0, 0, () => TaskList, 0, 0, 0, 64 | 0, 0],
];
export var StartChildWorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SCWEFEA,
  0,
  [_wT, _ca, _wI, _iEI, _dTCEI, _c],
  [() => WorkflowType, 0, 0, 1, 1, 0],
];
export var StartChildWorkflowExecutionInitiatedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SCWEIEA,
  0,
  [_wI, _wT, _c, _i, _eSTCT, _tL, _tP, _dTCEI, _cP, _tSTCT, _tLa, _lR],
  [0, () => WorkflowType, 0, 0, 0, () => TaskList, 0, 1, 0, 0, 64 | 0, 0],
];
export var StartLambdaFunctionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _SLFFEAt,
  0,
  [_sEIc, _ca, _m],
  [1, 0, 0],
];
export var StartTimerDecisionAttributes: StaticStructureSchema = [3, n0, _STDA, 0, [_tIi, _c, _sTFT], [0, 0, 0]];
export var StartTimerFailedEventAttributes: StaticStructureSchema = [3, n0, _STFEA, 0, [_tIi, _ca, _dTCEI], [0, 0, 1]];
export var StartWorkflowExecutionInput: StaticStructureSchema = [
  3,
  n0,
  _SWEIt,
  0,
  [_do, _wI, _wT, _tL, _tP, _i, _eSTCT, _tLa, _tSTCT, _cP, _lR],
  [0, 0, () => WorkflowType, () => TaskList, 0, 0, 0, 64 | 0, 0, 0, 0],
];
export var TagFilter: StaticStructureSchema = [3, n0, _TF, 0, [_ta], [0]];
export var TagResourceInput: StaticStructureSchema = [3, n0, _TRI, 0, [_rA, _t], [0, () => ResourceTagList]];
export var TaskList: StaticStructureSchema = [3, n0, _TL, 0, [_n], [0]];
export var TerminateWorkflowExecutionInput: StaticStructureSchema = [
  3,
  n0,
  _TWEI,
  0,
  [_do, _wI, _rI, _re, _d, _cP],
  [0, 0, 0, 0, 0, 0],
];
export var TimerCanceledEventAttributes: StaticStructureSchema = [3, n0, _TCEA, 0, [_tIi, _sEI, _dTCEI], [0, 1, 1]];
export var TimerFiredEventAttributes: StaticStructureSchema = [3, n0, _TFEA, 0, [_tIi, _sEI], [0, 1]];
export var TimerStartedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _TSEA,
  0,
  [_tIi, _c, _sTFT, _dTCEI],
  [0, 0, 0, 1],
];
export var TooManyTagsFault: StaticErrorSchema = [
  -3,
  n0,
  _TMTF,
  {
    [_er]: _cl,
    [_hE]: 400,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TooManyTagsFault, __TooManyTagsFault);

export var TypeAlreadyExistsFault: StaticErrorSchema = [
  -3,
  n0,
  _TAEF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TypeAlreadyExistsFault, __TypeAlreadyExistsFault);

export var TypeDeprecatedFault: StaticErrorSchema = [
  -3,
  n0,
  _TDF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TypeDeprecatedFault, __TypeDeprecatedFault);

export var TypeNotDeprecatedFault: StaticErrorSchema = [
  -3,
  n0,
  _TNDF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(TypeNotDeprecatedFault, __TypeNotDeprecatedFault);

export var UndeprecateActivityTypeInput: StaticStructureSchema = [3, n0, _UATI, 0, [_do, _aT], [0, () => ActivityType]];
export var UndeprecateDomainInput: StaticStructureSchema = [3, n0, _UDI, 0, [_n], [0]];
export var UndeprecateWorkflowTypeInput: StaticStructureSchema = [3, n0, _UWTI, 0, [_do, _wT], [0, () => WorkflowType]];
export var UnknownResourceFault: StaticErrorSchema = [
  -3,
  n0,
  _URF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(UnknownResourceFault, __UnknownResourceFault);

export var UntagResourceInput: StaticStructureSchema = [3, n0, _URI, 0, [_rA, _tK], [0, 64 | 0]];
export var WorkflowExecution: StaticStructureSchema = [3, n0, _WE, 0, [_wI, _rI], [0, 0]];
export var WorkflowExecutionAlreadyStartedFault: StaticErrorSchema = [
  -3,
  n0,
  _WEASF,
  {
    [_er]: _cl,
  },
  [_m],
  [0],
];
TypeRegistry.for(n0).registerError(WorkflowExecutionAlreadyStartedFault, __WorkflowExecutionAlreadyStartedFault);

export var WorkflowExecutionCanceledEventAttributes: StaticStructureSchema = [3, n0, _WECEA, 0, [_d, _dTCEI], [0, 1]];
export var WorkflowExecutionCancelRequestedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _WECREA,
  0,
  [_eWE, _eIEI, _ca],
  [() => WorkflowExecution, 1, 0],
];
export var WorkflowExecutionCompletedEventAttributes: StaticStructureSchema = [3, n0, _WECEAo, 0, [_r, _dTCEI], [0, 1]];
export var WorkflowExecutionConfiguration: StaticStructureSchema = [
  3,
  n0,
  _WEC,
  0,
  [_tSTCT, _eSTCT, _tL, _tP, _cP, _lR],
  [0, 0, () => TaskList, 0, 0, 0],
];
export var WorkflowExecutionContinuedAsNewEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _WECANEA,
  0,
  [_i, _dTCEI, _nERI, _eSTCT, _tL, _tP, _tSTCT, _cP, _tLa, _wT, _lR],
  [0, 1, 0, 0, () => TaskList, 0, 0, 0, 64 | 0, () => WorkflowType, 0],
];
export var WorkflowExecutionCount: StaticStructureSchema = [3, n0, _WECo, 0, [_cou, _tr], [1, 2]];
export var WorkflowExecutionDetail: StaticStructureSchema = [
  3,
  n0,
  _WED,
  0,
  [_eIx, _eCx, _oC, _lATT, _lEC],
  [() => WorkflowExecutionInfo, () => WorkflowExecutionConfiguration, () => WorkflowExecutionOpenCounts, 4, 0],
];
export var WorkflowExecutionFailedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _WEFEA,
  0,
  [_re, _d, _dTCEI],
  [0, 0, 1],
];
export var WorkflowExecutionFilter: StaticStructureSchema = [3, n0, _WEF, 0, [_wI], [0]];
export var WorkflowExecutionInfo: StaticStructureSchema = [
  3,
  n0,
  _WEI,
  0,
  [_ex, _wT, _sT, _cT, _eS, _cS, _p, _tLa, _cR],
  [() => WorkflowExecution, () => WorkflowType, 4, 4, 0, 0, () => WorkflowExecution, 64 | 0, 2],
];
export var WorkflowExecutionInfos: StaticStructureSchema = [
  3,
  n0,
  _WEIo,
  0,
  [_eIxe, _nPT],
  [() => WorkflowExecutionInfoList, 0],
];
export var WorkflowExecutionOpenCounts: StaticStructureSchema = [
  3,
  n0,
  _WEOC,
  0,
  [_oAT, _oDT, _oT, _oCWE, _oLF],
  [1, 1, 1, 1, 1],
];
export var WorkflowExecutionSignaledEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _WESEA,
  0,
  [_sN, _i, _eWE, _eIEI],
  [0, 0, () => WorkflowExecution, 1],
];
export var WorkflowExecutionStartedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _WESEAo,
  0,
  [_i, _eSTCT, _tSTCT, _cP, _tL, _tP, _wT, _tLa, _cERI, _pWE, _pIEI, _lR],
  [0, 0, 0, 0, () => TaskList, 0, () => WorkflowType, 64 | 0, 0, () => WorkflowExecution, 1, 0],
];
export var WorkflowExecutionTerminatedEventAttributes: StaticStructureSchema = [
  3,
  n0,
  _WETEA,
  0,
  [_re, _d, _cP, _ca],
  [0, 0, 0, 0],
];
export var WorkflowExecutionTimedOutEventAttributes: StaticStructureSchema = [3, n0, _WETOEA, 0, [_tTi, _cP], [0, 0]];
export var WorkflowType: StaticStructureSchema = [3, n0, _WT, 0, [_n, _v], [0, 0]];
export var WorkflowTypeConfiguration: StaticStructureSchema = [
  3,
  n0,
  _WTC,
  0,
  [_dTSTCT, _dESTCT, _dTL, _dTP, _dCP, _dLR],
  [0, 0, () => TaskList, 0, 0, 0],
];
export var WorkflowTypeDetail: StaticStructureSchema = [
  3,
  n0,
  _WTD,
  0,
  [_tI, _co],
  [() => WorkflowTypeInfo, () => WorkflowTypeConfiguration],
];
export var WorkflowTypeFilter: StaticStructureSchema = [3, n0, _WTF, 0, [_n, _v], [0, 0]];
export var WorkflowTypeInfo: StaticStructureSchema = [
  3,
  n0,
  _WTI,
  0,
  [_wT, _s, _de, _cD, _dD],
  [() => WorkflowType, 0, 0, 4, 4],
];
export var WorkflowTypeInfos: StaticStructureSchema = [3, n0, _WTIo, 0, [_tIy, _nPT], [() => WorkflowTypeInfoList, 0]];
export var __Unit = "unit" as const;

export var SWFServiceException: StaticErrorSchema = [-3, _sm, "SWFServiceException", 0, [], []];
TypeRegistry.for(_sm).registerError(SWFServiceException, __SWFServiceException);

export var ActivityTypeInfoList: StaticListSchema = [1, n0, _ATIL, 0, () => ActivityTypeInfo];
export var DecisionList: StaticListSchema = [1, n0, _DL, 0, () => Decision];
export var DomainInfoList: StaticListSchema = [1, n0, _DIL, 0, () => DomainInfo];
export var HistoryEventList: StaticListSchema = [1, n0, _HEL, 0, () => HistoryEvent];
export var ResourceTagKeyList = 64 | 0;

export var ResourceTagList: StaticListSchema = [1, n0, _RTL, 0, () => ResourceTag];
export var TagList = 64 | 0;

export var WorkflowExecutionInfoList: StaticListSchema = [1, n0, _WEIL, 0, () => WorkflowExecutionInfo];
export var WorkflowTypeInfoList: StaticListSchema = [1, n0, _WTIL, 0, () => WorkflowTypeInfo];
export var CountClosedWorkflowExecutions: StaticOperationSchema = [
  9,
  n0,
  _CCWE,
  0,
  () => CountClosedWorkflowExecutionsInput,
  () => WorkflowExecutionCount,
];
export var CountOpenWorkflowExecutions: StaticOperationSchema = [
  9,
  n0,
  _COWE,
  0,
  () => CountOpenWorkflowExecutionsInput,
  () => WorkflowExecutionCount,
];
export var CountPendingActivityTasks: StaticOperationSchema = [
  9,
  n0,
  _CPAT,
  0,
  () => CountPendingActivityTasksInput,
  () => PendingTaskCount,
];
export var CountPendingDecisionTasks: StaticOperationSchema = [
  9,
  n0,
  _CPDT,
  0,
  () => CountPendingDecisionTasksInput,
  () => PendingTaskCount,
];
export var DeleteActivityType: StaticOperationSchema = [9, n0, _DAT, 0, () => DeleteActivityTypeInput, () => __Unit];
export var DeleteWorkflowType: StaticOperationSchema = [9, n0, _DWT, 0, () => DeleteWorkflowTypeInput, () => __Unit];
export var DeprecateActivityType: StaticOperationSchema = [
  9,
  n0,
  _DATe,
  0,
  () => DeprecateActivityTypeInput,
  () => __Unit,
];
export var DeprecateDomain: StaticOperationSchema = [9, n0, _DDe, 0, () => DeprecateDomainInput, () => __Unit];
export var DeprecateWorkflowType: StaticOperationSchema = [
  9,
  n0,
  _DWTe,
  0,
  () => DeprecateWorkflowTypeInput,
  () => __Unit,
];
export var DescribeActivityType: StaticOperationSchema = [
  9,
  n0,
  _DATes,
  0,
  () => DescribeActivityTypeInput,
  () => ActivityTypeDetail,
];
export var DescribeDomain: StaticOperationSchema = [9, n0, _DDes, 0, () => DescribeDomainInput, () => DomainDetail];
export var DescribeWorkflowExecution: StaticOperationSchema = [
  9,
  n0,
  _DWE,
  0,
  () => DescribeWorkflowExecutionInput,
  () => WorkflowExecutionDetail,
];
export var DescribeWorkflowType: StaticOperationSchema = [
  9,
  n0,
  _DWTes,
  0,
  () => DescribeWorkflowTypeInput,
  () => WorkflowTypeDetail,
];
export var GetWorkflowExecutionHistory: StaticOperationSchema = [
  9,
  n0,
  _GWEH,
  0,
  () => GetWorkflowExecutionHistoryInput,
  () => History,
];
export var ListActivityTypes: StaticOperationSchema = [
  9,
  n0,
  _LAT,
  0,
  () => ListActivityTypesInput,
  () => ActivityTypeInfos,
];
export var ListClosedWorkflowExecutions: StaticOperationSchema = [
  9,
  n0,
  _LCWE,
  0,
  () => ListClosedWorkflowExecutionsInput,
  () => WorkflowExecutionInfos,
];
export var ListDomains: StaticOperationSchema = [9, n0, _LD, 0, () => ListDomainsInput, () => DomainInfos];
export var ListOpenWorkflowExecutions: StaticOperationSchema = [
  9,
  n0,
  _LOWE,
  0,
  () => ListOpenWorkflowExecutionsInput,
  () => WorkflowExecutionInfos,
];
export var ListTagsForResource: StaticOperationSchema = [
  9,
  n0,
  _LTFR,
  0,
  () => ListTagsForResourceInput,
  () => ListTagsForResourceOutput,
];
export var ListWorkflowTypes: StaticOperationSchema = [
  9,
  n0,
  _LWT,
  0,
  () => ListWorkflowTypesInput,
  () => WorkflowTypeInfos,
];
export var PollForActivityTask: StaticOperationSchema = [
  9,
  n0,
  _PFAT,
  0,
  () => PollForActivityTaskInput,
  () => ActivityTask,
];
export var PollForDecisionTask: StaticOperationSchema = [
  9,
  n0,
  _PFDT,
  0,
  () => PollForDecisionTaskInput,
  () => DecisionTask,
];
export var RecordActivityTaskHeartbeat: StaticOperationSchema = [
  9,
  n0,
  _RATH,
  0,
  () => RecordActivityTaskHeartbeatInput,
  () => ActivityTaskStatus,
];
export var RegisterActivityType: StaticOperationSchema = [
  9,
  n0,
  _RAT,
  0,
  () => RegisterActivityTypeInput,
  () => __Unit,
];
export var RegisterDomain: StaticOperationSchema = [9, n0, _RD, 0, () => RegisterDomainInput, () => __Unit];
export var RegisterWorkflowType: StaticOperationSchema = [
  9,
  n0,
  _RWT,
  0,
  () => RegisterWorkflowTypeInput,
  () => __Unit,
];
export var RequestCancelWorkflowExecution: StaticOperationSchema = [
  9,
  n0,
  _RCWE,
  0,
  () => RequestCancelWorkflowExecutionInput,
  () => __Unit,
];
export var RespondActivityTaskCanceled: StaticOperationSchema = [
  9,
  n0,
  _RATC,
  0,
  () => RespondActivityTaskCanceledInput,
  () => __Unit,
];
export var RespondActivityTaskCompleted: StaticOperationSchema = [
  9,
  n0,
  _RATCe,
  0,
  () => RespondActivityTaskCompletedInput,
  () => __Unit,
];
export var RespondActivityTaskFailed: StaticOperationSchema = [
  9,
  n0,
  _RATF,
  0,
  () => RespondActivityTaskFailedInput,
  () => __Unit,
];
export var RespondDecisionTaskCompleted: StaticOperationSchema = [
  9,
  n0,
  _RDTC,
  0,
  () => RespondDecisionTaskCompletedInput,
  () => __Unit,
];
export var SignalWorkflowExecution: StaticOperationSchema = [
  9,
  n0,
  _SWE,
  0,
  () => SignalWorkflowExecutionInput,
  () => __Unit,
];
export var StartWorkflowExecution: StaticOperationSchema = [
  9,
  n0,
  _SWEt,
  0,
  () => StartWorkflowExecutionInput,
  () => Run,
];
export var TagResource: StaticOperationSchema = [9, n0, _TR, 0, () => TagResourceInput, () => __Unit];
export var TerminateWorkflowExecution: StaticOperationSchema = [
  9,
  n0,
  _TWE,
  0,
  () => TerminateWorkflowExecutionInput,
  () => __Unit,
];
export var UndeprecateActivityType: StaticOperationSchema = [
  9,
  n0,
  _UAT,
  0,
  () => UndeprecateActivityTypeInput,
  () => __Unit,
];
export var UndeprecateDomain: StaticOperationSchema = [9, n0, _UD, 0, () => UndeprecateDomainInput, () => __Unit];
export var UndeprecateWorkflowType: StaticOperationSchema = [
  9,
  n0,
  _UWT,
  0,
  () => UndeprecateWorkflowTypeInput,
  () => __Unit,
];
export var UntagResource: StaticOperationSchema = [9, n0, _UR, 0, () => UntagResourceInput, () => __Unit];
