// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _SRRt, _SRt, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var StopReplicationRequest = struct(n0, _SRRt, 0, [_sSIDo, _aIDc], [0, 0]);
export var StopReplication = op(
  n0,
  _SRt,
  {
    [_ht]: ["POST", "/StopReplication", 200],
  },
  () => StopReplicationRequest,
  () => SourceServer
);
