// smithy-typescript generated code
import { error, list, op, struct } from "@smithy/core/schema";

import {
  DataAlreadyAcceptedException as __DataAlreadyAcceptedException,
  InvalidSequenceTokenException as __InvalidSequenceTokenException,
  UnrecognizedClientException as __UnrecognizedClientException,
} from "../models/index";
import {
  _at,
  _c,
  _CETr,
  _CETRr,
  _CETRre,
  _CLS,
  _CLSR,
  _DAAE,
  _des,
  _DLS,
  _DLSR,
  _dP,
  _E,
  _e,
  _eLEEI,
  _ent,
  _eST,
  _eTn,
  _eTr,
  _ev,
  _f,
  _GLE,
  _GLER,
  _GLERe,
  _ILE,
  _ILEn,
  _ISTE,
  _iT,
  _kA,
  _lE,
  _lGI,
  _lGN,
  _li,
  _lSN,
  _lSNP,
  _m,
  _nBT,
  _nFT,
  _nST,
  _nT,
  _OLE,
  _OLEu,
  _PLE,
  _PLER,
  _PLERu,
  _REI,
  _rEI,
  _RLEI,
  _rLEI,
  _sFH,
  _sTe,
  _sTt,
  _tI,
  _ti,
  _tN,
  _tNLESI,
  _to,
  _tOLEEI,
  _u,
  _UCE,
  n0,
  Unit,
} from "./schemas_0";

/* eslint no-var: 0 */

export var CreateExportTaskRequest = struct(
  n0,
  _CETRr,
  0,
  [_tN, _lGN, _lSNP, _f, _to, _des, _dP],
  [0, 0, 0, 1, 1, 0, 0]
);
export var CreateExportTaskResponse = struct(n0, _CETRre, 0, [_tI], [0]);
export var CreateLogStreamRequest = struct(n0, _CLSR, 0, [_lGN, _lSN], [0, 0]);
export var DataAlreadyAcceptedException = error(
  n0,
  _DAAE,
  {
    [_e]: _c,
  },
  [_eST, _m],
  [0, 0],

  __DataAlreadyAcceptedException
);
export var DeleteLogStreamRequest = struct(n0, _DLSR, 0, [_lGN, _lSN], [0, 0]);
export var Entity = struct(n0, _E, 0, [_kA, _at], [128 | 0, 128 | 0]);
export var GetLogEventsRequest = struct(
  n0,
  _GLER,
  0,
  [_lGN, _lGI, _lSN, _sTt, _eTn, _nT, _li, _sFH, _u],
  [0, 0, 0, 1, 1, 0, 1, 2, 2]
);
export var GetLogEventsResponse = struct(n0, _GLERe, 0, [_ev, _nFT, _nBT], [() => OutputLogEvents, 0, 0]);
export var InputLogEvent = struct(n0, _ILE, 0, [_ti, _m], [1, 0]);
export var InvalidSequenceTokenException = error(
  n0,
  _ISTE,
  {
    [_e]: _c,
  },
  [_eST, _m],
  [0, 0],

  __InvalidSequenceTokenException
);
export var OutputLogEvent = struct(n0, _OLE, 0, [_ti, _m, _iT], [1, 0, 1]);
export var PutLogEventsRequest = struct(
  n0,
  _PLER,
  0,
  [_lGN, _lSN, _lE, _sTe, _ent],
  [0, 0, () => InputLogEvents, 0, () => Entity]
);
export var PutLogEventsResponse = struct(
  n0,
  _PLERu,
  0,
  [_nST, _rLEI, _rEI],
  [0, () => RejectedLogEventsInfo, () => RejectedEntityInfo]
);
export var RejectedEntityInfo = struct(n0, _REI, 0, [_eTr], [0]);
export var RejectedLogEventsInfo = struct(n0, _RLEI, 0, [_tNLESI, _tOLEEI, _eLEEI], [1, 1, 1]);
export var UnrecognizedClientException = error(
  n0,
  _UCE,
  {
    [_e]: _c,
  },
  [_m],
  [0],

  __UnrecognizedClientException
);
export var InputLogEvents = list(n0, _ILEn, 0, () => InputLogEvent);
export var OutputLogEvents = list(n0, _OLEu, 0, () => OutputLogEvent);
export var EntityAttributes = 128 | 0;

export var EntityKeyAttributes = 128 | 0;

export var CreateExportTask = op(
  n0,
  _CETr,
  0,
  () => CreateExportTaskRequest,
  () => CreateExportTaskResponse
);
export var CreateLogStream = op(
  n0,
  _CLS,
  0,
  () => CreateLogStreamRequest,
  () => Unit
);
export var DeleteLogStream = op(
  n0,
  _DLS,
  0,
  () => DeleteLogStreamRequest,
  () => Unit
);
export var GetLogEvents = op(
  n0,
  _GLE,
  0,
  () => GetLogEventsRequest,
  () => GetLogEventsResponse
);
export var PutLogEvents = op(
  n0,
  _PLE,
  0,
  () => PutLogEventsRequest,
  () => PutLogEventsResponse
);
