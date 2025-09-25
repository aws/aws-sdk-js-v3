// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _eT,
  _GRDLE,
  _GRDLER,
  _GRDLERe,
  _ht,
  _LE,
  _LEL,
  _lSN,
  _m,
  _nBT,
  _nFT,
  _pT,
  _rDN,
  _rLE,
  _sFH,
  _sT,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelationalDatabaseLogEventsRequest = struct(
  n0,
  _GRDLER,
  0,
  [_rDN, _lSN, _sT, _eT, _sFH, _pT],
  [0, 0, 4, 4, 2, 0]
);
export var GetRelationalDatabaseLogEventsResult = struct(
  n0,
  _GRDLERe,
  0,
  [_rLE, _nBT, _nFT],
  [() => LogEventList, 0, 0]
);
export var LogEvent = struct(n0, _LE, 0, [_cA, _m], [4, 0]);
export var LogEventList = list(n0, _LEL, 0, () => LogEvent);
export var GetRelationalDatabaseLogEvents = op(
  n0,
  _GRDLE,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseLogEvents", 200],
  },
  () => GetRelationalDatabaseLogEventsRequest,
  () => GetRelationalDatabaseLogEventsResult
);
