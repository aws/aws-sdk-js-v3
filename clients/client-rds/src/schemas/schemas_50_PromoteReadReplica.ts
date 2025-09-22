// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _BRP, _DBI, _DBII, _PBW, _PRR, _PRRM, _PRRR, DBInstance, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var PromoteReadReplicaMessage = struct(n0, _PRRM, 0, [_DBII, _BRP, _PBW], [0, 1, 0]);
export var PromoteReadReplicaResult = struct(n0, _PRRR, 0, [_DBI], [[() => DBInstance, 0]]);
export var PromoteReadReplica = op(
  n0,
  _PRR,
  0,
  () => PromoteReadReplicaMessage,
  () => PromoteReadReplicaResult
);
