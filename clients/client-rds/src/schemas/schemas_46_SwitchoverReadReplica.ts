// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _DBI, _DBII, _SRRM, _SRRR, _SRRw, DBInstance, n0 } from "./schemas_0";

/* eslint no-var: 0 */

export var SwitchoverReadReplicaMessage = struct(n0, _SRRM, 0, [_DBII], [0]);
export var SwitchoverReadReplicaResult = struct(n0, _SRRR, 0, [_DBI], [[() => DBInstance, 0]]);
export var SwitchoverReadReplica = op(
  n0,
  _SRRw,
  0,
  () => SwitchoverReadReplicaMessage,
  () => SwitchoverReadReplicaResult
);
