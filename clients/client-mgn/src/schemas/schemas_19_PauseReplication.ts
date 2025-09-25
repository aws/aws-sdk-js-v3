// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _PR, _PRR, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var PauseReplicationRequest = struct(n0, _PRR, 0, [_sSIDo, _aIDc], [0, 0]);
export var PauseReplication = op(
  n0,
  _PR,
  {
    [_ht]: ["POST", "/PauseReplication", 200],
  },
  () => PauseReplicationRequest,
  () => SourceServer
);
