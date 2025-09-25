// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _SR, _SRR, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var StartReplicationRequest = struct(n0, _SRR, 0, [_sSIDo, _aIDc], [0, 0]);
export var StartReplication = op(
  n0,
  _SR,
  {
    [_ht]: ["POST", "/StartReplication", 200],
  },
  () => StartReplicationRequest,
  () => SourceServer
);
