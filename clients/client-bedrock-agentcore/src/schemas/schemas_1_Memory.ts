// smithy-typescript generated code
import { error, list, op, sim, struct, struct as uni } from "@smithy/core/schema";

import {
  InvalidInputException as __InvalidInputException,
  ServiceException as __ServiceException,
  ThrottledException as __ThrottledException,
} from "../models/index";
import {
  _aI,
  _AS,
  _aSc,
  _ASL,
  _b,
  _BF,
  _bl,
  _Br,
  _C,
  _c,
  _cA,
  _CEI,
  _CEO,
  _CEr,
  _Co,
  _co,
  _con,
  _cT,
  _DE,
  _DEI,
  _DEO,
  _DMR,
  _DMRI,
  _DMRO,
  _E,
  _e,
  _eI,
  _EL,
  _eT,
  _ev,
  _eve,
  _f,
  _FI,
  _GE,
  _GEI,
  _GEO,
  _GMR,
  _GMRI,
  _GMRO,
  _hE,
  _ht,
  _IIE,
  _iP,
  _iPB,
  _LA,
  _LAI,
  _LAO,
  _LE,
  _LEI,
  _LEO,
  _LMR,
  _LMRI,
  _LMRO,
  _LS,
  _LSI,
  _LSO,
  _m,
  _MC,
  _mI,
  _MR,
  _mR,
  _mRa,
  _mRI,
  _MRS,
  _mRS,
  _MRSL,
  _mSIe,
  _n,
  _na,
  _nam,
  _nT,
  _p,
  _PT,
  _PTL,
  _rEI,
  _RMR,
  _RMRI,
  _RMRO,
  _ro,
  _SC,
  _sCe,
  _sco,
  _SE,
  _ser,
  _sI,
  _sQ,
  _SS,
  _SSe,
  _sSe,
  _SSL,
  _TE,
  _te,
  _tK,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var SensitiveString = sim(n0, _SS, 0, 8);
export var ActorSummary = struct(n0, _AS, 0, [_aI], [0]);
export var Branch = struct(n0, _Br, 0, [_rEI, _n], [0, 0]);
export var BranchFilter = struct(n0, _BF, 0, [_n, _iPB], [0, 2]);
export var Conversational = struct(n0, _C, 0, [_co, _ro], [[() => Content, 0], 0]);
export var CreateEventInput = struct(
  n0,
  _CEI,
  0,
  [_mI, _aI, _sI, _eT, _p, _b, _cT],
  [[0, 1], 0, 0, 4, [() => PayloadTypeList, 0], () => Branch, [0, 4]]
);
export var CreateEventOutput = struct(n0, _CEO, 0, [_ev], [[() => Event, 0]]);
export var DeleteEventInput = struct(
  n0,
  _DEI,
  0,
  [_mI, _sI, _eI, _aI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var DeleteEventOutput = struct(n0, _DEO, 0, [_eI], [0]);
export var DeleteMemoryRecordInput = struct(
  n0,
  _DMRI,
  0,
  [_mI, _mRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var DeleteMemoryRecordOutput = struct(n0, _DMRO, 0, [_mRI], [0]);
export var Event = struct(
  n0,
  _E,
  0,
  [_mI, _aI, _sI, _eI, _eT, _p, _b],
  [0, 0, 0, 0, 4, [() => PayloadTypeList, 0], () => Branch]
);
export var FilterInput = struct(n0, _FI, 0, [_b], [() => BranchFilter]);
export var GetEventInput = struct(
  n0,
  _GEI,
  0,
  [_mI, _sI, _aI, _eI],
  [
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var GetEventOutput = struct(n0, _GEO, 0, [_ev], [[() => Event, 0]]);
export var GetMemoryRecordInput = struct(
  n0,
  _GMRI,
  0,
  [_mI, _mRI],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetMemoryRecordOutput = struct(n0, _GMRO, 0, [_mR], [[() => MemoryRecord, 0]]);
export var InvalidInputException = error(
  n0,
  _IIE,
  {
    [_e]: _c,
    [_hE]: 400,
  },
  [_m],
  [0],

  __InvalidInputException
);
export var ListActorsInput = struct(n0, _LAI, 0, [_mI, _mRa, _nT], [[0, 1], 1, 0]);
export var ListActorsOutput = struct(n0, _LAO, 0, [_aSc, _nT], [() => ActorSummaryList, 0]);
export var ListEventsInput = struct(
  n0,
  _LEI,
  0,
  [_mI, _sI, _aI, _iP, _f, _mRa, _nT],
  [[0, 1], [0, 1], [0, 1], 2, () => FilterInput, 1, 0]
);
export var ListEventsOutput = struct(n0, _LEO, 0, [_eve, _nT], [[() => EventList, 0], 0]);
export var ListMemoryRecordsInput = struct(n0, _LMRI, 0, [_mI, _na, _mSIe, _mRa, _nT], [[0, 1], 0, 0, 1, 0]);
export var ListMemoryRecordsOutput = struct(n0, _LMRO, 0, [_mRS, _nT], [[() => MemoryRecordSummaryList, 0], 0]);
export var ListSessionsInput = struct(n0, _LSI, 0, [_mI, _aI, _mRa, _nT], [[0, 1], [0, 1], 1, 0]);
export var ListSessionsOutput = struct(n0, _LSO, 0, [_sSe, _nT], [() => SessionSummaryList, 0]);
export var MemoryRecord = struct(
  n0,
  _MR,
  0,
  [_mRI, _co, _mSIe, _nam, _cA],
  [0, [() => MemoryContent, 0], 0, 64 | 0, 4]
);
export var MemoryRecordSummary = struct(
  n0,
  _MRS,
  0,
  [_mRI, _co, _mSIe, _nam, _cA, _sco],
  [0, [() => MemoryContent, 0], 0, 64 | 0, 4, 1]
);
export var RetrieveMemoryRecordsInput = struct(
  n0,
  _RMRI,
  0,
  [_mI, _na, _sCe, _nT, _mRa],
  [[0, 1], 0, [() => SearchCriteria, 0], 0, 1]
);
export var RetrieveMemoryRecordsOutput = struct(n0, _RMRO, 0, [_mRS, _nT], [[() => MemoryRecordSummaryList, 0], 0]);
export var SearchCriteria = struct(n0, _SC, 0, [_sQ, _mSIe, _tK], [[() => SensitiveString, 0], 0, 1]);
export var ServiceException = error(
  n0,
  _SE,
  {
    [_e]: _ser,
    [_hE]: 500,
  },
  [_m],
  [0],

  __ServiceException
);
export var SessionSummary = struct(n0, _SSe, 0, [_sI, _aI, _cA], [0, 0, 4]);
export var ThrottledException = error(
  n0,
  _TE,
  {
    [_e]: _c,
    [_hE]: 429,
  },
  [_m],
  [0],

  __ThrottledException
);
export var ActorSummaryList = list(n0, _ASL, 0, () => ActorSummary);
export var EventList = list(n0, _EL, 0, [() => Event, 0]);
export var MemoryRecordSummaryList = list(n0, _MRSL, 0, [() => MemoryRecordSummary, 0]);
export var NamespacesList = 64 | 0;

export var PayloadTypeList = list(n0, _PTL, 0, [() => PayloadType, 0]);
export var SessionSummaryList = list(n0, _SSL, 0, () => SessionSummary);
export var Content = uni(n0, _Co, 0, [_te], [[() => SensitiveString, 0]]);
export var MemoryContent = uni(n0, _MC, 0, [_te], [[() => SensitiveString, 0]]);
export var PayloadType = uni(n0, _PT, 0, [_con, _bl], [[() => Conversational, 0], 15]);
export var CreateEvent = op(
  n0,
  _CEr,
  {
    [_ht]: ["POST", "/memories/{memoryId}/events", 200],
  },
  () => CreateEventInput,
  () => CreateEventOutput
);
export var DeleteEvent = op(
  n0,
  _DE,
  {
    [_ht]: ["DELETE", "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}", 200],
  },
  () => DeleteEventInput,
  () => DeleteEventOutput
);
export var DeleteMemoryRecord = op(
  n0,
  _DMR,
  {
    [_ht]: ["DELETE", "/memories/{memoryId}/memoryRecords/{memoryRecordId}", 200],
  },
  () => DeleteMemoryRecordInput,
  () => DeleteMemoryRecordOutput
);
export var GetEvent = op(
  n0,
  _GE,
  {
    [_ht]: ["GET", "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}", 200],
  },
  () => GetEventInput,
  () => GetEventOutput
);
export var GetMemoryRecord = op(
  n0,
  _GMR,
  {
    [_ht]: ["GET", "/memories/{memoryId}/memoryRecord/{memoryRecordId}", 200],
  },
  () => GetMemoryRecordInput,
  () => GetMemoryRecordOutput
);
export var ListActors = op(
  n0,
  _LA,
  {
    [_ht]: ["POST", "/memories/{memoryId}/actors", 200],
  },
  () => ListActorsInput,
  () => ListActorsOutput
);
export var ListEvents = op(
  n0,
  _LE,
  {
    [_ht]: ["POST", "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}", 200],
  },
  () => ListEventsInput,
  () => ListEventsOutput
);
export var ListMemoryRecords = op(
  n0,
  _LMR,
  {
    [_ht]: ["POST", "/memories/{memoryId}/memoryRecords", 200],
  },
  () => ListMemoryRecordsInput,
  () => ListMemoryRecordsOutput
);
export var ListSessions = op(
  n0,
  _LS,
  {
    [_ht]: ["POST", "/memories/{memoryId}/actor/{actorId}/sessions", 200],
  },
  () => ListSessionsInput,
  () => ListSessionsOutput
);
export var RetrieveMemoryRecords = op(
  n0,
  _RMR,
  {
    [_ht]: ["POST", "/memories/{memoryId}/retrieve", 200],
  },
  () => RetrieveMemoryRecordsInput,
  () => RetrieveMemoryRecordsOutput
);
