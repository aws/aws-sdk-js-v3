// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _CA,
  _CSI,
  _D,
  _DI,
  _DW,
  _FS,
  _FSr,
  _GFI,
  _GSI,
  _LAA,
  _LF,
  _LFR,
  _LFRi,
  _LS,
  _LSR,
  _LSRi,
  _LW,
  _LWR,
  _LWRi,
  _MR,
  _N,
  _NT,
  _SSp,
  _SSpe,
  _St,
  _UA,
  _WI,
  _WIa,
  _WS,
  _WSa,
  n0,
} from "./schemas_0";
import { WatchlistDescription, WatchlistName } from "./schemas_9_Watchlist";
import { CustomerSpeakerId } from "./schemas_10_Speaker";

/* eslint no-var: 0 */

export var FraudsterSummary = struct(n0, _FS, 0, [_DI, _GFI, _CA, _WIa], [0, 0, 4, 64 | 0]);
export var ListFraudstersRequest = struct(n0, _LFR, 0, [_DI, _WI, _MR, _NT], [0, 0, 1, 0]);
export var ListFraudstersResponse = struct(n0, _LFRi, 0, [_FSr, _NT], [() => FraudsterSummaries, 0]);
export var ListSpeakersRequest = struct(n0, _LSR, 0, [_DI, _MR, _NT], [0, 1, 0]);
export var ListSpeakersResponse = struct(n0, _LSRi, 0, [_SSp, _NT], [[() => SpeakerSummaries, 0], 0]);
export var ListWatchlistsRequest = struct(n0, _LWR, 0, [_DI, _MR, _NT], [0, 1, 0]);
export var ListWatchlistsResponse = struct(n0, _LWRi, 0, [_WS, _NT], [[() => WatchlistSummaries, 0], 0]);
export var SpeakerSummary = struct(
  n0,
  _SSpe,
  0,
  [_DI, _CSI, _GSI, _St, _CA, _UA, _LAA],
  [0, [() => CustomerSpeakerId, 0], 0, 0, 4, 4, 4]
);
export var WatchlistSummary = struct(
  n0,
  _WSa,
  0,
  [_DI, _WI, _N, _D, _DW, _CA, _UA],
  [0, 0, [() => WatchlistName, 0], [() => WatchlistDescription, 0], 2, 4, 4]
);
export var FraudsterSummaries = list(n0, _FSr, 0, () => FraudsterSummary);
export var SpeakerSummaries = list(n0, _SSp, 0, [() => SpeakerSummary, 0]);
export var WatchlistSummaries = list(n0, _WS, 0, [() => WatchlistSummary, 0]);
export var ListFraudsters = op(
  n0,
  _LF,
  0,
  () => ListFraudstersRequest,
  () => ListFraudstersResponse
);
export var ListSpeakers = op(
  n0,
  _LS,
  0,
  () => ListSpeakersRequest,
  () => ListSpeakersResponse
);
export var ListWatchlists = op(
  n0,
  _LW,
  0,
  () => ListWatchlistsRequest,
  () => ListWatchlistsResponse
);
