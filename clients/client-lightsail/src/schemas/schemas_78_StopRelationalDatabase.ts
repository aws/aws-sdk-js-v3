// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _ht, _o, _rDN, _rDSN, _SRDRto, _SRDRtop, _SRDt, n0, OperationList } from "./schemas_0";

/* eslint no-var: 0 */

export var StopRelationalDatabaseRequest = struct(n0, _SRDRto, 0, [_rDN, _rDSN], [0, 0]);
export var StopRelationalDatabaseResult = struct(n0, _SRDRtop, 0, [_o], [() => OperationList]);
export var StopRelationalDatabase = op(
  n0,
  _SRDt,
  {
    [_ht]: ["POST", "/ls/api/2016-11-28/StopRelationalDatabase", 200],
  },
  () => StopRelationalDatabaseRequest,
  () => StopRelationalDatabaseResult
);
