// smithy-typescript generated code
import { list, op, struct, struct as uni } from "@smithy/core/schema";

import {
  _aS,
  _ASU,
  _ASu,
  _aSU,
  _bI,
  _BSS,
  _BSSr,
  _BSSro,
  _cA,
  _cII,
  _CISS,
  _CISSo,
  _cT,
  _GBS,
  _GBSR,
  _GBSRe,
  _GCIS,
  _GCISR,
  _GCISRe,
  _h,
  _hQ,
  _ht,
  _i,
  _LBS,
  _LBSR,
  _LBSRi,
  _LCIS,
  _LCISR,
  _LCISRi,
  _lUA,
  _LVS,
  _lVS,
  _mRa,
  _n,
  _nT,
  _SBS,
  _SBSR,
  _SBSRt,
  _SBSRto,
  _SBSRtop,
  _SBSt,
  _SCIS,
  _SCISR,
  _SCISRt,
  _SCISRto,
  _SCISRtop,
  _SCISt,
  _sE,
  _sI,
  _sRA,
  _sS,
  _st,
  _str,
  _sTS,
  _SU,
  _sU,
  _uA,
  _UBS,
  _UBSR,
  _UBSRp,
  _VP,
  _vP,
  _w,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var AutomationStream = struct(n0, _ASu, 0, [_sE, _sS], [0, 0]);
export var AutomationStreamUpdate = struct(n0, _ASU, 0, [_sS], [0]);
export var BrowserSessionStream = struct(n0, _BSS, 0, [_aS, _lVS], [() => AutomationStream, () => LiveViewStream]);
export var BrowserSessionSummary = struct(n0, _BSSr, 0, [_bI, _sI, _n, _st, _cA, _lUA], [0, 0, 0, 0, 5, 5]);
export var CodeInterpreterSessionSummary = struct(n0, _CISS, 0, [_cII, _sI, _n, _st, _cA, _lUA], [0, 0, 0, 0, 5, 5]);
export var GetBrowserSessionRequest = struct(
  n0,
  _GBSR,
  0,
  [_bI, _sI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
  ]
);
export var GetBrowserSessionResponse = struct(
  n0,
  _GBSRe,
  0,
  [_bI, _sI, _n, _cA, _vP, _sTS, _st, _str, _sRA, _lUA],
  [0, 0, 0, 5, () => ViewPort, 1, 0, () => BrowserSessionStream, 0, 5]
);
export var GetCodeInterpreterSessionRequest = struct(
  n0,
  _GCISR,
  0,
  [_cII, _sI],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
  ]
);
export var GetCodeInterpreterSessionResponse = struct(
  n0,
  _GCISRe,
  0,
  [_cII, _sI, _n, _cA, _sTS, _st],
  [0, 0, 0, 5, 1, 0]
);
export var ListBrowserSessionsRequest = struct(n0, _LBSR, 0, [_bI, _mRa, _nT, _st], [[0, 1], 1, 0, 0]);
export var ListBrowserSessionsResponse = struct(n0, _LBSRi, 0, [_i, _nT], [() => BrowserSessionSummaries, 0]);
export var ListCodeInterpreterSessionsRequest = struct(n0, _LCISR, 0, [_cII, _mRa, _nT, _st], [[0, 1], 1, 0, 0]);
export var ListCodeInterpreterSessionsResponse = struct(
  n0,
  _LCISRi,
  0,
  [_i, _nT],
  [() => CodeInterpreterSessionSummaries, 0]
);
export var LiveViewStream = struct(n0, _LVS, 0, [_sE], [0]);
export var StartBrowserSessionRequest = struct(
  n0,
  _SBSR,
  0,
  [_bI, _n, _sTS, _vP, _cT],
  [[0, 1], 0, 1, () => ViewPort, [0, 4]]
);
export var StartBrowserSessionResponse = struct(
  n0,
  _SBSRt,
  0,
  [_bI, _sI, _cA, _str],
  [0, 0, 5, () => BrowserSessionStream]
);
export var StartCodeInterpreterSessionRequest = struct(n0, _SCISR, 0, [_cII, _n, _sTS, _cT], [[0, 1], 0, 1, [0, 4]]);
export var StartCodeInterpreterSessionResponse = struct(n0, _SCISRt, 0, [_cII, _sI, _cA], [0, 0, 5]);
export var StopBrowserSessionRequest = struct(
  n0,
  _SBSRto,
  0,
  [_bI, _sI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
    [0, 4],
  ]
);
export var StopBrowserSessionResponse = struct(n0, _SBSRtop, 0, [_bI, _sI, _lUA], [0, 0, 5]);
export var StopCodeInterpreterSessionRequest = struct(
  n0,
  _SCISRto,
  0,
  [_cII, _sI, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
    [0, 4],
  ]
);
export var StopCodeInterpreterSessionResponse = struct(n0, _SCISRtop, 0, [_cII, _sI, _lUA], [0, 0, 5]);
export var UpdateBrowserStreamRequest = struct(
  n0,
  _UBSR,
  0,
  [_bI, _sI, _sU, _cT],
  [
    [0, 1],
    [
      0,
      {
        [_hQ]: _sI,
      },
    ],
    () => StreamUpdate,
    [0, 4],
  ]
);
export var UpdateBrowserStreamResponse = struct(
  n0,
  _UBSRp,
  0,
  [_bI, _sI, _str, _uA],
  [0, 0, () => BrowserSessionStream, 5]
);
export var ViewPort = struct(n0, _VP, 0, [_w, _h], [1, 1]);
export var BrowserSessionSummaries = list(n0, _BSSro, 0, () => BrowserSessionSummary);
export var CodeInterpreterSessionSummaries = list(n0, _CISSo, 0, () => CodeInterpreterSessionSummary);
export var StreamUpdate = uni(n0, _SU, 0, [_aSU], [() => AutomationStreamUpdate]);
export var GetBrowserSession = op(
  n0,
  _GBS,
  {
    [_ht]: ["GET", "/browsers/{browserIdentifier}/sessions/get", 200],
  },
  () => GetBrowserSessionRequest,
  () => GetBrowserSessionResponse
);
export var GetCodeInterpreterSession = op(
  n0,
  _GCIS,
  {
    [_ht]: ["GET", "/code-interpreters/{codeInterpreterIdentifier}/sessions/get", 200],
  },
  () => GetCodeInterpreterSessionRequest,
  () => GetCodeInterpreterSessionResponse
);
export var ListBrowserSessions = op(
  n0,
  _LBS,
  {
    [_ht]: ["POST", "/browsers/{browserIdentifier}/sessions/list", 200],
  },
  () => ListBrowserSessionsRequest,
  () => ListBrowserSessionsResponse
);
export var ListCodeInterpreterSessions = op(
  n0,
  _LCIS,
  {
    [_ht]: ["POST", "/code-interpreters/{codeInterpreterIdentifier}/sessions/list", 200],
  },
  () => ListCodeInterpreterSessionsRequest,
  () => ListCodeInterpreterSessionsResponse
);
export var StartBrowserSession = op(
  n0,
  _SBS,
  {
    [_ht]: ["PUT", "/browsers/{browserIdentifier}/sessions/start", 200],
  },
  () => StartBrowserSessionRequest,
  () => StartBrowserSessionResponse
);
export var StartCodeInterpreterSession = op(
  n0,
  _SCIS,
  {
    [_ht]: ["PUT", "/code-interpreters/{codeInterpreterIdentifier}/sessions/start", 200],
  },
  () => StartCodeInterpreterSessionRequest,
  () => StartCodeInterpreterSessionResponse
);
export var StopBrowserSession = op(
  n0,
  _SBSt,
  {
    [_ht]: ["PUT", "/browsers/{browserIdentifier}/sessions/stop", 200],
  },
  () => StopBrowserSessionRequest,
  () => StopBrowserSessionResponse
);
export var StopCodeInterpreterSession = op(
  n0,
  _SCISt,
  {
    [_ht]: ["PUT", "/code-interpreters/{codeInterpreterIdentifier}/sessions/stop", 200],
  },
  () => StopCodeInterpreterSessionRequest,
  () => StopCodeInterpreterSessionResponse
);
export var UpdateBrowserStream = op(
  n0,
  _UBS,
  {
    [_ht]: ["PUT", "/browsers/{browserIdentifier}/sessions/streams/update", 200],
  },
  () => UpdateBrowserStreamRequest,
  () => UpdateBrowserStreamResponse
);
