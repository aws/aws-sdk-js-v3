// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _rDN, _RRD, _RRDR, _RRDRe, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootRelationalDatabaseRequest = struct(n0, _RRDR, 0, [_rDN], [0]);
export var RebootRelationalDatabaseResult = struct(n0, _RRDRe, 0, [_o], [() => OperationList]);
export var RebootRelationalDatabase = op(
  n0,
  _RRD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/RebootRelationalDatabase", 200],
  },
  () => RebootRelationalDatabaseRequest,
  () => RebootRelationalDatabaseResult
);
