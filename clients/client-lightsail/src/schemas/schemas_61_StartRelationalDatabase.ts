// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _rDN, _SRD, _SRDR, _SRDRt, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var StartRelationalDatabaseRequest = struct(n0, _SRDR, 0, [_rDN], [0]);
export var StartRelationalDatabaseResult = struct(n0, _SRDRt, 0, [_o], [() => OperationList]);
export var StartRelationalDatabase = op(
  n0,
  _SRD,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/StartRelationalDatabase", 200],
  },
  () => StartRelationalDatabaseRequest,
  () => StartRelationalDatabaseResult
);
