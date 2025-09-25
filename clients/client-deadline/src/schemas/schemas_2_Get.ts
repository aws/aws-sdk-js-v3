// smithy-typescript generated code
import { list, map, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _AEESAD,
  _AEESADs,
  _aS,
  _ASA,
  _ASAD,
  _ASAs,
  _ASIJASAD,
  _ASs,
  _ASss,
  _ATRSAD,
  _cA,
  _cB,
  _cI,
  _cS,
  _CSA,
  _cSA,
  _d,
  _dWS,
  _eA,
  _eE,
  _eEn,
  _EESADS,
  _EESADSn,
  _eI,
  _end,
  _fE,
  _fI,
  _fIl,
  _flo,
  _fRC,
  _GT,
  _GTR,
  _GTRe,
  _h,
  _hQ,
  _in,
  _iO,
  _j,
  _jI,
  _JP,
  _jP,
  _JPo,
  _JSS,
  _JSSo,
  _lC,
  _lS,
  _LSA,
  _lSAI,
  _LSAR,
  _LSARi,
  _lSM,
  _LT,
  _LTR,
  _LTRi,
  _man,
  _mFTC,
  _mR,
  _mRPT,
  _mWCa,
  _n,
  _nIO,
  _nT,
  _oMH,
  _oMP,
  _p,
  _pa,
  _pEC,
  _pM,
  _pP,
  _pr,
  _pSa,
  _qI,
  _qIu,
  _rS,
  _sA,
  _SADS,
  _sAI,
  _SAPM,
  _SAS,
  _SASe,
  _sAt,
  _sE,
  _sI,
  _sIe,
  _sIJA,
  _SIJASADS,
  _SJ,
  _sJI,
  _SJR,
  _SJRe,
  _st,
  _STe,
  _STR,
  _str,
  _STRe,
  _tas,
  _tFRC,
  _tI,
  _TP,
  _TPV,
  _tR,
  _tRa,
  _TRMPLR,
  _TRMPLRa,
  _TRMPR,
  _TRMPRa,
  _tRS,
  _tRSa,
  _TRSADS,
  _tRSC,
  _TS,
  _TSa,
  _TSS,
  _TSSa,
  _tTRS,
  _uA,
  _uB,
  _uIS,
  _USA,
  _uSA,
  _USAI,
  _UWS,
  _UWSR,
  _UWSRp,
  _wI,
  _wUA,
  n0,
} from "./schemas_0";
import { LogConfiguration } from "./schemas_4_Worker";
import { SearchGroupedFilterExpressions, SearchSortExpressions } from "./schemas_8_Search";

/* eslint no-var: 0 */

export var SessionActionProgressMessage = sim(n0, _SAPM, 0, 8);
export var AssignedEnvironmentEnterSessionActionDefinition = struct(n0, _AEESAD, 0, [_eI], [0]);
export var AssignedEnvironmentExitSessionActionDefinition = struct(n0, _AEESADs, 0, [_eI], [0]);
export var AssignedSession = struct(
  n0,
  _ASs,
  0,
  [_qI, _jI, _sA, _lC],
  [0, 0, [() => AssignedSessionActions, 0], () => LogConfiguration]
);
export var AssignedSessionAction = struct(n0, _ASA, 0, [_sAI, _d], [0, [() => AssignedSessionActionDefinition, 0]]);
export var AssignedSyncInputJobAttachmentsSessionActionDefinition = struct(n0, _ASIJASAD, 0, [_sI], [0]);
export var AssignedTaskRunSessionActionDefinition = struct(
  n0,
  _ATRSAD,
  0,
  [_tI, _sI, _p],
  [0, 0, [() => TaskParameters, 0]]
);
export var EnvironmentEnterSessionActionDefinitionSummary = struct(n0, _EESADS, 0, [_eI], [0]);
export var EnvironmentExitSessionActionDefinitionSummary = struct(n0, _EESADSn, 0, [_eI], [0]);
export var GetTaskRequest = struct(
  n0,
  _GTR,
  0,
  [_fI, _qI, _jI, _sI, _tI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetTaskResponse = struct(
  n0,
  _GTRe,
  0,
  [_tI, _cA, _cB, _rS, _tRSa, _fRC, _p, _sAt, _eA, _uA, _uB, _lSAI],
  [0, 5, 0, 0, 0, 1, [() => TaskParameters, 0], 5, 5, 5, 0, 0]
);
export var JobSearchSummary = struct(
  n0,
  _JSS,
  0,
  [
    _jI,
    _qI,
    _n,
    _lS,
    _lSM,
    _tRS,
    _tTRS,
    _tRSC,
    _tFRC,
    _pr,
    _mFTC,
    _mRPT,
    _cB,
    _cA,
    _eA,
    _sAt,
    _uA,
    _uB,
    _jP,
    _mWCa,
    _sJI,
  ],
  [0, 0, 0, 0, 0, 0, 0, 128 | 1, 1, 1, 1, 1, 0, 5, 5, 5, 5, 0, [() => JobParameters, 0], 1, 0]
);
export var ListSessionActionsRequest = struct(
  n0,
  _LSAR,
  0,
  [_fI, _qI, _jI, _sIe, _tI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _sIe,
      },
    ],
    [
      0,
      {
        [_hQ]: _tI,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListSessionActionsResponse = struct(n0, _LSARi, 0, [_sA, _nT], [[() => SessionActionSummaries, 0], 0]);
export var ListTasksRequest = struct(
  n0,
  _LTR,
  0,
  [_fI, _qI, _jI, _sI, _nT, _mR],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
  ]
);
export var ListTasksResponse = struct(n0, _LTRi, 0, [_tas, _nT], [[() => TaskSummaries, 0], 0]);
export var SearchJobsRequest = struct(
  n0,
  _SJR,
  0,
  [_fI, _qIu, _fE, _sE, _iO, _pSa],
  [[0, 1], 64 | 0, () => SearchGroupedFilterExpressions, () => SearchSortExpressions, 1, 1]
);
export var SearchJobsResponse = struct(n0, _SJRe, 0, [_j, _nIO, _tR], [[() => JobSearchSummaries, 0], 1, 1]);
export var SearchTasksRequest = struct(
  n0,
  _STR,
  0,
  [_fI, _qIu, _jI, _fE, _sE, _iO, _pSa],
  [[0, 1], 64 | 0, 0, () => SearchGroupedFilterExpressions, () => SearchSortExpressions, 1, 1]
);
export var SearchTasksResponse = struct(n0, _STRe, 0, [_tas, _nIO, _tR], [[() => TaskSearchSummaries, 0], 1, 1]);
export var SessionActionSummary = struct(
  n0,
  _SAS,
  0,
  [_sAI, _st, _sAt, _eA, _wUA, _pP, _d, _man],
  [0, 0, 5, 5, 5, 1, [() => SessionActionDefinitionSummary, 0], () => TaskRunManifestPropertiesListResponse]
);
export var SyncInputJobAttachmentsSessionActionDefinitionSummary = struct(n0, _SIJASADS, 0, [_sI], [0]);
export var TaskRunManifestPropertiesRequest = struct(n0, _TRMPR, 0, [_oMP, _oMH], [0, 0]);
export var TaskRunManifestPropertiesResponse = struct(n0, _TRMPRa, 0, [_oMP, _oMH], [0, 0]);
export var TaskRunSessionActionDefinitionSummary = struct(
  n0,
  _TRSADS,
  0,
  [_tI, _sI, _p],
  [0, 0, [() => TaskParameters, 0]]
);
export var TaskSearchSummary = struct(
  n0,
  _TSS,
  0,
  [_tI, _sI, _jI, _qI, _rS, _tRSa, _p, _fRC, _sAt, _eA, _uA, _uB],
  [0, 0, 0, 0, 0, 0, [() => TaskParameters, 0], 1, 5, 5, 5, 0]
);
export var TaskSummary = struct(
  n0,
  _TS,
  0,
  [_tI, _cA, _cB, _rS, _tRSa, _fRC, _p, _sAt, _eA, _uA, _uB, _lSAI],
  [0, 5, 0, 0, 0, 1, [() => TaskParameters, 0], 5, 5, 5, 0, 0]
);
export var UpdatedSessionActionInfo = struct(
  n0,
  _USAI,
  0,
  [_cS, _pEC, _pM, _sAt, _eA, _uA, _pP, _man],
  [0, 1, [() => SessionActionProgressMessage, 0], 5, 5, 5, 1, () => TaskRunManifestPropertiesListRequest]
);
export var UpdateWorkerScheduleRequest = struct(
  n0,
  _UWSR,
  0,
  [_fI, _fIl, _wI, _uSA],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [() => UpdatedSessionActions, 0],
  ]
);
export var UpdateWorkerScheduleResponse = struct(
  n0,
  _UWSRp,
  0,
  [_aS, _cSA, _dWS, _uIS],
  [[() => AssignedSessions, 0], map(n0, _CSA, 0, 0, 64 | 0), 0, 1]
);
export var AssignedSessionActions = list(n0, _ASAs, 0, [() => AssignedSessionAction, 0]);
export var JobSearchSummaries = list(n0, _JSSo, 0, [() => JobSearchSummary, 0]);
export var SessionActionIdList = 64 | 0;

export var SessionActionSummaries = list(n0, _SASe, 0, [() => SessionActionSummary, 0]);
export var TaskRunManifestPropertiesListRequest = list(n0, _TRMPLR, 0, () => TaskRunManifestPropertiesRequest);
export var TaskRunManifestPropertiesListResponse = list(n0, _TRMPLRa, 0, () => TaskRunManifestPropertiesResponse);
export var TaskSearchSummaries = list(n0, _TSSa, 0, [() => TaskSearchSummary, 0]);
export var TaskSummaries = list(n0, _TSa, 0, [() => TaskSummary, 0]);
export var AssignedSessions = map(n0, _ASss, 0, [0, 0], [() => AssignedSession, 0]);
export var CancelSessionActions = map(n0, _CSA, 0, 0, 64 | 0);
export var JobParameters = map(n0, _JP, 8, 0, () => JobParameter);
export var TaskParameters = map(n0, _TP, 8, [0, 0], [() => TaskParameterValue, 0]);
export var UpdatedSessionActions = map(n0, _USA, 0, [0, 0], [() => UpdatedSessionActionInfo, 0]);
export var AssignedSessionActionDefinition = uni(
  n0,
  _ASAD,
  0,
  [_eE, _eEn, _tRa, _sIJA],
  [
    () => AssignedEnvironmentEnterSessionActionDefinition,
    () => AssignedEnvironmentExitSessionActionDefinition,
    [() => AssignedTaskRunSessionActionDefinition, 0],
    () => AssignedSyncInputJobAttachmentsSessionActionDefinition,
  ]
);
export var JobParameter = uni(n0, _JPo, 0, [_in, _flo, _str, _pa], [0, 0, 0, 0]);
export var SessionActionDefinitionSummary = uni(
  n0,
  _SADS,
  0,
  [_eE, _eEn, _tRa, _sIJA],
  [
    () => EnvironmentEnterSessionActionDefinitionSummary,
    () => EnvironmentExitSessionActionDefinitionSummary,
    [() => TaskRunSessionActionDefinitionSummary, 0],
    () => SyncInputJobAttachmentsSessionActionDefinitionSummary,
  ]
);
export var TaskParameterValue = uni(n0, _TPV, 8, [_in, _flo, _str, _pa, _cI], [0, 0, 0, 0, 0]);
export var GetTask = op(
  n0,
  _GT,
  {
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks/{taskId}", 200],
    [_end]: ["management."],
  },
  () => GetTaskRequest,
  () => GetTaskResponse
);
export var ListSessionActions = op(
  n0,
  _LSA,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/session-actions", 200],
  },
  () => ListSessionActionsRequest,
  () => ListSessionActionsResponse
);
export var ListTasks = op(
  n0,
  _LT,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/steps/{stepId}/tasks", 200],
  },
  () => ListTasksRequest,
  () => ListTasksResponse
);
export var SearchJobs = op(
  n0,
  _SJ,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/search/jobs", 200],
  },
  () => SearchJobsRequest,
  () => SearchJobsResponse
);
export var SearchTasks = op(
  n0,
  _STe,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/search/tasks", 200],
  },
  () => SearchTasksRequest,
  () => SearchTasksResponse
);
export var UpdateWorkerSchedule = op(
  n0,
  _UWS,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/schedule", 200],
    [_end]: ["scheduling."],
  },
  () => UpdateWorkerScheduleRequest,
  () => UpdateWorkerScheduleResponse
);
