// smithy-typescript generated code
import { op, struct } from "@smithy/core/schema";

import { _aIDc, _ht, _RDR, _RDRR, _sSIDo, n0 } from "./schemas_0";
import { SourceServer } from "./schemas_5_Replication";

/* eslint no-var: 0 */

export var RetryDataReplicationRequest = struct(n0, _RDRR, 0, [_sSIDo, _aIDc], [0, 0]);
export var RetryDataReplication = op(
  n0,
  _RDR,
  {
    [_ht]: ["POST", "/RetryDataReplication", 200],
  },
  () => RetryDataReplicationRequest,
  () => SourceServer
);
