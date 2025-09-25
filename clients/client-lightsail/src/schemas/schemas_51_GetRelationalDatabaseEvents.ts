// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _cA,
  _dIM,
  _eCv,
  _GRDE,
  _GRDER,
  _GRDERe,
  _ht,
  _m,
  _nPT,
  _pT,
  _rDE,
  _RDEe,
  _RDEL,
  _rDN,
  _res,
  n0,
} from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelationalDatabaseEventsRequest = struct(n0, _GRDER, 0, [_rDN, _dIM, _pT], [0, 1, 0]);
export var GetRelationalDatabaseEventsResult = struct(
  n0,
  _GRDERe,
  0,
  [_rDE, _nPT],
  [() => RelationalDatabaseEventList, 0]
);
export var RelationalDatabaseEvent = struct(n0, _RDEe, 0, [_res, _cA, _m, _eCv], [0, 4, 0, 64 | 0]);
export var RelationalDatabaseEventList = list(n0, _RDEL, 0, () => RelationalDatabaseEvent);
export var GetRelationalDatabaseEvents = op(
  n0,
  _GRDE,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseEvents", 200],
  },
  () => GetRelationalDatabaseEventsRequest,
  () => GetRelationalDatabaseEventsResult
);
