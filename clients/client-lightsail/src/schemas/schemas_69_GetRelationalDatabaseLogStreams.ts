// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _GRDLS, _GRDLSR, _GRDLSRe, _ht, _lS, _rDN, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var GetRelationalDatabaseLogStreamsRequest = struct(n0, _GRDLSR, 0, [_rDN], [0]);
export var GetRelationalDatabaseLogStreamsResult = struct(n0, _GRDLSRe, 0, [_lS], [64 | 0]);
export var GetRelationalDatabaseLogStreams = op(
  n0,
  _GRDLS,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/GetRelationalDatabaseLogStreams", 200],
  },
  () => GetRelationalDatabaseLogStreamsRequest,
  () => GetRelationalDatabaseLogStreamsResult
);
