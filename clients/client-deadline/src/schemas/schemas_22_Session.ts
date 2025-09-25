// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cT,
  _eA,
  _end,
  _fI,
  _fIl,
  _h,
  _hH,
  _hQ,
  _iT,
  _jI,
  _lS,
  _LSFW,
  _LSFWR,
  _LSFWRi,
  _LSFWS,
  _LSis,
  _LSR,
  _LSRi,
  _mR,
  _nT,
  _qI,
  _sAt,
  _ses,
  _sIe,
  _SS,
  _SSe,
  _tLS,
  _uA,
  _uB,
  _US,
  _USR,
  _USRp,
  _wI,
  _WSSo,
  _XACT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListSessionsForWorkerRequest = struct(
  n0,
  _LSFWR,
  0,
  [_fI, _fIl, _wI, _nT, _mR],
  [
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
export var ListSessionsForWorkerResponse = struct(
  n0,
  _LSFWRi,
  0,
  [_ses, _nT],
  [() => ListSessionsForWorkerSummaries, 0]
);
export var ListSessionsRequest = struct(
  n0,
  _LSR,
  0,
  [_fI, _qI, _jI, _nT, _mR],
  [
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
export var ListSessionsResponse = struct(n0, _LSRi, 0, [_ses, _nT], [() => SessionSummaries, 0]);
export var SessionSummary = struct(
  n0,
  _SS,
  0,
  [_sIe, _fIl, _wI, _sAt, _lS, _eA, _uA, _uB, _tLS],
  [0, 0, 0, 5, 0, 5, 5, 0, 0]
);
export var UpdateSessionRequest = struct(
  n0,
  _USR,
  0,
  [_cT, _tLS, _fI, _qI, _jI, _sIe],
  [
    [
      0,
      {
        [_hH]: _XACT,
        [_iT]: 1,
      },
    ],
    0,
    [0, 1],
    [0, 1],
    [0, 1],
    [0, 1],
  ]
);
export var UpdateSessionResponse = struct(n0, _USRp, 0, [], []);
export var WorkerSessionSummary = struct(n0, _WSSo, 0, [_sIe, _qI, _jI, _sAt, _lS, _eA, _tLS], [0, 0, 0, 5, 0, 5, 0]);
export var ListSessionsForWorkerSummaries = list(n0, _LSFWS, 0, () => WorkerSessionSummary);
export var SessionSummaries = list(n0, _SSe, 0, () => SessionSummary);
export var ListSessions = op(
  n0,
  _LSis,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions", 200],
  },
  () => ListSessionsRequest,
  () => ListSessionsResponse
);
export var ListSessionsForWorker = op(
  n0,
  _LSFW,
  {
    [_end]: ["management."],
    [_h]: ["GET", "/2023-10-12/farms/{farmId}/fleets/{fleetId}/workers/{workerId}/sessions", 200],
  },
  () => ListSessionsForWorkerRequest,
  () => ListSessionsForWorkerResponse
);
export var UpdateSession = op(
  n0,
  _US,
  {
    [_h]: ["PATCH", "/2023-10-12/farms/{farmId}/queues/{queueId}/jobs/{jobId}/sessions/{sessionId}", 200],
    [_end]: ["management."],
  },
  () => UpdateSessionRequest,
  () => UpdateSessionResponse
);
