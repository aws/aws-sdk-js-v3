// smithy-typescript generated code
import { op, sim, struct } from "@smithy/core/schema";

import { _CA, _D, _DI, _DW, _DWes, _DWRe, _DWRes, _N, _UA, _UW, _UWR, _UWRp, _W, _WD, _WI, _WN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var WatchlistDescription = sim(n0, _WD, 0, 8);
export var WatchlistName = sim(n0, _WN, 0, 8);
export var DescribeWatchlistRequest = struct(n0, _DWRe, 0, [_DI, _WI], [0, 0]);
export var DescribeWatchlistResponse = struct(n0, _DWRes, 0, [_W], [[() => Watchlist, 0]]);
export var UpdateWatchlistRequest = struct(
  n0,
  _UWR,
  0,
  [_DI, _WI, _N, _D],
  [0, 0, [() => WatchlistName, 0], [() => WatchlistDescription, 0]]
);
export var UpdateWatchlistResponse = struct(n0, _UWRp, 0, [_W], [[() => Watchlist, 0]]);
export var Watchlist = struct(
  n0,
  _W,
  0,
  [_DI, _WI, _N, _D, _DW, _CA, _UA],
  [0, 0, [() => WatchlistName, 0], [() => WatchlistDescription, 0], 2, 4, 4]
);
export var DescribeWatchlist = op(
  n0,
  _DWes,
  0,
  () => DescribeWatchlistRequest,
  () => DescribeWatchlistResponse
);
export var UpdateWatchlist = op(
  n0,
  _UW,
  0,
  () => UpdateWatchlistRequest,
  () => UpdateWatchlistResponse
);
