// smithy-typescript generated code
import { list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  _am,
  _aSPI,
  _aSPITA,
  _aSPITR,
  _aSS,
  _at,
  _att,
  _BGJE,
  _BGJEE,
  _BGJEL,
  _BGJER,
  _BGJERa,
  _bR,
  _cA,
  _ca,
  _cB,
  _CFr,
  _CFRre,
  _CFRrea,
  _CM,
  _CMR,
  _CMRr,
  _cod,
  _con,
  _CQ,
  _CQR,
  _CQRr,
  _cT,
  _dBA,
  _de,
  _dep,
  _dN,
  _Do,
  _dP,
  _eD,
  _EDE,
  _EDEn,
  _EDI,
  _eI,
  _en,
  _end,
  _er,
  _FACle,
  _FAClee,
  _FC,
  _fI,
  _fIl,
  _g,
  _GFe,
  _GFRet,
  _GFRetl,
  _GJEE,
  _GM,
  _GMR,
  _GMRe,
  _GQ,
  _GQR,
  _GQRe,
  _h,
  _hC,
  _hH,
  _hQ,
  _i,
  _iCAA,
  _iCIA,
  _iT,
  _jAD,
  _JADE,
  _JADEo,
  _JADI,
  _JAS,
  _jAS,
  _jD,
  _JDE,
  _JDEo,
  _JDI,
  _JE,
  _JEI,
  _JEIU,
  _jI,
  _JRAU,
  _jRAU,
  _lGN,
  _LM,
  _LMR,
  _LMRi,
  _me,
  _mI,
  _mon,
  _mR,
  _MS,
  _MSo,
  _mWC,
  _mWCa,
  _nT,
  _p,
  _pA,
  _PMR,
  _pMR,
  _PMRa,
  _po,
  _PU,
  _qI,
  _qRA,
  _rA,
  _rAu,
  _rFSLN,
  _rFSLNTA,
  _rFSLNTR,
  _rP,
  _sBN,
  _sD,
  _SDE,
  _SDEt,
  _SDI,
  _sI,
  _sM,
  _sPF,
  _sPo,
  _st,
  _su,
  _sV,
  _ta,
  _te,
  _tWC,
  _uA,
  _uB,
  _UFp,
  _UFRpd,
  _UFRpda,
  _UM,
  _UMR,
  _UMRp,
  _UQ,
  _UQR,
  _UQRp,
  _ur,
  _us,
  _w,
  _wCo,
  _wI,
  _WU,
  _XACT,
  Description,
  n0,
} from "./schemas_0";
import { JobParameters } from "./schemas_2_Get";
import { FleetAmountCapability, FleetAttributeCapability, FleetConfiguration } from "./schemas_3_Get";
import { Attachments } from "./schemas_15_Get";
import { HostConfiguration } from "./schemas_20_Fleet";

/* eslint no-var: 0 */

export var Document = sim(n0, _Do, 15, 8);
export var BatchGetJobEntityRequest = struct(
  n0,
  _BGJER,
  0,
  [_fI, _fIl, _wI, _i],
  [[0, 1], [0, 1], [0, 1], () => JobEntityIdentifiers]
);
export var BatchGetJobEntityResponse = struct(
  n0,
  _BGJERa,
  0,
  [_en, _er],
  [[() => BatchGetJobEntityList, 0], () => BatchGetJobEntityErrors]
);
export var CreateFleetRequest = struct(
  n0,
  _CFRre,
  0,
  [_cT, _fI, _dN, _de, _rA, _mWC, _mWCa, _con, _ta, _hC],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    0,
    [() => Description, 0],
    0,
    1,
    1,
    () => FleetConfiguration,
    128 | 0,
    [() => HostConfiguration, 0],
  ]
);
export var CreateFleetResponse = struct(n0, _CFRrea, 0, [_fIl], [0]);
export var CreateMonitorRequest = struct(
  n0,
  _CMR,
  0,
  [_cT, _dN, _iCIA, _su, _rA, _ta],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    0,
    0,
    0,
    128 | 0,
  ]
);
export var CreateMonitorResponse = struct(n0, _CMRr, 0, [_mI, _iCAA], [0, 0]);
export var CreateQueueRequest = struct(
  n0,
  _CQR,
  0,
  [_cT, _fI, _dN, _de, _dBA, _jAS, _rA, _jRAU, _rFSLN, _aSPI, _ta],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    0,
    [() => Description, 0],
    0,
    () => JobAttachmentSettings,
    0,
    () => JobRunAsUser,
    64 | 0,
    64 | 0,
    128 | 0,
  ]
);
export var CreateQueueResponse = struct(n0, _CQRr, 0, [_qI], [0]);
export var EnvironmentDetailsEntity = struct(n0, _EDE, 0, [_jI, _eI, _sV, _te], [0, 0, 0, [() => Document, 0]]);
export var EnvironmentDetailsError = struct(n0, _EDEn, 0, [_jI, _eI, _cod, _me], [0, 0, 0, 0]);
export var EnvironmentDetailsIdentifiers = struct(n0, _EDI, 0, [_jI, _eI], [0, 0]);
export var FleetCapabilities = struct(
  n0,
  _FC,
  0,
  [_am, _att],
  [() => FleetAmountCapabilities, () => FleetAttributeCapabilities]
);
export var GetFleetRequest = struct(
  n0,
  _GFRet,
  0,
  [_fI, _fIl],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetFleetResponse = struct(
  n0,
  _GFRetl,
  0,
  [_fIl, _fI, _dN, _de, _st, _sM, _aSS, _tWC, _wCo, _mWC, _mWCa, _con, _hC, _ca, _rA, _cA, _cB, _uA, _uB],
  [
    0,
    0,
    0,
    [() => Description, 0],
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    () => FleetConfiguration,
    [() => HostConfiguration, 0],
    () => FleetCapabilities,
    0,
    5,
    0,
    5,
    0,
  ]
);
export var GetMonitorRequest = struct(n0, _GMR, 0, [_mI], [[0, 1]]);
export var GetMonitorResponse = struct(
  n0,
  _GMRe,
  0,
  [_mI, _dN, _su, _ur, _rA, _iCIA, _iCAA, _cA, _cB, _uA, _uB],
  [0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0]
);
export var GetQueueRequest = struct(
  n0,
  _GQR,
  0,
  [_fI, _qI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetQueueResponse = struct(
  n0,
  _GQRe,
  0,
  [_qI, _dN, _de, _fI, _st, _dBA, _bR, _jAS, _rA, _rFSLN, _aSPI, _jRAU, _cA, _cB, _uA, _uB],
  [
    0,
    0,
    [() => Description, 0],
    0,
    0,
    0,
    0,
    () => JobAttachmentSettings,
    0,
    64 | 0,
    64 | 0,
    () => JobRunAsUser,
    5,
    0,
    5,
    0,
  ]
);
export var JobAttachmentDetailsEntity = struct(n0, _JADE, 0, [_jI, _at], [0, [() => Attachments, 0]]);
export var JobAttachmentDetailsError = struct(n0, _JADEo, 0, [_jI, _cod, _me], [0, 0, 0]);
export var JobAttachmentDetailsIdentifiers = struct(n0, _JADI, 0, [_jI], [0]);
export var JobAttachmentSettings = struct(n0, _JAS, 0, [_sBN, _rP], [0, 0]);
export var JobDetailsEntity = struct(
  n0,
  _JDE,
  0,
  [_jI, _jAS, _jRAU, _lGN, _qRA, _p, _sV, _pMR],
  [0, () => JobAttachmentSettings, () => JobRunAsUser, 0, 0, [() => JobParameters, 0], 0, [() => PathMappingRules, 0]]
);
export var JobDetailsError = struct(n0, _JDEo, 0, [_jI, _cod, _me], [0, 0, 0]);
export var JobDetailsIdentifiers = struct(n0, _JDI, 0, [_jI], [0]);
export var JobRunAsUser = struct(n0, _JRAU, 0, [_po, _w, _rAu], [() => PosixUser, () => WindowsUser, 0]);
export var ListMonitorsRequest = struct(
  n0,
  _LMR,
  0,
  [_nT, _mR],
  [
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
export var ListMonitorsResponse = struct(n0, _LMRi, 0, [_nT, _mon], [0, () => MonitorSummaries]);
export var MonitorSummary = struct(
  n0,
  _MS,
  0,
  [_mI, _dN, _su, _ur, _rA, _iCIA, _iCAA, _cA, _cB, _uA, _uB],
  [0, 0, 0, 0, 0, 0, 0, 5, 0, 5, 0]
);
export var PathMappingRule = struct(n0, _PMR, 8, [_sPF, _sPo, _dP], [0, 0, 0]);
export var PosixUser = struct(n0, _PU, 0, [_us, _g], [0, 0]);
export var StepDetailsEntity = struct(n0, _SDE, 0, [_jI, _sI, _sV, _te, _dep], [0, 0, 0, [() => Document, 0], 64 | 0]);
export var StepDetailsError = struct(n0, _SDEt, 0, [_jI, _sI, _cod, _me], [0, 0, 0, 0]);
export var StepDetailsIdentifiers = struct(n0, _SDI, 0, [_jI, _sI], [0, 0]);
export var UpdateFleetRequest = struct(
  n0,
  _UFRpd,
  0,
  [_cT, _fI, _fIl, _dN, _de, _rA, _mWC, _mWCa, _con, _hC],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    0,
    [() => Description, 0],
    0,
    1,
    1,
    () => FleetConfiguration,
    [() => HostConfiguration, 0],
  ]
);
export var UpdateFleetResponse = struct(n0, _UFRpda, 0, [], []);
export var UpdateMonitorRequest = struct(n0, _UMR, 0, [_mI, _su, _dN, _rA], [[0, 1], 0, 0, 0]);
export var UpdateMonitorResponse = struct(n0, _UMRp, 0, [], []);
export var UpdateQueueRequest = struct(
  n0,
  _UQR,
  0,
  [_cT, _fI, _qI, _dN, _de, _dBA, _jAS, _rA, _jRAU, _rFSLNTA, _rFSLNTR, _aSPITA, _aSPITR],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    [0, 1],
    [0, 1],
    0,
    [() => Description, 0],
    0,
    () => JobAttachmentSettings,
    0,
    () => JobRunAsUser,
    64 | 0,
    64 | 0,
    64 | 0,
    64 | 0,
  ]
);
export var UpdateQueueResponse = struct(n0, _UQRp, 0, [], []);
export var WindowsUser = struct(n0, _WU, 0, [_us, _pA], [0, 0]);
export var AllowedStorageProfileIds = 64 | 0;

export var BatchGetJobEntityErrors = list(n0, _BGJEE, 0, () => GetJobEntityError);
export var BatchGetJobEntityList = list(n0, _BGJEL, 0, [() => JobEntity, 0]);
export var DependenciesList = 64 | 0;

export var FleetAmountCapabilities = list(n0, _FACle, 0, () => FleetAmountCapability);
export var FleetAttributeCapabilities = list(n0, _FAClee, 0, () => FleetAttributeCapability);
export var JobEntityIdentifiers = list(n0, _JEI, 0, () => JobEntityIdentifiersUnion);
export var MonitorSummaries = list(n0, _MSo, 0, () => MonitorSummary);
export var PathMappingRules = list(n0, _PMRa, 0, [() => PathMappingRule, 0]);
export var RequiredFileSystemLocationNames = 64 | 0;

export var GetJobEntityError = uni(
  n0,
  _GJEE,
  0,
  [_jD, _jAD, _sD, _eD],
  [() => JobDetailsError, () => JobAttachmentDetailsError, () => StepDetailsError, () => EnvironmentDetailsError]
);
export var JobEntity = uni(
  n0,
  _JE,
  0,
  [_jD, _jAD, _sD, _eD],
  [
    [() => JobDetailsEntity, 0],
    [() => JobAttachmentDetailsEntity, 0],
    [() => StepDetailsEntity, 0],
    [() => EnvironmentDetailsEntity, 0],
  ]
);
export var JobEntityIdentifiersUnion = uni(
  n0,
  _JEIU,
  0,
  [_jD, _jAD, _sD, _eD],
  [
    () => JobDetailsIdentifiers,
    () => JobAttachmentDetailsIdentifiers,
    () => StepDetailsIdentifiers,
    () => EnvironmentDetailsIdentifiers,
  ]
);
export var BatchGetJobEntity = op(
  n0,
  _BGJE,
  {
    [_end]: ["scheduling."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/batchGetJobEntity", 200],
  },
  () => BatchGetJobEntityRequest,
  () => BatchGetJobEntityResponse
);
export var CreateFleet = op(
  n0,
  _CFr,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/fleets", 200],
  },
  () => CreateFleetRequest,
  () => CreateFleetResponse
);
export var CreateMonitor = op(
  n0,
  _CM,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/monitors", 200],
  },
  () => CreateMonitorRequest,
  () => CreateMonitorResponse
);
export var CreateQueue = op(
  n0,
  _CQ,
  {
    [_end]: ["management."],
    [_h]: ["POST", "/2023-10-12/farms/{farmId}/queues", 200],
  },
  () => CreateQueueRequest,
  () => CreateQueueResponse
);
export var GetFleet = op(
  n0,
  _GFe,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}", 200],
  },
  () => GetFleetRequest,
  () => GetFleetResponse
);
export var GetMonitor = op(
  n0,
  _GM,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/monitors/{monitorId}", 200],
  },
  () => GetMonitorRequest,
  () => GetMonitorResponse
);
export var GetQueue = op(
  n0,
  _GQ,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}", 200],
  },
  () => GetQueueRequest,
  () => GetQueueResponse
);
export var ListMonitors = op(
  n0,
  _LM,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/monitors", 200],
  },
  () => ListMonitorsRequest,
  () => ListMonitorsResponse
);
export var UpdateFleet = op(
  n0,
  _UFp,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/fleets/{fleetId}", 200],
    [_end]: ["management."],
  },
  () => UpdateFleetRequest,
  () => UpdateFleetResponse
);
export var UpdateMonitor = op(
  n0,
  _UM,
  {
    [_end]: ["management."],
    [_h]: ["PATCH", "/2023-10-12/monitors/{monitorId}", 200],
  },
  () => UpdateMonitorRequest,
  () => UpdateMonitorResponse
);
export var UpdateQueue = op(
  n0,
  _UQ,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queues/{queueId}", 200],
    [_end]: ["management."],
  },
  () => UpdateQueueRequest,
  () => UpdateQueueResponse
);
