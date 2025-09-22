// smithy-typescript generated code
import { list, op, sim, struct } from "@smithy/core/schema";

import {
  _cIA,
  _eT,
  _GS,
  _GSR,
  _GSRe,
  _h,
  _hQ,
  _IA,
  _IAL,
  _LS,
  _LSR,
  _LSRi,
  _mR,
  _nT,
  _pA,
  _pI,
  _S,
  _sB,
  _se,
  _ses,
  _sIe,
  _SS,
  _SSL,
  _sT,
  _st,
  _U,
  _u,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var IpAddress = sim(n0, _IA, 0, 8);
export var Username = sim(n0, _U, 0, 8);
export var GetSessionRequest = struct(
  n0,
  _GSR,
  0,
  [_pI, _sIe],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetSessionResponse = struct(n0, _GSRe, 0, [_se], [[() => Session, 0]]);
export var ListSessionsRequest = struct(
  n0,
  _LSR,
  0,
  [_pI, _u, _sIe, _sB, _st, _mR, _nT],
  [
    [0, 1],
    [
      () => Username,
      {
        [_hQ]: _u,
      },
    ],
    [
      0,
      {
        [_hQ]: _sIe,
      },
    ],
    [
      0,
      {
        [_hQ]: _sB,
      },
    ],
    [
      0,
      {
        [_hQ]: _st,
      },
    ],
    [
      1,
      {
        [_hQ]: _mR,
      },
    ],
    [
      0,
      {
        [_hQ]: _nT,
      },
    ],
  ]
);
export var ListSessionsResponse = struct(n0, _LSRi, 0, [_ses, _nT], [[() => SessionSummaryList, 0], 0]);
export var Session = struct(
  n0,
  _S,
  0,
  [_pA, _sIe, _u, _cIA, _st, _sT, _eT],
  [0, 0, [() => Username, 0], [() => IpAddressList, 0], 0, 4, 4]
);
export var SessionSummary = struct(n0, _SS, 0, [_pA, _sIe, _u, _st, _sT, _eT], [0, 0, [() => Username, 0], 0, 4, 4]);
export var Unit = "unit" as const;

export var IpAddressList = list(n0, _IAL, 0, [() => IpAddress, 0]);
export var SessionSummaryList = list(n0, _SSL, 0, [() => SessionSummary, 0]);
export var GetSession = op(
  n0,
  _GS,
  {
    [_h]: ["GET", "/portals/{portalId}/sessions/{sessionId}", 200],
  },
  () => GetSessionRequest,
  () => GetSessionResponse
);
export var ListSessions = op(
  n0,
  _LS,
  {
    [_h]: ["GET", "/portals/{portalId}/sessions", 200],
  },
  () => ListSessionsRequest,
  () => ListSessionsResponse
);
