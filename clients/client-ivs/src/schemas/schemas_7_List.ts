// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _a,
  _cA,
  _eTn,
  _fB,
  _h,
  _hEE,
  _ht,
  _kPe,
  _LPKP,
  _LPKPR,
  _LPKPRi,
  _LS,
  _LSK,
  _LSKR,
  _LSKRi,
  _LSR,
  _LSRi,
  _LSS,
  _LSSR,
  _LSSRi,
  _mR,
  _n,
  _nT,
  _PKPL,
  _PKPS,
  _SF,
  _sI,
  _sK,
  _SKL,
  _SKS,
  _SL,
  _SSL,
  _SSS,
  _SSt,
  _sSt,
  _sT,
  _sta,
  _str,
  _ta,
  _vCi,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var ListPlaybackKeyPairsRequest = struct(n0, _LPKPR, 0, [_nT, _mR], [0, 1]);
export var ListPlaybackKeyPairsResponse = struct(n0, _LPKPRi, 0, [_kPe, _nT], [() => PlaybackKeyPairList, 0]);
export var ListStreamKeysRequest = struct(n0, _LSKR, 0, [_cA, _nT, _mR], [0, 0, 1]);
export var ListStreamKeysResponse = struct(n0, _LSKRi, 0, [_sK, _nT], [() => StreamKeyList, 0]);
export var ListStreamSessionsRequest = struct(n0, _LSSR, 0, [_cA, _nT, _mR], [0, 0, 1]);
export var ListStreamSessionsResponse = struct(n0, _LSSRi, 0, [_sSt, _nT], [() => StreamSessionList, 0]);
export var ListStreamsRequest = struct(n0, _LSR, 0, [_fB, _nT, _mR], [() => StreamFilters, 0, 1]);
export var ListStreamsResponse = struct(n0, _LSRi, 0, [_str, _nT], [() => StreamList, 0]);
export var PlaybackKeyPairSummary = struct(n0, _PKPS, 0, [_a, _n, _ta], [0, 0, 128 | 0]);
export var StreamFilters = struct(n0, _SF, 0, [_h], [0]);
export var StreamKeySummary = struct(n0, _SKS, 0, [_a, _cA, _ta], [0, 0, 128 | 0]);
export var StreamSessionSummary = struct(n0, _SSS, 0, [_sI, _sT, _eTn, _hEE], [0, 5, 5, 2]);
export var StreamSummary = struct(n0, _SSt, 0, [_cA, _sI, _sta, _h, _vCi, _sT], [0, 0, 0, 0, 1, 5]);
export var PlaybackKeyPairList = list(n0, _PKPL, 0, () => PlaybackKeyPairSummary);
export var StreamKeyList = list(n0, _SKL, 0, () => StreamKeySummary);
export var StreamList = list(n0, _SL, 0, () => StreamSummary);
export var StreamSessionList = list(n0, _SSL, 0, () => StreamSessionSummary);
export var ListPlaybackKeyPairs = op(
  n0,
  _LPKP,
  {
    [_ht]: ["POST", "/ListPlaybackKeyPairs", 200],
  },
  () => ListPlaybackKeyPairsRequest,
  () => ListPlaybackKeyPairsResponse
);
export var ListStreamKeys = op(
  n0,
  _LSK,
  {
    [_ht]: ["POST", "/ListStreamKeys", 200],
  },
  () => ListStreamKeysRequest,
  () => ListStreamKeysResponse
);
export var ListStreams = op(
  n0,
  _LS,
  {
    [_ht]: ["POST", "/ListStreams", 200],
  },
  () => ListStreamsRequest,
  () => ListStreamsResponse
);
export var ListStreamSessions = op(
  n0,
  _LSS,
  {
    [_ht]: ["POST", "/ListStreamSessions", 200],
  },
  () => ListStreamSessionsRequest,
  () => ListStreamSessionsResponse
);
