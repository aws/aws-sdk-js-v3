// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBI, _DBII, _FF, _RDBIeb, _RDBIM, _RDBIR, DBInstance, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var RebootDBInstanceMessage = struct(n0, _RDBIM, 0, [_DBII, _FF], [0, 2]);
export var RebootDBInstanceResult = struct(n0, _RDBIR, 0, [_DBI], [[() => DBInstance, 0]]);
export var RebootDBInstance = op(
  n0,
  _RDBIeb,
  0,
  () => RebootDBInstanceMessage,
  () => RebootDBInstanceResult
);
