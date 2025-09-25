// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import { _cDT, _dGA, _eTA, _ETS, _ETv, _eTve, _LET, _LETR, _LETRi, _lUDT, _mRa, _n, _nT, _s, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var EventTrackerSummary = struct(n0, _ETS, 0, [_n, _eTA, _s, _cDT, _lUDT], [0, 0, 0, 4, 4]);
export var ListEventTrackersRequest = struct(n0, _LETR, 0, [_dGA, _nT, _mRa], [0, 0, 1]);
export var ListEventTrackersResponse = struct(n0, _LETRi, 0, [_eTve, _nT], [() => EventTrackers, 0]);
export var EventTrackers = list(n0, _ETv, 0, () => EventTrackerSummary);
export var ListEventTrackers = op(
  n0,
  _LET,
  2,
  () => ListEventTrackersRequest,
  () => ListEventTrackersResponse
);
