// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DI, _DWe, _DWR, _WI, n0, Unit } from "./schemas_0";

/* eslint no-var: 0 */

export var DeleteWatchlistRequest = struct(n0, _DWR, 0, [_DI, _WI], [0, 0]);
export var DeleteWatchlist = op(
  n0,
  _DWe,
  0,
  () => DeleteWatchlistRequest,
  () => Unit
);
